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

      <span
        className="inline-flex animate-fade-up items-center rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-sm font-bold uppercase tracking-[0.1em]"
        style={{ animationDelay: '0ms' }}
      >
        RYX AI
      </span>

      <h1
        className="mx-auto mt-6 max-w-[950px] animate-fade-up font-display text-[44px] font-bold leading-[1.05] tracking-tight sm:text-[64px] lg:text-[80px]"
        style={{ animationDelay: '80ms' }}
      >
        Everyone&apos;s posting about AI. Most of it is noise.
      </h1>

      <p
        className="mx-auto mt-6 max-w-[750px] animate-fade-up font-display text-2xl font-bold tracking-tight sm:text-3xl"
        style={{ animationDelay: '180ms' }}
      >
        <span className="text-gradient-vp">RYX AI cuts through it.</span>
      </p>

      <div
        className="mx-auto mt-4 max-w-[650px] animate-fade-up space-y-4 text-lg leading-[1.5] text-ink-secondary sm:text-xl"
        style={{ animationDelay: '260ms' }}
      >
        <p>
          No hype threads, no &ldquo;AI will change everything,&rdquo; no one
          selling you a course disguised as advice. Just what&apos;s real,
          what works, and what actually moves your work forward.
        </p>
      </div>

      <p
        className="mt-6 animate-fade-up text-xs font-bold uppercase tracking-[0.15em] text-ink-muted"
        style={{ animationDelay: '320ms' }}
      >
        {site.tags.join(' · ')}
      </p>

      <div
        className="mt-8 flex animate-fade-up flex-wrap justify-center gap-4"
        style={{ animationDelay: '380ms' }}
      >
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
