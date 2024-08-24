import { MetadataRoute } from 'next';
import { reader } from '@/lib/reader'; // Import the reader from Keystatic

type Project = {
  slug: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: 'https://www.brinkdesign.co',
      lastModified: new Date(),
    },
    {
      url: 'https://www.brinkdesign.co/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.brinkdesign.co/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://www.brinkdesign.co/#about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.brinkdesign.co/contact',
      lastModified: new Date()
    }
  ];

  const projectSlugs: string[] = await reader.collections.project.list(); // Fetch project slugs from Keystatic

  const projects: Project[] = projectSlugs.map(slug => ({ slug })); // Map slugs to Project objects

  projects.forEach((project) => {
    links.push({
      url: `https://www.brinkdesign.co/projects/${project.slug}`,
      lastModified: new Date(),
    });
  });

  return links;
}