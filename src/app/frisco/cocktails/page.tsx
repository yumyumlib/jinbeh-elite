import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cocktails & Sake Menu | Jinbeh Frisco Japanese Restaurant",
  description: "Explore Jinbeh Frisco's cocktails & sake menu. Celebration, happy hour, Asian-inspired. 5 delicious options from Sake Bomb to Sake Flight. Near Stonebriar Centre, minutes from Legacy West.",
  keywords: ["cocktails & sake frisco","best cocktails & sake frisco","cocktails & sake menu frisco","jinbeh cocktails & sake","japanese cocktails & sake frisco","japanese cocktails","sake","asian drinks","happy hour"],
  openGraph: {
    title: "Cocktails & Sake Menu | Jinbeh Frisco",
    description: "Celebration, happy hour, Asian-inspired. 5 cocktails & sake options at Jinbeh Frisco.",
    url: "https://jinbeh.com/frisco/cocktails",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/cocktails",
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Cocktails & Sake Menu - Jinbeh Frisco",
  "description": "Cocktails & Sake menu at Jinbeh Japanese Restaurant in Frisco, TX",
  "hasMenuSection": {
    "@type": "MenuSection",
    "name": "Cocktails & Sake",
    "hasMenuItem": [
      {
        "@type": "MenuItem",
        "name": "Sake Bomb",
        "description": "Classic sake dropped into cold beer",
        "offers": {
          "@type": "Offer",
          "price": "8.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Jinbeh Punch",
        "description": "House specialty tropical cocktail",
        "offers": {
          "@type": "Offer",
          "price": "12.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Tokyo Mule",
        "description": "Japanese whiskey with ginger and lime",
        "offers": {
          "@type": "Offer",
          "price": "14.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Lychee Martini",
        "description": "Vodka with lychee and a floral finish",
        "offers": {
          "@type": "Offer",
          "price": "13.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Sake Flight",
        "description": "Tasting of three premium sakes",
        "offers": {
          "@type": "Offer",
          "price": "18.00",
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
      "name": "What cocktails & sake does Jinbeh Frisco serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Frisco offers an extensive cocktails & sake menu with 5 options including favorites like Sake Bomb, Jinbeh Punch, Tokyo Mule, and more. All prepared fresh by our skilled chefs."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most popular cocktails & sake at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guest favorites include Sake Bomb ($8.00), Jinbeh Punch ($12.00), Tokyo Mule ($14.00), Lychee Martini ($13.00). These are consistently rated as the best cocktails & sake in Frisco."
      }
    },
    {
      "@type": "Question",
      "name": "Are reservations needed for cocktails & sake at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reservations are recommended, especially for dinner. Call (214) 619-1200 or book online. Walk-ins are welcome based on availability."
      }
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh Frisco offer cocktails & sake for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most cocktails & sake items are available for takeout and delivery. Call (214) 619-1200 or order online. "
      }
    },
    {
      "@type": "Question",
      "name": "What are cocktails & sake prices at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cocktails & Sake prices range from 8.00 to 18.00. See our full menu for complete pricing."
      }
    }
  ]
};

export default function CocktailsFriscoPage() {
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
            <ol className="flex items-center gap-2 text-sm text-charcoal/60">
              <li><Link href="/" className="hover:text-accent-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/frisco" className="hover:text-accent-red">Frisco</Link></li>
              <li>/</li>
              <li><Link href="/frisco/menu" className="hover:text-accent-red">Menu</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Cocktails & Sake</li>
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
                Cocktails & Sake
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                Celebration, happy hour, Asian-inspired. Explore our 5 cocktails & sake options,
                each crafted with care and the finest ingredients.
              </p>
              <Link
                href="/frisco#reserve"
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
                Our Cocktails & Sake Selection
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                5 options ranging from 8.00 to 18.00
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link
                href="/frisco/cocktails/sake-bomb"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍶</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Sake Bomb
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Classic sake dropped into cold beer
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$8.00</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/cocktails/jinbeh-punch"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍶</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Jinbeh Punch
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    House specialty tropical cocktail
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$12.00</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/cocktails/tokyo-mule"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍶</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Tokyo Mule
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Japanese whiskey with ginger and lime
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$14.00</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/cocktails/lychee-martini"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍶</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Lychee Martini
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Vodka with lychee and a floral finish
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$13.00</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/cocktails/sake-flight"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍶</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Sake Flight
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Tasting of three premium sakes
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$18.00</span>
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
                Experience Our Cocktails & Sake
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
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                Cocktails & Sake FAQ
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What cocktails & sake does Jinbeh Frisco serve?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Jinbeh Frisco offers an extensive cocktails & sake menu with 5 options including favorites like Sake Bomb, Jinbeh Punch, Tokyo Mule, and more. All prepared fresh by our skilled chefs.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are the most popular cocktails & sake at Jinbeh?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Guest favorites include Sake Bomb (\$8.00), Jinbeh Punch (\$12.00), Tokyo Mule (\$14.00), Lychee Martini (\$13.00). These are consistently rated as the best cocktails & sake in Frisco.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Are reservations needed for cocktails & sake at Jinbeh Frisco?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Reservations are recommended, especially for dinner. Call (214) 619-1200 or book online. Walk-ins are welcome based on availability.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Does Jinbeh Frisco offer cocktails & sake for takeout?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Yes! Most cocktails & sake items are available for takeout and delivery. Call (214) 619-1200 or order online. 
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are cocktails & sake prices at Jinbeh Frisco?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Cocktails & Sake prices range from 8.00 to 18.00. See our full menu for complete pricing.
                  </p>
                </details>
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
                href="/frisco/hibachi"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🔥</span>
                <h3 className="font-heading font-bold text-charcoal">Hibachi</h3>
              </Link>
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
            </div>
        </section>

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also serving cocktails & sake at our{' '}
              <Link
                href="/lewisville/cocktails"
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
