import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Caterpillar Roll Lewisville | Eel Avocado Sushi",
  description: "Caterpillar Roll at Jinbeh Lewisville: Grilled eel, cucumber, avocado topping, sesame. Premium sushi near I-35E. Call (972) 221-3888.",
  keywords: ["caterpillar roll lewisville","caterpillar roll sushi","eel sushi roll","avocado eel roll","specialty sushi roll","sushi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Caterpillar Roll | Jinbeh Lewisville",
    description: "Eel roll topped with avocado slices",
    url: "https://jinbeh.com/lewisville/sushi-rolls/caterpillar-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sushi Rolls Caterpillar Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/caterpillar-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Caterpillar Roll",
  "description": "Eel roll topped with avocado slices",
  "offers": {
    "@type": "Offer",
    "price": "15.95",
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
      "name": "What is in Caterpillar Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caterpillar Roll features unagi kabayaki (grilled eel) and cucumber inside, topped with overlapping avocado slices arranged like a caterpillar. Sesame seeds and eel sauce complete the presentation."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with real eel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Caterpillar Roll uses premium unagi kabayaki (grilled eel) freshly prepared. The eel is glazed with a savory-sweet sauce before being rolled with cucumber."
      }
    },
    {
      "@type": "Question",
      "name": "Is Caterpillar Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caterpillar Roll may contain gluten in the eel sauce and soy sauce. Request tamari or gluten-free soy sauce, and ask about eel sauce ingredients for a gluten-free version."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories in Caterpillar Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caterpillar Roll calories vary based on portion size, typically ranging from 400-700 calories depending on avocado amount and preparation style."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Caterpillar Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Caterpillar Roll is available for takeout and delivery. For the best presentation and taste, we recommend dining in at our sushi bar. Call (972) 221-3888 to order."
      }
    }
  ]
};


export default function CaterpillarRollLewisvillePage() {
  const item = { ...getMenuItem("caterpillar-roll", "sushi-rolls")!, jinbehStory: "Our sushi team\'s artistry shines in presentation rolls like the caterpillar. Led by a master chef from southern Japan\'s seafood coast, every roll is shaped using a traditional bamboo makisu — the same way it\'s been done for centuries." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sushi Rolls", href: "/lewisville/sushi-rolls" }, { label: "Caterpillar Roll" }]} />
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
