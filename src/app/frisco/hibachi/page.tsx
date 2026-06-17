import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryLocationSEO from "@/components/CategoryLocationSEO";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: { absolute: "Best Hibachi Restaurant in Frisco TX | Jinbeh Since 1988" },
  description: "Jinbeh Frisco's hibachi menu features land and ocean teppanyaki entrées plus combo selections, served with soup, salad, steamed rice, shrimp appetizer, and hibachi vegetables. Tableside fire shows, onion volcano, and premium cuts near Stonebriar Centre. Family-owned since 1988.",
  keywords: ["hibachi frisco", "best hibachi frisco", "hibachi menu frisco", "jinbeh hibachi", "japanese hibachi frisco", "hibachi", "teppanyaki", "japanese steakhouse", "hibachi grill"],
  openGraph: {
    title: "Hibachi Menu | Jinbeh Frisco",
    description: "Entertainment, fire show, family fun, onion volcano. Land and ocean teppanyaki entrées plus combo dinners at Jinbeh Frisco.",
    url: "https://jinbeh.com/frisco/hibachi",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Hibachi",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi",
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Hibachi Teppanyaki Dinner Menu - Jinbeh Frisco",
  "description": "Hibachi teppanyaki dinner menu at Jinbeh Japanese Restaurant in Frisco, TX. Each entrée is served with soup, salad, steamed rice, shrimp appetizer, and hibachi vegetables.",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Land Entrées",
      "hasMenuItem": [
        { "@type": "MenuItem", "name": "The Vegetarian", "description": "Zucchini, onions, mushrooms, carrots, and broccoli. Shrimp appetizer may be substituted for fried tofu." },
        { "@type": "MenuItem", "name": "Lemon Sesame Chicken", "description": "Tender chicken breast finished on the teppan with our house lemon-sesame glaze." },
        { "@type": "MenuItem", "name": "N.Y. Strip Steak", "description": "Hand-cut New York strip seared on the teppan grill." },
        { "@type": "MenuItem", "name": "Teriyaki Steak", "description": "Sirloin steak served with our homemade teriyaki sauce." },
        { "@type": "MenuItem", "name": "Filet Mignon", "description": "USDA choice tenderloin, perfectly seared on the teppan grill." },
        { "@type": "MenuItem", "name": "Black Angus Ribeye (10 oz.)", "description": "Marbled 10-ounce Black Angus ribeye with rich, beefy flavor." },
        { "@type": "MenuItem", "name": "Chateaubriand", "description": "10-ounce center cut of tenderloin." }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Ocean Entrées",
      "hasMenuItem": [
        { "@type": "MenuItem", "name": "Yakisoba (Japanese Pasta)", "description": "Egg noodles, shrimp, and calamari cooked with carrots, onions, cabbage, and green onion." },
        { "@type": "MenuItem", "name": "Hibachi Calamari", "description": "Tender calamari grilled on the teppan with hibachi spices." },
        { "@type": "MenuItem", "name": "Hibachi Salmon", "description": "Fresh salmon fillet seared on the teppan grill." },
        { "@type": "MenuItem", "name": "Colossal Shrimp", "description": "Jumbo shrimp grilled on the teppan, flame-kissed to perfection." },
        { "@type": "MenuItem", "name": "Jumbo Scallops", "description": "Plump sea scallops seared with garlic butter." },
        { "@type": "MenuItem", "name": "Grilled Mahi-Mahi", "description": "Mild, sweet mahi-mahi grilled on the teppan." },
        { "@type": "MenuItem", "name": "Twin Lobster Tails", "description": "Two cold-water lobster tails cooked and served on the shells with a side of melted garlic butter." }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Combo Dinner Selection",
      "hasMenuItem": [
        { "@type": "MenuItem", "name": "Jinbeh Double Delight", "description": "Lemon sesame chicken and garlic lemon shrimp. Fried rice included." },
        { "@type": "MenuItem", "name": "Surf N' Turf", "description": "Filet mignon and lobster tail. Fried rice included." },
        { "@type": "MenuItem", "name": "Land and Sea", "description": "Sirloin steak with scallops or shrimp. Fried rice included." },
        { "@type": "MenuItem", "name": "Tokyo Trio", "description": "Filet mignon, lemon sesame chicken, and garlic lemon shrimp. Fried rice included." },
        { "@type": "MenuItem", "name": "Seafood Lover's Combo", "description": "Lobster tail, shrimp, and scallops. Fried rice included." },
        { "@type": "MenuItem", "name": "Imperial Dinner for 2", "description": "California roll, two fried rice, two filet mignon (7 oz. per filet), two lobster tails, and one dessert." }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Children's Dinners",
      "description": "For guests 10 and under.",
      "hasMenuItem": [
        { "@type": "MenuItem", "name": "Children's Hibachi Chicken" },
        { "@type": "MenuItem", "name": "Children's Hibachi Steak" },
        { "@type": "MenuItem", "name": "Children's Hibachi Shrimp" },
        { "@type": "MenuItem", "name": "Children's Hibachi Filet Mignon" }
      ]
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What hibachi does Jinbeh Frisco serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Frisco offers an extensive hibachi teppanyaki menu organized into Land Entrées (filet mignon, N.Y. strip, teriyaki steak, Black Angus ribeye, Chateaubriand, lemon sesame chicken, the vegetarian), Ocean Entrées (twin lobster tails, colossal shrimp, jumbo scallops, hibachi salmon, hibachi calamari, grilled mahi-mahi, yakisoba), and Combo Dinner Selections (Surf N' Turf, Land and Sea, Tokyo Trio, Seafood Lover's Combo, Jinbeh Double Delight, Imperial Dinner for 2). Each entrée is served with soup, salad, steamed rice, shrimp appetizer, and hibachi vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most popular hibachi at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guest favorites include the Filet Mignon, N.Y. Strip Steak, Black Angus Ribeye, Lemon Sesame Chicken, Twin Lobster Tails, and the Imperial Dinner for 2. These are consistently rated as the best hibachi in Frisco."
      }
    },
    {
      "@type": "Question",
      "name": "Are reservations needed for hibachi at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reservations are recommended, especially for hibachi dining. Call (214) 619-1200 or book online. Walk-ins are welcome based on availability."
      }
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh Frisco offer hibachi for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most hibachi items are available for takeout and delivery. Call (214) 619-1200 or order online. Note: The hibachi show experience is dine-in only."
      }
    },
    {
      "@type": "Question",
      "name": "What are hibachi prices at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "View our full hibachi menu for current selections, from chicken and shrimp to filet, lobster, and our Imperial Dinner."
      }
    }
  ]
};

