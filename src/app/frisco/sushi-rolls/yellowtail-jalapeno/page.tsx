import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Yellowtail Jalapeño Sushi Frisco | Hamachi Roll",
  description: "Yellowtail Jalapeño at Jinbeh Frisco: Fresh hamachi, jalapeño, ponzu sauce, scallions. Premium raw fish. Call (214) 619-1200.",
  keywords: ["yellowtail jalapeno roll frisco","hamachi sushi","yellowtail sushi roll","hamachi jalapeno roll","fresh fish sushi frisco","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "Yellowtail Jalapeño Roll | Jinbeh Frisco",
    description: "Fresh yellowtail with jalapeño and ponzu",
    url: "https://jinbeh.com/frisco/sushi-rolls/yellowtail-jalapeno",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/yellowtail-jalapeno",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Yellowtail Jalapeño Roll",
  "description": "Fresh yellowtail with jalapeño and ponzu",
  "offers": {
    "@type": "Offer",
    "price": "16.95",
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
      "name": "What is in Yellowtail Jalapeño Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yellowtail Jalapeño features fresh sushi-grade yellowtail (hamachi), thin-sliced fresh jalapeño, scallions, sushi rice, and nori, finished with ponzu sauce."
      }
    },
    {
      "@type": "Question",
      "name": "Is it raw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this is a raw fish roll featuring fresh sushi-grade yellowtail. The fresh jalapeño adds a spicy kick that complements the mild, buttery yellowtail perfectly."
      }
    },
    {
      "@type": "Question",
      "name": "What is yellowtail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yellowtail, also called hamachi, is a premium Japanese fish with a mild, buttery flavor and delicate texture. It's highly prized in sushi and pairs beautifully with ponzu."
      }
    },
    {
      "@type": "Question",
      "name": "Is it gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yellowtail Jalapeño is mostly gluten-free, but ponzu sauce may contain gluten. Request tamari or gluten-free ponzu sauce for a gluten-free option."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Yellowtail Jalapeño Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 619-1200."
      }
    }
  ]
};


export default function YellowtailJalapenoFriscoPage() {
  const item = getMenuItem("yellowtail-jalapeno", "sushi-rolls")!;
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
