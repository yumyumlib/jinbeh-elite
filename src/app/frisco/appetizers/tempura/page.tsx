import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Shrimp Tempura Frisco | Crispy Fried Shrimp Appetizer | Jinbeh",
  description: "Crispy tempura battered shrimp at Jinbeh Frisco. 200-300 calories, 12-15g protein, light, airy batter. Japanese classic appetizer.",
  keywords: ["shrimp tempura frisco","shrimp tempura near me","tempura appetizer","crispy shrimp japanese restaurant","japanese appetizers frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Shrimp Tempura Frisco | Crispy Fried Shrimp",
    description: "Crispy tempura battered shrimp at Jinbeh Frisco. 200-300 calories, 12-15g protein.",
    url: "https://jinbeh.com/frisco/appetizers/tempura",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Appetizers Tempura",
      },
    ],
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
        "text": "Absolutely! At, Shrimp Tempura is perfect for sharing and is one of our most popular appetizers. Pair with draft beer or sake during Happy Hour (Mon-Fri 5-6:30pm)."
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
  const item = { ...getMenuItem("tempura", "appetizers")!, jinbehStory: "At Jinbeh, we distinguish between tempura and agedashi: tempura uses a thicker batter for a satisfying crunch, while agedashi uses a lighter coating. Our vegetable tempura comes with warm tempura sauce, a light, delicate broth that lets each vegetable shine." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Appetizers", href: "/frisco/appetizers" }, { label: "Tempura" }]} />
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
      <PageSeoBoost route="/frisco/appetizers/tempura" />
      <Footer />
    </>
  );
}