// ---------------------------------------------------------------------------
// Hibachi menu data (sourced from the official Frisco dinner menu PDF, p. 2).
// Per project rule (CLAUDE.md), prices are NEVER displayed on the website —
// the menu PDF is the source of truth for pricing.
// ---------------------------------------------------------------------------
type HibachiMenuItem = { name: string; description?: string };
type HibachiMenuSection = { title: string; subtitle?: string; items: HibachiMenuItem[] };

const hibachiMenu: HibachiMenuSection[] = [
  {
    title: "Land Entrées",
    items: [
      {
        name: "The Vegetarian",
        description:
          "Zucchini, onions, mushrooms, carrots, and broccoli. Shrimp appetizer may be substituted for fried tofu.",
      },
      {
        name: "Lemon Sesame Chicken",
        description:
          "Tender chicken breast finished on the teppan with our house lemon-sesame glaze.",
      },
      {
        name: "N.Y. Strip Steak",
        description: "Hand-cut New York strip seared on the teppan grill.",
      },
      {
        name: "Teriyaki Steak",
        description: "Sirloin steak served with our homemade teriyaki sauce.",
      },
      {
        name: "Filet Mignon",
        description: "USDA choice tenderloin, perfectly seared on the teppan grill.",
      },
      {
        name: "Black Angus Ribeye (10 oz.)",
        description: "Marbled 10-ounce Black Angus ribeye with rich, beefy flavor.",
      },
      {
        name: "Chateaubriand",
        description: "10-ounce center cut of tenderloin.",
      },
    ],
  },
  {
    title: "Ocean Entrées",
    items: [
      {
        name: "Yakisoba (Japanese Pasta)",
        description:
          "Egg noodles, shrimp, and calamari cooked with carrots, onions, cabbage, and green onion.",
      },
      {
        name: "Hibachi Calamari",
        description: "Tender calamari grilled on the teppan with hibachi spices.",
      },
      {
        name: "Hibachi Salmon",
        description: "Fresh salmon fillet seared on the teppan grill.",
      },
      {
        name: "Colossal Shrimp",
        description: "Jumbo shrimp grilled on the teppan, flame-kissed to perfection.",
      },
      {
        name: "Jumbo Scallops",
        description: "Plump sea scallops seared with garlic butter.",
      },
      {
        name: "Grilled Mahi-Mahi",
        description: "Mild, sweet mahi-mahi grilled on the teppan.",
      },
      {
        name: "Twin Lobster Tails",
        description:
          "Two cold-water lobster tails cooked and served on the shells with a side of melted garlic butter.",
      },
    ],
  },
  {
    title: "Combo Dinner Selection",
    items: [
      {
        name: "Jinbeh Double Delight",
        description: "Lemon sesame chicken and garlic lemon shrimp. Fried rice included.",
      },
      {
        name: "Surf N’ Turf",
        description: "Filet mignon and lobster tail. Fried rice included.",
      },
      {
        name: "Land and Sea",
        description: "Sirloin steak with scallops or shrimp. Fried rice included.",
      },
      {
        name: "Tokyo Trio",
        description:
          "Filet mignon, lemon sesame chicken, and garlic lemon shrimp. Fried rice included.",
      },
      {
        name: "Seafood Lover’s Combo",
        description: "Lobster tail, shrimp, and scallops. Fried rice included.",
      },
      {
        name: "Imperial Dinner for 2",
        description:
          "California roll, two fried rice, two filet mignon (7 oz. per filet), two lobster tails, and one dessert.",
      },
    ],
  },
  {
    title: "Children’s Dinners",
    subtitle: "For guests 10 and under.",
    items: [
      { name: "Children’s Hibachi Chicken" },
      { name: "Children’s Hibachi Steak" },
      { name: "Children’s Hibachi Shrimp" },
      { name: "Children’s Hibachi Filet Mignon" },
    ],
  },
];

