# Jinbeh Progress Report — Sunday, June 21, 2026 (Father's Day)

**Report type:** Automated scheduled review
**Generated:** ~12:15 PM CT

---

## URGENT — TODAY & THIS WEEK

### 1. Father's Day (TODAY) — Expect $30K–36K Combined Revenue
Historical Father's Day revenue (both locations combined):
- 2024: **$36,582** (highest on record)
- 2023: $33,748
- 2022: $31,736
- 2025: $30,744
- Average (last 4 years): **$33,203**

Yesterday (Saturday Jun 20) did **$21,631** ($10,559 Frisco + $11,073 Lewisville) — a solid lead-in.

**BLOCKER:** Father's Day social content was drafted (FB Frisco, FB Lewisville, IG feed, GBP Frisco, GBP Lewisville) and saved to `READY_TO_PUBLISH_2026-06-21_AM.md`, but the Chrome permission gate blocked publishing for the **11th consecutive autonomous run**. These posts need to go live ASAP — ideally before the lunch rush.

**Action required:** On the Business MacBook Air, unlock Chrome (signed into YumYumJinbeh@gmail.com), run the World Cup daily marketing task, and approve the per-action prompts to publish the Father's Day set.

### 2. FOX 4 "Good Day" Segment — Jun 25 (4 DAYS AWAY, NOT CONFIRMED)
- Pitch sent Jun 16 for a Jun 25 segment featuring Chioma Ubogagu at Jinbeh Lewisville.
- Clarification sent Jun 18 (Chioma in-person at Lewisville).
- **Melinda Thomas (Melinda.Thomas@fox.com) gave a 👍 thumbs-up reaction + "Thank you for the clarification"** on Jun 18 — positive signal but NOT a booking confirmation.
- **Zachary Wilson (zachary.wilson@elitetalentadvisors.us)** CC'd throughout.

**Action required:** Reply TODAY to lock in logistics — ask directly: "Are we confirmed for June 25? If so, what time should we expect the crew?"

### 3. Keru Tomeru Japanese TV Filming — Jun 26 (CONFIRMED)
- Japanese television program filming at **Frisco** location.
- **Crew arrives 4:30 PM**, 13–15 people including talent.
- Darrell forwarded to Inggrid (manager) on Jun 19: need 1–2 chefs to start prepping at 4 PM.
- Yuji's contact: (213) 280-3521.
- Certificate attached (25-26 Cert Jinbeh-Inc.pdf).
- Darrell plans to be at Lewisville for the watch party Thursday, then Frisco for the filming Friday.

**Action required:** Confirm with Inggrid that the Jun 26 prep schedule is set. Ensure Frisco staff know about the crew.

### 4. Grizzly Star Overdue Invoices — $1,836.63
Two overdue invoices from Todd Lewis:
- **INV-7381:** $367.51
- **INV-7380:** $1,469.12

**Action required:** Pay or dispute. Todd Lewis emailed these; they've been flagged in multiple consecutive reports with no resolution.

---

## VPS & INFRASTRUCTURE STATUS

| Metric | Value | Status |
|--------|-------|--------|
| CPU steal | **0.0%** | ✅ Healthy |
| Load average | 0.01 | ✅ Idle |
| Disk | 78% used (22G free) | ⚠️ Monitor |
| Memory | 5.9G available / 7.8G | ✅ Healthy |
| Containers | 7 running | ✅ All critical services up |
| Prod response | **200 in 11ms** | ✅ Excellent |
| Archive (3003) | 200 in 446ms | ✅ Failover ready |

**Containers running:** jinbeh-prod (healthy), jinbeh-archive, n8n-n8n-1, n8n-postgres-1, hermes-agent, espocrm (healthy), espocrm-db (healthy).

---

## RECENT REVENUE (Jun 15–20)

| Date | Day | Frisco | Lewisville | Combined |
|------|-----|--------|------------|----------|
| Jun 20 | Sat | $10,559 | $11,073 | **$21,631** |
| Jun 19 | Thu | $7,010 | $9,188 | **$16,197** |
| Jun 18 | Wed | $3,799 | $4,275 | **$8,074** |
| Jun 17 | Tue | $3,059 | $4,802 | **$7,862** |
| Jun 16 | Mon | $2,863 | $3,063 | **$5,926** |
| Jun 15 | Sun | $3,745 | $2,714 | **$6,459** |

*All figures are partial snapshots (mid-day Focus POS data).*

**Week total (Mon–Sat):** ~$59,690. Father's Day should push the weekly total above $90K.

---

## COMPLETED SINCE LAST REPORT (Jun 19–21)

