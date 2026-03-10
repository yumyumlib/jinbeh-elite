import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Lobster Tail Hibachi Lewisville | Luxury Maine Lobster Teppanyaki",
  description: "Sweet Maine lobster tail cooked tableside butter. 180-220 calories per 5oz, 25-30g protein. Premium special occasion hibachi. Includes soup, salad, rice, vegetables.",
  keywords: ["hibachi lobster tail lewisville","lobster teppanyaki dinner","butter grilled lobster japanese restaurant","special occasion hibachi dinner","best hibachi near me lewisville","japanese steakhouse lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Lobster Tail | Jinbeh Lewisville",
    description: "Sweet Maine lobster tail, butter-grilled",
    url: "https://jinbeh.com/lewisville/hibachi/lobster-tail",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/lobster-tail",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Lobster Tail",
  "description": "Sweet Maine lobster tail, butter-grilled",
  "offers": {
    "@type": "Offer",
    "price": "44.95",
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
      "name": "What is Lobster Tail hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lobster Tail at Jinbeh Lewisville is sweet maine lobster tail, butter-grilled. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $44.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Lobster Tail prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Lobster Tail on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Lobster Tail hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Lobster Tail hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Lobster Tail hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Lobster Tail is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Lobster Tail hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Lobster Tail experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function LobsterTailLewisvillePage() {
  const item = getMenuItem("lobster-tail", "hibachi")!;
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
