import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Seafood Trio Hibachi Frisco | Premium Mixed Seafood",
  description: "Jumbo shrimp, sea scallops, Maine lobster tail. 380-420 calories, 60-65g protein. Healthiest hibachi combo option. Includes soup, salad, rice, grilled vegetables.",
  keywords: ["seafood trio hibachi frisco","mixed seafood teppanyaki frisco tx","best hibachi near me frisco","healthy seafood combo frisco","shrimp scallops lobster combo","premium seafood hibachi","japanese steakhouse frisco","best hibachi frisco tx"],
  openGraph: {
    title: "Seafood Trio | Jinbeh Frisco",
    description: "Shrimp, scallops, and lobster",
    url: "https://jinbeh.com/frisco/hibachi/combo-seafood",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/combo-seafood",
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
      "name": "What proteins are in the Seafood Trio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premium seafood trio features jumbo shrimp (22-25g protein), sea scallops (20-22g protein), and Maine lobster tail (25-28g protein). Combined 380-420 calories with 60-65g complete protein - healthiest hibachi option."
      }
    },
    {
      "@type": "Question",
      "name": "Is Seafood Trio the healthiest hibachi choice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All three seafood proteins are ultra-lean with high protein, low fat, and omega-3 fatty acids. At only 380-420 calories with 60-65g protein, it's unbeatable for health-conscious diners and weight management."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Seafood Trio special?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ultimate variety! Each protein has unique flavor and texture. Shrimp is firm and sweet, scallops are delicate, lobster is luxurious. Three distinct seafood experiences on one plate prepared tableside."
      }
    },
    {
      "@type": "Question",
      "name": "Is Seafood Trio good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! At $52.95, it's luxurious yet affordable compared to steak combos. Perfect for anniversaries, engagements, or celebrations. Three premium proteins showcase the ultimate hibachi experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request substitutions in the Seafood Trio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us about customization! We can adjust portions or substitute different seafood. Want extra lobster? More scallops? Our chefs will personalize your seafood experience based on preferences."
      }
    }
  ]
};


export default function ComboSeafoodFriscoPage() {
  const item = getMenuItem("combo-seafood", "hibachi")!;
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
