// What RYX AI Community is actively testing right now — real, in-progress
// work with no fabricated results attached (no verdict/outcome yet, just
// what's being tried). Once one of these wraps up, move it into
// data/experiments.ts as a full published write-up instead of editing it
// here in place.

export type CurrentTest = {
  slug: string;
  index: string;
  title: string;
  description: string;
};

export const currentTests: CurrentTest[] = [
  {
    slug: 'ai-sales-automation',
    index: '01',
    title: 'AI Sales Automation',
    description:
      "Building and testing AI-powered sales workflows to see what can actually be automated, from lead outreach to follow-ups and conversion tracking.",
  },
  {
    slug: 'voice-agent-qa',
    index: '02',
    title: 'Voice Agent QA',
    description:
      'Testing how voice agents perform in real conversations, including edge cases, interruptions, failures, and unexpected inputs.',
  },
  {
    slug: 'testing-gpt-6-astra',
    index: '03',
    title: 'Testing GPT-6 (Astra)',
    description:
      "Putting OpenAI's new model through practical tasks to understand its capabilities, limitations, and where it genuinely performs better.",
  },
];
