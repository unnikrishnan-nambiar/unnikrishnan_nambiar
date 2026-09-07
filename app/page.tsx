import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import WhatIsRyx from '@/components/sections/WhatIsRyx';
import AiNews from '@/components/sections/AiNews';
import PracticalAi from '@/components/sections/PracticalAi';
import AiTools from '@/components/sections/AiTools';
import Experiments from '@/components/sections/Experiments';
import People from '@/components/sections/People';
import Community from '@/components/sections/Community';
import Founder from '@/components/sections/Founder';
import Newsletter from '@/components/sections/Newsletter';
import FinalCta from '@/components/sections/FinalCta';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatIsRyx />
        <AiNews />
        <PracticalAi />
        <AiTools />
        <Experiments />
        <People />
        <Community />
        <Founder />
        <Newsletter />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
