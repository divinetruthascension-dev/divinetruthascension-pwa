#!/data/data/com.termux/files/usr/bin/bash
# Test script for DivineTruthAscension PWA build in Termux

echo "🌀 Cleaning old build..."
rm -rf .next
rm -rf node_modules/.cache

echo "🚀 Running Next.js build..."
npm run build
BUILD_EXIT=$?

if [ $BUILD_EXIT -ne 0 ]; then
  echo "❌ Build failed with exit code $BUILD_EXIT"
  exit $BUILD_EXIT
fi

echo "🔍 Checking for PWA service worker..."
if [ -f "./public/sw.js" ]; then
  echo "✅ Service worker found at ./public/sw.js"
  exit 0
else
  echo "❌ Service worker NOT found"
  exit 1
fi
