// Small uppercase section label with a dot, used above headlines.
export default function Eyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted ${className}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
      {children}
    </p>
  );
}
