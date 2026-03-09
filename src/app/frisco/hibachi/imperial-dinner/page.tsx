import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Imperial Dinner Hibachi Frisco | Surf Turf Premium Combo",
  description: "Ultimate trio: filet mignon, Maine lobster tail, jumbo shrimp. 600+ calories total protein combo. Premium special occasion dinners near Frisco TX.",
  keywords: ["imperial dinner hibachi frisco","surf and turf combo frisco tx","best hibachi near me frisco","luxury hibachi dinner frisco","protein combo meal","special occasion hibachi","japanese steakhouse frisco","best hibachi frisco tx"],
  openGraph: {
    title: "Imperial Dinner | Jinbeh Frisco",
    description: "Filet mignon, lobster tail, and shrimp",
    url: "https://jinbeh.com/frisco/hibachi/imperial-dinner",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/imperial-dinner",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Imperial Dinner",
  "description": "Filet mignon, lobster tail, and shrimp",
  "offers": {
    "@type": "Offer",
    "price": "64.95",
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
      "name": "What's in Imperial Dinner and total protein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Imperial Dinner features filet mignon (5oz), Maine lobster tail (5oz), and jumbo shrimp (3oz) for an ultimate protein trio. Total approximately 75-85g protein with 900-1000 calories complete dinner. Perfect for protein-focused diets."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Imperial Dinner at $64.95?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At $64.95, Imperial Dinner combines three premium proteins: filet mignon ($34.95), lobster tail ($44.95), and jumbo shrimp ($28.95). The value bundle saves versus ordering separately, offering ultimate hibachi variety experience."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Imperial Dinner special for occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Imperial Dinner offers the ultimate hibachi theater with three proteins cooked tableside simultaneously. Filet mignon, sweet lobster, and succulent shrimp provide variety and luxury. Unforgettable for anniversaries, proposals, and milestone celebrations."
      }
    },
    {
      "@type": "Question",
      "name": "Is Imperial Dinner healthy and high-protein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Imperial Dinner provides 75-85g protein from three lean protein sources. Filet (25-30g), lobster (25-30g), and shrimp (22-25g). Balance macronutrient ratio with included vegetables for optimal nutrition."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize portions or proteins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us for modifications. Most diners appreciate the three-protein variety. You can request different cuts (NY Strip, Ribeye) or additional vegetables. Our chefs accommodate special requests for dietary needs."
      }
    }
  ]
};


export default function ImperialDinnerFriscoPage() {
  const item = getMenuItem("imperial-dinner", "hibachi")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
