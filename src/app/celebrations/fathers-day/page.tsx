import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Father's Day Dinner Frisco & Lewisville | Treat Dad | Jinbeh Japanese Restaurant",
  description: "Celebrate Father's Day at Jinbeh! Hibachi steak, sushi, and Japanese dining Dad will love. Frisco and Lewisville TX locations. Make reservations for Dad's special day!",
  keywords: [
    "fathers day dinner frisco",
    "fathers day restaurant frisco tx",
    "fathers day dinner lewisville",
    "fathers day hibachi",
    "fathers day steak dinner",
    "fathers day reservations frisco",
    "best fathers day restaurant",
    "fathers day sushi dinner",
  ],
  openGraph: {
    title: "Father's Day Dinner | Treat Dad at Jinbeh",
    description: "Make Father's Day special with hibachi steak, sushi, and Japanese craft beer at Jinbeh. Two locations in Frisco & Lewisville.",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/fathers-day",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh open on Father's Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both Jinbeh locations are open on Father's Day for lunch and dinner. We recommend making reservations as Father's Day is one of our busiest days.",
      },
    },
    {
      "@type": "Question",
      name: "Should I make Father's Day reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely! Father's Day is very popular. Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224 at least 1-2 weeks in advance to secure your table.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best thing to order for Dad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dads love our hibachi filet mignon, NY strip steak, and lobster tail combos. For sushi fans, try the sashimi deluxe or chef's omakase. Pair with Japanese beer or sake for the full experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh good for the whole family on Father's Day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Hibachi is the perfect family experience — Dad gets his steak, kids love the show, and everyone has fun together. We have a kids menu and family-friendly atmosphere.",
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
    { "@type": "ListItem", "position": 3, "name": "Fathers Day" },
  ],
};
export default function FathersDayPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-ivory">
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
            src="/images/photoshoot/hibachi-steak.jpg"
            alt="Father's Day hibachi steak dinner at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Celebrate Dad
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Father&apos;s Day at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Give Dad the gift of great steak, good times, and family memories
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

        {/* Urgency Banner */}
        <section className="py-4 bg-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="font-medium">
              <span>Father&apos;s Day tables go fast!</span>{" "}
              <span className="font-bold">Book early to treat Dad right.</span>{" "}
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
                Dad Deserves the Best
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
                This Father&apos;s Day, skip the same old steakhouse routine. At Jinbeh, Dad gets
                premium steak with a show — sizzling hibachi action, masterful knife skills, and
                the famous onion volcano. We&apos;ve been celebrating dads since 1988.
              </p>
            </div>

            {/* Why Dads Love Jinbeh */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🥩</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Premium Cuts
                </h3>
                <p className="text-charcoal/70">
                  Filet mignon, NY strip, ribeye — cooked to perfection right
                  at Dad&apos;s table by our skilled hibachi chefs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  The Full Show
                </h3>
                <p className="text-charcoal/70">
                  Flaming onion volcanoes, flying shrimp, impressive knife skills —
                  entertainment the whole family will enjoy.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍺</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  Beer, Sake & More
                </h3>
                <p className="text-charcoal/70">
                  Japanese craft beers, premium sake, and cocktails. Dad can
                  relax and enjoy while the chef handles dinner.
                </p>
              </div>
            </div>

            {/* Menu Highlights for Dad */}
            <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-8 md:p-12 text-white mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Father&apos;s Day Favorites
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">Hibachi Highlights</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Filet Mignon — Dad&apos;s favorite cut
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      NY Strip — classic steakhouse quality
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Surf & Turf — steak + lobster combo
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent-red">★</span>
                      Imperial Dinner — the works
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-soft-gold mb-4 text-lg">For the Sushi Dad</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Sashimi Deluxe — fresh cuts
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Samurai Roll — signature roll
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Omakase — chef&apos;s choice
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-white bg-accent-red/80 rounded-full w-5 h-5 flex items-center justify-center text-xs">★</span>
                      Sake flight — perfect pairing
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

            {/* Family-Friendly Note */}
            <div className="bg-soft-gold/10 border border-soft-gold/30 rounded-2xl p-8 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">👨‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                    The Whole Family Is Welcome
                  </h3>
                  <p className="text-charcoal/70">
                    Father&apos;s Day at Jinbeh is a family affair! Kids love watching the hibachi
                    chefs perform, and we have kid-friendly menu options. It&apos;s the perfect way
                    for everyone to celebrate Dad together.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal text-center mb-8">
                Father&apos;s Day FAQ
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: "How far in advance should I book for Father's Day?",
                    a: "We recommend 1-2 weeks ahead. Father's Day is very popular for hibachi reservations, especially for larger family groups.",
                  },
                  {
                    q: "Can you accommodate large family groups?",
                    a: "Yes! Our hibachi tables are great for families. For parties of 8 or more, please call ahead so we can seat everyone together.",
                  },
                  {
                    q: "What if Dad isn't into raw fish?",
                    a: "No problem! Our hibachi menu features steak, chicken, shrimp, and scallops — all cooked to order. There's plenty for everyone.",
                  },
                  {
                    q: "Do you have a kids menu?",
                    a: "Yes! We have kid-friendly hibachi options. The little ones love watching the chef's show while enjoying their meal.",
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
                Reserve Dad&apos;s Table Today
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Give Dad the celebration he deserves. Book your Father&apos;s Day table now
                before they&apos;re all gone!
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
              More Family Celebrations at Jinbeh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/mothers-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">💐</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Mother&apos;s Day</span>
              </Link>
              <Link href="/celebrations/birthday" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎂</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Birthday</span>
              </Link>
              <Link href="/celebrations/graduation" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎓</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Graduation</span>
              </Link>
              <Link href="/celebrations" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all">
                <span className="text-2xl mb-2 block">🎉</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">All Celebrations</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
              <Link href="/frisco/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Frisco Hibachi</Link>
              <Link href="/menu" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Hibachi Steak</Link>
              <Link href="/frisco/cocktails" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sake & Beer</Link>
              <Link href="/private-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Private Dining</Link>
              <Link href="/gift-cards" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Gift Cards</Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Plano</Link>
            </div>
          </div>
        </section>

        {/* Gift Card Suggestion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Not Sure What Dad Wants?
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Give Dad a Jinbeh gift card and let him choose his own celebration.
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
              Father's Day Dining Ideas
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/hibachi-dining-experience" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Hibachi</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  The Hibachi Dining Experience
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Give dad the full tableside show — flames, knife tricks, and premium steak.</p>
              </Link>
              <Link href="/blog/japanese-whiskey-guide" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Drinks</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  Japanese Whiskey Guide: Top Bottles
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Pair his meal with world-class Japanese whiskey at the bar.</p>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
