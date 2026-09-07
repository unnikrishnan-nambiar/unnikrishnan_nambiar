// Who RYX AI Community is for — the six audience categories shown on the
// homepage/community "Who is this for?" grid. These are real, general
// audience descriptions (not example member profiles), so they carry no
// "Example" badge the way the earlier placeholder build-profiles did.

export type Audience = {
  title: string;
  description: string;
};

export const audiences: Audience[] = [
  {
    title: 'Students',
    description: 'Learn AI, experiment with new tools, and build your first projects.',
  },
  {
    title: 'Business Owners',
    description: 'Discover practical ways to use AI across your business.',
  },
  {
    title: 'Product Managers',
    description: 'Explore AI products, workflows, agents, and new ways to build.',
  },
  {
    title: 'Software Developers',
    description: 'Build, automate, experiment, and stay current with AI development.',
  },
  {
    title: 'Sales & Marketing Teams',
    description: 'Use AI to research, create, automate, and scale your work.',
  },
  {
    title: 'Creators & Professionals',
    description: 'Find new ways to use AI in your everyday work and creative process.',
  },
];
