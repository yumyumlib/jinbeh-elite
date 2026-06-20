import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryLocationSEO from "@/components/CategoryLocationSEO";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: { absolute: "Best Hibachi in Lewisville TX | Jinbeh Japanese Restaurant" },
  description: "Jinbeh Lewisville's hibachi menu, 14 teppanyaki entrées with tableside fire shows, onion volcano, and premium cuts. Near Vista Ridge Mall. Since 1988.",
  keywords: ["hibachi lewisville", "best hibachi lewisville", "hibachi menu lewisville", "jinbeh hibachi", "japanese hibachi lewisville", "hibachi", "teppanyaki", "japanese steakhouse", "hibachi grill"],
  openGraph: {
    title: "Hibachi Menu | Jinbeh Lewisville",
    description: "Entertainment, fire show, family fun, onion volcano. 14 hibachi options at Jinbeh Lewisville.",
    url: "https://jinbeh.com/lewisville/hibachi",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/hibachi-steak.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Hibachi",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi",
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Hibachi Menu - Jinbeh Lewisville",
  "description": "Hibachi menu at Jinbeh Japanese Restaurant in Lewisville, TX",
  "hasMenuSection": {
    "@type": "MenuSection",
    "name": "Hibachi",
    "hasMenuItem": [
      {
        "@type": "MenuItem",
        "name": "Filet Mignon",
        "description": "Premium beef tenderloin, perfectly seared on the teppan grill",
      },
      {
        "@type": "MenuItem",
        "name": "NY Strip Steak",
        "description": "Hand-cut New York strip with savory soy glaze",
      },
      {
        "@type": "MenuItem",
        "name": "Ribeye Steak",
        "description": "Marbled ribeye with rich, beefy flavor",
      },
      {
        "@type": "MenuItem",
        "name": "Chicken Teriyaki",
        "description": "Tender chicken breast with house teriyaki glaze",
      },
      {
        "@type": "MenuItem",
        "name": "Jumbo Shrimp",
        "description": "Succulent jumbo shrimp, flame-kissed to perfection",
      },
      {
        "@type": "MenuItem",
        "name": "Sea Scallops",
        "description": "Plump sea scallops seared with garlic butter",
      },
      {
        "@type": "MenuItem",
        "name": "Lobster Tail",
        "description": "Sweet Maine lobster tail, butter-grilled",
      },
      {
        "@type": "MenuItem",
        "name": "Hibachi Salmon",
        "description": "Fresh Atlantic salmon with citrus teriyaki",
      },
      {
        "@type": "MenuItem",
        "name": "Vegetable & Tofu",
        "description": "Fresh seasonal vegetables with crispy tofu",
      },
      {
        "@type": "MenuItem",
        "name": "Steak & Shrimp Combo",
        "description": "Filet mignon paired with jumbo shrimp",
      },
      {
        "@type": "MenuItem",
        "name": "Steak & Chicken Combo",
        "description": "Filet mignon with chicken teriyaki",
      },
      {
        "@type": "MenuItem",
        "name": "Steak & Lobster Combo",
        "description": "Surf and turf perfection",
      },
      {
        "@type": "MenuItem",
        "name": "Seafood Trio",
        "description": "Shrimp, scallops, and lobster",
      },
      {
        "@type": "MenuItem",
        "name": "Imperial Dinner",
        "description": "Filet mignon, lobster tail, and shrimp",
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What hibachi does Jinbeh Lewisville serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Lewisville offers an extensive hibachi menu with 14 options including favorites like Filet Mignon, NY Strip Steak, Ribeye Steak, and more. All prepared fresh by our skilled chefs."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most popular hibachi at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guest favorites include Filet Mignon, NY Strip Steak, Ribeye Steak, Chicken Teriyaki. These are consistently rated as the best hibachi in Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Are reservations needed for hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reservations are recommended, especially for hibachi dining. Call (214) 488-2224 or book online. Walk-ins are welcome based on availability."
      }
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh Lewisville offer hibachi for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most hibachi items are available for takeout and delivery. Call (214) 488-2224 or order online. Note: The hibachi show experience is dine-in only."
      }
    },
    {
      "@type": "Question",
      "name": "What are hibachi prices at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "View our full hibachi menu for current selections, from chicken and shrimp to filet, lobster, and our Imperial Dinner."
      }
    }
  ]
};

