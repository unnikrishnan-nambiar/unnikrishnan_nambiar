import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

const steps = ['Content', 'Real use cases', 'A community that filters the hype for each other'];

export default function Community() {
  return (
    <section
      id="community"
      className="scroll-mt-20 bg-gradient-to-br from-violet via-fuchsia-600 to-pink"
    >
      <div className="container-content py-16 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-[750px] font-display text-[36px] font-bold leading-[1.05] tracking-tight text-paper sm:text-[52px]">
            Built with the people using it.
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-lg leading-[1.5] text-paper/85">
            RYX AI Community isn&apos;t a broadcast. It&apos;s a place for people who are
            actually building with AI to compare notes, share what worked, and
            skip the noise together.
          </p>

          <div className="mx-auto mt-8 flex max-w-[600px] flex-wrap items-center justify-center gap-x-3 gap-y-2 font-semibold text-paper">
            {steps.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-paper/60">
                    →
                  </span>
                )}
                {step}
              </span>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button href="#join" variant="light">
              Join RYX AI Community
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
