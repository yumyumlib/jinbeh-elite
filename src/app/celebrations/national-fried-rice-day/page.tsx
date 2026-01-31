import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "National Fried Rice Day | September 20th | Jinbeh Japanese Restaurant Frisco & Lewisville",
  description: "Celebrate National Fried Rice Day at Jinbeh! Watch our hibachi chefs make the best fried rice in Frisco and Lewisville TX. Famous hibachi fried rice prepared tableside.",
  keywords: [
    "national fried rice day",
    "best fried rice frisco",
    "hibachi fried rice near me",
    "japanese fried rice frisco tx",
    "hibachi fried rice lewisville",
    "teppanyaki fried rice",
    "best hibachi frisco",
    "september 20 fried rice day",
  ],
  openGraph: {
    title: "National Fried Rice Day | Celebrate at Jinbeh",
    description: "The best hibachi fried rice in DFW! Watch our chefs prepare it tableside on September 20th. Two locations in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is National Fried Rice Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "National Fried Rice Day is celebrated on September 20th every year. It's the perfect excuse to enjoy Jinbeh's famous hibachi fried rice!",
      },
    },
    {
      "@type": "Question",
      name: "What makes Jinbeh's fried rice special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our hibachi fried rice is made fresh at your table by skilled teppanyaki chefs. It's prepared with day-old rice, eggs, butter, fresh vegetables, and our special seasonings — all cooked on a sizzling grill right in front of you.",
      },
    },
    {
      "@type": "Question",
      name: "Does fried rice come with hibachi dinners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All hibachi dinner entrees at Jinbeh include our famous fried rice, along with soup, salad, and grilled vegetables. The fried rice is prepared tableside as part of the hibachi show.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order just fried rice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While our hibachi fried rice is traditionally served as part of the hibachi dinner experience, you can ask about à la carte options. Contact your preferred location for details.",
      },
    },
  ],
};

