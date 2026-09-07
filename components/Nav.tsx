'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './ui/Button';
import { nav, site } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="h-[3px] bg-gradient-to-r from-violet via-pink to-amber" aria-hidden />
      <div className="container-content grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link href="/" className="shrink-0 justify-self-start" onClick={() => setOpen(false)}>
          <Logo className="h-5 w-auto sm:h-6" />
          <span className="sr-only">RYX AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold text-ink-secondary transition-colors hover:text-violet"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end">
          <div className="hidden md:block">
            <Button
              href={site.instagramUrl}
              variant="accent"
              className="px-5 py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow RYX AI →
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M3 3l12 12M15 3L3 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 5h14M2 9h14M2 13h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t-2 border-ink bg-paper md:hidden">
          <div className="container-content flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-2.5 text-base font-bold text-ink-secondary hover:bg-card hover:text-violet"
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
                Follow RYX AI →
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
