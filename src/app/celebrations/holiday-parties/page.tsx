import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holiday Parties & Christmas Dinners | Jinbeh Japanese Restaurant | Frisco & Lewisville TX",
  description:
    "Host your holiday party at Jinbeh! Christmas dinners, New Year celebrations, and festive gatherings with hibachi entertainment. Book your holiday celebration in Frisco or Lewisville.",
  keywords: [
    "holiday party frisco",
    "christmas dinner frisco tx",
    "new year's eve dinner",
    "holiday celebration restaurant",
    "hibachi christmas party",
    "festive dining frisco",
    "holiday gathering venues",
    "christmas party lewisville",
  ],
  openGraph: {
    title: "Holiday Parties | Jinbeh Japanese Restaurant",
    description: "Celebrate the holidays with hibachi entertainment and festive Japanese cuisine at Jinbeh.",
    url: "https://jinbeh.com/celebrations/holiday-parties",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/holiday-parties",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Jinbeh host holiday parties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh is a fantastic venue for holiday celebrations. We offer hibachi entertainment, festive atmosphere, and exceptional Japanese cuisine perfect for Christmas dinners, New Year's celebrations, and holiday gatherings.",
      },
    },
    {
      "@type": "Question",
      "name": "When should I book my holiday party?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking 4-6 weeks in advance for holiday parties, especially during peak December and New Year's Eve periods. This ensures you get your preferred date and time.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we reserve the whole restaurant for a private party?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For larger holiday parties, we can arrange reserved seating areas or coordinate multiple hibachi tables. Contact us directly to discuss private room availability and options for your group.",
      },
    },
    {
      "@type": "Question",
      "name": "What makes Jinbeh special for holiday celebrations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our hibachi chefs create an interactive, entertaining experience that brings groups together. Combined with our festive atmosphere, premium food, and excellent service, it creates memorable holiday memories.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer catering for holiday parties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! If you're hosting a holiday party at your location, we offer catering services. Contact us for custom quotes on sushi platters, appetizer trays, and hibachi-style catering.",
      },
    },
  ],
};

const holidayReasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Entertainment & Laughter",
    description: "Our hibachi chefs bring excitement and joy with knife tricks, theatrical cooking, and the famous onion volcano.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Group Bonding",
    description: "Hibachi tables seat 8-10 guests together, creating a shared celebration that brings everyone closer.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Festive Atmosphere",
    description: "Premium dining with warm, welcoming ambiance perfect for celebrating with colleagues, friends, and family.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Stress-Free Hosting",
    description: "We handle everything. Just bring your guests and enjoy the celebration – no cooking, cleanup, or planning.",
  },
];

export default function HolidayPartiesPage() {
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
              Festive Celebrations
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Holiday Parties & Celebrations
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Celebrate the season with hibachi entertainment, premium food, and the warmth
              of Jinbeh. Perfect for Christmas dinners and New Year's Eve celebrations.
            </p>
            <Link
              href="#reserve"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Book Your Holiday Party
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Why Jinbeh for Holidays */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Celebrate Holidays at Jinbeh?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Create unforgettable holiday memories with hibachi entertainment and exceptional Japanese cuisine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {holidayReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center text-accent-red">
                    {reason.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Holiday Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://jinbeh.com/wp-content/uploads/2023/01/sushi-platter.jpg"
                    alt="Festive holiday sushi platter"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Holiday Celebration Options
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent-red pl-6">
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      Christmas Dinners
                    </h3>
                    <p className="text-charcoal/80">
                      Gather family and friends for an unforgettable Christmas celebration. Our hibachi
                      entertainment creates joy and laughter that makes the holiday extra special.
                    </p>
                  </div>

                  <div className="border-l-4 border-deep-indigo pl-6">
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      New Year's Eve Celebrations
                    </h3>
                    <p className="text-charcoal/80">
                      Ring in the new year with exceptional Japanese cuisine and festive ambiance. Our
                      hibachi chefs will toast to new beginnings and create memories for the year ahead.
                    </p>
                  </div>

                  <div className="border-l-4 border-soft-gold pl-6">
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      Corporate Holiday Parties
                    </h3>
                    <p className="text-charcoal/80">
                      Celebrate company milestones and team accomplishments with hibachi entertainment
                      that engages and excites your entire staff.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-warm-ivory rounded-xl">
                  <h3 className="font-semibold text-charcoal mb-3">🎉 Holiday Booking Tips:</h3>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Book 4-6 weeks early for December holidays</li>
                    <li>• New Year's Eve requires early reservations</li>
                    <li>• Let us know your group size and preferences</li>
                    <li>• Ask about group discounts for larger parties</li>
                    <li>• Private seating available for reserved groups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Holiday Menu Preview */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Holiday Feast Options
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                From premium hibachi to fresh sushi – something special for every taste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Premium Hibachi</h3>
                <p className="text-warm-ivory/70 text-sm mb-4">
                  Filet mignon, lobster, premium shrimp, and chicken cooked tableside with theatrical flair.
                </p>
                <ul className="text-left space-y-2 text-sm text-warm-ivory/70">
                  <li>• Fried rice prepared on the grill</li>
                  <li>• Seasonal vegetables</li>
                  <li>• Chef entertainment and excitement</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🍣</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Sushi & Rolls</h3>
                <p className="text-warm-ivory/70 text-sm mb-4">
                  Fresh, artfully crafted sushi and specialty rolls for a more refined celebration.
                </p>
                <ul className="text-left space-y-2 text-sm text-warm-ivory/70">
                  <li>• Signature specialty rolls</li>
                  <li>• Premium nigiri and sashimi</li>
                  <li>• Seasonal specials</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🥢</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Combination Feast</h3>
                <p className="text-warm-ivory/70 text-sm mb-4">
                  Mix and match hibachi and sushi for the ultimate holiday experience.
                </p>
                <ul className="text-left space-y-2 text-sm text-warm-ivory/70">
                  <li>• Appetizer selections</li>
                  <li>• Hibachi main courses</li>
                  <li>• Sushi platters</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/frisco/menu"
                className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors font-medium"
              >
                View Full Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Book Your Holiday Celebration
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Don't wait! Holiday dates fill up quickly. Reserve your celebration now and
              create unforgettable memories with loved ones.
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
              For large groups, call us directly:<br />
              Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
            </p>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Other Special Occasions
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/celebrations/birthday"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Birthday Parties
              </Link>
              <Link
                href="/celebrations/family-gatherings"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Family Gatherings
              </Link>
              <Link
                href="/catering"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Catering Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
