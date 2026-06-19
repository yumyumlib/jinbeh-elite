# Jinbeh Progress Report — June 17, 2026 (Automated)

**Generated:** Tuesday, June 17, 2026 (scheduled task, owner not present)
**Coverage:** Sessions from June 12–17, plus VPS health check

---

## EXECUTIVE SUMMARY

The World Cup is LIVE (Day 7 of 39). Father's Day is THIS SUNDAY (June 21). The VPS CPU steal issue was resolved by Hostinger earlier today but appears to be recurring. The World Cup + SEO deploy has been attempted twice and failed both times due to VPS build-load constraints. Several revenue-generating items (beverage partnership reply, Father's Day email campaign, daily social posting) are stalled awaiting manual action.

---

## CRITICAL / TIME-SENSITIVE ITEMS

### 1. VPS CPU Steal is Recurring (URGENT)
**Status:** Hostinger reset the throttle earlier today (steal dropped 89% → 0%), but monitoring shows it's oscillating 7–90% again in a sawtooth pattern.
**Impact:** Slows site response (12ms → 1.5s under steal), degrades Googlebot crawling, blocks Docker builds for deploys.
**Recommended Action:**
- Re-submit the CPU steal ticket via hPanel → Ask AI (Kodee). The ticket text is ready at `HOSTINGER_TICKET_CPU_STEAL.md`. Last time, Kodee found and reset the restriction immediately.
- If steal keeps recurring after multiple resets, escalate to human support or upgrade the VPS plan (4 vCPU). The 2-vCPU box is structurally overcommitted even with containers trimmed to 7.

