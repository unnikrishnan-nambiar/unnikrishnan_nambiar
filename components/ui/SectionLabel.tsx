export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-white/20 bg-ink px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-paper"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
      }}
    >
      {children}
    </span>
  );
}
