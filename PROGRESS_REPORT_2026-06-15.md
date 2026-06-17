# Jinbeh Progress Report — June 15, 2026

**Generated:** Sunday, June 15, 2026 (automated scheduled review)
**Coverage:** Sessions and emails from June 9–15

---

## CRITICAL — Act today

### 1. OpenTable Frisco: $746.47 past due — suspension imminent

OpenTable sent a **second and final notice** for an outstanding balance of $746.47. The email warns that the account will be suspended if not resolved. Suspension means no online reservations for Frisco during the World Cup window and Father's Day week — two of the highest-volume periods of the year.

**Action:** Pay the $746.47 balance immediately via the OpenTable Restaurant portal or call OpenTable billing.

---

### 2. Ruriko (Japanese TV) — unanswered World Cup filming opportunity

A producer named Ruriko from a Japanese television program emailed asking about filming at Jinbeh during the World Cup. This is **free national-level media exposure** to exactly the audience (Japanese visitors, Samurai Blue fans) that the World Cup strategy targets. The email has gone unanswered for several days.

**Action:** Reply to Ruriko expressing interest and availability. Propose dates during the Japan match windows (June 15, 19, or 26 group stage). Offer the Frisco location for filming (gas hibachi grills = better visuals). Mention the Chioma Ubogagu partnership as additional story material.

---

### 3. Zach McDonald (Grasshopper Bank) — 4 days unanswered

Zach followed up asking for cost estimates related to renovations. This has been sitting unanswered since ~June 11. Grasshopper Bank is a potential financing relationship.

**Action:** Reply with the requested cost estimates or a timeline for when they'll be available.

---

### 4. J Hill: "MENUS NEED TO BE PRINTED ASAP"

An internal message flagged that physical menus need to be printed urgently, referencing concerns raised after a meeting with Inggrid.

**Action:** Confirm which menu versions need printing (Frisco dinner, Lewisville dinner, lunch, sushi — PDFs are in `/public/menus/`). Get them to the printer today or tomorrow.

---

## HIGH PRIORITY — Next 1–2 days

### 5. Father's Day email campaign — not launched (6 days out)

A Father's Day email campaign was built in a prior session but never sent. Father's Day is **June 21** (this Sunday). The campaign needs to go out no later than Tuesday/Wednesday to drive reservations. Historical data shows Father's Day does ~2.25x a normal June Sunday (~$16.8K/restaurant), with the surge concentrated at lunch (58% of sales).

**Action:** Review and launch the Father's Day campaign in Smartlead or via the email system. Recommend: send Tuesday (June 17) with a reminder Thursday (June 19).

---

### 6. World Cup daily marketing automation — crashing

The n8n World Cup automation workflow that was supposed to publish daily social content has been crashing with socket errors. The tournament started June 11 — four days of automated social content have not been published.

**Action:** SSH to VPS, check n8n workflow logs for the WC automation. The underlying n8n task-runner issue (documented in CLAUDE.md) may still be the root cause. Consider manual social posting as a stopgap while debugging. The jinbeh-content-calendar and world-cup-2026-strategy skills can generate content quickly.

---

### 7. Uber Eats Frisco — disconnected

Uber Eats for the Frisco location is disconnected, losing an estimated ~$48/hr in delivery revenue during peak hours.

**Action:** Log into Uber Eats merchant portal and reconnect the Frisco location. Check if tablet/integration hardware needs attention at the restaurant.

---

### 8. Roof leak (Frisco) — facilities issue

Nancy forwarded photos of a roof leak. This is a facilities/maintenance issue that needs a contractor call.

**Action:** Review the photos, get a roofer out for inspection. Check if this is covered under the lease (landlord responsibility) or tenant responsibility.

---

### 9. Canva Pro — expiring

A Canva Pro subscription is approaching expiration. Canva is used for social media graphics, business cards, and marketing materials.

**Action:** Decide whether to renew. If yes, renew before expiration to avoid losing saved designs/brand kit access.

---

### 10. Lincoln Moore direct mailer — needs signature

