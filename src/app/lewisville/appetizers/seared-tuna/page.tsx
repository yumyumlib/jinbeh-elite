import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Seared Ahi Tuna Lewisville | Pepper-Crusted Premium Fish",
  description: "Seared ahi tuna with wasabi aioli at Jinbeh Lewisville. 100-150 calories, 20g protein, omega-3 rich. Premium appetizer with healthy benefits.",
  keywords: ["seared ahi tuna lewisville","tataki tuna appetizer","pepper crusted ahi tuna","seared tuna japanese restaurant","japanese appetizers lewisville","japanese restaurant lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Seared Ahi Tuna | Jinbeh Lewisville",
    description: "Pepper-crusted ahi with wasabi aioli",
    url: "https://jinbeh.com/lewisville/appetizers/seared-tuna",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Appetizers Seared Tuna",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers/seared-tuna",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Seared Ahi Tuna",
  "description": "Pepper-crusted ahi with wasabi aioli",
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
      "name": "What is Seared Ahi Tuna at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seared Ahi Tuna at Jinbeh Lewisville is pepper-crusted ahi with wasabi aioli. At, it's perfect for sharing while you wait for your hibachi or sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Is Seared Ahi Tuna good for sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Seared Ahi Tuna is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Seared Ahi Tuna during Happy Hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Seared Ahi Tuna is on the regular menu and pairs beautifully with our Happy Hour drinks: Japanese draft beer, sake, and wine (Mon-Fri 5:00-6:30 PM). Note that Happy Hour pricing applies to drinks only. Call (214) 488-2224 for details."
      }
    },
    {
      "@type": "Question",
      "name": "Is Seared Ahi Tuna available for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Seared Ahi Tuna travels well for takeout. Call (214) 488-2224 directly or order online."
      }
    }
  ]
};

export default function SearedTunaLewisvillePage() {
  const item = getMenuItem("seared-tuna", "appetizers")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Appetizers", href: "/lewisville/appetizers" }, { label: "Seared Tuna" }]} />
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
      <PageSeoBoost route="/lewisville/appetizers/seared-tuna" />
      <Footer />
    </>
  );
}
