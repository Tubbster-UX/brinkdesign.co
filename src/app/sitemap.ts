import { MetadataRoute } from 'next';
import { reader } from '@/lib/reader'; // Import the reader from Keystatic
import fs from 'fs';
import path from 'path';

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

  // Recursive function to get all image files from a directory and its subdirectories
  function getAllImageFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getAllImageFiles(filePath));
      } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
        results.push(filePath);
      }
    });
    return results;
  }

  // Get all image files from the public folder and its subfolders
  // const publicFolderPath = path.join(process.cwd(), 'public');
  // const imageFiles = getAllImageFiles(publicFolderPath);

  // Add image URLs to the sitemap
  // imageFiles.forEach((file) => {
  //   const relativePath = path.relative(publicFolderPath, file).replace(/\\/g, '/');
  //   links.push({
  //     url: `https://www.brinkdesign.co/${relativePath}`,
  //     lastModified: new Date(),
  //   });
  // });

  return links;
}