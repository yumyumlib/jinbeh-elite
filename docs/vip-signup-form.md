# Jinbeh VIP Club Form — Engineering Runbook

**Environment:** staging.jinbeh.com and jinbeh.com (same Hostinger VPS).
**Architecture in one sentence:** Website form → nginx on Hostinger VPS → n8n on localhost → Google Sheets. No third-party hop, no Cloudflare required.
**Target sheet:** https://docs.google.com/spreadsheets/d/1eOpfQVdTfZh_Tb8NjFxGggVXd3b6cABQIsqKDbb15Z8/edit?gid=0#gid=0
**Form fields:** First Name, Last Name, Email, Preferred Location (Frisco / Lewisville), Birthday (MM/DD), plus hidden honeypot and consent checkbox.

---

## 0. TL;DR

The historical error `Server configuration error: Please setup Google Service credentials` came from server-side code that tried to authenticate with a Google Service Account JSON key that is not installed on the VPS. That code and the `/api/vip-club/route.ts` file have been removed. The new architecture:

1. Frontend component `src/components/VipClubForm.tsx` does a same-origin POST to `/api/vip-signup`.
2. nginx handles `/api/vip-signup` on the VPS: rate-limits, injects the `X-VIP-Secret` header, and reverse-proxies to n8n on `127.0.0.1:5678`.
3. n8n validates the payload, hashes the client IP with a daily-rotating salt, and appends a row to the Google Sheet via its OAuth2 credential.
4. fail2ban bans IPs that hit the rate limit repeatedly.

| Layer | Tool | Responsibility |
|---|---|---|
| Edge of the VPS | nginx | TLS termination, rate limit, shared-secret injection, reverse proxy |
| Automation hub | n8n (localhost only) | Validate, dedupe, hash IP, append to Google Sheets |
| Storage | Google Sheets | Authoritative VIP list, authenticated via n8n OAuth (no service account) |
| Abuse mitigation | fail2ban | Bans IPs that trip the rate limit repeatedly |
| TLS | Let's Encrypt via certbot or Hostinger hPanel | Auto-renewing SSL |

Nothing third-party. No Cloudflare, no external SaaS, no service-account key to rotate.

---

## 1. Target Sheet Structure

Open the target sheet and configure exactly as follows before any code testing.

### 1.1 Rename the first tab to `VIP_Signups`

### 1.2 Column headers (Row 1)

| Col | Header | Type | Notes |
|-----|--------|------|-------|
| A | `timestamp` | ISO 8601 UTC datetime | Inserted by n8n |
| B | `first_name` | Text | Trimmed, max 80 chars |
| C | `last_name` | Text | Trimmed, max 80 chars |
| D | `email` | Text (validated) | Lowercased, trimmed |
| E | `location` | Enum text | `Frisco` or `Lewisville` only |
| F | `birthday_mmdd` | Text | `MM/DD` format, zero-padded |
| G | `source` | Text | Page path that submitted, or `vip-club-form-v1` |
| H | `ip_hash` | Text | SHA-256 hex of `ip + daily_salt`, truncated to 16 chars |
| I | `user_agent` | Text | Optional, truncated to 255 chars |
| J | `consent` | Boolean | `TRUE` if consent checkbox was checked |
| K | `utm_source` | Text | Optional, from URL |
| L | `utm_medium` | Text | Optional |
| M | `utm_campaign` | Text | Optional |
| N | `notes` | Text | Free-form, for staff annotations |

### 1.3 Formatting and validation

- Freeze Row 1 (`View → Freeze → 1 row`).
- Column F `birthday_mmdd` → format as Plain Text (not Date), otherwise `01/02` becomes `1/2/2026`. Select the column, then `Format → Number → Plain text`.
- Column E `location` → Data validation → Criteria: Dropdown (from a range), pointing at `Config!A1:A2`.
- Column A `timestamp` → format as `yyyy-mm-dd hh:mm:ss` for readability.

### 1.4 Add a `Config` tab

Create a second tab called `Config`. In cells `A1:A2` put:

