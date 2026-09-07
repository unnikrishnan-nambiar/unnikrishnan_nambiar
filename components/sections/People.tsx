import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { builds } from '@/data/builds';

export default function People() {
  return (
    <section className="container-content py-18 sm:py-28">
      <SectionLabel>06 / Connect</SectionLabel>
      <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
        People building with AI.
      </h2>
      <p className="mt-3 max-w-reading text-lg text-ink-secondary">
        AI is bigger than tools. It&apos;s people.
      </p>

      <div className="mt-4 max-w-reading space-y-2 text-lg text-ink-secondary">
        <p>
          Founders. Developers. Product managers. Creators. Researchers.
          Students. Designers. Operators.
        </p>
        <p>
          RYX will feature people experimenting with AI, building products and
          changing how they work.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {builds.map((build) => (
          <div key={build.initials} className="rounded-card border border-border p-6">
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

      <div className="mt-10">
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
