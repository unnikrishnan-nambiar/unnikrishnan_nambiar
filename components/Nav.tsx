import Logo from './Logo';

export default function Nav() {
  return (
    <header className="border-b border-hairline">
      <div className="section flex items-center justify-between py-5">
        <a href="#top" className="shrink-0">
          <Logo className="h-6 w-auto sm:h-7" />
          <span className="sr-only">RYX AI</span>
        </a>
        <a
          href="#join"
          className="rounded-full bg-ink px-5 py-2.5 font-body text-sm font-semibold text-paper transition hover:bg-gold"
        >
          Join RYX
        </a>
      </div>
    </header>
  );
}