### Deployments (all successful, no rollbacks)
1. **Hero Image + UI Upgrade (Jun 21 AM):** 182 hero swaps with keyword-rich alt text, 159 responsive WebP variants, TrustStrip below homepage hero, BlogSeoBoost in blog layout, 13 PageSeoBoost unique content sections. IndexNow accepted 198 URLs. Rollback: `jinbeh-elite:rollback-20260621-0809-pre-heroupgrade`.

2. **Nightly SEO Content Batch 2 (Jun 21):** 25 new pages with unique heading + 2 paragraphs + 3 FAQs each. Coverage: 13 → **38 of 276** injectable routes. Clean build (37.6s TypeScript, 398 pages). IndexNow accepted 25 URLs. Rollback: `jinbeh-elite:rollback-20260621-0852-pre-content`.

3. **SEO Competitive Analysis Fixes + Content (Jun 20 PM):** New `/blog/best-hibachi-frisco` article, Google Maps embeds on both location pages, P0 bug fixes (truncated meta description, broken schema, em-dashes, generic H1s), P1 improvements. IndexNow: 13 URLs.

4. **SEO Indexing Fixes (Jun 20 AM):** Priority sitemap (60 URLs), 404→redirect fixes, 410 Gone responses for 12 spam URLs, internal linking blitz. 8 of 15 GSC indexing requests submitted (quota hit).

5. **Menu PDFs Hot-Swapped (Jun 20):** Updated 4 lunch/dinner PDFs for both locations — no rebuild needed (docker cp into prod + archive).

### Other Completed Work
- **Father's Day Email Campaign:** Paused after 6,143 of 7,250 sent (85%). Open rate: 14.67% (901 opens).
- **Catering Strategy:** Platform recommendation finalized as Shopify (evaluation report + strategy doc v2.0 complete).
- **M&A / IRS Evidence Package:** Trimmed to 5 strongest documents (1.3 MB zip) for Khavari response.
- **Lincoln Moore:** July Direct Mailer agreement signed + Added Piece Count Agreement signed.

---

## EMAIL HIGHLIGHTS (YumYumJinbeh@gmail.com)

### Requires Action
| Item | Details | Priority |
|------|---------|----------|
| FOX 4 confirmation | Reply to Melinda Thomas to confirm Jun 25 segment | 🔴 URGENT |
| Grizzly Star invoices | $1,836.63 overdue (INV-7380 + INV-7381) from Todd Lewis | 🔴 URGENT |
| Google Reviews | Brad (Frisco) + Joshua (Lewisville) — need responses | 🟡 Today |
| LightHouse/Matsuda case | Jose email with POP + Citations; has DRAFT reply unsent | 🟡 This week |
| Firm Closure: J. Hall & Co | Curt Riffel + Alec Finch confirm firm is closed — impacts IRS work | 🟡 This week |
| Canva Pro ended | Subscription expired — decide whether to renew | 🟡 This week |
| Google Ads "wasting spend" | Alert from Google; also a $300 ad credit offer available | 🟡 This week |
| Marketing invoice #070901 | Invoice waiting (Oklahoma transfer related) | 🟡 This week |

### Informational (No Action Needed)
- R1 Revenue Briefs arriving daily (Jun 18: $8,074, Jun 19: $16,197, Jun 20: $21,631)
- Capital One Business: $5,000 payment scheduled Jun 20 + payment received confirmation
- Capital One: Credit score improved
- Menufy: Ale Taco catering food pickup order confirmed
- OpenTable: Pre-shift digests flowing normally (12 reservations Frisco, 14 Lewisville for recent shift)
- Spectrum Business: Statement ready

---

## STALLED ITEMS (10+ DAYS — NO PROGRESS)

These items have appeared in multiple consecutive progress reports with no forward movement. Each represents unrealized revenue or risk.

### Revenue Pipeline (est. combined opportunity: $50K–100K+/year)
| Item | Days Stalled | Last Action | Recommended Next Step |
|------|-------------|-------------|----------------------|
| **Chef Recruitment** | 30+ | 25 candidates contacted, 0 replies | Broaden pipeline — Indeed/Culinary Agent postings, offer sign-on bonus, try in-person visits to culinary schools |
| **Journalist Outreach** | 20+ | 17 DFW journalists identified, 20 pitches ready | **Send the CultureMap + Visit Frisco outreach emails** (drafts in `OUTREACH_DRAFTS_2026-06-20.md`) — World Cup timing is NOW |
| **Dream 100** | 20+ | 41 targets, 123 comments ready | Start posting 5 comments/day — compound engagement before World Cup peaks |
| **STR Host Outreach** | 20+ | 8 PM outreach emails drafted in Gmail | Send the 8 emails — STR hosts are booking World Cup guests NOW |
| **Dallas Trinity FC** | 15+ | Cross-promo drafted | Send while soccer fever is high |

