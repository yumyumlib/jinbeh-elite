import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hibachi Menu | Jinbeh Frisco Japanese Restaurant",
  description: "Explore Jinbeh Frisco's hibachi menu. Entertainment, fire show, family fun, onion volcano. 14 delicious options from Filet Mignon to Imperial Dinner. Near Stonebriar Centre, minutes from Legacy West.",
  keywords: ["hibachi frisco","best hibachi frisco","hibachi menu frisco","jinbeh hibachi","japanese hibachi frisco","hibachi","teppanyaki","japanese steakhouse","hibachi grill"],
  openGraph: {
    title: "Hibachi Menu | Jinbeh Frisco",
    description: "Entertainment, fire show, family fun, onion volcano. 14 hibachi options at Jinbeh Frisco.",
    url: "https://jinbeh.com/frisco/hibachi",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi",
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Hibachi Menu - Jinbeh Frisco",
  "description": "Hibachi menu at Jinbeh Japanese Restaurant in Frisco, TX",
  "hasMenuSection": {
    "@type": "MenuSection",
    "name": "Hibachi",
    "hasMenuItem": [
      {
        "@type": "MenuItem",
        "name": "Filet Mignon",
        "description": "Premium beef tenderloin, perfectly seared on the teppan grill",
        "offers": {
          "@type": "Offer",
          "price": "34.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "NY Strip Steak",
        "description": "Hand-cut New York strip with savory soy glaze",
        "offers": {
          "@type": "Offer",
          "price": "32.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Ribeye Steak",
        "description": "Marbled ribeye with rich, beefy flavor",
        "offers": {
          "@type": "Offer",
          "price": "35.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Chicken Teriyaki",
        "description": "Tender chicken breast with house teriyaki glaze",
        "offers": {
          "@type": "Offer",
          "price": "24.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Jumbo Shrimp",
        "description": "Succulent jumbo shrimp, flame-kissed to perfection",
        "offers": {
          "@type": "Offer",
          "price": "28.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Sea Scallops",
        "description": "Plump sea scallops seared with garlic butter",
        "offers": {
          "@type": "Offer",
          "price": "32.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Lobster Tail",
        "description": "Sweet Maine lobster tail, butter-grilled",
        "offers": {
          "@type": "Offer",
          "price": "44.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Hibachi Salmon",
        "description": "Fresh Atlantic salmon with citrus teriyaki",
        "offers": {
          "@type": "Offer",
          "price": "28.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Vegetable & Tofu",
        "description": "Fresh seasonal vegetables with crispy tofu",
        "offers": {
          "@type": "Offer",
          "price": "19.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Steak & Shrimp Combo",
        "description": "Filet mignon paired with jumbo shrimp",
        "offers": {
          "@type": "Offer",
          "price": "38.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Steak & Chicken Combo",
        "description": "Filet mignon with chicken teriyaki",
        "offers": {
          "@type": "Offer",
          "price": "36.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Steak & Lobster Combo",
        "description": "Surf and turf perfection",
        "offers": {
          "@type": "Offer",
          "price": "54.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Seafood Trio",
        "description": "Shrimp, scallops, and lobster",
        "offers": {
          "@type": "Offer",
          "price": "52.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Imperial Dinner",
        "description": "Filet mignon, lobster tail, and shrimp",
        "offers": {
          "@type": "Offer",
          "price": "64.95",
          "priceCurrency": "USD"
        }
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
      "name": "What hibachi does Jinbeh Frisco serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Frisco offers an extensive hibachi menu with 14 options including favorites like Filet Mignon, NY Strip Steak, Ribeye Steak, and more. All prepared fresh by our skilled chefs."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most popular hibachi at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guest favorites include Filet Mignon ($34.95), NY Strip Steak ($32.95), Ribeye Steak ($35.95), Chicken Teriyaki ($24.95). These are consistently rated as the best hibachi in Frisco."
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
        "text": "Hibachi prices range from 19.95 to 64.95. See our full menu for complete pricing."
      }
    }
  ]
};

export default function HibachiFriscoPage() {
  return (
    <>
      <Header location="frisco" />
      <main className="min-h-screen bg-warm-ivory">
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
                Hibachi
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                Entertainment, fire show, family fun, onion volcano. Explore our 14 hibachi options,
                each crafted with care and the finest ingredients.
              </p>
              <Link
                href="/frisco#reserve"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve Your Table
              </Link>
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
                14 options ranging from 19.95 to 64.95
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link
                href="/frisco/hibachi/filet-mignon"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Filet Mignon
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Premium beef tenderloin, perfectly seared on the teppan grill
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$34.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/ny-strip"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    NY Strip Steak
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Hand-cut New York strip with savory soy glaze
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$32.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/ribeye"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Ribeye Steak
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Marbled ribeye with rich, beefy flavor
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$35.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/chicken-teriyaki"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Chicken Teriyaki
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Tender chicken breast with house teriyaki glaze
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$24.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/shrimp"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Jumbo Shrimp
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Succulent jumbo shrimp, flame-kissed to perfection
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$28.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/scallops"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Sea Scallops
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Plump sea scallops seared with garlic butter
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$32.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/lobster-tail"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Lobster Tail
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Sweet Maine lobster tail, butter-grilled
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$44.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/salmon"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Hibachi Salmon
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Fresh Atlantic salmon with citrus teriyaki
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$28.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/vegetable-tofu"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Vegetable & Tofu
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Fresh seasonal vegetables with crispy tofu
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$19.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/combo-steak-shrimp"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Steak & Shrimp Combo
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Filet mignon paired with jumbo shrimp
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$38.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/combo-steak-chicken"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Steak & Chicken Combo
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Filet mignon with chicken teriyaki
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$36.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/combo-steak-lobster"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Steak & Lobster Combo
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Surf and turf perfection
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$54.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/combo-seafood"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Seafood Trio
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Shrimp, scallops, and lobster
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$52.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/hibachi/imperial-dinner"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Imperial Dinner
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Filet mignon, lobster tail, and shrimp
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="hidden">$64.95</span>
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
                The heart of Frisco's restaurant scene. Ample parking in the shopping center lot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/frisco#reserve"
                  className="bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Reserve a Table
                </Link>
                <a
                  href="tel:2146191200"
                  className="bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl transition-colors"
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
                    Guest favorites include Filet Mignon (\$34.95), NY Strip Steak (\$32.95), Ribeye Steak (\$35.95), Chicken Teriyaki (\$24.95). These are consistently rated as the best hibachi in Frisco.
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
                    Hibachi prices range from 19.95 to 64.95. See our full menu for complete pricing.
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
