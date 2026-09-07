import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import { site } from '@/data/site';

export default function Founder() {
  return (
    <section id="about" className="container-content py-14 text-center sm:py-24">
      <SectionLabel>The person behind RYX</SectionLabel>

      <div className="mx-auto mt-8 aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-card border border-border bg-card">
        {site.founder.photoSrc ? (
          <Image
            src={site.founder.photoSrc}
            alt={site.founder.name}
            width={880}
            height={1100}
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

      <div className="mx-auto mt-8 max-w-reading space-y-4 text-lg leading-[1.6] text-ink-secondary">
        <p>Hi, I&apos;m {site.founder.name}.</p>
        <p>I work in AI and product.</p>
        <p>
          I&apos;ve spent a lot of time building with AI. But I realised I
          wasn&apos;t sharing much of what I was learning. So I started RYX.
        </p>
        <p>
          Not to tell you that AI is going to change everything.
          <br />
          Not to sell you another AI product.
          <br />
          Just to explore it.
        </p>
      </div>

      <p className="mx-auto mt-8 max-w-[750px] font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        What can we actually do with AI?
        <br />
        That&apos;s what I&apos;m here to find out.
      </p>

      <div className="mt-8 flex justify-center">
        <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
          Follow me →
        </Button>
      </div>
    </section>
  );
}
