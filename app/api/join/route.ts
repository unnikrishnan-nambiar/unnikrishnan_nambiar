import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Placeholder capture: appends to a local JSON file (gitignored) and logs to
// the console. Swap this for a real datastore/email-list provider later.

const SIGNUPS_PATH = path.join(process.cwd(), 'data', 'signups.json');

export async function POST(request: Request) {
  let body: { contact?: unknown };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const contact = typeof body.contact === 'string' ? body.contact.trim() : '';

  if (!contact) {
    return NextResponse.json({ error: 'Missing email or WhatsApp number' }, { status: 400 });
  }

  const entry = { contact, submittedAt: new Date().toISOString() };
  console.log('[RYX signup]', entry);

  try {
    let existing: Array<typeof entry> = [];
    try {
      const raw = await fs.readFile(SIGNUPS_PATH, 'utf-8');
      existing = JSON.parse(raw);
    } catch {
      // File doesn't exist yet — start fresh.
    }

    existing.push(entry);
    await fs.mkdir(path.dirname(SIGNUPS_PATH), { recursive: true });
    await fs.writeFile(SIGNUPS_PATH, JSON.stringify(existing, null, 2));
  } catch (err) {
    // Best-effort file capture — the console.log above is the real fallback
    // in environments without a writable filesystem (e.g. serverless).
    console.error('[RYX signup] failed to persist to disk:', err);
  }

  return NextResponse.json({ ok: true });
}
