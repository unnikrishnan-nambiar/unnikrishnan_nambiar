import type { Metadata } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';

// Display face for headlines — a grotesque with wonky, humanist details that
// reads as handmade rather than corporate, echoing the wordmark's character.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
});

// Body/UI face — clean and warm at long line lengths, distinct enough from
// the display face that the pairing reads deliberate.
const body = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: 'RYX AI — AI, without the noise.',
  description:
    "New models. New tools. New ways to work. RYX is where we find it, try it, and share what's actually worth your time.",
  openGraph: {
    title: 'RYX AI — AI, without the noise.',
    description:
      "New models. New tools. New ways to work. RYX is where we find it, try it, and share what's actually worth your time.",
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
