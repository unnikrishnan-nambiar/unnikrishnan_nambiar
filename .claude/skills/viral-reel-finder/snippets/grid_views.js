// Run on https://www.instagram.com/<handle>/reels/ with the javascript tool.
// Collects every reel code + view count shown on the grid. The grid recycles its DOM while
// scrolling, so results are gathered into a Map on every step. Run it twice if it returns 0
// (the grid can take a few seconds to appear).
const seen = new Map();
for (let i = 0; i < 12; i++) {
  document.querySelectorAll('a').forEach(a => {
    const m = (a.getAttribute('href') || '').match(/\/(reel|p)\/([A-Za-z0-9_-]+)/);
    if (m && a.innerText.trim()) seen.set(m[2], a.innerText.replace(/\n/g, ' ').trim());
  });
  window.scrollBy(0, 1800);
  await new Promise(r => setTimeout(r, 1500));
}
const num = s => { s = s.replace(/,/g, ''); return s.endsWith('k') ? parseFloat(s) * 1e3 : s.endsWith('m') ? parseFloat(s) * 1e6 : +s; };
[...seen].map(([code, v]) => ({ code, views: v, n: num(v) }))
  .sort((a, b) => b.n - a.n)
  .map(x => `${x.code} ${x.views}`).join(' | ');
