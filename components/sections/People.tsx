import SectionIntro from '@/components/ui/SectionIntro';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { builds } from '@/data/builds';

export default function People() {
  return (
    <section className="container-content py-14 sm:py-24">
      <SectionIntro
        label="06 / Connect"
        heading="People building with AI."
        description="AI is bigger than tools. It's people — founders, developers, product managers, creators, researchers, students, designers, operators. RYX will feature people experimenting with AI, building products and changing how they work."
      />

      <div className="mx-auto mt-10 grid max-w-content gap-6 sm:grid-cols-3">
        {builds.map((build) => (
          <div key={build.initials} className="rounded-card border border-border p-6 text-left">
            <div className="flex items-start justify-between">
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card font-display text-sm font-semibold"
              >
                {build.initials}
              </span>
              <Badge>Example</Badge>
            </div>
            <p className="mt-4 font-display font-semibold">{build.role}</p>
            <p className="mt-1 text-ink-secondary">{build.building}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
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
