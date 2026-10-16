#!/usr/bin/env python3
"""Generate the site's placeholder images.

Not part of any build: the outputs are committed, so run this only when you
want to regenerate them. Everything here can be replaced with Canva/Figma
exports at the same paths and sizes.

    pip install pillow fonttools brotli
    python3 tools/make-images.py                 # photo, favicons, default OGs
    python3 tools/make-images.py --guide reply-prompt PROMPT "Reply to any awkward message in 10 seconds."

The second form writes assets/og/og-<slug>.png for one guide.
"""

import argparse
import io
import os
import sys

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS = os.path.join(ROOT, "assets", "fonts")

INK = (10, 10, 10)
PAPER = (255, 255, 255)
GRID = (236, 236, 236)
MUTED = (38, 38, 38)
SOFT = (242, 242, 242)


def ttfont(name):
    """Load one of the subset WOFF2 files as a TTFont."""
    return TTFont(os.path.join(FONTS, name + ".woff2"))


def pil_font(name, size):
    """Pillow can't read WOFF2 directly, so decompress it in memory first."""
    font = ttfont(name)
    font.flavor = None
    buf = io.BytesIO()
    font.save(buf)
    buf.seek(0)
    return ImageFont.truetype(buf, size)


def draw_tracked(draw, xy, text, font, fill, tracking=0.0):
    """Draw text with letter-spacing (tracking is in em, like CSS)."""
    x, y = xy
    # Position each glyph by the width of the text before it, so the font's
    # kerning still applies between neighbours.
    for i, ch in enumerate(text):
        offset = draw.textlength(text[:i], font=font) + i * tracking * font.size
        draw.text((x + offset, y), ch, font=font, fill=fill)
    return x + tracked_width(draw, text, font, tracking)


def tracked_width(draw, text, font, tracking=0.0):
    return draw.textlength(text, font=font) + tracking * font.size * (len(text) - 1)


def wrap(draw, text, font, max_width, tracking=0.0):
    lines, line = [], ""
    for word in text.split():
        trial = (line + " " + word).strip()
        if tracked_width(draw, trial, font, tracking) <= max_width or not line:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def grid_canvas(w, h, step=30):
    img = Image.new("RGB", (w, h), PAPER)
    d = ImageDraw.Draw(img)
    for x in range(0, w, step):
        d.line([(x, 0), (x, h)], fill=GRID, width=1)
    for y in range(0, h, step):
        d.line([(0, y), (w, y)], fill=GRID, width=1)
    return img


def outlined_chip(d, xy, text, font, tracking=0.22, pad=(16, 10), radius=8):
    x, y = xy
    tw = tracked_width(d, text, font, tracking)
    asc, desc = font.getmetrics()
    h = asc + pad[1] * 2
    d.rounded_rectangle(
        [x, y, x + tw + pad[0] * 2, y + h], radius=radius, fill=PAPER, outline=INK, width=3
    )
    draw_tracked(d, (x + pad[0], y + pad[1] + 2), text, font, INK, tracking)
    return y + h


def black_pill(d, xy, text, font, tracking=0.2, pad=(22, 10)):
    x, y = xy
    tw = tracked_width(d, text, font, tracking)
    asc, _ = font.getmetrics()
    h = asc + pad[1] * 2
    d.rounded_rectangle([x, y, x + tw + pad[0] * 2, y + h], radius=h // 2, fill=INK)
    draw_tracked(d, (x + pad[0], y + pad[1] + 2), text, font, PAPER, tracking)
    return y + h


def circle_photo(img, photo_path, center, diameter, border=5, shadow=10):
    cx, cy = center
    r = diameter // 2
    d = ImageDraw.Draw(img)
    d.ellipse([cx - r + shadow, cy - r + shadow, cx + r + shadow, cy + r + shadow], fill=INK)
    photo = Image.open(photo_path).convert("RGB").resize((diameter, diameter), Image.LANCZOS)
    mask = Image.new("L", (diameter * 4, diameter * 4), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, diameter * 4, diameter * 4], fill=255)
    mask = mask.resize((diameter, diameter), Image.LANCZOS)
    img.paste(photo, (cx - r, cy - r), mask)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=INK, width=border)


def footer_band(img, text):
    w, h = img.size
    d = ImageDraw.Draw(img)
    band_top = h - 96
    d.rounded_rectangle([0, band_top, w, h + 40], radius=36, fill=INK)
    f = pil_font("plus-jakarta-sans-800", 34)
    draw_tracked(d, (64, band_top + 28), text, f, PAPER, -0.02)


# --- photo placeholder ------------------------------------------------------


def make_photo():
    out = os.path.join(ROOT, "assets", "img")
    if os.path.exists(os.path.join(out, "photo.jpg")):
        return  # never overwrite a real photo; delete it to get the placeholder back
    size = 208  # 2x the 104px display size
    img = Image.new("RGB", (size, size), SOFT)
    d = ImageDraw.Draw(img)
    f = pil_font("plus-jakarta-sans-800", 24)
    lines = ["[YOUR", "PHOTO]"]
    asc, desc = f.getmetrics()
    lh = asc + desc
    y = (size - lh * len(lines)) / 2
    for line in lines:
        w = d.textlength(line, font=f)
        d.text(((size - w) / 2, y), line, font=f, fill=MUTED)
        y += lh
    img.save(os.path.join(out, "photo.jpg"), quality=82, optimize=True, progressive=True)
    img.save(os.path.join(out, "photo.webp"), quality=80, method=6)


