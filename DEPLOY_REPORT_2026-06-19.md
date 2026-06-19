# Deploy Report — 2026-06-19 (unattended off-peak SEO/schema deploy)

**Outcome: ✅ DEPLOYED successfully.** The staged 2026-06-18 SEO/schema changes are
now live on production (`jinbeh-prod`, image `jinbeh-elite:latest`). No rollback was
needed. Prod served HTTP 200 on every checked page before and after promotion.

Run by the `jinbeh-seo-deploy-4am` scheduled task (executed ~09:01–09:14 UTC on the
VPS clock). Conservative, abort-on-any-failure procedure followed end to end.

## What was deployed
Working-tree changes from 2026-06-18 (ESLint + tsc clean):
- `src/components/schema/AllSchemas.tsx` — `amenityFeature`, `areaServed`, `@id`,
  `menu`/`hasMenu`, `hasMap`, `sameAs` on both location Restaurant schemas; enriched
  `MenuSchema` (url, inLanguage, Sashimi section, suitableForDiet); **12 real Google
  Review objects** (6 Frisco + 6 Lewisville).
- `src/app/frisco/page.tsx` + `src/app/lewisville/page.tsx` — OpenGraph images +
  Twitter `summary_large_image` cards.
- `.dockerignore` — excludes `public/images/catalog-originals` + `public/images/*.tar*`
  (the deploy-speed fix).
- `public/images/celebrations/world-cup-watch-party.webp` — new generated WebP.

## STEP 0 — Pre-flight safety gate: PASSED
Measured on the VPS at deploy time:
- **CPU steal: 0.0%** (threshold: abort if > 15%) — Hostinger throttle is NOT active.
- **1-min load average: 0.03** (threshold: abort if > 8).
- **Free disk on `/`: 38 GB** (threshold: abort if < 8 GB).

All three well within limits — the box was idle and healthy (load 0.03, uptime 11d).

## STEP 1 — Staging: DONE
- Local `git commit` could **not** be made: a stale `.git/index.lock` exists in the
  local repo that the sandbox lacks permission to remove (`Operation not permitted`).
  This is non-blocking — the deploy rsyncs the working tree, which contains all the
  correct changes. **Follow-up: remove `.git/index.lock` locally and commit for
  history** (the changes are otherwise un-committed in the local repo).
- Throwaway ed25519 key installed on the VPS for rsync/scp, **removed at the end
  (0 remaining, verified)**.
- `rsync -az --delete` of `src/` only (public never rsynced). scp of `.dockerignore`
  and the world-cup webp.
- VPS verification after staging: `amenityFeature=2`, `"@type": "Review"=12`,
  `.dockerignore` catalog exclusion present, webp = 45032 bytes. All correct.

## STEP 2 — Build candidate image: SUCCESS
- `docker build -t jinbeh-elite:candidate .` run in background with logging.
- **Build context transfer was fast** (~40s vs ~20 min historically) — the
  `.dockerignore` slimming worked: context dropped by the excluded ~440 MB.
- Phase timings: npm ci 57.7s → compile 101s → TypeScript 74s (clean) → page data +
  static generation (~48s, all 396 pages) → export/unpack 175s. Total ≈ 8–9 min.
- **Load stayed low throughout (peak ≈ 2.7, idle ≈ 0.6–1.5)** — never near the ~12
  kill threshold. No abort needed.
- **Resulting image: `jinbeh-elite:candidate` = 4.33 GB** — less than half the old
  `latest` (10.2 GB), thanks to the .dockerignore change.

## STEP 3 — QA on temp container (`jinbeh-cand`, port 3009): PASSED
- `/`, `/frisco`, `/lewisville`, `/menu` → all **200**.
- `amenityFeature` present on /frisco and /lewisville; `"@type":"Review"` present on
  /frisco and /lewisville; `areaServed` present on /frisco. Temp container removed.

## STEP 4 — Promote (zero-downtime style): DONE
- Rollback snapshot created: **`jinbeh-elite:rollback-20260619-0913-pre-seo`** (10.2 GB,
  the prior prod image — preserved, not pruned).
- `jinbeh-elite:candidate` → `jinbeh-elite:latest`.
- `jinbeh-prod` recreated: `docker run -d --name jinbeh-prod --restart unless-stopped
  -p 0.0.0.0:3002:3000 jinbeh-elite:latest`.

## STEP 5 — Live verification: PASSED (no rollback needed)
- `127.0.0.1:3002` `/`, `/frisco`, `/lewisville`, `/menu` → all **200**.
- `amenityFeature` renders on /frisco; `"@type":"Review"` renders on /lewisville.
- Container status: **Up, healthy, image `jinbeh-elite:latest`.**

## STEP 6 — Cleanup: DONE
- Throwaway SSH key removed from `/root/.ssh/authorized_keys` (0 remaining, verified).
- No images pruned (rollback image kept). Disk after deploy: **27 GB free**.

## Rollback procedure (if a problem surfaces later)
```
docker rm -f jinbeh-prod && docker run -d --name jinbeh-prod --restart unless-stopped \
  -p 0.0.0.0:3002:3000 jinbeh-elite:rollback-20260619-0913-pre-seo
```
Confirm 200 on `127.0.0.1:3002/` afterward.

## Manual follow-ups for the user
1. **Google Rich Results Test** on https://jinbeh.com/frisco and /lewisville to confirm
   the Restaurant + Review (and amenityFeature/areaServed) schema parses cleanly.
2. **Resubmit `sitemap.xml`** in Google Search Console to nudge a re-crawl.
3. **Archive / 3003 failover container was NOT rebuilt** — it still serves the prior
   (pre-this-deploy) content. Rebuild it if you want the failover to match live.
4. **Remove the stale local `.git/index.lock`** and commit the now-deployed changes to
   local git history (the VPS has the code; local history does not yet).
5. `docker-compose.yml` and `CLAUDE.md` were modified locally but are intentionally
   NOT part of this deploy (prod runs as a manual `docker run`, not compose).
