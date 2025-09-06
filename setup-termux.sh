#!/data/data/com.termux/files/usr/bin/bash
# setup-termux.sh
# Script to configure Next.js in Termux (ARM64)

echo "🚀 Setting up DivineTruthAscension PWA in Termux..."

# 1. Update and install dependencies
pkg update -y && pkg upgrade -y
pkg install -y nodejs git yarn nano

# 2. Go to project folder
cd ~/divinetruthascension-pwa || exit 1

# 3. Clean node_modules and lockfiles
echo "🧹 Cleaning old dependencies..."
rm -rf node_modules package-lock.json yarn.lock

# 4. Reinstall dependencies with Yarn (faster + stable for Termux)
echo "📦 Installing dependencies..."
yarn install || npm install

# 5. Patch next.config.js to disable Webpack cache if not already
if ! grep -q "config.cache = false" next.config.js; then
  echo "⚙️  Patching next.config.js..."
  cat >> next.config.js <<'EOF'

// Termux patch: disable webpack cache
module.exports.webpack = (config) => {
  config.cache = false;
  return config;
};
EOF
fi

# 6. Start dev server
echo "✅ Setup complete. Starting Next.js dev server..."
yarn dev || npm run dev
