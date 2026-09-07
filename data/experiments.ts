// Full published experiment write-ups (the "we ran it, here's what
// happened" story format) go here once one actually wraps up. Empty for
// now — the homepage's "What we're testing right now" block
// (data/currentTests.ts) covers what's actively in progress; don't fill
// this with invented findings just to have something to show.

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

export const experiments: Experiment[] = [];
