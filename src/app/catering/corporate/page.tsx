import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Catering | Jinbeh Japanese Restaurant | Frisco, Dallas, DFW",
  description:
    "Elevate your corporate events with authentic Japanese catering. Office lunches, client meetings, team celebrations, and business events. 37 years of excellence serving Fortune 500 companies.",
  keywords: [
    "corporate catering frisco",
    "business catering japanese",
    "office lunch catering dfw",
    "corporate event catering dallas",
    "team lunch catering",
    "corporate sushi catering",
    "hibachi catering for business",
    "client meeting catering",
    "executive catering dfw",
  ],
  openGraph: {
    title: "Corporate Catering | Jinbeh Japanese Restaurant",
    description: "Bring Jinbeh to your corporate event. Premium Japanese catering for business.",
    url: "https://jinbeh.com/catering/corporate",
  },
  alternates: {
    canonical: "https://jinbeh.com/catering/corporate",
  },
};

// FAQ Schema for Corporate Catering
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum order for corporate catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accommodate orders for any size from small team lunches of 10 people to large corporate events of 200+. Contact us to discuss minimum order requirements for your specific event.",
      },
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book corporate catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 1-2 weeks in advance for standard corporate catering. For large events or peak seasons, please contact us 3-4 weeks ahead to ensure availability.",
      },
    },
    {
      "@type": "Question",
      "name": "What setup options are available for corporate events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer multiple setup options including buffet service, plated presentations, appetizer stations, and interactive hibachi setups. Our team will work with you to find the perfect solution for your venue and event style.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you accommodate dietary restrictions and allergies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in accommodating dietary restrictions including vegetarian, vegan, gluten-free, and allergy-friendly options. Please inform us of any dietary needs when booking.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh have experience catering to Fortune 500 companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! With 37 years of excellence in Japanese cuisine, Jinbeh has successfully catered to numerous corporate clients and Fortune 500 companies. We understand the importance of professional service and exceptional quality.",
      },
    },
  ],
};

const corporatePackages = [
  {
    title: "Office Lunches",
    description: "Impress your team with fresh, authentic Japanese cuisine delivered to your office.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/sushi-platter.jpg",
    price: "Starting at $18/person",
    includes: [
      "Sushi & roll assortment",
      "Fresh appetizers",
      "Served cold & ready to eat",
      "Serving utensils included",
      "Delivery available"
    ],
    ideal: "Perfect for team lunches, quick meetings, and employee appreciation.",
  },
  {
    title: "Client Meetings",
    description: "Make a lasting impression with premium catering that shows you value your clients.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/appetizers.jpg",
    price: "Starting at $22/person",
    includes: [
      "Premium sushi platters",
      "Japanese appetizer trays",
      "Professional presentation",
      "Setup assistance",
      "Customizable menus"
    ],
    ideal: "Ideal for client dinners, business lunches, and executive entertaining.",
  },
  {
    title: "Corporate Events",
    description: "Full-service catering for conferences, retreats, and special celebrations.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg",
    price: "Starting at $25/person",
    includes: [
      "Full menu customization",
      "Interactive hibachi stations",
      "Premium drinks/beverage service",
      "Professional staff setup",
      "Multiple course options"
    ],
    ideal: "Great for corporate retreats, annual celebrations, and milestone events.",
  },
  {
    title: "Team Celebrations",
    description: "Celebrate promotions, launches, and achievements with your entire team.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/chef-flames.jpg",
    price: "Starting at $20/person",
    includes: [
      "Hibachi-style service options",
      "Team-friendly platters",
      "Celebration atmosphere setup",
      "Group seating coordination",
      "Custom occasion touches"
    ],
    ideal: "Perfect for project completions, team celebrations, and company milestones.",
  },
];

const corporateBenefits = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "37 Years of Excellence",
    description: "Trusted by businesses across DFW since 1988 with a proven track record of successful corporate events.",
  },
  {
    icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-13C6.48 1 2 5.48 2 12s4.48 11 10 11 10-4.48 10-10S17.52 1 12 1zm0 20c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z",
    title: "Fortune 500 Experience",
    description: "Our team has successfully served major corporations and understands corporate dining standards.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Quality Assured",
    description: "Premium ingredients, expert preparation, and professional service every single time.",
  },
  {
    icon: "M18 9v3m0 0v3m0-3h3m0 0h3m-6-2a9 9 0 11-18 0 9 9 0 0118 0zM9 9H7.5a1.5 1.5 0 000 3H9m0-3v3m0-3h1.5a1.5 1.5 0 010 3H9m0-3v3",
    title: "Flexible Service Options",
    description: "From buffet to plated service, we customize setups to match your event style and venue.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Professional Pricing",
    description: "Transparent pricing with no hidden costs. Volume discounts available for large events.",
  },
  {
    icon: "M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "On-Time Delivery",
    description: "We understand timing is critical. Reliable, punctual delivery to your venue every time.",
  },
];

