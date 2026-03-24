import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import locations from "@/data/locations.json";
import { HeroSection, RevealSection, ShimmerCTA, ShinyBadge } from "@/components/MagicUI";
import { MagicCard } from "@/components/ui/magic-card";
import { MiniTestimonials } from "@/components/MiniTestimonials";
import { TestimonialCapture } from "@/components/TestimonialCapture";
import OpenTableReservationForm from "@/components/OpenTableReservationForm";

export const metadata: Metadata = {
  title: "Make a Reservation | Jinbeh Japanese Restaurant - Frisco & Lewisville",
  description:
    "Book your table at Jinbeh Japanese Restaurant. Easy online reservations for hibachi and sushi dining in Frisco and Lewisville, TX. Reserve now!",
  keywords: [
    "jinbeh reservations",
    "book a table",
    "restaurant reservation",
    "hibachi reservation",
    "frisco dining",
    "lewisville dining",
    "opentable",
  ],
  openGraph: {
    title: "Make a Reservation | Jinbeh Japanese Restaurant",
    description:
      "Book your table at Jinbeh for an unforgettable hibachi and sushi dining experience.",
    url: "https://jinbeh.com/reservations",
    images: [
      {
        url: "https://jinbeh.com/images/interior/FriscoLocation_Bar_Front.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Reservations",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/reservations",
  },
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far in advance should I make a hibachi reservation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For weekend hibachi dining in Frisco or Lewisville, we recommend booking a table 2-3 weeks in advance. For weekdays, 3-5 days is usually sufficient."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a table for large groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our restaurant reservation system handles groups up to 10 online. For larger parties or private dining events, please call us directly."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a reservation for sushi dining?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While reservations are strongly recommended for hibachi, walk-ins are often welcome for our sushi bar and traditional dining areas, depending on availability."
      }
    }
  ]
};

const reservationMethods = [
  {
    title: "Online Reservation",
    icon: "🌐",
    description: "Book online through OpenTable for instant confirmation.",
    color: "from-deep-indigo to-deep-indigo",
  },
  {
    title: "Call Us",
    icon: "📞",
    description: "Speak with our team directly to discuss your preferences.",
    color: "from-accent-red to-orange-600",
  },
];

const diningTypes = [
  {
    title: "Hibachi Dining",
    description:
      "Sit around a chef's table for an interactive cooking performance with entertainment, fresh ingredients, and tableside cooking.",
    features: [
      "Live chef performance",
      "Interactive dining experience",
      "Groups of 6-10 guests",
      "Entertaining and fun",
      "Great for celebrations",
    ],
    price: "$18-$35+ per person",
    icon: "🔥",
  },
  {
    title: "Sushi & Rolls",
    description:
      "Fresh, expertly crafted sushi rolls, nigiri, and sashimi prepared daily by our skilled sushi chefs.",
    features: [
      "Fresh daily preparations",
      "Wide variety of rolls",
      "Premium fish selection",
      "Customizable options",
      "Takeout & delivery available",
    ],
    price: "$12-$28 per order",
    icon: "🍣",
  },
  {
    title: "Full Menu Dining",
    description:
      "Beyond hibachi and sushi, enjoy appetizers, soups, entrees, and specialty dishes in our regular dining areas.",
    features: [
      "Diverse menu options",
      "Intimate booth seating",
      "Full bar service",
      "Private sections available",
      "Perfect for all occasions",
    ],
    price: "$10-$30+ per entree",
    icon: "🍱",
  },
];

