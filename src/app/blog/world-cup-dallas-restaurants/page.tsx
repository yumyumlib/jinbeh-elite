import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "World Cup 2026 Dallas: Where to Eat, Watch & Cheer Japan in DFW | Jinbeh",
    description:
        "FIFA World Cup 2026 brings 9 matches to AT&T Stadium, the Japan base camp to Toyota Stadium in Frisco, and 39 days of soccer to DFW. Here's where to eat, watch, and celebrate — from match-day dining to Japan watch parties.",
    keywords: [
        "world cup dallas restaurants",
        "where to eat world cup dallas",
        "fifa world cup 2026 dallas",
        "world cup 2026 dfw",
        "world cup restaurants dfw",
        "japan world cup dallas",
        "japan match dallas att stadium",
        "att stadium restaurants",
        "att stadium dining",
        "japanese restaurant near att stadium",
        "japan base camp frisco",
        "japan training site frisco",
        "toyota stadium fifa base camp",
        "samurai blue dallas",
        "world cup watch party dallas",
        "world cup watch party frisco",
        "world cup watch party lewisville",
        "where to watch japan world cup dallas",
        "fan festival dallas restaurant",
        "fair park world cup dining",
        "world cup family restaurant dallas",
        "world cup group dining dallas",
        "fifa 2026 dallas itinerary",
        "world cup dallas dining guide",
        "best restaurant for world cup dallas",
        "hibachi world cup dallas",
        "sushi near att stadium",
        "japanese steakhouse arlington",
        "japanese restaurant frisco world cup",
        "world cup catering dfw",
        "japan june 14 dallas",
        "japan june 25 dallas",
        "world cup arlington restaurants",
    ],
    openGraph: {
        title: "World Cup 2026 Dallas: Where to Eat, Watch & Cheer Japan in DFW",
        description:
            "AT&T Stadium hosts 9 matches. Toyota Stadium in Frisco is a FIFA base camp. Here's the local guide to eating, watching, and celebrating the FIFA World Cup 2026 in Dallas-Fort Worth.",
        url: "https://jinbeh.com/blog/world-cup-dallas-restaurants",
        images: [
            {
                url: "https://jinbeh.com/images/celebrations/world-cup-watch-party.webp",
                width: 1200,
                height: 630,
                alt: "Group celebrating at Jinbeh Japanese Restaurant during the FIFA World Cup 2026 in Dallas",
            },
        ],
        type: "article",
        siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: {
        card: "summary_large_image",
        title: "World Cup 2026 Dallas: Where to Eat, Watch & Cheer Japan in DFW",
        description: "Your local guide to the FIFA World Cup 2026 in Dallas — match-day dining, Japan watch parties, and DFW's best soccer-season spots.",
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/world-cup-dallas-restaurants",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "World Cup 2026 Dallas: Where to Eat, Watch & Cheer Japan in DFW",
    description:
        "A local's guide to the FIFA World Cup 2026 in Dallas-Fort Worth — AT&T Stadium matches, the Japan base camp at Toyota Stadium in Frisco, the Fair Park Fan Festival, and the best places to eat and celebrate during the 39-day tournament.",
    image: "https://jinbeh.com/images/celebrations/world-cup-watch-party.webp",
    datePublished: "2026-05-11",
    dateModified: "2026-05-11",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
        logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/world-cup-dallas-restaurants" },
};

const faqs = [
    {
        question: "Where can I watch the World Cup 2026 in Dallas?",
        answer:
            "Jinbeh Japanese Restaurant in Frisco and Lewisville is one of DFW's most-loved family-friendly spots to watch the FIFA World Cup 2026. AT&T Stadium in Arlington hosts 9 matches in person, and Fair Park in Dallas runs the official FIFA Fan Festival for all 39 tournament days. For watch parties with food, hibachi tables, and sushi, Jinbeh is open through the tournament with reservations strongly recommended for Japan match days (June 14 and June 25).",
    },
    {
        question: "When does Japan play in Dallas during the FIFA World Cup 2026?",
        answer:
            "Japan plays two group-stage matches at AT&T Stadium in Arlington — Netherlands vs. Japan on Sunday, June 14 at 3:00 PM Central Time, and Japan vs. UEFA Playoff Winner on Thursday, June 25 at 9:00 PM Central Time. Toyota Stadium in Frisco (less than 3 miles from Jinbeh Frisco) is a designated FIFA base camp and training site for participating teams.",
    },
    {
        question: "Why is Frisco important for Japan World Cup fans?",
        answer:
            "Toyota Stadium in Frisco serves as a FIFA-designated base camp and training site during the 2026 World Cup, which means visiting national teams use Frisco as a home base between matches. For Japan fans traveling to DFW, Frisco is the natural meeting point — and Jinbeh Frisco at 2693 Preston Rd is less than 3 miles from Toyota Stadium, making it the closest Japanese restaurant to Japan's likely Dallas-area base.",
    },
    {
        question: "What's the best Japanese restaurant near AT&T Stadium for World Cup matches?",
        answer:
            "Jinbeh Japanese Restaurant has two DFW locations within driving distance of AT&T Stadium in Arlington — Jinbeh Frisco (42 miles north) and Jinbeh Lewisville (32 miles north, off I-35E). Both serve authentic hibachi and fresh sushi, both have full bars with premium sake, and both are family-owned since 1988. Jinbeh Lewisville is the closer of the two to Arlington for pre-match or post-match dining.",
    },
    {
        question: "Does Jinbeh do World Cup watch parties or group dining?",
        answer:
            "Yes. Jinbeh hosts watch-party-style group dining at both Frisco and Lewisville during the World Cup. Hibachi tables seat 7-8 guests, so groups can share the tableside experience while watching matches. Reservations are strongly recommended for all Dallas match days and required for Japan's matches on June 14 and June 25. For corporate watch parties or off-site catering, contact us at least one week in advance.",
    },
    {
        question: "Is Jinbeh family-friendly during the World Cup?",
        answer:
            "Jinbeh has welcomed DFW families since 1988. Hibachi tables are built around shared seating, kids love the tableside chef show with the famous onion volcano, and our menu has options for every guest. For families traveling to Dallas for the World Cup, Jinbeh offers a way to celebrate the tournament that works for every age — adults get sake and full hibachi entrées, kids get the show.",
    },
    {
        question: "Where is the FIFA Fan Festival in Dallas?",
        answer:
            "The official FIFA Fan Festival for the 2026 World Cup runs at Fair Park in Dallas for all 39 tournament days (June 11 - July 19, 2026), with FREE entry, a 35,000-person capacity, and live match broadcasts on giant screens. For sit-down dining before or after a Fan Festival visit, Jinbeh Frisco and Lewisville are both about 30-45 minutes from Fair Park by car.",
    },
    {
        question: "How do I make a Jinbeh reservation for a World Cup match day?",
        answer:
            "Reserve online through OpenTable at jinbeh.com, or call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224. For Japan match days (June 14 and June 25) and the World Cup Final, we strongly recommend booking 2-4 weeks ahead. Walk-ins are welcome but cannot be guaranteed on match days.",
    },
    {
        question: "What times are World Cup matches in Dallas?",
        answer:
            "Most Dallas matches at AT&T Stadium run in the afternoon and evening Central Time. Japan's matches are June 14 at 3:00 PM CT (vs. Netherlands) and June 25 at 9:00 PM CT (vs. UEFA Playoff Winner). The full schedule includes 9 matches at AT&T Stadium across the group stage, Round of 32, Round of 16, and a Semifinal on July 14. Check FIFA's official site for kick-off times by match.",
    },
    {
        question: "Where can I get sushi after a match at AT&T Stadium?",
        answer:
            "Jinbeh Lewisville (32 miles north of AT&T Stadium, off I-35E near Vista Ridge Mall) is a popular post-match sushi destination — open until 10 PM Friday-Saturday and 9 PM other nights. Jinbeh Frisco offers the same menu with a premium sushi bar and is the closest authentic Japanese option to Toyota Stadium and the Japan training site.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
        { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
        { "@type": "ListItem", position: 4, name: "World Cup 2026 Dallas Restaurants" },
    ],
};

const eventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "FIFA World Cup 2026 — Dallas matches",
    description:
        "The 2026 FIFA World Cup hosts 9 matches at AT&T Stadium in Arlington, TX, including two Japan group-stage matches on June 14 and June 25. Toyota Stadium in Frisco is a FIFA base camp.",
    startDate: "2026-06-11T00:00:00-05:00",
    endDate: "2026-07-19T23:59:59-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: [
        {
            "@type": "Place",
            name: "AT&T Stadium",
            address: { "@type": "PostalAddress", addressLocality: "Arlington", addressRegion: "TX", addressCountry: "US" },
        },
        {
            "@type": "Place",
            name: "Toyota Stadium (FIFA Base Camp)",
            address: { "@type": "PostalAddress", addressLocality: "Frisco", addressRegion: "TX", addressCountry: "US" },
        },
        {
            "@type": "Place",
            name: "Fair Park (Official Fan Festival)",
            address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
        },
    ],
    organizer: { "@type": "Organization", name: "FIFA", url: "https://www.fifa.com" },
};

export default function WorldCupDallasRestaurantsPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "World Cup Dallas Restaurants" }]} />
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/celebrations/world-cup-watch-party.webp"
                    alt="World Cup Dallas Restaurants at Jinbeh Japanese restaurant"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/blog/category/local-guide" className="hover:text-white">Local Guides</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        ⚽ Local Guides · FIFA World Cup 2026
                    </span>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        World Cup 2026 Dallas: Where to Eat, Watch & Cheer Japan in DFW
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span>
                        <span>·</span>
                        <span>May 2026</span>
                        <span>·</span>
                        <span>11 min read</span>
                        <span>·</span>
                        <span>Updated for the June 11 – July 19 tournament</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">

                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                                        <strong>From June 11 through July 19, 2026, Dallas–Fort Worth becomes a soccer city.</strong> AT&amp;T Stadium
                                        in Arlington hosts nine FIFA World Cup matches — group stage, knockouts, and a Semifinal on July 14. Toyota Stadium
                                        in Frisco serves as a FIFA base camp, where visiting national teams train between matches. Fair Park in Dallas
                                        runs the official FIFA Fan Festival for all 39 days. And somewhere in the middle of all of that, half a million
                                        international visitors will need a place to sit down, eat, and watch.
                                    </p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                                        This is our local guide to <strong>where to eat, where to watch, and where to celebrate the World Cup in
                                        Dallas</strong> — written by a Japanese restaurant family who has been part of the DFW dining scene since
                                        1988, and who happens to sit less than three miles from the Japan base camp in Frisco.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            &ldquo;Japan is coming to Texas. We&apos;ve been here, cooking Japanese food in Texas, since 1988. We can&apos;t wait
                                            to welcome travelers, families, neighbors — anyone who wants to share dinner and a show during the biggest
                                            month of football this city has ever seen.&rdquo;
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">— The Jinbeh Family</span>
                                    </div>

                                    {/* Map of the tournament */}
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">The World Cup map of DFW</h2>
                                    <p className="text-lg text-charcoal/80 mb-6">
                                        Three locations in DFW matter for the 2026 tournament — and they sit in a triangle stretched across the metro:
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">
                                        AT&amp;T Stadium (Arlington) — the match venue
                                    </h3>
                                    <p className="text-charcoal/80 mb-4">
                                        Jerry World hosts <strong>nine FIFA World Cup matches</strong> across the group stage, Round of 32, Round of 16,
                                        and a Semifinal on July 14. The retractable roof means weather isn&apos;t a factor for any of the
                                        Dallas-area matches. Capacity sits around 80,000 for soccer configuration. Parking and traffic on match days
                                        will be a factor — plan for it.
                                    </p>
                                    <p className="text-charcoal/80 mb-4">
                                        <strong>Jinbeh Lewisville</strong> is the closer of our two locations to AT&amp;T Stadium — about 32 miles north,
                                        a 35–45 minute drive depending on match-day traffic via I-35E. For pre-match lunch or post-match dinner, it&apos;s
                                        the practical choice for fans coming up from Arlington.
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">
                                        Toyota Stadium (Frisco) — the Japan base camp
                                    </h3>
                                    <p className="text-charcoal/80 mb-4">
                                        This is the part most casual fans don&apos;t know about yet: Toyota Stadium in Frisco is a designated
                                        <strong> FIFA base camp and training site</strong> for the 2026 tournament. That means visiting national teams
                                        use Frisco as their home base between matches — training, hotels, recovery, all anchored to this stadium.
                                        Toyota Stadium is also home to the National Soccer Hall of Fame.
                                    </p>
                                    <p className="text-charcoal/80 mb-4">
                                        For Japanese fans visiting Dallas, Frisco is the natural neighborhood to stay, eat, and gather.
                                        <strong> Jinbeh Frisco sits less than three miles from Toyota Stadium</strong>, at 2693 Preston Rd Suite 1040.
                                        It&apos;s the closest authentic Japanese restaurant to where Team Japan is most likely to be training and
                                        recovering — which makes it the closest thing DFW has to a Japan-supporter clubhouse for the tournament.
                                    </p>

                                    <DidYouKnow fact="Toyota Stadium isn't just a base camp — it's also where the National Soccer Hall of Fame lives. Worth a stop on a Japan-themed Frisco day, whether or not Japan is training that afternoon." />

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">
                                        Fair Park (Dallas) — the FIFA Fan Festival
                                    </h3>
                                    <p className="text-charcoal/80 mb-4">
                                        Fair Park hosts the official <strong>FIFA Fan Festival</strong> for all 39 days of the tournament. Free entry,
                                        roughly 35,000-person daily capacity, giant screens broadcasting every match, food vendors, live music. If you
                                        want the public-celebration version of the World Cup experience without a $1,000 stadium ticket, this is it.
                                    </p>
                                    <p className="text-charcoal/80 mb-4">
                                        After a long day at Fair Park, both Jinbeh locations are about 30–45 minutes north by car for a real sit-down
                                        meal and a chance to actually hear each other talk.
                                    </p>

                                    {/* When Japan plays */}
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">When Japan plays in Dallas</h2>
                                    <p className="text-lg text-charcoal/80 mb-6">
                                        Japan&apos;s <strong>Samurai Blue</strong> have two group-stage matches scheduled at AT&amp;T Stadium during the
                                        2026 World Cup:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                        <div className="bg-deep-indigo text-white rounded-2xl p-6">
                                            <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Group Stage · Match 1</div>
                                            <div className="text-2xl font-heading font-bold mb-1">Netherlands vs. Japan</div>
                                            <div className="text-white/85">Sunday, June 14, 2026</div>
                                            <div className="text-white/85">3:00 PM Central Time</div>
                                            <div className="text-white/70 text-sm mt-2">AT&amp;T Stadium · Arlington, TX</div>
                                        </div>
                                        <div className="bg-deep-indigo text-white rounded-2xl p-6">
                                            <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Group Stage · Match 2</div>
                                            <div className="text-2xl font-heading font-bold mb-1">Japan vs. UEFA Playoff Winner</div>
                                            <div className="text-white/85">Thursday, June 25, 2026</div>
                                            <div className="text-white/85">9:00 PM Central Time</div>
                                            <div className="text-white/70 text-sm mt-2">AT&amp;T Stadium · Arlington, TX</div>
                                        </div>
                                    </div>

                                    <p className="text-charcoal/80 mb-4">
                                        These two days will be the highest-energy moments in DFW for Japanese fans, expat communities, and anyone
                                        who has ever sent their kids to a Japan-themed cultural event. Reservations for those nights — at Jinbeh and
                                        every other Japanese restaurant in DFW — will go fast. <strong>Book early.</strong>
                                    </p>

                                    <ProTip variant="insider">
                                        <strong>Insider tip:</strong> If you&apos;re flying in for the June 14 Netherlands–Japan match,
                                        plan to land Friday or Saturday and reserve dinner at <Link href="/frisco" className="text-accent-red hover:underline">Jinbeh Frisco</Link>{" "}
                                        the night before. Hibachi tables are built for groups of 7–8, so a family or fan party can share one chef.
                                    </ProTip>

                                    {/* Where to eat */}
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">
                                        Where to eat during the World Cup in Dallas
                                    </h2>

                                    <p className="text-lg text-charcoal/80 mb-6">
                                        We&apos;re a Japanese restaurant family — we&apos;ll never tell you Jinbeh is the only good place to eat in DFW
                                        during the tournament. The metro has a deep restaurant scene. But for World Cup fans specifically — for the
                                        tournament vibe, for groups, for families, for international visitors who want a meal that feels like an
                                        event — here&apos;s how we&apos;d think about it.
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">
                                        For Japanese fans and Japan match days
                                    </h3>
                                    <p className="text-charcoal/80 mb-4">
                                        Jinbeh has been the Japanese-American family restaurant of choice in Frisco and Lewisville since 1988.
                                        We&apos;re not a sushi-only spot, we&apos;re not a hibachi-only spot — we&apos;re both, under the same roof,
                                        with a full bar of <strong>premium sake</strong>, Japanese whiskey, and signature cocktails. For Japan match
                                        days, that combination matters: a sake toast before kickoff, hibachi for the celebratory main course, sushi
                                        rolls for the table to share.
                                    </p>
                                    <p className="text-charcoal/80 mb-4">
                                        Our <Link href="/celebrations/world-cup" className="text-accent-red hover:underline font-semibold">FIFA World Cup
                                        2026 celebration page</Link> has the current details on our tournament programming.
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">
                                        For pre-match and post-match dinner near AT&amp;T Stadium
                                    </h3>
                                    <p className="text-charcoal/80 mb-4">
                                        Arlington itself has dining around the stadium, but it gets crushed on match days. For a sit-down,
                                        less-chaotic option, drive 30–45 minutes north — that&apos;s where you&apos;ll find{" "}
                                        <Link href="/lewisville" className="text-accent-red hover:underline font-semibold">Jinbeh Lewisville</Link>{" "}
                                        right off I-35E near Vista Ridge Mall, with hibachi seating that can accommodate a group of fans, and a
                                        sushi bar for a quieter post-match dinner.
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">
                                        For families with kids during the tournament
                                    </h3>
                                    <p className="text-charcoal/80 mb-4">
                                        Hibachi is built for families. The chef puts on a show — onion volcano, knife tricks, flying shrimp — and kids
                                        love it. Hibachi tables seat 7–8, so a family of four can comfortably share with another family, or a multi-
                                        generation group can take a full table. We have a dedicated <Link href="/frisco/kids-menu"
                                        className="text-accent-red hover:underline font-semibold">Kids Menu</Link> and we&apos;re used to balancing
                                        adult dinner with kids who&apos;ve been on their feet all day at Fair Park.
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">
                                        For corporate watch parties and group bookings
                                    </h3>
                                    <p className="text-charcoal/80 mb-4">
                                        Companies hosting clients during the tournament — Toyota, Japanese multinationals with DFW offices, sports
                                        agencies, hotel concierges arranging group experiences — can book a reserved hibachi setup with a guaranteed
                                        screen on the match. For off-site catering, our team brings hibachi presentation trays and sushi platters
                                        to office watch parties; live tableside hibachi is restaurant-only. See our{" "}
                                        <Link href="/catering" className="text-accent-red hover:underline font-semibold">catering page</Link> for
                                        details and lead times.
                                    </p>

                                    <p className="text-charcoal/80 italic mb-4">
                                        Two locations, two strategic anchors for the tournament:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>
                                            <strong><Link href="/frisco" className="text-accent-red hover:underline">Jinbeh Frisco</Link></strong>{" "}
                                            — less than 3 miles from Toyota Stadium, the FIFA-designated Japan training site for 2026.
                                        </li>
                                        <li>
                                            <strong><Link href="/lewisville" className="text-accent-red hover:underline">Jinbeh Lewisville</Link></strong>{" "}
                                            — 32 miles north of AT&amp;T Stadium, off I-35E — the practical pre/post-match dinner stop for Arlington matches.
                                        </li>
                                    </ul>

                                    <LocationCTA location="both" />

                                    {/* Practical tips */}
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">
                                        Practical tips for World Cup match days in DFW
                                    </h2>

                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li>
                                            <strong>Reservations open up to 30 days in advance.</strong> For Japan match days (June 14 and June 25) and
                                            the Semifinal on July 14, treat reservations like flights — book the moment they open and you&apos;ll be fine.
                                        </li>
                                        <li>
                                            <strong>Traffic doubles on match days.</strong> AT&amp;T Stadium events typically slow I-30, I-35E, and US-75
                                            for 4+ hours around kickoff. Build buffer time. If you&apos;re going to a Jinbeh in Frisco or Lewisville
                                            before a match, leave 90 minutes for a 35-minute drive.
                                        </li>
                                        <li>
                                            <strong>Hotel concierges are your friend.</strong> Concierges at Westin Stonebriar, Embassy Suites Frisco,
                                            Marriott Legacy Town Center, and most DFW hotels will help arrange transportation. Ask them about Jinbeh
                                            specifically — we&apos;re working with multiple DFW hotels on guest dining partnerships for the tournament.
                                        </li>
                                        <li>
                                            <strong>Cash is fine, but bring cards too.</strong> Visiting fans from Europe and Asia sometimes assume
                                            U.S. restaurants are cash-friendly. Many DFW spots are card-only or card-preferred. Jinbeh accepts both.
                                        </li>
                                        <li>
                                            <strong>Tipping is real.</strong> Standard U.S. tipping is 18–20% on restaurant meals. Hibachi chefs work
                                            hard for tips — this is part of the experience.
                                        </li>
                                        <li>
                                            <strong>Drink water.</strong> Texas in June can hit 100°F. If you&apos;re flying in from Tokyo or Amsterdam,
                                            give yourself a day to acclimate before a 3:00 PM match.
                                        </li>
                                    </ul>

                                    {/* The Japan angle */}
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">
                                        Why Jinbeh and Japan, specifically
                                    </h2>
                                    <p className="text-charcoal/80 mb-4">
                                        We&apos;re a small family business. We&apos;ve been cooking hibachi and sushi in Texas since 1988. We&apos;re
                                        not a Japanese-themed concept — we&apos;re Japanese cooks who built a restaurant in DFW and have spent 38 years
                                        learning how to make this food work for North Texas families. Half of our regular guests have been coming
                                        since their kids were in car seats. One regular has celebrated her birthday at Jinbeh every year since she
                                        was seven; she&apos;s 24 now.
                                    </p>
                                    <p className="text-charcoal/80 mb-4">
                                        That history matters during the World Cup because <strong>this tournament is bringing Japan to Texas</strong>.
                                        Japan&apos;s national team will train in Frisco. Japanese fans will fly in. Japanese journalists will cover
                                        matches. Japanese-American families across DFW will gather for the games. We want Jinbeh to be one of the
                                        rooms where that happens — for the diaspora, for visiting fans, and for any North Texas neighbor who wants
                                        to celebrate the moment with us.
                                    </p>

                                    <PillarCTA type="reservations" />

                                    {/* FAQs */}
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        Frequently asked questions
                                    </h2>
                                    <div className="space-y-6">
                                        {faqs.map((faq, i) => (
                                            <div key={i} className="bg-warm-ivory rounded-2xl p-6">
                                                <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{faq.question}</h3>
                                                <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-charcoal text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Tournament window</div>
                                    <div className="text-2xl font-heading font-bold mb-2">June 11 – July 19, 2026</div>
                                    <p className="text-white/80 text-sm">39 consecutive days · 9 matches at AT&amp;T Stadium · Toyota Stadium base camp · Fan Festival at Fair Park</p>
                                </div>

                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Reserve at Jinbeh</h3>
                                    <p className="text-sm text-charcoal/70 mb-4">Two DFW locations, both open through the tournament. Book early for Japan match days.</p>
                                    <Link href="/frisco" className="block bg-accent-red text-white rounded-xl px-4 py-3 text-center font-semibold mb-2 hover:bg-accent-red/90">
                                        Jinbeh Frisco
                                    </Link>
                                    <Link href="/lewisville" className="block bg-deep-indigo text-white rounded-xl px-4 py-3 text-center font-semibold hover:bg-deep-indigo/90">
                                        Jinbeh Lewisville
                                    </Link>
                                </div>

                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Inside the tournament</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/celebrations/world-cup" className="text-accent-red hover:underline">Jinbeh&apos;s World Cup page</Link></li>
                                        <li><Link href="/catering" className="text-accent-red hover:underline">Catering &amp; group watch parties</Link></li>
                                        <li><Link href="/private-dining" className="text-accent-red hover:underline">Private dining for events</Link></li>
                                        <li><Link href="/happy-hour" className="text-accent-red hover:underline">Happy hour, Mon–Fri 5–6:30 PM</Link></li>
                                        <li><Link href="/blog/things-to-do-frisco" className="text-accent-red hover:underline">Things to do in Frisco</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="world-cup-dallas-restaurants" />

            <div className="h-12" />
        </main>
    );
}
