import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Vegas Roll Frisco | Deep Fried Salmon Jalapeño",
  description: "Vegas Roll at Jinbeh Frisco: Salmon, jalapeño, cream cheese, deep-fried, spicy mayo. Crispy fusion sushi. Call (214) 619-1200.",
  keywords: ["vegas roll frisco","vegas roll sushi","deep fried sushi roll","crispy sushi roll","fusion sushi roll","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "Vegas Roll | Jinbeh Frisco",
    description: "Deep-fried roll with spicy crab and cream cheese",
    url: "https://jinbeh.com/frisco/sushi-rolls/vegas-roll",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sushi Rolls Vegas Roll",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/vegas-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Vegas Roll",
  "description": "Deep-fried roll with spicy crab and cream cheese",
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
      "name": "What is in Vegas Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vegas Roll features salmon, jalapeño, cream cheese, and avocado inside, then the entire roll is deep-fried in Japanese-style tempura batter. Topped with spicy mayo and eel sauce."
      }
    },
    {
      "@type": "Question",
      "name": "Why is it deep-fried?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The deep-frying creates a crispy, golden exterior while keeping the interior fresh. This contrast of hot, crispy outside and cool, creamy inside makes Vegas Roll unique."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vegas Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vegas Roll contains gluten in the tempura batter and soy sauce. Request alternative batters and gluten-free soy sauce with your server."
      }
    },
    {
      "@type": "Question",
      "name": "How spicy is it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vegas Roll has a mild to medium spice from the jalapeño and sriracha mayo. We can adjust the heat level to your preference."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Vegas Roll is available for takeout and delivery. For the crispiest experience, we recommend dining in fresh at our sushi bar. Call (214) 619-1200."
      }
    }
  ]
};


export default function VegasRollFriscoPage() {
  const item = getMenuItem("vegas-roll", "sushi-rolls")!;
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
