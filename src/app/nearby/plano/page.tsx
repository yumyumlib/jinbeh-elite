import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import locations from "@/data/locations.json";

const friscoLocation = locations.locations.frisco;
const lewisvilleLocation = locations.locations.lewisville;

export const metadata: Metadata = {
  title: "Japanese Restaurant Near Plano | Hibachi & Sushi | Jinbeh",
  description: "Looking for hibachi and sushi near Plano, TX? Jinbeh is only minutes away in Frisco! Authentic Japanese cuisine, teppanyaki shows, and fresh sushi. Reserve your table today.",
  keywords: [
    "japanese restaurant plano tx",
    "hibachi near plano",
    "sushi restaurants near plano",
    "best hibachi plano texas",
    "teppanyaki near plano tx",
    "japanese food plano",
    "hibachi restaurant near plano",
  ],
  alternates: {
    canonical: "https://jinbeh.com/nearby/plano",
  },
  openGraph: {
    title: "Japanese Restaurant Near Plano | Hibachi & Sushi | Jinbeh",
    description: "Authentic hibachi and sushi just minutes from Plano. Teppanyaki shows, fresh sushi bar, and full bar. Family-owned since 1988.",
    url: "https://jinbeh.com/nearby/plano",
    type: "website",
  },
};

// JSON-LD Schema for LocalBusiness pointing to Frisco
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jinbeh Japanese Restaurant Near Plano",
  image: "https://jinbeh.com/images/frisco-interior.jpg",
  description: "Authentic Japanese hibachi and sushi restaurant serving Plano residents. Located in Frisco, just minutes away.",
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
  areaServed: ["Plano", "Frisco", "Lewisville", "Dallas", "Texas"],
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

// FAQ Schema targeting Plano keywords
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is Jinbeh from Plano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco is located just 12 minutes from downtown Plano, making it the closest premium hibachi and sushi restaurant for Plano residents. Jinbeh Lewisville is also available, just 15 minutes away.",
      },
    },
    {
      "@type": "Question",
      name: "Is there hibachi near Plano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jinbeh offers authentic teppanyaki hibachi dining with skilled chefs who cook your meal tableside. Our Frisco location is just 12 minutes from Plano.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the best sushi restaurant near Plano, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco features a fresh sushi bar with master chefs preparing premium rolls, nigiri, and sashimi. Located just minutes from Plano at 2693 Preston Rd Suite 1040, Frisco, TX 75034.",
      },
    },
    {
      "@type": "Question",
      name: "Why should Plano residents choose Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh offers authentic Japanese cuisine prepared by skilled chefs, exciting hibachi tableside shows, a fresh sushi bar, full bar service, and family-friendly atmosphere. Family-owned since 1988 with nearly 40 years of tradition.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make a reservation from Plano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! You can reserve online through OpenTable or call our Frisco location at (214) 618-9888. We highly recommend reservations, especially for dinner and weekends.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh have private dining for Plano groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer private hibachi dining perfect for corporate events, family celebrations, and group gatherings. Contact us at (214) 618-9888 to arrange your private event.",
      },
    },
    {
      "@type": "Question",
      name: "What are the hours for hibachi service near Plano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lunch: Monday-Friday 11am-2pm, Saturday-Sunday 11:30am-2:30pm. Dinner: Sunday-Thursday 5pm-9pm, Friday-Saturday 5pm-10pm. Located in Frisco.",
      },
    },
  ],
};

