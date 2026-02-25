import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Initialize the Google Sheets client
const getGoogleSheetsClient = async () => {
    const email = process.env.GOOGLE_CLIENT_EMAIL;
    // Replace actual literal \n characters inside the env string
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
        const { firstName, lastName, email, location, birthday } = body;

        // Basic validation
        if (!firstName || !lastName || !email || !location || !birthday) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const sheets = await getGoogleSheetsClient();
        const SPREADSHEET_ID = '1eOpfQVdTfZh_Tb8NjFxGggVXd3b6cABQIsqKDbb15Z8';

        // Append the row to Sheet1
        // Adjust 'Sheet1' if the sheet tab name differs.
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:E',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [firstName, lastName, email, location, birthday, new Date().toISOString()]
                ],
            },
        });

        return NextResponse.json({ success: true, message: 'Successfully joined VIP Club' });

    } catch (error: any) {
        console.error('VIP Club Form Error:', error);

        // Provide a more helpful error message in development if credentials fail
        if (error.message.includes('missing')) {
            return NextResponse.json(
                { error: 'Server configuration error: Please setup Google Service credentials' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to process request. Please try again later.' },
            { status: 500 }
        );
    }
}
