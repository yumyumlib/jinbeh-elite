import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import locations from "@/data/locations.json";

export const metadata: Metadata = {
  title:
    "Happy Hour Specials | Jinbeh Japanese Restaurant - Frisco & Lewisville",
  description:
    "Enjoy happy hour at Jinbeh! Discounted drinks, appetizers, and sushi rolls. Perfect for after-work relaxation in Frisco and Lewisville, TX.",
  keywords: [
    "happy hour",
    "happy hour specials",
    "drink specials",
    "sushi happy hour",
    "appetizer specials",
    "frisco happy hour",
    "lewisville happy hour",
    "sake bar",
    "after work drinks",
  ],
  openGraph: {
    title: "Happy Hour Specials | Jinbeh Japanese Restaurant",
    description:
      "Happy hour drinks and appetizer specials at Jinbeh. Unwind after work with discounted sushi, rolls, and beverages.",
    url: "https://jinbeh.com/happy-hour/specials",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/happy-hour/specials",
  },
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const happyHourSpecials = [
  {
    title: "Sake Selection",
    description: "Premium and house sake selections",
    discount: "$4-$6",
    icon: "🍶",
    category: "Drinks",
  },
  {
    title: "Craft Cocktails",
    description: "Signature hibachi-inspired cocktails",
    discount: "$5-$7",
    icon: "🍹",
    category: "Drinks",
  },
  {
    title: "Beer Specials",
    description: "Japanese and domestic beer selection",
    discount: "$3-$5",
    icon: "🍺",
    category: "Drinks",
  },
  {
    title: "California Roll",
    description: "Fresh, classic California roll with ginger",
    discount: "$5 (Reg $8)",
    icon: "🍣",
    category: "Food",
  },
  {
    title: "Spicy Tuna Roll",
    description: "Spicy tuna with sriracha mayo and sesame",
    discount: "$6 (Reg $10)",
    icon: "🌶️",
    category: "Food",
  },
  {
    title: "Edamame",
    description: "Steamed soybeans with sea salt",
    discount: "$3 (Reg $5)",
    icon: "🫘",
    category: "Food",
  },
  {
    title: "Gyoza (6 pcs)",
    description: "Pan-fried pork dumplings with dipping sauce",
    discount: "$5 (Reg $8)",
    icon: "🥟",
    category: "Food",
  },
  {
    title: "Vegetable Tempura",
    description: "Crispy assorted vegetables with dipping sauce",
    discount: "$5 (Reg $8)",
    icon: "🥬",
    category: "Food",
  },
  {
    title: "Spicy Shrimp Roll",
    description: "Shrimp tempura with spicy mayo",
    discount: "$7 (Reg $12)",
    icon: "🦐",
    category: "Food",
  },
];

const happyHourSchedule = [
  {
    location: "Frisco & Lewisville",
    days: "Monday - Friday",
    time: "4:00 PM - 6:00 PM",
    details: "All happy hour specials available",
  },
  {
    location: "Frisco & Lewisville",
    days: "Select Weekends",
    time: "Variable",
    details: "Call for special event happy hours",
  },
];

const whyChooseHappyHour = [
  {
    title: "Unwind After Work",
    description: "Perfect place to relax and decompress with colleagues or friends.",
    icon: "😌",
  },
  {
    title: "Great Value",
    description: "Premium drinks and appetizers at unbeatable prices.",
    icon: "💰",
  },
  {
    title: "Premium Sake",
    description: "Curated sake selection perfect for Japanese food pairing.",
    icon: "🍶",
  },
  {
    title: "Friendly Atmosphere",
    description: "Welcoming bar and lounge area with friendly staff.",
    icon: "👥",
  },
  {
    title: "Quality Food",
    description: "Same fresh ingredients and quality as full dining experience.",
    icon: "✨",
  },
  {
    title: "Easy Locations",
    description: "Convenient locations near Stonebriar and I-35E for easy access.",
    icon: "📍",
  },
];

const drinkCategories = [
  {
    name: "Sake",
    description: "Traditional Japanese rice wine",
    items: [
      "House Sake - $4",
      "Premium Sake - $6-$8",
      "Sake Flights - $12 (3 premium selections)",
    ],
  },
  {
    name: "Craft Cocktails",
    description: "Signature creations",
    items: [
      "Hibachi Martini - $7",
      "Sakamaki - $7",
      "Tokyo Mule - $6",
      "Ginger Paloma - $6",
    ],
  },
  {
    name: "Beer",
    description: "Japanese and international selection",
    items: [
      "Japanese Beer - $3-$4",
      "Import Beer - $4-$5",
      "Domestic Beer - $3",
    ],
  },
  {
    name: "Wine",
    description: "Curated wine selection",
    items: [
      "House Wine by Glass - $4-$6",
      "Premium Wine - $6-$8",
    ],
  },
];

export default function HappyHourSpecialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-charcoal to-accent-red" />
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/photoshoot/sashimi-platter.jpg"
              alt="Sushi"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl text-white">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              4:00 PM - 6:00 PM, Weekdays
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Happy Hour Specials
            </h1>
            <p className="text-xl text-white/80">
              Unwind after work with premium drinks, appetizers, and sushi rolls at special prices.
              Your favorite Japanese restaurant, your favorite happy hour destination.
            </p>
          </div>
        </section>

        {/* Happy Hour Schedule */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">
                Happy Hour Hours
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {happyHourSchedule.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                  >
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-4">
                      {schedule.location}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-1">
                          Days
                        </p>
                        <p className="text-lg font-semibold text-charcoal">
                          {schedule.days}
                        </p>
                      </div>
                      <div>
                        <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-1">
                          Time
                        </p>
                        <p className="text-2xl font-bold text-accent-red">
                          {schedule.time}
                        </p>
                      </div>
                      <p className="text-charcoal/70 text-sm pt-2 border-t border-charcoal/10">
                        {schedule.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Specials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Featured Happy Hour Specials
              </h2>
              <p className="text-lg text-charcoal/70">
                Premium drinks and appetizers at unbeatable prices. Available during happy hour hours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {happyHourSpecials.map((special, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-8 ${
                    special.category === "Drinks"
                      ? "bg-deep-indigo/10"
                      : "bg-accent-red/10"
                  } hover:shadow-lg transition-shadow`}
                >
                  <div className="text-5xl mb-4">{special.icon}</div>
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-3 ${
                      special.category === "Drinks"
                        ? "bg-deep-indigo text-white"
                        : "bg-accent-red text-white"
                    }`}
                  >
                    {special.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                    {special.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    {special.description}
                  </p>
                  <p className="text-2xl font-bold text-accent-red">
                    {special.discount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drink Menu */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Happy Hour Bar Menu
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Our curated selection of premium drinks at special happy hour pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {drinkCategories.map((category, idx) => (
                <div key={idx} className="bg-white/10 rounded-2xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-heading font-bold text-soft-gold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center justify-between text-white/90 pb-2 border-b border-white/10"
                      >
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Happy Hour */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Happy Hour at Jinbeh?
              </h2>
              <p className="text-lg text-charcoal/70">
                The perfect spot to unwind after work with great drinks and company.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseHappyHour.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atmosphere & Experience */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/frisco/JinbehFriscoStorefrontSign.jpg"
                    alt="Jinbeh bar atmosphere"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl bg-soft-gold/10 -z-10" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Your Happy Hour Escape
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    After a long day at work, Jinbeh is your perfect destination to unwind with colleagues, friends, or for a solo relaxation session. Our welcoming bar atmosphere combined with authentic Japanese cuisine creates the ideal happy hour experience.
                  </p>
                  <p>
                    Whether you're discovering premium sake for the first time or you're a seasoned enthusiast, our knowledgeable bartenders can recommend the perfect pairing with our appetizer specials.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Premium Sake</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Fresh Sushi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Craft Cocktails</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Friendly Vibes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Visit Us for Happy Hour
              </h2>
              <p className="text-lg text-charcoal/70">
                Both locations welcome you during happy hour. Easy access from work or anywhere in DFW.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Frisco */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  Jinbeh Frisco
                </h3>
                <div className="space-y-6">
                  <div>
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
                  <div>
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
                  <div>
                    <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                      Happy Hour
                    </p>
                    <p className="text-charcoal font-semibold">
                      Mon-Fri, 4:00 PM - 6:00 PM
                    </p>
                  </div>
                  <Link
                    href="/frisco"
                    className="block w-full btn bg-accent-red text-white hover:bg-accent-red/90 text-center py-3 rounded-xl font-semibold transition-colors"
                  >
                    Visit Frisco Location
                  </Link>
                </div>
              </div>

              {/* Lewisville */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  Jinbeh Lewisville
                </h3>
                <div className="space-y-6">
                  <div>
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
                  <div>
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
                  <div>
                    <p className="text-charcoal/80 text-sm uppercase tracking-wide mb-2">
                      Happy Hour
                    </p>
                    <p className="text-charcoal font-semibold">
                      Mon-Fri, 4:00 PM - 6:00 PM
                    </p>
                  </div>
                  <Link
                    href="/lewisville"
                    className="block w-full btn bg-accent-red text-white hover:bg-accent-red/90 text-center py-3 rounded-xl font-semibold transition-colors"
                  >
                    Visit Lewisville Location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Us This Week
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Escape the workday and enjoy premium drinks, fresh appetizers, and great company.
              Your happy hour destination awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservations"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Make a Reservation
              </Link>
              <Link
                href="/contact"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* More Ways to Enjoy */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-8">
                More Ways to Enjoy Jinbeh
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: "🍣", label: "Takeout", href: "/takeout" },
                { icon: "🎂", label: "Celebrations", href: "/celebrations" },
                { icon: "🥘", label: "Lunch Specials", href: "/lunch-specials" },
                { icon: "🏯", label: "Private Dining", href: "/private-dining" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-4xl block mb-2">{link.icon}</span>
                  <span className="font-medium text-charcoal">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
