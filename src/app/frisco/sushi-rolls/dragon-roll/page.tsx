import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

export const metadata: Metadata = {
  title: "Dragon Roll Sushi | Best Specialty Rolls Frisco TX | Jinbeh",
  description: "Dragon Roll: eel, cucumber, avocado with eel sauce. 410-500 calories. Fresh sushi made to order at Jinbeh Frisco. Reserve or order takeout today!",
  keywords: ["dragon roll sushi frisco","dragon roll sushi","eel avocado roll","unagi sushi roll","specialty sushi rolls frisco tx","sushi near me frisco","best sushi frisco tx"],
  openGraph: {
    title: "Dragon Roll | Jinbeh Frisco",
    description: "Eel and cucumber topped with avocado and eel sauce",
    url: "https://jinbeh.com/frisco/sushi-rolls/dragon-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/dragon-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Dragon Roll",
  "description": "Eel and cucumber topped with avocado and eel sauce",
  "offers": {
    "@type": "Offer",
    "price": "16.95",
    "priceCurrency": "USD"
  },
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "410-500 calories",
    "proteinContent": "15g",
    "fatContent": "20g",
    "carbohydrateContent": "45g"
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
      "name": "How many calories are in a dragon roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dragon roll typically contains 410-500 calories per roll, with approximately 20g of fat, 45g of carbs, and 15g of protein. The calories come primarily from the eel, avocado, and eel sauce. It's one of the richer sushi rolls due to the creamy avocado and sweet eel sauce."
      }
    },
    {
      "@type": "Question",
      "name": "What is in a dragon roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dragon roll contains grilled freshwater eel (unagi) and cucumber inside, topped with thin slices of avocado arranged to look like dragon scales. It's finished with sweet eel sauce (unagi sauce) and sesame seeds. At Jinbeh, we use premium eel imported from Japan."
      }
    },
    {
      "@type": "Question",
      "name": "Is dragon roll healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dragon roll is moderately healthy. The avocado provides heart-healthy fats and the eel offers omega-3s and protein. However, the eel sauce is high in sugar and sodium. For a healthier option, ask for sauce on the side. Compared to fried rolls, dragon roll is a better choice."
      }
    },
    {
      "@type": "Question",
      "name": "Is dragon roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional dragon roll is NOT gluten-free. The eel sauce contains soy sauce (which has wheat) and the eel may be glazed with wheat-based ingredients. Ask our chefs about gluten-free alternatives using tamari sauce."
      }
    },
    {
      "@type": "Question",
      "name": "What does dragon roll taste like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dragon roll has a sweet, savory, and slightly smoky flavor. The grilled eel is tender with a caramelized edge from the sauce. The avocado adds creaminess while the cucumber provides a fresh crunch. It's perfect for those who enjoy rich, flavorful sushi."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order dragon roll for takeout at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Dragon Roll is available for takeout. Call (214) 619-1200 to order. For the freshest experience, we recommend dining at our sushi bar where you can watch our chefs prepare your roll to order."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Frisco", "item": "https://jinbeh.com/frisco" },
    { "@type": "ListItem", "position": 3, "name": "Menu", "item": "https://jinbeh.com/frisco/menu" },
    { "@type": "ListItem", "position": 4, "name": "Sushi Rolls", "item": "https://jinbeh.com/frisco/sushi-rolls" },
    { "@type": "ListItem", "position": 5, "name": "Dragon Roll" },
  ],
};


export default function DragonRollFriscoPage() {
  const item = getMenuItem("dragon-roll", "sushi-rolls")!;
  const location = locations["frisco"];

  return (
    <>
      <Header location="frisco" />
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
