import SectionIntro from '@/components/ui/SectionIntro';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';

const categories = [
  {
    name: 'Operate',
    items: ['Research', 'Reporting', 'Analysis', 'Decision support'],
    color: 'violet' as const,
  },
  {
    name: 'Create',
    items: ['Content', 'Design', 'Marketing assets', 'Video'],
    color: 'pink' as const,
  },
  {
    name: 'Build',
    items: ['Internal tools', 'Agents', 'Automations', 'Integrations'],
    color: 'cyan' as const,
  },
  {
    name: 'Decide',
    items: ['Data', 'Forecasting', 'Strategy', 'Planning'],
    color: 'amber' as const,
  },
];

export default function PracticalAi() {
  return (
    <section id="guides" className="scroll-mt-20 bg-amber-light py-14 sm:py-20">
      <div className="container-content">
        <Reveal>
          <SectionIntro
            label="Use Cases"
            labelColor="amber"
            heading="Stop reading about AI. Start using it."
            description="Practical, business-first workflows, not toy demos. Things you can put to work this week."
          />
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-content gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal
              key={category.name}
              delay={i * 0.06}
              className="rounded-card border-2 border-ink bg-paper p-6 text-left transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
            >
              <Badge variant={category.color}>{category.name}</Badge>
              <ul className="mt-4 space-y-2 font-medium text-ink-secondary">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/guides" variant="dark">
            Explore Guides
          </Button>
        </div>
      </div>
    </section>
  );
}
