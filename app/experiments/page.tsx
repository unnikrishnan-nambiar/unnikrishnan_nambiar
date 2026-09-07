import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Experiments from '@/components/sections/Experiments';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Experiments - RYX AI Community',
  description: 'We test AI tools and workflows so the noise doesn’t have to: what worked, what didn’t, and what was a waste of time.',
};

export default function ExperimentsPage() {
  return (
    <>
      <Nav />
      <main>
        <Experiments />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
