// AI tools worth trying. Real, publicly available tools with honest
// one-line descriptions — `pick: true` is our own recommendation, not a
// claim about anyone else's rating.

export type Tool = {
  slug: string;
  name: string;
  description: string;
  category: string;
  url: string;
  pick?: boolean;
};

export const tools: Tool[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    description: 'General-purpose assistant for writing, research and quick thinking.',
    category: 'Writing',
    url: 'https://chatgpt.com',
    pick: true,
  },
  {
    slug: 'claude',
    name: 'Claude',
    description: 'Strong at long documents, careful reasoning and code.',
    category: 'Writing',
    url: 'https://claude.ai',
    pick: true,
  },
  {
    slug: 'perplexity',
    name: 'Perplexity',
    description: 'Search-first assistant that shows its sources.',
    category: 'Research',
    url: 'https://perplexity.ai',
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    description: 'A code editor built around working with AI, not bolting it on.',
    category: 'Coding',
    url: 'https://cursor.com',
    pick: true,
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'In-editor code suggestions across most major IDEs.',
    category: 'Coding',
    url: 'https://github.com/features/copilot',
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'Image generation with a distinct, painterly default look.',
    category: 'Design',
    url: 'https://midjourney.com',
  },
  {
    slug: 'runway',
    name: 'Runway',
    description: 'AI video generation and editing tools in one workspace.',
    category: 'Video',
    url: 'https://runwayml.com',
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Realistic voice generation and cloning.',
    category: 'Audio',
    url: 'https://elevenlabs.io',
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    description: 'Writing and summarizing built directly into your notes.',
    category: 'Productivity',
    url: 'https://notion.so',
  },
];

export const toolCategories = [
  'Writing',
  'Research',
  'Coding',
  'Design',
  'Video',
  'Audio',
  'Marketing',
  'Productivity',
  'Agents',
  'Automation',
];
