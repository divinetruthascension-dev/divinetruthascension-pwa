// check-env.js

const isAndroid = process.platform === "android" || process.arch === "arm64";

console.log("🔍 Build Environment Check:");
console.log("---------------------------");
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);

if (isAndroid) {
  console.log("⚠️ Running on Termux (Android/ARM64) → Using Babel instead of SWC.");
} else {
  console.log("✅ Non-Android platform → Using SWC (faster builds).");
}
