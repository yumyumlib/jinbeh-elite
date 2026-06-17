import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Lobster Tail Hibachi Lewisville | Luxury Maine Lobster Teppanyaki",
  description: "Sweet Maine lobster tail cooked tableside butter. 180-220 calories per 5oz, 25-30g protein. Premium special occasion hibachi. Includes soup, salad, rice, vegetables.",
  keywords: ["hibachi lobster tail lewisville","lobster teppanyaki dinner","butter grilled lobster japanese restaurant","special occasion hibachi dinner","best hibachi near me lewisville","japanese steakhouse lewisville","hibachi near me lewisville"],
  openGraph: {
    title: "Lobster Tail | Jinbeh Lewisville",
    description: "Sweet Maine lobster tail, butter-grilled",
    url: "https://jinbeh.com/lewisville/hibachi/lobster-tail",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Hibachi Lobster Tail",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/lobster-tail",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Lobster Tail",
  "description": "Sweet Maine lobster tail, butter-grilled",
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
      "name": "What is Lobster Tail hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lobster Tail at Jinbeh Lewisville is sweet maine lobster tail, butter-grilled. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Lobster Tail prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Lobster Tail on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Lobster Tail hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Lobster Tail hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Lobster Tail hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Lobster Tail is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (214) 488-2224 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Lobster Tail hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 7–8 guests (larger groups accommodated by joining tables with advance notice) guests, perfect for sharing the Lobster Tail experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};

export default function LobsterTailLewisvillePage() {
  const item = { ...getMenuItem("lobster-tail", "hibachi")!, jinbehStory: "Our premium lobster tail is seared on hibachi grills reaching 550°F. The Yum Yum sauce served alongside, an in-house mayo-based creation, pairs beautifully with lobster. Every sauce at Jinbeh is made from scratch daily." };
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Hibachi", href: "/lewisville/hibachi" }, { label: "Lobster Tail" }]} />
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
