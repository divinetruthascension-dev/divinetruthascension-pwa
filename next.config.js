/** @type {import('next').NextConfig} */

const isAndroid = process.platform === "android" || process.arch === "arm64";

if (isAndroid) {
  console.log("⚠️ Running on Termux (Android/ARM64) → Using Babel fallback.");
} else {
  console.log("✅ Using SWC compiler.");
}

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
