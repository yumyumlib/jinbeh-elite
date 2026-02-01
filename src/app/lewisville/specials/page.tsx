import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import locations from "@/data/locations.json";

export const metadata: Metadata = {
  title: "Lewisville Specials & Deals | Jinbeh Japanese Restaurant",
  description:
    "Check out exclusive specials at Jinbeh Lewisville! Happy Hour, lunch deals, and weekly promotions. Great discounts on sushi, hibachi, and Japanese cuisine near I-35E.",
  keywords: [
    "lewisville specials",
    "lewisville deals",
    "happy hour lewisville",
    "lunch specials lewisville",
    "japanese restaurant specials lewisville",
    "sushi deals lewisville",
    "hibachi specials lewisville",
  ],
  openGraph: {
    title: "Lewisville Specials & Deals | Jinbeh",
    description: "Amazing specials and promotions at Jinbeh Lewisville location. Happy Hour, lunch specials, and weekly deals.",
    url: "https://jinbeh.com/lewisville/specials",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/specials",
  },
};

const lewisville = locations.locations.lewisville;

const specialsData = [
  {
    title: "Happy Hour Specials",
    time: "Monday – Friday, 4:00 PM – 6:00 PM",
    emoji: "🍸",
    color: "from-accent-red to-deep-indigo",
    items: [
      { label: "$5 Appetizers", desc: "Gyoza, Edamame, Spicy Tuna Crispy Rice" },
      { label: "$5 Cocktails & Sake", desc: "Select premium sake, Tokyo Mule, Lychee Martini" },
      { label: "$3 Domestic Beer", desc: "Perfect way to unwind after work" },
    ],
  },
  {
    title: "Lunch Specials",
    time: "Monday – Friday, 11:00 AM – 2:30 PM | Weekend 11:30 AM – 2:30 PM",
    emoji: "🍱",
    color: "from-deep-indigo to-soft-gold",
    items: [
      { label: "Bento Boxes", desc: "Starting at $12.95 - Assorted proteins with rice and sides" },
      { label: "Hibachi Lunch Combos", desc: "From $13.95 - Chef-cooked experience at lunch prices" },
      { label: "Sushi Lunch Specials", desc: "Fresh rolls and nigiri combinations available daily" },
    ],
  },
];

const weeklyPromos = [
  {
    day: "Monday",
    name: "Date Night Monday",
    emoji: "💑",
    desc: "Couples special - enjoy romantic dinner with exclusive partner discounts",
  },
  {
    day: "Tuesday",
    name: "Family Tuesday",
    emoji: "👨‍👩‍👧‍👦",
    desc: "Family-friendly specials and group discounts - bring the whole crew",
  },
  {
    day: "Wednesday",
    name: "Wine Wednesday",
    emoji: "🍷",
    desc: "Special pricing on wine selections - pair with our Japanese cuisine",
  },
  {
    day: "Thursday",
    name: "Sake Thursday",
    emoji: "🍶",
    desc: "Premium sake selections at special prices - hot and cold varieties",
  },
];

