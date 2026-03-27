import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Seared Ahi Tuna Frisco | Pepper-Crusted Premium Fish | Jinbeh",
  description: "Seared ahi tuna with wasabi aioli at Jinbeh Frisco. 100-150 calories, 20g protein, omega-3 rich. Premium appetizer with healthy benefits.",
  keywords: ["seared ahi tuna frisco","tataki tuna appetizer","pepper crusted ahi tuna","seared tuna japanese restaurant","japanese appetizers frisco","japanese restaurant frisco","best sushi frisco tx"],
  openGraph: {
    title: "Seared Ahi Tuna Frisco | Premium Pepper-Crusted Fish",
    description: "Seared ahi tuna with wasabi aioli at Jinbeh Frisco. 100-150 calories, 20g protein.",
    url: "https://jinbeh.com/frisco/appetizers/seared-tuna",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Appetizers Seared Tuna",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/appetizers/seared-tuna",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Seared Ahi Tuna",
  "description": "Pepper-crusted ahi with wasabi aioli",
  "offers": {
    "@type": "Offer",
    "price": "16.95",
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
      "name": "How many calories in Seared Ahi Tuna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seared Ahi Tuna at Jinbeh contains approximately 100-150 calories per serving with 20 grams of protein and 4 grams of healthy omega-3 fats."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of seared tuna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seared tuna offers lean protein, omega-3 fatty acids for heart and brain health, vitamins B12 and D, and selenium. The rare-seared center preserves nutrients."
      }
    },
    {
      "@type": "Question",
      "name": "What makes the pepper crust and wasabi aioli special?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The black pepper crust adds spice and texture while keeping the center rare. Wasabi aioli brings Japanese heat and creamy richness, complementing the premium tuna."
      }
    },
    {
      "@type": "Question",
      "name": "Is Seared Ahi Tuna good for groups and happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! At $16.95, Seared Ahi Tuna is perfect for sharing and elegant enough for special occasions. Featured in many happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Seared Ahi Tuna for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! For best quality and flavor, pick up quickly. The seared exterior and rare center are preserved best when enjoyed fresh. Call (214) 619-1200."
      }
    }
  ]
};


export default function SearedTunaFriscoPage() {
  const item = getMenuItem("seared-tuna", "appetizers")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Appetizers", href: "/frisco/appetizers" }, { label: "Seared Tuna" }]} />
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
