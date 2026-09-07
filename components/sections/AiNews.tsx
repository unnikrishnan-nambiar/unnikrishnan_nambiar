import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { news } from '@/data/news';
import { site } from '@/data/site';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function AiNews() {
  return (
    <section id="discover" className="container-content py-18 sm:py-28">
      <SectionLabel>02 / Discover</SectionLabel>
      <h2 className="mt-3 font-display text-[32px] font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
        What&apos;s happening in AI?
      </h2>
      <p className="mt-3 max-w-reading text-lg text-ink-secondary">
        Know what&apos;s changing. Understand why it matters.
      </p>

      <div className="mt-6 max-w-reading space-y-4 text-lg text-ink-secondary">
        <p>
          New models. New products. Research. Startups. Agents. AI companies.
          Big launches.
        </p>
        <p>
          We follow what&apos;s happening across AI and break it down into
          something you can actually understand.
        </p>
      </div>

      <p className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Not just what happened.
        <br />
        What does it mean for you?
      </p>

      <ul className="mt-10 divide-y divide-border border-t border-border">
        {news.map((item) => (
          <li key={item.slug} className="py-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{item.category}</Badge>
              <span className="text-sm text-ink-muted">{formatDate(item.date)}</span>
              <span className="text-sm text-ink-muted">·</span>
              <span className="text-sm text-ink-muted">{item.readingTime}</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold">
              {item.headline}
            </h3>
            <p className="mt-1 max-w-reading text-ink-secondary">{item.description}</p>
          </li>
        ))}
      </ul>

      {/* No dedicated news archive route yet — points to where more RYX
          content actually lives today. Swap for an internal /news link once
          that archive exists. */}
      <div className="mt-8">
        <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
          Explore AI
        </Button>
      </div>
    </section>
  );
}
