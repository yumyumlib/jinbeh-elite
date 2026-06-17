#!/bin/bash
# SEO deployment helper — one-shot script to push everything live.
# Run this from your local machine (not the VPS).
# Requires: git remote set, SSH access to VPS, deploy-staging.sh existing on VPS.

set -e

cd "$(dirname "$0")"

echo "==> Step 1/5: Git status"
git status --short

echo ""
echo "==> Step 2/5: Stage SEO additions"
git add public/8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c.txt
git add src/lib/indexnow.ts
git add CLAUDE.md
echo "Staged."

echo ""
echo "==> Step 3/5: Commit"
git commit -m "seo: add IndexNow setup + comprehensive sitemap audit

- Add IndexNow key file at public/8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c.txt
  for Bing/Yandex/Naver/Yep instant URL notifications
- Add src/lib/indexnow.ts helper with submitToIndexNow(urls[]) and
  submitOneToIndexNow(url) — handles batching, dedup, validation
- Document SEO findings in CLAUDE.md: sitemap is incomplete on prod
  (Cloudflare may be serving cached version missing /celebrations/mothers-day),
  Cloudflare Bot Fight Mode likely blocking GSC sitemap fetch,
  4 of 5 critical pages not indexed in Google
- Mother's Day page exists at /celebrations/mothers-day but Google has
  never crawled it; needs deploy + Cloudflare WAF skip rule + IndexNow
  ping before May 10"

echo ""
echo "==> Step 4/5: Push to main"
git push origin main

echo ""
echo "==> Step 5/5: SSH to VPS and run deploy script"
echo "Run this MANUALLY (requires VPS SSH password from log.env):"
echo ""
echo "  ssh root@72.61.15.71"
echo "  cd /opt/jinbeh-elite"
echo "  git pull"
echo "  bash deploy-staging.sh"
echo ""
echo "After deploy completes, verify:"
echo "  1. curl -sI https://jinbeh.com/celebrations/mothers-day | head -1"
echo "     (should be HTTP/2 200)"
echo "  2. curl -s https://jinbeh.com/sitemap.xml | grep mothers-day"
echo "     (should print the mothers-day URL line)"
echo "  3. curl -s https://jinbeh.com/8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c.txt"
echo "     (should print just the key string)"
echo ""
echo "Then in Cloudflare dashboard:"
echo "  - Security > Bots: turn OFF Bot Fight Mode (or add WAF skip for /sitemap.xml)"
echo "  - Caching > Configuration: Purge Cache for /sitemap.xml"
echo ""
echo "Then in Google Search Console:"
echo "  - Sitemaps: remove old failed entries, re-add sitemap.xml"
echo "  - URL Inspection: re-test mothers-day, frisco, lewisville, menu"
echo ""
echo "Finally, run the IndexNow batch:"
echo "  bash outputs/indexnow_submit.sh"
