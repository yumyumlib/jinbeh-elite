import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Appetizers Menu | Jinbeh Lewisville Japanese Restaurant",
  description: "Explore Jinbeh Lewisville's appetizers menu. Shareability, group dining, perfect starters. 6 delicious options from Edamame to Seared Ahi Tuna. Easy access from I-35E, near Vista Ridge Mall.",
  keywords: ["appetizers lewisville","best appetizers lewisville","appetizers menu lewisville","jinbeh appetizers","japanese appetizers lewisville","japanese appetizers","starters","small plates"],
  openGraph: {
    title: "Appetizers Menu | Jinbeh Lewisville",
    description: "Shareability, group dining, perfect starters. 6 appetizers options at Jinbeh Lewisville.",
    url: "https://jinbeh.com/lewisville/appetizers",
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
        "offers": {
          "@type": "Offer",
          "price": "5.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Gyoza",
        "description": "Pan-fried pork dumplings with dipping sauce",
        "offers": {
          "@type": "Offer",
          "price": "8.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Shrimp Tempura",
        "description": "Light and crispy fried shrimp",
        "offers": {
          "@type": "Offer",
          "price": "12.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Soft Shell Crab",
        "description": "Crispy fried soft shell crab",
        "offers": {
          "@type": "Offer",
          "price": "14.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Tuna Tartare",
        "description": "Diced ahi tuna with avocado and ponzu",
        "offers": {
          "@type": "Offer",
          "price": "15.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Seared Ahi Tuna",
        "description": "Pepper-crusted ahi with wasabi aioli",
        "offers": {
          "@type": "Offer",
          "price": "16.95",
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
        "text": "Guest favorites include Edamame ($5.95), Gyoza ($8.95), Shrimp Tempura ($12.95), Soft Shell Crab ($14.95). These are consistently rated as the best appetizers in Lewisville."
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
        "text": "Appetizers prices range from 5.95 to 16.95. See our full menu for complete pricing."
      }
    }
  ]
};

export default function AppetizersLewisvillePage() {
  return (
    <>
      <Header location="lewisville" />
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
            <ol className="flex items-center gap-2 text-sm text-charcoal/60">
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
              <Link
                href="/lewisville#reserve"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve Your Table
              </Link>
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
                6 options ranging from 5.95 to 16.95
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link
                href="/lewisville/appetizers/edamame"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🥢</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Edamame
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Steamed soybeans with sea salt
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$5.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/gyoza"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🥢</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Gyoza
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Pan-fried pork dumplings with dipping sauce
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$8.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/tempura"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🥢</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Shrimp Tempura
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Light and crispy fried shrimp
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$12.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/soft-shell-crab"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🥢</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Soft Shell Crab
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Crispy fried soft shell crab
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$14.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/tuna-tartare"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🥢</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Tuna Tartare
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Diced ahi tuna with avocado and ponzu
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$15.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/lewisville/appetizers/seared-tuna"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🥢</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Seared Ahi Tuna
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Pepper-crusted ahi with wasabi aioli
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$16.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
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
                <Link
                  href="/lewisville#reserve"
                  className="bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Reserve a Table
                </Link>
                <a
                  href="tel:2144882224"
                  className="bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Call (214) 488-2224
                </a>
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
                    Guest favorites include Edamame (\$5.95), Gyoza (\$8.95), Shrimp Tempura (\$12.95), Soft Shell Crab (\$14.95). These are consistently rated as the best appetizers in Lewisville.
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
                    Appetizers prices range from 5.95 to 16.95. See our full menu for complete pricing.
                  </p>
                </details>
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
        </section>

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
      <Footer />
    </>
  );
}
