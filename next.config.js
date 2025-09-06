/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // ✅ force Babel instead of SWC

  async rewrites() {
    return [
      { source: '/profile/:username', destination: '/users/:username' },
      { source: '/post/:id', destination: '/posts/:id' },
      { source: '/api/auth/:path*', destination: 'https://external-auth-service.com/:path*' },
      { source: '/spiritual/:path*', destination: '/content/:path*' },
    ];
  },

  async redirects() {
    return [
      { source: '/old-profile/:username', destination: '/profile/:username', permanent: true },
      { source: '/old-post/:id', destination: '/post/:id', permanent: true },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          sourceType: 'module',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
