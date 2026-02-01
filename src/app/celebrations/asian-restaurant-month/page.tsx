import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Asian Restaurant Month | May AAPI Heritage Month | Jinbeh Japanese Restaurant Frisco & Lewisville",
  description: "Celebrate Asian Restaurant Month this May at Jinbeh! Support Asian-owned restaurants during AAPI Heritage Month. Hibachi, sushi, and authentic Japanese dining in Frisco and Lewisville TX.",
  keywords: [
    "asian restaurant month",
    "aapi heritage month restaurant frisco",
    "asian owned restaurant frisco tx",
    "may asian restaurant month",
    "support asian restaurants",
    "japanese restaurant frisco",
    "asian food month",
    "asian american heritage month dining",
  ],
  openGraph: {
    title: "Asian Restaurant Month | Celebrate AAPI Heritage at Jinbeh",
    description: "Support Asian-owned restaurants this May! Hibachi, sushi, and 37 years of family tradition at Jinbeh. Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Asian Restaurant Month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asian Restaurant Month is celebrated in May during Asian American and Pacific Islander (AAPI) Heritage Month. It encourages people to discover and support Asian-owned restaurants and celebrate the rich culinary traditions of Asian cultures.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh an Asian-owned restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jinbeh Japanese Restaurant has been family-owned and operated since 1988. We've been serving authentic Japanese cuisine in the DFW area for over 37 years.",
      },
    },
    {
      "@type": "Question",
      name: "How can I support Asian restaurants during AAPI Heritage Month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dine in, order takeout, leave positive reviews, and spread the word! Every meal at an Asian-owned restaurant supports the community. Consider trying new dishes or bringing friends and family.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Jinbeh's Japanese cuisine authentic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our hibachi chefs are trained in traditional teppanyaki techniques, and our sushi is prepared fresh daily using authentic methods. We've maintained our commitment to quality Japanese cuisine for over three decades.",
      },
    },
  ],
};

