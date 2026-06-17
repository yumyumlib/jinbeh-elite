# Jinbeh.com Image SEO Audit & Recommendations

**Date:** May 16, 2026  
**Based on:** Edward Sturm (Episode 146, The Edward Show) + corroborating expert research  
**Scope:** jinbeh-elite-phase1 codebase, /public/images/ directory, src/app/ pages

---

## Part 1: Expert Consensus on Image SEO (Research Summary)

### What Edward Sturm Got Right

All five of Sturm's recommendations are validated by multiple expert sources and Google's own documentation:

1. **Descriptive file names** — Google Search Central explicitly states: "Google uses the file path as well as the file name to help it understand your images." Hyphens are confirmed as the correct separator (not underscores). Sturm's importance rating is arguably *under*-stated.

2. **Compression / WebP** — WebP delivers 25-35% smaller files vs JPEG at equivalent quality. Universal browser support as of 2024. AVIF is the next step (even smaller) but WebP is the safe default. Confirmed by Google, Ahrefs, Moz, and Semrush.

3. **Descriptive alt text** — The single most important image SEO signal per every source. Google's official docs: "Alt text provides useful information that helps search engines understand the image and the context of the page." Also critical for accessibility (WCAG 2.1 AA). Sturm's 100/100 importance rating is consensus.

4. **Original images** — Google's John Mueller has confirmed Google can detect stock photos and prefers unique imagery. For restaurants specifically: Local Falcon research shows "restaurants with quality photos get 42% more direction requests" on Google Business Profile.

5. **Image placement near relevant text** — Google reads surrounding content (within ~100px/same semantic block) to understand image context. The `<figure>` + `<figcaption>` HTML pattern is the strongest signal. Sturm's 40/100 may be slightly low — multiple sources rate this higher for competitive niches.

### What Sturm Missed (Expert Additions)

| Signal | Importance | Source |
|--------|-----------|--------|
| **Visible captions** (`<figcaption>`) | HIGH — "often weighted more heavily than alt text" | pixelseo.ai, Google Search Central |
| **ImageObject structured data** (schema.org) | MEDIUM-HIGH — helps Google Images rich results + AI Overviews | Google, koanthic.com |
| **Responsive sizing** (`width`, `height`, `sizes` attributes) | HIGH — prevents CLS, improves Core Web Vitals | Google Web Vitals, Moz |
| **Image sitemaps** | MEDIUM — tells Google about images it might not discover via crawl | Google Search Central |
| **GBP photo uploads** (Google Business Profile) | CRITICAL for local — 42% more direction requests | Local Falcon, Rio SEO |
| **Geo-tagging EXIF data** for local SEO | MEDIUM for restaurants | foodphoto.ai, brightseotools |
| **Loading performance** (lazy loading, priority hints) | HIGH — Core Web Vitals directly affect ranking | Google |
| **One unique image per page context** | MEDIUM — avoid reusing same file across pages without contextual alt | Multiple sources |
| **AVIF as progressive enhancement** | LOW-MEDIUM now, growing | Chrome/Firefox/Safari all support |

### Does Image SEO Actually Work? (Case Studies)

- **Foot Locker** — 228% increase in image thumbnail organic traffic after image SEO overhaul (Brodie Clark Consulting)
- **Iowa Girl Eats** — Food photography images rank in Google Image search, contributing to 1.5M monthly organic visits
- **Local restaurants** — Google research shows listings with photos receive 42% more direction requests and 35% more website clicks
- **General consensus** — Image SEO has the *highest ROI for visual businesses* (restaurants, food, real estate, fashion) because consumers actively search for food images before choosing a restaurant

### Expert Sources That Add to Sturm

- **Google Search Central** (developers.google.com): The authoritative source. Confirms file names, alt text, surrounding text, structured data, and page context all matter.
- **Brodie Clark** (brodieclark.com): Foot Locker case study proves image thumbnails in SERPs drive massive traffic when properly optimized.
- **Local Falcon** (localfalcon.com): Restaurant-specific research on GBP photos and local rankings.
- **pixelseo.ai**: Emphasizes captions as a signal Google reads with "high confidence" — often better than alt text alone.
- **AltText.ai / GEO research**: Images optimized for AI search (alt text + structured data + captions) appear in AI Overviews and Gemini responses.

### What Could Be Refuted or Nuanced

