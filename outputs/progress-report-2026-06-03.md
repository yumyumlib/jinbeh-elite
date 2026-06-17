# Jinbeh Project Progress Report — June 3, 2026

**Generated:** 7:12 AM CT | **Sources:** Session transcripts, YumYumJinbeh@gmail.com, darrellshill@gmail.com, VPS health check, CLAUDE.md active projects

---

## URGENT — Reply Today (World Cup starts in 8 days)

### 1. Zachary Wilson / Chioma Partnership — STALLED 5 DAYS
**Counter-offer sitting unanswered since ~May 29.**
Zachary's latest: **$500 flat + uncapped commission** (your offer was $500 flat + $500 commission cap).

**Recommended action:** Accept with a defined attribution mechanism (unique booking code like `CHIOMA` or UTM-tracked link). Uncapped commission aligns incentives — if Chioma drives $10K in reservations, paying her 10% ($1K) is still profitable at ~70% food margin. The cap was only saving you $500 max upside vs. unlimited downside of losing the partnership 8 days before the World Cup. Japan's first match (June 14) is the content window.

**Deliverables to confirm in your reply:** 1 Reel + 4-6 Stories for June 25 match day, commission attribution method, payment timeline.

### 2. Laura Davis / Chamber × Stars Catering — FRESH REPLY (7:09 AM today)
Laura just replied: "Nevermind. I've been told no alcohol. Thanks."

**This is NOT a rejection — she's confirming the event is food-only.** She's still interested in catering for ~100 guests on Aug 9.

**Recommended action:** Reply today acknowledging the no-alcohol decision, confirm you're excited about the food-only option, and propose next steps (menu tasting, final headcount deadline, deposit). Use the jinbeh-catering-strategy framework: this is a warm B2B lead from the JASDFW gala network — treat it as a "Grand Experience" catering package opportunity.

---

## ACTION ITEMS — This Week

### 3. GBP Reviews Unanswered (5+ new reviews)
- **Lily** left a review for Jinbeh Lewisville
- **Caleb** left a review for Jinbeh Frisco (Steak Seafood & Sushi)
- **4 additional new reviews** for Lewisville (Google Business notification)
- **REP1 workflow IS active** (`vBdex56BtZ8xJq8l`) but reviews aren't getting auto-responses. The trigger/webhook path may be broken — likely the GBP notification → webhook chain isn't delivering. Check n8n execution history for REP1 to see if it's receiving triggers. If no recent executions, the webhook URL may need re-registration. Meanwhile, manually respond to these reviews ASAP (review velocity + response rate directly impact local SEO prominence).

### 4. Facebook Business Manager — 3 Partner Requests Pending
Someone (or multiple entities) sent Business Manager partner requests. These could be legitimate (ad agency, Meta rep) or spam. Open Facebook Business Manager and review before accepting.

### 5. Google Ads — WC Ad Group Still Unsaved
The currently-running "Google Ads strategy" session built a World Cup ad group but hit a 2FA wall on save. The session is still active and working on an n8n email-alert workflow. Once it completes:
- **Save the WC ad group** (requires your 2FA device approval)
- **Swap "japanese food" keywords → "japanese restaurant"** per the June 2 learning (18.98% CTR but 0% conversion on "japanese food frisco")
- **Pause it until June 8** (3 days before tournament opens)

### 6. Lunch Special Email Campaign — Should Be Complete
The Smartlead campaign to 2,052 leads (groups A-C and M-R who never received the Hibachi-for-Two T3 message) was estimated to complete by Wed June 3 (today). Check Smartlead for delivery stats and bounce/reply rates. Decision still open: whether to re-send T3 to the J-L group (~1,010 leads who got it in Round 1 but not Round 2).

---

## REVENUE SNAPSHOT (R1 Intelligence — working perfectly)

| Metric | Current | Comparison | Delta |
|--------|---------|------------|-------|
| **Tue Jun 2 (both)** | **$8,092** | Tue last week: $6,228 | **+30%** |
| Trailing 7 days | $75,063 | Prior 7: $92,188 | -18.6% |
| Trailing 28 days | $353,776 | Prior 28: $262,918 | **+34.6%** |
| MTD Jun vs last year | $15,727 | $15,328 | +2.6% |
| YoY same weekday | $8,092 | $8,250 | -1.9% |
| **Sat May 31** | **$11,486** | (2 alerts triggered) | Big day |

**Frisco trailing 7:** $34,566 (vs $47,353 prior 7 — down, monitor)
**Interpretation:** Day-to-day is healthy (Tue was strong). The trailing 7-day dip is likely calendar noise (Memorial Day weekend effect). The 28-day trend (+34.6%) and YoY MTD (+2.6%) are the more meaningful signals — both positive.

---

## INFRASTRUCTURE STATUS

