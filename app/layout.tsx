import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';

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
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
