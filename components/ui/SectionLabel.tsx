export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex rounded-2xl bg-indigo-dark p-3"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
      }}
    >
      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-paper">
        {children}
      </span>
    </div>
  );
}
