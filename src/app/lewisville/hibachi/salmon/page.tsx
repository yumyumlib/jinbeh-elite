import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hibachi Salmon Lewisville | Fresh Atlantic Salmon Teppanyaki",
  description: "Fresh Atlantic salmon grilled tableside. 200-250 calories per 5oz with 25-28g protein. Omega-3 rich, healthy choice. Includes soup, salad, rice, vegetables.",
  keywords: ["hibachi salmon lewisville","salmon teppanyaki restaurant lewisville tx","best hibachi near me lewisville","japanese steakhouse lewisville","hibachi salmon calories","omega-3 salmon health benefits","fresh fish hibachi","best hibachi lewisville tx"],
  openGraph: {
    title: "Hibachi Salmon | Jinbeh Lewisville",
    description: "Fresh Atlantic salmon with citrus teriyaki",
    url: "https://jinbeh.com/lewisville/hibachi/salmon",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/salmon",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Hibachi Salmon",
  "description": "Fresh Atlantic salmon with citrus teriyaki",
  "offers": {
    "@type": "Offer",
    "price": "28.95",
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
      "name": "What is Hibachi Salmon hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi Salmon at Jinbeh Lewisville is fresh atlantic salmon with citrus teriyaki. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at $28.95, it includes soup, salad, fried rice, and grilled vegetables."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Hibachi Salmon prepared at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our skilled hibachi chefs prepare Hibachi Salmon on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with Hibachi Salmon hibachi dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Hibachi Salmon hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Hibachi Salmon hibachi good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Hibachi Salmon is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get Hibachi Salmon hibachi for a group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Hibachi Salmon experience together. Easy access from I-35E, near Vista Ridge Mall."
      }
    }
  ]
};

export default function SalmonLewisvillePage() {
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
              <li><Link href="/lewisville/hibachi" className="hover:text-accent-red">Hibachi</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Hibachi Salmon</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/food/garlic-lemon-shrimp.jpg')" }} />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Hibachi • Jinbeh Lewisville
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Hibachi Salmon
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                Fresh Atlantic salmon with citrus teriyaki
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
                  About Hibachi Salmon
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional Hibachi Salmon at Jinbeh Lewisville.
                  Fresh Atlantic salmon with citrus teriyaki Our expert teppanyaki chefs prepare this dish tableside with entertaining flair.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Easy access from I-35E, near Vista Ridge Mall. Lewisville\'s go-to for Japanese cuisine.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  Hibachi Salmon is a guest favorite that delivers on both flavor and presentation.
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
                        <span className="text-accent-red font-bold">$28.95</span>
                        <span className="text-charcoal/70 text-xs block">*Pricing may vary. Specials available.</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Category</td>
                      <td className="py-4 text-right text-charcoal/80">Hibachi</td>
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
                  Ready to Try Hibachi Salmon?
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
                      <h3 className="font-medium text-charcoal pr-4">What is Hibachi Salmon hibachi at Jinbeh Lewisville?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Hibachi Salmon at Jinbeh Lewisville is fresh atlantic salmon with citrus teriyaki. It\'s prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at \$28.95, it includes soup, salad, fried rice, and grilled vegetables.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">How is the Hibachi Salmon prepared at Jinbeh?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Our skilled hibachi chefs prepare Hibachi Salmon on a 400°F teppanyaki grill right at your table. You\'ll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">What comes with Hibachi Salmon hibachi dinner?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Your Hibachi Salmon hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It\'s a complete dining experience.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Is Hibachi Salmon hibachi good for special occasions?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Absolutely! Hibachi Salmon is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event.
                    </p>
                  </details>
                  <details className="group border-b border-warm-ivory pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium text-charcoal pr-4">Can I get Hibachi Salmon hibachi for a group?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Hibachi Salmon experience together. Easy access from I-35E, near Vista Ridge Mall.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More Hibachi at Jinbeh Lewisville
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/lewisville/hibachi/filet-mignon"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Filet Mignon</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$34.95</p>
                  </Link>
                  <Link
                    href="/lewisville/hibachi/ny-strip"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">NY Strip Steak</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$32.95</p>
                  </Link>
                  <Link
                    href="/lewisville/hibachi/ribeye"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Ribeye Steak</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$35.95</p>
                  </Link>
                  <Link
                    href="/lewisville/hibachi/chicken-teriyaki"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Chicken Teriyaki</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$24.95</p>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/lewisville/hibachi"
                    className="text-deep-indigo hover:text-accent-red font-medium"
                  >
                    View All Hibachi →
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
                href="/frisco/hibachi/salmon"
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
