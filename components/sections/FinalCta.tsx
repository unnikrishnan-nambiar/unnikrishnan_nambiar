import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function FinalCta() {
  return (
    <section className="bg-ink">
      <div className="container-content py-16 text-center sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-[650px] space-y-1 text-lg leading-[1.5] text-white/70">
            <p>You don&apos;t need to know everything about AI.</p>
            <p>You need to know what&apos;s real, what&apos;s useful, and what to try next.</p>
          </div>

          <p className="mx-auto mt-8 max-w-[750px] font-display text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="text-gradient-vp">Welcome to RYX AI Community.</span>
          </p>
          <p className="mx-auto mt-3 max-w-[650px] text-lg font-semibold text-white/70">
            Signal, not sales.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="#discover" variant="light">
              Explore RYX AI Community →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
