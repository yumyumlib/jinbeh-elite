# Jinbeh Project Progress Report — June 10, 2026

**Auto-generated** from session transcripts, VPS health check, Gmail inbox review, and project context.

---

## URGENT: World Cup Starts Tomorrow (June 11)

The FIFA World Cup 2026 opening ceremony is **tomorrow**. Japan's first match in the group stage follows shortly after. Several World Cup items need immediate attention:

**Japanese TV Filming Request (HUGE opportunity)**
Ruriko Akasaka from GPAUSA (Japanese television production team, program "Keru Tomeru") emailed Jun 8 requesting to film at Jinbeh on **Friday, June 26** — the day after a Japan World Cup match. Crew of 13-15 people. Darrell sent an excellent, detailed response on Jun 9 covering logistics, food ordering requirements, and coordination questions. **Status: Awaiting Ruriko's reply. If no response by Jun 12-13, follow up.**

**Chioma Partnership**
Notes from Chioma call in inbox: "I need to set up POS item and menu pricing..." — the Samurai Blue Special and World Cup menu items need to be configured in Focus POS before tournament starts. **Action needed TODAY.**

**World Cup Landing Page**
The `/celebrations/world-cup` page exists in the codebase but the watch-party variant (`/celebrations/world-cup-watch-party`) deployment status is unclear from recent sessions. The Google Ads World Cup ad group was created in the Jun 2 session. Verify the landing page is live and the ad group is active.

---

## System Health: All Green

**VPS (72.61.15.71):** Load average 0.11 (healthy), all 14 Docker containers running, `jinbeh-prod` healthy on port 3002.

**R1 Revenue Intelligence Agent: RECOVERED.** Daily revenue emails are flowing again after the Jun 7 reboot. Confirmed in Gmail:
- Jun 6: $16,688 (2 alerts)
- Jun 8: $7,466
- Jun 9: $7,082

**REP1 Review Response Agent: OPERATIONAL.** A "[REP1] Review Response: 5 star from Codex Ops Test (Frisco)" email confirms the agent is generating review responses.

**n8n:** Recovered after the Jun 7 CPU storm (caused by EspoCRM daemon). EspoCRM daemon is stopped with CPU caps in place. The task-runner issue remains an underlying concern but is not blocking daily operations currently. Three active workflows confirmed: REP1 (vBdex56BtZ8xJq8l), R1 (VtG7W8uZWe8T5mTi), VIP1 (wIqB1gjt9ZKpxvYl).

**World Cup Pages:** Verified live on prod container — `/celebrations/world-cup` (200), `/world-cup-2026` (200). Both accessible through Cloudflare.

---

## Email Inbox Summary (YumYumJinbeh@gmail.com — 32 unread)

### Requires Action

| Email | From | Summary | Recommended Action |
|-------|------|---------|-------------------|
| **Notes from IRS phone call** | J Hill | IRS phone call notes — "Call the IRS, Create online user nam..." | Read and follow the IRS instructions. Related to Matsuda lawsuit (targeted Jun 11 filing). |
| **Jinbeh Inc Tax Filing** | me, Alec (2 msgs) | "Hi Darrell, The JIN BEH INC short year 20..." | Review Alec's update on the short-year tax filing. Respond if action needed. |
| **Merchant dispute opened** | Capital One Business (4 msgs) | "We've opened a merchant dispute for your account" | Track the dispute. Check if documentation is needed. |
| **Jessica left a review** | Google Business Pro | Review for Jinbeh Lewisville | Check if REP1 auto-responded. If not, respond manually. |
| **Tahni left a review** | Google Business Pro | Review for Jinbeh Frisco | Same — verify REP1 handled it. |
| **4 new reviews (Lewisville)** | Google Business Pro | Lewisville got 4 new reviews | Verify REP1 is responding to all. |
| **Notes from Chioma call** | me (self-note) | POS item and menu pricing setup needed | **Do today** — World Cup starts tomorrow. Set up Samurai Blue Special in Focus POS. |
| **Japanese Media Request** | Ruriko Akasaka (starred) | Japanese TV filming request for Jun 26 | Awaiting reply. Follow up if no response by Jun 12-13. |
| **Strategy Meeting** | me, Zachary (2 msgs) | "Hi Darrell, What time works for you this aftern..." | Respond to schedule the meeting with Zachary Wilson. |
| **Google Ads recommendations** | Google Ads | "Add 4.0 headlines and 2.0 descriptions with Google AI" | Review but don't auto-apply. Previous sessions showed AI recommendations can be counterproductive. |
| **Fwd: financial 2026** | D Hill | Forwarded with jinbeh P&L and balance sheet PDFs | Review financial documents. |
| **Dallas Food Nerd Instagram Post** | me (self-note) | Instagram post link | Review and engage/share if appropriate. |

### Informational (No Action Needed)

