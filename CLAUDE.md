# jinbeh-elite-phase1 — Project Learnings

This file tracks notable findings, decisions, and tribal knowledge for the
jinbeh-elite-phase1 Next.js website. Add new entries at the top with a
date and short title.

## 2026-06-21 — DEPLOYED nightly SEO content batch 2 (25 pages: catering + neighborhood + category)

Scheduled `nightly-seo-content-batch` run. Generated + deployed the next 25 unique
PageSeoBoost entries (heading + 2 paragraphs + 3 FAQs each) into
`src/data/page-seo-content.ts`. Clean build, no abort, no rollback.

### Pages covered this run (25, all non-blog)
catering: `/catering/corporate`, `/catering/party`, `/catering/wedding`.
neighborhood_loc: `/frisco/legacy`, `/frisco/starwood`, `/frisco/stonebriar`,
`/frisco/world-cup`, `/lewisville/castle-hills`, `/lewisville/vista-ridge`,
`/lewisville/world-cup`. category: `/frisco/{appetizers,cocktails,hibachi,kids-menu,
menu,specials,sushi-rolls}`, `/happy-hour/specials`, `/lewisville/{appetizers,cocktails,
hibachi,kids-menu,menu,specials,sushi-rolls}`.

### Coverage tracker
- Before: 13 routes covered. After: **38 routes covered** (13 + 25).
- Injectable pages total: **276** (incl. 100 blogs). **Remaining eligible: 238.**
- At 25/night this completes in ~10 more nightly runs, then self-disables.
- NOTE: this batch had **no blog routes**, so the task's "QA at least one blog"
  step was N/A; blog batches come later (blogs render via the shared
  `blog/layout.tsx` <BlogSeoBoost/>, no per-page injection).

### Content notes (brand rules applied)
- Each entry targets its primary_keyword, weaves secondaries, and works in its
  feature_adds: "Serving DFW since 1988 / longest-running family-owned" authority,
  reservations+hours, easy online ordering / to-go, landmark proximity (Stonebriar,
  The Star, Vista Ridge, Legacy West), kid-friendly tableside show + training
  chopsticks, premium hibachi cuts (filet mignon, NY strip, Black Angus ribeye,
  chateaubriand, twin lobster), fresh-fish-cut-to-order sourcing, sake/whiskey
  (Dassai/Yamazaki/Hibibi → Hibiki) + flights.
