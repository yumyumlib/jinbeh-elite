import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yellowtail Jalapeño Roll | Jinbeh Lewisville Sushi Rolls Menu",
  description: "Fresh yellowtail with jalapeño and ponzu Enjoy Yellowtail Jalapeño Roll at Jinbeh Japanese Restaurant in Lewisville, TX. Easy access from I-35E, near Vista Ridge Mall. Call (214) 488-2224 to reserve.",
  keywords: ["yellowtail jalapeño roll","yellowtail jalapeño roll lewisville","sushi rolls lewisville","jinbeh yellowtail jalapeño roll","best sushi rolls lewisville","japanese restaurant lewisville","sushi rolls","specialty rolls","maki","uramaki"],
  openGraph: {
    title: "Yellowtail Jalapeño Roll | Jinbeh Lewisville",
    description: "Fresh yellowtail with jalapeño and ponzu",
    url: "https://jinbeh.com/lewisville/sushi-rolls/yellowtail-jalapeno",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/sushi-rolls/yellowtail-jalapeno",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Yellowtail Jalapeño Roll",
  "description": "Fresh yellowtail with jalapeño and ponzu",
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
      "name": "What is the Yellowtail Jalapeño Roll at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Yellowtail Jalapeño Roll at Jinbeh is fresh yellowtail with jalapeño and ponzu. Priced at $16.95, it's handcrafted by our sushi chefs using the freshest ingredients delivered daily."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Yellowtail Jalapeño Roll made fresh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All sushi at Jinbeh Lewisville is made to order. Our Yellowtail Jalapeño Roll is prepared by skilled sushi chefs who slice, roll, and plate each piece with precision and artistry."
      }
    },
    {
      "@type": "Question",
      "name": "What pairs well with Yellowtail Jalapeño Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend pairing Yellowtail Jalapeño Roll with premium sake, Japanese beer (Sapporo, Asahi), or one of our signature cocktails. Our staff can suggest the perfect beverage pairing for your meal."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Yellowtail Jalapeño Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Yellowtail Jalapeño Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 488-2224 to order."
      }
    },
    {
      "@type": "Question",
      "name": "Is Yellowtail Jalapeño Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some ingredients in Yellowtail Jalapeño Roll may contain gluten. Please inform your server of any dietary restrictions and our chefs can accommodate most requests or suggest alternatives."
      }
    }
  ]
};

export default function YellowtailJalapenoLewisvillePage() {
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
              <li><Link href="/lewisville/sushi-rolls" className="hover:text-accent-red">Sushi Rolls</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Yellowtail Jalapeño Roll</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/photoshoot/sushi-tower.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Sushi Rolls • Jinbeh Lewisville
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Yellowtail Jalapeño Roll
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Fresh yellowtail with jalapeño and ponzu
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
                  About Yellowtail Jalapeño Roll
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Yellowtail Jalapeño Roll at Jinbeh Lewisville.
                  Fresh yellowtail with jalapeño and ponzu Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Easy access from I-35E, near Vista Ridge Mall. Lewisville\'s go-to for Japanese cuisine.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Yellowtail Jalapeño Roll is a guest favorite that delivers on both flavor and presentation.
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
                      <td className="py-4 text-right text-accent-red font-bold">$16.95</td>
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
                        <a href="tel:2144882224" className="text-accent-red hover:underline">
                          (214) 488-2224
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Ready to Try Yellowtail Jalapeño Roll?
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
                    href="tel:2144882224"
                    className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-3 font-semibold rounded-xl"
                  >
                    Call (214) 488-2224
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
                      <h3 className="font-medium text-charcoal pr-4">What is the Yellowtail Jalapeño Roll at Jinbeh Lewisville?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      The Yellowtail Jalapeño Roll at Jinbeh is fresh yellowtail with jalapeño and ponzu. Priced at \$16.95, it\'s handcrafted by our sushi chefs using the freshest ingredients delivered daily.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is the Yellowtail Jalapeño Roll made fresh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! All sushi at Jinbeh Lewisville is made to order. Our Yellowtail Jalapeño Roll is prepared by skilled sushi chefs who slice, roll, and plate each piece with precision and artistry.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What pairs well with Yellowtail Jalapeño Roll?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      We recommend pairing Yellowtail Jalapeño Roll with premium sake, Japanese beer (Sapporo, Asahi), or one of our signature cocktails. Our staff can suggest the perfect beverage pairing for your meal.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I order Yellowtail Jalapeño Roll for takeout?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Yellowtail Jalapeño Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 488-2224 to order.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Yellowtail Jalapeño Roll gluten-free?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Some ingredients in Yellowtail Jalapeño Roll may contain gluten. Please inform your server of any dietary restrictions and our chefs can accommodate most requests or suggest alternatives.
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
                href="/frisco/sushi-rolls/yellowtail-jalapeno"
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
