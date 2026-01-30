import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Dining at Jinbeh | Exclusive Events in Frisco & Lewisville",
  description:
    "Host your private event at Jinbeh Japanese Restaurant. Exclusive private dining rooms, hibachi entertainment, and custom menus for celebrations, corporate events, and intimate gatherings.",
  keywords: [
    "private dining frisco",
    "private dining room restaurant",
    "private party venue frisco",
    "private event space japanese",
    "restaurants with private rooms",
    "private hibachi party",
    "private event frisco texas",
    "exclusive dining experience",
    "private celebration venue",
    "corporate dining frisco",
  ],
  openGraph: {
    title: "Private Dining at Jinbeh | Exclusive Events in Frisco & Lewisville",
    description:
      "Host your private event at Jinbeh. Exclusive private dining rooms, hibachi entertainment, and custom menus for unforgettable celebrations.",
    url: "https://jinbeh.com/private-dining",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/private-dining",
  },
};

// FAQ Schema for private dining
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum spend for private dining at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum spend requirements vary based on the size of your group and which room you book. Please contact us directly for specific details. For groups of 8-10, we can often accommodate you at a private hibachi table with a reasonable per-person minimum.",
      },
    },
    {
      "@type": "Question",
      name: "How many people can Jinbeh accommodate for private events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our private dining spaces can accommodate groups from 8 to 60+ guests. We have multiple private hibachi tables and exclusive dining areas at both our Frisco and Lewisville locations. Contact us to discuss your specific group size.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a private dining experience at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To book a private event, please call our events team directly. Frisco: (214) 618-9888, Lewisville: (214) 618-9798. We'll discuss your date, group size, menu preferences, and special requirements to create the perfect experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can we customize the menu for our private event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We offer custom menu options for private dining events. Our culinary team can work with you to create a personalized menu featuring your favorite sushi, hibachi, and specialty dishes tailored to your event.",
      },
    },
    {
      "@type": "Question",
      name: "Are hibachi chefs included in private dining experiences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Private hibachi tables include our skilled chefs who perform tableside cooking with entertainment. For larger private dining areas, we can arrange additional entertainment options based on your preferences.",
      },
    },
    {
      "@type": "Question",
      name: "What types of events can we host at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We host a variety of events including birthday parties, anniversary celebrations, corporate dinners, team building events, graduation celebrations, wedding rehearsal dinners, and intimate gatherings. Each event is customized to meet your specific needs.",
      },
    },
  ],
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jinbeh Japanese Restaurant - Private Dining",
  description: "Exclusive private dining and event spaces for celebrations and corporate gatherings",
  url: "https://jinbeh.com/private-dining",
  image: "https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg",
  areaServed: ["Frisco, TX", "Lewisville, TX", "Dallas, TX"],
  priceRange: "$$",
};

const eventTypes = [
  {
    title: "Birthday Celebrations",
    description:
      "Make your special day unforgettable with hibachi entertainment, customized menus, and our signature chef performance.",
    icon: "🎂",
    features: [
      "Private hibachi table with chef entertainment",
      "Custom birthday menu",
      "Festive atmosphere and special touches",
      "Groups of 8-60+ guests",
    ],
  },
  {
    title: "Anniversary Dinners",
    description:
      "Celebrate your milestone with an intimate, elegant private dining experience featuring premium sushi and sake.",
    icon: "💕",
    features: [
      "Romantic private setting",
      "Premium sushi and sake selection",
      "Personalized service",
      "Intimate ambiance",
    ],
  },
  {
    title: "Corporate Events",
    description:
      "Impress clients and strengthen team bonds with professional private dining. Perfect for business dinners and networking.",
    icon: "💼",
    features: [
      "Executive private dining space",
      "Customized corporate menus",
      "Professional service",
      "Flexible date and time options",
    ],
  },
  {
    title: "Graduation Parties",
    description:
      "Honor academic achievements with a memorable celebration featuring entertainment, great food, and an exciting atmosphere.",
    icon: "🎓",
    features: [
      "Large group accommodation",
      "Hibachi entertainment and chef interaction",
      "Youth-friendly atmosphere",
      "Celebration menu options",
    ],
  },
  {
    title: "Wedding Events",
    description:
      "From rehearsal dinners to intimate ceremonies, create lasting memories with our exclusive private spaces and culinary expertise.",
    icon: "💍",
    features: [
      "Private exclusive setting",
      "Customized wedding menus",
      "Elegant ambiance",
      "Full event coordination",
    ],
  },
  {
    title: "Team Building",
    description:
      "Strengthen workplace relationships with interactive hibachi dining and Japanese culinary experiences designed for groups.",
    icon: "👥",
    features: [
      "Interactive hibachi experience",
      "Team-friendly activities",
      "Flexible group sizes",
      "Customized team packages",
    ],
  },
];

