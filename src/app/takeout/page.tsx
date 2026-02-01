import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import locations from "@/data/locations.json";

export const metadata: Metadata = {
  title: "Takeout & Delivery | Jinbeh Japanese Restaurant - Frisco & Lewisville",
  description:
    "Order Jinbeh for takeout or delivery. Fresh sushi rolls, hibachi entrees, and Japanese favorites delivered to your door via GrubHub and Uber Eats. Fast, convenient dining!",
  keywords: [
    "takeout",
    "delivery",
    "order online",
    "japanese food delivery",
    "sushi takeout",
    "grubhub",
    "uber eats",
    "frisco delivery",
    "lewisville delivery",
  ],
  openGraph: {
    title: "Takeout & Delivery | Jinbeh Japanese Restaurant",
    description:
      "Order Jinbeh takeout or delivery. Fresh sushi and Japanese cuisine delivered to your door.",
    url: "https://jinbeh.com/takeout",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/takeout",
  },
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const orderingMethods = [
  {
    title: "GrubHub",
    icon: "🛵",
    description: "Order directly from GrubHub for delivery to your location.",
    color: "from-red-600 to-red-700",
  },
  {
    title: "Uber Eats",
    icon: "🚗",
    description: "Use Uber Eats for convenient delivery right to your door.",
    color: "from-black to-gray-800",
  },
  {
    title: "Call Us",
    icon: "📞",
    description: "Call directly to place a takeout order or discuss delivery.",
    color: "from-accent-red to-orange-600",
  },
];

const takeoutCategories = [
  {
    title: "Sushi Rolls",
    description: "Fresh, expertly crafted sushi rolls prepared daily.",
    items: [
      "California Roll - $8",
      "Spicy Tuna Roll - $10",
      "Shrimp Tempura Roll - $12",
      "Dragon Roll - $14",
      "Philadelphia Roll - $13",
      "Rainbow Roll - $15",
      "Vegetable Roll - $7",
    ],
  },
  {
    title: "Sashimi & Nigiri",
    description: "Premium fresh fish prepared traditional style.",
    items: [
      "Sashimi Sampler - $18",
      "Tuna Nigiri - $12",
      "Salmon Nigiri - $12",
      "Assorted Nigiri - $16",
      "Yellowtail Nigiri - $13",
    ],
  },
  {
    title: "Bento Boxes",
    description: "Complete meals with variety and portion control.",
    items: [
      "Chicken Teriyaki Bento - $14",
      "Shrimp Tempura Bento - $15",
      "Sushi & Sashimi Bento - $18",
      "Mixed Vegetable Bento - $12",
      "Beef Teriyaki Bento - $16",
    ],
  },
  {
    title: "Appetizers",
    description: "Perfect starters for your meal.",
    items: [
      "Edamame - $5",
      "Gyoza (6 pcs) - $8",
      "Tempura Vegetables - $8",
      "Shrimp Tempura - $10",
      "Spring Rolls (4 pcs) - $7",
      "Miso Soup - $4",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Fresh Quality",
    description: "Fresh fish daily, premium ingredients, made-to-order preparation.",
    icon: "🐟",
  },
  {
    title: "Fast Service",
    description: "Typical takeout orders ready in 15-30 minutes. Quick delivery options available.",
    icon: "⚡",
  },
  {
    title: "Variety",
    description: "Wide selection from sushi and rolls to hibachi entrees and appetizers.",
    icon: "🍱",
  },
  {
    title: "Convenient",
    description: "Order online through GrubHub/Uber Eats or call us directly.",
    icon: "📱",
  },
  {
    title: "Customizable",
    description: "Customize rolls, request modifications, and specify dietary preferences.",
    icon: "✨",
  },
  {
    title: "Trusted",
    description: "Family-owned since 1988 with thousands of satisfied customers.",
    icon: "⭐",
  },
];

const tipsAndTricks = [
  {
    title: "Call Ahead",
    description: "Call your location to place your order and reduce wait time.",
  },
  {
    title: "Specify Preferences",
    description: "Let us know if you prefer extra rice, no mayo, spicy, or other modifications.",
  },
  {
    title: "Order Popular Items",
    description: "Sushi rolls, bento boxes, and gyoza are always fresh and quickly prepared.",
  },
  {
    title: "Check Estimated Time",
    description: "When ordering online, you'll see the estimated pickup or delivery time.",
  },
  {
    title: "Plan Ahead",
    description: "For large orders, call ahead so we can prepare everything fresh.",
  },
  {
    title: "Ask About Specials",
    description: "Call us to ask about daily specials or limited-time offers.",
  },
];

export default function TakeoutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-indigo via-charcoal to-deep-indigo" />
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
              Convenient Dining
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Takeout & Delivery
            </h1>
            <p className="text-xl text-white/80">
              Enjoy fresh sushi, authentic hibachi, and Japanese favorites from the comfort of your home.
            </p>
          </div>
        </section>

        {/* Ordering Methods */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Three Ways to Order
              </h2>
              <p className="text-lg text-charcoal/70">
                Choose the ordering method that's most convenient for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* GrubHub */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 text-center">
                  <div className="text-5xl mb-4">🛵</div>
                  <h3 className="text-2xl font-heading font-bold">GrubHub</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="text-charcoal/70 mb-6">
                    Order directly from GrubHub for delivery to your location. Real-time tracking and easy payment.
                  </p>
                  <a
                    href={frisco.orderOnline.grubhub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full btn bg-red-600 text-white hover:bg-red-700 py-3 rounded-xl font-semibold transition-colors mb-3"
                  >
                    Frisco on GrubHub
                  </a>
                  <a
                    href={lewisville.orderOnline.grubhub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full btn bg-red-600 text-white hover:bg-red-700 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Lewisville on GrubHub
                  </a>
                </div>
              </div>

              {/* Uber Eats */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 text-center">
                  <div className="text-5xl mb-4">🚗</div>
                  <h3 className="text-2xl font-heading font-bold">Uber Eats</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="text-charcoal/70 mb-6">
                    Use Uber Eats for convenient delivery. Order from your phone and track in real time.
                  </p>
                  <a
                    href={frisco.orderOnline.ubereats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full btn bg-black text-white hover:bg-gray-900 py-3 rounded-xl font-semibold transition-colors mb-3"
                  >
                    Frisco on Uber Eats
                  </a>
                  <a
                    href={lewisville.orderOnline.ubereats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full btn bg-black text-white hover:bg-gray-900 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Lewisville on Uber Eats
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-accent-red to-orange-600 text-white p-8 text-center">
                  <div className="text-5xl mb-4">📞</div>
                  <h3 className="text-2xl font-heading font-bold">Call Us</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="text-charcoal/70 mb-6">
                    Call directly to place your order. Speak with our team about customizations and specials.
                  </p>
                  <a
                    href={`tel:${frisco.phoneClean}`}
                    className="inline-block w-full btn bg-accent-red text-white hover:bg-accent-red/90 py-3 rounded-xl font-semibold transition-colors mb-3"
                  >
                    Frisco: {frisco.phone}
                  </a>
                  <a
                    href={`tel:${lewisville.phoneClean}`}
                    className="inline-block w-full btn bg-accent-red text-white hover:bg-accent-red/90 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Lewisville: {lewisville.phone}
                  </a>
                </div>
              </div>
            </div>
        </section>

        {/* Popular Takeout Items */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Popular Takeout Items
              </h2>
              <p className="text-lg text-charcoal/70">
                Browse our menu favorites. Call to place a custom order!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {takeoutCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-warm-ivory rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                    {category.title}
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-sm">{category.description}</p>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center justify-between text-charcoal/80 pb-2 border-b border-charcoal/10"
                      >
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-charcoal/70 mb-6">
                Want to see our full menu? Call us or visit one of our location pages for complete menu PDFs.
              </p>
              <Link
                href="/frisco"
                className="inline-block btn bg-charcoal text-white hover:bg-charcoal/90 px-6 py-3 rounded-xl font-semibold mr-3"
              >
                Frisco Menu
              </Link>
              <Link
                href="/lewisville"
                className="inline-block btn bg-charcoal text-white hover:bg-charcoal/90 px-6 py-3 rounded-xl font-semibold"
              >
                Lewisville Menu
              </Link>
            </div>
        </section>

        {/* Why Order from Jinbeh */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why Order from Jinbeh?
              </h2>
              <p className="text-lg text-white/80">
                Experience the same quality and care in every takeout order.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, idx) => (
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

        {/* Tips for Better Takeout */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Tips for Better Takeout
              </h2>
              <p className="text-lg text-charcoal/70">
                Get the best experience from your Jinbeh takeout order.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tipsAndTricks.map((tip, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">
                      {idx === 0 && "📞"}
                      {idx === 1 && "🎯"}
                      {idx === 2 && "⭐"}
                      {idx === 3 && "⏱️"}
                      {idx === 4 && "🚚"}
                      {idx === 5 && "🎁"}
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
        </section>

        {/* Delivery Coverage */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-accent-red/10 to-deep-indigo/10 rounded-2xl p-12 text-center border border-accent-red/20">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Delivery Coverage Areas
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                We deliver to most areas in the Frisco and Lewisville area. Delivery times and fees are shown when you order.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="font-semibold text-charcoal mb-2">Frisco Delivery</p>
                  <p className="text-charcoal/70 text-sm">
                    Near Stonebriar Centre, Legacy West, and surrounding areas
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-2">Lewisville Delivery</p>
                  <p className="text-charcoal/70 text-sm">
                    Off I-35E, Vista Ridge area, and surrounding neighborhoods
                  </p>
                </div>
              </div>
              <p className="text-charcoal/60 text-sm">
                Check GrubHub or Uber Eats for exact delivery availability to your address.
              </p>
            </div>
        </section>

        {/* FAQ for Takeout */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Takeout FAQ
              </h2>
              <p className="text-lg text-charcoal/70">
                Common questions about our takeout and delivery service.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "How long does takeout usually take?",
                  a: "Most orders are ready in 15-30 minutes. During peak hours, wait times may be 30-45 minutes.",
                },
                {
                  q: "Can I customize my order?",
                  a: "Absolutely! You can customize rolls, request modifications, adjust spice levels, and specify dietary preferences.",
                },
                {
                  q: "Is delivery available to my area?",
                  a: "Check GrubHub or Uber Eats to see if delivery is available to your address. Delivery fees and times vary.",
                },
                {
                  q: "What's the minimum order for delivery?",
                  a: "Minimum orders vary by delivery service and location. Check the app for specific minimums.",
                },
                {
                  q: "Can I place a large order for a group?",
                  a: "Yes! For large orders (10+ people), call us directly so we can prepare everything fresh.",
                },
                {
                  q: "What payment methods are accepted?",
                  a: "All major credit cards, debit cards, and payment apps. Specific options vary by ordering platform.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-3">
                    {item.q}
                  </h3>
                  <p className="text-charcoal/70">{item.a}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Enjoy delicious Japanese cuisine delivered to your door or ready for pickup in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={frisco.orderOnline.grubhub}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Order on GrubHub
              </a>
              <a
                href={frisco.orderOnline.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Order on Uber Eats
              </a>
            </div>
            <p className="text-white/70 text-sm mt-8">
              Or call us directly: Frisco <a href={`tel:${frisco.phoneClean}`} className="text-soft-gold hover:text-soft-gold/80">{frisco.phone}</a> |
              Lewisville <a href={`tel:${lewisville.phoneClean}`} className="text-soft-gold hover:text-soft-gold/80">{lewisville.phone}</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
