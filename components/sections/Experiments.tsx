import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { experiments } from '@/data/experiments';

const questions = ['What worked?', "What didn't?", "What's actually useful?", "What's just hype?"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Experiments() {
  return (
    <section id="experiments" className="container-content py-9 sm:py-14">
      <SectionLabel>05 / Experiment</SectionLabel>
      <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
        We tried it.
      </h2>
      <p className="mt-3 max-w-reading text-lg text-ink-secondary">
        AI looks different when you actually use it.
      </p>

      <div className="mt-4 max-w-reading space-y-2 text-lg text-ink-secondary">
        <p>
          Every week, we experiment with AI. A new model. A new tool. A new
          workflow. A crazy idea.
        </p>
        <p>We test it ourselves and show you what happened.</p>
      </div>

      <ul className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {questions.map((question) => (
          <li key={question} className="font-display text-xl font-semibold">
            {question}
          </li>
        ))}
      </ul>

      <div className="mt-10 space-y-5">
        {experiments.map((experiment) => (
          <article
            key={experiment.slug}
            className="rounded-card border border-border p-6 sm:p-8"
          >
            <div
              aria-hidden
              className="flex h-40 items-center justify-center rounded border border-dashed border-border bg-card text-sm text-ink-muted sm:h-56"
            >
              Screenshot coming soon
            </div>
            <p className="mt-5 text-sm text-ink-muted">{formatDate(experiment.date)}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">
              {experiment.title}
            </h3>
            <p className="mt-1 max-w-reading text-ink-secondary">
              {experiment.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/experiments" variant="secondary">
          See Our Experiments
        </Button>
      </div>
    </section>
  );
}
