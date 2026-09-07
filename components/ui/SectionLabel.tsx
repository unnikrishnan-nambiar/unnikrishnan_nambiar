export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-secondary">
      {children}
    </p>
  );
}
