import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Founder from '@/components/sections/Founder';
import Newsletter from '@/components/sections/Newsletter';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/about',
  'About - RYX AI Community',
  'The founder behind RYX AI Community, and why it exists.'
);

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
