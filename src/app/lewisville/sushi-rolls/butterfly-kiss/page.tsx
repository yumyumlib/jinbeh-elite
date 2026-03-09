import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Butterfly Kiss Sushi Roll Lewisville | House Specialty",
  description: "Butterfly Kiss Roll at Jinbeh Lewisville: Salmon, mango, crab, sriracha. House specialty with ponzu and jalapeño. Call (972) 221-3888.",
  keywords: ["butterfly kiss","butterfly kiss lewisville","sushi near me lewisville","best sushi lewisville tx","sushi rolls lewisville","house specialty","jinbeh butterfly kiss"],
  openGraph: {
    title: "Butterfly Kiss Roll | Jinbeh Lewisville",
    description: "House specialty with cream cheese and crab",
    url: "https://jinbeh.com/lewisville/sushi-rolls/butterfly-kiss",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/butterfly-kiss",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Butterfly Kiss Roll",
  "description": "House specialty with cream cheese and crab",
  "offers": {
    "@type": "Offer",
    "price": "18.95",
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
      "name": "What's in Butterfly Kiss Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Butterfly Kiss is our house specialty featuring salmon, mango, crab mix, ponzu, jalapeño, and sriracha. It combines sweet mango with spicy sriracha heat and fresh salmon for a unique flavor."
      }
    },
    {
      "@type": "Question",
      "name": "How spicy is Butterfly Kiss Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Butterfly Kiss has a moderate spice level from the sriracha and fresh jalapeño. If you prefer milder or extra spicy, our chefs can customize it to your taste."
      }
    },
    {
      "@type": "Question",
      "name": "Is Butterfly Kiss Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Butterfly Kiss may contain gluten in sriracha and soy sauce. Request tamari and verify sriracha ingredients with your server for a gluten-free option."
      }
    },
    {
      "@type": "Question",
      "name": "What makes it a house specialty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Butterfly Kiss Roll is crafted with a unique blend of salmon, mango, and house-made ponzu sauce. It's a favorite among our regular guests and showcases our chefs' creativity."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Butterfly Kiss Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Butterfly Kiss Roll is available for takeout and delivery. For the best presentation, we recommend dining in at our sushi bar. Call (972) 221-3888 to order."
      }
    }
  ]
};


export default function ButterflyKissLewisvillePage() {
  const item = getMenuItem("butterfly-kiss", "sushi-rolls")!;
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