| System | Status | Notes |
|--------|--------|-------|
| **VPS disk** | **73% (27GB free)** | Improved from 87% — someone pruned |
| jinbeh-prod | Up 44 hours, HTTP 200 | Healthy |
| jinbeh-staging | Up 2 days | Healthy |
| n8n | Up 4 weeks | R1 briefs sending daily at 7 AM CT |
| EspoCRM | Up 4 weeks (healthy) | 6,562 contacts |
| Hermes Agent | Up 2 weeks | 77 tools |
| Archive | Up 2 weeks | Ready |
| Load average | 3.39-3.52 | Stable but on the higher side |
| Uptime | 33 days | No reboots |

---

## GSC / SEO — VALIDATION IN PROGRESS (good news)

Google Search Console confirmed **two issues are now FIXED:**
- "Unparsable structured data issues **successfully fixed** for site jinbeh.com"
- "Events structured data issues **successfully fixed** for site jinbeh.com"

Three validations are **in progress:**
- Page indexing issue fixes
- Events structured data issue fixes
- Unparsable structured data issue fixes

**The May 31 deploy is paying off.** The 502 nginx fix (IPv6→127.0.0.1) and the JSON-LD cleanup are being validated by Google. The 263 "Discovered – currently not indexed" count should start improving as Googlebot successfully re-crawls without 502 errors.

**Still needed (manual):** Re-submit the sitemap in GSC. Validate Fix on remaining open issues.

---

## STALLED PROJECTS (from CLAUDE.md active list)

### High Priority — World Cup (8 days out)
- **World Cup web pages:** DONE and deployed (pillar + /frisco/world-cup + /lewisville/world-cup). Factual corrections made (Japan vs Netherlands = Sun Jun 14, 3 PM CT). Live and verified.
- **Chioma partnership:** STALLED — see item #1 above. This is the #1 marketing asset for WC.
- **WC Google Ads:** Built but unsaved — see item #5 above.
- **WC promotional offers:** Blocked on owner approval. "Samurai Blue Experience" pricing and "Gol! Goals for Deals" need your sign-off before publishing.

### Medium Priority
- **TXU Energy Contract:** Stalled 3+ weeks. Nichole Knapik offered 60-month at $0.0729/kWh. Reply to lock in before the rate expires.
- **GBP Audit May 2026:** 10 prioritized fixes identified. Opening date, Lewisville description rewrite, Frisco name verification still pending. Manual GBP dashboard work.
- **Feedback forms:** Code built (/feedback/frisco, /feedback/lewisville) but DB migration not run and Cloudflare DNS record for `feedback` subdomain not added.
- **PAA FAQ pages:** 76 pages built and deployed (the Next.js 16 async params bug + stale redirect were fixed May 30). Now live and indexable. Monitor GSC for crawl/index progress.
- **Chef recruitment:** 25 candidates, 0 replies. Pipeline needs broadening — consider Indeed/Culinary Institute job posts.

### Low Priority / Monitoring
- **Bing Webmaster Tools:** Sitemap submitted, processing. Check back in a week.
- **Archive backup (archive.jinbeh.com):** Container ready, DNS A record for `archive` still needs adding in Cloudflare.
- **Debt consolidation:** Research phase. SoFi → LightStream rate beat for ~$49K.
- **HSA Investment:** Phase 1 (SPHD limit order placed, BSV next).

---

## BILLS / INVOICES IN INBOX

- **Signature Hospitality Services** — Invoice for JNBE (garment care), Jun 1, PDF attached
- **Republic Services** — New invoice 06/02/2026 (trash/waste)
- **Weitzman Group** — Receipt for payment (landlord/lease)
- **Monarch** — 4 transactions need review (personal finance app)

---

## RECOMMENDED ACTIONS SUMMARY (prioritized)

1. **TODAY:** Reply to Zachary Wilson — accept $500 + uncapped commission with booking code attribution
2. **TODAY:** Reply to Laura Davis — confirm food-only catering, propose menu tasting for Chamber × Stars
3. **TODAY:** Check REP1 review agent status; if not auto-responding, manually reply to 5+ GBP reviews
4. **THIS WEEK:** Save WC ad group in Google Ads (2FA), swap keywords, pause until June 8
5. **THIS WEEK:** Reply to TXU (Nichole Knapik) to lock in $0.0729/kWh rate
6. **THIS WEEK:** Check Smartlead for lunch campaign completion stats
7. **THIS WEEK:** Review Facebook Business Manager partner requests
8. **THIS WEEK:** Decide on WC promotional pricing (Samurai Blue Experience, Gol! deals)
9. **NEXT WEEK:** Re-submit sitemap in GSC after validations complete
10. **ONGOING:** Monitor GSC indexing — 263 "Discovered" should start declining
