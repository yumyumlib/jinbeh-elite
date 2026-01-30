import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Japanese Restaurant Castle Hills Lewisville | Jinbeh Hibachi & Sushi",
  description:
    "Discover authentic Japanese cuisine in Castle Hills, Lewisville! Jinbeh offers hibachi shows, fresh sushi, and teppanyaki dining. Perfect for families and celebrations.",
  keywords: [
    "japanese restaurant castle hills lewisville",
    "hibachi near castle hills",
    "sushi restaurants castle hills tx",
    "teppanyaki lewisville castle hills",
    "best japanese food castle hills",
  ],
  openGraph: {
    title: "Japanese Restaurant Castle Hills Lewisville | Jinbeh Hibachi & Sushi",
    description:
      "Authentic hibachi and sushi near Castle Hills, Lewisville. Exciting teppanyaki shows and fresh Japanese cuisine.",
    url: "https://jinbeh.com/lewisville/castle-hills",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/castle-hills",
  },
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://jinbeh.com/lewisville#restaurant",
  name: "Jinbeh Japanese Restaurant - Lewisville (Near Castle Hills)",
  image: "https://jinbeh.com/images/lewisville-exterior.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2401 S Stemmons Fwy, Suite 2049",
    addressLocality: "Lewisville",
    addressRegion: "TX",
    postalCode: "75067",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.8343,
    longitude: -96.9657,
  },
  url: "https://jinbeh.com/lewisville",
  telephone: "(972) 221-6888",
  servesCuisine: ["Japanese", "Sushi", "Hibachi", "Teppanyaki"],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 32.8343,
      longitude: -96.9657,
    },
    geoRadius: "5000",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How close is Jinbeh Lewisville to Castle Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Lewisville is conveniently located just minutes away from Castle Hills area in Lewisville. We're easily accessible from Castle Hills Village Shops and surrounding neighborhoods for a quick dinner outing.",
      },
    },
    {
      "@type": "Question",
      name: "What hibachi options are available at Jinbeh in Castle Hills area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Lewisville location near Castle Hills offers full hibachi dining with talented teppanyaki chefs who perform exciting shows tableside. Enjoy your meal cooked right in front of you with spectacular knife tricks and the famous onion volcano!",
      },
    },
    {
      "@type": "Question",
      name: "Are reservations recommended for dining near Castle Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we strongly recommend making reservations for hibachi tables, especially on weekends and holidays. You can book online or call us at (972) 221-6888 to secure your table.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Jinbeh the best Japanese restaurant in Castle Hills area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh stands out with over 37 years of excellence, offering authentic hibachi entertainment, meticulously crafted sushi from our master chefs, a full bar with premium sake, and a welcoming atmosphere perfect for families and celebrations.",
      },
    },
  ],
};

const nearbyAttractions = [
  {
    name: "Castle Hills Village Shops",
    distance: "2 min drive",
    description: "Convenient shopping center with local retailers and dining",
  },
  {
    name: "Vista Ridge Mall",
    distance: "5 min drive",
    description: "Major shopping destination with 100+ stores and restaurants",
  },
  {
    name: "Music City Mall",
    distance: "8 min drive",
    description: "Entertainment and shopping complex near Lake Lewisville",
  },
  {
    name: "Lake Lewisville",
    distance: "10 min drive",
    description: "Popular recreation area for fishing, boating, and outdoor activities",
  },
];