```
Frisco
Lewisville
```

Then point Column E's data validation at `Config!A1:A2`. Prevents accidentally recording `frisco` or `Lewiseville`.

### 1.5 Add a `Birthdays_Upcoming` tab (optional, high-value)

Create a third tab called `Birthdays_Upcoming` with this formula in `A1`:

```
=QUERY(VIP_Signups!A:N, "SELECT B, C, D, E, F WHERE F IS NOT NULL ORDER BY F ASC", 1)
```

Gives the in-store team a zero-effort daily view.

### 1.6 Sharing

- Owner: `YumYumJinbeh@gmail.com`.
- Editor access: Darrell and any manager who needs to annotate.
- Do NOT make the sheet public. Access is granted via n8n's Google OAuth, which authenticates as the owner.

---

## 2. n8n Workflow (runs on the VPS at 127.0.0.1:5678)

### 2.1 Confirm n8n is bound to localhost only

In n8n's startup environment (usually `/etc/systemd/system/n8n.service` or a `.env` file the service reads):

```bash
N8N_HOST=127.0.0.1
N8N_LISTEN_ADDRESS=127.0.0.1
N8N_PORT=5678
N8N_PROTOCOL=http
WEBHOOK_URL=https://staging.jinbeh.com/api/
```

Restart: `sudo systemctl restart n8n`.

Verify:

```bash
sudo ss -tulpn | grep 5678
# Expected: 127.0.0.1:5678 listening, NOT 0.0.0.0:5678
```

Firewall belt-and-suspenders:

```bash
sudo ufw deny 5678
sudo ufw reload
```

### 2.2 Create the workflow

In n8n, create a workflow named `VIP Club Signup`.

**Node 1 — Webhook trigger**

- Node type: `Webhook`.
- HTTP method: `POST`.
- Path: `vip-club-signup` (URL becomes `http://127.0.0.1:5678/webhook/vip-club-signup`).
- Authentication: `Header Auth`. Create a credential named `VIP Form Secret` with Name `X-VIP-Secret` and Value generated by `openssl rand -hex 32` (32+ chars).
- Response mode: `Using 'Respond to Webhook' node`.
- Options → Raw body: `false`, so n8n parses JSON automatically.

**Node 2 — Code (JavaScript): Validate and normalize**

```javascript
const body = $input.first().json.body || $input.first().json;

// 1. Honeypot — bots fill the hidden "website" field; humans never do
if (body.website && body.website.trim() !== '') {
  return [{ json: { reject: true, reason: 'honeypot' } }];
}

// 2. Required fields
const required = ['first_name', 'last_name', 'email', 'location', 'birthday_mmdd'];
for (const f of required) {
  if (!body[f] || String(body[f]).trim() === '') {
    return [{ json: { reject: true, reason: `missing_${f}` } }];
  }
}

// 3. Email validation
const email = String(body.email).trim().toLowerCase();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
  return [{ json: { reject: true, reason: 'invalid_email' } }];
}

// 4. Location must be one of the two
const location = String(body.location).trim();
if (!['Frisco', 'Lewisville'].includes(location)) {
  return [{ json: { reject: true, reason: 'invalid_location' } }];
}

// 5. Birthday must be MM/DD
const bday = String(body.birthday_mmdd).trim();
if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/.test(bday)) {
  return [{ json: { reject: true, reason: 'invalid_birthday' } }];
}

// 6. Hash IP with daily rotating salt (privacy-friendly dedupe)
const crypto = require('crypto');
const ip = $input.first().json.headers?.['x-forwarded-for']?.split(',')[0]?.trim() || '';
const daySalt = new Date().toISOString().slice(0, 10);
const ip_hash = ip ? crypto.createHash('sha256').update(ip + daySalt).digest('hex').slice(0, 16) : '';

return [{
  json: {
    reject: false,
    timestamp: new Date().toISOString(),
    first_name: String(body.first_name).trim().slice(0, 80),
    last_name: String(body.last_name).trim().slice(0, 80),
    email,
    location,
    birthday_mmdd: bday,
    source: String(body.source || 'vip-club-form-v1').slice(0, 80),
    ip_hash,
    user_agent: String($input.first().json.headers?.['user-agent'] || '').slice(0, 255),
    consent: body.consent === true || body.consent === 'true',
    utm_source: String(body.utm_source || '').slice(0, 80),
    utm_medium: String(body.utm_medium || '').slice(0, 80),
    utm_campaign: String(body.utm_campaign || '').slice(0, 80),
    notes: ''
  }
}];
```