- **File name importance** — Some SEOs (notably, Barry Schwartz at Search Engine Roundtable) note that Google has gotten much better at understanding images visually. File names are a *tiebreaker* signal, not a primary one. However, they still matter for Google Images specifically.
- **Compression/WebP impact on rankings directly** — WebP doesn't directly boost rankings. It improves page speed (Core Web Vitals), which *indirectly* helps. The ranking lift comes from reduced LCP and better user engagement, not from the format itself.
- **Sturm's "upload unique images per page"** — This is partially right but not always practical. What matters more is *contextual alt text* per instance. If the same image serves different purposes on different pages, yes, customize the alt. But duplicating files isn't required — just customize the markup.

---

## Part 2: Current State of Jinbeh.com Image SEO

### The Good News

| What's Working | Details |
|---------------|---------|
| **WebP adoption** | 1,343 of 1,732 images (78%) are already WebP |
| **Format negotiation** | `next.config.ts` has rewrites that serve WebP to supporting browsers when JPG is requested |
| **100% Next.js `<Image>` component** | Zero native `<img>` tags found — all use the optimized component |
| **Cache headers** | 1-year immutable cache + `Vary: Accept` header configured |
| **All original photography** | Professional photoshoot (C060324 series), real food, real chefs, real interior — zero stock photos |
| **Some descriptive file names** | The `FB-LEW-*` series uses excellent naming: `FB-LEW-Appetizer-Shrimp-Vegetable-Tempura.webp`, `FB-LEW-Roll-Salmon-Umbrella-Presentation.webp` |
| **Rich alt text on major pages** | Homepage, Frisco, Lewisville pages have detailed, contextual alt text (e.g., "Hibachi chef grilling premium proteins and vegetables at Jinbeh teppanyaki table") |
| **Some ImageObject structured data** | 71 schema references to image structured data already exist |
| **Organized directory structure** | Images logically grouped: /food/, /catalog/, /blog/, /celebrations/, /hero/, /exterior/, etc. |

### The Problems

#### CRITICAL: 285 `<Image>` components have NO alt attribute at all

These are on pages like `/gallery`, `/gift-cards`, `/reservations`, `/about`, `/specials`, and many others. Missing alt = invisible to Google Images and screen readers.

**Pages with missing alt text:**
- `/gallery/page.tsx` — 5 images with no alt
- `/gift-cards/page.tsx` — 2 images
- `/reservations/page.tsx` — 2 images
- `/about/page.tsx` — 7 images
- `/specials/page.tsx` — 3 images
- Plus ~266 more across blog posts, celebration pages, location subpages

#### CRITICAL: 30 professional photos have non-descriptive file names

The C060324 photoshoot series (the best photos on the site) are named:
```
1-C060324-6328.webp
7-C060324-6447.webp
14-C060324-6596.webp
```

These tell Google nothing. Compare with the FB-LEW series which are perfect:
```
FB-LEW-Appetizer-Shrimp-Vegetable-Tempura.webp
FB-LEW-Roll-Salmon-Umbrella-Presentation.webp
FB-LEW-Sashimi-Platter-Salmon-Tuna-Yellowtail.webp
```

The C060324 photos are referenced across 31 unique instances in the source code, including blog posts and the gallery.

#### HIGH: 180 JPG references still in source code

While WebP files exist alongside them and the rewrite rule serves WebP to supporting browsers, the **source code references .jpg 180 times vs .webp only 21 times**. This means:
- Non-WebP browsers get the unoptimized JPG
- Google's crawler may or may not negotiate WebP (it usually does, but the canonical URL in the source is the JPG path)
- File name SEO is lost because Google indexes the .jpg URL, not the .webp URL

#### HIGH: 853MB total /public/images/ directory

- `catalog-originals/` alone is 223MB (original photoshoot files that should NOT be in the public directory)
- 60 files exceed 1MB; 30 exceed 5MB
- These originals get deployed to the VPS and slow down `rsync` + Docker builds

#### MEDIUM: Next.js Image Optimization is DISABLED

`next.config.ts` has `images: { unoptimized: true }` — meaning no automatic resizing, no AVIF generation, no responsive image sets. This was done as a workaround for a middleware bug (documented in the config). Without it, images are served at their original resolution regardless of viewport.

#### MEDIUM: Almost no `<figure>` / `<figcaption>` usage

Only 7 instances across the entire site. Captions are a confirmed high-value signal for Google Images. The food gallery, blog posts, and menu pages are all missing this opportunity.

#### LOW-MEDIUM: No image sitemap

The dynamic `sitemap.ts` generates page URLs but doesn't include `<image:image>` extensions. Google recommends image sitemaps for sites with significant visual content.

