import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tuna Sashimi Lewisville | Lean Protein Ahi Tuna",
  description: "Premium ahi tuna sashimi at Jinbeh Lewisville. 94 calories, 20g protein, zero carbs. High in omega-3s and heart-healthy nutrients.",
  keywords: ["sashimi near me lewisville","tuna sashimi lewisville","best sushi lewisville tx","ahi tuna sashimi calories","lean protein sashimi","japanese restaurant lewisville","sushi-grade tuna","raw fish lewisville"],
  openGraph: {
    title: "Tuna Sashimi | Jinbeh Lewisville",
    description: "Premium ahi tuna, melt-in-your-mouth tender",
    url: "https://jinbeh.com/lewisville/sashimi/tuna-sashimi",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sashimi/tuna-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tuna Sashimi",
  "description": "Premium ahi tuna, melt-in-your-mouth tender",
  "offers": {
    "@type": "Offer",
    "price": "16.95",
    "priceCurrency": "USD"
  },
  "restaurant": {
    "@type": "Restaurant",
    "name": "Jinbeh Japanese Restaurant - Lewisville",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lewisville",
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
      "name": "How many calories does Tuna Sashimi have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Sashimi at Jinbeh contains approximately 94 calories per 3-ounce serving with 20 grams of protein and zero grams of carbohydrates, making it ideal for low-carb diets."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of Tuna Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Sashimi is leaner than salmon with high protein and low fat content. It's rich in omega-3 fatty acids (EPA and DHA) that reduce inflammation, support heart health, improve cholesterol levels, and provide selenium and B12."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tuna Sashimi safe to eat raw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our premium ahi tuna is sushi-grade quality, sourced fresh multiple times weekly, properly stored at precise temperatures, and prepared by trained chefs following strict food safety standards."
      }
    },
    {
      "@type": "Question",
      "name": "How do you serve Tuna Sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tuna Sashimi is best enjoyed lightly dipped in soy sauce with a touch of wasabi and ginger. The clean, delicate flavor of premium ahi tuna is best appreciated with minimal accompaniment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Tuna Sashimi with other dishes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Tuna Sashimi is available individually at $16.95 or as part of our Sashimi Deluxe Platter ($32.95) and Chirashi Bowl. Ask about our Omakase for premium selections."
      }
    }
  ]
};

export default function TunaSashimiLewisvillePage() {
  return (
    <>
      <Header location="lewisville" />
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
              <li><Link href="/lewisville" className="hover:text-accent-red">Lewisville</Link></li>
              <li>/</li>
              <li><Link href="/lewisville/menu" className="hover:text-accent-red">Menu</Link></li>
              <li>/</li>
              <li><Link href="/lewisville/sashimi" className="hover:text-accent-red">Sashimi</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Tuna Sashimi</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/catalog/FB-LEW-Sashimi-Tuna-Caviar-Closeup.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Sashimi • Jinbeh Lewisville
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Tuna Sashimi
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Premium ahi tuna, melt-in-your-mouth tender
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $16.95
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
                  About Tuna Sashimi
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Tuna Sashimi at Jinbeh Lewisville.
                  Premium ahi tuna, melt-in-your-mouth tender. Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Near Vista Ridge Mall, minutes from I-35E. The heart of Lewisville\'s restaurant scene.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Tuna Sashimi is a guest favorite that delivers on both flavor and presentation.
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
                          <p className="text-accent-red font-bold">$16.95</p>
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
                      <td className="py-4 text-right text-charcoal/80">Jinbeh Lewisville</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Phone</td>
                      <td className="py-4 text-right">
                        <a href="tel:9722213888" className="text-accent-red hover:underline">
                          (972) 221-3888
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Ready to Try Tuna Sashimi?
                </h2>
                <p className="text-white/90 mb-6">
                  Reserve your table at Jinbeh Lewisville today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/lewisville#reserve"
                    className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-3 font-semibold rounded-xl"
                  >
                    Reserve a Table
                  </Link>
                  <a
                    href="tel:9722213888"
                    className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-3 font-semibold rounded-xl"
                  >
                    Call (972) 221-3888
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
                      <h3 className="font-medium text-charcoal pr-4">How fresh is the Tuna Sashimi at Jinbeh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Our Tuna Sashimi is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Lewisville, we take pride in serving only the highest-quality sashimi.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What is Tuna Sashimi sashimi?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Tuna Sashimi at Jinbeh is premium ahi tuna, melt-in-your-mouth tender. Priced at \$16.95, it\'s served without rice, allowing you to experience the pure, clean flavor of premium fish.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">How should I eat Tuna Sashimi sashimi?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      We recommend lightly dipping Tuna Sashimi in soy sauce with a touch of wasabi. Let the natural flavors shine—great sashimi needs minimal accompaniment.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Tuna Sashimi sashimi safe to eat?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Our Tuna Sashimi is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Lewisville follows strict food safety protocols.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I get Tuna Sashimi as part of a platter?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Absolutely! Tuna Sashimi is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More Sashimi at Jinbeh Lewisville
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/lewisville/sashimi/salmon-sashimi"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Salmon Sashimi</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$14.95</p>
                  </Link>
                  <Link
                    href="/lewisville/sashimi/yellowtail-sashimi"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Yellowtail Sashimi</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$15.95</p>
                  </Link>
                  <Link
                    href="/lewisville/sashimi/octopus-sashimi"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Octopus Sashimi</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$14.95</p>
                  </Link>
                  <Link
                    href="/lewisville/sashimi/sashimi-deluxe"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Sashimi Deluxe Platter</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$32.95</p>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/lewisville/sashimi"
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
                href="/frisco/sashimi/tuna-sashimi"
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
