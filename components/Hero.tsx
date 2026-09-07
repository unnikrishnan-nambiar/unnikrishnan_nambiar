import { site } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" className="section flex flex-col items-center py-20 text-center sm:py-28">
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
        AI, without the noise.
      </h1>
      <p className="mt-6 max-w-xl text-balance text-base text-ink/70 sm:text-lg">
        New models. New tools. New ways to work. RYX is where we find it, try
        it, and share what&apos;s actually worth your time.
      </p>
      <a
        href="#join"
        className="mt-8 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-gold-dark"
      >
        Join RYX
      </a>
      <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-ink/50">
        {site.tagline}
      </p>
    </section>
  );
}
