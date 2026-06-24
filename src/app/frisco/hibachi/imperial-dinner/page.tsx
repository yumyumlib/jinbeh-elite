import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Imperial Dinner Hibachi Frisco | Surf Turf Premium Combo",
  description: "Ultimate trio: filet mignon, Maine lobster tail, jumbo shrimp. 600+ calories total protein combo. Premium special occasion dinners near Frisco TX.",
  keywords: ["imperial dinner hibachi frisco","hibachi dinner for two","filet mignon lobster shrimp teppanyaki","special occasion japanese steakhouse","engagement dinner hibachi frisco","best hibachi near me frisco","hibachi near me frisco"],
  openGraph: {
    title: "Imperial Dinner | Jinbeh Frisco",
    description: "Filet mignon, lobster tail, and shrimp",
    url: "https://jinbeh.com/frisco/hibachi/imperial-dinner",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Imperial Dinner",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/imperial-dinner",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Imperial Dinner",
  "description": "Filet mignon, lobster tail, and shrimp",
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
      "name": "What's in Imperial Dinner and total protein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Imperial Dinner features filet mignon (5oz), Maine lobster tail (5oz), and jumbo shrimp (3oz) for an ultimate protein trio. Total approximately 75-85g protein with 900-1000 calories complete dinner. Perfect for protein-focused diets."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Imperial Dinner at ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At, Imperial Dinner combines three premium proteins: filet mignon, lobster tail, and jumbo shrimp. The value bundle saves versus ordering separately, offering ultimate hibachi variety experience."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Imperial Dinner special for occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Imperial Dinner offers the ultimate hibachi theater with three proteins cooked tableside simultaneously. Filet mignon, sweet lobster, and succulent shrimp provide variety and luxury. Unforgettable for anniversaries, proposals, and milestone celebrations."
      }
    },
    {
      "@type": "Question",
      "name": "Is Imperial Dinner healthy and high-protein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Imperial Dinner provides 75-85g protein from three lean protein sources. Filet (25-30g), lobster (25-30g), and shrimp (22-25g). Balance macronutrient ratio with included vegetables for optimal nutrition."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize portions or proteins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us for modifications. Most diners appreciate the three-protein variety. You can request different cuts (NY Strip, Ribeye) or additional vegetables. Our chefs accommodate special requests for dietary needs."
      }
    }
  ]
};

export default function ImperialDinnerFriscoPage() {
  const item = getMenuItem("imperial-dinner", "hibachi")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Imperial Dinner" }]} />
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
      <PageSeoBoost route="/frisco/hibachi/imperial-dinner" />
      <Footer />
    </>
  );
}
