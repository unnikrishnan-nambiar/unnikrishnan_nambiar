import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import People from '@/components/sections/People';
import CommunitySection from '@/components/sections/Community';
import Newsletter from '@/components/sections/Newsletter';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/community',
  'Join Us - RYX AI Community',
  'Real people building with AI, and a community that filters the hype together.'
);

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
