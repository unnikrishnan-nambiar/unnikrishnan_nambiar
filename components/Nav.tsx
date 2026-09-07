'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './ui/Button';
import { nav, site } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll-progress bar: fills left-to-right as the reader moves down the
  // page. Driven by direct style mutation (not React state) so it doesn't
  // trigger a re-render on every scroll frame; rAF-throttled so it never
  // does more than one write per paint.
  useEffect(() => {
    let ticking = false;

    function update() {
      const node = progressRef.current;
      if (!node) return;
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      node.style.transform = `scaleX(${progress})`;
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="h-[3px] bg-border" aria-hidden>
        <div
          ref={progressRef}
          className="h-full origin-left scale-x-0 bg-gradient-to-r from-violet via-pink to-amber transition-transform duration-150 ease-out"
        />
      </div>
      <div className="container-content grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link
          href="/"
          className="col-start-1 shrink-0 justify-self-start"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-5 w-auto sm:h-6" />
          <span className="sr-only">RYX AI Community</span>
        </Link>

        <nav className="col-start-2 hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-1 text-sm font-bold text-ink-secondary transition-colors duration-300 hover:text-violet"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-violet transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-self-end">
          <div className="hidden md:block">
            <Button
              href={site.instagramUrl}
              variant="accent"
              className="px-5 py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow RYX AI Community →
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink transition-transform duration-200 active:scale-90 md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M3 3l12 12M15 3L3 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-all duration-200"
                />
              ) : (
                <path
                  d="M2 5h14M2 9h14M2 13h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-all duration-200"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="animate-dropdown border-t-2 border-ink bg-paper md:hidden"
        >
          <div className="container-content flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-2.5 text-base font-bold text-ink-secondary transition-colors duration-200 hover:bg-card hover:text-violet"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2">
              <Button
                href={site.instagramUrl}
                variant="accent"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Follow RYX AI Community →
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
