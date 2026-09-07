// Weekly experiments — real outputs go here as they're run. Seeded with one
// honest placeholder rather than a fabricated result.

export type Experiment = {
  slug: string;
  title: string;
  description: string;
  date: string;
  status: 'coming-soon' | 'published';
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
