import { NextResponse } from 'next/server';

/**
 * VIP Club Signup — Fallback API Route
 *
 * In production, nginx intercepts `/api/vip-signup` BEFORE it reaches Next.js,
 * injects the X-VIP-Secret header, and proxies to n8n on 127.0.0.1:5678.
 * See docs/vip-signup-form.md for the full architecture.
 *
 * This route only fires when nginx is NOT configured (e.g. local dev, or if
 * the VPS nginx config hasn't been deployed yet). It validates the payload
 * and returns a clear, actionable error so the form doesn't silently fail.
 */

const REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'location', 'birthday_mmdd'] as const;
const VALID_LOCATIONS = ['Frisco', 'Lewisville'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const BIRTHDAY_RE = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // --- Honeypot check (hidden field bots fill in) ---
        if (body.website && String(body.website).trim() !== '') {
            // Silently accept — never reveal bot detection
            return NextResponse.json({ ok: true });
        }

        // --- Basic validation ---
        for (const field of REQUIRED_FIELDS) {
            if (!body[field] || String(body[field]).trim() === '') {
                return NextResponse.json(
                    { error: `Please fill in all required fields.` },
                    { status: 400 }
                );
            }
        }

        const email = String(body.email).trim().toLowerCase();
        if (!EMAIL_RE.test(email) || email.length > 254) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        if (!VALID_LOCATIONS.includes(String(body.location).trim())) {
            return NextResponse.json(
                { error: 'Please select a valid location.' },
                { status: 400 }
            );
        }

        if (!BIRTHDAY_RE.test(String(body.birthday_mmdd).trim())) {
            return NextResponse.json(
                { error: 'Please enter your birthday in MM/DD format (e.g. 01/25).' },
                { status: 400 }
            );
        }

        if (body.consent !== true && body.consent !== 'true') {
            return NextResponse.json(
                { error: 'Please agree to receive VIP emails to join.' },
                { status: 400 }
            );
        }

        // --- Attempt to forward to n8n if available ---
        // In production, nginx handles this. In dev/fallback, try direct.
        const n8nUrl = process.env.N8N_VIP_WEBHOOK_URL;
        if (n8nUrl) {
            try {
                const n8nResponse = await fetch(n8nUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(process.env.VIP_SECRET ? { 'X-VIP-Secret': process.env.VIP_SECRET } : {}),
                    },
                    body: JSON.stringify(body),
                    signal: AbortSignal.timeout(10000),
                });

                if (n8nResponse.ok) {
                    return NextResponse.json({ ok: true, message: 'Welcome to the Jinbeh VIP Club' });
                }
            } catch {
                // n8n unreachable — fall through to the config error below
            }
        }

        // --- If we reach here, nginx/n8n isn't wired up ---
        console.error(
            '[VIP Signup] This route should be handled by nginx → n8n, not Next.js. ' +
            'See docs/vip-signup-form.md for setup instructions.'
        );

        return NextResponse.json(
            {
                error: 'VIP signup is temporarily unavailable. Please call us at (214) 619-1200 to join.',
            },
            { status: 503 }
        );

    } catch (error) {
        console.error('[VIP Signup] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again or call us at (214) 619-1200.' },
            { status: 500 }
        );
    }
}
