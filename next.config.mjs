/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      // blog sitemap
      { source: '/sitemap-blog.xml',      destination: '/blog/sitemap.xml' },
      // projects sitemap
      { source: '/sitemap-projects.xml',  destination: '/projects/sitemap.xml' },
      // images sitemap
      { source: '/sitemap-images.xml',    destination: '/images/sitemap.xml' },
    ];
  },
};

export default nextConfig;
