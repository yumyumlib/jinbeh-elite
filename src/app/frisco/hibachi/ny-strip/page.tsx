import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "NY Strip Steak Hibachi Frisco | Best Japanese Steakhouse",
  description: "Premium hand-cut NY Strip grilled tableside. 250-300 calories per 5oz. Includes soup, salad, rice, vegetables. Best hibachi near Frisco TX.",
  keywords: ["ny strip hibachi frisco","new york strip teppanyaki","hibachi steak frisco tx","japanese steakhouse steak dinner","best hibachi near me frisco","teppanyaki restaurant frisco","hibachi near me frisco"],
  openGraph: {
    title: "NY Strip Steak | Jinbeh Frisco",
    description: "Hand-cut New York strip with savory soy glaze",
    url: "https://jinbeh.com/frisco/hibachi/ny-strip",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Ny Strip",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/ny-strip",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "NY Strip Steak",
  "description": "Hand-cut New York strip with savory soy glaze",
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
      "name": "How many calories in hibachi NY Strip Steak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 5oz NY Strip Steak serving contains approximately 250-300 calories with 28-32g protein and 12-15g fat. The complete hibachi dinner including soup, salad, fried rice, and vegetables totals 700-850 calories. NY Strip is leaner than ribeye but more flavorful than filet mignon."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi NY Strip healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! NY Strip is an excellent choice for health-conscious diners. It's high in protein (28-32g), rich in iron, zinc, and B vitamins. Request minimal butter to keep additional calories under control. The grilled vegetables add fiber and antioxidants for balance."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with NY Strip hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your NY Strip hibachi dinner includes Japanese onion soup, house salad with ginger dressing, perfectly seared NY Strip, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of yum yum sauce or mustard sauce."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between NY Strip and filet mignon hibachi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NY Strip has more marbling and flavor than filet mignon but is less tender. It's more affordable at vs. NY Strip contains more flavorful fat and is preferred by those who love rich beef taste. Both are premium cuts cooked tableside."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize my NY Strip hibachi order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Request your steak cooked to your preferred doneness. You can ask for minimal butter, extra vegetables, or sauce on the side. Our chefs accommodate dietary preferences while maintaining the theatrical hibachi experience."
      }
    }
  ]
};

export default function NyStripFriscoPage() {
  const item = { ...getMenuItem("ny-strip", "hibachi")!, jinbehStory: "When a customer orders steak at the hibachi, our chefs receive the temperature preference directly, using a numbered doneness system from 1 through 8. The grills reach 550°F, ensuring a perfect sear every time." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Ny Strip" }]} />
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
      <PageSeoBoost route="/frisco/hibachi/ny-strip" />
      <Footer />
    </>
  );
}
