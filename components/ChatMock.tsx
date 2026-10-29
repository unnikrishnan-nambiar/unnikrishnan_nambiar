// Illustrative Ferry conversation for hero visuals. Static markup — a
// product mock, not a live widget.
export default function ChatMock({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative w-full max-w-[420px] rounded-[26px] border border-line-strong bg-raised/90 p-4 shadow-[0_40px_120px_-30px_rgba(61,90,254,0.55)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line px-1 pb-3">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-white">
          F
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-raised bg-mint" />
        </span>
        <div>
          <p className="text-sm font-medium text-fg">Ferry</p>
          <p className="text-xs text-subtle">Answers from your website · online</p>
        </div>
      </div>

      <div className="space-y-3 px-1 py-4 text-[13.5px] leading-relaxed">
        <p className="max-w-[85%] rounded-2xl rounded-tl-md bg-white/[0.06] px-3.5 py-2.5 text-fg">
          Hi! Looking for a 2-bedroom? I can show you what&apos;s available and book a site visit.
        </p>
        <p className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-accent px-3.5 py-2.5 text-white">
          Yes, ready to move, near the metro. What&apos;s the price range?
        </p>
        <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white/[0.06] px-3.5 py-2.5 text-fg">
          Three units match. Here&apos;s the floor plan for the most popular one:
          <div className="mt-2.5 grid grid-cols-3 gap-1.5" aria-hidden>
            <span className="aspect-[4/3] rounded-lg bg-gradient-to-br from-accent/50 to-accent/10" />
            <span className="aspect-[4/3] rounded-lg bg-gradient-to-br from-mint/40 to-mint/5" />
            <span className="aspect-[4/3] rounded-lg bg-gradient-to-br from-white/25 to-white/5" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['Book a site visit', 'See all units', 'Talk to sales'].map((s) => (
            <span key={s} className="rounded-full border border-line-strong px-3 py-1 text-xs text-muted">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1.5 rounded-full border border-line bg-night/60 px-4 py-2.5 text-xs text-subtle">
        <span className="h-1.5 w-1.5 animate-typing rounded-full bg-muted" />
        <span className="h-1.5 w-1.5 animate-typing rounded-full bg-muted [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-typing rounded-full bg-muted [animation-delay:300ms]" />
        <span className="ml-2">Ferry is typing</span>
      </div>
    </div>
  );
}
