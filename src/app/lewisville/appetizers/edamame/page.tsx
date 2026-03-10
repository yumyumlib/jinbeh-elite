import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Edamame Lewisville | Plant-Based Protein Soybeans",
  description: "Steamed edamame with sea salt at Jinbeh Lewisville. 18.5g protein per cup, complete amino acids, low calorie plant-based appetizer.",
  keywords: ["edamame lewisville","edamame sushi","spicy garlic edamame","japanese appetizers lewisville","healthy appetizers lewisville","plant based protein appetizer","japanese restaurant lewisville"],
  openGraph: {
    title: "Edamame | Jinbeh Lewisville",
    description: "Steamed soybeans with sea salt",
    url: "https://jinbeh.com/lewisville/appetizers/edamame",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/edamame",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Edamame",
  "description": "Steamed soybeans with sea salt",
  "offers": {
    "@type": "Offer",
    "price": "5.95",
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
      "name": "How many calories and protein in Edamame?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steamed Edamame at Jinbeh provides 121 calories per 100g with 18.5 grams of complete plant-based protein per cup, making it a nutritious, low-calorie appetizer."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of Edamame?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Edamame is a complete plant protein with all 9 essential amino acids, high in fiber for digestion, rich in vitamins and minerals. Supports weight loss, heart health, and bone strength."
      }
    },
    {
      "@type": "Question",
      "name": "Is Edamame vegetarian and vegan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Edamame is completely plant-based, vegetarian, vegan, and gluten-free. Perfect for diners with dietary restrictions."
      }
    },
    {
      "@type": "Question",
      "name": "How is Edamame best served and eaten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Edamame is steamed with sea salt and served hot. Pop the beans directly from the pod with your teeth or remove them by hand. Perfect for sharing!"
      }
    },
    {
      "@type": "Question",
      "name": "Is Edamame available for takeout and specials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Edamame at $5.95 travels well for takeout and is featured in our happy hour specials. Call (972) 221-3888 or order online."
      }
    }
  ]
};


export default function EdamameLewisvillePage() {
  const item = getMenuItem("edamame", "appetizers")!;
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
