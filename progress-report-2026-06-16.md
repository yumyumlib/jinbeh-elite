# Jinbeh Progress Report — June 16, 2026 (7 AM Scheduled Review)

## CRITICAL / ACT TODAY

### 1. OpenTable Past Due — $746.47 (SUSPENSION RISK)
**Impact:** Losing reservations kills Father's Day (June 21) and World Cup bookings.
**Action:** Pay the balance immediately at business.opentable.com. Both Frisco and Lewisville reservation slots are live and publishing correctly (30-min cadence, verified), but a suspension would shut them down during the two highest-revenue weeks of the year.

### 2. Ruriko — Japanese TV Filming Request (STARRED, UNANSWERED)
**Impact:** Free national Japanese TV exposure during World Cup window. 11-message thread in YumYumJinbeh inbox. They want to film Fuji San at Jinbeh.
**Action:** Reply TODAY. Even a short "We'd love to discuss — here's our availability" keeps the door open. This is exactly the kind of earned media that money can't buy, especially with Japan playing at AT&T Stadium.

### 3. Zach McDonald / Grasshopper Bank — SBA Loan Next Steps (5 DAYS OVERDUE)
**Impact:** Renovation term sheet stalled. Gmail shows red "Received 5 days ago. Reply?" warning.
**Action:** Send Zach the SBA Form 413, 2025 tax return, and cost breakdown he requested. If docs aren't ready, at minimum reply acknowledging the email and give a timeline.

### 4. Menus — "MENUS NEED TO BE PRINTED ASAP"
**Impact:** J Hill met with Inggrid Friday night and has concerns. Father's Day is 5 days away.
**Action:** Review the Frisco and Lewisville dinner PDFs J attached, resolve any concerns, and get to print. Inggrid also sent a separate "FRISCO MENU" PDF (Jun 15) in the darrellshill inbox.

### 5. Grubhub Father's Day Hours
**Impact:** Grubhub sent "It's time to set your holiday hours!" — if not set, orders may be missed or rejected.
**Action:** Log into Grubhub merchant portal and set Father's Day hours for both locations. Standard Sunday hours + extended if you're staying open for the Father's Day rush (R1 data shows Father's Day = 2.25× normal Sunday, surge at lunch).

---

## FATHER'S DAY READINESS (June 21 — 5 days)

| Item | Status | Action Needed |
|------|--------|---------------|
| OpenTable slots | LIVE (30-min cadence, both locations) | Pay $746.47 balance to prevent suspension |
| Email Campaign 1 | SENDING (6 mailboxes, 1,226 Regulars) | Monitor delivery metrics |
| Email Campaign 2 | Due Wednesday | Build follow-up to full filtered list + non-clickers |
| Grubhub hours | NOT SET | Set holiday hours today |
| Uber Eats Frisco | DISCONNECTED | Losing ~$48/hr during service — reconnect |
| R1 revenue baseline | Jun Sundays avg ~$7.5K; Father's Day historical = ~$16.8K | Prep for 2.25× volume |
| Extended hours decision | Recommended: open 11am, run through 2:30–5 gap, close 9pm | Based on R1 analysis (surge at lunch, zero late-night) |
| Menus | NEEDS PRINT | Resolve concerns with J Hill + Inggrid, send to printer |

---

## WORLD CUP MARKETING (Tournament Live: June 11–July 19)

### Automation Blocked — ZERO Posts in 5+ Days
The daily World Cup marketing automation (`jinbeh-worldcup-daily-marketing` at 9 AM, `jinbeh-worldcup-pm-session` at 4 PM) has been running every day but **cannot publish anything** because the Chrome browser permission gate is denied when no human is present to click "Allow." This means:
- Zero social media posts published (FB, IG, GBP) despite 6+ ready-to-post packages
- 8 PR pitches drafted but unsent (print/digital media window closes ~June 18)
- Comment engagement on World Cup threads not happening
- KPI tracking vs. baseline not started

**Recommendation:** Either (a) manually post the drafted content each morning, or (b) restructure the automation to use an API-based posting tool (like n8n → Facebook Graph API / GBP API) instead of browser automation. Option (b) is the permanent fix.

