import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title:
    "World Cup Watch Party with Chioma Ubogagu | June 25 | Jinbeh Frisco & Lewisville",
  description:
    "Join the FIFA World Cup Watch Party at Jinbeh on Thursday, June 25. Professional soccer player and Coppell native Chioma Ubogagu (Dallas Trinity FC) appears in Lewisville. Two big screens, a halftime signed-merchandise giveaway at both locations, and the Samurai Blue Special. Reserve at jinbeh.com.",
  keywords: [
    "world cup watch party frisco",
    "world cup watch party lewisville",
    "japan world cup watch party dallas",
    "where to watch world cup frisco tx",
    "chioma ubogagu jinbeh",
    "dallas trinity fc watch party",
    "things to do june 25 frisco",
    "att stadium world cup restaurant",
    "japanese restaurant near att stadium",
    "samurai blue dfw",
    "hibachi frisco",
    "sushi lewisville",
    "jinbeh world cup watch party",
  ],
  openGraph: {
    title:
      "World Cup Watch Party with Chioma Ubogagu | June 25 | Jinbeh",
    description:
      "Thursday, June 25. Party 5PM, Japan kicks off 6PM. Special guest Chioma Ubogagu in Lewisville, a halftime signed-merchandise giveaway at both locations, and the Samurai Blue Special.",
    url: "https://jinbeh.com/celebrations/world-cup-watch-party",
    images: [
      {
        url: "https://jinbeh.com/images/celebrations/world-cup-watch-party.jpg",
        width: 1200,
        height: 630,
        alt: "World Cup Watch Party with Chioma Ubogagu at Jinbeh Frisco and Lewisville on June 25",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/world-cup-watch-party",
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "World Cup Watch Party with Chioma Ubogagu at Jinbeh Lewisville",
      startDate: "2026-06-25T17:00:00-05:00",
      endDate: "2026-06-25T22:00:00-05:00",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      description:
        "FIFA World Cup Watch Party for Japan's match. Special guest, professional soccer player Chioma Ubogagu, forward for Dallas Trinity FC and Coppell native, appears in person at the Lewisville location. Two big screens, a halftime giveaway of signed merchandise, hibachi with a show, and the Samurai Blue Special.",
      image:
        "https://jinbeh.com/images/celebrations/world-cup-watch-party.jpg",
      location: {
        "@type": "Place",
        name: "Jinbeh Japanese Restaurant Lewisville",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2440 S Stemmons Fwy #A",
          addressLocality: "Lewisville",
          addressRegion: "TX",
          postalCode: "75067",
          addressCountry: "US",
        },
      },
      performer: {
        "@type": "Person",
        name: "Chioma Ubogagu",
      },
      organizer: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
        url: "https://jinbeh.com",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://jinbeh.com/lewisville",
        validFrom: "2026-06-10T00:00:00-05:00",
      },
    },
    {
      "@type": "Event",
      name: "World Cup Watch Party at Jinbeh Frisco",
      startDate: "2026-06-25T17:00:00-05:00",
      endDate: "2026-06-25T22:00:00-05:00",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      description:
        "FIFA World Cup Watch Party for Japan's match. Two big screens, a halftime giveaway of signed merchandise, hibachi with a show, and the Samurai Blue Special.",
      image:
        "https://jinbeh.com/images/celebrations/world-cup-watch-party.jpg",
      location: {
        "@type": "Place",
        name: "Jinbeh Japanese Restaurant Frisco",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2693 Preston Rd Suite 1040",
          addressLocality: "Frisco",
          addressRegion: "TX",
          postalCode: "75034",
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
        url: "https://jinbeh.com",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://jinbeh.com/frisco",
        validFrom: "2026-06-10T00:00:00-05:00",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the Jinbeh World Cup Watch Party with Chioma Ubogagu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thursday, June 25, 2026. The party starts at 5:00 PM, Japan's World Cup match kicks off at 6:00 PM CT, and both locations stay open until 10:00 PM. Chioma Ubogagu appears in person at Jinbeh Lewisville.",
      },
    },
    {
      "@type": "Question",
      name: "Is the watch party free to attend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is free to attend. We recommend reserving a table for dining, especially for the best seats near the screens. Walk-ins are welcome while space lasts.",
      },
    },
    {
      "@type": "Question",
      name: "Will Chioma Ubogagu be at both Jinbeh locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chioma appears in person at Jinbeh Lewisville. Both Frisco and Lewisville host the watch party with two big screens, and each location holds a halftime giveaway of signed merchandise during the match.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Samurai Blue Special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In honor of Japan's World Cup run, Jinbeh is serving its popular sashimi combination with a complimentary side of edamame, available at both locations through the tournament.",
      },
    },
    {
      "@type": "Question",
      name: "Can I watch other World Cup matches at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jinbeh shows every World Cup match through July 19 at both the Frisco and Lewisville locations, including the knockout rounds and the semifinal in Dallas.",
      },
    },
  ],
};

