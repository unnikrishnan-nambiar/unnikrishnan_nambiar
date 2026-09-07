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
the hero only. `SectionLabel` (`components/ui/SectionLabel.tsx`) is a small
dark pill badge — rounded-2xl outer chip with a subtle dot-grid texture
(`radial-gradient`, white dots at 16% opacity, 14px grid), a bordered
rounded-full pill inside it, uppercase 13px text tracked 0.1em — built from
a reference image the user provided, replacing the earlier plain-text
"0X / Discover" kicker. No numbering prefix anymore — just the category
word (Discover, Use Cases, Tools, or a full phrase for Founder's "The
person behind RYX AI"). Experiments and People deliberately have no
badge at all (`SectionIntro`'s `label` prop just omitted) — user asked to
drop "05 / Experiment" and "06 / Connect" outright rather than reskin
them, so those two sections lead straight with their heading. Keep this to
a single small badge per section where one exists; it's a controlled
accent (dark-on-light, contained, not a page-wide dark theme), not license
to reach for dark sections elsewhere — that's still explicitly against the
brand.

Brand name: always "RYX AI" in copy, never bare "RYX" — user correction,
applied sitewide (buttons, headings, badges, meta title/description). Left
untouched: `data/builds.ts`'s code comment, `app/api/join/route.ts`'s
server-side `console.log` labels, and JSX comments — none of those are
copy a visitor reads. If you add new user-facing text, write "RYX AI", not
"RYX".

No em dashes in user-facing copy — another user correction, applied
sitewide. Page titles use a plain hyphen ("About - RYX AI"); prose that
used to lean on an em dash was rewritten with a colon, comma, or period
split instead of just swapping the character. Left untouched: code
comments and `DESIGN.md` itself, since neither is copy a visitor reads. If
you add new user-facing text, don't reach for "—".

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
`py-10 sm:py-16` — down from `py-14 sm:py-24` after a direct "compress the
website" request; before that it was `py-18 sm:py-28`, cut in half once
already for the same reason (stacked top+bottom padding between adjacent
sections was creating dead space). The internal rhythm inside each section
(intro → content → CTA) was tightened alongside it, from `mt-10`/`mt-8` to
`mt-8`/`mt-6` throughout. Don't casually push either back up without
checking the resulting gap between two adjacent sections, not just one
section's own padding value.

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

## Animation

Ran `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "scroll reveal fade stagger lightweight" --domain gsap` for reference rather than reaching for GSAP itself — this site keeps the "no heavy animation libraries" constraint from the original brief, so `components/ui/Reveal.tsx` reimplements the same motion tokens the search returned with a plain `IntersectionObserver` and direct ref/style mutation — no React state, no dependency. Currently 12px rise, 550ms, `cubic-bezier(0.22,1,0.36,1)` (a smooth expo-out — bumped from the initial 400ms/`ease-out` after user feedback that it felt abrupt; matches the search's "Standard" tier duration). Wraps section intros (single reveal) and grid/list items (staggered via the `delay` prop, ~0.05–0.06s per item). Renders fully visible by default (SSR/no-JS/crawler safe) and only hides-then-reveals once JS confirms `prefers-reduced-motion` isn't set — verified both that reduced-motion shows everything immediately and that a fresh scroll actually reveals it.

Deliberately *not* animated: Hero (first paint, no scroll needed) and the Newsletter form's status states (success/error swap should never itself be gated behind a scroll-reveal). Per the "spend boldness in one place" instinct, Founder and Final CTA each get one single reveal for the whole block rather than staggering their internals.

## Anchor scroll offset

Every section with an `id` (`#top`, `#discover`, `#guides`, `#tools`, `#experiments`, `#community`, `#about`, `#join`) carries `scroll-mt-20` — without it, the sticky nav (`h-16`) covers the section label/heading on every anchor jump (nav links, hero CTAs, footer links, Community's "Join RYX"). Found this via the `ui-ux-pro-max` skill's focus/keyboard-nav guidance and confirmed it was actually happening before fixing it. If a new section gets an `id`, it needs `scroll-mt-20` too.

## If you touch this next

- `data/site.ts` → `nav` array drives the header; `tags` drives the small
  "AI · Tools · Experiments · Ideas · Community" line in the hero and
  footer (yes, literally that middle-dot format — it's what the brief
  specified verbatim, not a leftover default).
- Section copy is close to verbatim from the brief throughout; if you're
  rewriting it, keep the "why should I care / what can I actually do with
  this" register the brief asks for — plain, curious, no corporate jargon.
