# Cloudflare Tunnel Migration Assessment — jinbeh.com

**Date:** 2026-06-04
**Author:** Claude (Cowork)
**Status:** ASSESSMENT COMPLETE — RECOMMENDATION: GO (Phased)

---

## Executive Summary

**Recommendation: YES, migrate to Cloudflare Tunnel — but use a phased approach starting with jinbeh.com (prod) only, keeping nginx running as the fallback layer.**

The VPS has significant security exposure (no firewall, 8+ ports publicly accessible, including n8n and PostgreSQL), and the current A-record proxy setup has already caused production outages (522 errors, the IPv6 502 bug). Cloudflare Tunnel eliminates both classes of problems. The migration risk is low because Cloudflare manages our DNS (instant rollback), and the phased approach means we can validate each service before cutting over the next.

**World Cup timing concern:** The tournament starts June 11 (7 days away). We should migrate jinbeh.com (the customer-facing site) first AND TODAY, validate it's stable over 24-48 hours, then migrate secondary services (staging, CRM, n8n) next week AFTER the opening matches confirm stability. This is safer than leaving the current exposed setup running during the highest-traffic period of the year.

---

## Current Architecture

### VPS: srv1144987.hstgr.cloud (72.61.15.71)
- **OS:** Ubuntu 24.04.4 LTS (kernel 6.8.0-110)
- **Resources:** KVM 2, CPU 68%, Memory 54%, Disk 80.7% of 95.82GB
- **Swap:** 4GB swapfile (recently added, 19.3M used)
- **Firewall:** NONE (ufw not installed!)
- **System:** 210 processes, 1 zombie, system restart required
- **cloudflared:** NOT installed

### Docker Containers (16 total)
| Container | Port Mapping | Status |
|---|---|---|
| jinbeh-prod | 0.0.0.0:3002→3000 | Up 11h (healthy) |
| jinbeh-staging | 0.0.0.0:3001→3000, [::]:3001 | Up 20h |
| hermes-agent | 0.0.0.0:8642, 0.0.0.0:9119 | Up 2 weeks |
| jinbeh-archive | 0.0.0.0:3003→3000, [::]:3003 | Up 2 weeks |
| espocrm | 127.0.0.1:8181→80 | Up 4 weeks (healthy) |
| espocrm-daemon | 80/tcp (internal) | Up 4 weeks |
| espocrm-db | 3306/tcp (internal) | Up 4 weeks |
| n8n-n8n-1 | 0.0.0.0:5678, [::]:5678 | Up 4 weeks (healthy) |
| n8n-postgres-1 | 0.0.0.0:5433, [::]:5433 | Up 4 weeks |
| remnanode | (no ports) | Up 4 weeks |
| immich-server | 0.0.0.0:32769→2283 | Up 4 weeks (healthy) |
| immich-database | 5432/tcp (internal) | Up 4 weeks |
| immich-machine-learning | (internal) | Up 4 weeks |
| immich-redis | 6379/tcp (internal) | Up 4 weeks |
| wordpress-zmdr-wordpress-1 | 0.0.0.0:32768→80 | Up 4 weeks |
| wordpress-zmdr-db-1 | 3306/tcp, 33060/tcp | Up 4 weeks |

### Nginx Vhosts (9 sites-enabled)
| Vhost File | Server Name | Backend | SSL Type |
|---|---|---|---|
| 00-jinbeh.com.conf | jinbeh.com, www | 127.0.0.1:3002 | Cloudflare Origin Cert |
| staging.jinbeh.com | staging.jinbeh.com | localhost:3001 ⚠️ | Let's Encrypt |
| archive.jinbeh.com.conf | archive.jinbeh.com | localhost:3003 | Cloudflare Origin Cert |
| automation.jinbeh.cloud | automation.jinbeh.cloud | 127.0.0.1:5678 | (needs verification) |
| crm.jinbeh.com | crm.jinbeh.com | 127.0.0.1:8181 | Let's Encrypt |
| hermes.jinbeh.com.conf | FQDN_PLACEHOLDER ⚠️ | 127.0.0.1:9119 | Cloudflare Origin Cert |
| media.jinbeh.com | media.jinbeh.com | (static/unknown) | (minimal config) |
| feedback.jinbeh.com | feedback.jinbeh.com | (static/redirect) | Let's Encrypt |
| default | — | — | — |

