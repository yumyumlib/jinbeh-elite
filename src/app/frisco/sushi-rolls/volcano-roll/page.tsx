import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Volcano Roll Frisco | Baked Spicy Seafood Lava",
  description: "Volcano Roll at Jinbeh Frisco: Crab, avocado base, baked spicy crab and shrimp topping. Dramatic lava presentation. Call (214) 619-1200.",
  keywords: ["volcano roll","volcano roll frisco","sushi near me frisco","best sushi frisco tx","baked sushi roll","specialty sushi"],
  openGraph: {
    title: "Volcano Roll | Jinbeh Frisco",
    description: "Spicy crab and avocado with baked seafood topping",
    url: "https://jinbeh.com/frisco/sushi-rolls/volcano-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/volcano-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Volcano Roll",
  "description": "Spicy crab and avocado with baked seafood topping",
  "offers": {
    "@type": "Offer",
    "price": "16.95",
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
        "text": "Yes! Volcano Roll is available for takeout and delivery. For the best hot presentation, we recommend dining in at our sushi bar. Call (214) 619-1200."
      }
    }
  ]
};


export default function VolcanoRollFriscoPage() {
  const item = getMenuItem("volcano-roll", "sushi-rolls")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
