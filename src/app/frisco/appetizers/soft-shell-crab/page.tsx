import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Soft Shell Crab Frisco | Crispy Whole Crab Appetizer | Jinbeh",
  description: "Crispy tempura soft shell crab at Jinbeh Frisco. 555 calories, 23.8g protein, edible shells, tender meat. Japanese specialty.",
  keywords: ["soft shell crab frisco","crispy soft shell crab appetizer","fried whole crab japanese","seafood appetizer frisco","japanese appetizers frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Soft Shell Crab Frisco | Crispy Edible Shell Crab",
    description: "Crispy tempura soft shell crab at Jinbeh Frisco. 555 calories, 23.8g protein.",
    url: "https://jinbeh.com/frisco/appetizers/soft-shell-crab",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Appetizers Soft Shell Crab",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/appetizers/soft-shell-crab",
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
      "name": "How many calories in Soft Shell Crab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft Shell Crab at Jinbeh contains approximately 555 calories per serving with 23.8 grams of protein, 39.7g fat, and 31.7g carbohydrates from the crispy batter."
      }
    },
    {
      "@type": "Question",
      "name": "What are the nutrition and health benefits of soft shell crab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft shell crab provides lean protein, vitamin B12, selenium, and minerals. The whole edible shell adds calcium. While tempura adds calories from frying, crab itself is nutritious."
      }
    },
    {
      "@type": "Question",
      "name": "What makes soft shell crab special?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft shell crabs are caught during molting when their entire shell is edible and tender. Our tempura preparation creates a crispy, golden exterior while keeping the meat succulent."
      }
    },
    {
      "@type": "Question",
      "name": "Is Soft Shell Crab good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! At $14.95, Soft Shell Crab is perfect for sharing and is one of our most requested appetizers. Pair with $4 draft beer or $5 sake during Happy Hour (Mon-Fri 5-6:30pm)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Soft Shell Crab for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! For best quality, pick up quickly to maintain crispness. Call (214) 619-1200 or order online for convenient takeout."
      }
    }
  ]
};


export default function SoftShellCrabFriscoPage() {
  const item = { ...getMenuItem("soft-shell-crab", "appetizers")!, jinbehStory: "A whole crab, about palm-sized, battered with our light tempura coating, deep fried until golden, and chopped into four or five pieces. Delicious and impressive — one of our most photogenic appetizers." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Appetizers", href: "/frisco/appetizers" }, { label: "Soft Shell Crab" }]} />
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
