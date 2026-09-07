import Button from '@/components/ui/Button';

export default function Community() {
  return (
    <section id="community" className="border-y border-border bg-card">
      <div className="container-content py-9 sm:py-14">
        <div className="max-w-reading">
          <h2 className="font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
            Don&apos;t just follow AI.
            <br />
            Be part of the conversation.
          </h2>

          <p className="mt-6 text-lg text-ink-secondary">
            RYX is being built around people who are curious about AI and want
            to actually experiment with it.
          </p>
          <p className="mt-4 text-lg text-ink-secondary">
            Learn from others. Share what you&apos;re building. Ask questions.
            Find collaborators. Discover opportunities.
          </p>

          <div className="mt-8">
            <Button href="#join" variant="accent">
              Join RYX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
