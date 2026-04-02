import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Imperial Dinner Hibachi Lewisville | Surf Turf Premium Combo",
  description: "Ultimate trio: filet mignon, Maine lobster tail, jumbo shrimp. 600+ calories total protein combo. Premium special occasion dinners near Lewisville TX.",
  keywords: ["imperial dinner hibachi lewisville","hibachi dinner for two","filet mignon lobster shrimp teppanyaki","special occasion japanese steakhouse","engagement dinner hibachi lewisville","best hibachi near me lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Imperial Dinner | Jinbeh Lewisville",
    description: "Filet mignon, lobster tail, and shrimp",
    url: "https://jinbeh.com/lewisville/hibachi/imperial-dinner",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Hibachi Imperial Dinner",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/imperial-dinner",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Imperial Dinner",
  "description": "Filet mignon, lobster tail, and shrimp",
  "offers": {
    "@type": "Offer",
    "price": "64.95",
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
      "name": "What is Imperial Dinner hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Imperial Dinner at Jinbeh Lewisville is filet mignon, lobster tail, and shrimp. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $64.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Imperial Dinner prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Imperial Dinner on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Imperial Dinner hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Imperial Dinner hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Imperial Dinner hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Imperial Dinner is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Imperial Dinner hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 7–8 guests (larger groups accommodated by joining tables with advance notice) guests, perfect for sharing the Imperial Dinner experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function ImperialDinnerLewisvillePage() {
  const item = getMenuItem("imperial-dinner", "hibachi")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Hibachi", href: "/lewisville/hibachi" }, { label: "Imperial Dinner" }]} />
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
