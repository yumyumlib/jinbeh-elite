import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Japanese Restaurant Near Starwood | Jinbeh Frisco | Hibachi & Sushi",
  description:
    "Looking for hibachi or sushi near Starwood in Frisco? Jinbeh is your premier destination! Fresh sushi, exciting teppanyaki shows, and authentic Japanese cuisine in Frisco, TX.",
  keywords: [
    "japanese restaurant starwood frisco",
    "hibachi near starwood",
    "sushi restaurants starwood frisco",
    "teppanyaki starwood",
    "japanese food starwood frisco",
    "best sushi near starwood",
    "hibachi frisco starwood",
    "teppanyaki restaurant starwood",
  ],
  openGraph: {
    title: "Japanese Restaurant Near Starwood | Jinbeh Frisco",
    description: "Fresh sushi & exciting hibachi just minutes from Starwood in Frisco, TX.",
    url: "https://jinbeh.com/frisco/starwood",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/starwood",
  },
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://jinbeh.com/frisco#restaurant",
  name: "Jinbeh Japanese Restaurant - Frisco (Near Starwood)",
  image: "https://jinbeh.com/images/frisco-exterior.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2693 Preston Rd, Suite 1040",
    addressLocality: "Frisco",
    addressRegion: "TX",
    postalCode: "75034",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.1351,
    longitude: -96.8233,
  },
  url: "https://jinbeh.com/frisco",
  telephone: "(214) 618-9888",
  servesCuisine: ["Japanese", "Sushi", "Hibachi", "Teppanyaki"],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 33.1351,
      longitude: -96.8233,
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
      name: "How far is Jinbeh from Starwood in Frisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco is conveniently located just minutes from the Starwood neighborhood on Preston Road. We're the perfect spot for hibachi and sushi dining near Starwood, making us easily accessible for your Japanese cuisine cravings.",
      },
    },
    {
      "@type": "Question",
      name: "What hibachi options are available near Starwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our hibachi grill experience features talented teppanyaki chefs who perform exciting shows tableside. Enjoy your meal cooked right in front of you with spectacular knife tricks, flames, and the famous onion volcano!",
      },
    },
    {
      "@type": "Question",
      name: "Are reservations recommended for hibachi near Starwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we highly recommend reservations for hibachi dining, especially on weekends and holidays. You can book online or call us at (214) 618-9888 to secure your table.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best Japanese restaurant near Starwood in Frisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Japanese Restaurant near Starwood is a local favorite offering authentic hibachi entertainment, fresh sushi crafted by master chefs, and over 37 years of excellence in Japanese cuisine.",
      },
    },
  ],
};

const nearbyAttractions = [
  {
    name: "Starwood Neighborhood",
    distance: "2 min drive",
    description: "Vibrant residential community with shopping and dining options",
  },
  {
    name: "Warren Sports Complex",
    distance: "5 min drive",
    description: "Premier sports facility for youth and community athletics",
  },
  {
    name: "PGA Headquarters",
    distance: "7 min drive",
    description: "Golf headquarters and championship venue in nearby location",
  },
  {
    name: "Frisco Athletic Center",
    distance: "6 min drive",
    description: "State-of-the-art fitness and recreational facilities",
  },
];

export default function StarwoodPage() {
  return (
    <>
      <Header location="frisco" />
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
            style={{ backgroundImage: "url('https://jinbeh.com/wp-content/uploads/2023/01/frisco-interior.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Just Minutes from Starwood
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Japanese Restaurant Near Starwood
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Experience authentic hibachi entertainment and fresh sushi at Jinbeh Frisco –
              your premier destination for Japanese cuisine near Starwood!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco#reserve"
                className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve Your Table
              </Link>
              <Link
                href="/frisco/menu"
                className="btn bg-white/20 backdrop-blur text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-semibold rounded-xl"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Jinbeh Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                    The Best Hibachi & Sushi Near Starwood
                  </h2>
                  <p className="text-lg text-charcoal/70 mb-6">
                    Located just minutes from the Starwood neighborhood on Preston Road, Jinbeh
                    has been serving authentic Japanese cuisine to the Frisco community for
                    over 37 years. Whether you're celebrating a special occasion, enjoying a family dinner,
                    or looking for exceptional hibachi and sushi near Starwood, our expert chefs deliver
                    an unforgettable dining experience.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-charcoal">Exciting Teppanyaki Shows</span>
                        <p className="text-charcoal/70 text-sm">Watch skilled chefs perform tableside with flames and the famous onion volcano</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-charcoal">Fresh Sushi Daily</span>
                        <p className="text-charcoal/70 text-sm">Hand-crafted rolls and sashimi from our experienced sushi chefs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="font-semibold text-charcoal">Free Convenient Parking</span>
                        <p className="text-charcoal/70 text-sm">Ample parking directly in front of the restaurant</p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="/frisco"
                    className="inline-flex items-center gap-2 text-accent-red font-semibold hover:gap-3 transition-all"
                  >
                    Learn More About Jinbeh Frisco
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://jinbeh.com/wp-content/uploads/2023/01/chef-flames.jpg"
                      alt="Hibachi chef at Jinbeh Frisco near Starwood"
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
                Conveniently Located Near Starwood & Frisco Attractions
              </h2>
              <p className="text-lg text-charcoal/70">
                Jinbeh Frisco is perfectly positioned near the Starwood neighborhood and all the best in the area
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
                    Our skilled teppanyaki chefs put on a show with flames, knife tricks, and the
                    famous onion volcano – dinner and entertainment in one!
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/40 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍣</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Fresh Sushi Bar</h3>
                  <p className="text-warm-ivory/70">
                    From classic nigiri to creative specialty rolls, our sushi chefs craft
                    each piece with precision using the freshest ingredients.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍶</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Full Bar & Sake</h3>
                  <p className="text-warm-ivory/70">
                    Complement your meal with premium sake, Japanese beer, cocktails, or
                    take advantage of our happy hour specials.
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
              Reserve your table at Jinbeh Frisco today. Just minutes from Starwood!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/frisco#reserve"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Make a Reservation
              </Link>
              <a
                href="tel:2146189888"
                className="btn bg-white/20 backdrop-blur text-white border border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Call (214) 618-9888
              </a>
            </div>
            <p className="text-white/70 text-sm">
              2693 Preston Rd, Suite 1040, Frisco, TX 75034
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
                href="/frisco/menu"
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

        {/* Additional Links Section */}
        <section className="py-12 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
              Other Jinbeh Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Link
                href="/frisco/legacy"
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-accent-red/20"
              >
                <span className="text-2xl mb-2 block">📍</span>
                <span className="font-medium text-charcoal">Legacy Drive, Frisco</span>
              </Link>
              <Link
                href="/frisco/stonebriar"
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-accent-red/20"
              >
                <span className="text-2xl mb-2 block">🛍️</span>
                <span className="font-medium text-charcoal">Stonebriar, Frisco</span>
              </Link>
              <Link
                href="/lewisville"
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border-2 border-accent-red/20"
              >
                <span className="text-2xl mb-2 block">🏮</span>
                <span className="font-medium text-charcoal">Lewisville</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
