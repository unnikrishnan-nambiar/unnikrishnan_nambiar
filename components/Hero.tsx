import { site } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" className="section py-16 sm:py-24">
      <ul className="flex flex-wrap gap-2">
        {site.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-hairline px-3 py-1 text-xs font-medium text-ink-soft"
          >
            {tag}
          </li>
        ))}
      </ul>

      <h1 className="mt-8 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl">
        AI, without
        <br />
        the noise.
      </h1>

      <p className="mt-6 max-w-md text-lg text-ink-soft sm:text-xl">
        New models. New tools. New ways to work. RYX is where we find it, try
        it, and share what&apos;s actually worth your time.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href="#join"
          className="rounded-full bg-ink px-7 py-3 font-body text-sm font-semibold text-paper transition hover:bg-gold"
        >
          Join RYX
        </a>
        <a
          href="#latest"
          className="text-sm font-semibold text-ink-soft underline decoration-hairline decoration-2 underline-offset-4 transition hover:text-ink hover:decoration-gold"
        >
          See the latest
        </a>
      </div>
    </section>
  );
}
