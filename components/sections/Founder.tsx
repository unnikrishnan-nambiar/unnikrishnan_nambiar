import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function Founder() {
  return (
    <section id="about" className="container-content scroll-mt-20 py-10 text-center sm:py-16">
      <Reveal>
        <SectionLabel>The person behind RYX AI</SectionLabel>

        {site.founder.photoSrc && (
          <div className="mx-auto mt-6 aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-card border border-border bg-card">
            <Image
              src={site.founder.photoSrc}
              alt={site.founder.name}
              width={880}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="mx-auto mt-6 max-w-reading space-y-3 text-lg leading-[1.5] text-ink-secondary">
          <p>
            Hi, I&apos;m {site.founder.name}. I work in AI and product.
          </p>
          <p>
            I&apos;ve spent a lot of time building with AI, but wasn&apos;t
            sharing much of what I was learning. So I started RYX AI.
          </p>
          <p>
            Not to tell you AI will change everything, or to sell you another
            AI product. Just to explore it.
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-[750px] font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          What can we actually do with AI?
          <br />
          That&apos;s what I&apos;m here to find out.
        </p>

        <div className="mt-6 flex justify-center">
          <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
            Follow me →
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
