// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,

  webpack: (config) => {
    // ❌ Disable Webpack cache (avoids snapshot errors in Termux/Android)
    config.cache = false;
    return config;
  },
});