### Cloudflare DNS (jinbeh.com zone, YumYumJinbeh@gmail.com)
- A `@` → 72.61.15.71 (Proxied)
- A `www` → 72.61.15.71 (Proxied)
- A `staging` → 72.61.15.71 (Proxied)
- A `crm` → 72.61.15.71 (DNS only)
- A `media` → 72.61.15.71 (Proxied)
- MX records → Webhero (email)
- SSL/TLS mode: Full (strict)

---

## Security Assessment — CRITICAL FINDINGS

### 1. No Firewall (CRITICAL)
ufw is not installed. Every Docker-published port is directly accessible from the internet:
- **n8n (5678)** — automation platform with full workflow execution capability
- **PostgreSQL (5433)** — n8n's database, publicly exposed
- **Hermes Agent (9119, 8642)** — AI agent endpoint
- **WordPress (32768)** — unknown WordPress installation
- **Immich (32769)** — photo server
- **Staging (3001), Archive (3003), Prod (3002)** — all directly accessible bypassing nginx

Anyone can hit `http://72.61.15.71:5678` and reach the n8n login page directly. This bypasses all nginx security headers, rate limiting, and SSL.

### 2. IPv6 Bug Still Present on Staging
`staging.jinbeh.com` nginx config uses `proxy_pass http://localhost:3001` (not `127.0.0.1`). This is the exact same IPv6 resolution bug that caused the prod 502 outages before the May 31 fix. If staging is dual-stack (it appears to be from the port bindings), it may work, but it's fragile.

### 3. Hermes Config Broken
`hermes.jinbeh.com.conf` uses `FQDN_PLACEHOLDER` as the server_name — it was never properly configured. It only works by accident because it uses the Cloudflare Origin Cert (wildcard for *.jinbeh.com).

---

## Cloudflare Tunnel — What Changes

### Architecture: Before vs After

**BEFORE (current):**
```
Browser → Cloudflare Edge (TLS termination)
  → A record → 72.61.15.71:443 (public IP exposed)
    → nginx (SSL with Origin Cert) → Docker containers
```

**AFTER (tunnel):**
```
Browser → Cloudflare Edge (TLS termination)
  → Tunnel (encrypted QUIC/HTTP2, outbound-only from VPS)
    → cloudflared daemon → localhost ports (Docker containers)
```

nginx remains running initially (for non-tunneled services and as fallback), but traffic for tunneled hostnames bypasses it entirely.

### What Gets Eliminated
1. **Public port exposure** — ports 80/443 no longer need to be open; cloudflared uses outbound connections only
2. **Origin SSL certificate management** — tunnel encrypts edge↔origin natively
3. **nginx as a routing layer** (for tunneled hostnames) — cloudflared routes directly to Docker container ports
4. **The IPv6/localhost bug class** — cloudflared uses explicit config, not DNS resolution
5. **522 timeout risk** — tunnel maintains persistent connections; no TCP handshake per request

### What's Preserved
1. **Cloudflare's edge features** — WAF, DDoS, caching, bot management all continue working
2. **DNS management** — stays in Cloudflare dashboard
3. **nginx** — keeps running for any non-tunneled services and as fallback

---

## Risk Analysis

### Risks of MIGRATING

| Risk | Severity | Likelihood | Mitigation |
|---|---|---|---|
| cloudflared daemon crashes | Medium | Low | systemd auto-restart (5s), 4 parallel connections |
| Latency increase | Low | Low | ~10-30ms addition, invisible for restaurant site |
| n8n webhooks break | Medium | Medium | Don't tunnel automation.jinbeh.cloud in phase 1 |
| Configuration error during cutover | Medium | Low | One hostname at a time, instant DNS rollback |
| World Cup traffic spike crashes cloudflared | Medium | Very Low | cloudflared is lightweight; the bottleneck is the Next.js container, not the proxy |
| automation.jinbeh.cloud is different Cloudflare zone | Low | Unknown | Verify before adding; skip if in different account |

### Risks of NOT MIGRATING

| Risk | Severity | Likelihood | Mitigation |
|---|---|---|---|
| n8n/PostgreSQL compromised via public port | CRITICAL | Medium | None currently (no firewall) |
| Another 522/502 during World Cup | HIGH | Medium | Swap helps, but nginx is still a failure point |
| Origin IP leaked → direct attacks bypass Cloudflare | HIGH | Already happened | Can't fix with A records; tunnel hides origin |
| Let's Encrypt cert renewal failure on CRM/staging | Medium | Low | Certbot auto-renew, but adds complexity |

### Verdict: The risk of NOT migrating exceeds the risk of migrating.

