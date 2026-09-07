/**
 * RYX AI Community — "Sign Up to Test With Us" form backend.
 *
 * This is NOT run by the Next.js app or by any build step in this repo —
 * it's the source for a Google Apps Script bound to the "RYX AI Community
 * Signups" Google Sheet (docs.google.com/spreadsheets/d/16e2dOXdyBo-
 * prI2ZcbuSx50SGjpjv2i7DTQPB20cmXo). It's kept here purely as a checked-in
 * reference so the site's backend logic isn't only living inside Google's
 * editor. It has to be pasted into that Sheet's Apps Script project by
 * hand (Claude has no way to deploy Apps Script itself) — see the
 * deployment steps below.
 *
 * The site's SignupForm.tsx (components/sections/SignupForm.tsx) POSTs a
 * plain HTML form (name, email, interest) into a hidden iframe targeting
 * whatever URL is configured as `site.signupFormUrl` in data/site.ts —
 * that URL is the deployed Web App URL this script produces. A hidden-
 * iframe form POST is used instead of fetch() specifically to sidestep
 * Apps Script Web Apps' CORS quirks with cross-origin fetch/XHR; the
 * frontend can't read this response, so it just assumes success once the
 * iframe finishes loading.
 *
 * --- One-time setup (do this once, in the Sheet owner's Google account) ---
 * 1. Open the Sheet: https://docs.google.com/spreadsheets/d/16e2dOXdyBo-prI2ZcbuSx50SGjpjv2i7DTQPB20cmXo/edit
 * 2. Extensions → Apps Script.
 * 3. Delete whatever's in Code.gs, paste this file's contents in its place.
 * 4. Deploy → New deployment → type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 * 5. Click Deploy, authorize when prompted, then copy the Web App URL
 *    (ends in /exec).
 * 6. Paste that URL into `site.signupFormUrl` in data/site.ts and push —
 *    the form on ryxai.in starts working as soon as that's live.
 *
 * If you ever need to redeploy after editing this script, use
 * Deploy → Manage deployments → edit (pencil) → New version, so the
 * existing /exec URL keeps working rather than issuing a new one.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1')
    || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'What they want to test']);
  }

  var params = e.parameter || {};
  sheet.appendRow([
    new Date(),
    params.name || '',
    params.email || '',
    params.interest || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
