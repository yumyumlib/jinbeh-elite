# Jinbeh Progress Report — June 19, 2026

**Generated:** Thursday Jun 19, 2026 (automated scheduled task, owner not present)
**Prior report:** PROGRESS_REPORT_2026-06-17.md

---

## P0 — ACT TODAY (June 19)

### 1. PAY MAY SALES TAX — DUE TODAY
- **Source:** Email from Nooshin Bahrami (darrellshill@gmail.com inbox)
- **Details:** Mixed Beverage Gross Receipts Tax return was filed Jun 16, but **payment is due Friday Jun 19 (TODAY)**. Gmail's Gemini summary tagged it "Pay sales tax attached - Due on Jun 19."
- **Action:** Open the attachment for amount, pay immediately. Late penalties apply.

### 2. FOX 4 "Good Day" Segment — Confirm Booking (June 25)
- **Source:** YumYumJinbeh@gmail.com thread with Melinda Thomas (Melinda.Thomas@fox.com) and Zachary Wilson (zachary.wilson@elitetalentadvisors.us)
- **Status:** Pitch sent Jun 16. Clarification sent Jun 18 (Chioma at Lewisville location). **Melinda Thomas gave a thumbs-up reaction** Jun 18 at 1:30 PM — positive signal but NOT a confirmed booking.
- **Action:** Reply today asking: "Melinda, thanks for the thumbs up! Can we confirm the segment is a go for June 25? Happy to coordinate logistics — crew arrival time, parking, anything you need from us." The segment is 6 days away; if it's happening, logistics need to start now.

### 3. Jose Espinosa Legal Update — Respond
- **Source:** YumYumJinbeh@gmail.com — "LightHouse/Matsuda Case Status" from Jose Espinosa
- **Action:** Read and respond. Legal matters should not sit unanswered.

### 4. Brad's Google Review — Respond
- **Source:** Google Business Profile notification in YumYumJinbeh inbox
- **Action:** Respond using brand voice (REP1 should handle this if operational; if not, respond manually). Every review response strengthens GBP Prominence signals.

---

## P1 — ACT THIS WEEK (Jun 19–25)

### 5. OpenTable Past Due $746.47 — STALLED (3+ reports)
- **Status:** Flagged in Jun 17 report. No resolution confirmed. Additionally, OpenTable GuestCenter is **logged out** after a security update — hasn't been re-logged-in. Last data upload was June 4; two consecutive weeks missed (Jun 11, Jun 18).
- **Action:** Pay the balance. Re-login to GuestCenter. Resume weekly uploads.

### 6. Southern Glazer's / Lia Shivers — STALLED (3+ reports)
- **Status:** Beverage proposal analysis completed. Reply never sent.
- **Action:** Send the reply. This is a revenue opportunity that has been sitting for 5+ days across multiple progress reviews.

### 7. Keru Tomeru Japanese TV — Filming Jun 26
- **Status:** Response status unclear from prior reports.
- **Action:** Confirm participation. Filming is 7 days away. Coordinate logistics (crew, time, location, what to prepare).

### 8. Father's Day Email Campaign 2 — Verify Sending
- **Source:** SmartLead campaign #3505815
- **Status:** Variant A was selected as winner (14.6% open rate). ~5,877 remaining sends were queued. Launch status was uncertain as the prior session ended mid-click.
- **Action:** Log into SmartLead and verify the campaign is actively sending. Father's Day is June 21 (Sunday) — if these emails haven't gone out, they need to go TODAY at the latest.

### 9. CPU Steal — Request Another Hostinger Reset
- **Status:** VPS healthy (all services up, load near zero), but CPU steal is oscillating 4.8%–72.4% again. Same sawtooth pattern as Jun 17. Services respond slowly under steal.
- **Action:** Open hPanel → Ask AI (Kodee) chat, VPS category, request CPU restriction reset on srv1144987. This worked Jun 17 and took minutes.

### 10. SEO Deploy Follow-ups
- **Completed Jun 19 4AM:** Schema/AEO enrichment deployed successfully. .dockerignore fix halved image size (10.2GB → 4.33GB). Build context 20min → 40s.
- **Still needed:**
  - Run Rich Results Test on /frisco and /lewisville (confirm Restaurant + Review schema parse)
  - Resubmit sitemap.xml in Google Search Console
  - Note: archive failover (3003) was NOT rebuilt — still serves pre-SEO content

### 11. World Cup Social Content — Chrome Permission Gate
- **Status:** Only 3 feed posts live out of 150+ target. The recurring blocker is Chrome's permission gate — autonomous sessions can't click "Publish" without manual approval.
- **Action:** Either approve the queued posts manually, or schedule a 15-min session to batch-approve accumulated drafts.

### 12. Remove .git/index.lock + Commit
- **Status:** Local git is blocked by a stale `.git/index.lock`. The SEO deploy proceeded via rsync (no git needed), but changes remain UNCOMMITTED.
- **Action:** From a real Terminal: `rm -f ~/Documents/jinbeh-elite-phase1/.git/index.lock && cd ~/Documents/jinbeh-elite-phase1 && git add -A && git restore --staged .claude && git commit -m "SEO/schema enrichment pass Jun 18 + deploy Jun 19"`

