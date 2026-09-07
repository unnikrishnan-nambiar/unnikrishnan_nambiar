import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

const steps = ['Content', 'Conversation', 'Community'];

export default function Community() {
  return (
    <section
      id="community"
      className="scroll-mt-20 bg-gradient-to-br from-violet via-fuchsia-600 to-pink"
    >
      <div className="container-content py-16 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-[750px] font-display text-[36px] font-bold leading-[1.05] tracking-tight text-paper sm:text-[52px]">
            We&apos;re building this together.
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-lg leading-[1.5] text-paper/85">
            RYX AI is being built around people who are curious about AI and want
            to actually experiment with it: learn from others, share what
            you&apos;re building, ask questions, find collaborators.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 font-display text-lg font-bold text-paper">
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
              Join RYX AI
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
