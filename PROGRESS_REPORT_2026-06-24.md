# Jinbeh Progress Report — June 24, 2026

**Generated:** Tuesday, June 24, 2026 (automated `project-progress` task)
**Report period:** Jun 21–24, 2026

---

## CRITICAL: n8n Task Runner BROKEN — REP1 + R1 Non-Functional

**Severity: HIGH — revenue and reputation impact**

All 4 active n8n workflows (REP1, R1, VIP1, Rating Handler) are registered as "active" but the task runner is **rejecting every task** with `"Offer expired - not accepted within validity window"`. This means:

- **REP1 (Review Response Agent)** is NOT responding to Google reviews. At least 6 new reviews in the past 7 days are likely unanswered (Cheryl, Nsgslim, Joshua, Brad, Xolotlakatl Fuentes, Kevin Manning).
- **R1 (Revenue Intelligence)** daily email briefs may not be sending (the Jun 23/22 alerts seen in Gmail may be from before the runner broke, or the runner issue is intermittent).
- **VIP1** (website signups → Sheets) and **Rating Handler** are also affected.

**Root cause:** This is the same task-runner subsystem issue from the Jun 7/16 incidents. n8n 2.6.4 made task runners mandatory; the current Alpine image lacks Python 3, and the external runner setup appears to have degraded again. The "Offer expired" messages indicate the task broker is creating tasks but no runner picks them up before the validity window closes.

**Recommended fix:**
1. SSH to VPS, check `docker logs n8n-n8n-1 --since 24h | grep -c "Offer expired"` to confirm volume
2. Restart the external task runner: `docker compose -f /opt/n8n/docker-compose.yml restart` (or just the runner service)
3. If runner container is gone, recreate per the Jun 7 CLAUDE.md entry (ghcr.io/n8n-io/runners:2.6.4)
4. Long-term: pin n8n to a pre-mandatory-runner version, or upgrade VPS to 4-vCPU

---

## URGENT: Japan vs Sweden — TOMORROW (June 25)

**Match:** Japan vs Sweden, FIFA World Cup 2026 Group Stage, AT&T Stadium, Arlington TX
**Status:** Content drafted but NOT published (blocked on Chrome MCP gate in prior sessions)

### Action items (TODAY):
- [ ] **Publish World Cup social media content** — posts for Instagram/TikTok/Facebook drafted in prior sessions. Need manual publish or schedule via Meta Business Suite
- [ ] **Verify /world-cup-2026 and /celebrations/world-cup pages are live** — both deployed and indexed, but confirm featured Samurai Blue Special promo ($42 sashimi + complimentary edamame) is visible
- [ ] **FOX 4 "Good Day" segment status** — Melinda Thomas (Melinda.Thomas@fox.com) gave a thumbs-up Jun 18 but NO firm booking confirmation. This was flagged Jun 19 and Jun 23 with no resolution. If the segment was for Jun 25, it's likely dead. Confirm with Zachary Wilson (zachary.wilson@elitetalentadvisors.us)
- [ ] **Chioma Ubogagu event logistics** — no update since prior reports. Is she attending the match or hosting at Jinbeh?
- [ ] **Google Ads World Cup ad group** — verify it's active and serving for match-day queries

---

## URGENT: Keru Tomeru Japanese TV Filming — FRIDAY June 26

**Status: CONFIRMED** — Ruriko Akasaka's last email (Jun 23, 9:05 AM): "looking forward to visiting on Friday." Discussed takeout orders for crew.

### Restaurant prep checklist:
- [ ] Brief FOH + BOH staff on filming (camera crew in the restaurant)
- [ ] Confirm which location (likely Lewisville based on thread context)
- [ ] Prepare the dining room — clean, well-lit, visually appealing
- [ ] Have menu highlights ready for on-camera discussion
- [ ] Coordinate takeout orders for crew (per email discussion)
- [ ] Owner presence recommended for on-camera interview if requested

No reply needed to Ruriko — just execute the prep.

---

## VPS Health

| Metric | Value | Status |
|--------|-------|--------|
| Load average | 0.16 | Healthy |
| CPU steal | 33–60% (oscillating) | Needs Kodee reset |
| Prod response | ~10ms | Healthy |
| n8n /healthz | `{"status":"ok"}` | OK (but runner broken) |
| Disk | ~30GB free | OK |
| Containers | 7 running | Expected |

**CPU steal is recurring** (same sawtooth pattern as Jun 17, 19, 23). The site performs fine despite steal (10ms responses), but it degrades build times and may be contributing to the task-runner issue.

