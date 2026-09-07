import SectionIntro from '@/components/ui/SectionIntro';
import Reveal from '@/components/ui/Reveal';

export default function WhatIsRyx() {
  return (
    <section className="container-content py-14 sm:py-20">
      <Reveal>
        <SectionIntro
          label="Discover"
          labelColor="violet"
          heading="Why we started this"
          description={
            <div className="space-y-3">
              <p>
                AI content right now comes in two flavors: noise, or a sales
                pitch dressed up as noise.
              </p>
              <p>
                Everyone&apos;s an AI expert this week. Most of it is
                reach-farming: recycled takes, recycled screenshots, zero
                actual use. We got tired of scrolling past it looking for the
                1% that&apos;s real.
              </p>
              <p>
                So we asked a simpler question: what does AI actually change
                for someone running a business, a team, or a project? Not the
                demo. The workflow. The decision it improved. The hour it
                saved.
              </p>
            </div>
          }
        />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-[750px] text-center font-display text-3xl font-bold tracking-tight sm:text-5xl">
          <span className="text-gradient-vp">Learn what&apos;s real. Test it yourself.</span>
          <br />
          Build with what works. That&apos;s RYX AI Community.
        </p>
      </Reveal>
    </section>
  );
}
