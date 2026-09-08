import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

// Required for `output: 'export'` — without it the build refuses to treat
// this route as prerenderable static output.
export const dynamic = 'force-static';

// Static export generates this as a real robots.txt at build time.
export default function robots(): MetadataRoute.Robots {
  const base = `https://${site.domain}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
