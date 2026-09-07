'use client';

import { useId, useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Reveal from '@/components/ui/Reveal';
import JoinForm from './JoinForm';

export default function Newsletter() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

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

        <div className="mt-6 flex justify-center">
          <Button type="button" variant="primary" onClick={() => setOpen(true)}>
            Join RYX AI Community
          </Button>
        </div>

        <p className="mt-4 text-sm text-ink-muted">No spam. Just useful AI.</p>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} titleId={titleId}>
        <h3 id={titleId} className="font-display text-2xl font-bold">
          Join RYX AI Community
        </h3>
        <p className="mt-2 text-ink-secondary">
          Real tools, real workflows, real experiments. No hype, no spam.
        </p>
        <div className="mt-6">
          <JoinForm />
        </div>
      </Modal>
    </section>
  );
}
