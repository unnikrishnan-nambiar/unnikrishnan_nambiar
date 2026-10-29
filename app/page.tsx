import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ChatMock from '@/components/ChatMock';
import CtaBand from '@/components/CtaBand';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { useCases } from '@/data/useCases';

const problems = [
  { title: 'Slow replies', body: 'Leads go cold when nobody answers within minutes.' },
  { title: 'Leads lost', body: 'Enquiries stay in personal WhatsApp and never reach the CRM.' },
  { title: 'Repetitive work', body: 'Teams answer the same questions and retype the same data all day.' },
  { title: 'After hours', body: 'Nights and weekends go unanswered, and to competitors.' },
];

const pillars = [
  {
    kicker: 'Win more',
    title: 'AI for Sales',
    items: ['Answer and qualify every lead', 'Instant call-backs', 'Follow-ups that never stop', 'Leads straight into your CRM'],
  },
  {
    kicker: 'Get seen',
    title: 'AI for Marketing',
    items: ['SEO and AEO automation', 'Campaign automation', 'Lead generation', 'Website and conversion'],
  },
  {
    kicker: 'Save time',
    title: 'AI for Automation',
    items: ['Support agents 24x7', 'Document data extraction', 'Bookings and reminders', 'Daily reports on WhatsApp'],
  },
];

const process = [
  { title: 'Understand', body: 'Your needs, your customers and the use cases worth automating.' },
  { title: 'Build', body: 'AI agents built and integrated with the tools you already use.' },
  { title: 'Agentic QA', body: 'AI-powered testing across scenarios, languages and channels.' },
  { title: 'Production ready', body: 'Checked for quality, safety, compliance and reliability.' },
  { title: 'Deploy', body: 'Live on your website, WhatsApp or phone line.' },
  { title: 'Learn', body: 'We evaluate real conversations and keep improving the agent.' },
];

const integrations = {
  Channels: ['WhatsApp Business API', 'Website', 'Instagram', 'Phone', 'Email'],
  'Your systems': ['Zoho', 'HubSpot', 'Salesforce', 'Dynamics 365', 'Odoo', 'Google Sheets', 'Cal.com'],
  'AI & languages': ['Leading LLMs', 'ElevenLabs voice', 'AWS', 'English', 'Hindi', 'Malayalam', 'Arabic', 'Urdu'],
};

const featured = ['chatbot-crm', 'instant-lead-callback', 'whatsapp-enquiry-assistant', 'booking-reminders'];

