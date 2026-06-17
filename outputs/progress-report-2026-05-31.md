# Jinbeh Project Progress Report — May 31, 2026

## REPLY TODAY (Revenue at Risk)

### 1. Laura Davis / Chamber × Stars Catering (Aug 9, ~$1,600 deal)
**Status:** UNANSWERED for 3 days
Laura replied Thu May 28 at 7:10 AM asking: "Do you have the ability to serve wine and beer?" You confirmed availability on May 18 and she confirmed Aug 9 as the date. Three catering options were proposed ($1,350 / $1,600 / $1,850 for 100 guests). This is a warm lead sitting idle.

**Recommended reply:**
> Hi Laura, Yes, we serve beer, wine, and sake at both locations. For offsite catering events we can include beverage service as an add-on. Happy to walk through the options with you. Would a quick call this week work to finalize the details for August 9th?

### 2. Zachary Wilson / Chioma Ubogagu Partnership
**Status:** No reply in 5+ days. World Cup kicks off June 11, only 11 days away.
Thread shows 11 messages. Last known state: Darrell sent a $500 flat + $500 commissions counter offer. No response from Zachary since. With the tournament 11 days out, the window for pre-tournament content is closing fast.

**Recommended action:** Follow up Monday (June 2) if no reply by then. Consider offering a simpler "one reel, see how it goes" trial if the full partnership stalls.

---

## EMAIL ACTION ITEMS (YumYumJinbeh@gmail.com)

### Google Search Console: Structured Data Parsing Error (NEW)
GSC emailed at 2:29 AM today: "Unparsable structured data issues — Parsing error: Missing ',' or '}'." The source code now uses `JSON.stringify()` for FAQ schema, so this likely refers to the deployed build on the VPS. A fresh deploy should resolve it. After deploy, revalidate with the Rich Results Test.

### Google Search Console: Product Snippets Issue
A second GSC email flagged "New Product snippets structured data issues detected for jinbeh.com." This is the `aggregateRating` and `review` fields missing from Product/MenuItem schema that was flagged in the previous progress report. Non-critical but worth fixing with the next deploy.

### Nieva Josefin / Google Ads
Multiple emails from the Google Ads rep:
- **"Your Google Ads Proposal"** — PDF attached ("Generate Qualit..."). Review the proposal.
- **"Setting Expectations for Your Google Ads Journey"** — onboarding guidance.
- **"Meet invite"** — Meeting invitation from Nieva. Accept or decline.
- **"Approval Needed for Google Ads Campaign Improvements"** — Needs review/approval.
The Lunch Deal campaign is live ($20/day, Mon-Fri). The 48-hour Ad Strength revisit is overdue.

### Jhonathan Mejia — Chef Applicant (NEW)
Email from jhonathantokyo@gmail.com (Sat May 30, 2:13 PM): "Hi my name is Jhonathan and I been cooking since 1999, right now am the head chef at Hanna in Prosper. Available Monday and Tuesday dinner. Phone: 469-769-0608."

This is directly relevant to the chef recruitment pipeline (25 candidates, 0 replies so far). A head chef with 27 years of experience reaching out cold is valuable.

**Recommended action:** Reply promptly. Even if not hiring immediately, get him in for a visit/trial.

### Google Business Reviews (3 new)
- **Cassandra** — Lewisville
- **April** — Frisco (Steak Seafood & Sushi)
- **Melisa** — Lewisville

Verify REP1 handled these. If not, respond manually.

### Facebook Business Manager Partner Requests (2)
Two separate Facebook Business Manager partner requests sitting in the inbox. Review and accept/decline.

### Jason (Attorney) — "Replenish retainer reserve for Jinbeh Inc"
Legal retainer replenishment request. Review and fund if needed to keep Jose's work on the M&A/Cash Cushion matter going.

### Cook Keith & Davis — Payment Receipt $4,000
Legal invoice payment receipt. File for records.

### Grant Hiroshi Ogata / JASDFW
- "2026 Annual Meeting" — Join Us! May 28th invite (may have already passed).
- "Thank You for Making the 2026 Sun & Star Gala a Historic Success" — relationship maintenance.

### Nooshin Bahrami (darrellshill inbox)
Three threads active:
- **"us bank may 2021"** — Tesla/US Bank loan documentation (May 28)
- **"CAR PAYMENT"** — US BANK.pdf attachment (May 28)
- **"Re: Jinbeh Frisco"** — ANDY TRAN.pdf (May 28)

