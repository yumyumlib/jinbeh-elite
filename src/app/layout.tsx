import type { Metadata } from "next";
import { Noto_Serif_JP, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchemaFrisco, LocalBusinessSchemaLewisville, MenuSchema } from "@/components/schema/AllSchemas";
import SmartStickyCTA from "@/components/SmartStickyCTA";
import AttributionCapture from "@/components/AttributionCapture";

// Google Ads conversion tracking. Set in Google Ads account 278-359-1446.
// Override via NEXT_PUBLIC_GOOGLE_ADS_ID on the VPS if it ever changes.
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18150861653";
const GTAG_ENABLED = !!GOOGLE_ADS_ID && GOOGLE_ADS_ID.startsWith("AW-");

// GA4 measurement ID — property created May 30, 2026, account: yumyumjinbeh@gmail.com
// Linked to Google Ads for cross-device tracking, audience signals, enhanced conversions.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-8ZW7KHER0C";
const GA4_ENABLED = !!GA4_ID && GA4_ID.startsWith("G-");

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
    default: "Jinbeh Japanese Restaurant | Hibachi & Sushi Since 1988 | Frisco & Lewisville TX",
    template: "%s | Jinbeh Japanese Restaurant – Since 1988",
  },
  description:
    "Dinner and a show since 1988. Jinbeh serves authentic hibachi, hand-crafted sushi, and premium sake at two DFW locations, Frisco near Stonebriar & Lewisville off I-35E. Reserve your table tonight.",
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
    title: "Jinbeh Japanese Restaurant | Hibachi & Sushi Since 1988 | Frisco & Lewisville TX",
    description:
      "Dinner and a show since 1988. Authentic hibachi, hand-crafted sushi, and premium sake, Frisco near Stonebriar & Lewisville off I-35E. Reserve tonight.",
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
    title: "Jinbeh Japanese Restaurant | Hibachi & Sushi Since 1988",
    description:
      "Dinner and a show since 1988. Authentic hibachi and fresh sushi at Jinbeh, Frisco & Lewisville TX.",
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

        {/* Favicon and PWA */}
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for performance - critical third-party origins */}
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.opentable.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://cdn.opentable.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://www.grubhub.com" />
        <link rel="dns-prefetch" href="https://www.ubereats.com" />

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
        {/* Structured data - WebSite with SearchAction for sitelinks */}
        <WebSiteSchema />
        {/* Structured data - LocalBusiness for both locations */}
        <LocalBusinessSchemaFrisco />
        <LocalBusinessSchemaLewisville />
        {/* Structured data - Menu with representative items */}
        <MenuSchema />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-red focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {/* Capture Google Click ID + UTM params on every page mount.
            Persists to localStorage 90 days. Surfaces via @/lib/attribution
            for downstream consumers like OpenTableWidget. */}
        <AttributionCapture />
        {children}
        <SmartStickyCTA />

        {/* Google Tag (gtag.js) — Google Ads conversion tracking.
            Only renders when NEXT_PUBLIC_GOOGLE_ADS_ID is set to a real AW-XXX id.
            Conversion events fire via window.gtag() — see src/lib/gtag.ts. */}
        {GTAG_ENABLED && (
          <>
            <Script
              id="google-tag-loader"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
            />
            <Script id="google-tag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
                ${GA4_ENABLED ? `gtag('config', '${GA4_ID}');` : ""}
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

