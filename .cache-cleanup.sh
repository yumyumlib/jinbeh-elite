#!/bin/bash
# VPS cache cleanup — preserves /public/videos and /public/images.
# Targets only Docker build cache and unused images > 24h old.
set -e
echo "--- BEFORE ---"
df -h / | tail -2
echo
docker system df 2>&1 | head -6
echo
echo "--- Pruning unused Docker images > 24h old ---"
docker image prune -af --filter "until=24h" 2>&1 | tail -3
echo
echo "--- Pruning Docker build cache > 24h old ---"
docker builder prune -af --filter "until=24h" 2>&1 | tail -3
echo
echo "--- npm cache verify ---"
npm cache verify 2>&1 | tail -3
echo
echo "--- AFTER ---"
df -h / | tail -2
echo
docker system df 2>&1 | head -6
echo
echo "--- Confirm /public preserved ---"
ls -la /opt/jinbeh-elite/public/videos/jinbeh-frisco-family-hibachi-dinner-as-seen-on-dfw-moms.mp4
echo "Total videos in /public/videos/:"
ls /opt/jinbeh-elite/public/videos/ | wc -l
echo "Total images in /public/images/:"
find /opt/jinbeh-elite/public/images/ -type f 2>/dev/null | wc -l
