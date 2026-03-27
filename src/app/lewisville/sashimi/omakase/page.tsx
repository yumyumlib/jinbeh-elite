import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Omakase Selection Lewisville | Chef's Choice Sashimi Tasting",
  description: "Chef's choice tasting of the day's best premium sashimi at Jinbeh Lewisville. Authentic omakase experience with sushi-grade fish selections.",
  keywords: ["omakase lewisville","omakase dallas","omakase sushi near me","chef tasting sushi","premium sushi experience","sashimi near me lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Omakase Selection | Jinbeh Lewisville",
    description: "Chef\'s choice tasting of the day\'s best",
    url: "https://jinbeh.com/lewisville/sashimi/omakase",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sashimi-platter.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sashimi Omakase",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/omakase",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Omakase Selection",
  "description": "Chef's choice tasting of the day's best",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "restaurant": {
    "@type": "Restaurant",
    "name": "Jinbeh Japanese Restaurant - Lewisville",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lewisville",
      "addressRegion": "TX"
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fresh is the Omakase Selection at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Omakase Selection is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Lewisville, we take pride in serving only the highest-quality sashimi."
      }
    },
    {
      "@type": "Question",
      "name": "What is Omakase Selection sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omakase Selection at Jinbeh is chef's choice tasting of the day's best. Priced at Market, it's served without rice, allowing you to experience the pure, clean flavor of premium fish."
      }
    },
    {
      "@type": "Question",
      "name": "How should I eat Omakase Selection sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend lightly dipping Omakase Selection in soy sauce with a touch of wasabi. Let the natural flavors shine—great sashimi needs minimal accompaniment."
      }
    },
    {
      "@type": "Question",
      "name": "Is Omakase Selection sashimi safe to eat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Omakase Selection is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Lewisville follows strict food safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Omakase Selection as part of a platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Omakase Selection is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection."
      }
    }
  ]
};


export default function OmakaseLewisvillePage() {
  const item = getMenuItem("omakase", "sashimi")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sashimi", href: "/lewisville/sashimi" }, { label: "Omakase" }]} />
      </div>
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
