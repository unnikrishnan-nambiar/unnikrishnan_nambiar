import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Experiments from '@/components/sections/Experiments';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Experiments — RYX AI',
  description: 'Real experiments with AI — what worked, what didn’t, and what’s just hype.',
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
