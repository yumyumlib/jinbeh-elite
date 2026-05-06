import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title:
    "DFW Moms Love Jinbeh | Family-Friendly Hibachi & Sushi in Frisco & Lewisville",
  description:
    "DFW moms love Jinbeh for the hibachi show, fresh sushi, and family-friendly hospitality. Birthday parties, mom&apos;s nights out, and Mother&apos;s Day in Frisco and Lewisville.",
  keywords: [
    "dfw moms",
    "frisco moms",
    "lewisville moms",
    "family friendly restaurant frisco",
    "kid friendly restaurant frisco",
    "best place to take kids frisco",
    "mom night out dfw",
    "mothers day restaurant frisco",
    "mothers day dinner lewisville",
    "kids birthday hibachi frisco",
    "family hibachi dfw",
    "japanese restaurant for families dfw",
    "mom approved restaurant frisco",
    "jinbeh frisco moms",
  ],
  openGraph: {
    title: "DFW Moms Love Jinbeh | Family-Friendly Hibachi in Frisco & Lewisville",
    description:
      "Hibachi shows the kids love. Sushi the moms love. Hospitality the whole family loves. Jinbeh has been DFW's favorite family restaurant since 1988.",
    url: "https://jinbeh.com/celebrations/dfw-moms",
    images: [
      {
        url: "https://jinbeh.com/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
        width: 1200,
        height: 630,
        alt: "DFW moms and families celebrating at Jinbeh Japanese Restaurant in Frisco and Lewisville",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/dfw-moms",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh a kid-friendly restaurant in Frisco TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jinbeh is one of DFW's most family-friendly restaurants. The hibachi tableside show keeps kids engaged from start to finish, training chopsticks are available for little ones, and the menu has options every guest can enjoy. Families have been celebrating birthdays, anniversaries, and milestones with us since 1988.",
      },
    },
    {
      "@type": "Question",
      name: "Why do DFW moms love Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DFW moms tell us they love Jinbeh because the kids stay entertained by the hibachi show, the food is genuinely great, and the atmosphere is warm without being chaotic. Mom doesn't have to cook, doesn't have to clean, and gets to actually relax. It's a kid-friendly hibachi spot that adults enjoy just as much.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh a good Mother's Day restaurant in DFW?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Jinbeh is one of the most popular Mother's Day restaurants in Frisco and Lewisville. Mom skips the cooking, the family enjoys a tableside hibachi show, and everyone shares a great meal together. Reservations fill quickly, so book ahead.",
      },
    },
  ],
};

export default function DFWMomsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav
          items={[
            { label: "Celebrations", href: "/celebrations" },
            { label: "DFW Moms" },
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
            src="/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg"
            alt="Family-friendly hibachi celebration at Jinbeh Japanese Restaurant in Frisco and Lewisville TX"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-soft-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Mom Approved Since 1988
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              DFW Moms Love Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-warm-ivory/90 mb-8 max-w-3xl mx-auto">
              Hibachi shows the kids cheer for. Sushi the moms savor. Hospitality the
              whole family remembers.
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
                A Family Restaurant Moms Actually Look Forward To
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Frisco moms, Lewisville moms, and families across DFW have been making
                Jinbeh part of their lives for nearly four decades. The kids love the
                hibachi show. The moms love that the kids love it. And everyone leaves
                full, happy, and already planning the next visit.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-soft-gold/30 mb-8">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                Why DFW Moms Choose Jinbeh
              </h3>
              <ul className="space-y-3 text-charcoal/80 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Built-in entertainment.</strong> The hibachi show keeps kids
                    engaged from the first onion volcano to the last bite of fried rice.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Mom doesn&apos;t cook.</strong> Mom doesn&apos;t clean. Mom
                    actually gets to enjoy a meal she didn&apos;t plan.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Training chopsticks for kids.</strong> Little ones get to feel
                    grown up while learning a new skill.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Premium hibachi and fresh sushi.</strong> A menu picky eaters,
                    sushi purists, and steak lovers can all order from happily.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Birthday magic.</strong> Our three-touch birthday treatment
                    (host, server, chef), tambourines, and ice cream make kids feel like
                    the star of the night.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">★</span>
                  <span>
                    <strong>Two locations near you.</strong>{" "}
                    <Link href="/frisco" className="text-accent-red hover:underline">
                      Frisco (Stonebriar / Legacy West area)
                    </Link>{" "}
                    and{" "}
                    <Link href="/lewisville" className="text-accent-red hover:underline">
                      Lewisville (Vista Ridge area)
                    </Link>
                    . Easy to get to and easy to love.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* See Jinbeh Through DFW Moms' Eyes */}
        <section className="py-16 md:py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-3">
                From the Community
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                See Why DFW Moms Love Jinbeh
              </h2>
              <p className="text-lg text-warm-ivory/85 leading-relaxed max-w-3xl mx-auto">
                We love sharing the moments families create at our tables. Watch this
                feature on DFW moms enjoying Jinbeh, and you&apos;ll see why so many
                families keep coming back generation after generation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/10">
              <p className="text-warm-ivory/90 leading-relaxed mb-5">
                From birthday parties and Mother&apos;s Day dinners to weeknight family
                meals and moms&apos; nights out, Jinbeh has been the gathering place for
                DFW families for nearly four decades. The team treats every guest like
                family because, after this many years, most of them feel like one.
              </p>
              <a
                href="https://www.instagram.com/reels/DXmPlsfgvqW/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-soft-gold text-charcoal px-6 py-3 rounded-xl font-semibold hover:bg-soft-gold/90 transition-colors"
              >
                Watch the DFW Moms Featurette on Instagram
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
                Opens on Instagram (instagram.com/reels/DXmPlsfgvqW/).
              </p>
            </div>
          </div>
        </section>

        {/* Mom Moments to Plan */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Plan Your Next Mom Moment at Jinbeh
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                Whether you&apos;re celebrating Mother&apos;s Day, planning a kid&apos;s
                birthday, or coordinating a girls&apos; night, Jinbeh has a setting that
                fits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/celebrations/mothers-day"
                className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">💐</div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  Mother&apos;s Day Dinner
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Skip the brunch crowds. Treat mom to a hibachi show and a meal she
                  didn&apos;t have to cook or clean up.
                </p>
              </Link>
              <Link
                href="/celebrations/birthday"
                className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">🎂</div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  Kids&apos; Birthday Parties
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Hibachi flames, the birthday song, ice cream, tambourines. Every birthday
                  feels like a main-event celebration.
                </p>
              </Link>
              <Link
                href="/celebrations/family-gatherings"
                className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  Family Night Out
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Hibachi tables seat 7-8 and bring the whole family together. Easy
                  reservations on weeknights and weekends.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Reserve Your Table
            </h2>
            <p className="text-warm-ivory/80 mb-6 max-w-2xl mx-auto">
              Frisco or Lewisville, weeknight or weekend, birthday or just-because. Book
              ahead so the kids can lock in those front-row hibachi seats.
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
                href="/vip"
                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-3 rounded-xl font-semibold"
              >
                Join the VIP Birthday Club
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
