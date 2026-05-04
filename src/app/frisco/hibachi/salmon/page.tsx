import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Hibachi Salmon Frisco | Fresh Atlantic Salmon Teppanyaki",
  description: "Fresh Atlantic salmon grilled tableside. 200-250 calories per 5oz with 25-28g protein. Omega-3 rich, healthy choice. Includes soup, salad, rice, vegetables. Jinbeh Frisco.",
  keywords: ["hibachi salmon frisco","salmon teppanyaki restaurant frisco tx","hibachi salmon calories","omega-3 salmon health benefits","fresh fish hibachi","best hibachi near me frisco","japanese steakhouse frisco","hibachi near me frisco"],
  openGraph: {
    title: "Hibachi Salmon | Jinbeh Frisco",
    description: "Fresh Atlantic salmon with citrus teriyaki",
    url: "https://jinbeh.com/frisco/hibachi/salmon",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Salmon",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/salmon",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Hibachi Salmon",
  "description": "Fresh Atlantic salmon with citrus teriyaki",
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
      "name": "How many calories in hibachi Salmon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 5oz Atlantic salmon serving contains approximately 200-250 calories with 25-28g protein and 10-12g fat. The complete hibachi dinner totals 650-800 calories. Salmon is one of the healthiest protein choices, rich in heart-healthy omega-3 fatty acids."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi Salmon good for your heart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Atlantic salmon is excellent for heart health. It's packed with EPA and DHA omega-3 fatty acids that reduce inflammation, support heart function, and promote brain health. Pair with grilled vegetables for a nutrient-dense, anti-inflammatory meal."
      }
    },
    {
      "@type": "Question",
      "name": "What's included with Hibachi Salmon dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your salmon dinner includes Japanese onion soup, house salad with ginger dressing, fresh Atlantic salmon seared tableside, hibachi vegetables, fried rice, and your choice of yum yum or ginger sauce for authentic flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi Salmon better than steak for health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both are healthy but different. Salmon offers omega-3s, lower cholesterol, and anti-inflammatory benefits. Steak provides iron, zinc, and B vitamins. Salmon has fewer calories (200-250) than ribeye (300-350), making it ideal for calorie-conscious diners."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize my salmon preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Request your salmon cooked to your preference - we can prepare it to any doneness level. Ask for minimal butter or sauce on the side, extra vegetables, or any specific dietary modifications."
      }
    }
  ]
};

export default function SalmonFriscoPage() {
  const item = { ...getMenuItem("salmon", "hibachi")!, jinbehStory: "Our hibachi salmon is cooked on grills reaching 550°F to achieve the perfect sear. Every sauce on your plate is made from scratch in our kitchen — from the Yum Yum sauce to the garlic butter. Recipes are posted on the kitchen walls so every chef learns them." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Salmon" }]} />
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
