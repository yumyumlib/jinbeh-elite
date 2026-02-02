import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import locations from "@/data/locations.json";

const friscoLocation = locations.locations.frisco;
const lewisvilleLocation = locations.locations.lewisville;

export const metadata: Metadata = {
  title: "Sushi Richardson TX | Premium Japanese Restaurant | Jinbeh",
  description: "Best sushi restaurant in Richardson, TX. Jinbeh offers fresh premium sushi and authentic Japanese cuisine just minutes from Richardson in Frisco. Reserve your table for an exceptional dining experience.",
  keywords: [
    "sushi richardson tx",
    "sushi restaurant richardson texas",
    "best sushi richardson",
    "japanese food richardson",
    "sushi bar richardson tx",
    "premium sushi richardson",
    "sushi near richardson",
  ],
  alternates: {
    canonical: "https://jinbeh.com/nearby/richardson",
  },
  openGraph: {
    title: "Sushi Richardson TX | Premium Japanese Restaurant | Jinbeh",
    description: "Experience premium sushi and authentic Japanese cuisine just minutes from Richardson. Expert sushi chefs, hibachi shows, and full bar. Reserve now!",
    url: "https://jinbeh.com/nearby/richardson",
    type: "website",
  },
};

// JSON-LD Schema for LocalBusiness pointing to Frisco
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jinbeh Sushi Restaurant Near Richardson",
  image: "https://jinbeh.com/images/frisco-interior.jpg",
  description: "Premium sushi restaurant and Japanese hibachi serving Richardson residents. Located in Frisco, just minutes away with fresh sushi bar.",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${friscoLocation.address.street} ${friscoLocation.address.suite}`,
    addressLocality: friscoLocation.address.city,
    addressRegion: friscoLocation.address.state,
    postalCode: friscoLocation.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: friscoLocation.geo.latitude,
    longitude: friscoLocation.geo.longitude,
  },
  url: "https://jinbeh.com/frisco",
  telephone: friscoLocation.phone,
  servesCuisine: ["Japanese", "Sushi", "Hibachi", "Teppanyaki"],
  priceRange: "$$",
  areaServed: ["Richardson", "Frisco", "Lewisville", "Dallas", "Texas"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "22:00",
    },
  ],
  acceptsReservations: true,
  hasMenu: friscoLocation.menus.dinner,
};

// FAQ Schema targeting Richardson keywords
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the best sushi restaurant in Richardson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco offers the finest premium sushi in the area, just 13 minutes from Richardson. Our master sushi chefs prepare fresh rolls, nigiri, and sashimi daily with the highest quality ingredients.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Jinbeh sushi from Richardson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco is located just 13 minutes from Richardson, making it the premier sushi destination for Richardson residents. Jinbeh Lewisville is also available, approximately 16 minutes away.",
      },
    },
    {
      "@type": "Question",
      name: "What makes sushi at Jinbeh special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our master sushi chefs bring decades of expertise to every roll. We use premium ingredients, traditional techniques, and creative specialty rolls. From classic nigiri to artistic specialty creations, every piece is crafted with precision.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a sushi reservation from Richardson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! You can reserve a table at our fresh sushi bar online through OpenTable or call our Frisco location at (214) 619-1200. Reservations are recommended for dinner service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer fresh sushi rolls near Richardson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We prepare fresh sushi rolls daily. Choose from classic rolls like California and Spicy Tuna, or try our creative specialty rolls designed by our master chefs. All rolls are made with premium fish and the finest ingredients.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have sushi happy hour near Richardson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Ask about our Happy Hour specials featuring discounted sushi rolls, appetizers, and drinks. It's a great way to enjoy premium sushi at special prices. Call Frisco at (214) 619-1200 for details.",
      },
    },
    {
      "@type": "Question",
      name: "What are the sushi menu hours near Richardson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lunch: Monday-Friday 11am-2pm, Saturday-Sunday 11:30am-2:30pm. Dinner: Sunday-Thursday 5pm-9pm, Friday-Saturday 5pm-10pm. Sushi bar available during all service hours at our Frisco location.",
      },
    },
  ],
};

export default function RichardsonNearbyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Hero Section */}
        <section className="hero relative bg-charcoal">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/catalog/27-C060324-6888.jpg')",
            }}
          />
          <div className="hero-overlay" />

          <div className="hero-content max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Richardson&apos;s Premier Sushi Bar<br />Is Just 13 Minutes Away
            </h1>
            <p className="text-xl text-warm-ivory/90 mb-6">
              Premium sushi at Jinbeh Frisco
            </p>
            <p className="text-lg text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              Experience the artistry of master sushi chefs at Jinbeh. Fresh premium ingredients, creative specialty rolls, and traditional techniques combine to create exceptional sushi experiences for Richardson residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reserve"
                className="btn btn-primary btn-shimmer"
              >
                Reserve Your Table
              </a>
              <a
                href={`tel:${friscoLocation.phoneClean}`}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal"
              >
                Call {friscoLocation.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Distance & Directions Section */}
        <section className="py-16 bg-accent-red text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">13 mins</div>
                <p className="text-lg text-white/90">From Richardson</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">8.1 miles</div>
                <p className="text-lg text-white/90">Direct Route</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">2 Locations</div>
                <p className="text-lg text-white/90">Frisco & Lewisville</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Jinbeh Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Why Richardson Residents Choose Jinbeh for Sushi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card">
                <div className="text-4xl mb-4">🍣</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Master Sushi Chefs
                </h3>
                <p className="text-charcoal/70">
                  Our expert sushi chefs bring decades of experience and traditional Japanese training. Every roll is crafted with precision, artistic presentation, and premium ingredients.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Premium Fresh Ingredients
                </h3>
                <p className="text-charcoal/70">
                  We source the finest sushi-grade fish, the freshest vegetables, and premium nori. Quality ingredients make the difference in every bite.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Creative Specialty Rolls
                </h3>
                <p className="text-charcoal/70">
                  Beyond classics, our chefs create innovative specialty rolls. From artistic presentations to unique flavor combinations, discover new favorites.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Hibachi Excellence
                </h3>
                <p className="text-charcoal/70">
                  Pair sushi with our exciting hibachi tableside shows. Experience the complete Japanese culinary tradition in one restaurant.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🍶</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Premium Sake & Beverages
                </h3>
                <p className="text-charcoal/70">
                  Curated sake selection, craft cocktails, and wines chosen to complement sushi. Our bartenders create perfect pairings.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  37 Years of Expertise
                </h3>
                <p className="text-charcoal/70">
                  Family-owned since 1988, we've perfected the sushi craft. Nearly four decades of tradition and excellence in every roll.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="reserve" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Choose Your Nearest Location
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Frisco Location */}
              <div className="card border-2 border-accent-red">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-charcoal">
                      Jinbeh Frisco
                    </h3>
                    <p className="text-accent-red font-semibold">
                      Closest to Richardson - 13 minutes
                    </p>
                  </div>
                </div>

                <address className="not-italic text-charcoal/80 mb-6 space-y-2">
                  <p className="font-medium">{friscoLocation.address.street}</p>
                  <p>{friscoLocation.address.suite}</p>
                  <p>
                    {friscoLocation.address.city}, {friscoLocation.address.state} {friscoLocation.address.zip}
                  </p>
                  <p className="text-sm text-charcoal/80">
                    Near Stonebriar Centre Mall, Legacy West
                  </p>
                </address>

                <a
                  href={`tel:${friscoLocation.phoneClean}`}
                  className="block text-accent-red hover:text-deep-indigo transition-colors font-semibold mb-6"
                >
                  {friscoLocation.phone}
                </a>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-charcoal/80 mb-1">LUNCH</p>
                    <p className="text-charcoal">
                      <span className="font-medium">Mon-Fri:</span> {friscoLocation.hours.lunch.weekday.display}
                    </p>
                    <p className="text-charcoal">
                      <span className="font-medium">Sat-Sun:</span> {friscoLocation.hours.lunch.weekend.display}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal/80 mb-1">DINNER</p>
                    <p className="text-charcoal">
                      <span className="font-medium">Sun-Thu:</span> {friscoLocation.hours.dinner.sunThurs.display}
                    </p>
                    <p className="text-charcoal">
                      <span className="font-medium">Fri-Sat:</span> {friscoLocation.hours.dinner.friSat.display}
                    </p>
                  </div>
                </div>

                <Link
                  href="/frisco"
                  className="btn btn-primary w-full mb-3"
                >
                  View Full Details
                </Link>
                <a
                  href={friscoLocation.reservation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  Reserve at Frisco
                </a>
              </div>

              {/* Lewisville Location */}
              <div className="card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-charcoal">
                      Jinbeh Lewisville
                    </h3>
                    <p className="text-cedar-brown font-semibold">
                      Alternative Option - 16 minutes
                    </p>
                  </div>
                </div>

                <address className="not-italic text-charcoal/80 mb-6 space-y-2">
                  <p className="font-medium">{lewisvilleLocation.address.street}</p>
                  <p>{lewisvilleLocation.address.suite}</p>
                  <p>
                    {lewisvilleLocation.address.city}, {lewisvilleLocation.address.state} {lewisvilleLocation.address.zip}
                  </p>
                  <p className="text-sm text-charcoal/80">
                    Easy access from I-35E, Vista Ridge Mall area
                  </p>
                </address>

                <a
                  href={`tel:${lewisvilleLocation.phoneClean}`}
                  className="block text-accent-red hover:text-deep-indigo transition-colors font-semibold mb-6"
                >
                  {lewisvilleLocation.phone}
                </a>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-charcoal/80 mb-1">LUNCH</p>
                    <p className="text-charcoal">
                      <span className="font-medium">Mon-Fri:</span> {lewisvilleLocation.hours.lunch.weekday.display}
                    </p>
                    <p className="text-charcoal">
                      <span className="font-medium">Sat-Sun:</span> {lewisvilleLocation.hours.lunch.weekend.display}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal/80 mb-1">DINNER</p>
                    <p className="text-charcoal">
                      <span className="font-medium">Sun-Thu:</span> {lewisvilleLocation.hours.dinner.sunThurs.display}
                    </p>
                    <p className="text-charcoal">
                      <span className="font-medium">Fri-Sat:</span> {lewisvilleLocation.hours.dinner.friSat.display}
                    </p>
                  </div>
                </div>

                <Link
                  href="/lewisville"
                  className="btn btn-primary w-full mb-3"
                >
                  View Full Details
                </Link>
                <a
                  href={lewisvilleLocation.reservation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  Reserve at Lewisville
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-charcoal text-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              The Jinbeh Sushi Experience
            </h2>
            <p className="text-warm-ivory/80 max-w-3xl mx-auto mb-12">
              Sushi is an art form. Our master chefs combine traditional techniques with premium ingredients to create sushi that's both beautiful and delicious.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🍣</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Sushi & Sashimi
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Premium nigiri, sashimi, and rolls prepared fresh daily with the finest sushi-grade fish.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Creative Rolls
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Specialty rolls created by master chefs with unique flavor combinations and artistic presentations.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🔪</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Hibachi Tableside
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Pair sushi with hibachi shows featuring skilled teppanyaki chefs and spectacular knife skills.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🍶</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Premium Sake
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Curated sake selection, wines, and craft cocktails to complement your sushi perfectly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Sushi Questions from Richardson
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>How far is the sushi bar from Richardson?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Jinbeh Frisco is just 13 minutes from Richardson (approximately 8.1 miles), making it the closest premium sushi bar for Richardson residents. Jinbeh Lewisville is an alternative option about 16 minutes away.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Can I book a sushi reservation from Richardson?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Absolutely! You can reserve a table at our sushi bar online through OpenTable or call us directly. We recommend reservations, especially for dinner and weekends. Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>What makes Jinbeh sushi exceptional?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Our master sushi chefs bring decades of expertise and traditional Japanese training. We use premium sushi-grade fish, the freshest ingredients, and traditional techniques. Every roll is a work of art crafted with precision and passion.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Do you have specialty sushi rolls?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Yes! Beyond classic rolls, our chefs create innovative specialty rolls with unique flavor combinations. Check our sushi menu for seasonal creations and signature rolls designed by our master chefs.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>What pairs well with sushi?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  We offer a curated sake selection, premium wines, and craft cocktails chosen to complement sushi perfectly. Our bartenders can recommend pairings for any roll. Ask our staff for personalized recommendations.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>What are your sushi service hours?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  <strong>Frisco Lunch:</strong> Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm<br />
                  <strong>Frisco Dinner:</strong> Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm<br />
                  <strong>Lewisville Lunch:</strong> Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm<br />
                  <strong>Lewisville Dinner:</strong> Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-deep-indigo text-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Ready for Premium Sushi?
            </h2>
            <p className="text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              Just 13 minutes from Richardson. Reserve your table at our sushi bar today and discover why Richardson residents choose Jinbeh for the finest sushi and Japanese cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={friscoLocation.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-shimmer"
              >
                Reserve at Frisco Now
              </a>
              <a
                href={lewisvilleLocation.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-deep-indigo"
              >
                Reserve at Lewisville
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Explore More
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link
                href="/frisco/menu"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">📖</span>
                <span className="font-medium text-charcoal">Frisco Menu</span>
              </Link>
              <Link
                href="/lewisville/menu"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">📋</span>
                <span className="font-medium text-charcoal">Lewisville Menu</span>
              </Link>
              <Link
                href="/celebrations"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal">Celebrations</span>
              </Link>
              <Link
                href="/happy-hour"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">🍹</span>
                <span className="font-medium text-charcoal">Happy Hour</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="sticky-cta-mobile">
          <a
            href={friscoLocation.reservation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1"
          >
            Reserve Table
          </a>
          <a
            href={`tel:${friscoLocation.phoneClean}`}
            className="btn btn-secondary flex-1"
          >
            Call Now
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