// Photo gallery — sourced from the C060324 Lewisville hibachi photoshoot
// (already optimized in /public/images/catalog/). The first image is featured
// at 2x size on desktop via the lg:col-span-2 lg:row-span-2 layout.
const hibachiGallery: { src: string; alt: string }[] = [
  {
    src: "/images/catalog/7-C060324-6447.jpg",
    alt: "Teriyaki steak hibachi entrée with fried rice, shrimp, and grilled vegetables on a Jinbeh teppan plate",
  },
  {
    src: "/images/catalog/8-C060324-6462.jpg",
    alt: "Overhead view of a hibachi steak plate with fried rice, bean sprouts, mushrooms, and zucchini at Jinbeh",
  },
  {
    src: "/images/catalog/9-C060324-6484.jpg",
    alt: "Colossal shrimp and jumbo scallops hibachi entrée with fried rice and hibachi vegetables",
  },
  {
    src: "/images/catalog/10-C060324-6501.jpg",
    alt: "Overhead view of a shrimp and scallops hibachi plate with fried rice and bean sprouts",
  },
  {
    src: "/images/catalog/11-C060324-6544.jpg",
    alt: "Imperial Dinner combo with twin lobster tails, chicken, and scallops on the hibachi line",
  },
  {
    src: "/images/catalog/12-C060324-6551.jpg",
    alt: "Overhead view of an Imperial Dinner combo plate with lobster, chicken, and scallops at Jinbeh",
  },
  {
    src: "/images/catalog/13-C060324-6582.jpg",
    alt: "Hibachi family-style spread featuring three combo plates and a specialty sushi roll at Jinbeh Frisco",
  },
  {
    src: "/images/catalog/14-C060324-6596.jpg",
    alt: "Friends sharing hibachi plates and a specialty sushi roll with chopsticks at Jinbeh",
  },
];

