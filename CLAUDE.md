# uk_speaks.ai — personal site + hidden guide pages

Static site for Unnikrishnan Nambiar (@uk_speaks.ai on Instagram): practical AI for everyday, non-tech people.
Two things to build:
1. **Home page** — the only public page.
2. **Guide page template** — hidden pages delivered only via Instagram DM (ManyChat). Never linked from anywhere public.

The approved visual design is in `design/home.dc.html` and `design/guide.dc.html`. They are mockups from a design tool: read them for layout, spacing, type sizes, colors and copy. Ignore the `<x-dc>`, `<helmet>`, `support.js` and `DCLogic` wrapper — rebuild as plain semantic HTML + one CSS file.

## Hard constraints
- Plain static HTML/CSS. No frameworks, no build step, no npm. Hosted on **GitHub Pages**.
- **Mobile-first**: ~95% of traffic is phones, mostly inside Instagram's in-app browser. Design at 390px wide, then let it breathe up to a ~480px centered column on desktop (do not create a separate desktop layout).
- Fast on 4G: total home page weight under ~150KB. No JS on the home page. Guides get one tiny script for copy buttons.
- **Relative links only** for internal links and assets. The site must work at `username.github.io/repo/` today and on a custom domain later.
- No mention of guides, links pages or a blog anywhere public.

## Design system (pure black & white on a notebook grid)
- Colors: `--ink: #0a0a0a`, `--paper: #ffffff`, `--grid: #ececec`, `--muted: #262626`, `--soft: #f2f2f2`. **No blue, no other accents.**
- Page background: 24px graph-paper grid:
  `background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px); background-size: 24px 24px;`
- Layout: single column, **24px side padding** (lines up with the grid). Vertical rhythm: 24px between hero items, 16px between cards, 20px card padding.
- Cards: white, `1.5px solid var(--ink)` border, `border-radius: 20px`.
- Closer sections: solid black band/card, white text, white primary button with black text.
- Type:
  - Display/body: **Plus Jakarta Sans** (500, 800). Big, tight: headline 58px / line-height 0.95 / letter-spacing -0.055em.
  - Labels and handle chips: **Rajdhani 700**, uppercase, letter-spacing 0.2em.
  - Prompt text: use a system monospace stack (`ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`) instead of loading a third webfont.
  - Self-host fonts as subset WOFF2 with `font-display: swap`; preload the 800 weight.
- Photo: **circle**, 104×104, `2px solid` ink border, `box-shadow: 4px 4px 0 var(--ink)`. Serve WebP/AVIF under ~60KB with a JPG fallback.
- Touch targets ≥ 44px. Primary button ≥ 56px tall.

## Home page (`index.html`) — content, top to bottom
1. Label chip: `PRACTICAL AI & PRODUCTS`
2. H1: `uk_speaks.ai`, then `by Unnikrishnan Nambiar`
3. Tagline (full width, underlined): `Practical AI for daily life.`
4. Row: bio (left, flexible) + circular photo (right):
   `AI shouldn't need a tech background. I show everyday people how to actually use it — on the apps they already have. Building uk_speaks.ai.`
5. Three outlined cards:
   - `WHO AM I?` — A product manager who works with AI every day — and keeps testing every new AI product to see what actually helps.
   - `WHY AM I DOING THIS?` — Most AI content is made for techies. The people who'd gain the most from it — parents, students, small business owners — get left out. I want to close that gap.
   - `HOW AM I DOING IT?` — Short reels on Instagram, one real task at a time, using apps you already have. No jargon, no setup, no paid tools.
6. Black band (rounded top corners 28px), runs edge to edge:
   - `Learn it with me on Instagram.`
   - Primary button (loud): `Follow uk_speaks.ai on Instagram` → https://www.instagram.com/uk_speaks.ai/
   - Quiet text link: `Buy Me a Coffee` → [BUY_ME_A_COFFEE_URL]
   - Footer row: LinkedIn [URL], X [URL], Instagram (personal) [URL] · `© 2026 Unnikrishnan Nambiar` (use the current year)

## Guide template (`g/_template/index.html`)
Each guide lives at `g/<slug>/index.html` (e.g. `g/reply-prompt/`). Copy the template folder to make a new one. Structure:
1. Top bar: `uk_speaks.ai` (bold) left, `FREE GUIDE` (Rajdhani) right.
2. Intro card: keyword chip (black pill, white Rajdhani text, e.g. `PROMPT`, `MANGLISH`), H1 title (36px, 800), one-line summary.
3. Numbered step cards: giant `01`, `02`… numeral (52px, 800), step title (20px, 800), short description.
4. Prompt cards (between steps where needed): solid black, label `PROMPT 1`, white pill **Copy** button, prompt text in monospace. Copy button behavior:
   - `navigator.clipboard.writeText()`; on success the label changes to `Copied ✓` for ~2s.
   - Fallback if the clipboard API fails (some in-app browsers): select the prompt text so the user can long-press copy.
   - Use `data-copy-target` attributes so one small script (`assets/js/copy.js`, deferred) handles every card.
5. Example card: `EXAMPLE` label, a grey "BEFORE" box and an outlined "AFTER" box with a 4px hard shadow.
6. Black closer card: `Liked this? Next one drops this week.`, white `Follow @uk_speaks.ai` button, small note `Comment a keyword on any reel to get the next guide.`
- Every guide page: `<meta name="robots" content="noindex, nofollow">`.
- Do **not** list guides in `robots.txt` (it's public and would reveal paths) and don't create a sitemap that includes them.
- Build one real sample guide from the mockup content at `g/reply-prompt/` so the template is proven.
- Design the first screen for Instagram's in-app browser: title and first step should be visible without scrolling much; no hover-dependent UI.

## Head tags (both page types)
- `<meta name="viewport" content="width=device-width, initial-scale=1">`, `<meta name="theme-color" content="#0a0a0a">`, a real `<title>` and `<meta name="description">`.
- Open Graph + Twitter: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card=summary_large_image`.
- **`og:image` and `og:url` must be absolute URLs** — link previews break with relative ones. This is the one exception to "relative links only". Keep the base URL in one obvious, consistent string (`https://BASE_URL/`) so switching to a custom domain is a single find-and-replace, and document that in the README.
- OG images (1200×630, PNG/JPG, under ~300KB), in `assets/og/`:
  - `og-home.png`: black/white grid style, `uk_speaks.ai`, tagline, circular photo.
  - `og-guide-default.png`: generic guide fallback.
  - Per-guide images optional (`og-<slug>.png`): keyword chip + guide title + handle.
  - Create simple placeholder versions now (e.g. generate with a small script or SVG→PNG) and note in the README that they can be replaced with Canva/Figma exports.

## Favicon
"UK" monogram, white bold letters on a black rounded square. Ship `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180×180), linked with relative paths.

## Files to create
```
index.html
g/_template/index.html
g/reply-prompt/index.html
assets/css/site.css        (shared by home + guides)
assets/js/copy.js          (guides only)
assets/fonts/              (subset woff2)
assets/img/photo.webp + photo.jpg   (placeholder until the real photo is added)
assets/og/og-home.png, og-guide-default.png
favicon.svg, favicon-32.png, apple-touch-icon.png
404.html                   (same style, link back to home)
.nojekyll
README.md                  (how to add a guide, swap BASE_URL, deploy on GitHub Pages)
```

## Done means
- Home and sample guide match the mockups at 390px wide.
- Lighthouse mobile: Performance ≥ 95, Accessibility ≥ 95.
- Copy button works and falls back gracefully.
- No internal absolute URLs except OG tags; nothing public links to `/g/`.
