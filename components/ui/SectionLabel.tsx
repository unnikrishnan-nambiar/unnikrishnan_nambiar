export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex rounded-2xl bg-ink p-3"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
      }}
    >
      <span className="rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-paper">
        {children}
      </span>
    </div>
  );
}
