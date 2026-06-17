# Jinbeh Progress Report — June 11, 2026 (World Cup Opening Day)

**Generated:** Thursday, June 11, 2026
**Covers:** June 7–11, 2026 (sessions, email, files, vault)

---

## CRITICAL — TODAY IS WORLD CUP OPENING DAY

The FIFA World Cup 2026 tournament runs June 11 – July 19. Today is Day 1.
Several World Cup items are still pending execution.

---

## 1. EMAIL ACTION ITEMS (YumYumJinbeh@gmail.com — 40 unread)

### REQUIRES DARRELL'S ACTION

| Priority | Email | Date | Action Needed |
|----------|-------|------|---------------|
| **URGENT** | Form 2848 — updated, needs signature | Jun 10 5:31 PM | Review attached updated Form 2848, sign and return to accountant |
| **URGENT** | IRS confirmation from Cook Keith & Davis | Jun 10 6:11 PM | "Over the last two days we confirmed by phone with the IRS that this specific c…" — read full email, may affect Matsuda lawsuit timing |
| **HIGH** | JIN BEH INC 2025 C-Corp tax return in queue | Jun 9 9:38 AM | Acknowledge; accountant says it's in their team's queue — no action yet but track |
| **HIGH** | Grubhub: Update operating hours for World Cup | Jun 8 3:30 PM | Update Grubhub hours if extending for tournament; tournament starts TODAY |
| **HIGH** | POS setup note (self-sent) | Jun 8 2:01 PM | "I need to set up POS item and menu prices… set up a table and/or banner" — Samurai Blue Special needs POS entry |
| **MEDIUM** | Roofer photos from property manager | Jun 10 9:44 AM | Review attached photos of reported roof issue |
| **MEDIUM** | Zachary Wilson / Chioma meeting notes (Otter.ai) | Jun 8 1:31–1:42 PM | Review shared Otter transcript + notes from Jun 8 call (Zach x Chi x Darrell) |
| **MEDIUM** | Max outreach — "What does the arrangement look like?" | Jun 10 2:41 PM | Darrell replied asking for details — await Max's response |
| **LOW** | Energy contract forwarded to Inggrid (Nichole Knapik) | Jun 10 1:14 PM | Delegated — monitor for Inggrid's follow-through |
| **INFO** | Instagram reel shared | Jun 10 12:04 AM | Someone shared reel DY9xkFqOLRu — review for content opportunity |

### STARRED EMAIL — JAPANESE TV / RURIKO

The starred email (Jun 10, 9:03 PM) reads: *"Thank you for your feedback Ru. I'm out of the office between now and Saturday unfor."* — This appears to be a reply in the GPAUSA/Ruriko Japanese TV filming thread. Someone is out of office until Saturday. **Follow up Monday June 15** if no further reply. The filming request for World Cup coverage at Jinbeh is still live.

### INFORMATIONAL (no action needed)

- R1 Revenue Intelligence Daily Briefs arriving daily (Jun 8, 9, 10) — R1 is working
- Pre-shift digests from Marqii firing for both locations (multiple per day) — working
- GBP performance: Lewisville 2,004 views / Frisco 1,533 views last month
- OpenTable Weekly Discovery Covers report for Frisco (Jun 8)
- GSC "Page with redirect" validation failure — already resolved (see CLAUDE.md Jun 9 entry)
- GBP "Reply to your reviews" reminders — REP1 agent is down (see n8n section below)
- Cook Keith & Davis $5,000 payment receipt (Jun 10 1:40 PM) — payment processed

---

## 2. PROJECT STATUS — STALLED / NEEDS ATTENTION

### A. WORLD CUP CAMPAIGN — PARTIALLY STALLED

**What's working:**
- Chioma Ubogagu partnership is live; Jun 8 call with Zachary Wilson happened
- 7 graphics created for the campaign (3 Chioma-led, 4 location-led)
- Campaign Command Center HTML file exists
- Daily post scheduler tasks created
- World Cup Google Ads ad group was set up (though 2FA blocked the initial save)
- `/celebrations/world-cup` page exists in codebase

**What's stalled:**
- `/celebrations/world-cup-watch-party` landing page — **NEVER DEPLOYED to production**. This has been flagged across multiple sessions as the "highest-leverage pending item." The page exists in the codebase but hasn't been pushed to VPS.
- Samurai Blue Special not confirmed in Focus POS
- Grubhub hours not updated for tournament
- No confirmation that World Cup ads are actively spending
- Chioma watch party is June 25 — 14 days away; landing page must go live

**Recommended actions:**
1. Deploy website update to VPS (includes WC watch party page + all recent fixes)
2. Verify Google Ads World Cup ad group is active and spending
3. Set up Samurai Blue Special in Focus POS today
4. Update Grubhub hours if extending for match days
5. Post today's World Cup opening day content on social channels

### B. n8n / R1 / REP1 — STILL BROKEN

**Status:** n8n 2.6.4 mandatory task-runner issue remains unresolved. The n8n process burns ~45% CPU even with 0 active workflows and never fully settles. R1 daily emails ARE arriving (verified in inbox — Jun 8, 9, 10 briefs all received at ~7 AM), so R1 appears to be working intermittently despite the task-runner issue. REP1 (review auto-replies) status is unknown — GBP keeps sending "Reply to your reviews" reminders, suggesting REP1 may not be responding.