export default function CastleHillsPage() {
  return (
    <>
      <Header location="lewisville" />
      <main className="min-h-screen">
        {/* Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://jinbeh.com/wp-content/uploads/2023/01/lewisville-interior.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Serving Castle Hills & Lewisville
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Japanese Restaurant Near Castle Hills
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Experience authentic hibachi entertainment and fresh sushi at Jinbeh Lewisville –
              your premier destination for Japanese cuisine in the Castle Hills area!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lewisville#reserve"
                className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve Your Table
              </Link>
              <Link
                href="/lewisville/menu"
                className="btn bg-white/20 backdrop-blur text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-semibold rounded-xl"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Jinbeh Lewisville Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                    Why Choose Jinbeh Lewisville?
                  </h2>
                  <p className="text-lg text-charcoal/70 mb-6">
                    Conveniently located near Castle Hills and serving the greater Lewisville community,
                    Jinbeh has been the go-to destination for authentic Japanese cuisine for over 37 years.
                    Whether you're celebrating a special occasion, enjoying a family dinner, or looking for
                    the best hibachi and sushi experience in the area, our talented chefs deliver an unforgettable
                    culinary journey.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-charcoal">Exciting Hibachi Shows</span>
                        <p className="text-charcoal/70 text-sm">Watch skilled teppanyaki chefs perform tableside with impressive tricks and the famous onion volcano</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-charcoal">Premium Fresh Sushi</span>
                        <p className="text-charcoal/70 text-sm">Hand-crafted sushi rolls and sashimi from our master chefs using the finest ingredients</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-charcoal">Family-Friendly Atmosphere</span>
                        <p className="text-charcoal/70 text-sm">Perfect spot for family dinners, celebrations, and special occasions in the Castle Hills area</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-charcoal">Full Bar & Premium Sake</span>
                        <p className="text-charcoal/70 text-sm">Extensive drink selection including premium sake, Japanese beer, and craft cocktails</p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="/lewisville"
                    className="inline-flex items-center gap-2 text-accent-red font-semibold hover:gap-3 transition-all"
                  >
                    Learn More About Jinbeh Lewisville
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-performance.jpg"
                      alt="Hibachi chef cooking at Jinbeh Lewisville near Castle Hills"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-accent-red/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Conveniently Located Near Castle Hills Attractions
              </h2>
              <p className="text-lg text-charcoal/70">
                Visit Jinbeh Lewisville while enjoying all the best that Castle Hills and the surrounding area has to offer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {nearbyAttractions.map((attraction) => (
                <div
                  key={attraction.name}
                  className="bg-warm-ivory rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">{attraction.name}</h3>
                  <p className="text-accent-red font-medium text-sm mb-2">{attraction.distance}</p>
                  <p className="text-charcoal/60 text-sm">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                What to Expect at Jinbeh
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔥</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Hibachi Entertainment</h3>
                  <p className="text-warm-ivory/70">
                    Our skilled teppanyaki chefs put on an unforgettable show with flames, knife tricks, and the
                    famous onion volcano – dinner and entertainment combined into one amazing experience!
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/40 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍣</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Fresh Sushi Bar</h3>
                  <p className="text-warm-ivory/70">
                    From classic nigiri to creative specialty rolls, our master sushi chefs craft
                    each piece with precision using the freshest, highest-quality ingredients.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍶</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Full Bar & Sake</h3>
                  <p className="text-warm-ivory/70">
                    Complement your meal with premium sake, Japanese beer, craft cocktails, or
                    explore our happy hour specials and exclusive drink offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-heading font-semibold text-charcoal mb-3">
                      {faq.name}
                    </h3>
                    <p className="text-charcoal/70">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready for Authentic Japanese Cuisine?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Reserve your table at Jinbeh Lewisville near Castle Hills today. Experience hibachi, sushi, and Japanese excellence!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/lewisville#reserve"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Make a Reservation
              </Link>
              <a
                href="tel:9722216888"
                className="btn bg-white/20 backdrop-blur text-white border border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Call (972) 221-6888
              </a>
            </div>
            <p className="text-white/70 text-sm">
              2401 S Stemmons Fwy, Suite 2049, Lewisville, TX 75067
            </p>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
              Explore More at Jinbeh
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link
                href="/lewisville/menu"
                className="bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl mb-2 block">📖</span>
                <span className="font-medium text-charcoal text-sm">Full Menu</span>
              </Link>
              <Link
                href="/happy-hour"
                className="bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl mb-2 block">🍹</span>
                <span className="font-medium text-charcoal text-sm">Happy Hour</span>
              </Link>
              <Link
                href="/celebrations"
                className="bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal text-sm">Celebrations</span>
              </Link>
              <Link
                href="/catering"
                className="bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl mb-2 block">🎊</span>
                <span className="font-medium text-charcoal text-sm">Catering</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
