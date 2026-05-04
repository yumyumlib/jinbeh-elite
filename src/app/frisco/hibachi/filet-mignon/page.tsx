import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Filet Mignon Hibachi | Best Teppanyaki Steak Frisco TX",
  description: "Premium filet mignon seared on our teppan grill. 200 cal, 25g protein. Hibachi dinner includes soup, salad, fried rice. Reserve at Jinbeh Frisco.",
  keywords: ["filet mignon hibachi frisco","hibachi steak dinner","teppanyaki filet mignon","beef tenderloin hibachi","hibachi birthday dinner frisco","best hibachi near me frisco","japanese steakhouse frisco","hibachi near me frisco"],
  openGraph: {
    title: "Filet Mignon | Jinbeh Frisco",
    description: "Premium beef tenderloin, perfectly seared on the teppan grill",
    url: "https://jinbeh.com/frisco/hibachi/filet-mignon",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Filet Mignon",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/filet-mignon",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Filet Mignon",
  "description": "Premium beef tenderloin, perfectly seared on the teppan grill",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "200-300 calories",
    "proteinContent": "25-30g",
    "fatContent": "10-15g"
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
      "name": "How many calories are in hibachi filet mignon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical hibachi filet mignon serving (4-6 oz) contains approximately 200-300 calories, with 25-30g of protein and 10-15g of fat. At Jinbeh, our filet mignon is prepared with minimal oil for a healthier option. The complete dinner with soup, salad, fried rice, and vegetables totals around 650-800 calories."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between hibachi and teppanyaki?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi refers to the style of grilling, while teppanyaki describes cooking on a flat iron griddle. At Jinbeh, we use authentic teppanyaki grills where our chefs perform tableside with knife tricks, the onion volcano, and flame shows. Both terms are often used interchangeably in American Japanese steakhouses."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with hibachi filet mignon dinner at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Filet Mignon hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces including yum yum sauce and mustard sauce."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi filet mignon healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi filet mignon can be a healthy choice! It's high in protein (25-30g per serving), rich in iron and B vitamins, and lower in fat than other steak cuts. Request minimal butter and sauce on the side to reduce sodium and calories. The grilled vegetables add fiber and nutrients."
      }
    },
    {
      "@type": "Question",
      "name": "What cut of beef is hibachi steak at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh offers premium cuts including Filet Mignon (tenderloin - our most tender cut), NY Strip (balanced marbling and flavor), and Ribeye (rich marbling for maximum flavor). All are USDA Choice grade or higher, hand-selected for quality."
      }
    },
    {
      "@type": "Question",
      "name": "Can I make a reservation for hibachi at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Reservations are highly recommended, especially for weekends and special occasions. Our hibachi tables seat 7–8 guests (larger groups accommodated by joining tables with advance notice) guests. Reserve online or call (214) 619-1200. We're located near Stonebriar Centre in Frisco, TX."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Frisco", "item": "https://jinbeh.com/frisco" },
    { "@type": "ListItem", "position": 3, "name": "Menu", "item": "https://jinbeh.com/frisco/menu" },
    { "@type": "ListItem", "position": 4, "name": "Hibachi", "item": "https://jinbeh.com/frisco/hibachi" },
    { "@type": "ListItem", "position": 5, "name": "Filet Mignon" },
  ],
};

export default function FiletMignonFriscoPage() {
  const item = { ...getMenuItem("filet-mignon", "hibachi")!, jinbehStory: "At the hibachi, our grills reach approximately 550°F — temperatures so high that cross-contamination from allergens is extremely difficult. Our chefs are also trained to handle allergy situations with extra care." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Filet Mignon" }]} />
      </div>
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
