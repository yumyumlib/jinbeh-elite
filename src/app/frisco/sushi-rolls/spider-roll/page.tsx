import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Spider Roll Frisco | Soft Shell Crab Sushi",
  description: "Spider Roll at Jinbeh Frisco: Tempura soft shell crab, cucumber, avocado, spicy mayo. Premium sushi near Legacy West. Call (214) 619-1200.",
  keywords: ["spider roll frisco","spider roll sushi","soft shell crab sushi roll","crispy crab sushi","specialty sushi roll frisco","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "Spider Roll | Jinbeh Frisco",
    description: "Soft shell crab with cucumber and spicy mayo",
    url: "https://jinbeh.com/frisco/sushi-rolls/spider-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sushi Rolls Spider Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/spider-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Spider Roll",
  "description": "Soft shell crab with cucumber and spicy mayo",
  "offers": {
    "@type": "Offer",
    "price": "15.95",
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
      "name": "What is in Spider Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spider Roll features tempura soft-shell crab, cucumber, avocado, and spicy mayo, all rolled in sushi rice and nori. The crab legs stick out from the roll, resembling a spider."
      }
    },
    {
      "@type": "Question",
      "name": "What makes it a spider roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The name comes from the soft-shell crab's legs that protrude from the ends of the roll, resembling spider legs. It's a beautifully visual and delicious specialty roll."
      }
    },
    {
      "@type": "Question",
      "name": "Is Spider Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spider Roll may contain gluten in tempura flour and spicy mayo. Request gluten-free alternatives and verify ingredients with your server."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with real crab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We use authentic soft-shell crab tempura-fried fresh. The soft shells make the entire crab edible, and we use seasonal soft-shell crabs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Spider Roll is available for takeout and delivery. For the best presentation, we recommend dining in at our sushi bar. Call (214) 619-1200 to order."
      }
    }
  ]
};


export default function SpiderRollFriscoPage() {
  const item = getMenuItem("spider-roll", "sushi-rolls")!;
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
