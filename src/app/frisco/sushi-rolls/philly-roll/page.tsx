import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Philadelphia Roll Frisco | Salmon Cream Cheese",
  description: "Philadelphia Roll at Jinbeh Frisco: 273 cal, smoked salmon, cream cheese, cucumber. Premium sushi near Legacy West. Call (214) 619-1200.",
  keywords: ["philadelphia roll frisco","philly roll sushi","smoked salmon cream cheese roll","salmon sushi roll","sushi rolls frisco","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "Philadelphia Roll | Jinbeh Frisco",
    description: "Smoked salmon with cream cheese and cucumber",
    url: "https://jinbeh.com/frisco/sushi-rolls/philly-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sushi Rolls Philly Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/philly-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Philadelphia Roll",
  "description": "Smoked salmon with cream cheese and cucumber",
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
      "name": "How many calories in Philadelphia Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Philadelphia Roll at Jinbeh contains approximately 273 calories per serving. It features smoked salmon, cream cheese, and cucumber with sushi rice and nori."
      }
    },
    {
      "@type": "Question",
      "name": "What is in Philadelphia Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Philadelphia Roll includes smoked salmon, cream cheese, fresh cucumber, sushi rice, and seaweed (nori). Some variations include avocado or scallions for added texture."
      }
    },
    {
      "@type": "Question",
      "name": "Is Philadelphia Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Philadelphia Roll is mostly gluten-free, but soy sauce and some seasonings may contain gluten. Request gluten-free soy sauce to make it fully gluten-free."
      }
    },
    {
      "@type": "Question",
      "name": "Is Philadelphia Roll made fresh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All sushi at Jinbeh Frisco is made to order using fresh smoked salmon. Our skilled sushi chefs prepare each roll with precision and care."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Philadelphia Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Philadelphia Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 619-1200 to order."
      }
    }
  ]
};

export default function PhillyRollFriscoPage() {
  const item = getMenuItem("philly-roll", "sushi-rolls")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Sushi Rolls", href: "/frisco/sushi-rolls" }, { label: "Philly Roll" }]} />
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
      <Footer />
    </>
  );
}