export default function AsianRestaurantMonthPage() {
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
            src="/images/food/SamaraiRollCloseup.jpg"
            alt="Celebrate Asian Restaurant Month at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              May • AAPI Heritage Month
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Asian Restaurant Month
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Celebrate Asian-owned restaurants and 37 years of family tradition
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
        </section>

        {/* Banner */}
        <section className="py-4 bg-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>🎌 Family-owned since 1988 • Proudly serving the DFW community for 37 years 🎌</span>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-charcoal font-heading font-bold mb-6">
                Celebrate Our Heritage, Support Our Community
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                May is Asian American and Pacific Islander (AAPI) Heritage Month — and it&apos;s also
                Asian Restaurant Month! This is the perfect time to discover, support, and celebrate
                Asian-owned restaurants like Jinbeh. Since 1988, we&apos;ve been bringing authentic
                Japanese cuisine and warm hospitality to Frisco and Lewisville.
              </p>
            </div>

            {/* Our Story */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-accent-red font-medium text-sm tracking-wider uppercase">Our Story</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mt-2 mb-4">
                    37 Years of Family Tradition
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Jinbeh Japanese Restaurant opened its doors in 1988 with a simple mission:
                    to share authentic Japanese cuisine and the art of hibachi with our community.
                    Three decades later, we&apos;re still family-owned and operated, still committed
                    to quality, and still grateful for every guest who chooses to dine with us.
                  </p>
                  <p className="text-charcoal/70">
                    When you dine at Jinbeh, you&apos;re not just enjoying a meal — you&apos;re supporting
                    a family business and a rich culinary tradition.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-warm-ivory rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-accent-red">1988</p>
                    <p className="text-charcoal/70 text-sm">Founded</p>
                  </div>
                  <div className="bg-warm-ivory rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-accent-red">37</p>
                    <p className="text-charcoal/70 text-sm">Years Strong</p>
                  </div>
                  <div className="bg-warm-ivory rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-accent-red">2</p>
                    <p className="text-charcoal/70 text-sm">Locations</p>
                  </div>
                  <div className="bg-warm-ivory rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-accent-red">1000s</p>
                    <p className="text-charcoal/70 text-sm">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Support Asian Restaurants */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍱</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Authentic Cuisine
                </h3>
                <p className="text-charcoal/70">
                  Experience true Japanese flavors passed down through generations —
                  not imitations, but authentic techniques and recipes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Support Families
                </h3>
                <p className="text-charcoal/70">
                  Your meal supports real families, local jobs, and community
                  businesses — not corporate shareholders.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌏</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Celebrate Culture
                </h3>
                <p className="text-charcoal/70">
                  Food is culture. Dining at Asian restaurants celebrates and
                  preserves rich culinary traditions.
                </p>
              </div>
            </div>

            {/* Ways to Celebrate */}
            <div className="bg-gradient-to-br from-deep-indigo to-charcoal rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Ways to Celebrate Asian Restaurant Month
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Dine With Us</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Bring family and friends for hibachi
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Try something new from our sushi menu
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Celebrate special occasions with us
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Order takeout for a cozy night in
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Spread the Word</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Leave us a Google or OpenTable review
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Share your experience on social media
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Recommend us to friends and coworkers
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">✓</span>
                      Gift Jinbeh gift cards to loved ones
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Options */}
            <div className="bg-soft-gold/10 border border-soft-gold/30 rounded-2xl p-8 md:p-12 mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Experience Japanese Culture at Jinbeh
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">🔥</span>
                    <h4 className="font-semibold text-charcoal text-xl">Hibachi Teppanyaki</h4>
                  </div>
                  <p className="text-charcoal/70 mb-4">
                    The art of teppanyaki — watch skilled chefs prepare your meal tableside
                    with impressive knife skills and showmanship.
                  </p>
                  <Link href="/menu" className="text-accent-red font-semibold hover:underline">
                    View Hibachi Menu →
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">🍣</span>
                    <h4 className="font-semibold text-charcoal text-xl">Fresh Sushi</h4>
                  </div>
                  <p className="text-charcoal/70 mb-4">
                    Traditional sushi craftsmanship — fresh fish, hand-pressed rice, and
                    beautiful presentation.
                  </p>
                  <Link href="/menu" className="text-accent-red font-semibold hover:underline">
                    View Sushi Menu →
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Asian Restaurant Month FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "What is Asian Restaurant Month?",
                    a: "Asian Restaurant Month is celebrated in May during AAPI Heritage Month. It encourages people to discover and support Asian-owned restaurants.",
                  },
                  {
                    q: "How long has Jinbeh been in business?",
                    a: "Jinbeh has been family-owned and operated since 1988 — that's over 37 years of serving authentic Japanese cuisine to the DFW community!",
                  },
                  {
                    q: "What makes hibachi a unique cultural experience?",
                    a: "Hibachi (teppanyaki) is a Japanese culinary art form where skilled chefs cook on a flat iron griddle right at your table. It combines culinary expertise with entertainment and brings people together.",
                  },
                  {
                    q: "How else can I support Asian restaurants?",
                    a: "Beyond dining in, you can order takeout/delivery, leave positive reviews, share on social media, recommend to friends, and purchase gift cards.",
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
                Celebrate With Us This May
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Support Asian-owned restaurants during AAPI Heritage Month.
                Reserve your table at Jinbeh and experience 37 years of family tradition!
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
              <Link href="/celebrations/mid-autumn-festival" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🌕</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Mid-Autumn Festival</span>
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
              <Link href="/frisco" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Frisco Location</Link>
              <Link href="/lewisville" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Lewisville Location</Link>
              <Link href="/menu" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Full Menu</Link>
              <Link href="/about" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Our Story</Link>
              <Link href="/gift-cards" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Gift Cards</Link>
              <Link href="/blog" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Blog</Link>
            </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Already a Jinbeh Fan? ⭐
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Your review helps other families discover us! Share your Jinbeh experience on Google or OpenTable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/jinbeh-frisco/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold"
              >
                Review Frisco on Google
              </a>
              <a
                href="https://g.page/r/jinbeh-lewisville/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold"
              >
                Review Lewisville on Google
              </a>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
