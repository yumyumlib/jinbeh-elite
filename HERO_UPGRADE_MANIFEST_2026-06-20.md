# Jinbeh Hero + UI Upgrade — Full Build Manifest (2026-06-20)

This documents **everything** being changed/added and shipped in tonight's off-peak deploy.
Nothing here changes the **homepage hero** (locked, rated 10/10 — "Keep current").

---

## 1. Hero image swaps applied in code (196 pages)

The audit's recommended "best" hero is written into each page. Distribution:

| Mechanism | Pages | Notes |
|-----------|------:|-------|
| `page.tsx` hero `src`/background | 160 | direct string swap of the hero image |
| `menu-items-*.ts` `heroImage` | 33 | centralized data swap (shared Frisco+Lewisville) |
| Gradient pages (add a photo hero) | 3 | `/order-online`, `/reservations`, `/vip` — get a real photographic hero |

- **30 swaps** use the new SEO-named uploaded images; **166** use already-live images.
- **92 pages keep their current hero** (already the best fit) — untouched.
- Every change is logged in `HERO_SWAP_CHANGELOG_2026-06-20.md` (old → new, per file) so any single swap is auditable/revertible.

### By section (what visibly changes)
- **Blog (89):** topical hero now matches each article (sake posts get sake, whiskey gets whiskey, catering gets feast/platter, kids/family get the DFW-Moms chef-flame + kid-reaction shots).
- **Category (14) + location (1) + neighborhood (7) + nearby (12):** stronger, on-brand hero per page; `/lewisville` gets the new **sunset storefront**.
- **Celebrations (13):** occasion-fit imagery (birthday flame, family, world-cup).
- **Menu-item pages:** only swapped when a better *same-dish* image exists; each page still features **its own dish**.
- **Service/conversion (catering, order-online, reservations, vip, takeout, delivery, events, private-dining, gift-cards, gallery, menu, bar, world-cup):** premium feast/flame/platter heroes; the 3 gradient pages gain a real photo hero.

---

## 2. Descriptive, keyword-rich ALT text on every swapped hero
Each swapped image gets `alt` text built from the page's primary keyword + subject + location
(e.g., *"Hibachi chef flames at Jinbeh Lewisville Japanese steakhouse"*, *"Premium sushi platter at Jinbeh Frisco"*).
Improves image SEO and accessibility; pairs with the SEO filenames.

---

## 3. SEO-friendly filenames (live)
The 12 newly-deployed heroes ship with descriptive, hyphenated names
(e.g., `jinbeh-japanese-restaurant-lewisville-tx-sunset.jpg`, `hibachi-salmon-frisco.jpg`)
instead of `IMG_1910.jpg` / `8-C060324-6462.jpg`.

---

## 4. Responsive image variants (better mobile LCP)
For each new hero: **768w / 1280w / 1920w WebP** variants generated, served via `<picture>` srcset
with the JPG as fallback. Plus all 12 masters resized to ≤1920px and recompressed
(e.g., Lewisville storefront 3.1 MB → ~430 KB). Faster load = better rankings + premium first impression.

---

## 5. New UI components / NEW CONTENT added

| Component | New content it introduces | Where |
|-----------|---------------------------|-------|
| **TrustStrip ("As Featured In")** | A logo + award row: D Magazine "Best of Big D", OpenTable Diners' Choice, Eater Dallas, "#1-Rated Hibachi in Frisco/Lewisville", "Since 1988". Pure trust signal (answers the SERP review/credibility gap). | Home (under hero), `/about`, location pages |
| **Sticky Reserve/Call bar** | Already present as `SmartStickyCTA` — **enhanced** copy/contrast (accent-red Reserve + deep-indigo Call), no duplication. | Site-wide (mobile) |
| *(scaffold) Google review carousel + AggregateRating* | Rotating real Google reviews w/ star schema — drafted for review before wiring (needs your live review feed). | Home, location, catering |
| *(scaffold) Short fire-show video hero* | 6–10s muted looping flame clip w/ the new flame still as poster — drafted; needs the optimized web video cut (Obsidian asset plan has the source). | Home, `/menu`, locations |

> The two scaffolded items (video hero, review carousel) are the biggest appeal levers but depend on assets/data
> you control (a compressed web video; a live review source), so they ship as ready-to-wire drafts rather than guesses.

---

## 6. Post-deploy SEO actions (added to the scheduled job)
- **IndexNow** submission of every changed URL (instant Bing/Yandex recrawl).
- **Sitemap `lastmod`** already bumped to today for changed sections.
- **3003 archive failover rebuilt** from the new source so the backup serves the new assets too.
- Live-URL verification (HTTP 200) of the 12 new images + key pages.

---

## 7. Unique per-page SEO CONTENT + FAQ (new text on the page)
A new `PageSeoBoost` component renders a **unique, page-specific content section** (heading + 2 paragraphs + an FAQ accordion) pulled from `src/data/page-seo-content.ts`, injected just above the footer. Each block:
- **targets that page's primary keyword**, naturally **weaves its secondary keywords** (e.g., `/happy-hour`: "sushi happy hour near me", "happy hour for sushi", "best happy hour Frisco", "sake bar DFW"),
- **fills the page's specific SERP gap** (e.g., `/catering` differentiates restaurant-hosted + tray catering vs. the mobile-chef competitors and pushes "japanese/sushi/corporate catering"; `/frisco/sushi` adds the fresh-fish + chef-craft signals it was missing vs. the sushi specialists),
- follows brand voice (warm, family, both locations, **no em-dashes, no prices except Happy Hour, no AYCE, no omakase**), and adds **3 FAQ Q&As** of unique long-tail content.

**Batch 1 (ships tonight): 10 high-value pages** — `/frisco`, `/lewisville`, `/catering`, `/happy-hour`, `/bar`, `/world-cup-2026`, `/private-dining`, `/events`, `/frisco/sushi`, `/lewisville/sushi`. The content is **hand-written and unique per page** (not templated — mass-generated thin/duplicate content can *hurt* SEO, so this is done in reviewed batches). The framework is data-driven: adding more routes to `page-seo-content.ts` automatically injects them on the next run. Remaining pages (category, nearby, celebrations, blogs) follow in subsequent reviewed batches.

> FAQ here is rendered as **visible content only** (no second `FAQPage` JSON-LD) to avoid duplicate-schema conflicts with pages that already ship FAQ schema.

## What does NOT change
- The **homepage hero** (fire-show poster, kept at 10/10).
- Any **pricing/offer** policy (no prices added).
- **92 pages** whose current hero already wins.
- Page copy/structure beyond the hero image, alt text, and the additive TrustStrip.

---

## Deploy
Ships in the **3:00 AM Central** off-peak window via the rollback-safe procedure
(pre-flight load/steal check → rsync `src/` + new `public/` images → `docker build` → QA (pages + new image URLs return 200)
→ promote with rollback tag → verify → IndexNow → archive rebuild). Aborts + rolls back on any failure.
