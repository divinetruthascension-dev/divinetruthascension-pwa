/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,

  webpack: (config, { isServer }) => {
    // ✅ Add YAML loader
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "yaml-loader",
    });

    // ✅ Add JSON5 loader
    config.module.rules.push({
      test: /\.json5$/,
      loader: "json5-loader",
      type: "javascript/auto",
    });

    // ✅ Custom alias
    config.resolve.alias["@components"] = require("path").resolve(
      __dirname,
      "components"
    );

    // ✅ Node.js fallbacks for browser
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: require.resolve("path-browserify"),
      };
    }

    return config;
  },
});

module.exports = nextConfig;