export default function WorldCupWatchPartyPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav
          items={[
            { label: "Celebrations", href: "/celebrations" },
            { label: "World Cup Watch Party" },
          ]}
        />
      </div>
      <main id="main-content" className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="relative h-[64vh] min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-deep-indigo to-charcoal" />
          <Image
            src="/images/celebrations/world-cup-watch-party.webp"
            alt="World Cup Watch Party Frisco at Jinbeh Japanese restaurant"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Thursday, June 25, 2026 &middot; Frisco &amp; Lewisville
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              World Cup Watch Party with Chioma Ubogagu
            </h1>
            <p className="text-lg md:text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
              Coppell&apos;s own pro soccer star comes home for the World Cup,
              live in person at Lewisville. Two big screens, fresh sushi, hibachi
              with a show, and a halftime giveaway of signed merchandise at both
              locations. Party at 5PM, Japan kicks off at 6PM.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/frisco"
                className="btn bg-accent-red text-white hover:bg-red-700 px-8 py-3 rounded-lg font-semibold"
              >
                Reserve Frisco
              </Link>
              <Link
                href="/lewisville"
                className="btn bg-white/15 backdrop-blur text-white border-2 border-white/50 hover:bg-white/25 px-8 py-3 rounded-lg font-semibold"
              >
                Reserve Lewisville
              </Link>
            </div>
          </div>
        </section>

        {/* Event details strip */}
        <section className="bg-deep-indigo text-white py-10">
          <div className="container mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-soft-gold text-3xl font-heading font-bold">5PM</p>
              <p className="text-sm text-warm-ivory/80">Party starts</p>
            </div>
            <div>
              <p className="text-soft-gold text-3xl font-heading font-bold">6PM</p>
              <p className="text-sm text-warm-ivory/80">Japan kicks off</p>
            </div>
            <div>
              <p className="text-soft-gold text-3xl font-heading font-bold">2</p>
              <p className="text-sm text-warm-ivory/80">Big screens each location</p>
            </div>
            <div>
              <p className="text-soft-gold text-3xl font-heading font-bold">Free</p>
              <p className="text-sm text-warm-ivory/80">To attend &middot; halftime signed-merch giveaway</p>
            </div>
          </div>
        </section>

        {/* Chioma story */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                From Coppell to the world stage, and still her favorite table
              </h2>
              <p className="text-charcoal/80 mb-4">
                Professional soccer player Chioma Ubogagu grew up in Coppell,
                celebrating birthdays and family dinners right here at Jinbeh.
                She led Coppell High School
                to a Texas state title, turned professional, and played
                internationally. Today she is a forward for Dallas Trinity FC,
                back home in Dallas. And when she eats out, this is still her
                pick.
              </p>
              <p className="text-charcoal/80 mb-4">
                On the night Japan plays the World Cup in Arlington, Chioma is
                hosting her hometown at the restaurant that has been part of her
                story since she was a kid. As she put it, &quot;It&apos;s my
                favorite hibachi spot.&quot;
              </p>
              <p className="text-charcoal/80">
                Come say hi, enter the halftime giveaway for signed merchandise,
                and watch the match with us. She appears in person at our
                Lewisville location.
              </p>
            </div>
            <div className="bg-charcoal rounded-2xl p-8 text-white">
              <h3 className="text-soft-gold font-heading text-2xl font-bold mb-4">
                What to expect
              </h3>
              <ul className="space-y-3 text-warm-ivory/90">
                <li>Two big screens showing Japan&apos;s World Cup match</li>
                <li>Special guest, pro soccer star Chioma Ubogagu, in person in Lewisville</li>
                <li>A halftime giveaway of signed merchandise at both locations</li>
                <li>Giveaway held at halftime of the match</li>
                <li>Hibachi with a show and our craft sushi bar</li>
                <li>The Samurai Blue Special, available all tournament</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Samurai Blue Special */}
        <section className="bg-gradient-to-br from-charcoal to-deep-indigo text-white py-14">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-3 block">
              Available through the tournament
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              The Samurai Blue Special
            </h2>
            <p className="text-warm-ivory/90 max-w-2xl mx-auto text-lg">
              In honor of Japan&apos;s World Cup run, enjoy our popular sashimi
              combination with a complimentary side of edamame. Fresh, clean,
              and the perfect way to cheer on the match. Dine in at either
              location.
            </p>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-8 text-center">
              Two locations, one celebration
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow p-8 border border-warm-ivory">
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                  Jinbeh Frisco
                </h3>
                <p className="text-accent-red font-semibold mb-3">
                  Watch party &amp; halftime signed-merch giveaway
                </p>
                <p className="text-charcoal/80 mb-1">
                  2693 Preston Rd Suite 1040, Frisco, TX 75034
                </p>
                <p className="text-charcoal/80 mb-4">
                  Near Stonebriar Centre &amp; Legacy West
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+12146191200"
                    className="btn bg-charcoal text-white hover:bg-deep-indigo px-5 py-2 rounded-lg font-semibold"
                  >
                    Call (214) 619-1200
                  </a>
                  <Link
                    href="/frisco"
                    className="btn bg-accent-red text-white hover:bg-red-700 px-5 py-2 rounded-lg font-semibold"
                  >
                    Reserve Frisco
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow p-8 border border-warm-ivory">
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                  Jinbeh Lewisville
                </h3>
                <p className="text-accent-red font-semibold mb-3">
                  Chioma in person &middot; halftime signed-merch giveaway
                </p>
                <p className="text-charcoal/80 mb-1">
                  2440 S Stemmons Fwy #A, Lewisville, TX 75067
                </p>
                <p className="text-charcoal/80 mb-4">
                  Easy I-35E access, near Vista Ridge
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+12144882224"
                    className="btn bg-charcoal text-white hover:bg-deep-indigo px-5 py-2 rounded-lg font-semibold"
                  >
                    Call (214) 488-2224
                  </a>
                  <Link
                    href="/lewisville"
                    className="btn bg-accent-red text-white hover:bg-red-700 px-5 py-2 rounded-lg font-semibold"
                  >
                    Reserve Lewisville
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tournament continuation */}
        <section className="bg-warm-ivory py-14 border-t border-charcoal/10">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
              Come back for every match through July 19
            </h2>
            <p className="text-charcoal/80 max-w-2xl mx-auto mb-2">
              June 25 is the big one, but the World Cup runs through July 19, and
              Jinbeh shows every match at both locations. Dallas is hosting nine
              matches, including a semifinal, and we are your neighborhood home
              base for all of it. Gather your crew, reserve a hibachi table, and
              make a night of it.
            </p>
            <p className="text-charcoal/80">
              Explore our{" "}
              <Link href="/celebrations/world-cup" className="text-accent-red font-semibold underline">
                full World Cup at Jinbeh page
              </Link>{" "}
              for menus, group dining, and match-day details.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="bg-white rounded-xl p-6 shadow-sm border border-warm-ivory">
                  <h3 className="font-heading font-bold text-charcoal mb-2">
                    {q.name}
                  </h3>
                  <p className="text-charcoal/80">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-accent-red text-white py-14">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Save your seat for June 25
            </h2>
            <p className="text-white/90 mb-8">
              Tables fill fast for the best views. Reserve now and welcome to the
              table.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/frisco"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-3 rounded-lg font-semibold"
              >
                Reserve Frisco
              </Link>
              <Link
                href="/lewisville"
                className="btn bg-white/15 backdrop-blur text-white border-2 border-white/60 hover:bg-white/25 px-8 py-3 rounded-lg font-semibold"
              >
                Reserve Lewisville
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
