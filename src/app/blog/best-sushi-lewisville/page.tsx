import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Best Sushi in Lewisville TX: Jinbeh's New Upscale Sushi Bar | Jinbeh",
    description:
        "Looking for the best sushi in Lewisville TX? Jinbeh just completed a brand-new upscale sushi bar renovation on South Stemmons Freeway after 26+ years.",
    keywords: [
        "best sushi lewisville",
        "sushi lewisville tx",
        "japanese sushi lewisville",
        "sushi near vista ridge",
        "fresh sushi lewisville",
        "upscale sushi lewisville",
    ],
    openGraph: {
        title: "Best Sushi in Lewisville TX: A Sushi Bar Worth Finding on Stemmons Freeway",
        description:
            "Jinbeh's brand-new upscale sushi bar renovation, the rolls worth ordering by name, and how Lewisville's sushi scene grew up.",
        images: ["/images/photoshoot/specialty-roll.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/best-sushi-lewisville",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Sushi in Lewisville TX: Jinbeh's New Upscale Sushi Bar",
    description:
        "A Lewisville sushi guide to the rolls worth ordering by name and the family-owned Japanese restaurant that just completed a brand-new upscale sushi bar renovation.",
    image: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
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
};

const faqs = [
    {
        question: "Where is the best sushi in Lewisville TX?",
        answer:
            "Jinbeh Japanese Restaurant Lewisville is widely regarded as the best sushi destination in Lewisville. The restaurant just completed a brand-new upscale sushi bar renovation on South Stemmons Freeway, after serving Lewisville continuously for over 26 years. Fresh fish from trusted coastal distributors, hand-cut nigiri and sashimi, and signature rolls in a newly redesigned premium space.",
    },
    {
        question: "When did Jinbeh Lewisville renovate its sushi bar?",
        answer:
            "Jinbeh completed a substantial renovation of its Lewisville sushi bar in late 2025, investing in an upscale space designed to match Lewisville's evolved sushi expectations. The new sushi bar offers premium counter seating where guests can watch our chefs prepare each piece to order.",
    },
    {
        question: "How long has Jinbeh Lewisville been serving sushi?",
        answer:
            "Jinbeh Lewisville opened in 1999 as a family-owned Japanese steakhouse with a sushi bar alongside the hibachi grills. The restaurant has served Lewisville continuously for over 26 years, and is part of the Jinbeh family that has been serving North Texas since 1988.",
    },
    {
        question: "What makes great sushi in Lewisville?",
        answer:
            "Great sushi comes down to four things, in this order: freshness, rice, knife work, and chef experience. A good sushi program takes fish delivery several times per week from a trusted coastal distributor, cuts each piece to order rather than pre-slicing, and pays as much attention to the rice as to the fish. Jinbeh Lewisville does all four.",
    },
    {
        question: "Do I need a reservation for the sushi bar at Jinbeh Lewisville?",
        answer:
            "Reservations are recommended for the dining room, especially on weekends. Walk-ins are welcome at the sushi bar based on availability. To reserve, book through OpenTable or call (214) 488-2224.",
    },
    {
        question: "Is Jinbeh Lewisville good for date night?",
        answer:
            "Yes. With the newly renovated upscale sushi bar, Jinbeh Lewisville is one of the strongest date-night sushi rooms in the Stemmons Freeway corridor. Premium nigiri, signature rolls, a proper sake program, and full Japanese bar.",
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
        { "@type": "ListItem", position: 3, name: "Best Sushi in Lewisville", item: "https://jinbeh.com/blog/best-sushi-lewisville" },
    ],
};

const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Jinbeh Japanese Restaurant Lewisville",
    image: "https://jinbeh.com/images/photoshoot/specialty-roll.jpg",
    "@id": "https://jinbeh.com/lewisville/sushi",
    url: "https://jinbeh.com/lewisville/sushi",
    telephone: "+1-214-488-2224",
    priceRange: "$$",
    servesCuisine: ["Japanese", "Sushi", "Sashimi"],
    address: {
        "@type": "PostalAddress",
        streetAddress: "2440 S. Stemmons Freeway, Suite A",
        addressLocality: "Lewisville",
        addressRegion: "TX",
        postalCode: "75067",
        addressCountry: "US",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 33.0309,
        longitude: -96.9985,
    },
    areaServed: [
        { "@type": "City", name: "Lewisville" },
        { "@type": "City", name: "Flower Mound" },
        { "@type": "City", name: "Highland Village" },
        { "@type": "City", name: "The Colony" },
        { "@type": "City", name: "Carrollton" },
    ],
};

