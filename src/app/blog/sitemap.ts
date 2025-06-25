import { MetadataRoute } from 'next';
import { reader } from '@/lib/reader';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await reader.collections.blog.list();
  const now = new Date();

  return blogSlugs.map((slug) => ({
    url: `https://www.brinkdesign.co/blog/${slug}`,
    lastModified: now,
  }));
}
