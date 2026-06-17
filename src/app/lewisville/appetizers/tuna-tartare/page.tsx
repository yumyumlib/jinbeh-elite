import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Tuna Tartare Lewisville | Diced Ahi with Avocado Ponzu",
  description: "Diced ahi tuna tartare with avocado and ponzu at Jinbeh Lewisville. 100-150 calories, 20g protein, omega-3 healthy. Premium raw fish.",
  keywords: ["tuna tartare lewisville","ahi tuna tartare appetizer","raw tuna appetizer","sashimi style appetizer","japanese appetizers lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Tuna Tartare | Jinbeh Lewisville",
    description: "Diced ahi tuna with avocado and ponzu",
    url: "https://jinbeh.com/lewisville/appetizers/tuna-tartare",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Appetizers Tuna Tartare",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/tuna-tartare",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tuna Tartare",
  "description": "Diced ahi tuna with avocado and ponzu",
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
      "name": "What is Tuna Tartare at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Tartare at Jinbeh Lewisville is diced ahi tuna with avocado and ponzu. At, it's perfect for sharing while you wait for your hibachi or sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Tartare good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Tuna Tartare is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Tuna Tartare during Happy Hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Tuna Tartare is on the regular menu and pairs beautifully with our Happy Hour drinks: Japanese draft beer, sake, and wine (Mon-Fri 5:00-6:30 PM). Note that Happy Hour pricing applies to drinks only. Call (214) 488-2224 for details."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Tartare available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Tuna Tartare travels well for takeout. Call (214) 488-2224 directly or order online."
      }
    }
  ]
};

export default function TunaTartareLewisvillePage() {
  const item = { ...getMenuItem("tuna-tartare", "appetizers")!, jinbehStory: "In Japanese, \"tataki\" means \"to hit\" or \"to pound.\" The fish is tenderized by pounding it thin, then barely seared on the outside so it stays beautifully rare inside. A very traditional Japanese preparation served with our house-made ponzu sauce." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Appetizers", href: "/lewisville/appetizers" }, { label: "Tuna Tartare" }]} />
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
