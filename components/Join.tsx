'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Set by the GitHub Pages build only (see .github/workflows/deploy-pages.yml).
// That build is fully static and has no /api/join route to submit to.
const IS_STATIC_SITE = process.env.NEXT_PUBLIC_STATIC_SITE === 'true';

export default function Join() {
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setContact('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="join" className="section py-16 sm:py-20">
      <div className="mx-auto max-w-prose text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Join RYX</h2>
        <p className="mt-4 text-ink/70">
          Don&apos;t just watch AI evolve. Follow along as we figure it out.
        </p>

        {IS_STATIC_SITE ? (
          <p className="mt-8 rounded-2xl bg-ink/5 px-6 py-4 text-ink/80">
            Signups aren&apos;t live on this preview. DM us on{' '}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2"
            >
              Instagram
            </a>{' '}
            to join for now.
          </p>
        ) : status === 'success' ? (
          <p className="mt-8 rounded-2xl bg-ink/5 px-6 py-4 text-ink">
            You&apos;re in. Welcome to RYX.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="contact" className="sr-only">
              Email or WhatsApp number
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              inputMode="email"
              autoComplete="email"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Email or WhatsApp number"
              className="w-full flex-1 rounded-full border border-ink/15 bg-white px-5 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-gold-dark disabled:opacity-60"
            >
              {status === 'submitting' ? 'Joining…' : 'Join RYX'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="mt-4 text-sm text-ink/50">No spam. Just useful AI.</p>
      </div>
    </section>
  );
}
