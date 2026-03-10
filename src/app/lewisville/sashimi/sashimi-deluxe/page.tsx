import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Sashimi Deluxe Platter Lewisville | Premium Fish Assortment",
  description: "Chef's premium sashimi selection with tuna, salmon, yellowtail at Jinbeh Lewisville. 329 calories, 36g protein, omega-3 rich.",
  keywords: ["sashimi platter lewisville","sashimi deluxe platter","assorted sashimi","chef selection sashimi","premium raw fish lewisville","sashimi near me lewisville","best sushi lewisville tx"],
  openGraph: {
    title: "Sashimi Deluxe Platter | Jinbeh Lewisville",
    description: "Chef\'s selection of premium fish",
    url: "https://jinbeh.com/lewisville/sashimi/sashimi-deluxe",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/sashimi-deluxe",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Sashimi Deluxe Platter",
  "description": "Chef's selection of premium fish",
  "offers": {
    "@type": "Offer",
    "price": "32.95",
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
      "name": "How many calories in Sashimi Deluxe Platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sashimi Deluxe Platter at Jinbeh contains approximately 329 calories with 36 grams of protein, 20 grams of healthy fats, and zero carbohydrates."
      }
    },
    {
      "@type": "Question",
      "name": "What fish varieties are in the Deluxe Platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chef's selection typically includes premium cuts of tuna (maguro), salmon (sake), yellowtail (hamachi), and rotating seasonal selections. All are sushi-grade quality sourced fresh."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of this sashimi platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The variety ensures diverse omega-3 fatty acids, complete proteins, B vitamins, selenium, and iodine. Perfect for heart health, muscle repair, and anti-inflammatory benefits."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to eat the Deluxe Platter raw fish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! All our fish is premium sushi-grade, sourced from trusted suppliers, delivered fresh multiple times weekly, properly stored, and prepared by trained chefs."
      }
    },
    {
      "@type": "Question",
      "name": "What makes this platter 'deluxe'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Sashimi Deluxe at $32.95 features chef's premium selections of the highest-quality fish cuts, generous portions, and seasonal variety. Perfect for experiencing premium sashimi."
      }
    }
  ]
};


export default function SashimiDeluxeLewisvillePage() {
  const item = getMenuItem("sashimi-deluxe", "sashimi")!;
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
