type LabelColor = 'ink' | 'violet' | 'pink' | 'cyan' | 'amber';

// pink/cyan use the -dark step, not DEFAULT: white text on the DEFAULT
// tone is only ~3.5:1 (pink) / ~2.4:1 (cyan) — both fail WCAG AA's 4.5:1
// text-contrast floor at this label's small bold size. violet/amber's
// DEFAULT already clears it.
const fills: Record<LabelColor, string> = {
  ink: 'bg-ink text-paper',
  violet: 'bg-violet text-paper',
  pink: 'bg-pink-dark text-paper',
  cyan: 'bg-cyan-dark text-paper',
  amber: 'bg-amber text-ink',
};

export default function SectionLabel({
  children,
  color = 'ink',
}: {
  children: React.ReactNode;
  color?: LabelColor;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] ${fills[color]}`}
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
      }}
    >
      {children}
    </span>
  );
}