- Specials pages feature the **$35 Mon-Fri lunch Hibachi-for-Two** and the **Happy
  Hour** $4 draft / $5 small hot sake / $6 wine (Mon-Fri 5:00-6:30) — the only
  allowed prices (written as "35 dollars / 4 dollar / 5 dollar / 6 dollar" to match
  the file's existing happy-hour style).
- Sushi-rolls pages use the **Fuji-san** chef-craft angle (head sushi chef since
  1993; original Jinbeh Special Roll his signature) within guardrails (no
  every-roll claim; ramen/kaiseki/toro/uni/abalone NOT presented as current; no
  "never frozen"). PageSeoBoost renders paragraphs as plain text (no anchor tags),
  so his /blog/fuji-san-jinbeh-sushi-chef-dfw profile is referenced descriptively,
  not linked. No AYCE, no omakase, no em-dashes (validated programmatically).

### Deploy mechanics
- Pre-flight: **CPU steal 0.0%, load 0.08, 19 GB free**, prod healthy (well under
  abort guards steal>40 / load>12 / disk<8GB).
- `apply_hero_upgrades.py` injected the 25 `<PageSeoBoost route=.../>` anchors before
  `<Footer>` (idempotent; hero-swap portion produced 0 new writes — exactly 25
  page.tsx touched this run). page-seo-content.ts verified: 38 top-level routes,
  braces balanced, still ends `export default seoContent;`.
- rsync `src/` (ephemeral ed25519 key, removed after). `docker build` candidate
  **4.39 GB**: compiled 40s, **TypeScript clean 37.6s**, 398 static pages.
- QA (temp :3009): `/catering/wedding`, `/frisco/hibachi`, `/lewisville/sushi-rolls`,
  `/frisco/world-cup`, `/happy-hour/specials` all 200 with new content marker
  present; /, /frisco, /lewisville 200. Promote → rollback tag
  **`jinbeh-elite:rollback-20260621-0852-pre-content`** (kept); candidate→latest;
  prod recreated, **healthy**. Live re-verify on :3002 (Host: jinbeh.com): batch
  pages 200 + content present, core pages 200.
- **IndexNow:** 25 batch URLs POSTed to api.indexnow.org → **HTTP 200** (keyfile 200).

### Notes
- 3003 archive NOT rebuilt this run (still serves prior content as failover);
  rebuild when convenient.
- Local changes remain UNCOMMITTED (sandbox can't clear `.git/index.lock`); deployed
  via working-tree rsync. Commit from the real Mac for history. Scratchpad ephemeral
  key files persist in the session outputs dir but are inert (VPS-side key removed).

## 2026-06-21 — DEPLOYED the hero-image + UI + catering/content upgrade to prod (scheduled off-peak run)

Unattended scheduled run (`deploy-staged-hero-images`) executed the full
HERO_UPGRADE_MANIFEST_2026-06-20 plan end-to-end. Clean run, no abort, no rollback.

### What shipped (live on `jinbeh-prod` / `jinbeh-elite:latest`)
- **182 hero swaps + keyword-rich alt text** across page.tsx, menu-items data, and
  3 former gradient pages — applied deterministically by `scripts/apply_hero_upgrades.py`
  (idempotent; logged old→new per file in `HERO_SWAP_CHANGELOG_2026-06-20.md`).
- **159 responsive WebP variants** (768/1280/1920w) generated for the new heroes
  (`convert` present in the Cowork sandbox, so variants generated locally then rsynced).
- **TrustStrip ("Serving DFW since 1988 / #1-Rated Hibachi · Frisco & Lewisville")**
  wired BELOW the homepage hero (hero itself untouched — still the fire-show poster,
  verified `/images/hero/jinbeh-hibachi-chef-fire-show-*` on prod).
- **BlogSeoBoost** in the shared blog layout + **13 PageSeoBoost** unique per-page SEO
  content sections (batch 1: frisco, lewisville, catering, happy-hour, bar, world-cup,
  private-dining, events, frisco/sushi, lewisville/sushi, etc.) from `page-seo-content.ts`.
- Already-committed-by-earlier-session pieces that rode along: CateringPackages/
  OnlineOrderCTA/HoursReserve components + `src/data/catering-program.ts`; the flagship
  blog `/blog/fuji-san-jinbeh-sushi-chef-dfw` (in blog-posts.json); new
  `public/images/about/fuji-san-*` portrait files + variants.

### Deploy mechanics
- **Pre-flight:** load 0.00, **CPU steal 0.0%**, 32 GB free, prod healthy (well under
  the abort guards: steal>40% / load>12 / disk<8GB).
- **rsync:** `src/` with `--delete`; `public/images/` WITHOUT `--delete` (191 files /
  ~22.7 MB = the 12 new heroes + variants + fuji-san portraits only — speedup 50.9x).
- **Build:** candidate image, compile 48s, **TypeScript clean 38.8s**, 398 static pages,
  4.39 GB. Load peaked ~2.2 (nowhere near 12).
- **QA (temp :3009):** all key pages + the new blog 200; 6 new image URLs 200; homepage
  hero confirmed still the fire-show poster + TrustStrip present. Temp container removed.
- **Promote:** rollback tag **`jinbeh-elite:rollback-20260621-0809-pre-heroupgrade`** (kept);
  candidate→latest; prod recreated. Live verify on :3002 (Host: jinbeh.com): /, /frisco,
  /lewisville, /menu, /catering, /order-online, /blog/fuji-san-jinbeh-sushi-chef-dfw all
  200; new images 200; prod healthy (home 200 in ~0.02s).

### Post-deploy
- **IndexNow:** 198 changed URLs (hero-swap routes + page-seo-content keys + the new blog)
  POSTed to api.indexnow.org → **HTTP 200**; keyfile live (200).
- **3003 archive failover rebuilt** (`snapshot.sh` → `jinbeh-archive:20260621-081008`,
  swapped; serves the new blog + images, 200). NOTE: confirmed the known step-6 bug —
  `snapshot.sh` hangs/doesn't print "complete" after the container swap, but the swap
  itself succeeds; `pkill -f snapshot.sh` to clear the lingering process.
- **Ephemeral ed25519 key** added for rsync then removed (0 remaining in authorized_keys).

### Notes / lessons
- `/tmp` in the Cowork sandbox is **shared across sessions** — a pre-existing `/tmp/vps.py`
  owned by another session blocked overwrite ("Permission denied"). Put paramiko helper
  scripts in the session's own outputs dir, not bare `/tmp`.
- The local `git commit` is again blocked by a stale `.git/index.lock` (sandbox can't
  unlink) — changes are deployed via working-tree rsync but remain UNCOMMITTED locally;
  clear the lock + commit from the real Mac for history. New untracked deliverables this
  session: HERO_UPGRADE_MANIFEST, HERO_SWAP_CHANGELOG, Jinbeh_Hero_Image_Audit xlsx,
  SEO_COMPETITIVE_ANALYSIS, STRUCTURED_DATA_IMPROVEMENTS, OUTREACH_DRAFTS, PROGRESS_REPORT.
- **Skipped by design:** the homepage hero (locked 10/10), ~92 pages whose current hero
  already wins, and the 2 scaffolded-only items (fire-show video hero + Google review
  carousel) which await owner-controlled assets/feeds. Remaining PageSeoBoost batches
  (category/nearby/celebrations/blog) follow in later reviewed runs.

## 2026-06-20 — Hot-swapped the 4 location menu PDFs (June-15-2026 versions) — no rebuild

Owner provided refreshed lunch/dinner menu PDFs for both locations. The
website links + filenames were ALREADY correct (`/menus/{frisco,lewisville}/{lunch,dinner}-menu.pdf`,
referenced in `frisco/menu/page.tsx`, `lewisville/menu/page.tsx`, `menu/MenuClient.tsx`),
so this was purely a static-file content swap — no source change, no Docker rebuild.

### What shipped
- Replaced 4 PDFs in local repo `public/menus/` (sushi-menu.pdf left untouched).
  New files are the larger, higher-res June-15-2026 exports (F-lunch 1858473,
  F-dinner 1971768, L-lunch 1925058, L-dinner 1969874 bytes; all 2-page, valid).
- **Hot-swap deploy (chosen over rebuild):** uploaded via SFTP, then for each of
  the 4 files: `cp` into `/opt/jinbeh-elite/public/menus/...` (disk source of
  truth, so the next normal rebuild bakes them in) AND `docker cp` into BOTH
  `jinbeh-prod:/app/public/menus/...` and `jinbeh-archive:/app/public/menus/...`
  (live update, no restart). Next standalone serves `/public` from the container
  FS each request, so no restart/rebuild needed.

### Verified
- Pre-flight: load 0.06, **steal 0.0%**, prod healthy, 23G free.
- prod :3002 direct → all 4 new sizes, http 200.
- Public via Cloudflare → all 4 canonical URLs return new content-length +
  `last-modified: Sat, 20 Jun 2026 22:18` + `cf-cache-status: EXPIRED` (edge
  auto-revalidated against origin — **no manual Cloudflare purge needed** for PDFs).

### Notes / lessons
- **Hot-swap is the right tool for static-asset-only changes.** A full image
  rebuild (compile 397 pages + TS check + prod restart) is overkill to change 4
  PDFs. `docker cp` into prod+archive + updating `/opt/.../public` is instant,
  zero CPU spike, and durable through the next code rebuild. Caveat: a bare
  `docker rm+run` recreate from the CURRENT image (without a rebuild) before the
  next rebuild would revert the cp'd files — acceptable since deploys rebuild
  public anyway.
- `docker cp` lands files as root:root 644 inside the container; the `nextjs`
  runtime user reads them fine.
- `log.env` `VPS_PASSWORD` is **single-quoted** (`'Brighter100?'`) — strip quotes
  after the regex or paramiko auth fails.
- Direct-origin curl to nginx returns **403 by design** (origin blocks
  non-Cloudflare); verify via prod :3002 directly + the public Cloudflare URL.

## 2026-06-20 — DEPLOYED SEO competitive analysis fixes + new content + Google Maps embeds

Second deploy of the day. All changes from the competitive SERP analysis session.

### Changes deployed
1. **New blog article:** `/blog/best-hibachi-frisco` — 476-line article targeting
   "best hibachi frisco", "japanese steakhouse frisco", "teppanyaki near me frisco".
   Article + FAQPage + BreadcrumbList schema. Registered in `blog-posts.json`
   (along with `best-hibachi-lewisville` which was also missing from the JSON).
2. **Google Maps embeds:** Added embedded Google Maps iframes to `/frisco` and
   `/lewisville` location pages ("Find Jinbeh Frisco/Lewisville" sections with
   interactive map + "Get Directions" link).
3. **P0 bug fixes:** Truncated meta description on `/catering`; broken ItemList
   schema + BreadcrumbList + missing table cells on `/blog/group-dining-venues`;
   em-dashes + prices removed from `/blog/japanese-steakhouse-near-me-dfw`;
   generic H1 on `/celebrations/birthday` replaced with keyword-rich version.
4. **P1 improvements:** Happy Hour FoodEvent endDate extended to 2027-12-31;
   `/private-dining` FAQ schema trimmed from 9 to 6 (matching rendered);
   `/world-cup-2026` got Twitter card metadata; `/frisco/hibachi` H1 updated
   to "Best Hibachi in Frisco, TX".

### Deploy details
- **Pre-flight:** load 0.24, 21G disk free, prod healthy.
- **Build:** npm ci CACHED, compile 39.7s, TypeScript 42s, 397 static pages.
  Total build ~2 min. Load peaked ~1.96 (well under 12 threshold).
- **QA:** All key pages 200 on :3009, Google Maps embeds confirmed on both
  location pages, new blog articles accessible.
- **Rollback tag:** `jinbeh-elite:rollback-20260620-1725-pre-seo2`.
- **Ephemeral SSH key:** added via ssh-keygen + paramiko, removed after deploy.
- **IndexNow:** 13 URLs submitted (new articles + all edited pages). HTTP 200.

### Outreach drafts created
- `OUTREACH_DRAFTS_2026-06-20.md` — two ready-to-send emails:
  1. **CultureMap Dallas** (Stephanie Allmon Merry) — pitch for inclusion in
     their World Cup dining roundup (they're the #1 result for "world cup
     restaurants frisco" and actively growing the list). Angle: Samurai Blue
     Special + Chioma Ubogagu connection.
  2. **Visit Frisco CVB** (info@visitfrisco.com) — business directory listing
     submission for visitfrisco.com/directory.

### Pending
- Submit remaining 7 GSC indexing URLs from yesterday's quota (Jun 21).
- Send the two outreach emails (owner action).
- Rebuild 3003 archive container from updated source.

## 2026-06-20 — DEPLOYED SEO indexing fixes + GSC indexing requests (8 of 15 submitted, quota hit)

Deployed the Priority 1-3 SEO fixes and began requesting indexing via GSC URL
Inspection. Deploy was clean; GSC daily quota capped us at 8 requests today.

### Deploy details
- **Pre-flight:** load 2.69, steal 26% (acceptable), 15G disk free.
- **Files rsynced:** `src/` (712 files, `--delete`), `next.config.ts` (new redirects:
  `/families` → `/celebrations/family-gatherings`, `/main/wp-content/:path*` → `/`,
  `/main/:path*` → `/`), `public/sitemap-priority.xml` (60 unindexed URLs, priority
  1.0, changefreq daily).
- **Build:** near-instant (cached layers from Jun 19 deploy). QA passed on all key
  pages (/, /frisco, /lewisville, /menu — all 200 with correct content).
- **Rollback tag:** `jinbeh-elite:rollback-20260620-1105-pre-indexfix`.
- **Prod promoted** via standard procedure (tag candidate → latest, rm + run).

### Changes deployed
1. **Priority sitemap** (`public/sitemap-priority.xml`) — static XML with 60
   "Discovered – currently not indexed" URLs at priority 1.0, changefreq daily.
   Submitted in GSC → Status: Success, 60 pages discovered.
2. **404 fixes** — `next.config.ts` redirects for `/families`, `/main/wp-content/*`,
   `/main/*` (legacy WordPress paths).
3. **410 Gone responses** — 12 spam/pharma 404 URLs now return proper 410 via
   `next.config.ts` rewrites + `src/app/gone/page.tsx`.
4. **Internal linking blitz** — added contextual cross-links to top unindexed blog
   posts from high-authority indexed pages (location pages, celebrations, catering,
   blog hub).

### GSC indexing requests (8 of 15 — quota exceeded)
Successfully requested indexing for:
1. `/blog/best-hibachi-near-me-dfw`
2. `/blog/japanese-food-near-me-frisco`
3. `/blog/corporate-event-catering-dfw`
4. `/blog/sushi-platter-for-party`
5. `/blog/kid-friendly-japanese-restaurants-dfw`
6. `/blog/hibachi-vs-teppanyaki-explained`
7. `/blog/unique-kids-birthday-party-places`
8. `/blog/gluten-free-japanese-food-frisco-lewisville`

**Quota exceeded** on #9 (`/blog/best-restaurants-stonebriar`). Remaining 7 URLs
to submit tomorrow:
- `/blog/best-restaurants-stonebriar`
- `/blog/best-sake-bar-dfw`
- `/blog/best-seafood-dallas`
- `/blog/best-steakhouses-lewisville`
- `/blog/group-dining-venues`
- `/blog/japanese-delivery-frisco-lewisville`
- `/blog/sushi-catering-lewisville`

### Method used for GSC submissions
Navigate to GSC Overview → use JavaScript to set URL in search bar via
`Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set`
+ dispatch `input` + `keydown Enter` events → wait for inspection → click
REQUEST INDEXING → wait for "Indexing requested" confirmation (~30s per URL).

### Pending
- Submit remaining 7 URLs tomorrow (Jun 21).
- Rebuild 3003 archive container from updated source.
- Local git commit (stale `.git/index.lock` persists in sandbox).

## 2026-06-19 — FIXED "Review has multiple aggregate ratings" — review snippets now eligible (deployed)

Resolved the duplicate-`aggregateRating` critical issue the Rich Results Test
flagged on both location pages. **Root cause was NOT only the page-level schema** —
it was a **double-rendered nested layout**:

- `src/app/layout.tsx` (ROOT) already renders `<LocalBusinessSchemaFrisco />` +
  `<LocalBusinessSchemaLewisville />` (+ `<MenuSchema/>`) **globally on every page**.
- `src/app/frisco/layout.tsx` **also** rendered `<LocalBusinessSchemaFrisco />`, and
  `src/app/lewisville/layout.tsx` **also** rendered `<LocalBusinessSchemaLewisville />`.
  So on `/frisco` the `…/frisco#restaurant` node (which carries aggregateRating +
  review[]) was injected **twice** → Google merged by `@id` → "Review has multiple
  aggregate ratings" → review-snippet rich result disqualified. Same on `/lewisville`.
- A **second** contributor: the page-level `restaurantSchema` in `frisco/page.tsx` /
  `lewisville/page.tsx` (no `@id`, but same `url`) carried its **own** aggregateRating,
  which Google merges with the global node by URL.

**Fix (both needed):** (1) made `frisco/layout.tsx` + `lewisville/layout.tsx`
pass-through (removed the redundant `<LocalBusinessSchema…/>` + its import — root layout
covers all pages); (2) removed the `aggregateRating` block from the page-level
`restaurantSchema` on both location pages (kept the node for its other props). Net:
**each restaurant `@id` now has exactly ONE aggregateRating** (verified by parsing the
served JSON-LD: frisco#restaurant=1, lewisville#restaurant=1 on both pages).

**Verified live (Rich Results Test, Jun 19 ~11:41/16:xx, fresh crawls):** both `/frisco`
and `/lewisville` now report **all valid** — Breadcrumbs 1, Local businesses 3,
Organization 4, **Review snippets 14 valid** (was "22 items, some invalid" with the
critical issue). Review snippets are eligible.

- **Deploy:** standard off-peak cycle (pre-flight steal 0% / load 0.09 / 25 GB free →
  rsync src → `docker build` candidate 4.33 GB → QA on :3009 → promote). **Rollback tag
  `jinbeh-elite:rollback-20260619-1640-pre-aggdedup`** (kept). prod healthy, all pages 200.
- **Archive (3003) rebuilt** from the fixed source (`jinbeh-archive:20260619-164226`);
  3003 also serves 1 aggregateRating/entity; failover intact.
- **Related, NOT fixed (out of scope):** `src/app/menu/layout.tsx` ALSO double-renders
  `<MenuSchema/>` (root layout already renders it globally) → `/menu` has a duplicate
  MenuSchema. No aggregateRating so it doesn't break review snippets, but it's the same
  bug class — make `menu/layout.tsx` a pass-through too in a future pass. **Lesson: don't
  render a global schema component in BOTH the root layout and a nested layout.**
- Local commit `30e8020`.

## 2026-06-19 — Rebuilt 3003 archive failover from post-SEO source; Rich Results + sitemap follow-ups

After the SEO deploy, completed the manual follow-ups:

- **Archive (3003) rebuilt from updated source.** Ran `/opt/jinbeh-archive/snapshot.sh`
  (rsyncs `/opt/jinbeh-elite/` → `site/`, builds `jinbeh-archive:<ts>`, swaps the 3003
  container). New image `jinbeh-archive:20260619-124709` (4.33 GB — BuildKit reused the
  morning prod build's layers, so the build was near-instant). 3003 now serves the new
  schema (amenityFeature/Review present; was 0 before). nginx `server 127.0.0.1:3003
  backup;` failover intact, `nginx -t` OK, prod 3002 untouched/200. Keeps last 3 images
  (old `20260515-220112` retained).
  - **BUG in snapshot.sh (step 6):** the `SITE_HASH=$(find … | head -50 | xargs md5sum
    | md5sum)` line dies under `set -euo pipefail` — `head` closing early gives `find`
    SIGPIPE (141) → pipefail+`set -e` aborts the script right after "[6/6] Logging
    snapshot…", so the container swaps fine but the `snapshots.log` entry never writes
    and the "Snapshot complete" banner never prints. Worked around by appending the log
    line manually. **Fix:** wrap the find in `( … || true )` or drop pipefail for that
    line.
- **Rich Results Test (both location pages, live-crawled Jun 19):** Restaurant
  (Local Business), Breadcrumbs, Organization all **valid** — the new amenityFeature/
  areaServed/sameAs parse. BUT a **critical issue on BOTH pages: "Review has multiple
  aggregate ratings."** Each location page emits a **duplicate `aggregateRating`** for
  its own restaurant `@id` (collides with the global one in `AllSchemas.tsx`), blocking
  review-snippet rich-result eligibility for that location (Frisco shows ratingValue 4.2
  / reviewCount 752 twice; Lewisville the same for itself). **Follow-up fix:** dedupe so
  each restaurant `@id` has exactly one aggregateRating (likely remove the per-location
  page-level Restaurant/aggregateRating, keep the global one). Not yet done.
- **Sitemap resubmitted** in GSC (`sc-domain:jinbeh.com`): `https://jinbeh.com/sitemap.xml`
  → "submitted successfully", Success, 373 pages. Legacy `sitemap_index.xml` still
  "Couldn't fetch" (dead 2024 WP entry — remove from its detail page when convenient).
- **Local git commit landed:** HEAD `7fb5b75`. The stale `.git/index.lock` couldn't be
  `rm`'d (Cowork mount blocks `unlink`) but **`mv`/rename works** — renamed the lock
  aside, committed, then cleared the regenerated locks the same way. Any index-touching
  git command in the sandbox leaves a stale `index.lock`; clear via rename, or run git
  from the real Mac where unlink works.

## 2026-06-19 — Progress review: FOX 4 segment warm, sales tax due, CPU steal recurring

Automated progress review (`project-progress` scheduled task). Key findings:

### FOX 4 "Good Day" segment — WARM, not confirmed
Thread in YumYumJinbeh inbox: pitch sent Jun 16 for a Jun 25 segment featuring
Chioma Ubogagu at Jinbeh Lewisville. Clarification sent Jun 18. **Melinda Thomas
(Melinda.Thomas@fox.com) gave a 👍 thumbs-up reaction** Jun 18 1:30 PM — positive
but not a booking confirmation. Zachary Wilson (zachary.wilson@elitetalentadvisors.us)
CC'd throughout. Owner needs to reply today to lock in logistics (6 days out).

### May Sales Tax — DUE TODAY Jun 19
Mixed Beverage Gross Receipts Tax return filed Jun 16, payment due Jun 19. Found in
darrellshill@gmail.com from Nooshin Bahrami. Late penalties apply.

### VPS CPU steal oscillating again (4.8%–72.4%)
Same sawtooth pattern as Jun 17. All services healthy, load near zero — host-side
throttle, not workload. Another Kodee chat reset needed.

### Stalled items (3+ consecutive reports)
Southern Glazer's reply, OpenTable $746.47, Grasshopper Bank SBA docs, Dallas Trinity
FC pitch — all still unresolved. Additionally from CLAUDE.md active projects: Chef
Recruitment (25 candidates, 0 replies), Journalist Outreach (17 ready, none sent),
Dream 100 (123 comments ready), STR Outreach (8 emails drafted), Energy Contract
(TXU reply to Nichole Knapik). These represent significant unrealized revenue pipeline.

### Gmail MCP still unavailable
Gmail connector showed "still connecting" and never resolved (same as Jun 17). Used
Chrome MCP to navigate Gmail directly. Consider troubleshooting the connector.

Full report: `PROGRESS_REPORT_2026-06-19.md`.

## 2026-06-19 — DEPLOYED the 2026-06-18 SEO/schema pass to prod (clean run, .dockerignore halved image)

Unattended off-peak scheduled run (`jinbeh-seo-deploy-4am`) successfully deployed the
staged 2026-06-18 changes. **Box was idle and healthy** (pre-flight: CPU steal 0.0%,
load 0.03, 38 GB free) — no throttle, unlike the June 15–16 attempts. Full procedure
ran end to end with no abort and no rollback.

- **Live now on `jinbeh-prod` / `jinbeh-elite:latest`:** `AllSchemas.tsx`
  amenityFeature + areaServed + @id + menu/hasMenu + hasMap + sameAs on both
  Restaurant schemas, enriched MenuSchema, and 12 real Google Review objects
  (6 Frisco + 6 Lewisville); OG images + Twitter cards on /frisco + /lewisville;
  `.dockerignore` slimming; new world-cup-watch-party.webp. Verified 200 + schema
  markers on `/`, `/frisco`, `/lewisville`, `/menu`.
- **The .dockerignore fix is the big win:** build-context transfer dropped from ~20 min
  (historical) to ~40 s, and the resulting image is **4.33 GB vs the old 10.2 GB**.
  Full build ~8–9 min (npm ci 58s, compile 101s, TS 74s clean, page-gen ~48s for 396
  pages, export/unpack 175s). Load peaked ~2.7 — nowhere near the ~12 kill guard.
- **Rollback image:** `jinbeh-elite:rollback-20260619-0913-pre-seo` (10.2 GB, kept).
  Rollback = `docker rm -f jinbeh-prod && docker run -d --name jinbeh-prod --restart
  unless-stopped -p 0.0.0.0:3002:3000 jinbeh-elite:rollback-20260619-0913-pre-seo`.
- **Gotcha:** local `git commit` was blocked by a stale `.git/index.lock` the Cowork
  sandbox can't remove (Operation not permitted). Deploy proceeds fine via working-tree
  rsync, but the changes are still UNCOMMITTED in local git — remove the lock + commit
  for history.
- **Manual follow-ups:** Rich Results Test on /frisco + /lewisville (confirm Restaurant
  + Review parse), resubmit sitemap.xml in GSC, and note the 3003 archive failover was
  NOT rebuilt (still serves prior content). Full write-up: `DEPLOY_REPORT_2026-06-19.md`.

## 2026-06-18 — SEO pass: schema/AEO enrichment + Docker build-context fix (NOT deployed)

Expert SEO review of the (already-mature) site. Conclusion: fundamentals are
strong (title template, per-page canonicals, 250+ URL sitemap, AI-crawler
robots.txt, Org/Restaurant/Menu/FAQ schema, location + nearby + celebration +
100-post blog clusters; GSC 84→311 indexed). Highest-leverage gaps were AEO
schema completeness, image/Docker weight, and off-page GBP. Changes made
locally (all ESLint + tsc clean on changed files; **NOT yet deployed**):

### On-page / schema (applied)
- `src/components/schema/AllSchemas.tsx` (global via layout): added
  `amenityFeature` (10 factual attrs each loc — the #1 AEO lever for
  multi-attribute "near me" matching), `areaServed` (7 Frisco / 8 Lewisville
  cities), `@id`, `menu`/`hasMenu`, `hasMap`, `sameAs` on both Restaurant
  schemas. Enriched `MenuSchema`: `url`+`inLanguage`, new Sashimi section,
  accurate `suitableForDiet` (vegetarian tofu hibachi; gluten-free salmon/tuna
  sashimi). **No prices added** (kept the prior intentional price/offer removal).
- `src/app/frisco/page.tsx` + `lewisville/page.tsx`: added OpenGraph `images`
  (1200×630) + Twitter `summary_large_image` cards (were missing on the two
  most important local pages).
- Review schema: added 6 REAL Google reviews to the **Frisco** Restaurant
  schema (`review[]` with author/datePublished/reviewRating/reviewBody),
  chosen for intent diversity (vegetarian, best-hibachi, birthday, anniversary,
  allergy-friendly, kid-friendly). Lewisville also done: 6 real Google reviews
  (lunch/value, sushi rolls, kids birthday, allergy/vegetarian, reservations,
  authenticity). Both locations now have `review[]` in their Restaurant schema.
  Note: only ever mark up genuine, attributable reviews (Google policy).

### Image / deploy efficiency (applied)
- **WebP coverage was already ~complete**: of 332 served JPG/PNG (excluding
  catalog-originals), only 2 lacked a `.webp` sibling. Generated
  `celebrations/world-cup-watch-party.webp`. The other, `awards/dmn-logo.png`,
  is actually a 3 KB **HTML file** (broken placeholder) and is unreferenced —
  junk, left as-is. `next.config.ts` has `images.unoptimized:true` (Next16/
  Turbopack bug), so `scripts/generate-webp.sh` (`npm run images:webp`,
  needs `cwebp`) is the WebP path.
- **Docker build-context fix** (addresses the recurring slow/stuck-deploy pain):
  `public/images/catalog-originals` (223 MB raws) and
  `public/images/catalog_backup_original.tar.gz` (218 MB) are **NOT referenced
  in src/data/sitemap/public** and **not served**, yet shipped in the image
  (~441 MB of dead weight). Added both to `.dockerignore`. They stay on disk
  for re-processing; just no longer bloat the build context.

### Deliverable + to-dos
- Full audit: `SEO_AUDIT_AND_ACTION_PLAN_2026-06-18.md` (keyword tiers, 2026
  AEO scorecard, ready-to-paste "answer blocks" for /, /frisco, /lewisville,
  /menu, /catering, ranked roadmap).
- Remaining high-impact (not done): deploy when CPU-steal clear; real Review
  schema; `VideoObject` for hero Vimeo; 44 blog hero images
  (`ARTICLE_IMAGE_AUDIT.md`); ~20 missing H1s; GBP completeness/photos/review
  velocity; NAP/citation audit.

## 2026-06-17 — Automated progress review: recurring CPU steal + stalled items

Ran scheduled "project-progress" task. Key findings:

### VPS CPU steal is recurring
Hostinger reset the throttle earlier on Jun 17 (steal 89%→0%), but monitoring shows
it oscillating 7–90% again. The sawtooth pattern suggests the fair-use throttle
re-engages quickly after reset. Root trigger was the multi-day n8n 403 loop (now
fixed), but the throttle's after-effect persists. Path forward: re-submit via
hPanel → Kodee chat each time it recurs, and/or upgrade to 4-vCPU plan.

### World Cup deploy still pending (2 failed attempts)
Jun 15 daytime build saturated box (load ~20). Jun 16 2AM build hit npm ci cache miss
(load >12, aborted). Changes are staged in local repo + VPS src/. Prerequisites
for retry: steal must be 0%, use .dockerignore to shrink 2.37GB context, warm npm ci
layer separately, cap build CPU with --cpuset-cpus, attempt at 2–4 AM.

### Stalled revenue items
- Southern Glazer's beverage reply to Lia Shivers: analysis done, reply not sent
- Father's Day email campaign 2: mid-build in Smartlead, not launched
- OpenTable $746.47 past due: flagged, no resolution confirmed
- Keru Tomeru Japanese TV (Jun 26): response status unclear
- Dallas Trinity FC cross-promo: drafted, not sent
- Grasshopper Bank SBA docs: 5+ days overdue

### Gmail MCP was unavailable
The Gmail connector showed "still connecting" and never resolved. Could not review
inbox directly. Email insights sourced from prior session transcripts instead.

Full report: `PROGRESS_REPORT_2026-06-17.md`

## 2026-06-16 — ABORTED off-peak World Cup/SEO deploy (build load spike) — prod SAFE, NOT shipped

Scheduled ~2 AM Central off-peak run to deploy the staged World Cup 2026 +
JSON-LD price-removal + Footer-link changes (world-cup-2026/page.tsx evergreen
rewrite + pre/during/after-match CTAs, AllSchemas.tsx offers/price removal,
Footer.tsx "World Cup 2026 Watch Parties" link). **The deploy did NOT complete.
Nothing shipped. Prod is untouched on `jinbeh-elite:latest` and serving 200.**

### What happened
- Temp ed25519 key added via paramiko; `src/` re-rsynced to /opt/jinbeh-elite/src/
  cleanly (verified the 3 changed files landed: "Catch Every World Cup Match" in
  world-cup page, "World Cup 2026 Watch Parties" in Footer). Disk 25G free.
- `docker build -t jinbeh-elite:candidate` started off-peak (load ~2.7 at start).
- **Build-context transfer took ~20 min** (2.37GB — the `public/` dir is COPYed
  into the image so it's sent every build; ~1.5 MB/s on this box). This is the
  single biggest build cost and the thing to fix (see below).
- Then **`npm ci` ran (NOT cached this time)** and saturated the 4-core box:
  load climbed 11.5 → 12.6 → **16.1 and still rising** within ~90s. The next
  phase (`next build`, 396 static pages) is even heavier and would have pushed
  load toward ~20 (the level that degraded the live site during the June-15
  daytime attempt). Per the task's safety rail ("STOP if load climbs above ~12"),
  I **killed the build** (`pkill -INT -f "docker build"`). Prod left on the
  current image.
- Post-abort: load decayed to ~1.8 (idle) within ~2 min. Confirmed NO
  `docker build`/`npm ci`/`next build` procs remain. **No images were deleted**
  (the 14h-old `jinbeh-elite:candidate` tag + `latest` + `rollback-20260615-1701-pre-seo`
  all intact). Build cache grew ~3G (disk 25G→22G free, still fine; not pruned).

### Prod state after abort (verified)
- `jinbeh-prod` = "Up 15h", image `jinbeh-elite:latest` — **never restarted**.
- `curl http://127.0.0.1:3002/` → **200** (~0.2–0.3s), repeatable.
- Docker healthcheck flag briefly flipped to **"unhealthy"** (the 5s-timeout
  `node fetch()` probe returned exit=-1 = timed out while the container was
  CPU-starved during the build spike). At idle load the **exact probe passes
  manually (`ok=true status=200 exit=0`)**, so the flag self-recovers on the next
  30s interval. **nginx routing is independent of the Docker healthcheck** (it
  uses its own connect checks + the 3003 backup), so live traffic was never
  affected. Direct-origin curl returns 403 by design (origin blocks non-Cloudflare).
- Temp SSH key **removed** from /root/.ssh/authorized_keys (verified 0 remaining).

### NOT done (still pending for the next off-peak attempt)
- QA on temp container, promote-to-prod, the 2nd capacity container
  (`jinbeh-prod-2` on 3004) + nginx upstream edit, and the archive snapshot were
  all skipped because the build never produced a candidate image.
- The staged changes remain in the local repo AND on /opt/jinbeh-elite/src (rsynced).

### Why it spiked this time + how to fix before retrying
- The June-15 entries say build is "~10–12 min" — that assumed the `npm ci`
  layer was **cached**. This run's `npm ci` was a cache miss (full reinstall),
  which is what saturated the box on top of the long context transfer. Likely
  cache-busted because the prior candidate build was 14h old / buildkit cache
  pressure.
- **Recommended fixes for a clean retry:**
  1. **Shrink the build context** — the ~2.37GB transfer is almost all `public/`.
     Since `public/` is already on the VPS and baked into the image, confirm a
     `.dockerignore` and consider a build that doesn't re-send the 2.3GB each
     time (e.g. keep buildkit cache warm so the COPY layer is reused).
  2. **Cap build CPU** so it can't saturate the box: `docker build` →
     add `--cpu-quota`/run under `nice -n 19 ionice -c3`, or build with
     `DOCKER_BUILDKIT=1` and `--cpuset-cpus` to leave a core for prod.
  3. Warm the `npm ci` layer first (build with package*.json unchanged so the
     deps layer is cached) — then the real build is just `next build`.
  4. Retry at the lowest-traffic window and abort threshold stays ~12.
- ROLLBACK is moot (prod never changed). If a future promote is done, the
  pre-existing rollback image is `jinbeh-elite:rollback-20260615-1701-pre-seo`.

## 2026-06-15 — DEPLOYED: location content-uniqueness + internal-linking for menu & FAQ pages (indexing fix)

Built and deployed to prod the content-uniqueness + internal-linking pass that
targets the ~73 "Discovered/Crawled – currently not indexed" templated pages
(per-location menu pages + FAQ pages). Root problem: Frisco and Lewisville item
pages rendered identical item data (near-duplicate twins), and the 87
`/faq/[slug]` PAA pages had almost no inbound links (the `/faq` hub used a
hand-coded Q&A list that never linked them).

### Changes (all in local repo, now live on prod)

1. **`src/data/menu-item-types.ts`** — extended `LocationInfo` + the `locations`
   const with rich per-location fields: `city`, `addressFormatted`,
   `gettingThere`, `parking`, `grill` (Frisco=gas, Lewisville=electric),
   `landmarks[]`, `nearbyCities[]` (Frisco: Plano/McKinney/Allen/Prosper/The
   Colony; Lewisville: Flower Mound/Highland Village/The Colony/Carrollton/
   Coppell).
2. **`src/components/MenuItemTemplate.tsx`** — added `buildLocationCopy()` + a
   new "{item} at Jinbeh {City}" section (2 unique paragraphs using the location
   data; hibachi items mention the gas/electric grill) plus 4 internal links
   (category page, location page, location menu, `/faq/is-frisco-or-lewisville-better`).
   This differentiates ALL 90 item pages (45×2) from ONE file. Verified live:
   Frisco salmon shows Stonebriar/Preston/gas; Lewisville salmon shows Vista
   Ridge/Stemmons/electric.
3. **`src/components/CategoryLocationSEO.tsx`** (NEW) — reusable, location+category
   -aware "Why Jinbeh Is the Best for {Category} in {City}" section with unique
   copy per category + internal links (3 sibling categories, full menu, a
   category-relevant FAQ, cross-location). Dropped into 11 category pages
   (`frisco/{hibachi,sushi-rolls,sashimi,cocktails,kids-menu}` +
   `lewisville/{all 6}`). Frisco/appetizers was left alone (already had a rich
   hand-written unique section — avoids a duplicate H2).
4. **`src/app/faq/page.tsx`** — added a "Browse All Questions" section that maps
   `paa-content.json` clusters/questions and links every `/faq/[slug]` page.
   This is the big fix: the 87 PAA pages now get inbound links from the indexed
   hub (previously orphaned).
5. **`src/app/frisco/page.tsx` + `src/app/lewisville/page.tsx`** — added a
   "Common Questions About Jinbeh {City}" block linking 6 location-relevant FAQ
   pages each (high-authority indexed pages → not-indexed FAQ pages).
6. **Price leak cleanup** — removed visible/text price strings ("…ranging from
   5.95 to 16.95", "prices range from…") from the 6 appetizers/sushi-rolls/
   sashimi category pages (both locations), per the no-price policy.

### APPROVED promo — keep it (do not strip in no-price sweeps)

The World Cup page's visible **"Samurai Blue Special" — $42 Sashimi Combination
+ complimentary edamame** (World Cup window, both locations) is an **owner-approved
promotion** (confirmed 2026-06-15). KEEP the visible price + edamame copy and the
matching FAQ. The JSON-LD `MenuItem` price/offer was removed (no price in
structured data) and should NOT be re-added. Registry: Obsidian note
`01 - Jinbeh/Marketing/Approved Promotions.md`.

### VPS disk cleanup (2026-06-15) — cache only, images kept

Hostinger flagged the VPS disk near full (it hit ~86%). Freed ~7G WITHOUT deleting
any Docker images, per instruction: `docker builder prune -af` (build cache),
`journalctl --vacuum-size=50M` (~196M), `apt-get clean` (~130M), and removed the
stale host-side `/opt/jinbeh-elite/node_modules` (~867M, vestigial — deps install
inside the image). Result: ~75% used, ~25G free. Lesson: the bulk of the disk is
the Docker images (latest/candidate/rollback-* ~10G each) + other apps (immich,
n8n, etc.) — those are KEPT; only cache/logs are reclaimable without deleting images.
A daytime `docker build` during World Cup traffic spikes load to ~20 and degrades
the live site, so builds must run off-peak.

### KNOWN pre-existing issue (NOT fixed — out of scope, flag for a separate pass)

`src/components/schema/AllSchemas.tsx` still injects **JSON-LD `offers` with
`price` values** (e.g. 34.95, 26.95) sitewide. This contradicts the
"never re-add offers/price to JSON-LD" rule but predates this work and is a
global schema component, so it was left untouched to keep this deploy focused.
Fix in a dedicated pass.

### Deploy mechanics (reusable, sandbox → VPS, no sshpass)

- Cowork sandbox bash calls are capped ~45s, so a 3-min `next build` + slow 10GB
  image export can't run in one call. Pattern that worked: drop an **ephemeral
  ed25519 key** into `/root/.ssh/authorized_keys` via paramiko (password from
  `log.env`), then `rsync -az --delete -e "ssh -i <key>" src/ root@VPS:/opt/jinbeh-elite/src/`
  (only `src/` = 7.6M, fast; `public/` is 2.3G and already on the VPS — never
  rsync it). Kick off `docker build -t jinbeh-elite:candidate` with **nohup …&
  > /tmp/build.log**, then poll `/tmp/build.log` + `pgrep -f "docker build"`
  across calls. Build context transfer alone is ~100s (public is huge); full
  build+export ~10–12 min on this box.
- QA on a temp container: `docker run -d --name jinbeh-cand -p 127.0.0.1:3009:3000
  jinbeh-elite:candidate`, curl pages for 200 + grep uniqueness markers, then
  remove it.
- Promote: `docker tag jinbeh-elite:latest jinbeh-elite:rollback-<ts>-pre-seo`;
  `docker tag jinbeh-elite:candidate jinbeh-elite:latest`; `docker rm -f
  jinbeh-prod && docker run -d --name jinbeh-prod --restart unless-stopped -p
  0.0.0.0:3002:3000 jinbeh-elite:latest`. The June-15 nginx failover (3003
  backup) means the brief restart window serves 200s from the archive, not 504s.
- **ROLLBACK:** `docker rm -f jinbeh-prod && docker run -d --name jinbeh-prod
  --restart unless-stopped -p 0.0.0.0:3002:3000 jinbeh-elite:rollback-20260615-1701-pre-seo`.
- Build passed full `next build` TypeScript check + generated all 396 static
  pages. All changed pages verified 200 on prod (direct + via nginx) with new
  content live. Ephemeral SSH key removed afterward.
- **Archive (3003) NOT updated** — still serves the pre-SEO build as the failover
  fallback; update it (or rebuild `/opt/jinbeh-archive/site`) if you want the
  failover to serve current content. Local repo = source of truth; these changes
  ARE in the local repo (unlike the nginx-only changes below).

## 2026-06-14 — GSC "Server error (5xx)" emails fixed via nginx failover upstream (prod + archive backup)

Six new Google Search Console emails arrived June 14 (~9:22–9:34 PM CDT) across
both properties (`sc-domain:jinbeh.com` and `https://jinbeh.com/`):

- **"New reason: Server error (5xx)"** ×4 (the real, actionable issue)
- **"Some fixes failed: Alternate page with proper canonical tag"** — benign-by-design
  (same class as the "Page with redirect" non-issue; it's the correct status for
  pages that legitimately point to a canonical).
- **"Page indexing issues successfully fixed: Duplicate without user-selected
  canonical"** — GOOD, now 0 pages / Passed.

GSC state now: **311 indexed / 120 not indexed** (was 84/331 in May — big
improvement). Page-indexing breakdown: Page-with-redirect 18 (Failed, by design),
Alternate-canonical 7 (Failed, benign), Not-found-404 21, **Server error (5xx) 1**,
Crawled-not-indexed 13, Discovered-not-indexed 60 (the dominant real bucket),
Duplicate-without-canonical 0 (Passed).

### Root cause of the 5xx (confirmed in nginx logs)

The 5xx are **transient, not continuous**. The site was 100% healthy at audit time
(0 fivexx today, 2415×200; `jinbeh-prod` up 3 days, healthy, RestartCount=0,
OOMKilled=false, 5.2 GB RAM free). The damage was a **burst on June 7 ~22:39–22:40
UTC**: nginx logged hundreds of `504 upstream timed out (110) while connecting to
upstream` to `127.0.0.1:3002` — including **`66.249.70.101 Googlebot GET / → 504`**.
i.e. the single Next.js container briefly couldn't accept new TCP connections (event-
loop saturation under a traffic/crawl spike — lots of `?_rsc=` RSC prefetches +
check-host.net monitoring + bots), and nginx had **no `proxy_connect_timeout` (→ 60s
default) and no failover**, so it sprayed 504s site-wide for ~2 min. GSC reports lag
~a week, so the email landed June 14. Only **1 URL** (`/lewisville/sushi-rolls/ahi-tower`)
was still flagged; Google had already re-crawled and recovered the rest. (Other 5xx in
the logs are noise: `automation.jinbeh.cloud`/n8n 502s, `/.DS_Store` scanner 500s, the
`/webhook/jinbeh-rating-handler` feedback 500 — none are jinbeh.com indexing.)

### Fix deployed (nginx resilience — `/etc/nginx/sites-available/00-jinbeh.com.conf`)

Added an `upstream jinbeh_app { server 127.0.0.1:3002 max_fails=2 fail_timeout=10s;
server 127.0.0.1:3003 backup; }` block and pointed `location /`, the static-asset
regex, and `/_next/static/` at `http://jinbeh_app`. Added server-level
`proxy_connect_timeout 5s;` + `proxy_next_upstream error timeout http_502 http_503
http_504;` (`_tries 2`, `_timeout 15s`). Net effect: when prod briefly can't accept
connections, nginx **fails over to the frozen archive container (3003) → visitors and
Googlebot get a 200, not a 504.** `max_fails`/`fail_timeout` make the cutover whole-
build-consistent (HTML + chunks from the same backend for the 10s window). POSTs are
NOT retried (nginx default + explicit `proxy_next_upstream off` on `/api/vip-signup`),
so no double-submits. Archive serves the same site (368 vs prod's 373 sitemap locs).

- Backed up first to `…/00-jinbeh.com.conf.bak-20260615-024926`; `nginx -t` passed;
  `systemctl reload nginx` → RELOAD_OK. **Rollback:** `cp <bak> 00-jinbeh.com.conf &&
  nginx -t && systemctl reload nginx`.
- Verified post-reload: home + /frisco + /menu + ahi-tower all **200 via nginx**
  (~15–25 ms, hitting prod as primary); ahi-tower 200 on prod, archive, AND nginx.
- **Caveat / lesson:** heavy parallel `curl` load-tests (40–400 concurrent SSR) from
  the sandbox briefly saturated the single Node process and made responses crawl —
  don't stress-test prod like that. The failover handles connect-refused/timeout, but
  the underlying single-instance capacity is still the ceiling; the real long-term fix
  is a 2nd live prod container (or PM2 cluster) load-balanced in the upstream (drop the
  `backup` keyword to make both active), especially through the World Cup window.

### GSC action taken

Clicked **Validate Fix** on Page indexing → Server error (5xx) (domain property) —
"Validation started 6/14/26". The URL-prefix property has the same single-URL issue
and the same server-wide fix applies; validating one property is sufficient.
**Not deployed to the local repo / Cowork** — this was a live VPS nginx change only.

### Not-indexed audit (same session) — what the 120 not-indexed pages actually are

Drilled every bucket in the domain-property Page indexing report:

- **Discovered – currently not indexed (60)** and **Crawled – currently not
  indexed (13)** are the same phenomenon and the only "real" buckets: they're
  the **thin/near-duplicate templated pages** — ~per-location menu-item pages
  (`/frisco|lewisville/{appetizers,hibachi,sushi-rolls,sashimi,cocktails,kids-menu}`
  and individual items), the ~18 `/faq/[slug]` PAA pages, blog posts, the 4
  `/celebrations/*` pages, `/careers`. All return **200** (verified on prod) —
  nothing technically broken. "Discovered" = Google knows the URL (sitemap +
  internal link) but hasn't spent crawl budget to fetch it; "Crawled" = fetched
  but judged too thin/duplicative to index. This is a crawl-budget + content-
  uniqueness problem on a modest-authority site with lots of programmatic pages,
  not a bug. The 5xx fix (above) is the biggest lever since 504s made Googlebot
  back off. Other levers (Google's call, can't force): stronger internal linking
  to these pages + more location-/item-unique copy. Spamming Request-Indexing on
  60 thin pages won't help (quota ~10/day, and it doesn't override quality calls).
- **Not found (404) (21)** = stale/legacy, no action: `/wp-*.php` + legacy WP
  PDF spam probes (correctly 404), `/sitemap.xml` listed as a "page" (GSC noise),
  `/families` (removed page, 404), and two old blog slugs
  (`/blog/types-of-sushi-rolls`, `/blog/what-is-hibachi`) that now correctly
  **308-redirect** to canonical — Google's 404 record is just stale and will move
  to "Page with redirect" on re-crawl.
- **Page with redirect (18)** + **Alternate page w/ proper canonical (7)** =
  benign-by-design (validation "fails" forever; see 2026-06-09 entry).
- **Duplicate without user-selected canonical = 0 (Passed).**

### Actions taken this session

- **Sitemap confirmed healthy:** `https://jinbeh.com/sitemap.xml` = Success, 373
  pages, last read Jun 12. The legacy `https://jinbeh.com/sitemap_index.xml`
  (2024 WP, "Couldn't fetch") is still listed — the kebab menu offers no Remove
  here; remove it from the sitemap's detail page when convenient to stop the
  recurring "couldn't fetch" noise.
- **Requested indexing** (priority crawl queue) for **`/celebrations/world-cup`**
  — it was Discovered-not-indexed and had **never been crawled** (Last crawl N/A)
  despite the tournament being live (Jun 11–Jul 19). The main **`/world-cup-2026`**
  page is **already indexed** (verified), so the tournament's primary landing page
  is fine.
- GSC overall trend is healthy: **311 indexed / 120 not indexed** (was 84/331 in
  May).

## 2026-06-09 — R1 revenue warehouse is queryable for ad-hoc analytics (Father's Day hours study)

Answered "should we run extended hours on Father's Day?" by querying the R1
revenue warehouse directly. **Reusable how-to for any future date-based sales
question:**

- **Data lives in Postgres `gov1_orchestrator`** (Docker `n8n-postgres-1` on the
  VPS), NOT in a flat "shared drive" file — the Focus POS binary is already
  decoded by `r1_ingest.py`. Tables: `revenue_data` (daily per date+location,
  ~7.5k rows, **2015→present**), `revenue_dayparts` (Breakfast/Lunch/Dinner/
  LateNight split), plus `product_sales`, `revenue_payments`, `revenue_forecasts`,
  `revenue_reports`.
- **Access:** Cowork sandbox → paramiko SSH (`root@72.61.15.71`, pw =
  `VPS_PASSWORD` in `log.env`; no `sshpass` in sandbox) → `docker exec
  n8n-postgres-1 psql -U gov1 -d gov1_orchestrator -t -A -F"," -c "<SQL>"`.
- **Gotchas:** (1) the Phase-4 `revenue_metrics` table the gov1 skill mentions
  was never deployed — use `revenue_data`. (2) `day_of_week = 0` is **Sunday**.
  (3) holidays are NOT pre-flagged — compute Father's Day as `month_num=6 AND
  day_of_week=0 AND dom BETWEEN 15 AND 21`. (4) prefer `total_revenue` (≈gross);
  `net_sales` can exceed gross in snapshot rows. (5) most rows are
  `data_quality='partial_snapshot'` (fine for ratios). (6) dayparts give service,
  not clock hour — pull raw `chkitem` timestamps for hour-level questions.
- **Finding:** Father's Day ≈ **2.25× a normal June Sunday** (#1 June Sunday in
  20/20 location-years; recent FD ~$16.8k/restaurant), surge concentrated at
  **lunch (58% of sales)**, **zero late-night**. Recommendation: open 11am + run
  through the 2:30–5 afternoon gap; keep the 9pm close (10pm not supported).
- Full write-ups in the Obsidian vault: `02 - Tech/GOV1 Orchestrator/R1 Revenue
  Warehouse Querying How-To.md` and `01 - Jinbeh/Operations/Fathers Day Hours
  Analysis June 2026.md`. (The gov1-orchestrator skill file is read-only in
  Cowork sessions — fold this into the skill via Settings → Capabilities if
  desired.)

## 2026-06-09 — GSC "Page with redirect" (19 URLs) is a non-issue; FAQ pages already fixed

A GSC notification flagged the **"Page with redirect"** report (`item_key=CAMYCyAC`)
— 19 affected pages, with a Validate-Fix attempt that **started 5/31 and failed 6/1**.

### The 19 URLs: 16 are intentional, 3 were already fixed

Tested every URL against `jinbeh-prod` (`127.0.0.1:3002`, Host: jinbeh.com) and the
public path. **16 of 19 are intentional redirects that SHOULD redirect** and require
no action: trailing-slash normalization (`/frisco/`→`/frisco`, `/lewisville/`→`/lewisville`),
`/home`+`/home/`→`/`, `/test`+`/test/`→`/`, `www`/`http` canonicalization, and legacy
WordPress (`/wp-admin/admin-ajax.php`→`/`, 5 `/wp-content/uploads/*.pdf`→ current menu
pages). The remaining **3 are the PAA FAQ pages** (`/faq/best-japanese-restaurant-world-cup-watch-parties-dfw`,
`/faq/do-both-locations-have-the-same-menu`, `/faq/is-jinbeh-fish-fresh`) which were
crawled **May 29** while still redirecting (stale `/faq/:slug`→`/faq` catch-all +
Next 16 async-`params` bug) but were **fixed and deployed May 31**.

### Key lesson: "Page with redirect" validation fails forever by design

It is **not an error** — it's the correct status for any URL that redirects. Clicking
**Validate Fix** on the whole group re-checks all URLs and **will always fail** as long
as the intentional redirects exist. So the 6/1 failure is expected and harmless. Only
treat "Page with redirect" as a bug when a URL that *should be indexed* lands there
(as the 3 FAQ pages did). Triage = test the URL against the prod container + check the
sitemap before assuming a regression.

### Verified live (Jun 9) + action taken

All 3 FAQ pages now return **200** via `https://jinbeh.com/...` (Cloudflare→nginx→prod)
AND are in `sitemap.xml` (372 `<loc>`). **None** of the 16 redirect URLs are in the
sitemap (the `redirectedPaths` guard in `sitemap.ts` is doing its job). **No VPS code
change was needed.** To speed re-crawl, used GSC URL Inspection → **Request Indexing**
on all 3 FAQ URLs (priority crawl queue). This also resolves the stale "FAQ pages 404
on prod" claim from a prior automated daily report — they serve 200. Full write-up in
the Obsidian vault: `01 - Jinbeh/Website/GSC Page With Redirect Fix June 2026.md`.

## 2026-06-04 — Cloudflare Tunnel Assessment: GO decision + partial implementation

### Decision: Migrate jinbeh.com from A-record proxy to Cloudflare Tunnel (phased)

Full assessment saved at `CLOUDFLARE_TUNNEL_ASSESSMENT.md` in the repo root.

### Critical Security Finding: NO FIREWALL on VPS

The VPS has **no firewall** (ufw not even installed). Every Docker-published
port is directly accessible from the internet, including:
- **n8n (port 5678)** — automation platform
- **PostgreSQL (port 5433)** — n8n's database
- **Hermes Agent (8642, 9119)**
- **Immich (32769), WordPress (32768)**
- **All three Jinbeh containers** (3001, 3002, 3003) directly, bypassing nginx

This is the #1 reason to migrate to Cloudflare Tunnel: it eliminates all
public port exposure since cloudflared uses outbound-only connections.

### VPS Architecture Map (16 Docker containers discovered)

- `jinbeh-prod` (3002) — main site, healthy
- `jinbeh-staging` (3001) — staging, still uses `localhost` not `127.0.0.1` (IPv6 bug risk)
- `jinbeh-archive` (3003) — backup
- `hermes-agent` (8642, 9119) — AI agent
- `espocrm` (127.0.0.1:8181) — CRM, properly loopback-only
- `espocrm-daemon`, `espocrm-db` — CRM support
- `n8n-n8n-1` (5678), `n8n-postgres-1` (5433) — automation
- `remnanode` — unknown purpose
- `immich-*` (4 containers) — photo server
- `wordpress-zmdr-*` (2 containers) — unknown WordPress install

9 nginx vhosts: jinbeh.com, staging, archive, automation.jinbeh.cloud,
crm.jinbeh.com, hermes (FQDN_PLACEHOLDER bug), media, feedback, default.

### Implementation Status

- **DONE:** cloudflared v2026.5.2 installed on VPS
- **BLOCKED:** Cloudflare dashboard (dash.cloudflare.com) won't load in
  Chrome (infinite orange spinner). This blocks tunnel authorization.
  The assessment doc has step-by-step instructions for Darrell to complete
  manually (both dashboard and CLI methods).
- **Phased rollback-safe plan:** jinbeh.com first (today), then staging/archive
  (June 5-6), then automation/CRM (after World Cup opening June 12+).

### Key Technical Findings

1. **Cloudflare Tunnel is free** with no bandwidth limits.
2. **One tunnel routes multiple subdomains** to different backends.
3. **cloudflared replaces nginx** for tunneled hostnames — routes directly
   to Docker container ports. nginx stays running as fallback.
4. **SSL/TLS:** Tunnel encrypts edge↔origin natively; the Cloudflare Origin
   Cert and Let's Encrypt certs become unnecessary for tunneled services.
5. **Rollback is instant:** delete CNAME, re-create A record — seconds.
   nginx is still running and listening.
6. **automation.jinbeh.cloud:** verify it's in the same Cloudflare account
   before adding to the tunnel.
7. **hermes.jinbeh.com.conf** has `FQDN_PLACEHOLDER` as server_name — never
   properly configured.
8. **staging.jinbeh.com** still uses `proxy_pass http://localhost:3001` — same
   IPv6 bug class as the old prod 502. Fix or tunnel to eliminate.

## 2026-05-31 — DEPLOYED to prod + fixed the prod 502 (nginx IPv6) + .next EACCES

Followed up the code fixes below by QA-building and **deploying to production**,
and fixed the two infra issues that were the real driver of the 263
"Discovered – currently not indexed".

### ROOT CAUSE of the intermittent 502s (the #1 indexing lever) — FIXED

`/etc/nginx/sites-available/00-jinbeh.com.conf` had `proxy_pass http://localhost:3002;`.
`localhost` resolves to IPv6 `::1` first, but the **`jinbeh-prod` container only
publishes IPv4** (`0.0.0.0:3002`, while staging/archive are dual-stack). So nginx
hit `::1:3002` → `connect() failed (111: Connection refused)` → marked the upstream
dead → returned **502 "no live upstreams"** to every other request during the
fail-timeout window. That is exactly the "intermittent 502 under light load" that
makes Googlebot back off crawling (→ 263 Discovered-not-indexed).
**Fix:** changed the one line to `proxy_pass http://127.0.0.1:3002;`, `nginx -t`,
`systemctl reload nginx`. Verified: 60/60 concurrent requests → 200, no new
upstream errors. (Lesson: always use `127.0.0.1` not `localhost` in nginx
`proxy_pass` to a Docker container unless the container is dual-stack.)

### .next EACCES in prod container — FIXED in Dockerfile

`jinbeh-prod` logged `EACCES: permission denied, mkdir '/app/.next/server/app/...segments'`
— the runtime user couldn't write the ISR/prerender cache because the Dockerfile
only `chown`ed `.next/cache`. Changed line ~35 to
`RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next public`. Verified: 0
EACCES after triggering ISR writes on the new image.

### HOW PROD IS ACTUALLY DEPLOYED (important — it is NOT compose)

- `jinbeh.com` is served by nginx → `127.0.0.1:3002` → the **`jinbeh-prod`**
  container, which is a **manually-run** container (`docker run`), NOT compose.
  `docker-compose.yml` only manages **`jinbeh-staging` (3001)**. So
  `docker compose up` does NOT update prod.
- Prod runs image `jinbeh-elite:latest`, `node server.js`, bridge network,
  `0.0.0.0:3002->3000`, no volumes (public is baked into the image).
- **Deploy procedure used (zero-downtime-on-build):**
  1. `rsync` local → `/opt/jinbeh-elite/` (exclude node_modules,.next,.git,.claude,
     outputs,log.env,.env*,*.bak, the 3 dead blog dirs).
  2. `docker build -t jinbeh-elite:candidate /opt/jinbeh-elite` (full `next build`;
     ~3 min incl. the `chown -R .next` layer; prod untouched if it fails).
  3. QA the candidate on a temp container `-p 127.0.0.1:3009:3000`: all pages 200,
     redirects 308→canonical, JSON-LD valid, sitemap has no redirecting URLs,
     0 EACCES.
  4. `docker tag jinbeh-elite:latest jinbeh-elite:rollback-<ts>-pre-seo`;
     `docker tag jinbeh-elite:candidate jinbeh-elite:latest`.
  5. `docker rm -f jinbeh-prod && docker run -d --name jinbeh-prod
     --restart unless-stopped -p 0.0.0.0:3002:3000 jinbeh-elite:latest`.
- **ROLLBACK:** `docker rm -f jinbeh-prod && docker run -d --name jinbeh-prod
  --restart unless-stopped -p 0.0.0.0:3002:3000 jinbeh-elite:rollback-20260601-0420-pre-seo`.
- The dead blog dirs + `src/data/*.bak` were removed on the VPS copy during deploy
  (sandbox `rm` is blocked locally, so they still exist in the local repo — delete
  them locally when convenient).

### Cowork-sandbox → VPS access (for future sessions)

The Cowork Linux sandbox **can reach the VPS** (port 22 open). `sshpass` is NOT in
the sandbox; use **paramiko** (`pip install paramiko --break-system-packages`,
password from `log.env`) for command runs, or drop a throwaway SSH key into
`~/.ssh/authorized_keys` (via paramiko) to use `rsync`/`ssh` with `-i`. Remove the
key afterward. `ssh` + `rsync` binaries ARE present in the sandbox.

### Live verification (in Chrome, through Cloudflare)

`/blog/hibachi-birthday-party-ideas`: 0 invalid JSON-LD, no `<Link>` in schema.
`/blog/best-hibachi-dallas` → 301/308 → `…-tx`. Homepage renders. Sitemap = 368
URLs, no redirecting URLs. Concurrent load = all 200.

### Still pending (NOT done)

- GSC: click **Validate Fix** on each issue + **resubmit the sitemap** (manual).
- The 263 Discovered / 29 Crawled not-indexed should improve now that the 502s are
  gone; re-check GSC in a few days. Remaining levers: internal linking + content
  uniqueness for the ~88 menu-item + ~80 PAA pages.
- FAQ (12) + Events (1) structured-data warnings — revisit in GSC after recrawl.
- Delete locally: `src/data/blog-posts.json.bak` + the 3 dead blog dirs.

## 2026-05-31 — GSC indexing emails: canonical/redirect/sitemap/JSON-LD fixes (code only, NOT yet deployed)

Five Google Search Console emails arrived May 31 (both the `sc-domain:jinbeh.com`
and `https://jinbeh.com/` URL-prefix properties). GSC state at the time:
**84 indexed / 331 not indexed.** "Why pages aren't indexed" breakdown:

- Page with redirect — 19 (almost all intentional: www→apex, http→https,
  trailing-slash, /home, /wp-admin, /test, legacy PDF redirects, plus a few
  `/faq/[slug]` PAA pages that were redirecting on the May-29 crawl but were
  fixed May 30).
- Not found (404) — 13 (mostly legacy WordPress pharma-spam `*.html` and
  `wp-*.php` probes that correctly 404; real ones fixed below).
- Alternate page with proper canonical tag — 6 (legacy duplicate slugs).
- Duplicate without user-selected canonical — 1.
- **Discovered – currently not indexed — 263** ← dominant problem.
- Crawled – currently not indexed — 29.
- Enhancements: FAQ 55 valid / **12 invalid**, Events 0/1, **Unparsable
  structured data — 1**.

### Root cause of "Unparsable structured data: Missing ',' or '}'"

The single flagged URL was `/blog/hibachi-birthday-party-ideas`. On the LIVE
(deployed) build, a FAQ `acceptedAnswer.text` string in the JSON-LD contained
a literal `<Link href="/blog/discover-teppanyaki" className="text-accent-red …">`
tag — `injectContextualLinks()` (meant for body prose) had been baked into the
schema text, and the unescaped `"` from the className broke the JSON
(`Expected ',' or '}' at position 281`). **Current source is already clean**
(that block is now a `JSON.stringify(object)`), so this resolves on next deploy.
Lesson: NEVER run `injectContextualLinks()` / any HTML-injecting helper over
text that ends up in JSON-LD, and prefer `JSON.stringify(obj)` over hand-written
template-literal JSON-LD (template literals don't escape `"`/`<`).

### Code fixes made this session (in `~/Documents/jinbeh-elite-phase1`, NOT deployed)

1. **`src/data/blog-posts.json`** — removed 3 legacy duplicate posts that only
   exist to 301-redirect (`best-hibachi-dallas`, `sushi-platters-near-me`,
   `japanese-restaurants-lewisville`) and repointed every `relatedPosts`
   reference to the canonical slug (`-tx` / `sushi-platter-near-me`). 98→95 posts.
   This stops the sitemap and the /blog + category listings from emitting
   redirecting URLs (the "pages in a sitemap redirect" emails).
2. **`src/app/sitemap.ts`** — added a `redirectedPaths` SAFETY GUARD that filters
   out every `redirects()` source path so the sitemap can never emit a
   redirecting URL again. Keep it in sync with `next.config.ts`.
3. **`next.config.ts`** — added 301s for the real 404s: `/blog/types-of-sushi-rolls`
   → `/blog/types-of-sushi`, `/blog/what-is-hibachi` → `/blog/hibachi-vs-teppanyaki-explained`,
   `/lewisville.htm` → `/lewisville`, `/frisco.htm` → `/frisco`.
4. **Internal links** — repointed 13 files from the legacy slugs to canonical
   slugs (removes redirect hops); fixed the dead `/blog/what-is-hibachi` link in
   `src/components/ContextualLinks.tsx`.
5. **15 blog pages** — converted hand-written raw template-literal FAQPage
   JSON-LD (`__html: \`{…}\``) to `__html: JSON.stringify({…})` to permanently
   eliminate the unparsable-JSON class of bug.

Canonical infra was already sound (286/287 pages have explicit canonical;
`/order-online` sets it via `order-online/layout.tsx` because it's a client
component; the `frisco|lewisville/sashimi/omakase` pages `redirect()` since
omakase was removed). No additional canonical code change was needed.

### IMPORTANT — still pending (NOT done this session, by user's choice)

- **DEPLOY** the above to the VPS — none of these fixes are live yet. Until
  deployed, GSC will keep seeing the old state (incl. the unparsable JSON-LD).
- After deploy: in GSC, click **Validate Fix** on each issue and **resubmit
  the sitemap**.
- **Intermittent 502s under crawl load.** While validating live JSON-LD,
  several blog pages returned **HTTP 502** under even light concurrent fetches
  (resolved on retry with a delay). This is very likely a major contributor to
  the **263 "Discovered – currently not indexed"** — Googlebot backs off
  crawling a site that returns 5xx. Investigate the Docker/nginx/Next standalone
  server's concurrency/memory on the VPS. This is the single biggest indexing
  lever and is infra, not code.
- **263 Discovered + 29 Crawled, not indexed**: largely the ~88 near-duplicate
  frisco/lewisville menu-item pages + ~80 PAA `/faq/[slug]` pages. Google judges
  them thin/duplicative. Levers: server stability (above), stronger internal
  linking to these pages, and more location-/item-unique content.
- **Sandbox could NOT delete files** (`rm` "Operation not permitted"). Left
  behind for manual cleanup: `src/data/blog-posts.json.bak` (delete it) and the
  3 now-dead, redirect-shadowed page dirs `src/app/blog/{best-hibachi-dallas,
  sushi-platters-near-me,japanese-restaurants-lewisville}/` (safe to `rm -rf`).
- Structured-data warnings to revisit after deploy: FAQ 12 invalid, Events 1
  invalid (likely the world-cup Event schema).

Full write-up: `SEO_INDEXING_FIXES_2026-05-31.md`.

## 2026-05-15 — Archive backup system deployed + rsync .claude exclusion

### Archive backup system (archive.jinbeh.com)

Deployed a true independent backup system on the VPS. The archive runs as
a completely separate Docker container (`jinbeh-archive` on port 3003) built
from a frozen point-in-time copy of the codebase at `/opt/jinbeh-archive/site/`.

**Key commands:**
- Snapshot: `bash /opt/jinbeh-archive/snapshot.sh`
- Rollback: `bash /opt/jinbeh-archive/rollback.sh`
- List snapshots: `docker images --filter="reference=jinbeh-archive"`

First snapshot: `jinbeh-archive:20260515-220112` (taken after SEO fixes deploy).

See Obsidian note [[Archive Backup System]] for full runbook.

**Pending:** Cloudflare DNS A record for `archive` → `72.61.15.71` (Proxied)
still needs to be added in the dashboard. nginx and container are ready.

### rsync deploy command — MUST exclude .claude

The `.claude` directory (Cowork agent worktrees/data) can grow to 8-9GB.
It was accidentally synced to the VPS on May 15 and caused a Docker build
failure ("no space left on device"). Always exclude it.

**Canonical rsync deploy command:**
```bash
rsync --exclude=node_modules --exclude=.next --exclude=.git \
  --exclude='.env*' --exclude=log.env --exclude=.claude \
  -avz \
  -e "sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no" \
  ~/Documents/jinbeh-elite-phase1/ root@72.61.15.71:/opt/jinbeh-elite/
```

Note the `--exclude=.claude` that was added. If using the `sshpass -e`
pattern (recommended for osascript contexts):
```bash
export SSHPASS='Brighter100?'
rsync --exclude=node_modules --exclude=.next --exclude=.git \
  --exclude='.env*' --exclude=log.env --exclude=.claude \
  -avz \
  -e "sshpass -e ssh -o StrictHostKeyChecking=no" \
  ~/Documents/jinbeh-elite-phase1/ root@72.61.15.71:/opt/jinbeh-elite/
```

After deploy + verify, take an archive snapshot:
```bash
ssh root@72.61.15.71 'bash /opt/jinbeh-archive/snapshot.sh'
```

## 2026-05-08 — Feedback forms broken (DNS) — rebuilt as Next.js pages

### Root cause

The `feedback.jinbeh.com` subdomain has **no DNS record** in Cloudflare.
When DNS was migrated from Webhero NS to Cloudflare NS (`abby`/`karl`),
the `feedback` subdomain was never recreated. DNS returns NXDOMAIN — both
`feedback.jinbeh.com/frisco.html` and `feedback.jinbeh.com/lewisville.html`
show Chrome error pages.

The old forms were static HTML served by an nginx vhost on the VPS
(`/etc/nginx/sites-available/feedback.jinbeh.com.conf` — listed in
`docs/pre-launch-analysis.md`). The Origin Cert covers `*.jinbeh.com`
so SSL would work if the record existed.

### Fix applied (code)

Instead of resurrecting the old static HTML forms, built proper feedback
forms inside the Next.js app:

- `src/components/FeedbackForm.tsx` — reusable client component
- `src/app/feedback/frisco/page.tsx` — Frisco feedback page
- `src/app/feedback/lewisville/page.tsx` — Lewisville feedback page
- `src/app/api/feedback/route.ts` — API route (saves to PostgreSQL + emails Manager@JinbehJapanese.com)
- `sql/create-feedback-table.sql` — DB migration for `feedback_submissions` table

### Fix needed (infrastructure — manual steps)

1. **Run the DB migration** on the VPS PostgreSQL:
   ```
   psql -U jinbeh -d jinbeh_forms -f sql/create-feedback-table.sql
   ```

2. **Deploy the code**: push to GitHub, then on VPS:
   ```
   cd /opt/jinbeh-elite && git pull origin main && docker compose down && docker compose up -d --build
   ```

3. **Redirect old URLs** — in Cloudflare dashboard (Yumyumjinbeh@gmail.com):
   - Go to Rules → Redirect Rules
   - Create a rule: when hostname = `feedback.jinbeh.com` and URI path = `/frisco.html`,
     redirect 301 to `https://jinbeh.com/feedback/frisco`
   - Create a rule: when hostname = `feedback.jinbeh.com` and URI path = `/lewisville.html`,
     redirect 301 to `https://jinbeh.com/feedback/lewisville`
   - For this to work, add a DNS A record: `feedback` → `192.0.2.1` (proxied),
     or a CNAME `feedback` → `jinbeh.com` (proxied). The redirect rule fires
     before any origin request, so the origin IP doesn't matter.

### Also confirmed working

All 4 existing API routes respond correctly on the live site:
- `/api/vip-signup` — 400 with validation (working)
- `/api/event-inquiry` — 400 with validation (working)
- `/api/catering-inquiry` — 400 with validation (working)
- `/api/newsletter-signup` — 400 with validation (working)

The `/contact` page has no form — it's just contact cards with phone/address/buttons.
The Frisco and Lewisville location pages also have no embedded forms.
All form components (VipClubForm, EventInquiryForm, CateringForm, NewsletterForm)
submit to their respective `/api/*` routes and work correctly.

SMTP email will only send if `SMTP_USER` and `SMTP_PASS` are set in the `.env` on
the VPS Docker container. Otherwise emails are logged to console only (see `src/lib/email.ts`).

## 2026-05-07 — SEO Blitz: Cloudflare blocking sitemap, indexing diagnosis, IndexNow setup

### Critical findings

1. **jinbeh.com is fully verified in Google Search Console** (auto-verified
   via the existing HTML file `/public/google7f17acce8ef41abf.html`).
   The property already shows 2,432 lifetime web search clicks. No fresh setup
   required.

2. **Most pages are NOT indexed** despite the property being verified.
   Confirmed via URL Inspection on each:
   - `jinbeh.com/` → INDEXED (homepage, the only one Google reliably has)
   - `jinbeh.com/celebrations/mothers-day` → "URL is unknown to Google"
     (never crawled, no referring sitemap)
   - `jinbeh.com/frisco` → "Discovered – currently not indexed"
   - `jinbeh.com/lewisville` → "Crawled – currently not indexed"
     (last crawl 2026-03-05, then dropped)
   - `jinbeh.com/menu` → "Discovered – currently not indexed"
   All four had Request Indexing fired today, but the underlying causes need
   to be fixed for permanent inclusion.

3. **Both submitted sitemaps in GSC show "Couldn't fetch"** — the legacy
   `/sitemap_index.xml` from 2024 AND the freshly-submitted `/sitemap.xml`.
   But the file IS browser-accessible at https://jinbeh.com/sitemap.xml
   (verified visually; returned valid XML with ~30 URLs and 2026-03-29
   lastmod dates). The fetch failure is therefore not a missing file but
   a Cloudflare bot challenge against Googlebot's sitemap fetch.

4. **The deployed sitemap is INCOMPLETE compared to the source.** The Next.js
   dynamic sitemap (`src/app/sitemap.ts`) generates 254 URLs including
   `/celebrations/mothers-day` at priority 0.7. The version Cloudflare
   serves at `/sitemap.xml` is missing mothers-day, every blog post,
   every nearby city, every per-item hibachi/sushi page. Either the
   production Docker container is on an older commit than `869b5b5`
   (the one that added mothers-day to sitemap.ts) or Cloudflare is caching
   a stale response. **Verify next deploy regenerates this.**

5. **Cloudflare-managed robots.txt overrides the repo's `/public/robots.txt`.**
   The live robots.txt reads:
   ```
   # BEGIN Cloudflare Managed content
   User-agent: *
   Content-Signal: search=yes,ai-train=no
   Allow: /
   # blocks for: Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot,
   #             CloudflareBrowserRenderingCrawler, Google-Extended, GPTBot,
   #             meta-externalagent
   # END Cloudflare Managed Content
   User-agent: *
   Allow: /
   Sitemap: https://jinbeh.com/sitemap.xml
   ```
   Googlebot is allowed (good). The AI-bot block is intentional and fine.
   But the repo's `public/robots.txt` is overridden by the Cloudflare-managed
   block — keep that in mind when editing robots.

### Fix sequence (in priority order, do today, Mother's Day is May 10)

1. **Redeploy the site so the dynamic sitemap regenerates with all 254 URLs.**
   Either trigger via the deploy hook or SSH into the VPS and run
   `bash /opt/jinbeh-elite/deploy-staging.sh`. After deploy, confirm
   `https://jinbeh.com/sitemap.xml` contains `/celebrations/mothers-day`.

2. **Disable Cloudflare Bot Fight Mode for /sitemap.xml** (or the whole
   jinbeh.com zone). In Cloudflare dashboard → Security → Bots, either:
   - Toggle off "Bot Fight Mode" on jinbeh.com entirely (recommended for
     restaurant sites — too aggressive, false-positives Googlebot)
   - OR add a WAF Skip rule: `(http.request.uri.path eq "/sitemap.xml")`
     → action: Skip → All security checks
   - Verify Cloudflare has Googlebot in its verified-bots allowlist
     (Security → Bots → Configure Super Bot Fight Mode)

3. **Re-submit sitemap in GSC after step 2.** Sitemaps page → click 3-dot
   menu on the failed entries → "Remove" → re-add `sitemap.xml`. Should
   move from "Couldn't fetch" to "Success" within 24h.

4. **Manually request indexing for the top 20 priority URLs in GSC.**
   I did this for `/`, `/celebrations/mothers-day`, `/frisco`,
   `/lewisville`, `/menu` today. The remaining 15 still need to be done
   one-at-a-time via URL Inspection → Request Indexing. There's a daily
   quota (~10/day) so spread it across days if needed.

### IndexNow setup (added to repo)

Set up IndexNow so Bing/Yandex/Naver/Yep get notified instantly when content
changes. Google does NOT use IndexNow.

- **Key**: `8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c`
- **Key file** (committed): `public/8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c.txt`
  → live at `https://jinbeh.com/8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c.txt` after
  deploy. Contains just the key string.
- **Helper lib** (committed): `src/lib/indexnow.ts` exports
  `submitToIndexNow(urls: string[])` and `submitOneToIndexNow(url: string)`.
  Auto-batches 10K URLs per request, deduplicates, validates jinbeh.com prefix.
- **Manual batch script**: `outputs/indexnow_submit.sh` — fires the top 50
  URLs in one curl call. Run this once after the next deploy completes
  to seed Bing's index.
- **Auto-submit on content change**: in any admin/publish endpoint, call
  `await submitToIndexNow([newUrl])`. Or hook it into the build (Next.js
  `instrumentation-server.ts` startup, or a post-deploy webhook).

### What was actually checked / submitted today

- GSC verified, URL inspection + Request Indexing for: `/`, `/frisco`,
  `/lewisville`, `/menu`, `/celebrations/mothers-day`. All in priority
  crawl queue.
- Sitemap `/sitemap.xml` submitted (fails to fetch → Cloudflare).
- Local sitemap.xml regenerated with 254 URLs (saved at
  `outputs/sitemap.xml`) — useful as a backup if the dynamic sitemap
  ever needs to be replaced with a static one.
- IndexNow key file dropped in `public/`.
- Reddit/Facebook/Quora comment opportunities surfaced (drafts in
  `outputs/Jinbeh_SEO_Blitz_Actions.docx`) — owner needs to post these
  manually since publishing-on-behalf isn't an automated action.
- Apple Business Connect and Foursquare opened in browser tabs — owner
  needs to complete sign-up.

### Lesson: Cloudflare Bot Fight Mode is the most likely culprit when
verified GSC properties report "Couldn't fetch sitemap" but the file is
clearly accessible in a browser. Always check Cloudflare bot settings
before assuming the sitemap itself is broken.

## 2026-05-06 — DNS rollover: jinbeh.com cut over from old Webhero WordPress to new Hostinger Next.js (via Cloudflare proxy)

### What happened

For months the project repo had only deployed to `staging.jinbeh.com` (Hostinger
VPS `srv1144987`, IP `72.61.15.71`). The actual `jinbeh.com` apex was still
pointed at an old 2022-era WordPress site at Webhero (`216.57.231.121`,
`webhost21.webhero.com`, OK City shared host) — the old NS records were
`ns1/2/3.webhero.com`. Visitors hitting jinbeh.com got the old WordPress site,
not the new Next.js codebase. A quick test had briefly pointed jinbeh.com at the
Hostinger VPS and exposed the n8n login page (the original symptom that
triggered this cutover work — user thought "n8n" was misconfigured but the real
issue was that DNS hadn't been flipped AND the VPS had no `default_server` on
443 so n8n was the implicit SSL fallback).

The cutover moved jinbeh.com from the old WordPress to the new Next.js site,
fronted by Cloudflare proxy. The cleanup also fixed the n8n SSL fallback
problem so that future DNS / SNI mishaps don't expose an automation login UI.

### The final architecture

```
Browser
  └─ DNS: jinbeh.com → Cloudflare anycast (104.21.65.203, 172.67.192.53)
     └─ TLS: terminated at Cloudflare edge with Cloudflare Universal SSL
              (Let's Encrypt, auto-renewed, CN=jinbeh.com)
        └─ Cloudflare → Hostinger origin 72.61.15.71:443
              with our 15-year Cloudflare Origin Cert
              (issued 2026-05-06, expires 2041-05-02, SAN=*.jinbeh.com,jinbeh.com)
           └─ nginx 1.24.0 on Ubuntu 24.04, vhost /etc/nginx/sites-available/00-jinbeh.com.conf
              listen 443 ssl http2 default_server  ← takes the SSL fallback role from n8n
              proxy_pass http://localhost:3001
              └─ Docker container `jinbeh-staging` (image: jinbeh-elite-jinbeh-staging)
                 listening on host port 3001 → container port 3000
                 same container serves both staging.jinbeh.com AND jinbeh.com today
```

### Critical files on the VPS

- `/etc/nginx/sites-available/00-jinbeh.com.conf` — apex+www vhost. Filename
  has `00-` prefix on purpose so nginx loads it BEFORE
  `automation.jinbeh.cloud` and our `default_server` claim on `[::]:443` wins.
  Without that prefix, automation's `listen [::]:443 ssl ipv6only=on;` claims
  the socket-level options first and nginx silently rejects our `default_server`
  flag with `[warn] protocol options redefined for [::]:443`.
- `/etc/nginx/sites-enabled/00-jinbeh.com.conf` — symlink to the above.
- `/etc/ssl/jinbeh.com/fullchain.pem` (1663 bytes, 644) — Cloudflare Origin Cert.
- `/etc/ssl/jinbeh.com/privkey.pem` (1704 bytes, 600) — matching private key.

### Cloudflare zone configuration (account `Yumyumjinbeh@gmail.com`)

DNS records at Cloudflare for jinbeh.com:
- A `@` → `72.61.15.71` (Proxied, orange cloud)
- A `www` → `72.61.15.71` (Proxied)
- A `staging` → `72.61.15.71` (Proxied)
- A `crm` → `72.61.15.71` (DNS only)
- A `media` → `72.61.15.71` (Proxied)
- A `localhost` → `127.0.0.1` (DNS only — informational)
- MX 10 `mx1.webhero.com`, MX 20 `mx2.webhero.com` (DNS only — keeps Webhero
  email working)
- TXT DKIM, DMARC, SPF — preserved from Webhero zone
- SSL/TLS encryption mode: **Full (strict)** — Cloudflare verifies our Origin
  Cert on each request to origin.

Cloudflare-assigned nameservers (now authoritative for jinbeh.com):
- `abby.ns.cloudflare.com`
- `karl.ns.cloudflare.com`

These were set at Webhero's registrar panel as the new NS records (replacing
`ns1/2/3.webhero.com`). The Webhero zone files still exist as fallback but are
no longer queried.

### Hard-won lessons for future DNS / nginx work

1. **Cowork chat re-renders bare URLs as Markdown links inside code blocks.**
   When pasting any nginx config that contains `www.jinbeh.com`, the chat
   client converts it to `[www.jinbeh.com](https://www.jinbeh.com)` and the
   user pastes the link form into the terminal — nginx accepts it as a
   nonsense server_name with brackets in it and silently doesn't match
   `Host: www.jinbeh.com`. **Workaround**: build hostnames from shell
   variables (`W=www; D=jinbeh.com; ... ${W}.${D}`) so the literal string
   never appears in the chat-rendered code. Or paste the entire config via
   `base64 -d` so nothing is interpreted along the way. The base64 approach
   is bulletproof and recommended for any non-trivial config rewrite.
2. **Long heredocs in a web terminal can break with stray `>` continuation
   prompts** — produces a corrupted file with garbage at the end. The PEM
   was 2600 bytes when it should be 1663 (extra junk from interrupted paste).
   Symptom: `nginx -t` errors with
   `PEM_read_bio_X509_AUX() failed (bad end line)`.
   Same workaround: use base64 single-line paste via `echo '...' | base64 -d`.
3. **nginx 1.24.0 does NOT support the standalone `http2 on;` directive** —
   that was added in 1.25.1. Use the inline form
   `listen 443 ssl http2 default_server;`. Newer nginx will deprecation-warn
   on the inline form, but it works fine on 1.24.0.
4. **`default_server` and other socket-level options are claimed by the FIRST
   server block to `listen` on a given socket.** Other blocks adding their
   own protocol options on the same socket get a `[warn] protocol options
   redefined for ...` and their flags are silently ignored. To win the
   default_server claim when other vhosts already exist, name your config
   file with a prefix like `00-` so nginx loads it first alphabetically out
   of `sites-enabled`.
5. **n8n was the accidental SSL catch-all on this VPS.** Not by design —
   it was the first SSL server in nginx config order, so any unknown SNI
   on 443 fell back to it. Now `00-jinbeh.com.conf` is the explicit
   default_server and any unknown SNI gets the Jinbeh restaurant site
   (friendlier than an automation login screen). Don't undo this without
   adding a different default_server.
6. **DNS propagation is asymmetric across resolvers.** Cloudflare's `1.1.1.1`
   and Quad9's `9.9.9.9` picked up the new NS within minutes; Google's
   `8.8.8.8` lagged by hours. Local OS / browser DNS caches lag too. Use
   `--resolve hostname:port:cloudflare-edge-ip` with curl to test the
   production path independently of DNS propagation. Flush macOS DNS with
   `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`.
7. **Cloudflare Origin Cert is the right cert for proxy-on setups** —
   15-year validity, no Let's Encrypt renewal hassle, only valid for
   traffic coming from Cloudflare (so it can't be abused if the cert leaks).
   Generated at Cloudflare → SSL/TLS → Origin Server → Create Certificate.
   The PRIVATE KEY is shown ONCE; copy it before navigating away.
8. **Local Mac DNS cache survives a recursive resolver update.** Even after
   global DNS propagated and `dig +short A jinbeh.com @1.1.1.1` returned the
   new Cloudflare IPs, the user's Mac kept resolving to the old Webhero IP
   for 30+ minutes because (a) the home router at `192.168.0.1` was the
   Mac's resolver and the router had its own cache, and (b) macOS
   `mDNSResponder` had a sticky cached IPv4 entry that survived
   `dscacheutil -flushcache`. Sudo was needed for
   `killall -HUP mDNSResponder` but the Cowork osascript MCP wrapper
   couldn't pass admin auth through. **Sudo-free workaround that
   actually fixed it**:
   ```
   networksetup -setdnsservers Wi-Fi 1.1.1.1 8.8.8.8
   networksetup -setairportpower en0 off
   sleep 2
   networksetup -setairportpower en0 on
   ```
   The first line bypasses the router's DNS cache. The Wi-Fi power cycle
   resets mDNSResponder's in-memory cache without needing root. Verified
   by `dscacheutil -q host -a name jinbeh.com` returning Cloudflare IPs
   immediately after.

### What was NOT changed by this rollover (cleanup items deferred)

- **`staging.jinbeh.com` returns HTTP 401 Authorization Required.** Basic
  auth was added at some point and the creds aren't in the working set.
  Decide whether to keep it (search-engine guard) and document creds, or
  remove the auth.
- **Old Webhero WordPress site is still alive at `216.57.231.121`.** Once
  Google's resolver expires its cache, no DNS path leads to it. Decide
  whether to cancel the Webhero hosting or keep it as a quiet archive.
- **Same Docker container serves both staging and prod.** Fine for a single-
  developer/single-environment site, but if you ever want true staging
  isolation, run a second container on a different port and add a separate
  `staging.jinbeh.com` proxy_pass.

### Reverting (in case of disaster)

To roll back to the old WordPress site within 5 minutes:
1. At Webhero registrar, change NS back to `ns1/2/3.webhero.com`.
2. Wait for resolver TTL.

The Cloudflare zone, Origin Cert, nginx config, and Docker container all stay
in place — they just stop receiving traffic. To re-cut-over, set NS back to
`abby/karl.ns.cloudflare.com` again.

## 2026-05-05 — /frisco/hibachi rebuild + 12-page Reserve-button contrast fix

### Frisco hibachi page: bulleted menu + photo gallery

Rebuilt `src/app/frisco/hibachi/page.tsx`:

1. **Replaced the 14-card image grid** (each card was a Link to a
   `/frisco/hibachi/[item]` subpage with a thumbnail) with a clean,
   categorized **bulleted list** sourced from the official Frisco dinner
   menu PDF (page 2, `Jinbeh-Frisco-Dinner.pdf`). Items are organized into
   four sections with gold horizontal-rule headers and a 2-column grid
   layout on desktop:
   - **Land Entrées** — The Vegetarian, Lemon Sesame Chicken, N.Y. Strip
     Steak, Teriyaki Steak, Filet Mignon, Black Angus Ribeye (10 oz.),
     Chateaubriand
   - **Ocean Entrées** — Yakisoba (Japanese Pasta), Hibachi Calamari,
     Hibachi Salmon, Colossal Shrimp, Jumbo Scallops, Grilled Mahi-Mahi,
     Twin Lobster Tails
   - **Combo Dinner Selection** — Jinbeh Double Delight, Surf N' Turf,
     Land and Sea, Tokyo Trio, Seafood Lover's Combo, Imperial Dinner for 2
   - **Children's Dinners** — chicken, steak, shrimp, filet mignon
     (no description, just the item name)
   Data lives at module scope as `hibachiMenu: HibachiMenuSection[]` for
   easy editing. **No prices** are rendered (per project policy — the PDFs
   are the source of truth for pricing).

2. **Added a "Hibachi Plates at Jinbeh Frisco" photo gallery** below the
   menu list using the eight `C060324` photoshoot photos already
   optimized in `/public/images/catalog/`:
   - `7-C060324-6447.jpg` — steak hibachi angled, blue plate
   - `8-C060324-6462.jpg` — steak hibachi overhead with Jinbeh logo plate
   - `9-C060324-6484.jpg` — shrimp + scallops angled, white plate
   - `10-C060324-6501.jpg` — shrimp + scallops overhead
   - `11-C060324-6544.jpg` — lobster + chicken combo angled
   - `12-C060324-6551.jpg` — lobster + chicken combo overhead
   - `13-C060324-6582.jpg` — three-plate spread overhead with sushi roll
   - `14-C060324-6596.jpg` — three-plate spread with hands and chopsticks
   Layout is a uniform `aspect-[3/2]` grid: 1 col mobile / 2 col tablet /
   4 col desktop. Each `<Image fill>` has proper `sizes` and the first
   four are `loading="eager"`. Data lives at module scope as
   `hibachiGallery`.

3. **Updated the JSON-LD `Menu` schema** to mirror the new
   four-section structure with the same descriptions, replacing the old
   single-section schema with the 14 made-up cards.

4. **Updated the `<title>` and metadata description** to drop the stale
   "14 hibachi options" line.

If new menu items get added, edit `hibachiMenu` and the matching
`hasMenuSection.hasMenuItem` array in `menuSchema` together. The
individual `/frisco/hibachi/[item]` subpages still exist as standalone
routes (filet-mignon, ny-strip, ribeye, chicken-teriyaki, shrimp,
scallops, lobster-tail, salmon, vegetable-tofu, combo-steak-shrimp,
combo-steak-chicken, combo-steak-lobster, combo-seafood, imperial-dinner)
and are not linked from the new bulleted list — they stay reachable via
search/SEO.

### Same Tailwind v4 cascade bug — invisible Reserve buttons (12 pages)

The user reported the **"Reserve a Table" button rendering white-on-white**
in the bottom CTA on `/frisco/hibachi` (text was invisible). Same root
cause as the May 4 hero fix: in Tailwind v4 utilities live in the
`utilities` cascade layer, which loses to unlayered base CSS like

```css
a { color: inherit; ... }
```

(in `src/app/globals.css`). When a `<Link>` sits inside a parent with
`text-white` (e.g. the `bg-gradient-to-br from-accent-red to-deep-indigo
... text-white` CTA banner), the link inherits white from the parent and
its own `text-accent-red` utility cannot override the unlayered
`color: inherit` rule. Result: white text on white background.

**Canonical fix already exists in the codebase**: globals.css L242–256
defines `.btn[class*="text-accent-red"] { color: var(--accent-red)
!important; }` (and the same for `text-white`, `text-charcoal`,
`text-deep-indigo`). Adding the `btn` class to the Link's className
unlocks those `!important` overrides and defeats the inheritance.

The reference pattern lives in `src/components/MenuItemTemplate.tsx`
L304–310 (and `src/app/private-dining/page.tsx` L711, etc.):

```jsx
<Link className="btn bg-white text-accent-red hover:bg-warm-ivory ..." />
<a    className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 ..." />
```

**12 pages had the bug. All fixed with the canonical `btn` class:**

- `src/app/frisco/hibachi/page.tsx` (the originally reported page)
- `src/app/lewisville/hibachi/page.tsx`
- `src/app/frisco/{appetizers,sushi-rolls,sashimi,cocktails,kids-menu}/page.tsx`
- `src/app/lewisville/{appetizers,sushi-rolls,sashimi,cocktails,kids-menu}/page.tsx`

Both the primary "Reserve a Table" Link and the secondary "Call (xxx)" `<a>`
got the `btn` class for consistency. Where the secondary used the older
`bg-white/20 text-white border border-white/50` pattern, it was upgraded
to the modern `bg-white/20 backdrop-blur text-white border-2 border-white/50`
pattern that matches `MenuItemTemplate.tsx`.

**Future-proofing — search for the broken pattern before adding new
location pages:**
```bash
grep -rn '"bg-white text-accent-red hover:bg-warm-ivory' src/ \
  | grep -v 'btn bg-white'
```
Any hit needs the `btn` class added.

### Verification

- Targeted tsc on all 12 edited files (via `ts.createProgram` with
  `skipLibCheck`) returns clean. Full project tsc takes >90s and times
  out the bash sandbox; scoped check on changed files is the practical
  CI substitute.
- Visually: `text-accent-red` now renders red on white for the primary
  CTA across all 12 pages, matching the homepage / private-dining /
  takeout / dfw-moms canonical pattern.

## 2026-05-04 — Mobile homepage hero + nav fixes

Fixed left-edge text clipping in the homepage hero and tightened the mobile
nav drawer. Three bugs were compounding into the visible breakage:

### Root cause: bare `h1` selector beating Tailwind utilities

In Tailwind v4 (`@import "tailwindcss"`), utility classes live in the
`utilities` cascade layer, which has *lower* priority than unlayered CSS.
The mobile-only override in `src/app/globals.css`

```
@media (max-width: 640px) { h1 { font-size: 2rem; line-height: 1.1; } }
```

was therefore winning over `text-base sm:text-lg` on the hero `<h1>`,
forcing it to render at 32px. Combined with the rotating hook string
"When's the last time dinner was actually entertaining?" set to
`text-3xl` (30px) wrapped in a `WordRotate` span using `inline-block`
+ `overflow-hidden` (which sizes itself to its content with no max
width and *does not* allow word wrap), the centered hero content
became wider than the viewport and produced horizontal page overflow.
Because `<body>` had no `overflow-x: hidden`, the page got a real
horizontal scrollbar and the leftmost characters of every centered
element appeared "clipped" — "apanese, Hibachi…", "ly dinner that's
act…", "anese dining with a show…", "IBACHI IN FRISCO", etc.

### What changed

1. `src/app/globals.css`
   - Added `overflow-x: hidden` + `max-width: 100vw` to `html` and
     `body` so any future overflow can't produce horizontal scroll.
   - Wrapped every bare-element heading rule (`h1`, `h2`, `h3`, `h4`)
     in `:where(...)` — both the unlayered base rules around L166
     and the `@media (max-width: 640px)` overrides around L1454 — so
     they have specificity 0 and Tailwind utilities reliably win.
     This is the right fix for v4: it preserves the global "default
     heading size" behavior for unstyled markdown content while
     letting components opt out with utilities.

2. `src/components/ui/WordRotate.tsx`
   - Outer span changed from `inline-block relative overflow-hidden`
     to `block relative w-full max-w-full text-balance break-words`,
     and inner span from `inline-block` to `block`. Long hooks now
     wrap inside the parent `<p>` instead of overflowing it.

3. `src/components/HeroSection.tsx`
   - Hero `<section>` got `w-full max-w-[100vw]` and reduced mobile
     vertical padding (`py-16 sm:py-24 md:py-32`).
   - H1: `text-sm sm:text-base md:text-lg` (was `text-base sm:text-lg`),
     plus `text-balance leading-snug`.
   - Rotating hook `<p>`: `text-[1.375rem] leading-tight sm:text-4xl
     md:text-6xl lg:text-7xl` (was `text-3xl sm:text-5xl md:text-7xl`).
     `min-h` scaled down to match (`3.5rem / 6rem / 9rem`). Added
     `text-balance` and `tracking-tight` on mobile so the longer
     question-style hooks read cleanly.
   - Subtitle: `text-sm sm:text-lg md:text-xl lg:text-2xl` (was
     `text-base sm:text-xl md:text-2xl`).
   - Both location cards: `max-w-[340px] sm:max-w-[300px]` — gives
     the "#1 Rated Hibachi in Frisco" badge breathing room on the
     smallest viewports.

4. `src/components/Header.tsx` (mobile drawer only)
   - Background changed from `bg-charcoal/95 backdrop-blur-xl` to
     solid `bg-charcoal` so the panel reads as a clearly dark surface
     rather than a translucent gray-beige wash.
   - Row height: every accordion trigger and plain link is now
     `py-2` `text-[13px]` (was `py-2.5` `text-sm`). Saves roughly
     6 rows × 8px = ~48px of vertical real estate.
   - Section dividers: each top-level `nav` item is wrapped with
     `border-t border-white/[0.06]` (skipping the first), so the
     menu reads as a list of distinct sections instead of relying
     on padding alone.
   - "Catering" (the only top-level item without a dropdown) now
     uses the same row template — uppercase tracking-wider + a right
     chevron — so it reads as a sibling of "Menu / Celebrations /
     Dining / Locations / Explore" rather than an orphaned tail.
   - Location switcher pill compressed to a single line with
     smaller font + tighter padding so it doesn't dominate the top
     of the drawer.
   - Caret SVGs use `text-white/60` so the dropdown affordance is
     visible without competing with the label.

### Verification

- `npx tsc --noEmit -p tsconfig.json` exits 0.
- The hero h1 now actually honors its Tailwind class because of the
  `:where()` change. On a 320px viewport the rotating hook renders
  at 22px (1.375rem) and wraps inside the centered `<p>` — no more
  off-canvas overflow, no more left-edge clipping cascade.

### To deploy to staging.jinbeh.com

Same flow as before: commit + push to `main`, then SSH to the
Hostinger VPS and run `bash /opt/jinbeh-elite/deploy-staging.sh`
(it pulls, `npm install`, `npm run build`, `docker compose up -d
--build`). Login is `YumYumJinbeh@gmail.com` (saved in Chrome).

## 2026-05-03 — Master-content edit pass + new World Cup / DFW Moms pages

A large content + branding pass was applied across the site based on a
crawl-style master document (`master-content.md`). 64 EDIT blocks were
processed in one pass, plus two new SEO-optimized celebration pages were
created.

### Pages edited (high-traffic + content)

- `/` (home): removed `Real crab.` lead-in from JinbehExperience hook;
  fixed the Mark L. Yelp testimonial quoting "this beats it" to
  "Jinbeh beats it" so the comparison subject is unambiguous.
- `/about`: removed the "never cooked a day in his life" line from Ben
  Matsuda's bio; reworked the head sushi chef bio to use "Fuji San" by
  name; replaced the Floor Captain card with "A Team That Stays" copy;
  rewrote the longest-tenured employee card as "Hibachi Excellence";
  softened "Every child gets" → "Sometimes kids get" for the origami
  crane copy (in two places); removed the unverified second-dad
  pull-quote; updated Diners' Choice copy to be evergreen
  ("Over the restaurant's lifetime…"); dropped "updated monthly".
- `/accessibility`: removed the 3-5 business day SLA promise.
- `/blog/asian-cuisine-dallas`: replaced the "Uchi Dallas" entry with a
  Jinbeh-focused entry (and removed the duplicate Jinbeh entry below);
  added Jinbeh mention in the traditional Asian section + closing
  paragraph.
- `/blog/ayce-sushi-vs-traditional`: removed em-dashes; added a
  superscript footnote (`<sup>1</sup>` linking to a `#fn-1` anchor at
  the bottom) for the D Magazine "Best Neighborhood Restaurants (2008)"
  award; rewrote AYCE labor-cost bullet; trimmed the documentation
  sentence from the FDA freezing-standards paragraph.
- `/blog/baby-shower-venues`: replaced the unverified guest quote with
  brand-aligned aspirational copy + private-dining link; "Customizable
  menus" → "Menus that accommodate dietary preferences"; "per person"
  → "per entree".
- `/blog/bachelorette-restaurants-dallas`: "customizable group menus"
  → "fun hibachi, sushi, and drink menus".
- `/blog/beer-hard-seltzer`: rewrote the wine-selection blurb to be
  positive instead of self-deprecating; broke the Japanese-beer em-dash
  into two sentences.
- `/blog/best-hibachi-dallas`: dropped "Corporate atmosphere" bullet
  from the chain-hibachi comparison; the broken
  "lunch specials start at just" sentence now references the **Hibachi
  for Two** ($35 Mon–Fri lunch) special.
- `/blog/free-birthday-food-deals`: added an SEO-rich Jinbeh birthday
  paragraph after the "supporting local businesses" section, calling out
  three-touch birthday treatment + linking to /celebrations/birthday +
  /blog/hibachi-birthday-party-ideas + /frisco + /lewisville.
- `/blog/how-to-eat-sushi-guide`: added a "Try Fresh Sushi at Jinbeh:
  Beginners Welcome" section above the bottom CTAs; calls out training
  chopsticks for kids.
- `/blog/jinbeh-gift-cards-guide`: rewrote two newsletter prompts to
  surface the **VIP Birthday Club** at /vip; the lunch-card paragraph
  now references the Hibachi-for-Two special.
- `/blog/offsite-hibachi-catering`: substantial rewrite — Jinbeh does
  **not** do live offsite hibachi shows; offsite catering is delivered
  on presentation trays. Added a clear disclaimer block, rewrote the
  "what's included" section, and added a "live show is at the restaurant
  only" CTA repeatedly. Added a note that catering needs ≥1 week of
  lead time.
- `/blog/omakase-dining-guide`: added "The Omakase Spirit at Jinbeh"
  block that captures the chef's-choice spirit *without* claiming
  Jinbeh offers an omakase menu (per Obsidian rule: omakase is removed
  from the website).
- `/blog/pickleball-restaurants-lewisville`: corrected the grill type
  — Lewisville is **electric**, Frisco is **gas** (it was reversed).
- `/blog/ramune-soda-guide`: added a Jinbeh-first paragraph above the
  "where to buy" section, encouraging guests to enjoy Ramune in-store.
- `/blog/restaurants-private-rooms`: rewrote the Jinbeh paragraph to
  match reality — Lewisville has tatami-style booths near the sushi
  bar, Frisco has a small number of partitioned booths in the back.
- `/blog/sake-pairing-guide` + `/blog/sake-sushi-menu-pairings` +
  `/blog/sake-taste-profile`: added Jinbeh-sake tout blocks that link
  to /happy-hour and both location pages.
- `/blog/seafood-lewisville`: added two paragraphs about the bluefin
  tuna and salmon, plus the sake-and-happy-hour tout.
- `/blog/sushi-identification-chart`: added a Jinbeh sushi tout block,
  rewrote the omakase mention in the ProTip to "ask for the chef's
  favorite signature rolls" (omakase removal).
- `/blog/thanksgiving-dining-guide`: added a "Spend Thanksgiving With
  Jinbeh" block. Cleaned up the existing ProTip tone.
- `/blog/things-to-do-frisco`: added a "Best Thing to Do in Frisco"
  Jinbeh closer with internal links to /blog/best-hibachi-dallas,
  /blog/best-restaurants-stonebriar, and /frisco.
- `/blog/unique-kids-birthday-party-places`: added a "Why Jinbeh Is
  the Best Place for Kids' Birthday Parties" block with the
  three-touch detail + training chopsticks.
- `/careers`: added a paragraph explaining how Jinbeh prioritizes its
  team and how that shows up in guest hospitality.
- `/catering/corporate`: replaced the unsubstantiated "Trusted by major
  corporations" stat strapline with a more concrete description.
- `/catering/wedding`: added an entirely new "Why Jinbeh Is the Best
  Choice for Wedding Catering in DFW" charcoal-bg section with a
  bulleted list and SEO keyword density (Jinbeh, Frisco, Lewisville,
  catering, hibachi, sushi). Notes the offsite-no-show rule explicitly.
- `/celebrations` (index): removed the unverified anniversary review;
  broke 6 em-dashes into clean sentences; added a "Why Jinbeh is the
  best for celebrations in DFW" lead paragraph.
- `/celebrations/asian-restaurant-month`: broke em-dashes; added an
  SEO-rich paragraph about being one of the longest-running Asian-owned
  family-operated Japanese restaurants in North Texas, with location
  links.
- `/celebrations/birthday`: broke em-dashes; added a "Why Jinbeh Is the
  Top Choice for a Birthday Dinner in DFW" block.
- `/celebrations/christmas`: added an "open on Christmas Day" paragraph
  + the no-cooking/no-cleaning Christmas value prop; broke 8 em-dashes.
- `/celebrations/graduation`: removed all references to custom pricing,
  custom menus, and Custom Pricing $0 strings; rewrote FAQ schema +
  page packages to reflect the standard menu reality; gated the price
  rendering with `pkg.price && (...)`.
- `/celebrations/mothers-day`: added "Why Jinbeh is the best place for
  a Mother's Day dinner in DFW" paragraph with cross-link to the new
  /celebrations/dfw-moms page; replaced the omakase reference with
  "Samurai Roll: a Jinbeh signature".
- `/celebrations/team-building`: clarified ideal hibachi-table size
  (7-8) and that we've regularly hosted 40-50 by joining tables.
- `/celebrations/thanksgiving`: added the no-cooking/festive-atmosphere
  paragraph + reservation CTA; broke 7 em-dashes.
- `/delivery`: broke em-dashes; added a Grub Hub / Uber Eats vs.
  catering note that explicitly asks for ≥1 week of lead time for
  catering deliveries.
- `/events`: rewrote the capacity FAQ schema entry to say each location
  comfortably hosts 100+ when seating is coordinated; rewrote the
  events-we-host paragraph; updated the private-dining-rooms paragraph
  to acknowledge the offsite-no-live-show rule.
- `/frisco/appetizers`: removed the price-range FAQ; added a "Why
  Jinbeh Is the Best for Japanese Appetizers in Frisco" closing
  section with internal cross-links to sushi-rolls, hibachi, and bar.

### New pages created

1. **`/celebrations/world-cup`** — `src/app/celebrations/world-cup/page.tsx`.
   FIFA World Cup 2026 (June 11 – July 19, 2026) celebration page with
   a featured section on **Chioma Ubogagu** linking to her Instagram
   featurette: <https://www.instagram.com/reels/DVmJ3XBjZch/>. Metadata
   targets keywords: world cup 2026 frisco, world cup 2026 dfw, fifa
   world cup 2026 dallas, att stadium world cup restaurant, japan world
   cup watch party, samurai blue dfw, world cup catering dfw, etc. Has
   FAQPage schema, hero with Frisco/Lewisville OpenTable CTAs, "Why
   Jinbeh for the World Cup" bulleted list, match-day planning grid,
   and a Related Pages footer linking /celebrations, /events, /catering.
   The page also notes the offsite-catering ≥1 week notice rule and
   the no-live-show-offsite rule.

2. **`/celebrations/dfw-moms`** — `src/app/celebrations/dfw-moms/page.tsx`.
   Family-friendly page positioning Jinbeh as DFW moms' favorite
   hibachi/sushi spot. Includes a featured section linking to the DFW
   moms Instagram reel: <https://www.instagram.com/reels/DXmPlsfgvqW/>.
   Metadata targets: dfw moms, frisco moms, lewisville moms, family
   friendly restaurant frisco, mothers day restaurant frisco, kids
   birthday hibachi frisco, mom approved restaurant frisco, etc.
   Includes FAQPage schema and CTAs for both locations + VIP
   Birthday Club.

### Internal linking updates for the new pages

- `/celebrations` index now lists both **FIFA World Cup 2026** and
  **DFW Moms Love Jinbeh** in the cultural celebrations array.
- `/events` Event-Planning-Resources grid now includes a FIFA 2026 card
  linking to the new World Cup page.
- `/celebrations/mothers-day` now cross-links the DFW Moms page from
  its lead paragraph.

### Voice + brand rules applied throughout

- **No em-dashes (—) in body content.** Replaced with periods, commas,
  colons, or split sentences across all the celebration pages, blog
  posts, and other edits. The brand guide explicitly bans em-dashes.
- **No prices.** Maintained the no-pricing policy across all edits.
  The only two exceptions remain: Happy Hour and Hibachi-for-Two.
- **No omakase as a current offering.** Per the Obsidian vault rule,
  omakase has been removed from the website. Where the master content
  referenced omakase, copy was rewritten to capture the chef's-choice
  spirit without claiming Jinbeh offers an omakase menu.
- **No live offsite hibachi shows.** Wherever offsite catering pages
  promised tableside theatrics, the copy now clarifies: live show is
  at the restaurant; offsite catering is delivered on presentation
  trays; ≥1 week notice for larger orders.
- **Both locations.** Edits surface Frisco and Lewisville links
  consistently.
- **Internal linking.** New blog/celebration sections link out to
  /frisco, /lewisville, /happy-hour, /vip, /menu, and other relevant
  pages to strengthen SEO and conversion paths.

### Verification

- `npx tsc --noEmit -p tsconfig.json` exits 0 (clean).
- The remaining em-dashes in celebration pages are all in OG image
  `alt` text ("Jinbeh Japanese Restaurant — Celebrations Birthday"),
  which is the canonical brand pattern and intentionally preserved.

### Working artifacts left in outputs

- `outputs/edits.json` and `outputs/edits_clean.json` — structured
  extraction of all 64 EDIT blocks from the master content document.
  Useful for future passes if more edits land in `master-content.md`.
- `outputs/extract_edits.py` — the Python script that parsed the file.

## 2026-05-03 — Hibachi for Two ($35) lunch-only special added

A new featured promotion was added to the specials pages — the **second
exception to the no-price policy** (alongside Happy Hour).

**Canonical Hibachi-for-Two copy (use exactly):**
- **$35** for two hibachi entrees
- Available **Monday through Friday** at **lunch only** (11:00 AM – 2:00 PM)
- Choose any two proteins: 🥦 **Veggie**, 🍗 **Chicken**, 🥩 **Steak**, 🍤 **Shrimp**, 🍣 **Salmon**
- Each plate includes: onion soup, house salad with ginger dressing,
  grilled vegetables, and steamed white rice
- Optional upgrade: **+$5 per person** to swap white rice for hibachi
  fried rice
- Dine-in only • Two-person minimum • Not combinable with other promos
- **Not available** on weekends or at dinner

**Pages where it appears (full featured section + AggregateOffer schema):**
- `/specials` — top quick-nav card (with "Mon-Fri Lunch • 11am-2pm" time
  label) + full featured section + two FAQ entries + AggregateOffer schema
- `/frisco/specials` — full featured section above Main Specials +
  AggregateOffer schema (location-specific URL)
- `/lewisville/specials` — same as Frisco, location-specific URL
- `/lunch-specials` — split-card "Featured Lunch Special" callout right
  after the hero (cross-references back to `/specials#hibachi-for-two`)

**Visual treatment** (matches Happy Hour design language for consistency):
- Dark `from-charcoal via-deep-indigo to-charcoal` gradient background
  with low-opacity hibachi-grill image overlay
- 7xl-8xl gold `$35` price as the visual anchor
- **Schedule chip** below the price — clock icon + "Lunch only • Mon–Fri •
  11:00 AM – 2:00 PM" in a frosted-glass pill with gold border
- Five-protein selection grid (2 cols mobile / 3 sm / 5 lg)
- Two-column "Includes" + "Optional Upgrade" callout pair (gold ring on
  the upgrade card matches the "Most Popular" treatment used for sake)
- Twin CTAs: location-specific Call button (gold) + Reserve a Table
- Discreet legal disclaimer below CTAs explicitly stating lunch-only window

**Shared data:** `hibachiForTwoProteins` const is defined inline in each of
the three /specials pages (not yet extracted to a shared module). When the
protein list changes, update all three. If this list grows, factor it into
`src/data/specials.ts`.

**Schema notes:**
- The `Offer` uses `eligibleQuantity: { value: 2, unitText: "guests" }`
  to make it clear this is a two-person price, not a single-item price.
- The lunch-only window is encoded three ways in JSON-LD for maximum
  search-engine compatibility:
  1. In the offer `name` ("Lunch Hibachi for Two")
  2. In the offer `description`
  3. As `availabilityStarts: "11:00"` / `availabilityEnds: "14:00"` plus a
     nested `availableAtOrFrom.openingHoursSpecification` listing
     Monday–Friday — Google Search uses the OpeningHoursSpecification
     for time-restricted offer rich results.
- Each page's URL anchor is `#hibachi-for-two` for deep-linking from
  the quick-nav card and external campaigns.

When the special ends, search for `hibachi-for-two` and remove the section,
the schema offer, and the FAQ entries — also delete the quick-nav card on
`/specials`, the lunch-specials callout, and the metadata description
references on all four pages.

## 2026-05-03 — Happy Hour pricing restored (exception to no-price policy)

After the site-wide price strip below, **Happy Hour pricing was restored**
because it's a promotional draw (a price IS the marketing message here).
The canonical numbers and copy live in seven pages:

- `/happy-hour` (hero chips + spotlight cards + FAQ + EventSchema offers)
- `/happy-hour/specials` (specials array + drink categories + schedule)
- `/specials` (AggregateOffer schema + specials category card + Happy Hour
  section heading + FAQ)
- `/frisco/specials` (per-location items list)
- `/lewisville/specials` (per-location items list)
- `/bar` (bar pricing chips + FAQ)
- `/blog/best-happy-hour-frisco-tx` (metadata + FAQ + comparison table
  + 3-tile pricing card)

**Canonical Happy Hour copy (use exactly):**
- Mon–Fri • 5:00 to 6:30 PM
- **$4** Japanese Draft Beer (Sapporo, Asahi, Kirin)
- **$5** Small Hot Sake (house sake served warm in a tokkuri)
- **$6** Wine (curated by the glass)

If the prices change, update all seven pages above (one grep for `\$4|\$5|\$6`
inside the happy-hour-related files surfaces the spots) and remember to
update the schema `Offer` objects too — Google uses them for rich results.

The "Most Popular" gold ring on the sake card is intentional visual
hierarchy — it's the highest-margin item and the most-searched of the
three.

## 2026-05-03 — Site-wide pricing removal + menu redesign + ramune image

### What changed

1. **Removed all visible & schema pricing across the site.** Per business decision
   (matches the live site's clean look), prices are no longer shown on any
   menu item, category landing, blog, or specials page.
   - Stripped `offers: { "@type": "Offer", "price": "...", "priceCurrency": "USD" }`
     blocks from MenuItem JSON-LD.
   - Removed visible `<span ... text-accent-red ...>$XX.XX</span>` price
     spans from category pages (sushi-rolls, hibachi, sashimi, appetizers,
     cocktails) at both Frisco and Lewisville.
   - Rewrote FAQ answers and metadata descriptions to drop quoted dollar
     amounts (e.g., "Ribeye ($35.95) is priced higher than NY Strip ($32.95)"
     became "Ribeye is priced higher than NY Strip").
   - Cleared empty schema `"price"` keys to `""` where they remained.
   - Cleared inline JSX dollar elements on `/happy-hour` and `/specials`
     (e.g., `<p>$4</p>` removed; descriptive text/headings retained).
   - Totals: 263 files modified, 210 offers blocks + 94 price spans + 92
     parenthetical prices + 517 inline dollar amounts removed across
     two passes.

2. **Redesigned `/frisco/menu` and `/lewisville/menu`.**
   - Replaced the 4-card BentoGrid (hibachi/sushi/lunch/drinks) with a
     simple 3-button "Menus" section: Lunch, Dinner, Sushi — each linking
     to the per-location PDF in `/public/menus/{frisco,lewisville}/`.
   - Matches the layout the live jinbeh.com/frisco/ page uses (clean PDF
     buttons, no per-item lists).
   - PDFs already existed at `/public/menus/{location}/{lunch,dinner,sushi}-menu.pdf`.

3. **Hardened the ramune-soda-guide page.**
   - Added `sizes="100vw"` to the hero `<Image fill>` so Next.js serves a
     correctly-sized image (without it, the optimizer may pick a too-small
     variant and the picture appears missing/blurry).
   - Set `bg-charcoal` on the hero `<section>` so there's a visible
     background even if image fetch is delayed.
   - Added a second in-body `<figure>` with the ramune image and caption
     so the picture is guaranteed to display somewhere even if the hero
     has any rendering issue.
   - Image source remains `/images/beverages/RamuneSoda.webp`
     (1600×1530 valid WebP, 453KB — verified file integrity is fine).

4. **Bug fix in `src/app/faq/page.tsx`** — `category.title.toLowerCase` was
   missing parens; corrected to `category.title.toLowerCase()`. Caught by
   `tsc --noEmit` while verifying the price-strip changes.

### Tools / scripts

The price-strip work was done with two Python scripts in `outputs/`:

- `strip_prices.py` — round 1: targets JSON-LD `offers` blocks, the
  "text-accent-red" price span pattern, parenthetical prices like
  `(\$16.95)`, and inline dollar amounts inside string literals.
- `strip_prices_round2.py` — round 2: targets schema `Offer` rows on
  `/specials` and `/happy-hour`, JSX elements whose entire content is a
  price (`<p>$4</p>`), inline body-text dollars, and lingering
  schema `"price"` keys.

Both write JSON reports (`price-strip-report.json`,
`price-strip-round2.json`) detailing every file touched.

### Ground truth checks

- `npx tsc --noEmit -p tsconfig.json` passes after the strip + faq fix.
- `grep -rE '\$\d+(\.\d+)?' src/app src/data` returns no matches outside
  `src/data/happyHour.ts` (kept — internal data file, not displayed).
- `grep -rE '"price"\s*:\s*"[\d.]+"' src/app src/data` returns no
  populated price values.

### Notes for future contributors

- **Don't put prices in the codebase.** Menus live as PDFs in
  `/public/menus/...`. If pricing changes, update the PDFs.
- **Never re-add `offers` to MenuItem JSON-LD.** The site's policy is no
  visible or structured pricing — drives traffic to the PDF/in-house
  experience rather than competing on quoted price.
- **Hero `<Image fill>` always needs a `sizes` prop.** Otherwise Next.js
  warns and may serve a tiny variant that looks broken.
- **The /happy-hour page describes deals without quoting prices** — keep
  it that way; pricing is meant to be discovered in-store or via the
  PDFs.

---

## VPS CPU 100% incident — n8n task-runner 403 loop (June 16, 2026)

**Symptom:** Hostinger VPS (`srv1144987`, `72.61.15.71`, KVM2 2-vCPU/8GB) pegged.
`top` showed load avg 8–11 and **~90% CPU steal** (hypervisor throttling). The
VM's own user+sys was only ~8%.

**Root cause:** `n8n-n8n-1` (n8n 2.6.4) was burning a full CPU core in an
infinite retry loop, log spamming `Task runner connection attempt failed with
status code 403` every few seconds. The n8n Docker image's task-runner launcher
requires an **explicit** `N8N_RUNNERS_AUTH_TOKEN`. `/opt/n8n/.env` had it
**commented out** (and `N8N_RUNNERS_MODE=internal` set), so the runner was
rejected (403) and retried forever. A plain container restart did NOT fix it —
it's a config bug, not a transient hang. Sustained 100% for days is what almost
certainly tripped Hostinger's fair-use CPU throttle (the 90% steal).

**Fix applied:** Backed up `/opt/n8n/.env` (`.env.bak.20260617-012233`), then set
`N8N_RUNNERS_ENABLED=true` and a fresh `N8N_RUNNERS_AUTH_TOKEN=$(openssl rand -hex 32)`,
and `docker compose up -d --force-recreate n8n`. After: 403 count = 0,
`n8n /healthz` = `{"status":"ok"}`, n8n CPU dropped from ~98% → ~2% of a core.

**Hard-won notes:**
- The n8n image launches a **Python** task runner in internal mode but ships no
  Python 3 → logs "Failed to start Python task runner… Python 3 is missing."
  Benign (the JS broker still starts), but Python Code nodes won't run unless you
  switch to external runner mode.
- `N8N_RUNNERS_ENABLED` is **deprecated** in n8n 2.6.4 (always-on); the
  `AUTH_TOKEN` is the part that actually matters.
- Under heavy CPU steal, `docker stats` and short cgroup samples are unreliable
  (CPU arrives in bursts). Use 15s+ windows or accumulated `cpu.stat usage_usec`.
- The box runs **15 containers on 2 vCPUs** (n8n, 2× jinbeh site, Immich+ML,
  WordPress, EspoCRM, Hermes agent, Remnawave VPN `remnanode`/`rw-core`). Steal
  stayed ~89% even after freeing n8n's core → host-side throttle/contention.
  If steal doesn't lift within ~24h: open a Hostinger ticket and/or trim
  non-essential always-on containers (Remnawave VPN, Immich ML, staging copy).
- Cowork sandbox reaches the VPS via paramiko + `VPS_PASSWORD` from `log.env`
  (`root@72.61.15.71`). Keep SSH commands short — auth is slow under steal.

### Efficiency follow-up actions (same session, June 16-17 2026)

After fixing the n8n loop, did an efficiency sweep + remediation:
- **Memory/disk/logs are fine** — 5GB RAM available, no OOM kills, disk 73%
  (27G free), Docker logs already rotated (10m×3 via /etc/docker/daemon.json).
  CPU is the ONLY bottleneck.
- **jinbeh-prod "unhealthy"** is a *symptom*, not a bug — its 5s `node fetch`
  healthcheck times out under CPU starvation, but the site serves 200 (just slow,
  ~1.5s vs normal 0.2s). Self-recovers when steal clears. nginx routing is
  independent of the flag.
- **Stopped + `--restart=no`:** jinbeh-staging, wordpress-zmdr-wordpress-1,
  wordpress-zmdr-db-1 (freed CPU; staging/WP not needed always-on). To re-enable:
  `docker update --restart=always <c> && docker start <c>`.
- **Applied live CPU caps** (`docker update --cpus`, survives restart but NOT a
  compose recreate — fold into compose for permanence): n8n-n8n-1=1.0,
  remnanode=0.5, immich-ml=0.75, immich-server=0.5. These prevent any single
  container from monopolizing the 2 cores again (root enabler of the n8n outage).
- **Steal stayed ~85-91% even after all the above** → confirmed host-side
  (Hostinger fair-use throttle or noisy neighbor), NOT our workload. Load fell
  28→12 as demand dropped, but steal didn't budge.
- **Installed VPS-side monitor:** `/usr/local/bin/jinbeh-cpu-monitor.sh` + cron
  `*/10 * * * *` → logs to `/var/log/jinbeh-cpu-monitor.log`, Slack-alerts
  (#all-jinbeh-inc, max 1/hr) when steal ≥ 40%.
- **Hostinger ticket drafted:** `HOSTINGER_TICKET_CPU_STEAL.md` (repo root).
- **Recommended optimal footprint for a 2-vCPU box:** keep only business-critical
  (jinbeh-prod + nginx, n8n + postgres, espocrm + db). Move Immich (photos),
  Remnawave VPN node (remnanode/rw-core), and redundant jinbeh copies (staging/
  archive) to a separate box, OR upgrade to a 4-vCPU plan. 15 containers on 2
  vCPUs is the structural overcommit behind the fragility.

### Paused Immich + Remnawave (June 17 2026) — lean to 7 containers

Per owner request, stopped the discretionary stacks so business-critical services
get CPU reliably. Now RUNNING (7): jinbeh-prod, jinbeh-archive, n8n-n8n-1,
n8n-postgres-1, espocrm, espocrm-db, hermes-agent. STOPPED w/ `--restart=no`:
jinbeh-staging, wordpress-zmdr-wordpress-1, wordpress-zmdr-db-1,
immich-uejn-{immich-server,database,immich-machine-learning,redis}-1, remnanode.
- **remnanode gotcha:** `docker stop`/`kill` failed — "container PID 2207 is
  zombie and can not be killed" (image has no init to reap). Fix: kill the worker
  directly on the host: `pkill -9 -f rw-core` (auto-restart already disabled, so
  it doesn't come back; the zombie container then reaps and exits).
- **To bring any back:** `docker update --restart=always <c> && docker start <c>`
  (Immich: start database + redis first, then server + ML).
- **Result:** load 28→~5-8, jinbeh-prod response 1.5s→0.30s, n8n /healthz ok,
  espocrm 200. **BUT steal stayed ~90%** with our CPU use ~10% and load low →
  conclusively host-side (Hostinger throttle/noisy neighbor), not our workload.
  Ticket `HOSTINGER_TICKET_CPU_STEAL.md` + monitor cron are the remaining levers.

### RESOLVED — Hostinger reset the CPU throttle (June 17 2026)

Submitted the CPU-steal request via hPanel → Ask AI (Kodee) chat, VPS category,
asking to check/reset a fair-use CPU throttle + verify host health. **Kodee
confirmed: "I found a CPU restriction on srv1144987 and sent the reset"** —
validating the host-side-throttle diagnosis exactly. Within minutes:
- **CPU steal 89% → 0.0%** (monitor logged 89.3% at 10:40, then 0% after reset).
- **Load avg 28 (peak) → ~2.4.**
- **jinbeh-prod response 1.5s → 0.0146s.** n8n /healthz ok, espocrm 200.
Chat is saved in hPanel → Ask AI → History. Lesson: Hostinger's Kodee chat agent
can directly find AND reset a VPS fair-use CPU throttle — the fastest path when
steal is high but guest CPU use is low. Root trigger was the days-long n8n
task-runner 403 loop pegging a core (fixed first); the throttle was the
after-effect, cleared via the ticket.
