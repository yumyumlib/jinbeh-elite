import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Salmon Sashimi Lewisville | Omega-3 Rich Sliced Raw Fish",
  description: "Premium Atlantic salmon sashimi at Jinbeh Lewisville. 121 calories per serving, 17g protein, rich in omega-3s. Sushi-grade quality near Vista Ridge Mall.",
  keywords: ["salmon sashimi lewisville","salmon sashimi calories","salmon sashimi nutrition","sushi grade salmon","fresh fish sashimi lewisville","omega-3 sashimi","sashimi near me lewisville","japanese restaurant lewisville"],
  openGraph: {
    title: "Salmon Sashimi | Jinbeh Lewisville",
    description: "Fresh Atlantic salmon, sliced to perfection",
    url: "https://jinbeh.com/lewisville/sashimi/salmon-sashimi",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/salmon-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Salmon Sashimi",
  "description": "Fresh Atlantic salmon, sliced to perfection",
  "offers": {
    "@type": "Offer",
    "price": "14.95",
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
      "name": "How fresh is the Salmon Sashimi at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Salmon Sashimi is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Lewisville, we take pride in serving only the highest-quality sashimi."
      }
    },
    {
      "@type": "Question",
      "name": "What is Salmon Sashimi sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salmon Sashimi at Jinbeh is fresh atlantic salmon, sliced to perfection. Priced at $14.95, it's served without rice, allowing you to experience the pure, clean flavor of premium fish."
      }
    },
    {
      "@type": "Question",
      "name": "How should I eat Salmon Sashimi sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend lightly dipping Salmon Sashimi in soy sauce with a touch of wasabi. Let the natural flavors shine—great sashimi needs minimal accompaniment."
      }
    },
    {
      "@type": "Question",
      "name": "Is Salmon Sashimi sashimi safe to eat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Salmon Sashimi is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Lewisville follows strict food safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Salmon Sashimi as part of a platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Salmon Sashimi is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection."
      }
    }
  ]
};


export default function SalmonSashimiLewisvillePage() {
  const item = getMenuItem("salmon-sashimi", "sashimi")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