- **GSC "Some fixes failed"** — Already diagnosed Jun 9 as a non-issue (intentional redirects will always "fail" validation). No action needed.
- **GBP Performance Reports** — Lewisville and Frisco weekly performance. Review at leisure.
- **OpenTable Pre-shift Digests** — Multiple digests showing 1-10 reservations per shift. Normal operations.
- **R1 Revenue Briefs** — Jun 6 ($16,688), Jun 8 ($7,466), Jun 9 ($7,082). System healthy.
- **Capital One documents** — Statement/document ready notifications.
- **Zachary Wilson meeting notes** — Otter.ai meeting summary and shared Connect link from Jun 8.
- **Nice News** — Newsletter (ignore).
- **Leaks from the Rain** — me, Steven thread about non-AC-related leaks. Appears handled.

### Promotions Tab (8 new)

- **Grubhub for Merchants** — Business funding offer. Worth reviewing if cash flow is tight.
- Others likely marketing emails — low priority.

---

## Outstanding Projects: Status & Recommended Actions

### CRITICAL (Do This Week)

1. **World Cup POS Setup** — Set up Samurai Blue Special ($X for 15pc sashimi + free edamame) in Focus POS at both locations BEFORE Jun 11. Source: Chioma call notes email.

2. **World Cup Ad Group Activation** — Verify the Google Ads World Cup ad group (created Jun 2) is active and spending. Tournament traffic starts tomorrow.

3. **Ruriko/GPAUSA Follow-Up** — If no reply by Jun 12-13, send a gentle follow-up. This is potentially the biggest PR opportunity Jinbeh has ever had — Japanese national television filming during the World Cup.

4. **IRS Action Items** — J Hill's "Notes from IRS phone call" email contains specific instructions (create online user name, etc.). Read and act on these — related to the Matsuda lawsuit filing targeted for Jun 11.

### HIGH PRIORITY (This Week)

5. **Google Reviews Response Check** — Jessica (Lewisville), Tahni (Frisco), and 4 new Lewisville reviews came in. REP1 appears operational (confirmed via test email), but verify these specific reviews got responses. If not, respond manually.

6. **Google Ads Duplicate Keywords** — Lunch Deal campaign has duplicate keywords with the main Frisco campaign (identified Jun 2). Self-competition wastes budget. Clean up by assigning each query to one canonical campaign.

7. **Alec Tax Filing Thread** — 14-message thread with Alec, D, Curt about "JIN BEH INC - Transcript Request - Form 4506-T." Review latest status and respond.

8. **Capital One Merchant Dispute** — 4-message thread. Track status, provide documentation if needed.

### MEDIUM PRIORITY (Next 1-2 Weeks)

9. **Energy Contract** — TXU 60-month at $0.0729/kWh. Reply to Nichole Knapik to lock in. This has been pending since the CLAUDE.md was last updated.

10. **PAA FAQ Pages Deploy** — 76 pages built, deploy script ready at `~/Documents/deploy-paa-cleanup.sh`. Run it to get 76 new indexable pages live.

11. **GBP Audit** — 10 prioritized fixes from the May 12 audit still pending (opening date, Lewisville description rewrite, Frisco name verification, etc.).

12. **Cloudflare Tunnel** — Blocked by dashboard loading issue. The VPS has NO firewall — every Docker port is exposed. This is the #1 security priority after World Cup rush subsides.

13. **Credit Card Payoff** — $25K allocation plan finalized (Sapphire $17K, Southwest $7K, Discover $1K). Execute before statement dates.

### READY TO LAUNCH (Waiting on Darrell)

14. **STR Host Outreach** — 8 PM emails drafted in Gmail, ready to send.
15. **Journalist Outreach** — 17 DFW journalists, 20 pitches ready.
16. **Dream 100** — 41 targets, 123 comments ready to post.
17. **Zachary Wilson Strategy Meeting** — Reply to schedule. He asked "What time works for you this afternoon?"

---

## Revenue Snapshot (from R1 Briefs)

| Date | Revenue | Notes |
|------|---------|-------|
| Jun 6 | $16,688 | 2 alerts flagged |
| Jun 8 | $7,082 | Normal Sunday |
| Jun 9 | $7,082 | Normal Monday |

Father's Day (Jun 15) historically generates ~2.25x a normal June Sunday (~$16.8K/restaurant). The Jun 9 analysis recommended opening at 11am and running through the 2:30-5pm gap.

---

## Key Wins Since Last Check

- **R1 and REP1 both recovered** after the Jun 7 VPS CPU incident
- **Japanese TV filming request** — enormous World Cup PR opportunity, professionally handled
- **Father's Day analysis completed** — data-driven recommendation for extended hours
- **GSC "Page with redirect" diagnosed** — 16 of 19 are intentional, 3 FAQ pages already fixed
- **VPS stable** — load average 0.11 after EspoCRM daemon fix

---

*Report generated Jun 10, 2026 by automated project-progress task.*
