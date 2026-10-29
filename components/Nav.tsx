'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Button from './ui/Button';
import { nav } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-night/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-6 w-auto sm:h-7" />
          <span className="sr-only">RYX AI home</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-white/[0.02] p-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                isActive(item.href) ? 'bg-white/10 text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="/contact" className="px-5 py-2 text-sm">
              Book a call
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 6h14M2 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="animate-dropdown border-t border-line md:hidden">
          <div className="container-content flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 font-display text-2xl tracking-tight text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 w-full" onClick={() => setOpen(false)}>
              Book a call
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
