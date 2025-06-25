import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.brinkdesign.co/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://www.brinkdesign.co/blog/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://www.brinkdesign.co/projects/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://www.brinkdesign.co/images/sitemap.xml',
      lastModified: new Date(),
    },
  ];
}