const locations = [
  {
    name: "Frisco",
    address: "2693 Preston Rd, Suite 1040, Frisco, TX 75034",
    phone: "(214) 618-9888",
    email: "frisco@jinbeh.com",
    highlights: [
      "Premium location near Stonebriar Centre",
      "Multiple private hibachi tables",
      "Exclusive private dining room",
      "Full bar service",
      "Ample parking",
    ],
    image: "https://jinbeh.com/wp-content/uploads/2023/01/frisco-dining.jpg",
  },
  {
    name: "Lewisville",
    address: "2440 S Stemmons Fwy #A, Lewisville, TX 75067",
    phone: "(214) 618-9798",
    email: "lewisville@jinbeh.com",
    highlights: [
      "Convenient I-35E access",
      "Multiple private hibachi experiences",
      "Intimate private spaces",
      "Full service bar",
      "Easy parking",
    ],
    image: "https://jinbeh.com/wp-content/uploads/2023/01/lewisville-dining.jpg",
  },
];

const amenities = [
  {
    title: "Private Hibachi Tables",
    description: "Intimate seating for 8-10 guests with a dedicated hibachi chef creating tableside entertainment",
    icon: "🔥",
  },
  {
    title: "Exclusive Private Rooms",
    description: "Separate dining spaces perfect for larger groups requiring privacy and distinct experiences",
    icon: "🏠",
  },
  {
    title: "Custom Menu Design",
    description: "Work with our culinary team to create personalized menus tailored to your preferences and dietary needs",
    icon: "🍱",
  },
  {
    title: "Premium Sake & Bar",
    description: "Curated sake selection, craft cocktails, and an extensive beverage menu to complement your meal",
    icon: "🍶",
  },
  {
    title: "Professional Service",
    description: "Dedicated event staff ensuring seamless coordination and exceptional hospitality throughout your event",
    icon: "👔",
  },
  {
    title: "Full Event Coordination",
    description: "From booking to execution, our team handles every detail to make your event memorable",
    icon: "📋",
  },
];

const bookingSteps = [
  {
    number: "1",
    title: "Contact Our Events Team",
    description:
      "Call us to discuss your event details: date, group size, event type, and any special requests or dietary requirements.",
  },
  {
    number: "2",
    title: "Choose Your Experience",
    description:
      "Select from private hibachi tables with chef entertainment or our exclusive private dining rooms. We'll recommend the best option for your group.",
  },
  {
    number: "3",
    title: "Customize Your Menu",
    description:
      "Work with our culinary team to design a personalized menu featuring your favorite sushi, hibachi, and specialty dishes.",
  },
  {
    number: "4",
    title: "Confirm Details & Relax",
    description:
      "We'll finalize all details including seating, timing, and special touches. Our team handles everything so you can enjoy your event.",
  },
];

