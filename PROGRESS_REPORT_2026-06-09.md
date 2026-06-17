# Jinbeh Progress Report — June 9, 2026

## Executive Summary

The World Cup starts in **2 days** (June 11). Jinbeh's marketing is in strong shape — Google Ads optimized, Chioma partnership signed and strategy call completed, World Cup pages live. However, the VPS automation engine (R1 revenue emails, REP1 review responses) is partially broken, and a major media opportunity needs an immediate reply.

---

## URGENT — Reply Today

### 1. Japanese TV Wants to Film at Jinbeh (STARRED, no reply yet)

**From:** Ruriko Akasaka, GPAUSA (Global Photo Associates USA Inc.)
**Date:** Mon Jun 8, 5:24 PM — **no reply sent yet**

A Japanese television production team for "Keru Tomeru" wants to film at Jinbeh on **Friday, June 26** (day after a Japan World Cup match). They want to capture hosts dining, food prep, and brief conversations with Japanese staff/customers about the World Cup atmosphere. Crew of 13-15 with handheld cameras.

**Why this is a big deal:** Free national Japanese TV exposure during the World Cup, perfectly aligned with the Chioma partnership kickoff (June 25) and the World Cup strategy. This is the kind of earned media that money can't buy.

**Recommended action:** Reply today expressing enthusiasm and asking about preferred time window. Suggest lunch service (less crowded, more flexibility for crew). Coordinate with Johyne. Mention Chioma will also be present on June 25 if they want to extend to that day.

### 2. Jessica Left a Review at Lewisville (today, 5:14 AM)

REP1 is still down. This review needs a manual response via Google Business Profile. Lewisville also got **4 new reviews** in the past few days (per GBP notification).

### 3. Grubhub: Update Hours for World Cup (June 11 - July 19)

Grubhub sent a reminder to update operating hours for the tournament period. If Jinbeh plans any modified hours, update the GFR portal before June 11.

### 4. GSC: "Some fixes failed" for Page Indexing — "Page with redirect"

Google validated the redirect fixes submitted in May and found **some pages still affected**. Check GSC to see which specific URLs are still redirecting and fix them in next.config.ts.

---

## Chioma Partnership — Strategy Call Completed

The Zach x Chi x Darrell strategy call happened **yesterday (June 8, 2:30 PM)**. Meeting summary shared via Otter. Key action items from Darrell's notes:

- **Set up POS item and menu prices** for "The Chioma" dish (next week deadline)
- **Set up table/banner** for taking photos with Chioma at the restaurant
- **Camera team** — bring prosumer DSLR camera for Jinbeh's own shots
- **Chioma's messaging** — selling the story of family loyalty
- **Get pictures from Chioma** for organic social posting

The partnership is $500 flat + 10% uncapped commission, June 25 - July 14. Deliverables: 1 Reel + 4-6 Stories + 1 giveaway.

**There is also a currently-running session** ("Chioma Ubagagu watch party marketing") that appears to be building out World Cup watch party marketing content.

---

## VPS & Automation Status

**Good news:** VPS is stable. Load average: 0.14 (was 31 during the EspoCRM storm). Site returning 200. EspoCRM daemon is OFF (correct).

**Bad news:** n8n task runner is malfunctioning. The last 5 n8n log lines show:

```
Task (RpY3MoSB) rejected by Runner with reason "Offer expired - not accepted within validity window"
Task (CCH7PzWp) rejected by Runner with reason "Offer expired - not accepted within validity window"
...
```

The external runner container IS running, but it's not accepting task offers fast enough. This means **any workflow with Code nodes (JavaScript/Python) is silently failing**. This breaks:

- **REP1** — review auto-responses (DOWN since June 5)
- **R1** — partially working (the Jun 7 and Jun 8 revenue briefs DID arrive at $14,445 and $7,466 respectively, so the trigger + HTTP nodes work, but Code nodes in the pipeline may be skipped)
- **GOV1** — orchestrator event routing likely degraded

**FIX APPLIED (June 9, ~7:15 AM CT):** Both `n8n-n8n-runner-1` and `n8n-n8n-1` containers were restarted during this scheduled review. Post-restart verification confirms:
- JS Task Runner re-registered successfully (ID `JZdjORA_asaiOc382ciE6`)
- n8n ready on port 5678, Task Broker on port 5679
- Python runner failed (expected — no Python3 in the n8n image; JS Code nodes are what REP1/R1 use)
- The "Offer expired" errors should now be resolved — **REP1 and R1 Code nodes should be operational again**

