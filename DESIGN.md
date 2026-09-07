# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next. RYX went through three passes: personal one-pager → AI
media/community rebuild → this one, a dedicated "visual design system"
brief that pivoted the composition from left-aligned editorial to
center-dominant. Where a choice below cites "the brief," it's not my own
judgment call — it's verbatim or near-verbatim from that spec, and
shouldn't be casually redesigned away.

## Alignment (the big one)

Center-aligned is the dominant language: hero, every section's intro
(label + heading + description), Founder, Community, Newsletter, Final CTA.
The exception is content-heavy areas — the News featured story/list, the
Tools grid, an Experiment's own body — which stay left-aligned *within*
their own narrower container once the centered intro has set up the
section. `components/ui/SectionIntro.tsx` is the shared "centered intro"
block (label, heading max-w 750px, description max-w 650px); reach for it
before hand-rolling another heading pattern.

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
Weight discipline: 400 body, 500 nav/labels, 600 headings, 700 reserved for
the hero only. Small labels (`SectionLabel`) are uppercase, 13px, tracked
0.1em — yes, uppercase tracked labels, deliberately, per this brief; that
reverses what an earlier pass of these notes said, and this is the one
that's current.

Scale: hero 44–72px (mobile→desktop), section headings 34–48px, body
16–20px depending on context, small labels 13px. Hero heading capped at
`max-w-[800px]`, its supporting paragraph at `max-w-[650px]` — narrow on
purpose, not full-bleed.

## Buttons

Three variants only (`components/ui/Button.tsx`): `primary` (black/white),
`secondary` (white, 1px border), `accent` (indigo — Community CTA only).
10px radius, compact padding, no pill shapes. Arrows ("→") are NOT a
default — they only appear where a section's own literal copy in the brief
included one (nav's "Follow RYX →", Founder's "Follow me →", Final CTA's
"Explore RYX →"). Don't add them elsewhere by habit.

## Layout

Max content width 1200px (`container-content`), reading column 680–760px
(`container-reading` / `max-w-reading`). Section vertical padding is
`py-9 sm:py-14` — this was `py-18 sm:py-28` in the previous pass and got
cut in half after direct user feedback that stacked top+bottom padding
between adjacent sections was creating ~220px of dead space. Don't
casually push this back up without checking the resulting gap between two
adjacent sections, not just one section's own padding value.

## Structure

Homepage (`app/page.tsx`) runs the full 11-section arc: Hero → What is
RYX → AI News → Practical AI → AI Tools → Experiments → People →
Community → Founder → Newsletter → Final CTA. Every section lives in
`components/sections/` as its own component, reused verbatim by the
standalone routes (`/tools`, `/guides`, `/experiments`, `/community`,
`/about`) so those pages are never empty shells. Nav is intentionally
minimal (Explore, Tools, Experiments, About + "Follow RYX →") — Guides and
Community dropped off the primary nav in this pass but are still real,
linked-from-the-footer routes, not removed.

News (`AiNews`) restructured into: centered intro → divider → one
left-aligned "featured story" (the first item in `data/news.ts`) → a
numbered left-aligned list for anything after it. Tools (`AiTools`) is now
a client component with a real (if simple) search box and category filter
above the grid. Experiments (`Experiments`) supports an optional 4-part
story structure (`whatWeTried` / `whatHappened` / `verdict` on the
`Experiment` type) for when a real experiment publishes; the seeded
"coming soon" entry deliberately skips those fields rather than faking
them, and shows a plain placeholder block instead.

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