### 2. Father's Day (June 21) — 4 Days Away
**Completed:**
- OpenTable slots cleaned (removed :15/:45, 30-min intervals only)
- Facebook + both GBP locations posted (Father's Day social content)
- Revenue analysis complete (Father's Day = 2.25x normal June Sunday, #1 Sunday, surge at lunch)

**Still Outstanding:**
- **Father's Day Email Campaign 2:** Was mid-build in Smartlead when session ended. NOT launched. Needs completion and send.
- **Grubhub Father's Day hours:** Not set. Both locations need special hours entered in the Grubhub merchant portal.
- **Menu printing:** Flagged as urgent by J Hill in a prior session. Status unknown.
- **Extended hours decision:** Analysis recommends opening at 11am and running through the 2:30–5pm gap. No late-night (zero late-night sales on historical Father's Days). Needs owner confirmation to implement.

### 3. World Cup + SEO Deploy — Twice Attempted, Never Completed
**Status:** Changes are staged in local repo AND rsynced to VPS `/opt/jinbeh-elite/src/`. Two build attempts failed:
- June 15 (daytime): Load hit ~20, degraded live site. Aborted.
- June 16 (~2 AM): npm ci cache miss → load climbed past 12 threshold. Aborted.

**What's waiting to deploy:**
- World Cup 2026 page rewrite (evergreen pre/during/after-match CTAs)
- JSON-LD price/offer removal from AllSchemas.tsx (long-standing cleanup)
- Footer "World Cup 2026 Watch Parties" link
- Deploy tooling improvements (docker-compose prod profile, deploy.sh one-command script)

**Recommended Fix Before Retrying:**
1. Add `.dockerignore` entries to shrink the 2.37GB build context (public/ is the bulk)
2. Warm the npm ci layer first (build with just package*.json to cache deps)
3. Use `--cpuset-cpus` to leave a core for prod during build
4. Retry at lowest-traffic window (2–4 AM Central), abort threshold ~12
5. CPU steal MUST be 0% before attempting — check monitor first

### 4. Keru Tomeru Japanese TV Filming — June 26 (9 days)
**Status:** Ruriko requested a call at 5PM and visit on June 26. From prior email review, response status is unclear.
**Recommended Action:** Confirm or respond to Ruriko ASAP. This is free national Japanese TV exposure during the World Cup window — extremely high value.

---

## REVENUE & PARTNERSHIPS

### 5. Southern Glazer's Beverage Partnership
**Status:** Lia Shivers sent a beverage menu/proposal. Full analysis complete (Excel model + Word report created in a prior session). Reply has NOT been sent.
**Recommended Action:** Review the beverage strategy report and reply to Lia. The analysis showed strong margin opportunity. This is a warm lead from a major distributor — don't let it go cold.

### 6. Chioma Ubogagu Partnership
**Status:** Partnership is signed and LIVE. Email campaign sending to 757 leads via Smartlead. Zachary Wilson follow-up still needed.
**Recommended Action:** Check Smartlead campaign analytics. Follow up with Zachary Wilson.

### 7. OpenTable Past Due — $746.47
**Status:** Flagged in email review from a prior session. Payment status unknown.
**Recommended Action:** Pay or dispute the balance. OpenTable could suspend the listing, which would be catastrophic for Father's Day and World Cup reservations.

### 8. Grasshopper Bank / SBA Loan — Zach McDonald
**Status:** Documents were 5+ days overdue as of the last email review. No update since.
**Recommended Action:** Check email for updates from Zach McDonald. Submit any outstanding documents.

---

## MARKETING & CONTENT

### 9. Daily Social Content Posting
**Status:** Content is being drafted in sessions (e.g., `READY_TO_PUBLISH_2026-06-17_AM.md` was created but appears to have been consumed/moved). Actual posting to Instagram/Facebook/GBP is blocked — requires Chrome browser permission gate that only works when the owner is present.
**Recommended Action:** When online, approve the Chrome permission gate so queued posts can go out. Consider setting up a buffer/scheduling tool (Later, Hootsuite, or Meta Business Suite scheduler) to decouple drafting from publishing.

### 10. Dallas Trinity FC Cross-Promo
**Status:** Pitch drafted but not sent.
**Recommended Action:** Send the partnership pitch. Trinity FC is a local soccer team — natural World Cup cross-promo opportunity with a short window of relevance.

### 11. Google Review Baselines Captured
**Status:** Frisco 800 reviews / 4.2★, Lewisville 957 reviews / 4.5★ (as of recent session).
**Note:** These are healthy baselines. The REP1 review response agent is operational (deployed V2). The Dream 100 campaign (41 targets, 123 comments ready) and journalist outreach (17 journalists, 20 pitches) remain in "ready to send" status.

---

## INFRASTRUCTURE & TECHNICAL

### 12. VPS Container Status (Healthy)
**Running (7):** jinbeh-prod, jinbeh-archive, n8n-n8n-1, n8n-postgres-1, espocrm, espocrm-db, hermes-agent
**Stopped (8+):** jinbeh-staging, wordpress (×2), immich (×4), remnanode — all intentionally paused to free CPU
**Prod:** Up 43 hours, healthy, serving 200 at 12ms (when steal is 0%)
**Disk:** 80% used (20GB free) — getting tighter. Next build will consume ~3GB cache. Consider pruning old Docker images if builds fail on space.

### 13. n8n Automation Platform
**Status:** Fixed the task-runner 403 loop that was the root cause of the CPU spike. n8n healthcheck is OK, CPU dropped from ~98% → ~2%.
**Known Issue:** R1 (revenue intelligence) and REP1 (review response) daily automations may still be impacted if the n8n task-runner subsystem isn't fully settled. The CLAUDE.md notes that n8n "never finishes startup" with the mandatory task-runner in 2.6.4. Verify R1 daily email is flowing (should fire at 7 AM CT).

### 14. GSC / SEO Status
**Last checked:** 311 indexed / 120 not indexed (up from 84/331 in May — strong improvement). The content-uniqueness + internal-linking deploy (June 15) targeted the ~73 "Discovered/Crawled – not indexed" pages. The 5xx server error bucket is down to 1 URL. Validate Fix was clicked; waiting on Google's re-crawl.

---

## EMAIL REVIEW STATUS

**Note:** The Gmail MCP connector was not available in this session (showed "still connecting" but never resolved). Email insights below are sourced from recent session transcripts that did access the inbox.

**Known email items from prior sessions (status may have changed):**
- Ruriko / Keru Tomeru TV filming request — needs response (see item #4)
- Lia Shivers / Southern Glazer's beverage proposal — needs reply (see item #5)
- Zach McDonald / Grasshopper Bank SBA docs — overdue (see item #8)
- OpenTable past due $746.47 — needs payment (see item #7)
- Hostinger CPU throttle confirmation — RESOLVED (Kodee reset it)
- Google Search Console notifications — addressed in prior sessions

**Recommendation:** When next online, review the full YumYumJinbeh@gmail.com inbox for anything new in the last 48 hours. The Gmail MCP connector should be checked in Settings to ensure it's properly authenticated.

---

## PRIORITIZED ACTION LIST

| Priority | Item | Owner | Effort |
|----------|------|-------|--------|
| **P0** | Re-submit Hostinger CPU steal ticket if steal > 40% | Darrell | 5 min |
| **P0** | Pay/resolve OpenTable $746.47 past due | Darrell | 10 min |
| **P0** | Respond to Ruriko (Keru Tomeru TV, Jun 26) | Darrell | 10 min |
| **P1** | Complete + send Father's Day email campaign 2 | Darrell + AI | 30 min |
| **P1** | Set Grubhub Father's Day hours | Darrell | 10 min |
| **P1** | Confirm Father's Day extended hours (open 11am, close 9pm) | Darrell | 5 min |
| **P1** | Reply to Lia Shivers (Southern Glazer's) | Darrell | 15 min |
| **P2** | Retry World Cup deploy (after steal = 0%, off-peak) | AI | 30 min |
| **P2** | Send Dallas Trinity FC cross-promo pitch | AI draft → Darrell send | 10 min |
| **P2** | Follow up with Zachary Wilson (Chioma partnership) | Darrell | 10 min |
| **P2** | Check R1/REP1 daily automation health | AI | 15 min |
| **P3** | Submit outstanding SBA loan docs to Zach McDonald | Darrell | varies |
| **P3** | Set up social media scheduling tool | Darrell | 30 min |
| **P3** | Review menu printing status with J Hill | Darrell | 5 min |

---

## WHAT I ACTED ON THIS SESSION

This was an automated review session. Direct actions taken:
1. **VPS health check** — confirmed prod is serving 200, identified recurring CPU steal
2. **Session transcript review** — reviewed ~12 recent session transcripts to compile stalled items
3. **This progress report** — compiled and saved to the project folder

**Could not act on (blocked):**
- Gmail review (MCP connector unavailable)
- Social media posting (requires Chrome permission + owner presence)
- World Cup deploy (CPU steal must be 0% first)
- Sending any emails/messages on behalf of the owner (requires explicit permission)

---

*Next automated check should verify: (1) CPU steal resolved, (2) Father's Day prep complete, (3) World Cup deploy succeeded, (4) R1/REP1 automations flowing.*