**Action:** Open hPanel → Ask AI (Kodee) chat → request CPU throttle reset on srv1144987 (same fix that worked Jun 17).

---

## Email Review Summary (YumYumJinbeh@gmail.com)

### Requires Action

| Item | Urgency | Action Needed |
|------|---------|---------------|
| **n8n task runner broken** | CRITICAL | Fix runner so REP1/R1 resume (see above) |
| **6 Google reviews unanswered** | HIGH | Fix REP1, then verify responses; if REP1 can't be fixed quickly, respond manually |
| **World Cup content unpublished** | HIGH | Publish today — match is tomorrow |
| **Keru Tomeru filming** | HIGH | Restaurant prep for Friday |
| **LightHouse/Matsuda case** | MEDIUM | Draft reply exists in Gmail thread (Jose said "received, thank you"). Complete and send the draft |
| **Lincoln Moore logo proof** | MEDIUM | "jinbeh july proof" PDF received — review and approve/reject |
| **IRS Form 4506-T** | MEDIUM | Alec/D/Curt thread — "Just wanted to check up on..." needs status reply |
| **CPU steal** | MEDIUM | Kodee chat reset |

### Informational (No Immediate Action)

- **R1 Revenue alerts:** Jun 23 total $8,343; Jun 22 total $8,031. Frisco Monday was 23% below normal ($1,821 vs ~$2,365 Mon average). Worth monitoring but not alarming for a single day.
- **Staples print order** confirmed and processing
- **OpenTable guest export** ready for download
- **Weitzman Group** payment processing transition notice (starred) — review when convenient
- **Nightly SEO content batch 6** deployed successfully Jun 24 (25 pages, 138 total covered, 140 remaining)
- **FAQ-ranges + footer internal-links** deployed successfully Jun 24 at 2:30 AM

---

## Google Reviews (Last 7 Days)

6 new reviews detected. REP1 is active but task runner is broken, so responses are likely NOT being sent.

| Reviewer | Location | Notes |
|----------|----------|-------|
| Xolotlakatl Fuentes | TBD | 5-star (per Gmail AI overview) |
| Kevin Manning | TBD | 5-star, "noted that the wa..." (per Gmail AI overview) |
| Cheryl | Frisco | Review notification received |
| Nsgslim | Lewisville | Review notification received |
| Joshua | Lewisville | Review notification received |
| Brad | Frisco | Review notification received |

**Action:** Fix n8n task runner FIRST. If that takes >24h, manually respond to all 6 reviews using the Gracious Host voice (per brand guide). Review velocity of 6/week is healthy — maintain this pace through World Cup window.

---

## Stalled Items Tracker

Items flagged in 3+ consecutive progress reports with no movement:

| Item | Consecutive Reports | Status | Blocking Factor |
|------|-------------------|--------|-----------------|
| **Grizzly Star invoices** | **6+** | $1,836.63 overdue (INV-7381 $367.51 + INV-7380 $1,469.12), now **25+ days** since May 30 | Owner bandwidth |
| **Southern Glazer's reply** | 5+ | Analysis done, reply to Lia Shivers not sent | Owner bandwidth |
| **Chef recruitment** | 5+ | 25 candidates identified, 0 outreach replies | Owner bandwidth |
| **Journalist outreach** | 5+ | 17 DFW journalists, 20 pitches ready to send | Owner bandwidth |
| **Dream 100** | 5+ | 41 targets, 123 comments ready to post | Owner bandwidth |
| **STR outreach** | 5+ | 8 PM outreach emails drafted in Gmail | Owner bandwidth |
| **Energy contract (TXU)** | 5+ | Reply to Nichole Knapik to lock in $0.0729/kWh 60-month | Owner bandwidth |
| **Dallas Trinity FC pitch** | 4+ | Cross-promo drafted, not sent | Owner bandwidth |
| **IRS 4506-T / Transcript** | 3+ | "Check up on" email needs status reply | Owner bandwidth |
| **FOX 4 segment** | 3+ | Melinda Thomas 👍 but no firm booking | Unclear if still happening |
| **Canva Pro expired** | 2+ | Affects content creation workflow | Owner action needed |

**Pattern:** Nearly all stalled items are "ready to send" outreach blocked on owner bandwidth. The World Cup window (Jun 11–Jul 19) is the highest-leverage period for several of these (journalist outreach, Dream 100, Dallas Trinity FC). Every day of inaction during the tournament is lost opportunity.

