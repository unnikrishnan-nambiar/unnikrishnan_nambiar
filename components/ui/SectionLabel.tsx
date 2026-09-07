export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium tracking-wide text-ink-secondary">{children}</p>
  );
}
