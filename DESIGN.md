# Design notes

Working notes on the visual direction, for whoever (human or Claude) touches
this next.

## Palette

Pure white canvas (`paper` #FFFFFF) — this was an explicit ask, not a
default. Text is near-black (`ink` #0A0A0A) with a warm secondary
(`ink-soft` #4A4842) for body copy. One accent: a deep brass/clay gold
(`gold` #9C6B2E, `gold-dark` #7E551F, `gold-wash` #FBF1DE) — deliberately
duller than a shiny SaaS gold so it reads as pigment, not UI chrome.
`hairline` (#E4E1D8) is the only structural line color, used sparingly (nav
underline, footer rule, card borders).

## Type

Display: Bricolage Grotesque (bold/black weights only, headlines and CTA
labels). Body: Hanken Grotesk. Loaded via `next/font/google` in
`app/layout.tsx` as CSS vars, wired into Tailwind as `font-display` /
`font-body`. Chosen over the obvious Space Grotesk+Inter pairing — wanted
something with more personality that still reads clean, tying back to the
wordmark's rounded, slightly wonky character.

## Layout

The hero is the one bold gesture: big left-aligned headline (not centered),
like a magazine masthead opening — breaks from the fully-centered "SaaS
landing" template. Everything after it (What RYX is, Latest, About, Join)
stays in a centered reading column, since those are prose blocks where
centered reads as intentional rather than as the default.

## Things deliberately avoided (see `frontend-design` skill)

- No fake social-proof numbers/member counts — RYX's own copy rejects hype,
  so a badge like "10,000+ members" would contradict the brand's voice.
- No middle-dot-joined meta strings (`AI • Tools • Experiments • Ideas`) —
  replaced with real tag chips (bordered pills, mixed case).
- No ALL-CAPS tracked labels anywhere (was on the tagline and the post
  date) — case and tracking don't do the hierarchy work; weight/color/size
  do.
- No SaaS card-shadow kit — the one card (Latest/PostCard) is a hairline
  border, no shadow, no gradient wash.
- Kept rounded corners everywhere (pills, cards, photo circle) rather than
  going full broadsheet/zero-radius, even though hairline rules are in
  play — avoids reading as a newspaper template.

## If you touch this next

- Swap `data/site.ts` `tags` array to change the hero/footer tag chips.
- The gold is intentionally muted — resist the urge to brighten it back
  toward a shiny SaaS gold; that was a specific decision, not an oversight.
