import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Octopus Sashimi | Jinbeh Frisco Sashimi Menu",
  description: "Tender tako with subtle sweetness Enjoy Octopus Sashimi at Jinbeh Japanese Restaurant in Frisco, TX. Near Stonebriar Centre, minutes from Legacy West. Call (214) 618-9888 to reserve.",
  keywords: ["octopus sashimi","octopus sashimi frisco","sashimi frisco","jinbeh octopus sashimi","best sashimi frisco","japanese restaurant frisco","sashimi","raw fish","sashimi platter","fresh fish"],
  openGraph: {
    title: "Octopus Sashimi | Jinbeh Frisco",
    description: "Tender tako with subtle sweetness",
    url: "https://jinbeh.com/frisco/sashimi/octopus-sashimi",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sashimi/octopus-sashimi",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Octopus Sashimi",
  "description": "Tender tako with subtle sweetness",
  "offers": {
    "@type": "Offer",
    "price": "14.95",
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
      "name": "How fresh is the Octopus Sashimi at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Octopus Sashimi is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Frisco, we take pride in serving only the highest-quality sashimi."
      }
    },
    {
      "@type": "Question",
      "name": "What is Octopus Sashimi sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Octopus Sashimi at Jinbeh is tender tako with subtle sweetness. Priced at $14.95, it's served without rice, allowing you to experience the pure, clean flavor of premium fish."
      }
    },
    {
      "@type": "Question",
      "name": "How should I eat Octopus Sashimi sashimi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend lightly dipping Octopus Sashimi in soy sauce with a touch of wasabi. Let the natural flavors shine—great sashimi needs minimal accompaniment."
      }
    },
    {
      "@type": "Question",
      "name": "Is Octopus Sashimi sashimi safe to eat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Octopus Sashimi is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Frisco follows strict food safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Octopus Sashimi as part of a platter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Octopus Sashimi is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection."
      }
    }
  ]
};

export default function OctopusSashimiFriscoPage() {
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
              <li className="text-charcoal font-medium">Octopus Sashimi</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Sashimi • Jinbeh Frisco
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Octopus Sashimi
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Tender tako with subtle sweetness
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $14.95
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
                  About Octopus Sashimi
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Octopus Sashimi at Jinbeh Frisco.
                  Tender tako with subtle sweetness Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Near Stonebriar Centre, minutes from Legacy West. The heart of Frisco\'s restaurant scene.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Octopus Sashimi is a guest favorite that delivers on both flavor and presentation.
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
                      <td className="py-4 text-right text-accent-red font-bold">$14.95</td>
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
                        <a href="tel:2146189888" className="text-accent-red hover:underline">
                          (214) 618-9888
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Ready to Try Octopus Sashimi?
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
                    href="tel:2146189888"
                    className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-3 font-semibold rounded-xl"
                  >
                    Call (214) 618-9888
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
                      <h3 className="font-medium text-charcoal pr-4">How fresh is the Octopus Sashimi at Jinbeh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Our Octopus Sashimi is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh Frisco, we take pride in serving only the highest-quality sashimi.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What is Octopus Sashimi sashimi?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Octopus Sashimi at Jinbeh is tender tako with subtle sweetness. Priced at \$14.95, it\'s served without rice, allowing you to experience the pure, clean flavor of premium fish.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">How should I eat Octopus Sashimi sashimi?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      We recommend lightly dipping Octopus Sashimi in soy sauce with a touch of wasabi. Let the natural flavors shine—great sashimi needs minimal accompaniment.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Octopus Sashimi sashimi safe to eat?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Our Octopus Sashimi is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh Frisco follows strict food safety protocols.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I get Octopus Sashimi as part of a platter?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Absolutely! Octopus Sashimi is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection.
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
                    href="/frisco/sashimi/sashimi-deluxe"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Sashimi Deluxe Platter</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$32.95</p>
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
                href="/lewisville/sashimi/octopus-sashimi"
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
