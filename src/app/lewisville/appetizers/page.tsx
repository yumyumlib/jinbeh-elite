import type { Metadata } from "next";
import ReserveLink from "@/components/ReserveLink";
import PageSeoBoost from "@/components/PageSeoBoost";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryLocationSEO from "@/components/CategoryLocationSEO";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Appetizers Menu | Jinbeh Lewisville Japanese Restaurant",
  description: "Browse Jinbeh Lewisville's appetizer menu: crispy gyoza, edamame, tempura, seared tuna, soft shell crab, and tuna tartare. Perfect starters for your.",
  keywords: ["appetizers lewisville", "best appetizers lewisville", "appetizers menu lewisville", "jinbeh appetizers", "japanese appetizers lewisville", "japanese appetizers", "starters", "small plates"],
  openGraph: {
    title: "Appetizers Menu | Jinbeh Lewisville",
    description: "Shareability, group dining, perfect starters. 6 appetizers options at Jinbeh Lewisville.",
    url: "https://jinbeh.com/lewisville/appetizers",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/appetizers-spread.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Appetizers",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/appetizers",
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Appetizers Menu - Jinbeh Lewisville",
  "description": "Appetizers menu at Jinbeh Japanese Restaurant in Lewisville, TX",
  "hasMenuSection": {
    "@type": "MenuSection",
    "name": "Appetizers",
    "hasMenuItem": [
      {
        "@type": "MenuItem",
        "name": "Edamame",
        "description": "Steamed soybeans with sea salt",
      },
      {
        "@type": "MenuItem",
        "name": "Gyoza",
        "description": "Pan-fried pork dumplings with dipping sauce",
      },
      {
        "@type": "MenuItem",
        "name": "Shrimp Tempura",
        "description": "Light and crispy fried shrimp",
      },
      {
        "@type": "MenuItem",
        "name": "Soft Shell Crab",
        "description": "Crispy fried soft shell crab",
      },
      {
        "@type": "MenuItem",
        "name": "Tuna Tartare",
        "description": "Diced ahi tuna with avocado and ponzu",
      },
      {
        "@type": "MenuItem",
        "name": "Seared Ahi Tuna",
        "description": "Pepper-crusted ahi with wasabi aioli",
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
      "name": "What appetizers does Jinbeh Lewisville serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Lewisville offers an extensive appetizers menu with 6 options including favorites like Edamame, Gyoza, Shrimp Tempura, and more. All prepared fresh by our skilled chefs."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most popular appetizers at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guest favorites include Edamame, Gyoza, Shrimp Tempura, Soft Shell Crab. These are consistently rated as the best appetizers in Lewisville."
      }
    },
    {
      "@type": "Question",
      "name": "Are reservations needed for appetizers at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reservations are recommended, especially for dinner. Call (214) 488-2224 or book online. Walk-ins are welcome based on availability."
      }
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh Lewisville offer appetizers for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most appetizers items are available for takeout and delivery. Call (214) 488-2224 or order online. "
      }
    },
    {
      "@type": "Question",
      "name": "What are appetizers prices at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is listed on our current menu. Browse the full menu for details."
      }
    }
  ]
};

export default function AppetizersLewisvillePage() {
  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Appetizers" }]} />
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
              <li className="text-charcoal font-medium">Appetizers</li>
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
                Appetizers
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                Shareability, group dining, perfect starters. Explore our 6 appetizers options,
                each crafted with care and the finest ingredients.
              </p>
              <ReserveLink
                href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve Your Table
              </ReserveLink>
            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Our Appetizers Selection
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                6 options
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link
                href="/lewisville/appetizers/edamame"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Shishito_Peppers.jpg"
                    alt="Steamed edamame with sea salt"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Edamame
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Steamed soybeans with sea salt
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/gyoza"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Gyoza_Potstickers.jpg"
                    alt="Pan-fried gyoza potstickers"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Gyoza
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Pan-fried pork dumplings with dipping sauce
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/tempura"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Shrimp_Tempura.jpg"
                    alt="Shrimp Tempura, light and crispy fried shrimp"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Shrimp Tempura
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Light and crispy fried shrimp
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/soft-shell-crab"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Soft_Shell_Crab.jpg"
                    alt="Crispy soft-shell crab, deep fried"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Soft Shell Crab
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Crispy fried soft shell crab
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/tuna-tartare"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/menu-photos/Tuna_Sashimi.jpg"
                    alt="Tuna Tartare, diced ahi tuna with avocado and ponzu"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Tuna Tartare
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Diced ahi tuna with avocado and ponzu
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/seared-tuna"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/food/SmokedSalmonCloseup.jpg"
                    alt="Seared Ahi Tuna, pepper-crusted ahi with wasabi aioli"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Seared Ahi Tuna
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Pepper-crusted ahi with wasabi aioli
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
                Experience Our Appetizers
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Lewisville's go-to for Japanese cuisine. Convenient strip mall parking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ReserveLink
                  href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US" target="_blank" rel="noopener noreferrer"
                  className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl shadow-lg transition-colors"
                >
                  Reserve a Table
                </ReserveLink>
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
                Appetizers FAQ
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What appetizers does Jinbeh Lewisville serve?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Jinbeh Lewisville offers an extensive appetizers menu with 6 options including favorites like Edamame, Gyoza, Shrimp Tempura, and more. All prepared fresh by our skilled chefs.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are the most popular appetizers at Jinbeh?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Guest favorites include Edamame, Gyoza, Shrimp Tempura, Soft Shell Crab. These are consistently rated as the best appetizers in Lewisville.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Are reservations needed for appetizers at Jinbeh Lewisville?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Reservations are recommended, especially for dinner. Call (214) 488-2224 or book online. Walk-ins are welcome based on availability.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Does Jinbeh Lewisville offer appetizers for takeout?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Yes! Most appetizers items are available for takeout and delivery. Call (214) 488-2224 or order online.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are appetizers prices at Jinbeh Lewisville?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
Pricing is listed on our current menu. Browse the full menu for details.
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
                href="/lewisville/hibachi"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🔥</span>
                <h3 className="font-heading font-bold text-charcoal">Hibachi</h3>
              </Link>
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
        <CategoryLocationSEO locationId="lewisville" category="appetizers" />

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also serving appetizers at our{' '}
              <Link
                href="/frisco/appetizers"
                className="text-soft-gold hover:underline"
              >
                Frisco location
              </Link>
            </p>
          </div>
        </section>
      </main>
      <PageSeoBoost route="/lewisville/appetizers" />
      <Footer />
    </>
  );
}
