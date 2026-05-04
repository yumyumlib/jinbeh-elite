import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Jinbeh Punch Frisco - Japanese Tropical Cocktails",
  description: "Signature tropical cocktail at Jinbeh Frisco. Handcrafted Japanese cocktails with fresh ingredients. Perfect for happy hour. Call (214) 619-1200.",
  keywords: ["jinbeh punch frisco","house cocktail japanese restaurant","tropical cocktail frisco","signature cocktail jinbeh","japanese cocktails frisco","happy hour frisco","jinbeh frisco"],
  openGraph: {
    title: "Jinbeh Punch | Frisco Japanese Cocktails",
    description: "Signature tropical cocktail at Jinbeh. Fresh, handcrafted Japanese beverages.",
    url: "https://jinbeh.com/frisco/cocktails/jinbeh-punch",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Cocktails Jinbeh Punch",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/cocktails/jinbeh-punch",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Jinbeh Punch",
  "description": "House specialty tropical cocktail",
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
      "name": "What is the Jinbeh Punch cocktail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Punch is our signature tropical cocktail at Jinbeh Frisco. This house specialty combines fresh tropical fruits and premium spirits in a refreshing blend perfect for celebrating with friends."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories are in Jinbeh Punch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tropical cocktails typically range from 150-250 calories depending on specific ingredients and mixers used. Ask our bartenders for nutritional details on the Jinbeh Punch."
      }
    },
    {
      "@type": "Question",
      "name": "What are the ingredients in Jinbeh Punch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Jinbeh Punch features fresh tropical fruits, premium spirits, and carefully selected mixers to create a balanced, refreshing flavor profile. Our bartenders craft each drink to order."
      }
    },
    {
      "@type": "Question",
      "name": "Is Jinbeh Punch available during happy hour in Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Punch is featured during our happy hour at discounted prices. Call (214) 619-1200 or visit our website for current happy hour specials and times."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Jinbeh Punch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Punch pairs beautifully with our sushi rolls, appetizers, and Japanese cuisine. Our bartenders recommend pairing with light appetizers to complement the tropical flavors."
      }
    }
  ]
};

export default function JinbehPunchFriscoPage() {
  const item = { ...getMenuItem("jinbeh-punch", "cocktails")!, jinbehStory: "All cocktails at Jinbeh are crafted at a bar featuring a stunning collection of hand-painted tequila bottles. Each bottle is individually painted by artisans from a Mexican village. It took about a year to collect enough empty bottles to line the shelf." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Cocktails", href: "/frisco/cocktails" }, { label: "Jinbeh Punch" }]} />
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
