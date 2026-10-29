import type { UseCase } from '@/data/useCases';

// Full use-case card: problem → solution → benefit, plus what we measure and
// an example scenario. `compact` drops the measure/example rows.
export default function UseCaseCard({ useCase, compact = false }: { useCase: UseCase; compact?: boolean }) {
  return (
    <article id={useCase.slug} className="card flex h-full scroll-mt-28 flex-col p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
        <span className="text-accent-bright">{useCase.category}</span>
        <span aria-hidden>·</span>
        <span>{useCase.channels.join(', ')}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg">{useCase.title}</h3>
      <p className="mt-1.5 text-[15px] text-muted">{useCase.tagline}</p>

      <dl className="mt-6 grid gap-3 text-sm leading-relaxed">
        <div className="rounded-2xl border border-rose/15 bg-rose/[0.05] p-4">
          <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-rose">Problem</dt>
          <dd className="mt-1.5 text-muted">{useCase.problem}</dd>
        </div>
        <div className="rounded-2xl border border-mint/15 bg-mint/[0.05] p-4">
          <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-mint">Solution</dt>
          <dd className="mt-1.5 text-muted">{useCase.solution}</dd>
        </div>
        <div className="rounded-2xl border border-accent/30 bg-accent-soft p-4">
          <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent-bright">Benefit</dt>
          <dd className="mt-1.5 text-fg">{useCase.benefit}</dd>
        </div>
      </dl>

      {!compact && (
        <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm leading-relaxed">
          <p>
            <span className="text-subtle">What we measure: </span>
            <span className="text-muted">{useCase.measure}</span>
          </p>
          <p>
            <span className="text-subtle">Example: </span>
            <span className="text-muted">{useCase.example}</span>
          </p>
          <p className="text-xs text-subtle">For: {useCase.industries}</p>
        </div>
      )}
    </article>
  );
}
