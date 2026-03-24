import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Yellowtail Sashimi Lewisville | Buttery Hamachi Delicacy",
  description: "Premium hamachi (yellowtail) sashimi at Jinbeh Lewisville. 150 calories, 20g protein, omega-3 rich with heart-healthy benefits.",
  keywords: ["yellowtail sashimi lewisville","hamachi sashimi","yellowtail sashimi near me","buttery sashimi fish","omega-3 fish lewisville","sashimi near me lewisville","japanese restaurant lewisville"],
  openGraph: {
    title: "Yellowtail Sashimi | Jinbeh Lewisville",
    description: "Buttery hamachi with delicate flavor",
    url: "https://jinbeh.com/lewisville/sashimi/yellowtail-sashimi",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sashimi-platter.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Sashimi Yellowtail Sashimi",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/yellowtail-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Yellowtail Sashimi",
  "description": "Buttery hamachi with delicate flavor",
  "offers": {
    "@type": "Offer",
    "price": "15.95",
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
      "name": "How many calories are in Yellowtail Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yellowtail (Hamachi) Sashimi at Jinbeh contains approximately 150 calories per 3-ounce serving with 20 grams of protein and 7 grams of healthy fats."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of Hamachi sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hamachi is rich in omega-3 fatty acids that support heart and brain health, packed with B vitamins and minerals. It's excellent for reducing inflammation and promoting cardiovascular wellness."
      }
    },
    {
      "@type": "Question",
      "name": "Is Yellowtail Sashimi safe to eat raw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our hamachi is premium sushi-grade quality, sourced from trusted suppliers, delivered fresh multiple times weekly, and prepared safely by trained chefs."
      }
    },
    {
      "@type": "Question",
      "name": "How is Yellowtail Sashimi best served?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hamachi's buttery, delicate flavor is best appreciated with a light dip of soy sauce and wasabi. Its subtle sweetness shines when served simply and fresh."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Hamachi in a platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Yellowtail Sashimi is available individually at $15.95 or as part of our Sashimi Deluxe Platter ($32.95) and Chirashi Bowl. Featured in our Omakase selections."
      }
    }
  ]
};


export default function YellowtailSashimiLewisvillePage() {
  const item = getMenuItem("yellowtail-sashimi", "sashimi")!;
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
