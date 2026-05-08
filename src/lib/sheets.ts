import crypto from 'node:crypto';

/**
 * Minimal Google Sheets append helper. Zero npm deps — uses Node's built-in
 * crypto to mint a service-account JWT and the global fetch to call Google's
 * REST APIs. Caches the access token in-process for ~55 minutes.
 *
 * Env required:
 *   GOOGLE_SHEETS_CLIENT_EMAIL   — service account email
 *   GOOGLE_SHEETS_PRIVATE_KEY    — PEM private key. Literal `\n` sequences
 *                                  are converted back to real newlines (n8n
 *                                  exports keys with escaped \n; .env files
 *                                  also commonly do).
 *
 * The service account must be granted Editor access on the target Sheet.
 */

const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';

let cachedToken: { token: string; expiresAt: number } | null = null;

function b64url(input: Buffer | string): string {
    const buf = typeof input === 'string' ? Buffer.from(input) : input;
    return buf.toString('base64url');
}

async function getAccessToken(): Promise<string> {
    if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
        return cachedToken.token;
    }

    const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    if (!email || !rawKey) {
        throw new Error('GOOGLE_SHEETS_CLIENT_EMAIL or GOOGLE_SHEETS_PRIVATE_KEY missing');
    }
    const privateKey = rawKey.replace(/\\n/g, '\n');

    const now = Math.floor(Date.now() / 1000);
    const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const claim = b64url(JSON.stringify({
        iss: email,
        scope: SCOPE,
        aud: TOKEN_URL,
        exp: now + 3600,
        iat: now,
    }));
    const signingInput = `${header}.${claim}`;
    const signature = b64url(
        crypto.sign('RSA-SHA256', Buffer.from(signingInput), privateKey)
    );
    const jwt = `${signingInput}.${signature}`;

    const resp = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt,
        }),
    });
    if (!resp.ok) {
        throw new Error(`Token request failed: ${resp.status} ${await resp.text()}`);
    }
    const data = (await resp.json()) as { access_token: string; expires_in: number };
    cachedToken = {
        token: data.access_token,
        expiresAt: Date.now() + (data.expires_in - 60) * 1000,
    };
    return cachedToken.token;
}

export async function appendToSheet(
    spreadsheetId: string,
    range: string,
    values: (string | number | null)[][],
): Promise<void> {
    const token = await getAccessToken();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ values }),
    });
    if (!resp.ok) {
        throw new Error(`Sheets append failed: ${resp.status} ${await resp.text()}`);
    }
}