A direct mail piece from Lincoln Moore is waiting for a signature before it can be sent.

**Action:** Review and sign the mailer.

---

### 11. Invoice #070898 — waiting

An invoice is sitting in the inbox awaiting processing.

**Action:** Review and pay or forward to bookkeeper.

---

### 12. Atmos Energy bill — available

A new Atmos Energy bill is available for review.

**Action:** Review and pay or set up autopay.

---

### 13. Google Ads — negative keyword cleanup recommended

From the June 2 optimization sprint: the Lunch Deal campaign carries duplicate keywords that compete with the main Frisco campaign. Self-competition wastes budget.

**Action:** In Google Ads (account 278-359-1446), deduplicate keywords between Lunch Deal and Frisco campaigns. Add negative keywords for non-converting terms like "japanese food" (18.98% CTR but 0% conversion — see CLAUDE.md learnings).

---

## COMPLETED / GOOD NEWS

### VPS & website health: excellent

All containers running, site returning 200 across all tested pages. `jinbeh-prod` up 3+ days with zero restarts, no OOM kills. 5.2 GB RAM free.

### nginx failover deployed successfully

The upstream failover block (prod → archive backup) is live. If `jinbeh-prod` briefly can't accept connections, nginx automatically fails over to the archive container on port 3003, so visitors and Googlebot get a 200 instead of a 504.

### GSC indexing — dramatic improvement

- **Before (May):** 84 indexed / 331 not indexed
- **Now (June 14):** 311 indexed / 120 not indexed
- Server error (5xx) validation started 6/14 after the nginx fix
- Duplicate-without-canonical: 0 pages (Passed)

### R1 revenue pipeline — operational

Daily revenue data flowing into Postgres warehouse through June 14. Revenue range this past week: $7.3K–$15.5K daily. The pipeline is the reusable analytics backbone for any future date-based sales question.

### Father's Day OpenTable hours — set correctly

Both locations have correct Father's Day hours configured in OpenTable. The reservation system is ready (assuming the past-due balance gets resolved).

---

## STALLED PROJECTS (no progress this week)

| Project | Last Activity | Status |
|---------|--------------|--------|
| n8n task-runner fix | Jun 7 | Blocked — n8n 2.6.4 mandatory task runner won't settle on 2-vCPU box. R1 email + REP1 review replies remain down. |
| Chef recruitment | May | 25 candidates contacted, 0 replies. Pipeline needs broadening. |
| Cloudflare Tunnel migration | Jun 4 | cloudflared installed but dashboard won't load — blocked on manual browser auth. |
| Catering launch | Conditional | Blocked on chef recruitment prerequisite. |
| PAA FAQ deploy cleanup | May 30 | 76 pages built, deploy script ready (`~/Documents/deploy-paa-cleanup.sh`), not yet run. |
| Journalist outreach | May 12 | 17 journalists, 20 pitches ready — not sent. |
| Dream 100 comments | May 12 | 41 targets, 123 comments ready — not posted. |
| STR host outreach | May 12 | 8 PM emails drafted in Gmail — not sent. |
| EspoCRM → Mailchimp import | May | Pending. 6,562 contacts in EspoCRM. |
| Bing Webmaster Tools | May 12 | Sitemap submitted, status: Processing. |

---

## Recommended priority sequence for this week

1. **Today (Sun):** Pay OpenTable $746.47. Reply to Ruriko. Reply to Zach McDonald. Confirm menu printing.
2. **Mon (Jun 16):** Launch Father's Day email campaign. Reconnect Uber Eats Frisco. Review roof leak photos.
3. **Tue (Jun 17):** Father's Day email sends. Google Ads keyword cleanup. Renew Canva Pro if keeping.
4. **Wed–Thu:** Debug World Cup n8n automation (or post manually). Sign Lincoln Moore mailer. Process invoices/bills.
5. **Fri (Jun 20):** Father's Day reminder email. Final prep for Sunday rush.

---

*Report generated from 7 session transcripts + YumYumJinbeh@gmail.com inbox review + VPS health check via SSH.*
