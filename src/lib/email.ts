import nodemailer from 'nodemailer';

/**
 * Shared email utility for form submission notifications.
 *
 * Uses Gmail SMTP via an App Password. Falls back to console logging
 * if SMTP credentials aren't configured (dev/staging).
 *
 * Recipients:
 *   - Primary: JinbehJapanese@gmail.com
 *   - CC: YumYumJinbeh@gmail.com
 */

const FROM_EMAIL = process.env.SMTP_FROM || 'noreply@jinbeh.com';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';

const TO_EMAIL = 'JinbehJapanese@gmail.com';
const CC_EMAIL = 'YumYumJinbeh@gmail.com';

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
    if (!SMTP_USER || !SMTP_PASS) {
        console.warn('[Email] SMTP_USER/SMTP_PASS not configured — emails will be logged only.');
        return null;
    }

    if (!transporter) {
        transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_PORT === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });
    }
    return transporter;
}

interface EmailOptions {
    subject: string;
    html: string;
    text?: string;
}

export async function sendNotification(options: EmailOptions): Promise<boolean> {
    const { subject, html, text } = options;

    const transport = getTransporter();

    if (!transport) {
        // Log the email content so it's not lost
        console.log(`[Email] Would send: To=${TO_EMAIL}, CC=${CC_EMAIL}, Subject="${subject}"`);
        console.log(`[Email] Body: ${text || html}`);
        return true; // Don't fail the form submission because email isn't configured
    }

    try {
        await transport.sendMail({
            from: `"Jinbeh Website" <${FROM_EMAIL}>`,
            to: TO_EMAIL,
            cc: CC_EMAIL,
            subject,
            html,
            text: text || html.replace(/<[^>]*>/g, ''),
        });
        return true;
    } catch (error) {
        console.error('[Email] Failed to send:', error);
        return false; // Don't fail the form submission
    }
}

/**
 * Convenience email builders for each form type.
 */
export function buildVipSignupEmail(data: Record<string, string | boolean>): EmailOptions {
    return {
        subject: `🎉 New VIP Club Signup: ${data.first_name} ${data.last_name}`,
        html: `
            <h2>New VIP Club Member</h2>
            <table style="border-collapse:collapse;font-family:Arial,sans-serif;">
                <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.first_name} ${data.last_name}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Location</td><td style="padding:8px;">${data.location}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Birthday</td><td style="padding:8px;">${data.birthday_mmdd}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Source</td><td style="padding:8px;">${data.source || 'vip-club-form'}</td></tr>
            </table>
        `,
    };
}

export function buildCateringEmail(data: Record<string, string>): EmailOptions {
    return {
        subject: `🍱 New Catering Inquiry from ${data.name}`,
        html: `
            <h2>New Catering Inquiry</h2>
            <table style="border-collapse:collapse;font-family:Arial,sans-serif;">
                <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.name}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${data.phone}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Event Date</td><td style="padding:8px;">${data.eventDate}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Guests</td><td style="padding:8px;">${data.guestCount}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Event Type</td><td style="padding:8px;">${data.eventType}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Location</td><td style="padding:8px;">${data.eventLocation || 'Not specified'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Dietary</td><td style="padding:8px;">${data.dietaryRestrictions || 'None'}</td></tr>
            </table>
        `,
    };
}

export function buildEventInquiryEmail(data: Record<string, string | number>): EmailOptions {
    return {
        subject: `🎊 New Event Inquiry from ${data.name}`,
        html: `
            <h2>New Event Inquiry</h2>
            <table style="border-collapse:collapse;font-family:Arial,sans-serif;">
                <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.name}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${data.phone || 'Not provided'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Event Date</td><td style="padding:8px;">${data.eventDate}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Event Type</td><td style="padding:8px;">${data.eventType}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Guests</td><td style="padding:8px;">${data.guestCount}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Details</td><td style="padding:8px;">${data.details || 'N/A'}</td></tr>
            </table>
        `,
    };
}

export function buildNewsletterEmail(data: Record<string, string>): EmailOptions {
    return {
        subject: `📬 New Newsletter Signup: ${data.email}`,
        html: `
            <h2>New Newsletter Signup</h2>
            <table style="border-collapse:collapse;font-family:Arial,sans-serif;">
                <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Source</td><td style="padding:8px;">${data.source || 'newsletter'}</td></tr>
            </table>
        `,
    };
}
