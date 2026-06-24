# Jinbeh Progress Report — June 23, 2026

**Report type:** Automated scheduled review
**Period covered:** June 19–23, 2026
**VPS check:** Performed (see Infrastructure section)

---

## Executive Summary

The nightly SEO content pipeline is running smoothly (Batch 5 deployed today, 113/276 routes covered). OpenTable→Google Ads conversion tracking shipped Jun 22. Revenue briefs arriving daily. However, several revenue-generating items remain stalled for 5+ consecutive reports, CPU steal is oscillating again on the VPS, and there are urgent email items requiring Darrell's direct action (IRS transcript request, Grizzly Star overdue invoices, unanswered Google reviews, Japanese TV filming logistics).

---

## What Shipped (Jun 19–23)

### SEO Content Batches (Automated, On Track)
- **Batch 3** (Jun 22): 25 pages — /menu, /lewisville/vegetarian, 23 celebration pages. Total: 63 routes.
- **Batch 4** (Jun 22): 25 pages — 12 nearby cities, 8 standalone, 1 celebration, 4 appetizer items. Total: 88 routes.
- **Batch 5** (Jun 23): 25 pages — home, 7 cocktails, 14 hibachi items, appetizers, sashimi. Total: **113 routes**.
- **Remaining:** 163 eligible routes. At 25/night, completes in ~7 more runs then self-disables.
- All batches: clean TypeScript builds, IndexNow submitted (HTTP 200), brand guardrails enforced (no em-dashes, no prices except approved exceptions, no AYCE/omakase).

### OpenTable → Google Ads Conversion Tracking (Jun 22)
- Created new "OpenTable Reservation" completed-booking conversion (label `W4VzCPnC28McIdENXWgM9D`, $25 value).
- Deployed `ReserveLink.tsx` across **93 links in 41 files** on the live VPS (surgical keep-both merge on VPS working tree).
- Uploaded two Customer Match lists: Frisco (28,608) + Lewisville (21,219) hashed contacts.
- **TODO (still open):** Contact OpenTable support (1-800-673-6822) to load Conversion ID + label for server-side completed-booking tracking. Then set the click conversion to Secondary to avoid double-count.

### VPS Disk Reclaim + n8n Retention (Jun 22)
- Reclaimed 25 GB (Docker build cache + stale SQLite backups). Disk 73% → 51%.
- n8n retention tuned: `SAVE_ON_SUCCESS=none`, `PRUNE_MAX_COUNT=10000`.

### Duplicate aggregateRating Fix (Jun 19)
- Fixed "Review has multiple aggregate ratings" on both location pages. Rich Results Test now shows all valid, review snippets eligible.

---

## VPS Infrastructure Health (Checked Jun 23 ~12:13 UTC)

| Metric | Value | Status |
|--------|-------|--------|
| CPU steal | 12–68% (oscillating) | ⚠️ Sawtooth pattern recurring |
| Load average | 1.30 / 1.25 / 1.25 | ✅ Normal |
| Disk | 65% used, 34 GB free | ✅ Healthy |
| Memory | 1.9 GB used / 5.8 GB available | ✅ Healthy |
| Prod (3002) | HTTP 200 in 0.015s, healthy | ✅ Excellent |
| n8n | `{"status":"ok"}` | ✅ Healthy |
| Containers | 7 running, 9 stopped (as intended) | ✅ Correct |

**Issues:**
1. **CPU steal oscillating 12–68%** — same host-side throttle pattern. Workload is fine (load ~1.3). Another Kodee chat reset via hPanel → Ask AI would clear it. Not yet critical (prod responds in 15ms) but degrades during spikes.
2. **jinbeh-staging is running** — was previously stopped to conserve CPU. Not urgent but uses resources on the constrained 2-vCPU box.
3. **2 stale ephemeral SSH keys** in authorized_keys from prior deploy sessions — should be cleaned up for security.

---

## Email Review (YumYumJinbeh@gmail.com — 136 unread)

### 🔴 URGENT — Darrell Action Required

