import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';

// UI/body face.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
});

// Display/headline face — bold geometric grotesk for a maximalist, poster-scale look.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const defaultTitle = 'RYX AI Community - Signal, Not Sales';
const defaultDescription =
  "RYX AI Community cuts through AI hype with real tools, real workflows, and honest experiments for people running a business, not selling a course.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: defaultTitle,
  description: defaultDescription,
  keywords: ['AI community', 'AI tools', 'AI workflows', 'AI experiments', 'practical AI'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: defaultTitle,
    description: defaultDescription,
    url: `https://${site.domain}`,
    siteName: site.name,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/opengraph-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
