import Button from '@/components/ui/Button';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section
      id="top"
      className="container-content relative scroll-mt-20 overflow-hidden py-16 text-center sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 animate-blob rounded-full bg-gradient-to-br from-violet via-pink to-amber opacity-25 blur-[100px]"
      />

      <span className="inline-flex items-center rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-sm font-bold uppercase tracking-[0.1em]">
        RYX AI
      </span>

      <h1 className="mx-auto mt-6 max-w-[950px] font-display text-[52px] font-bold leading-[0.95] tracking-tight sm:text-[80px] lg:text-[104px]">
        Explore what&apos;s <span className="text-gradient-vp">next</span> in AI.
      </h1>

      <div className="mx-auto mt-6 max-w-[650px] space-y-4 text-lg leading-[1.5] text-ink-secondary sm:text-xl">
        <p>
          We explore what&apos;s happening in AI, test what actually works,
          and share what we learn.
        </p>
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-ink-muted">
        AI · Tools · Experiments · Ideas · Community
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="#discover" variant="primary">
          Explore RYX AI
        </Button>
        <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
          Follow RYX AI
        </Button>
      </div>
    </section>
  );
}
