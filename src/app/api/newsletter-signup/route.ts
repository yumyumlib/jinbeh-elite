import { NextResponse } from 'next/server';

/**
 * Newsletter / Seasonal Specials Signup — Fallback API Route
 *
 * In production, nginx should intercept `/api/newsletter-signup` and proxy to n8n,
 * which appends the row to a Google Sheet tab (e.g. "Newsletter_Signups").
 *
 * This fallback validates the payload and returns a clear error if n8n isn't wired.
 */

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, source } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Please enter your email address.' },
                { status: 400 }
            );
        }

        const emailStr = String(email).trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailStr) || emailStr.length > 254) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Attempt forward to n8n if configured
        const n8nUrl = process.env.N8N_NEWSLETTER_WEBHOOK_URL;
        if (n8nUrl) {
            try {
                const n8nResponse = await fetch(n8nUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: emailStr,
                        source: source || 'newsletter-form',
                        timestamp: new Date().toISOString(),
                    }),
                    signal: AbortSignal.timeout(10000),
                });
                if (n8nResponse.ok) {
                    return NextResponse.json({
                        ok: true,
                        message: 'You\'re subscribed! Watch your inbox for updates.',
                    });
                }
            } catch {
                // n8n unreachable — fall through
            }
        }

        console.error(
            '[Newsletter Signup] n8n webhook not configured. Set N8N_NEWSLETTER_WEBHOOK_URL env var. ' +
            'See docs/vip-signup-form.md for the architecture pattern.'
        );

        return NextResponse.json(
            {
                error: 'Newsletter signup is temporarily unavailable. Please try again later.',
            },
            { status: 503 }
        );

    } catch (error) {
        console.error('[Newsletter Signup] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}
