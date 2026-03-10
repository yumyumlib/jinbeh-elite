import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Steak & Lobster Combo Hibachi Frisco | Luxury Surf Turf",
  description: "Premium filet mignon and Maine lobster tail. 430-480 calories, 55-60g protein. Luxury special occasion combo. Includes soup, salad, rice, grilled vegetables.",
  keywords: ["steak and lobster hibachi frisco","surf and turf japanese steakhouse","filet mignon lobster teppanyaki","luxury hibachi dinner frisco","anniversary dinner hibachi frisco","best hibachi near me frisco","hibachi near me frisco"],
  openGraph: {
    title: "Steak & Lobster Combo | Jinbeh Frisco",
    description: "Surf and turf perfection",
    url: "https://jinbeh.com/frisco/hibachi/combo-steak-lobster",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/combo-steak-lobster",
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
      "name": "What's included in Steak & Lobster Combo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premium combo features filet mignon (5oz, 250 cal, 28g protein) and Maine lobster tail (5oz, 180 cal, 28g protein) for 430-480 total calories with 55-60g protein. The ultimate luxury hibachi experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Steak & Lobster ideal for celebrations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! At $54.95, this is our most celebrated combo for anniversaries, engagements, and special occasions. Filet mignon represents elegance, lobster symbolizes luxury. Perfect for unforgettable moments."
      }
    },
    {
      "@type": "Question",
      "name": "How does steak & lobster compare nutritionally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outstanding! 55-60g protein with 430-480 calories provides exceptional macronutrient ratio. Filet supplies iron and B vitamins, lobster adds minerals and omega-3s. Luxury proteins for health."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Steak & Lobster more expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At $54.95, it combines filet mignon ($34.95) and Maine lobster ($44.95). The price reflects premium quality and scarcity. Bundle value saves versus ordering separately while providing luxury surf-and-turf."
      }
    },
    {
      "@type": "Question",
      "name": "Can I modify portions or proteins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us for customization! We can substitute NY Strip or Ribeye for filet, or adjust lobster portion. Our chefs are happy to personalize your luxury meal for dietary preferences."
      }
    }
  ]
};


export default function ComboSteakLobsterFriscoPage() {
  const item = getMenuItem("combo-steak-lobster", "hibachi")!;
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
