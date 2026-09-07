import SectionIntro from '@/components/ui/SectionIntro';
import Reveal from '@/components/ui/Reveal';

export default function WhatIsRyx() {
  return (
    <section className="container-content py-14 sm:py-24">
      <Reveal>
        <SectionIntro
          label="01 / Discover"
          heading="What is RYX?"
          description={
            <div className="space-y-4">
              <p>There is a lot happening in AI. And a lot of content about it.</p>
              <p>We don&apos;t want to add more noise.</p>
              <p>
                RYX is about figuring out what is actually worth knowing and
                using — new tools, new ideas, what&apos;s changing and why.
              </p>
            </div>
          }
        />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-[750px] text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Learn. Experiment. Build.
          <br />
          That&apos;s RYX.
        </p>
      </Reveal>
    </section>
  );
}
