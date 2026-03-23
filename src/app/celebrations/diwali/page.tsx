import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diwali Dinner Frisco & Lewisville | Festival of Lights Celebration | Jinbeh Japanese Restaurant",
  description: "Celebrate Diwali at Jinbeh! Mark the Festival of Lights with hibachi flames and family dining in Frisco and Lewisville TX. Gather with loved ones for a festive meal!",
  keywords: [
    "diwali dinner frisco",
    "diwali restaurant frisco tx",
    "festival of lights dinner lewisville",
    "diwali celebration restaurant",
    "diwali family dinner frisco",
    "where to eat diwali frisco",
    "diwali reservations",
    "asian restaurant diwali",
  ],
  openGraph: {
    title: "Diwali Dinner | Festival of Lights at Jinbeh",
    description: "Celebrate Diwali with hibachi flames and family at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/diwali",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh a good place to celebrate Diwali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! While we're a Japanese restaurant, Diwali is a celebration of light, family, and new beginnings — and our hibachi flames create a perfect festive atmosphere. Many families choose Jinbeh for Diwali dinners to gather with loved ones over a special meal.",
      },
    },
    {
      "@type": "Question",
      name: "When is Diwali 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diwali 2026 (Festival of Lights) falls on November 8-12, 2026, with the main celebration on November 8th. The festival typically lasts five days.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make Diwali reservations at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend making reservations for Diwali celebrations, especially for larger family groups. Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh have vegetarian options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer vegetarian hibachi with tofu and fresh vegetables, vegetable sushi rolls, edamame, and other vegetarian-friendly options. Please let your server know about any dietary requirements.",
      },
    },
  ],
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Celebrations", "item": "https://jinbeh.com/celebrations" },
    { "@type": "ListItem", "position": 3, "name": "Diwali" },
  ],
};
export default function DiwaliPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-warm-ivory" />
          <Image
            src="/images/food/OnionVolcanoDemo.jpg"
            alt="Diwali celebration with hibachi flames at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Festival of Lights
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Diwali at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Let the flames of celebration bring your family together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com/jinbeh-japanese-restaurant-reservations-frisco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve Frisco
              </a>
              <a
                href="https://www.opentable.com/jinbeh-lewisville"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Reserve Lewisville
              </a>
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-4 bg-soft-gold text-charcoal">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>🪔 Celebrate Diwali with family! 🪔</span>{" "}
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
                A Festival of Light, Family & Flavor
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                Diwali celebrates the triumph of light over darkness, knowledge over ignorance,
                and good over evil. What better way to honor this festival than gathering
                around the hibachi table, watching flames dance, and sharing a meal with
                loved ones? At Jinbeh, we welcome all celebrations of family and togetherness.
              </p>
            </div>

            {/* Why Jinbeh for Diwali */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Flames of Celebration
                </h3>
                <p className="text-charcoal/70">
                  Our hibachi flames create a festive atmosphere perfect for
                  the Festival of Lights. The onion volcano is a crowd favorite!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Family Gathering
                </h3>
                <p className="text-charcoal/70">
                  Hibachi tables bring families together around a shared experience.
                  Perfect for multi-generational celebrations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🥗</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Vegetarian Options
                </h3>
                <p className="text-charcoal/70">
                  We offer vegetarian hibachi with tofu and vegetables,
                  plus vegetable sushi rolls and more.
                </p>
              </div>
            </div>

            {/* Menu Options */}
            <div className="bg-gradient-to-br from-deep-indigo to-charcoal rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Diwali Feast Options
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Hibachi Selections</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Vegetable & Tofu Hibachi — fresh and flavorful
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Hibachi Shrimp — fresh seafood delight
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Filet Mignon — premium celebration cut
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Lobster Tail — festive and indulgent
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Sushi & More</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Vegetable Rolls — cucumber, avocado, asparagus
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Edamame — classic appetizer
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Miso Soup — warm and comforting
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-soft-gold">✓</span>
                      Fresh Sashimi — for seafood lovers
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
                Diwali Dining FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "When is Diwali 2026?",
                    a: "Diwali 2026 falls on November 8-12, with the main celebration on November 8th. We welcome families celebrating throughout the festival period!",
                  },
                  {
                    q: "Do you have vegetarian options?",
                    a: "Yes! We offer vegetarian hibachi with tofu and fresh vegetables, vegetable sushi rolls, edamame, miso soup, and more. Let your server know about any dietary requirements.",
                  },
                  {
                    q: "Can you accommodate large family groups?",
                    a: "Absolutely! Our hibachi tables are perfect for family gatherings. For parties of 8+, please call ahead so we can seat everyone together.",
                  },
                  {
                    q: "Is hibachi a good choice for Diwali?",
                    a: "Yes! The flames and entertainment create a festive atmosphere perfect for celebrating the Festival of Lights. Families love gathering around the hibachi table.",
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
                Celebrate Diwali at Jinbeh 🪔
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Gather your family for a festive meal! Reserve your Diwali celebration table today.
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
              <Link href="/menu" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Vegetarian Options</Link>
              <Link href="/private-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Private Dining</Link>
              <Link href="/nearby/flower-mound" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Flower Mound</Link>
              <Link href="/nearby/highland-village" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Highland Village</Link>
            </div>
          </div>
        </section>

        {/* Gift Card CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Share the Gift of Good Food
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Jinbeh gift cards make a thoughtful Diwali gift for family and friends!
            </p>
            <Link
              href="/gift-cards"
              className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg inline-block"
            >
              Shop Gift Cards
            </Link>
          </div>
        </section>

        {/* Related Blog Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">
              Celebrate Diwali Over Great Food
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/group-dining-venues" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Venues</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  Best Group Dining Venues in DFW
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Gather your friends and family for a festive Diwali dinner together.</p>
              </Link>
              <Link href="/blog/japanese-cocktails" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Cocktails</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  Japanese Cocktails: Classic & Creative
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Toast to the festival of lights with one of our signature cocktails.</p>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
