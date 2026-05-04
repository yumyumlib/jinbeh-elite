import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Rainbow Roll Lewisville | Assorted Sashimi Topping",
  description: "Rainbow Roll at Jinbeh Lewisville: California roll with salmon, tuna, yellowtail. Premium sushi near I-35E. Call (972) 221-3888.",
  keywords: ["rainbow roll lewisville","rainbow roll sushi","assorted sashimi roll","colorful sushi roll","sushi rolls lewisville","sushi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Rainbow Roll | Jinbeh Lewisville",
    description: "California roll topped with assorted sashimi",
    url: "https://jinbeh.com/lewisville/sushi-rolls/rainbow-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sushi Rolls Rainbow Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/rainbow-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Rainbow Roll",
  "description": "California roll topped with assorted sashimi",
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
      "name": "What is in Rainbow Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rainbow Roll features a California roll base with imitation crab and avocado, topped with assorted fresh sashimi: salmon, tuna, yellowtail, and white fish arranged in a beautiful rainbow pattern."
      }
    },
    {
      "@type": "Question",
      "name": "What sashimi is on top?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The toppings include fresh salmon, tuna, yellowtail, and white fish (shiromi). Some variations include avocado slices and tobiko or masago (fish roe) for color and texture."
      }
    },
    {
      "@type": "Question",
      "name": "Is Rainbow Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rainbow Roll is mostly gluten-free, but soy sauce and some seasonings may contain gluten. Request gluten-free soy sauce to make it fully gluten-free."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with fresh fish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We use premium sushi-grade fish delivered daily. All Rainbow Rolls are prepared fresh to order by our experienced sushi chefs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Rainbow Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Rainbow Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (972) 221-3888 to order."
      }
    }
  ]
};

export default function RainbowRollLewisvillePage() {
  const item = { ...getMenuItem("rainbow-roll", "sushi-rolls")!, jinbehStory: "This colorful creation highlights the range of fresh fish we source daily. Our sushi master selects the finest cuts of salmon, tuna, and yellowtail to drape over each roll — a testament to nearly three decades of supplier relationships." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sushi Rolls", href: "/lewisville/sushi-rolls" }, { label: "Rainbow Roll" }]} />
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