---

## Part 3: Priority Action Plan

### Priority 1 — Fix Missing Alt Text (285 images) ⏱️ 4-6 hours

**Impact: CRITICAL (100/100 per Sturm + all experts)**  
**Effort: Medium**

Every `<Image>` component without an `alt` prop needs one. The alt text should:
- Describe what's visually in the image
- Include location context (Jinbeh, Frisco, or Lewisville)
- Include the food/experience type (hibachi, sushi, etc.)
- Be unique per image instance

**Script approach:** `grep -rn '<Image' src/app/ | grep -v 'alt='` → fix each. Start with highest-traffic pages first:
1. `/about/page.tsx` (7 missing)
2. `/gallery/page.tsx` (5 missing)  
3. `/specials/page.tsx` (3 missing)
4. All blog posts with hero images
5. Celebration pages

### Priority 2 — Rename C060324 Photos Descriptively ⏱️ 2-3 hours

**Impact: HIGH (file names are a confirmed Google signal)**  
**Effort: Medium (need to rename files + update all source references)**

Create a mapping like:
```
7-C060324-6447.webp  → jinbeh-frisco-teriyaki-steak-hibachi-plate.webp
8-C060324-6462.webp  → jinbeh-frisco-hibachi-steak-overhead-logo-plate.webp
9-C060324-6484.webp  → jinbeh-frisco-shrimp-scallops-hibachi-white-plate.webp
14-C060324-6596.webp → jinbeh-frisco-hibachi-spread-chopsticks-action.webp
```

Pattern: `jinbeh-[location]-[food-description]-[angle/context].webp`

Update all 31 source references. Set up 301 redirects in `next.config.ts` for the old paths in case they're indexed.

### Priority 3 — Switch Source References from .jpg to .webp ⏱️ 1-2 hours

**Impact: MEDIUM-HIGH**  
**Effort: Low (find-and-replace)**

Change all 180 `.jpg` source references to their `.webp` equivalents (which already exist). This ensures Google indexes the WebP URL directly and every browser gets the optimized file without relying on the rewrite rule.

### Priority 4 — Add `<figure>` + `<figcaption>` to Key Pages ⏱️ 3-4 hours

**Impact: MEDIUM-HIGH (captions weighted heavily by Google)**  
**Effort: Medium**

Target pages:
- `/frisco/hibachi/page.tsx` — gallery already exists, wrap in `<figure>` with descriptive captions
- `/gallery/page.tsx` — every image should have a visible caption
- All blog posts with food photography
- `/about/page.tsx` — chef photos deserve named captions

Caption format: "Chef [Name] preparing [dish] at Jinbeh [Location]" or "[Dish name] — [brief description] at Jinbeh Japanese Restaurant"

### Priority 5 — Remove catalog-originals from /public/ ⏱️ 30 minutes

**Impact: MEDIUM (deployment speed + potential accidental serving)**  
**Effort: Low**

Move `/public/images/catalog-originals/` (223MB) to a non-public archive location. These full-resolution originals shouldn't be web-accessible or deployed to the VPS. The optimized `/catalog/` versions are what the site actually uses.

### Priority 6 — Re-enable Next.js Image Optimization ⏱️ 2-4 hours

**Impact: MEDIUM (automatic AVIF, responsive sizing, CLS prevention)**  
**Effort: Medium-High (need to debug the middleware issue)**

The `unoptimized: true` workaround means the site is serving raw files without automatic resizing. Fixing the underlying middleware/host validation issue would unlock:
- Automatic AVIF for supporting browsers (40-50% smaller than WebP)
- Responsive `srcset` generation
- Proper `width`/`height` for CLS scores
- Lazy loading with blur placeholders

### Priority 7 — Add Image Sitemap Extensions ⏱️ 1-2 hours

**Impact: MEDIUM**  
**Effort: Low**

Update `src/app/sitemap.ts` to include `<image:image>` tags for key pages. Focus on pages with unique photography (menu pages, gallery, blog posts, location pages).

### Priority 8 — Implement ImageObject Schema on Food Pages ⏱️ 2-3 hours

**Impact: MEDIUM (helps AI Overviews + Google Images rich results)**  
**Effort: Medium**

While 71 schema references exist, add explicit `ImageObject` schema with:
- `contentUrl` (the image URL)
- `caption` (matching the figcaption)
- `representativeOfPage: true` (for hero images)
- `creator` (for chef/photography attribution)

