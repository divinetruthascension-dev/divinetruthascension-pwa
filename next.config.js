/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Good practice for catching issues

  async rewrites() {
    return [
      // 1. User Profile Rewrites
      { source: '/profile/:username', destination: '/users/:username' },

      // 2. Post Rewrites
      { source: '/post/:id', destination: '/posts/:id' },

      // 3. API Proxy for external services
      { source: '/api/auth/:path*', destination: 'https://external-auth-service.com/:path*' },

      // 4. Spiritual content catch-all
      { source: '/spiritual/:path*', destination: '/content/:path*' },
    ];
  },

  async redirects() {
    return [
      // Redirect old profile paths to new ones
      { source: '/old-profile/:username', destination: '/profile/:username', permanent: true },

      // Redirect old post paths to new ones
      { source: '/old-post/:id', destination: '/post/:id', permanent: true },
    ];
  },
};

module.exports = nextConfig; // ✅ CommonJS export (works by default with Next.js)
