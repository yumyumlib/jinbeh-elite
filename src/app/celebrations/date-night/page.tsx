import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Date Night Restaurant Frisco & Lewisville | Romantic Dinner | Jinbeh Japanese Restaurant",
  description: "Plan the perfect date night at Jinbeh! Romantic hibachi dinner, sushi, sake & cocktails in Frisco and Lewisville TX. Impress your date with tableside entertainment.",
  keywords: [
    "date night restaurant frisco",
    "romantic dinner frisco tx",
    "date night lewisville",
    "couples dinner frisco",
    "romantic restaurant near me",
    "date night ideas frisco",
    "hibachi date night",
    "sushi date night",
  ],
  openGraph: {
    title: "Date Night Restaurant | Romantic Dinner at Jinbeh",
    description: "Impress your date with hibachi, sushi, and sake at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh good for a date night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Jinbeh offers a unique dining experience perfect for couples. Choose from our intimate sushi bar for a quieter vibe, or the lively hibachi tables for entertainment. Both create memorable date nights.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make reservations for date night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we recommend reservations, especially for Friday and Saturday evenings. Call Frisco at (214) 618-9888 or Lewisville at (214) 618-9798, or book online through OpenTable.",
      },
    },
    {
      "@type": "Question",
      name: "What should I order on a date at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For hibachi, the filet mignon or surf & turf are popular romantic choices. At the sushi bar, try sharing a sashimi platter or specialty rolls. Pair with sake or cocktails for the full experience.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh have a bar or cocktails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We have a full bar with sake, Japanese beer, wine, and signature cocktails. Happy hour specials are available during select hours — perfect for starting your date night.",
      },
    },
  ],
};

export default function DateNightPage() {
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
            src="/images/food/FreshSushiAndDessertsAtSushiBar.jpg"
            alt="Romantic sushi dinner for date night at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Romantic Dining
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Date Night at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Where sparks fly — both at the grill and at your table
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

        {/* Banner */}
        <section className="py-4 bg-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>💕 Make it a night to remember.</span>{" "}
              <span className="font-bold">Reserve your table for two.</span>{" "}
              <a href="tel:2146189888" className="underline hover:no-underline">
                Frisco (214) 618-9888
              </a>{" "}
              |{" "}
              <a href="tel:2146189798" className="underline hover:no-underline">
                Lewisville (214) 618-9798
              </a>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-charcoal font-heading font-bold mb-6">
                The Perfect Date Night Destination
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Looking for a date night spot that&apos;s more than just dinner? At Jinbeh,
                you get the full experience — delicious food, tableside entertainment,
                and an atmosphere that sets the mood. Whether it&apos;s your first date
                or your hundredth, we make it special.
              </p>
            </div>

            {/* Date Night Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Hibachi Date Night
                </h3>
                <p className="text-charcoal/70 mb-4">
                  The lively option! Watch skilled chefs perform tableside cooking with
                  flames, knife tricks, and the famous onion volcano. Perfect for couples
                  who love entertainment with their meal.
                </p>
                <ul className="text-sm text-charcoal/70 space-y-2">
                  <li>✓ Interactive entertainment</li>
                  <li>✓ Shared experience to talk about</li>
                  <li>✓ Great for adventurous couples</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍣</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Sushi Bar Date Night
                </h3>
                <p className="text-charcoal/70 mb-4">
                  The intimate option! Sit at our sushi bar and watch the chef craft
                  beautiful rolls and sashimi. A quieter setting perfect for conversation
                  and connection.
                </p>
                <ul className="text-sm text-charcoal/70 space-y-2">
                  <li>✓ More intimate atmosphere</li>
                  <li>✓ Perfect for deep conversation</li>
                  <li>✓ Watch the sushi artistry</li>
                </ul>
              </div>
            </div>

            {/* Menu Highlights */}
            <div className="bg-gradient-to-br from-deep-indigo to-charcoal rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Romantic Menu Picks
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">To Impress</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">♥</span>
                      Filet Mignon Hibachi — premium romantic choice
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">♥</span>
                      Surf & Turf — steak + lobster for two
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">♥</span>
                      Sashimi Deluxe — fresh chef&apos;s selection
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">♥</span>
                      Omakase — trust the chef experience
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">To Share</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">♥</span>
                      Specialty Roll Sampler — try several
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">♥</span>
                      Hot Sake or Sake Flight
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">♥</span>
                      Edamame & Gyoza starters
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">♥</span>
                      Tempura Ice Cream dessert
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/menu"
                  className="inline-block bg-white text-deep-indigo px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                >
                  View Full Menu
                </Link>
              </div>
            </div>

            {/* Happy Hour Callout */}
            <div className="bg-soft-gold/10 border border-soft-gold/30 rounded-2xl p-8 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🍸</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                    Start with Happy Hour
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Make your date night even better with our Happy Hour specials!
                    Discounted drinks and appetizers are the perfect way to kick things off.
                    Check our Happy Hour page for current specials and hours.
                  </p>
                  <Link
                    href="/happy-hour"
                    className="text-accent-red font-semibold hover:underline"
                  >
                    View Happy Hour Specials →
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Date Night FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "Is Jinbeh a good date spot?",
                    a: "Absolutely! Whether you choose the excitement of hibachi or the intimacy of our sushi bar, Jinbeh creates memorable date nights. The food, atmosphere, and service are all designed to impress.",
                  },
                  {
                    q: "Should we sit at hibachi or sushi bar?",
                    a: "It depends on your vibe! Hibachi is lively and entertaining — great for breaking the ice. The sushi bar is quieter and more intimate — perfect for deep conversation.",
                  },
                  {
                    q: "Do you take reservations for two?",
                    a: "Yes! We recommend reservations, especially on Friday and Saturday evenings. Call us or book through OpenTable.",
                  },
                  {
                    q: "What's the dress code?",
                    a: "Smart casual is perfect. You want to look nice for your date, but there's no need to be overly formal.",
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
                Plan Your Date Night
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Skip the ordinary dinner spots. Make your next date night one to remember at Jinbeh!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:2146189888"
                  className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <span>📞</span> Frisco: (214) 618-9888
                </a>
                <a
                  href="tel:2146189798"
                  className="btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <span>📞</span> Lewisville: (214) 618-9798
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Celebrations - SEO Internal Linking */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
              More Romantic Occasions at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/valentines-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">💕</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Valentine&apos;s Day</span>
              </Link>
              <Link href="/celebrations/anniversary" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">💍</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Anniversary</span>
              </Link>
              <Link href="/celebrations/birthday" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎂</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Birthday</span>
              </Link>
              <Link href="/celebrations" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">All Celebrations</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
              <Link href="/frisco/sushi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Frisco Sushi</Link>
              <Link href="/menu/specialty-rolls" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Specialty Rolls</Link>
              <Link href="/menu/sake" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sake Selection</Link>
              <Link href="/happy-hour" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Happy Hour</Link>
              <Link href="/blog/date-night-restaurants-frisco" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Date Night Guide</Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Plano</Link>
            </div>
          </div>
        </section>

        {/* Gift Card CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Gift a Date Night 🎁
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Jinbeh gift cards make the perfect gift for couples. Give the gift of a memorable date night!
            </p>
            <Link
              href="/gift-cards"
              className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-8 py-3 rounded-xl font-semibold shadow-lg inline-block"
            >
              Shop Gift Cards
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
