import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Shrimp Tempura Frisco | Crispy Fried Shrimp Appetizer | Jinbeh",
  description: "Crispy tempura battered shrimp at Jinbeh Frisco. 200-300 calories, 12-15g protein, light, airy batter. Japanese classic appetizer.",
  keywords: ["shrimp tempura frisco","shrimp tempura near me","tempura appetizer","crispy shrimp japanese restaurant","japanese appetizers frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Shrimp Tempura Frisco | Crispy Fried Shrimp",
    description: "Crispy tempura battered shrimp at Jinbeh Frisco. 200-300 calories, 12-15g protein.",
    url: "https://jinbeh.com/frisco/appetizers/tempura",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/appetizers/tempura",
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
      "name": "How many calories in Shrimp Tempura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp Tempura at Jinbeh contains approximately 200-300 calories per serving with 12-15 grams of protein, depending on the number of pieces."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of shrimp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp provides lean protein, omega-3 fatty acids for heart health, selenium, and B vitamins. While tempura adds calories from frying, the shrimp is nutrient-dense."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Tempura and grilled shrimp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tempura is lightly battered and fried for a crispy, airy exterior with tender interior. Grilled shrimp is lower in calories but tempura offers a unique Japanese flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shrimp Tempura good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! At $12.95, Shrimp Tempura is perfect for sharing and is one of our most popular appetizers. Featured in happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Shrimp Tempura for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Shrimp Tempura travels well for takeout. For best quality, pick up quickly. Call (214) 619-1200 or order online."
      }
    }
  ]
};


export default function TempuraFriscoPage() {
  const item = getMenuItem("tempura", "appetizers")!;
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
