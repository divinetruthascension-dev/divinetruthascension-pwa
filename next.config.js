// next.config.js
module.exports = {
  async rewrites() {
    return [
      // 1. User Profile Rewrites:
      // Maps /profile/username to /users/[username]
      {
        source: '/profile/:username',
        destination: '/users/:username',
      },
      // 2. Post Rewrites:
      // Maps /post/post-id to /posts/[id]
      {
        source: '/post/:id',
        destination: '/posts/:id',
      },
      // 3. API Proxy for external services (e.g., social login providers):
      // Proxies requests to /api/auth/* to an external authentication service
      {
        source: '/api/auth/:path*',
        destination: 'https://your-auth-service.com/api/auth/:path*',
      },
      // 4. Content Delivery Network (CDN) Proxy (if needed):
      // Proxies requests to /assets/* to a CDN URL
      {
        source: '/assets/:path*',
        destination: 'https://cdn.your-platform.com/assets/:path*',
      },
    ];
  },
};
