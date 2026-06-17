import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Volcano Roll Lewisville | Baked Spicy Seafood Lava",
  description: "Volcano Roll at Jinbeh Lewisville: Crab, avocado base, baked spicy crab and shrimp topping. Dramatic lava presentation. Call (214) 488-2224.",
  keywords: ["volcano roll lewisville","volcano roll sushi","baked sushi roll","hot sushi roll","specialty sushi lewisville","sushi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Volcano Roll | Jinbeh Lewisville",
    description: "Spicy crab and avocado with baked seafood topping",
    url: "https://jinbeh.com/lewisville/sushi-rolls/volcano-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sushi Rolls Volcano Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/volcano-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Volcano Roll",
  "description": "Spicy crab and avocado with baked seafood topping",
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
      "name": "What is in Volcano Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Volcano Roll features a base of California roll (crab, avocado), topped with baked spicy crab and shrimp mixture mixed with cream cheese, sriracha, mayo, and yum yum sauce."
      }
    },
    {
      "@type": "Question",
      "name": "Why is it called Volcano Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The name comes from the dramatic presentation - the warm, spicy baked topping looks like lava flowing over the roll, creating a 'volcano eruption' effect."
      }
    },
    {
      "@type": "Question",
      "name": "Is Volcano Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Volcano Roll may contain gluten in soy sauce and some ingredients. Request gluten-free soy sauce and verify topping ingredients with your server."
      }
    },
    {
      "@type": "Question",
      "name": "How spicy is it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Volcano Roll has a medium to medium-hot spice level from the baked topping. The heat is balanced with creamy mayo, making it flavorful without being overwhelming."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Volcano Roll is available for takeout and delivery. For the best hot presentation, we recommend dining in at our sushi bar. Call (214) 488-2224."
      }
    }
  ]
};

export default function VolcanoRollLewisvillePage() {
  const item = { ...getMenuItem("volcano-roll", "sushi-rolls")!, jinbehStory: "Every roll at Jinbeh is hand-crafted using a bamboo makisu by our sushi team. Our head sushi chef, who hails from southern Japan, has been with us nearly 30 years and co-created every signature roll on our menu." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sushi Rolls", href: "/lewisville/sushi-rolls" }, { label: "Volcano Roll" }]} />
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
