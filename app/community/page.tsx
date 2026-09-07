import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import People from '@/components/sections/People';
import CommunitySection from '@/components/sections/Community';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Community — RYX AI',
  description: 'People building with AI — and the beginning of a place to find them.',
};

export default function CommunityPage() {
  return (
    <>
      <Nav />
      <main>
        <People />
        <CommunitySection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
