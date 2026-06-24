# GSC "Not Indexed" Analysis & Fixes — June 23, 2026

Property: `sc-domain:jinbeh.com` · Report data last updated by Google **6/11/26**
(12 days stale at time of analysis).

## TL;DR

The "120 not indexed" is **not 120 broken pages.** It is:

- **~47 pages that are working as intended or self-clearing** (intentional
  redirects, correct canonicals, spam/legacy 404s that already redirect in code,
  one transient 5xx). No action needed.
- **~70 thin/templated pages** that Google has discovered but not yet crawled or
  has judged too thin to index. This is a **crawl-budget + site-authority**
  situation, not a technical defect. The site's content-uniqueness work
  (nightly PageSeoBoost batches) is already largely deployed; these pages mostly
  need Google to **re-crawl**.

Indexed is **311 and trending up** (Performance shows 1,910 clicks with a clear
upward spike Jun 16–20), so the overall trajectory is healthy.

## The 120, broken down by reason

| Reason | Count | Source | What it actually is | Action |
|---|---|---|---|---|
| Discovered – currently not indexed | 60 | Google | Thin/templated pages, **all "Last crawled: N/A" (never crawled)** | Crawl-budget nudge |
| Not found (404) | 21 | Website | ~14 pharma/WP spam (correct 404) + 6 already-redirected legacy URLs (stale) + 1 old PDF (already redirected) | Mostly none |
| Page with redirect | 18 | Website | Intentional redirects (www, trailing-slash, /home, legacy WP) | None (by design) |
| Crawled – currently not indexed | 13 | Google | Thin/templated pages crawled & deferred + 3 non-page assets | Content + crawl |
| Alternate page w/ proper canonical | 7 | Website | Pages correctly pointing at a canonical | None (by design) |
| Server error (5xx) | 1 | Website | Transient; nginx failover already deployed | Validate |

### Discovered – currently not indexed (the 60)
All show **Last crawled: N/A** — Google knows the URL (from the sitemap) but has
never spent crawl budget to fetch it. Composition:
- **17 FAQ** `/faq/[slug]` pages
- **20 menu** item/category pages (9 Frisco + 11 Lewisville)
- **16 blog** posts (incl. the thin taxonomy page `/blog/category/cuisine`)
- **4 celebrations** (`corporate-events`, `date-night`, `rehearsal-dinner`, `world-cup`)
- **3 standalone** (`/careers`, `/specials`, `/takeout`)

### Not found (404) (the 21)
Overwhelmingly junk that *should* 404: `…/wp-content/.../pharmacy/*.html`,
`/main/?page_id=*`, `/wp-*.php`, `?p=114`. The handful of "real-looking" ones are
**already redirected in `next.config.ts`** (verified) and are just stale Google
records: `/families`, `/main/*`, `/blog/types-of-sushi-rolls`,
`/blog/what-is-hibachi`, `/lewisville.htm`, the old Lewisville lunch PDF.
One special case below.

### Crawled – currently not indexed (the 13)
Same thin/templated pages (menu items, category pages, 2 FAQ, `/frisco/starwood`,
1 blog) **plus 3 non-page assets** Google shouldn't really index anyway:
`/sitemap.xml`, a `_next/static` `.woff2` font file, and a `.pdf`.

## Root cause (verified, not assumed)

1. **The report is stale.** Live-tested examples prove the deployed site is ahead
   of Google's 6/11 snapshot:
   - `/celebrations/world-cup` — listed in "Discovered" but is **already indexed**.
   - `/faq/how-much-does-hibachi-cost-at-jinbeh` — listed as 404 (last crawl May 16)
     but a **live test returns "URL is available to Google / can be indexed."**
   Many of the 120 will simply fall off when Google re-crawls.

2. **The sitemap is healthy and complete.** Live `sitemap.xml` = ~375 URLs and
   contains every page checked (`/specials`, `/takeout`, `/careers`,
   `/lewisville/hibachi`, `/frisco/appetizers`, FAQ pages). GSC Sitemaps:
   `sitemap.xml` = Success/373 pages, `sitemap-priority.xml` = Success/60 pages.
   The per-URL "No referring sitemaps detected" messages are **Google-side
   association lag, not a missing-sitemap bug.**

3. **The remaining real lever is crawl budget + authority.** On a modest-authority
   site with ~276 programmatic URLs, Google rations crawl and defers thin/
   duplicative pages. The fixes are content uniqueness (mostly already shipped),
   internal linking, and re-crawl nudges — and ultimately Google's call.

## Actions taken this session (in GSC, no deploy needed)

- **Resubmitted `sitemap.xml`** → triggers a fresh fetch of all 373 URLs.
- **Requested indexing (priority crawl queue)** for 6 high-value never-crawled
  pages: `/specials`, `/takeout`, `/lewisville/hibachi`, `/frisco/appetizers`,
  `/celebrations/corporate-events`, `/faq/is-frisco-or-lewisville-better`.
- **Verified** the live sitemap contents and the stale-data examples above.

## Recommendations / open items

**Brand-policy flag (do before indexing it):**
`/faq/how-much-does-hibachi-cost-at-jinbeh` is live and indexable **but its answer
contains `$` price figures** ($25–$50, $35, $4/$5/$6), which violates the
documented no-price policy (only Happy Hour + Hibachi-for-Two, written as words).
Recommend rewriting it price-compliant (keeps the "jinbeh hibachi price" keyword)
**or** 301-redirecting it to `/specials`. It was intentionally NOT submitted for
indexing to avoid pushing a non-compliant page into the index.

**For the next off-peak deploy (low risk, optional):**
- Strengthen internal links to FAQ `/faq/[slug]` pages — Google reports
  "no referring page" for them, so the existing hub links aren't carrying weight.
- Consider `noindex` on `/blog/category/*` taxonomy pages (e.g.
  `/blog/category/cuisine`) — thin and competes for crawl budget.

**GSC housekeeping:**
- Remove the dead `sitemap_index.xml` (2024 WordPress, "Couldn't fetch") from the
  Sitemaps list to stop recurring error noise.
- In ~1–2 weeks, re-check Page Indexing — the counts should drop materially as the
  re-crawl works through the stale 404s and never-crawled pages.

**No-action buckets (working as intended):** the 18 redirects, 7 alternate-canonical,
and ~14 spam 404s. "Validate Fix" on redirect/canonical buckets will always
"fail" by design and should not be chased.
