import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Yellowtail Jalapeño Sushi Lewisville | Hamachi Roll",
  description: "Yellowtail Jalapeño at Jinbeh Lewisville: Fresh hamachi, jalapeño, ponzu sauce, scallions. Premium raw fish. Call (972) 221-3888.",
  keywords: ["yellowtail jalapeno roll lewisville","hamachi sushi","yellowtail sushi roll","hamachi jalapeno roll","fresh fish sushi lewisville","sushi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Yellowtail Jalapeño Roll | Jinbeh Lewisville",
    description: "Fresh yellowtail with jalapeño and ponzu",
    url: "https://jinbeh.com/lewisville/sushi-rolls/yellowtail-jalapeno",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sushi Rolls Yellowtail Jalapeno",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/yellowtail-jalapeno",
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
        "text": "Yes! Yellowtail Jalapeño Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (972) 221-3888."
      }
    }
  ]
};


export default function YellowtailJalapenoLewisvillePage() {
  const item = getMenuItem("yellowtail-jalapeno", "sushi-rolls")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
