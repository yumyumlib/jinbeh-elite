import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Seafood Trio Hibachi Frisco | Premium Mixed Seafood",
  description: "Jumbo shrimp, sea scallops, Maine lobster tail. 380-420 calories, 60-65g protein. Healthiest hibachi combo option. Includes soup, salad, rice, grilled vegetables. Jinbeh.",
  keywords: ["seafood trio hibachi frisco","mixed seafood teppanyaki","lobster shrimp scallops hibachi","premium seafood hibachi dinner","best hibachi near me frisco","japanese steakhouse frisco","hibachi near me frisco"],
  openGraph: {
    title: "Seafood Trio | Jinbeh Frisco",
    description: "Shrimp, scallops, and lobster",
    url: "https://jinbeh.com/frisco/hibachi/combo-seafood",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Combo Seafood",
      },
    ],
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
        "text": "Absolutely! At, it's luxurious yet affordable compared to steak combos. Perfect for anniversaries, engagements, or celebrations. Three premium proteins showcase the ultimate hibachi experience."
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
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Combo Seafood" }]} />
      </div>
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      {/* AI-assisted nutrition disclaimer */}
      <div className="container mx-auto max-w-5xl px-4 my-8">
        <div className="bg-warm-ivory border-l-4 border-soft-gold rounded-r-2xl p-5 text-sm text-charcoal/75">
          <p>
            <strong className="text-charcoal">Nutrition disclaimer:</strong>{" "}
            Caloric, nutritional, and macronutrient values mentioned on this page are estimates
            assisted by AI and should be treated as approximate guidance only. Actual values vary
            by portion size, preparation method, ingredient batch, and chef discretion at Jinbeh
            Frisco and Lewisville.
          </p>
        </div>
      </div>
      <PageSeoBoost route="/frisco/hibachi/combo-seafood" />
      <Footer />
    </>
  );
}
