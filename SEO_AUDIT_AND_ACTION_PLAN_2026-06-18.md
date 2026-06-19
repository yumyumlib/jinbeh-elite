# Jinbeh SEO Audit & Action Plan — June 18, 2026

Prepared as an expert local-SEO review of jinbeh.com (Next.js App Router build, 289 pages). This evaluates the current site against 2026 restaurant SEO best practices, identifies the highest-impact gaps, documents the changes already applied in this session, and lays out a prioritized roadmap.

---

## 1. Executive Summary

**The site is already an advanced SEO build** — well ahead of a typical restaurant site. It has a clean metadata system with a title template, per-page canonicals, a 250+ URL sitemap with priorities and lastmod, an image sitemap, an AI-crawler-friendly robots.txt (40+ bots explicitly allowed), Organization/Restaurant/Menu/WebSite/FAQ schema, location landing pages, "nearby city" pages, celebration pages, and 100+ blog posts organized into topic clusters. Google Search Console indexing recovered from **84 → 311 indexed pages** in six weeks.

Because the fundamentals are strong, the highest-leverage work is **not** redoing basics — it's three things:

1. **Closing schema/AEO gaps** so AI answer engines (ChatGPT, Perplexity, Google AI Overviews) and the local Map Pack can read and cite Jinbeh more completely. *(Several applied this session — see §4.)*
2. **Fixing the technical performance blocker** — ~2.5 GB of unoptimized images plus recurring Hostinger CPU-steal are throttling page speed and crawl efficiency, and are the main thing keeping ~120 pages stuck in "Discovered – not indexed."
3. **Off-page local signals** — Google Business Profile completeness, photos, and review velocity, which now feed both the Map Pack and AI recommendations.

---

## 2. Top SEO Keywords (priority targets)

From the consolidated keyword database (434k keywords scored for Jinbeh relevance) and the keyword skill. **Jinbeh does NOT offer all-you-can-eat (AYCE) sushi — never target AYCE terms.**

### Tier 1 — Local money keywords (own these)
| Keyword | Vol | KD | Target page |
|---|--:|--:|---|
| hibachi near me | 368,000 | 55 | `/`, `/frisco`, `/lewisville` |
| japanese food near me | 135,000 | 48 | `/`, location pages |
| best sushi near me | 49,500 | 31 | `/menu`, location pages |
| hibachi frisco | 590 | ~10 | `/frisco`, `/frisco/hibachi` |
| sushi frisco | 1,300 | ~15 | `/frisco/sushi-rolls` |
| hibachi in frisco | 260 | ~5 | `/frisco` |
| sushi lewisville tx | 390 | ~10 | `/lewisville/sushi-rolls` |
| hibachi lewisville | — | low | `/lewisville/hibachi` |
| catering frisco / frisco tx | 320 | 11–12 | `/catering` |

### Tier 1 — Branded (defend, near-zero difficulty)
jinbeh japanese restaurant lewisville (880), jinbeh frisco, jinbeh japanese restaurant, jinbeh lewisville.

### Tier 2 — Occasion & service (high intent)
sushi happy hour (3,600), sushi platter (8,100), sake set (6,600), birthday dinner near me (5,400), thanksgiving catering near me (12,100), christmas dinner near me (2,400), hibachi to go (4,400), sushi catering near me (2,400), private dining frisco.

### Tier 3 — Informational / AEO blog cluster ("Best X for Y" earns 32% of AI citations)
best hibachi in frisco tx, best sushi in lewisville tx, hibachi vs teppanyaki, types of sushi, how to eat sushi, sake pairing guide, gluten-free japanese food frisco, kid-friendly japanese restaurants dfw. *(Most already exist as blog posts — keep them updated and internally linked.)*

**Rule:** always localize core terms with "frisco" / "lewisville," match intent to page type (informational → blog, commercial → service page, transactional → CTA), and pair high-volume head terms with low-KD long-tails.

---

## 3. What 2026 Restaurant SEO Rewards (and how Jinbeh measures up)

