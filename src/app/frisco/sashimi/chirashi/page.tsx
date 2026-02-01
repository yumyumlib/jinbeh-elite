import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chirashi Bowl Frisco | Scattered Sushi Rice Deluxe",
  description: "Scattered sushi bowl with premium assorted sashimi at Jinbeh Frisco. 400-500 calories, 23g protein, omega-3 rich with vegetables.",
  keywords: ["sashimi near me frisco","chirashi bowl frisco","best sushi frisco tx","scattered sushi rice","japanese appetizers frisco","sushi rice bowl frisco"],
  openGraph: {
    title: "Chirashi Bowl Frisco | Premium Sashimi Rice Bowl",
    description: "Scattered sushi bowl with premium sashimi at Jinbeh Frisco. 400-500 calories, 23g protein.",
    url: "https://jinbeh.com/frisco/sashimi/chirashi",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sashimi/chirashi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Chirashi Bowl",
  "description": "Assorted sashimi over sushi rice",
  "offers": {
    "@type": "Offer",
    "price": "28.95",
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
      "name": "How many calories are in a Chirashi Bowl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Chirashi Bowl at Jinbeh contains approximately 400-500 calories with 23-24 grams of protein, healthy fats, and carbohydrates from sushi rice, vegetables, and premium sashimi."
      }
    },
    {
      "@type": "Question",
      "name": "What health benefits does Chirashi Bowl offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chirashi Bowl combines omega-3 fatty acids from fish for heart and brain health, complete protein for muscle repair, B vitamins, selenium, and fiber from vegetables for overall wellness."
      }
    },
    {
      "@type": "Question",
      "name": "Is Chirashi Bowl safe to eat raw fish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our sashimi is premium sushi-grade quality, sourced fresh multiple times weekly, properly stored, and prepared by trained chefs following strict food safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Chirashi different from sushi rolls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chirashi means 'scattered sushi.' It features assorted fresh sashimi, vegetables, and garnishes scattered over seasoned sushi rice, offering a customizable, healthier option without mayonnaise or fried ingredients."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize my Chirashi Bowl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Chirashi Bowl at $28.95 can be customized with your choice of sashimi. Speak with our staff about preferences. Ask about our Omakase options for premium selections."
      }
    }
  ]
};

export default function ChirashiFriscoPage() {
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
              <li><Link href="/frisco/sashimi" className="hover:text-accent-red">Sashimi</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Chirashi Bowl</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/catalog/12-C060324-6551.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Sashimi • Jinbeh Frisco
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Chirashi Bowl
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Assorted sashimi over sushi rice
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $28.95
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                  About Chirashi Bowl
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Chirashi Bowl at Jinbeh Frisco.
                  Assorted sashimi over sushi rice Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Near Stonebriar Centre, minutes from Legacy West. The heart of Frisco\'s restaurant scene.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Chirashi Bowl is a guest favorite that delivers on both flavor and presentation.
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
                      <td className="py-4 text-right">
                        <div>
                          <p className="text-accent-red font-bold">$28.95</p>
                          <span className="text-charcoal/50 text-xs block">*Pricing may vary. Specials available.</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Category</td>
                      <td className="py-4 text-right text-charcoal/80">Sashimi</td>
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
                  Ready to Try Chirashi Bowl?
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
                      <h3 className="font-medium text-charcoal pr-4">How fresh is the Chirashi Bowl at Jinbeh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Our Chirashi Bowl is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Frisco, we take pride in serving only the highest-quality sashimi.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What is Chirashi Bowl sashimi?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Chirashi Bowl at Jinbeh is assorted sashimi over sushi rice. Priced at \$28.95, it\'s served without rice, allowing you to experience the pure, clean flavor of premium fish.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">How should I eat Chirashi Bowl sashimi?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      We recommend lightly dipping Chirashi Bowl in soy sauce with a touch of wasabi. Let the natural flavors shine—great sashimi needs minimal accompaniment.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Chirashi Bowl sashimi safe to eat?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Our Chirashi Bowl is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Frisco follows strict food safety protocols.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I get Chirashi Bowl as part of a platter?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Absolutely! Chirashi Bowl is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More Sashimi at Jinbeh Frisco
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/frisco/sashimi/salmon-sashimi"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Salmon Sashimi</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$14.95</p>
                  </Link>
                  <Link
                    href="/frisco/sashimi/tuna-sashimi"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Tuna Sashimi</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$16.95</p>
                  </Link>
                  <Link
                    href="/frisco/sashimi/yellowtail-sashimi"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Yellowtail Sashimi</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$15.95</p>
                  </Link>
                  <Link
                    href="/frisco/sashimi/octopus-sashimi"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Octopus Sashimi</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$14.95</p>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/frisco/sashimi"
                    className="text-deep-indigo hover:text-accent-red font-medium"
                  >
                    View All Sashimi →
                  </Link>
                </div>
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
                href="/lewisville/sashimi/chirashi"
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
