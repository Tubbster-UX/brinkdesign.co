import { MetadataRoute } from 'next';
import { reader } from '@/lib/reader';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const blogSlugs = await reader.collections.blog.list();
  const projectSlugs = await reader.collections.project.list();

  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://www.brinkdesign.co', lastModified: now },
    { url: 'https://www.brinkdesign.co/about', lastModified: now },
    { url: 'https://www.brinkdesign.co/services', lastModified: now },
    { url: 'https://www.brinkdesign.co/projects', lastModified: now },
    { url: 'https://www.brinkdesign.co/blog', lastModified: now },
    { url: 'https://www.brinkdesign.co/linecard', lastModified: now },
    { url: 'https://www.brinkdesign.co/contact', lastModified: now },
    { url: 'https://www.brinkdesign.co/service-area', lastModified: now },
    { url: 'https://www.brinkdesign.co/faq', lastModified: now },
    { url: 'https://www.brinkdesign.co/wyoming', lastModified: now },
    { url: 'https://www.brinkdesign.co/south-dakota', lastModified: now },
    { url: 'https://www.brinkdesign.co/nebraska', lastModified: now },
    { url: 'https://www.brinkdesign.co/services/commercial-av', lastModified: now },
    { url: 'https://www.brinkdesign.co/services/smart-home', lastModified: now },
    { url: 'https://www.brinkdesign.co/services/low-voltage', lastModified: now },
    { url: 'https://www.brinkdesign.co/services/security-cameras', lastModified: now },
    { url: 'https://www.brinkdesign.co/commercial-security-cameras-rapid-city', lastModified: now },
    { url: 'https://www.brinkdesign.co/business-wifi-networks-rapid-city', lastModified: now },
    { url: 'https://www.brinkdesign.co/home-network-installation-rapid-city', lastModified: now },
    { url: 'https://www.brinkdesign.co/whole-home-audio-rapid-city', lastModified: now },
    { url: 'https://www.brinkdesign.co/church-av-installation-south-dakota', lastModified: now },
    { url: 'https://www.brinkdesign.co/privacy-policy', lastModified: now },
  ];

  const blogUrls = blogSlugs.map((slug) => ({
    url: `https://www.brinkdesign.co/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
  }));

  const projectUrls = projectSlugs.map((slug) => ({
    url: `https://www.brinkdesign.co/projects/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...blogUrls, ...projectUrls];
}
