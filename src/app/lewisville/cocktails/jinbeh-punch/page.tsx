import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Jinbeh Punch Lewisville - Japanese Tropical Cocktails",
  description: "Signature tropical cocktail at Jinbeh Lewisville. Handcrafted Japanese cocktails with fresh ingredients. Perfect for happy hour. Call (214) 488-2224.",
  keywords: ["jinbeh punch lewisville","house cocktail japanese restaurant","tropical cocktail lewisville","signature cocktail jinbeh","japanese cocktails lewisville","happy hour lewisville","jinbeh lewisville"],
  openGraph: {
    title: "Jinbeh Punch | Jinbeh Lewisville",
    description: "House specialty tropical cocktail",
    url: "https://jinbeh.com/lewisville/cocktails/jinbeh-punch",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Cocktails Jinbeh Punch",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/cocktails/jinbeh-punch",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Jinbeh Punch",
  "description": "House specialty tropical cocktail",
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
      "name": "What is the Jinbeh Punch at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Jinbeh Punch at Jinbeh Lewisville is house specialty tropical cocktail. At, it's one of our signature bar offerings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Jinbeh Punch available during happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many of our cocktails including options like Jinbeh Punch are featured during happy hour at discounted prices. Visit Jinbeh Lewisville for current happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Jinbeh Punch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Punch pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Jinbeh Punch at the bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville has a full bar where you can enjoy Jinbeh Punch and watch our sushi chefs at work. No reservation needed for bar seating."
      }
    }
  ]
};

export default function JinbehPunchLewisvillePage() {
  const item = { ...getMenuItem("jinbeh-punch", "cocktails")!, jinbehStory: "All cocktails at Jinbeh are crafted at a bar featuring a stunning collection of hand-painted tequila bottles. Each bottle is individually painted by artisans from a Mexican village. It took about a year to collect enough empty bottles to line the shelf." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Cocktails", href: "/lewisville/cocktails" }, { label: "Jinbeh Punch" }]} />
      </div>
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <PageSeoBoost route="/lewisville/cocktails/jinbeh-punch" />
      <Footer />
    </>
  );
}
