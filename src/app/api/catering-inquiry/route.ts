import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { sendNotification, buildCateringEmail } from '@/lib/email';

/**
 * Catering Inquiry API Route
 *
 * Saves the inquiry to PostgreSQL and sends email notifications
 * to JinbehJapanese@gmail.com (CC: YumYumJinbeh@gmail.com).
 */

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, eventDate, guestCount, eventType, eventLocation, dietaryRestrictions } = body;

        // Validation
        if (!name || !email || !phone || !eventDate || !guestCount || !eventType) {
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
                `INSERT INTO catering_inquiries (name, email, phone, event_date, guest_count, event_type, event_location, dietary_restrictions)
 VALUES (,,,,,,, )`,
                [
                    String(name).trim(),
                    emailStr,
                    String(phone).trim(),
                    eventDate,
                    String(guestCount).trim(),
                    String(eventType).trim(),
                    String(eventLocation || '').trim(),
                    String(dietaryRestrictions || '').trim(),
                ]
            );
            console.log(`[Catering] Saved to PostgreSQL: ${emailStr}`);
        } catch (dbError) {
            console.error('[Catering] PostgreSQL error:', dbError);
        }

        // Send email notification
        await sendNotification(buildCateringEmail({
            name: String(name).trim(),
            email: emailStr,
            phone: String(phone).trim(),
            eventDate: String(eventDate),
            guestCount: String(guestCount),
            eventType: String(eventType),
            eventLocation: String(eventLocation || ''),
            dietaryRestrictions: String(dietaryRestrictions || ''),
        }));

        return NextResponse.json({
            success: true,
            message: 'Catering inquiry submitted! We\'ll get back to you within 1 business day.',
        });

    } catch (error) {
        console.error('[Catering] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please call us at (214) 619-1200.' },
            { status: 500 }
        );
    }
}