export default function HibachiLewisvillePage() {
  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Hibachi" }]} />
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
              <li><Link href="/lewisville" className="hover:text-accent-red">Lewisville</Link></li>
              <li>/</li>
              <li><Link href="/lewisville/menu" className="hover:text-accent-red">Menu</Link></li>
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
                Jinbeh Lewisville Menu
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Hibachi Menu, Lewisville
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                Entertainment, fire show, family fun, onion volcano. Explore our 14 hibachi options,
                each crafted with care and the finest ingredients.
              </p>
              <Link
                href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve Your Table
              </Link>
            </div>
          </div>
        </section>

        {/* Proof Bar — third-party rankings and verified diner data */}
        <section className="bg-soft-gold/10 border-y border-soft-gold/30 py-6">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-center">
              <div className="px-4">
                <div className="text-2xl mb-1">🏆</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  Ranked #1 Best Hibachi in Lewisville
                </p>
                <p className="text-charcoal/60 text-xs mt-1">on OpenTable</p>
              </div>
              <div className="px-4 md:border-x md:border-soft-gold/30">
                <div className="text-2xl mb-1">⭐</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  4.7-star average across 427+ reviews
                </p>
                <p className="text-charcoal/60 text-xs mt-1">verified OpenTable diners</p>
              </div>
              <div className="px-4">
                <div className="text-2xl mb-1">🥢</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  5 Diners&apos; Choice awards
                </p>
                <p className="text-charcoal/60 text-xs mt-1">Dallas Suburbs region</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Our Hibachi Selection
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                14 hibachi entrées, from chicken and shrimp to filet, lobster, and our Imperial Dinner
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link
                href="/lewisville/hibachi/filet-mignon"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photoshoot/hibachi-steak.jpg"
                    alt="Filet mignon searing on the teppan grill at Jinbeh Lewisville"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Filet Mignon
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Premium beef tenderloin, perfectly seared on the teppan grill
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/ny-strip"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/instagram/hibachi-steak-plate.jpg"
                    alt="NY strip steak cooking on the hibachi grill"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    NY Strip Steak
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Hand-cut New York strip with savory soy glaze
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/ribeye"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/food/HibachiComboNYStripAndColossalShrimp.jpg"
                    alt="Marbled ribeye steak seared on the teppan grill at Jinbeh Lewisville"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Ribeye Steak
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Marbled ribeye with rich, beefy flavor
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/chicken-teriyaki"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photoshoot/hibachi-chicken.jpg"
                    alt="Hibachi chicken teriyaki with fried rice and vegetables"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Chicken Teriyaki
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Tender chicken breast with house teriyaki glaze
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/shrimp"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photoshoot/hibachi-plate-shrimp.jpg"
                    alt="Jumbo shrimp grilled on the hibachi at Jinbeh Lewisville"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Jumbo Shrimp
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Succulent jumbo shrimp, flame-kissed to perfection
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/scallops"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/hq/cooking-on-grill.jpg"
                    alt="Sea scallops seared with garlic butter on the hibachi grill"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Sea Scallops
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Plump sea scallops seared with garlic butter
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/lobster-tail"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/instagram/lobster-spread-overhead.jpg"
                    alt="Lobster tail grilling on the teppan at Jinbeh Lewisville"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Lobster Tail
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Sweet Maine lobster tail, butter-grilled
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/salmon"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/food/SmokedSalmonCloseup.jpg"
                    alt="Hibachi salmon with citrus teriyaki on the grill"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Hibachi Salmon
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Fresh Atlantic salmon with citrus teriyaki
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/vegetable-tofu"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Vegetable_Tempura.jpg"
                    alt="Hibachi vegetables and tofu grilled on the teppan"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Vegetable & Tofu
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Fresh seasonal vegetables with crispy tofu
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/combo-steak-shrimp"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/hq/garlic-lemon-shrimp.jpg"
                    alt="Steak and shrimp combo on the hibachi"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Steak & Shrimp Combo
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Filet mignon paired with jumbo shrimp
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/combo-steak-chicken"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photoshoot/hibachi-flame-action.jpg"
                    alt="Steak and chicken combo on the teppan grill"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Steak & Chicken Combo
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Filet mignon with chicken teriyaki
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/combo-steak-lobster"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Crunchy_Lobster.jpg"
                    alt="Chef cooking steak and lobster on the hibachi grill"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Steak & Lobster Combo
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Surf and turf perfection
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/combo-seafood"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Sea_Lovers_Paradise.jpg"
                    alt="Seafood trio flame show at Jinbeh Lewisville"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Seafood Trio
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Shrimp, scallops, and lobster
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/hibachi/imperial-dinner"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photoshoot/hibachi-onion-volcano-flame.jpg"
                    alt="Imperial dinner preparation, filet mignon, lobster, and shrimp"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Imperial Dinner
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Filet mignon, lobster tail, and shrimp
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
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
                Lewisville's go-to for Japanese cuisine. Convenient strip mall parking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US" target="_blank" rel="noopener noreferrer"
                  className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl shadow-lg transition-colors"
                >
                  Reserve a Table
                </Link>
                <a
                  href="tel:2144882224"
                  className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Call (214) 488-2224
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
                    <h3 className="font-medium text-charcoal pr-4">What hibachi does Jinbeh Lewisville serve?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Jinbeh Lewisville offers an extensive hibachi menu with 14 options including favorites like Filet Mignon, NY Strip Steak, Ribeye Steak, and more. All prepared fresh by our skilled chefs.
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
                    Guest favorites include Filet Mignon, NY Strip Steak, Ribeye Steak, Chicken Teriyaki. These are consistently rated as the best hibachi in Lewisville.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Are reservations needed for hibachi at Jinbeh Lewisville?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Reservations are recommended, especially for hibachi dining. Call (214) 488-2224 or book online. Walk-ins are welcome based on availability.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Does Jinbeh Lewisville offer hibachi for takeout?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Yes! Most hibachi items are available for takeout and delivery. Call (214) 488-2224 or order online. Note: The hibachi show experience is dine-in only.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are hibachi prices at Jinbeh Lewisville?</h3>
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
              Explore More at Jinbeh Lewisville
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">

              <Link
                href="/lewisville/sushi-rolls"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🍣</span>
                <h3 className="font-heading font-bold text-charcoal">Sushi Rolls</h3>
              </Link>
              <Link
                href="/lewisville/sashimi"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🐟</span>
                <h3 className="font-heading font-bold text-charcoal">Sashimi</h3>
              </Link>
              <Link
                href="/lewisville/appetizers"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🥢</span>
                <h3 className="font-heading font-bold text-charcoal">Appetizers</h3>
              </Link>
              <Link
                href="/lewisville/cocktails"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🍶</span>
                <h3 className="font-heading font-bold text-charcoal">Cocktails & Sake</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Jinbeh — location + category SEO */}
        <CategoryLocationSEO locationId="lewisville" category="hibachi" />

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also serving hibachi at our{' '}
              <Link
                href="/frisco/hibachi"
                className="text-soft-gold hover:underline"
              >
                Frisco location
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