export default function LewisvilleSpecialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/interior/JinbehFrisco_SushiBar.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-bold tracking-wider uppercase mb-3">
              Lewisville Location
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Amazing Specials in Lewisville
            </h1>
            <p className="text-lg text-warm-ivory/90 mb-6 max-w-2xl mx-auto">
              Easy I-35E Access • 2440 S Stemmons Fwy #A<br/>
              Enjoy exclusive deals on sushi, hibachi, and Japanese cuisine
            </p>
            <a href={`tel:${lewisville.phoneClean}`} className="inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-red/90 transition-colors">
              Call Lewisville Now
            </a>
          </div>
        </section>

        {/* Quick Info Box */}
        <section className="py-8 bg-accent-red text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm uppercase tracking-wider opacity-90">Address</p>
                <p className="text-lg font-bold">{lewisville.address.street} {lewisville.address.suite}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider opacity-90">Phone</p>
                <p className="text-lg font-bold">{lewisville.phone}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider opacity-90">Hours</p>
                <p className="text-lg font-bold">See specials below</p>
              </div>
            </div>
        </section>

        {/* Main Specials */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            {specialsData.map((special, idx) => (
              <div key={idx} className="mb-20 last:mb-0">
                <div className="text-center mb-12">
                  <div className="text-7xl mb-4 inline-block">{special.emoji}</div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-2">
                    {special.title}
                  </h2>
                  <p className="text-lg font-bold text-accent-red">
                    {special.time}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {special.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                        {item.label}
                      </h3>
                      <p className="text-charcoal/70 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Specials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Weekly Specials Every Day
              </h2>
              <p className="text-lg text-charcoal/70">
                Plan your visit with Jinbeh's rotating weekly promotions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {weeklyPromos.map((promo, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-warm-ivory to-white rounded-2xl p-8 border-2 border-charcoal/10 hover:border-accent-red/50 hover:shadow-lg transition-all"
                >
                  <div className="text-6xl mb-4">{promo.emoji}</div>
                  <p className="text-sm uppercase tracking-wider font-bold text-charcoal/60 mb-2">
                    {promo.day}
                  </p>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                    {promo.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {promo.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-charcoal/70 text-lg max-w-2xl mx-auto mb-6">
                Call for specific details on each week's special offers and promotions.
              </p>
              <a href={`tel:${lewisville.phoneClean}`} className="inline-block btn bg-charcoal text-white hover:bg-charcoal/90 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                {lewisville.phone}
              </a>
            </div>
        </section>

        {/* Happy Hour Details */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
                Happy Hour at Lewisville
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-heading font-bold mb-6">When</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-soft-gold font-bold">Monday - Friday</p>
                      <p className="text-white/90">4:00 PM - 6:00 PM</p>
                    </div>
                    <div className="text-4xl">🕐</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-heading font-bold mb-6">Where</h3>
                  <div className="space-y-3">
                    <p className="text-white/90">
                      <strong>At the Bar</strong><br/>
                      No reservation needed - walk-ins welcome
                    </p>
                    <div className="text-4xl">🍹</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur rounded-2xl p-10 border border-white/30 mb-12">
                <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                  Happy Hour Deals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-soft-gold mb-3">$5</p>
                    <p className="font-bold mb-2">Select Appetizers</p>
                    <p className="text-white/80 text-sm">Gyoza • Edamame • Spicy Tuna Crispy Rice</p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-bold text-soft-gold mb-3">$5</p>
                    <p className="font-bold mb-2">Cocktails & Sake</p>
                    <p className="text-white/80 text-sm">Premium sake • Tokyo Mule • Lychee Martini</p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-bold text-soft-gold mb-3">$3</p>
                    <p className="font-bold mb-2">Domestic Beer</p>
                    <p className="text-white/80 text-sm">Cold beer • Perfect way to unwind</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/90 mb-6">
                  Don't miss Lewisville's happy hour! Join us at the bar and enjoy great drinks, great food, and great company.
                </p>
                <a href={`tel:${lewisville.phoneClean}`} className="inline-block btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                  Reserve Bar Seating
                </a>
              </div>
            </div>
        </section>

        {/* Lunch Details */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Lunch Specials at Lewisville
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">Hours</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-charcoal mb-1">Weekday Lunch</p>
                      <p className="text-charcoal/70">11:00 AM - 2:30 PM</p>
                    </div>
                    <div>
                      <p className="font-bold text-charcoal mb-1">Weekend Lunch</p>
                      <p className="text-charcoal/70">11:30 AM - 2:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">Why Lunch Here</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <span className="text-charcoal/70">Great value pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <span className="text-charcoal/70">Quick service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <span className="text-charcoal/70">Fresh, quality ingredients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <span className="text-charcoal/70">Takeout available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-deep-indigo/10 to-accent-red/10 rounded-2xl p-10 border-2 border-deep-indigo/20 mb-12">
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-6 text-center">
                  Lunch Special Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-4xl mb-3">🍱</p>
                    <p className="font-bold text-charcoal mb-2">Bento Boxes</p>
                    <p className="text-accent-red font-bold mb-2">Starting at $12.95</p>
                    <p className="text-charcoal/70 text-sm">Assorted proteins with rice and sides</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl mb-3">🔥</p>
                    <p className="font-bold text-charcoal mb-2">Hibachi Lunch</p>
                    <p className="text-accent-red font-bold mb-2">From $13.95</p>
                    <p className="text-charcoal/70 text-sm">Chef-cooked experience at lunch prices</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl mb-3">🍣</p>
                    <p className="font-bold text-charcoal mb-2">Sushi Specials</p>
                    <p className="text-accent-red font-bold mb-2">Fresh Daily</p>
                    <p className="text-charcoal/70 text-sm">Rolls and nigiri combinations</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/lunch-specials"
                  className="inline-block btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-4 rounded-xl font-bold text-lg transition-colors mb-4"
                >
                  View Full Lunch Menu
                </Link>
                <p className="text-charcoal/70">
                  Call {lewisville.phone} to place your lunch order in advance
                </p>
              </div>
            </div>
        </section>

        {/* Why Choose Lewisville */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Why Dine at Jinbeh Lewisville?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { emoji: "🛣️", title: "Easy Access", desc: "Convenient I-35E access for quick stops or planned dining" },
                  { emoji: "🎊", title: "Relaxed Atmosphere", desc: "Warm Japanese ambiance with friendly service" },
                  { emoji: "👨‍🍳", title: "Skilled Chefs", desc: "Talented sushi chefs and hibachi performers" },
                  { emoji: "⭐", title: "Local Favorite", desc: "Well-loved by Lewisville and surrounding communities" },
                  { emoji: "👥", title: "Community Connection", desc: "Support local Japanese dining excellence" },
                  { emoji: "🎯", title: "Complete Services", desc: "Dine-in, takeout, catering, and special events" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-warm-ivory rounded-2xl p-8 border-l-4 border-accent-red hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-4">{item.emoji}</div>
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* Newsletter & Contact */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Stay Updated
                </h2>
                <p className="text-white/80 mb-6">
                  Get notified about new specials and promotions at Jinbeh Lewisville.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border-0 text-charcoal focus:outline-none focus:ring-2 focus:ring-accent-red"
                  />
                  <button
                    type="submit"
                    className="w-full btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Contact Lewisville
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-soft-gold font-bold mb-1">Address</p>
                    <p className="text-white/80">
                      {lewisville.address.street} {lewisville.address.suite}<br/>
                      {lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}
                    </p>
                  </div>
                  <div>
                    <p className="text-soft-gold font-bold mb-1">Phone</p>
                    <a href={`tel:${lewisville.phoneClean}`} className="text-white/80 hover:text-soft-gold transition-colors">
                      {lewisville.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-soft-gold font-bold mb-1">Website</p>
                    <a href="/lewisville" className="text-white/80 hover:text-soft-gold transition-colors">
                      View Lewisville Location →
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Visit Jinbeh Lewisville Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Experience amazing specials on authentic Japanese cuisine. Happy Hour, lunch deals, and weekly promotions await!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${lewisville.phoneClean}`}
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-colors"
              >
                {lewisville.phone}
              </a>
              <Link
                href="/lewisville"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 text-lg font-bold rounded-xl transition-colors"
              >
                Full Lewisville Details
              </Link>
            </div>
        </section>

        {/* Back to Main Specials */}
        <section className="py-12 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <Link
              href="/specials"
              className="text-charcoal/70 hover:text-charcoal font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              ← Back to All Specials
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
