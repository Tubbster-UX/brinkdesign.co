import { MetadataRoute } from 'next';
import { reader } from '@/lib/reader';
import fs from 'fs';
import path from 'path';

type Project = {
  slug: string;
};

type Blog = {
  slug: string;
}

function escapeXml(url: string): string {
  return url.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: escapeXml('https://www.brinkdesign.co'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/services'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/projects'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/#about'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/contact'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/service-area'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/faq'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/commercial-av'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/network-cabling'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/security-installation'),
      lastModified: new Date(),
    },
    {
      url: escapeXml('https://www.brinkdesign.co/privacy-policy'),
      lastModified: new Date(),
    },
  ];

  const projectSlugs: string[] = await reader.collections.project.list();
  const blogSlugs: string[] = await reader.collections.blog.list();

  const projects: Project[] = projectSlugs.map(slug => ({ slug }));
  const blogs: Blog[] = blogSlugs.map(slug => ({ slug }));

  blogs.forEach((blog) => {
    links.push({
      url: escapeXml(`https://www.brinkdesign.co/blog/${blog.slug}`),
      lastModified: new Date(),
    });
  });

  projects.forEach((project) => {
    links.push({
      url: escapeXml(`https://www.brinkdesign.co/projects/${project.slug}`),
      lastModified: new Date(),
    });
  });

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

  const publicFolderPath = path.join(process.cwd(), 'public');
  const imageFiles = getAllImageFiles(publicFolderPath);

  imageFiles.forEach((file) => {
    const relativePath = path.relative(publicFolderPath, file).replace(/\\/g, '/');
    const stat = fs.statSync(file);
    links.push({
      url: escapeXml(`https://www.brinkdesign.co/${relativePath}`),
      lastModified: stat.mtime,
    });
  });

  return links;
}