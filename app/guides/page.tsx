import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PracticalAi from '@/components/sections/PracticalAi';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Guides - RYX AI',
  description: "Practical workflows, experiments and ideas you can try yourself.",
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
