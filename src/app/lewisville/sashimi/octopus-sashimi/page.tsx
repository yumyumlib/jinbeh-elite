import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Octopus Sashimi Lewisville | Low-Fat High-Protein Tako",
  description: "Tender octopus (tako) sashimi at Jinbeh Lewisville. 93 calories, 29g protein, rich in B12 & selenium. Lean choice for healthy eating.",
  keywords: ["octopus sashimi lewisville","tako sashimi","octopus japanese restaurant","adventurous sashimi","lean protein sashimi","sashimi near me lewisville","japanese restaurant lewisville"],
  openGraph: {
    title: "Octopus Sashimi | Jinbeh Lewisville",
    description: "Tender tako with subtle sweetness",
    url: "https://jinbeh.com/lewisville/sashimi/octopus-sashimi",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sashimi-platter.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sashimi Octopus Sashimi",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/octopus-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Octopus Sashimi",
  "description": "Tender tako with subtle sweetness",
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
      "name": "What are the nutritional facts for Octopus Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Octopus Sashimi at Jinbeh contains approximately 93 calories per serving with 29 grams of protein and extremely low fat content, making it one of our leanest options."
      }
    },
    {
      "@type": "Question",
      "name": "What health benefits does octopus sashimi provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Octopus Sashimi is rich in vitamin B12, iron, selenium, and other essential minerals. Its high protein-to-calorie ratio makes it excellent for muscle building and weight management without excess fat."
      }
    },
    {
      "@type": "Question",
      "name": "Is Octopus Sashimi safe to eat raw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our octopus (tako) is sushi-grade quality, sourced from premium suppliers, delivered fresh multiple times weekly, and prepared by trained chefs following strict safety standards."
      }
    },
    {
      "@type": "Question",
      "name": "How should I eat Octopus Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Octopus Sashimi is best enjoyed with a light dip of soy sauce and a touch of wasabi. The tender, subtly sweet texture is appreciated best with minimal accompaniment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I include Octopus Sashimi in a platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Octopus Sashimi is available individually at or as part of our Sashimi Deluxe Platter and Chirashi Bowl. It's a signature item in our Omakase selections."
      }
    }
  ]
};

export default function OctopusSashimiLewisvillePage() {
  const item = getMenuItem("octopus-sashimi", "sashimi")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sashimi", href: "/lewisville/sashimi" }, { label: "Octopus Sashimi" }]} />
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
