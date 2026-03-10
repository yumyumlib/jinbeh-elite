import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Jumbo Shrimp Hibachi Lewisville | Best Seafood Teppanyaki",
  description: "Jumbo shrimp seared tableside. 120-150 calories per serving, 22-25g protein. Low-carb, protein-rich seafood option. Includes soup, salad, rice, vegetables.",
  keywords: ["hibachi shrimp lewisville","jumbo shrimp teppanyaki","garlic butter shrimp hibachi","hibachi seafood dinner lewisville","best hibachi near me lewisville","japanese steakhouse lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Jumbo Shrimp | Jinbeh Lewisville",
    description: "Succulent jumbo shrimp, flame-kissed to perfection",
    url: "https://jinbeh.com/lewisville/hibachi/shrimp",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/shrimp",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Jumbo Shrimp",
  "description": "Succulent jumbo shrimp, flame-kissed to perfection",
  "offers": {
    "@type": "Offer",
    "price": "28.95",
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
      "name": "What is Jumbo Shrimp hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jumbo Shrimp at Jinbeh Lewisville is succulent jumbo shrimp, flame-kissed to perfection. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $28.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Jumbo Shrimp prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Jumbo Shrimp on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Jumbo Shrimp hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Jumbo Shrimp hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Jumbo Shrimp hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jumbo Shrimp is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Jumbo Shrimp hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Jumbo Shrimp experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function ShrimpLewisvillePage() {
  const item = getMenuItem("shrimp", "hibachi")!;
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
