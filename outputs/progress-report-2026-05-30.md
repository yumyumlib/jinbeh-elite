# Project Progress Report — Saturday, May 30, 2026

## URGENT: Needs Reply Today

### 1. Laura Davis — Chamber × Stars Catering (Aug 9)
**Status:** UNANSWERED 2 DAYS  
Laura replied Thu May 28 at 7:10 AM asking: "Do you have the ability to serve wine and beer?"  
**Action:** Reply yes — Jinbeh has a full bar with beer, wine, sake, and cocktails at both locations. Confirm beverage service is included in catering packages or available as an add-on. This is a warm lead from the JASDFW Gala connection; don't let it cool.

**Draft reply:**
> Hi Laura, Yes — we serve beer, wine, sake, and cocktails at both our Frisco and Lewisville locations. For the Chamber event on August 9th, we can absolutely include beverage service. Would you like to set up a quick call this week to finalize the menu and bar options? Looking forward to it.

### 2. Zachary Wilson / Chioma Partnership — Awaiting Reply
**Status:** Ball in Zachary's court (17 hours)  
Zachary said they can do **June 25th only** (one event, not both) for the proposed amount. Darrell countered Fri May 29 at 1:54 PM: $500 flat + $500 in potential commissions for the event including the reel and 4-6 stories.  
**Action:** If no reply by Monday, follow up. World Cup starts June 11; June 25th is during the tournament window. Time-sensitive.

---

## Email Items Needing Attention (YumYumJinbeh)

| Email | From | Date | Action Needed |
|-------|------|------|--------------|
| Beer/wine for Chamber event | Laura Davis | May 28 | **Reply today** |
| Chioma partnership counter | Zachary Wilson | May 29 | Monitor; follow up Mon if silent |
| GSC Product snippets structured data | Google Search Console | May 28 | Fix missing aggregateRating + review fields |
| Facebook Business Manager partner request | Facebook | Recent | Review and accept/decline |
| 3 new Lewisville/Frisco reviews | Google Business Profile | Recent | Verify REP1 responded; reply manually if not |
| Google Ads Campaign Improvements approval | nievajosefin | Recent | Review and approve/decline |
| Google Ads Proposal + meeting invite | Nieva Josefin | Recent | Review proposal PDF; attend or decline meeting |
| Replenish retainer reserve | Jason | Recent | Determine if payment is needed |
| IRS Communication (941 quarters) | Inggrid | Recent | Review; may relate to ERC/audit work |
| JASDFW Annual Meeting invite | Grant Ogata | May 28 | Decide attendance |
| Payment receipt $4,000 Cook Keith & Davis | Cook, me | Recent | File/acknowledge |

## Email Items (darrellshill)

| Email | From | Date | Action Needed |
|-------|------|------|--------------|
| Marketing Leader canceled | Nancy Macias | May 29 | Informational |
| US Bank May 2021 + Car Payment docs | Nooshin | May 28 | Review for Tesla/M&A work |
| Head Sushi Chef job description | J Hill | Recent | Part of chef recruitment pipeline |
| Checking in from Chase | Katelyn Snider | Recent | Banking relationship; respond if relevant |
| Statement with Outstanding Charges | Amanda | Recent | Review and pay/dispute |
| Dedication appointment (2nd email) | Nguyen, Thomson | Recent | Schedule or decline |

---

## Project Status: Stalled or At Risk

### Website Deploy — PAA FAQ Pages (76 pages)
**Status:** BUILT, NOT DEPLOYED. Been sitting since May 12.  
**Action:** Run `~/Documents/deploy-paa-cleanup.sh`. This adds 107 new URLs to the sitemap (254 → 361). Each page is optimized for AI citation with exact-match H1s and 120-word direct answers. Every day undeployed is lost indexing time.

### GSC Structured Data — Product Snippets
**Status:** NEW ISSUE (May 28 GSC email)  
Missing `aggregateRating` and `review` fields on Product snippet pages. Non-critical per Google, but these fields enable star ratings in search results.  
**Action:** Add aggregateRating schema to menu item pages or remove Product markup if it's not intentional. Can be batched with the PAA deploy.

