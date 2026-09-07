'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds, e.g. 0.05, 0.1 — for list/grid items. */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'article';
};

const REVEAL_TRANSITION = 'opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)';

// Lightweight scroll reveal — fade + small rise, matching the standard-tier
// motion tokens (12px, ~600ms) with a smooth expo-out curve rather than
// pulling in an animation library. Renders visible by default (SSR/no-JS/
// crawler safe) and only hides-then-reveals once JS confirms the browser
// allows motion. Uses direct ref/style mutation instead of React state —
// this is a pure DOM visual effect with no data to reconcile, so it skips
// render churn entirely rather than round-tripping through setState.
//
// The reveal transition is applied as an *inline* style, scoped to just the
// reveal itself, and cleared once it finishes — not a persistent Tailwind
// class. Cards wrapped in Reveal often carry their own hover transition
// (a snappier 300ms lift/shadow); if the 600ms reveal timing stayed on the
// element permanently, every hover would inherit that slow duration instead
// of its own. Clearing it after the reveal lets the element's own
// transition classes take over cleanly.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    node.style.opacity = '0';
    node.style.transform = 'translateY(12px)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.style.transition = REVEAL_TRANSITION;
        node.style.transitionDelay = `${delay}s`;
        node.style.opacity = '';
        node.style.transform = '';
        observer.disconnect();

        const cleanup = () => {
          node.style.transition = '';
          node.style.transitionDelay = '';
        };
        node.addEventListener('transitionend', cleanup, { once: true });
        // Fallback in case transitionend never fires (e.g. element removed
        // mid-transition, or a browser quirk) so the inline style can't get
        // stuck overriding hover transitions indefinitely.
        setTimeout(cleanup, 600 + delay * 1000 + 150);
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
