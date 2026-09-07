import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PracticalAi from '@/components/sections/PracticalAi';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Guides - RYX AI Community',
  description: 'Practical, business-first AI workflows, not toy demos.',
};

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
