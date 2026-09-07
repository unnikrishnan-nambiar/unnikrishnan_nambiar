import Image from 'next/image';
import { site } from '@/data/site';

export default function About() {
  return (
    <section className="section py-16 sm:py-20">
      <div className="mx-auto flex max-w-prose flex-col items-center text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Built by someone who works with AI
        </h2>

        <div className="mt-8 h-28 w-28 shrink-0 overflow-hidden rounded-full bg-ink/10 sm:h-32 sm:w-32">
          {site.founder.photoSrc ? (
            <Image
              src={site.founder.photoSrc}
              alt={site.founder.name}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-sm text-ink/40"
              aria-hidden
            >
              Photo
            </div>
          )}
        </div>

        <div className="mt-8 space-y-5 text-left text-ink/80 sm:text-lg">
          <p>Hi, I&apos;m {site.founder.name}.</p>
          <p>
            I&apos;ve spent years building AI agent systems — the kind that
            run in production, not just demos.
          </p>
          <p>
            I realised I wasn&apos;t talking about what I was learning. So I
            started RYX.
          </p>
          <p>
            Not another place to sell AI. A place to explore it, test it, and
            talk about what actually matters.
          </p>
          <p>
            If something&apos;s interesting, we&apos;ll talk about it.
            <br />
            If something&apos;s useful, we&apos;ll try it.
            <br />
            If something&apos;s hype, we&apos;ll say that too.
          </p>
        </div>

        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full border border-ink px-6 py-2.5 text-sm font-semibold transition hover:border-gold hover:text-gold-dark"
        >
          Follow RYX on Instagram
        </a>
      </div>
    </section>
  );
}
