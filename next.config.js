// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public', // Service worker will be generated here
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // disable in dev
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});