export default function NationalFriedRiceDayPage() {
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
            alt="Famous hibachi fried rice at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              September 20th
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              National Fried Rice Day
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Celebrate with the best hibachi fried rice in DFW
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

        {/* Fun Banner */}
        <section className="py-4 bg-soft-gold text-charcoal">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>🍚 The unofficial holiday for fried rice lovers! 🍚</span>{" "}
              <span className="font-bold">Join us September 20th.</span>{" "}
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
                Not All Fried Rice Is Created Equal
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                At Jinbeh, our hibachi fried rice isn&apos;t just a side dish — it&apos;s a show-stopper.
                Watch our teppanyaki chefs work their magic on the sizzling grill, tossing
                perfectly seasoned rice with precision and flair. Since 1988, we&apos;ve been
                perfecting every grain.
              </p>
            </div>

            {/* What Makes It Special */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Made Tableside
                </h3>
                <p className="text-charcoal/70">
                  Our hibachi chefs prepare your fried rice right in front of you
                  on a 400°F teppanyaki grill. Fresh and hot!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  The Perfect Sear
                </h3>
                <p className="text-charcoal/70">
                  Day-old rice + screaming hot grill = that perfect slightly crispy,
                  smoky flavor you can&apos;t get at home.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🥢</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Secret Seasonings
                </h3>
                <p className="text-charcoal/70">
                  Butter, garlic, soy sauce, and our special blend of seasonings
                  perfected over 37 years.
                </p>
              </div>
            </div>

            {/* The Fried Rice Experience */}
            <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                The Jinbeh Fried Rice Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <ul className="space-y-4 text-white/90">
                    <li className="flex items-start gap-3">
                      <span className="text-soft-gold font-bold">1.</span>
                      <span>Day-old Japanese rice hits the sizzling 400°F grill</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-soft-gold font-bold">2.</span>
                      <span>Eggs are cracked and scrambled into the rice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-soft-gold font-bold">3.</span>
                      <span>Fresh vegetables are tossed in — onions, carrots, peas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-soft-gold font-bold">4.</span>
                      <span>Butter and our secret seasonings bring it all together</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-soft-gold font-bold">5.</span>
                      <span>The chef flips and tosses with impressive skill</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-soft-gold font-bold">6.</span>
                      <span>Served piping hot, directly from grill to plate</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/10 rounded-2xl p-6">
                    <p className="text-5xl mb-2">🍚</p>
                    <p className="text-soft-gold font-semibold">Included with every</p>
                    <p className="text-2xl font-bold">Hibachi Dinner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hibachi Combos */}
            <div className="bg-soft-gold/10 border border-soft-gold/30 rounded-2xl p-8 md:p-12 mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Best Hibachi Combos with Fried Rice
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <span className="text-3xl mb-3 block">🥩</span>
                  <h4 className="font-semibold text-charcoal mb-2">Filet Mignon</h4>
                  <p className="text-sm text-charcoal/70">Premium steak + fried rice perfection</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <span className="text-3xl mb-3 block">🍗</span>
                  <h4 className="font-semibold text-charcoal mb-2">Chicken Teriyaki</h4>
                  <p className="text-sm text-charcoal/70">Classic combo everyone loves</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <span className="text-3xl mb-3 block">🦐</span>
                  <h4 className="font-semibold text-charcoal mb-2">Shrimp & Scallops</h4>
                  <p className="text-sm text-charcoal/70">Seafood lovers&apos; dream</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <span className="text-3xl mb-3 block">🦞</span>
                  <h4 className="font-semibold text-charcoal mb-2">Lobster Tail</h4>
                  <p className="text-sm text-charcoal/70">The ultimate indulgence</p>
                </div>
              </div>
              <p className="text-center text-charcoal/70 mt-6">
                All hibachi dinners include fried rice, soup, salad, and grilled vegetables
              </p>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Fried Rice FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "When is National Fried Rice Day?",
                    a: "National Fried Rice Day is September 20th every year. It's the perfect day to celebrate with Jinbeh's famous hibachi fried rice!",
                  },
                  {
                    q: "What makes hibachi fried rice different?",
                    a: "Unlike regular fried rice, hibachi fried rice is cooked on a scorching hot teppanyaki grill right at your table. The high heat creates that signature smoky, slightly charred flavor you can't replicate at home.",
                  },
                  {
                    q: "Is fried rice included with hibachi dinners?",
                    a: "Yes! Every hibachi dinner at Jinbeh includes our famous fried rice, made fresh right at your table.",
                  },
                  {
                    q: "Can I customize my fried rice?",
                    a: "Ask your hibachi chef! We can often accommodate requests for extra garlic, less butter, or other modifications.",
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
                Celebrate National Fried Rice Day! 🍚
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Join us on September 20th (or any day!) for the best hibachi fried rice in DFW.
                Reserve your table and get ready for a feast!
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
              More Food Celebrations at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/asian-restaurant-month" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎌</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Asian Restaurant Month</span>
              </Link>
              <Link href="/celebrations/thanksgiving" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🦃</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Thanksgiving</span>
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
              <Link href="/frisco/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Frisco Hibachi</Link>
              <Link href="/lewisville/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Lewisville Hibachi</Link>
              <Link href="/menu" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Full Menu</Link>
              <Link href="/blog/hibachi-experience" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Hibachi Guide</Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Plano</Link>
              <Link href="/nearby/carrollton" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Carrollton</Link>
            </div>
          </div>
        </section>

        {/* Order Online */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Want Fried Rice at Home?
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              While hibachi fried rice is best enjoyed dine-in, you can order
              sushi and other favorites for delivery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-frisco-2693-preston-rd-frisco/2134962"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-6 py-3 rounded-xl font-semibold"
              >
                Order Frisco on GrubHub
              </a>
              <a
                href="https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-lewisville-2693-preston-rd-lewisville/2134962"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-6 py-3 rounded-xl font-semibold"
              >
                Order Lewisville on GrubHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
