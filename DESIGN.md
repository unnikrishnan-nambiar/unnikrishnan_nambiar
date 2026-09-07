# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next. This supersedes the previous version of these notes — RYX
rebuilt from a personal one-pager into an AI media/community site, with an
almost fully specified design system handed down in the brief. Where a
choice below cites "the brief," it's not my own judgment call — it's
verbatim or near-verbatim from that spec, and shouldn't be casually
redesigned away.

## Palette

~85–90% neutral, on purpose: `paper` #FFFFFF, `ink` #111111 (primary text),
`ink-secondary` #666666, `ink-muted` #8A8A8A, `border` #E8E8E8, `card`
#F7F7F7. One accent — `indigo` #4F46E5 / `indigo-dark` #3730A3 /
`indigo-light` #EEF2FF — used sparingly: links, the "RYX Pick" badge, and
specifically the Community section's CTA (the brief calls this out by
name). No gradients anywhere.

## Type

Inter (body/UI) + Inter Tight (display/headlines), both via
`next/font/google`, wired into Tailwind as `font-sans` / `font-display`.
Not Poppins/Montserrat/Roboto — the brief explicitly rules those out.

## Buttons

Three variants only (`components/ui/Button.tsx`): `primary` (black/white),
`secondary` (white, 1px border), `accent` (indigo — Community CTA only).
10px radius, compact padding, no pill shapes, no arrows appended to labels.
One clear primary action per section.

## Layout

Max content width 1200px (`container-content`), reading column 680–760px
(`container-reading` / `max-w-reading`). Generous vertical rhythm between
sections (`py-18`/`py-28`).

## Structure

Homepage (`app/page.tsx`) runs the full 11-section arc from the brief:
Hero → What is RYX → AI News → Practical AI → AI Tools → Experiments →
People → Community → Founder → Newsletter → Final CTA. Every section lives
in `components/sections/` as its own component, reused verbatim by the
standalone routes (`/tools`, `/guides`, `/experiments`, `/community`,
`/about`) so those pages are never empty shells — each renders its real
section plus the newsletter block and footer. `Explore` in the nav points
to `/#discover` (the AI News section) rather than a dedicated route, since
the brief didn't spec a `/news` page for V1.

## Content integrity — read before adding "placeholder" content

The brief is explicit and repeated: do not fabricate member counts,
subscriber numbers, events, partners, testimonials, or statistics, and
don't make RYX look bigger than it is. In practice that shaped a few
concrete choices worth preserving:

- `data/builds.ts` — the three community profiles are initials + role, each
  carrying an "Example" badge. Don't swap in fake names/photos to make them
  look like real members; replace with real ones only when real ones exist.
- `data/experiments.ts` / `data/news.ts` — seeded with one honest,
  self-referential entry each ("our first experiment is running," "welcome
  to RYX") rather than an invented AI-news headline or a fabricated
  experiment result.
- `data/tools.ts` — the tools themselves are real, public products with
  honest descriptions; `pick: true` is RYX's own opinion, not a claim about
  anyone else's rating.
- No stock AI imagery anywhere (no robots, brains, circuit boards). Where a
  real photo/screenshot doesn't exist yet (founder photo, experiment
  screenshots), it's a plain bordered placeholder block, not a generated
  substitute.

## If you touch this next

- `data/site.ts` → `nav` array drives the header; `tags` drives the small
  "AI · Tools · Experiments · Ideas · Community" line in the hero and
  footer (yes, literally that middle-dot format — it's what the brief
  specified verbatim, not a leftover default).
- Section copy is close to verbatim from the brief throughout; if you're
  rewriting it, keep the "why should I care / what can I actually do with
  this" register the brief asks for — plain, curious, no corporate jargon.
