import type { Metadata } from "next";
import "./globals.css";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://jinbeh.com"),
  title: {
    default: "Jinbeh Japanese Restaurant | Hibachi & Sushi in Frisco & Lewisville TX",
    template: "%s | Jinbeh Japanese Restaurant",
  },
  description:
    "Experience authentic Japanese hibachi and sushi at Jinbeh. Family-owned since 1988, serving Frisco and Lewisville, TX. Dinner and a show – where memories are made. Reserve your table today!",
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
    title: "Jinbeh Japanese Restaurant | Hibachi & Sushi in Frisco & Lewisville TX",
    description:
      "Experience authentic Japanese hibachi and sushi at Jinbeh. Family-owned since 1988. Dinner and a show – where memories are made.",
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
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://jinbeh.com",
  },
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jinbeh Japanese Restaurant",
  url: "https://jinbeh.com",
  logo: "https://jinbeh.com/images/logo.png",
  sameAs: [
    "https://www.instagram.com/jinbehrestaurant",
    "https://www.facebook.com/jinbehrestaurant",
    "https://www.yelp.com/biz/jinbeh-japanese-restaurant-frisco",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-214-619-1200",
      contactType: "reservations",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-214-488-2224",
      contactType: "reservations",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - loaded via link tags for reliability */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}