**Node 3 — IF: `reject === true`**

- True branch → `Respond to Webhook` returning `{ "ok": true }` with HTTP 200. Never tell a bot it was rejected.
- False branch → Node 4.

**Node 4 — Google Sheets: Append Row**

- Node type: `Google Sheets`.
- Operation: `Append`.
- Authentication: `OAuth2`. Create a credential `Google Sheets — YumYumJinbeh` and sign in as `YumYumJinbeh@gmail.com`.
- Document: spreadsheet ID `1eOpfQVdTfZh_Tb8NjFxGggVXd3b6cABQIsqKDbb15Z8`.
- Sheet: `VIP_Signups`.
- Data mode: `Auto-map input data to columns`.

**Node 5 — Respond to Webhook (success)**

- Response code: `200`.
- Body: `{ "ok": true, "message": "Welcome to the Jinbeh VIP Club" }`.

**Node 6+ — Optional downstream**

Branch after Node 4 to welcome email, GOV1 event, or a "New_This_Week" review tab. MVP is Nodes 1–5; add downstream later.

### 2.3 Activate the workflow

Toggle `Active` in the top-right. The webhook is now live on localhost only.

---

## 3. Nginx Reverse Proxy + Rate Limit

### 3.1 Create the rate-limit zone

File: `/etc/nginx/conf.d/00-rate-limits.conf`

```nginx
# Shared across workers; tracks ~160,000 IPs
limit_req_zone $binary_remote_addr zone=vip_form:10m rate=5r/m;
```

### 3.2 Create the secret include file

File: `/etc/nginx/private/vip_secret.conf`

```nginx
proxy_set_header X-VIP-Secret "REPLACE_WITH_THE_SAME_VALUE_SET_IN_N8N_HEADER_AUTH_CREDENTIAL";
```

```bash
sudo mkdir -p /etc/nginx/private
sudo chown root:www-data /etc/nginx/private
sudo chmod 750 /etc/nginx/private
sudo chmod 640 /etc/nginx/private/vip_secret.conf
```

### 3.3 Add the location block

In each existing server block (`staging.jinbeh.com` and `jinbeh.com`):

```nginx
location = /api/vip-signup {
    if ($request_method !~ ^(POST|OPTIONS)$) {
        return 405;
    }

    limit_req zone=vip_form burst=3 nodelay;
    limit_req_status 429;

    include /etc/nginx/private/vip_secret.conf;

    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $host;

    proxy_pass http://127.0.0.1:5678/webhook/vip-club-signup;

    proxy_connect_timeout 5s;
    proxy_send_timeout 10s;
    proxy_read_timeout 10s;

    add_header Cache-Control "no-store" always;
}
```

Test and reload:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### 3.4 Production uses a different secret

Duplicate the location block into `/etc/nginx/sites-enabled/jinbeh.com`. Use a different secret for production (see section 9.6). Consider per-site include files `vip_secret_prod.conf` and `vip_secret_staging.conf`.

### 3.5 End-to-end verification from a remote machine

```bash
curl -i -X POST https://staging.jinbeh.com/api/vip-signup \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Test","last_name":"User","email":"test@example.com","location":"Frisco","birthday_mmdd":"01/02","consent":true}'
# Expected: HTTP 200 with {"ok":true,"message":"Welcome to the Jinbeh VIP Club"}
# The sheet should have a new row within 2–5 seconds. Delete the test row after.
```

---

## 4. fail2ban: Ban Persistent Abusers

nginx rate-limiting returns 429 but does not ban. fail2ban watches nginx logs and hard-bans repeat offenders at the kernel firewall level.

