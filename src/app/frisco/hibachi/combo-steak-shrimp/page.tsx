import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Steak & Shrimp Combo Hibachi Frisco | Meat Seafood Mix",
  description: "Filet mignon with jumbo shrimp. 400-450 calories, 50-55g protein. Surf and turf lighter combo. Includes soup, salad, rice, grilled vegetables.",
  keywords: ["steak and shrimp hibachi frisco","surf and turf teppanyaki","hibachi combo dinner frisco","steak shrimp combo japanese restaurant","best hibachi near me frisco","date night hibachi frisco","hibachi near me frisco"],
  openGraph: {
    title: "Steak & Shrimp Combo | Jinbeh Frisco",
    description: "Filet mignon paired with jumbo shrimp",
    url: "https://jinbeh.com/frisco/hibachi/combo-steak-shrimp",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Combo Steak Shrimp",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/combo-steak-shrimp",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Steak & Shrimp Combo",
  "description": "Filet mignon paired with jumbo shrimp",
  "offers": {
    "@type": "Offer",
    "price": "38.95",
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
      "name": "How many calories in Steak & Shrimp Combo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steak & Shrimp Combo contains approximately 400-450 calories with 50-55g protein. Filet (25-30g) plus jumbo shrimp (22-25g) for ultra-high protein. Complete hibachi dinner totals 750-900 calories. Best protein-to-calorie ratio."
      }
    },
    {
      "@type": "Question",
      "name": "Is Steak & Shrimp the best combo option?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Steak & Shrimp offers surf and turf in lighter form. Filet mignon provides rich beef, while jumbo shrimp adds lean seafood protein. At $38.95, it's perfect for those wanting meat AND seafood variety."
      }
    },
    {
      "@type": "Question",
      "name": "What's the protein benefit of this combo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exceptional! You get 50-55g protein with complete amino acid profile from beef and shrimp. Filet supplies iron and B vitamins, shrimp adds minerals and low fat. Ideal for muscle building and recovery."
      }
    },
    {
      "@type": "Question",
      "name": "Is it good for low-carb or keto diets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Request to skip fried rice and add extra grilled vegetables. Steak & shrimp are both low-carb proteins. Total combo can be 400-450 calories with 50+ grams protein for ketogenic diets."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose this over steak-lobster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steak & Shrimp ($38.95) is $16 cheaper than Steak & Lobster ($54.95) with similar protein. Shrimp cooks quickly for faster service. Lobster is more premium for special occasions, shrimp is everyday elegance."
      }
    }
  ]
};


export default function ComboSteakShrimpFriscoPage() {
  const item = getMenuItem("combo-steak-shrimp", "hibachi")!;
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
