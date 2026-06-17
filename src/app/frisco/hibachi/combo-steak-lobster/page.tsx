import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Steak & Lobster Combo Hibachi Frisco | Luxury Surf Turf",
  description: "Premium filet mignon and Maine lobster tail. 430-480 calories, 55-60g protein. Luxury special occasion combo. Includes soup, salad, rice, grilled vegetables. Jinbeh Frisco.",
  keywords: ["steak and lobster hibachi frisco","surf and turf japanese steakhouse","filet mignon lobster teppanyaki","luxury hibachi dinner frisco","anniversary dinner hibachi frisco","best hibachi near me frisco","hibachi near me frisco"],
  openGraph: {
    title: "Steak & Lobster Combo | Jinbeh Frisco",
    description: "Surf and turf perfection",
    url: "https://jinbeh.com/frisco/hibachi/combo-steak-lobster",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Combo Steak Lobster",
      },
    ],
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
        "text": "Absolutely! At, this is our most celebrated combo for anniversaries, engagements, and special occasions. Filet mignon represents elegance, lobster symbolizes luxury. Perfect for unforgettable moments."
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
        "text": "At, it combines filet mignon and Maine lobster. The price reflects premium quality and scarcity. Bundle value saves versus ordering separately while providing luxury surf-and-turf."
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
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Combo Steak Lobster" }]} />
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
      <Footer />
    </>
  );
}
