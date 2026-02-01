import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Christmas Dinner Frisco & Lewisville | Holiday Dining | Jinbeh Japanese Restaurant",
  description: "Celebrate Christmas at Jinbeh! Hibachi, sushi, and Japanese dining for the holidays. Frisco and Lewisville TX locations open Christmas Eve. Reserve your holiday table!",
  keywords: [
    "christmas dinner frisco",
    "christmas eve restaurant frisco tx",
    "christmas dinner lewisville",
    "restaurants open christmas eve frisco",
    "christmas hibachi",
    "christmas eve reservations frisco",
    "christmas sushi dinner",
    "holiday dinner frisco",
  ],
  openGraph: {
    title: "Christmas Dinner | Holiday Dining at Jinbeh",
    description: "Celebrate the holidays with hibachi, sushi, and family at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh open on Christmas Eve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both Jinbeh locations are typically open on Christmas Eve. Please call ahead to confirm hours and make reservations for your holiday celebration.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh open on Christmas Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hours may vary on Christmas Day. Please contact your preferred location directly to confirm holiday hours. Frisco: (214) 619-1200, Lewisville: (214) 488-2224.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make Christmas reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! The holiday season is very busy. We recommend making reservations at least 1-2 weeks in advance for Christmas Eve or Christmas Day dining.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh good for holiday family gatherings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Hibachi is perfect for bringing the family together during the holidays. Everyone gathers around the table, enjoys the show, and shares a memorable meal.",
      },
    },
  ],
};

export default function ChristmasPage() {
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
            src="/images/food/OnionVolcanoDemo.jpg"
            alt="Christmas hibachi dinner at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-accent-red text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Happy Holidays
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Christmas at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Make the holidays magical with sizzling hibachi and family memories
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
        <section className="py-4 bg-accent-red text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>Celebrate the holidays at Jinbeh!</span>{" "}
              <span className="font-bold">Reserve your family&apos;s table early.</span>{" "}
              <a href="tel:2146191200" className="underline hover:no-underline">
                Frisco (214) 619-1200
              </a>{" "}
              |{" "}
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
                A Holiday Tradition Worth Starting
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Looking for something different this Christmas? Trade the typical holiday meal
                for an experience the whole family will love. At Jinbeh, the flames are bright,
                the food is festive, and the memories last long after the meal is over.
              </p>
            </div>

            {/* Why Jinbeh for Christmas */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎄</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Festive Atmosphere
                </h3>
                <p className="text-charcoal/70">
                  The sizzling grill, flaming onion volcano, and tableside entertainment
                  create holiday magic.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎁</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  No Cooking, No Stress
                </h3>
                <p className="text-charcoal/70">
                  Give yourself the gift of a relaxing holiday. We handle the cooking
                  so you can enjoy your family.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  All Ages Welcome
                </h3>
                <p className="text-charcoal/70">
                  From grandparents to grandkids, everyone loves hibachi.
                  Kids menu available.
                </p>
              </div>
            </div>

            {/* Menu Highlights */}
            <div className="bg-gradient-to-br from-deep-indigo to-charcoal rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Holiday Feast Options
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Hibachi Celebration</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Filet Mignon — the gift of premium steak
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Lobster Tail — festive and indulgent
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Imperial Dinner — steak, lobster, shrimp
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Hibachi Fried Rice — everyone&apos;s favorite
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Sushi & Drinks</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Party Platters — great for sharing
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Sashimi Deluxe — chef&apos;s selection
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Hot Sake — warm up the holidays
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Signature Cocktails — festive toasts
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

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Holiday Dining FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "What are your Christmas Eve/Day hours?",
                    a: "Hours may vary during the holidays. Please call your preferred location to confirm: Frisco (214) 619-1200 or Lewisville (214) 488-2224.",
                  },
                  {
                    q: "How far in advance should I book?",
                    a: "We recommend booking at least 1-2 weeks ahead for Christmas Eve. The holiday season fills up quickly!",
                  },
                  {
                    q: "Can you accommodate large family groups?",
                    a: "Absolutely! Hibachi tables are perfect for family gatherings. For parties of 8+, please call ahead so we can seat everyone together.",
                  },
                  {
                    q: "Do you offer gift cards?",
                    a: "Yes! Jinbeh gift cards make a great holiday gift. Visit our gift cards page or ask your server.",
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
                Reserve Your Holiday Table
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Make this Christmas unforgettable. Book your holiday celebration at Jinbeh today!
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
            </div>
          </div>
        </section>

        {/* Related Celebrations - SEO Internal Linking */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
              More Holiday Celebrations at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/thanksgiving" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🦃</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Thanksgiving</span>
              </Link>
              <Link href="/celebrations/lunar-new-year" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🐍</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Lunar New Year</span>
              </Link>
              <Link href="/celebrations/family-gatherings" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">👨‍👩‍👧‍👦</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Family Gatherings</span>
              </Link>
              <Link href="/celebrations" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">All Celebrations</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
              <Link href="/frisco/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Frisco Hibachi</Link>
              <Link href="/lewisville/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Lewisville Hibachi</Link>
              <Link href="/private-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Private Dining</Link>
              <Link href="/gift-cards" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Gift Cards</Link>
              <Link href="/nearby/mckinney" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near McKinney</Link>
              <Link href="/nearby/the-colony" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near The Colony</Link>
            </div>
          </div>
        </section>

        {/* Gift Card CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              The Perfect Gift 🎁
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Give the gift of an unforgettable dining experience with a Jinbeh gift card.
            </p>
            <Link
              href="/gift-cards"
              className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg inline-block"
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
