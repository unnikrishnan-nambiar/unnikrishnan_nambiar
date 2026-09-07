import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Founder from '@/components/sections/Founder';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'About - RYX AI Community',
  description: 'The founder behind RYX AI Community, and why it exists.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Founder />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
