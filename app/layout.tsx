import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Jinbeh Elite',
    description: 'Jinbeh Hibachi and Sushi Bar - Elite Experience',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="en">
                <body>{children}</body>body>
          </html>html>
        )
}</html>
