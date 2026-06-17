import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Sea Scallops Hibachi Frisco | Premium Seared Scallops",
  description: "Plump sea scallops seared garlic butter tableside. 140-180 calories, 20-22g protein. Delicate, premium seafood. Includes soup, salad, rice, vegetables. Jinbeh Frisco.",
  keywords: ["hibachi scallops frisco","sea scallops teppanyaki","seared scallops japanese restaurant","hibachi seafood frisco tx","best hibachi near me frisco","teppanyaki restaurant frisco","hibachi near me frisco"],
  openGraph: {
    title: "Sea Scallops | Jinbeh Frisco",
    description: "Plump sea scallops seared with garlic butter",
    url: "https://jinbeh.com/frisco/hibachi/scallops",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Scallops",
      },
    ],
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
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Scallops" }]} />
      </div>
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      {/* AI-assisted nutrition disclaimer */}
      <div className="container mx-auto max-w-5xl px-4 my-8">
        <div className="bg-warm-ivory border-l-4 border-soft-gold rounded-r-2xl p-5 text-sm text-charcoal/75">
          <p>
            <strong className="text-charcoal">Nutrition disclaimer:</strong>{" "}
            Caloric, nutritional, and macronutrient values mentioned on this page are estimates
            assisted by AI and should be treated as approximate guidance only. Actual values vary
            by portion size, preparation method, ingredient batch, and chef discretion at Jinbeh
            Frisco and Lewisville.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
