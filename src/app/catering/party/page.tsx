import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Party Catering Services | Jinbeh Japanese Restaurant | DFW Catering",
  description:
    "Bring Jinbeh to your party! Japanese catering for birthday parties, celebrations, and events in Frisco, Lewisville, and DFW. Fresh sushi, appetizers, and hibachi-style catering.",
  keywords: [
    "party catering frisco",
    "birthday party catering",
    "sushi catering dfw",
    "hibachi catering dallas",
    "japanese party catering",
    "celebration catering frisco tx",
    "event catering lewisville",
    "affordable catering near me",
  ],
  openGraph: {
    title: "Party Catering | Jinbeh Japanese Restaurant",
    description: "Celebrate with authentic Japanese catering delivered to your party or event.",
    url: "https://jinbeh.com/catering/party",
  },
  alternates: {
    canonical: "https://jinbeh.com/catering/party",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Jinbeh offer party catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer catering services for birthday parties, celebrations, and special events. Choose from sushi platters, appetizer trays, hibachi-style party trays, or custom menu options.",
      },
    },
    {
      "@type": "Question",
      "name": "What catering options do you have for parties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Sushi Platters, Appetizer Trays, Hibachi Party Trays with fried rice and vegetables, and Custom Menus. All options are beautifully presented and served at your venue.",
      },
    },
    {
      "@type": "Question",
      "name": "How many people can you cater for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cater for any size party! From intimate gatherings to large events. Let us know your group size and we'll create the perfect catering proposal.",
      },
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book party catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking 1-2 weeks in advance for standard orders. For large parties or peak seasons, book 3-4 weeks ahead. This ensures we can source the freshest ingredients and meet your needs.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you deliver the catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We deliver catering throughout the DFW area including Frisco, Lewisville, Plano, McKinney, and surrounding cities. Delivery charges apply based on distance.",
      },
    },
    {
      "@type": "Question",
      "name": "Can you accommodate dietary restrictions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Let us know when you place your order and we'll create options that work for your guests.",
      },
    },
  ],
};

const partyCateringOptions = [
  {
    title: "Sushi Platters",
    description: "Beautiful, fresh sushi arrangements perfect for parties and events.",
    icon: "🍣",
    includes: [
      "Signature specialty rolls",
      "Classic rolls",
      "Fresh nigiri selection",
      "Colorful presentation",
      "Includes wasabi, ginger, soy sauce",
    ],
    ideal: "Best for: Cocktail parties, mixed gatherings, elegant celebrations",
    priceRange: "$$",
  },
  {
    title: "Appetizer Trays",
    description: "Japanese-style appetizers that get everyone excited about the food.",
    icon: "🥢",
    includes: [
      "Edamame",
      "Crispy gyoza",
      "Vegetable & shrimp tempura",
      "Spring rolls",
      "Chicken teriyaki bites",
      "Assorted seasonings",
    ],
    ideal: "Best for: Casual parties, game day events, pre-dinner appetizers",
    priceRange: "$$",
  },
  {
    title: "Hibachi Party Trays",
    description: "Teppanyaki-style proteins and sides – crowd favorites!",
    icon: "🔥",
    includes: [
      "Your choice of protein (chicken, steak, shrimp, or combo)",
      "Fried rice prepared fresh",
      "Grilled seasonal vegetables",
      "Teriyaki sauce & garnishes",
      "Serves groups of 10-30+",
    ],
    ideal: "Best for: Family gatherings, birthdays, large celebrations",
    priceRange: "$$$",
  },
  {
    title: "Custom Party Menus",
    description: "Create the perfect catering package for your specific celebration.",
    icon: "🎉",
    includes: [
      "Mix and match any items",
      "Dietary accommodation",
      "Themed presentations",
      "Full-service options available",
      "Professional setup & service",
    ],
    ideal: "Best for: Milestone celebrations, corporate events, premium parties",
    priceRange: "$$$-$$$$",
  },
];

const partyBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fresh Quality",
    description: "The same premium ingredients used in our restaurants – fresh sushi-grade fish and quality proteins.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Delivery",
    description: "Punctual delivery to your venue, perfectly timed for your celebration.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Customizable",
    description: "Mix and match items or create a completely custom menu for your event.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Any Size Event",
    description: "From intimate groups of 10 to large celebrations of 100+. We scale to your needs.",
  },
];

