import SectionIntro from '@/components/ui/SectionIntro';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';

const categories = [
  { name: 'Work', items: ['Research', 'Writing', 'Analysis', 'Productivity', 'Automation'] },
  { name: 'Create', items: ['Images', 'Video', 'Audio', 'Design', 'Content'] },
  { name: 'Build', items: ['Apps', 'Agents', 'Automations', 'AI products', 'APIs'] },
  { name: 'Learn', items: ['Research', 'Study', 'Understand', 'Experiment'] },
];

export default function PracticalAi() {
  return (
    <section id="guides" className="container-content scroll-mt-20 py-10 sm:py-16">
      <Reveal>
        <SectionIntro
          label="Use Cases"
          heading="What can you actually do with AI?"
          description={
            <div className="space-y-1">
              <p>Don&apos;t just learn about AI. Use it.</p>
              <p>Practical workflows, experiments and ideas you can try yourself.</p>
            </div>
          }
        />
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-content gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, i) => (
          <Reveal key={category.name} delay={i * 0.06} className="rounded-card border border-border p-6 text-left">
            <Badge>{category.name}</Badge>
            <ul className="mt-4 space-y-2 text-ink-secondary">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button href="/guides" variant="secondary">
          Explore Guides
        </Button>
      </div>
    </section>
  );
}
