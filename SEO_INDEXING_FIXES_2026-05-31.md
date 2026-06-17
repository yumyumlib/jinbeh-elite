# Jinbeh.com — SEO & Indexing Fixes (May 31, 2026)

Triggered by 5 Google Search Console emails received today. **All fixes below are
in the local repo only — nothing has been deployed.** Deploying is the step that
actually makes Google see these changes.

---

## 1. What Google's emails said

| Time | Property | Issue |
|------|----------|-------|
| 9:25 PM | sc-domain:jinbeh.com | New reasons preventing indexing: *Alternate page with proper canonical tag*; *Duplicate without user-selected canonical* |
| 9:18 PM | https://jinbeh.com/ | Same two reasons |
| 9:25 PM | sc-domain | Pages **in a sitemap**: *Page with redirect* |
| 9:21 PM | https://jinbeh.com/ | Pages **in a sitemap**: *Page with redirect* |
| 2:29 AM | sc-domain | **Unparsable structured data**: "Parsing error: Missing ',' or '}'" |

## 2. What Search Console actually shows

**84 indexed / 331 not indexed.** Reasons for the 331:

- **Discovered – currently not indexed — 263** ← the real problem
- Crawled – currently not indexed — 29
- Page with redirect — 19 (almost all *intentional*: www→apex, http→https,
  trailing-slash, `/home`, `/wp-admin`, `/test`, legacy PDF redirects)
- Not found (404) — 13 (mostly old WordPress pharma-spam pages that *should* 404)
- Alternate page with proper canonical tag — 6
- Duplicate without user-selected canonical — 1

Enhancements: FAQ **55 valid / 12 invalid**, Events 0/1 invalid,
**Unparsable structured data — 1**.

## 3. Root causes found

- **Unparsable JSON-LD** was on `/blog/hibachi-birthday-party-ideas`. The deployed
  page had a `<Link …>` HTML tag injected into a FAQ answer *inside* the JSON-LD;
  the unescaped quotes broke the JSON. The current source is already clean, so a
  deploy fixes it.
- **Sitemap "Page with redirect"** came from 3 legacy blog slugs that 301-redirect
  but were still listed in `blog-posts.json` (and therefore the sitemap + listings).
- **Canonical / duplicate** flags were the same legacy duplicate slugs
  (`best-hibachi-dallas` vs `…-tx`, etc.).
- **Real 404s** worth fixing: `/blog/types-of-sushi-rolls`, `/blog/what-is-hibachi`
  (a dead internal link from `ContextualLinks.tsx`), `/lewisville.htm`.
- **Intermittent HTTP 502s** on the live server under light crawl load — a likely
  major driver of the 263 "Discovered – not indexed."

## 4. Fixes made (code only — not deployed)

1. **`src/data/blog-posts.json`** — removed 3 legacy duplicate posts; repointed all
   `relatedPosts` references to canonical slugs (98 → 95 posts).
2. **`src/app/sitemap.ts`** — added a `redirectedPaths` guard so the sitemap can
   never emit a redirecting URL again.
3. **`next.config.ts`** — added 301s: `/blog/types-of-sushi-rolls` → `/blog/types-of-sushi`,
   `/blog/what-is-hibachi` → `/blog/hibachi-vs-teppanyaki-explained`,
   `/lewisville.htm` → `/lewisville`, `/frisco.htm` → `/frisco`.
4. **13 files** — repointed internal links from legacy → canonical slugs; fixed the
   dead `/blog/what-is-hibachi` link in `ContextualLinks.tsx`.
5. **15 blog pages** — converted fragile raw template-literal JSON-LD to
   `JSON.stringify(object)` (permanently prevents the unparsable-JSON bug).

**Verification:** all 161 changed TS/TSX files parse cleanly; `blog-posts.json`
is valid JSON; no residual links to removed/404 slugs.

## 5. Still to do (your call / not done this session)

1. **Deploy to the VPS** — nothing is live yet. (You chose "fix code only.")
2. After deploy: in GSC, **Validate Fix** on each issue + **resubmit the sitemap**.
3. **Investigate the 502s** (Docker/nginx/Next standalone concurrency on the VPS) —
   biggest lever for the 263 "Discovered – not indexed."
4. **Thin/duplicate programmatic pages** (≈88 frisco/lewisville menu items + ≈80
   PAA `/faq` pages): stronger internal linking + more unique per-page content.
5. **Manual cleanup the sandbox couldn't do** (delete blocked):
   - `rm src/data/blog-posts.json.bak`
   - `rm -rf src/app/blog/{best-hibachi-dallas,sushi-platters-near-me,japanese-restaurants-lewisville}/`
     (dead dirs, already shadowed by 301s and removed from the sitemap)
6. Revisit FAQ (12) + Events (1) structured-data warnings after deploy.
