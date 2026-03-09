import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Tuna Sashimi Frisco | Lean Protein Ahi Tuna | Jinbeh",
  description: "Premium ahi tuna sashimi at Jinbeh Frisco. 94 calories, 20g protein, zero carbs. High in omega-3s and heart-healthy nutrients.",
  keywords: ["sashimi near me frisco","tuna sashimi frisco","best sushi frisco tx","ahi tuna sashimi calories","lean protein sashimi","japanese restaurant frisco","sushi-grade tuna","raw fish frisco"],
  openGraph: {
    title: "Tuna Sashimi Frisco | Premium Lean Protein Fish",
    description: "Premium ahi tuna sashimi at Jinbeh Frisco. 94 calories, 20g protein, zero carbs.",
    url: "https://jinbeh.com/frisco/sashimi/tuna-sashimi",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sashimi/tuna-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tuna Sashimi",
  "description": "Premium ahi tuna, melt-in-your-mouth tender",
  "offers": {
    "@type": "Offer",
    "price": "16.95",
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
      "name": "How many calories does Tuna Sashimi have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Sashimi at Jinbeh contains approximately 94 calories per 3-ounce serving with 20 grams of protein and zero grams of carbohydrates, making it ideal for low-carb diets."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of Tuna Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Sashimi is leaner than salmon with high protein and low fat content. It's rich in omega-3 fatty acids (EPA and DHA) that reduce inflammation, support heart health, improve cholesterol levels, and provide selenium and B12."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Sashimi safe to eat raw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our premium ahi tuna is sushi-grade quality, sourced fresh multiple times weekly, properly stored at precise temperatures, and prepared by trained chefs following strict food safety standards."
      }
    },
    {
      "@type": "Question",
      "name": "How do you serve Tuna Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Sashimi is best enjoyed lightly dipped in soy sauce with a touch of wasabi and ginger. The clean, delicate flavor of premium ahi tuna is best appreciated with minimal accompaniment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Tuna Sashimi with other dishes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Tuna Sashimi is available individually at $16.95 or as part of our Sashimi Deluxe Platter ($32.95) and Chirashi Bowl. Ask about our Omakase for premium selections."
      }
    }
  ]
};


export default function TunaSashimiFriscoPage() {
  const item = getMenuItem("tuna-sashimi", "sashimi")!;
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
