// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    // Ensure ES Modules are treated correctly
    config.module.rules = config.module.rules.map(rule => {
      if (
        rule.test &&
        String(rule.test) === String(/\.(tsx|ts|js|mjs|jsx)$/) &&
        rule.use &&
        rule.use.loader === 'next-babel-loader'
      ) {
        rule.use.options = {
          ...rule.use.options,
          sourceType: 'unambiguous', // allows both CommonJS + ES modules
        };
      }
      return rule;
    });

    return config;
  },
};

module.exports = nextConfig;
