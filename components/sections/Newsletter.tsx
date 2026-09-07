'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Set by the GitHub Pages build only (see .github/workflows/deploy-pages.yml).
// That build is fully static and has no /api/join route to submit to.
const IS_STATIC_SITE = process.env.NEXT_PUBLIC_STATIC_SITE === 'true';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: email }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="join" className="scroll-mt-20 bg-cyan-light py-14 text-center sm:py-20">
      <div className="container-content">
        <Reveal>
          <h2 className="mx-auto max-w-[750px] font-display text-[36px] font-bold leading-[1.05] tracking-tight sm:text-[52px]">
            Skip the noise. Get what&apos;s real.
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-lg leading-[1.5] text-ink-secondary">
            AI moves too fast to follow all of it, and most of what&apos;s
            loud isn&apos;t worth following anyway. Get the useful stuff: real
            tools, real workflows, real experiments. No hype, no spam.
          </p>
        </Reveal>

        {IS_STATIC_SITE ? (
          <p className="mx-auto mt-6 max-w-[480px] rounded-card border-2 border-ink bg-paper px-6 py-4 text-ink-secondary">
            Signups aren&apos;t live on this preview. DM us on{' '}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-violet hover:text-violet-dark"
            >
              Instagram
            </a>{' '}
            to join for now.
          </p>
        ) : status === 'success' ? (
          <p className="mx-auto mt-6 max-w-[480px] rounded-card border-2 border-ink bg-paper px-6 py-4 text-ink">
            You&apos;re in. Welcome to RYX AI Community.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-[480px] flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full flex-1 rounded-2xl border-2 border-ink bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-violet/25"
            />
            <Button type="submit" variant="primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Joining…' : 'Join RYX AI Community'}
            </Button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="mt-4 text-sm text-ink-muted">No spam. Just useful AI.</p>
      </div>
    </section>
  );
}
