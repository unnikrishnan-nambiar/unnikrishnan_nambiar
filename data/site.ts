// Site-wide, easy-to-edit config: swap placeholder links/copy here as the
// real accounts and destinations go live.

export const site = {
  name: 'RYX AI',
  domain: 'ryxai.in',
  tags: ['AI', 'Tools', 'Experiments', 'Ideas', 'Community'],
  instagramUrl: 'https://instagram.com/ryx.ai',
  youtubeUrl: 'https://youtube.com/@ryx.ai',
  linkedinUrl: 'https://linkedin.com/company/ryxai',
  sideProject: {
    label: 'Ferry',
    description: 'AI agents for sales conversations.',
    url: 'https://ferry.example.com',
  },
  founder: {
    name: 'Unnikrishnan',
    // Drop the real photo in /public and point this at it, e.g. '/photo.jpg'.
    photoSrc: null as string | null,
  },
};

export const nav = [
  { label: 'Explore', href: '/#discover' },
  { label: 'Tools', href: '/tools' },
  { label: 'Guides', href: '/guides' },
  { label: 'Experiments', href: '/experiments' },
  { label: 'Community', href: '/community' },
];
