import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Sake Bomb Lewisville - Classic Japanese Beer Cocktail",
  description: "Traditional sake bomb with cold Japanese beer at Jinbeh Lewisville. Best happy hour cocktails. Reserve at our Japanese restaurant (972) 221-3888.",
  keywords: ["sake bomb lewisville","sake bomb","japanese beer cocktail","group drinking ritual japanese","japanese cocktails lewisville","happy hour lewisville","jinbeh lewisville"],
  openGraph: {
    title: "Sake Bomb | Jinbeh Lewisville",
    description: "Classic sake dropped into cold beer",
    url: "https://jinbeh.com/lewisville/cocktails/sake-bomb",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Cocktails Sake Bomb",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/cocktails/sake-bomb",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sake Bomb",
  "description": "Classic sake dropped into cold beer",
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
      "name": "What is the Sake Bomb at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sake Bomb at Jinbeh Lewisville is classic sake dropped into cold beer. At, it's one of our signature bar offerings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sake Bomb available during happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many of our cocktails including options like Sake Bomb are featured during happy hour at discounted prices. Visit Jinbeh Lewisville for current happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Sake Bomb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sake Bomb pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Sake Bomb at the bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville has a full bar where you can enjoy Sake Bomb and watch our sushi chefs at work. No reservation needed for bar seating."
      }
    }
  ]
};

export default function SakeBombLewisvillePage() {
  const item = { ...getMenuItem("sake-bomb", "cocktails")!, jinbehStory: "Sake tradition at Jinbeh goes back decades. Our premium unfiltered sake bottle must be shaken before pouring, the white cloud inside is rice sediment from the authentic unfiltered process." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Cocktails", href: "/lewisville/cocktails" }, { label: "Sake Bomb" }]} />
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
