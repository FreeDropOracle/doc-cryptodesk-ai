import type { MetadataRoute } from 'next';
import { allSearchItems, siteUrl } from '@/lib/docs-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = ['/', ...allSearchItems.map((item) => item.href)];

  return urls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date('2026-03-25')
  }));
}
