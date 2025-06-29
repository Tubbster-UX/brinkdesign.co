import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: 'https://www.brinkdesign.co', lastModified: now },
    { url: 'https://www.brinkdesign.co/services', lastModified: now },
    { url: 'https://www.brinkdesign.co/projects', lastModified: now },
    { url: 'https://www.brinkdesign.co/blog', lastModified: now },
    { url: 'https://www.brinkdesign.co/linecard', lastModified: now },
    { url: 'https://www.brinkdesign.co/contact', lastModified: now },
    { url: 'https://www.brinkdesign.co/service-area', lastModified: now },
    { url: 'https://www.brinkdesign.co/faq', lastModified: now },
    { url: 'https://www.brinkdesign.co/commercial-av', lastModified: now },
    { url: 'https://www.brinkdesign.co/network-cabling', lastModified: now },
    { url: 'https://www.brinkdesign.co/security-installation', lastModified: now },
    { url: 'https://www.brinkdesign.co/privacy-policy', lastModified: now },
  ];
}
