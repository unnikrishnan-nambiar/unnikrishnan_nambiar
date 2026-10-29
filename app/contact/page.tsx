import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import EarlyAccessForm from '@/components/EarlyAccessForm';
import Eyebrow from '@/components/ui/Eyebrow';
import { mailto, site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/contact',
  'Contact - RYX AI',
  'Book a 30-minute call with RYX AI, or request early access to Ferry, the AI sales agent for your website.'
);

const channels = [
  {
    label: 'Book a 30-minute call',
    value: 'Pick a time by email',
    href: mailto('Book a 30-minute call', "Hi RYX AI, I'd like to book a 30-minute call. Here's a bit about my business:\n\n"),
  },
  { label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsappUrl, external: true },
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phoneDisplay, href: `tel:${site.phone}` },
  {
    label: 'Talk to our AI assistant',
    value: site.aiAssistantPhoneDisplay,
    href: `tel:${site.aiAssistantPhone}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Tell us your problem. <span className="accent-serif">We&apos;ll show you the solution.</span>
            </>
          }
          intro="Whether it's a custom AI agent or early access to Ferry, start here. We usually reply within one working day."
        />

        <section className="container-content pb-24 sm:pb-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span>
                    <span className="block text-sm text-subtle">{c.label}</span>
                    <span className="mt-1 block font-display text-xl tracking-tight text-fg transition-colors group-hover:text-accent-bright sm:text-2xl">
                      {c.value}
                    </span>
                  </span>
                  <span aria-hidden className="text-xl text-subtle transition-transform group-hover:translate-x-1 group-hover:text-fg">
                    →
                  </span>
                </a>
              ))}
            </div>

            <div id="early-access" className="card scroll-mt-24 p-6 sm:p-10">
              <Eyebrow>Ferry early access &amp; enquiries</Eyebrow>
              <h2 className="headline mt-4 text-3xl sm:text-4xl">Get in touch</h2>
              <p className="mt-3 text-muted">
                Ferry Starter is from ₹2,000/month. Premium (₹5,000/month) is coming soon.
              </p>
              <div className="mt-8">
                <EarlyAccessForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
