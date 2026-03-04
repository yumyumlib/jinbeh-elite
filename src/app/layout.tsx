import type { Metadata } from "next";
import { Noto_Serif_JP, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/components/schema/AllSchemas";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jinbeh.com"),
  title: {
    default: "Hibachi & Sushi in Frisco & Lewisville TX | Jinbeh Japanese Restaurant",
    template: "%s | Jinbeh Japanese Restaurant",
  },
  description:
    "Experience authentic teppanyaki hibachi & fresh sushi near Stonebriar in Frisco or off I-35E in Lewisville. Family-owned Japanese restaurant since 1988. Reserve your hibachi table today!",
  keywords: [
    "hibachi",
    "sushi",
    "japanese restaurant",
    "teppanyaki",
    "frisco",
    "lewisville",
    "texas",
    "dfw",
    "birthday dinner",
    "family dining",
    "japanese steakhouse",
    "japanese food",
    "hibachi near me",
    "sushi near me",
    "teppanyaki restaurant",
    "asian cuisine",
    "hibachi restaurant",
    "sushi bar",
    "stonebriar restaurants",
    "japanese restaurant near me",
    "hibachi frisco",
    "sushi lewisville",
    "best hibachi dallas",
    "best sushi frisco",
  ],
  authors: [{ name: "Jinbeh Japanese Restaurant" }],
  creator: "Jinbeh Japanese Restaurant",
  publisher: "Jinbeh Japanese Restaurant",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jinbeh.com",
    siteName: "Jinbeh Japanese Restaurant",
    title: "Hibachi & Sushi in Frisco & Lewisville TX | Jinbeh Japanese Restaurant",
    description:
      "Experience authentic teppanyaki hibachi & fresh sushi near Stonebriar in Frisco or off I-35E in Lewisville. Family-owned Japanese restaurant since 1988.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant - Hibachi and Sushi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinbeh Japanese Restaurant | Hibachi & Sushi",
    description:
      "Experience authentic Japanese hibachi and sushi at Jinbeh. Family-owned since 1988.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "7f17acce8ef41abf",
  },
  alternates: {
    canonical: "https://jinbeh.com",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${sourceSans.variable}`}>
      <head>
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect for performance - only actively used third-party origins */}
        <link rel="dns-prefetch" href="https://www.opentable.com" />

        {/* Prefetch key internal pages for instant navigation */}
        <link rel="prefetch" href="/frisco" />
        <link rel="prefetch" href="/lewisville" />
        <link rel="prefetch" href="/menu" />

        {/* Preload critical hero fallback image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-010-orig-IMG_1852-1200w.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Structured data - Organization with AggregateRating */}
        <OrganizationSchema />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-red focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

