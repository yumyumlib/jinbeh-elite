#!/bin/bash
# deploy.sh — one-command deploy for jinbeh-elite. Run on the VPS in /opt/jinbeh-elite.
#
#   ./deploy.sh            # deploy LIVE: staging + jinbeh.com (prod)   [default]
#   ./deploy.sh staging    # staging only (staging.jinbeh.com)
#
# Pulls main, backs up the current live image for instant rollback, then rebuilds.
# Prod + staging share ONE built image (jinbeh-elite:latest), so it builds once.
set -euo pipefail
cd "$(dirname "$0")"

TARGET="${1:-prod}"

echo "==> Pulling latest from main..."
git pull origin main

# Back up the current live image so a rollback is one command
if docker image inspect jinbeh-elite:latest >/dev/null 2>&1; then
  STAMP="rollback-$(date +%Y%m%d-%H%M%S)"
  docker tag jinbeh-elite:latest "jinbeh-elite:$STAMP"
  echo "==> Backed up current image as jinbeh-elite:$STAMP"
fi

if [ "$TARGET" = "staging" ]; then
  echo "==> Building + deploying STAGING only..."
  docker compose up -d --build
else
  echo "==> Building + deploying STAGING + LIVE (prod)..."
  docker compose --profile prod up -d --build
fi

echo ""
echo "==> Containers:"
docker compose --profile prod ps
echo ""
echo "Staging: https://staging.jinbeh.com"
echo "Live:    https://jinbeh.com"
echo ""
echo "Roll back the live site if needed:"
echo "  docker tag jinbeh-elite:rollback-YYYYMMDD-HHMMSS jinbeh-elite:latest && docker compose --profile prod up -d"
