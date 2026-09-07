'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
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
    <section id="join" className="container-content py-9 sm:py-14">
      <div className="max-w-reading">
        <h2 className="font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
          Get the interesting stuff.
        </h2>
        <p className="mt-3 text-lg text-ink-secondary">
          AI is moving too fast to follow everything.
        </p>
        <p className="mt-4 text-lg text-ink-secondary">
          Get the useful stuff without the noise. New tools. Interesting
          developments. Practical ideas. RYX experiments.
        </p>

        {IS_STATIC_SITE ? (
          <p className="mt-8 rounded-card border border-border bg-card px-6 py-4 text-ink-secondary">
            Signups aren&apos;t live on this preview. DM us on{' '}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo hover:text-indigo-dark"
            >
              Instagram
            </a>{' '}
            to join for now.
          </p>
        ) : status === 'success' ? (
          <p className="mt-8 rounded-card border border-border bg-card px-6 py-4 text-ink">
            You&apos;re in. Welcome to RYX.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              className="w-full flex-1 rounded border border-border bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
            />
            <Button type="submit" variant="primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Joining…' : 'Join RYX'}
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
