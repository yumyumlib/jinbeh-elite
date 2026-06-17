# Jinbeh Progress Report — June 4, 2026

## Revenue Trend (R1 Daily Briefs)

| Date | Revenue |
|------|---------|
| Jun 1 (Sun) | $7,635 |
| Jun 2 (Mon) | $8,092 |
| Jun 3 (Tue) | $6,103 |

Jun 3 dropped 25% from Jun 2. Could be natural Tuesday variance, but worth watching. OpenTable seated **2,113 diners in May** (per OpenTable monthly summary received today).

---

## URGENT — Reply Today

### 1. Zachary Wilson / Chioma Partnership (2 days waiting)
**Status:** Zachary countered Jun 2 at 7:09 AM: **$500 flat fee + uncapped commission** (you offered $500 + $500 cap). A scheduled reply exists in YumYumJinbeh drafts going out at 8:00 AM today — verify it says what you want before it sends.

**Recommendation:** Accept. Uncapped commission aligns incentives perfectly — Chioma earns more only if Jinbeh earns more. The cap was only saving $500 max. With Japan's first match **10 days out (June 14)**, finalize immediately and get the booking code attribution mechanism set up.

### 2. Laura Davis / Chamber × Stars Catering (6-message thread)
**Status:** Thread has 6 messages. Previous progress report flagged she confirmed "no alcohol" for the Chamber × Stars event (~100 guests, Aug 9). 

**Action:** Confirm the food-only catering option and propose next steps to lock the booking.

### 3. "Reaching Out" to Ali and Salam (sent 4 days ago, no reply)
**Status:** Gmail shows "Sent 4 days ago. Follow up?" on a message to Ali and Salam.

**Action:** Send a brief follow-up. The World Cup angle gives you a natural re-hook.

---

## URGENT — Signature Required

### 4. SpotDraft / Zipline — SMB Order Form
Kaelen Wilber sent a contract via SpotDraft (Jun 3, 11:36 PM) requesting your signature on "Jinbeh Inc. SMB Order Form." Also sent a "22% Agreement Offer" email.

**Action:** Review the agreement terms carefully before signing. This appears to be a vendor/service agreement — read the full document to understand what you're committing to and at what cost.

---

## GBP Reviews — REP1 Partially Working

| Review | Location | Status |
|--------|----------|--------|
| Gary — **0 star** | Frisco | REP1 generated a response (visible in inbox) |
| 2 new reviews | Lewisville | GBP notification received, no REP1 response seen |
| Lily — review | Lewisville | GBP notification received, no REP1 response seen |

REP1 appears to have responded to the Frisco 0-star review from Gary (good), but the Lewisville reviews don't show REP1 auto-responses. The n8n workflow is active (verified via VPS check), so the trigger path for Lewisville reviews specifically may need investigation.

