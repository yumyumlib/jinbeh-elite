import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
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
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Cocktails", href: "/frisco/cocktails" }, { label: "Lychee Martini" }]} />
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
      <PageSeoBoost route="/frisco/cocktails/lychee-martini" />
      <Footer />
    </>
  );
}
