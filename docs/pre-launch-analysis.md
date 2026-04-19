# Jinbeh Staging → Production Pre-Launch Analysis

**Author:** Claude (Cowork session)
**Date:** 2026-04-19
**Scope:** Readiness review for promoting the Next.js app at `staging.jinbeh.com` to serve `www.jinbeh.com` and `jinbeh.com`.
**Repo HEAD on VPS:** `67d8948 feat: homepage polish + VIP form rewrite to /api/vip-signup`

---

## 1. Executive Summary

Staging is healthy. The code, content, build, and routing all work. But **production DNS still points to the old WordPress site** at `216.57.231.121` (Apache/CentOS/PHP 8.1.29), and several pieces of the VIP pipeline and hardening layer on the VPS are not yet in place. Cutover is a scheduling exercise, not a code exercise — once the DNS and nginx blocks are prepared, the same container can serve production.

**Green lights:** build, security headers, SEO basics, accessibility signals, routing, images.
**Yellow lights:** fail2ban off, no nginx rate-limiting, basic-auth still gates staging.
**Red lights (blockers for production):** `/api/vip-signup` not wired through nginx to n8n; no production server block; no TLS cert for `www.jinbeh.com`; WordPress still serves the root domain.

---

## 2. Staging Build Status

| Check | Result |
|---|---|
| Git HEAD on VPS | `67d8948` (matches GitHub main) |
| Container | `jinbeh-staging` (image `jinbeh-elite-jinbeh-staging`) |
| Runtime | Next.js 16.1.5, React 19 |
| Boot time | 193ms to Ready |
| Container memory footprint | ~3.6 GiB used / 7.8 GiB available |
| Disk | 31 GB free on / (68% used) |
| Docker image size | 4.8 GB (includes 686 MB of images in `public/images`) |
| Routes rendered | 127 (see build output) |
| TypeScript | Clean after `.next` cache cleared |

Spot-checked paths all return 200 OK from `http://localhost:3001` inside the VPS:

| Path | HTTP | Response size |
|---|---|---|
| `/` | 200 | 604 KB |
| `/menu` | 200 | 141 KB |
| `/catering` | 200 | 172 KB |
| `/vip` | 200 | 112 KB |
| `/reservations` | 200 | 189 KB |
| `/frisco` | 200 | 186 KB |
| `/lewisville` | 200 | 192 KB |
| `/happy-hour` | 200 | 152 KB |
| `/private-dining` | 200 | 204 KB |
| `/gallery` | 200 | 180 KB |
| `/takeout` | 200 | 159 KB |

Homepage content audit confirmed all `WebsiteChanges.pages` edits shipped:

