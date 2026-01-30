import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import locations from "@/data/locations.json";

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
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/reservations",
  },
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const reservationMethods = [
  {
    title: "Online Reservation",
    icon: "🌐",
    description: "Book online through OpenTable for instant confirmation.",
    color: "from-deep-indigo to-blue-600",
  },
  {
    title: "Call Us",
    icon: "📞",
    description: "Speak with our team directly to discuss your preferences.",
    color: "from-accent-red to-orange-600",
  },
  {
    title: "Walk-In",
    icon: "🚶",
    description: "Visit us anytime. Available seating subject to current capacity.",
    color: "from-soft-gold to-yellow-600",
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

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Plan Your Visit
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Make a Reservation
            </h1>
            <p className="text-xl text-white/80">
              Book your table for an unforgettable hibachi and sushi experience at Jinbeh.
            </p>
          </div>
        </section>

        {/* How to Reserve */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Three Easy Ways to Reserve
              </h2>
              <p className="text-lg text-charcoal/70">
                Choose the reservation method that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reservationMethods.map((method) => (
                <div
                  key={method.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-6">{method.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                    {method.title}
                  </h3>
                  <p className="text-charcoal/70 mb-6">{method.description}</p>
                </div>
              ))}
            </div>
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
                    src="https://jinbeh.com/wp-content/uploads/2022/11/frisco-bg.jpg"
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
                    <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-2">
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
                      <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-2">
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
                      <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-2">
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
                    <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-3">
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
                    <a
                      href={frisco.reservation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full btn bg-accent-red text-white hover:bg-accent-red/90 text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      Reserve on OpenTable
                    </a>
                    <Link
                      href="/frisco"
                      className="block w-full btn bg-deep-indigo text-white hover:bg-deep-indigo/90 text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      View Frisco Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Lewisville */}
              <div className="bg-gradient-to-br from-warm-ivory to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden bg-charcoal">
                  <Image
                    src="https://jinbeh.com/wp-content/uploads/2023/01/sushi-platter.jpg"
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
                    <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-2">
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
                      <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-2">
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
                      <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-2">
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
                    <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-3">
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
                    <a
                      href={lewisville.reservation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full btn bg-accent-red text-white hover:bg-accent-red/90 text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      Reserve on OpenTable
                    </a>
                    <Link
                      href="/lewisville"
                      className="block w-full btn bg-deep-indigo text-white hover:bg-deep-indigo/90 text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      View Lewisville Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dining Experiences */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Choose Your Dining Experience
              </h2>
              <p className="text-lg text-charcoal/70">
                Each reservation type offers unique benefits. Let us know your preference!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {diningTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                    {type.title}
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-sm">{type.description}</p>
                  <div className="mb-6">
                    <p className="text-charcoal/60 text-xs uppercase tracking-wide mb-3">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Tips */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Reservation Tips
              </h2>
              <p className="text-lg text-charcoal/70">
                Make the most of your reservation with these helpful tips.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reservationTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-warm-ivory rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* Special Occasions */}
        <section className="py-20 bg-gradient-to-br from-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Celebrating Something Special?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Tell us about your birthday, anniversary, graduation, or celebration when you book.
              Our team will add special touches to make your experience unforgettable.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
