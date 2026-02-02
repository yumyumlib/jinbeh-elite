import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catering | Jinbeh Japanese Restaurant | Hibachi & Sushi Catering DFW",
  description:
    "Bring Jinbeh to your event! Japanese catering for corporate events, weddings, private parties, and special occasions in Frisco, Lewisville, and the DFW metroplex.",
  keywords: [
    "japanese catering frisco",
    "sushi catering dallas",
    "hibachi catering dfw",
    "corporate catering frisco tx",
    "wedding catering japanese",
    "party catering lewisville",
    "thanksgiving catering frisco",
    "catering near me frisco",
  ],
  openGraph: {
    title: "Catering | Jinbeh Japanese Restaurant",
    description: "Bring Jinbeh to your event. Japanese catering for any occasion.",
    url: "https://jinbeh.com/catering",
  },
  alternates: {
    canonical: "https://jinbeh.com/catering",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Jinbeh offer catering services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh offers catering for corporate events, private parties, weddings, and special occasions. We can bring sushi platters, appetizers, and hibachi-style food to your venue.",
      },
    },
    {
      "@type": "Question",
      "name": "What areas does Jinbeh cater to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh provides catering services throughout the DFW metroplex, including Frisco, Lewisville, Plano, McKinney, Carrollton, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 1-2 weeks in advance for standard catering orders. For large events or peak seasons (holidays), please contact us 3-4 weeks ahead.",
      },
    },
    {
      "@type": "Question",
      "name": "What is included in Jinbeh's catering packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Catering packages vary based on your needs. Options include sushi platters, appetizer trays, salads, and more. Contact us for a customized quote based on your event size and preferences.",
      },
    },
  ],
};

const cateringOptions = [
  {
    title: "Sushi Platters",
    description: "Beautifully arranged assortments of our freshest sushi and rolls.",
    image: "/images/photoshoot/sashimi-platter.jpg",
    includes: ["Signature Rolls", "Classic Rolls", "Nigiri Selection", "Sashimi (optional)"],
    ideal: "Perfect for cocktail parties, corporate meetings, and elegant gatherings.",
  },
  {
    title: "Appetizer Trays",
    description: "Japanese-style appetizers that wow any crowd.",
    image: "/images/photoshoot/appetizers-spread.jpg",
    includes: ["Edamame", "Gyoza", "Tempura", "Spring Rolls", "Chicken Teriyaki Bites"],
    ideal: "Great for office lunches, casual parties, and game day events.",
  },
  {
    title: "Hibachi Party Trays",
    description: "Teppanyaki-style proteins with fried rice and vegetables.",
    image: "/images/food/hibachi-grill.jpg",
    includes: ["Chicken Teriyaki", "Steak", "Shrimp", "Fried Rice", "Grilled Vegetables"],
    ideal: "Ideal for family gatherings, graduation parties, and celebrations.",
  },
  {
    title: "Custom Menus",
    description: "Let us create a tailored menu for your special event.",
    image: "/images/about/chef-flames.jpg",
    includes: ["Consultation with our team", "Custom menu design", "Dietary accommodations", "Full-service options available"],
    ideal: "Weddings, corporate retreats, and milestone celebrations.",
  },
];

export default function CateringPage() {
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
              Bring Jinbeh to You
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Catering Services
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              From corporate lunches to milestone celebrations, let Jinbeh&apos;s
              authentic Japanese cuisine make your event unforgettable.
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

        {/* Catering Options */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Catering Options
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Choose from our popular catering packages or let us create something custom for your event.
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {cateringOptions.map((option, index) => (
                <div
                  key={option.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
                      {option.title}
                    </h3>
                    <p className="text-lg text-charcoal/70 mb-6">
                      {option.description}
                    </p>

                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-charcoal mb-3">What&apos;s Included:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {option.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-charcoal/80">
                            <svg className="w-4 h-4 text-accent-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-cedar-brown italic">
                      {option.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Jinbeh Catering */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Choose Jinbeh Catering?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Fresh & Quality
                </h3>
                <p className="text-charcoal/70">
                  The same fresh ingredients and expert preparation you expect from our restaurants.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  On-Time Delivery
                </h3>
                <p className="text-charcoal/70">
                  We understand timing is everything. Count on us for punctual delivery.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Any Size Event
                </h3>
                <p className="text-charcoal/70">
                  From intimate gatherings to large corporate events, we scale to fit your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Request a Catering Quote
                </h2>
                <p className="text-warm-ivory/70">
                  Tell us about your event and we&apos;ll create a custom proposal.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Contact Us Directly</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-sm text-warm-ivory/80">Frisco</p>
                          <a href="tel:2146191200" className="text-white hover:text-soft-gold">(214) 619-1200</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-sm text-warm-ivory/80">Lewisville</p>
                          <a href="tel:2144882224" className="text-white hover:text-soft-gold">(214) 488-2224</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-sm text-warm-ivory/80">Email</p>
                          <a href="mailto:frisco@jinbeh.com" className="text-white hover:text-soft-gold">frisco@jinbeh.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4">What to Include</h3>
                    <ul className="space-y-2 text-warm-ivory/80">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Event date and time
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Number of guests
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Event location/delivery address
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Type of event
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Dietary restrictions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="mailto:frisco@jinbeh.com?subject=Catering%20Inquiry"
                    className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
                  >
                    Send Catering Inquiry
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dine-In CTA */}
        <section className="py-16 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Prefer to Dine With Us?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Visit either location for the full Jinbeh experience – hibachi entertainment and all!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco#reserve"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl"
              >
                Reserve at Frisco
              </Link>
              <Link
                href="/lewisville#reserve"
                className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 font-semibold rounded-xl"
              >
                Reserve at Lewisville
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
