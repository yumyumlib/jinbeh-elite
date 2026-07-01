import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
    title: "Jinbeh Featured on FOX 4 Good Day: Soccer Watch Party with Chioma Ubogagu | Jinbeh",
    description:
        "FOX 4 Good Day featured Jinbeh Japanese Restaurant and pro soccer player Chioma Ubogagu ahead of the Japan vs Sweden match watch party in Lewisville. See why Jinbeh is the best hibachi and sushi spot for international soccer dining in DFW.",
    keywords: [
        "jinbeh fox 4",
        "best hibachi frisco",
        "best hibachi dallas",
        "best hibachi lewisville",
        "japanese steakhouse frisco",
        "soccer watch party dfw",
        "hibachi near me",
        "teppanyaki frisco",
        "sushi frisco",
        "international soccer dfw",
        "japanese restaurant lewisville",
        "japanese restaurant near att stadium",
        "fox 4 good day jinbeh",
    ],
    openGraph: {
        title: "Jinbeh Featured on FOX 4 Good Day: Soccer Watch Party with Chioma Ubogagu",
        description:
            "FOX 4 Good Day spotlighted Jinbeh and pro soccer player Chioma Ubogagu ahead of the Japan vs Sweden match watch party at Jinbeh Lewisville.",
        images: ["/images/celebrations/world-cup-watch-party.webp"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/fox4-good-day-jinbeh-world-cup",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Jinbeh Featured on FOX 4 Good Day: Soccer Watch Party with Chioma Ubogagu",
    description:
        "FOX 4 Good Day featured Jinbeh Japanese Restaurant and professional soccer player Chioma Ubogagu ahead of the Japan vs Sweden match watch party at Jinbeh Lewisville.",
    image: "https://jinbeh.com/images/celebrations/world-cup-watch-party.webp",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
        url: "https://jinbeh.com",
    },
    publisher: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
        logo: {
            "@type": "ImageObject",
            url: "https://jinbeh.com/images/logos/jinbehlogo-white.svg",
        },
    },
    about: {
        "@type": "Event",
        name: "Japan vs Sweden Match Watch Party at Jinbeh Lewisville",
        description:
            "International soccer tournament watch party for the Japan vs Sweden match at Jinbeh Lewisville, featuring special guest Chioma Ubogagu, big screens, hibachi with a show, and the Samurai Blue Special.",
        startDate: "2026-06-25T17:00:00-05:00",
        endDate: "2026-06-25T22:00:00-05:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        image: "https://jinbeh.com/images/celebrations/world-cup-watch-party.webp",
        location: {
            "@type": "Restaurant",
            name: "Jinbeh Japanese Restaurant Lewisville",
            address: {
                "@type": "PostalAddress",
                streetAddress: "1535 E State Hwy 121",
                addressLocality: "Lewisville",
                addressRegion: "TX",
                postalCode: "75056",
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
};

const faqs = [
    {
        question: "Was Jinbeh featured on FOX 4 Good Day?",
        answer:
            "Yes. On June 25, 2026, FOX 4 Good Day in Dallas featured Jinbeh Japanese Restaurant in a segment about the international soccer watch party experience in DFW. Professional soccer player Chioma Ubogagu appeared on the show to discuss the Japan vs Sweden match-day event at Jinbeh Lewisville.",
    },
    {
        question: "Who is Chioma Ubogagu and what is her connection to Jinbeh?",
        answer:
            "Chioma Ubogagu is a professional soccer player with FC Dallas connections who joined Jinbeh Lewisville as a special guest for the Japan vs Sweden match watch party on June 25, 2026. She appeared on FOX 4 Good Day that morning to spotlight the event and the local soccer dining scene.",
    },
    {
        question: "Does Jinbeh host soccer watch parties?",
        answer:
            "Yes. Jinbeh is hosting watch parties for the 2026 international soccer tournament at both the Frisco and Lewisville locations, running June 11 through July 19, 2026. Guests enjoy matches on big screens alongside fresh sushi, sizzling hibachi, and cold drinks. Reserve your spot by calling Frisco at (214) 619-1200 or Lewisville at (214) 488-2224.",
    },
    {
        question: "What makes Jinbeh the best hibachi in Frisco and Lewisville?",
        answer:
            "Jinbeh has been family-owned since 1988, making it one of the longest-running Japanese steakhouses in North Texas. The Frisco location cooks on traditional gas hibachi grills, and both locations serve fresh sushi cut to order by experienced chefs. Over 600 verified reviews on OpenTable confirm Jinbeh as the top hibachi destination in DFW.",
    },
    {
        question: "Where can I watch the FOX 4 segment about Jinbeh?",
        answer:
            "The FOX 4 Good Day segment featuring Jinbeh and Chioma Ubogagu aired June 25, 2026. You can watch the full clip on the FOX 4 website at fox4news.com. Search for the DFW soccer watch party segment with Chioma Ubogagu.",
    },
    {
        question: "How do I reserve a table for a match-day watch party at Jinbeh?",
        answer:
            "Call Jinbeh Frisco at (214) 619-1200 or Jinbeh Lewisville at (214) 488-2224. You can also sign up online at jinbeh.com/watchparty. Watch parties run throughout the tournament through July 19, 2026.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
        {
            "@type": "ListItem",
            position: 3,
            name: "Jinbeh on FOX 4 Good Day",
            item: "https://jinbeh.com/blog/fox4-good-day-jinbeh-world-cup",
        },
    ],
};

export default function Fox4GoodDayPage() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Hero */}
            <section className="relative bg-charcoal py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/celebrations/world-cup-watch-party.webp"
                        alt="International soccer watch party at Jinbeh Japanese Restaurant"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <BreadcrumbNav
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Jinbeh on FOX 4 Good Day" },
                        ]}
                    />
                    <span className="inline-block bg-accent-red/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                        As Seen on TV
                    </span>
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                        Jinbeh Featured on FOX 4 Good Day: Soccer Watch Party with Chioma Ubogagu
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        FOX 4 spotlighted Jinbeh Japanese Restaurant and professional soccer
                        player Chioma Ubogagu ahead of the Japan vs Sweden match watch party
                        at Jinbeh Lewisville.
                    </p>
                    <p className="text-sm text-white/50 mt-4">
                        June 26, 2026 &middot; 5 min read
                    </p>
                </div>
            </section>

            {/* Body */}
            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 prose prose-lg max-w-none text-charcoal/80">
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-0 mb-6">
                                📺 FOX 4 Good Day Highlights Jinbeh and the Soccer Watch Party
                            </h2>

                            <p className="mb-6">
                                On June 25, 2026, FOX 4&apos;s Good Day morning show in Dallas
                                featured{" "}
                                <Link href="/world-cup-2026" className="text-accent-red hover:underline">
                                    Jinbeh Japanese Restaurant
                                </Link>{" "}
                                in a segment about the international soccer experience in DFW.
                                Professional soccer player Chioma Ubogagu joined the broadcast to
                                talk about the local watch party scene, the excitement building
                                around the tournament, and the Japan vs Sweden match happening that
                                evening at Jinbeh Lewisville.
                            </p>

                            <p className="mb-6">
                                The segment aired during the 8 to 9 AM hour and put a spotlight on
                                what makes Jinbeh one of the top destinations for match-day dining
                                in North Texas. Chioma, a professional soccer player with deep DFW
                                ties, described the energy of watching international matches at a
                                restaurant that combines world-class Japanese food with an electric
                                game-day atmosphere.
                            </p>

                            <DidYouKnow fact="Jinbeh has been serving DFW since 1988, making it one of the longest-running family-owned Japanese restaurants in North Texas. Both the Frisco and Lewisville locations are hosting watch parties for every match of the summer soccer tournament through July 19, 2026." />

                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                ⚽ A Watch Party Night to Remember
                            </h2>

                            <p className="mb-6">
                                That same evening, Chioma Ubogagu joined guests at{" "}
                                <Link href="/lewisville" className="text-accent-red hover:underline">
                                    Jinbeh Lewisville
                                </Link>{" "}
                                for the Japan vs Sweden watch party. The restaurant was packed.
                                Guests cheered every play, shared plates of fresh sushi and sizzling
                                hibachi, and made it one of the best Thursday nights the Lewisville
                                location has seen.
                            </p>

                            <p className="mb-6">
                                Japan and Sweden battled to a 1-1 draw, and the result sent Japan&apos;s
                                Samurai Blue through to the knockout round as Group F runners-up.
                                The Samurai Blue have now reached the knockout stage for a third
                                straight tournament, and their next match is a heavyweight clash
                                with Brazil on Monday, June 29. Both Jinbeh locations will be open,
                                loud, and ready to cheer Japan on. (Details on that watch party are
                                below.)
                            </p>

                            <p className="mb-6">
                                The energy in the room was what makes these watch parties special.
                                Families, soccer fans, and first-time visitors gathered around big
                                screens while hibachi chefs put on their own tableside show. The
                                combination of live soccer action, fresh Japanese cuisine, and cold
                                drinks created an atmosphere that a living room simply cannot match.
                            </p>

                            <ProTip variant="insider">Want to join the next watch party? Sign up at jinbeh.com/watchparty or call ahead to reserve your table. The tournament runs through July 19, and both the Frisco and Lewisville locations are showing every match.</ProTip>

                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                🔥 Why FOX 4 Chose Jinbeh
                            </h2>

                            <p className="mb-6">
                                When a major Dallas news station needs to showcase the local soccer
                                dining experience, the choice says something. Jinbeh has been a
                                DFW fixture since 1988, and the combination of hibachi entertainment,
                                fresh sushi, and a welcoming family atmosphere sets it apart from the
                                typical sports bar watch party.
                            </p>

                            <p className="mb-6">
                                At{" "}
                                <Link href="/frisco" className="text-accent-red hover:underline">
                                    Jinbeh Frisco
                                </Link>
                                , chefs cook on traditional gas-fired hibachi grills, tossing shrimp,
                                lighting the onion volcano, and searing premium steaks tableside.
                                The{" "}
                                <Link href="/lewisville" className="text-accent-red hover:underline">
                                    Lewisville location
                                </Link>{" "}
                                uses electric teppanyaki grills and offers the same signature show
                                with fresh-cut sushi from a chef who has been behind the bar since
                                1993. Both locations deliver the full Japanese steakhouse experience
                                that earned Jinbeh over 600 verified OpenTable reviews and multiple
                                Diners&apos; Choice awards.
                            </p>

                            <p className="mb-6">
                                That reputation is what makes Jinbeh the right fit for an
                                international soccer watch party. It is not just watching the game.
                                It is dinner and a show, with the match on the big screen as a bonus.
                            </p>

                            <LocationCTA location="both" />

                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                🏟️ The Summer of Soccer at Jinbeh: What to Expect
                            </h2>

                            <p className="mb-6">
                                The world&apos;s biggest soccer tournament is being played right here
                                in North Texas, with matches at AT&amp;T Stadium in Arlington through
                                July 19. Jinbeh is embracing the once-in-a-generation moment by
                                hosting{" "}
                                <Link href="/world-cup-2026" className="text-accent-red hover:underline">
                                    watch parties at both locations
                                </Link>{" "}
                                for every match of the tournament.
                            </p>

                            <p className="mb-6">
                                Guests can enjoy the full{" "}
                                <Link href="/menu" className="text-accent-red hover:underline">
                                    Jinbeh menu
                                </Link>{" "}
                                during matches, including hibachi dinners cooked tableside, fresh
                                sushi and sashimi, Japanese cocktails, and sake flights. The{" "}
                                <Link href="/happy-hour" className="text-accent-red hover:underline">
                                    Happy Hour
                                </Link>{" "}
                                (Monday through Friday, 5:00 to 6:30 PM) overlaps with several
                                match times, making it the perfect way to kick off a soccer night.
                            </p>

                            <DidYouKnow fact="Jinbeh Frisco is located near Stonebriar Centre on Preston Road, and Jinbeh Lewisville is right off Highway 121 near Vista Ridge Mall. Both locations are a short drive from AT&T Stadium in Arlington, where many of the North Texas matches are being played." />

                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                📰 Watch the FOX 4 Segment
                            </h2>

                            <p className="mb-6">
                                You can watch the full FOX 4 Good Day segment featuring Chioma
                                Ubogagu and the Jinbeh watch party on the{" "}
                                <a
                                    href="https://www.fox4news.com/video/fmc-u12gsfghjxxrvij8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent-red hover:underline"
                                >
                                    FOX 4 website
                                </a>
                                . The segment covers the soccer excitement in DFW, what makes
                                Jinbeh a standout destination for match-day dining, and the energy
                                of the local soccer community gathering over Japanese cuisine.
                            </p>

                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                🍣 The Best Hibachi and Sushi in DFW for Any Occasion
                            </h2>

                            <p className="mb-6">
                                The tournament is a once-in-a-generation event, but Jinbeh has been
                                the go-to Japanese steakhouse in Frisco and Lewisville for every
                                occasion since 1988. Whether it is a{" "}
                                <Link href="/celebrations/birthday" className="text-accent-red hover:underline">
                                    birthday celebration
                                </Link>
                                , an{" "}
                                <Link href="/celebrations/anniversary" className="text-accent-red hover:underline">
                                    anniversary dinner
                                </Link>
                                , a{" "}
                                <Link href="/celebrations/corporate-events" className="text-accent-red hover:underline">
                                    corporate event
                                </Link>
                                , or a Tuesday night that needs a little fire, every meal at Jinbeh
                                is a celebration.
                            </p>

                            <p className="mb-6">
                                Both locations are open for lunch and dinner. Reserve your table by
                                calling{" "}
                                <Link href="/frisco" className="text-accent-red hover:underline">
                                    Jinbeh Frisco
                                </Link>{" "}
                                at{" "}
                                <CallLink href="tel:2146191200" className="text-accent-red hover:underline">
                                    (214) 619-1200
                                </CallLink>{" "}
                                or{" "}
                                <Link href="/lewisville" className="text-accent-red hover:underline">
                                    Jinbeh Lewisville
                                </Link>{" "}
                                at{" "}
                                <CallLink href="tel:2144882224" className="text-accent-red hover:underline">
                                    (214) 488-2224
                                </CallLink>
                                , or{" "}
                                <Link href="/watchparty" className="text-accent-red hover:underline">
                                    sign up for a match-day watch party
                                </Link>{" "}
                                while the tournament lasts.
                            </p>

                            <PillarCTA type="reservations" />

                            {/* FAQ Section */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                ❓ Frequently Asked Questions
                            </h2>

                            <div className="space-y-6 mb-8">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="border-l-4 border-accent-red pl-4">
                                        <h3 className="text-lg font-bold text-charcoal mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-charcoal/70">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <LocationCTA location="both" />
                        </article>

                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="fox4-good-day-jinbeh-world-cup" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