The publicly exposed n8n and PostgreSQL ports are an active security vulnerability. The tunnel eliminates this entire class of problem while also improving reliability.

---

## Cost/Benefit Analysis

### Costs
- **Financial:** $0 (Cloudflare Tunnel is free, no bandwidth limits)
- **Time:** ~30 minutes for phase 1 (jinbeh.com only), ~2 hours for all services
- **Operational:** One more daemon to monitor (cloudflared), but it replaces cert management, nginx config, and firewall maintenance

### Benefits
- **Security:** Eliminates public port exposure, hides origin IP
- **Reliability:** Persistent connections eliminate 522/502 class of errors; 4-connection HA
- **Simplicity:** No more Origin Cert, nginx SSL config, or Let's Encrypt renewal for tunneled services
- **Performance:** Marginally faster (eliminates TCP handshake to origin per request)
- **Future-proofing:** Easy to add Zero Trust Access policies later (protect n8n, CRM with SSO)

---

## Implementation Plan — Phased Approach

### Phase 1: TODAY (June 4) — jinbeh.com production site only
1. Install cloudflared on VPS
2. Create tunnel via Cloudflare dashboard (token-based, account-level auth)
3. Add routes: `jinbeh.com` → `http://localhost:3002`, `www.jinbeh.com` → `http://localhost:3002`
4. Start cloudflared as systemd service
5. Update DNS: change A records for `@` and `www` to CNAME → `<tunnel-uuid>.cfargotunnel.com`
6. QA test everything
7. **Keep nginx running** — it still serves staging, CRM, archive, automation, hermes, media, feedback

### Phase 2: June 5-6 — Secondary jinbeh.com subdomains
- Add routes for: `staging.jinbeh.com` → `http://localhost:3001`, `archive.jinbeh.com` → `http://localhost:3003`
- Add route for: `feedback.jinbeh.com` → appropriate redirect/backend
- Update DNS for each

### Phase 3: After World Cup opening (June 12+) — automation & CRM
- Verify `jinbeh.cloud` is in same Cloudflare account
- Add route for: `automation.jinbeh.cloud` → `http://localhost:5678`
- Add route for: `crm.jinbeh.com` → `http://localhost:8181`
- Test n8n webhooks thoroughly before committing
- Disable Let's Encrypt certs for tunneled services

### Phase 4: Post-migration hardening
- Install ufw, block all inbound except SSH (22) and tunnel connections
- Bind Docker container ports to 127.0.0.1 only (not 0.0.0.0)
- Optionally add Cloudflare Zero Trust Access policies for n8n and CRM
- Disable nginx entirely once all services are tunneled

### Rollback Procedure (any phase)
1. Delete CNAME record for affected hostname
2. Re-create A record pointing to 72.61.15.71 (Proxied)
3. Traffic resumes through nginx within seconds
4. nginx is still running and listening, so the rollback is instant

---

## Compatibility Notes

### nginx
- Cloudflared routes DIRECTLY to Docker container ports, bypassing nginx for tunneled hostnames
- nginx stays running for non-tunneled services
- The `proxy_set_header X-Forwarded-For` and `X-Real-IP` headers currently set by nginx will instead be set by Cloudflare's edge (via `CF-Connecting-IP` header). The Next.js app should already handle this since it's behind Cloudflare proxy today.

### Docker
- No Docker changes needed. cloudflared connects to the same localhost ports Docker publishes.
- Future improvement: bind Docker ports to 127.0.0.1 only after tunnel is confirmed working.

### n8n Webhooks
- Inbound webhooks from external services (Twilio, Stripe, etc.) will work through the tunnel.
- If Zero Trust Access is added later, webhook paths need a Bypass rule.
- Phase 3 timing ensures GOV1 orchestrator is not disrupted during World Cup.

### SSL/TLS
- Tunnel encrypts the edge↔origin connection natively (QUIC or HTTP/2).
- The Cloudflare Origin Cert (`/etc/ssl/jinbeh.com/`) becomes unnecessary for tunneled hostnames.
- SSL/TLS mode setting in Cloudflare dashboard becomes irrelevant for tunneled routes.
- Keep Origin Cert and Let's Encrypt certs in place until all services are tunneled.

### Cross-Domain (jinbeh.cloud)
- If `jinbeh.cloud` is in the same Cloudflare account (YumYumJinbeh@gmail.com), it can share the same tunnel.
- If it's in a different account, it needs its own tunnel or stays on A records.
- This is checked in Phase 3.

---

## Appendix: VPS Port Audit

