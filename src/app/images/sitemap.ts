import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getAllImageFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const publicDir = path.join(process.cwd(), 'public');
  const files = getAllImageFiles(publicDir);

  return files.map((file) => {
    const relPath = path.relative(publicDir, file).replace(/\\/g, '/');
    const stat = fs.statSync(file);
    // Properly encode the URL for XML and handle special characters
    const encodedPath = encodeURIComponent(relPath).replace(/%2F/g, '/');
    return {
      url: `https://www.brinkdesign.co/${encodedPath}`,
      lastModified: stat.mtime,
    };
  });
}
