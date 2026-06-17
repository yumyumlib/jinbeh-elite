import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Tokyo Mule - Japanese Whiskey Cocktails Lewisville",
  description: "Tokyo Mule with Japanese whiskey, ginger & lime at Jinbeh Lewisville. Premium happy hour cocktails. Best Japanese restaurant drinks. Call (214) 488-2224.",
  keywords: ["tokyo mule cocktail lewisville","sake mule cocktail","japanese moscow mule","ginger beer sake cocktail","japanese cocktails lewisville","happy hour lewisville","jinbeh lewisville"],
  openGraph: {
    title: "Tokyo Mule | Jinbeh Lewisville",
    description: "Japanese whiskey with ginger and lime",
    url: "https://jinbeh.com/lewisville/cocktails/tokyo-mule",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Cocktails Tokyo Mule",
      },
    ],
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
        "text": "The Tokyo Mule at Jinbeh Lewisville is japanese whiskey with ginger and lime. At, it's one of our signature bar offerings."
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
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Cocktails", href: "/lewisville/cocktails" }, { label: "Tokyo Mule" }]} />
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
