import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Lobster Tail Hibachi Frisco | Luxury Maine Lobster Teppanyaki",
  description: "Sweet Maine lobster tail cooked tableside butter. 180-220 calories per 5oz, 25-30g protein. Premium special occasion hibachi. Includes soup, salad, rice, vegetables. Jinbeh Frisco.",
  keywords: ["hibachi lobster tail frisco","lobster teppanyaki dinner","butter grilled lobster japanese restaurant","special occasion hibachi dinner","best hibachi near me frisco","japanese steakhouse frisco","hibachi near me frisco"],
  openGraph: {
    title: "Lobster Tail | Jinbeh Frisco",
    description: "Sweet Maine lobster tail, butter-grilled",
    url: "https://jinbeh.com/frisco/hibachi/lobster-tail",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Lobster Tail",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/lobster-tail",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Lobster Tail",
  "description": "Sweet Maine lobster tail, butter-grilled",
  "offers": {
    "@type": "Offer",
    "price": "44.95",
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
      "name": "How many calories in hibachi Lobster Tail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 5oz Maine lobster tail contains approximately 180-220 calories with 25-30g protein and only 1-2g fat. The complete hibachi dinner totals 650-800 calories. Lobster is one of the leanest, most protein-rich seafood options available."
      }
    },
    {
      "@type": "Question",
      "name": "Is Maine Lobster Tail healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Lobster is exceptionally healthy - high in protein, very low in fat, and packed with minerals including copper, selenium, and zinc. Contains omega-3 fatty acids supporting heart and brain health. Request butter on the side to control calories."
      }
    },
    {
      "@type": "Question",
      "name": "What's included with Lobster Tail hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your lobster dinner features Japanese onion soup, house salad with ginger dressing, sweet Maine lobster tail butter-grilled on the teppan, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and sauce choice."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Lobster Tail the most expensive hibachi item?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At $44.95, Maine lobster tail is premium due to scarcity, quality, and cost. It offers unmatched sweetness and tender texture. One of the finest proteins available. Perfect for anniversaries, proposals, or milestone celebrations."
      }
    },
    {
      "@type": "Question",
      "name": "Is Lobster Tail better than other seafood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lobster offers unique flavor and texture compared to shrimp or scallops. Similar calorie count (180-220 cal) to other seafood but superior taste and luxurious experience. Ideal for special occasions and celebrations."
      }
    }
  ]
};


export default function LobsterTailFriscoPage() {
  const item = getMenuItem("lobster-tail", "hibachi")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Lobster Tail" }]} />
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
