import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Tiger Roll Lewisville | Tempura Shrimp Spicy Tuna",
  description: "Tiger Roll at Jinbeh Lewisville: Tempura shrimp, spicy tuna, cucumber, avocado, sesame. Eel and spicy mayo drizzle. Call (972) 221-3888.",
  keywords: ["tiger roll lewisville","tiger roll sushi","spicy tuna tempura roll","shrimp tempura spicy roll","specialty sushi roll lewisville","sushi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Tiger Roll | Jinbeh Lewisville",
    description: "Shrimp tempura with spicy tuna and jalapeño",
    url: "https://jinbeh.com/lewisville/sushi-rolls/tiger-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sushi Rolls Tiger Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/tiger-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tiger Roll",
  "description": "Shrimp tempura with spicy tuna and jalapeño",
  "offers": {
    "@type": "Offer",
    "price": "17.95",
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
      "name": "What is in Tiger Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Roll features tempura shrimp, cucumber, avocado, spicy tuna mix, sushi rice, and nori. Topped with sesame seeds, eel sauce, and spicy mayo drizzle."
      }
    },
    {
      "@type": "Question",
      "name": "Is it spicy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Tiger Roll has a moderate to medium spice level from the spicy tuna and sriracha drizzle. We can adjust the heat level to your preference."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tiger Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Roll contains gluten in the tempura flour and soy sauce. Request gluten-free tempura and tamari sauce for gluten-free preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What is in the spicy mayo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our spicy mayo combines mayonnaise with sriracha, gochujang, and other Japanese seasonings for a perfect balance of heat and flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Tiger Roll is available for takeout and delivery. For the best presentation, we recommend dining in at our sushi bar. Call (972) 221-3888."
      }
    }
  ]
};


export default function TigerRollLewisvillePage() {
  const item = getMenuItem("tiger-roll", "sushi-rolls")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sushi Rolls", href: "/lewisville/sushi-rolls" }, { label: "Tiger Roll" }]} />
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
