import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Butterfly Kiss Roll | Jinbeh Frisco Sushi Rolls Menu",
  description: "House specialty with cream cheese and crab Enjoy Butterfly Kiss Roll at Jinbeh Japanese Restaurant in Frisco, TX. Near Stonebriar Centre, minutes from Legacy West. Call (214) 619-1200 to reserve.",
  keywords: ["butterfly kiss roll","butterfly kiss roll frisco","sushi rolls frisco","jinbeh butterfly kiss roll","best sushi rolls frisco","japanese restaurant frisco","sushi rolls","specialty rolls","maki","uramaki"],
  openGraph: {
    title: "Butterfly Kiss Roll | Jinbeh Frisco",
    description: "House specialty with cream cheese and crab",
    url: "https://jinbeh.com/frisco/sushi-rolls/butterfly-kiss",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls/butterfly-kiss",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Butterfly Kiss Roll",
  "description": "House specialty with cream cheese and crab",
  "offers": {
    "@type": "Offer",
    "price": "18.95",
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
      "name": "What is the Butterfly Kiss Roll at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Butterfly Kiss Roll at Jinbeh is house specialty with cream cheese and crab. Priced at $18.95, it's handcrafted by our sushi chefs using the freshest ingredients delivered daily."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Butterfly Kiss Roll made fresh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All sushi at Jinbeh Frisco is made to order. Our Butterfly Kiss Roll is prepared by skilled sushi chefs who slice, roll, and plate each piece with precision and artistry."
      }
    },
    {
      "@type": "Question",
      "name": "What pairs well with Butterfly Kiss Roll?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend pairing Butterfly Kiss Roll with premium sake, Japanese beer (Sapporo, Asahi), or one of our signature cocktails. Our staff can suggest the perfect beverage pairing for your meal."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Butterfly Kiss Roll for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Butterfly Kiss Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 619-1200 to order."
      }
    },
    {
      "@type": "Question",
      "name": "Is Butterfly Kiss Roll gluten-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some ingredients in Butterfly Kiss Roll may contain gluten. Please inform your server of any dietary restrictions and our chefs can accommodate most requests or suggest alternatives."
      }
    }
  ]
};

export default function ButterflyKissFriscoPage() {
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
              <li><Link href="/frisco/sushi-rolls" className="hover:text-accent-red">Sushi Rolls</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Butterfly Kiss Roll</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/catalog/25-C060324-6856.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Sushi Rolls • Jinbeh Frisco
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Butterfly Kiss Roll
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                House specialty with cream cheese and crab
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $18.95
              </p>
            </div>
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
                  About Butterfly Kiss Roll
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Butterfly Kiss Roll at Jinbeh Frisco.
                  House specialty with cream cheese and crab Our skilled chefs craft this dish with precision and artistry.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Near Stonebriar Centre, minutes from Legacy West. The heart of Frisco\'s restaurant scene.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Butterfly Kiss Roll is a guest favorite that delivers on both flavor and presentation.
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
                      <td className="py-4 text-right text-accent-red font-bold">$18.95</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Category</td>
                      <td className="py-4 text-right text-charcoal/80">Sushi Rolls</td>
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
                  Ready to Try Butterfly Kiss Roll?
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
                      <h3 className="font-medium text-charcoal pr-4">What is the Butterfly Kiss Roll at Jinbeh Frisco?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      The Butterfly Kiss Roll at Jinbeh is house specialty with cream cheese and crab. Priced at \$18.95, it\'s handcrafted by our sushi chefs using the freshest ingredients delivered daily.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is the Butterfly Kiss Roll made fresh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! All sushi at Jinbeh Frisco is made to order. Our Butterfly Kiss Roll is prepared by skilled sushi chefs who slice, roll, and plate each piece with precision and artistry.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What pairs well with Butterfly Kiss Roll?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      We recommend pairing Butterfly Kiss Roll with premium sake, Japanese beer (Sapporo, Asahi), or one of our signature cocktails. Our staff can suggest the perfect beverage pairing for your meal.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I order Butterfly Kiss Roll for takeout?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Butterfly Kiss Roll is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call (214) 619-1200 to order.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Butterfly Kiss Roll gluten-free?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Some ingredients in Butterfly Kiss Roll may contain gluten. Please inform your server of any dietary restrictions and our chefs can accommodate most requests or suggest alternatives.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More Sushi Rolls at Jinbeh Frisco
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/frisco/sushi-rolls/dragon-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Dragon Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$16.95</p>
                  </Link>
                  <Link
                    href="/frisco/sushi-rolls/rainbow-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Rainbow Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$17.95</p>
                  </Link>
                  <Link
                    href="/frisco/sushi-rolls/spider-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Spider Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$15.95</p>
                  </Link>
                  <Link
                    href="/frisco/sushi-rolls/caterpillar-roll"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Caterpillar Roll</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$15.95</p>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/frisco/sushi-rolls"
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
                href="/lewisville/sushi-rolls/butterfly-kiss"
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
