import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Shrimp Tempura Lewisville | Crispy Fried Shrimp Appetizer",
  description: "Crispy tempura battered shrimp at Jinbeh Lewisville. 200-300 calories, 12-15g protein, light, airy batter. Japanese classic appetizer.",
  keywords: ["shrimp tempura lewisville","shrimp tempura near me","tempura appetizer","crispy shrimp japanese restaurant","japanese appetizers lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Shrimp Tempura | Jinbeh Lewisville",
    description: "Light and crispy fried shrimp",
    url: "https://jinbeh.com/lewisville/appetizers/tempura",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Appetizers Tempura",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/tempura",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Shrimp Tempura",
  "description": "Light and crispy fried shrimp",
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
      "name": "What is Shrimp Tempura at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp Tempura at Jinbeh Lewisville is light and crispy fried shrimp. At, it's perfect for sharing while you wait for your hibachi or sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shrimp Tempura good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Shrimp Tempura is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Shrimp Tempura for happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pair this with drinks from our Happy Hour (Mon-Fri 5:00-6:30 PM). Enjoy draft beer, sake, and wine alongside favorites like Shrimp Tempura. Call (972) 221-3888 for details."
      }
    },
    {
      "@type": "Question",
      "name": "Is Shrimp Tempura available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Shrimp Tempura travels well for takeout. Call (972) 221-3888 directly or order online."
      }
    }
  ]
};

export default function TempuraLewisvillePage() {
  const item = { ...getMenuItem("tempura", "appetizers")!, jinbehStory: "At Jinbeh, we distinguish between tempura and agedashi: tempura uses a thicker batter for a satisfying crunch, while agedashi uses a lighter coating. Our vegetable tempura comes with warm tempura sauce, a light, delicate broth that lets each vegetable shine." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Appetizers", href: "/lewisville/appetizers" }, { label: "Tempura" }]} />
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
