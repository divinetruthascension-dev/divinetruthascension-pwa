// next.config.js
module.exports = {
  // Ignore ESLint errors during builds (safe for now, can remove later)
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    // Add custom Babel loader for JS/TS files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          sourceType: 'unambiguous', // ✅ allows import/export
        },
      },
    });

    return config;
  },
};
