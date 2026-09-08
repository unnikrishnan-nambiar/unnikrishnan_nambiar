import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Experiments from '@/components/sections/Experiments';
import Newsletter from '@/components/sections/Newsletter';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/experiments',
  'Experiments - RYX AI Community',
  'We test AI tools and workflows so the noise doesn’t have to: what worked, what didn’t, and what was a waste of time.'
);

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