| 2026 best practice | Status on Jinbeh |
|---|---|
| Restaurant/LocalBusiness schema w/ hours, geo, priceRange, rating | ✅ Strong (both locations) |
| **Menu schema with dishes + dietary flags** | ⚠️ Partial → **improved this session** |
| **Feature/attribute stacking (`amenityFeature`) for AI matching** | ❌ Missing → **added this session** |
| **`areaServed`, `hasMap`, `menu`, `sameAs` per location** | ❌ Missing → **added this session** |
| AEO "answer blocks" — 29–42 word definitive answer in first 300 words | ❌ Missing → **ready-to-paste in §6** |
| FAQ schema on key pages | ✅ Extensive |
| "Best X for Y" comparative content (top AI-citation format) | ✅ Strong blog cluster |
| AggregateRating present | ✅ Yes (4.2★/752 Frisco, 4.5★/901 Lewisville) |
| Individual Review schema for AI citation | ❌ Missing (needs *real* reviews — see §5) |
| NAP consistency across web | ✅ Consistent in code; verify directories |
| Image/menu readable as HTML (not just PDF) | ✅ HTML menu present |
| **Core Web Vitals / image weight** | ❌ **Critical blocker (~2.5 GB images)** |
| GBP completeness, photos, review velocity | ⚠️ Off-page — see §5 |
| AI-crawler access in robots.txt | ✅ Best-in-class |

Sources: Chowly, Bloom Intelligence, LocalMighty, Junia, Malou (2026 restaurant SEO/AEO guides — full links in §8).

---

## 4. Changes Applied This Session ✅

All changes were syntax- and type-checked (ESLint 0 errors, `tsc` 0 errors on changed files). Files touched: `src/components/schema/AllSchemas.tsx`, `src/app/frisco/page.tsx`, `src/app/lewisville/page.tsx`.

**`AllSchemas.tsx` — global (renders on every page via `layout.tsx`):**
- Added **`amenityFeature`** arrays to both location Restaurant schemas — 10 factual attributes each (hibachi tableside cooking, sushi bar, full bar w/ sake, private dining, catering, takeout, happy hour, kid-friendly, wheelchair accessible, free parking). This is the #1 AEO lever: AI engines match restaurants to multi-attribute queries ("kid-friendly hibachi with a full bar near me") via these features.
- Added **`areaServed`** (7 cities Frisco / 8 cities Lewisville) so each location is associated with its full trade area.
- Added **`@id`, `menu`/`hasMenu`, `hasMap`, `sameAs`** to both location schemas for stronger entity identity and knowledge-graph linkage.
- Enriched **`MenuSchema`**: added `url` + `inLanguage`, a new **Sashimi** section, and accurate **`suitableForDiet`** flags (vegetarian tofu hibachi; gluten-free salmon/tuna sashimi). No prices added (prices were intentionally removed previously to avoid Google validation errors).

**`frisco/page.tsx` & `lewisville/page.tsx`:**
- Added **OpenGraph `images`** (1200×630) and **Twitter `summary_large_image` cards** — these were missing on the two most important local pages, hurting share/CTR appearance.

> Note: I did **not** fabricate Review schema. Individual reviews must be real (Google policy). See §5 for the right way to add them.

---

## 5. Priority Roadmap (remaining, ranked by impact)

### P0 — Unblock & deploy
1. **Resolve Hostinger CPU-steal**, then deploy. Per your progress reports, multiple SEO fixes (May 31 indexing/canonical fixes, June 15 location SEO, World Cup rewrite) plus this session's schema work are **staged but undeployed**. Nothing here helps rankings until it ships. Consider an image CDN / Cloudflare in front of the origin to reduce crawl load on the 2-vCPU box.
2. **Deploy this session's schema + metadata changes** (see §7).

### P1 — Technical performance (biggest ranking + CWV lever)
3. **Optimize the ~2.5 GB image library** → WebP + responsive `srcset`. Target Lighthouse 45 → 75+, load 6–8s → 2–3s. A `scripts/generate-webp.sh` already exists (`npm run images:webp`); run it across `public/images/catalog-originals` and ensure `next/image` is used everywhere. This is also the main fix for the ~120 "Discovered – not indexed" pages (slow pages get crawled less).
4. **Add missing H1 tags** to the ~20 pages flagged in `AUDIT_QUICK_REFERENCE.md`; fix 5 empty `alt` attributes.

### P2 — On-page AEO & content
5. **Add "answer blocks"** to the top pages (ready-to-paste in §6).
6. **Real Review schema** — ✅ Done for **both** locations (6 genuine Google reviews each, covering vegetarian, best-hibachi, birthday, anniversary, allergy-friendly, kid-friendly, sushi, and lunch-value intents). Keep refreshing periodically with newer genuine reviews. This is a top AI-citation signal.
7. **Add 44 missing blog hero images** (`ARTICLE_IMAGE_AUDIT.md`, Tier 1 = 12 posts) — improves CTR and engagement on the cluster content that wins AI citations.
8. **Add `VideoObject` schema** for the Vimeo hero video (name, description, thumbnailUrl, uploadDate) for video rich results.

