'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './ui/Button';
import { nav, site } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-5 w-auto sm:h-6" />
          <span className="sr-only">RYX AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
            Follow RYX →
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-9 w-9 items-center justify-center rounded border border-border md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            {open ? (
              <path
                d="M3 3l12 12M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 5h14M2 9h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-border bg-paper md:hidden">
          <div className="container-content flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2.5 text-base font-medium text-ink-secondary hover:bg-card hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2">
              <Button
                href={site.instagramUrl}
                variant="secondary"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Follow RYX →
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
