'use client';

import { useId, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { site } from '@/data/site';

type Status = 'idle' | 'submitting' | 'success';

// Same hidden-iframe POST pattern as SignupForm.tsx, into the same deployed
// Apps Script Web App / "RYX AI Community Signups" Sheet — see
// scripts/signup-apps-script.gs. This form only asks for name + email (it's
// the general "join the community" ask, not the experiments sign-up), so a
// fixed `interest` value tags these rows as coming from the join popup
// rather than the experiments form, without needing any change to the
// deployed script.
export default function JoinForm() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const hasSubmittedRef = useRef(false);
  const nameId = useId();
  const emailId = useId();

  function handleSubmit() {
    hasSubmittedRef.current = true;
    setStatus('submitting');
  }

  function handleIframeLoad() {
    if (!hasSubmittedRef.current) return;
    setStatus('success');
    formRef.current?.reset();
  }

  if (!site.signupFormUrl) {
    return (
      <p className="text-ink-secondary">
        Sign-ups aren&apos;t live yet. DM us on{' '}
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
    );
  }

  if (status === 'success') {
    return <p className="text-ink">You&apos;re in. Welcome to RYX AI Community.</p>;
  }

  return (
    <>
      <form
        ref={formRef}
        action={site.signupFormUrl}
        method="POST"
        target="ryx-join-frame"
        onSubmit={handleSubmit}
        className="grid gap-3 text-left"
      >
        <input type="hidden" name="interest" value="Newsletter signup" />

        <label htmlFor={nameId} className="sr-only">
          Your name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className="w-full rounded-2xl border-2 border-ink bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-violet/25"
        />

        <label htmlFor={emailId} className="sr-only">
          Your email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email"
          className="w-full rounded-2xl border-2 border-ink bg-paper px-4 py-2.5 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-violet/25"
        />

        <Button type="submit" variant="primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Joining…' : 'Join RYX AI Community'}
        </Button>
      </form>

      <iframe name="ryx-join-frame" onLoad={handleIframeLoad} hidden title="Join submission" />
    </>
  );
}
