import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Jumbo Shrimp Hibachi Frisco | Best Seafood Teppanyaki",
  description: "Jumbo shrimp seared tableside. 120-150 calories per serving, 22-25g protein. Low-carb, protein-rich seafood option. Includes soup, salad, rice, vegetables.",
  keywords: ["hibachi shrimp frisco","jumbo shrimp teppanyaki","garlic butter shrimp hibachi","hibachi seafood dinner frisco","best hibachi near me frisco","japanese steakhouse frisco","hibachi near me frisco"],
  openGraph: {
    title: "Jumbo Shrimp | Jinbeh Frisco",
    description: "Succulent jumbo shrimp, flame-kissed to perfection",
    url: "https://jinbeh.com/frisco/hibachi/shrimp",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/shrimp",
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
      "name": "How many calories are in hibachi Jumbo Shrimp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jumbo shrimp serves approximately 120-150 calories per 4oz serving with 22-25g protein and only 1g fat. The complete hibachi dinner totals 550-700 calories. Shrimp is among the leanest protein options, perfect for low-carb and keto diets."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi Jumbo Shrimp healthy and low-carb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Shrimp is an excellent choice for health-conscious diners. It's extremely low in calories and fat while being high in protein and B vitamins. Contains selenium for thyroid health. Ask to skip or minimize fried rice for a lower-carb option."
      }
    },
    {
      "@type": "Question",
      "name": "What's included with Jumbo Shrimp hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your shrimp dinner includes Japanese onion soup, house salad with ginger dressing, succulent jumbo shrimp seared on the teppan, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and choice of sauce."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Jumbo Shrimp over steak or salmon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shrimp offers the lowest calorie count (120-150 cal) compared to salmon (200-250 cal) or steak (250-350 cal), while providing the highest protein percentage. Perfect for weight loss, keto, or paleo diets without sacrificing flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request extra vegetables instead of fried rice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! You can request additional grilled vegetables instead of fried rice to keep your meal low-carb. Our chefs will happily customize your plate with extra zucchini, mushrooms, onions, and peppers."
      }
    }
  ]
};


export default function ShrimpFriscoPage() {
  const item = getMenuItem("shrimp", "hibachi")!;
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
