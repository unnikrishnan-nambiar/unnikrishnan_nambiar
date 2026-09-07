'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds, e.g. 0.05, 0.1 — for list/grid items. */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'article';
};

// Lightweight scroll reveal — fade + small rise, matching the subtle-tier
// motion tokens (12px, ~350ms, ease-out) rather than pulling in an
// animation library. Renders visible by default (SSR/no-JS/crawler safe)
// and only hides-then-reveals once JS confirms the browser allows motion.
// Uses direct ref/style mutation instead of React state — this is a pure
// DOM visual effect with no data to reconcile, so it skips render churn
// entirely rather than round-tripping through setState.
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
        node.style.transitionDelay = `${delay}s`;
        node.style.opacity = '';
        node.style.transform = '';
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={`transition-[opacity,transform] duration-[400ms] ease-out ${className}`}>
      {children}
    </Tag>
  );
}
