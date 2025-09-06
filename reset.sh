#!/data/data/com.termux/files/usr/bin/bash

echo "🧹 Cleaning project..."
rm -rf node_modules package-lock.json yarn.lock

echo "📦 Reinstalling dependencies..."
npm install

echo "🚀 Starting dev server..."
npm run dev
