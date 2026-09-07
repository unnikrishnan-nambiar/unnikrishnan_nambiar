import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function FinalCta() {
  return (
    <section className="bg-ink">
      <div className="container-content py-16 text-center sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-[650px] space-y-1 text-lg leading-[1.5] text-white/70">
            <p>You don&apos;t need to know everything about AI.</p>
            <p>You just need to know:</p>
          </div>

          <div className="mx-auto mt-4 max-w-[650px] space-y-1 text-lg leading-[1.5] text-white/70">
            <p>What&apos;s happening.</p>
            <p>What&apos;s useful.</p>
            <p>What to try next.</p>
          </div>

          <p className="mx-auto mt-8 max-w-[750px] font-display text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="text-gradient-vp">Welcome to RYX AI.</span>
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="#discover" variant="light">
              Explore RYX AI →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