---

## P2 — STALLED ITEMS (Flagged 3+ Consecutive Reports)

These items have appeared in multiple progress reports without resolution. They represent either forgotten commitments or deliberate deferrals that should be explicitly closed.

| Item | First Flagged | Status |
|------|--------------|--------|
| Southern Glazer's / Lia Shivers reply | Jun 17 | Analysis done, reply never sent |
| OpenTable $746.47 past due | Jun 17 | No resolution confirmed |
| Grasshopper Bank SBA docs | Jun 17 | 5+ days overdue per Jun 17 report |
| Dallas Trinity FC cross-promo | Jun 17 | Drafted, never sent |

### Additional Stalled from CLAUDE.md Active Projects:

| Project | CLAUDE.md Status | Reality Check |
|---------|-----------------|---------------|
| Chef Recruitment | Active, 25 candidates | 0 replies. Pipeline needs broadening. |
| Journalist Outreach | Ready, 17 journalists, 20 pitches | None sent. Sitting since May. |
| Dream 100 | Active, 41 targets, 123 comments | Unclear if any posted. |
| STR Outreach | Ready, 8 emails drafted | None sent. Sitting since May. |
| Energy Contract (TXU) | ACTION — reply to Nichole Knapik | $0.0729/kWh 60-month deal. No reply confirmed. |
| GBP Audit May 2026 | 10 prioritized fixes | Unclear how many completed. |
| Referral Program (Inner Circle) | Designed | No launch activity. |
| SmartLead→EspoCRM Unsub Sync | Planned | Not started. CRM has 0 opt-outs flagged. |

---

## WORKING WELL (No Action Needed)

### R1 Revenue Intelligence — OPERATIONAL
Daily revenue briefs arriving reliably: $7,862 (Jun 17), $8,074 (Jun 18). n8n workflow running at 7AM CT as designed.

### SEO/Schema Deploy — SUCCESSFUL
The 4AM scheduled deploy ran cleanly. All schema enrichments live: amenityFeature, areaServed, @id, menu/hasMenu, hasMap, sameAs, Review schema (6 real reviews per location), OG images + Twitter cards on /frisco + /lewisville. .dockerignore fix is the big operational win — builds are now fast and reliable.

### GSC Indexing Trend — HEALTHY
311 indexed / 120 not indexed (was 84/331 in May). Massive improvement. The 502 fix (nginx failover) + content-uniqueness pass are working.

### Website — STABLE
jinbeh-prod serving 200s. Rollback image available: `jinbeh-elite:rollback-20260619-0913-pre-seo`.

---

## EMAIL SUMMARY

### darrellshill@gmail.com (Personal)
| Email | Action |
|-------|--------|
| MAY SALES TAX (Nooshin Bahrami) | **PAY TODAY** — Mixed Beverage Gross Receipts due Jun 19 |
| IRS Form 4506-T transcript request | Review — thread with Alec (accountant), 17 messages |
| Stonebriar conversation | Check context |
| Accounting invoice | Review/pay |

### YumYumJinbeh@gmail.com (Business)
| Email | Action |
|-------|--------|
| FOX 4 / Melinda Thomas / Zachary Wilson | **Confirm segment Jun 25** — thumbs-up received, not confirmed |
| Jose Espinosa — LightHouse/Matsuda Case | **Respond to legal update** |
| Brad's Google review | **Respond** (brand voice) |
| R1 Revenue Brief Jun 18 ($8,074) | No action — working correctly |
| R1 Revenue Brief Jun 17 ($7,862) | No action — working correctly |
| IRS 4506-T thread (17 msgs, with Alec) | Review — same thread as personal inbox |
| OpenTable Pre-shift Digests | No action — but re-login needed |
| Capital One payment confirmation | No action — payment received |
| Spectrum Business statement | Review/pay |
| Pandora for Business order | No action — confirmation |

---

## UPCOMING DEADLINES

| Date | Item |
|------|------|
| **Jun 19 (TODAY)** | May Sales Tax payment due |
| **Jun 21 (Sun)** | Father's Day — verify extended hours + email campaign sending |
| **Jun 25 (Wed)** | FOX 4 Good Day segment (if confirmed) — Chioma at Lewisville |
| **Jun 26 (Thu)** | Keru Tomeru Japanese TV filming |
| **Jun 11–Jul 19** | FIFA World Cup 2026 window (ongoing) |

---

## RECOMMENDED PRIORITY SEQUENCE (Today)

1. Pay May Sales Tax (5 min)
2. Reply to FOX 4 thread confirming segment (5 min)
3. Respond to Jose Espinosa legal update (10 min)
4. Respond to Brad's Google review (5 min)
5. Verify Father's Day email campaign sending in SmartLead (5 min)
6. Request Hostinger Kodee CPU steal reset (5 min)
7. Send Southern Glazer's reply (10 min)
8. Re-login to OpenTable GuestCenter (5 min)

Total: ~50 minutes of action to clear the critical queue.
