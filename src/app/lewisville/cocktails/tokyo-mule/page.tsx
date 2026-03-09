import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Tokyo Mule - Japanese Whiskey Cocktails Lewisville",
  description: "Tokyo Mule with Japanese whiskey, ginger & lime at Jinbeh Lewisville. Premium happy hour cocktails. Best Japanese restaurant drinks. Call (972) 221-3888.",
  keywords: ["japanese cocktails lewisville","sake drinks lewisville tx","best happy hour lewisville","tokyo mule","whiskey cocktails","ginger beer","jinbeh lewisville","japanese restaurant"],
  openGraph: {
    title: "Tokyo Mule | Jinbeh Lewisville",
    description: "Japanese whiskey with ginger and lime",
    url: "https://jinbeh.com/lewisville/cocktails/tokyo-mule",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/cocktails/tokyo-mule",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tokyo Mule",
  "description": "Japanese whiskey with ginger and lime",
  "offers": {
    "@type": "Offer",
    "price": "14.00",
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
      "name": "What is the Tokyo Mule at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tokyo Mule at Jinbeh Lewisville is japanese whiskey with ginger and lime. At $14.00, it's one of our signature bar offerings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tokyo Mule available during happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many of our cocktails including options like Tokyo Mule are featured during happy hour at discounted prices. Visit Jinbeh Lewisville for current happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Tokyo Mule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tokyo Mule pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Tokyo Mule at the bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville has a full bar where you can enjoy Tokyo Mule and watch our sushi chefs at work. No reservation needed for bar seating."
      }
    }
  ]
};


export default function TokyoMuleLewisvillePage() {
  const item = getMenuItem("tokyo-mule", "cocktails")!;
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
