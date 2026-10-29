import Eyebrow from './ui/Eyebrow';

// Top-of-page header for inner pages: eyebrow, big headline, intro line.
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid mask-fade-b absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
      />
      <div className="container-content relative pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="animate-fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="headline mt-6 max-w-[920px] text-[44px] sm:text-[64px] lg:text-[80px]">{title}</h1>
          {intro && <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-muted">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
