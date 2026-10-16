# uk_speaks.ai

Personal site for Unnikrishnan Nambiar ([@uk_speaks.ai](https://www.instagram.com/uk_speaks.ai/)):
practical AI for everyday, non-tech people.

Plain static HTML + one CSS file, hosted on GitHub Pages. There's no
framework, no npm and no build step. Edit the HTML and push.

- **Home page**: `index.html`, the only public page.
- **Guides**: `g/<slug>/index.html`. These are hidden pages sent only by
  Instagram DM (ManyChat). They're `noindex`, and nothing links to them.

The full brief and design system are in `CLAUDE.md`. The approved mockups
are in `design/`.

## Layout

```
index.html                 home (no JavaScript)
404.html
g/_template/index.html     copy this to make a guide (not deployed)
g/reply-prompt/index.html  sample guide
assets/css/site.css        shared by every page
assets/js/copy.js          copy buttons, guides only
assets/fonts/              Plus Jakarta Sans 500/800 + Rajdhani 700, subset WOFF2
assets/img/photo.webp|jpg  home photo (placeholder for now)
assets/og/                 1200×630 link-preview images
favicon.svg, favicon-32.png, apple-touch-icon.png
tools/make-images.py       regenerates placeholder images (optional)
```

## Add a guide

1. Copy `g/_template/` to `g/<slug>/`, e.g. `g/manglish-captions/`. Use a
   short, lowercase, hyphenated slug.
2. Replace every `[BRACKETED]` placeholder. The comment at the top of the
   template explains each block.
   - Copy a `.step` section for each step and number them `01`, `02`, …
   - Copy a `.prompt` section for each prompt. Give each prompt's text a
     unique `id` (`prompt-1`, `prompt-2`, …) and set that card's button
     `data-copy-target` to the same id.
3. Set `og:url` to `https://unnikrishnan-nambiar.github.io/uk_speaks.ai/g/<slug>/`.
4. Optional per-guide preview image:
   ```bash
   pip install pillow fonttools brotli
   python3 tools/make-images.py --guide <slug> KEYWORD "Guide title"
   ```
   Then point `og:image` and `twitter:image` at `assets/og/og-<slug>.png`.
   Otherwise leave them on `og-guide-default.png`.
5. Push to `main`. The guide goes live at `…/g/<slug>/`. Paste that link
   into ManyChat.

Keep guides hidden:

- Keep `<meta name="robots" content="noindex, nofollow">` on every guide.
- Never link to a guide from the home page.
- Never add guides to `robots.txt` or a sitemap. `robots.txt` is public, so
  listing them would reveal their paths.

## BASE_URL (switching to a custom domain)

Internal links and assets are relative, so the site works at any path. A
few places need absolute URLs, because link previews break with relative
ones:

- `og:url`, `og:image` and `twitter:image` on every page
- the `<base href>` in `404.html`. GitHub Pages serves the 404 page at
  whatever URL was missing, so relative paths there would break.

They all use one string:

```
https://unnikrishnan-nambiar.github.io/uk_speaks.ai/
```

To move to a custom domain, find and replace that string across the repo,
e.g. with `https://ukspeaks.ai/`, including the trailing slash. Then add a
`CNAME` file containing the bare domain and include `CNAME` in the
`cp` line in `.github/workflows/deploy-pages.yml`.

## Deploy (GitHub Pages)

`.github/workflows/deploy-pages.yml` publishes on every push to `main`. It
only copies the public files into `_site/`. It skips `CLAUDE.md`, `design/`
and `tools/`, and it removes `g/_template/` from the copy. If you add a new
top-level public file, such as `CNAME` or `robots.txt`, add it to that `cp`
line.

One-time setup: go to **Settings → Pages** and set **Source** to **GitHub
Actions**.

To preview locally, serve the repo folder with any static server, for
example `python3 -m http.server`, and open `http://localhost:8000/`. The
copy button needs `localhost` or HTTPS for the modern clipboard API.
Elsewhere it falls back to selecting the text.

## Things to fill in

- **Photo**: replace `assets/img/photo.webp` and `assets/img/photo.jpg` with
  a square crop of at least 208×208px, each under ~60KB. Then re-run
  `python3 tools/make-images.py` so `og-home.png` uses it. The script never
  overwrites an existing photo.
- **Links** in `index.html`: Buy Me a Coffee, LinkedIn and X are still `#`
  (marked `TODO`).
- **OG images and favicons** are generated placeholders. You can replace
  them with Canva or Figma exports at the same paths and sizes (1200×630,
  under ~300KB).
- **Copyright year** in the home footer is static text. Update it each
  January.
