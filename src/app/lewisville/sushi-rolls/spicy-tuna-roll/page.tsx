import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spicy Tuna Roll Lewisville | Fresh Tuna Spicy Mayo",
  description: "Spicy Tuna Roll at Jinbeh Lewisville: Fresh tuna, spicy mayo, 260-350 cal. Premium sushi near I-35E. Made fresh to order. Call (972) 221-3888.",
  keywords: ["spicy tuna roll","spicy tuna roll lewisville","sushi near me lewisville","best sushi lewisville tx","sushi rolls lewisville","jinbeh spicy tuna roll","best sushi rolls lewisville"],
  openGraph: {
    title: "Spicy Tuna Roll | Jinbeh Lewisville",
    description: "Fresh tuna with spicy mayo and scallions",
    url: "https://jinbeh.com/lewisville/sushi-rolls/spicy-tuna-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/spicy-tuna-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Spicy Tuna Roll",
  "description": "Fresh tuna with spicy mayo and scallions",
  "offers": {
    "@type": "Offer",
    "price": "11.95",
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
      "name": "How many calories in Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spicy Tuna Roll at Jinbeh contains approximately 260-350 calories per serving. The exact count varies based on portion size and the amount of spicy mayo used in the preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What is in Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Spicy Tuna Roll features fresh sushi-grade tuna mixed with spicy mayo, sriracha, scallions, cucumber, avocado, sushi rice, and nori. The perfect balance of heat and fresh fish flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Is Spicy Tuna Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spicy Tuna Roll may contain gluten in soy sauce and some seasonings. Please inform your server of dietary restrictions and our chefs can recommend gluten-free soy sauce options."
      }
    },
    {
      "@type": "Question",
      "name": "How spicy is Spicy Tuna Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Spicy Tuna Roll offers a medium heat level from sriracha and chili seasonings. If you prefer milder or extra spicy, our chefs can customize it to your taste preference."
      }
    },
    {
      "@type": "Question",
      "name": "Is it made with fresh tuna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We use sushi-grade tuna delivered daily. All rolls at Jinbeh Lewisville are prepared fresh to order by experienced sushi chefs."
      }
    }
  ]
};

export default function SpicyTunaRollLewisvillePage() {
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
            <ol className="flex items-center gap-2 text-sm text-charcoal/80">
              <li><Link href="/" className="hover:text-accent-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/lewisville" className="hover:text-accent-red">Lewisville</Link></li>
              <li>/</li>
              <li><Link href="/lewisville/menu" className="hover:text-accent-red">Menu</Link></li>
              <li>/</li>
              <li><Link href="/lewisville/sushi-rolls" className="hover:text-accent-red">Sushi Rolls</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Spicy Tuna Roll</li>
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
                Sushi Rolls • Jinbeh Lewisville
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Spicy Tuna Roll
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Fresh tuna with spicy mayo and scallions
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $11.95
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
                  About Spicy Tuna Roll
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Spicy Tuna Roll at Jinbeh Lewisville.
                  Fresh tuna with spicy mayo and scallions Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Easy access from I-35E, near Vista Ridge Mall. Lewisville\'s go-to for Japanese cuisine.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Spicy Tuna Roll is a guest favorite that delivers on both flavor and presentation.
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
                        <span className="text-accent-red font-bold">$11.95</span>
                        <span className="text-charcoal/70 text-xs block">*Pricing may vary. Specials available.</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Calories</td>
                      <td className="py-4 text-right text-charcoal/80">~260-350 per serving</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Heat Level</td>
                      <td className="py-4 text-right text-charcoal/80">Medium-Spicy</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Category</td>
                      <td className="py-4 text-right text-charcoal/80">Sushi Rolls</td>
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
                  Ready to Try Spicy Tuna Roll?
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
                      <h3 className="font-medium text-charcoal pr-4">How many calories in Spicy Tuna Roll?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Spicy Tuna Roll at Jinbeh contains approximately 260-350 calories per serving. The exact count varies based on portion size and the amount of spicy mayo used in the preparation.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What is in Spicy Tuna Roll?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Our Spicy Tuna Roll features fresh sushi-grade tuna mixed with spicy mayo, sriracha, scallions, cucumber, avocado, sushi rice, and nori. The perfect balance of heat and fresh fish flavor.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Spicy Tuna Roll gluten-free?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Spicy Tuna Roll may contain gluten in soy sauce and some seasonings. Please inform your server of dietary restrictions and our chefs can recommend gluten-free soy sauce options.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">How spicy is Spicy Tuna Roll?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Our Spicy Tuna Roll offers a medium heat level from sriracha and chili seasonings. If you prefer milder or extra spicy, our chefs can customize it to your taste preference.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is it made with fresh tuna?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! We use sushi-grade tuna delivered daily. All rolls at Jinbeh Lewisville are prepared fresh to order by experienced sushi chefs.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More Sushi Rolls at Jinbeh Lewisville
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/lewisville/sushi-rolls/dragon-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Dragon Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$16.95</p>
                  </Link>
                  <Link
                    href="/lewisville/sushi-rolls/rainbow-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Rainbow Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$17.95</p>
                  </Link>
                  <Link
                    href="/lewisville/sushi-rolls/spider-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Spider Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$15.95</p>
                  </Link>
                  <Link
                    href="/lewisville/sushi-rolls/caterpillar-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Caterpillar Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$15.95</p>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/lewisville/sushi-rolls"
                    className="text-deep-indigo hover:text-accent-red font-medium"
                  >
                    View All Sushi Rolls →
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
                href="/frisco/sushi-rolls/spicy-tuna-roll"
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
