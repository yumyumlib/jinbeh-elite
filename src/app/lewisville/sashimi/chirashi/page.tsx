import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Chirashi Bowl Lewisville | Scattered Sushi Rice Deluxe",
  description: "Scattered sushi bowl with premium assorted sashimi at Jinbeh Lewisville. 400-500 calories, 23g protein, omega-3 rich with vegetables.",
  keywords: ["chirashi bowl lewisville","chirashi sushi","scattered sushi rice bowl","sashimi rice bowl","japanese rice bowl lewisville","sashimi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Chirashi Bowl | Jinbeh Lewisville",
    description: "Assorted sashimi over sushi rice",
    url: "https://jinbeh.com/lewisville/sashimi/chirashi",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/chirashi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Chirashi Bowl",
  "description": "Assorted sashimi over sushi rice",
  "offers": {
    "@type": "Offer",
    "price": "28.95",
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
      "name": "How many calories are in a Chirashi Bowl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Chirashi Bowl at Jinbeh contains approximately 400-500 calories with 23-24 grams of protein, healthy fats, and carbohydrates from sushi rice, vegetables, and premium sashimi."
      }
    },
    {
      "@type": "Question",
      "name": "What health benefits does Chirashi Bowl offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chirashi Bowl combines omega-3 fatty acids from fish for heart and brain health, complete protein for muscle repair, B vitamins, selenium, and fiber from vegetables for overall wellness."
      }
    },
    {
      "@type": "Question",
      "name": "Is Chirashi Bowl safe to eat raw fish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our sashimi is premium sushi-grade quality, sourced fresh multiple times weekly, properly stored, and prepared by trained chefs following strict food safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Chirashi different from sushi rolls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chirashi means 'scattered sushi.' It features assorted fresh sashimi, vegetables, and garnishes scattered over seasoned sushi rice, offering a customizable, healthier option without mayonnaise or fried ingredients."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize my Chirashi Bowl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Chirashi Bowl at $28.95 can be customized with your choice of sashimi. Speak with our staff about preferences. Ask about our Omakase options for premium selections."
      }
    }
  ]
};


export default function ChirashiLewisvillePage() {
  const item = getMenuItem("chirashi", "sashimi")!;
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
