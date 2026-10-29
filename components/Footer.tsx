import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/data/site';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Ferry', href: '/ferry' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Talk to us',
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phoneDisplay, href: `tel:${site.phone}` },
      { label: 'WhatsApp', href: site.whatsappUrl },
      { label: `Call our AI: ${site.aiAssistantPhoneDisplay}`, href: `tel:${site.aiAssistantPhone}` },
    ],
  },
  {
    heading: 'Follow',
    links: [
      { label: 'LinkedIn', href: site.linkedinUrl },
      { label: 'Instagram', href: site.instagramUrl },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-7 w-auto" />
            <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-muted">
              AI for sales, marketing and automation. Built for businesses in India and beyond.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} className="text-sm text-muted transition-colors hover:text-fg">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-fg"
                        {...(link.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          aria-hidden
          className="pointer-events-none mt-16 select-none font-display text-[22vw] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.04] md:text-[15vw] lg:text-[200px]"
        >
          ryx ai
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:justify-between">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
