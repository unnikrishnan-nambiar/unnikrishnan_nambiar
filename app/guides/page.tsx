import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PracticalAi from '@/components/sections/PracticalAi';
import Newsletter from '@/components/sections/Newsletter';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/guides',
  'Guides - RYX AI Community',
  'Practical, business-first AI workflows, not toy demos.'
);

export default function GuidesPage() {
  return (
    <>
      <Nav />
      <main>
        <PracticalAi />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
