import Button from '@/components/ui/Button';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" className="container-content py-9 sm:py-14">
      <p className="text-sm font-medium text-ink-secondary">RYX AI</p>

      <h1 className="mt-4 max-w-3xl font-display text-[42px] font-semibold leading-[1.05] tracking-tight sm:text-[64px] lg:text-[72px]">
        AI, without the noise.
      </h1>

      <div className="mt-6 max-w-reading space-y-4 text-lg text-ink-secondary sm:text-xl">
        <p>AI is moving faster than most of us can keep up with.</p>
        <p>
          New models. New tools. New ways to work. New things being built
          every day.
        </p>
        <p>
          RYX is a place to discover AI, understand what matters, try what
          works, and connect with people exploring what&apos;s next.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="#discover" variant="primary">
          Explore AI
        </Button>
        <Button href="#join" variant="secondary">
          Join RYX
        </Button>
      </div>

      <p className="mt-10 text-sm text-ink-muted">{site.tags.join(' · ')}</p>
    </section>
  );
}
