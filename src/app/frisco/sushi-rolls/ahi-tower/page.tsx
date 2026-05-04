import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Ahi Tuna Tower Frisco | Premium Spicy Ahi Tuna",
  description: "Ahi Tower at Jinbeh Frisco: Spicy ahi tuna, mango, avocado, sesame. Sushi-grade tuna tower appetizer. Call (214) 619-1200.",
  keywords: ["ahi tuna tower frisco","tuna tartare tower","ahi tower sushi","tuna avocado stack","sushi near me frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Ahi Tuna Tower | Jinbeh Frisco",
    description: "Layered ahi tuna, avocado, and crispy wonton",
    url: "https://jinbeh.com/frisco/sushi-rolls/ahi-tower",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sushi Rolls Ahi Tower",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/ahi-tower",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Ahi Tuna Tower",
  "description": "Layered ahi tuna, avocado, and crispy wonton",
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
      "name": "What is in Ahi Tuna Tower?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ahi Tower features sushi-grade ahi tuna mixed with spicy sriracha mayo, mango salsa, cucumber, avocado mash, sesame oil, and fresh ginger. Served as an artistic tower presentation."
      }
    },
    {
      "@type": "Question",
      "name": "Is Ahi Tower raw or cooked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ahi Tower is raw sushi-grade ahi tuna, hand-selected for freshness and flavor. Perfect for tuna lovers who prefer premium raw fish preparations."
      }
    },
    {
      "@type": "Question",
      "name": "Is it gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ahi Tower is mostly gluten-free, but verify sriracha and soy sauce ingredients with your server. Request gluten-free alternatives for dietary needs."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ahi Tower is typically served as a premium appetizer. Our chefs can advise on portion sizing and recommend additional items for your party."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Ahi Tower makes a stunning presentation for celebrations. Call (214) 619-1200 to arrange for special events or gatherings."
      }
    }
  ]
};

export default function AhiTowerFriscoPage() {
  const item = getMenuItem("ahi-tower", "sushi-rolls")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Sushi Rolls", href: "/frisco/sushi-rolls" }, { label: "Ahi Tower" }]} />
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
