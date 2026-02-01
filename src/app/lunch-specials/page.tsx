import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import locations from "@/data/locations.json";

export const metadata: Metadata = {
  title:
    "Lunch Specials | Jinbeh Japanese Restaurant - Frisco & Lewisville",
  description:
    "Enjoy delicious lunch specials at Jinbeh. Affordable hibachi, sushi, and Japanese entrees available weekdays 11am-2pm. Quick service, great value!",
  keywords: [
    "lunch specials",
    "lunch deals",
    "hibachi lunch",
    "sushi lunch",
    "affordable lunch",
    "quick lunch",
    "frisco lunch",
    "lewisville lunch",
    "japanese lunch",
  ],
  openGraph: {
    title: "Lunch Specials | Jinbeh Japanese Restaurant",
    description:
      "Affordable hibachi and sushi lunch specials at Jinbeh. Weekday lunch 11am-2pm at both locations.",
    url: "https://jinbeh.com/lunch-specials",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/lunch-specials",
  },
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const lunchSpecials = [
  {
    title: "Chicken Teriyaki Bowl",
    description: "Tender chicken with sweet teriyaki glaze, vegetables, and steamed rice",
    price: "$12.99",
    time: "Quick prep",
    icon: "🍗",
  },
  {
    title: "Shrimp Tempura Bowl",
    description: "Crispy tempura shrimp, fresh vegetables, rice, and dipping sauce",
    price: "$13.99",
    time: "Quick prep",
    icon: "🦐",
  },
  {
    title: "Beef Teriyaki Combo",
    description: "Grilled beef, steamed vegetables, rice, soup, and salad",
    price: "$14.99",
    time: "Quick prep",
    icon: "🥩",
  },
  {
    title: "Veggie Tempura Bowl",
    description: "Assorted vegetables in light tempura batter with dipping sauce and rice",
    price: "$10.99",
    time: "Quick prep",
    icon: "🥬",
  },
  {
    title: "Sushi Lunch Special",
    description: "Three sushi rolls (your choice), soup, and edamame",
    price: "$14.99",
    time: "Quick prep",
    icon: "🍣",
  },
  {
    title: "Hibachi Lunch Entree",
    description: "Choose protein, chef-cooked hibachi style with vegetables and rice",
    price: "$16.99-$18.99",
    time: "15-20 min",
    icon: "🔥",
  },
];

const whyLunchAtJinbeh = [
  {
    title: "Great Value",
    description: "Affordable prices with generous portions. More bang for your lunch buck!",
    icon: "💰",
  },
  {
    title: "Quick Service",
    description: "Most orders ready in 15-20 minutes. Perfect for busy work lunches.",
    icon: "⚡",
  },
  {
    title: "Fresh Quality",
    description: "Same fresh ingredients and quality preparation as dinner service.",
    icon: "✨",
  },
  {
    title: "Variety",
    description: "From affordable bowls to entertaining hibachi experiences.",
    icon: "🎯",
  },
  {
    title: "Convenient Locations",
    description: "Easy access from Stonebriar (Frisco) or I-35E (Lewisville).",
    icon: "📍",
  },
  {
    title: "Takeout Available",
    description: "Order ahead and pick up quickly, or dine in and relax.",
    icon: "📱",
  },
];

const lunchHours = [
  {
    location: "Frisco",
    weekday: "11:00 AM - 2:00 PM",
    weekend: "11:30 AM - 2:30 PM",
    address: "2693 Preston Rd, Suite 1040",
  },
  {
    location: "Lewisville",
    weekday: "11:00 AM - 2:00 PM",
    weekend: "11:30 AM - 2:30 PM",
    address: "2440 S Stemmons Fwy #A",
  },
];

export default function LunchSpecialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red via-deep-indigo to-charcoal" />
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/food/hibachi-grill.jpg"
              alt="Hibachi grill"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl text-white">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Weekday Lunch Deals
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Amazing Lunch Specials
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Enjoy authentic Japanese cuisine at unbeatable prices. Available 11am-2pm on weekdays, 11:30am-2:30pm on weekends.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-3xl">💰</span>
              <span className="text-lg font-semibold">Save on Lunch Entrees!</span>
            </div>
        </section>

        {/* Lunch Hours */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {lunchHours.map((info) => (
                <div
                  key={info.location}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
                    {info.location}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-1">
                        Weekday Lunch
                      </p>
                      <p className="text-lg font-semibold text-charcoal">
                        {info.weekday}
                      </p>
                    </div>
                    <div>
                      <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-1">
                        Weekend Lunch
                      </p>
                      <p className="text-lg font-semibold text-charcoal">
                        {info.weekend}
                      </p>
                    </div>
                    <div>
                      <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-1">
                        Location
                      </p>
                      <p className="text-charcoal/80 text-sm">{info.address}</p>
                    </div>
                  </div>
                  <Link
                    href={info.location === "Frisco" ? "/frisco" : "/lewisville"}
                    className="inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Visit {info.location}
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Lunch Specials Menu */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Featured Lunch Specials
              </h2>
              <p className="text-lg text-charcoal/70">
                Delicious options designed for lunch. Quick service, great value, same quality as dinner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {lunchSpecials.map((special, idx) => (
                <div
                  key={idx}
                  className="bg-warm-ivory rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{special.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                    {special.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    {special.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-accent-red font-bold text-lg">
                        {special.price}
                      </p>
                      <p className="text-charcoal/60 text-xs">{special.time}</p>
                    </div>
                    <svg className="w-6 h-6 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Prices and availability may vary by location. Check our full menus for complete lunch options and pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/frisco"
                  className="btn bg-charcoal text-white hover:bg-charcoal/90 px-8 py-3 rounded-xl font-semibold"
                >
                  Frisco Full Menu
                </Link>
                <Link
                  href="/lewisville"
                  className="btn bg-charcoal text-white hover:bg-charcoal/90 px-8 py-3 rounded-xl font-semibold"
                >
                  Lewisville Full Menu
                </Link>
              </div>
            </div>
        </section>

        {/* Why Choose Jinbeh for Lunch */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why Lunch at Jinbeh?
              </h2>
              <p className="text-lg text-white/80">
                The best lunch break in the DFW metroplex.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyLunchAtJinbeh.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors backdrop-blur"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Lunch Recommendations */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Lunch Dining Tips
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Call Ahead",
                    description:
                      "Call your location to place your order and reduce wait time during lunch rush.",
                  },
                  {
                    title: "Group Lunches",
                    description:
                      "We can accommodate lunch groups. Call ahead to let us know your party size.",
                  },
                  {
                    title: "Takeout Friendly",
                    description:
                      "Perfect for takeout. Most orders ready to go in 15-20 minutes. Eat at work or eat in.",
                  },
                  {
                    title: "Team Celebrations",
                    description:
                      "Celebrate birthdays, promotions, or milestones with colleagues at Jinbeh.",
                  },
                  {
                    title: "Dietary Options",
                    description:
                      "Vegetarian, vegan, and gluten-free options available. Just ask our team!",
                  },
                  {
                    title: "Relaxing Atmosphere",
                    description:
                      "Escape the office and enjoy a peaceful, quality lunch break with us.",
                  },
                ].map((tip, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4">
                      <div className="text-2xl flex-shrink-0">
                        {idx === 0 && "📞"}
                        {idx === 1 && "👥"}
                        {idx === 2 && "📦"}
                        {idx === 3 && "🎉"}
                        {idx === 4 && "🌱"}
                        {idx === 5 && "☕"}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-charcoal mb-2">
                          {tip.title}
                        </h3>
                        <p className="text-charcoal/70 text-sm">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* Lunch Menu Downloads */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-deep-indigo/10 to-accent-red/10 rounded-2xl p-12 text-center border border-deep-indigo/20">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                View Complete Lunch Menus
              </h2>
              <p className="text-lg text-charcoal/70 mb-10">
                Check out our full menu options with all lunch entrees and pricing.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div>
                  <p className="font-semibold text-charcoal mb-4">Frisco Location</p>
                  <a
                    href={frisco.menus.lunch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Download Lunch Menu
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-4">Lewisville Location</p>
                  <a
                    href={lewisville.menus.lunch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Download Lunch Menu
                  </a>
                </div>
              </div>
              <p className="text-charcoal/60 text-sm">
                PDF files open in a new window. Prices and items subject to change.
              </p>
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready for Your Best Lunch?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Stop by Jinbeh for lunch this week. Great food, great value, great company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${frisco.phoneClean}`}
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Call Frisco
              </a>
              <a
                href={`tel:${lewisville.phoneClean}`}
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Call Lewisville
              </a>
            </div>
            <p className="text-white/70 text-sm mt-8">
              Frisco: {frisco.phone} | Lewisville: {lewisville.phone}
            </p>
          </div>
        </section>

        {/* More Dining Options */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-8">
                Explore More Dining Options
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: "🎂", label: "Celebrations", href: "/celebrations" },
                { icon: "🍣", label: "Takeout", href: "/takeout" },
                { icon: "🍷", label: "Happy Hour", href: "/happy-hour/specials" },
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
        </section>
      </main>
      <Footer />
    </>
  );
}
