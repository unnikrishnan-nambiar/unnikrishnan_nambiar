type LabelColor = 'ink' | 'violet' | 'pink' | 'cyan' | 'amber';

const fills: Record<LabelColor, string> = {
  ink: 'bg-ink text-paper',
  violet: 'bg-violet text-paper',
  pink: 'bg-pink text-paper',
  cyan: 'bg-cyan text-paper',
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
