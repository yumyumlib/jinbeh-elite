# Jinbeh Project Progress Report — June 1, 2026

## VPS & Infrastructure Health

All 16 Docker containers are running. Disk at 72% (28GB free), 3.7GB RAM available. Both prod (port 3002) and staging (port 3001) return HTTP 200. The May 31 nginx IPv6 fix is holding: **zero 502 errors** in the nginx error log since the fix.

**One concern:** Three upstream timeout errors logged today (5:26 AM and 9:13 AM CT). The 9:13 AM timeout was Yandex trying to fetch `/robots.txt` and getting a connection timeout to the prod container. This suggests the container occasionally becomes unresponsive under load. Not as severe as the old 502 pattern, but worth monitoring. If this recurs, consider increasing the container's memory limit or adding a health-check restart policy.

Sitemap: 368 URLs live on prod.

---

## URGENT: Emails Needing Replies Today

### 1. Laura Davis — Chamber × Stars Catering (4 days unanswered)

Laura asked **"Do you have the ability to serve wine and beer?"** on May 28 at 7:10 AM. No reply yet. This is a ~$1,600 catering deal for August 9.

**Recommended reply:** "Hi Laura, Yes, we do offer beer and wine service. We hold active TABC licenses at both our Frisco and Lewisville locations. For offsite catering events, we can coordinate beverage service depending on the venue's setup. I'd love to discuss the details for the August 9th event. Would a quick call this week work? Best, The Jinbeh Team"

**Action needed:** Reply today. Four days without a response risks losing the deal.

### 2. Zachary Wilson / Chioma Ubogagu Partnership (4 days unanswered)

Zachary sent updated partnership terms on May 28 at 5:03 PM with a performance commission structure (10% uncapped on Chioma-driven reservations via promo code). He's asking for confirmation to proceed with the contract addendum and start pre-promotion.

**World Cup kicks off June 11 — 10 days away.** Chioma content needs to start producing NOW for any pre-tournament benefit. Every day without confirmation is a day of lost pre-promotion runway.

**Action needed:** Reply confirming terms (or counter) so Zachary can send the contract.

### 3. Nieva / Google Ads (3 emails pending review)

Three emails from Nieva Josefin:
- "Your Google Ads Proposal" (with PDF attachment)
- "Setting Expectations for Your Google Ads Journey"
- Meeting invite

The Lunch Deal campaign ($20/day, Mon-Fri) is already live and running. The Google Analytics and Google Ads accounts have been linked. These emails likely contain the broader strategy proposal beyond the initial lunch campaign.

**Action needed:** Review the proposal PDF and respond. The meeting invite may need acceptance.

---

## New GBP Reviews (6 in last 3 days)

- **Lewisville batch:** "You got 4 new reviews"
- **Individual notifications:** Caleb (Frisco), April (Frisco, x2), Cassandra (Lewisville), Melisa (Lewisville)

**Action needed:** REP1 workflow exists in n8n (`vBdex56BtZ8xJq8l`) but shows no execution activity in the last 24 hours. The webhook trigger may not be receiving GBP review notifications, or the workflow may be inactive. Check n8n dashboard at `automation.jinbeh.cloud` to verify REP1 is active and the webhook is connected. In the meantime, respond to these reviews manually via GBP dashboard — 6 reviews without responses hurts local SEO rankings.

---

## Google Search Console — Validations In Progress

GSC sent multiple validation emails (all in the YumYumJinbeh inbox):
- "We're validating your **Page indexing** issue fixes" (4 messages in thread)
- "We're validating your **Events structured data** issue fixes"
- "We're validating your **Unparsable structured data** issue fixes"

This is GOOD news — GSC recognized the May 31 deployment fixes (JSON-LD cleanup, redirect fixes, sitemap guard) and started validation automatically. These typically take 1-2 weeks to complete.

**However, also received:** "New reasons prevent pages from being indexed" (2 messages) and "New Unparsable structured data issues detected." These need investigation in the GSC dashboard to identify which new pages/issues were flagged.

**Action needed:** Log into GSC at search.google.com/search-console, check the "Page indexing" and "Structured data" reports, and resubmit the sitemap.

---

## Other Email Items

| Item | Account | Action |
|------|---------|--------|
| Facebook Business Manager partner request (BM22...) | YumYumJinbeh | Review who sent it and accept/decline |
| Google Voice texts from (469) 667-8170 and (214) 854-8128 | YumYumJinbeh | Check messages — could be customer inquiries |
| Nancy (Signs) — "Send a graphics in a PDF for..." | YumYumJinbeh | Respond with sign artwork if available |
| Nooshin — US Bank May 2021 car loan docs + CAR PAYMENT | darrellshill | Directly relevant to Tesla loan question in M&A dispute. Review and forward to Jose if useful for §6.08 setoff |
| Nooshin — Re: Jinbeh Frisco (ANDY TRAN.pdf) | darrellshill | Likely a new hire or staffing matter |
| Nooshin — Payroll direct deposit receipt for JINBEH INC | darrellshill | File/acknowledge |

