#!/bin/bash
# generate-webp.sh
# Walks public/images/ and creates a sibling .webp for every .jpg/.jpeg/.png
# Skips files that already have an up-to-date .webp neighbor.
#
# Requires: cwebp (Google) — install with `brew install webp` on macOS.
# Usage: bash scripts/generate-webp.sh
#
# This script is the safe, deploy-time path to WebP delivery while
# next.config.ts has `images.unoptimized: true` (kept on due to a
# Next.js 16 + Turbopack standalone optimizer bug). When the upstream
# bug is fixed, set unoptimized: false and Next/Image will handle
# format negotiation automatically — at which point this script
# becomes optional.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
IMAGE_ROOT="$ROOT_DIR/public/images"
QUALITY=82
COUNT_NEW=0
COUNT_SKIP=0
COUNT_FAIL=0

if ! command -v cwebp >/dev/null 2>&1; then
  echo "ERROR: cwebp not found. Install with: brew install webp" >&2
  exit 1
fi

echo "Generating WebP siblings in: $IMAGE_ROOT"
echo "Quality: $QUALITY"
echo

while IFS= read -r -d '' src; do
  webp="${src%.*}.webp"
  if [ -f "$webp" ] && [ "$webp" -nt "$src" ]; then
    COUNT_SKIP=$((COUNT_SKIP+1))
    continue
  fi
  if cwebp -quiet -q "$QUALITY" "$src" -o "$webp" 2>/dev/null; then
    COUNT_NEW=$((COUNT_NEW+1))
    if [ $((COUNT_NEW % 25)) -eq 0 ]; then
      echo "  ... $COUNT_NEW images converted"
    fi
  else
    COUNT_FAIL=$((COUNT_FAIL+1))
    echo "  FAILED: $src" >&2
  fi
done < <(find "$IMAGE_ROOT" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

echo
echo "Done."
echo "  New WebP files:   $COUNT_NEW"
echo "  Up-to-date skips: $COUNT_SKIP"
echo "  Failures:         $COUNT_FAIL"
