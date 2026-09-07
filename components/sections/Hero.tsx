import Button from '@/components/ui/Button';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" className="container-content scroll-mt-20 py-14 text-center sm:py-24">
      <p className="text-sm font-medium text-ink-secondary">RYX AI</p>

      <h1 className="mx-auto mt-5 max-w-[800px] font-display text-[44px] font-bold leading-[1] tracking-[-0.02em] sm:text-[64px] lg:text-[72px]">
        Explore what&apos;s next in AI.
      </h1>

      <div className="mx-auto mt-6 max-w-[650px] space-y-4 text-lg leading-[1.5] text-ink-secondary sm:text-xl">
        <p>
          We explore what&apos;s happening in AI, test what actually works,
          and share what we learn.
        </p>
      </div>

      <p className="mt-6 text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
        AI · Tools · Experiments · Ideas · Community
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="#discover" variant="primary">
          Explore RYX
        </Button>
        <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
          Follow RYX
        </Button>
      </div>
    </section>
  );
}