---

## Stalled Projects — Status & Recommended Actions

### HIGH PRIORITY (Revenue or deadline impact)

**1. PAA FAQ Pages Deploy** — 76 pages built, code exists locally, returns 404 on prod.
- Status: Blocked on deploy. Script exists at `~/Documents/deploy-paa-cleanup.sh`.
- Impact: 76 additional indexable pages sitting idle. Would push site from 368 to ~444 URLs.
- Action: Run the deploy script. This was approved May 12.

**2. /lewisville/vegetarian page** — Built in the "Google indexing issues" session, not yet deployed.
- Same deploy would pick this up if done via the standard rsync flow.

**3. TXU Energy Contract** — Reply to Nichole Knapik to lock in $0.0729/kWh 60-month rate.
- Status: STALLED since original flagging. No action taken.
- Action: Call or email Nichole to confirm before the rate expires.

**4. GBP Audit (May 12)** — 10 prioritized fixes from the audit.
- Status: Compliance binder organized (May 31 session). COI reissue and Frisco permit retrieval still pending.
- Action: Call Chris Elam at Higginbotham (214-739-9552) to reissue COI with correct name "Jin Beh, Inc." Walk into Frisco to grab the current health permit.

### MEDIUM PRIORITY (SEO / infrastructure)

**5. GSC Sitemap Resubmission** — After the May 31 deploy, sitemap needs resubmission.
- Action: In GSC, remove old sitemap entries and re-add `sitemap.xml`. Also resubmit to Bing Webmaster Tools.

**6. Archive DNS Record** — Cloudflare A record for `archive.jinbeh.com` → `72.61.15.71` (Proxied).
- Status: nginx and container ready on VPS. DNS record never added because Cloudflare dashboard kept infinite-loading.
- Action: Add the A record in Cloudflare dashboard from a regular browser window.

**7. Git Commit** — Stale `.git/index.lock` was blocking commits.
- Action: From a real Terminal: `cd ~/Documents/jinbeh-elite-phase1 && rm -f .git/index.lock && git add -A && git restore --staged .claude && git commit -m "Deploy: SEO fixes, responsive images, PAA pages, WC pillar"`

### LOWER PRIORITY (Ongoing programs)

**8. Chef Recruitment** — 25 candidates, 0 replies from cold outreach. First inbound: Jhonathan Mejia (head chef at Hanna in Prosper, cooking since 1999, Mon/Tue dinner availability). Noted in previous progress report but email not found in YumYumJinbeh last 7 days — may have gone to darrellshill or another channel.

**9. Journalist Outreach** — 17 DFW journalists, 20 pitches ready. Not yet sent.

**10. Dream 100** — 41 targets, 123 comments ready. Execution stalled.

**11. STR Outreach** — 8 PM outreach emails drafted in Gmail. Not yet sent.

---

## M&A / Legal Status (from recent sessions)

- Cash Cushion ($45,042): Strategy shift to paying under reservation of rights (Tex. Bus. & Com. Code §1.308) and pursuing other items via §6.08 setoff against $3,300/month seller notes. Draft email to Jose prepared. Decision pending on wire.
- Nooshin sent US Bank/Tesla loan documentation (May 28) — directly relevant to the Tesla disposition question and whether the loan was paid off in 2024 or still active per the closing balance sheet.
- IRS BOLA portal still intermittently unavailable for FY2024 transcript pulls.

---

## World Cup Countdown: 10 Days

| Item | Status |
|------|--------|
| /world-cup-2026 pillar page | LIVE (200) |
| /celebrations/world-cup | LIVE (200) |
| Chioma partnership terms | AWAITING YOUR CONFIRMATION (4 days) |
| Pre-promotion content | BLOCKED on partnership confirmation |
| Google Ads World Cup campaign | Not yet created (Nieva proposal pending) |
| STR host outreach for tournament | Drafted, not sent |

---

## Summary: Top 5 Actions for Today/This Week

1. **Reply to Laura Davis** about beer/wine service (4 days late, $1,600 catering deal)
2. **Confirm Chioma partnership terms** with Zachary Wilson (World Cup in 10 days)
3. **Review Nieva's Google Ads proposal** and accept/decline meeting
4. **Deploy the PAA FAQ pages + recent code** to prod (76 pages sitting idle)
5. **Resubmit sitemap to GSC and Bing** after deploy