Ports publicly accessible from the internet (no firewall):

| Port | Service | Risk |
|---|---|---|
| 22 | SSH | Expected, password auth |
| 80 | nginx | Expected |
| 443 | nginx | Expected |
| 3001 | jinbeh-staging (direct) | Unnecessary exposure |
| 3002 | jinbeh-prod (direct) | Unnecessary exposure |
| 3003 | jinbeh-archive (direct) | Unnecessary exposure |
| 5433 | PostgreSQL (n8n) | **CRITICAL** — database exposed |
| 5678 | n8n (direct) | **HIGH** — automation platform exposed |
| 8642 | hermes-agent | Unnecessary exposure |
| 9119 | hermes-agent | Unnecessary exposure |
| 32768 | WordPress | Unknown purpose, exposed |
| 32769 | Immich photo server | Unnecessary exposure |

**After tunnel + firewall (Phase 4):**
Only port 22 (SSH) would be publicly accessible. All web traffic enters via Cloudflare Tunnel (outbound connection from cloudflared, no inbound port needed).

---

## Implementation Status (2026-06-04)

### What's Done
- cloudflared v2026.5.2 installed on VPS (`/usr/bin/cloudflared`)
- Full assessment complete (this document)
- VPS architecture fully audited

### What's Blocked
The Cloudflare dashboard (dash.cloudflare.com) won't load — it spins indefinitely on the orange cloud loading screen. This blocks the tunnel authorization step. The `cloudflared tunnel login` command on the VPS generated an auth URL but it also hits the same dashboard loading issue.

**Root cause:** Likely a browser extension conflict, stale session, or Cloudflare's SPA having issues. The YumYumJinbeh@gmail.com account credentials are saved in Chrome.

### MANUAL STEPS FOR DARRELL TO COMPLETE

#### Option A: Dashboard-Managed Tunnel (Recommended)

**Step 1: Log into Cloudflare**
1. Open Chrome manually (not through Cowork)
2. Go to `https://dash.cloudflare.com/` — log in with YumYumJinbeh@gmail.com
3. If the dashboard won't load, try: clear cookies for `cloudflare.com`, or use an incognito window

**Step 2: Create the Tunnel**
1. Navigate to: **Zero Trust** (left sidebar) → **Networks** → **Tunnels**
   - Or go directly to: `https://one.dash.cloudflare.com/networks/tunnels`
2. Click **"Create a tunnel"**
3. Select **"Cloudflared"** as the connector type
4. Name the tunnel: **`jinbeh-vps`**
5. Click **"Save tunnel"**

**Step 3: Install the Connector (run on VPS)**
The dashboard will show you an install command with a token. It looks like:
```
cloudflared service install <TOKEN>
```
Copy that command. Open the Hostinger VPS Terminal (hpanel.hostinger.com → VPS → Manage → Terminal) and paste it.

This does three things:
- Creates `/etc/cloudflared/config.yml` with the token
- Creates a systemd service (`cloudflared.service`)
- Starts cloudflared and connects to Cloudflare

**Step 4: Add Public Hostnames**
Back in the Cloudflare dashboard (Tunnel configuration), add these public hostnames:

| Public Hostname | Service |
|---|---|
| `jinbeh.com` | `http://localhost:3002` |
| `www.jinbeh.com` | `http://localhost:3002` |

Click **"Save"** for each.

**Step 5: Verify the Tunnel is Connected**
On the Tunnels page, the tunnel status should show **"HEALTHY"** with a green indicator.

**Step 6: Update DNS**
The dashboard may have automatically created CNAME records. If not:
1. Go to the jinbeh.com DNS settings
2. Delete the A record for `@` (72.61.15.71)
3. Add a CNAME record: `@` → `<tunnel-uuid>.cfargotunnel.com` (Proxied)
4. Delete the A record for `www` (72.61.15.71)
5. Add a CNAME record: `www` → `<tunnel-uuid>.cfargotunnel.com` (Proxied)

The tunnel UUID is shown on the tunnel detail page.

#### Option B: CLI-Based (if Dashboard Still Won't Load)

**Step 1: Authenticate on VPS**
```bash
cloudflared tunnel login
```
This prints an auth URL. Open it in a working browser, select the jinbeh.com zone, and authorize. The VPS will download `~/.cloudflared/cert.pem`.

**Step 2: Create the tunnel**
```bash
cloudflared tunnel create jinbeh-vps
```
This creates the tunnel and stores credentials at `~/.cloudflared/<UUID>.json`.

