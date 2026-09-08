import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AiTools from '@/components/sections/AiTools';
import Newsletter from '@/components/sections/Newsletter';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/tools',
  'AI Tools - RYX AI Community',
  'AI tools worth your time, actually used and recommended by RYX AI Community.'
);

export default function ToolsPage() {
  return (
    <>
      <Nav />
      <main>
        <AiTools />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
