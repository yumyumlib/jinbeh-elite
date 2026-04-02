import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Shrimp Tempura Roll Lewisville | Crispy Fried Shrimp",
  description: "Shrimp Tempura Roll at Jinbeh Lewisville: 450-500 cal, crispy tempura shrimp, avocado. Fresh made daily. Call (972) 221-3888.",
  keywords: ["shrimp tempura roll lewisville","shrimp tempura roll","crispy shrimp sushi","tempura sushi roll","shrimp tempura roll calories","sushi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Shrimp Tempura Roll | Jinbeh Lewisville",
    description: "Crispy shrimp tempura with avocado",
    url: "https://jinbeh.com/lewisville/sushi-rolls/shrimp-tempura-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sushi Rolls Shrimp Tempura Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/shrimp-tempura-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Shrimp Tempura Roll",
  "description": "Crispy shrimp tempura with avocado",
  "offers": {
    "@type": "Offer",
    "price": "13.95",
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
      "name": "What is in Shrimp Tempura Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp Tempura Roll features crispy tempura-battered shrimp, cucumber, avocado, sushi rice, and seaweed. Often topped with spicy mayo, sesame seeds, and crispy fried onions."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories in Shrimp Tempura Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp Tempura Roll contains approximately 450-500 calories per 8-piece serving. The higher count comes from the crispy tempura batter and spicy mayo."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shrimp Tempura Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp Tempura Roll contains gluten in the tempura flour coating and soy sauce. Inform your server for gluten-free accommodations or alternative coatings."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with real shrimp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We use fresh, premium shrimp tempura-fried to crispy perfection. All ingredients are prepared fresh to order by our experienced sushi chefs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Shrimp Tempura Roll is available for takeout and delivery. For the crispiest experience, we recommend dining in at our sushi bar. Call (972) 221-3888."
      }
    }
  ]
};


export default function ShrimpTempuraRollLewisvillePage() {
  const item = { ...getMenuItem("shrimp-tempura-roll", "sushi-rolls")!, jinbehStory: "Combines our crispy tempura technique with the precision of hand-rolled maki. At Jinbeh, tempura uses a thick batter for maximum crunch — distinct from the lighter \'agedashi\' style." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sushi Rolls", href: "/lewisville/sushi-rolls" }, { label: "Shrimp Tempura Roll" }]} />
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
