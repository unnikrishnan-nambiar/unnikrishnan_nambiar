type BadgeProps = {
  children: React.ReactNode;
  variant?: 'neutral' | 'violet' | 'pink' | 'cyan' | 'amber';
};

// pink/cyan use the -dark step, not DEFAULT: white text on the DEFAULT
// tone is only ~3.5:1 (pink) / ~2.4:1 (cyan) — both fail WCAG AA's 4.5:1
// text-contrast floor at this badge's small bold size. Same fix as
// SectionLabel; violet/amber's DEFAULT already clears it.
const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
  neutral: 'border-border bg-card text-ink-secondary',
  violet: 'border-violet bg-violet text-paper',
  pink: 'border-pink-dark bg-pink-dark text-paper',
  cyan: 'border-cyan-dark bg-cyan-dark text-paper',
  amber: 'border-amber bg-amber text-ink',
};

export default function Badge({ children, variant = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
