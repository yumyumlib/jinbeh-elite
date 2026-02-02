import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import locations from "@/data/locations.json";

export const metadata: Metadata = {
  title: "Specials & Promotions | Jinbeh Japanese Restaurant | Frisco & Lewisville TX",
  description:
    "Explore amazing specials at Jinbeh! Happy Hour deals, lunch specials, weekly promotions, and seasonal offers at our Frisco and Lewisville Japanese restaurants.",
  keywords: [
    "specials",
    "promotions",
    "deals",
    "happy hour",
    "lunch specials",
    "japanese restaurant specials",
    "frisco specials",
    "lewisville specials",
    "restaurant deals",
    "dining specials",
  ],
  openGraph: {
    title: "Specials & Promotions | Jinbeh Japanese Restaurant",
    description:
      "Amazing deals on sushi, hibachi, and Japanese cuisine. Happy Hour, lunch specials, and weekly promotions.",
    url: "https://jinbeh.com/specials",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/specials",
  },
};

// JSON-LD Schema for Offers
const offersSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "offers": [
    {
      "@type": "Offer",
      "name": "Happy Hour Specials",
      "description": "$5 select appetizers, $5 select cocktails and sake, $3 domestic beers",
      "price": "3.00",
      "priceCurrency": "USD",
      "availability": "Monday - Friday, 4:00 PM - 6:00 PM",
      "url": "https://jinbeh.com/specials#happy-hour"
    },
    {
      "@type": "Offer",
      "name": "Lunch Specials",
      "description": "Bento boxes from $12.95, hibachi lunch combos from $13.95, sushi lunch specials",
      "price": "12.95",
      "priceCurrency": "USD",
      "availability": "Monday - Friday, 11:00 AM - 2:30 PM",
      "url": "https://jinbeh.com/specials#lunch"
    },
    {
      "@type": "Offer",
      "name": "Weekly Specials",
      "description": "Date Night Monday, Family Tuesday, Wine Wednesday, Sake Thursday",
      "url": "https://jinbeh.com/specials#weekly"
    }
  ]
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const specialCategories = [
  {
    id: "happy-hour",
    icon: "🍸",
    title: "Happy Hour Specials",
    time: "Mon-Fri • 4:00 PM - 6:00 PM",
    description: "Unwind with discounted drinks and appetizers",
    color: "from-accent-red to-deep-indigo",
    href: "/specials#happy-hour",
  },
  {
    id: "lunch",
    icon: "🍱",
    title: "Lunch Specials",
    time: "Mon-Fri • 11:00 AM - 2:30 PM",
    description: "Affordable Japanese lunch entrees",
    color: "from-deep-indigo to-soft-gold",
    href: "/specials#lunch",
  },
  {
    id: "weekly",
    icon: "📅",
    title: "Weekly Specials",
    time: "Every Day of the Week",
    description: "Special promotions throughout the week",
    color: "from-soft-gold to-accent-red",
    href: "/specials#weekly",
  },
];

const weeklySpecials = [
  {
    day: "Monday",
    name: "Date Night Monday",
    emoji: "💑",
    description: "Special pricing for couples dining together",
    details: "Enjoy romantic dinner with exclusive partner deals",
  },
  {
    day: "Tuesday",
    name: "Family Tuesday",
    emoji: "👨‍👩‍👧‍👦",
    description: "Family-friendly specials and group discounts",
    details: "Bring the whole family and save on combo meals",
  },
  {
    day: "Wednesday",
    name: "Wine Wednesday",
    emoji: "🍷",
    description: "Special pricing on wine selections",
    details: "Pair our Japanese cuisine with curated wine specials",
  },
  {
    day: "Thursday",
    name: "Sake Thursday",
    emoji: "🍶",
    description: "Premium sake selections at special prices",
    details: "Explore hot and cold sake pairings with dinner",
  },
];

const happyHourItems = [
  {
    category: "Appetizers",
    items: ["Gyoza (Pan-Fried Dumplings)", "Edamame", "Spicy Tuna Crispy Rice"],
    price: "$5",
    emoji: "🥟",
  },
  {
    category: "Cocktails & Sake",
    items: ["Tokyo Mule", "Select Premium Sake Glasses", "Lychee Martini"],
    price: "$5",
    emoji: "🍸",
  },
  {
    category: "Beer Selection",
    items: ["Domestic Beer Pints", "Japanese Beer Selections"],
    price: "$3",
    emoji: "🍺",
  },
];

