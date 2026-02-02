import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tiger Roll Lewisville | Tempura Shrimp Spicy Tuna",
  description: "Tiger Roll at Jinbeh Lewisville: Tempura shrimp, spicy tuna, cucumber, avocado, sesame. Eel and spicy mayo drizzle. Call (972) 221-3888.",
  keywords: ["tiger roll","tiger roll lewisville","sushi near me lewisville","best sushi lewisville tx","sushi rolls lewisville","shrimp and tuna","jinbeh tiger roll"],
  openGraph: {
    title: "Tiger Roll | Jinbeh Lewisville",
    description: "Shrimp tempura with spicy tuna and jalapeño",
    url: "https://jinbeh.com/lewisville/sushi-rolls/tiger-roll",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/tiger-roll",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Tiger Roll",
  "description": "Shrimp tempura with spicy tuna and jalapeño",
  "offers": {
    "@type": "Offer",
    "price": "17.95",
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
      "name": "What is in Tiger Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Roll features tempura shrimp, cucumber, avocado, spicy tuna mix, sushi rice, and nori. Topped with sesame seeds, eel sauce, and spicy mayo drizzle."
      }
    },
    {
      "@type": "Question",
      "name": "Is it spicy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Tiger Roll has a moderate to medium spice level from the spicy tuna and sriracha drizzle. We can adjust the heat level to your preference."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tiger Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Roll contains gluten in the tempura flour and soy sauce. Request gluten-free tempura and tamari sauce for gluten-free preparation."
      }
    },
    {
      "@type": "Question",
      "name": "What is in the spicy mayo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our spicy mayo combines mayonnaise with sriracha, gochujang, and other Japanese seasonings for a perfect balance of heat and flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Tiger Roll is available for takeout and delivery. For the best presentation, we recommend dining in at our sushi bar. Call (972) 221-3888."
      }
    }
  ]
};

export default function TigerRollLewisvillePage() {
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
              <li className="text-charcoal font-medium">Tiger Roll</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/catalog/4-C060324-6380.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Sushi Rolls • Jinbeh Lewisville
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Tiger Roll
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Shrimp tempura with spicy tuna and jalapeño
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $17.95
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
                  About Tiger Roll
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Tiger Roll at Jinbeh Lewisville.
                  Shrimp tempura with spicy tuna and jalapeño Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Easy access from I-35E, near Vista Ridge Mall. Lewisville\'s go-to for Japanese cuisine.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Tiger Roll is a guest favorite that delivers on both flavor and presentation.
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
                        <span className="text-accent-red font-bold">$17.95</span>
                        <span className="text-charcoal/70 text-xs block">*Pricing may vary. Specials available.</span>
                      </td>
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
                  Ready to Try Tiger Roll?
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
                      <h3 className="font-medium text-charcoal pr-4">What is the Tiger Roll at Jinbeh Lewisville?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      The Tiger Roll at Jinbeh is shrimp tempura with spicy tuna and jalapeño. Priced at \$17.95, it\'s handcrafted by our sushi chefs using the freshest ingredients delivered daily.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is the Tiger Roll made fresh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! All sushi at Jinbeh Lewisville is made to order. Our Tiger Roll is prepared by skilled sushi chefs who slice, roll, and plate each piece with precision and artistry.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What pairs well with Tiger Roll?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      We recommend pairing Tiger Roll with premium sake, Japanese beer (Sapporo, Asahi), or one of our signature cocktails. Our staff can suggest the perfect beverage pairing for your meal.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I order Tiger Roll for takeout?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Tiger Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (972) 221-3888 to order.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Tiger Roll gluten-free?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Some ingredients in Tiger Roll may contain gluten. Please inform your server of any dietary restrictions and our chefs can accommodate most requests or suggest alternatives.
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
                href="/frisco/sushi-rolls/tiger-roll"
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
