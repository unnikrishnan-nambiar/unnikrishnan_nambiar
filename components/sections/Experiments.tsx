import SectionIntro from '@/components/ui/SectionIntro';
import Divider from '@/components/ui/Divider';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { experiments } from '@/data/experiments';

const questions = ['What worked?', "What didn't?", "What's actually useful?", "What's just hype?"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

const storySteps = [
  { key: 'whatWeTried', label: 'What we tried' },
  { key: 'whatHappened', label: 'What happened' },
  { key: 'verdict', label: 'RYX AI verdict' },
] as const;

export default function Experiments() {
  return (
    <section id="experiments" className="container-content scroll-mt-20 py-10 sm:py-16">
      <Reveal>
        <SectionIntro
          heading="We tried it."
          description="AI looks different when you actually use it. Every week, we experiment with AI: a new model, a new tool, a new workflow, a crazy idea, and show you what happened."
        />
      </Reveal>

      <ul className="mx-auto mt-6 grid max-w-content gap-6 border-t border-border pt-8 text-left sm:grid-cols-2 lg:grid-cols-4">
        {questions.map((question, i) => (
          <Reveal key={question} as="li" delay={i * 0.06} className="font-display text-xl font-semibold">
            {question}
          </Reveal>
        ))}
      </ul>

      <div className="mx-auto mt-6 max-w-reading space-y-6 text-left">
        {experiments.map((experiment) => (
          <Reveal key={experiment.slug} as="article">
            <p className="text-sm text-ink-muted">{formatDate(experiment.date)}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{experiment.title}</h3>
            <p className="mt-2 text-ink-secondary">{experiment.description}</p>

            {experiment.status === 'coming-soon' ? (
              <div
                aria-hidden
                className="mt-6 flex h-56 items-center justify-center rounded border border-dashed border-border bg-card text-sm text-ink-muted"
              >
                Screenshot coming soon
              </div>
            ) : (
              <div className="mt-6 space-y-6">
                {storySteps.map(({ key, label }) => {
                  const value = experiment[key];
                  if (!value) return null;
                  return (
                    <div key={key}>
                      <Divider className="mb-4" />
                      <p className="text-sm font-medium uppercase tracking-[0.1em] text-ink-secondary">
                        {label}
                      </p>
                      <p className="mt-2 text-ink-secondary">{value}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button href="/experiments" variant="secondary">
          See Our Experiments
        </Button>
      </div>
    </section>
  );
}