export default function PlanoNearbyPage() {
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
              backgroundImage: "url('/images/frisco-interior.jpg')",
            }}
          />
          <div className="hero-overlay" />

          <div className="hero-content max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Plano&apos;s Favorite Japanese Restaurant<br />Is Just Minutes Away
            </h1>
            <p className="text-xl text-warm-ivory/90 mb-6">
              Only 12 minutes from downtown Plano
            </p>
            <p className="text-lg text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              Experience authentic Japanese hibachi and sushi at Jinbeh, conveniently located in Frisco. Watch skilled chefs perform exciting tableside shows while enjoying fresh, expertly prepared cuisine.
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
                <div className="text-5xl font-bold mb-2">12 mins</div>
                <p className="text-lg text-white/90">From Downtown Plano</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">7.2 miles</div>
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
              Why Plano Residents Choose Jinbeh
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Authentic Hibachi Shows
                </h3>
                <p className="text-charcoal/70">
                  Watch our skilled teppanyaki chefs perform dazzling tricks right at your table, including the famous onion volcano. Entertainment and amazing food in one experience.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🍣</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Fresh Sushi Bar
                </h3>
                <p className="text-charcoal/70">
                  Master sushi chefs prepare premium rolls, nigiri, and sashimi daily. Choose from creative specialty rolls or classic favorites prepared with the finest ingredients.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  37 Years of Excellence
                </h3>
                <p className="text-charcoal/70">
                  Family-owned since 1988, we've been serving North Texas families for nearly four decades with authentic Japanese cuisine and exceptional service.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Perfect for Celebrations
                </h3>
                <p className="text-charcoal/70">
                  Birthdays, anniversaries, and special events become unforgettable at Jinbeh. Our tableside hibachi shows make every celebration memorable.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🍸</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Full Bar & Happy Hour
                </h3>
                <p className="text-charcoal/70">
                  Enjoy premium sake, craft cocktails, and select wines. Ask about our Happy Hour specials featuring discounted appetizers and drinks.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Family-Friendly Atmosphere
                </h3>
                <p className="text-charcoal/70">
                  Kids love watching the hibachi shows, and we have options for all ages. A favorite dining destination for Plano families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-white">
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
                      Closest to Plano - 12 minutes
                    </p>
                  </div>
                </div>

                <address className="not-italic text-charcoal/80 mb-6 space-y-2">
                  <p className="font-medium">{friscoLocation.address.street}</p>
                  <p>{friscoLocation.address.suite}</p>
                  <p>
                    {friscoLocation.address.city}, {friscoLocation.address.state} {friscoLocation.address.zip}
                  </p>
                  <p className="text-sm text-charcoal/60">
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
                    <p className="text-sm font-semibold text-charcoal/60 mb-1">LUNCH</p>
                    <p className="text-charcoal">
                      <span className="font-medium">Mon-Fri:</span> {friscoLocation.hours.lunch.weekday.display}
                    </p>
                    <p className="text-charcoal">
                      <span className="font-medium">Sat-Sun:</span> {friscoLocation.hours.lunch.weekend.display}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal/60 mb-1">DINNER</p>
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
                      Alternative Option - 15 minutes
                    </p>
                  </div>
                </div>

                <address className="not-italic text-charcoal/80 mb-6 space-y-2">
                  <p className="font-medium">{lewisvilleLocation.address.street}</p>
                  <p>{lewisvilleLocation.address.suite}</p>
                  <p>
                    {lewisvilleLocation.address.city}, {lewisvilleLocation.address.state} {lewisvilleLocation.address.zip}
                  </p>
                  <p className="text-sm text-charcoal/60">
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
                    <p className="text-sm font-semibold text-charcoal/60 mb-1">LUNCH</p>
                    <p className="text-charcoal">
                      <span className="font-medium">Mon-Fri:</span> {lewisvilleLocation.hours.lunch.weekday.display}
                    </p>
                    <p className="text-charcoal">
                      <span className="font-medium">Sat-Sun:</span> {lewisvilleLocation.hours.lunch.weekend.display}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal/60 mb-1">DINNER</p>
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
              What We Offer
            </h2>
            <p className="text-warm-ivory/80 max-w-3xl mx-auto mb-12">
              From our skilled teppanyaki chefs to our fresh sushi bar, every experience at Jinbeh is crafted to exceed expectations. We combine authentic Japanese traditions with exceptional hospitality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🔪</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Hibachi Tableside
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Watch skilled chefs grill your meal with impressive knife skills and exciting showmanship.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🍣</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Sushi & Sashimi
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Premium rolls, nigiri, and sashimi prepared fresh by master sushi chefs daily.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🍶</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Premium Sake
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Curated selection of sake, wines, and craft cocktails to complement your meal.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Special Events
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Perfect for birthdays, anniversaries, celebrations, and corporate events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>How far is Jinbeh from downtown Plano?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Jinbeh Frisco is just 12 minutes from downtown Plano (approximately 7.2 miles), making it the closest premium hibachi and sushi restaurant for Plano residents. Jinbeh Lewisville is an alternative option about 15 minutes away.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Do you take reservations from Plano?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Absolutely! You can reserve online through OpenTable or call us directly. We recommend reservations, especially for dinner and weekends. Call Frisco at (214) 618-9888 or Lewisville at (214) 618-9798.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Is hibachi good for family celebrations?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Yes! Hibachi is perfect for birthdays, anniversaries, and family celebrations. Kids especially love watching the chefs perform tricks like the famous onion volcano. Our staff creates a festive atmosphere that makes every celebration memorable.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>What makes Jinbeh different from other Japanese restaurants?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Jinbeh combines nearly 40 years of family tradition with authentic Japanese cuisine, skilled teppanyaki chefs, a fresh sushi bar, and a commitment to exceptional service. We're not just a restaurant—we're an experience that creates lasting memories.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Do you offer private dining for corporate events?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Yes! We offer private hibachi dining perfect for team building, client entertainment, and corporate celebrations. Contact us to discuss your event requirements and customize the perfect experience.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>What are your lunch and dinner hours?</span>
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
              Ready to Experience Jinbeh?
            </h2>
            <p className="text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              Just 12 minutes from downtown Plano. Reserve your table today and discover why Plano residents love Jinbeh for hibachi, sushi, and unforgettable dining experiences.
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
