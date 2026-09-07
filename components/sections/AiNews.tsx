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
    <section id="discover" className="scroll-mt-20 bg-violet-light py-14 sm:py-20">
      <div className="container-content">
        <Reveal>
          <SectionIntro
            label="Discover"
            labelColor="violet"
            heading="What's actually worth your attention"
            description="Not every AI headline deserves five minutes of your day. We read the noise so you don't have to, and call out what's genuinely worth knowing, and what's just marketing."
          />
        </Reveal>

        <Divider className="mx-auto mt-8 max-w-content border-violet/20" />

        {featured && (
          <Reveal delay={0.05}>
            <article className="mx-auto mt-8 max-w-reading rounded-card border-2 border-ink bg-paper p-6 text-left sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="violet">{featured.category}</Badge>
                <span className="text-sm text-ink-muted">{formatDate(featured.date)}</span>
                <span className="text-sm text-ink-muted">·</span>
                <span className="text-sm text-ink-muted">{featured.readingTime}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                {featured.headline}
              </h3>
              <p className="mt-2 text-lg text-ink-secondary">{featured.description}</p>
            </article>
          </Reveal>
        )}

        {rest.length > 0 && (
          <ul className="mx-auto mt-6 max-w-reading text-left">
            {rest.map((item, i) => (
              <Reveal
                key={item.slug}
                as="li"
                delay={i * 0.05}
                className="mt-4 flex gap-5 rounded-card border-2 border-ink bg-paper p-5"
              >
                <span className="font-display text-2xl font-bold text-pink">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div>
                  <Badge variant="violet">{item.category}</Badge>
                  <h4 className="mt-2 font-display text-lg font-bold">{item.headline}</h4>
                  <p className="mt-1 text-ink-secondary">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        )}

        {/* No dedicated news archive route yet — points to where more RYX
            content actually lives today. Swap for an internal /news link once
            that archive exists. */}
        <div className="mt-8 flex justify-center">
          <Button href={site.instagramUrl} variant="dark" target="_blank" rel="noopener noreferrer">
            Explore RYX AI Community
          </Button>
        </div>
      </div>
    </section>
  );
}
