import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Valentine's Day Dinner Frisco & Lewisville | Romantic Japanese Dining | Jinbeh",
  description: "Celebrate Valentine's Day at Jinbeh Japanese Restaurant. Romantic hibachi dinner, fresh sushi, sake, and tableside entertainment in Frisco and Lewisville TX. Reserve your table now!",
  keywords: [
    "valentines day dinner frisco",
    "valentines day restaurant frisco tx",
    "romantic dinner lewisville",
    "valentines day hibachi",
    "romantic japanese restaurant",
    "valentines day reservations frisco",
    "couples dinner valentines day",
    "valentines day sushi dinner",
  ],
  openGraph: {
    title: "Valentine's Day Dinner | Romantic Japanese Dining | Jinbeh",
    description: "Make Valentine's Day unforgettable with hibachi, sushi, and sake at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh open on Valentine's Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both Jinbeh locations (Frisco and Lewisville) are open on Valentine's Day. We recommend making reservations early as this is one of our busiest nights of the year.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make a Valentine's Day reservation at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Valentine's Day reservations fill up quickly. Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224 to reserve your table. We recommend booking at least 1-2 weeks in advance.",
      },
    },
    {
      "@type": "Question",
      name: "What's the most romantic seating option for Valentine's Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For an intimate experience, request a booth or sushi bar seating. For couples who enjoy entertainment, our hibachi tables offer a fun, interactive dining experience you can share together.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have Valentine's Day specials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us directly about Valentine's Day offerings. Our regular menu features plenty of shareable options perfect for couples, including sushi platters, hibachi dinners for two, and sake flights.",
      },
    },
    {
      "@type": "Question",
      name: "Can I surprise my partner with something special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Call ahead and let us know you're celebrating Valentine's Day. We're happy to help make your evening memorable. We can also arrange Jinbeh gift cards as a romantic gesture.",
      },
    },
  ],
};

