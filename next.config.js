
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Needed because Netlify static export doesn’t support Next.js Image Optimization
  images: { 
    unoptimized: true, 
  },

  // Ensures all pages get a trailing slash (/about/ instead of /about)
  trailingSlash: true,
};

module.exports = nextConfig;
