import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Vegetable & Tofu Hibachi Lewisville | Vegan Teppanyaki Option",
  description: "Fresh seasonal vegetables with crispy tofu. 180-220 calories, high protein plant-based. Vegan-friendly hibachi. Includes soup, salad, rice, grilled vegetables.",
  keywords: ["vegetable tofu hibachi lewisville","vegan hibachi lewisville tx","plant-based teppanyaki restaurant lewisville","best hibachi near me lewisville","tofu protein nutrition","vegetarian japanese steakhouse lewisville","healthy hibachi options","best hibachi lewisville tx"],
  openGraph: {
    title: "Vegetable & Tofu | Jinbeh Lewisville",
    description: "Fresh seasonal vegetables with crispy tofu",
    url: "https://jinbeh.com/lewisville/hibachi/vegetable-tofu",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/vegetable-tofu",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Vegetable & Tofu",
  "description": "Fresh seasonal vegetables with crispy tofu",
  "offers": {
    "@type": "Offer",
    "price": "19.95",
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
      "name": "What is Vegetable & Tofu hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vegetable & Tofu at Jinbeh Lewisville is fresh seasonal vegetables with crispy tofu. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $19.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Vegetable & Tofu prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Vegetable & Tofu on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Vegetable & Tofu hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Vegetable & Tofu hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vegetable & Tofu hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Vegetable & Tofu is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Vegetable & Tofu hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Vegetable & Tofu experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function VegetableTofuLewisvillePage() {
  const item = getMenuItem("vegetable-tofu", "hibachi")!;
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
