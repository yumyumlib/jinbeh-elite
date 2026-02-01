import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import locations from "@/data/locations.json";

const friscoLocation = locations.locations.frisco;
const lewisvilleLocation = locations.locations.lewisville;

export const metadata: Metadata = {
  title: "Hibachi Denton TX | Premium Teppanyaki Restaurant | Jinbeh",
  description: "Best hibachi restaurant in Denton, TX. Jinbeh offers authentic teppanyaki shows and premium Japanese cuisine just minutes from Denton in Lewisville and Frisco. Reserve your table for an unforgettable hibachi experience.",
  keywords: [
    "hibachi denton tx",
    "hibachi restaurant denton texas",
    "teppanyaki denton",
    "best hibachi denton",
    "japanese restaurant denton",
    "hibachi dinner denton",
    "teppanyaki near denton",
  ],
  alternates: {
    canonical: "https://jinbeh.com/nearby/denton",
  },
  openGraph: {
    title: "Hibachi Denton TX | Premium Teppanyaki Restaurant | Jinbeh",
    description: "Experience authentic hibachi teppanyaki shows just minutes from Denton. Skilled chefs, exciting tableside dining, and premium Japanese cuisine. Reserve now!",
    url: "https://jinbeh.com/nearby/denton",
    type: "website",
  },
};

