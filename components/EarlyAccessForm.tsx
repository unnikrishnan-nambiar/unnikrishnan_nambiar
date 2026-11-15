'use client';

import { useEffect, useRef, type FormEvent } from 'react';
import Button from './ui/Button';
import { mailto, site } from '@/data/site';

const interests = [
  { value: 'ferry', label: 'Ferry early access (Starter)' },
  { value: 'ferry-premium', label: 'Ferry Premium waitlist' },
  { value: 'solution', label: 'A custom AI solution' },
  { value: 'other', label: 'Something else' },
];

const field =
  'min-h-[48px] w-full rounded-xl border border-ink/25 bg-card px-4 py-3 text-base text-ink placeholder:text-ink-3 transition-colors focus:border-signal';

const label = 'grid gap-2 font-semibold text-ink';

// The site is a static export (GitHub Pages), so there's no backend to post
// to. Submitting composes the enquiry and hands it to the visitor's email
// app or WhatsApp, both addressed to RYX.
export default function EarlyAccessForm() {
  const interestRef = useRef<HTMLSelectElement>(null);

  // Preselect from ?interest=… (pricing cards link here with it). Set on the
  // DOM directly: the select is uncontrolled, so there's no state to sync.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('interest');
    if (param && interestRef.current && interests.some((i) => i.value === param)) {
      interestRef.current.value = param;
    }
  }, []);

  function compose(form: HTMLFormElement) {
    const data = new FormData(form);
    const interest = String(data.get('interest'));
    const label = interests.find((i) => i.value === interest)?.label ?? interest;
    const lines = [
      `Interested in: ${label}`,
      `Name: ${data.get('name')}`,
      `Business: ${data.get('business')}`,
      `Website: ${data.get('website') || '-'}`,
      `Phone / WhatsApp: ${data.get('phone')}`,
      '',
      `${data.get('message') || ''}`,
    ];
    return { subject: `${label} - ${data.get('business')}`, body: lines.join('\n') };
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { subject, body } = compose(e.currentTarget);
    window.location.href = mailto(subject, body);
  }

  function onWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form!;
    if (!form.reportValidity()) return;
    const { body } = compose(form);
    window.open(`https://wa.me/${site.phone.replace('+', '')}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className={label}>
        I&apos;m interested in
        <select ref={interestRef} name="interest" defaultValue="ferry" className={field}>
          {interests.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Your name (required)
          <input name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </label>
        <label className={label}>
          Business name (required)
          <input name="business" required autoComplete="organization" className={field} placeholder="Company" />
        </label>
        <label className={label}>
          Website
          <input name="website" type="url" autoComplete="url" className={field} placeholder="https://" />
        </label>
        <label className={label}>
          Phone or WhatsApp (required)
          <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="+91" />
        </label>
      </div>
      <label className={label}>
        What do you want AI to handle?
        <textarea
          name="message"
          rows={4}
          className={field}
          placeholder="e.g. answer website visitors, call back new leads, chase documents on WhatsApp"
        />
      </label>
      <div className="mt-2 flex flex-wrap gap-3">
        <Button type="submit">
          Send by email
        </Button>
        <Button type="button" variant="outline" onClick={onWhatsApp}>
          Send on WhatsApp
        </Button>
      </div>
      <p className="text-sm text-ink-2">
        Opens your email app or WhatsApp with the details filled in, addressed to {site.email}.
      </p>
    </form>
  );
}
