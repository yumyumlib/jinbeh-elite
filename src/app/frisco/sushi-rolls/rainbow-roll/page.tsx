import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Rainbow Roll Frisco | Assorted Sashimi Topping",
  description: "Rainbow Roll at Jinbeh Frisco: California roll with salmon, tuna, yellowtail. Premium sushi near Legacy West. Call (214) 619-1200.",
  keywords: ["rainbow roll frisco","rainbow roll sushi","assorted sashimi roll","colorful sushi roll","sushi rolls frisco","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "Rainbow Roll | Jinbeh Frisco",
    description: "California roll topped with assorted sashimi",
    url: "https://jinbeh.com/frisco/sushi-rolls/rainbow-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/rainbow-roll",
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
        "text": "Yes! Rainbow Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 619-1200 to order."
      }
    }
  ]
};


export default function RainbowRollFriscoPage() {
  const item = getMenuItem("rainbow-roll", "sushi-rolls")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
