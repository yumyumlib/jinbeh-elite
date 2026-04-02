import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Filet Mignon Hibachi | Best Teppanyaki Steak Lewisville TX",
  description: "Premium filet mignon seared on our teppan grill. 200 cal, 25g protein. Hibachi dinner includes soup, salad, fried rice. Reserve at Jinbeh Lewisville.",
  keywords: ["filet mignon hibachi lewisville","hibachi steak dinner","teppanyaki filet mignon","beef tenderloin hibachi","hibachi birthday dinner lewisville","best hibachi near me lewisville","japanese steakhouse lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Filet Mignon | Jinbeh Lewisville",
    description: "Premium beef tenderloin, perfectly seared on the teppan grill",
    url: "https://jinbeh.com/lewisville/hibachi/filet-mignon",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Hibachi Filet Mignon",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/filet-mignon",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Filet Mignon",
  "description": "Premium beef tenderloin, perfectly seared on the teppan grill",
  "offers": {
    "@type": "Offer",
    "price": "34.95",
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
        "text": "Your Filet Mignon hibachi dinner ($34.95) includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces including yum yum sauce and mustard sauce."
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
      "name": "Can I make a reservation for hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Reservations are highly recommended, especially for weekends and special occasions. Our hibachi tables seat 8-10 guests. Reserve online or call (972) 221-3888. We're located near Vista Ridge Mall in Lewisville, TX."
      }
    }
  ]
};


export default function FiletMignonLewisvillePage() {
  const item = { ...getMenuItem("filet-mignon", "hibachi")!, jinbehStory: "At the hibachi, our grills reach approximately 550°F — temperatures so high that cross-contamination from allergens is extremely difficult. Our chefs are also trained to handle allergy situations with extra care." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Hibachi", href: "/lewisville/hibachi" }, { label: "Filet Mignon" }]} />
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
