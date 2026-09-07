import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function Founder() {
  return (
    <section id="about" className="container-content scroll-mt-20 py-14 text-center sm:py-20">
      <Reveal>
        <SectionLabel color="amber">The person behind RYX AI</SectionLabel>

        {site.founder.photoSrc && (
          <div className="mx-auto mt-6 aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-card border-2 border-ink bg-card">
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

        <p className="mx-auto mt-6 max-w-[750px] font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What can we actually do with AI?
          <br />
          <span className="text-gradient-pa">That&apos;s what I&apos;m here to find out.</span>
        </p>

        <div className="mt-8 flex justify-center">
          <Button href={site.instagramUrl} variant="accent" target="_blank" rel="noopener noreferrer">
            Follow me →
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
