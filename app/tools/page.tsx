import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AiTools from '@/components/sections/AiTools';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'AI Tools — RYX AI',
  description: 'Find AI worth trying, picked and organized by RYX AI.',
};

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
