import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Salmon Sashimi Lewisville | Omega-3 Rich Sliced Raw Fish",
  description: "Premium Atlantic salmon sashimi at Jinbeh Lewisville. 121 calories per serving, 17g protein, rich in omega-3s. Sushi-grade quality near Vista Ridge Mall.",
  keywords: ["salmon sashimi lewisville","salmon sashimi calories","salmon sashimi nutrition","sushi grade salmon","fresh fish sashimi lewisville","omega-3 sashimi","sashimi near me lewisville","japanese restaurant lewisville"],
  openGraph: {
    title: "Salmon Sashimi | Jinbeh Lewisville",
    description: "Fresh Atlantic salmon, sliced to perfection",
    url: "https://jinbeh.com/lewisville/sashimi/salmon-sashimi",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sashimi-platter.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sashimi Salmon Sashimi",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/salmon-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Salmon Sashimi",
  "description": "Fresh Atlantic salmon, sliced to perfection",
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
      "name": "How fresh is the Salmon Sashimi at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Salmon Sashimi is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Lewisville, we take pride in serving only the highest-quality sashimi."
      }
    },
    {
      "@type": "Question",
      "name": "What is Salmon Sashimi sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salmon Sashimi at Jinbeh is fresh atlantic salmon, sliced to perfection. Priced at, it's served without rice, allowing you to experience the pure, clean flavor of premium fish."
      }
    },
    {
      "@type": "Question",
      "name": "How should I eat Salmon Sashimi sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend lightly dipping Salmon Sashimi in soy sauce with a touch of wasabi. Let the natural flavors shine, great sashimi needs minimal accompaniment."
      }
    },
    {
      "@type": "Question",
      "name": "Is Salmon Sashimi sashimi safe to eat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Salmon Sashimi is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Lewisville follows strict food safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Salmon Sashimi as part of a platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Salmon Sashimi is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection."
      }
    }
  ]
};

export default function SalmonSashimiLewisvillePage() {
  const item = { ...getMenuItem("salmon-sashimi", "sashimi")!, jinbehStory: "In Japanese, \'sashimi\' means \'sliced\', just the raw fish, no rice. Our head sushi chef selects the freshest cuts daily. Try our Sashimi Sampler for the three most popular fish at a discount." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sashimi", href: "/lewisville/sashimi" }, { label: "Salmon Sashimi" }]} />
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
