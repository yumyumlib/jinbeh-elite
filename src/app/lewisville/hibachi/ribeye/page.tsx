import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Ribeye Steak Hibachi Lewisville | Premium Marbled Beef",
  description: "Richly marbled ribeye seared tableside. 300-350 calories per 5oz with 25-28g protein. Includes soup, salad, rice, vegetables. Premium Japanese steakhouse. Jinbeh Lewisville.",
  keywords: ["ribeye hibachi lewisville","ribeye steak teppanyaki","black angus hibachi steak","marbled steak japanese restaurant","best hibachi near me lewisville","teppanyaki restaurant lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Ribeye Steak | Jinbeh Lewisville",
    description: "Marbled ribeye with rich, beefy flavor",
    url: "https://jinbeh.com/lewisville/hibachi/ribeye",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Hibachi Ribeye",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/ribeye",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Ribeye Steak",
  "description": "Marbled ribeye with rich, beefy flavor",
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
      "name": "How many calories in hibachi Ribeye Steak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 5oz Ribeye contains approximately 300-350 calories with 25-28g protein and 20-24g fat. The complete hibachi dinner totals 750-900 calories. Ribeye has the most marbling of premium steaks, providing exceptional flavor and richness. Perfect for special occasions."
      }
    },
    {
      "@type": "Question",
      "name": "Is Ribeye healthier than other steak cuts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While higher in fat than NY Strip or filet, Ribeye contains mostly monounsaturated fats (the healthy kind). It's rich in iron, zinc, selenium, and B vitamins. The fat content enhances satiety and nutrient absorption. Balance with the included vegetables for optimal nutrition."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Ribeye special at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our ribeyes are hand-selected USDA Choice or higher, featuring premium marbling for maximum flavor. Cooked tableside on a 400°F teppanyaki grill at your table with entertaining knife work and the famous onion volcano show."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Ribeye more expensive than NY Strip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ribeye is priced higher than NY Strip due to superior marbling and richer flavor profile. The intramuscular fat (marbling) provides tenderness, juiciness, and taste that's exceptional. It's ideal for those who want the ultimate hibachi experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request how Ribeye is cooked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our teppanyaki chefs will prepare your ribeye to your exact preference - rare, medium-rare, medium, medium-well, or well-done. Request minimal butter or sauce on the side based on dietary needs."
      }
    }
  ]
};

export default function RibeyeLewisvillePage() {
  const item = getMenuItem("ribeye", "hibachi")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Hibachi", href: "/lewisville/hibachi" }, { label: "Ribeye" }]} />
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
