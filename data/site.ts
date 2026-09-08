// Site-wide, easy-to-edit config: swap placeholder links/copy here as the
// real accounts and destinations go live.

export const site = {
  name: 'RYX AI Community',
  domain: 'ryxai.in',
  tags: ['AI', 'Business', 'Workflows', 'Signal, not sales.'],
  instagramUrl: 'https://www.instagram.com/ryxai.in/',
  youtubeUrl: 'https://youtube.com/@ryx.ai',
  linkedinUrl: 'https://linkedin.com/company/ryxai',
  founder: {
    name: 'Unnikrishnan Nambiar',
    // Personal account — distinct from site.instagramUrl (the brand
    // account). Founder.tsx's "Follow me" button links here.
    instagramUrl: 'https://www.instagram.com/unnikrishnan._nambiar/',
    // Drop the real photo in /public and point this at it, e.g. '/photo.jpg'.
    photoSrc: null as string | null,
  },
  // Deployed Google Apps Script Web App URL that SignupForm.tsx posts to
  // (writes a row into the "RYX AI Community Signups" Sheet). Empty until
  // the one-time Apps Script deployment is done — see
  // scripts/signup-apps-script.gs for the exact code + deploy steps.
  // SignupForm renders a "temporarily closed" state while this is empty
  // instead of silently posting to nowhere.
  signupFormUrl:
    'https://script.google.com/macros/s/AKfycbygTiqKLRBrFnv34I4yjSZU18nD9pxrTAIQkA5NdaE5L2c2r9m3ciONEWRxTIKIGP4jCg/exec',
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
