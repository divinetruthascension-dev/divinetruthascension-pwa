// webpack.config.js
const path = require("path");

module.exports = {
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename], // Track webpack config changes
      // You can add other config files here if needed
      // otherConfig: [path.resolve(__dirname, "next.config.js")]
    },
  },
  // You can add more webpack options here if needed
};
