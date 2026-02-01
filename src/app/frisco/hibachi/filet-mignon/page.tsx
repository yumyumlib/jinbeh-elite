import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Filet Mignon | Jinbeh Frisco Hibachi Menu",
  description: "Premium beef tenderloin, perfectly seared on the teppan grill Enjoy Filet Mignon at Jinbeh Japanese Restaurant in Frisco, TX. Near Stonebriar Centre, minutes from Legacy West. Call (214) 619-1200 to reserve.",
  keywords: ["filet mignon","filet mignon frisco","hibachi frisco","jinbeh filet mignon","best hibachi frisco","japanese restaurant frisco","hibachi","teppanyaki","japanese steakhouse","hibachi grill"],
  openGraph: {
    title: "Filet Mignon | Jinbeh Frisco",
    description: "Premium beef tenderloin, perfectly seared on the teppan grill",
    url: "https://jinbeh.com/frisco/hibachi/filet-mignon",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/hibachi/filet-mignon",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Filet Mignon",
  "description": "Premium beef tenderloin, perfectly seared on the teppan grill",
  "offers": {
    "@type": "Offer",
    "price": "34.95",
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
      "name": "What is Filet Mignon hibachi at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Filet Mignon at Jinbeh Frisco is premium beef tenderloin, perfectly seared on the teppan grill. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $34.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Filet Mignon prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Filet Mignon on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Filet Mignon hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Filet Mignon hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Filet Mignon hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Filet Mignon is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (214) 619-1200 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Filet Mignon hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Frisco specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Filet Mignon experience together. Near Stonebriar Centre, minutes from Legacy West."
      }
    }
  ]
};

export default function FiletMignonFriscoPage() {
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
              <li><Link href="/frisco/hibachi" className="hover:text-accent-red">Hibachi</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Filet Mignon</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/photoshoot/hibachi-flame-action.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Hibachi • Jinbeh Frisco
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Filet Mignon
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Premium beef tenderloin, perfectly seared on the teppan grill
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                $34.95
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
                  About Filet Mignon
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Filet Mignon at Jinbeh Frisco.
                  Premium beef tenderloin, perfectly seared on the teppan grill Our expert teppanyaki chefs prepare this dish tableside with entertaining flair.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Near Stonebriar Centre, minutes from Legacy West. The heart of Frisco\'s restaurant scene.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Filet Mignon is a guest favorite that delivers on both flavor and presentation.
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
                      <td className="py-4 text-right text-accent-red font-bold">$34.95</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Category</td>
                      <td className="py-4 text-right text-charcoal/80">Hibachi</td>
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
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Includes</td>
                      <td className="py-4 text-right text-charcoal/80">Soup, Salad, Rice, Vegetables</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Ready to Try Filet Mignon?
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
                      <h3 className="font-medium text-charcoal pr-4">What is Filet Mignon hibachi at Jinbeh Frisco?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Filet Mignon at Jinbeh Frisco is premium beef tenderloin, perfectly seared on the teppan grill. It\'s prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at \$34.95, it includes soup, salad, fried rice, and grilled vegetables.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">How is the Filet Mignon prepared at Jinbeh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Our skilled hibachi chefs prepare Filet Mignon on a 400°F teppanyaki grill right at your table. You\'ll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What comes with Filet Mignon hibachi dinner?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Your Filet Mignon hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It\'s a complete dining experience.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Filet Mignon hibachi good for special occasions?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Absolutely! Filet Mignon is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (214) 619-1200 to reserve for your special event.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I get Filet Mignon hibachi for a group?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Jinbeh Frisco specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Filet Mignon experience together. Near Stonebriar Centre, minutes from Legacy West.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More Hibachi at Jinbeh Frisco
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/frisco/hibachi/ny-strip"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">NY Strip Steak</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$32.95</p>
                  </Link>
                  <Link
                    href="/frisco/hibachi/ribeye"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Ribeye Steak</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$35.95</p>
                  </Link>
                  <Link
                    href="/frisco/hibachi/chicken-teriyaki"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Chicken Teriyaki</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$24.95</p>
                  </Link>
                  <Link
                    href="/frisco/hibachi/shrimp"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Jumbo Shrimp</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$28.95</p>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/frisco/hibachi"
                    className="text-deep-indigo hover:text-accent-red font-medium"
                  >
                    View All Hibachi →
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
                href="/lewisville/hibachi/filet-mignon"
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
