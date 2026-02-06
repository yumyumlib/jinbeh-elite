import type { Metadata } from "next";
import "./globals.css";
import MobileStickyCTA from "@/components/MobileStickyCTA";

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

// JSON-LD Schema for Organization with AggregateRating
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jinbeh Japanese Restaurant",
  url: "https://jinbeh.com",
  logo: "https://jinbeh.com/images/logo.png",
  foundingDate: "1988",
  sameAs: [
    "https://www.instagram.com/jinbehfrisco/",
    "https://www.facebook.com/Jinbeh/",
    "https://www.yelp.com/biz/jinbeh-japanese-restaurant-frisco",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-214-619-1200",
      contactType: "reservations",
      areaServed: "US",
      availableLanguage: ["English"],
      name: "Frisco Location",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-214-488-2224",
      contactType: "reservations",
      areaServed: "US",
      availableLanguage: ["English"],
      name: "Lewisville Location",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "1247",
    bestRating: "5",
    worstRating: "1",
  },
};

// JSON-LD Schema for LocalBusiness (Frisco)
const friscoRestaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://jinbeh.com/frisco",
  name: "Jinbeh Japanese Restaurant - Frisco",
  image: "https://jinbeh.com/images/frisco-exterior.jpg",
  url: "https://jinbeh.com/frisco",
  telephone: "+1-214-619-1200",
  priceRange: "$$",
  servesCuisine: ["Japanese", "Sushi", "Hibachi", "Teppanyaki"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2693 Preston Rd Suite 1040",
    addressLocality: "Frisco",
    addressRegion: "TX",
    postalCode: "75034",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.1175,
    longitude: -96.8035,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "823",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "14:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "11:30", closes: "14:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "17:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "17:00", closes: "22:00" },
  ],
  acceptsReservations: true,
};

// JSON-LD Schema for LocalBusiness (Lewisville)
const lewisvilleRestaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://jinbeh.com/lewisville",
  name: "Jinbeh Japanese Restaurant - Lewisville",
  image: "https://jinbeh.com/images/lewisville-exterior.jpg",
  url: "https://jinbeh.com/lewisville",
  telephone: "+1-214-488-2224",
  priceRange: "$$",
  servesCuisine: ["Japanese", "Sushi", "Hibachi", "Teppanyaki"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2440 S Stemmons Fwy #A",
    addressLocality: "Lewisville",
    addressRegion: "TX",
    postalCode: "75067",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.0198,
    longitude: -96.9942,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "424",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "14:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "11:30", closes: "14:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "17:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "17:00", closes: "22:00" },
  ],
  acceptsReservations: true,
};

// Menu Schema for rich snippets
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Jinbeh Menu",
  description: "Authentic Japanese hibachi and sushi menu featuring fresh seafood, premium steaks, and chef's special rolls",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Hibachi Entrees",
      description: "Teppanyaki-grilled entrees prepared tableside",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Hibachi Filet Mignon", description: "Premium center-cut filet with seasonal vegetables and fried rice", offers: { "@type": "Offer", price: "34.95", priceCurrency: "USD" } },
        { "@type": "MenuItem", name: "Hibachi Shrimp", description: "Jumbo shrimp grilled to perfection with hibachi vegetables", offers: { "@type": "Offer", price: "26.95", priceCurrency: "USD" } },
        { "@type": "MenuItem", name: "Hibachi Chicken", description: "Tender chicken breast with signature hibachi seasonings", offers: { "@type": "Offer", price: "22.95", priceCurrency: "USD" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Sushi Rolls",
      description: "Fresh, hand-crafted sushi rolls",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Dragon Roll", description: "Eel and cucumber topped with avocado and eel sauce", offers: { "@type": "Offer", price: "16.95", priceCurrency: "USD" } },
        { "@type": "MenuItem", name: "Rainbow Roll", description: "California roll topped with assorted sashimi", offers: { "@type": "Offer", price: "18.95", priceCurrency: "USD" } },
        { "@type": "MenuItem", name: "Spicy Tuna Roll", description: "Fresh tuna with spicy mayo and green onion", offers: { "@type": "Offer", price: "12.95", priceCurrency: "USD" } },
      ],
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
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect for performance - critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.opentable.com" />

        {/* Prefetch key internal pages for instant navigation */}
        <link rel="prefetch" href="/frisco" />
        <link rel="prefetch" href="/lewisville" />
        <link rel="prefetch" href="/menu" />

        {/* Google Fonts with display=swap for better LCP */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Preload critical hero fallback image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-006-orig-IMG_1848-1200w.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Structured data - Organization with AggregateRating */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Structured data - Frisco Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(friscoRestaurantSchema),
          }}
        />
        {/* Structured data - Lewisville Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lewisvilleRestaurantSchema),
          }}
        />
        {/* Structured data - Menu */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(menuSchema),
          }}
        />
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
        <MobileStickyCTA />
      </body>
    </html>
  );
}

