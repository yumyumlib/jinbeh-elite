import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title:
    "Watch the FIFA World Cup 2026 in Frisco & Lewisville | Jinbeh Japanese Restaurant",
  description:
    "Watch the FIFA World Cup 2026 at Jinbeh Japanese Restaurant in Frisco and Lewisville TX. Hibachi, sushi, sake, and the perfect celebration for fans, families, and groups during the 39-day tournament.",
  keywords: [
    "world cup 2026 frisco",
    "world cup 2026 dfw",
    "watch world cup frisco tx",
    "world cup watch party dallas",
    "fifa world cup 2026 dallas",
    "att stadium world cup restaurant",
    "japan world cup watch party",
    "samurai blue dfw",
    "best place to watch world cup frisco",
    "world cup catering dfw",
    "world cup group dining frisco",
    "world cup celebration restaurant lewisville",
    "world cup hibachi dfw",
    "jinbeh world cup",
  ],
  openGraph: {
    title: "Watch the FIFA World Cup 2026 at Jinbeh | Frisco & Lewisville",
    description:
      "Hibachi, sushi, sake, and the perfect place to celebrate the FIFA World Cup 2026 in DFW. Family-friendly. Group-friendly. Open through the tournament.",
    url: "https://jinbeh.com/celebrations/world-cup",
    images: [
      {
        url: "https://jinbeh.com/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
        width: 1200,
        height: 630,
        alt: "Watch the FIFA World Cup 2026 at Jinbeh Japanese Restaurant in Frisco and Lewisville",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/world-cup",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the best place to watch the FIFA World Cup 2026 in Frisco TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Japanese Restaurant in Frisco is one of the best places in DFW to celebrate the FIFA World Cup 2026. Premium hibachi, fresh sushi, hot sake, and a family-friendly atmosphere make it a great match-day spot for fans, families, and groups. Reservations recommended on match days.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh open during the FIFA World Cup 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jinbeh is open at both our Frisco and Lewisville locations throughout the FIFA World Cup 2026 tournament. With AT&T Stadium in Arlington as a host venue, DFW is at the center of the World Cup, and we're ready to host fans before, after, and between matches.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh do World Cup catering for watch parties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jinbeh offers hibachi and sushi catering on presentation trays, perfect for World Cup watch parties at offices, homes, and group venues. Live hibachi shows are at the restaurant only. Please give us at least one week of notice for catering so we can plan menu, prep, and delivery details properly.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh family-friendly for World Cup match days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Jinbeh has welcomed DFW families since 1988. Hibachi tables are built for groups, kids love the tableside show, and our menu has options for every guest. It's a fun, family-friendly way to celebrate Japan's matches and the broader World Cup.",
      },
    },
  ],
};

