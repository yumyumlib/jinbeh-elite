import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Japan World Cup 2026 in DFW — Watch Samurai Blue at Jinbeh Frisco | Japan's Table in Texas",
  description:
    "Watch the FIFA World Cup 2026 at Jinbeh, DFW's family-owned Japanese restaurant since 1988, 3 miles from Toyota Stadium (Japan's base camp). Matches on our screens June 11 to July 19, hibachi and sushi at your table. Reserve in Frisco or Lewisville.",
  keywords: [
    "japan world cup 2026 dallas",
    "japan world cup watch party frisco",
    "where to watch japan world cup dallas",
    "samurai blue dallas",
    "japanese restaurant near toyota stadium",
    "japanese restaurant near att stadium",
    "restaurants near toyota stadium",
    "restaurants near att stadium",
    "restaurants near att stadium arlington",
    "where to eat near toyota stadium frisco",
    "world cup dinner reservation frisco",
    "fifa world cup 2026 dfw",
    "japan world cup schedule att stadium",
    "japan base camp toyota stadium frisco",
  ],
  openGraph: {
    title: "Japan's Table in Texas — World Cup 2026 at Jinbeh",
    description:
      "Watch Samurai Blue at the FIFA World Cup 2026, June 11 to July 19. Three miles from Toyota Stadium, Japan's base camp. Reserve your table in Frisco or Lewisville.",
    url: "https://jinbeh.com/world-cup-2026",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/jinbeh-hibachi-sushi-feast-frisco-lewisville.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — World Cup 2026 — Japan's Table in Texas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA World Cup 2026 Watch Parties at Jinbeh | Frisco & Lewisville TX",
    description: "Catch every World Cup match at Jinbeh. Japanese food, drinks, and the best atmosphere in DFW for the FIFA World Cup 2026.",
  },
  alternates: {
    canonical: "https://jinbeh.com/world-cup-2026",
  },
};

const matches = [
  {
    date: "Reserve early for the big match days",
    teams: "Watch at Jinbeh Frisco",
    time: "Matches on screens throughout the dining room",
    venue: "3 miles from Toyota Stadium, Japan's base camp",
    badge: "FRISCO",
  },
  {
    date: "Reserve early for the big match days",
    teams: "Watch at Jinbeh Lewisville",
    time: "Matches on screens throughout the dining room",
    venue: "Easy access from I-35E, near Vista Ridge Mall",
    badge: "LEWISVILLE",
  },
];

const sashimiCuts = [
  { i: "🐟", n: "Tuna", jp: "Maguro" },
  { i: "🍣", n: "Salmon", jp: "Sake" },
  { i: "🟡", n: "Yellowtail", jp: "Hamachi" },
];


