import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Sake Bomb Frisco - Classic Japanese Beer Cocktail | Jinbeh",
  description: "Traditional sake bomb with cold Japanese beer at Jinbeh Frisco. Best happy hour cocktails. Reserve at our Japanese restaurant (214) 619-1200.",
  keywords: ["sake bomb frisco","sake bomb","japanese beer cocktail","group drinking ritual japanese","japanese cocktails frisco","happy hour frisco","jinbeh frisco"],
  openGraph: {
    title: "Sake Bomb | Classic Japanese Beer Cocktail Frisco",
    description: "Traditional sake bomb with cold Japanese beer. Best happy hour specials.",
    url: "https://jinbeh.com/frisco/cocktails/sake-bomb",
    images: [
      {
        url: "https://jinbeh.com/images/drinks/JinbehPunchBeverageDrink.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Cocktails Sake Bomb",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/cocktails/sake-bomb",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sake Bomb",
  "description": "Classic sake dropped into cold beer",
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
      "name": "What is a Sake Bomb drink?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Sake Bomb is a traditional Japanese drinking experience where a shot glass of premium sake is dropped into a glass of cold Japanese beer (typically Kirin or Sapporo). The combination creates a unique taste profile."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories are in a Sake Bomb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Sake Bomb typically contains 150-200 calories, varying by the specific sake and beer used. The calorie content comes from both the alcohol and residual sugars in the ingredients."
      }
    },
    {
      "@type": "Question",
      "name": "What is the alcohol content of a Sake Bomb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Sake Bomb contains approximately 10-12% alcohol by volume total, combining sake (15-20% ABV) with beer (5% ABV). This creates a stronger drink than beer alone."
      }
    },
    {
      "@type": "Question",
      "name": "What are the ingredients in a Sake Bomb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Sake Bomb consists of two main components: premium Japanese sake (typically futsushu table sake) and cold Japanese beer (Kirin, Sapporo, or Asahi). The sake shot is dropped into the beer before consuming."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sake Bomb good for happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Sake Bomb is featured during our happy hour at Jinbeh Frisco with special pricing. It's perfect for celebrating with friends and experiencing authentic Japanese drinking culture."
      }
    }
  ]
};

export default function SakeBombFriscoPage() {
  const item = { ...getMenuItem("sake-bomb", "cocktails")!, jinbehStory: "Sake tradition at Jinbeh goes back decades. Our premium unfiltered sake bottle must be shaken before pouring, the white cloud inside is rice sediment from the authentic unfiltered process." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Cocktails", href: "/frisco/cocktails" }, { label: "Sake Bomb" }]} />
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
