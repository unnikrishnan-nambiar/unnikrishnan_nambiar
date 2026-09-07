import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';

// UI/body face.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
});

// Display/headline face.
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: "RYX AI — Explore What's Next in AI",
  description:
    'RYX explores AI tools, news, workflows, experiments and ideas worth paying attention to.',
  openGraph: {
    title: "RYX AI — Explore What's Next in AI",
    description:
      'RYX explores AI tools, news, workflows, experiments and ideas worth paying attention to.',
    url: `https://${site.domain}`,
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
