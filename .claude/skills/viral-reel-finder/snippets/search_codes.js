// Run on https://www.instagram.com/explore/search/keyword/?q=<phrase> after the grid has loaded.
// Returns the post codes in the results. Views aren't shown here: open each /p/<code>/ page,
// or the creator's /reels/ grid, to read the numbers.
const out = [];
document.querySelectorAll('a').forEach(a => {
  const m = (a.getAttribute('href') || '').match(/\/(p|reel)\/([A-Za-z0-9_-]+)/);
  if (m) out.push(m[2]);
});
out.length + ': ' + [...new Set(out)].join(' ');
