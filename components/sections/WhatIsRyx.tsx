import SectionLabel from '@/components/ui/SectionLabel';

export default function WhatIsRyx() {
  return (
    <section className="container-content py-9 sm:py-14">
      <div className="max-w-reading">
        <SectionLabel>01 / Discover</SectionLabel>
        <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
          What is RYX?
        </h2>

        <div className="mt-6 space-y-4 text-lg text-ink-secondary">
          <p>There is a lot happening in AI.</p>
          <p>And there is a lot of content about it.</p>
          <p>We don&apos;t want to add more noise.</p>
          <p>
            RYX is about figuring out what is actually worth knowing and
            using.
          </p>
          <p>
            We explore new AI tools.
            <br />
            We test new ideas.
            <br />
            We break down what&apos;s changing.
            <br />
            We share what we learn.
          </p>
          <p>
            And eventually, we want to bring together the people doing the
            same.
          </p>
        </div>

        <p className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Learn. Experiment. Build.
          <br />
          That&apos;s RYX.
        </p>
      </div>
    </section>
  );
}
