import Button from '@/components/ui/Button';

export default function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="container-content py-18 text-center sm:py-28">
        <h2 className="mx-auto max-w-2xl font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
          AI is changing fast.
        </h2>

        <div className="mx-auto mt-6 max-w-reading space-y-1 text-lg text-ink-secondary">
          <p>You don&apos;t need to know everything.</p>
          <p>You just need to know:</p>
        </div>

        <div className="mx-auto mt-4 max-w-reading space-y-1 text-lg text-ink-secondary">
          <p>What&apos;s happening.</p>
          <p>What&apos;s useful.</p>
          <p>What to try next.</p>
        </div>

        <p className="mt-10 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Welcome to RYX.
        </p>

        <div className="mt-8 flex justify-center">
          <Button href="#discover" variant="primary">
            Explore RYX
          </Button>
        </div>
      </div>
    </section>
  );
}
