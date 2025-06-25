import { MetadataRoute } from 'next';
import { reader } from '@/lib/reader';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectSlugs = await reader.collections.project.list();
  const now = new Date();

  return projectSlugs.map((slug) => ({
    url: `https://www.brinkdesign.co/projects/${slug}`,
    lastModified: now,
  }));
}
