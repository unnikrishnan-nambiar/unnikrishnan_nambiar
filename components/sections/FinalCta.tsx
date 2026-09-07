import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="container-content py-10 text-center sm:py-16">
        <Reveal>
          <div className="mx-auto max-w-[650px] space-y-1 text-lg leading-[1.5] text-ink-secondary">
            <p>You don&apos;t need to know everything about AI.</p>
            <p>You just need to know:</p>
          </div>

          <div className="mx-auto mt-4 max-w-[650px] space-y-1 text-lg leading-[1.5] text-ink-secondary">
            <p>What&apos;s happening.</p>
            <p>What&apos;s useful.</p>
            <p>What to try next.</p>
          </div>

          <p className="mx-auto mt-6 max-w-[750px] font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Welcome to RYX AI.
          </p>

          <div className="mt-6 flex justify-center">
            <Button href="#discover" variant="primary">
              Explore RYX AI →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
