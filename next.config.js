/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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

  // 🔧 Webpack config override
  webpack(config) {
    config.module.rules.push({
      test: /\.js$/, // apply to .js files
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          sourceType: 'module', // ✅ treat files as ES modules
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