**Recommendation:** Batch the top 5 outreach items into a single 30-minute "send session" — just open Gmail and hit send on the already-drafted emails. Prioritize:
1. Grizzly Star payment follow-up ($1,836.63 at risk)
2. Energy contract reply (locks in savings)
3. IRS 4506-T status reply (compliance)
4. 3-5 journalist pitches (World Cup timing)
5. 3-5 Dream 100 comments (World Cup timing)

---

## Website / SEO Progress

### Completed Since Last Report (Jun 23-24)

- **Content batch 6 deployed** (Jun 24): 25 new PageSeoBoost entries — sashimi (3), sushi rolls (14), Lewisville appetizers (6), Lewisville cocktails (2). Total: **138 of 276 routes covered** (140 remaining, ~6 more nightly runs).
- **FAQ price→ranges deployed** (Jun 24 2:30 AM): Hibachi-cost FAQ now shows "$25 to $50 per person" ranges instead of granular prices. Broken `/hibachi-for-two` links fixed (→ `/specials#hibachi-for-two`).
- **Footer internal-link blocks deployed** (Jun 24 2:30 AM): "Popular Questions" (15 FAQ links) + "Explore the Menu & Occasions" pills now appear site-wide. This is the primary fix for the 60 "Discovered – not indexed" GSC pages that had no referring links.
- **IndexNow** submitted for all changed URLs — HTTP 200 confirmed.
- **GSC indexing requested** for hibachi-cost FAQ (priority crawl queue).
- **Dead 2024 sitemap removed** from GSC (sitemap_index.xml).

### On Track

- Nightly SEO content batches running automatically (25/night, self-disables when complete)
- GSC trending UP: 311 indexed (was 84 in May), 1,910 clicks with Jun 16-20 spike
- Next batch (tonight ~3:40 AM): will cover more Lewisville items + remaining Frisco pages

### Blocked

- **Local git commits** still blocked by stale `.git/index.lock` in sandbox — deploy works via rsync but history isn't tracked. Need to `rm .git/index.lock && git add -A && git commit` from the real Mac Terminal.
- **VPS↔origin reconciliation** NOT done (Jun 22 entry). Branch `vps-live-snapshot` preserves the live state, but the 28-file keep-both merge hasn't been done. Low risk since rsync deploys work, but git history is incomplete.

---

## Revenue Trends

From R1 email alerts in Gmail:

| Date | Total Revenue | Notes |
|------|-------------|-------|
| Jun 23 (Mon) | $8,343 | Frisco Monday was 23% below normal ($1,821) — 1 alert |
| Jun 22 (Sun) | $8,031 | 1 alert |

Monday dip is worth watching but not alarming as a single occurrence. World Cup match days (starting tomorrow) should provide a lift if promotions are published.

---

## Automated Systems Status

| System | Status | Notes |
|--------|--------|-------|
| **Nightly SEO batch** | Running | Batch 6 completed today; batch 7 tonight |
| **REP1 (review responses)** | **BROKEN** | Task runner rejecting all tasks |
| **R1 (revenue briefs)** | **BROKEN** | Same task runner issue |
| **VIP1 (signup → Sheets)** | **BROKEN** | Same task runner issue |
| **Jinbeh prod website** | Healthy | 200 in ~10ms, all pages serving |
| **n8n core** | Running | /healthz ok, but runner subsystem failed |
| **nginx failover** | Active | 3003 backup ready |
| **CPU monitor cron** | Active | Logging to /var/log/jinbeh-cpu-monitor.log |

---

## Priority Actions (Ranked)

### Do Today (Jun 24)
1. **Fix n8n task runner** — REP1/R1/VIP1 are all down. This is the single highest-impact fix.
2. **Publish World Cup social content** — Japan vs Sweden is TOMORROW
3. **Respond to 6 Google reviews** (manually if REP1 can't be fixed today)
4. **Kodee chat reset** for CPU steal

### Do This Week
5. **Prep restaurant for Keru Tomeru filming** (Friday Jun 26)
6. **Send Grizzly Star payment follow-up** ($1,836.63, 25+ days overdue)
7. **Reply to IRS 4506-T check-up email**
8. **Complete and send LightHouse/Matsuda draft reply**
9. **Review Lincoln Moore logo proof**
10. **Reply to energy contract** (TXU $0.0729/kWh lock-in)

### This Month
11. **Batch-send journalist outreach** (World Cup timing critical)
12. **Post Dream 100 comments** (World Cup timing critical)
13. **Send STR outreach emails**
14. **Reconcile VPS↔origin git** (branch `vps-live-snapshot` exists)
15. **Commit local changes from Mac Terminal** (clear `.git/index.lock`)

---

*End of report. Next automated progress review scheduled per task configuration.*
