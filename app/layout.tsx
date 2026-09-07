import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: 'RYX AI Community - Signal, Not Sales',
  description:
    "RYX AI Community cuts through AI hype with real tools, real workflows, and honest experiments for people running a business, not selling a course.",
  openGraph: {
    title: 'RYX AI Community - Signal, Not Sales',
    description:
      "RYX AI Community cuts through AI hype with real tools, real workflows, and honest experiments for people running a business, not selling a course.",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
