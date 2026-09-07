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
    <section id="join" className="container-content scroll-mt-20 py-14 text-center sm:py-24">
      <Reveal>
        <h2 className="mx-auto max-w-[750px] font-display text-[34px] font-semibold leading-tight tracking-tight sm:text-[40px] lg:text-[48px]">
          Get the interesting stuff.
        </h2>
        <p className="mx-auto mt-4 max-w-[650px] text-lg leading-[1.6] text-ink-secondary">
          AI is moving too fast to follow everything. Get the useful stuff
          without the noise — new tools, interesting developments, practical
          ideas, RYX AI experiments.
        </p>
      </Reveal>

      {IS_STATIC_SITE ? (
        <p className="mx-auto mt-8 max-w-[480px] rounded-card border border-border bg-card px-6 py-4 text-ink-secondary">
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
        <p className="mx-auto mt-8 max-w-[480px] rounded-card border border-border bg-card px-6 py-4 text-ink">
          You&apos;re in. Welcome to RYX AI.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-[480px] flex-col gap-3 sm:flex-row"
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
            className="w-full flex-1 rounded border border-border bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
          />
          <Button type="submit" variant="primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Joining…' : 'Join RYX AI'}
          </Button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="mt-4 text-sm text-ink-muted">No spam. Just useful AI.</p>
    </section>
  );
}