### 4.1 Install

```bash
sudo apt update
sudo apt install fail2ban
sudo systemctl enable --now fail2ban
```

### 4.2 Filter and jail

Confirm the standard filter exists:

```bash
ls /etc/fail2ban/filter.d/nginx-limit-req.conf
```

If missing, create it:

```ini
# /etc/fail2ban/filter.d/nginx-limit-req.conf
[Definition]
failregex = limiting requests, excess:.* by zone.*client: <HOST>
ignoreregex =
```

Add the jail:

```ini
# /etc/fail2ban/jail.d/nginx-vip-form.conf
[nginx-vip-form]
enabled  = true
filter   = nginx-limit-req
logpath  = /var/log/nginx/error.log
maxretry = 10
findtime = 10m
bantime  = 1h
action   = iptables-multiport[name=vip-form, port="http,https", protocol=tcp]
```

Reload:

```bash
sudo systemctl restart fail2ban
sudo fail2ban-client status nginx-vip-form
```

Any IP that trips the rate limit 10 times within 10 minutes gets a 1-hour kernel-level ban.

### 4.3 Monitoring

```bash
sudo fail2ban-client status nginx-vip-form
sudo fail2ban-client set nginx-vip-form unbanip <IP>  # manual unban
```

---

## 5. TLS / HTTPS

The form MUST be served over HTTPS. If both hostnames are already HTTPS (Hostinger usually auto-provisions), skip to section 5.3. Otherwise:

### 5.1 Option A — Hostinger hPanel

`Websites → manage → SSL → Install SSL` for both `staging.jinbeh.com` and `jinbeh.com`. Hostinger handles issuance and renewal.

