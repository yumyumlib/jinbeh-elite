import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Sashimi Deluxe Platter Lewisville | Premium Fish Assortment",
  description: "Chef's premium sashimi selection with tuna, salmon, yellowtail at Jinbeh Lewisville. 329 calories, 36g protein, omega-3 rich.",
  keywords: ["sashimi platter lewisville","sashimi deluxe platter","assorted sashimi","chef selection sashimi","premium raw fish lewisville","sashimi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Sashimi Deluxe Platter | Jinbeh Lewisville",
    description: "Chef\'s selection of premium fish",
    url: "https://jinbeh.com/lewisville/sashimi/sashimi-deluxe",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sashimi-platter.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sashimi Sashimi Deluxe",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/sashimi-deluxe",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sashimi Deluxe Platter",
  "description": "Chef's selection of premium fish",
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
      "name": "How many calories in Sashimi Deluxe Platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sashimi Deluxe Platter at Jinbeh contains approximately 329 calories with 36 grams of protein, 20 grams of healthy fats, and zero carbohydrates."
      }
    },
    {
      "@type": "Question",
      "name": "What fish varieties are in the Deluxe Platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chef's selection typically includes premium cuts of tuna (maguro), salmon (sake), yellowtail (hamachi), and rotating seasonal selections. All are sushi-grade quality sourced fresh."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of this sashimi platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The variety ensures diverse omega-3 fatty acids, complete proteins, B vitamins, selenium, and iodine. Perfect for heart health, muscle repair, and anti-inflammatory benefits."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to eat the Deluxe Platter raw fish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! All our fish is premium sushi-grade, sourced from trusted suppliers, delivered fresh multiple times weekly, properly stored, and prepared by trained chefs."
      }
    },
    {
      "@type": "Question",
      "name": "What makes this platter 'deluxe'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Sashimi Deluxe at features chef's premium selections of the highest-quality fish cuts, generous portions, and seasonal variety. Perfect for experiencing premium sashimi."
      }
    }
  ]
};

export default function SashimiDeluxeLewisvillePage() {
  const item = getMenuItem("sashimi-deluxe", "sashimi")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Sashimi", href: "/lewisville/sashimi" }, { label: "Sashimi Deluxe" }]} />
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
