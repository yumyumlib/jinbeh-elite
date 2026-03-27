import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Steak & Chicken Combo Hibachi Frisco | Dual Protein",
  description: "Filet mignon paired with chicken teriyaki. 450-500 calories, 45-50g protein. Balanced meat combo. Includes soup, salad, rice, grilled vegetables. Jinbeh Frisco.",
  keywords: ["steak chicken combo hibachi frisco","dual protein teppanyaki","hibachi combination dinner frisco tx","filet mignon chicken hibachi","best hibachi near me frisco","teppanyaki restaurant frisco","hibachi near me frisco"],
  openGraph: {
    title: "Steak & Chicken Combo | Jinbeh Frisco",
    description: "Filet mignon with chicken teriyaki",
    url: "https://jinbeh.com/frisco/hibachi/combo-steak-chicken",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Combo Steak Chicken",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/combo-steak-chicken",
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
      "name": "How many calories in Steak & Chicken Combo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Steak & Chicken Combo contains approximately 450-500 calories with 45-50g protein. Filet (25-30g) plus chicken teriyaki (20-25g) provides balanced dual-protein nutrition. Complete hibachi dinner totals 800-950 calories."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose combo instead of single protein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Combos offer variety and balance! Filet mignon provides rich beef flavor, while chicken adds leaner protein. At $36.95, it's more affordable than filet ($34.95) plus chicken ($24.95) ordered separately."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference in meat flavors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Filet mignon is tender, mild beef. Chicken teriyaki is lighter, glazed with sweet-savory teriyaki sauce. Together they provide contrasting textures and flavors on one plate for ultimate hibachi experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Steak & Chicken Combo healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Dual proteins provide balanced amino acid profile. Filet is rich in iron and B vitamins, chicken in lean protein. Balanced combination supports muscle health and recovery after workouts."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request different proteins in the combo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us about customization options. We can substitute NY Strip or Ribeye for filet, or salmon/shrimp for chicken. Our chefs accommodate special requests for your preferred protein pairing."
      }
    }
  ]
};


export default function ComboSteakChickenFriscoPage() {
  const item = getMenuItem("combo-steak-chicken", "hibachi")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Combo Steak Chicken" }]} />
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