const faqs = [
  {
    q: "Is Jinbeh near Toyota Stadium?",
    a: "Yes — Jinbeh Frisco is less than 3 miles from Toyota Stadium, the FIFA-designated Japan base camp for the 2026 World Cup. We're at 2693 Preston Road in Frisco; the stadium is at 9200 World Cup Way.",
  },
  {
    q: "Where can I watch the Japan World Cup game in Frisco?",
    a: "Jinbeh Frisco has multiple TVs throughout the dining room tuned to tournament matches all through the World Cup window, June 11 to July 19, 2026. Reserve a table for the big match days to guarantee seating, since walk-ins on match day are unlikely to find a table. Jinbeh Lewisville shows the matches too.",
  },
  {
    q: "What's the Samurai Blue Special at Jinbeh?",
    a: "Our Sashimi Combination ($42) — 15 pieces of premium sashimi (tuna, salmon, yellowtail), served with miso soup and house salad. Complimentary edamame is included during the World Cup window (June 11 – July 19, 2026). Available dine-in at both locations.",
  },
  {
    q: "How far is Jinbeh from AT&T Stadium?",
    a: "Jinbeh Frisco is 42 miles north of AT&T Stadium (about 45 minutes in normal traffic). Jinbeh Lewisville is 32 miles north (about 35 minutes). Both make ideal pre-match dinner or post-match celebration destinations.",
  },
  {
    q: "When are the World Cup matches at AT&T Stadium?",
    a: "AT&T Stadium in Arlington hosts World Cup matches throughout the tournament, June 11 through July 19, 2026. Check the official FIFA schedule for exact dates and kickoff times, then reserve your Jinbeh table for the days you want to watch.",
  },
  {
    q: "Does Jinbeh deliver during the World Cup?",
    a: "Delivery is available by inquiry only during the tournament window, within 10 miles of each location, with advance notice required. Minimum order is 10 entrees and a $35 delivery fee applies. Call (214) 619-1200 (Frisco) or (214) 488-2224 (Lewisville) to check availability. We do not perform offsite hibachi shows.",
  },
  {
    q: "What restaurants will be busy during the World Cup in Dallas?",
    a: "Expect Arlington restaurants packed on match days, Frisco filling up around Japan match days and base-camp training sessions at Toyota Stadium, and Dallas restaurants near Fair Park busy throughout the Fan Festival window. Jinbeh recommends reservations at least 7 days in advance for the big match days.",
  },
  {
    q: "Where is the FIFA Fan Festival in Dallas and where should I eat before going?",
    a: "Jinbeh is an easy pre-festival stop on your way to Fair Park, where the free Dallas FIFA Fan Festival runs June 11 through July 19 with giant screens, concerts, and food courts. Fair Park gets long, hot, and crowded, so start with a hibachi lunch or early dinner at Jinbeh Frisco or Lewisville first, or grab sushi platters and bento to take with you.",
  },
  {
    q: "Why watch the World Cup at Jinbeh instead of a sports bar?",
    a: "Jinbeh gives you the match on screens throughout the room plus a hibachi chef performing at your own table and authentic Japanese food, which makes a Japan match a celebration instead of just a game on a TV. Family-owned since 1988, three miles from Japan's Toyota Stadium base camp, and rated 4.2 to 4.8 across 1,600-plus reviews.",
  },
];

// JSON-LD schema blocks
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Japan's Table in Texas: Watch Samurai Blue at the FIFA World Cup 2026",
  description:
    "Watch Japan at the FIFA World Cup 2026 from DFW's Japanese restaurant — 3 miles from Toyota Stadium, the official Japan base camp.",
  author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
  publisher: {
    "@type": "Organization",
    name: "Jinbeh Japanese Restaurant",
    logo: {
      "@type": "ImageObject",
      url: "https://jinbeh.com/images/logos/jinbeh-logo-dark.png",
    },
  },
  datePublished: "2026-05-30",
  dateModified: "2026-06-20",
  mainEntityOfPage: "https://jinbeh.com/world-cup-2026",
};


const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};


const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Jinbeh Japanese Restaurant — Frisco",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2693 Preston Rd Suite 1040",
    addressLocality: "Frisco",
    addressRegion: "TX",
    postalCode: "75034",
  },
  telephone: "+1-214-619-1200",
  url: "https://jinbeh.com/frisco",
  servesCuisine: "Japanese",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jinbeh.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "World Cup 2026",
      item: "https://jinbeh.com/world-cup-2026",
    },
  ],
};

const allSchemas = [
  articleSchema,
  faqPageSchema,
  restaurantSchema,
  breadcrumbSchema,
];

