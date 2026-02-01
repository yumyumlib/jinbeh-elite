import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Filet Mignon Hibachi | Best Teppanyaki Steak Lewisville TX",
  description: "Premium filet mignon seared on our teppan grill. 200 cal, 25g protein. Hibachi dinner includes soup, salad, fried rice. Reserve at Jinbeh Lewisville.",
  keywords: ["filet mignon hibachi lewisville","best hibachi lewisville tx","hibachi near me lewisville","teppanyaki restaurant lewisville","hibachi filet mignon calories","japanese steakhouse lewisville","hibachi steak dinner","beef tenderloin hibachi"],
  openGraph: {
    title: "Filet Mignon | Jinbeh Lewisville",
    description: "Premium beef tenderloin, perfectly seared on the teppan grill",
    url: "https://jinbeh.com/lewisville/hibachi/filet-mignon",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/hibachi/filet-mignon",
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
      "name": "How many calories are in hibachi filet mignon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical hibachi filet mignon serving (4-6 oz) contains approximately 200-300 calories, with 25-30g of protein and 10-15g of fat. At Jinbeh, our filet mignon is prepared with minimal oil for a healthier option. The complete dinner with soup, salad, fried rice, and vegetables totals around 650-800 calories."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between hibachi and teppanyaki?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi refers to the style of grilling, while teppanyaki describes cooking on a flat iron griddle. At Jinbeh, we use authentic teppanyaki grills where our chefs perform tableside with knife tricks, the onion volcano, and flame shows. Both terms are often used interchangeably in American Japanese steakhouses."
      }
    },
    {
      "@type": "Question",
      "name": "What comes with hibachi filet mignon dinner at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Filet Mignon hibachi dinner ($34.95) includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces including yum yum sauce and mustard sauce."
      }
    },
    {
      "@type": "Question",
      "name": "Is hibachi filet mignon healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi filet mignon can be a healthy choice! It's high in protein (25-30g per serving), rich in iron and B vitamins, and lower in fat than other steak cuts. Request minimal butter and sauce on the side to reduce sodium and calories. The grilled vegetables add fiber and nutrients."
      }
    },
    {
      "@type": "Question",
      "name": "What cut of beef is hibachi steak at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh offers premium cuts including Filet Mignon (tenderloin - our most tender cut), NY Strip (balanced marbling and flavor), and Ribeye (rich marbling for maximum flavor). All are USDA Choice grade or higher, hand-selected for quality."
      }
    },
    {
      "@type": "Question",
      "name": "Can I make a reservation for hibachi at Jinbeh Lewisville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Reservations are highly recommended, especially for weekends and special occasions. Our hibachi tables seat 8-10 guests. Reserve online or call (972) 221-3888. We're located near Vista Ridge Mall in Lewisville, TX."
      }
    }
  ]
};

export default function FiletMignonLewisvillePage() {
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
              <li><Link href="/lewisville/hibachi" className="hover:text-accent-red">Hibachi</Link></li>
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
                Hibachi • Jinbeh Lewisville
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
                  Experience the exceptional Filet Mignon at Jinbeh Lewisville.
                  Premium beef tenderloin, perfectly seared on the teppan grill Our expert teppanyaki chefs prepare this dish tableside with entertaining flair.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Easy access from I-35E, near Vista Ridge Mall. Lewisville\'s go-to for Japanese cuisine.
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
                      <td className="py-4 text-right">
                        <span className="text-accent-red font-bold">$34.95</span>
                        <span className="text-charcoal/50 text-xs block">*Pricing may vary. Specials available.</span>
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
                  Ready to Try Filet Mignon?
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
                      <h3 className="font-medium text-charcoal pr-4">What is Filet Mignon hibachi at Jinbeh Lewisville?</h3>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-charcoal/70 leading-relaxed">
                      Filet Mignon at Jinbeh Lewisville is premium beef tenderloin, perfectly seared on the teppan grill. It\'s prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at \$34.95, it includes soup, salad, fried rice, and grilled vegetables.
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
                      Absolutely! Filet Mignon is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call (972) 221-3888 to reserve for your special event.
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
                      Yes! Jinbeh Lewisville specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the Filet Mignon experience together. Easy access from I-35E, near Vista Ridge Mall.
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
                  <Link
                    href="/lewisville/hibachi/shrimp"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">Jumbo Shrimp</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">$28.95</p>
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
                href="/frisco/hibachi/filet-mignon"
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
