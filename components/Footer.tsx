import Logo from './Logo';
import { site } from '@/data/site';

const columns = [
  {
    heading: 'Explore',
    links: [
      { label: 'AI News', href: '/#discover' },
      { label: 'AI Tools', href: '/tools' },
      { label: 'Guides', href: '/guides' },
      { label: 'Experiments', href: '/experiments' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Join RYX AI', href: '/#join' },
      { label: 'Share Your Build', href: 'mailto:hello@ryxai.in?subject=I%20want%20to%20share%20my%20build' },
      { label: 'Events', href: undefined, comingSoon: true },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Contact', href: 'mailto:hello@ryxai.in' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-content py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-5 w-auto" />
            <p className="mt-3 text-sm text-ink-muted">{site.tags.join(' · ')}</p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-semibold text-ink">{column.heading}</p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.comingSoon ? (
                      <span className="text-sm text-ink-muted">
                        {link.label} <span className="text-ink-muted">(soon)</span>
                      </span>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-ink-secondary hover:text-ink"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-sm font-semibold text-ink">Social</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-secondary hover:text-ink"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-secondary hover:text-ink"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-secondary hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-ink-muted">{site.domain} © 2026</p>
        </div>
      </div>
    </footer>
  );
}
