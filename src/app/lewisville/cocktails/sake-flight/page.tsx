import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Premium Sake Flight Lewisville - Japanese Tasting",
  description: "Three premium sake tasting flight at Jinbeh Lewisville. Experience authentic Japanese sakes with expert guidance. Best sake selection near Vista Ridge (972) 221-3888.",
  keywords: ["sake flight lewisville","sake tasting","premium sake","junmai sake","sake menu","japanese cocktails lewisville","jinbeh lewisville"],
  openGraph: {
    title: "Sake Flight | Jinbeh Lewisville",
    description: "Tasting of three premium sakes",
    url: "https://jinbeh.com/lewisville/cocktails/sake-flight",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Cocktails Sake Flight",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/cocktails/sake-flight",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sake Flight",
  "description": "Tasting of three premium sakes",
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
      "name": "What is the Sake Flight at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sake Flight at Jinbeh Lewisville is a tasting of three premium sakes. It's one of our signature bar offerings. Check our beverage menu for current pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sake Flight available during happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many of our cocktails including options like Sake Flight are featured during happy hour at discounted prices. Visit Jinbeh Lewisville for current happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Sake Flight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sake Flight pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Sake Flight at the bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville has a full bar where you can enjoy Sake Flight and watch our sushi chefs at work. No reservation needed for bar seating."
      }
    }
  ]
};


export default function SakeFlightLewisvillePage() {
  const item = getMenuItem("sake-flight", "cocktails")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Cocktails", href: "/lewisville/cocktails" }, { label: "Sake Flight" }]} />
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
