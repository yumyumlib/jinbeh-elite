import type { Metadata } from "next";
import ReserveLink from "@/components/ReserveLink";
import PageSeoBoost from "@/components/PageSeoBoost";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import locations from "@/data/locations.json";
import CallLink from "@/components/CallLink";

const location = locations.locations.frisco;

export const metadata: Metadata = {
  title: { absolute: "Best Sushi in Frisco TX | Jinbeh Sushi Bar Since 1988" },
  description: "Premium sushi bar at Jinbeh Frisco, fresh nigiri, sashimi, signature rolls, and chef-crafted specialties. Hand-cut daily near Stonebriar Centre. Family-owned since 1988.",
  keywords: [
    "sushi frisco",
    "best sushi frisco",
    "sushi bar frisco",
    "sushi near stonebriar",
    "best sushi frisco tx",
    "japanese sushi frisco",
    "fresh sushi frisco",
    "premium sushi frisco",
    "sushi restaurant frisco",
    "nigiri frisco",
    "sashimi frisco",
    "specialty rolls frisco",
  ],
  openGraph: {
    title: "Best Sushi in Frisco TX | Jinbeh Sushi Bar",
    description: "Hand-cut nigiri, sashimi, and signature rolls at Jinbeh Frisco's premium sushi bar. Family-owned since 1988.",
    url: "https://jinbeh.com/frisco/sushi",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sushi-tower.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Frisco Sushi Bar",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Jinbeh Frisco Sushi Bar",
  image: "https://jinbeh.com/images/instagram/branded-sushi-plate.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${location.address.street} ${location.address.suite}`,
    addressLocality: location.address.city,
    addressRegion: location.address.state,
    postalCode: location.address.zip,
    addressCountry: "US",
  },
  telephone: location.phone,
  url: "https://jinbeh.com/frisco/sushi",
  servesCuisine: ["Japanese", "Sushi", "Sashimi"],
  priceRange: "$$",
  acceptsReservations: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find the best sushi in Frisco TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh has been serving fresh, hand-cut nigiri, sashimi, and signature rolls in North Texas since 1988. Jinbeh Frisco's sushi bar near Stonebriar Centre features hand-selected premium fish, daily, with each piece crafted to order.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of sushi does Jinbeh Frisco offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco offers a full sushi menu including nigiri (single-piece sushi), sashimi (sliced raw fish), classic and specialty rolls like the Dragon Roll, Rainbow Roll, Spider Roll, and the house Sunrise Roll, plus seasonal premium fish such as bluefin tuna and yellowtail.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh Frisco have a sushi bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Jinbeh Frisco has a full sushi bar with seating where guests can watch our chefs prepare sushi to order. Sushi-bar seating is first-come and offers the freshest experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh Frisco's sushi available for takeout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our full sushi menu is available for takeout. Call (214) 619-1200 or order online for pickup.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a reservation to dine at Jinbeh Frisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reservations are recommended for dinner, especially on weekends. Walk-ins are welcome at the sushi bar based on availability. Reserve online or call (214) 619-1200.",
      },
    },
  ],
};

export default function FriscoSushiPage() {
  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "Sushi" }]} />
      </div>
      <main id="main-content" className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/instagram/branded-sushi-plate.jpg"
              alt="Sushi Frisco at Jinbeh Frisco Japanese restaurant"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Jinbeh Frisco Sushi Bar
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Best Sushi in Frisco TX
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                Premium sushi crafted by hand at our Frisco sushi bar.
                Fresh nigiri, sashimi, and signature rolls, served with the
                Jinbeh hospitality our family has been pouring into every plate
                since 1988.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <ReserveLink
                  href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  Reserve Your Table
                </ReserveLink>
                <CallLink
                  href="tel:2146191200"
                  className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  Call (214) 619-1200
                </CallLink>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Bar — third-party list features + tenure */}
        <section className="bg-soft-gold/10 border-y border-soft-gold/30 py-6">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-center">
              <div className="px-4">
                <div className="text-2xl mb-1">⭐</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  Featured: Tripadvisor &ldquo;Best Sushi in Frisco&rdquo;
                </p>
                <p className="text-charcoal/60 text-xs mt-1">Independent traveler reviews</p>
              </div>
              <div className="px-4 md:border-x md:border-soft-gold/30">
                <div className="text-2xl mb-1">🍣</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  Featured: OpenTable 60 Best Sushi Restaurants
                </p>
                <p className="text-charcoal/60 text-xs mt-1">Verified diner rankings</p>
              </div>
              <div className="px-4">
                <div className="text-2xl mb-1">🔪</div>
                <p className="text-charcoal font-heading font-bold text-base leading-tight">
                  Family-owned since 1988
                </p>
                <p className="text-charcoal/60 text-xs mt-1">Head sushi chef nearly 30 years with the family</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Jinbeh Frisco for Sushi */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6 text-center">
                Why Jinbeh Is the Best Sushi Restaurant in Frisco
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-3xl mb-3">🍣</div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                    Hand-Cut Daily
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Our sushi chefs hand-select premium fish and slice each
                    piece to order. Nothing is pre-cut, nothing is rushed.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-3xl mb-3">🐟</div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                    Premium Selection
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Bluefin tuna, yellowtail, salmon, and seasonal fish brought
                    in fresh. Classic nigiri and house signature rolls side by
                    side.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-3xl mb-3">🎌</div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                    Family-Owned Since 1988
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Multiple generations of Japanese hospitality in DFW. Same
                    family, same recipes, same care for every guest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Sushi Menu */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Explore Our Sushi Menu
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Browse signature rolls, premium sashimi, and the full sushi
                menu at our Frisco location.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/frisco/sushi-rolls"
                className="group bg-warm-ivory rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/photoshoot/specialty-roll.jpg"
                    alt="Specialty sushi rolls at Jinbeh Frisco"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Sushi Rolls
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Dragon Roll, Rainbow Roll, Sunrise Roll, and house specialties.
                  </p>
                  <span className="inline-block mt-3 text-accent-red font-semibold text-sm">
                    View Sushi Rolls &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/frisco/sashimi"
                className="group bg-warm-ivory rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/photoshoot/sashimi-platter.jpg"
                    alt="Sashimi platter at Jinbeh Frisco"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Sashimi
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Premium sliced fish: bluefin tuna, yellowtail, salmon, and more.
                  </p>
                  <span className="inline-block mt-3 text-accent-red font-semibold text-sm">
                    View Sashimi &rarr;
                  </span>
                </div>
              </Link>

              <Link
                href="/frisco/menu"
                className="group bg-warm-ivory rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/photoshoot/sushi-tower.jpg"
                    alt="Full sushi menu at Jinbeh Frisco"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Full Menu
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Browse the complete Frisco menu: sushi, hibachi, appetizers, and more.
                  </p>
                  <span className="inline-block mt-3 text-accent-red font-semibold text-sm">
                    View Full Menu &rarr;
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-charcoal to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Visit Our Frisco Sushi Bar
            </h2>
            <p className="text-warm-ivory/80 mb-8 max-w-xl mx-auto">
              Near Stonebriar Centre. Reservations recommended for dinner.
              Sushi bar seating welcomes walk-ins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <ReserveLink
                href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve a Table
              </ReserveLink>
              <Link
                href="/frisco"
                className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Frisco Location Info
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageSeoBoost route="/frisco/sushi" />
      <Footer />
    </>
  );
}
