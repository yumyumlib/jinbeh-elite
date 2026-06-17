import type { Metadata } from "next";
import { RevealSection, ShinyBadge } from "@/components/MagicUI";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import locations from "@/data/locations.json";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Jinbeh Delivery | Japanese Food Delivery Frisco & Lewisville TX",
  description:
    "Order authentic Japanese sushi and hibachi favorites for delivery in Frisco and Lewisville. Available on Uber Eats and Grubhub. Fresh ingredients.",
  keywords: [
    "jinbeh delivery",
    "japanese food delivery frisco",
    "sushi delivery lewisville",
    "japanese restaurant delivery texas",
    "hibachi delivery near me",
    "uber eats grubhub", "sushi dallas takeout", ],
  openGraph: {
    title: "Jinbeh Delivery | Japanese Food Delivery Frisco & Lewisville",
    description: "Order fresh sushi and Japanese favorites for delivery",
    url: "https://jinbeh.com/delivery",
    images: [
      {
        url: "https://jinbeh.com/images/food/jinbeh_togo.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese food delivery service in Frisco and Lewisville",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/delivery",
  },
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Jinbeh deliver to my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh delivers to Frisco, Lewisville, and surrounding areas including Carrollton, Coppell, The Colony, and nearby neighborhoods. Check delivery availability on Uber Eats or Grubhub.",
      },
    },
    {
      "@type": "Question",
      name: "How long does delivery take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery typically takes 30-45 minutes depending on your location and current order volume. Exact times are provided by the delivery platform.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order hibachi for delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our hibachi favorites are specially prepared for takeout and delivery. Order rice and protein combinations for delicious hibachi-style meals at home.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best way to order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can order through Uber Eats or Grubhub for convenient delivery. Both platforms offer competitive pricing and delivery options.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver on weekends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we deliver seven days a week. Hours and availability vary by location. Check the delivery app for specific hours and current delivery status.",
      },
    },
    {
      "@type": "Question",
      name: "Can I modify sushi rolls for delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Most rolls can be customized. Use the special instructions field in the delivery app to request modifications like no wasabi, extra ginger, etc.",
      },
    },
  ],
};

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
      "name": "Delivery",
      "item": "https://jinbeh.com/delivery"
    }
  ]
};

