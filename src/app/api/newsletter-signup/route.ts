import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { sendNotification, buildNewsletterEmail } from '@/lib/email';

/**
 * Newsletter / Seasonal Specials Signup API Route
 *
 * Saves the signup to PostgreSQL and sends email notifications
 * to Manager@JinbehJapanese.com.
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

        const sourceStr = String(source || 'newsletter').trim();

        // Save to PostgreSQL
        try {
            const pool = getPool();
            await pool.query(
                `INSERT INTO newsletter_signups (email, source)
 VALUES (, )
 ON CONFLICT (email, source) DO NOTHING`,
                [emailStr, sourceStr]
            );
            console.log(`[Newsletter] Saved to PostgreSQL: ${emailStr} (source: ${sourceStr})`);
        } catch (dbError) {
            console.error('[Newsletter] PostgreSQL error:', dbError);
        }

        // Send email notification
        await sendNotification(buildNewsletterEmail({
            email: emailStr,
            source: sourceStr,
        }));

        return NextResponse.json({
            ok: true,
            message: 'You\'re subscribed! Watch your inbox for updates.',
        });

    } catch (error) {
        console.error('[Newsletter] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}
