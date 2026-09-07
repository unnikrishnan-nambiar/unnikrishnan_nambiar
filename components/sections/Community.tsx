import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

const steps = ['Content', 'Conversation', 'Community'];

export default function Community() {
  return (
    <section id="community" className="scroll-mt-20 border-y border-border bg-card">
      <div className="container-content py-14 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-[750px] font-display text-[34px] font-semibold leading-tight tracking-tight sm:text-[40px] lg:text-[48px]">
            We&apos;re building this together.
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-lg leading-[1.6] text-ink-secondary">
            RYX is being built around people who are curious about AI and want
            to actually experiment with it — learn from others, share what
            you&apos;re building, ask questions, find collaborators.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 font-display text-lg font-semibold">
            {steps.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-ink-muted">→</span>}
                {step}
              </span>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button href="#join" variant="accent">
              Join RYX
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