**Still recommended longer term:** upgrade VPS from 2 to 4 vCPU ($4-12/mo) — the box is chronically oversubscribed

---

## Google Ads — Strong Momentum

The most recent session (Jun 8) completed a major negative keyword sweep:

- Shared negative list grew from **450 to 482 entries** (+32 new)
- Key kills: "japanese food" (18.98% CTR, 0% conversion — recipe seekers, not diners), competitor brand names, Spanish-language queries, wrong-cuisine queries, late-night queries
- Ad Strength improved to Excellent across 3 ad groups
- **Next check:** Review Search Terms report in 7 days (around June 15) to see impact

**Still pending:**
- Duplicate keywords between Lunch Deal and main Frisco campaigns (self-competition) — needs dedup
- Second shared negative list ("Jinbeh Master Negatives" without dash) — detach after verifying it's a subset
- World Cup ad group activation for June 11 launch

---

## Financial / Legal Items

### Jose / J Thread — Form 4506-T Transcript Request
There's a 14-message thread about **JIN BEH INC - Transcript Request - Form 4506-T** with Alec and Curt. Latest message says "Please make sure it's filed by Wednesday." There's a Draft reply in progress. Attached PDFs: Hill_LegalOwnership, Executive Summary, and a letter. **Action: File the Form 4506-T by Wednesday June 11.**

### Capital One Business — Merchant Dispute
Capital One opened a merchant dispute for the account. **Action: Review the dispute details and respond if required.**

### Credit Score / Debt Strategy
The $25,000 consolidation loan allocation strategy was finalized in the last session:
- Sapphire: $17,000 (104% → 28% utilization)
- Southwest: $7,000 (98% → 20%)
- Discover: $1,000 (37% → 29%)
- All three under the critical 30% FICO threshold

### Roof Leak at Restaurant
Steven Rasansky (property management) sent roofer to investigate/repair yesterday. Already acknowledged — **monitor for follow-up**.

---

## Stalled Projects (5+ days without progress)

| Project | Last Activity | Status | Next Step |
|---------|--------------|--------|-----------|
| Cloudflare Tunnel migration | Jun 4 | BLOCKED | Dashboard won't load in Chrome; try from regular browser |
| VPS credential rotation (post-security incident) | Jun 4 | CRITICAL | All VPS passwords need rotation (Gmail app password, n8n, Postgres, EspoCRM) |
| Chef recruitment | May | STALLED | 25 candidates, 0 replies — broaden pipeline |
| Frisco postcard coupon concepts | Jun 5 | DRAFT | 5 items need confirmation before print |
| SEO content calendar | May 30 | IDLE | PAA pages deployed; next: internal linking pass |
| Email marketing sequences | Late May | IDLE | Grad sprint completed; no new sequences for World Cup |
| Ali & Salam outreach | Jun 3 | NO REPLY | Follow up with World Cup urgency angle |

---

## Recommended Priority Actions (This Week)

### Today (June 9):
1. **Reply to Ruriko Akasaka** — accept the Japanese TV filming opportunity for June 26
2. **Reply to Jessica's Lewisville review** manually via GBP (REP1 is down)
3. **Respond to the 4 other Lewisville reviews** flagged by GBP

### Tomorrow (June 10):
4. **Activate World Cup Google Ads ad group** — tournament starts June 11
5. **Update Grubhub hours** if any changes planned for tournament period
6. **File Form 4506-T** (deadline: Wednesday June 11)

### This Week:
7. ~~**Fix n8n task runner**~~ — **DONE** (restarted during this review; JS runner re-registered)
8. **Set up "The Chioma" POS item** and lock pricing before June 25
9. **Review GSC "Page with redirect" failures** — check which URLs are still affected
10. **Rotate VPS credentials** — post-security-incident credential rotation is overdue (5 days)
11. **Review Capital One merchant dispute** details
12. **Review Google Ads Search Terms** report around June 15 for negative keyword impact

---

*Report generated June 9, 2026 at 7:15 AM CT by scheduled progress review.*
*Updated 7:20 AM CT: n8n task runner fix confirmed — JS runner re-registered, REP1/R1 should be operational.*
