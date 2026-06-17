/**
 * IndexNow auto-submit helper
 *
 * IndexNow lets you proactively notify Bing, Yandex, Naver, and Yep when content
 * changes. Submitted URLs are recrawled within hours instead of waiting weeks.
 * Google does NOT use IndexNow; for Google, use Search Console URL Inspection.
 *
 * Setup (one-time):
 *   1. Pick a 32-char hex key. We use the value below (also stored in .env as
 *      INDEXNOW_KEY).
 *   2. Host the key file at https://jinbeh.com/<KEY>.txt with the key as the
 *      file's only content. The file already exists at
 *      `public/8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c.txt`.
 *
 * Usage:
 *   import { submitToIndexNow } from '@/lib/indexnow';
 *   await submitToIndexNow(['https://jinbeh.com/celebrations/mothers-day']);
 *
 * Best places to call this:
 *   - From a post-build script after `next build` completes
 *   - From an admin endpoint that fires when content is published/updated
 *   - From CI/CD after a successful deploy
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '8f2a4b6c9e1d3f5a7b8c2e4d6f8a1b3c';
const INDEXNOW_HOST = 'jinbeh.com';
const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

export interface IndexNowResult {
  ok: boolean;
  status: number;
  body: string;
  urlCount: number;
}

/**
 * Submit one or more URLs to IndexNow.
 * Automatically batches large lists into 10,000-URL chunks (IndexNow's per-request cap).
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResult> {
  if (!urls.length) {
    return { ok: false, status: 0, body: 'No URLs provided', urlCount: 0 };
  }

  // Strip duplicates and ensure all URLs are absolute jinbeh.com URLs
  const cleaned = Array.from(new Set(urls)).filter((u) => u.startsWith(`https://${INDEXNOW_HOST}`));

  if (!cleaned.length) {
    return {
      ok: false,
      status: 0,
      body: `No valid jinbeh.com URLs in input. URLs must start with https://${INDEXNOW_HOST}`,
      urlCount: 0,
    };
  }

  // IndexNow accepts max 10,000 URLs per request
  const batches: string[][] = [];
  for (let i = 0; i < cleaned.length; i += 10000) {
    batches.push(cleaned.slice(i, i + 10000));
  }

  let lastStatus = 0;
  let lastBody = '';

  for (const batch of batches) {
    const payload = {
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: batch,
    };

    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      lastStatus = res.status;
      lastBody = await res.text();

      // 200 = OK, 202 = Accepted (queued for processing). Both are success.
      if (!res.ok && res.status !== 202) {
        return { ok: false, status: res.status, body: lastBody, urlCount: cleaned.length };
      }
    } catch (err) {
      return {
        ok: false,
        status: 0,
        body: err instanceof Error ? err.message : String(err),
        urlCount: cleaned.length,
      };
    }
  }

  return { ok: true, status: lastStatus, body: lastBody, urlCount: cleaned.length };
}

/**
 * Submit a single URL to IndexNow. Convenience wrapper for the common case.
 */
export async function submitOneToIndexNow(url: string): Promise<IndexNowResult> {
  return submitToIndexNow([url]);
}