### Staged Deploy Still NOT Live
The off-peak deploy at 2 AM today was **aborted** when VPS load hit 16.1 during `npm ci`. The staged changes that are NOT yet live:
- World Cup page rewrite (evergreen "Catch Every World Cup Match" + pre/during/after-match CTAs)
- JSON-LD price removal from AllSchemas.tsx (the known schema issue)
- Footer "World Cup 2026 Watch Parties" link

**Recommendation for retry:**
1. Shrink build context (`.dockerignore` to skip re-sending 2.3GB `public/`)
2. Warm npm ci cache first (build with only package*.json changed)
3. Cap build CPU: `docker build --cpuset-cpus=0,1` to leave cores 2-3 for prod
4. Retry at 2–3 AM when load is lowest

### Samurai Blue Special
The $42 Sashimi Combination + complimentary edamame promotion is owner-approved and should be prominently featured in all World Cup content. It's on the World Cup page but that page isn't deployed yet.

---

## VPS HEALTH

| Metric | Current | Assessment |
|--------|---------|------------|
| Load average | 15.85, 13.68, 11.04 | HIGH — persistently elevated |
| Disk | 78% (22GB free) | OK |
| Site response | 200 in 0.4s | Functional |
| jinbeh-prod | Up 19h, "unhealthy" flag | Healthcheck timing out under load; site serves fine |
| n8n | Up 7 days | Stable |

### Root Cause of Persistent High Load
- **dockerd: 70.8% CPU** (9,007 min cumulative over 8 days) — abnormally high for a Docker daemon. Likely caused by container healthchecks failing repeatedly (jinbeh-prod "unhealthy" → Docker spawns probe processes every 30s that time out under load → feedback loop).
- **remnanode: 9% CPU** (580 min over 4 days) — VPN proxy of unknown necessity. Consider stopping if not actively used.
- **Recommendation:** (1) Increase jinbeh-prod healthcheck interval/timeout or disable temporarily to break the feedback loop. (2) `docker stop remnanode` if not needed. (3) Long-term: the 2-vCPU box is oversubscribed with 15 containers — VPS upgrade or container consolidation needed before/during World Cup peak.

### n8n Status
n8n is running and partially functional. R1 Revenue Briefs are flowing (recent: $12,644 on Jun 12, $7,300 on Jun 13, $12,032 on Jun 14). The task-runner issue from Jun 7 is still open — REP1 review response agent is likely down. Daily revenue emails are the critical path and they're working.

---

## EMAIL FOLLOW-UPS NEEDED

### YumYumJinbeh@gmail.com
| Sender | Subject | Priority | Recommended Action |
|--------|---------|----------|-------------------|
| Ruriko | Japanese TV filming | CRITICAL | Reply today — free World Cup media |
| OpenTable | Past due $746.47 | CRITICAL | Pay immediately |
| Grubhub | Holiday hours | HIGH | Set Father's Day hours |
| Capital One Business | Confirm recent purchase | HIGH | Check for fraud — verify the transaction |
| Google Ads | Stop wasting budget | MEDIUM | Review search terms report, add negatives |
| GSC | New indexing issues | MEDIUM | Check what new issues emerged (5xx validation still processing) |
| North Texas FWC | "News from the Pitch" | LOW | Read for World Cup intel/opportunities |
| Lia, Katelyn | Wine/Sake/Cocktail finalized options | MEDIUM | Review and approve SG selections |

### darrellshill@gmail.com
| Sender | Subject | Priority | Recommended Action |
|--------|---------|----------|-------------------|
| Zach McDonald | SBA next steps | CRITICAL | Send Form 413, tax return, cost breakdown |
| Inggrid Phan | Frisco menu PDF | HIGH | Review alongside J Hill's menu concerns |
| Nooshin | Suspense acct / bal sheet | HIGH | Resolve Scott name issue |
| Akita Shrestha | Payment processing update | MEDIUM | Review Versapay/Weitzman payment status |
| Alec | New EIN being issued | MEDIUM | Confirm receipt and next steps |
| IRS | Form 4506-T transcript | MEDIUM | Track status of transcript request |
| Nancy | Roof leak | MEDIUM | Assess damage, contact maintenance |

---

## STALLED PROJECTS