export default function WorldCupPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav
          items={[
            { label: "Celebrations", href: "/celebrations" },
            { label: "FIFA World Cup 2026" },
          ]}
        />
      </div>
      <main id="main-content" className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-deep-indigo to-charcoal" />
          <Image
            src="/images/celebrations/jinbeh_group.jpg"
            alt="Group of friends celebrating at Jinbeh Japanese Restaurant in Frisco and Lewisville TX"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              June 11 – July 19, 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Watch the FIFA World Cup 2026 at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-warm-ivory/90 mb-8 max-w-3xl mx-auto">
              Hibachi flames, fresh sushi, hot sake, and the perfect place in DFW to
              celebrate the world&apos;s biggest tournament.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com/jinbeh-japanese-restaurant-reservations-frisco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve Frisco
              </a>
              <a
                href="https://www.opentable.com/jinbeh-lewisville"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve Lewisville
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                The Perfect Place to Watch the World Cup in DFW
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                The FIFA World Cup 2026 is coming to North America, with{" "}
                <strong>AT&amp;T Stadium</strong> in Arlington hosting matches throughout
                the tournament. That puts Dallas–Fort Worth at the center of the action.
                Whether you&apos;re flying in for a match, hosting friends in town, or
                gathering family for Japan&apos;s group-stage games, Jinbeh is the perfect
                place to celebrate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-soft-gold/30 mb-8">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                Why Jinbeh for the World Cup
              </h3>
              <ul className="space-y-3 text-charcoal/80 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Authentic Japanese hospitality</strong> at two convenient DFW
                    locations: <Link href="/frisco" className="text-accent-red hover:underline">Frisco</Link> and{" "}
                    <Link href="/lewisville" className="text-accent-red hover:underline">Lewisville</Link>.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Hibachi flames + tableside show</strong>: a celebration even
                    before the kickoff whistle.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Fresh sushi and sashimi</strong> by chefs who&apos;ve been
                    cutting fish at Jinbeh for nearly 30 years.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Hot and cold sake, Japanese whisky, and craft cocktails</strong>{" "}
                    to toast every goal.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Group-friendly seating</strong>: hibachi tables are built for
                    7–8, and we regularly host larger watch-party groups by joining
                    tables together.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>World Cup catering</strong> for office watch parties and home
                    gatherings. Hibachi and sushi delivered on presentation trays. Live
                    hibachi shows are at the restaurant only.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-charcoal/60 mt-5">
                Please give us at least one week of notice for catering so we can plan
                the menu, prep, and delivery properly.
              </p>
            </div>
          </div>
        </section>

        {/* Featured: Chioma Ubogagu */}
        <section className="py-16 md:py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-3">
                Featured Story
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Chioma Ubogagu Loves Jinbeh
              </h2>
              <p className="text-lg text-warm-ivory/85 leading-relaxed max-w-3xl mx-auto">
                Former U.S. Women&apos;s National Team and Nigeria international{" "}
                <strong>Chioma Ubogagu</strong> is one of many guests who&apos;ve made
                Jinbeh part of their DFW story. She loves the food, the atmosphere, and
                the family spirit, and we love seeing her stop by. With the FIFA World
                Cup 2026 right around the corner, her kind words mean even more.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/10">
              <p className="text-warm-ivory/90 leading-relaxed mb-5">
                See Chioma&apos;s featurette on Jinbeh, where she shares why this is one
                of her favorite spots in DFW. It&apos;s a small reminder of what makes
                Jinbeh feel like home to so many guests, whether you&apos;re a soccer fan,
                a sushi lover, a hibachi regular, or all of the above.
              </p>
              <a
                href="https://www.instagram.com/reels/DVmJ3XBjZch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-soft-gold text-charcoal px-6 py-3 rounded-xl font-semibold hover:bg-soft-gold/90 transition-colors"
              >
                Watch the Featurette on Instagram
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <p className="text-xs text-warm-ivory/60 mt-3">
                Opens on Instagram (instagram.com/reels/DVmJ3XBjZch/).
              </p>
            </div>
          </div>
        </section>

        {/* Match-day Planning */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Plan Your World Cup Match Day at Jinbeh
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                The 2026 tournament runs <strong>June 11 to July 19</strong>. With matches
                at AT&amp;T Stadium and watch parties across DFW, here&apos;s how to make
                Jinbeh part of your World Cup celebration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl mb-3">⚽</div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  Pre-Match Dinner
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Reserve a hibachi table 2–3 hours before kickoff. Premium steak, fresh
                  sushi, and a tableside show set the tone before the match.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl mb-3">🍣</div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  Watch-Party Catering
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Order Jinbeh sushi platters and hibachi catering for office and home
                  watch parties. We deliver on presentation trays. One week+ notice for
                  larger groups.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  Post-Match Celebration
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Win, lose, or draw, finish the night with sake, Japanese whisky, and a
                  late hibachi dinner. Reservations recommended on match days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Reserve Your World Cup Table
            </h2>
            <p className="text-warm-ivory/80 mb-6 max-w-2xl mx-auto">
              Match days fill up fast across DFW. Book early to lock in your seat at the
              hibachi table, sushi bar, or dining room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com/jinbeh-japanese-restaurant-reservations-frisco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-8 py-3 rounded-xl font-semibold"
              >
                Reserve Frisco
              </a>
              <a
                href="https://www.opentable.com/jinbeh-lewisville"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold"
              >
                Reserve Lewisville
              </a>
              <Link
                href="/catering"
                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-3 rounded-xl font-semibold"
              >
                World Cup Catering
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 bg-warm-ivory">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-6 text-center">
              More to Explore
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/celebrations"
                className="block p-6 bg-white rounded-2xl border border-charcoal/10 hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-charcoal">All Celebrations</p>
                <p className="text-sm text-charcoal/70 mt-2">
                  Birthdays, anniversaries, holidays, and group events at Jinbeh.
                </p>
              </Link>
              <Link
                href="/events"
                className="block p-6 bg-white rounded-2xl border border-charcoal/10 hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-charcoal">Group Events</p>
                <p className="text-sm text-charcoal/70 mt-2">
                  Coordinate large World Cup watch parties at our Frisco or Lewisville
                  location.
                </p>
              </Link>
              <Link
                href="/catering"
                className="block p-6 bg-white rounded-2xl border border-charcoal/10 hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-charcoal">Catering</p>
                <p className="text-sm text-charcoal/70 mt-2">
                  Sushi platters and hibachi catering for offices and home watch
                  parties.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