# --- OG images --------------------------------------------------------------


def make_og_home():
    img = grid_canvas(1200, 630)
    d = ImageDraw.Draw(img)
    raj = pil_font("rajdhani-700", 30)
    y = outlined_chip(d, (64, 64), "PRACTICAL AI & PRODUCTS", raj)
    big = pil_font("plus-jakarta-sans-800", 112)
    draw_tracked(d, (58, y + 28), "uk_speaks.ai", big, INK, -0.055)
    by = pil_font("plus-jakarta-sans-800", 36)
    draw_tracked(d, (64, y + 170), "by Unnikrishnan Nambiar", by, INK, -0.02)
    tag = pil_font("plus-jakarta-sans-800", 44)
    ty = y + 250
    end = draw_tracked(d, (64, ty), "Practical AI for daily life.", tag, INK, -0.035)
    d.rectangle([64, ty + 62, end, ty + 68], fill=INK)
    circle_photo(img, os.path.join(ROOT, "assets", "img", "photo.jpg"), (985, 270), 290)
    footer_band(img, "Learn it with me on Instagram  ·  @uk_speaks.ai")
    save_og(img, "og-home.png")


def make_og_guide(keyword, title, filename):
    img = grid_canvas(1200, 630)
    d = ImageDraw.Draw(img)
    top = pil_font("plus-jakarta-sans-800", 34)
    draw_tracked(d, (64, 56), "uk_speaks.ai", top, INK, -0.04)
    raj_small = pil_font("rajdhani-700", 26)
    label = "FREE GUIDE"
    lw = tracked_width(d, label, raj_small, 0.18)
    draw_tracked(d, (1200 - 64 - lw, 62), label, raj_small, MUTED, 0.18)

    # Outlined card holding the chip and the title, like the guide intro card.
    d.rounded_rectangle([48, 126, 1152, 500], radius=36, fill=PAPER, outline=INK, width=3)
    raj = pil_font("rajdhani-700", 32)
    y = black_pill(d, (88, 166), keyword.upper(), raj)
    size = 76
    while True:
        f = pil_font("plus-jakarta-sans-800", size)
        lines = wrap(d, title, f, 1020, -0.045)
        if len(lines) <= 3 or size <= 48:
            break
        size -= 6
    ty = y + 28
    for line in lines[:3]:
        draw_tracked(d, (84, ty), line, f, INK, -0.045)
        ty += int(size * 1.05)
    footer_band(img, "Follow @uk_speaks.ai for the next one")
    save_og(img, filename)


def save_og(img, filename):
    path = os.path.join(ROOT, "assets", "og", filename)
    img.quantize(colors=64, method=Image.Quantize.MEDIANCUT).save(path, optimize=True)
    print(f"{os.path.relpath(path, ROOT)}  {os.path.getsize(path) // 1024}KB")


# --- favicons ---------------------------------------------------------------


def make_favicon_svg():
    font = ttfont("plus-jakarta-sans-800")
    gs = font.getGlyphSet()
    cmap = font.getBestCmap()
    upm = font["head"].unitsPerEm
    names = [cmap[ord(c)] for c in "UK"]
    tracking = -0.02 * upm
    advance = sum(gs[n].width for n in names) + tracking * (len(names) - 1)
    cap = font["OS/2"].sCapHeight or int(upm * 0.7)
    scale = 30 / cap  # 30px cap height on a 64px tile
    width = advance * scale
    x = (64 - width) / 2
    baseline = 32 + 30 / 2
    pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    for n in names:
        # Flip the y axis: font units point up, SVG points down.
        gs[n].draw(TransformPen(pen, (scale, 0, 0, -scale, x, baseline)))
        x += (gs[n].width + tracking) * scale
    path = pen.getCommands()
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
        '<rect width="64" height="64" rx="14" fill="#0a0a0a"/>'
        f'<path fill="#fff" d="{path}"/></svg>\n'
    )
    with open(os.path.join(ROOT, "favicon.svg"), "w") as fh:
        fh.write(svg)


def make_favicon_png(size, filename, radius_ratio):
    scale = 4  # supersample for smooth edges
    s = size * scale
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * radius_ratio), fill=INK)
    f = pil_font("plus-jakarta-sans-800", int(s * 0.5))
    w = tracked_width(d, "UK", f, -0.02)
    l, t, r, b = d.textbbox((0, 0), "UK", font=f)
    draw_tracked(d, ((s - w) / 2, (s - (b - t)) / 2 - t), "UK", f, PAPER, -0.02)
    img = img.resize((size, size), Image.LANCZOS)
    if radius_ratio == 0:
        img = img.convert("RGB")
    img.save(os.path.join(ROOT, filename), optimize=True)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawTextHelpFormatter)
    p.add_argument("--guide", nargs=3, metavar=("SLUG", "KEYWORD", "TITLE"))
    args = p.parse_args()
    if args.guide:
        slug, keyword, title = args.guide
        make_og_guide(keyword, title, f"og-{slug}.png")
        return
    make_photo()
    make_og_home()
    make_og_guide("Free guide", "Practical AI, one real task at a time.", "og-guide-default.png")
    make_favicon_svg()
    make_favicon_png(32, "favicon-32.png", 14 / 64)
    # iOS masks its own rounded corners, so the touch icon is full-bleed.
    make_favicon_png(180, "apple-touch-icon.png", 0)


if __name__ == "__main__":
    sys.exit(main())
