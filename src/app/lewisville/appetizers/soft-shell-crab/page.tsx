import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Soft Shell Crab Lewisville | Crispy Whole Crab Appetizer",
  description: "Crispy tempura soft shell crab at Jinbeh Lewisville. 555 calories, 23.8g protein, edible shells, tender meat. Japanese specialty.",
  keywords: ["soft shell crab lewisville","crispy soft shell crab appetizer","fried whole crab japanese","seafood appetizer lewisville","japanese appetizers lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Soft Shell Crab | Jinbeh Lewisville",
    description: "Crispy fried soft shell crab",
    url: "https://jinbeh.com/lewisville/appetizers/soft-shell-crab",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Appetizers Soft Shell Crab",
      },
    ],
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
        "text": "Soft Shell Crab at Jinbeh Lewisville is crispy fried soft shell crab. At, it's perfect for sharing while you wait for your hibachi or sushi."
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
        "text": "Pair this with drinks from our Happy Hour (Mon-Fri 5:00-6:30 PM). Enjoy draft beer, sake, and wine alongside favorites like Soft Shell Crab. Call (972) 221-3888 for details."
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
  const item = { ...getMenuItem("soft-shell-crab", "appetizers")!, jinbehStory: "A whole crab, about palm-sized, battered with our light tempura coating, deep fried until golden, and chopped into four or five pieces. Delicious and impressive — one of our most photogenic appetizers." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Appetizers", href: "/lewisville/appetizers" }, { label: "Soft Shell Crab" }]} />
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