**Recommended actions:**
1. Check if REP1 is actually responding to reviews or if it's stalled
2. Long-term: pin n8n to pre-2.6.4 version OR upgrade VPS from 2-vCPU
3. Keep EspoCRM daemon STOPPED (was the CPU storm culprit)

### C. MATSUDA ESTATE LAWSUIT — FILING TARGETED TODAY

Per the Jun 8 vault note, lawsuit filing was authorized and targeted for June 11 (today). The Cook Keith & Davis emails (Jun 10) confirm IRS-related activity — they "confirmed by phone with the IRS" over two days. The Form 2848 (power of attorney) needs Darrell's signature.

**Recommended action:** Read the full Jun 10 email from Cook Keith & Davis to understand what was confirmed with the IRS and whether it affects filing timeline. Sign and return Form 2848.

### D. WEBSITE DEPLOYMENT — BACKLOG OF UNDEPLOYED FIXES

Multiple code fixes exist locally but haven't been pushed to production:
- World Cup watch party landing page
- GSC redirect fixes (FAQ pages now return 200 — verified Jun 9)
- Father's Day analysis findings
- Any recent blog/content updates

**Recommended action:** Run a full deploy cycle to VPS:
1. rsync to VPS (excluding .claude, node_modules, .next, .git, .env*, log.env)
2. Docker build + QA on temp container
3. Tag rollback, promote to latest, recreate jinbeh-prod

### E. GOOGLE ADS — MAINTENANCE NEEDED

- 32 negative keywords added in recent sweep (documented in vault)
- Customer Match list uploaded
- Conversion tracking verified live
- **Pending:** Duplicate keywords between Lunch Deal and main Frisco campaigns need cleanup (self-competition)
- **Pending:** Verify World Cup ad group is active and spending on opening day

### F. CREDIT CONSOLIDATION — WAITING ON LOAN FUNDS

Allocation agreed: $17K Sapphire, $7K SWA, $1K Discover. Execute when loan funds arrive. No email activity on this in the last few days.

### G. SEATED PARTNERSHIP — DRAFT EMAIL READY

Darrell has a draft follow-up email. Decision needed on whether to send. No new activity in email.

---

## 3. ITEMS ALREADY AGREED TO — EXECUTION STATUS

| Item | Agreed? | Status | Blocked By |
|------|---------|--------|------------|
| Deploy WC watch party page | Yes (multiple sessions) | **NOT DONE** | Needs VPS deploy |
| Form 2848 signature | Yes (accountant sent) | **NEEDS SIGNATURE** | Darrell |
| Grubhub hours for WC | Yes (self-note Jun 8) | **NOT DONE** | Darrell |
| POS Samurai Blue Special | Yes (self-note Jun 8) | **NOT DONE** | Darrell (in-restaurant) |
| Energy contract (TXU) | Partially (forwarded to Inggrid) | **DELEGATED** | Inggrid response |
| Credit consolidation | Yes (allocation agreed) | **WAITING** | Loan funding |
| Google Ads WC ad group | Yes (created Jun 2) | **VERIFY SPENDING** | Check Ads dashboard |
| Japanese TV follow-up | Yes (replied to Ruriko) | **WAITING** | Contact OOO until Saturday |
| Chioma campaign posts | Yes (scheduler created) | **ONGOING** | Daily execution |

---

## 4. GBP & SEO PERFORMANCE SNAPSHOT

- **Frisco GBP:** 1,533 profile views last month
- **Lewisville GBP:** 2,004 profile views last month
- **GSC:** "Page with redirect" issue resolved — 3 FAQ pages now return 200, 16 intentional redirects confirmed correct
- **R1 Revenue:** Daily briefs arriving consistently (Jun 8, 9, 10 all at ~7 AM)
- **REP1 Reviews:** Possibly down — GBP sending "reply to reviews" reminders; check manually

---

## 5. RECOMMENDED PRIORITY ORDER FOR TODAY

1. **Read Cook Keith & Davis email** (IRS confirmation + Form 2848) — time-sensitive legal
2. **Deploy website to VPS** — unblocks WC watch party page, GSC fixes, all accumulated changes
3. **Verify Google Ads WC ad group** is active and spending on opening day
4. **Set up Samurai Blue Special in POS** — needs to be ready for tonight's service
5. **Update Grubhub operating hours** for tournament period
6. **Review Zachary/Chioma meeting notes** from Jun 8 — may have action items for Jun 25 watch party
7. **Post World Cup opening day content** on social channels
8. **Review roofer photos** from property manager
9. **Follow up on Japanese TV request** Monday if no reply by then

---

## 6. METRICS TO WATCH THIS WEEK

- Google Ads spend + conversions on World Cup ad group (opening day baseline)
- Website traffic to `/celebrations/world-cup` and `/celebrations/world-cup-watch-party` (post-deploy)
- R1 daily revenue — compare to prior year for World Cup lift
- GBP review response time (if REP1 is down, manual replies needed)
- Chioma campaign engagement on social posts

---

*Next scheduled review: project-progress task*
