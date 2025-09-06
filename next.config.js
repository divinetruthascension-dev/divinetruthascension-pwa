module.exports = {
  webpack: (config, { isServer }) => {
    // Enables importing ECMAScript modules
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};