**1. IRS Form 4506-T / Transcript Request (Alec, D, Curt — 17 messages)**
Thread subject: "JIN BEH INC - Transcript Request - Form 4506-T"
Latest: "Hi Darrell, Just wanted to check up on..." with image attachments.
**Action:** Reply to Alec/Curt with status update. This thread has been active and they're following up.

**2. LightHouse/Matsuda Case Status (Jose — starred, 4 messages, has Draft)**
Subject: "LightHouse/Matsuda Case Status"
Latest: "Darrell, received. Thank you." — PDFs attached (POP filed 06-1..., Citation - Amira..., Citation - Aya M...).
**Action:** Complete and send the draft reply that's already in progress.

**3. Grizzly Star Overdue Invoices (Todd Lewis — 2 emails)**
- INV-7381: **$367.51 overdue**
- INV-7380: **$1,469.12 overdue** (truncated in preview)
- **Total: $1,836.63 overdue since May 30** — now 24 days past due.
**Action:** Pay or contact Todd Lewis to arrange payment. This has been flagged in the last 3 progress reports with no resolution.

**4. Google Business Reviews — Unanswered (3+)**
- **Nsgslim** — review for Jinbeh Lewisville (Jun 21–22)
- **Joshua** — review for Jinbeh Lewisville (Jun 19)
- **Cheryl** — review for Jinbeh Steak Seafood & Sushi Restaurant (Jun 19)
**Action:** REP1 agent should be handling these automatically. If not, respond manually. Unanswered reviews hurt GBP ranking (Prominence pillar).

**5. Japanese Media Request — Ruriko/Inggrid (30 messages, starred)**
Subject: "Japanese Media Request to film at Jinbeh"
Latest: "Hi Darrell, Thank you very much for the sugges..." — dinner menu PDF + 25-26 cert + image attached.
This is likely the **Keru Tomeru Japanese TV segment scheduled for Jun 26** (3 days away).
**Action:** Confirm filming logistics ASAP — location, time, menu items to feature, staff coordination.

**6. Pest Ranger — Appointment Confirmation Needed**
Subject: "Please confirm your appointment" — for Jinbeh Frisco.
**Action:** Confirm or reschedule the pest control appointment.

### 🟡 NOTABLE — Monitor / Low Urgency

**7. Canva Pro Subscription Ended**
"Your Canva Pro subscription has ended — All your templates and uploads are safe, ready..."
**Impact:** Affects content creation workflow (counter cards, social media graphics, etc.). Decide whether to renew.

**8. R1 Revenue Briefs — Arriving Normally**
- Jun 19: $16,197
- Jun 20: $21,631
- Jun 21: $37,395 (Sunday — strong)
- Jun 22: $8,031 (1 alert)
R1 pipeline is healthy. The Jun 22 alert warrants a look.

**9. OpenTable Guest Export (Frisco, Jun 22)** — routine data export.

**10. GSC User Permission Changed (Jun 21)** — verify this was intentional.

**11. Capital One — Credit Score Changed** — informational.

**12. Payment Received — $135.31 (Jun 23, Pest Ranger receipt)** and another payment confirmation (Jun 20).

---

## Stalled Items Tracker (5+ Consecutive Reports)

These items have appeared in 3 or more progress reports without resolution:

| Item | First Flagged | Status | Revenue Impact |
|------|--------------|--------|---------------|
| Grizzly Star $1,836.63 overdue | Jun 17 | **No movement** | Cash flow liability |
| OpenTable past-due (~$746) | Jun 17 | Unknown | Vendor relationship |
| Southern Glazer's reply to Lia Shivers | Jun 17 | **Not sent** | Beverage cost savings |
| Chef Recruitment (25 candidates, 0 replies) | Jun 19 | **Stalled** | Blocks catering launch |
| Journalist Outreach (17 ready, none sent) | Jun 19 | **Not sent** | PR/backlink pipeline |
| Dream 100 (123 comments ready) | Jun 19 | **Not posted** | Social proof/reach |
| STR Host Outreach (8 emails drafted) | Jun 19 | **Not sent** | Catering lead channel |
| Energy Contract (TXU reply to Nichole) | Jun 19 | **Not sent** | Locks $0.0729/kWh rate |
| Dallas Trinity FC cross-promo | Jun 17 | **Not sent** | World Cup synergy |
| Grasshopper Bank SBA docs | Jun 17 | **No movement** | Financing |
| VPS↔origin git reconciliation | Jun 22 | **Not done** | Technical debt |
| 7 GSC indexing URLs remaining | Jun 20 | **Not submitted** | SEO indexing |

