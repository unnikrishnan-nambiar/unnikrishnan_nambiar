# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next. RYX went through several passes: personal one-pager → AI
media/community rebuild → a centered "visual design system" pass → a
restrained neutral-plus-one-accent refinement → **this one, a full
maximalist rebuild**, done on direct request ("change everything... make the
boldest website possible, support maximalism... create a $10K website").
Where a choice below cites "the request," it's not a casual judgment call —
treat it as intentional, not something to quietly walk back toward the old
minimal look.

## Content pivot — "signal, not sales"

A full copy rewrite landed after the maximalist visual rebuild above —
visual system unchanged, every section's words replaced with a sharper
"cutting through AI noise, business-workflow tilt" story, delivered as a
complete section-by-section rewrite and applied close to verbatim. Key
points if you touch copy again:

- Hero split into three tiers instead of one headline: `h1` states the
  problem ("Everyone's posting about AI. Most of it is noise."), a bold
  gradient line states the response ("RYX AI cuts through it."), then the
  muted paragraph gives specifics. Don't collapse these back into one
  block — the three-beat structure is what the rewrite asked for.
- Category renames are intentional and business-first:
  `PracticalAi` went Work/Create/Build/Learn → **Operate/Create/Build/Decide**
  (with new item lists per category); `Experiments`' four questions
  became three ("Did it save time? / Did it hold up under real use? /
  Would we actually recommend it?"), so its grid is `sm:grid-cols-3`, not
  4. `AiTools`' pick badge reads "Actually worth it", not "RYX AI Pick".
- Hero's tag line and the footer tagline are **deliberately different
  sentences** now (previously both read `site.tags.join(' · ')`): Hero
  still uses `site.tags` (now `['AI', 'Business', 'Workflows', 'Signal,
  not sales.']`), but `Footer.tsx` has its own hardcoded sentence
  ("Cutting through AI noise, for people actually doing the work.") —
  don't re-couple them without checking both copies still make sense.
- `data/news.ts`'s seed headline is now "Why we're done with AI hype"
  (was "Welcome to RYX AI") — same honest, self-referential entry, just
  retitled to match the new voice.
- **Not done, flagged rather than faked**: the rewrite's own notes asked
  for real names on the People section's three cards (even just the
  founder + collaborators) instead of the "PM / SD / ST" + "Example"
  placeholders. No real names/roles were supplied, so `data/builds.ts`
  is untouched — content-integrity rules mean this needs real
  information from the user, not invented ones, before it changes.
  Swap it in as soon as real profiles exist.
- **Not done, flagged rather than silently ignored**: the rewrite flagged
  the newsletter's disabled-on-GitHub-Pages signup as something to "fix
  before anything else." The static export already avoids overpromising
  — `IS_STATIC_SITE` swaps the form for an honest "DM us on Instagram"
  message instead of a broken submit — but there's still no real email
  capture backend (Mailchimp/ConvertKit/Buttondown/etc.) wired up
  anywhere. That's an infrastructure task needing a real service and
  credentials, not a copy fix; raise it explicitly rather than assuming
  it's handled.
- A first real blog post ("draft the actual first blog post under this
  new angle") was offered but not written — ask before drafting one, it's
  new content, not a copy fix to the existing placeholder.

## The big pivot — what changed and why

Every earlier pass in this file's history was deliberately restrained:
~85–90% neutral palette, one accent color used sparingly, no gradients, no
pill buttons, `py-9`–`py-14` section padding. That system is gone. The
current brief was explicit on four points (asked and confirmed, not
assumed):

1. **Full rebuild, structure included** — not just a reskin of the old
   minimalist site. Sections were free to restructure (bento-style grids,
   full-bleed color bands) as long as the content/information architecture
   (same 11 homepage sections, same order, same routes) stayed intact.
2. **Full multi-color maximalism** — multiple saturated "standard" hues
   used together, gradients explicitly allowed. The old "no gradients"
   rule is retired.
3. **"$10K website" = premium agency-quality polish** — bold doesn't mean
   sloppy. Borders, shadows, spacing, and motion are all still deliberate
   and consistent; this isn't Gen-Z-chaos/meme maximalism, it's a
   colorful, confident, well-crafted maximalism.
4. **Content-integrity rules stay unchanged** — no fabricated stats,
   testimonials, member counts, or inflated claims, regardless of how bold
   the visuals get. See "Content integrity" below; nothing there changed.

The logo (`public/logo.png`, `components/Logo.tsx`) was explicitly kept
as-is — never redesign or recolor the actual wordmark asset. The one
exception is a CSS `brightness-0 invert` filter applied only in
`Footer.tsx`, where the section background is black — that's a per-usage
contrast fix, not a change to the logo itself or its component.

## Palette

Base neutrals for text/surfaces: `paper` #FFFFFF, `ink` #0A0A0A,
`ink-secondary` #525252, `ink-muted` #8A8A8A, `border` #E5E5E5, `card`
#F7F7F7. Four bold accents, each with `DEFAULT`/`dark`/`light` steps
(`tailwind.config.js`):

- `violet` #7C3AED — Discover/WhatIsRyx, primary gradient anchor
- `pink` #EC4899 — Experiments, gradient anchor
- `cyan` #06B6D4 — Tools, Newsletter band
- `amber` #F59E0B — Use Cases (PracticalAi), Founder label

No single accent dominates; each major homepage section owns one (see
"Section color map" below) so the scroll reads as a deliberate colorful
journey, not a randomly-tinted page. Gradients (`bg-gradient-to-r/br`
between two or three of these hues) are used for: primary/accent buttons,
the Community and FinalCta section backgrounds, and headline text via the
`.text-gradient-vp` / `.text-gradient-ca` / `.text-gradient-pa` utility
classes in `globals.css` (`bg-clip-text text-transparent`). Keep gradient
headline text to one statement per section — it's a highlight, not the
default heading treatment.

## Type

`Inter` (body, `--font-sans`) + `Space Grotesk` (display/headings,
`--font-display`), both via `next/font/google`. Space Grotesk replaced
Inter Tight for a bolder, more geometric display face suited to poster-
scale headlines. Hero goes up to 104px on desktop
(`text-[52px] sm:text-[80px] lg:text-[104px]`, `font-bold`,
`leading-[0.95]`); section headings are 38–60px
(`SectionIntro`'s `h2`, `font-bold`); nothing in headings is below
`font-bold` (700) — this system doesn't use the old 500/600-weight
restraint.

## Buttons

`components/ui/Button.tsx` has five variants now:

- `primary` — gradient (`violet → pink`) pill, `shadow-glow-violet`,
  lifts + swaps to `shadow-glow-pink` on hover. The single strongest CTA
  per view.
- `accent` — gradient (`cyan → violet`) pill, used for "Follow" style
  external/social CTAs (Nav, Hero, Founder).
- `secondary` — bold 2.5px black border pill/rounded-2xl, fills black on
  hover. Internal "Explore [section]" navigation buttons.
- `dark` — solid black. Used where a gradient button would clash with an
  already-colorful section background (e.g. AiNews, PracticalAi CTAs).
- `light` — white pill with a hard black offset shadow
  (`shadow-hard` = `6px 6px 0 0 #0A0A0A`), for CTAs that sit on top of a
  bold gradient/dark band (Community, FinalCta).

All pill-shaped (`rounded-full`) except `secondary` (`rounded-2xl`) — pill
buttons were explicitly off-limits in the old system ("no pill shapes");
that rule is retired along with the rest of the old restraint.

## SectionLabel & SectionIntro

`SectionLabel` takes a `color` prop (`ink | violet | pink | cyan | amber`,
default `ink`) and renders **one** `rounded-full` pill with **one**
border and the dot-grid texture inside it — this single-shape/single-
outline structure was a direct fix from user feedback earlier in the
project (an earlier two-shape nested-pill version read as a double
outline) and must not be reintroduced. Each section's label uses that
section's accent color (see map below); Experiments and People
deliberately render no label at all — a direct, separate "remove
05/Experiment, 06/Connect" request from earlier that still holds.

`SectionIntro` passes a `labelColor` prop through to `SectionLabel` and
sets the shared heading scale/weight for every section intro.

## Section color map

Each homepage section keeps its own full-bleed background/accent rather
than sharing one page-wide surface — this is the core of the "maximalist
scroll journey" and the main structural change from the old system, where
almost everything sat on plain white.

| Section | Background | Accent |
|---|---|---|
| Hero | white + blurred violet→pink→amber blob | gradient headline text |
| WhatIsRyx | white | violet label + gradient statement line |
| AiNews (`#discover`) | `bg-violet-light` band | violet label, pink numbered markers |
| PracticalAi (`#guides`, "Use Cases") | `bg-amber-light` band | amber label, per-card violet/pink/cyan/amber badges |
| AiTools (`#tools`) | white | cyan label, pink "RYX AI Pick" badge |
| Experiments (`#experiments`) | `bg-pink-light` band | no label (removed per earlier request), pink accents |
| People | white | no label (removed per earlier request), violet/cyan/amber initial rings |
| Community (`#community`) | `bg-gradient-to-br from-violet via-fuchsia-600 to-pink`, white text | `light`-variant CTA |
| Founder (`#about`) | white | amber label, pink→amber gradient statement line |
| Newsletter (`#join`) | `bg-cyan-light` band | violet focus ring |
| FinalCta | `bg-ink`, white/70 body text | violet→pink gradient headline |

If you add a new homepage section, give it its own background/accent
rather than defaulting to plain white — a page-length run of white
sections would undo the whole point of this pass.

## Layout & motion

Section vertical padding is `py-14 sm:py-20` (bumped up slightly from the
prior compressed `py-10 sm:py-16` pass — bold typography and full-bleed
color bands need a little more room to breathe than the old dense
neutral layout did; still nowhere near the original `py-18 sm:py-28`).
Cards use `border-2 border-ink` (hard, visible borders) instead of the
old thin `border-border` — consistent with the bolder overall register.
Hover states lean into it: cards lift (`-translate-y-1`), tool cards pick
up `shadow-glow-cyan`, buttons lift and swap shadow color.

## Motion pass — "add smooth animations, fix responsiveness"

A dedicated motion/responsiveness pass, on direct request. The
responsiveness half turned up no actual bugs: an automated audit (Playwright,
320/375/390/768/1024/1440px, every route) found zero horizontal overflow
anywhere, so nothing needed fixing there — if a specific device/browser is
still showing a problem, get a screenshot + viewport width, since the audit
didn't reproduce one blind. The animation half did turn up one real bug,
now fixed, plus several deliberate additions:

- **Bug fixed**: `Reveal.tsx` used to apply its fade+rise transition as a
  permanent Tailwind class (`transition-[opacity,transform]
  duration-[550ms]...`) on the wrapped element. Because cards wrapped in
  `Reveal` also carry their own hover transition (a snappier ~300ms lift),
  and both transitions targeted the same element, every hover after the
  initial reveal was inheriting the slow 550ms reveal timing instead of
  its own fast one. Fixed by moving the reveal's transition to an inline
  style applied only while it plays, cleared via `transitionend` (with a
  timeout fallback) once the reveal finishes — so the element's own
  Tailwind transition classes take over cleanly afterward. Reveal itself
  is now visually the same (fade + 12px rise, 600ms, same expo-out curve)
  but no longer leaks its timing into anything else.
- **Hero now animates in on load** (`animate-fade-up` in
  `tailwind.config.js`, ~700ms expo-out, `both` fill mode): badge → h1 →
  gradient line → body → tags → buttons, staggered ~80-100ms apart via
  inline `animationDelay`. This was previously deliberately *not*
  animated ("first paint, no scroll needed" — still true, but the
  explicit ask for more motion overrides that restraint now); don't
  revert it back to static without checking whether the request still
  stands.
- **Scroll-progress bar**: the nav's static 3px gradient line
  (`Nav.tsx`) is now a live progress indicator — a `bg-border` track
  with a `violet→pink→amber` gradient fill whose `scaleX` tracks
  `scrollY / (scrollHeight - innerHeight)`, updated via a rAF-throttled
  scroll listener writing directly to the DOM (no React state, no
  re-render per scroll frame). Verified 0 at top, 1 at bottom, resets on
  scroll-to-top.
- **Nav link hover** now has an animated underline (`scaleX(0)→1` on a
  child `span`, `group`/`group-hover`), not just a color swap. **Mobile
  menu** drops in with `animate-dropdown` (fade + 8px slide, 250ms)
  instead of appearing instantly.
- **Buttons** (`Button.tsx`): base transition bumped to 300ms ease-out
  (was 200ms with no explicit easing) and every variant now lifts on
  hover, not just `primary`/`accent`/`light`; added `active:scale-95`
  (100ms, snappier than the hover transition) for tactile press feedback.
- **Cards** (`PracticalAi`, `People`, `AiTools`'s `ToolCard`): hover lift
  bumped from `-translate-y-1` to `-translate-y-1.5` with an explicit
  `duration-300 ease-out` (was relying on Tailwind's unstated default),
  plus a shadow on lift.
- `prefers-reduced-motion` handling in `globals.css` now also zeroes
  `animation-delay`, not just duration/iteration-count — otherwise the
  Hero's staggered entrance would still visibly wait out its 0-380ms
  delays under reduced motion before snapping to its (now-instant)
  final state.
- The hero's blob decoration still uses the pre-existing CSS
  `animate-blob` keyframe (`tailwind.config.js`), covered by the same
  global `prefers-reduced-motion` override, so it freezes correctly
  without extra handling.

## Nav layout — explicit grid columns, not implicit placement

`Nav.tsx`'s header row is a 3-column grid (`grid-cols-[1fr_auto_1fr]`):
logo left, nav links centered in the auto-sized middle track, follow
button/hamburger right. This replaced an earlier `flex justify-between`
that only split leftover space between unevenly-sized children and never
actually centered the middle item (a user screenshot caught the nav links
sitting visibly off-center).

The grid version had its own bug: the three children (`Link`, `nav`,
button/hamburger `div`) relied on implicit source-order placement into
the three columns. Below `md`, the `<nav>` (middle child) is
`display:none` — and a `display:none` element generates no box and isn't
a grid item at all, so CSS Grid's auto-placement algorithm skipped it and
shifted the *next* item (the hamburger) into the now-vacant middle
column instead of the third one. Result: the hamburger rendered dead
center on mobile instead of at the right edge (also caught via a user
screenshot). Fixed by giving each child an explicit `col-start-1` /
`col-start-2` / `col-start-3` instead of relying on auto-placement — now
each item's column is fixed regardless of which siblings are present/
hidden at a given breakpoint. If you add a fourth child to this grid row,
give it an explicit `col-start-*` too rather than trusting source order.

## Content integrity — unchanged, read before adding "placeholder" content

Still explicit and still non-negotiable, maximalism or not: do not
fabricate member counts, subscriber numbers, events, partners,
testimonials, or statistics, and don't make RYX look bigger than it is.
Confirmed directly when this rebuild was scoped — bold visuals, same
honest content rules.

- `data/builds.ts` — the three community profiles are initials + role,
  each carrying an "Example" badge. Don't swap in fake names/photos.
- `data/experiments.ts` / `data/news.ts` — seeded with one honest,
  self-referential entry each rather than an invented headline or result.
- `data/tools.ts` — the tools themselves are real, public products;
  `pick: true` is RYX's own opinion, not a claim about anyone else's
  rating.
- No stock AI imagery anywhere (no robots, brains, circuit boards). Where
  a real photo doesn't exist yet (founder photo, experiment screenshots),
  it's a plain bordered placeholder block — Founder's photo frame is now
  fully omitted (not rendered empty) while `site.founder.photoSrc` is
  unset, per an earlier "remove the space for my photo" request.

## Anchor scroll offset

Every section with an `id` (`#top`, `#discover`, `#guides`, `#tools`,
`#experiments`, `#community`, `#about`, `#join`) carries `scroll-mt-20` —
without it the sticky nav (`h-16`, now with a 3px gradient underline)
covers the section label/heading on every anchor jump. Still true after
the rebuild; if a new section gets an `id`, it needs `scroll-mt-20` too.

## Brand name & copy rules — unchanged

Always "RYX AI" in copy, never bare "RYX". No em dashes anywhere in
user-facing copy (page titles use a plain hyphen; prose uses a colon,
comma, or period split instead). Both are user corrections from earlier
in the project and apply regardless of the visual rebuild.

## If you touch this next

- `data/site.ts` → `nav` array drives the header; `tags` drives the
  small "AI · Tools · Experiments · Ideas · Community" line in the hero
  and footer.
- Keep new user-facing copy in RYX's plain, curious, no-corporate-jargon
  register — the maximalism request was about visuals, not tone.
- Don't let every button/badge default to the same accent color — the
  per-section color map above is what keeps this "bold" instead of
  "same color everywhere." Pick the color that matches the section
  you're extending.
