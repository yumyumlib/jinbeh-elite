import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Omakase Selection | Jinbeh Frisco Sashimi Menu",
  description: "Chef\'s choice tasting of the day\'s best Enjoy Omakase Selection at Jinbeh Japanese Restaurant in Frisco, TX. Near Stonebriar Centre, minutes from Legacy West. Call.",
  keywords: ["omakase frisco","omakase dallas","omakase sushi near me","chef tasting sushi","premium sushi experience","sashimi near me frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Omakase Selection | Jinbeh Frisco",
    description: "Chef\'s choice tasting of the day\'s best",
    url: "https://jinbeh.com/frisco/sashimi/omakase",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sashimi-platter.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sashimi Omakase",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sashimi/omakase",
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
    "name": "Jinbeh Japanese Restaurant - Frisco",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Frisco",
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
        "text": "Our Omakase Selection is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Frisco, we take pride in serving only the highest-quality sashimi."
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
        "text": "Yes! Our Omakase Selection is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Frisco follows strict food safety protocols."
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


export default function OmakaseFriscoPage() {
  const item = getMenuItem("omakase", "sashimi")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Sashimi", href: "/frisco/sashimi" }, { label: "Omakase" }]} />
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
