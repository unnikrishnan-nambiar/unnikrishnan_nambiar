# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next.

## The pivot (October 2026)

RYX AI stopped being a content/news community brand. It now sells **AI
solutions to businesses** (sales, marketing, automation agents) and has one
product, **Ferry**, an AI sales agent for websites. The old community
routes (`/tools`, `/experiments`, `/guides`, `/community`), the news feed,
the Google Apps Script signup and the maximalist multi-color system were
removed in this pass. Git history has them if anything needs reviving.

Content sources: the RYX sales deck (problems, three pillars, 12 use cases,
process, integrations), the Ferry deck and Ferry Starter proposal (features,
steps, analytics), and the master deck (approach, founders). Style
reference: 360labs.ai, plus the dark slides of the sales deck.

## Visual system

- **Dark, editorial.** Near-black `night` background, `surface`/`raised`
  cards, hairline `line` borders. One accent, electric blue `accent`
  (#3D5AFE, the deck's "Book a call" blue). `mint`/`rose` appear only as
  quiet tints on the use-case Problem/Solution boxes.
- **Type.** Inter for UI, Inter Tight for big tight-tracked headlines
  (`.headline`), and Instrument Serif italic for the one accent phrase per
  headline (`.accent-serif`). Keep it to one serif phrase per heading.
- **Texture.** `.bg-grid` with a blurred blue glow behind heroes and the
  closing CTA. Numbered rows (`01`, `02`…) and hairline-divided grids do
  the 360labs-style structure.
- **Motion.** `Reveal` (fade + 12px rise on scroll), slow hero glow, the
  integrations marquee. All disabled under `prefers-reduced-motion`.

## Pricing and claims

- Ferry pricing is set by the founders: **Starter from ₹2,000/month**,
  **Premium ₹5,000/month, coming soon**. Older documents show ₹1,000 pilot,
  999 Pro and $199 plans; those are superseded. Edit `data/ferry.ts`.
- The CTA for Ferry is early access through the contact page.
- No fabricated stats, testimonials or customer logos. The investor-deck
  numbers (customer count, churn, funding) are deliberately not on the site
  unless the founders ask for them. Use-case examples are the deck's
  illustrative scenarios, not named customers.

## Static hosting constraints

GitHub Pages static export with a `basePath`: internal links must go
through `next/link` (see `Button.tsx`), and there are no API routes. The
contact form hands off to mailto/WhatsApp instead of posting anywhere.
