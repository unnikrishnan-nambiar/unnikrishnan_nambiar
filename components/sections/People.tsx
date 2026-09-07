import SectionIntro from '@/components/ui/SectionIntro';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';
import { builds } from '@/data/builds';

const rings = ['border-violet bg-violet-light', 'border-cyan bg-cyan-light', 'border-amber bg-amber-light'];

export default function People() {
  return (
    <section className="container-content py-14 sm:py-20">
      <Reveal>
        <SectionIntro
          heading="People building with AI."
          description="AI is bigger than tools. It's people: founders, developers, product managers, creators, researchers, students, designers, operators. RYX AI will feature people experimenting with AI, building products and changing how they work."
        />
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-content gap-5 sm:grid-cols-3">
        {builds.map((build, i) => (
          <Reveal
            key={build.initials}
            delay={i * 0.06}
            className="rounded-card border-2 border-ink bg-paper p-6 text-left transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <span
                aria-hidden
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-display text-sm font-bold ${rings[i % rings.length]}`}
              >
                {build.initials}
              </span>
              <Badge>Example</Badge>
            </div>
            <p className="mt-4 font-display font-bold">{build.role}</p>
            <p className="mt-1 text-ink-secondary">{build.building}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          href="mailto:hello@ryxai.in?subject=I%20want%20to%20share%20my%20build"
          variant="secondary"
        >
          Share Your Build
        </Button>
      </div>
    </section>
  );
}