export default function HibachiFriscoPage() {
  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Hibachi" }]} />
      </div>
      <main id="main-content" className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Breadcrumb */}
        <nav className="bg-white border-b border-warm-ivory-dark">
          <div className="container mx-auto px-6 py-3">
            <ol className="flex items-center gap-2 text-sm text-charcoal/80">
              <li><Link href="/" className="hover:text-accent-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/frisco" className="hover:text-accent-red">Frisco</Link></li>
              <li>/</li>
              <li><Link href="/frisco/menu" className="hover:text-accent-red">Menu</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Hibachi</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Jinbeh Frisco Menu
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Hibachi Menu, Frisco
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                Entertainment, fire show, family fun, onion volcano. Explore our hibachi menu,
                organized into Land Entr&eacute;es, Ocean Entr&eacute;es, and Combo Dinner Selections,
                each crafted with care and the finest ingredients.
              </p>
              <Link
                href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve Your Table
              </Link>
            </div>
          </div>
        </section>

        {/* Proof Bar — D Magazine recognition + Frisco market context */}
        <section className="bg-soft-gold/10 border-y border-soft-gold/30 py-6">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-center">
              <div className="px-4">
                <div className="text-2xl mb-1">📰</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  Recognized by D Magazine
                </p>
                <p className="text-charcoal/60 text-xs mt-1">Frisco&apos;s &ldquo;Best Place to Eat&rdquo;</p>
              </div>
              <div className="px-4 md:border-x md:border-soft-gold/30">
                <div className="text-2xl mb-1">🏯</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  Family-owned since 1988
                </p>
                <p className="text-charcoal/60 text-xs mt-1">Two generations of regulars</p>
              </div>
              <div className="px-4">
                <div className="text-2xl mb-1">🔥</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  Land &amp; Ocean entr&eacute;es + tableside show
                </p>
                <p className="text-charcoal/60 text-xs mt-1">Onion volcano, knife tricks, flying shrimp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hibachi Menu (bulleted list by category) */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Hibachi &ldquo;Teppanyaki&rdquo; Dinner
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Each entr&eacute;e is served with soup, salad, steamed rice, shrimp appetizer,
                and hibachi vegetables.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              {hibachiMenu.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-4 mb-6">
                    <span aria-hidden="true" className="h-px flex-1 bg-soft-gold/40" />
                    <h3 className="text-xl md:text-2xl font-heading font-bold tracking-wider uppercase text-charcoal">
                      {section.title}
                    </h3>
                    <span aria-hidden="true" className="h-px flex-1 bg-soft-gold/40" />
                  </div>
                  {section.subtitle && (
                    <p className="text-center text-sm text-charcoal/60 -mt-3 mb-6">
                      {section.subtitle}
                    </p>
                  )}
                  <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-charcoal">
                    {section.items.map((item) => (
                      <li key={item.name} className="flex gap-3">
                        <span aria-hidden="true" className="text-soft-gold mt-1.5 flex-shrink-0 leading-none">
                          &#9670;
                        </span>
                        <p className="leading-relaxed">
                          <span className="font-heading font-bold">{item.name}.</span>
                          {item.description ? (
                            <span className="text-charcoal/75"> {item.description}</span>
                          ) : null}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-charcoal/60 text-sm max-w-3xl mx-auto mt-12">
              View the full menu on our{' '}
              <Link href="/frisco/menu" className="text-accent-red hover:underline font-medium">
                Frisco menu page
              </Link>
              {' '}or explore by category: {' '}
              <Link href="/frisco/sushi-rolls" className="text-accent-red hover:underline">sushi rolls</Link>
              {', '}
              <Link href="/frisco/sashimi" className="text-accent-red hover:underline">sashimi</Link>
              {', '}
              <Link href="/frisco/appetizers" className="text-accent-red hover:underline">appetizers</Link>
              {', '}
              <Link href="/frisco/cocktails" className="text-accent-red hover:underline">cocktails &amp; sake</Link>.
            </p>
          </div>
        </section>

        {/* Hibachi Plates Photo Gallery */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-2 text-sm">
                Photo Gallery
              </p>
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Hibachi Plates at Jinbeh Frisco
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Steam, fire, and a plate built around your protein. A taste of what
                lands in front of you when you sit at the teppan grill.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {hibachiGallery.map((img, i) => (
                <figure
                  key={img.src}
                  className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-md bg-charcoal/5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Experience Our Hibachi
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                The heart of Frisco's restaurant scene. Ample parking in the shopping center lot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US" target="_blank" rel="noopener noreferrer"
                  className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl shadow-lg transition-colors"
                >
                  Reserve a Table
                </Link>
                <a
                  href="tel:2146191200"
                  className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Call (214) 619-1200
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                Hibachi FAQ
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What hibachi does Jinbeh Frisco serve?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Jinbeh Frisco offers an extensive hibachi menu with 14 options including favorites like Filet Mignon, NY Strip Steak, Ribeye Steak, and more. All prepared fresh by our skilled chefs.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are the most popular hibachi at Jinbeh?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Guest favorites include Filet Mignon, NY Strip Steak, Ribeye Steak, Chicken Teriyaki. These are consistently rated as the best hibachi in Frisco.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Are reservations needed for hibachi at Jinbeh Frisco?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Reservations are recommended, especially for hibachi dining. Call (214) 619-1200 or book online. Walk-ins are welcome based on availability.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Does Jinbeh Frisco offer hibachi for takeout?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Yes! Most hibachi items are available for takeout and delivery. Call (214) 619-1200 or order online. Note: The hibachi show experience is dine-in only.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are hibachi prices at Jinbeh Frisco?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    View our full hibachi menu for current selections, from chicken and shrimp to filet, lobster, and our Imperial Dinner.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              Explore More at Jinbeh Frisco
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">

              <Link
                href="/frisco/sushi-rolls"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🍣</span>
                <h3 className="font-heading font-bold text-charcoal">Sushi Rolls</h3>
              </Link>
              <Link
                href="/frisco/sashimi"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🐟</span>
                <h3 className="font-heading font-bold text-charcoal">Sashimi</h3>
              </Link>
              <Link
                href="/frisco/appetizers"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🥢</span>
                <h3 className="font-heading font-bold text-charcoal">Appetizers</h3>
              </Link>
              <Link
                href="/frisco/cocktails"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🍶</span>
                <h3 className="font-heading font-bold text-charcoal">Cocktails & Sake</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Jinbeh — location + category SEO */}
        <CategoryLocationSEO locationId="frisco" category="hibachi" />

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also serving hibachi at our{' '}
              <Link
                href="/lewisville/hibachi"
                className="text-soft-gold hover:underline"
              >
                Lewisville location
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