### 1. World Cup Daily Marketing Automation
**Blocked by:** Chrome browser permission gate (no human present)
**Days stalled:** 5+
**Impact:** Zero social content during live tournament
**Fix:** Switch to API-based posting or manual daily posting

### 2. Off-Peak Deploy (World Cup SEO + JSON-LD + Footer)
**Blocked by:** VPS build capacity (load spike aborts build)
**Days stalled:** 1 (first attempt was today)
**Impact:** Staged improvements not live; AllSchemas.tsx still has JSON-LD prices
**Fix:** Optimize build process (see recommendations above), retry tonight

### 3. n8n Task Runner (REP1 Down)
**Blocked by:** n8n 2.6.4 mandatory task runners incompatible with hardened Alpine image
**Days stalled:** 9 (since Jun 7)
**Impact:** REP1 review response agent down; daily revenue emails working but fragile
**Fix:** Pin n8n to pre-2.6.4 version or rebuild with proper runner support

### 4. Uber Eats Frisco
**Blocked by:** Unknown (disconnection not investigated)
**Days stalled:** 7+
**Impact:** Lost delivery revenue ~$48/hr during service
**Fix:** Log into Uber Eats merchant portal, reconnect Frisco location

### 5. Cloudflare Tunnel Migration
**Blocked by:** Cloudflare dashboard infinite loading in Chrome MCP
**Days stalled:** 12 (since Jun 4)
**Impact:** VPS has NO firewall; all Docker ports publicly exposed
**Fix:** Complete tunnel setup manually in a regular browser window

### 6. Chef Recruitment
**Blocked by:** Zero replies from 25 candidates
**Days stalled:** Extended
**Impact:** Catering launch prerequisites unmet
**Fix:** Broaden pipeline beyond initial 25; consider Indeed/Poached postings

---

## SCHEDULED TASKS STATUS

| Task | Schedule | Status |
|------|----------|--------|
| project-progress (this) | Daily 7 AM | Running now |
| jinbeh-worldcup-daily-marketing | Daily 6:38 AM | BLOCKED by Chrome gate — runs but can't post |
| jinbeh-worldcup-pm-session | Daily 4:06 PM | BLOCKED by Chrome gate |
| weekly-opentable-reservation-upload | Thursdays 9:42 PM | Active — next run Jun 19 |
| obsidian-updates | Daily 11:02 PM | Active |
| nightly-vault-sync | Daily 11:32 PM | Active |
| jinbeh-offpeak-deploy | One-time Jun 16 2 AM | COMPLETED (aborted due to load) — disabled |
| jinbeh-worldcup-daily-posts | Daily 4:59 AM | DISABLED (replaced by daily-marketing) |

---

## REVENUE SNAPSHOT (from R1 Briefs)

| Date | Revenue | Notes |
|------|---------|-------|
| Jun 12 (Thu) | $12,644 | World Cup Day 2 |
| Jun 13 (Fri) | $7,300 | Lower — possible data quality (partial snapshot) |
| Jun 14 (Sat) | $12,032 | Solid Saturday |

R1 is operational and delivering daily email briefs. The revenue warehouse is queryable for ad-hoc analysis via Postgres on the VPS.

---

## PRIORITY ACTION LIST (Ranked)

1. **PAY OpenTable $746.47** — prevents reservation suspension during peak weeks
2. **REPLY to Ruriko** — Japanese TV filming opportunity expires quickly
3. **REPLY to Zach McDonald** — SBA loan docs 5 days overdue
4. **SET Grubhub Father's Day hours** — both locations
5. **RESOLVE menu printing** — review J Hill + Inggrid concerns, send to printer
6. **CHECK Capital One fraud alert** — verify the flagged transaction
7. **BUILD Father's Day Email Campaign 2** — due Wednesday
8. **FIX World Cup posting** — either manual posting or API-based automation
9. **RETRY off-peak deploy** — with build optimizations, tonight 2-3 AM
10. **INVESTIGATE VPS load** — stop remnanode if unused, adjust healthcheck interval
11. **RECONNECT Uber Eats Frisco** — recovering lost delivery revenue
12. **REVIEW Google Ads** — address wasted budget on unwanted clicks
