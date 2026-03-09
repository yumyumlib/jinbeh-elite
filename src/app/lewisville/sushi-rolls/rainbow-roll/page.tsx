import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Rainbow Roll Lewisville | Assorted Sashimi Topping",
  description: "Rainbow Roll at Jinbeh Lewisville: California roll with salmon, tuna, yellowtail. Premium sushi near I-35E. Call (972) 221-3888.",
  keywords: ["rainbow roll","rainbow roll lewisville","sushi near me lewisville","best sushi lewisville tx","sushi rolls lewisville","colorful sushi roll","jinbeh rainbow roll"],
  openGraph: {
    title: "Rainbow Roll | Jinbeh Lewisville",
    description: "California roll topped with assorted sashimi",
    url: "https://jinbeh.com/lewisville/sushi-rolls/rainbow-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/rainbow-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Rainbow Roll",
  "description": "California roll topped with assorted sashimi",
  "offers": {
    "@type": "Offer",
    "price": "17.95",
    "priceCurrency": "USD"
  },
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
      "name": "What is in Rainbow Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rainbow Roll features a California roll base with imitation crab and avocado, topped with assorted fresh sashimi: salmon, tuna, yellowtail, and white fish arranged in a beautiful rainbow pattern."
      }
    },
    {
      "@type": "Question",
      "name": "What sashimi is on top?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The toppings include fresh salmon, tuna, yellowtail, and white fish (shiromi). Some variations include avocado slices and tobiko or masago (fish roe) for color and texture."
      }
    },
    {
      "@type": "Question",
      "name": "Is Rainbow Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rainbow Roll is mostly gluten-free, but soy sauce and some seasonings may contain gluten. Request gluten-free soy sauce to make it fully gluten-free."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with fresh fish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We use premium sushi-grade fish delivered daily. All Rainbow Rolls are prepared fresh to order by our experienced sushi chefs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Rainbow Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Rainbow Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (972) 221-3888 to order."
      }
    }
  ]
};


export default function RainbowRollLewisvillePage() {
  const item = getMenuItem("rainbow-roll", "sushi-rolls")!;
  const location = locations["lewisville"];

  return (
    <>
      <Header location="lewisville" />
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
