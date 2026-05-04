import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Premium Sake Flight Frisco - Japanese Tasting | Jinbeh",
  description: "Three premium sake tasting flight at Jinbeh Frisco. Experience authentic Japanese sakes with expert guidance. Best sake selection near Stonebriar (214) 619-1200.",
  keywords: ["sake flight frisco","sake tasting","premium sake","junmai sake","sake menu","japanese cocktails frisco","jinbeh frisco"],
  openGraph: {
    title: "Sake Flight | Premium Japanese Tasting Frisco",
    description: "Three premium sake tasting flight. Expert-curated selection.",
    url: "https://jinbeh.com/frisco/cocktails/sake-flight",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Cocktails Sake Flight",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/cocktails/sake-flight",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sake Flight",
  "description": "Tasting of three premium sakes",
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
      "name": "What is a sake flight tasting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A sake flight is a curated selection of three premium sakes served in small 2-3 oz portions. This tasting experience allows you to explore different sake styles, from light and delicate to rich and complex flavors."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories are in a sake flight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical sake flight (3 x 1.5 oz servings) contains approximately 150-210 calories total. Premium sakes contain about 50-70 calories per 1.5 oz serving, with most calories from alcohol."
      }
    },
    {
      "@type": "Question",
      "name": "What is the alcohol content of sake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premium sake typically ranges from 15-17% alcohol by volume. Our curated flights showcase the complexity of different sake styles while maintaining consistent alcohol content across selections."
      }
    },
    {
      "@type": "Question",
      "name": "What sakes are included in our flight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Sake Flight features three premium selections that showcase different styles: typically a delicate Ginjo, a balanced Junmai, and a unique specialty sake. Ask our staff for current selections."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with sake flight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sake flights pair wonderfully with sushi, sashimi, appetizers, and light Japanese dishes. Our sommelier recommends enjoying it with our chef's special rolls for the ultimate tasting experience."
      }
    }
  ]
};

export default function SakeFlightFriscoPage() {
  const item = { ...getMenuItem("sake-flight", "cocktails")!, jinbehStory: "The truth about sake quality: premium sake always performs better cold. The rice is polished repeatedly — each pass producing a finer grade. Hot sake uses the unpolished leftovers. Higher-quality cold sake also produces fewer headaches the next day." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Cocktails", href: "/frisco/cocktails" }, { label: "Sake Flight" }]} />
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
