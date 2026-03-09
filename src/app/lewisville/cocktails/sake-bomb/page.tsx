import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Sake Bomb Lewisville - Classic Japanese Beer Cocktail",
  description: "Traditional sake bomb with cold Japanese beer at Jinbeh Lewisville. Best happy hour cocktails. Reserve at our Japanese restaurant (972) 221-3888.",
  keywords: ["japanese cocktails lewisville","sake drinks lewisville tx","best happy hour lewisville","sake bomb","beer cocktails","jinbeh lewisville","japanese restaurant","drinks near vista ridge"],
  openGraph: {
    title: "Sake Bomb | Jinbeh Lewisville",
    description: "Classic sake dropped into cold beer",
    url: "https://jinbeh.com/lewisville/cocktails/sake-bomb",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/cocktails/sake-bomb",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sake Bomb",
  "description": "Classic sake dropped into cold beer",
  "offers": {
    "@type": "Offer",
    "price": "8.00",
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
      "name": "What is the Sake Bomb at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sake Bomb at Jinbeh Lewisville is classic sake dropped into cold beer. At $8.00, it's one of our signature bar offerings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sake Bomb available during happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many of our cocktails including options like Sake Bomb are featured during happy hour at discounted prices. Visit Jinbeh Lewisville for current happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Sake Bomb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sake Bomb pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Sake Bomb at the bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville has a full bar where you can enjoy Sake Bomb and watch our sushi chefs at work. No reservation needed for bar seating."
      }
    }
  ]
};


export default function SakeBombLewisvillePage() {
  const item = getMenuItem("sake-bomb", "cocktails")!;
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