These are supporting Jose's M&A work on the Cash Cushion and Tesla disposition.

---

## ACTIVE PROJECTS — STATUS & STALLS

### Website / SEO (jinbeh-elite)

| Item | Status | Action Needed |
|------|--------|---------------|
| PAA FAQ Pages (76+) | DEPLOYED to prod May 31 | Re-submit sitemap to GSC + Bing |
| World Cup Pillar (/world-cup-2026) | LIVE on prod | MISSING from sitemap.xml — add to sitemap.ts and redeploy |
| Google Ads Conversion Tracking | VERIFIED firing on prod | Monitor conversions in Ads dashboard |
| Lunch Deal Campaign | LIVE, $20/day Mon-Fri | Review Nieva's proposal; 48h Ad Strength check overdue |
| Structured Data Parsing Error | GSC flagged today | Redeploy (source already fixed) + revalidate |
| Sitemap re-submission | NOT DONE | Submit to GSC + Bing after redeploy |
| Cloudflare Bot Fight Mode | Still blocking GSC sitemap fetches | Disable or add WAF skip rule for /sitemap.xml |
| Archive DNS record | PENDING | Add Cloudflare A record: archive → 72.61.15.71 (Proxied) |
| Git commit | STALLED | Stale .git/index.lock — run from Terminal to commit |
| Responsive images | DEPLOYED to prod May 28 | Complete |
| Mobile broken images | FIXED | Complete |

### Google Ads (Next Steps from May 30 Session)
- GA4 property creation + link to Ads account
- Local Services Ads (LSA) dining investigation
- Lewisville mirror campaign
- Add `[sushi near me]` exact-match keyword
- Bid strategy upgrades once 30+ conversions accumulate

### M&A / Legal (Cash Cushion / IRS Check)
**Status:** In Jose's hands. Strategy shifted to "pay $45,042 Cash Cushion under reservation of rights per Tex. Bus. & Com. Code §1.308, then pursue other items via §6.08 setoff against $3,300/month seller notes."

**Open items for Jose:**
1. Does the March email exchange create a binding Cash Cushion?
2. Procedural step for §6.08 setoff?
3. Does paying $45K waive anything?
4. Draft cover letter with reservation of rights language

Nooshin is sending Tesla/US Bank documentation. IRS BOLA download still failing for FY2024 transcript.

### LightHouse Color Co. 401(k) Year-End
**Status:** Partially complete in Guidant portal. LSI LLC Owners page not filled. Employee Census section still ahead. File upload not done.

**Action:** You may want to drive the remaining questionnaire yourself with the Year-End Summary Reference doc open — most questions need your judgment.

### Catering Launch
**Status:** Conditional on chef recruitment. Jhonathan Mejia just applied cold (see above). 25 candidates in pipeline, 0 replies prior to this.

### World Cup 2026 (June 11 kickoff = 11 days)
- Chioma partnership stalling (Zachary no-reply)
- WC pillar page live but missing from sitemap
- Toyota + Westin Stonebriar partnership emails sent, awaiting replies
- WC FAQ pages now rendering correctly

### GBP Audit (10 items from May 12)
**Status:** No visible progress since May 12. Priorities: opening date fix, Lewisville description rewrite, Frisco name verification.

### Energy Contract
**Status:** TXU 60-month at $0.0729/kWh — reply to Nichole Knapik still overdue.

---

## ITEMS I'M ACTING ON NOW

These are clearly agreed-to tasks that don't require further approval:

1. **Add /world-cup-2026 to sitemap.ts** — it's live on prod but missing from the sitemap
2. **Verify the structured data fix** — confirm the deployed JSON-LD is clean after a redeploy
3. **Draft Laura Davis reply** — ready above for your review before sending

---

## PRIORITY RANKING (Next 48 Hours)

1. Reply to Laura Davis (revenue, 3 days waiting)
2. Follow up with Zachary/Chioma (11 days to WC kickoff)
3. Reply to Jhonathan Mejia chef applicant
4. Review/approve Nieva's Google Ads improvements
5. Redeploy site (fixes structured data + adds WC to sitemap)
6. Re-submit sitemap to GSC + Bing
7. Replenish Jose's legal retainer
8. Reply to Nichole Knapik on TXU energy contract
9. Check REP1 handled the 3 new Google reviews
10. Review Facebook Business Manager partner requests
