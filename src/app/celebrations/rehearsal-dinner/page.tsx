import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rehearsal Dinner | Jinbeh Japanese Restaurant | Wedding Celebration Frisco & Lewisville TX",
  description:
    "Host your rehearsal dinner at Jinbeh! Elegant hibachi entertainment, intimate seating, and exceptional Japanese cuisine for your pre-wedding celebration. Book your rehearsal dinner in Frisco or Lewisville.",
  keywords: [
    "rehearsal dinner frisco",
    "wedding rehearsal dinner texas",
    "hibachi rehearsal dinner",
    "rehearsal dinner lewisville",
    "intimate wedding dinner frisco",
    "pre-wedding celebration restaurant",
    "rehearsal dinner venues frisco tx",
    "japanese wedding dinner frisco",
  ],
  openGraph: {
    title: "Rehearsal Dinner | Jinbeh Japanese Restaurant",
    description: "Make your rehearsal dinner unforgettable with hibachi entertainment and exceptional Japanese cuisine.",
    url: "https://jinbeh.com/celebrations/rehearsal-dinner",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/rehearsal-dinner",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh good for a rehearsal dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jinbeh is perfect for rehearsal dinners. We offer both hibachi entertainment for a fun, interactive experience and quieter sushi bar seating for more intimate conversations. Our chefs can make the celebration special for your wedding party.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we reserve a private area for our rehearsal dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! For larger rehearsal dinner groups, we can arrange private hibachi table groupings or reserved seating areas. Contact us directly to discuss your group size and preferences.",
      },
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book a rehearsal dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 2-3 weeks in advance for rehearsal dinners, especially for groups of 10 or more. This allows us to coordinate seating and ensure the best experience for your wedding party.",
      },
    },
    {
      "@type": "Question",
      "name": "What menu options are available for rehearsal dinners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer our full menu with all hibachi, sushi, and appetizer options. Many groups enjoy the hibachi experience for entertainment and engagement. We can accommodate dietary restrictions and preferences with advance notice.",
      },
    },
    {
      "@type": "Question",
      "name": "Can you accommodate a large wedding party?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We regularly host rehearsal dinners for wedding parties. For groups of 12+, we recommend calling ahead to arrange seating. Our hibachi tables seat 8-10, so we can coordinate multiple tables for larger groups.",
      },
    },
  ],
};

const rehearsalFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Interactive Hibachi Entertainment",
    description: "Our chefs perform an exciting show that brings your wedding party together with laughter and conversation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Group-Friendly Seating",
    description: "Hibachi tables seat 8-10 guests, perfect for keeping your entire wedding party together.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Flexible Menu Options",
    description: "Choose hibachi, sushi, or a combination. We accommodate all dietary restrictions and preferences.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Stress-Free Planning",
    description: "Let us handle the details. You focus on celebrating – we'll create the experience.",
  },
];

export default function RehearsalDinnerPage() {
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://jinbeh.com/wp-content/uploads/2023/01/chef-flames.jpg"
          >
            <source
              src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Pre-Wedding Celebrations
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Rehearsal Dinners
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Gather your wedding party for an unforgettable evening of hibachi entertainment,
              exceptional food, and meaningful moments before the big day.
            </p>
            <Link
              href="#reserve"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Book Your Rehearsal Dinner
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Choose Jinbeh for Your Rehearsal Dinner?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Create lasting memories with your wedding party in an engaging, celebratory atmosphere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {rehearsalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center text-accent-red">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg"
                    alt="Hibachi chef preparing food at celebration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  The Perfect Pre-Wedding Celebration
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    Your rehearsal dinner sets the tone for your wedding weekend. At Jinbeh, we create
                    an atmosphere that brings your wedding party together in laughter and celebration.
                  </p>
                  <p>
                    Whether you choose our high-energy hibachi experience or prefer the intimate charm
                    of our sushi bar, every meal is prepared with exceptional care. Your guests will
                    enjoy premium Japanese cuisine, expert service, and the warm hospitality that makes
                    Jinbeh special.
                  </p>
                  <p className="font-medium text-charcoal">
                    Let us take care of the dinner details so you can focus on enjoying
                    this important moment with the people who matter most.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-warm-ivory rounded-xl">
                  <h3 className="font-semibold text-charcoal mb-3">💡 Rehearsal Dinner Tips:</h3>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Book 2-3 weeks in advance for best availability</li>
                    <li>• Mention it's a rehearsal dinner when reserving</li>
                    <li>• Hibachi tables seat 8-10 – perfect for smaller parties</li>
                    <li>• Let us know about dietary restrictions in advance</li>
                    <li>• Ask about group discounts for larger parties</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seating Options */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Choose Your Experience
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                Pick the setting that matches your celebration style.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Hibachi Tables</h3>
                <p className="text-warm-ivory/70 text-sm mb-6">
                  Interactive, entertaining, and unforgettable. Perfect for bringing
                  your wedding party together with laughter and excitement.
                </p>
                <ul className="text-left space-y-2 text-sm text-warm-ivory/70">
                  <li>• Seats 8-10 guests per table</li>
                  <li>• Live chef entertainment</li>
                  <li>• Premium proteins and sides</li>
                  <li>• Tableside fried rice and vegetables</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🍣</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Sushi Bar</h3>
                <p className="text-warm-ivory/70 text-sm mb-6">
                  Intimate and sophisticated. Ideal for smaller groups who prefer
                  conversation and exquisite craft sushi.
                </p>
                <ul className="text-left space-y-2 text-sm text-warm-ivory/70">
                  <li>• Cozy counter seating</li>
                  <li>• Fresh sushi made to order</li>
                  <li>• Personalized chef interaction</li>
                  <li>• Specialty cocktails and sake</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Book Your Rehearsal Dinner
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Contact us to reserve your rehearsal dinner. Tell us about your group size
              and preferences, and we'll create a memorable celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/frisco#reserve"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve at Frisco
              </Link>
              <Link
                href="/lewisville#reserve"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Reserve at Lewisville
              </Link>
            </div>
            <p className="text-white/70 text-sm">
              For groups of 10+, call us directly:<br />
              Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
            </p>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Planning a Wedding?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/catering/wedding"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Wedding Catering
              </Link>
              <Link
                href="/celebrations/anniversary"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Anniversary Dinners
              </Link>
              <Link
                href="/private-dining"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Private Dining
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
