import { MetadataRoute } from 'next';

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: 'https://www.brinkdesign.co/sitemap.xml', lastModified: now },
    { url: 'https://www.brinkdesign.co/sitemap-blog.xml', lastModified: now },
    { url: 'https://www.brinkdesign.co/sitemap-projects.xml', lastModified: now },
    { url: 'https://www.brinkdesign.co/sitemap-images.xml', lastModified: now },
  ];
}