export default function ValentinesDayPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-warm-ivory" />
          <Image
            src="/images/food/nigiri.jpg"
            alt="Romantic sushi dinner for Valentine's Day at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-accent-red text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              February 14th
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Valentine&apos;s Day at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              An unforgettable evening of romance, flavor, and fire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco#reserve"
                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Reserve Frisco
              </Link>
              <Link
                href="/lewisville#reserve"
                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Reserve Lewisville
              </Link>
            </div>
          </div>
        </section>

        {/* Urgency Banner */}
        <section className="py-4 bg-accent-red text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span className="text-white/80">Valentine&apos;s Day tables fill fast!</span>{" "}
              <span className="font-bold">Reserve early to secure your spot.</span>{" "}
              <a href="tel:2146191200" className="underline hover:no-underline">
                Call Frisco (214) 619-1200
              </a>{" "}
              or{" "}
              <a href="tel:2144882224" className="underline hover:no-underline">
                Lewisville (214) 488-2224
              </a>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-charcoal font-heading font-bold mb-6">
                Make This Valentine&apos;s Day Unforgettable
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Skip the crowded chain restaurants and give your special someone an experience
                they&apos;ll remember. At Jinbeh, we&apos;ve been creating romantic memories since 1988 —
                from the sizzle of hibachi flames to the artistry of fresh sushi.
              </p>
            </div>

            {/* Two Experience Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Hibachi Experience */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/food/OnionVolcanoDemo.jpg"
                    alt="Romantic hibachi dinner with flames"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      🔥 Interactive & Fun
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-charcoal font-heading font-bold mb-4">
                    Hibachi for Two
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Share the excitement of tableside cooking together. Watch flames dance,
                    catch flying shrimp, and create shared memories over a sizzling meal.
                  </p>
                  <ul className="space-y-2 text-charcoal/70 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-red">✓</span>
                      Tableside entertainment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-red">✓</span>
                      Famous onion volcano
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-red">✓</span>
                      Premium steak, seafood & more
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-red">✓</span>
                      Sake & cocktails available
                    </li>
                  </ul>
                  <Link
                    href="/menu"
                    className="text-deep-indigo font-semibold hover:text-accent-red transition-colors"
                  >
                    View Hibachi Menu →
                  </Link>
                </div>
              </div>

              {/* Sushi Experience */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/food/SamaraiRollCloseup.jpg"
                    alt="Romantic sushi dinner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-deep-indigo text-white px-3 py-1 rounded-full text-sm font-medium">
                      🍣 Intimate & Elegant
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-charcoal font-heading font-bold mb-4">
                    Sushi Date Night
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    For a quieter, more intimate evening, share a beautiful sushi platter.
                    Discover new favorites together at our sushi bar or cozy booth.
                  </p>
                  <ul className="space-y-2 text-charcoal/70 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-deep-indigo">✓</span>
                      Fresh fish daily
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-deep-indigo">✓</span>
                      Shareable platters
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-deep-indigo">✓</span>
                      Specialty rolls & sashimi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-deep-indigo">✓</span>
                      Sake flights & Japanese beer
                    </li>
                  </ul>
                  <Link
                    href="/menu"
                    className="text-deep-indigo font-semibold hover:text-accent-red transition-colors"
                  >
                    View Sushi Menu →
                  </Link>
                </div>
              </div>
            </div>

            {/* Why Jinbeh Section */}
            <div className="bg-gradient-to-br from-deep-indigo to-charcoal rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                Why Couples Choose Jinbeh
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💝</span>
                  </div>
                  <h4 className="font-semibold mb-2">37 Years of Romance</h4>
                  <p className="text-white/80 text-sm">
                    Family-owned since 1988, we&apos;ve hosted countless Valentine&apos;s celebrations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍶</span>
                  </div>
                  <h4 className="font-semibold mb-2">Sake & Cocktails</h4>
                  <p className="text-white/80 text-sm">
                    Toast to love with premium sake, Japanese whiskey, or signature cocktails.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <h4 className="font-semibold mb-2">Highly Rated</h4>
                  <p className="text-white/80 text-sm">
                    4.2-4.8 stars across Google, OpenTable, and delivery platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Valentine&apos;s Day FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "Should I make a Valentine's Day reservation?",
                    a: "Yes! Valentine's Day is one of our busiest nights. Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224 to reserve. We recommend booking 1-2 weeks ahead.",
                  },
                  {
                    q: "What time should we arrive?",
                    a: "Early dinner (5-6pm) tends to be slightly less busy, while 7-8pm is peak time. Let us know if you have time preferences when booking.",
                  },
                  {
                    q: "What's the most romantic seating?",
                    a: "For intimate conversation, request a booth. For shared fun, hibachi tables create memorable experiences. Call ahead with your preference.",
                  },
                  {
                    q: "Can I surprise my partner?",
                    a: "Absolutely! Call ahead and let us know you're celebrating. We love helping create special moments.",
                  },
                ].map((faq, i) => (
                  <details key={i} className="bg-white rounded-xl shadow-md overflow-hidden group">
                    <summary className="p-6 cursor-pointer font-semibold text-charcoal hover:bg-warm-ivory transition-colors flex justify-between items-center">
                      {faq.q}
                      <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 text-charcoal/70">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-accent-red/10 border-2 border-accent-red/20 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
                Reserve Your Valentine&apos;s Day Table
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Don&apos;t wait until the last minute — our tables fill up fast!
                Make this Valentine&apos;s Day one to remember at Jinbeh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:2146191200"
                  className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <span>📞</span> Frisco: (214) 619-1200
                </a>
                <a
                  href="tel:2144882224"
                  className="btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <span>📞</span> Lewisville: (214) 488-2224
                </a>
              </div>
              <p className="mt-6 text-sm text-charcoal/60">
                Or reserve online:{" "}
                <Link href="/frisco#reserve" className="text-deep-indigo hover:underline">
                  Frisco OpenTable
                </Link>{" "}
                |{" "}
                <Link href="/lewisville#reserve" className="text-deep-indigo hover:underline">
                  Lewisville
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Gift Card Suggestion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Looking for the Perfect Gift?
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Give the gift of a memorable dining experience with a Jinbeh gift card.
            </p>
            <Link
              href="/gift-cards"
              className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg inline-block"
            >
              Shop Gift Cards
            </Link>
          </div>
        </section>

        {/* Related Celebrations - SEO Internal Linking */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
              More Ways to Celebrate at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/date-night" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">💕</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Date Night</span>
              </Link>
              <Link href="/celebrations/anniversary" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">💍</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Anniversary</span>
              </Link>
              <Link href="/celebrations/mothers-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">💐</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Mother&apos;s Day</span>
              </Link>
              <Link href="/celebrations" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">All Celebrations</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
              <Link href="/frisco/sushi-rolls" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sushi Rolls</Link>
              <Link href="/frisco/sashimi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Fresh Sashimi</Link>
              <Link href="/happy-hour" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Happy Hour</Link>
              <Link href="/blog/date-night-restaurants-frisco" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Date Night Guide</Link>
              <Link href="/blog/romantic-anniversary-dinners" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Anniversary Ideas</Link>
              <Link href="/blog/sake-sushi-menu-pairings" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sake Pairings</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
