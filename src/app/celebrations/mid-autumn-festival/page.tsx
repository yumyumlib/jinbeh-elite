import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mid-Autumn Festival Dinner Frisco & Lewisville | Moon Festival | Jinbeh Japanese Restaurant",
  description: "Celebrate the Mid-Autumn Festival at Jinbeh! Mark the Moon Festival with family dining, hibachi, and sushi in Frisco and Lewisville TX. Gather under the harvest moon!",
  keywords: [
    "mid autumn festival dinner frisco",
    "moon festival restaurant frisco tx",
    "mid autumn festival lewisville",
    "asian moon festival dinner",
    "mid autumn festival restaurant",
    "mooncake festival dinner",
    "harvest moon celebration",
    "asian family dinner frisco",
  ],
  openGraph: {
    title: "Mid-Autumn Festival Dinner | Moon Festival at Jinbeh",
    description: "Celebrate the Mid-Autumn Festival with family at Jinbeh. Hibachi and sushi in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Mid-Autumn Festival?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mid-Autumn Festival (also known as the Moon Festival or Mooncake Festival) is a harvest celebration observed in many Asian cultures. It falls on the 15th day of the 8th lunar month (typically September or October) when the moon is at its fullest and brightest. It's a time for family reunions and giving thanks for the harvest.",
      },
    },
    {
      "@type": "Question",
      name: "When is the Mid-Autumn Festival 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mid-Autumn Festival 2025 falls on October 6, 2025. This is the perfect time to gather with family over a special meal.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh a good place for Mid-Autumn Festival?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! The Mid-Autumn Festival is about family gatherings and sharing food together. Our hibachi tables bring families together around a shared experience, making it perfect for this celebration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need reservations for Mid-Autumn Festival?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend reservations, especially for family gatherings. Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224 to reserve your table.",
      },
    },
  ],
};

export default function MidAutumnFestivalPage() {
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
            src="/images/photoshoot/hibachi-chicken.jpg"
            alt="Mid-Autumn Festival hibachi celebration dinner at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              中秋節 • Moon Festival
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Mid-Autumn Festival at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Gather with family under the harvest moon
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
              <span>🌕 Celebrate the Moon Festival with family! 🌕</span>{" "}
              <span className="font-bold">Reserve your table now.</span>{" "}
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
                A Festival of Reunion & Gratitude
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                The Mid-Autumn Festival celebrates family, harvest, and the full moon at its
                brightest. It&apos;s a time when families gather to appreciate the beauty of the moon,
                share good food, and give thanks. At Jinbeh, we honor this tradition by bringing
                families together around the hibachi table for a memorable feast.
              </p>
            </div>

            {/* About the Festival */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">🌕</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
                    What is the Mid-Autumn Festival?
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Also known as the Moon Festival or Mooncake Festival, this celebration falls on
                    the 15th day of the 8th lunar month — when the moon is at its fullest and brightest.
                    Observed across many Asian cultures including Chinese, Vietnamese, Korean, and Japanese,
                    it&apos;s a time for families to reunite and give thanks for the autumn harvest.
                  </p>
                  <p className="text-charcoal/60 text-sm">
                    <strong>2025 Date:</strong> October 6, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Why Jinbeh for Mid-Autumn */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Family Reunion
                </h3>
                <p className="text-charcoal/70">
                  Hibachi tables bring families together, just like gathering
                  to admire the moon. Multiple generations can share the experience.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍣</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Bountiful Feast
                </h3>
                <p className="text-charcoal/70">
                  A harvest celebration deserves a feast! Hibachi and sushi
                  offer something for everyone at the table.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Asian Tradition
                </h3>
                <p className="text-charcoal/70">
                  As a Japanese restaurant serving authentic cuisine since 1988,
                  we honor Asian culinary traditions.
                </p>
              </div>
            </div>

            {/* Menu Highlights */}
            <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Moon Festival Feast
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Hibachi Favorites</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Filet Mignon — premium celebration
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Lobster Tail — harvest abundance
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Imperial Dinner — feast for the family
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Hibachi Fried Rice — always a favorite
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Sushi & Sashimi</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Sashimi Deluxe — chef&apos;s selection
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Party Platters — perfect for sharing
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Specialty Rolls — house favorites
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">🌙</span>
                      Sake — toast to the moon
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/menu"
                  className="inline-block bg-white text-charcoal px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                >
                  View Full Menu
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Moon Festival FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "When is the Mid-Autumn Festival 2025?",
                    a: "The Mid-Autumn Festival 2025 falls on October 6th. It's based on the lunar calendar and falls on the 15th day of the 8th lunar month each year.",
                  },
                  {
                    q: "Who celebrates the Mid-Autumn Festival?",
                    a: "The festival is celebrated across many Asian cultures including Chinese, Vietnamese, Korean, and Japanese communities. It's a time for family reunions and giving thanks.",
                  },
                  {
                    q: "Can you accommodate large family groups?",
                    a: "Yes! Our hibachi tables are perfect for family gatherings. For parties of 8+, please call ahead so we can seat everyone together.",
                  },
                  {
                    q: "Is this a good time to bring the whole family?",
                    a: "Absolutely! The Mid-Autumn Festival is all about family reunion. Hibachi is perfect because everyone gathers around the table to share in the experience together.",
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
            <div className="bg-deep-indigo/10 border-2 border-deep-indigo/20 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
                Celebrate the Moon Festival 🌕
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Gather your family under the harvest moon at Jinbeh. Reserve your table today!
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
              <Link href="/celebrations/lunar-new-year" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🐍</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Lunar New Year</span>
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
              <Link href="/menu/sashimi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sashimi Platters</Link>
              <Link href="/menu/sake" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sake Selection</Link>
              <Link href="/private-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Private Dining</Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Plano</Link>
              <Link href="/nearby/allen" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Allen</Link>
            </div>
          </div>
        </section>

        {/* Gift Card CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Share the Gift of Togetherness
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Jinbeh gift cards make a wonderful Moon Festival gift for loved ones!
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
