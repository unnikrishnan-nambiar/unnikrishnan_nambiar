// Copy buttons for guide pages. Any <button data-copy-target="ID"> copies the
// text of the element with that id. Order of attempts:
//   1. navigator.clipboard.writeText()
//   2. document.execCommand('copy') on a selection (older in-app browsers)
//   3. leave the text selected so the reader can long-press → Copy
(function () {
  'use strict';

  var RESET_MS = 2000;

  function selectText(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  function legacyCopy(el) {
    selectText(el);
    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {}
    if (ok) window.getSelection().removeAllRanges();
    return ok;
  }

  function show(btn, text, ms) {
    var label = btn.querySelector('.copy-label') || btn;
    if (!btn.hasAttribute('data-label')) btn.setAttribute('data-label', label.textContent);
    clearTimeout(btn._copyTimer);
    label.textContent = text;
    btn._copyTimer = setTimeout(function () {
      label.textContent = btn.getAttribute('data-label');
    }, ms);
  }

  document.addEventListener('click', function (event) {
    var btn = event.target.closest && event.target.closest('[data-copy-target]');
    if (!btn) return;
    var el = document.getElementById(btn.getAttribute('data-copy-target'));
    if (!el) return;
    var text = el.textContent.replace(/\s+/g, ' ').trim();

    function fallback() {
      if (legacyCopy(el)) {
        show(btn, 'Copied ✓', RESET_MS);
      } else {
        selectText(el);
        show(btn, 'Press & hold text', 4000);
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () {
        show(btn, 'Copied ✓', RESET_MS);
      }, fallback);
    } else {
      fallback();
    }
  });
})();
