'use client';

import { useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { site } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success';

// Posts a plain HTML form into a hidden iframe targeting the deployed
// Google Apps Script Web App URL (site.signupFormUrl), which appends a row
// to the "RYX AI Community Signups" Sheet — see scripts/signup-apps-script.gs
// for the script itself and the one-time deployment steps. A hidden iframe
// + form target is used instead of fetch() specifically because Apps
// Script Web Apps are unreliable to read cross-origin via fetch/XHR; a
// real form POST sidesteps that entirely. The response can't be read
// (it's a cross-origin navigation), so "success" here just means the
// browser finished the request, not that Google's response was actually
// checked.
export default function SignupForm() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const hasSubmittedRef = useRef(false);

  function handleSubmit() {
    hasSubmittedRef.current = true;
    setStatus('submitting');
  }

  function handleIframeLoad() {
    // The iframe also fires "load" once on initial mount (before any
    // submission) — ignore that one.
    if (!hasSubmittedRef.current) return;
    setStatus('success');
    formRef.current?.reset();
  }

  if (!site.signupFormUrl) {
    return (
      <p className="mx-auto mt-8 max-w-[480px] rounded-card border-2 border-ink bg-paper px-6 py-4 text-ink-secondary">
        Sign-ups open soon. In the meantime,{' '}
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-violet hover:text-violet-dark"
        >
          DM us on Instagram
        </a>{' '}
        to get on the list.
      </p>
    );
  }

  if (status === 'success') {
    return (
      <p className="mx-auto mt-8 max-w-[480px] rounded-card border-2 border-ink bg-paper px-6 py-4 text-ink">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        action={site.signupFormUrl}
        method="POST"
        target="ryx-signup-frame"
        onSubmit={handleSubmit}
        className="mx-auto mt-8 grid max-w-[480px] gap-3 text-left"
      >
        <label htmlFor="signup-name" className="sr-only">
          Your name
        </label>
        <input
          id="signup-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className="w-full rounded-2xl border-2 border-ink bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-pink/25"
        />

        <label htmlFor="signup-email" className="sr-only">
          Your email
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email"
          className="w-full rounded-2xl border-2 border-ink bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-pink/25"
        />

        <label htmlFor="signup-interest" className="sr-only">
          What do you want to test?
        </label>
        <input
          id="signup-interest"
          name="interest"
          type="text"
          placeholder="What do you want to test? (optional)"
          className="w-full rounded-2xl border-2 border-ink bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-pink/25"
        />

        <Button type="submit" variant="accent" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Signing up…' : 'Sign Up to Test With Us →'}
        </Button>
      </form>

      <iframe
        name="ryx-signup-frame"
        onLoad={handleIframeLoad}
        hidden
        title="Sign-up submission"
      />
    </>
  );
}