export default function CorporateCateringPage() {
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
            style={{ backgroundImage: "url('https://jinbeh.com/wp-content/uploads/2023/01/sushi-background.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Professional Dining Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Elevate Your Corporate Events with Jinbeh
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Premium Japanese catering that impresses clients, celebrates teams, and creates
              unforgettable business dining moments. Trusted by DFW corporations for 37 years.
            </p>
            <a
              href="#contact"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Request a Corporate Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Corporate Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Choose Jinbeh for Corporate Catering?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Experience, quality, and professional service that exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {corporateBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Packages */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Corporate Catering Packages
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Choose from our popular options or let us create a custom package for your event.
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {corporatePackages.map((pkg, index) => (
                <div
                  key={pkg.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-soft-gold font-medium tracking-wider uppercase mb-2">
                      {pkg.price}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
                      {pkg.title}
                    </h3>
                    <p className="text-lg text-charcoal/70 mb-6">
                      {pkg.description}
                    </p>

                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-charcoal mb-3">What&apos;s Included:</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-charcoal/80">
                            <svg className="w-4 h-4 text-accent-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-cedar-brown italic">
                      {pkg.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Trusted by Corporate Leaders
                </h2>
                <p className="text-lg text-charcoal/70">
                  37 years of proven excellence serving businesses across DFW
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-8 bg-warm-ivory rounded-xl">
                  <div className="text-4xl font-heading font-bold text-accent-red mb-2">37+</div>
                  <p className="text-charcoal font-semibold">Years of Excellence</p>
                  <p className="text-charcoal/70 text-sm">Serving DFW since 1988</p>
                </div>
                <div className="text-center p-8 bg-warm-ivory rounded-xl">
                  <div className="text-4xl font-heading font-bold text-accent-red mb-2">1000+</div>
                  <p className="text-charcoal font-semibold">5-Star Reviews</p>
                  <p className="text-charcoal/70 text-sm">Consistently excellent service</p>
                </div>
                <div className="text-center p-8 bg-warm-ivory rounded-xl">
                  <div className="text-4xl font-heading font-bold text-accent-red mb-2">500+</div>
                  <p className="text-charcoal font-semibold">Corporate Events</p>
                  <p className="text-charcoal/70 text-sm">Trusted by major corporations</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-accent-red/10 to-deep-indigo/10 rounded-2xl p-10 border border-accent-red/20">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl text-charcoal italic mb-6 text-center leading-relaxed">
                  &ldquo;Jinbeh catered our corporate retreat for 120 people. The quality of food was exceptional, the service was professional, and our clients were thoroughly impressed. We&apos;ll definitely use them again.&rdquo;
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-charcoal">Michael R.</p>
                  <p className="text-charcoal/70 text-sm">VP Corporate Events - Fortune 500 Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Corporate Catering FAQ
              </h2>
              <p className="text-lg text-charcoal/70">
                Everything you need to know about our catering services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is your minimum order for corporate catering?",
                  a: "We accommodate orders for any size from small 10-person lunches to large 200+ person events. Contact us to discuss specific requirements.",
                },
                {
                  q: "How far in advance should we book?",
                  a: "We recommend 1-2 weeks for standard orders. For large events or peak seasons (holidays), please book 3-4 weeks in advance.",
                },
                {
                  q: "Do you offer setup and service staff?",
                  a: "Yes! We offer professional setup and service options. Our team can handle everything from buffet arrangement to plated service.",
                },
                {
                  q: "Can you accommodate dietary restrictions?",
                  a: "Absolutely. We handle vegetarian, vegan, gluten-free, and allergy-friendly options. Please inform us of any dietary needs when booking.",
                },
                {
                  q: "What areas do you deliver to?",
                  a: "We serve all of DFW including Frisco, Lewisville, Plano, McKinney, Carrollton, Dallas, and surrounding areas.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-charcoal mb-3 flex items-start gap-3">
                    <span className="text-accent-red font-bold flex-shrink-0">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-charcoal/70 ml-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Inquiry Section */}
        <section id="contact" className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Request Your Corporate Catering Quote
                </h2>
                <p className="text-warm-ivory/70">
                  Let us know about your event and we&apos;ll create a custom proposal tailored to your needs.
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
                          <p className="text-sm text-warm-ivory/60">Frisco Location</p>
                          <a href="tel:2146191200" className="text-white hover:text-soft-gold font-semibold">(214) 619-1200</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-sm text-warm-ivory/60">Lewisville Location</p>
                          <a href="tel:2144882224" className="text-white hover:text-soft-gold font-semibold">(214) 488-2224</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-sm text-warm-ivory/60">Email</p>
                          <a href="mailto:catering@jinbeh.com" className="text-white hover:text-soft-gold font-semibold">catering@jinbeh.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4">What to Include in Your Inquiry</h3>
                    <ul className="space-y-3 text-warm-ivory/80">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Event date & time
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
                        Delivery venue/location
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Event type & budget
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

                <div className="text-center border-t border-white/20 pt-8">
                  <p className="text-warm-ivory/70 mb-6">
                    Ready to elevate your next corporate event?
                  </p>
                  <a
                    href="mailto:catering@jinbeh.com?subject=Corporate%20Catering%20Inquiry"
                    className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
                  >
                    Send Corporate Catering Inquiry
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Navigation Links */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
                Explore More from Jinbeh
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/catering"
                className="group bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center group-hover:bg-accent-red/20 transition-colors">
                  <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                  All Catering Options
                </h3>
                <p className="text-charcoal/70 text-sm">Explore all our catering packages and services</p>
              </Link>

              <Link
                href="/celebrations"
                className="group bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center group-hover:bg-soft-gold/30 transition-colors">
                  <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-charcoal mb-2 group-hover:text-soft-gold transition-colors">
                  Team Celebrations
                </h3>
                <p className="text-charcoal/70 text-sm">Celebrate milestones and achievements</p>
              </Link>

              <Link
                href="/frisco"
                className="group bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center group-hover:bg-deep-indigo/20 transition-colors">
                  <svg className="w-6 h-6 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-charcoal mb-2 group-hover:text-deep-indigo transition-colors">
                  Visit Frisco
                </h3>
                <p className="text-charcoal/70 text-sm">Reserve at our Frisco location</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Impress Your Team?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Let Jinbeh handle your next corporate event with professional Japanese catering that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl"
              >
                Request a Quote
              </a>
              <a
                href="tel:2146191200"
                className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 font-semibold rounded-xl"
              >
                Call Frisco: (214) 619-1200
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