### Priority 9 — GBP Photo Sync ⏱️ 1-2 hours/month ongoing

**Impact: CRITICAL for local search (42% more direction requests)**  
**Effort: Low but ongoing**

Upload the professional C060324 photos + FB-LEW series to Google Business Profile for both locations. Rename with location-specific descriptive names before uploading. Geo-tag with restaurant coordinates. Upload fresh photos monthly.

---

## Part 4: ROI Estimate

### Is This Worth Doing?

**YES — especially for a restaurant.** Here's why:

1. **"Japanese restaurant Frisco" / "hibachi near me" / "sushi Frisco TX"** — these are high-intent local searches where Google Images results appear in the main SERP (the "Photos" panel). If Jinbeh's images rank there, it's free visibility at the decision point.

2. **Google Business Profile photos** directly correlate with direction requests (the 42% stat). This is the single highest-ROI action.

3. **AI Overviews / Gemini** — Google's AI answers now pull images from well-structured pages. Proper alt text + schema + captions = appearing in AI-generated answers about "best hibachi in Frisco."

4. **The site already has the hard part done** — original professional photography, WebP conversion, Next.js Image component. The remaining work is mostly *labeling* (alt text, file names, captions), which is low-cost/high-return.

### Estimated Timeline

| Priority | Task | Time | Impact |
|----------|------|------|--------|
| 1 | Fix 285 missing alt texts | 4-6 hrs | Critical |
| 2 | Rename C060324 files | 2-3 hrs | High |
| 3 | Switch .jpg refs → .webp | 1-2 hrs | Medium-High |
| 4 | Add figcaptions | 3-4 hrs | Medium-High |
| 5 | Remove catalog-originals | 30 min | Medium |
| 6 | Re-enable image optimization | 2-4 hrs | Medium |
| 7 | Image sitemap | 1-2 hrs | Medium |
| 8 | ImageObject schema | 2-3 hrs | Medium |
| 9 | GBP photo sync | 1-2 hrs/mo | Critical (local) |
| **Total one-time** | | **~17-25 hrs** | |

### Expected Outcomes (conservative)

- **Google Images traffic:** +50-150% within 90 days (based on Foot Locker case study scaled for local)
- **GBP engagement:** +30-42% direction requests (Local Falcon data)
- **Core Web Vitals:** LCP improvement from proper sizing and format serving
- **AI Overview appearances:** Currently zero; should begin appearing within 60 days for "best hibachi Frisco" type queries after schema + caption work

---

## Part 5: Quick Wins (Do Today)

1. **Search Console Image Report** — Check Google Search Console > Performance > Search Type: Image to see what's already getting impressions. This tells you which images are *close* to ranking and just need a nudge.

2. **GBP Upload** — Take the 10 best C060324 photos, rename descriptively, and upload to both GBP locations today. This is the fastest path to measurable local impact.

3. **Fix homepage alt text** — The homepage already has good alt text. Verify it's complete, then move to `/frisco` and `/lewisville` which are the highest-traffic location pages.

---

## Research Sources

- [Google Search Central — Image Best Practices](https://developers.google.com/search/docs/appearance/google-images)
- [Foot Locker Image SEO Case Study — Brodie Clark](https://brodieclark.com/foot-locker-image-seo/)
- [Local Falcon — Photos in Local SEO](https://www.localfalcon.com/blog/everything-you-need-to-know-about-photos-in-local-seo)
- [Image SEO Best Practices — pixelseo.ai](https://pixelseo.ai/blog/image-seo-best-practices/)
- [Image Schema Markup Guide 2026 — koanthic.com](https://koanthic.com/en/image-schema-markup-complete-implementation-guide-2026/)
- [Image SEO for AI Search (GEO) — AltText.ai](https://alttext.ai/blog/geo-tags-image-seo-best-practices-ai-platforms)
- [Image SEO for Restaurants — yummify.ai](https://yummify.ai/blog/image-seo-restaurants-ai-photos-google-maps/)
- [Local SEO Food Photography — foodphoto.ai](https://foodphoto.ai/local-seo-food-photography)
- [seoscore.tools — Complete Image SEO Guide](https://seoscore.tools/blog/image-seo/)
- [digitalapplied.com — Image SEO 2026 Visual Search](https://www.digitalapplied.com/blog/image-seo-2026-visual-search-optimization-guide)
- [The Ultimate Image SEO Best Practices 2025 — alttextify.net](https://alttextify.net/blog/the-ultimate-image-seo-best-practices-in-2025-with-tools-real-stats/)
