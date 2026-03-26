
import type { Metadata } from "next";
import { HeroSection, RevealSection } from "@/components/MagicUI";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { EventInquiryForm } from "@/components/ContactForm";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Private Events | Jinbeh Japanese Restaurant Frisco & Lewisville",
  description:
    "Host your next event at Jinbeh! Private dining in Frisco (40 guests) & Lewisville (30 guests) with hibachi entertainment, custom menus, and dedicated event coordination.",
  keywords: [
    "event venue frisco tx",
    "private dining room frisco",
    "corporate event venue dfw",
    "rehearsal dinner restaurant",
    "baby shower venue frisco",
    "team building event frisco",
    "hibachi catering dfw",
    "private party restaurant frisco",
    "wedding rehearsal dinner",
    "event catering lewisville",
  ],
  openGraph: {
    title: "Event Hosting & Private Dining | Jinbeh Japanese Restaurant",
    description: "Make your event unforgettable with private dining, hibachi entertainment, and premium catering at Jinbeh.",
    url: "https://jinbeh.com/events",
    images: [
      {
        url: "https://jinbeh.com/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
        width: 1200,
        height: 630,
        alt: "Private event dining at Jinbeh Japanese Restaurant",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/events",
  },
};

// Event Schema for Rich Snippets
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jinbeh Japanese Restaurant - Event Venue",
  "url": "https://jinbeh.com/events",
  "description": "Premium event hosting and private dining venue in Frisco and Lewisville, TX",
  "image": "https://jinbeh.com/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
  "priceRange": "$$$",
  "areaServed": "DFW Metroplex",
  "availableLanguage": "en",
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What events can Jinbeh host?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh hosts birthday parties, corporate events, rehearsal dinners, baby showers, team building events, holiday parties, anniversaries, graduations, and more. We have private dining rooms at both locations to make your event special.",
      },
    },
    {
      "@type": "Question",
      name: "What is the capacity of Jinbeh's private dining rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Frisco location has a private dining room that seats up to 40 guests. Our Lewisville location has a private dining room that seats up to 30 guests. Both can be customized for your event.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh offer catering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jinbeh offers both on-site private dining and off-site catering services. Our catering menu features hibachi specialties, fresh sushi, and traditional Japanese dishes. Visit our catering page for menu options and pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Can we have hibachi entertainment at our private event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Our hibachi chefs can prepare and entertain at your private event. The interactive hibachi experience is perfect for creating memorable moments with your guests.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a private event at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us directly to discuss your event details, date, and group size. We'll work with you to create a customized package that fits your needs and budget. Call or fill out our event inquiry form.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in event packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Packages typically include private dining space, custom menu options, professional service staff, and optional hibachi entertainment. Add-ons like premium sake selections, decorations, and catering are available.",
      },
    },
  ],
};

// Event Types
const eventTypes = [
  {
    title: "Birthday Parties",
    description: "Make it unforgettable with hibachi entertainment and the legendary onion volcano!",
    image: "/images/food/OnionVolcanoDemo.jpg",
    href: "/celebrations/birthday",
    icon: "🎂",
  },
  {
    title: "Corporate Events",
    description: "Team building, client dinners, and networking events in an elegant private setting.",
    image: "/images/interior/FriscoLocation_Bar_Front.jpg",
    href: "/celebrations/corporate-events",
    icon: "💼",
  },
  {
    title: "Rehearsal Dinners",
    description: "Celebrate your upcoming wedding with intimate dining and premium sake.",
    image: "/images/photoshoot/sushi-tower.jpg",
    href: "/celebrations/rehearsal-dinner",
    icon: "💍",
  },
  {
    title: "Baby Showers",
    description: "Create joyful memories with fresh sushi and a welcoming atmosphere.",
    image: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg",
    href: "/celebrations/baby-shower",
    icon: "👶",
  },
  {
    title: "Team Building",
    description: "Interactive hibachi experiences that bring teams together and build camaraderie.",
    image: "/images/catalog/14-C060324-6596.jpg",
    href: "/celebrations/team-building",
    icon: "🤝",
  },
  {
    title: "Holiday Parties",
    description: "Year-round celebrations from New Year to Christmas with festive menus.",
    image: "/images/food/SamaraiRollCloseup.jpg",
    href: "/celebrations/holiday-parties",
    icon: "🎉",
  },
];

