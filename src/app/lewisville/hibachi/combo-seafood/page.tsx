import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Seafood Trio Hibachi Lewisville | Premium Mixed Seafood",
  description: "Jumbo shrimp, sea scallops, Maine lobster tail. 380-420 calories, 60-65g protein. Healthiest hibachi combo option. Includes soup, salad, rice, grilled vegetables.",
  keywords: ["seafood trio hibachi lewisville","mixed seafood teppanyaki lewisville tx","best hibachi near me lewisville","healthy seafood combo lewisville","shrimp scallops lobster combo","premium seafood hibachi","japanese steakhouse lewisville","best hibachi lewisville tx"],
  openGraph: {
    title: "Seafood Trio | Jinbeh Lewisville",
    description: "Shrimp, scallops, and lobster",
    url: "https://jinbeh.com/lewisville/hibachi/combo-seafood",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/combo-seafood",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Seafood Trio",
  "description": "Shrimp, scallops, and lobster",
  "offers": {
    "@type": "Offer",
    "price": "52.95",
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
      "name": "What is Seafood Trio hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seafood Trio at Jinbeh Lewisville is shrimp, scallops, and lobster. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $52.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Seafood Trio prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Seafood Trio on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Seafood Trio hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Seafood Trio hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Seafood Trio hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Seafood Trio is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Seafood Trio hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Seafood Trio experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function ComboSeafoodLewisvillePage() {
  const item = getMenuItem("combo-seafood", "hibachi")!;
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
