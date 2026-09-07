import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const categories = [
  { name: 'Work', items: ['Research', 'Writing', 'Analysis', 'Productivity', 'Automation'] },
  { name: 'Create', items: ['Images', 'Video', 'Audio', 'Design', 'Content'] },
  { name: 'Build', items: ['Apps', 'Agents', 'Automations', 'AI products', 'APIs'] },
  { name: 'Learn', items: ['Research', 'Study', 'Understand', 'Experiment'] },
];

export default function PracticalAi() {
  return (
    <section id="guides" className="container-content py-18 sm:py-28">
      <SectionLabel>03 / Learn</SectionLabel>
      <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
        What can you actually do with AI?
      </h2>
      <p className="mt-3 max-w-reading text-lg text-ink-secondary">
        Don&apos;t just learn about AI. Use it.
      </p>
      <p className="mt-4 max-w-reading text-lg text-ink-secondary">
        Practical workflows, experiments and ideas you can try yourself.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category.name} className="rounded-card border border-border p-6">
            <Badge>{category.name}</Badge>
            <ul className="mt-4 space-y-2 text-ink-secondary">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/guides" variant="secondary">
          Explore Guides
        </Button>
      </div>
    </section>
  );
}