- `CRAFTED WITH PASSION` pill contrast fixed (solid gold on charcoal).
- Menu subtitle centered, one-line at `lg`.
- `NumberTicker` shows `68k+` (not `68,000+`).
- "From birthdays to promotions…" tagline: em dash removed, centered.
- `4.2–4.8` rating appears in four places on homepage.
- Platform list now reads `Google, Grubhub, Uber Eats, OpenTable & Facebook`.
- Google Maps "Directions" links use clean `?api=1&destination=<address>` format for Frisco and Lewisville.
- Hero images swapped: `OnionVolcanoAndVeggiesOnGrill.webp` (Dinner & A Show), `Party.jpg` (DFW's Birthday Spot). Both present inside the container at `/app/public/images/`.

VIP Club page (`/vip`) renders the new form fields: `first_name`, `last_name`, `birthday_mmdd`, `consent`. Old `src/app/api/vip-club/route.ts` backend is gone.

---

## 3. SEO Snapshot (homepage)

| Signal | Value |
|---|---|
| `robots.txt` | Present, sitemap line points to `https://jinbeh.com/sitemap.xml` |
| `sitemap.xml` | 254 `<loc>` entries |
| Canonical URL | `https://jinbeh.com` (set) |
| Meta description | "DFW's premier Japanese restaurant since 1988. Hibachi shows, fresh sushi…" |
| JSON-LD schema blocks | 1 on homepage (Organization/Restaurant) |
| `<h1>` count | 1 (correct — single main heading) |
| `alt` attributes | 60 (zero empty/decorative) |
| `aria-label` attributes | 70 |

**Note:** `robots.txt` currently points its sitemap line to `https://jinbeh.com/sitemap.xml`. Once the Next.js app serves the apex domain, that URL will resolve to this sitemap. Until cutover, the WordPress site answers there — which is fine from a crawler perspective but worth noting.

---

## 4. Security Headers (present on every response)

- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: origin-when-cross-origin`
- `X-XSS-Protection: 1; mode=block`
- `Permissions-Policy: geolocation=(self), camera=(), microphone=()`
- `Content-Security-Policy`: locked down to required hosts (OpenTable, Google Tag Manager, Vimeo).

---

## 5. Where Production Actually Lives Today

```
www.jinbeh.com  →  216.57.231.121  →  Apache/2.4.6 (CentOS) / PHP 8.1.29 / WordPress
jinbeh.com      →  216.57.231.121  →  (same WordPress)
staging.jinbeh.com → 72.61.15.71   →  Hostinger VPS → docker jinbeh-staging (this app)
```

**Implication:** "Promoting staging to production" is not a single command. It is a migration. The options are:

1. **DNS cutover.** Point `jinbeh.com` + `www.jinbeh.com` A records to `72.61.15.71`, add production nginx server blocks on the VPS, issue Let's Encrypt certs for both, and retire the WordPress site (or leave it as an archive under a different domain).
2. **Reverse-proxy-only on WP host.** Keep DNS pointing to the WP Apache server but install a reverse proxy there that upstreams to the VPS. This is awkward and doubles infra. Not recommended.
3. **Full migration of assets off the WP host first.** If there is anything still needed from WordPress (images, a form endpoint, a blog), pull it into the Next.js app before cutover. A crawl of `https://jinbeh.com/wp-json/` will list pages worth checking.

Recommendation is option 1. The Next.js app already is a complete replacement for the front-of-house site.

---

## 6. Nginx & Hardening Gaps

Current nginx sites on the VPS:

- `automation.jinbeh.cloud` (n8n)
- `crm.jinbeh.com` (EspoCRM on port 8181)
- `feedback.jinbeh.com`
- `media.jinbeh.com`
- `staging.jinbeh.com` (Basic Auth → `localhost:3001`)

**Missing for production:**

- [ ] `www.jinbeh.com` + `jinbeh.com` server block → `localhost:3001`, no basic auth.
- [ ] 301 canonical redirect `www.jinbeh.com` → `jinbeh.com` (or the reverse — pick one; the canonical link tag says `jinbeh.com`, so redirect `www` → apex).
- [ ] Let's Encrypt certs for both hostnames (`certbot --nginx -d jinbeh.com -d www.jinbeh.com`).
- [ ] `/api/vip-signup` location block with rate limiting (see `docs/vip-signup-form.md`).
- [ ] `limit_req_zone $binary_remote_addr zone=vip_signup:10m rate=5r/m;` in `nginx.conf` or `conf.d`.
- [ ] fail2ban jail for `vip-signup-flood` (currently `systemctl is-active fail2ban` returns `inactive`).
- [ ] `X-VIP-Secret` header injected by nginx and validated by n8n.

**Verified reachable on the VPS:** `n8n` responds on `127.0.0.1:5678`, TLS certs active for `staging.jinbeh.com` through `Jun 28, 2026`.

---

## 7. VIP Signup Pipeline Status

Frontend (DONE): `/vip` posts JSON to `/api/vip-signup` with the full schema, includes honeypot, captures UTM params, handles 429, fires GA4 event.

Backend (NOT DONE):

- [ ] nginx `/api/vip-signup` block.
- [ ] n8n workflow (webhook → Code node for validation + IP hash → Google Sheets Append).
- [ ] Google Sheet `1eOpfQVdTfZh_Tb8NjFxGggVXd3b6cABQIsqKDbb15Z8` populated with the 13-column header row from `docs/vip-signup-form.md`.
- [ ] `vip-signup-salt-YYYYMMDD` secret provisioning (daily rotation).
- [ ] `X-VIP-Secret` shared between nginx and n8n.

Until these are in place, the VIP form will fail in production. On staging it also fails because basic auth sits in front of the request.

---

## 8. Image Assets

- `public/images/` contains **1,396 files / 686 MB** (382 JPG, 989 WebP, 21 PNG, 3 SVG, 1 JPEG).
- Newly committed images confirmed inside the container:
  - `/app/public/images/OnionVolcanoAndVeggiesOnGrill.webp` (187 KB)
  - `/app/public/images/Party.jpg` (206 KB)
- Untracked but present in the working copy (not in git, not in container): `jinbeh_sushi_rice_action.jpg`, `jinbehlunchspecial.png`, `smokedsalmon-sashimi.png`, `stirringsushirice.mp4`, `stirringsushirice_fixed.mp4`, plus the PNG twin of the webp above. These can sit on the side until referenced; no cleanup needed to launch.

---

## 9. Cutover Runbook (recommended order)

1. **Build nginx production server block** (`jinbeh.com` + `www.jinbeh.com`) on the VPS, proxying to `localhost:3001`. Do not activate yet (keep DNS pointed at WP).
2. **Wire `/api/vip-signup`** in nginx and spin up the n8n workflow. Test end-to-end against a dev sheet from inside the VPS with `X-VIP-Secret` + valid payload.
3. **Turn on fail2ban + `limit_req_zone`.** Verify a flood of test requests returns 429 and gets banned.
4. **Provision certs** with `certbot --nginx -d jinbeh.com -d www.jinbeh.com` while DNS still points at WP (this will fail ACME HTTP-01, so use DNS-01 via certbot-dns-cloudflare/hostinger, or plan to provision immediately after the DNS flip).
5. **Change DNS A records** for `jinbeh.com` and `www.jinbeh.com` to `72.61.15.71`. TTL low (e.g., 300s) 24h before cutover so rollback is fast.
6. **Issue HTTP-01 certs** right after the DNS flip propagates.
7. **Remove basic auth from `staging.jinbeh.com`** only if you want staging to become the public preview. Otherwise keep it gated.
8. **Decommission the WordPress host** once you have confirmation traffic is hitting the new app and business-critical items (Google Business, Grubhub, Uber Eats profile links, OpenTable integrations, review link destinations, etc.) still land correctly.

---

## 10. Risk Register

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | VIP form goes live before nginx/n8n wiring done → submissions 404 or 401 | HIGH | HIGH | Block cutover until task #21 closed. |
| 2 | Lost WordPress assets (old blog posts, legacy pages, crawler backlinks) | MED | MED | Crawl `jinbeh.com` before flipping DNS; 301-map old paths to nearest Next route in nginx. |
| 3 | Google Business / third-party listing linking to a specific WP URL breaks | MED | MED | Audit external links in GBP, Grubhub, Uber Eats, Facebook, OpenTable before cutover. |
| 4 | Apex domain TLS fails to issue at DNS flip time | LOW | HIGH | Pre-issue via DNS-01 or have certbot ready to run the second DNS propagates. |
| 5 | Rate-limited VIP endpoint still allows spam via rotated IPs | LOW | MED | Honeypot + reCAPTCHA fallback + daily-salted IP hash already in spec. Monitor the sheet. |
| 6 | fail2ban off means SSH brute-force exposure | MED | MED | Enable `sshd` jail regardless of launch status. |
| 7 | Container rebuild deletes unreferenced images | LOW | LOW | Images live under `public/images` and are baked into the image at build. No runtime deletion. |

---

## 11. Lighthouse / Performance (not yet run)

Lighthouse CI has not been run against staging in this session. Before cutover, run either:

```
npx @lhci/cli autorun --collect.url=https://staging.jinbeh.com/ \
  --collect.settings.extraHeaders='{"Authorization":"Basic …"}'
```

or use PageSpeed Insights against a whitelisted preview URL. Targets: LCP < 2.5 s, CLS < 0.1, TTI < 3.5 s on mobile. Container boots in 193 ms and first-byte responses inside the VPS are < 100 ms; the user-facing result depends on TLS + CDN layers.

---

## 12. Open Tasks After This Report

- **#7 (this report)** — complete.
- **#8** — Crawl staging + build master content markdown.
- **#21** — VPS nginx + n8n + Google Sheet wiring for VIP.
- *(new)* — Create production nginx server block and TLS certs.
- *(new)* — DNS cutover plan with Hostinger.
- *(new)* — Enable fail2ban + global rate-limits.
- *(new)* — Run Lighthouse against staging (basic-auth'd) and file any perf regressions.

---

*End of pre-launch analysis.*