const reservationTips = [
  {
    title: "Book in Advance",
    description:
      "Reserve your table online or by phone 2-3 weeks ahead for best availability, especially for weekends.",
  },
  {
    title: "Specify Your Preferences",
    description:
      "Let us know your dining type preference (hibachi vs. regular seating), group size, and any special occasions.",
  },
  {
    title: "Mention Dietary Needs",
    description:
      "Inform us of vegetarian, vegan, gluten-free, or allergy needs so we can best accommodate your party.",
  },
  {
    title: "Arrive on Time",
    description:
      "Please arrive within 15 minutes of your reservation time. This helps us manage seating and service.",
  },
  {
    title: "Large Groups",
    description:
      "For groups of 8+, we recommend making reservations and may require a deposit or minimum spend.",
  },
  {
    title: "Celebrate Special Moments",
    description:
      "Tell us about birthdays, anniversaries, and celebrations so our team can add special touches.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jinbeh.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Reservations",
      "item": "https://jinbeh.com/reservations"
    }
  ]
};

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero */}
        <HeroSection className="py-16 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <RevealSection>
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                <ShinyBadge className="!text-soft-gold">✦ Plan Your Visit ✦</ShinyBadge>
              </p>
            </RevealSection>
            <RevealSection delay={100}>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Reserve Your Table at Jinbeh
              </h1>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="text-xl text-white/80">
                Hibachi entertainment, hand-crafted sushi, and family hospitality since 1988. Choose your preferred location and book online — walk-ins always welcome.
              </p>
            </RevealSection>
          </div>
        </HeroSection>

        {/* Inline Reservation Widgets */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <RevealSection>
              <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Book Your Table
                </h2>
                <p className="text-lg text-charcoal/70">
                  Select your party size, date, and time — we&apos;ll take you straight to OpenTable to confirm.
                </p>
              </div>
            </RevealSection>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <RevealSection delay={100}>
                <OpenTableReservationForm
                  restaurantId={frisco.reservation.rid}
                  locationName="Jinbeh Frisco"
                />
              </RevealSection>
              <RevealSection delay={200}>
                <OpenTableReservationForm
                  restaurantId={lewisville.reservation.rid}
                  locationName="Jinbeh Lewisville"
                />
              </RevealSection>
            </div>

            <RevealSection delay={300}>
              <p className="text-center text-sm text-charcoal/60 mt-8">
                Walk-ins are always welcome! <span className="font-medium text-charcoal/80">Pro tip:</span> Our sushi bar area is usually available for immediate seating.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* Location Cards with Booking */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Both Locations Welcome Reservations
              </h2>
              <p className="text-lg text-charcoal/70">
                Choose your preferred location and book your table today.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Frisco */}
              <div className="bg-gradient-to-br from-warm-ivory to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden bg-charcoal">
                  <Image
                    src="/images/interior/JinbehFriscoTables.jpg"
                    alt="Jinbeh Frisco location"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-3xl font-heading font-bold text-white">
                    Jinbeh Frisco
                  </h3>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                      Address
                    </p>
                    <p className="text-charcoal font-semibold">
                      {frisco.address.street}
                    </p>
                    <p className="text-charcoal/80 text-sm">
                      {frisco.address.suite}
                    </p>
                    <p className="text-charcoal/80 text-sm">
                      {frisco.address.city}, {frisco.address.state}{" "}
                      {frisco.address.zip}
                    </p>
                  </div>

                  <div className="mb-6 flex gap-4">
                    <div className="flex-1">
                      <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                        Phone
                      </p>
                      <a
                        href={`tel:${frisco.phoneClean}`}
                        className="text-accent-red hover:text-accent-red/80 font-semibold"
                      >
                        {frisco.phone}
                      </a>
                    </div>
                    <div className="flex-1">
                      <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                        Email
                      </p>
                      <a
                        href={`mailto:${frisco.email}`}
                        className="text-accent-red hover:text-accent-red/80 font-semibold text-sm break-all"
                      >
                        {frisco.email}
                      </a>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-3">
                      Hours
                    </p>
                    <div className="space-y-1 text-sm text-charcoal/80">
                      <p>
                        <span className="font-medium">Lunch (Weekday):</span>{" "}
                        {frisco.hours.lunch.weekday.display}
                      </p>
                      <p>
                        <span className="font-medium">Lunch (Weekend):</span>{" "}
                        {frisco.hours.lunch.weekend.display}
                      </p>
                      <p>
                        <span className="font-medium">Dinner (Sun-Thu):</span>{" "}
                        {frisco.hours.dinner.sunThurs.display}
                      </p>
                      <p>
                        <span className="font-medium">Dinner (Fri-Sat):</span>{" "}
                        {frisco.hours.dinner.friSat.display}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-center mb-1">
                      <span className="text-xs font-medium text-charcoal/60 bg-warm-ivory py-1 px-3 rounded-full">✨ Free, no-hassle cancellation</span>
                    </div>
                    <ShimmerCTA href={frisco.reservation.url} className="w-full text-lg">
                      Reserve on OpenTable
                    </ShimmerCTA>
                    <Link
                      href="/frisco"
                      className="block w-full btn bg-deep-indigo text-white hover:bg-deep-indigo/90 text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      View Frisco Details
                    </Link>
                    <div className="mt-4 pt-4 border-t border-stone-100/50">
                      <MiniTestimonials
                        intervalMs={5000}
                        quotes={[
                          { quote: "Every birthday we come here to celebrate!", author: "S.M." },
                          { quote: "Best hibachi experience in Frisco.", author: "T.J." },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lewisville */}
              <div className="bg-gradient-to-br from-warm-ivory to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden bg-charcoal">
                  <Image
                    src="/images/photoshoot/sashimi-platter.jpg"
                    alt="Jinbeh Lewisville location"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-3xl font-heading font-bold text-white">
                    Jinbeh Lewisville
                  </h3>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                      Address
                    </p>
                    <p className="text-charcoal font-semibold">
                      {lewisville.address.street}
                    </p>
                    <p className="text-charcoal/80 text-sm">
                      {lewisville.address.suite}
                    </p>
                    <p className="text-charcoal/80 text-sm">
                      {lewisville.address.city}, {lewisville.address.state}{" "}
                      {lewisville.address.zip}
                    </p>
                  </div>

                  <div className="mb-6 flex gap-4">
                    <div className="flex-1">
                      <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                        Phone
                      </p>
                      <a
                        href={`tel:${lewisville.phoneClean}`}
                        className="text-accent-red hover:text-accent-red/80 font-semibold"
                      >
                        {lewisville.phone}
                      </a>
                    </div>
                    <div className="flex-1">
                      <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                        Email
                      </p>
                      <a
                        href={`mailto:${lewisville.email}`}
                        className="text-accent-red hover:text-accent-red/80 font-semibold text-sm break-all"
                      >
                        {lewisville.email}
                      </a>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-3">
                      Hours
                    </p>
                    <div className="space-y-1 text-sm text-charcoal/80">
                      <p>
                        <span className="font-medium">Lunch (Weekday):</span>{" "}
                        {lewisville.hours.lunch.weekday.display}
                      </p>
                      <p>
                        <span className="font-medium">Lunch (Weekend):</span>{" "}
                        {lewisville.hours.lunch.weekend.display}
                      </p>
                      <p>
                        <span className="font-medium">Dinner (Sun-Thu):</span>{" "}
                        {lewisville.hours.dinner.sunThurs.display}
                      </p>
                      <p>
                        <span className="font-medium">Dinner (Fri-Sat):</span>{" "}
                        {lewisville.hours.dinner.friSat.display}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-center mb-1">
                      <span className="text-xs font-medium text-charcoal/60 bg-warm-ivory py-1 px-3 rounded-full">✨ Free, no-hassle cancellation</span>
                    </div>
                    <ShimmerCTA href={lewisville.reservation.url} className="w-full text-lg">
                      Reserve on OpenTable
                    </ShimmerCTA>
                    <Link
                      href="/lewisville"
                      className="block w-full btn bg-deep-indigo text-white hover:bg-deep-indigo/90 text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      View Lewisville Details
                    </Link>
                    <div className="mt-4 pt-4 border-t border-stone-100/50">
                      <MiniTestimonials
                        intervalMs={5500}
                        quotes={[
                          { quote: "Our go-to place for weekly family dinners.", author: "L.D." },
                          { quote: "The kids absolutely love the fire show.", author: "A.K." },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dining Experiences */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <RevealSection>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Choose Your Dining Experience
                </h2>
                <p className="text-lg text-charcoal/70">
                  Each reservation type offers unique benefits. Let us know your preference!
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {diningTypes.map((type, idx) => (
                <RevealSection key={type.title} delay={idx * 150} className="h-full">
                  <MagicCard
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-none h-full"
                    gradientColor="rgba(201, 162, 39, 0.15)"
                  >
                    <div className="text-5xl mb-4">{type.icon}</div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                      {type.title}
                    </h3>
                    <p className="text-charcoal/70 mb-6 text-sm">{type.description}</p>
                    <div className="mb-6">
                      <p className="text-charcoal/80 text-xs uppercase tracking-wide mb-3">
                        Features
                      </p>
                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-charcoal/80"
                          >
                            <svg
                              className="w-4 h-4 text-accent-red flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-charcoal font-semibold text-lg">
                      {type.price}
                    </p>
                  </MagicCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Tips */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <RevealSection>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Reservation Tips
                </h2>
                <p className="text-lg text-charcoal/70">
                  Make the most of your reservation with these helpful tips.
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reservationTips.map((tip, idx) => (
                <RevealSection key={idx} delay={idx * 100}>
                  <div className="bg-warm-ivory rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="text-2xl flex-shrink-0">
                        {idx === 0 && "📅"}
                        {idx === 1 && "🎯"}
                        {idx === 2 && "🥘"}
                        {idx === 3 && "⏰"}
                        {idx === 4 && "👥"}
                        {idx === 5 && "🎉"}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-charcoal mb-2">
                          {tip.title}
                        </h3>
                        <p className="text-charcoal/70 text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation FAQ */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">How far in advance should I make a hibachi reservation?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    For weekend hibachi dining in Frisco or Lewisville, we recommend booking a table 2-3 weeks in advance. For weekdays, 3-5 days is usually sufficient. Our interactive teppanyaki tables fill up quickly!
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Can I book a table for large groups?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Yes, our restaurant reservation system handles groups up to 10 online. For larger parties or private dining events, please call us directly to make arrangements.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Do I need a reservation for sushi dining?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    While reservations are strongly recommended for hibachi, walk-ins are often welcome for our sushi bar and traditional dining areas, depending on availability.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Special Occasions */}
        <section className="py-20 bg-gradient-to-br from-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Celebrating Something Special?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Tell us about your birthday, anniversary, graduation, or celebration when you book.
              Our team will add special touches to make your experience unforgettable.
            </p>
            <p className="text-sm text-soft-gold/90 font-medium mb-10">
              🎂 Thousands of birthdays celebrated since 1988 — let us make yours special.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <span className="text-4xl block mb-3">🎂</span>
                <p className="font-semibold">Birthdays</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <span className="text-4xl block mb-3">💕</span>
                <p className="font-semibold">Anniversaries</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <span className="text-4xl block mb-3">🎓</span>
                <p className="font-semibold">Graduations</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <span className="text-4xl block mb-3">💼</span>
                <p className="font-semibold">Corporate Events</p>
              </div>
            </div>
            <Link
              href="/private-dining"
              className="inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-red/90 transition-colors"
            >
              Learn About Private Dining
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Questions Before Booking?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Check our FAQ or contact us directly for any questions about your reservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="btn bg-charcoal text-white hover:bg-charcoal/90 px-8 py-3 rounded-xl font-semibold"
              >
                View FAQ
              </Link>
              <Link
                href="/contact"
                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold"
              >
                Contact Us
              </Link>
            </div>

            <RevealSection delay={200}>
              <div className="mt-16 pt-8 border-t border-stone-200/50">
                <TestimonialCapture trigger="post-reservation" />
              </div>
            </RevealSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
