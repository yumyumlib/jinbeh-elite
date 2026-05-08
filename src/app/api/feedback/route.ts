import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { sendNotification } from '@/lib/email';

/**
 * Feedback Form API Route
 *
 * Accepts feedback submissions for both Frisco and Lewisville locations.
 * Saves to PostgreSQL and sends email notification to Manager@JinbehJapanese.com.
 *
 * Replaces the old static feedback.jinbeh.com/frisco.html and lewisville.html
 * forms that broke during the DNS migration to Cloudflare.
 */

const VALID_LOCATIONS = ['Frisco', 'Lewisville'];
const VALID_RATINGS = ['excellent', 'good', 'average', 'below-average', 'poor'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, visitDate, rating, diningType, message, location, website } = body;

        // Honeypot check
        if (website && String(website).trim() !== '') {
            return NextResponse.json({ ok: true });
        }

        // Validation
        if (!name || !email || !rating || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        const emailStr = String(email).trim().toLowerCase();
        if (!EMAIL_RE.test(emailStr) || emailStr.length > 254) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        const locationStr = String(location || '').trim();
        if (locationStr && !VALID_LOCATIONS.includes(locationStr)) {
            return NextResponse.json(
                { error: 'Invalid location.' },
                { status: 400 }
            );
        }

        if (!VALID_RATINGS.includes(String(rating))) {
            return NextResponse.json(
                { error: 'Please select a valid rating.' },
                { status: 400 }
            );
        }

        // Save to PostgreSQL
        try {
            const pool = getPool();
            await pool.query(
                `INSERT INTO feedback_submissions (name, email, phone, visit_date, rating, dining_type, message, location)
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                [
                    String(name).trim(),
                    emailStr,
                    String(phone || '').trim(),
                    visitDate || null,
                    String(rating).trim(),
                    String(diningType || '').trim(),
                    String(message).trim(),
                    locationStr || 'Not specified',
                ]
            );
            console.log(`[Feedback] Saved to PostgreSQL: ${emailStr} (${locationStr})`);
        } catch (dbError) {
            console.error('[Feedback] PostgreSQL error:', dbError);
            // Don't fail the request — continue to email
        }

        // Rating emoji for subject line
        const ratingEmoji = rating === 'excellent' || rating === 'good' ? '⭐' : '📝';

        // Send email notification
        await sendNotification({
            subject: `${ratingEmoji} New Feedback (${locationStr || 'General'}): ${String(rating).replace('-', ' ')} — ${String(name).trim()}`,
            html: `
                <h2>New Customer Feedback — Jinbeh ${locationStr || 'General'}</h2>
                <table style="border-collapse:collapse;font-family:Arial,sans-serif;">
                    <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${String(name).trim()}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${emailStr}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${String(phone || 'Not provided')}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Location</td><td style="padding:8px;">${locationStr || 'Not specified'}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Visit Date</td><td style="padding:8px;">${visitDate || 'Not specified'}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Rating</td><td style="padding:8px;font-size:16px;font-weight:bold;">${String(rating).replace('-', ' ').toUpperCase()}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Dining Type</td><td style="padding:8px;">${String(diningType || 'Not specified')}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Feedback</td><td style="padding:8px;">${String(message).trim()}</td></tr>
                </table>
            `,
        });

        return NextResponse.json({
            ok: true,
            message: 'Thank you for your feedback!',
        });

    } catch (error) {
        console.error('[Feedback] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again or call us at (214) 619-1200.' },
            { status: 500 }
        );
    }
}
