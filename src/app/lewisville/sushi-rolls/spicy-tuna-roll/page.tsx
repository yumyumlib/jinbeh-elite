import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Spicy Tuna Roll Lewisville | Fresh Tuna Spicy Mayo",
  description: "Spicy Tuna Roll at Jinbeh Lewisville: Fresh tuna, spicy mayo, 260-350 cal. Premium sushi near I-35E. Made fresh to order. Call (972) 221-3888.",
  keywords: ["spicy tuna roll","spicy tuna roll lewisville","sushi near me lewisville","best sushi lewisville tx","sushi rolls lewisville","jinbeh spicy tuna roll","best sushi rolls lewisville"],
  openGraph: {
    title: "Spicy Tuna Roll | Jinbeh Lewisville",
    description: "Fresh tuna with spicy mayo and scallions",
    url: "https://jinbeh.com/lewisville/sushi-rolls/spicy-tuna-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/spicy-tuna-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Spicy Tuna Roll",
  "description": "Fresh tuna with spicy mayo and scallions",
  "offers": {
    "@type": "Offer",
    "price": "11.95",
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
      "name": "How many calories in Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spicy Tuna Roll at Jinbeh contains approximately 260-350 calories per serving. The exact count varies based on portion size and the amount of spicy mayo used in the preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What is in Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Spicy Tuna Roll features fresh sushi-grade tuna mixed with spicy mayo, sriracha, scallions, cucumber, avocado, sushi rice, and nori. The perfect balance of heat and fresh fish flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Is Spicy Tuna Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spicy Tuna Roll may contain gluten in soy sauce and some seasonings. Please inform your server of dietary restrictions and our chefs can recommend gluten-free soy sauce options."
      }
    },
    {
      "@type": "Question",
      "name": "How spicy is Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Spicy Tuna Roll offers a medium heat level from sriracha and chili seasonings. If you prefer milder or extra spicy, our chefs can customize it to your taste preference."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with fresh tuna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We use sushi-grade tuna delivered daily. All rolls at Jinbeh Lewisville are prepared fresh to order by experienced sushi chefs."
      }
    }
  ]
};


export default function SpicyTunaRollLewisvillePage() {
  const item = getMenuItem("spicy-tuna-roll", "sushi-rolls")!;
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
