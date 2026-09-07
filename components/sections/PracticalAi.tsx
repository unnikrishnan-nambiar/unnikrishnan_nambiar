import SectionIntro from '@/components/ui/SectionIntro';
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
    <section id="guides" className="container-content py-14 sm:py-24">
      <SectionIntro
        label="03 / Learn"
        heading="What can you actually do with AI?"
        description={
          <div className="space-y-1">
            <p>Don&apos;t just learn about AI. Use it.</p>
            <p>Practical workflows, experiments and ideas you can try yourself.</p>
          </div>
        }
      />

      <div className="mx-auto mt-10 grid max-w-content gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category.name} className="rounded-card border border-border p-6 text-left">
            <Badge>{category.name}</Badge>
            <ul className="mt-4 space-y-2 text-ink-secondary">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/guides" variant="secondary">
          Explore Guides
        </Button>
      </div>
    </section>
  );
}
