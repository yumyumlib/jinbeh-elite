import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Where to Find a Real Sake Bar in DFW | Jinbeh Frisco & Lewisville",
    description:
        "Looking for a proper sake bar in DFW? Jinbeh in Frisco and Lewisville pours sake by the glass, by the flight, and by the bottle alongside Japanese cuisine since 1988.",
    keywords: [
        "sake bar dfw",
        "sake bar frisco",
        "sake bar lewisville",
        "where to drink sake dfw",
        "japanese sake bar dallas",
        "sake flight dfw",
        "sake by the glass frisco",
        "sake tasting frisco",
        "best sake restaurant dfw",
        "sake bar near stonebriar",
        "japanese drinks frisco",
        "sake list frisco lewisville",
        "sake happy hour dfw",
    ],
    openGraph: {
        title: "Sake Bar DFW: Jinbeh Frisco & Lewisville",
        description: "A real sake program in DFW — sake by the glass, flights, and bottles at Jinbeh Frisco and Lewisville. Family-owned since 1988.",
        url: "https://jinbeh.com/blog/best-sake-bar-dfw",
        images: [{ url: "https://jinbeh.com/images/drinks/cocktail.jpg", width: 1200, height: 630, alt: "Sake bar DFW — Jinbeh sake selection and Japanese bar program" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Sake Bar DFW | Jinbeh", description: "A real sake program in DFW — flights, glasses, bottles at Jinbeh Frisco and Lewisville." },
    alternates: { canonical: "https://jinbeh.com/blog/best-sake-bar-dfw" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Where to Find a Real Sake Bar in DFW",
    description: "A guide to drinking sake properly in Dallas-Fort Worth — sake categories, how to order, food pairings, and where Jinbeh fits in DFW's sake scene.",
    image: "https://jinbeh.com/images/drinks/cocktail.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/best-sake-bar-dfw" },
};

const faqs = [
    { question: "Does Jinbeh have a real sake bar in DFW?", answer: "Jinbeh in Frisco and Lewisville maintains a working sake program — sake by the glass, sake flights, and bottles to share with the table. We pour sake to pair with hibachi and sushi, which is how sake is traditionally drunk in Japan. The selection includes junmai, junmai ginjo, junmai daiginjo, honjozo, and nigori styles. Our servers can guide selections based on what you're eating." },
    { question: "What's the difference between junmai, ginjo, and daiginjo sake?", answer: "Junmai sake is brewed from rice, water, yeast, and koji with no added alcohol — the most straightforward style. Junmai ginjo uses rice polished to at least 60% of its original size, which produces lighter, more fragrant sake. Junmai daiginjo uses rice polished to at least 50%, which makes the most refined, aromatic style. Honjozo adds a small amount of distilled alcohol for a crisper finish. Nigori is unfiltered sake — cloudy, slightly sweet, often served chilled with spicy food." },
    { question: "Cold or warm sake — which is right?", answer: "Junmai daiginjo and junmai ginjo are almost always served cold or slightly chilled to preserve the aromatic notes. Junmai and honjozo can be served either way — warm brings out the rice character, cold keeps it lighter. Nigori is served cold. Cheaper sake is often warmed to mask flavor; quality sake is usually served cold. When in doubt, ask the server." },
    { question: "What sake pairs with sushi at Jinbeh?", answer: "For sashimi and light nigiri (salmon, snapper, scallop), a junmai daiginjo or junmai ginjo with floral, fruity notes. For richer specialty rolls (Lobster Volcano, Sunrise, Spider), a fuller-bodied junmai or junmai ginjo. For spicy tuna or rolls with eel sauce, a slightly drier honjozo balances the heat and sweetness. For sashimi flights, a sake flight covering 2-3 styles is the most informative pairing." },
    { question: "What sake pairs with hibachi?", answer: "Hibachi proteins like filet mignon, ribeye, and lobster work with fuller-bodied sake — junmai or junmai ginjo with more rice character. Chicken and shrimp hibachi pair well with lighter junmai daiginjo. Vegetable hibachi works with the same lighter sake styles. For a hibachi table where everyone is sharing, ordering a bottle of junmai to pass around the table is usually the right move." },
    { question: "Does Jinbeh have a sake flight?", answer: "Yes. The Jinbeh sake flight typically presents 3 small pours across different styles — usually a junmai daiginjo, a junmai ginjo, and a junmai — so you can compare the styles in one tasting. Great for first-time sake drinkers or for a date night where the flight becomes a conversation prompt." },
    { question: "Does Jinbeh have happy hour pricing on sake?", answer: "Yes. Happy hour runs Monday-Friday from 5pm to 6:30pm at both Frisco and Lewisville, with $5 sake by the glass during the window. Happy hour drinks are bar-area only. Arriving at 5:30 with a sake flight before transitioning to dinner is one of the better date-night moves in DFW." },
    { question: "Can I learn about sake at Jinbeh, or is it intimidating?", answer: "Sake is intimidating only when nobody tells you anything about it. Our servers will walk you through the menu, recommend a style based on what you're eating, and explain the differences without making you feel like you have to know everything. The sake flight is the cheapest way to taste 3 styles in one sitting — and it's a low-stakes way to figure out what you like." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Beverages", item: "https://jinbeh.com/blog/category/beverages" },
    { "@type": "ListItem", position: 4, name: "Sake Bar DFW" },
]};

export default function SakeBarDFWPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sake Bar DFW" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/drinks/cocktail.jpg" alt="Sake bar DFW — Jinbeh sake selection and Japanese bar program" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/beverages" className="hover:text-white">Beverages</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">🍶 DFW Sake Guide</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Where to Find a Real Sake Bar in DFW</h1>
                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span><span>·</span><span>May 2026</span><span>·</span><span>7 min read</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Most American &ldquo;sake bars&rdquo; pour two bottles of cheap warm sake and call it a sake program.</strong> A real sake bar serves multiple styles cold, knows the difference between junmai and junmai daiginjo, and can recommend a pairing for your meal without making you feel stupid for asking.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">DFW has a small but real sake-drinking community. Jinbeh Frisco and Lewisville have been part of that scene since 1988 &mdash; we pour sake the way it&apos;s meant to be drunk, paired with the food it&apos;s meant to be drunk with. This is a quick guide to drinking sake properly in DFW and where Jinbeh fits in.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Order the flight first time. Three small pours, three styles, ten minutes of paying attention. That&apos;s the cheapest sake education anyone can give you.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">A 60-second sake primer</h2>
                                    <p className="text-charcoal/80 mb-4">Sake is brewed from rice, water, yeast, and koji (a fermentation mold). The main thing that varies across styles is <strong>rice polishing ratio</strong> &mdash; how much of the outer rice grain is milled away before brewing. More polishing = more refined, more aromatic sake.</p>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Junmai</strong> &mdash; pure rice sake, no added alcohol. Full-bodied, rice-forward, food-friendly. Drinks well warm or cold</li>
                                        <li><strong>Junmai ginjo</strong> &mdash; rice polished to 60% or less. Lighter, more fragrant. Usually served cold</li>
                                        <li><strong>Junmai daiginjo</strong> &mdash; rice polished to 50% or less. Most refined, most aromatic. Always cold</li>
                                        <li><strong>Honjozo</strong> &mdash; small amount of distilled alcohol added for a crisper finish. Versatile, works warm or cold</li>
                                        <li><strong>Nigori</strong> &mdash; unfiltered, cloudy, slightly sweet. Always cold. Pairs well with spicy food</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How to order at the Jinbeh sake bar</h2>
                                    <p className="text-charcoal/80 mb-4">Three formats work for almost any meal:</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Sake by the glass</h3>
                                    <p className="text-charcoal/80 mb-4">Single pour, typically 3-4 oz. Good for a single course or as a starter while you decide on dinner. Ask the server for a recommendation based on what you&apos;re eating.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Sake flight</h3>
                                    <p className="text-charcoal/80 mb-4">Three small pours covering different styles &mdash; the educational format. Compare a junmai daiginjo (light, fragrant) against a junmai (richer, fuller) and a honjozo (crisp) side-by-side. The flight is also the right move for two people who want to taste broadly without committing to a bottle.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Bottle to share</h3>
                                    <p className="text-charcoal/80 mb-4">For groups at a hibachi table, a bottle of junmai poured into chilled glasses works through the whole meal. Bottle sizes range from 300ml (for two) to 720ml (for a hibachi table).</p>

                                    <ProTip variant="insider"><strong>Date-night move:</strong> arrive at 5:30 during happy hour (Mon-Fri, sake $5/glass), order the flight as your starter, then transition to a sushi bar two-top at 6:30 with a single bottle to share through dinner. Two phases of the evening, one venue, very controlled spend.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Sake pairings that actually work</h2>
                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">What You&apos;re Eating</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Sake Style</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Light sashimi (salmon, snapper, scallop)</td><td className="py-3">Junmai daiginjo, junmai ginjo</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Richer sashimi (tuna belly, yellowtail)</td><td className="py-3">Junmai ginjo, junmai</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Signature rolls (Sunrise, Lobster Volcano)</td><td className="py-3">Junmai, junmai ginjo</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Spicy rolls (spicy tuna, dragon roll)</td><td className="py-3">Honjozo, nigori</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Hibachi steak, filet, ribeye</td><td className="py-3">Junmai, junmai ginjo</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Hibachi chicken, shrimp, vegetable</td><td className="py-3">Junmai daiginjo, junmai ginjo</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Tempura, fried appetizers</td><td className="py-3">Honjozo, dry junmai</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">When sake isn&apos;t the right call</h2>
                                    <p className="text-charcoal/80 mb-4">Sake doesn&apos;t work for everyone or every meal. If you&apos;re not into rice-fermented drinks, Jinbeh also pours Japanese whiskey neat, craft cocktails (Lychee Martini, Tokyo Mule, Jinbeh Punch), wine, and draft beer. Happy hour covers $4 draft and $6 wine alongside the $5 sake during the 5-6:30 PM window.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Where to find Jinbeh in DFW</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Jinbeh Frisco</strong>: 2693 Preston Rd Suite 1040, near Stonebriar Centre. Phone (214) 619-1200</li>
                                        <li><strong>Jinbeh Lewisville</strong>: 2440 S Stemmons Fwy #A, off I-35E near Vista Ridge. Phone (214) 488-2224</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">Frequently asked questions</h2>
                                    <div className="space-y-6">
                                        {faqs.map((faq, i) => (
                                            <div key={i} className="bg-warm-ivory rounded-2xl p-6">
                                                <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{faq.question}</h3>
                                                <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-charcoal text-warm-ivory rounded-3xl p-8 mt-10">
                                        <h3 className="font-heading text-2xl font-bold mb-3">Try the sake flight at Jinbeh</h3>
                                        <p className="text-warm-ivory/80 mb-4">Three pours, three styles, ten minutes of education. Pair with sushi or hibachi.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/lewisville" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Jinbeh Lewisville</Link>
                                            <Link href="/happy-hour" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Happy Hour</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Sake quick guide</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li><strong>Lightest:</strong> Junmai daiginjo</li>
                                        <li><strong>Mid-range:</strong> Junmai ginjo</li>
                                        <li><strong>Fullest:</strong> Junmai</li>
                                        <li><strong>Crisp:</strong> Honjozo</li>
                                        <li><strong>Sweet/cloudy:</strong> Nigori</li>
                                        <li><strong>Happy hour:</strong> $5 sake, Mon-Fri 5-6:30 PM</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related drink guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/sake-pairing-guide" className="text-accent-red hover:underline">Sake pairing guide</Link></li>
                                        <li><Link href="/blog/types-of-sake-explained" className="text-accent-red hover:underline">Types of sake</Link></li>
                                        <li><Link href="/blog/sake-taste-profile" className="text-accent-red hover:underline">Sake taste profiles</Link></li>
                                        <li><Link href="/blog/japanese-whiskey-guide" className="text-accent-red hover:underline">Japanese whiskey guide</Link></li>
                                        <li><Link href="/happy-hour" className="text-accent-red hover:underline">Happy hour menu</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="best-sake-bar-dfw" />
            <div className="h-12" />
        </main>
    );
}
