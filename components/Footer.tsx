import Logo from './Logo';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="section flex flex-col items-center gap-6 py-12 text-center">
        <Logo className="h-6 w-auto" />
        <p className="text-sm text-ink-soft">{site.tags.join(', ')}</p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-ink-soft hover:text-gold-dark"
        >
          Instagram
        </a>

        <p className="text-xs text-ink-soft/70">
          Also building:{' '}
          <a
            href={site.sideProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-2 hover:text-ink"
          >
            {site.sideProject.label}
          </a>{' '}
          — {site.sideProject.description}
        </p>

        <p className="text-xs text-ink-soft/50">{site.domain} © 2026</p>
      </div>
    </footer>
  );
}
