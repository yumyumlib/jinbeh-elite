import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { sendNotification, buildEventInquiryEmail } from '@/lib/email';

/**
 * Event Inquiry API Route
 *
 * Saves the inquiry to PostgreSQL and sends email notifications
 * to JinbehJapanese@gmail.com (CC: YumYumJinbeh@gmail.com).
 */

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, eventDate, eventType, guestCount, details } = body;

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

        // Save to PostgreSQL
        try {
            const pool = getPool();
            await pool.query(
                `INSERT INTO event_inquiries (name, email, phone, event_date, event_type, guest_count, details)
 VALUES (,,,,,, )`,
                [
                    String(name).trim(),
                    emailStr,
                    String(phone || '').trim(),
                    eventDate,
                    String(eventType).trim(),
                    parseInt(String(guestCount), 10) || 0,
                    String(details || '').trim(),
                ]
            );
            console.log(`[Event Inquiry] Saved to PostgreSQL: ${emailStr}`);
        } catch (dbError) {
            console.error('[Event Inquiry] PostgreSQL error:', dbError);
        }

        // Send email notification
        await sendNotification(buildEventInquiryEmail({
            name: String(name).trim(),
            email: emailStr,
            phone: String(phone || ''),
            eventDate: String(eventDate),
            eventType: String(eventType),
            guestCount: String(guestCount),
            details: String(details || ''),
        }));

        return NextResponse.json({
            ok: true,
            message: 'Thank you! Our events team will contact you shortly.',
        });

    } catch (error) {
        console.error('[Event Inquiry] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please call us at (214) 619-1200.' },
            { status: 500 }
        );
    }
}