// Event Packages
const eventPackages = [
  {
    name: "Experience Package",
    price: "From $35/person",
    features: [
      "Private dining room rental",
      "Hibachi chef cooking demonstration",
      "Choice of protein (steak, chicken, shrimp, or vegetarian)",
      "Fresh vegetables and fried rice",
      "Soft drink or tea",
      "Professional service staff",
    ],
  },
  {
    name: "Premium Package",
    price: "From $50/person",
    features: [
      "Everything in Experience Package",
      "Premium sushi appetizer course",
      "Premium sake or wine pairing",
      "Dessert selection",
      "Personalized menu customization",
      "Table decorations (simple)",
    ],
  },
  {
    name: "Signature Package",
    price: "From $75/person",
    features: [
      "Everything in Premium Package",
      "Multi-course sushi experience",
      "Premium sake or wine pairing upgrade",
      "Specialty cocktails",
      "Custom dessert bar",
      "Enhanced decorations and setup",
      "Private chef consultation",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Wedding Planner",
    text: "Jinbeh was the perfect venue for my client's rehearsal dinner. The hibachi entertainment was the highlight of the evening, and the staff made everything seamless. Our guests talked about it for weeks!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Corporate Manager",
    text: "We hosted our annual team building event here, and it was fantastic. The hibachi experience got everyone engaged and laughing together. Best team outing we've had in years.",
    rating: 5,
  },
  {
    name: "Jennifer Martinez",
    role: "Event Coordinator",
    text: "The private dining room is beautiful, the food is incredible, and the staff goes above and beyond. They accommodated all our special requests for our client's baby shower. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Anderson",
    role: "Business Owner",
    text: "Hosted a corporate dinner for 30 guests and everyone was impressed. The chef put on an amazing show, the sushi was fresh, and the service was top-notch. Will definitely book again.",
    rating: 5,
  },
];

// FAQ Items
const faqItems = [
  {
    question: "What is the minimum group size for private events?",
    answer: "We welcome groups of all sizes. While there's no strict minimum, we recommend a group of at least 8-10 people to make the most of our private dining space and hibachi experience.",
  },
  {
    question: "Do you offer off-site catering?",
    answer: "Yes! We offer comprehensive catering services for corporate events, parties, and celebrations at your location. Visit our catering page to explore menus and pricing.",
  },
  {
    question: "Can we customize the menu?",
    answer: "Absolutely. We work with each client to create a customized menu that fits your preferences, dietary needs, and budget. Contact us to discuss your specific requirements.",
  },
  {
    question: "What's the best time to book an event?",
    answer: "We recommend booking 2-4 weeks in advance to ensure your preferred date is available. For larger events or specific dates (holidays, weekends), booking earlier is advisable.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes! We can accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please let us know your requirements when booking so we can prepare accordingly.",
  },
  {
    question: "Can guests bring outside food or beverages?",
    answer: "Outside food and beverages are generally not permitted. However, we're happy to work with you on special requests, including bringing birthday cakes or bringing your own sake. Please call ahead to discuss.",
  },
  {
    question: "Do you provide decorations?",
    answer: "Basic table setups are included in our private dining packages. For more elaborate decorations, we can provide recommendations for local vendors or discuss custom setup options.",
  },
  {
    question: "What are your private dining room hours?",
    answer: "Private dining rooms are available during our regular restaurant hours. For event-specific scheduling, including after-hours arrangements, please contact your location directly.",
  },
];

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
      "name": "Events & Private Dining",
      "item": "https://jinbeh.com/events"
    }
  ]
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Private Events" }]} />
      </div>
      <main id="main-content" className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
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
            src="/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg"
            alt="Private event dining at Jinbeh Japanese Restaurant - celebrations and gatherings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Premium Event Venue
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Make Your Event Unforgettable
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto hero-subheadline mb-8">
              From intimate gatherings to grand celebrations, our private dining rooms and hibachi entertainment create memories that last a lifetime.
            </p>
            <Link
              href="#inquiry"
              className="inline-block bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Start Planning Your Event
            </Link>
          </div>
        </section>

        {/* Event Types Showcase */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Events We Host
              </h2>
              <p className="text-lg text-charcoal/70">
                Whatever the occasion — corporate dinners, rehearsal celebrations, baby showers, or team outings — Jinbeh is the perfect venue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {eventTypes.map((event, index) => (
                <Link
                  key={index}
                  href={event.href}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 bg-charcoal overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="mb-3 text-4xl">{event.icon}</div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Private Dining Rooms */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-3">
                Private Dining Spaces
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Elegant Venues for Every Celebration
              </h2>
              <p className="text-lg text-charcoal/70">
                Both locations feature dedicated private dining rooms designed for unforgettable events — from hibachi parties to wedding celebrations. Need off-site catering? We handle that too.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Frisco Location */}
              <div className="p-8 rounded-2xl border-2 border-soft-gold/30 bg-gradient-to-br from-warm-ivory to-white">
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                    Frisco Location
                  </h3>
                  <p className="text-soft-gold font-semibold">Near Stonebriar Centre</p>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Capacity: Up to 40 guests</p>
                      <p className="text-charcoal/70 text-sm">Perfect for larger celebrations and corporate events</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Hibachi Setup Available</p>
                      <p className="text-charcoal/70 text-sm">Chef cooking station with interactive entertainment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Full Bar Access</p>
                      <p className="text-charcoal/70 text-sm">Premium sake selection, cocktails, and beverages</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Professional Service</p>
                      <p className="text-charcoal/70 text-sm">Dedicated staff to ensure a seamless experience</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+1-214-619-1200"
                  className="block text-center w-full bg-accent-red hover:bg-accent-red/90 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Contact Frisco Location
                </a>
              </div>

              {/* Lewisville Location */}
              <div className="p-8 rounded-2xl border-2 border-deep-indigo/30 bg-gradient-to-br from-warm-ivory to-white">
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                    Lewisville Location
                  </h3>
                  <p className="text-deep-indigo font-semibold">Off I-35E near Vista Ridge Mall</p>
                </div>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-indigo/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Capacity: Up to 30 guests</p>
                      <p className="text-charcoal/70 text-sm">Intimate setting perfect for rehearsal dinners and showers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-indigo/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Hibachi Setup Available</p>
                      <p className="text-charcoal/70 text-sm">Chef cooking station with interactive entertainment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-indigo/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Full Bar Access</p>
                      <p className="text-charcoal/70 text-sm">Premium sake selection, cocktails, and beverages</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-indigo/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Professional Service</p>
                      <p className="text-charcoal/70 text-sm">Dedicated staff to ensure a seamless experience</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+1-214-488-2224"
                  className="block text-center w-full bg-deep-indigo hover:bg-deep-indigo/90 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Contact Lewisville Location
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Event Packages */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-3">
                Flexible Options
              </p>
              <RevealSection>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Event Packages & Pricing
                </h2>
              </RevealSection>
              <p className="text-lg text-charcoal/70">
                Customizable packages to fit your event, preferences, and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {eventPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 transition-all duration-300 ${index === 1
                    ? "bg-charcoal text-white shadow-2xl lg:scale-105"
                    : "bg-white text-charcoal shadow-lg hover:shadow-xl"
                    }`}
                >
                  <h3 className="text-2xl font-heading font-bold mb-3">{pkg.name}</h3>
                  <p className={`text-lg font-semibold mb-6 ${index === 1 ? "text-soft-gold" : "text-accent-red"}`}>
                    {pkg.price}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${index === 1 ? "text-soft-gold" : "text-accent-red"
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm ${index === 1 ? "text-white/90" : "text-charcoal/80"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-colors ${index === 1
                      ? "bg-accent-red hover:bg-accent-red/90 text-white"
                      : "bg-accent-red/10 text-accent-red hover:bg-accent-red/20"
                      }`}
                    aria-label={`Learn more about ${pkg.name}`}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-charcoal/70 mb-4">
                Need a custom package? We can create a personalized menu and experience for your unique event.
              </p>
              <Link
                href="#inquiry"
                className="inline-block text-accent-red font-semibold hover:text-accent-red/80 transition-colors"
              >
                Request a Custom Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* Catering Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Content */}
              <div>
                <p className="text-soft-gold font-medium tracking-wider uppercase mb-3">
                  Off-Site Events
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Catering & Off-Site Services
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Want Jinbeh's delicious food and service at your location? We offer comprehensive catering for corporate events, weddings, celebrations, and special occasions throughout the DFW metroplex.
                </p>

                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-soft-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Customizable Menus</h3>
                      <p className="text-charcoal/70 text-sm">Hibachi specialties, fresh sushi, appetizers, and more</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-soft-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Professional Service</h3>
                      <p className="text-charcoal/70 text-sm">Experienced catering staff and setup</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-soft-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Flexible Delivery</h3>
                      <p className="text-charcoal/70 text-sm">Event-ready food preparation and delivery</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-soft-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Dietary Accommodations</h3>
                      <p className="text-charcoal/70 text-sm">Vegetarian, vegan, gluten-free options available</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/catering"
                  className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  Explore Catering Options
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/photoshoot/sushi-tower.jpg"
                  alt="Premium sushi catering for events"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event Gallery */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Events & Celebrations
              </h2>
              <p className="text-warm-ivory/70">
                Explore the celebrations we've hosted and the memories we've created.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                { src: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg", alt: "Birthday celebration at Jinbeh" },
                { src: "/images/food/OnionVolcanoDemo.jpg", alt: "Hibachi onion volcano entertainment" },
                { src: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg", alt: "Hibachi cooked meal" },
                { src: "/images/photoshoot/sushi-tower.jpg", alt: "Fresh sushi tower" },
                { src: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg", alt: "Sushi bar selection" },
                { src: "/images/interior/FriscoLocation_Bar_Front.jpg", alt: "Frisco restaurant interior" },
                { src: "/images/photoshoot/hibachi-plate-shrimp.jpg", alt: "Hibachi shrimp and vegetables" },
                { src: "/images/food/SamaraiRollCloseup.jpg", alt: "Samurai roll specialty sushi" },
              ].map((item, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-3">
                What Clients Say
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Memorable Events at Jinbeh
              </h2>
              <p className="text-lg text-charcoal/70">
                Event planners and hosts trust us to create unforgettable experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-soft-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-charcoal/80 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-charcoal/80 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Inquiry Form Section */}
        <section id="inquiry" className="py-20 bg-gradient-to-br from-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Plan Your Event
              </h2>
              <p className="text-warm-ivory/80">
                Ready to host your celebration at Jinbeh? Get in touch with our events team to discuss your vision.
              </p>
            </div>

            <div className="bg-charcoal rounded-2xl p-8 border border-white/20 shadow-xl">
            </div>
          </div>
        </section>

        {/* Event Planning Resources — Blog Cross-Links */}
        < section className="py-16 bg-warm-ivory" >
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-3">
                Event Planning Resources
              </h2>
              <p className="text-charcoal/70">
                Tips and guides to help plan your perfect event.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link href="/blog/large-group-dining" className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Group Dining</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">Large Group Dining Guide</h3>
                <p className="text-sm text-charcoal/70 mt-2">Expert tips for organizing dinners and parties for big groups.</p>
              </Link>
              <Link href="/blog/restaurants-private-rooms" className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Private Dining</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">Private Dining Rooms in DFW</h3>
                <p className="text-sm text-charcoal/70 mt-2">Find the ideal private dining venue for your next event.</p>
              </Link>
              <Link href="/blog/hibachi-catering-dfw" className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Catering</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">Hibachi Catering in DFW</h3>
                <p className="text-sm text-charcoal/70 mt-2">Bring the hibachi show to your corporate event or celebration.</p>
              </Link>
            </div>
          </div>
        </section >

        {/* FAQ Section */}
        < section className="py-20 bg-white" >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-3">
                Questions?
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-charcoal/70">
                Find answers to common questions about hosting your event at Jinbeh.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="group rounded-xl border-2 border-soft-gold/30 p-6 hover:border-soft-gold/60 transition-colors"
                >
                  <summary className="flex items-center gap-4 cursor-pointer font-semibold text-charcoal">
                    <span className="flex-grow">{item.question}</span>
                    <svg
                      className="w-6 h-6 text-soft-gold group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="text-charcoal/70 mt-4 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-charcoal/70 mb-4">
                Didn't find what you're looking for?
              </p>
              <Link
                href="/contact"
                className="inline-block text-accent-red font-semibold hover:text-accent-red/80 transition-colors"
              >
                Contact Our Events Team →
              </Link>
            </div>
          </div>
        </section >

        {/* Final CTA */}
        < section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white" >
          <div className="container mx-auto px-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Let's Make Your Event Extraordinary
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Whether it's an intimate gathering or a grand celebration, Jinbeh has everything you need to create unforgettable memories with the people who matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-214-619-1200"
                className="inline-block bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Call Frisco (214) 619-1200
              </a>
              <a
                href="tel:+1-214-488-2224"
                className="inline-block bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl transition-all"
              >
                Call Lewisville (214) 488-2224
              </a>
            </div>
          </div>
        </section >
      </main >
      <Footer />
    </>
  );
}
