import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Tuna Tartare Frisco | Diced Ahi with Avocado Ponzu | Jinbeh",
  description: "Diced ahi tuna tartare with avocado and ponzu at Jinbeh Frisco. 100-150 calories, 20g protein, omega-3 healthy. Premium raw fish.",
  keywords: ["tuna tartare frisco","ahi tuna tartare appetizer","raw tuna appetizer","sashimi style appetizer","japanese appetizers frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Tuna Tartare Frisco | Premium Diced Ahi Tuna",
    description: "Diced ahi tuna tartare with avocado and ponzu at Jinbeh Frisco. 100-150 calories, 20g protein.",
    url: "https://jinbeh.com/frisco/appetizers/tuna-tartare",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Appetizers Tuna Tartare",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/appetizers/tuna-tartare",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tuna Tartare",
  "description": "Diced ahi tuna with avocado and ponzu",
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
      "name": "How many calories in Tuna Tartare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Tartare at Jinbeh contains approximately 100-150 calories per serving with 20 grams of protein and 4 grams of healthy omega-3 fats from premium ahi tuna."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of tuna tartare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna tartare provides lean protein, omega-3 fatty acids for heart and brain health, vitamins B12 and D, selenium, plus healthy fats from avocado. Excellent for muscle and bone health."
      }
    },
    {
      "@type": "Question",
      "name": "What is Tartare and how is it different from sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tartare is diced fine and tossed with avocado, ponzu sauce, and seasonings, offering a creamy texture. Sashimi is sliced thin. Both are premium raw fish preparations."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Tartare good for sharing and happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! At $15.95, Tuna Tartare is perfect for sharing and featured in many happy hour specials. An elegant appetizer for groups and special occasions."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Tartare safe and available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our tartare is made from premium sushi-grade tuna, handled safely by trained chefs. Best enjoyed fresh, so order for quick pickup. Call (214) 619-1200."
      }
    }
  ]
};


export default function TunaTartareFriscoPage() {
  const item = getMenuItem("tuna-tartare", "appetizers")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Appetizers", href: "/frisco/appetizers" }, { label: "Tuna Tartare" }]} />
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
