#!/bin/bash
# Jinbeh Elite - Staging Deployment Script
# Run this on your VPS to deploy the latest changes

set -e

echo "🚀 Starting Jinbeh Elite Staging Deployment..."

# Navigate to project directory
cd /opt/jinbeh-elite || {
    echo "❌ Could not find project directory"
    exit 1
}

echo "📥 Pulling latest changes from GitHub..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the project..."
npm run build

echo "🐳 Rebuilding Docker container..."
docker compose down 2>/dev/null || true
docker compose up -d --build

echo "✅ Deployment complete!"
echo "🌐 Visit https://staging.jinbeh.com to view the site"