export default function WorldCup2026Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* JSON-LD schema (SSR for AI crawler citation) */}
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Hero — Samurai Blue gradient */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-deep-indigo to-charcoal" />
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/photoshoot/jinbeh-hibachi-sushi-feast-frisco-lewisville.jpg"
              alt="Japan World Cup 2026 Dallas at Jinbeh Japanese restaurant"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl text-white">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              🇯🇵 FIFA World Cup 2026 · June 11 – July 19
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Japan&apos;s Table in Texas: Watch Samurai Blue at the FIFA World
              Cup 2026
            </h1>
            <p className="text-xl text-white/85 mb-6 leading-relaxed">
              The FIFA World Cup 2026 is here, running June 11 through July 19,
              and it brings Japan to North Texas. Samurai Blue&apos;s official
              base camp is at Toyota Stadium in Frisco, less than 3 miles from
              Jinbeh Frisco, with tournament matches at AT&amp;T Stadium in
              Arlington. Jinbeh, family-owned Japanese in Frisco and Lewisville
              since 1988, is where Japanese fans, visiting families, and Texas
              soccer lovers gather to watch the matches, eat real Japanese food,
              and celebrate together. This is Japan&apos;s table in Texas.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US"
                className="inline-flex items-center gap-2 bg-soft-gold text-charcoal font-semibold px-6 py-3 rounded-full hover:bg-soft-gold/90 transition"
              >
                🇯🇵 Reserve Frisco
              </Link>
              <Link
                href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white font-semibold px-6 py-3 rounded-full hover:bg-white/25 transition border border-white/30"
              >
                Reserve Lewisville
              </Link>
            </div>
          </div>
        </section>

        {/* June 25 Announcement — Chioma Ubogagu Watch Party */}
        <section className="py-12 bg-accent-red text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <span className="text-white/90 text-sm tracking-[0.3em] uppercase mb-3 block font-medium">
              Special Event &middot; Thursday, June 25
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Japan Watch Party with Chioma Ubogagu
            </h2>
            <p className="text-white/90 leading-relaxed max-w-2xl mx-auto mb-6">
              Coppell&apos;s own pro soccer star Chioma Ubogagu joins us in person at our
              Lewisville location for Japan&apos;s World Cup match. Both Frisco and Lewisville
              host the watch party on two big screens, with a halftime giveaway of signed
              merchandise at each location. Party at 5PM, Japan kicks off at 6PM.
            </p>
            <Link
              href="/celebrations/world-cup-watch-party"
              className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-3 rounded-xl font-semibold"
            >
              See watch party details
            </Link>
          </div>
        </section>

        {/* Match Schedule */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-accent-red font-medium tracking-wider uppercase mb-2 text-sm">
                Watch With Us · Both Locations
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                Catch Every World Cup Match at Jinbeh
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {matches.map((m) => (
                <div
                  key={m.date}
                  className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-700"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-700 text-white mb-3">
                    {m.badge}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                    {m.teams}
                  </h3>
                  <p className="text-lg text-charcoal/80 font-medium mb-1">
                    {m.date}
                  </p>
                  <p className="text-xl text-accent-red font-bold mb-3">
                    {m.time}
                  </p>
                  <p className="text-charcoal/70 text-sm">📍 {m.venue}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal/70 text-sm italic mt-8 max-w-2xl mx-auto">
              The tournament runs June 11 through July 19. Match days fill our
              dining rooms fast, so reserve your table early to guarantee seating
              for the games you want to watch. Check the official FIFA schedule
              for exact kickoff times.
            </p>
          </div>
        </section>

        {/* Full Dallas match schedule (all 9 at AT&T Stadium) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-accent-red font-medium tracking-wider uppercase mb-2 text-sm">
                Pre-Match & Post-Match Dining
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                World Cup Matches at AT&amp;T Stadium in Arlington
              </h2>
              <p className="text-charcoal/70 mt-3 max-w-2xl mx-auto">
                AT&amp;T Stadium in Arlington is one of the tournament&apos;s
                Dallas host venues, drawing fans from across the world through
                July 19. Make Jinbeh your pre-match dinner or your post-match
                celebration. We&apos;re an easy drive north, with hibachi and
                fresh sushi waiting after the final whistle.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-warm-ivory rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🍱</div>
                <h3 className="font-heading font-bold text-charcoal mb-2">Before the Match</h3>
                <p className="text-charcoal/70 text-sm">Start with a hibachi lunch or early dinner, then head to the stadium. Ask about sushi platters and bento to take with you.</p>
              </div>
              <div className="bg-warm-ivory rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">📺</div>
                <h3 className="font-heading font-bold text-charcoal mb-2">During the Match</h3>
                <p className="text-charcoal/70 text-sm">Can&apos;t make it to Arlington? Watch on our screens with a hibachi chef cooking at your table. Reserve early for the big match days.</p>
              </div>
              <div className="bg-warm-ivory rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="font-heading font-bold text-charcoal mb-2">After the Match</h3>
                <p className="text-charcoal/70 text-sm">Keep the celebration going with sake, sushi, and the full hibachi show. Groups of 8 or more, book ahead.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US" className="btn bg-accent-red text-white hover:bg-deep-indigo px-6 py-3 font-semibold rounded-full transition-colors">Reserve Frisco</Link>
              <Link href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US" className="btn bg-charcoal text-white hover:bg-deep-indigo px-6 py-3 font-semibold rounded-full transition-colors">Reserve Lewisville</Link>
              <Link href="/catering" className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/80 px-6 py-3 font-semibold rounded-full transition-colors">Catering for Watch Parties</Link>
            </div>
          </div>
        </section>

        {/* FIFA Fan Festival at Fair Park */}
        <section className="py-16 bg-gradient-to-br from-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-2 text-sm">
              Fair Park · June 11 – July 19
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Headed to the FIFA Fan Festival? Fuel Up at Jinbeh First
            </h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Dallas turns Fair Park into the official FIFA Fan Festival for all
                39 days of the tournament. It is free, it holds up to 35,000 fans
                at a time, and it stacks giant viewing screens, mini-pitches, food
                courts, and a concert series that runs from the Latin Legacy Tour
                on June 28 to Major Lazer on July 9. On a big match day, organizers
                expect six figures of foot traffic.
              </p>
              <p>
                A day at the Fan Festival is long, loud, and hot. Start it with a
                real meal. Jinbeh sits in the northern DFW corridor between the
                Frisco base camp and the Dallas fan zone, so a hibachi lunch or an
                early dinner before you head south to Fair Park beats waiting in a
                concession line in the Texas sun. Going as a group? Reserve a
                hibachi table and let the chef put on the first show of your day.
              </p>
              <p className="text-white/80">
                Can&apos;t sit down? Ask about grab-and-go sushi platters and bento
                to take with you. Order options vary by location and date —
                call ahead so the kitchen can have it ready.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/reservations"
                className="btn bg-soft-gold text-charcoal hover:bg-white px-8 py-4 font-semibold text-center transition-all"
              >
                Reserve Before the Festival
              </Link>
              <Link
                href="/world-cup-2026#watch"
                className="btn bg-white/15 backdrop-blur text-white border-2 border-white/40 hover:bg-white/25 px-8 py-4 font-semibold text-center transition-all"
              >
                Or Watch the Match With Us
              </Link>
            </div>
          </div>
        </section>

        {/* The Samurai Blue Special — Featured Menu Item */}
        <section
          id="samurai-blue-special"
          className="py-16 bg-gradient-to-br from-soft-gold via-warm-ivory to-warm-ivory border-b border-warm-ivory-dark"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-gradient-to-br from-blue-800 to-deep-indigo text-white p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block bg-accent-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full self-start mb-3">
                  🇯🇵 Samurai Blue Special
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  Sashimi Combination
                </h2>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-6xl md:text-7xl font-heading font-bold text-soft-gold leading-none">
                    $42
                  </span>
                </div>
                <p className="text-sm text-white/85 leading-relaxed">
                  15 pieces of premium sashimi. The most authentically Japanese
                  thing on our menu, featured throughout the World Cup window.
                </p>
              </div>
              <div className="md:col-span-3 p-8 md:p-10">
                <p className="text-soft-gold uppercase tracking-wider text-xs font-bold mb-3">
                  15 pcs · 5 of each cut
                </p>
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {sashimiCuts.map((s) => (
                    <div key={s.n} className="text-center">
                      <div className="text-3xl mb-1">{s.i}</div>
                      <p className="text-sm font-medium text-charcoal">
                        {s.n}
                      </p>
                      <p className="text-[10px] text-charcoal/60 italic">
                        {s.jp}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-charcoal/80 mb-5">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-red">✓</span> Miso soup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-red">✓</span> House salad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-700">🇯🇵</span> Complimentary
                    edamame
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-700">🇯🇵</span> Tournament window
                  </li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-5">
                  <p className="text-xs text-charcoal/80">
                    <span className="font-semibold text-blue-800">
                      🇯🇵 The Samurai Blue bonus:
                    </span>{" "}
                    Edamame is included free with every Sashimi Combination from{" "}
                    <strong>June 11 through July 19, 2026</strong> — our way of
                    honoring Japan&apos;s base camp three miles north of our
                    front door.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-charcoal/60 italic">
                    Available dine-in · Both locations · No reservation required
                    to order
                  </p>
                  <Link
                    href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US"
                    className="inline-flex items-center gap-2 text-accent-red font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Reserve a table →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toyota Stadium proximity */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-blue-700 font-medium tracking-wider uppercase mb-2 text-sm">
              The 3-Mile Moat
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Toyota Stadium, Frisco — Japan&apos;s Base Camp, Three Miles from Our Table
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/85 space-y-4">
              <p>
                When FIFA selected Toyota Stadium as Japan&apos;s official base
                camp for the 2026 tournament, it placed the Samurai Blue squad
                within a Frisco community of Japanese-affiliated families,
                businesses, and corporate offices — and within walking distance
                of one of the largest concentrations of Japanese-owned commerce
                in the southwestern United States.
              </p>
              <p>
                Jinbeh Frisco sits{" "}
                <strong>less than 3 miles from Toyota Stadium</strong> at 2693
                Preston Road. For traveling Japanese supporters who want a
                pre-training-day meal, a post-practice dinner, or anything that
                tastes like home, Jinbeh is the closest authentic option to base
                camp. Our staff includes Japanese speakers. Our menu has been
                built with the same care that has defined the restaurant since
                1988.
              </p>
            </div>
          </div>
        </section>

        {/* Watch parties / group reservations */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-accent-red font-medium tracking-wider uppercase mb-2 text-sm">
              Watch With Us
            </p>
            <h2 id="watch" className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6 scroll-mt-24">
              Watching the Match at Jinbeh — Group Reservations Welcome
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/85 space-y-4">
              <p>
                Anyone can put a match on a TV. Jinbeh turns it into the event.
                You get a live match on screens throughout the room, a hibachi
                chef putting on a show at your own table, and real Japanese food
                instead of bar nachos. For a Japan match, that is the difference
                between watching the game and celebrating it. We have been
                Frisco and Lewisville&apos;s family-owned Japanese restaurant
                since 1988, we are three miles from Japan&apos;s base camp, and
                guests rate us 4.2 to 4.8 across Google, Yelp, OpenTable, and
                TripAdvisor on 1,600-plus reviews. That is the room you want when
                Samurai Blue takes the field.
              </p>
              <p>
                For Japanese fans, families coming together, or any group wanting
                to watch the Japan matches over real Japanese food, we welcome
                group dining reservations on every match day throughout the
                tournament, June 11 through July 19.
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-blue-700 font-bold">📺</span>
                  <span>
                    <strong>TVs throughout the dining room</strong> tuned to the
                    match (multiple screens at both locations)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-700 font-bold">🪑</span>
                  <span>
                    <strong>Reserved hibachi table</strong> for your party —
                    guaranteed seating, no walk-in scramble
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-700 font-bold">🍣</span>
                  <span>
                    <strong>Full menu available</strong> — hibachi, sushi,
                    sashimi, our Samurai Blue Special, full bar
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-700 font-bold">🏮</span>
                  <span>
                    <strong>Family-owned hospitality</strong> since 1988
                  </span>
                </li>
              </ul>
              <p className="bg-soft-gold/20 border border-soft-gold/40 rounded-xl px-5 py-4">
                Reservations recommended <strong>at least 7 days in advance</strong>
                {" "}for both Japan match days. Walk-ins on match day are unlikely
                to find seats — these are the busiest 39 days in our 38-year
                history.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US"
                  className="inline-flex items-center gap-2 bg-accent-red text-white font-semibold px-6 py-3 rounded-full hover:bg-accent-red/90 transition"
                >
                  Reserve Frisco →
                </Link>
                <Link
                  href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US"
                  className="inline-flex items-center gap-2 bg-white text-charcoal font-semibold px-6 py-3 rounded-full hover:bg-warm-ivory transition border border-charcoal/15"
                >
                  Reserve Lewisville →
                </Link>
                <a
                  href="tel:2146191200"
                  className="inline-flex items-center gap-2 text-accent-red font-semibold px-6 py-3"
                >
                  📞 Call Frisco
                </a>
                <a
                  href="tel:2144882224"
                  className="inline-flex items-center gap-2 text-accent-red font-semibold px-6 py-3"
                >
                  📞 Call Lewisville
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Catering — conservative inquiry block */}
        <section id="catering" className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-blue-700 font-medium tracking-wider uppercase mb-2 text-sm">
              Catering — By Inquiry
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              World Cup Catering — Call Ahead
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/85 space-y-4">
              <p>
                Hosting a watch party at your office, home, or short-term
                rental? We can do delivery catering during the tournament
                window, with these terms:
              </p>
              <ul className="space-y-3 list-none pl-0 bg-warm-ivory rounded-xl p-6 border border-warm-ivory-dark">
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold text-xl leading-none">
                    ☎
                  </span>
                  <span>
                    <strong>Phone inquiry only</strong> — please call ahead so
                    we can confirm availability for your date
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold text-xl leading-none">
                    📍
                  </span>
                  <span>
                    <strong>10-mile radius</strong> from the location you order
                    from (Frisco or Lewisville)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold text-xl leading-none">
                    ⏱
                  </span>
                  <span>
                    <strong>Advance notice required</strong> — we&apos;ll do our
                    best within constraints, but match-day windows fill fast
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold text-xl leading-none">
                    🍱
                  </span>
                  <span>
                    <strong>Minimum order: 10 entrees</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold text-xl leading-none">
                    💵
                  </span>
                  <span>
                    <strong>$35 delivery fee</strong>
                  </span>
                </li>
              </ul>
              <p className="text-charcoal/70 italic text-sm">
                We do not perform offsite hibachi shows. Catering is delivered
                prepared, ready to serve.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:2146191200"
                  className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold px-6 py-3 rounded-full hover:bg-charcoal/90 transition"
                >
                  📞 Call Frisco · (214) 619-1200
                </a>
                <a
                  href="tel:2144882224"
                  className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold px-6 py-3 rounded-full hover:bg-charcoal/90 transition"
                >
                  📞 Call Lewisville · (214) 488-2224
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AT&T Stadium proximity */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-accent-red font-medium tracking-wider uppercase mb-2 text-sm">
              Pre or Post Match
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Best Japanese Restaurant Near AT&amp;T Stadium for World Cup Matches
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/85 space-y-4">
              <p>
                AT&amp;T Stadium in Arlington — the marquee North Texas venue
                for the 2026 tournament — sits <strong>42 miles south of
                Jinbeh Frisco</strong> and <strong>32 miles southeast of Jinbeh
                Lewisville</strong>. The math: a 45-minute drive north for an
                early dinner before kickoff, or a 35-minute drive home
                post-match for a celebration meal. For Japanese-fan parties
                wanting authentic Japanese food without compromise, Jinbeh is
                the closest hibachi + sushi restaurant in the AT&amp;T Stadium →
                Frisco corridor.
              </p>
              <p>
                We&apos;re a natural midpoint for the multi-day pattern most
                international supporters follow: stadium for the match →
                northbound to Frisco for hotels, base-camp visits, and meals →
                repeat.
              </p>
            </div>
          </div>
        </section>

        {/* Omotenashi — Japanese welcome */}
        <section className="py-16 bg-gradient-to-br from-blue-800 via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-3 text-sm">
              For Japanese Visitors
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              ようこそ DFW へ
            </h2>
            <p className="text-xl text-white/90 italic mb-6">Welcome to DFW.</p>
            <div className="text-lg text-white/85 space-y-4 leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                If you&apos;ve traveled to Texas to support Samurai Blue,
                Jinbeh is your home away from home for the next 39 days. Our
                staff includes Japanese speakers. Our menu is built around the
                dishes you grew up with — fresh sushi, real teppanyaki,
                authentic sashimi, and a full sake bar.
              </p>
              <p className="bg-white/10 border border-white/20 rounded-xl px-6 py-5 text-center">
                Tell us at the door —
                <br />
                <span className="text-soft-gold font-medium text-xl block mt-2">
                  「サムライブルーの応援に来ました」
                </span>
                <span className="text-sm text-white/70 italic block mt-1">
                  &quot;I came to cheer for Samurai Blue&quot;
                </span>
                <br />
                and we&apos;ll take care of the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Practical guide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-accent-red font-medium tracking-wider uppercase mb-2 text-sm">
              Practical Guide
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Tickets, Transit, Parking
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-warm-ivory rounded-xl p-6">
                <h3 className="font-heading font-bold text-charcoal mb-2">
                  AT&amp;T Stadium
                </h3>
                <p className="text-sm text-charcoal/70 italic mb-2">
                  1 AT&amp;T Way, Arlington TX 76011
                </p>
                <p className="text-sm text-charcoal/80">
                  Match-day parking $30-$75. Lots sell out by mid-morning on
                  Saturdays. Pre-purchase via the FIFA app. Ride-share queues
                  30-45 min post-match.
                </p>
              </div>
              <div className="bg-warm-ivory rounded-xl p-6">
                <h3 className="font-heading font-bold text-charcoal mb-2">
                  Toyota Stadium (Frisco)
                </h3>
                <p className="text-sm text-charcoal/70 italic mb-2">
                  9200 World Cup Way, Frisco TX 75033
                </p>
                <p className="text-sm text-charcoal/80">
                  <strong>Japan&apos;s base camp.</strong> JFA will release
                  public training session schedules closer to tournament start.
                  Less than 3 miles from Jinbeh Frisco.
                </p>
              </div>
              <div className="bg-warm-ivory rounded-xl p-6">
                <h3 className="font-heading font-bold text-charcoal mb-2">
                  FIFA Fan Festival
                </h3>
                <p className="text-sm text-charcoal/70 italic mb-2">
                  Fair Park, Dallas
                </p>
                <p className="text-sm text-charcoal/80">
                  39 days, 35,000 daily capacity, free entry. DART rail
                  accessible via Green Line (Fair Park station).
                </p>
              </div>
            </div>
            <p className="mt-8 text-charcoal/75 text-sm italic">
              <strong>Getting to Jinbeh after a match at AT&amp;T Stadium:</strong>{" "}
              Take I-30 East to US-75 North to TX-121 / Sam Rayburn Tollway West
              → exit Preston Rd. About 45 minutes in normal traffic; allow
              60-75 minutes post-match.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-accent-red font-medium tracking-wider uppercase mb-2 text-sm text-center">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-10 text-center">
              World Cup 2026 at Jinbeh — Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-white rounded-xl shadow-sm p-6 group"
                >
                  <summary className="font-heading font-semibold text-lg text-charcoal cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-accent-red text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/80 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-800 via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Reserve Your Table for the World Cup
            </h2>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Match-day reservations for Japan fixtures fill faster than any
              window in our 38-year history. The Sashimi Combination Samurai Blue
              Special is available throughout the tournament window — every day
              from June 11 through July 19.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="https://www.opentable.com/booking/restref/availability?rid=188458&lang=en-US"
                className="inline-flex items-center gap-2 bg-soft-gold text-charcoal font-semibold px-6 py-3 rounded-full hover:bg-soft-gold/90 transition"
              >
                Reserve Frisco →
              </Link>
              <Link
                href="https://www.opentable.com/booking/restref/availability?rid=188461&lang=en-US"
                className="inline-flex items-center gap-2 bg-white text-charcoal font-semibold px-6 py-3 rounded-full hover:bg-warm-ivory transition"
              >
                Reserve Lewisville →
              </Link>
            </div>
            <p className="mt-8 text-white/70 text-sm">
              Questions? Call{" "}
              <a href="tel:2146191200" className="text-soft-gold underline">
                (214) 619-1200
              </a>{" "}
              (Frisco) or{" "}
              <a href="tel:2144882224" className="text-soft-gold underline">
                (214) 488-2224
              </a>{" "}
              (Lewisville).
            </p>
          </div>
        </section>
      </main>
      <PageSeoBoost route="/world-cup-2026" />
      <Footer />
    </>
  );
}
