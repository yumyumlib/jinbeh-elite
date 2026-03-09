import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Sea Scallops Hibachi Frisco | Premium Seared Scallops",
  description: "Plump sea scallops seared garlic butter tableside. 140-180 calories, 20-22g protein. Delicate, premium seafood. Includes soup, salad, rice, vegetables.",
  keywords: ["sea scallops hibachi frisco","scallops teppanyaki frisco tx","best hibachi near me frisco","premium seafood hibachi frisco","scallops calories nutrition","ocean scallop recipes","japanese steakhouse frisco","best hibachi frisco tx"],
  openGraph: {
    title: "Sea Scallops | Jinbeh Frisco",
    description: "Plump sea scallops seared with garlic butter",
    url: "https://jinbeh.com/frisco/hibachi/scallops",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/scallops",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sea Scallops",
  "description": "Plump sea scallops seared with garlic butter",
  "offers": {
    "@type": "Offer",
    "price": "32.95",
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
      "name": "How many calories are in hibachi Sea Scallops?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sea scallops contain approximately 140-180 calories per 4oz serving with 20-22g protein and minimal fat (1-2g). The complete hibachi dinner totals 600-750 calories. Scallops are a premium lean protein choice that's naturally low-carb."
      }
    },
    {
      "@type": "Question",
      "name": "Are Sea Scallops healthy and nutritious?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Scallops are exceptionally healthy with high protein, low fat, and rich minerals. They contain selenium, vitamin B12, and phosphorus supporting bone health. Scallops provide heart-healthy omega-3 fatty acids and are ideal for paleo diets."
      }
    },
    {
      "@type": "Question",
      "name": "What's included with Sea Scallops hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your scallop dinner features Japanese onion soup, house salad with ginger dressing, plump sea scallops seared with garlic butter on the teppan, hibachi vegetables, fried rice, and choice of dipping sauce."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose scallops over shrimp or fish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scallops offer a unique delicate texture and mild sweet flavor distinct from shrimp or fish. While similar in calories to shrimp (140-180 cal), scallops provide a more refined, premium dining experience for special occasions."
      }
    },
    {
      "@type": "Question",
      "name": "Can scallops be prepared a certain way?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our chefs will prepare scallops to your preference. Request lighter butter usage or lemon instead. Scallops cook quickly on the hot teppan for perfect texture - tender and slightly sweet."
      }
    }
  ]
};


export default function ScallopsFriscoPage() {
  const item = getMenuItem("scallops", "hibachi")!;
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
