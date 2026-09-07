type BadgeProps = {
  children: React.ReactNode;
  variant?: 'neutral' | 'violet' | 'pink' | 'cyan' | 'amber';
};

const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
  neutral: 'border-border bg-card text-ink-secondary',
  violet: 'border-violet bg-violet text-paper',
  pink: 'border-pink bg-pink text-paper',
  cyan: 'border-cyan bg-cyan text-paper',
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