// JSON-LD Schema for LocalBusiness pointing to Lewisville
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jinbeh Hibachi Restaurant Near Denton",
  image: "https://jinbeh.com/images/frisco-interior.jpg",
  description: "Authentic hibachi teppanyaki restaurant serving Denton residents. Located in Lewisville and Frisco, just minutes away with exciting tableside shows.",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${lewisvilleLocation.address.street} ${lewisvilleLocation.address.suite}`,
    addressLocality: lewisvilleLocation.address.city,
    addressRegion: lewisvilleLocation.address.state,
    postalCode: lewisvilleLocation.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: lewisvilleLocation.geo.latitude,
    longitude: lewisvilleLocation.geo.longitude,
  },
  url: "https://jinbeh.com/lewisville",
  telephone: lewisvilleLocation.phone,
  servesCuisine: ["Japanese", "Sushi", "Hibachi", "Teppanyaki"],
  priceRange: "$$",
  areaServed: ["Denton", "Lewisville", "Frisco", "Dallas", "Texas"],
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
  hasMenu: lewisvilleLocation.menus.dinner,
};

// FAQ Schema targeting Denton keywords
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the best hibachi in Denton, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Lewisville offers the finest hibachi teppanyaki experience in the area, just 16 minutes from Denton. Our skilled chefs perform spectacular shows with knife tricks, flaming presentations, and the famous onion volcano.",
      },
    },
    {
      "@type": "Question",
      name: "How far is hibachi from Denton at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Lewisville is located just 16 minutes from Denton, making it the premier hibachi destination for Denton residents. Jinbeh Frisco is also available, approximately 20 minutes away.",
      },
    },
    {
      "@type": "Question",
      name: "What makes hibachi at Jinbeh special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh hibachi features skilled teppanyaki chefs who perform entertaining knife tricks, flaming presentations, and cook your meal right in front of you. The famous onion volcano, knife skills, and showmanship create an unforgettable dining experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book hibachi from Denton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! You can reserve a hibachi table online through OpenTable or call our Lewisville location at (214) 488-2224. Reservations are highly recommended, especially for dinner and weekends.",
      },
    },
    {
      "@type": "Question",
      name: "Is hibachi good for birthday celebrations in Denton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Hibachi is perfect for birthdays and celebrations. The entertaining tableside shows and skilled chefs make every celebration memorable. Kids especially love watching the chefs perform tricks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer hibachi for corporate team building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer private hibachi dining perfect for corporate team building, client entertainment, and business celebrations from Denton. Contact us at (214) 488-2224 to arrange your event.",
      },
    },
    {
      "@type": "Question",
      name: "What are hibachi service hours near Denton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lunch: Monday-Friday 11am-2pm, Saturday-Sunday 11:30am-2:30pm. Dinner: Sunday-Thursday 5pm-9pm, Friday-Saturday 5pm-10pm. Located in Lewisville, just 16 minutes from Denton.",
      },
    },
  ],
};

export default function DentonNearbyPage() {
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
              backgroundImage: "url('/images/interior/JinbehFrisco_SushiBar.jpg')",
            }}
          />
          <div className="hero-overlay" />

          <div className="hero-content max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Denton&apos;s Premier Hibachi<br />Is Just 16 Minutes Away
            </h1>
            <p className="text-xl text-warm-ivory/90 mb-6">
              Authentic teppanyaki shows at Jinbeh Lewisville
            </p>
            <p className="text-lg text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              Experience the excitement of hibachi teppanyaki with skilled chefs cooking your meal tableside. Watch spectacular knife tricks, the famous onion volcano, and culinary artistry that make Jinbeh unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reserve"
                className="btn btn-primary btn-shimmer"
              >
                Reserve Your Table
              </a>
              <a
                href={`tel:${lewisvilleLocation.phoneClean}`}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal"
              >
                Call {lewisvilleLocation.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Distance & Directions Section */}
        <section className="py-16 bg-accent-red text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">16 mins</div>
                <p className="text-lg text-white/90">From Denton</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10.2 miles</div>
                <p className="text-lg text-white/90">Direct Route</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">2 Locations</div>
                <p className="text-lg text-white/90">Lewisville & Frisco</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Jinbeh Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Why Denton Residents Choose Jinbeh for Hibachi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Spectacular Hibachi Shows
                </h3>
                <p className="text-charcoal/70">
                  Watch skilled teppanyaki chefs perform dazzling tricks right at your table. The famous onion volcano, flying shrimp catches, and knife skills create an entertaining and delicious experience.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Skilled Chef Performances
                </h3>
                <p className="text-charcoal/70">
                  Our teppanyaki chefs are trained in both culinary excellence and entertainment. Every meal is cooked fresh with impressive technique and showmanship that amazes diners.
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
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Perfect for Celebrations
                </h3>
                <p className="text-charcoal/70">
                  Birthdays, anniversaries, and special events become unforgettable at Jinbeh. The hibachi experience makes every celebration memorable and entertaining.
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
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  37 Years of Excellence
                </h3>
                <p className="text-charcoal/70">
                  Family-owned since 1988, we've perfected the hibachi and sushi experience. Our tradition means superior quality and consistent excellence.
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
              {/* Lewisville Location */}
              <div className="card border-2 border-accent-red">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-charcoal">
                      Jinbeh Lewisville
                    </h3>
                    <p className="text-accent-red font-semibold">
                      Closest to Denton - 16 minutes
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

              {/* Frisco Location */}
              <div className="card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-charcoal">
                      Jinbeh Frisco
                    </h3>
                    <p className="text-cedar-brown font-semibold">
                      Alternative Option - 20 minutes
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
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-charcoal text-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              The Jinbeh Hibachi Experience
            </h2>
            <p className="text-warm-ivory/80 max-w-3xl mx-auto mb-12">
              More than just a meal—a spectacular performance. Our teppanyaki chefs combine culinary skill with entertaining showmanship, creating unforgettable dining moments for Denton residents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🔪</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Hibachi Tableside
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Watch skilled chefs grill your meal with impressive knife skills and exciting showmanship at your table.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🍣</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Sushi & Sashimi
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Premium rolls, nigiri, and sashimi prepared fresh by master sushi chefs daily with precision.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🍶</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Premium Sake
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Curated selection of sake, wines, and craft cocktails to complement your hibachi and sushi.
                </p>
              </div>

              <div className="p-6 bg-charcoal border border-warm-ivory/20 rounded-xl">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Special Events
                </h3>
                <p className="text-warm-ivory/70 text-sm">
                  Perfect for birthdays, anniversaries, celebrations, and corporate team building events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Hibachi Questions from Denton
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>How far is hibachi from Denton?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Jinbeh Lewisville is just 16 minutes from Denton (approximately 10.2 miles), making it the closest premium hibachi restaurant for Denton residents. Jinbeh Frisco is an alternative option about 20 minutes away.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Can I book hibachi reservations from Denton?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Absolutely! You can reserve a hibachi table online through OpenTable or call us directly. We recommend reservations, especially for dinner and weekends. Call Lewisville at (214) 488-2224 or Frisco at (214) 619-1200.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>What makes hibachi at Jinbeh special?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Our teppanyaki chefs are trained in both culinary excellence and entertainment. With nearly 40 years of tradition, we deliver authentic hibachi performances combined with superior ingredients and masterful technique.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Is hibachi good for corporate team building?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Yes! Hibachi is perfect for corporate team building and business celebrations. The entertainment value and shared experience create a memorable event. Contact us to arrange private hibachi for your group.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>Do you offer private hibachi for Denton groups?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  Yes! We offer private hibachi dining perfect for team building, client entertainment, and corporate celebrations. Contact us at (214) 488-2224 to arrange your private hibachi event.
                </p>
              </details>

              <details className="group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors">
                <summary className="flex items-center justify-between font-semibold text-charcoal">
                  <span>What are your hibachi service hours?</span>
                  <svg className="w-5 h-5 text-accent-red group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <p className="text-charcoal/70 mt-4">
                  <strong>Lewisville Lunch:</strong> Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm<br />
                  <strong>Lewisville Dinner:</strong> Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm<br />
                  <strong>Frisco Lunch:</strong> Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm<br />
                  <strong>Frisco Dinner:</strong> Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-deep-indigo text-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Ready for Hibachi in Denton?
            </h2>
            <p className="text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              Just 16 minutes from Denton. Reserve your hibachi table today and experience the excitement, entertainment, and authentic Japanese cuisine that makes Jinbeh special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={lewisvilleLocation.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-shimmer"
              >
                Reserve at Lewisville Now
              </a>
              <a
                href={friscoLocation.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-deep-indigo"
              >
                Reserve at Frisco
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
            href={lewisvilleLocation.reservation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1"
          >
            Reserve Table
          </a>
          <a
            href={`tel:${lewisvilleLocation.phoneClean}`}
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
