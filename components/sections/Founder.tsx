import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function Founder() {
  return (
    <section id="about" className="container-content scroll-mt-20 py-14 text-center sm:py-20">
      <Reveal>
        <SectionLabel color="amber">A bit about me</SectionLabel>

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

        <div className="mx-auto mt-6 max-w-reading space-y-4 text-lg leading-[1.5] text-ink-secondary">
          <p>
            I&apos;m Unnikrishnan, a Product Manager working at the
            intersection of AI, data, and technology, with a background in
            engineering and hands-on experience building and testing AI
            systems. I started RYX AI Community because AI kept moving faster
            than the conversation around it, while much of what I saw stayed
            on the surface. I wanted a place to share what I&apos;m learning,
            test what actually works, and meet people doing the same. RYX AI
            Community is where we discover what&apos;s happening in AI, learn
            from each other, experiment, and build things that are genuinely
            useful. I don&apos;t have all the answers, but I&apos;m curious
            enough to keep exploring, sharing, and building alongside people
            who are too.
          </p>
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.1em] text-ink-muted">
          {site.founder.name}, Founder, RYX AI Community
        </p>

        <div className="mt-8 flex justify-center">
          <Button href={site.founder.instagramUrl} variant="accent" target="_blank" rel="noopener noreferrer">
            Follow me →
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
