// AI News / Discover feed. Add new entries to the top — the News section
// just maps over this list. Real coverage (model launches, research,
// startups) goes here as it's published; this is seeded with the one
// honest entry we can write before that content exists.

export type NewsItem = {
  slug: string;
  category: string;
  headline: string;
  description: string;
  date: string; // ISO date
  readingTime: string;
};

export const news: NewsItem[] = [
  {
    slug: 'welcome-to-ryx',
    category: 'RYX AI',
    headline: 'Welcome to RYX AI',
    description:
      "Why we're starting this, what we're building, and what to expect here going forward.",
    date: '2026-01-01',
    readingTime: '2 min read',
  },
];
