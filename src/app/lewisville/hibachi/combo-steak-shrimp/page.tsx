import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Steak & Shrimp Combo Hibachi Lewisville | Meat Seafood Mix",
  description: "Filet mignon with jumbo shrimp. 400-450 calories, 50-55g protein. Surf and turf lighter combo. Includes soup, salad, rice, grilled vegetables. Jinbeh Lewisville.",
  keywords: ["steak and shrimp hibachi lewisville","surf and turf teppanyaki","hibachi combo dinner lewisville","steak shrimp combo japanese restaurant","best hibachi near me lewisville","date night hibachi lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Steak & Shrimp Combo | Jinbeh Lewisville",
    description: "Filet mignon paired with jumbo shrimp",
    url: "https://jinbeh.com/lewisville/hibachi/combo-steak-shrimp",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Hibachi Combo Steak Shrimp",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/combo-steak-shrimp",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Steak & Shrimp Combo",
  "description": "Filet mignon paired with jumbo shrimp",
  "offers": {
    "@type": "Offer",
    "price": "38.95",
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
      "name": "What is Steak & Shrimp Combo hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steak & Shrimp Combo at Jinbeh Lewisville is filet mignon paired with jumbo shrimp. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $38.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Steak & Shrimp Combo prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Steak & Shrimp Combo on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Steak & Shrimp Combo hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Steak & Shrimp Combo hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Steak & Shrimp Combo hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Steak & Shrimp Combo is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Steak & Shrimp Combo hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Steak & Shrimp Combo experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function ComboSteakShrimpLewisvillePage() {
  const item = getMenuItem("combo-steak-shrimp", "hibachi")!;
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