**Step 3: Create the config file**
```bash
cat > ~/.cloudflared/config.yml << 'EOF'
tunnel: jinbeh-vps
credentials-file: /root/.cloudflared/<UUID>.json

ingress:
  - hostname: jinbeh.com
    service: http://localhost:3002
  - hostname: www.jinbeh.com
    service: http://localhost:3002
  - service: http_status:404
EOF
```
Replace `<UUID>` with the actual tunnel UUID from step 2.

**Step 4: Create DNS routes**
```bash
cloudflared tunnel route dns jinbeh-vps jinbeh.com
cloudflared tunnel route dns jinbeh-vps www.jinbeh.com
```

**Step 5: Install as a systemd service**
```bash
cloudflared service install
systemctl enable cloudflared
systemctl start cloudflared
systemctl status cloudflared
```

**Step 6: Verify**
```bash
cloudflared tunnel info jinbeh-vps
```
Should show connections to Cloudflare edge.

---

## QA Test Script (Run After Tunnel is Active)

Run these from any terminal (Mac or VPS):

```bash
#!/bin/bash
echo "=== Cloudflare Tunnel QA Tests ==="
echo ""

# 1. Homepage
echo "1. Homepage:"
curl -s -o /dev/null -w "HTTP %{http_code} | %{time_total}s | %{ssl_verify_result}" https://jinbeh.com/
echo ""

# 2. Key pages
for path in /frisco /lewisville /menu /happy-hour /specials /blog /about /contact; do
  echo "2. $path:"
  curl -s -o /dev/null -w "  HTTP %{http_code} | %{time_total}s" "https://jinbeh.com${path}"
  echo ""
done

# 3. API endpoint
echo "3. Feedback API (POST):"
curl -s -o /dev/null -w "  HTTP %{http_code}" -X POST https://jinbeh.com/api/feedback -H "Content-Type: application/json" -d '{"test":true}'
echo ""

# 4. Sitemap
echo "4. Sitemap.xml:"
curl -s -o /dev/null -w "  HTTP %{http_code} | Content-Type: " https://jinbeh.com/sitemap.xml
curl -s https://jinbeh.com/sitemap.xml | head -3
echo ""

# 5. llms.txt
echo "5. llms.txt:"
curl -s -o /dev/null -w "  HTTP %{http_code}" https://jinbeh.com/llms.txt
echo ""

# 6. SSL certificate check
echo "6. SSL Certificate:"
echo | openssl s_client -servername jinbeh.com -connect jinbeh.com:443 2>/dev/null | openssl x509 -noout -dates -issuer 2>/dev/null
echo ""

# 7. Mobile user agent
echo "7. Mobile UA test:"
curl -s -o /dev/null -w "  HTTP %{http_code}" -H "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" https://jinbeh.com/
echo ""

# 8. Concurrent requests (10 simultaneous)
echo "8. Concurrent load test (10 requests):"
for i in $(seq 1 10); do
  curl -s -o /dev/null -w "%{http_code} " https://jinbeh.com/ &
done
wait
echo ""
echo ""

# 9. Staging (expect 401 basic auth)
echo "9. Staging (expect 401):"
curl -s -o /dev/null -w "  HTTP %{http_code}" https://staging.jinbeh.com/
echo ""

# 10. Check tunnel-specific header
echo "10. CF-Tunnel header check:"
curl -s -I https://jinbeh.com/ 2>/dev/null | grep -i "cf-"
echo ""

echo "=== QA Complete ==="
```

### Additional Manual Checks
- [ ] Open https://jinbeh.com in Chrome — verify full page renders
- [ ] Open https://jinbeh.com/frisco — verify Frisco location loads
- [ ] Open https://jinbeh.com/sitemap.xml — verify valid XML
- [ ] Check https://automation.jinbeh.cloud — n8n still accessible (NOT yet tunneled)
- [ ] Check https://crm.jinbeh.com — EspoCRM still accessible (NOT yet tunneled)
- [ ] In Cloudflare dashboard: verify tunnel shows HEALTHY status

---

## Rollback Procedure (Emergency)

If anything breaks after DNS cutover:

1. Go to Cloudflare DNS for jinbeh.com
2. Delete the CNAME record for `@`
3. Add A record: `@` → `72.61.15.71` (Proxied)
4. Delete the CNAME record for `www`
5. Add A record: `www` → `72.61.15.71` (Proxied)
6. Traffic restores within seconds (nginx is still running)

**Keep nginx running** for at least 1 week after tunnel migration as the instant-rollback safety net.
