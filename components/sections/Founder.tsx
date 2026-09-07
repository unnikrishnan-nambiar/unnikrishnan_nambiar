import Image from 'next/image';
import Button from '@/components/ui/Button';
import { site } from '@/data/site';

export default function Founder() {
  return (
    <section id="about" className="container-content py-9 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-card border border-border bg-card">
          {site.founder.photoSrc ? (
            <Image
              src={site.founder.photoSrc}
              alt={site.founder.name}
              width={760}
              height={950}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-sm text-ink-muted"
              aria-hidden
            >
              Photo
            </div>
          )}
        </div>

        <div className="max-w-reading">
          <h2 className="font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
            Built by someone who works with AI.
          </h2>

          <div className="mt-6 space-y-4 text-lg text-ink-secondary">
            <p>Hi, I&apos;m {site.founder.name}.</p>
            <p>
              I&apos;ve been working with AI, automation and products for
              years.
            </p>
            <p>I&apos;ve spent a lot of time building with AI.</p>
            <p>
              But I realised I wasn&apos;t sharing much of what I was
              learning. So I started RYX.
            </p>
            <p>
              Not to tell you that AI is going to change everything.
              <br />
              Not to sell you another AI product.
              <br />
              Just to explore it.
            </p>
          </div>

          <p className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What can we actually do with AI?
            <br />
            That&apos;s what I&apos;m here to find out.
          </p>

          <div className="mt-8">
            <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
              Follow RYX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
