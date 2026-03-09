import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Spider Roll Lewisville | Soft Shell Crab Sushi",
  description: "Spider Roll at Jinbeh Lewisville: Tempura soft shell crab, cucumber, avocado, spicy mayo. Premium sushi near I-35E. Call (972) 221-3888.",
  keywords: ["spider roll","spider roll lewisville","sushi near me lewisville","best sushi lewisville tx","sushi rolls lewisville","soft shell crab","jinbeh spider roll"],
  openGraph: {
    title: "Spider Roll | Jinbeh Lewisville",
    description: "Soft shell crab with cucumber and spicy mayo",
    url: "https://jinbeh.com/lewisville/sushi-rolls/spider-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/spider-roll",
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
        "text": "Yes! Spider Roll is available for takeout and delivery. For the best presentation, we recommend dining in at our sushi bar. Call (972) 221-3888 to order."
      }
    }
  ]
};


export default function SpiderRollLewisvillePage() {
  const item = getMenuItem("spider-roll", "sushi-rolls")!;
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
