import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Vegetable & Tofu Hibachi Frisco | Vegan Teppanyaki Option",
  description: "Fresh seasonal vegetables with crispy tofu. 180-220 calories, high protein plant-based. Vegan-friendly hibachi. Includes soup, salad, rice, grilled vegetables. Jinbeh Frisco.",
  keywords: ["vegetarian hibachi frisco","tofu teppanyaki dinner","vegetable hibachi near me","plant based japanese restaurant","vegan hibachi options frisco","japanese steakhouse frisco","hibachi near me frisco"],
  openGraph: {
    title: "Vegetable & Tofu | Jinbeh Frisco",
    description: "Fresh seasonal vegetables with crispy tofu",
    url: "https://jinbeh.com/frisco/hibachi/vegetable-tofu",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi Vegetable Tofu",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/vegetable-tofu",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Vegetable & Tofu",
  "description": "Fresh seasonal vegetables with crispy tofu",
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
      "name": "How many calories in hibachi Vegetable & Tofu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vegetable & Tofu contains approximately 180-220 calories with 14-18g plant-based protein from crispy tofu and vegetables. The complete hibachi dinner totals 550-700 calories. It's the most affordable hibachi option at."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vegetable & Tofu vegan and plant-based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Vegetable & Tofu is completely vegan and plant-based. Crispy tofu provides complete protein with all essential amino acids. Ask about vegetable broth for soup and oil usage to ensure 100% vegan preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What vegetables are included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your plate features seasonal fresh vegetables including zucchini, onions, mushrooms, broccoli, cabbage, and more depending on season. Crispy tofu cubes grilled on teppan, plus Japanese onion soup, salad, and fried rice."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize the vegetables or skip rice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Request additional vegetables instead of fried rice for a lower-carb option. Choose specific vegetables you prefer. Our chefs will customize your plate with extra grilled vegetables and tofu."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vegetable & Tofu good for weight loss diets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! At only 180-220 calories with 14-18g protein and high fiber from vegetables, it's excellent for weight management. Request light oil, skip fried rice, and ask for extra grilled vegetables for an optimal low-calorie meal."
      }
    }
  ]
};

export default function VegetableTofuFriscoPage() {
  const item = { ...getMenuItem("vegetable-tofu", "hibachi")!, jinbehStory: "Jinbeh\'s hibachi is naturally friendly to plant-based diets. Gluten-free is easy, only the sauces contain gluten, not the base ingredients. Fried rice can be made gluten-free on request. Our chefs handle allergy situations carefully at 550°F grill temperatures." };
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi", href: "/frisco/hibachi" }, { label: "Vegetable Tofu" }]} />
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