export default function PrivateDiningPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg"
          >
            <source
              src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Exclusive Experiences
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Private Dining for Your Special Occasion
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto">
              Host your celebration in elegant private spaces with hibachi entertainment,
              custom menus, and impeccable service.
            </p>
          </div>
        </section>

        {/* Event Types Grid */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Perfect for Every Occasion
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                From intimate celebrations to grand corporate events, we create unforgettable experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {eventTypes.map((event) => (
                <div
                  key={event.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{event.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                    {event.title}
                  </h3>
                  <p className="text-charcoal/70 mb-6">{event.description}</p>
                  <ul className="space-y-2">
                    {event.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-charcoal/80">
                        <svg
                          className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5"
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
              ))}
            </div>
          </div>
        </section>

        {/* Amenities & Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Premium Amenities & Features
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Every detail is thoughtfully curated to create an exceptional private dining experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {amenities.map((amenity) => (
                <div key={amenity.title} className="flex gap-6">
                  <div className="text-4xl flex-shrink-0">{amenity.icon}</div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-charcoal/70">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Private Dining at Both Locations
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Each location features exclusive private dining spaces designed for your comfort and enjoyment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {locations.map((location) => (
                <div key={location.name} className="bg-charcoal border border-white/10 rounded-2xl overflow-hidden hover:border-soft-gold/50 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={location.image}
                      alt={`${location.name} private dining`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                    <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-heading font-bold text-white">
                      Jinbeh {location.name}
                    </h3>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <p className="text-white/80 text-sm uppercase tracking-wide mb-2">Address</p>
                      <p className="text-white font-semibold">{location.address}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <p className="text-white/80 text-sm uppercase tracking-wide mb-2">Phone</p>
                        <a href={`tel:${location.phone.replace(/\D/g, "")}`} className="text-soft-gold hover:text-soft-gold/80 font-semibold">
                          {location.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm uppercase tracking-wide mb-2">Email</p>
                        <a href={`mailto:${location.email}`} className="text-soft-gold hover:text-soft-gold/80 font-semibold text-sm">
                          {location.email}
                        </a>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-white/80 text-sm uppercase tracking-wide mb-3">Highlights</p>
                      <ul className="space-y-2">
                        {location.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-white/90">
                            <svg
                              className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={location.name === "Frisco" ? "/frisco" : "/lewisville"}
                      className="inline-flex items-center gap-2 text-soft-gold hover:text-soft-gold/80 font-semibold transition-colors"
                    >
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Simple Booking Process
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Planning your private event is easy. Follow these steps to book your exclusive experience.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {bookingSteps.map((step) => (
                  <div key={step.number} className="relative">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-red text-white font-heading font-bold text-xl">
                          {step.number}
                        </div>
                      </div>
                      <div className="pt-2">
                        <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                          {step.title}
                        </h3>
                        <p className="text-charcoal/70">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Jinbeh */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://jinbeh.com/wp-content/uploads/2023/01/chef-flames.jpg"
                    alt="Hibachi chef performing at private event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full rounded-2xl bg-soft-gold/10" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Why Choose Jinbeh for Private Dining?
                </h2>
                <p className="text-lg text-charcoal/70 mb-8">
                  For nearly four decades, Jinbeh has been creating memorable moments and celebrations. Our commitment to exceptional cuisine, skilled hibachi chefs, and personalized service makes us the premier choice for private events in North Texas.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Decades of Excellence</h3>
                      <p className="text-charcoal/70 text-sm">
                        Family-owned since 1988, with proven expertise in hosting memorable celebrations and events.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-deep-indigo/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Customization</h3>
                      <p className="text-charcoal/70 text-sm">
                        Every event is unique. We work closely with you to design custom experiences tailored to your vision.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-soft-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Entertainment & Chef Performance</h3>
                      <p className="text-charcoal/70 text-sm">
                        Our skilled hibachi chefs bring excitement and artistry to every private event with live cooking performances.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-deep-indigo/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Premium Quality</h3>
                      <p className="text-charcoal/70 text-sm">
                        Fresh ingredients, expertly prepared dishes, and premium sake selection for an unforgettable culinary experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Plan Your Private Event?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Let our events team help you create an unforgettable celebration. Contact us today to discuss your vision and book your exclusive dining experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <div className="flex flex-col items-center gap-3 sm:gap-6 sm:flex-row">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wide mb-2">Frisco</p>
                  <a
                    href="tel:2146189888"
                    className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg block"
                  >
                    (214) 618-9888
                  </a>
                </div>
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wide mb-2">Lewisville</p>
                  <a
                    href="tel:2146189798"
                    className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl block"
                  >
                    (214) 618-9798
                  </a>
                </div>
              </div>
            </div>

            <p className="text-white/70 text-sm mb-8">
              Email inquiries: <a href="mailto:frisco@jinbeh.com" className="text-soft-gold hover:text-soft-gold/80">frisco@jinbeh.com</a> | <a href="mailto:lewisville@jinbeh.com" className="text-soft-gold hover:text-soft-gold/80">lewisville@jinbeh.com</a>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
              <Link
                href="/celebrations"
                className="text-white/90 hover:text-soft-gold transition-colors underline underline-offset-4"
              >
                Explore Celebrations
              </Link>
              <Link
                href="/catering"
                className="text-white/90 hover:text-soft-gold transition-colors underline underline-offset-4"
              >
                Catering Services
              </Link>
              <Link
                href="/frisco"
                className="text-white/90 hover:text-soft-gold transition-colors underline underline-offset-4"
              >
                Visit Our Locations
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-charcoal/70">
                Have questions about private dining? We've got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What is the minimum spend for private dining at Jinbeh?",
                  a: "Minimum spend requirements vary based on the size of your group and which private space you book. We offer flexible options to accommodate different budgets. Please contact us directly to discuss pricing for your specific event.",
                },
                {
                  q: "How do I book a private dining experience?",
                  a: "Simply call our events team at Frisco: (214) 618-9888 or Lewisville: (214) 618-9798. We'll discuss your date, group size, preferences, and special requirements to create the perfect experience.",
                },
                {
                  q: "Can we customize the menu for our private event?",
                  a: "Absolutely! We work with our culinary team to design personalized menus featuring your favorite sushi, hibachi dishes, and specialty items. Dietary restrictions and preferences are always accommodated.",
                },
                {
                  q: "Are hibachi chefs included with private dining?",
                  a: "Yes! Private hibachi tables include our skilled chefs who cook tableside with entertainment. For larger private dining areas, we can discuss additional entertainment and service options.",
                },
                {
                  q: "What's the maximum group size you can accommodate?",
                  a: "We can host groups from 8 to 60+ guests depending on your preferences. Contact us to discuss your specific group size and we'll recommend the best private dining option.",
                },
                {
                  q: "How far in advance should we book?",
                  a: "We recommend booking at least 2-3 weeks in advance for the best availability. For large groups or special requirements, booking further ahead ensures we can perfectly customize your experience.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-3">
                    {item.q}
                  </h3>
                  <p className="text-charcoal/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
