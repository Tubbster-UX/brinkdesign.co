/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/sitemap-blog.xml',      destination: '/blog/sitemap.xml' },
      { source: '/sitemap-projects.xml',  destination: '/projects/sitemap.xml' },
      { source: '/sitemap-images.xml',    destination: '/images/sitemap.xml' },
    ];
  },
};

export default nextConfig;
