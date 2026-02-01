import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lychee Martini | Jinbeh Frisco Cocktails & Sake Menu",
  description: "Vodka with lychee and a floral finish Enjoy Lychee Martini at Jinbeh Japanese Restaurant in Frisco, TX. Near Stonebriar Centre, minutes from Legacy West. Call (214) 619-1200 to reserve.",
  keywords: ["lychee martini","lychee martini frisco","cocktails & sake frisco","jinbeh lychee martini","best cocktails & sake frisco","japanese restaurant frisco","japanese cocktails","sake","asian drinks","happy hour"],
  openGraph: {
    title: "Lychee Martini | Jinbeh Frisco",
    description: "Vodka with lychee and a floral finish",
    url: "https://jinbeh.com/frisco/cocktails/lychee-martini",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/cocktails/lychee-martini",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Lychee Martini",
  "description": "Vodka with lychee and a floral finish",
  "offers": {
    "@type": "Offer",
    "price": "13.00",
    "priceCurrency": "USD"
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
      "name": "What is the Lychee Martini at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Lychee Martini at Jinbeh Frisco is vodka with lychee and a floral finish. At $13.00, it's one of our signature bar offerings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Lychee Martini available during happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many of our cocktails including options like Lychee Martini are featured during happy hour at discounted prices. Visit Jinbeh Frisco for current happy hour specials."
      }
    },
    {
      "@type": "Question",
      "name": "What food pairs with Lychee Martini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lychee Martini pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Lychee Martini at the bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Frisco has a full bar where you can enjoy Lychee Martini and watch our sushi chefs at work. No reservation needed for bar seating."
      }
    }
  ]
};

export default function LycheeMartiniFriscoPage() {
  return (
    <>
      <Header location="frisco" />
      <main className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }}
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
              <li><Link href="/frisco/cocktails" className="hover:text-accent-red">Cocktails & Sake</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Lychee Martini</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/catalog/FB-LEW-Appetizer-Seafood-Cocktail-Martini-Alt.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Cocktails & Sake • Jinbeh Frisco
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Lychee Martini
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Vodka with lychee and a floral finish
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $13.00
              </p>
            </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                  About Lychee Martini
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Lychee Martini at Jinbeh Frisco.
                  Vodka with lychee and a floral finish Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Near Stonebriar Centre, minutes from Legacy West. The heart of Frisco\'s restaurant scene.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Lychee Martini is a guest favorite that delivers on both flavor and presentation.
                </p>
              </div>

              {/* Details Table */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  Details
                </h2>
                <table className="w-full">
                  <tbody className="divide-y divide-warm-ivory">
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Price</td>
                      <td className="py-4 text-right text-accent-red font-bold">$13.00</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Category</td>
                      <td className="py-4 text-right text-charcoal/80">Cocktails & Sake</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Location</td>
                      <td className="py-4 text-right text-charcoal/80">Jinbeh Frisco</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Phone</td>
                      <td className="py-4 text-right">
                        <a href="tel:2146191200" className="text-accent-red hover:underline">
                          (214) 619-1200
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Ready to Try Lychee Martini?
                </h2>
                <p className="text-white/90 mb-6">
                  Reserve your table at Jinbeh Frisco today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/frisco#reserve"
                    className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-3 font-semibold rounded-xl"
                  >
                    Reserve a Table
                  </Link>
                  <a
                    href="tel:2146191200"
                    className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-3 font-semibold rounded-xl"
                  >
                    Call (214) 619-1200
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What is the Lychee Martini at Jinbeh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      The Lychee Martini at Jinbeh Frisco is vodka with lychee and a floral finish. At \$13.00, it\'s one of our signature bar offerings.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Lychee Martini available during happy hour?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Many of our cocktails including options like Lychee Martini are featured during happy hour at discounted prices. Visit Jinbeh Frisco for current happy hour specials.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What food pairs with Lychee Martini?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Lychee Martini pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I get Lychee Martini at the bar?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Jinbeh Frisco has a full bar where you can enjoy Lychee Martini and watch our sushi chefs at work. No reservation needed for bar seating.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More Cocktails & Sake at Jinbeh Frisco
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/frisco/cocktails/sake-bomb"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Sake Bomb</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$8.00</p>
                  </Link>
                  <Link
                    href="/frisco/cocktails/jinbeh-punch"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Jinbeh Punch</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$12.00</p>
                  </Link>
                  <Link
                    href="/frisco/cocktails/tokyo-mule"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Tokyo Mule</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$14.00</p>
                  </Link>
                  <Link
                    href="/frisco/cocktails/sake-flight"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Sake Flight</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$18.00</p>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/frisco/cocktails"
                    className="text-deep-indigo hover:text-accent-red font-medium"
                  >
                    View All Cocktails & Sake →
                  </Link>
                </div>
              </div>

            </div>
        </section>

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also available at our{' '}
              <Link
                href="/lewisville/cocktails/lychee-martini"
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
