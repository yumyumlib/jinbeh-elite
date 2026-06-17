import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title:
        "Where to Watch the World Cup in Lewisville | Jinbeh Hibachi & Sushi",
    description:
        "Watch FIFA World Cup 2026 in Lewisville at Jinbeh — hibachi, sushi, and big screens, the closest Japanese restaurant to AT&T Stadium. Reserve your World Cup table.",
    keywords: [
        "world cup lewisville",
        "where to watch world cup lewisville",
        "world cup watch party lewisville",
        "world cup 2026 lewisville tx",
        "japanese restaurant world cup dfw",
        "samurai blue lewisville",
        "best place to watch world cup lewisville",
        "world cup watch party near att stadium",
    ],
    openGraph: {
        title: "Where to Watch the World Cup in Lewisville | Jinbeh",
        description:
            "FIFA World Cup 2026 at Jinbeh Lewisville — hibachi, sushi, and screens, the closest of our two locations to AT&T Stadium.",
        url: "https://jinbeh.com/lewisville/world-cup",
        images: [{ url: "https://jinbeh.com/images/og-image.jpg", width: 1200, height: 630, alt: "World Cup 2026 watch party at Jinbeh Lewisville" }],
    },
    alternates: { canonical: "https://jinbeh.com/lewisville/world-cup" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Where can I watch the World Cup in Lewisville?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh Lewisville shows FIFA World Cup 2026 matches on screens throughout the dining room and is the closer of our two locations to AT&T Stadium in Arlington, about 32 miles south. Reserve a hibachi table for the Japan matches on June 14 and June 25 to guarantee seating.",
            },
        },
        {
            "@type": "Question",
            name: "How far is Jinbeh Lewisville from AT&T Stadium?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh Lewisville is about 32 miles north of AT&T Stadium, roughly a 35-minute drive in normal traffic, which makes it an easy pre-match dinner or post-match celebration. We are at 2440 S Stemmons Fwy Suite A, Lewisville.",
            },
        },
        {
            "@type": "Question",
            name: "Can I book a World Cup watch party in Lewisville?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh Lewisville welcomes group reservations for World Cup watch parties at a reserved hibachi table with the match on screen. Book at least 7 days ahead for the Japan match days, and call (214) 488-2224 for larger groups.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
        { "@type": "ListItem", position: 2, name: "Lewisville", item: "https://jinbeh.com/lewisville" },
        { "@type": "ListItem", position: 3, name: "World Cup", item: "https://jinbeh.com/lewisville/world-cup" },
    ],
};

export default function LewisvilleWorldCupPage() {
    return (
        <>
            <Header />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="bg-warm-ivory">
                <section className="relative bg-gradient-to-br from-blue-800 via-deep-indigo to-charcoal text-white py-24">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <span className="inline-block bg-accent-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                            FIFA World Cup 2026 · Lewisville
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
                            Where to Watch the World Cup in Lewisville
                        </h1>
                        <p className="text-lg sm:text-xl text-warm-ivory/90 leading-relaxed">
                            The closest of our two tables to AT&amp;T Stadium. Hibachi, sushi, big screens,
                            and a Samurai Blue celebration in the heart of Lewisville.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <a href="tel:214-488-2224" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold transition-all">
                                Call Lewisville: (214) 488-2224
                            </a>
                            <Link href="/reservations" className="btn bg-white/15 backdrop-blur text-white border-2 border-white/50 hover:bg-white/25 px-8 py-4 text-lg font-semibold transition-all">
                                Reserve a Table
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto max-w-4xl px-6 pt-8">
                    <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "World Cup" }]} />
                </div>

                <section className="py-14">
                    <div className="container mx-auto max-w-3xl px-6 space-y-5 text-charcoal/85 text-lg leading-relaxed">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
                            Your Pre-Match Dinner and Post-Match Celebration
                        </h2>
                        <p>
                            AT&amp;T Stadium in Arlington hosts a tournament-high nine World Cup matches in
                            2026, including both of Japan&apos;s Dallas group games and a Semi-Final. Jinbeh
                            Lewisville, at 2440 S Stemmons Fwy, is about 32 miles north, the closer of our
                            two locations to the stadium and a straight shot up I-35E. Eat before the match,
                            or come back and celebrate after. Family-owned since 1988.
                        </p>
                        <p>
                            Anyone can put a match on a TV. We give you the game on screens throughout the
                            room, a hibachi chef performing at your own table, and authentic Japanese food
                            instead of bar food. Guests rate us 4.2 to 4.8 across Google, Yelp, OpenTable,
                            and TripAdvisor on more than 1,600 reviews. For a Japan match, that is the
                            difference between watching the game and celebrating it.
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-white">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-6">
                            Japan&apos;s Two Dallas Matches
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="bg-warm-ivory rounded-2xl border border-stone-200 p-6">
                                <p className="text-accent-red font-bold mb-1">Sun · June 14 · 3:00 PM CT</p>
                                <p className="text-charcoal font-heading font-bold text-lg">Netherlands vs. Japan</p>
                                <p className="text-charcoal/70 text-sm mt-1">Group F · AT&amp;T Stadium, Arlington</p>
                            </div>
                            <div className="bg-warm-ivory rounded-2xl border border-stone-200 p-6">
                                <p className="text-accent-red font-bold mb-1">Thu · June 25 · 6:00 PM CT</p>
                                <p className="text-charcoal font-heading font-bold text-lg">Japan vs. UEFA Playoff Winner</p>
                                <p className="text-charcoal/70 text-sm mt-1">Group F · AT&amp;T Stadium, Arlington</p>
                            </div>
                        </div>
                        <p className="text-charcoal/70 mt-6">
                            See the full nine-match Dallas schedule, the Samurai Blue Special, and Fan
                            Festival tips on our{" "}
                            <Link href="/world-cup-2026" className="text-accent-red hover:underline font-medium">
                                World Cup 2026 hub
                            </Link>
                            . Reserve early — these are the busiest 39 days in our history.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                            Lewisville World Cup FAQ
                        </h2>
                        <div className="space-y-4">
                            {faqSchema.mainEntity.map((q) => (
                                <details key={q.name} className="bg-white rounded-xl border border-stone-200 p-5 group">
                                    <summary className="font-heading font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center">
                                        {q.name}
                                        <span className="text-accent-red group-open:rotate-45 transition-transform text-xl">+</span>
                                    </summary>
                                    <p className="text-charcoal/80 leading-relaxed mt-3">{q.acceptedAnswer.text}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-br from-charcoal to-deep-indigo text-white">
                    <div className="container mx-auto max-w-3xl px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Reserve Your Lewisville World Cup Table</h2>
                        <p className="text-warm-ivory/90 mb-2">Jinbeh Lewisville · 2440 S Stemmons Fwy Suite A, Lewisville, TX 75067</p>
                        <p className="text-warm-ivory/90 mb-8">(214) 488-2224 · ~32 miles from AT&amp;T Stadium</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:214-488-2224" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold transition-all">Call (214) 488-2224</a>
                            <Link href="/world-cup-2026" className="btn bg-white/15 backdrop-blur text-white border-2 border-white/50 hover:bg-white/25 px-8 py-4 text-lg font-semibold transition-all">World Cup 2026 Hub →</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
