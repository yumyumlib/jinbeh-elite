import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Tuna Tartare Lewisville | Diced Ahi with Avocado Ponzu",
  description: "Diced ahi tuna tartare with avocado and ponzu at Jinbeh Lewisville. 100-150 calories, 20g protein, omega-3 healthy. Premium raw fish.",
  keywords: ["tuna tartare lewisville","ahi tuna tartare appetizer","raw tuna appetizer","sashimi style appetizer","japanese appetizers lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Tuna Tartare | Jinbeh Lewisville",
    description: "Diced ahi tuna with avocado and ponzu",
    url: "https://jinbeh.com/lewisville/appetizers/tuna-tartare",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Appetizers Tuna Tartare",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/tuna-tartare",
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
      "name": "What is Tuna Tartare at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Tartare at Jinbeh Lewisville is diced ahi tuna with avocado and ponzu. At $15.95, it's perfect for sharing while you wait for your hibachi or sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Tartare good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Tuna Tartare is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Tuna Tartare for happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check our happy hour specials! Many appetizers including items similar to Tuna Tartare are featured during our happy hour. Call (972) 221-3888 for current specials."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Tartare available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Tuna Tartare travels well for takeout. Call (972) 221-3888 directly or order online."
      }
    }
  ]
};


export default function TunaTartareLewisvillePage() {
  const item = getMenuItem("tuna-tartare", "appetizers")!;
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
