import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Gyoza Lewisville | Pan-Fried Pork Dumplings Appetizer",
  description: "Pan-fried pork gyoza dumplings at Jinbeh Lewisville. 230 calories, 10g protein, crispy exterior, tender filling. Classic Japanese appetizer.",
  keywords: ["gyoza dumplings lewisville","gyoza sushi","pan fried dumplings japanese","pork gyoza restaurant","japanese appetizers lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Gyoza | Jinbeh Lewisville",
    description: "Pan-fried pork dumplings with dipping sauce",
    url: "https://jinbeh.com/lewisville/appetizers/gyoza",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Appetizers Gyoza",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/gyoza",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Gyoza",
  "description": "Pan-fried pork dumplings with dipping sauce",
  "offers": {
    "@type": "Offer",
    "price": "8.95",
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
      "name": "What is Gyoza at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gyoza at Jinbeh Lewisville is pan-fried pork dumplings with dipping sauce. At $8.95, it's perfect for sharing while you wait for your hibachi or sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Gyoza good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Gyoza is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Gyoza for happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check our happy hour specials! Many appetizers including items similar to Gyoza are featured during our happy hour. Call (972) 221-3888 for current specials."
      }
    },
    {
      "@type": "Question",
      "name": "Is Gyoza available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Gyoza travels well for takeout. Call (972) 221-3888 directly or order online."
      }
    }
  ]
};


export default function GyozaLewisvillePage() {
  const item = { ...getMenuItem("gyoza", "appetizers")!, jinbehStory: "Our haramaki (spring rolls) are made entirely in-house, which is time-consuming. The kitchen makes the filling and rolls them up weekly by hand. People who try one always order again." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Appetizers", href: "/lewisville/appetizers" }, { label: "Gyoza" }]} />
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
