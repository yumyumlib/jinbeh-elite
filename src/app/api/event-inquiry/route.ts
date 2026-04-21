import { NextResponse } from 'next/server';

/**
 * Event Inquiry — Fallback API Route
 *
 * In production, nginx should intercept `/api/event-inquiry` and proxy to n8n,
 * which appends the row to a Google Sheet tab (e.g. "Event_Inquiries").
 *
 * This fallback validates the payload and returns a clear error if n8n isn't wired.
 */

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, eventDate, eventType, guestCount } = body;

        // Basic validation
        if (!name || !email || !eventDate || !eventType || !guestCount) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
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
        const n8nUrl = process.env.N8N_EVENT_WEBHOOK_URL;
        if (n8nUrl) {
            try {
                const n8nResponse = await fetch(n8nUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...body,
                        email: emailStr,
                        timestamp: new Date().toISOString(),
                        source: 'event-inquiry-form',
                    }),
                    signal: AbortSignal.timeout(10000),
                });
                if (n8nResponse.ok) {
                    return NextResponse.json({
                        ok: true,
                        message: 'Thank you! Our events team will contact you shortly.',
                    });
                }
            } catch {
                // n8n unreachable — fall through
            }
        }

        console.error(
            '[Event Inquiry] n8n webhook not configured. Set N8N_EVENT_WEBHOOK_URL env var. ' +
            'See docs/vip-signup-form.md for the architecture pattern.'
        );

        return NextResponse.json(
            {
                error: 'Event inquiry is temporarily unavailable. Please call us at (214) 619-1200 to discuss your event.',
            },
            { status: 503 }
        );

    } catch (error) {
        console.error('[Event Inquiry] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again or call us at (214) 619-1200.' },
            { status: 500 }
        );
    }
}
