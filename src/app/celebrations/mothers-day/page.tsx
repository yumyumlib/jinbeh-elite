import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mother's Day Dinner Frisco & Lewisville | Celebrate Mom | Jinbeh Japanese Restaurant",
  description: "Treat Mom to an unforgettable Mother's Day dinner at Jinbeh! Hibachi, sushi, and family-style Japanese dining in Frisco and Lewisville TX. Make reservations early!",
  keywords: [
    "mothers day dinner frisco",
    "mothers day restaurant frisco tx",
    "mothers day brunch lewisville",
    "mothers day hibachi",
    "family restaurant mothers day",
    "mothers day reservations frisco",
    "best mothers day restaurant",
    "mothers day sushi dinner",
  ],
  openGraph: {
    title: "Mother's Day Dinner | Celebrate Mom at Jinbeh",
    description: "Make Mother's Day special with hibachi, sushi, and family dining at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh open on Mother's Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both Jinbeh locations are open on Mother's Day for lunch and dinner. We highly recommend making reservations as this is one of our busiest days of the year.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make Mother's Day reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Mother's Day is our busiest day of the year. Call Frisco at (214) 618-9888 or Lewisville at (214) 618-9798 at least 1-2 weeks in advance to secure your table.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh good for families with kids on Mother's Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jinbeh is perfect for families. Kids love watching the hibachi chefs perform, and we have options for all ages. It's a celebration Mom and the whole family will enjoy.",
      },
    },
    {
      "@type": "Question",
      name: "What can I order for Mom at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular Mother's Day choices include hibachi filet mignon, lobster tail, sashimi platters, and specialty sushi rolls. Pair with sake or a signature cocktail to make it extra special.",
      },
    },
  ],
};

export default function MothersDayPage() {
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
            alt="Mother's Day sushi dinner celebration at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Celebrate Mom
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Mother&apos;s Day at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Give Mom the gift of an unforgettable dining experience
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
        <section className="py-4 bg-soft-gold text-charcoal">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>Mother&apos;s Day is our busiest day!</span>{" "}
              <span className="font-bold">Book early to celebrate Mom.</span>{" "}
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
                Show Mom How Much You Care
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                This Mother&apos;s Day, skip the crowded brunch spots and treat Mom to something
                truly special. At Jinbeh, we&apos;ve been hosting family celebrations since 1988 —
                because we know the best gift is quality time together over an amazing meal.
              </p>
            </div>

            {/* Why Moms Love Jinbeh */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Entertainment for Everyone
                </h3>
                <p className="text-charcoal/70">
                  Mom relaxes while the kids are captivated by our hibachi chefs&apos;
                  impressive skills and the famous onion volcano.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍣</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Fresh & Flavorful
                </h3>
                <p className="text-charcoal/70">
                  From premium sashimi to specialty rolls, our sushi is prepared
                  fresh daily by skilled chefs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Family-Friendly
                </h3>
                <p className="text-charcoal/70">
                  Kids menu available. Hibachi is the perfect family experience —
                  entertainment and dinner rolled into one.
                </p>
              </div>
            </div>

            {/* Menu Highlights */}
            <div className="bg-gradient-to-br from-deep-indigo to-charcoal rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Mother&apos;s Day Menu Favorites
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">For the Hibachi Lover</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Filet Mignon — tender, premium cut
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Lobster Tail — succulent and buttery
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Imperial Dinner — the ultimate combo
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">For the Sushi Enthusiast</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-deep-indigo bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Sashimi Deluxe — chef&apos;s selection
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-deep-indigo bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Rainbow Roll — colorful and fresh
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-deep-indigo bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Omakase — trust the chef
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
                Mother&apos;s Day FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "How far in advance should I book?",
                    a: "We recommend 1-2 weeks ahead for Mother's Day. It's our busiest day, and tables go quickly — especially for larger parties.",
                  },
                  {
                    q: "Can you accommodate large family groups?",
                    a: "Yes! Our hibachi tables seat groups perfectly. For parties of 8+, please call ahead so we can accommodate everyone together.",
                  },
                  {
                    q: "What if Mom has dietary restrictions?",
                    a: "Let us know when booking! We can accommodate many dietary needs. Our sushi and hibachi menus offer plenty of options.",
                  },
                  {
                    q: "Do you have a kids menu?",
                    a: "Yes! We have kid-friendly options on our menu. Hibachi is especially popular with children who love the show.",
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
                Reserve Mom&apos;s Table Today
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Give Mom the celebration she deserves. Book your Mother&apos;s Day table now
                before they&apos;re all gone!
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
              More Family Celebrations at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/fathers-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">👔</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Father&apos;s Day</span>
              </Link>
              <Link href="/celebrations/valentines-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">💕</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Valentine&apos;s Day</span>
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
              <Link href="/menu/sashimi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sashimi Deluxe</Link>
              <Link href="/menu/specialty-rolls" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Specialty Rolls</Link>
              <Link href="/private-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Private Dining</Link>
              <Link href="/gift-cards" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Gift Cards</Link>
              <Link href="/nearby/mckinney" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near McKinney</Link>
            </div>
          </div>
        </section>

        {/* Gift Card Suggestion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Can&apos;t Make It on Mother&apos;s Day?
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Give Mom a Jinbeh gift card so she can celebrate whenever she&apos;d like.
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
