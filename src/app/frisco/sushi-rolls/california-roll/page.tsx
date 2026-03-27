import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "California Roll Sushi Frisco | Best Crab & Avocado",
  description: "California Roll at Jinbeh Frisco: 250 cal, crab, avocado, cucumber. Fresh handmade sushi near Legacy West. Dine in or takeout. Call (214) 619-1200.",
  keywords: ["california roll frisco","california roll sushi","crab avocado roll","sushi for beginners","sushi rolls frisco","jinbeh california roll","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "California Roll | Jinbeh Frisco",
    description: "Crab, avocado, and cucumber classic",
    url: "https://jinbeh.com/frisco/sushi-rolls/california-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sushi Rolls California Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/california-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "California Roll",
  "description": "Crab, avocado, and cucumber classic",
  "offers": {
    "@type": "Offer",
    "price": "9.95",
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
      "name": "How many calories in California Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A California Roll at Jinbeh contains approximately 250-300 calories per 8-piece serving. It features crab, avocado, and cucumber with sushi rice and nori, making it a lighter sushi option."
      }
    },
    {
      "@type": "Question",
      "name": "What is California Roll made of?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "California Roll includes imitation crab, fresh avocado, crisp cucumber, sushi rice, and seaweed (nori). Some versions include sesame seeds or tobiko. Our chefs at Jinbeh craft each roll with premium ingredients."
      }
    },
    {
      "@type": "Question",
      "name": "Is California Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most California Roll ingredients are naturally gluten-free, but soy sauce and some seasonings may contain gluten. Please inform your server of dietary restrictions and our chefs can accommodate requests."
      }
    },
    {
      "@type": "Question",
      "name": "Is California Roll made fresh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All sushi at Jinbeh Frisco is made to order. Our California Roll is prepared by skilled sushi chefs who slice, roll, and plate each piece with precision and artistry."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order California Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! California Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 619-1200 to order."
      }
    }
  ]
};


export default function CaliforniaRollFriscoPage() {
  const item = getMenuItem("california-roll", "sushi-rolls")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Sushi Rolls", href: "/frisco/sushi-rolls" }, { label: "California Roll" }]} />
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
