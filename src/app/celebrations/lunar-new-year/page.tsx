import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lunar New Year Dinner Frisco & Lewisville | Chinese New Year | Jinbeh Japanese Restaurant",
  description: "Celebrate Lunar New Year at Jinbeh! Ring in the Year of the Snake with hibachi, sushi, and authentic Japanese dining in Frisco and Lewisville TX. Reservations recommended!",
  keywords: [
    "lunar new year dinner frisco",
    "chinese new year restaurant frisco tx",
    "lunar new year dinner lewisville",
    "asian new year celebration frisco",
    "year of the snake dinner",
    "lunar new year hibachi",
    "chinese new year sushi",
    "lunar new year reservations",
  ],
  openGraph: {
    title: "Lunar New Year Dinner | Celebrate at Jinbeh",
    description: "Welcome the Lunar New Year with hibachi, sushi, and family at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Jinbeh celebrate Lunar New Year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! While we're a Japanese restaurant, we welcome guests celebrating Lunar New Year (also known as Chinese New Year). It's a wonderful time to gather with family over a special meal.",
      },
    },
    {
      "@type": "Question",
      name: "When is Lunar New Year 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lunar New Year 2026 (Year of the Snake) falls on February 17, 2026. The celebration typically lasts about two weeks, with the first few days being the most important for family gatherings and special meals.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make Lunar New Year reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend making reservations, especially for the Lunar New Year Eve (Feb 16) and New Year's Day (Feb 17). Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224.",
      },
    },
    {
      "@type": "Question",
      name: "Is hibachi a good choice for Lunar New Year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Hibachi is perfect for Lunar New Year gatherings. The communal table setting brings family together, and the festive tableside cooking creates a celebratory atmosphere.",
      },
    },
  ],
};

export default function LunarNewYearPage() {
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
            alt="Lunar New Year celebration dinner at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-accent-red text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              恭喜發財 • Gong Xi Fa Cai
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Lunar New Year at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Ring in the Year of the Snake with family, flavor, and fortune
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
              <span>🐍 Year of the Snake 2026 — February 17th 🐍</span>{" "}
              <span className="font-bold">Reserve your celebration now!</span>{" "}
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
                Start the New Year with Good Fortune
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Lunar New Year is a time for family, feasting, and fresh beginnings. At Jinbeh,
                we invite you to gather around the hibachi table, share delicious food, and
                welcome the Year of the Snake together. Since 1988, we&apos;ve been bringing
                families together for life&apos;s most important celebrations.
              </p>
            </div>

            {/* Why Celebrate at Jinbeh */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Family Gathering
                </h3>
                <p className="text-charcoal/70">
                  Hibachi tables bring everyone together — grandparents, parents, and
                  children all sharing in the experience.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Festive Entertainment
                </h3>
                <p className="text-charcoal/70">
                  The sizzling grill and chef&apos;s performance create an atmosphere
                  of celebration perfect for new beginnings.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍣</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Fresh & Auspicious
                </h3>
                <p className="text-charcoal/70">
                  In Asian tradition, fresh fish symbolizes prosperity.
                  Our sushi is prepared fresh daily.
                </p>
              </div>
            </div>

            {/* Lucky Foods Section */}
            <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Lucky Dishes for the New Year
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Hibachi Favorites</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🐟</span>
                      <span><strong>Lobster Tail</strong> — prosperity and fortune</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🦐</span>
                      <span><strong>Shrimp</strong> — happiness and good luck</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🍚</span>
                      <span><strong>Fried Rice</strong> — abundance and togetherness</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🥩</span>
                      <span><strong>Filet Mignon</strong> — strength for the year ahead</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Sushi & Sashimi</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🐟</span>
                      <span><strong>Salmon</strong> — smooth year ahead</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🍣</span>
                      <span><strong>Sashimi Platter</strong> — wealth and abundance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🍶</span>
                      <span><strong>Premium Sake</strong> — toast to good fortune</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌈</span>
                      <span><strong>Rainbow Roll</strong> — colorful new beginnings</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/menu"
                  className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                >
                  View Full Menu
                </Link>
              </div>
            </div>

            {/* Year of the Snake Info */}
            <div className="bg-soft-gold/10 border border-soft-gold/30 rounded-2xl p-8 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl">🐍</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                    Year of the Snake 2026
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    The Snake is a symbol of wisdom, intuition, and transformation in the Chinese zodiac.
                    2026 promises a year of thoughtful growth and positive change. Start it right with
                    a memorable celebration at Jinbeh!
                  </p>
                  <p className="text-sm text-charcoal/60">
                    <strong>Lunar New Year 2026:</strong> February 17th (Snake year begins)
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Lunar New Year FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "When is Lunar New Year 2026?",
                    a: "Lunar New Year 2026 is February 17th, marking the beginning of the Year of the Snake. Celebrations typically last about two weeks.",
                  },
                  {
                    q: "Do I need reservations for Lunar New Year?",
                    a: "We strongly recommend reservations, especially for New Year's Eve (Feb 16) and New Year's Day (Feb 17). It's a popular time for family gatherings.",
                  },
                  {
                    q: "Can you accommodate large family groups?",
                    a: "Yes! Hibachi tables are perfect for family celebrations. For parties of 8+, please call ahead so we can seat everyone together.",
                  },
                  {
                    q: "Do you have any special Lunar New Year offerings?",
                    a: "Contact us directly to inquire about any special offerings for Lunar New Year. Our regular menu features many dishes perfect for celebrating!",
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
                恭喜發財 — Reserve Your Table
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Start the Lunar New Year with good food, good company, and good fortune.
                Book your celebration at Jinbeh today!
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
              More Cultural Celebrations at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/mid-autumn-festival" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🌕</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Mid-Autumn Festival</span>
              </Link>
              <Link href="/celebrations/diwali" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🪔</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Diwali</span>
              </Link>
              <Link href="/celebrations/asian-restaurant-month" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎌</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Asian Restaurant Month</span>
              </Link>
              <Link href="/celebrations" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">All Celebrations</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
              <Link href="/frisco/sushi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Frisco Sushi</Link>
              <Link href="/lewisville/sushi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Lewisville Sushi</Link>
              <Link href="/menu/sashimi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sashimi</Link>
              <Link href="/menu/sake" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Premium Sake</Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Plano</Link>
              <Link href="/nearby/carrollton" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Carrollton</Link>
            </div>
          </div>
        </section>

        {/* Gift Card CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Give the Gift of Good Fortune 🧧
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Jinbeh gift cards make a wonderful Lunar New Year gift!
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
