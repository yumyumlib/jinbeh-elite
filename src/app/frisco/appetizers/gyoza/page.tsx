import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Gyoza Frisco | Pan-Fried Pork Dumplings Appetizer | Jinbeh",
  description: "Pan-fried pork gyoza dumplings at Jinbeh Frisco. 230 calories, 10g protein, crispy exterior, tender filling. Classic Japanese appetizer.",
  keywords: ["gyoza dumplings frisco","gyoza sushi","pan fried dumplings japanese","pork gyoza restaurant","japanese appetizers frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Gyoza Frisco | Crispy Pan-Fried Pork Dumplings",
    description: "Pan-fried pork gyoza dumplings at Jinbeh Frisco. 230 calories, 10g protein.",
    url: "https://jinbeh.com/frisco/appetizers/gyoza",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Appetizers Gyoza",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/appetizers/gyoza",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Gyoza",
  "description": "Pan-fried pork dumplings with dipping sauce",
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
      "name": "How many calories are in Gyoza dumplings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pan-fried Gyoza at Jinbeh contains approximately 230 calories per 6-piece serving with 10 grams of protein, depending on preparation method."
      }
    },
    {
      "@type": "Question",
      "name": "What are the ingredients in Gyoza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Gyoza features seasoned pork filling, delicate dumpling wrappers, and is pan-fried until golden. Served with tangy dipping sauce for authentic Japanese flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Are Gyoza steamed or pan-fried?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Gyoza are pan-fried to create a crispy, golden exterior while keeping the filling tender and juicy. Steamed versions available upon request."
      }
    },
    {
      "@type": "Question",
      "name": "Is Gyoza good for sharing and happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Gyoza at is perfect for sharing and a great starter for groups. Pair with draft beer or sake during Happy Hour (Mon-Fri 5-6:30pm). Call (214) 619-1200 for specials."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Gyoza for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Gyoza travels well for takeout and maintains its quality. Call (214) 619-1200 or order online for quick, easy pickup."
      }
    }
  ]
};

export default function GyozaFriscoPage() {
  const item = { ...getMenuItem("gyoza", "appetizers")!, jinbehStory: "Our haramaki (spring rolls) are made entirely in-house, which is time-consuming. The kitchen makes the filling and rolls them up weekly by hand. People who try one always order again." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Appetizers", href: "/frisco/appetizers" }, { label: "Gyoza" }]} />
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
