import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Tokyo Mule - Japanese Whiskey Cocktails Frisco | Jinbeh",
  description: "Tokyo Mule with Japanese whiskey, ginger & lime at Jinbeh Frisco. Premium happy hour cocktails. Best Japanese restaurant drinks. Call (214) 619-1200.",
  keywords: ["tokyo mule cocktail frisco","sake mule cocktail","japanese moscow mule","ginger beer sake cocktail","japanese cocktails frisco","happy hour frisco","jinbeh frisco"],
  openGraph: {
    title: "Tokyo Mule | Japanese Whiskey Cocktail Frisco",
    description: "Tokyo Mule with premium Japanese whiskey, ginger & lime.",
    url: "https://jinbeh.com/frisco/cocktails/tokyo-mule",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Cocktails Tokyo Mule",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/cocktails/tokyo-mule",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tokyo Mule",
  "description": "Japanese whiskey with ginger and lime",
  "offers": {
    "@type": "Offer",
    "price": "14.00",
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
      "name": "What is a Tokyo Mule cocktail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tokyo Mule is a Japanese twist on the classic Moscow Mule. Made with premium Japanese whiskey, crisp ginger beer, fresh lime juice, and a cucumber garnish, it delivers bold ginger spice with subtle whiskey warmth."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories are in a Tokyo Mule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Tokyo Mule typically contains 180-215 calories, with 15-21g of carbohydrates and approximately 15-17g of sugar. The exact amount varies based on the ginger beer and whiskey proportions used."
      }
    },
    {
      "@type": "Question",
      "name": "What ingredients are in our Tokyo Mule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Tokyo Mule features premium Japanese whiskey, spicy ginger beer, fresh squeezed lime juice, and is garnished with a cucumber slice for authentic flavor and presentation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the alcohol content of Tokyo Mule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tokyo Mule contains approximately 12-15% alcohol by volume. Japanese whiskey typically ranges from 40-43% ABV, blended with ginger beer and lime juice to create a balanced, sippable cocktail."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs best with Tokyo Mule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The spicy ginger flavors pair excellently with our sushi rolls, especially spicy tuna and dynamite rolls. It also complements Japanese appetizers like gyoza, edamame, and tempura perfectly."
      }
    }
  ]
};


export default function TokyoMuleFriscoPage() {
  const item = getMenuItem("tokyo-mule", "cocktails")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Cocktails", href: "/frisco/cocktails" }, { label: "Tokyo Mule" }]} />
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
