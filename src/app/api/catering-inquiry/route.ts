import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Reuse the same Google Sheets client pattern as VIP Club
const getGoogleSheetsClient = async () => {
    const email = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!email || !privateKey) {
        throw new Error('Google Service Account credentials missing');
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: email,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, eventDate, guestCount, eventLocation, eventType, dietaryRestrictions } = body;

        // Basic validation
        if (!name || !email || !phone || !eventDate || !guestCount || !eventType) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        const sheets = await getGoogleSheetsClient();
        const SPREADSHEET_ID = '1eOpfQVdTfZh_Tb8NjFxGggVXd3b6cABQIsqKDbb15Z8';

        // Append to "Catering" sheet tab
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Catering!A:I',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        name,
                        email,
                        phone,
                        eventDate,
                        guestCount,
                        eventLocation || '',
                        eventType,
                        dietaryRestrictions || '',
                        new Date().toISOString(),
                    ]
                ],
            },
        });

        return NextResponse.json({ success: true, message: 'Catering inquiry submitted successfully!' });

    } catch (error: any) {
        console.error('Catering Form Error:', error);

        if (error.message.includes('missing')) {
            return NextResponse.json(
                { error: 'Server configuration error. Please call us directly.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to submit inquiry. Please try again or call us directly.' },
            { status: 500 }
        );
    }
}
