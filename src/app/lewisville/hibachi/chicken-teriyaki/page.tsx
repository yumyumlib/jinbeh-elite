import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Hibachi Chicken Teriyaki | Best Japanese Steakhouse Lewisville TX",
  description: "Hibachi chicken teriyaki: 300 cal, 26g protein. Grilled tableside with teriyaki glaze. Complete dinner $24.95. Reserve at Jinbeh Lewisville today!",
  keywords: ["hibachi chicken teriyaki lewisville","teppanyaki chicken dinner","hibachi chicken calories","is hibachi chicken healthy","japanese steakhouse lewisville","family hibachi dinner lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Chicken Teriyaki | Jinbeh Lewisville",
    description: "Tender chicken breast with house teriyaki glaze",
    url: "https://jinbeh.com/lewisville/hibachi/chicken-teriyaki",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/chicken-teriyaki",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Chicken Teriyaki",
  "description": "Tender chicken breast with house teriyaki glaze",
  "offers": {
    "@type": "Offer",
    "price": "24.95",
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
      "name": "How many calories are in hibachi chicken teriyaki?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi chicken teriyaki contains approximately 200-300 calories per serving (6 oz), with 26g of protein and 11-12g of fat. The complete dinner with soup, salad, fried rice, and vegetables totals around 600-800 calories. At Jinbeh, we use minimal oil for a lighter preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi chicken teriyaki healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi chicken can be a healthy choice! Skinless chicken breast provides lean protein, B vitamins, and selenium. For a healthier meal, request less teriyaki sauce (it contains sugar and sodium), ask for steamed rice instead of fried, and load up on grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between hibachi and teriyaki chicken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi refers to the grilling style on a flat iron griddle, while teriyaki is the sweet soy-based glaze. At Jinbeh, our chicken teriyaki is hibachi-grilled (less fat than pan-fried) then finished with our house-made teriyaki sauce. The result is tender, caramelized chicken with a perfect sweet-savory balance."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with hibachi chicken teriyaki dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Chicken Teriyaki dinner ($24.95) includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and dipping sauces. It's our most popular family-friendly hibachi option."
      }
    },
    {
      "@type": "Question",
      "name": "Can I make hibachi chicken teriyaki lower in sodium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Ask for teriyaki sauce on the side to control the amount (regular teriyaki sauce can have 1000mg+ sodium). Choose steamed rice over fried rice, and request minimal soy sauce during cooking. Our chefs can accommodate dietary preferences."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi chicken teriyaki good for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chicken teriyaki is our most popular choice for kids and families! The mild sweet flavor appeals to children, and the tableside cooking show entertains all ages. We also offer a kids' portion. Call (972) 221-3888 for reservations."
      }
    }
  ]
};


export default function ChickenTeriyakiLewisvillePage() {
  const item = getMenuItem("chicken-teriyaki", "hibachi")!;
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
