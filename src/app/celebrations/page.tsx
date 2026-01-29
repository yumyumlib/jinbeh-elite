import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Celebrations | Jinbeh Japanese Restaurant | Birthday, Anniversary & Events",
  description:
    "Celebrate life's special moments at Jinbeh! Birthday parties, anniversary dinners, graduations, and group events with hibachi entertainment and fresh sushi in Frisco & Lewisville.",
  keywords: [
    "birthday dinner frisco",
    "anniversary restaurant frisco",
    "celebration restaurant near me",
    "hibachi birthday party",
    "group dining frisco",
    "private dining japanese",
    "special occasion restaurant dfw",
    "birthday restaurants frisco tx",
  ],
  openGraph: {
    title: "Celebrations | Jinbeh Japanese Restaurant",
    description: "Make your special moments unforgettable with hibachi entertainment and fresh sushi.",
    url: "https://jinbeh.com/celebrations",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh good for birthday celebrations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jinbeh is perfect for birthday celebrations. Our hibachi chefs create entertainment at your table, and we can accommodate groups of all sizes. The interactive dining experience makes birthdays memorable for all ages.",
      },
    },
    {
      "@type": "Question",
      "name": "Can Jinbeh accommodate large groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Both our Frisco and Lewisville locations can accommodate large groups and private parties. We recommend making reservations in advance for groups of 8 or more to ensure we can seat you together at a hibachi table.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh do anything special for birthdays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Let us know you're celebrating a birthday when you make your reservation or when you arrive. Our hibachi chefs love entertaining birthday guests with special performances.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I book a private event at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Contact us directly to discuss private event options, including corporate gatherings, graduation parties, and milestone celebrations. We can create custom menus and arrangements for your group.",
      },
    },
  ],
};

const celebrationTypes = [
  {
    title: "Birthday Parties",
    description: "Make it a birthday to remember with hibachi entertainment and the legendary onion volcano!",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/family-dining.jpg",
    href: "/celebrations/birthday",
    features: ["Hibachi chef entertainment", "Group seating available", "Special birthday touches", "All ages welcome"],
  },
  {
    title: "Anniversary Dinners",
    description: "Celebrate your love with an intimate dining experience featuring fresh sushi and elegant service.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/sushi-platter.jpg",
    href: "/celebrations/anniversary",
    features: ["Romantic atmosphere", "Premium sushi & sake", "Bar seating for couples", "Special occasion touches"],
  },
  {
    title: "Group & Corporate Events",
    description: "Team dinners, client entertainment, or company celebrations – we've got you covered.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg",
    href: "/celebrations/groups",
    features: ["Large group seating", "Custom menus available", "Private dining options", "Corporate catering"],
  },
];

export default function CelebrationsPage() {
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
              It&apos;s a Celebration!
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Celebrate With Us
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto">
              Birthdays, anniversaries, graduations, promotions – every milestone
              deserves dinner and a show at Jinbeh.
            </p>
          </div>
        </section>

        {/* Celebration Types */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                What Are You Celebrating?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Every occasion is special at Jinbeh. Choose your celebration type to learn more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {celebrationTypes.map((type) => (
                <Link
                  key={type.title}
                  href={type.href}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 right-6 font-heading text-2xl font-bold text-white">
                      {type.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-charcoal/70 mb-6">{type.description}</p>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-charcoal/80">
                          <svg className="w-4 h-4 text-accent-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-accent-red font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Celebrate at Jinbeh */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Why Celebrate at Jinbeh?
                </h2>
                <p className="text-lg text-charcoal/70 mb-8">
                  It&apos;s more than dinner – it&apos;s dinner and a show! Our hibachi chefs
                  bring entertainment and excitement to every celebration, making
                  memories that last a lifetime.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Live Entertainment</h3>
                      <p className="text-charcoal/70 text-sm">
                        Hibachi chefs perform tableside with flames, tricks, and the famous onion volcano.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-deep-indigo/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Group-Friendly</h3>
                      <p className="text-charcoal/70 text-sm">
                        Communal hibachi tables seat 8-10 people, perfect for celebrating together.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-soft-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Special Touches</h3>
                      <p className="text-charcoal/70 text-sm">
                        Let us know you&apos;re celebrating and we&apos;ll make it extra special.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://jinbeh.com/wp-content/uploads/2023/01/chef-flames.jpg"
                    alt="Hibachi chef creating flames at Jinbeh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full rounded-2xl bg-accent-red/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Reserve CTA */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Celebrate?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Reserve your table and let us help make your special occasion unforgettable.
              For large groups, call us directly for the best seating arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <p className="mt-8 text-white/70 text-sm">
              For groups of 10+ or private events, call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