### P3 — Off-page / local (feeds Map Pack + AI)
9. **Google Business Profile** for both locations: full menu uploaded to GBP, 10–15+ fresh photos each (photos → +42% direction requests), weekly GBP posts, complete attributes (hibachi, reservations, kids, parking, wheelchair).
10. **Review velocity**: systematic ask-for-review flow; respond to every review (sentiment + recency now factor into prominence). You already have ~752 and ~901 reviews — keep them flowing.
11. **NAP/citation audit**: confirm identical Name/Address/Phone on Yelp, TripAdvisor, Apple Maps, Bing Places, and major directories.

---

## 6. Ready-to-Paste AEO "Answer Blocks"

Place a short, factual, entity-first paragraph in the **first 300 words** of each page (these are what AI engines quote). Keep ~30–45 words, lead with the business name, state verifiable facts.

**Homepage / `/`:**
> Jinbeh Japanese Restaurant is a family-owned hibachi and sushi restaurant serving Frisco and Lewisville, Texas since 1988. Jinbeh offers teppanyaki cooked tableside, a fresh sushi bar, sake and Japanese cocktails, private dining, and catering across the DFW metro.

**`/frisco`:**
> Jinbeh Frisco is a Japanese hibachi and sushi restaurant at 2693 Preston Rd, Suite 1040, Frisco, TX 75034, near Stonebriar Centre. It serves teppanyaki cooked tableside, a fresh sushi bar, happy hour, and private dining for birthdays and celebrations. Reservations: (214) 619-1200.

**`/lewisville`:**
> Jinbeh Lewisville is a Japanese hibachi and sushi restaurant at 2440 S Stemmons Fwy #A, Lewisville, TX 75067, off I-35E near Vista Ridge Mall. It serves tableside teppanyaki, fresh sushi and sashimi, sake, happy hour, and catering. Reservations: (214) 488-2224.

**`/menu`:**
> The Jinbeh menu features hibachi entrées (filet mignon, shrimp, chicken, lobster, vegetable & tofu), hand-crafted sushi rolls, fresh sashimi and chirashi, Japanese appetizers, and a full bar with sake, Japanese beer, and cocktails. Gluten-free and vegetarian options are available.

**`/catering`:**
> Jinbeh provides Japanese hibachi and sushi catering for offices, parties, and events in Frisco, Lewisville, and the DFW metro. Catering includes sushi platters, hibachi proteins, and trays for groups, with pickup, delivery, and on-site options.

---

## 7. Deployment Steps (Hostinger)

1. Review the diff locally: `git diff src/components/schema/AllSchemas.tsx src/app/frisco/page.tsx src/app/lewisville/page.tsx`
2. Confirm a clean production build once the VPS has CPU headroom: `npm run build`
3. Commit: `git add -A && git commit -m "SEO: enrich location + menu schema (amenityFeature, areaServed, dietary flags), add OG/Twitter to location pages"`
4. Deploy via your existing pipeline (`deploy.sh` / Docker). **Deploy when CPU-steal is clear** to avoid another stuck build.
5. After deploy, validate live:
   - Google **Rich Results Test** on `/`, `/frisco`, `/lewisville`, `/menu` — confirm Restaurant + Menu parse with the new fields.
   - Resubmit `sitemap.xml` in GSC; use URL Inspection → Request Indexing on `/frisco`, `/lewisville`, `/menu`.
   - Re-run Lighthouse to baseline Core Web Vitals before/after image work.

---

## 8. Sources

- Chowly — Restaurant SEO 2026 Playbook: https://chowly.com/resources/blogs/restaurant-seo-the-complete-guide-to-getting-found-on-google/
- Chowly — 17 Restaurant SEO Tips 2026: https://chowly.com/resources/blogs/17-restaurant-seo-tips-that-actually-work-in-2026-expert-guide/
- Bloom Intelligence — Restaurant SEO/AEO/Voice 2026: https://bloomintelligence.com/restaurant-seo-aeo-voice-2026/
- LocalMighty — AI SEO / AEO / GEO Checklist 2026: https://www.localmighty.com/blog/ai-seo-checklist-aeo-geo-llm-optimization/
- Junia — AI SEO for Restaurants 2026: https://www.junia.ai/blog/ai-seo-for-restaurants
- Malou — Restaurant SEO Trends 2026: https://www.malou.io/en-us/blog/restaurant-seo-trends
- RichMenu — Restaurant Website SEO Checklist 2026: https://richmenu.io/restaurant-website-seo/
- Internal: `jinbeh-seo-keywords` skill; `SEO_INDEXING_FIXES_2026-05-31.md`; `AUDIT_QUICK_REFERENCE.md`; `ARTICLE_IMAGE_AUDIT.md`; `PROGRESS_REPORT_2026-06-15/17/18.md`.