const lunchHighlights = [
  {
    title: "Bento Boxes",
    price: "Starting at $12.95",
    description: "Assorted proteins with rice, vegetables, and sides",
    emoji: "🍱",
  },
  {
    title: "Hibachi Lunch Combos",
    price: "From $13.95",
    description: "Chef-cooked hibachi experience at lunch prices",
    emoji: "🔥",
  },
  {
    title: "Sushi Lunch Specials",
    price: "Varies",
    description: "Fresh rolls and nigiri combinations",
    emoji: "🍣",
  },
];

export default function SpecialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/food/SamaraiRollCloseup.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4 animate-pulse">
              Limited Time Offers
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Exclusive Specials & Deals
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Discover amazing discounts on your favorite Japanese cuisine.
              From happy hour to weekly specials, there&apos;s always something to celebrate.
            </p>
            <div className="inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl">
              Save Big Every Day
            </div>
          </div>
        </section>

        {/* Quick Navigation to Specials */}
        <section className="py-12 bg-gradient-to-r from-deep-indigo to-charcoal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {specialCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.href}
                  className="group bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-heading text-xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-soft-gold text-sm mb-3 font-medium">
                    {category.time}
                  </p>
                  <p className="text-white/80 text-sm">
                    {category.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Happy Hour Section */}
        <section id="happy-hour" className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-accent-red font-bold tracking-wider uppercase mb-2">
                🍸 Unwind After Work
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Happy Hour Specials
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Monday – Friday, 4:00 PM – 6:00 PM<br/>
                <span className="text-accent-red font-bold">Don't Miss Out!</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {happyHourItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="text-6xl mb-4 text-center">{item.emoji}</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-2 text-center">
                    {item.category}
                  </h3>
                  <div className="bg-accent-red text-white py-3 px-4 rounded-xl text-center font-bold text-xl mb-6">
                    {item.price}
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((food, i) => (
                      <li key={i} className="text-charcoal/80 text-sm flex items-start gap-2">
                        <span className="text-accent-red mt-1">✓</span>
                        {food}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-red/10 to-deep-indigo/10 rounded-2xl p-8 border border-accent-red/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-4 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Frisco Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {frisco.address.street} {frisco.address.suite}<br/>
                    {frisco.address.city}, {frisco.address.state} {frisco.address.zip}
                  </p>
                  <a href={`tel:${frisco.phoneClean}`} className="inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors">
                    Call {frisco.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-4 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Lewisville Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {lewisville.address.street} {lewisville.address.suite}<br/>
                    {lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}
                  </p>
                  <a href={`tel:${lewisville.phoneClean}`} className="inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors">
                    Call {lewisville.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lunch Specials Section */}
        <section id="lunch" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-deep-indigo font-bold tracking-wider uppercase mb-2">
                🍱 Midday Deals
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Lunch Specials
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Monday – Friday, 11:00 AM – 2:30 PM<br/>
                Weekend 11:30 AM – 2:30 PM<br/>
                <span className="text-deep-indigo font-bold">Affordable Quality Cuisine</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {lunchHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-warm-ivory rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all border border-deep-indigo/10"
                >
                  <div className="text-6xl mb-4 text-center">{item.emoji}</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2 text-center">
                    {item.title}
                  </h3>
                  <div className="bg-deep-indigo text-white py-3 px-4 rounded-xl text-center font-bold mb-4">
                    {item.price}
                  </div>
                  <p className="text-charcoal/70 text-sm text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <Link
                href="/lunch-specials"
                className="inline-block btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                View Full Lunch Menu →
              </Link>
            </div>
          </div>
        </section>

        {/* Weekly Specials Section */}
        <section id="weekly" className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-soft-gold font-bold tracking-wider uppercase mb-2">
                📅 Every Day's Special
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Weekly Specials
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Unique promotions throughout the week. Plan your visit!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {weeklySpecials.map((special, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-soft-gold/50 transition-all duration-300 group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {special.emoji}
                  </div>
                  <p className="text-soft-gold font-bold text-sm uppercase tracking-wider mb-2">
                    {special.day}
                  </p>
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {special.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {special.description}
                  </p>
                  <p className="text-white/80 text-xs italic">
                    {special.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Check with your location for specific offers and promotions on each day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/frisco"
                  className="btn bg-soft-gold text-charcoal hover:bg-warm-ivory px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Frisco Details
                </Link>
                <Link
                  href="/lewisville"
                  className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Lewisville Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal/Holiday Specials */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-accent-red font-bold tracking-wider uppercase mb-2">
                🎉 Limited Time Offers
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Seasonal & Holiday Specials
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Check back for special promotions tied to holidays and seasons.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { emoji: "🎄", label: "Holiday Specials", desc: "Coming Soon" },
                  { emoji: "🎊", label: "Seasonal Offers", desc: "Coming Soon" },
                  { emoji: "🎁", label: "Party Packages", desc: "Coming Soon" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-accent-red/20"
                  >
                    <div className="text-6xl mb-4">{item.emoji}</div>
                    <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                      {item.label}
                    </h3>
                    <p className="text-charcoal/80">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-accent-red/20 to-deep-indigo/20 rounded-2xl p-8 text-center border-2 border-accent-red/30">
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Stay Updated on Special Offers
                </h3>
                <p className="text-charcoal/70 mb-6">
                  Subscribe to our newsletter to receive notifications about upcoming seasonal specials and exclusive promotions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/30"
                  />
                  <button className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-bold transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-20 bg-gradient-to-br from-deep-indigo via-charcoal to-accent-red text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Never Miss a Special
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Get exclusive deals, early access to specials, and insider information delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-0 text-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold/50"
                  required
                />
                <button
                  type="submit"
                  className="btn bg-soft-gold text-charcoal hover:bg-warm-ivory px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  Join Now
                </button>
              </form>
              <p className="text-white/70 text-sm">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Location Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Visit Our Locations
              </h2>
              <p className="text-lg text-charcoal/70">
                Both Frisco and Lewisville locations feature all current specials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Frisco */}
              <Link
                href="/frisco/specials"
                className="group bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/catalog/5-C060324-6397.jpg"
                    alt="Jinbeh Frisco location"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                    Frisco Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {frisco.address.street} {frisco.address.suite}<br/>
                    {frisco.address.city}, {frisco.address.state} {frisco.address.zip}
                  </p>
                  <div className="flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all">
                    <span>View Specials</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>

              {/* Lewisville */}
              <Link
                href="/lewisville/specials"
                className="group bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/interior/JinbehFrisco_SushiBar.jpg"
                    alt="Jinbeh Lewisville location"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                    Lewisville Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {lewisville.address.street} {lewisville.address.suite}<br/>
                    {lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}
                  </p>
                  <div className="flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all">
                    <span>View Specials</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Specials FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Specials & Deals FAQ
              </h2>
              <p className="text-lg text-charcoal/70">
                Got questions about our happy hour, lunch deals, and weekly specials? Find answers here.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Does Jinbeh have happy hour?",
                  a: "Yes! We offer Happy Hour Monday through Friday, 4:00 PM - 6:00 PM. Enjoy $5 select appetizers, $5 select cocktails and sake, and $3 domestic beers. It&apos;s the perfect time to unwind after work.",
                },
                {
                  q: "What are Jinbeh&apos;s lunch specials?",
                  a: "We offer fantastic lunch specials Monday through Friday, 11:00 AM - 2:30 PM (weekends 11:30 AM - 2:30 PM). Choose from bento boxes starting at $12.95, hibachi lunch combos from $13.95, and fresh sushi lunch specials. All dishes are affordable without compromising quality.",
                },
                {
                  q: "When is happy hour at Jinbeh?",
                  a: "Happy Hour runs Monday through Friday from 4:00 PM to 6:00 PM. This is our weekday special time for drink deals, including $1 sake and discounted rolls. It&apos;s perfect for after-work gatherings and date night pre-dinner drinks.",
                },
              ].map((faq, i) => (
                <details key={i} className="bg-warm-ivory rounded-xl shadow-md overflow-hidden group">
                  <summary className="p-6 cursor-pointer font-semibold text-charcoal hover:bg-white transition-colors flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/70">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Save?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Visit Jinbeh today and enjoy amazing specials on authentic Japanese cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${frisco.phoneClean}`}
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-colors"
              >
                Call Frisco
              </a>
              <a
                href={`tel:${lewisville.phoneClean}`}
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-bold rounded-xl transition-colors"
              >
                Call Lewisville
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
