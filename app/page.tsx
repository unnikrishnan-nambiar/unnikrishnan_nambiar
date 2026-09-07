import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhatRyxIs from '@/components/WhatRyxIs';
import Latest from '@/components/Latest';
import About from '@/components/About';
import Join from '@/components/Join';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhatRyxIs />
      <Latest />
      <About />
      <Join />
      <Footer />
    </main>
  );
}
