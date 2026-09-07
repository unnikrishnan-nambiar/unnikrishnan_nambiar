type BadgeProps = {
  children: React.ReactNode;
  variant?: 'neutral' | 'indigo';
};

export default function Badge({ children, variant = 'neutral' }: BadgeProps) {
  const styles =
    variant === 'indigo'
      ? 'border-indigo bg-indigo text-paper'
      : 'border-border bg-card text-ink-secondary';

  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${styles}`}
    >
      {children}
    </span>
  );
}
