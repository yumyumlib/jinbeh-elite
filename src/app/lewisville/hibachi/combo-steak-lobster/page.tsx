import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Steak & Lobster Combo Hibachi Lewisville | Luxury Surf Turf",
  description: "Premium filet mignon and Maine lobster tail. 430-480 calories, 55-60g protein. Luxury special occasion combo. Includes soup, salad, rice, grilled vegetables. Jinbeh Lewisville.",
  keywords: ["steak and lobster hibachi lewisville","surf and turf japanese steakhouse","filet mignon lobster teppanyaki","luxury hibachi dinner lewisville","anniversary dinner hibachi lewisville","best hibachi near me lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Steak & Lobster Combo | Jinbeh Lewisville",
    description: "Surf and turf perfection",
    url: "https://jinbeh.com/lewisville/hibachi/combo-steak-lobster",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Hibachi Combo Steak Lobster",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/combo-steak-lobster",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Steak & Lobster Combo",
  "description": "Surf and turf perfection",
  "offers": {
    "@type": "Offer",
    "price": "54.95",
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
      "name": "What is Steak & Lobster Combo hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steak & Lobster Combo at Jinbeh Lewisville is surf and turf perfection. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $54.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Steak & Lobster Combo prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Steak & Lobster Combo on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Steak & Lobster Combo hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Steak & Lobster Combo hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Steak & Lobster Combo hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Steak & Lobster Combo is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Steak & Lobster Combo hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Steak & Lobster Combo experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function ComboSteakLobsterLewisvillePage() {
  const item = getMenuItem("combo-steak-lobster", "hibachi")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Hibachi", href: "/lewisville/hibachi" }, { label: "Combo Steak Lobster" }]} />
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
