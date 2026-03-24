import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Lychee Martini - Best Japanese Cocktails Frisco | Jinbeh",
  description: "Premium lychee martini with vodka & floral notes. Handcrafted Japanese cocktails at Jinbeh Frisco. Happy hour specials. Reserve today (214) 619-1200.",
  keywords: ["lychee martini frisco","lychee martini","lychee sake","asian inspired cocktail","japanese cocktails frisco","date night cocktails frisco","jinbeh frisco"],
  openGraph: {
    title: "Lychee Martini | Best Japanese Cocktails Frisco",
    description: "Premium lychee martini with vodka & floral finish. Handcrafted Japanese cocktails.",
    url: "https://jinbeh.com/frisco/cocktails/lychee-martini",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Cocktails Lychee Martini",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/cocktails/lychee-martini",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Lychee Martini",
  "description": "Vodka with lychee and a floral finish",
  "offers": {
    "@type": "Offer",
    "price": "13.00",
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
      "name": "What is a Lychee Martini cocktail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Lychee Martini is a premium cocktail made with vodka, lychee liqueur or syrup, and a hint of floral notes. This refreshing Japanese-inspired martini offers a perfect balance of sweet and sophisticated flavors."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories are in a Lychee Martini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Lychee Martini typically contains 140-260 calories depending on the recipe. The calorie content varies based on the amount of lychee syrup, vodka, and vermouth used in preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What ingredients are in our Lychee Martini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Lychee Martini features premium vodka, lychee juice or liqueur, and a delicate touch of vermouth, garnished with fresh lychee fruit for an elegant presentation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the alcohol content of Lychee Martini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Lychee Martini contains approximately 17-20% alcohol by volume, depending on the specific recipe and ingredients used."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs best with Lychee Martini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Lychee Martini pairs beautifully with Japanese appetizers, light sushi rolls, and delicate seafood dishes. Its floral sweetness complements sashimi and vegetable-based rolls perfectly."
      }
    }
  ]
};


export default function LycheeMartiniFriscoPage() {
  const item = getMenuItem("lychee-martini", "cocktails")!;
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