### 5.2 Option B — certbot on the VPS

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d staging.jinbeh.com -d jinbeh.com --redirect --agree-tos -m darrellshill@gmail.com
sudo certbot renew --dry-run
```

### 5.3 HSTS (after HTTPS is stable)

```nginx
# Inside each server block serving HTTPS
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
```

Do not enable until fully confident — browsers remember this for two years.

---

## 6. Frontend Wiring

The frontend lives at `src/components/VipClubForm.tsx`. It posts to `/api/vip-signup` with the payload below. Because the endpoint is same-origin and nginx injects the secret, no custom headers or CORS are involved.

Payload shape:

```jsonc
{
  "first_name": "Taro",
  "last_name": "Tanaka",
  "email": "taro@example.com",
  "location": "Frisco",               // or "Lewisville"
  "birthday_mmdd": "01/25",            // MM/DD, zero-padded
  "consent": true,                      // from the consent checkbox
  "website": "",                        // honeypot — humans leave this blank
  "source": "/",                        // window.location.pathname
  "utm_source": "",
  "utm_medium": "",
  "utm_campaign": ""
}
```

UX requirements implemented in the component:

- Submit button disables during submission.
- 200 → success state replaces the form with a confirmation card.
- 429 → shows a "please wait a minute" message.
- 4xx/5xx → shows a red error block with the server's message if provided.
- Form reset + GA4 `vip_signup` event pushed to `window.dataLayer` on success.

---

## 7. Security Hardening Summary

| Protection | Layer | Section |
|---|---|---|
| Shared-secret auth on the n8n webhook | n8n Header Auth credential + nginx injection | 2.2, 3.2 |
| Rate limit (5 req/min/IP, burst 3) | nginx `limit_req_zone` | 3.1 |
| Persistent-abuser ban (10 strikes → 1h) | fail2ban | 4 |
| Honeypot field | Frontend hidden input + n8n Code node | 2.2, 6 |
| Email/location/date validation | n8n Code node | 2.2 |
| IP hashing with daily salt | n8n Code node | 2.2 |
| TLS | Let's Encrypt / Hostinger SSL | 5 |
| n8n not publicly reachable | Listen on 127.0.0.1 + `ufw deny 5678` | 2.1 |
| Secret file permissions | mode 640, `root:www-data` | 3.2 |
| HSTS (after TLS stable) | nginx header | 5.3 |

### 7.1 No raw IPs

The n8n Code node in 2.2 hashes the client IP with a daily-rotating salt before writing. Enough signal to dedupe same-day bot attempts without retaining PII long-term.

### 7.2 Disposable-email domains

Add only if spam appears — not pre-emptively.

```javascript
const disposable = ['mailinator.com','10minutemail.com', /* ... */];
if (disposable.includes(email.split('@')[1])) {
  return [{ json: { reject: true, reason: 'disposable_email' } }];
}
```

### 7.3 PII and data governance

- Share the sheet with the minimum set of people.
- Deletion SOP: if a user asks to be removed, delete their row within 30 days and log it.
- Privacy policy on jinbeh.com must list the VIP fields (birthday, location preference, marketing consent).
- Retention: consider archiving rows after 3 years of no engagement.

---

## 8. Secrets Management

With this architecture the Next.js app has no VIP-related env vars. The only secrets are:

| Secret | Where it lives | Permissions | Rotation |
|---|---|---|---|
| `X-VIP-Secret` value | `/etc/nginx/private/vip_secret.conf` (per environment) | `640`, `root:www-data` | Annually, or immediately on leak |
| Same secret, mirror copy | n8n `VIP Form Secret` Header Auth credential | n8n encrypted store | In lockstep with nginx |
| Google Sheets access | n8n OAuth2 credential signed in as `YumYumJinbeh@gmail.com` | n8n encrypted store | Re-auth only if token expires |

### 8.1 Removed from the website codebase

- Deleted the route handler `src/app/api/vip-club/route.ts` that threw `Server configuration error: Please setup Google Service credentials`.
- Removed `googleapis` usage from the VIP path (the package may still be present if another route needs it; audit on removal).
- No `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEETS_SA_KEY_PATH`, or `GOOGLE_APPLICATION_CREDENTIALS` env vars are required for this form. Remove any stale ones from `.env` files and hosting dashboards.
- Shred any service-account JSON key files on the VPS with `sudo shred -u <path>`.

### 8.2 Secrets hygiene

- Never commit `.env` or the nginx secret file to git.
- Rotate annually; immediately on any suspected leak.
- Store copies labeled by environment in 1Password or Bitwarden.
- Never log the secret value. To debug mismatches, log `hash(secret)` instead.

---

## 9. Testing and Deployment Checklist

### 9.1 Happy path

- [ ] Submit a valid form → row appears in `VIP_Signups` within 5 seconds
- [ ] `timestamp` shows current UTC time
- [ ] `location` is `Frisco` or `Lewisville` exactly
- [ ] `birthday_mmdd` stays `01/02`, not converted to a date
- [ ] `email` is lowercased
- [ ] `ip_hash` is a 16-char hex string

### 9.2 Validation rejections

- [ ] Missing required field → HTTP 200 with `{ok:false,reason:...}`, no row
- [ ] `email = not-an-email` → rejected
- [ ] `location = Dallas` → rejected
- [ ] `birthday_mmdd = 13/45` → rejected
- [ ] `birthday_mmdd = 1/2` (no zero-pad) → rejected

### 9.3 Security

- [ ] Honeypot filled → HTTP 200 silent fail, no row
- [ ] `curl` directly at `http://<vps-ip>:5678/webhook/vip-club-signup` from outside → connection refused
- [ ] 10 rapid POSTs → some return HTTP 429
- [ ] 15+ rapid POSTs → fail2ban shows the IP banned

### 9.4 Frontend UX

- [ ] Submit button disables during submission
- [ ] Success card replaces form on HTTP 200
- [ ] Error message shown on 4xx/5xx
- [ ] 429 shows the rate-limit notice (amber)
- [ ] Works on mobile Safari, Chrome Android, desktop browsers
- [ ] aria-live region announces success and errors

### 9.5 Ops

