import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Shrimp Tempura Lewisville | Crispy Fried Shrimp Appetizer",
  description: "Crispy tempura battered shrimp at Jinbeh Lewisville. 200-300 calories, 12-15g protein, light, airy batter. Japanese classic appetizer.",
  keywords: ["shrimp tempura lewisville","shrimp tempura near me","tempura appetizer","crispy shrimp japanese restaurant","japanese appetizers lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Shrimp Tempura | Jinbeh Lewisville",
    description: "Light and crispy fried shrimp",
    url: "https://jinbeh.com/lewisville/appetizers/tempura",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/tempura",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Shrimp Tempura",
  "description": "Light and crispy fried shrimp",
  "offers": {
    "@type": "Offer",
    "price": "12.95",
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
      "name": "What is Shrimp Tempura at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp Tempura at Jinbeh Lewisville is light and crispy fried shrimp. At $12.95, it's perfect for sharing while you wait for your hibachi or sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shrimp Tempura good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Shrimp Tempura is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Shrimp Tempura for happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check our happy hour specials! Many appetizers including items similar to Shrimp Tempura are featured during our happy hour. Call (972) 221-3888 for current specials."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shrimp Tempura available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Shrimp Tempura travels well for takeout. Call (972) 221-3888 directly or order online."
      }
    }
  ]
};


export default function TempuraLewisvillePage() {
  const item = getMenuItem("tempura", "appetizers")!;
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
