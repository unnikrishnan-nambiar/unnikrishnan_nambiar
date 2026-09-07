import SectionIntro from '@/components/ui/SectionIntro';
import Divider from '@/components/ui/Divider';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';
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
  const [featured, ...rest] = news;

  return (
    <section id="discover" className="container-content scroll-mt-20 py-14 sm:py-24">
      <Reveal>
        <SectionIntro
          label="Discover"
          heading="What's worth paying attention to?"
          description="Not everything happening in AI deserves your attention. We follow what matters and break it down."
        />
      </Reveal>

      <Divider className="mx-auto mt-10 max-w-content" />

      {featured && (
        <Reveal delay={0.05}>
          <article className="mx-auto mt-10 max-w-reading text-left">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{featured.category}</Badge>
              <span className="text-sm text-ink-muted">{formatDate(featured.date)}</span>
              <span className="text-sm text-ink-muted">·</span>
              <span className="text-sm text-ink-muted">{featured.readingTime}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
              {featured.headline}
            </h3>
            <p className="mt-2 text-lg text-ink-secondary">{featured.description}</p>
          </article>
        </Reveal>
      )}

      {rest.length > 0 && (
        <ul className="mx-auto mt-10 max-w-reading divide-y divide-border border-t border-border text-left">
          {rest.map((item, i) => (
            <Reveal key={item.slug} as="li" delay={i * 0.05} className="flex gap-5 py-5">
              <span className="font-display text-sm text-ink-muted">
                {String(i + 2).padStart(2, '0')}
              </span>
              <div>
                <Badge>{item.category}</Badge>
                <h4 className="mt-2 font-display text-lg font-semibold">
                  {item.headline}
                </h4>
                <p className="mt-1 text-ink-secondary">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      )}

      {/* No dedicated news archive route yet — points to where more RYX
          content actually lives today. Swap for an internal /news link once
          that archive exists. */}
      <div className="mt-10 flex justify-center">
        <Button href={site.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
          Explore RYX AI
        </Button>
      </div>
    </section>
  );
}
