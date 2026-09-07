import SectionIntro from '@/components/ui/SectionIntro';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { audiences } from '@/data/audiences';

export default function People() {
  return (
    <section className="container-content py-14 sm:py-20">
      <Reveal>
        <SectionIntro
          heading="Who is RYX AI Community for?"
          description="Whether you're learning AI, using it at work, or building what's next, there's a place for you here."
        />
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-content gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience, i) => (
          <Reveal
            key={audience.title}
            delay={i * 0.05}
            className="rounded-card border-2 border-ink bg-paper p-6 text-left transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
          >
            <p className="font-display text-lg font-bold">{audience.title}</p>
            <p className="mt-1 text-ink-secondary">{audience.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-[650px] text-center font-display text-xl font-bold tracking-tight sm:text-2xl">
          Different backgrounds. Different goals. One community exploring AI
          together.
        </p>
      </Reveal>

      <div className="mt-8 flex justify-center">
        <Button
          href="mailto:hello@ryxai.in?subject=I%20want%20to%20share%20my%20build"
          variant="secondary"
        >
          Share Your Build
        </Button>
      </div>
    </section>
  );
}
