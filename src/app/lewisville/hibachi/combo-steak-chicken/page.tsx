import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Steak & Chicken Combo Hibachi Lewisville | Dual Protein",
  description: "Filet mignon paired with chicken teriyaki. 450-500 calories, 45-50g protein. Balanced meat combo. Includes soup, salad, rice, grilled vegetables.",
  keywords: ["steak chicken combo hibachi lewisville","dual protein teppanyaki lewisville tx","best hibachi near me lewisville","meat combo hibachi lewisville","filet mignon chicken","protein combination dinner","japanese steakhouse lewisville","best hibachi lewisville tx"],
  openGraph: {
    title: "Steak & Chicken Combo | Jinbeh Lewisville",
    description: "Filet mignon with chicken teriyaki",
    url: "https://jinbeh.com/lewisville/hibachi/combo-steak-chicken",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/combo-steak-chicken",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Steak & Chicken Combo",
  "description": "Filet mignon with chicken teriyaki",
  "offers": {
    "@type": "Offer",
    "price": "36.95",
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
      "name": "What is Steak & Chicken Combo hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steak & Chicken Combo at Jinbeh Lewisville is filet mignon with chicken teriyaki. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $36.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Steak & Chicken Combo prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Steak & Chicken Combo on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Steak & Chicken Combo hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Steak & Chicken Combo hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Steak & Chicken Combo hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Steak & Chicken Combo is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Steak & Chicken Combo hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Steak & Chicken Combo experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};


export default function ComboSteakChickenLewisvillePage() {
  const item = getMenuItem("combo-steak-chicken", "hibachi")!;
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
