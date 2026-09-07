// Weekly experiments — real outputs go here as they're run. Seeded with one
// honest placeholder rather than a fabricated result. whatWeTried/
// whatHappened/verdict are optional because a "coming soon" entry hasn't
// happened yet — don't fill them with invented findings.

export type Experiment = {
  slug: string;
  title: string;
  description: string;
  date: string;
  status: 'coming-soon' | 'published';
  whatWeTried?: string;
  whatHappened?: string;
  verdict?: string;
};

export const experiments: Experiment[] = [
  {
    slug: 'first-experiment',
    title: 'Our first experiment is in progress',
    description:
      "We're running it now. Check back soon for what worked, what didn't, and what's actually useful.",
    date: '2026-01-01',
    status: 'coming-soon',
  },
];