### Financial / Administrative
| Item | Days Stalled | Impact | Recommended Next Step |
|------|-------------|--------|----------------------|
| **Southern Glazer's** | 15+ | Beverage cost optimization | Send Lia Shivers the analysis reply |
| **OpenTable Billing** | 20+ | $746.47 past due | Resolve — dispute or pay to avoid service disruption |
| **Energy Contract (TXU)** | 20+ | Potential savings on $0.0729/kWh rate | Reply to Nichole Knapik to lock in |
| **Grasshopper Bank SBA** | 15+ | SBA docs overdue | Follow up — delays can jeopardize lending relationship |

### Chrome Permission Gate (SYSTEMIC BLOCKER)
The daily World Cup marketing task has been **blocked for 11 consecutive runs** because the autonomous session cannot get Chrome permission approval. This means:
- 0 social posts published autonomously
- 0 email blasts sent
- 0 Google review responses
- 0 PR inbox reads
- Content is being drafted daily but piling up unpublished

**Fix:** When running the daily marketing task, Darrell needs to be at the Business MacBook Air to approve Chrome prompts. Alternatively, consider connecting the Meta Business Suite and Gmail MCPs directly (API-level, no Chrome needed).

---

## GSC INDEXING — 7 URLS STILL PENDING

Quota exceeded on Jun 20 after 8 submissions. These 7 remain:
1. `/blog/best-restaurants-stonebriar`
2. `/blog/best-sake-bar-dfw`
3. `/blog/best-seafood-dallas`
4. `/blog/best-steakhouses-lewisville`
5. `/blog/group-dining-venues`
6. `/blog/japanese-delivery-frisco-lewisville`
7. `/blog/sushi-catering-lewisville`

**Action required:** Submit these via GSC URL Inspection when Chrome is available (requires human approval).

---

## WORLD CUP WEEK AHEAD (Jun 22–28)

| Date | Event | Action Needed |
|------|-------|---------------|
| Mon Jun 22 | TV day-of nudges (WFAA, NBC 5, CBS 11) | Send from drafts |
| Wed Jun 25 | FOX 4 "Good Day" segment (UNCONFIRMED) | Confirm with Melinda TODAY |
| Wed Jun 25 | World Cup watch party — Lewisville (Chioma in-person) | Darrell attending |
| Thu Jun 26 | Keru Tomeru TV filming — Frisco (CONFIRMED) | Crew 4:30 PM, chefs prep at 4 PM |

---

## NIGHTLY SEO CONTENT PIPELINE

- **Coverage:** 38 of 276 injectable routes complete
- **Remaining:** 238 pages at 25/night = ~10 more nightly runs
- **Next batch:** Will include more category, neighborhood, and blog routes
- **System is automated** — runs nightly, self-disables when complete

---

## KEY METRICS SNAPSHOT

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| GSC indexed pages | 311 | 400+ | 📈 Up from 84 in May |
| Social posts published | 3 | 40+ cumulative | 🔴 Blocked by Chrome gate |
| Email blasts sent | 0 this week | 2/week | 🔴 Blocked |
| Google reviews (Frisco) | 800 / 4.2★ | 850 / 4.3★ | 🟡 Growing slowly |
| Google reviews (Lewisville) | 957 / 4.5★ | 1,000 / 4.5★ | 🟢 Close to milestone |
| Website pages | 398 static | 450+ | 📈 Growing via SEO batches |
| Leads generated | 1 | 40+ | 🔴 Outreach stalled |

---

## RECOMMENDED PRIORITY ACTIONS (Next 48 Hours)

1. **RIGHT NOW:** Publish the Father's Day social content (approve Chrome on MacBook)
2. **TODAY:** Reply to FOX 4 (Melinda Thomas) to confirm the Jun 25 segment
3. **TODAY:** Respond to Google reviews from Brad (Frisco) and Joshua (Lewisville)
4. **MONDAY:** Send the CultureMap + Visit Frisco outreach emails (World Cup timing)
5. **MONDAY:** Send the 8 STR host outreach emails (World Cup guests booking now)
6. **MONDAY:** Pay or dispute Grizzly Star $1,836.63
7. **MONDAY:** Submit remaining 7 GSC indexing URLs
8. **THIS WEEK:** Start Dream 100 comment campaign (5/day)
9. **THIS WEEK:** Confirm Keru Tomeru logistics with Inggrid for Jun 26
10. **THIS WEEK:** Decide on Canva Pro renewal
