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

// Kept minimal per the visual design system — Guides and Community are
// still real routes (see app/guides, app/community) and stay linked from
// the footer; they're just not in the primary nav.
export const nav = [
  { label: 'Explore', href: '/#discover' },
  { label: 'Tools', href: '/tools' },
  { label: 'Experiments', href: '/experiments' },
  { label: 'About', href: '/about' },
];
