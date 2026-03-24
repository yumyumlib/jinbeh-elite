import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Ahi Tuna Tower Lewisville | Premium Spicy Ahi Tuna",
  description: "Ahi Tower at Jinbeh Lewisville: Spicy ahi tuna, mango, avocado, sesame. Sushi-grade tuna tower appetizer. Call (972) 221-3888.",
  keywords: ["ahi tuna tower lewisville","tuna tartare tower","ahi tower sushi","tuna avocado stack","sushi near me lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Ahi Tuna Tower | Jinbeh Lewisville",
    description: "Layered ahi tuna, avocado, and crispy wonton",
    url: "https://jinbeh.com/lewisville/sushi-rolls/ahi-tower",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sushi Rolls Ahi Tower",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/ahi-tower",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Ahi Tuna Tower",
  "description": "Layered ahi tuna, avocado, and crispy wonton",
  "offers": {
    "@type": "Offer",
    "price": "19.95",
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
        "text": "Yes! Ahi Tower makes a stunning presentation for celebrations. Call (972) 221-3888 to arrange for special events or gatherings."
      }
    }
  ]
};


export default function AhiTowerLewisvillePage() {
  const item = getMenuItem("ahi-tower", "sushi-rolls")!;
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