**Pattern:** Most stalled items are "ready to send" outreach that requires Darrell to click Send or make a phone call. The bottleneck is owner bandwidth, not preparation.

---

## World Cup 2026 — 2 Days to Japan vs Sweden (Jun 25)

**Tournament started Jun 11.** Japan's next match: **Jun 25 vs Sweden** (Group C, AT&T Stadium).

**Shipped:**
- World Cup watch party page live at /world-cup-2026 (indexed in Google)
- /celebrations/world-cup page (indexed after manual GSC request)
- Counter cards for Chioma Ubogagu event designed (PNG + PDF, both locations)
- Social media content drafted (READY_TO_PUBLISH_2026-06-23_AM.md)
- Samurai Blue Special ($42 sashimi combo + complimentary edamame) approved

**Still blocked:**
- Social media posts not published (Chrome MCP gate blocks autonomous posting)
- FOX 4 "Good Day" segment status unclear (Melinda Thomas 👍 reaction Jun 18, no firm booking confirmation; segment was pitched for Jun 25)
- Chioma partnership event logistics need confirmation

**Recommended actions before Jun 25:**
1. Publish the drafted social media content manually
2. Confirm FOX 4 segment with Melinda Thomas (reply today — 2 days out)
3. Confirm Chioma event details (date, time, location)
4. Brief staff on Samurai Blue Special at both locations

---

## Revenue Pipeline Summary

| Channel | Status | Est. Value | Blocker |
|---------|--------|-----------|---------|
| Nightly SEO content | ✅ Running | Long-term organic | None |
| Google Ads (conversion tracking) | ✅ Live | Attribution improvement | OpenTable server-side setup |
| World Cup promotions | 🟡 Partially shipped | Event-window revenue | Social posts not published |
| Catering prospecting | 🔴 Stalled | $5K–15K/event | Chef recruitment (0 replies) |
| Journalist/PR outreach | 🔴 Ready, not sent | Backlinks + press | Owner action |
| STR host outreach | 🔴 Ready, not sent | Recurring catering leads | Owner action |
| Dream 100 social | 🔴 Ready, not posted | Reach/engagement | Owner action |
| Birthday VIP Club | 🟡 Active (118 members) | Repeat visits | Pipeline consolidation needed |
| Customer Match (Google Ads) | ✅ Uploaded | Retargeting | None |

---

## Recommended Priority Actions (Today)

1. **Reply to IRS transcript request** (Alec/Curt thread) — legal/compliance, overdue
2. **Complete LightHouse/Matsuda draft reply** — starred, draft already started
3. **Confirm Japanese TV filming logistics** (Jun 26 = 3 days away)
4. **Publish World Cup social content** manually — Japan match Jun 25
5. **Reply to FOX 4** (Melinda Thomas) to lock in Jun 25 segment
6. **Pay or contact Grizzly Star** ($1,836.63, 24 days overdue)
7. **Respond to 3+ Google reviews** or verify REP1 is handling them
8. **Confirm Pest Ranger appointment** for Frisco
9. **Reset VPS CPU steal** via hPanel → Ask AI (Kodee) chat

---

## Automated Systems Status

| System | Status | Last Run |
|--------|--------|----------|
| Nightly SEO batch | ✅ Running | Jun 23 (Batch 5) |
| R1 Revenue Intelligence | ✅ Running | Jun 22 brief received |
| n8n orchestrator | ✅ Healthy | Verified Jun 23 |
| REP1 review response | ⚠️ Unclear | 3+ reviews unanswered |
| IndexNow submissions | ✅ Automated per batch | Jun 23 (25 URLs) |
| VPS CPU monitor | ✅ Running | Cron */10 min |
| Archive failover (3003) | ✅ Running | Up 2 days |

---

*Report generated by automated progress review task. Next scheduled run: ~24 hours.*
