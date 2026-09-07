# RYX AI

Single-page site for RYX AI — a personal AI content brand and community.
Built with Next.js (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

- `data/site.ts` — site-wide config: Instagram link, side-project link, founder photo.
- `data/posts.ts` — the "Latest" feed. Add new entries to the top of the array.
- `components/` — one file per section (`Nav`, `Hero`, `WhatRyxIs`, `Latest`, `About`, `Join`, `Footer`).
- `components/Logo.tsx` — recreated wordmark; swap in the real logo file once you drop it into `public/`.

## Signup form

The "Join RYX" form posts to `app/api/join/route.ts`, which logs each
submission to the console and appends it to `data/signups.json` (gitignored
placeholder storage). Replace this with a real email/WhatsApp provider when
ready — the route is the only place that needs to change.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- No backend/database — static site with one lightweight API route
