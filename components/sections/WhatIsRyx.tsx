import SectionIntro from '@/components/ui/SectionIntro';
import Reveal from '@/components/ui/Reveal';

export default function WhatIsRyx() {
  return (
    <section className="container-content py-14 sm:py-20">
      <Reveal>
        <SectionIntro
          label="Discover"
          labelColor="violet"
          heading="What is RYX AI?"
          description={
            <div className="space-y-3">
              <p>There is a lot happening in AI. And a lot of content about it.</p>
              <p>We don&apos;t want to add more noise.</p>
              <p>
                RYX AI is about figuring out what is actually worth knowing and
                using: new tools, new ideas, what&apos;s changing and why.
              </p>
            </div>
          }
        />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-[750px] text-center font-display text-3xl font-bold tracking-tight sm:text-5xl">
          <span className="text-gradient-vp">Learn. Experiment. Build.</span>
          <br />
          That&apos;s RYX AI.
        </p>
      </Reveal>
    </section>
  );
}
