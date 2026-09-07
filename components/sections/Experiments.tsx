import SectionIntro from '@/components/ui/SectionIntro';
import Divider from '@/components/ui/Divider';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { experiments } from '@/data/experiments';

const questions = ['Did it save time?', 'Did it hold up under real use?', 'Would we actually recommend it?'];

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
  { key: 'verdict', label: 'RYX AI Community verdict' },
] as const;

export default function Experiments() {
  return (
    <section id="experiments" className="scroll-mt-20 bg-pink-light py-14 sm:py-20">
      <div className="container-content">
        <Reveal>
          <SectionIntro
            heading="We test it so the noise doesn't have to."
            description="Every week: a new tool, a new workflow, a real business use case. We run it, break it, and tell you honestly what worked and what was a waste of time."
          />
        </Reveal>

        <ul className="mx-auto mt-8 grid max-w-content gap-4 text-left sm:grid-cols-3">
          {questions.map((question, i) => (
            <Reveal
              key={question}
              as="li"
              delay={i * 0.06}
              className="rounded-card border-2 border-ink bg-paper p-5 font-display text-xl font-bold"
            >
              {question}
            </Reveal>
          ))}
        </ul>

        <div className="mx-auto mt-8 max-w-reading space-y-6 text-left">
          {experiments.map((experiment) => (
            <Reveal
              key={experiment.slug}
              as="article"
              className="rounded-card border-2 border-ink bg-paper p-6 sm:p-8"
            >
              <p className="text-sm font-bold text-pink">{formatDate(experiment.date)}</p>
              <h3 className="mt-1 font-display text-2xl font-bold">{experiment.title}</h3>
              <p className="mt-2 text-ink-secondary">{experiment.description}</p>

              {experiment.status === 'coming-soon' ? (
                <div
                  aria-hidden
                  className="mt-6 flex h-56 items-center justify-center rounded-card border-2 border-dashed border-ink/30 bg-pink-light text-sm text-ink-muted"
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
                        <p className="text-sm font-bold uppercase tracking-[0.1em] text-pink">
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

        <div className="mt-8 flex justify-center">
          <Button href="/experiments" variant="dark">
            See Our Experiments
          </Button>
        </div>
      </div>
    </section>
  );
}