export default function PartyCateringPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/photoshoot/sushi-tower.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Bring the Celebration
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Party Catering Services
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Elevate your celebration with authentic Japanese catering. Fresh sushi,
              appetizers, and hibachi-style party trays delivered to your venue.
            </p>
            <a
              href="#contact"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Party Catering Benefits */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Choose Jinbeh for Party Catering?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                The same quality food and service that makes our restaurants special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {partyBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center text-accent-red">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Party Catering Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Party Catering Options
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Choose from popular packages or create a custom menu for your celebration.
              </p>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              {partyCateringOptions.map((option, index) => (
                <div
                  key={option.title}
                  className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-warm-ivory to-white' : 'from-white to-warm-ivory'} rounded-2xl p-10 shadow-lg`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="text-6xl mb-4">{option.icon}</div>
                      <h3 className="text-3xl font-heading font-bold text-charcoal mb-3">
                        {option.title}
                      </h3>
                      <p className="text-lg text-charcoal/80 mb-6">
                        {option.description}
                      </p>
                      <p className="text-sm font-semibold text-charcoal/60">
                        {option.ideal}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-semibold text-charcoal mb-4">What's Included:</h4>
                      <ul className="space-y-2 mb-6">
                        {option.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-charcoal/80">
                            <svg className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-lg font-semibold text-deep-indigo">
                        Price: {option.priceRange}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                How Party Catering Works
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                From inquiry to celebration – we make catering easy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl">
                  1
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-warm-ivory/70">
                  Call or email us with your party details: date, guest count, and preferences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl">
                  2
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Custom Quote</h3>
                <p className="text-warm-ivory/70">
                  We create a customized catering proposal with menu options and pricing.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl">
                  3
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Confirm & Plan</h3>
                <p className="text-warm-ivory/70">
                  Approve your selections and finalize delivery time and location details.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl">
                  4
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Enjoy!</h3>
                <p className="text-warm-ivory/70">
                  We deliver fresh food, you celebrate with your guests. That's it!
                </p>
              </div>
            </div>
        </section>

        {/* Party Planning Tips */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Party Catering Tips
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4">📋 Planning</h3>
                  <ul className="space-y-3 text-charcoal/80 text-sm">
                    <li>• Book 1-2 weeks in advance for standard orders</li>
                    <li>• Plan 2-3 weeks ahead for larger parties</li>
                    <li>• Confirm delivery address and timing</li>
                    <li>• Mention dietary restrictions upfront</li>
                    <li>• Plan quantities (roughly 3-4 pieces per person)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4">✓ Menu Ideas</h3>
                  <ul className="space-y-3 text-charcoal/80 text-sm">
                    <li>• Mix sushi platters with appetizer trays</li>
                    <li>• Add hibachi trays for larger groups</li>
                    <li>• Consider vegetarian options for diversity</li>
                    <li>• Ask about beverages and serving suggestions</li>
                    <li>• Get serving recommendations from our team</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4">🎉 Special Touches</h3>
                  <ul className="space-y-3 text-charcoal/80 text-sm">
                    <li>• Ask about themed presentations</li>
                    <li>• Request custom serving arrangements</li>
                    <li>• Inquire about full-service catering options</li>
                    <li>• Ask about table setup and service</li>
                    <li>• We can help with any special requests</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4">💰 Budget Tips</h3>
                  <ul className="space-y-3 text-charcoal/80 text-sm">
                    <li>• Appetizer trays are budget-friendly starters</li>
                    <li>• Ask about combination packages</li>
                    <li>• Group discounts available for larger orders</li>
                    <li>• Seasonal specials may save you money</li>
                    <li>• We work within your budget!</li>
                  </ul>
                </div>
              </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Request Your Party Catering Quote
                </h2>
                <p className="text-white/90">
                  Let's make your celebration delicious!
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-soft-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-sm text-white/70">Frisco Location</p>
                        <a href="tel:2146191200" className="text-white hover:text-soft-gold font-semibold">(214) 619-1200</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-soft-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-sm text-white/70">Lewisville Location</p>
                        <a href="tel:2144882224" className="text-white hover:text-soft-gold font-semibold">(214) 488-2224</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-soft-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-sm text-white/70">Email</p>
                        <a href="mailto:catering@jinbeh.com" className="text-white hover:text-soft-gold font-semibold">catering@jinbeh.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-6">What to Tell Us</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Event date and preferred time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Number of guests expected</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Delivery address and location</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Type of party/celebration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Any dietary restrictions or preferences</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-10">
                <a
                  href="mailto:catering@jinbeh.com?subject=Party%20Catering%20Inquiry"
                  className="btn bg-white hover:bg-warm-ivory text-accent-red px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
                >
                  Send Catering Inquiry
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
        </section>

        {/* Related Catering Services */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Other Catering Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/catering"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                All Catering Services
              </Link>
              <Link
                href="/catering/corporate"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Corporate Catering
              </Link>
              <Link
                href="/catering/wedding"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Wedding Catering
              </Link>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
