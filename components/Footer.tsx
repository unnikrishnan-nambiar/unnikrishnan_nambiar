import Logo from './Logo';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="section flex flex-col items-center gap-6 py-12 text-center">
      <Logo className="h-6 w-auto" />
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink/50">
        {site.tagline}
      </p>
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-ink/70 hover:text-gold-dark"
      >
        Instagram
      </a>

      <p className="text-xs text-ink/40">
        Also building:{' '}
        <a
          href={site.sideProject.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-ink/20 underline-offset-2 hover:text-ink/60"
        >
          {site.sideProject.label}
        </a>{' '}
        — {site.sideProject.description}
      </p>

      <p className="text-xs text-ink/30">{site.domain} © 2026</p>
    </footer>
  );
}
