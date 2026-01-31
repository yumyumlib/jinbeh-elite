import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thanksgiving Dinner Frisco & Lewisville | Skip the Cooking | Jinbeh Japanese Restaurant",
  description: "Celebrate Thanksgiving at Jinbeh! Let us cook while you relax. Hibachi, sushi, and Japanese dining in Frisco and Lewisville TX. Open Thanksgiving Day - reserve now!",
  keywords: [
    "thanksgiving dinner frisco",
    "thanksgiving restaurant frisco tx",
    "thanksgiving dinner lewisville",
    "restaurants open thanksgiving frisco",
    "thanksgiving hibachi",
    "thanksgiving reservations frisco",
    "thanksgiving sushi dinner",
    "restaurants open thanksgiving day",
  ],
  openGraph: {
    title: "Thanksgiving Dinner | Skip the Cooking at Jinbeh",
    description: "Let us handle Thanksgiving dinner! Hibachi, sushi, and family dining at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh open on Thanksgiving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both Jinbeh locations (Frisco and Lewisville) are open on Thanksgiving Day. We welcome families who want to skip the cooking and enjoy a special meal together.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make Thanksgiving reservations at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Thanksgiving is very popular for families who prefer to dine out. Call Frisco at (214) 618-9888 or Lewisville at (214) 618-9798 to reserve. We recommend booking 1-2 weeks in advance.",
      },
    },
    {
      "@type": "Question",
      name: "What are Jinbeh's Thanksgiving hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact your preferred location for Thanksgiving Day hours. We typically operate on a modified schedule to accommodate family celebrations.",
      },
    },
    {
      "@type": "Question",
      name: "Is hibachi a good Thanksgiving alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Hibachi is perfect for Thanksgiving — the whole family gathers around the table, watches the chef perform, and enjoys a feast together. It's festive, delicious, and no one has to do the dishes!",
      },
    },
  ],
};

export default function ThanksgivingPage() {
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
            src="/images/food/HibachiFriedRiceVegetables.jpg"
            alt="Thanksgiving hibachi dinner at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Skip the Cooking
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Thanksgiving at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Give thanks, gather together, and let us do the cooking
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
        <section className="py-4 bg-soft-gold text-charcoal">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>Open Thanksgiving Day!</span>{" "}
              <span className="font-bold">Reserve your family&apos;s table now.</span>{" "}
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
                A Different Kind of Thanksgiving Feast
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                This year, give yourself the gift of no cooking, no cleaning, and no stress.
                At Jinbeh, your family gathers around the hibachi table while our chefs
                put on a show and serve up a feast. That&apos;s something to be thankful for!
              </p>
            </div>

            {/* Why Jinbeh for Thanksgiving */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍽️</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  No Cooking Required
                </h3>
                <p className="text-charcoal/70">
                  Skip the hours of prep and cooking. Our chefs prepare
                  everything fresh right at your table.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Entertainment Included
                </h3>
                <p className="text-charcoal/70">
                  Hibachi dinner is a show! Kids and adults alike will be
                  captivated by the flames and knife tricks.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Family-Friendly
                </h3>
                <p className="text-charcoal/70">
                  Our hibachi tables bring families together. Multiple generations
                  can enjoy a memorable meal together.
                </p>
              </div>
            </div>

            {/* Menu Highlights */}
            <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Thanksgiving Feast Options
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Hibachi Favorites</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Filet Mignon — premium cut for a special occasion
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Lobster Tail — succulent and festive
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Hibachi Fried Rice — the crowd favorite
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Family Combo Platters — something for everyone
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Sushi & More</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Sushi Platters — great for sharing
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Signature Rolls — house specialties
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Sake & Japanese Beer — toast the day
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Kids Menu — options for little ones
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
                Thanksgiving FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "Are you really open on Thanksgiving Day?",
                    a: "Yes! We're open on Thanksgiving to serve families who want to skip the cooking and enjoy a special meal together.",
                  },
                  {
                    q: "How far in advance should I book?",
                    a: "We recommend booking 1-2 weeks ahead. Thanksgiving is very popular with families who want a stress-free holiday meal.",
                  },
                  {
                    q: "Can you accommodate large family groups?",
                    a: "Absolutely! Our hibachi tables are perfect for family gatherings. For parties of 8+, please call ahead so we can seat everyone together.",
                  },
                  {
                    q: "Do you have a kids menu?",
                    a: "Yes! We have kid-friendly options. Children love watching the hibachi show while enjoying their meal.",
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
            <div className="bg-soft-gold/20 border-2 border-soft-gold/30 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
                Reserve Your Thanksgiving Table
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Give your family the gift of a stress-free Thanksgiving. Book now before tables fill up!
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
              More Ways to Celebrate at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/christmas" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎄</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Christmas</span>
              </Link>
              <Link href="/celebrations/family-gatherings" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">👨‍👩‍👧‍👦</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Family Gatherings</span>
              </Link>
              <Link href="/celebrations/national-fried-rice-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🍚</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Fried Rice Day</span>
              </Link>
              <Link href="/celebrations" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">All Celebrations</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
              <Link href="/frisco/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Hibachi Menu</Link>
              <Link href="/menu" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Full Menu</Link>
              <Link href="/private-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Private Dining</Link>
              <Link href="/blog/thanksgiving-dining-guide" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Thanksgiving Guide</Link>
              <Link href="/blog/large-group-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Group Dining</Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Plano</Link>
            </div>
          </div>
        </section>

        {/* Takeout Option */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Hosting at Home?
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Order sushi and appetizers to complement your Thanksgiving spread!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-frisco-2693-preston-rd-frisco/2134962"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-6 py-3 rounded-xl font-semibold shadow-lg inline-block"
              >
                Order Frisco Takeout
              </a>
              <a
                href="https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-lewisville-2693-preston-rd-lewisville/2134962"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-6 py-3 rounded-xl font-semibold shadow-lg inline-block"
              >
                Order Lewisville Takeout
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
