import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ChatMock from '@/components/ChatMock';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import FerryPricing from '@/components/FerryPricing';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { ferryAnalytics, ferryFaq, ferryFeatures, ferrySteps } from '@/data/ferry';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/ferry',
  'Ferry - AI Website Sales Agent by RYX AI',
  'Ferry is an AI sales agent built from your own website. It answers visitors, qualifies leads and books meetings around the clock. Starter from ₹2,000/month. Early access open.'
);

const problems = [
  { title: 'Unanswered questions', body: 'Visitors leave without what they came for.' },
  { title: 'Slow responses', body: 'Interest cools before anyone replies.' },
  { title: 'No engineering time', body: 'Building a custom AI agent is out of reach.' },
];

export default function FerryPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="bg-grid mask-fade-b absolute inset-0" />
          <div
            aria-hidden
            className="animate-glow absolute -top-40 left-1/3 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-accent/30 blur-[140px]"
          />
          <div className="container-content relative grid items-center gap-14 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1.2fr_1fr]">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">Launching soon</span>
                <Eyebrow>AI website sales agent, by RYX AI</Eyebrow>
              </div>
              <h1 className="headline mt-7 text-[72px] sm:text-[112px] lg:text-[136px]">
                Ferry<span className="text-accent-bright">.</span>
              </h1>
              <p className="mt-4 max-w-[560px] text-2xl leading-snug tracking-tight text-fg sm:text-3xl">
                Built from your own website. It answers visitors, qualifies leads and books meetings,{' '}
                <span className="accent-serif">around the clock.</span>
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="/contact?interest=ferry#early-access" arrow>
                  Get early access
                </Button>
                <Button href="#pricing" variant="secondary">
                  See pricing
                </Button>
              </div>
              <p className="mt-5 text-sm text-subtle">Starter from ₹2,000/month · Live in a day</p>
            </div>
            <div className="animate-fade-up flex justify-center [animation-delay:150ms] lg:justify-end">
              <ChatMock />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="container-content py-24 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <Eyebrow>The problem</Eyebrow>
              <h2 className="headline mt-5 text-[38px] sm:text-[54px]">
                Small businesses lose website visitors they <span className="accent-serif">already paid</span> to
                attract.
              </h2>
              <p className="mt-6 max-w-[460px] text-lg leading-relaxed text-muted">
                Hiring a team to answer every visitor, in real time, isn&apos;t economical. So most questions go
                unanswered.
              </p>
            </Reveal>
            <div className="divide-y divide-line self-end border-y border-line">
              {problems.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06} className="flex gap-6 py-6">
                  <span className="pt-1 text-sm tabular-nums text-subtle">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-line bg-surface/50 py-24 sm:py-28">
          <div className="container-content">
            <Reveal>
              <Eyebrow>The agent</Eyebrow>
              <h2 className="headline mt-5 max-w-[760px] text-[38px] sm:text-[54px]">
                A sales agent that <span className="accent-serif">builds itself</span> from your website.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {ferrySteps.map((s, i) => (
                <Reveal key={s.step} delay={i * 0.08} className="card p-8">
                  <p className="font-display text-5xl font-semibold tracking-tight text-accent-bright/80">{s.step}</p>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm text-subtle">
              Go live with one script tag or the WordPress plugin.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="container-content py-24 sm:py-28">
          <Reveal>
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2 className="headline mt-5 max-w-[760px] text-[38px] sm:text-[54px]">
              Seven core features, <span className="accent-serif">all live in a day.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {ferryFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.05} className="bg-night p-7">
                <p className="text-sm tabular-nums text-subtle">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.body}</p>
              </Reveal>
            ))}
            <div className="flex flex-col justify-between bg-accent p-7 text-white">
              <p className="font-display text-xl font-semibold tracking-tight">Voice agents</p>
              <p className="mt-8 text-sm text-white/80">Coming soon to Ferry.</p>
            </div>
          </div>
        </section>

        {/* Analytics */}
        <section className="container-content pb-24 sm:pb-28">
          <Reveal>
            <Eyebrow>Analytics</Eyebrow>
            <h2 className="headline mt-5 max-w-[760px] text-[38px] sm:text-[54px]">
              See how your agent and your website are doing, <span className="accent-serif">in one place.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {ferryAnalytics.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08} className="card p-8">
                <p className="text-sm text-subtle">{a.question}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 border-t border-line py-24 sm:py-28">
          <div className="container-content">
            <Reveal className="text-center">
              <Eyebrow className="justify-center">Pricing</Eyebrow>
              <h2 className="headline mx-auto mt-5 max-w-[760px] text-[38px] sm:text-[54px]">
                Simple monthly pricing. <span className="accent-serif">No surprises.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[520px] text-muted">
                Ferry is launching soon. Get early access now and we&apos;ll set you up first.
              </p>
            </Reveal>
            <div className="mx-auto mt-14 max-w-[1000px]">
              <FerryPricing />
              <p className="mt-6 text-center text-xs text-subtle">Prices exclude applicable taxes.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container-content pb-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="headline mt-5 text-[38px] sm:text-[54px]">
                Questions, <span className="accent-serif">answered.</span>
              </h2>
            </Reveal>
            <Faq items={ferryFaq} />
          </div>
        </section>

        <CtaBand
          title={
            <>
              Put Ferry on your website.
              <br />
              <span className="accent-serif">Be first in line.</span>
            </>
          }
          body="Early access is open. Tell us about your business and website and we'll get your agent live."
        />
      </main>
      <Footer />
    </>
  );
}
