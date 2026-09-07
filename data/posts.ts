// "Latest" feed content. Add new entries to the top of this array as they
// go out — the Latest section just maps over this list.

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO date, formatted for display in the component
};

export const posts: Post[] = [
  {
    slug: 'welcome-to-ryx',
    title: 'Welcome to RYX',
    summary:
      "Why we started this, what we're building, and what to expect from here on.",
    date: '2026-01-01',
  },
];