export default function BestSushiLewisvillePage() {
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
            />

            {/* Hero */}
            <section className="relative bg-charcoal py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <Image
                        src="/images/photoshoot/sushi-tower.jpg"
                        alt="Multi-tier sushi tower with premium nigiri, sashimi, and specialty rolls at Jinbeh Lewisville sushi bar"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-6 max-w-5xl">
                    <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Best Sushi in Lewisville" }]} />
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4 mt-4">
                        ✨ Brand-New Upscale Sushi Bar
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl mb-4">
                        Best Sushi in Lewisville TX: A Sushi Bar Worth Finding on Stemmons
                    </h1>
                    <p className="text-xl text-warm-ivory/90 max-w-3xl">
                        A Lewisville sushi guide to the rolls worth ordering by name, the
                        sushi bars worth a reservation, and the family-owned Japanese
                        restaurant that just completed a brand-new upscale sushi bar
                        renovation on South Stemmons Freeway.
                    </p>
                </div>
            </section>

            {/* Body */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 prose prose-lg max-w-none">
                                <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
                                    <strong>Welcome to the table, friends.</strong>{" "}
                                    Lewisville&apos;s sushi scene has quietly evolved over the
                                    last decade. What used to be a handful of casual grab-and-go
                                    sushi counters has grown into a real sushi market with
                                    traditional Japanese kitchens, Korean-Japanese fusion spots,
                                    and serious sushi bars pulling fresh and flavorful fish
                                    from trusted coastal distributors.
                                </p>

                                <p>
                                    The best sushi Lewisville TX has to offer is no longer a
                                    secret, but the best sushi bars still take a little
                                    navigating. This guide covers what separates a real
                                    Japanese sushi Lewisville program from a passable one, and
                                    why Jinbeh Japanese Restaurant Lewisville just invested in
                                    a brand-new upscale sushi bar after 26+ years on Stemmons
                                    Freeway.
                                </p>

                                <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                    📈 Lewisville&apos;s Sushi Scene Has Grown Up
                                </h2>

                                <p>
                                    Fifteen years ago, sushi in Lewisville meant a few casual
                                    spots doing California rolls out of strip-mall kitchens.
                                    Serious sushi diners drove to Plano, Addison, or Dallas for
                                    anything more ambitious. That has changed. Today, Lewisville
                                    supports traditional Japanese sushi restaurants,
                                    Korean-Japanese fusion kitchens, and sushi-focused
                                    restaurants serving actual chirashi, sashimi combinations,
                                    and chef&apos;s-choice plates.
                                </p>

                                <p>
                                    Jinbeh Lewisville has grown with that market. The restaurant
                                    opened in 1999 as a family-owned Japanese steakhouse with a
                                    sushi bar alongside the hibachi grills, and has served
                                    Lewisville continuously ever since. In late 2025, Jinbeh
                                    completed a substantial renovation of its sushi bar,
                                    investing in an upscale space designed to match
                                    Lewisville&apos;s evolved sushi expectations.
                                </p>

                                <DidYouKnow
                                    fact="The renovated Jinbeh Lewisville sushi bar features premium counter seating where guests can watch chefs prepare each piece by hand. Most fish at Jinbeh is cut to order, not pre-sliced, which is the single biggest difference between a good sushi program and a passable one."
                                    source="Jinbeh Lewisville"
                                />

                                <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                    🍣 What Makes Great Sushi (Anywhere)
                                </h2>

                                <p>
                                    Great sushi comes down to four things, in this order.
                                    Freshness. Rice. Knife work. Chef experience.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                                    <div className="bg-warm-ivory rounded-2xl p-6">
                                        <span className="text-3xl mb-3 block">🐟</span>
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">1. Freshness</h3>
                                        <p className="text-charcoal/70 text-sm">
                                            A good sushi program takes fish delivery several times
                                            per week from a trusted coastal distributor or directly
                                            from Japan&apos;s Toyosu Market. Fish is cut to order,
                                            not pre-sliced and stored.
                                        </p>
                                    </div>
                                    <div className="bg-warm-ivory rounded-2xl p-6">
                                        <span className="text-3xl mb-3 block">🍚</span>
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">2. Rice</h3>
                                        <p className="text-charcoal/70 text-sm">
                                            Sushi rice should be warm, properly seasoned with
                                            vinegar, and pressed with the right pressure. The fish
                                            gets the headlines, but the rice is what separates a
                                            real sushi chef from a roll station.
                                        </p>
                                    </div>
                                    <div className="bg-warm-ivory rounded-2xl p-6">
                                        <span className="text-3xl mb-3 block">🔪</span>
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">3. Knife Work</h3>
                                        <p className="text-charcoal/70 text-sm">
                                            Clean, precise cuts on the fish, consistent thickness
                                            on the nigiri, and proper handling so the fish never
                                            looks bruised. You can taste the difference between a
                                            careful slice and a sloppy one.
                                        </p>
                                    </div>
                                    <div className="bg-warm-ivory rounded-2xl p-6">
                                        <span className="text-3xl mb-3 block">👨‍🍳</span>
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">4. Chef Experience</h3>
                                        <p className="text-charcoal/70 text-sm">
                                            Sushi takes years to learn. Look for chefs with real
                                            tenure behind the bar. Jinbeh&apos;s head sushi chef has
                                            been with the family for nearly 30 years.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                    🏯 Why Jinbeh Lewisville for Sushi
                                </h2>

                                <p>
                                    Jinbeh is a family-owned Japanese restaurant established in
                                    1988, not a chain or franchise. The Lewisville location
                                    opened in 1999 and has served Stemmons Freeway continuously
                                    for over 26 years. Two locations. Two generations of
                                    regulars. One family table, set since 1988.
                                </p>

                                <p>
                                    The new sushi bar, completed in late 2025, was designed for
                                    serious sushi appreciation. Premium counter seating, a clear
                                    sight line to the chefs, and a room that holds its own
                                    against the upscale sushi destinations across DFW. The
                                    nigiri, sashimi, and signature rolls have always been a
                                    strength here. The room finally matches the food.
                                </p>

                                <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                    <p className="text-charcoal font-medium italic text-lg mb-2">
                                        &ldquo;The fish is cut to order. The rice is warm. The
                                        room is brand new. After 26 years on Stemmons, this is
                                        the sushi bar Lewisville has been waiting for.&rdquo;
                                    </p>
                                    <span className="text-sm text-charcoal/80 block">, The Jinbeh Family</span>
                                </div>

                                <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                    🍱 What to Order at the Jinbeh Lewisville Sushi Bar
                                </h2>

                                <p>
                                    For first-time guests, start with the bluefin tuna or
                                    yellowtail nigiri to taste the freshness directly. Move to
                                    the salmon sashimi or the chirashi for variety. The
                                    signature roll list deserves attention: the{" "}
                                    <Link href="/lewisville/sushi-rolls/dragon-roll" className="text-accent-red hover:underline">
                                        Dragon Roll
                                    </Link>
                                    ,{" "}
                                    <Link href="/lewisville/sushi-rolls/rainbow-roll" className="text-accent-red hover:underline">
                                        Rainbow Roll
                                    </Link>
                                    , and{" "}
                                    <Link href="/lewisville/sushi-rolls/butterfly-kiss" className="text-accent-red hover:underline">
                                        Butterfly Kiss
                                    </Link>{" "}
                                    are house favorites worth ordering by name.
                                </p>

                                <p>
                                    Pair with a small hot sake or a beer from the{" "}
                                    <Link href="/happy-hour" className="text-accent-red hover:underline">
                                        Jinbeh happy hour menu
                                    </Link>{" "}
                                    (Mon-Fri, 5:00 to 6:30 PM). Browse the full sushi roll list
                                    on the{" "}
                                    <Link href="/lewisville/sushi-rolls" className="text-accent-red hover:underline">
                                        Jinbeh Lewisville sushi rolls page
                                    </Link>
                                    .
                                </p>

                                <ProTip variant="insider">
                                    <strong>Insider tip:</strong> Sit at the renovated sushi bar
                                    rather than the dining room if you want the chef&apos;s
                                    attention. The chefs are happy to recommend whatever fish
                                    came in fresh that day. Tell them what you like and what you
                                    want to try, and trust the recommendation.{" "}
                                    <Link href="/reservations" className="text-accent-red hover:underline">
                                        Reserve at Jinbeh Lewisville &rarr;
                                    </Link>
                                </ProTip>

                                <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                    🚗 Easy from Flower Mound, Highland Village, The Colony, and Carrollton
                                </h2>

                                <p>
                                    The renovated Jinbeh Lewisville sushi bar sits right on
                                    Stemmons Freeway, which makes it easy to find from anywhere
                                    in the corridor. Friends from Flower Mound, Highland Village,
                                    The Colony, and Carrollton are regulars at the sushi bar.
                                    Folks from Coppell, Lake Dallas, and Little Elm find the new
                                    upscale room well worth the short drive. It is the
                                    date-night sushi destination Lewisville has been waiting
                                    for, and the family-friendly room kids love coming back to.
                                </p>

                                <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                    📍 Where to Find Jinbeh Lewisville
                                </h2>

                                <p>
                                    <strong>Jinbeh Lewisville</strong>
                                    <br />
                                    2440 S. Stemmons Freeway, Suite A
                                    <br />
                                    Lewisville, TX 75067
                                    <br />
                                    Reservations: (214) 488-2224
                                </p>

                                <p>
                                    Both Jinbeh restaurants serve lunch and dinner seven days a
                                    week. For diners north of the Sam Rayburn Tollway, Jinbeh{" "}
                                    <Link href="/frisco" className="text-accent-red hover:underline">
                                        Frisco
                                    </Link>{" "}
                                    is at 2693 Preston Road, Suite 1040, Frisco, TX 75034, with
                                    its own sushi bar and head sushi chef. Reservations at
                                    Frisco: (214) 619-1200.
                                </p>

                                <p>
                                    Whether you are coming for a date night, a celebration, or
                                    just a Tuesday that calls for fresh and flavorful nigiri,
                                    pull up a stool at the new sushi bar. Every meal here is a
                                    celebration. Thank you for dining with us.
                                </p>

                                <PillarCTA type="reservations" />
                                <LocationCTA location="lewisville" />
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="best-sushi-lewisville" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
