import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Lychee Martini - Best Japanese Cocktails Lewisville",
  description: "Premium lychee martini with vodka & floral notes. Handcrafted Japanese cocktails at Jinbeh Lewisville. Happy hour specials. Reserve today (972) 221-3888.",
  keywords: ["lychee martini lewisville","lychee martini","lychee sake","asian inspired cocktail","japanese cocktails lewisville","date night cocktails lewisville","jinbeh lewisville"],
  openGraph: {
    title: "Lychee Martini | Jinbeh Lewisville",
    description: "Vodka with lychee and a floral finish",
    url: "https://jinbeh.com/lewisville/cocktails/lychee-martini",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Cocktails Lychee Martini",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/cocktails/lychee-martini",
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
      "name": "What is the Lychee Martini at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Lychee Martini at Jinbeh Lewisville is vodka with lychee and a floral finish. At $13.00, it's one of our signature bar offerings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Lychee Martini available during happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many of our cocktails including options like Lychee Martini are featured during happy hour at discounted prices. Visit Jinbeh Lewisville for current happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Lychee Martini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lychee Martini pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Lychee Martini at the bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville has a full bar where you can enjoy Lychee Martini and watch our sushi chefs at work. No reservation needed for bar seating."
      }
    }
  ]
};


export default function LycheeMartiniLewisvillePage() {
  const item = getMenuItem("lychee-martini", "cocktails")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Cocktails", href: "/lewisville/cocktails" }, { label: "Lychee Martini" }]} />
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
