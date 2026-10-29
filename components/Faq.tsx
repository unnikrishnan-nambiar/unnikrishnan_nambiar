// Numbered accordion FAQ built on <details>, so it works without JS.
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <details key={item.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start gap-6 [&::-webkit-details-marker]:hidden">
            <span className="w-8 shrink-0 pt-1 text-sm tabular-nums text-subtle">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex-1 font-display text-xl tracking-tight text-fg sm:text-2xl">{item.q}</span>
            <span
              aria-hidden
              className="pt-1 text-2xl leading-none text-muted transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="ml-14 mt-4 max-w-[640px] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
