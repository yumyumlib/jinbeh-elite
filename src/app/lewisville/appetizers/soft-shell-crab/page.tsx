import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Soft Shell Crab Lewisville | Crispy Whole Crab Appetizer",
  description: "Crispy tempura soft shell crab at Jinbeh Lewisville. 555 calories, 23.8g protein, edible shells, tender meat. Japanese specialty.",
  keywords: ["japanese appetizers lewisville","soft shell crab lewisville","best sushi lewisville tx","crispy crab","seafood appetizer lewisville","tempura crab","japanese specialty"],
  openGraph: {
    title: "Soft Shell Crab | Jinbeh Lewisville",
    description: "Crispy fried soft shell crab",
    url: "https://jinbeh.com/lewisville/appetizers/soft-shell-crab",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/soft-shell-crab",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Soft Shell Crab",
  "description": "Crispy fried soft shell crab",
  "offers": {
    "@type": "Offer",
    "price": "14.95",
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
      "name": "What is Soft Shell Crab at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft Shell Crab at Jinbeh Lewisville is crispy fried soft shell crab. At $14.95, it's perfect for sharing while you wait for your hibachi or sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Soft Shell Crab good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Soft Shell Crab is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Soft Shell Crab for happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check our happy hour specials! Many appetizers including items similar to Soft Shell Crab are featured during our happy hour. Call (972) 221-3888 for current specials."
      }
    },
    {
      "@type": "Question",
      "name": "Is Soft Shell Crab available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Soft Shell Crab travels well for takeout. Call (972) 221-3888 directly or order online."
      }
    }
  ]
};


export default function SoftShellCrabLewisvillePage() {
  const item = getMenuItem("soft-shell-crab", "appetizers")!;
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