**Action:** Check that the Gary 0-star response is appropriate before it posts (if it hasn't already). Investigate why Lewisville reviews aren't triggering REP1.

---

## VPS Health

| Metric | Value | Status |
|--------|-------|--------|
| Disk | 81% (19 GB free) | ⚠️ YELLOW — was 87% last report, improved but still risky |
| Containers | 16/16 running | ✅ |
| jinbeh-prod | HTTP 200 | ✅ |
| Memory | 4.2 GB / 7.8 GB | ✅ |
| Load avg | 3.68 / 2.86 / 2.41 | ⚠️ Elevated |
| n8n | Healthy, 29 days uptime | ✅ |
| nginx errors | 4 (brief restart window 03:12 UTC) | ✅ Not recurring |

**Action needed:** Prune old Docker rollback images to reclaim 15-20 GB. Two `rollback-20260603-*` tags are safe to remove if current prod is stable. Run: `docker rmi jinbeh-elite:rollback-20260603-attr11-pre jinbeh-elite:rollback-20260603-attr5-pre && docker image prune`

---

## Stalled Projects — No Progress in 7+ Days

### 5. PAA FAQ Pages (stalled since May 12 — 23 days)
76 pages built at `/faq/[slug]`, would bring site from 254 to 361 URLs. Deploy script ready at `~/Documents/deploy-paa-cleanup.sh`. The async params bug and catch-all redirect were fixed and deployed May 30, but the full 76-page set still needs the deploy script run.

**Action:** Run the deploy script. This is the single biggest SEO content expansion sitting on the shelf.

### 6. TXU Energy Contract (stalled 3+ weeks)
60-month rate at $0.0729/kWh from Nichole Knapik. No reply sent.

**Action:** Reply to lock in the rate or decide to pass. Every week of delay risks losing the quoted rate.

### 7. Chef Recruitment (stalled — 0 replies from 25 candidates)
Pipeline has 25 named candidates with zero responses. The A+ targets (Thi Tran, Masa Tanaka, Ken) haven't replied.

**Action:** Broaden the pipeline. Try different outreach channels (industry groups, culinary school networks, Indeed/Culinary Agents postings). The current approach isn't generating responses.

### 8. GBP Audit — 10 Fixes (stalled since May 12)
Opening date, Lewisville description rewrite, Frisco name verification, and 7 other items identified. None completed.

**Action:** Start with the highest-impact items: opening date correction and Lewisville description rewrite. These are 10-minute fixes with outsized local SEO impact.

### 9. Journalist Outreach (ready but unsent)
17 DFW journalists identified, 20 pitches drafted. None sent.

**Action:** With World Cup 10 days out, this is the perfect news hook. Send the World Cup-angle pitches to the sports/food journalists NOW.

### 10. Dream 100 / STR Outreach (ready but unsent)
41 Dream 100 targets with 123 comments ready. 8 STR PM outreach emails drafted in Gmail.

**Action:** Start executing the Dream 100 comments (5-10/day). Send the STR outreach — World Cup gives urgency for short-term rental hosts.

### 11. Feedback Forms (built, not deployed)
Forms built in Next.js, DB migration not run, Cloudflare redirect rules not created.

**Action:** Run the DB migration on VPS, deploy code, add Cloudflare redirect rules.

---

## Active & Progressing

### Google Ads (progressing well)
- Campaign-specific conversion goals: ✅ Set (excluding noise like directions/engagements)
- GCLID + UTM passthrough: ✅ Deployed to prod
- Customer Match (7,363 contacts): ✅ Uploaded
- Weekly OpenTable upload: ✅ Scheduled Thu 9:42 PM
- Enhanced Conversions: ✅ ON
- **Pending:** Catering lead form value $120→$70 (Task #150)
- **Pending:** WC ad group needs 2FA device approval to save
- **Pending:** Resolve duplicate keywords between Lunch Deal and main Frisco campaigns

### World Cup 2026 Pages (deployed Jun 1)
- Pillar `/world-cup-2026` expanded with 9-match schedule + Fan Festival
- Location pages `/frisco/world-cup` and `/lewisville/world-cup` live
- Factual corrections applied (Japan match dates/times)
- **Pending:** Owner approval needed for any promotional pricing (Samurai Blue Experience, "Gol! Goals for Deals")

### Lunch Special Email Campaign (likely complete)
2,052 leads (groups A-C and M-R) sending via Smartlead at ~1,200/day. Should have finished by Wed Jun 3.

**Action:** Check Smartlead to confirm completion and review open/click metrics.

### R1 Revenue Intelligence (running daily)
Daily 7:00 AM CT briefs sending successfully. Revenue data flowing from Focus POS binary decoder.

### SEO / Indexing (improving)
- May 31 deploy fixed unparsable JSON-LD and intermittent 502s (the nginx IPv6 root cause)
- GSC confirmed structured data issues "successfully fixed"
- **Still watching:** 263 "Discovered, not indexed" pages — should improve now that 502s are eliminated

---

## Scheduled Tasks — Infrastructure Issues

### Nightly Vault Sync & Obsidian Updates — BOTH FAILING
Both scheduled tasks are hitting session limits and returning "resets 1:10am" without completing any work. This means the Obsidian vault is NOT being kept in sync with daily activity.

**Action:** Reduce the scope of these tasks or split them into smaller increments so they complete within the session limit.

---

## Other Email Items (YumYumJinbeh)

| Item | Action |
|------|--------|
| Facebook Business Manager partner requests (x2) | Review who's requesting and accept/decline |
| Google Ads — "missing most important step" | Likely about Enhanced Conversions setup — already done, safe to ignore |
| Republic Services invoice 06/02 | Pay/file |
| Accounting — Signature Hospitality Services invoice JNBE 5.31.2026 | Review and pay |
| Capital One — Spark Miles statement ready | Review |
| OpenTable pre-shift digests (2, 5, 7 reservations) | Informational |

## Other Email Items (darrellshill)

| Item | Action |
|------|--------|
| Nooshin — CAR PAYMENT with US BANK.pdf | Handle car payment |
| Nancy Macias / Tom Cameron — Friday Chat | Meeting tomorrow 2-3 PM via Teams |
| Ryan — Check Verification | Check verification done |
| Monarch — Transactions need review | Review categorizations |
| LightHouse 401(k) — Fidelity bond decision | Call 425-289-3200 x3320 to check if Guidant already has a bond before buying Colonial Surety ($1,040.80) |

---

## Priority Action List (Sorted by Urgency)

1. **TODAY** — Verify/edit the scheduled Chioma reply before 8 AM send
2. **TODAY** — Reply to Laura Davis to lock down Chamber × Stars catering
3. **TODAY** — Follow up with Ali and Salam
4. **TODAY** — Review SpotDraft/Zipline SMB Order Form before signing
5. **TODAY** — Check Gary's 0-star review and REP1's response
6. **THIS WEEK** — Run PAA FAQ deploy script (23 days stalled)
7. **THIS WEEK** — Send journalist outreach (World Cup hook, 10 days to first match)
8. **THIS WEEK** — Send STR host outreach emails
9. **THIS WEEK** — Reply to TXU energy contract (Nichole Knapik)
10. **THIS WEEK** — Docker image prune on VPS
11. **THIS WEEK** — Start Dream 100 comment engagement (5-10/day)
12. **THIS WEEK** — Approve World Cup promotional pricing
13. **THIS WEEK** — Fix scheduled tasks (vault sync + obsidian updates hitting limits)
14. **NEXT WEEK** — GBP audit top fixes (opening date, Lewisville description)
15. **NEXT WEEK** — Investigate REP1 Lewisville trigger path
16. **ONGOING** — Broaden chef recruitment pipeline
