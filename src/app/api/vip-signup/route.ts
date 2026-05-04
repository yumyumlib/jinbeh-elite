import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { sendNotification, buildVipSignupEmail } from '@/lib/email';

/**
 * VIP Club Signup API Route
 *
 * Architecture (production):
 *   nginx intercepts /api/vip-signup → injects X-VIP-Secret → proxies to n8n
 *   n8n validates, writes to Google Sheets (tab: VIP_Signups), and responds
 *
 * This Next.js route fires as a fallback when nginx DOESN'T intercept
 * (e.g., nginx not configured yet, or the n8n webhook path doesn't match).
 *
 * In both cases, data is also saved to PostgreSQL and email notifications sent.
 */

const REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'location', 'birthday_mmdd'] as const;
const VALID_LOCATIONS = ['Frisco', 'Lewisville'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const BIRTHDAY_RE = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // --- Honeypot check ---
        if (body.website && String(body.website).trim() !== '') {
            return NextResponse.json({ ok: true });
        }

        // --- Validation ---
        for (const field of REQUIRED_FIELDS) {
            if (!body[field] || String(body[field]).trim() === '') {
                return NextResponse.json(
                    { error: 'Please fill in all required fields.' },
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

        // --- Save to PostgreSQL ---
        try {
            const pool = getPool();
            await pool.query(
                `INSERT INTO vip_signups (first_name, last_name, email, location, birthday_mmdd, source, consent, utm_source, utm_medium, utm_campaign)
 VALUES (,,,,,,,,, )
 ON CONFLICT (email) DO UPDATE SET
 first_name = EXCLUDED.first_name,
 last_name = EXCLUDED.last_name,
 location = EXCLUDED.location,
 birthday_mmdd = EXCLUDED.birthday_mmdd,
 timestamp = NOW`,
                [
                    String(body.first_name).trim(),
                    String(body.last_name).trim(),
                    email,
                    String(body.location).trim(),
                    String(body.birthday_mmdd).trim(),
                    String(body.source || 'vip-club-form'),
                    true,
                    String(body.utm_source || ''),
                    String(body.utm_medium || ''),
                    String(body.utm_campaign || ''),
                ]
            );
            console.log(`[VIP Signup] Saved to PostgreSQL: ${email}`);
        } catch (dbError) {
            console.error('[VIP Signup] PostgreSQL error:', dbError);
            // Don't fail the request — continue to email
        }

        // --- Send email notification ---
        await sendNotification(buildVipSignupEmail({
            first_name: String(body.first_name).trim(),
            last_name: String(body.last_name).trim(),
            email,
            location: String(body.location).trim(),
            birthday_mmdd: String(body.birthday_mmdd).trim(),
            source: String(body.source || 'vip-club-form'),
        }));

        return NextResponse.json({
            ok: true,
            message: 'Welcome to the Jinbeh VIP Club! 🎉',
        });

    } catch (error) {
        console.error('[VIP Signup] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again or call us at (214) 619-1200.' },
            { status: 500 }
        );
    }
}
