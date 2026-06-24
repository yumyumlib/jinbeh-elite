import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Salmon Sashimi Frisco | Omega-3 Rich Sliced Raw Fish | Jinbeh",
  description: "Premium Atlantic salmon sashimi at Jinbeh Frisco. 121 calories per serving, 17g protein, rich in omega-3s. Sushi-grade quality near Stonebriar Centre.",
  keywords: ["salmon sashimi frisco","salmon sashimi calories","salmon sashimi nutrition","sushi grade salmon","fresh fish sashimi frisco","omega-3 sashimi","sashimi near me frisco","japanese restaurant frisco"],
  openGraph: {
    title: "Salmon Sashimi Frisco | Premium Omega-3 Rich Fish",
    description: "Premium Atlantic salmon sashimi at Jinbeh Frisco. 121 calories per serving, 17g protein, rich in omega-3s.",
    url: "https://jinbeh.com/frisco/sashimi/salmon-sashimi",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sashimi-platter.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sashimi Salmon Sashimi",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sashimi/salmon-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Salmon Sashimi",
  "description": "Fresh Atlantic salmon, sliced to perfection",
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
      "name": "How many calories are in Salmon Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salmon Sashimi at Jinbeh contains approximately 121 calories per 3-ounce serving, with 17 grams of protein and 5 grams of healthy omega-3 fatty acids per serving."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of eating Salmon Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salmon Sashimi is rich in omega-3 fatty acids that promote cardiovascular health, complete protein with all essential amino acids, B vitamins, and selenium for bone health. Ideal for low-carb and muscle-building diets."
      }
    },
    {
      "@type": "Question",
      "name": "Is Salmon Sashimi safe to eat raw at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our Salmon Sashimi is sushi-grade quality, sourced from premium suppliers, properly stored at precise temperatures, and prepared by trained chefs following strict food safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "How is Salmon Sashimi best served and eaten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend lightly dipping Salmon Sashimi in soy sauce with a touch of wasabi and ginger. Let the natural flavors shine, fresh, premium sashimi needs minimal accompaniment to truly appreciate its quality."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Salmon Sashimi as part of a platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Salmon Sashimi is available individually at or as part of our Sashimi Deluxe Platter and Chirashi Bowl. Ask about our Omakase for premium selections."
      }
    }
  ]
};

export default function SalmonSashimiFriscoPage() {
  const item = { ...getMenuItem("salmon-sashimi", "sashimi")!, jinbehStory: "In Japanese, \'sashimi\' means \'sliced\', just the raw fish, no rice. Our head sushi chef selects the freshest cuts daily. Try our Sashimi Sampler for the three most popular fish at a discount." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Sashimi", href: "/frisco/sashimi" }, { label: "Salmon Sashimi" }]} />
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
      <PageSeoBoost route="/frisco/sashimi/salmon-sashimi" />
      <Footer />
    </>
  );
}
