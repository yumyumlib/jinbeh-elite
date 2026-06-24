import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Spicy Tuna Roll Frisco | Fresh Tuna Spicy Mayo",
  description: "Spicy Tuna Roll at Jinbeh Frisco: Fresh tuna, spicy mayo, 260-350 cal. Premium sushi near Legacy West. Made fresh to order. Call (214) 619-1200.",
  keywords: ["spicy tuna roll frisco","spicy tuna roll","spicy tuna sushi","ahi tuna roll","sushi rolls frisco","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "Spicy Tuna Roll | Jinbeh Frisco",
    description: "Fresh tuna with spicy mayo and scallions",
    url: "https://jinbeh.com/frisco/sushi-rolls/spicy-tuna-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sushi Rolls Spicy Tuna Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/spicy-tuna-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Spicy Tuna Roll",
  "description": "Fresh tuna with spicy mayo and scallions",
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
      "name": "How many calories in Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spicy Tuna Roll at Jinbeh contains approximately 260-350 calories per serving. The exact count varies based on portion size and the amount of spicy mayo used in the preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What is in Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Spicy Tuna Roll features fresh sushi-grade tuna mixed with spicy mayo, sriracha, scallions, cucumber, avocado, sushi rice, and nori. The perfect balance of heat and fresh fish flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Is Spicy Tuna Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spicy Tuna Roll may contain gluten in soy sauce and some seasonings. Please inform your server of dietary restrictions and our chefs can recommend gluten-free soy sauce options."
      }
    },
    {
      "@type": "Question",
      "name": "How spicy is Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Spicy Tuna Roll offers a medium heat level from sriracha and chili seasonings. If you prefer milder or extra spicy, our chefs can customize it to your taste preference."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with fresh tuna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We use sushi-grade tuna delivered daily. All rolls at Jinbeh Frisco are prepared fresh to order by experienced sushi chefs."
      }
    }
  ]
};

export default function SpicyTunaRollFriscoPage() {
  const item = { ...getMenuItem("spicy-tuna-roll", "sushi-rolls")!, jinbehStory: "Our spicy tuna roll features our house-made Blaster sauce, Jinbeh's spicy option that even non-spicy customers handle fine. For the truly bold, we keep a secret sriracha-togarashi paste that brings real heat." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Sushi Rolls", href: "/frisco/sushi-rolls" }, { label: "Spicy Tuna Roll" }]} />
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
      <PageSeoBoost route="/frisco/sushi-rolls/spicy-tuna-roll" />
      <Footer />
    </>
  );
}
