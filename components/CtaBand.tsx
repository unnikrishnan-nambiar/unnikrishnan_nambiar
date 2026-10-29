import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { site } from '@/data/site';

// Closing call to action, shared by every page.
export default function CtaBand({
  title = (
    <>
      Tell us your problem.
      <br />
      We&apos;ll show you the <span className="accent-serif">solution.</span>
    </>
  ),
  body = "A 30-minute call. We'll map where AI can save you time or win you more leads, and tell you honestly if it can't.",
}: {
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="container-content py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-[28px] border border-line bg-surface px-6 py-14 sm:px-14 sm:py-20">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="animate-glow absolute -bottom-32 -right-24 h-[360px] w-[520px] rounded-full bg-accent/30 blur-[110px]"
        />
        <div className="relative max-w-[760px]">
          <h2 className="headline text-[36px] sm:text-[56px]">{title}</h2>
          <p className="mt-5 max-w-[540px] text-lg leading-relaxed text-muted">{body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" arrow>
              Book a 30-minute call
            </Button>
            <Button href={site.whatsappUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