- [ ] n8n workflow is `Active`, not just saved
- [ ] n8n execution history shows recent runs
- [ ] `sudo nginx -t` passes
- [ ] nginx secret file is `640`, `root:www-data`
- [ ] `sudo fail2ban-client status nginx-vip-form` is healthy
- [ ] TLS valid on both hostnames, `certbot renew --dry-run` passes
- [ ] `sudo ss -tulpn | grep 5678` shows 127.0.0.1 only
- [ ] `ufw deny 5678` applied
- [ ] Sheet shared only with the right people

### 9.6 Staging → production cutover

Get every item above green on staging first, then:

- [ ] In n8n, duplicate the workflow and rename to `VIP Club Signup — Prod`. One workflow per environment.
- [ ] Create a staging sheet (or a staging tab) so test signups never mix with real VIPs.
- [ ] Generate a new, different `X-VIP-Secret` for production. Store both (staging and prod) in a password manager.
- [ ] Update `/etc/nginx/private/vip_secret.conf` (or per-env include files) to inject the correct secret per site.
- [ ] Smoke test production with a real email. Confirm the row lands. Delete the row.
- [ ] Keep staging active; any future schema or workflow change goes to staging first.

### 9.7 Keep staging out of Google

Add to the staging nginx server block:

```nginx
add_header X-Robots-Tag "noindex, nofollow" always;
```

Or put staging behind HTTP Basic Auth entirely via nginx `auth_basic`.

---

## 10. Troubleshooting

- `502 Bad Gateway` from nginx → n8n isn't running on 127.0.0.1:5678. Check `sudo systemctl status n8n` and `sudo ss -tulpn | grep 5678`.
- `401/403` from n8n → shared-secret mismatch. Verify `/etc/nginx/private/vip_secret.conf` value equals the `VIP Form Secret` credential in n8n.
- Row doesn't appear in the sheet → check the n8n `Executions` tab. Most common failure is the Google OAuth credential needing re-authorization; re-sign-in fixes it.
- `429 Too Many Requests` during testing → you tripped your own rate limit. Wait a minute, or temporarily raise the rate in `00-rate-limits.conf` while debugging.
- `CORS error` in the browser console → should not happen; the endpoint is same-origin. Verify the form posts to `/api/vip-signup`, not to an absolute URL.

---

## 11. Recommended Downstream Work

Once the form writes to the sheet, add:

1. Immediate welcome email (n8n Gmail node or ESP of choice).
2. Birthday offer automation (daily 7am CT cron; offer + reservation link 7 days out).
3. GOV1 event: POST each signup to the orchestrator as a `vip_signup` event.
4. CRM/POS sync so in-store sees the VIP tag at the door.
5. Lapsed-member reactivation (quarterly).
6. Deduplication pass (weekly).

Each is a separate 15–45 minute n8n workflow. Welcome + birthday are the highest ROI; both should go live within a week of form launch.

---

## 12. Sheet Column / JSON Key Map

| Sheet column | JSON key from frontend | Added server-side? |
|---|---|---|
| A `timestamp` | — | Yes (n8n) |
| B `first_name` | `first_name` | No |
| C `last_name` | `last_name` | No |
| D `email` | `email` | No (n8n lowercases) |
| E `location` | `location` (`Frisco` or `Lewisville`) | No |
| F `birthday_mmdd` | `birthday_mmdd` (`MM/DD`) | No |
| G `source` | `source` (page path) | No |
| H `ip_hash` | — | Yes (n8n) |
| I `user_agent` | — | Yes (n8n from request headers) |
| J `consent` | `consent` (boolean) | No |
| K `utm_source` | `utm_source` | No |
| L `utm_medium` | `utm_medium` | No |
| M `utm_campaign` | `utm_campaign` | No |
| N `notes` | — | No (left empty for staff) |

---

## 13. Sign-off Criteria

This work is done when:

1. The live form on staging.jinbeh.com submits successfully with no error.
2. A real submission appears in the target sheet within 10 seconds.
3. All 9.1, 9.2, 9.3, 9.4 checklist items pass.
4. Old service-account code and env vars are removed from the website codebase (done in this commit).
5. Production cutover (9.6) is complete and tested with a real email.
6. This document remains under `docs/vip-signup-form.md` for the next developer.