export default function DeliveryPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Delivery" }]} />
      </div>
      <main id="main-content" className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/food/FreshSushiAndDessertsAtSushiBar.jpg"
            alt="Fresh sushi delivery from Jinbeh Japanese restaurant in Frisco and Lewisville"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <RevealSection>
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                <ShinyBadge className="!text-soft-gold">Quick & Convenient</ShinyBadge>
              </p>
            </RevealSection>
            <RevealSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
                Jinbeh Delivered to Your Door
              </h1>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto hero-subheadline">
                Fresh sushi, hibachi favorites, and Japanese classics, delivered to your door in Frisco and Lewisville via Uber Eats and Grubhub.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* Delivery Platform Options */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <RevealSection>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Order Now on Your Favorite Platform
                </h2>
              </RevealSection>
              <p className="text-lg text-charcoal/70">
                Same great Jinbeh quality, delivered right to you. Choose your preferred platform and enjoy authentic Japanese cuisine at home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Uber Eats */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
                  <span className="text-5xl">🚗</span>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                    Uber Eats
                  </h3>
                  <p className="text-charcoal/70 mb-6">
                    Seamless ordering and reliable delivery to your door.
                  </p>
                  <a
                    href={locations.locations.frisco.orderOnline.ubereats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-charcoal hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors mb-3"
                  >
                    Frisco on Uber Eats
                  </a>
                  <a
                    href={locations.locations.lewisville.orderOnline.ubereats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-charcoal/80 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Lewisville on Uber Eats
                  </a>
                </div>
              </div>

              {/* Grubhub */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gradient-to-br from-red-500 to-soft-gold flex items-center justify-center">
                  <span className="text-5xl">🛵</span>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                    Grubhub
                  </h3>
                  <p className="text-charcoal/70 mb-6">
                    Trusted platform with rewards and special offers.
                  </p>
                  <a
                    href={locations.locations.frisco.orderOnline.grubhub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-accent-red hover:bg-accent-red-hover text-white px-8 py-3 rounded-xl font-semibold transition-colors mb-3"
                  >
                    Frisco on Grubhub
                  </a>
                  <a
                    href={locations.locations.lewisville.orderOnline.grubhub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-accent-red/80 hover:bg-accent-red-hover text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Lewisville on Grubhub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Coverage Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  We Deliver To Your Area
                </h2>
                <p className="text-lg text-charcoal/70">
                  Serving the greater Dallas-Fort Worth metroplex with reliable, fast delivery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Service Area Overview */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-charcoal to-deep-indigo flex items-center justify-center">
                  <div className="text-center text-white px-8">
                    <svg className="w-12 h-12 mx-auto mb-4 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-xl font-heading font-bold mb-6">Two Delivery Zones</h3>
                    <div className="space-y-4 text-left">
                      <div className="bg-white/10 rounded-xl p-4">
                        <p className="font-semibold text-soft-gold">📍 Frisco Hub</p>
                        <p className="text-white/80 text-sm">Near Stonebriar Centre. Serving Frisco, Plano, The Colony, Little Elm, and Allen.</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <p className="font-semibold text-soft-gold">📍 Lewisville Hub</p>
                        <p className="text-white/80 text-sm">Off I-35E near Vista Ridge. Serving Lewisville, Carrollton, Coppell, Flower Mound, and Highland Village.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas List */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-8">
                    Primary Delivery Areas
                  </h3>

                  <div className="space-y-4 mb-10">
                    {[
                      { city: "Frisco", detail: "All neighborhoods including Stonebriar, Legacy, Ridgeview" },
                      { city: "Lewisville", detail: "All neighborhoods including Vista Ridge, Highland Park" },
                      { city: "Carrollton", detail: "Serving local neighborhoods" },
                      { city: "Coppell", detail: "Quick delivery available" },
                      { city: "The Colony", detail: "And surrounding communities" },
                    ].map((area, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-5 h-5 text-accent-red" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal">{area.city}</p>
                          <p className="text-sm text-charcoal/80">{area.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-warm-ivory rounded-xl p-6 border-l-4 border-soft-gold mb-4">
                    <p className="text-charcoal/80">
                      Don&apos;t see your area? Check availability on Uber Eats or Grubhub. Delivery areas expand frequently, and you might be closer than you think.
                    </p>
                  </div>
                  <div className="bg-warm-ivory rounded-xl p-6 border-l-4 border-accent-red">
                    <p className="text-charcoal/80">
                      <strong>Quick delivery:</strong> If you want quick delivery, our Grubhub and Uber Eats options are great. <strong>Catering for a large group:</strong> for catering delivery to a larger group, please give us at least one week of notice and we&apos;ll make it an excellent experience for your event. <Link href="/catering" className="text-accent-red hover:underline">Plan a catering order →</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights for Delivery */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Popular Delivery Favorites
              </h2>
              <p className="text-lg text-charcoal/70">
                These dishes travel beautifully and arrive fresh, delicious, and ready to enjoy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
              {[
                {
                  name: "Rainbow Roll",
                  description: "Assorted fresh fish over California roll",
                  icon: "🍣",
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  name: "Spicy Tuna",
                  description: "Fresh tuna with spicy mayo and crispy rice",
                  icon: "🌶️",
                  color: "from-red-400 to-orange-400",
                },
                {
                  name: "Hibachi Steak",
                  description: "Premium NY strip with vegetables and fried rice",
                  icon: "🔥",
                  color: "from-orange-400 to-red-400",
                },
                {
                  name: "Salmon Sashimi",
                  description: "Fresh premium salmon slices",
                  icon: "🐟",
                  color: "from-pink-400 to-red-300",
                },
                {
                  name: "Shrimp Tempura",
                  description: "Crispy tempura shrimp with special sauce",
                  icon: "🍤",
                  color: "from-amber-400 to-yellow-300",
                },
                {
                  name: "Dragon Roll",
                  description: "Shrimp tempura with eel and avocado",
                  icon: "🐉",
                  color: "from-green-400 to-teal-400",
                },
                {
                  name: "Chicken Teriyaki",
                  description: "Grilled chicken with savory teriyaki glaze",
                  icon: "🍗",
                  color: "from-yellow-600 to-soft-gold",
                },
                {
                  name: "Veggie Deluxe",
                  description: "Fresh vegetables and avocado rolls",
                  icon: "🥬",
                  color: "from-lime-400 to-green-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
                >
                  <span className="text-5xl block mb-4">{item.icon}</span>
                  <h3 className="font-heading font-bold text-charcoal mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-charcoal/70">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-charcoal/70 mb-6">
                Want to explore the full menu? Order on any platform to see all options and special combinations!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={locations.locations.frisco.orderOnline.ubereats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-red-hover transition-colors"
                >
                  View Full Menu on Uber Eats
                </a>
                <a
                  href={locations.locations.frisco.orderOnline.grubhub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-charcoal text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  View Full Menu on Grubhub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Jinbeh Delivery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Choose Jinbeh for Delivery?
              </h2>
              <p className="text-lg text-charcoal/70">
                Same quality, convenience, and hospitality you'd experience in our restaurants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Fresh & Authentic
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Same premium ingredients and preparation as our restaurant experience.
                </p>
              </div>

              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Quick & Reliable
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Fast preparation and reliable delivery to your door.
                </p>
              </div>

              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Easy Customization
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Modify rolls, proteins, and preferences easily through the app.
                </p>
              </div>

              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-cedar-brown/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cedar-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Family Owned
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Personal care and attention to every order since 1988.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery FAQs */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Delivery FAQs
                </h2>
                <p className="text-lg text-charcoal/70">
                  Everything you need to know about ordering from Jinbeh.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "Does Jinbeh deliver to my area?",
                    a: "Jinbeh delivers to Frisco, Lewisville, Carrollton, Coppell, The Colony, and surrounding areas. Check availability on Uber Eats or Grubhub to confirm your location.",
                  },
                  {
                    q: "How long does delivery take?",
                    a: "Delivery typically takes 30-45 minutes from order placement, depending on your location, current order volume, and delivery platform. Exact times are provided when you place your order.",
                  },
                  {
                    q: "Can I order hibachi for delivery?",
                    a: "Yes! Our hibachi favorites are specially prepared for delivery. Order rice and protein combinations for delicious hibachi-style meals. They arrive hot and ready to enjoy.",
                  },
                  {
                    q: "What's the best way to order?",
                    a: "Both platforms (Uber Eats, Grubhub) are excellent. Choose based on your preference or loyalty program. Each offers competitive pricing and reliable delivery.",
                  },
                  {
                    q: "Do you deliver on weekends?",
                    a: "Yes, we deliver seven days a week! Hours vary by location. Check the delivery app for specific hours and current availability in your area.",
                  },
                  {
                    q: "Can I customize my order?",
                    a: "Absolutely! Most items can be customized. Use the special instructions field to request modifications like no wasabi, extra ginger, sauce on the side, or any dietary preferences.",
                  },
                  {
                    q: "Are there delivery fees?",
                    a: "Delivery fees vary by platform and distance. Uber Eats and Grubhub each offer their own pricing. Check the app for total costs before ordering.",
                  },
                  {
                    q: "What if I'm not satisfied with my order?",
                    a: "We stand behind the quality of every order. Contact the delivery platform's support with any issues. They handle refunds and resolution.",
                  },
                ].map((item, i) => (
                  <details key={i} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <summary className="flex items-center justify-between font-heading font-semibold text-charcoal select-none">
                      {item.q}
                      <svg
                        className="w-5 h-5 text-accent-red transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <p className="text-charcoal/70 mt-4 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                How to Order for Delivery
              </h2>
              <p className="text-lg text-charcoal/70">
                It's simple, fast, and delicious.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Choose Platform",
                  description: "Open Uber Eats or Grubhub and search for Jinbeh.",
                  icon: "📱",
                },
                {
                  step: "2",
                  title: "Browse & Order",
                  description: "Explore our menu, customize items, and add to cart.",
                  icon: "📋",
                },
                {
                  step: "3",
                  title: "Quick Prep",
                  description: "We prepare your order fresh with premium ingredients.",
                  icon: "👨‍🍳",
                },
                {
                  step: "4",
                  title: "Enjoy!",
                  description: "Receive your delicious meal at your door, ready to eat.",
                  icon: "🍽️",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-red to-deep-indigo text-white flex items-center justify-center font-heading font-bold text-3xl mx-auto shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">{item.description}</p>
                  <span className="text-4xl block mt-4">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Your favorite Japanese cuisine is just a few taps away. Order now from the delivery platform of your choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href={locations.locations.frisco.orderOnline.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Order on Uber Eats
              </a>
              <a
                href={locations.locations.frisco.orderOnline.grubhub}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl transition-all"
              >
                Order on Grubhub
              </a>
            </div>
          </div>
        </section>

        {/* Related Blog Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">Explore Our Menu Guides</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/sushi-platter-near-me" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Party Trays</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">Sushi Platters & Catering</h3>
                <p className="text-sm text-charcoal/70 mt-2">Order beautiful sushi platters for parties and group events.</p>
              </Link>
              <Link href="/blog/types-of-sushi" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Sushi Guide</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">Types of Sushi Explained</h3>
                <p className="text-sm text-charcoal/70 mt-2">Know your rolls before you order, from nigiri to specialty rolls.</p>
              </Link>
              <Link href="/blog/sushi-lunch-specials" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Deals</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">Sushi Lunch Specials</h3>
                <p className="text-sm text-charcoal/70 mt-2">Discover our best lunch deals and combo specials.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
                Have Questions About Delivery?
              </h3>
              <p className="text-charcoal/70 mb-8">
                Contact us directly at either location, and our team will be happy to help.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-heading font-bold text-charcoal mb-3">
                    Frisco Location
                  </h4>
                  <p className="text-charcoal/70 mb-4">
                    Near Stonebriar Centre
                  </p>
                  <a
                    href="tel:+12146191200"
                    className="text-accent-red hover:text-accent-red-hover font-semibold"
                  >
                    (214) 619-1200
                  </a>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-heading font-bold text-charcoal mb-3">
                    Lewisville Location
                  </h4>
                  <p className="text-charcoal/70 mb-4">
                    Off I-35E near Vista Ridge
                  </p>
                  <a
                    href="tel:+12144882224"
                    className="text-accent-red hover:text-accent-red-hover font-semibold"
                  >
                    (214) 488-2224
                  </a>
                </div>
              </div>
            </div>
          </div>
        
            <p className="mt-4 text-sm">
              <a href="/takeout" className="text-accent-red hover:underline">
                Prefer to pick up? See our takeout options →
              </a>
            </p>
</section>
      </main>
      <Footer />
    </>
  );
}