export default function Home() {
  const marquee = [...integrations.Channels, ...integrations['Your systems'], ...integrations['AI & languages']];

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative -mt-16 overflow-hidden pt-16 sm:-mt-[72px] sm:pt-[72px]">
          <div aria-hidden className="bg-grid mask-fade-b absolute inset-0" />
          <div
            aria-hidden
            className="animate-glow absolute -top-48 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-accent/30 blur-[140px]"
          />
          <div className="container-content relative grid items-center gap-14 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
            <div className="animate-fade-up">
              <Eyebrow>AI solutions for sales, marketing &amp; automation</Eyebrow>
              <h1 className="headline mt-7 text-[52px] sm:text-[80px] lg:text-[96px]">
                AI that works
                <br />
                for your <span className="accent-serif">business.</span>
              </h1>
              <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-muted sm:text-xl">
                We build AI agents that answer every enquiry, follow up every lead and take repetitive work off your
                team. On your website, WhatsApp and phone, in the languages your customers speak.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact" arrow>
                  Book a 30-minute call
                </Button>
                <Button href="/ferry" variant="secondary">
                  Meet Ferry
                </Button>
              </div>
            </div>
            <div className="animate-fade-up flex justify-center [animation-delay:150ms] lg:justify-end">
              <ChatMock />
            </div>
          </div>

          <div className="mask-fade-x relative overflow-hidden border-y border-line py-5">
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm text-subtle">
              {[...marquee, ...marquee].map((item, i) => (
                <span key={i} className="flex items-center gap-10">
                  {item}
                  <span aria-hidden className="h-1 w-1 rounded-full bg-line-strong" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="container-content py-24 sm:py-32">
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="headline mt-5 max-w-[760px] text-[40px] sm:text-[60px]">
              Where businesses lose <span className="accent-serif">time and money.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="bg-night p-7 sm:p-8">
                <p className="text-sm tabular-nums text-subtle">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What we build */}
        <section className="container-content pb-24 sm:pb-32">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>What we build</Eyebrow>
              <h2 className="headline mt-5 max-w-[760px] text-[40px] sm:text-[60px]">
                AI for sales, marketing <span className="accent-serif">and automation.</span>
              </h2>
            </div>
            <Button href="/solutions" variant="ghost" arrow>
              See all 12 use cases
            </Button>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="card group p-8 transition-colors hover:border-line-strong">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-bright">{p.kicker}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{p.title}</h3>
                <ul className="mt-8 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 border-t border-line pt-3 text-muted">
                      <span aria-hidden className="text-accent-bright">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ferry spotlight */}
        <section className="container-content pb-24 sm:pb-32">
          <Reveal className="relative overflow-hidden rounded-[28px] border border-accent/40 bg-gradient-to-br from-accent/25 via-surface to-surface">
            <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
            <div className="relative grid items-center gap-12 p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:p-16">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">Launching soon</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">Our product</span>
                </div>
                <h2 className="headline mt-6 text-[48px] sm:text-[72px]">
                  Ferry<span className="text-accent-bright">.</span>
                </h2>
                <p className="mt-4 max-w-[520px] text-xl leading-relaxed text-fg">
                  An AI sales agent for your website, built from your own website.
                </p>
                <p className="mt-4 max-w-[520px] leading-relaxed text-muted">
                  It answers visitors from your content, qualifies leads and books meetings, around the clock. Live in a
                  day with one script tag.
                </p>
                <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
                  <p>
                    <span className="text-sm text-subtle">Starter from </span>
                    <span className="font-display text-3xl font-semibold">₹2,000</span>
                    <span className="text-sm text-subtle">/month</span>
                  </p>
                  <p className="text-sm text-muted">
                    Premium ₹5,000/month <span className="text-subtle">· coming soon</span>
                  </p>
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="/contact?interest=ferry#early-access" arrow>
                    Get early access
                  </Button>
                  <Button href="/ferry" variant="secondary">
                    How Ferry works
                  </Button>
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  ['Builds itself', 'Crawls your site and PDFs and writes its own prompt.'],
                  ['Engages', 'Opens on time on page, scroll or exit intent.'],
                  ['Converts', 'Qualifies leads and books meetings through Cal.com.'],
                  ['Measures', 'Agent, traffic and SEO/AEO dashboards in one place.'],
                ].map(([t, b]) => (
                  <li key={t} className="rounded-2xl border border-line bg-night/50 p-5 backdrop-blur">
                    <p className="font-display text-lg font-semibold">{t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Use cases */}
        <section className="container-content pb-24 sm:pb-32">
          <Reveal>
            <Eyebrow>Use cases</Eyebrow>
            <h2 className="headline mt-5 max-w-[820px] text-[40px] sm:text-[60px]">
              Real problems, <span className="accent-serif">solved with AI.</span>
            </h2>
          </Reveal>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {featured.map((slug, i) => {
              const u = useCases.find((x) => x.slug === slug)!;
              return (
                <Reveal key={slug} delay={i * 0.05}>
                  <Link
                    href={`/solutions#${u.slug}`}
                    className="group grid items-center gap-3 py-7 transition-colors sm:grid-cols-[60px_1.2fr_1.5fr_auto] sm:gap-8"
                  >
                    <span className="text-sm tabular-nums text-subtle">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-bright sm:text-3xl">
                      {u.title}
                    </span>
                    <span className="leading-relaxed text-muted">{u.benefit}</span>
                    <span aria-hidden className="hidden text-2xl text-subtle transition-transform group-hover:translate-x-1 group-hover:text-fg sm:block">
                      →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8">
            <Button href="/solutions" variant="secondary" arrow>
              Explore all use cases
            </Button>
          </div>
        </section>

        {/* How we work */}
        <section className="border-y border-line bg-surface/50 py-24 sm:py-32">
          <div className="container-content">
            <Reveal>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="headline mt-5 max-w-[820px] text-[40px] sm:text-[60px]">
                From understanding to <span className="accent-serif">continuous improvement.</span>
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 0.05} className="card p-7">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-sm tabular-nums text-muted">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Integrations */}
        <section className="container-content py-24 sm:py-32">
          <Reveal>
            <Eyebrow>Built on proven technology</Eyebrow>
            <h2 className="headline mt-5 max-w-[760px] text-[40px] sm:text-[60px]">
              Works with the tools <span className="accent-serif">you already use.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {Object.entries(integrations).map(([group, items], i) => (
              <Reveal key={group} delay={i * 0.08} className="card p-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">{group}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