### Cloudflare Bot Fight Mode / Sitemap
**Status:** STALLED since May 7  
GSC still reports "Couldn't fetch" on the sitemap because Cloudflare's Bot Fight Mode challenges Googlebot's sitemap fetcher.  
**Action:** Log into Cloudflare (yumyumjinbeh@gmail.com) → Security → Bots → either disable Bot Fight Mode entirely or add a WAF Skip rule for `/sitemap.xml`. Then re-submit sitemap in GSC.

### Archive DNS Record
**Status:** STALLED since May 15  
The archive.jinbeh.com container and nginx are ready on the VPS. Only needs a Cloudflare DNS A record: `archive` → `72.61.15.71` (Proxied).  
**Action:** Add in Cloudflare dashboard. 30-second task.

### Energy Contract — TXU
**Status:** STALLED  
TXU 60-month offer at $0.0729/kWh. Needs reply to Nichole Knapik to lock in.  
**Action:** Respond to lock in the rate before it expires.

### Git Commit — Responsive Images Fix
**Status:** Code deployed to prod via rsync, but NOT committed to git  
**Action:** From a real Terminal:
```
cd ~/Documents/jinbeh-elite-phase1
rm -f .git/index.lock
git add -A && git restore --staged .claude
git commit -m "Responsive homepage images + fix 16 broken image refs"
```

### Obsidian Updates Scheduled Task
**Status:** Failing every night for 1+ weeks (no folder access)  
**Action:** Disable this task. The nightly vault sync task covers the same function and works correctly.

---

## Projects Progressing Well

### Google Ads
Ad Strength raised to Excellent across Sushi Core, Japanese Restaurant, and Celebrations ad groups. Promo code redeemed. Google Ads rep Nieva Josefin engaged with proposals and meeting invite. Session hit 11 PM limit before final verification; needs a resume to confirm the Excellent state saved.

### Website — Mobile Images Fixed
Responsive image generation deployed to production. Phones now pull ~27 KB thumbnails instead of ~600 KB originals. 16 broken image refs fixed across blog/SEO pages. Both prod and staging healthy.

### M&A / Legal — Cash Cushion Strategy
Cash Cushion strategy shifted: pay $45,042 as agreed in March (under reservation of rights per TX Bus & Com Code §1.308), then pursue pre-closing items via §6.08 setoff against $3,300/month seller note payments. Email drafted to Jose with the three confirmations needed before wiring. Nooshin providing Tesla loan documentation (US Bank May 2021 docs in email).

### Chioma Ubogagu Partnership
Zachary Wilson responded after follow-up. Negotiating to a single June 25th event at $500 + $500 commissions. Counter-offer sent; awaiting reply.

### Nightly Vault Sync
Running reliably. Created note for Google Ads Ad Strength session on May 29.

---

## Upcoming Deadlines

| Date | Item |
|------|------|
| **June 11** | FIFA World Cup 2026 starts (12 days) |
| **June 25** | Proposed Chioma/Jinbeh content event |
| **Aug 9** | Chamber × Stars catering event (Laura Davis) |
| **TBD** | Cash Cushion wire to Aya (pending Jose's confirmation) |
| **TBD** | TXU energy contract deadline |

---

## Outreach Campaigns Ready but Not Launched

These have been built but not executed. Consider batching launches:

- **Journalist Outreach:** 17 DFW journalists, 20 pitches ready
- **Dream 100:** 41 targets, 123 comments ready
- **STR Host Outreach:** 8 PM outreach emails drafted in Gmail
- **Chef Recruitment:** 25 candidates contacted, 0 replies — pipeline needs broadening

---

## Recommended Priority Actions (Today/This Weekend)

1. **Reply to Laura Davis** about beer/wine for Chamber event (2 days overdue)
2. **Deploy PAA FAQ pages** — 76 pages sitting undeployed since May 12
3. **Fix Cloudflare Bot Fight Mode** — unblocks GSC sitemap fetch
4. **Add archive DNS record** in Cloudflare — 30-second task
5. **Review and approve/decline** Google Ads campaign improvements from Nieva
6. **Verify REP1** responded to the 3 new Google reviews
7. **Commit responsive images fix** to git
8. **Reply to TXU** to lock in energy rate
9. **Review Facebook Business Manager** partner request
