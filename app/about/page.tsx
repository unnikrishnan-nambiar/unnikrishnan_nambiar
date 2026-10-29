import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/about',
  'About - RYX AI',
  'RYX AI builds reliable AI agents for businesses, tested before launch and improved after it, in the languages customers actually speak.'
);

const principles = [
  {
    title: 'Reliable, not just impressive',
    body: "Deploying an AI agent is easy. Operating it reliably is the hard part. Every agent we ship goes through AI-powered QA across scenarios, personalities and edge cases before customers ever see it.",
  },
  {
    title: "Built for India's languages",
    body: "Most of India doesn't primarily speak English. We build and test agents natively in regional languages, with cultural context, not just translated after the fact.",
  },
  {
    title: 'One knowledge layer, every channel',
    body: 'Website, WhatsApp and voice share the same knowledge and memory. Build once and add channels without rebuilding the stack.',
  },
  {
    title: 'Gets better every week',
    body: 'Real conversations become recommendations, validated by a human before they ship. Your agent improves instead of silently drifting.',
  },
];

const team = [
  {
    name: 'Unnikrishnan Nambiar',
    role: 'Product · Sales · Consulting',
    points: ['Bridges AI capability and business reality', 'Owns product vision and go-to-market'],
  },
  {
    name: 'Shamil Muhammed',
    role: 'AI · Engineering',
    points: ['Built the entire technical stack', 'LLMs, RAG, voice AI, eval frameworks'],
  },
  {
    name: 'Salmanul Faris',
    role: 'Sales · Marketing · Growth',
    points: ['Owns sales and marketing systems', 'Industry relationships and expansion'],
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About RYX AI"
          title={
            <>
              AI is ready. Deployment isn&apos;t. <span className="accent-serif">That&apos;s the gap we fill.</span>
            </>
          }
          intro="We build AI agents for sales, marketing and operations, and we stay with them after launch. Tested before customers see them, measured while they run, and improved from every real conversation."
        />

        <section className="container-content py-16 sm:py-24">
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06} className="bg-night p-8 sm:p-10">
                <p className="text-sm tabular-nums text-subtle">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h2>
                <p className="mt-3 max-w-[480px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-surface/50 py-24 sm:py-28">
          <div className="container-content">
            <Reveal>
              <Eyebrow>The team</Eyebrow>
              <h2 className="headline mt-5 max-w-[760px] text-[38px] sm:text-[54px]">
                Three founders. Three functions. <span className="accent-serif">No gaps.</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.08} className="card p-8">
                  <div
                    aria-hidden
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-bright font-display text-lg font-semibold text-white"
                  >
                    {m.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')}
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{m.name}</h3>
                  <p className="mt-1 text-sm text-accent-bright">{m.role}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-5 text-muted">
                    {m.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
