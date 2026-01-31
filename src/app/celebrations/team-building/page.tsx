import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Building Events | Corporate Dining | Jinbeh Japanese Restaurant Frisco & Lewisville TX",
  description:
    "Strengthen team bonds with hibachi entertainment at Jinbeh! Interactive corporate team building events in Frisco and Lewisville. Book your team event today.",
  keywords: [
    "team building frisco",
    "corporate team building events",
    "hibachi team building",
    "team building dinner frisco tx",
    "corporate events lewisville",
    "employee appreciation dinner",
    "hibachi corporate event",
    "team bonding activities frisco",
  ],
  openGraph: {
    title: "Team Building Events | Jinbeh Japanese Restaurant",
    description: "Create memorable team experiences with hibachi entertainment and excellent Japanese cuisine.",
    url: "https://jinbeh.com/celebrations/team-building",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/team-building",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh good for corporate team building events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Hibachi entertainment is perfect for team building. Our interactive chef shows encourage engagement, laughter, and conversation – creating natural opportunities for team bonding while enjoying excellent food.",
      },
    },
    {
      "@type": "Question",
      "name": "What size groups can you accommodate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We host teams of any size! From small departments to company-wide events. Hibachi tables seat 8-10, allowing us to organize your team into manageable groups. For large events, we recommend advance planning.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we reserve a private area for our team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We can coordinate multiple hibachi tables together or arrange seating for your specific needs. Contact us directly to discuss private arrangements for your team event.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer group discounts for corporate events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer competitive pricing for larger groups. Contact us directly to discuss your team size and get a custom quote for your corporate event.",
      },
    },
    {
      "@type": "Question",
      "name": "How can we book a team building event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call us directly at (214) 619-1200 in Frisco or (214) 488-2224 in Lewisville. Let us know your team size, date preference, and any dietary restrictions, and we'll coordinate the perfect event.",
      },
    },
  ],
};

const teamBuildingBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Breaks Down Barriers",
    description: "The interactive nature of hibachi dining naturally encourages conversation across teams and departments.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Engaging Entertainment",
    description: "Hibachi chefs perform tricks, jokes, and interactive cooking that keeps everyone entertained and engaged.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Shared Experience",
    description: "Everyone enjoys the same entertainment, creating common ground and shared memories to talk about.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Low Stress Planning",
    description: "We handle all the details – you just bring your team and let the fun happen naturally.",
  },
];

export default function TeamBuildingPage() {
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
            poster="/images/about/chef-flames.jpg"
          >
            <source
              src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Corporate Celebrations
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Team Building Events
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Strengthen team bonds through interactive hibachi entertainment and shared
              culinary experiences. Build camaraderie while enjoying exceptional Japanese cuisine.
            </p>
            <Link
              href="#reserve"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Book Your Team Event
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Team Building Benefits
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Hibachi dining creates the perfect environment for teams to bond, laugh, and connect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamBuildingBenefits.map((benefit) => (
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
          </div>
        </section>

        {/* Why Hibachi Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/food/hibachi-grill.jpg"
                    alt="Hibachi chef entertaining guests during team building event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Why Hibachi Works for Team Building
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    Hibachi dining isn't just a meal – it's a shared experience that naturally brings people together.
                    Our chefs perform right in front of your team, creating moments of genuine excitement and laughter
                    that people remember long after the event.
                  </p>
                  <p>
                    The interactive nature of the experience breaks down formal barriers. When your CEO, interns, and
                    everyone in between are watching a chef flip shrimp into their mouth or create the legendary onion
                    volcano, everyone is on equal footing – enjoying the same show and creating shared memories.
                  </p>
                  <p className="font-medium text-charcoal">
                    The result? Teams that feel more connected, trust that runs deeper, and conversations that flow
                    more naturally. It's team building that actually works, and everyone has fun in the process.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-warm-ivory rounded-xl">
                  <h3 className="font-semibold text-charcoal mb-3">💼 Event Planning Tips:</h3>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Book 2-3 weeks in advance for best dates</li>
                    <li>• Groups of 8-10 per hibachi table is ideal</li>
                    <li>• Mix departments at each table for better bonding</li>
                    <li>• Request reserved seating if possible</li>
                    <li>• Mention dietary restrictions when booking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Your Team Event Includes
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                Everything you need for a successful, memorable team building experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔥</span>
                  Hibachi Entertainment
                </h3>
                <ul className="space-y-3 text-warm-ivory/80">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Live chef performance at each table</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Knife tricks and theatrical cooking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>The legendary onion volcano</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interactive cooking right in front of your team</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🍱</span>
                  Premium Menu
                </h3>
                <ul className="space-y-3 text-warm-ivory/80">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Choice of proteins (filet, chicken, shrimp, salmon)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Fried rice prepared on the grill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Grilled vegetables and garnishes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Vegetarian and dietary options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Plan Your Team Building Event
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Call us directly to discuss your team's needs and customize the perfect event.
              We'll handle the details so you can focus on team building!
            </p>
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                  <p className="text-sm text-white/70 mb-2">Frisco Location</p>
                  <p className="text-2xl font-bold">(214) 619-1200</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                  <p className="text-sm text-white/70 mb-2">Lewisville Location</p>
                  <p className="text-2xl font-bold">(214) 488-2224</p>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              We recommend booking 2-3 weeks in advance for team events. Let us know your team size
              and date preference!
            </p>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Other Celebrations & Events
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/celebrations/corporate-events"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Corporate Events
              </Link>
              <Link
                href="/celebrations/birthday"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Birthday Parties
              </Link>
              <Link
                href="/catering/corporate"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Corporate Catering
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
