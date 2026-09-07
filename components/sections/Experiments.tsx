import SectionIntro from '@/components/ui/SectionIntro';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SignupForm from './SignupForm';
import { experiments } from '@/data/experiments';
import { currentTests } from '@/data/currentTests';

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

        {experiments.length > 0 && (
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
        )}

        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 max-w-[650px] text-center">
            <SectionLabel color="pink">AI Experiments</SectionLabel>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              What we&apos;re testing right now
            </h3>
            <p className="mt-3 text-ink-secondary">
              We don&apos;t just follow what&apos;s happening in AI. We try it
              ourselves, test it in real workflows, and share what we learn.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-content gap-5 text-left sm:grid-cols-3">
          {currentTests.map((test, i) => (
            <Reveal
              key={test.slug}
              delay={i * 0.06}
              className="rounded-card border-2 border-ink bg-paper p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
            >
              <span className="font-display text-2xl font-bold text-pink">{test.index}</span>
              <h4 className="mt-2 font-display text-lg font-bold">{test.title}</h4>
              <p className="mt-2 text-ink-secondary">{test.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 flex max-w-[650px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-display text-xl font-bold sm:text-2xl">
            <span>Test</span>
            <span aria-hidden className="text-pink">
              →
            </span>
            <span>Break</span>
            <span aria-hidden className="text-pink">
              →
            </span>
            <span>Measure</span>
            <span aria-hidden className="text-pink">
              →
            </span>
            <span>Share</span>
          </p>
        </Reveal>

        <SignupForm />

        <div className="mt-6 flex justify-center">
          <Button href="/experiments" variant="secondary">
            See Our Experiments
          </Button>
        </div>
      </div>
    </section>
  );
}
