import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Corporate Event Catering DFW: Japanese Catering for Offices | Jinbeh",
    description:
        "Corporate event catering in DFW from Jinbeh — drop-off Japanese catering for offices, client dinners, team builds, and quarterly events. Frisco and Lewisville delivery. Family-owned since 1988.",
    keywords: [
        "corporate event catering dfw",
        "corporate catering dfw",
        "office catering dfw",
        "corporate japanese catering frisco",
        "corporate japanese catering lewisville",
        "office lunch catering frisco",
        "office lunch catering lewisville",
        "client dinner catering dfw",
        "team build catering frisco",
        "quarterly event catering dfw",
        "japanese corporate catering",
        "hibachi corporate catering dfw",
        "sushi corporate catering dfw",
    ],
    openGraph: {
        title: "Corporate Event Catering DFW | Jinbeh",
        description: "Drop-off Japanese catering for DFW offices and corporate events. Frisco and Lewisville delivery zones. Family-owned since 1988.",
        url: "https://jinbeh.com/blog/corporate-event-catering-dfw",
        images: [{ url: "https://jinbeh.com/images/photoshoot/sushi-tower.jpg", width: 1200, height: 630, alt: "Corporate event catering DFW — Jinbeh drop-off Japanese spread for offices" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Corporate Event Catering DFW | Jinbeh", description: "Drop-off Japanese catering for DFW offices and corporate events." },
    alternates: { canonical: "https://jinbeh.com/blog/corporate-event-catering-dfw" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Corporate Event Catering DFW: Japanese Catering for Offices",
    description: "Jinbeh's drop-off Japanese catering for DFW corporate events — office lunches, client dinners, team builds. What's on the trays, pricing, lead times, dietary accommodation.",
    image: "https://jinbeh.com/images/photoshoot/sushi-tower.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/corporate-event-catering-dfw" },
};

const faqs = [
    { question: "Does Jinbeh cater corporate events in DFW?", answer: "Jinbeh has been catering corporate events across DFW since 1988. We deliver drop-off Japanese spreads — hibachi protein trays, sushi platters, sashimi spreads, and appetizer trays — to offices, conference rooms, and event venues from both our Frisco and Lewisville locations. We do not currently send chefs on-site for corporate events." },
    { question: "How much does corporate catering cost per person in DFW?", answer: "Standard corporate Jinbeh catering runs $20-$40 per person depending on what you order. Office lunches with hibachi protein trays and a sushi sampler land at $25-$30. Premium client dinners with multiple sushi platters and sashimi spreads run $35-$50. Wedding-grade spreads with filet and lobster reach $50-$75. Call (214) 619-1200 or (214) 488-2224 for an event-specific quote." },
    { question: "How much lead time is needed for corporate catering?", answer: "Standard office lunches need at least one week of notice. Quarterly off-sites and larger team events need 2-3 weeks. Client-facing dinners with premium spreads need 2-3 weeks. December holiday party season books up earliest." },
    { question: "Can Jinbeh handle dietary restrictions for diverse corporate teams?", answer: "Yes. Corporate teams often span vegetarian, vegan, gluten-free, dairy-free, peanut, tree nut, shellfish, and soy restrictions. We compose platters to cover each restriction without singling anyone out. Mention dietary counts when you place the order. For celiac guests, we use tamari instead of soy sauce and keep separate prep surfaces." },
    { question: "What's the typical corporate catering order?", answer: "Most-requested setup for office lunches: a hibachi protein tray (chicken, steak, or combo), hibachi fried rice, vegetables, a mixed sushi platter, and edamame/gyoza appetizers. For client dinners and senior team events, add a sashimi sampler (salmon, tuna, yellowtail) and 1-2 signature rolls (Sunrise, Lobster Volcano, Spider)." },
    { question: "Where in DFW does Jinbeh deliver corporate catering?", answer: "From Frisco (2693 Preston Rd) we deliver throughout Legacy West, The Star, Frisco Square, Stonebriar area, Plano, McKinney, Allen, Prosper, The Colony, and Little Elm. From Lewisville (2440 S Stemmons Fwy) we cover Flower Mound, Highland Village, Castle Hills, Vista Ridge, The Colony, Carrollton, Coppell, Hebron, Denton corridor, and Las Colinas (with notice). Outside these zones, call and we'll quote." },
    { question: "Can we set up recurring corporate catering with Jinbeh?", answer: "Yes. Several DFW offices have recurring weekly or monthly Jinbeh orders. For recurring catering, we lock in a standard menu and delivery time, simplify the reorder process, and adjust headcount each week. Recurring contracts also unlock priority slots during December and other busy periods." },
    { question: "Does Jinbeh handle large corporate events (100+ guests)?", answer: "Yes. Large corporate orders are routine. For 100+ guests, plan 3-4 weeks ahead so we can scale up protein orders and prep capacity. We can configure spreads as multiple stations (hibachi protein, sushi platter, appetizer, sashimi) for buffet-style serving. Delivery vehicles are sized to the order — larger orders ship in multiple insulated containers." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Corporate Event Catering DFW" },
]};

export default function CorporateCateringDFWPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Corporate Event Catering DFW" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/photoshoot/sushi-tower.jpg" alt="Corporate Event Catering Dfw at Jinbeh Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/catering" className="hover:text-white">Catering</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">💼 DFW Corporate Catering</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Corporate Event Catering DFW: Japanese Catering for Offices</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Corporate catering done right is a discipline.</strong> The food has to show up on time, hot, and complete. The dietary restrictions have to be handled without singling anyone out. The presentation has to look like effort. And the office manager who placed the order has to be able to recommend you to the next team that asks.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh has been catering corporate events across DFW since 1988 from our Frisco and Lewisville locations. Our catering is drop-off &mdash; we cook the proteins, fried rice, and vegetables at the restaurant, cut the sushi the day of, plate everything on presentation trays, and deliver to your office, conference room, or event venue ready to serve.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;The office manager remembers who showed up at 11:50 with hot food. They also remember who showed up at 12:25 with cold food and missing trays. Both stories travel.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">DFW corporate events we handle</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Office lunches &amp; team meetings</h3>
                                    <p className="text-charcoal/80 mb-4">Weekly and monthly office orders for offices in Legacy West, The Star, Frisco Square, Stonebriar, and along the Stemmons Freeway corridor. Standard order covers a hibachi protein tray, fried rice, vegetables, a sushi sampler platter, and appetizers (edamame and gyoza). Delivered to your conference room within a 30-40 minute window.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Client-facing dinners &amp; key account events</h3>
                                    <p className="text-charcoal/80 mb-4">When the meal needs to feel premium, sushi-forward spreads work better than hibachi tray-only orders. Multiple specialty rolls (Sunrise, Lobster Volcano, Spider, Caterpillar), a sashimi sampler tray (salmon, tuna, yellowtail), and a premium hibachi protein (filet, lobster) create a Japanese-cuisine spread that signals effort. For dinners requiring the tableside hibachi show, we recommend hosting at our restaurant in Frisco or Lewisville rather than catering off-site.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Quarterly off-sites &amp; team-builds</h3>
                                    <p className="text-charcoal/80 mb-4">Larger team events that need to feed 30-100 people. We scale the order across multiple stations (hibachi station, sushi station, appetizer station, sashimi sampler) so guests can graze. For team-builds happening at off-site venues, drop-off catering avoids the venue-kitchen logistics.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Holiday parties &amp; year-end celebrations</h3>
                                    <p className="text-charcoal/80 mb-4">December books up fast. Office holiday parties wanting Japanese cuisine instead of the standard catering trio land on Jinbeh trays. Plan 3-4 weeks ahead for any December weekend.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Investor presentations, board meetings, all-hands</h3>
                                    <p className="text-charcoal/80 mb-4">Smaller, premium-feel orders. Often a sashimi platter as the appetizer course, a sushi platter with signature rolls, and a hibachi protein tray for the heartier protein.</p>

                                    <ProTip variant="insider"><strong>The recurring catering move:</strong> if your office orders catering more than 2-3 times a month, set up a recurring order. We lock in a standard menu, delivery time, and contact, simplify the ordering process to a short email, and you skip the &ldquo;is this caterer going to deliver on time&rdquo; question every week. Recurring corporate clients also get priority during December.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How dietary restrictions get handled</h2>
                                    <p className="text-charcoal/80 mb-4">Most corporate teams have multiple dietary boxes checked at the same table. The Jinbeh approach: compose the order so every restriction is covered without anyone feeling singled out.</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Vegetarian:</strong> vegetable-tofu hibachi, avocado-cucumber rolls, asparagus rolls, vegetable nigiri</li>
                                        <li><strong>Vegan:</strong> the vegetarian options minus the egg-containing nigiri</li>
                                        <li><strong>Gluten-free:</strong> tamari on the side, skip teriyaki glaze and tempura, no eel sauce on the rolls</li>
                                        <li><strong>Peanut, tree nut, dairy, shellfish, soy:</strong> standard accommodations; the kitchen flags the prep</li>
                                        <li><strong>Celiac:</strong> we use a clean cook surface and fresh oil for those portions, plus tamari throughout</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pricing &amp; lead times</h2>
                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Event Type</th>
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Lead Time</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Per-Person</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Office lunch (10-30 guests)</td><td className="py-3 pr-4">1 week</td><td className="py-3">$22-$32</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Client dinner (10-25 guests)</td><td className="py-3 pr-4">2 weeks</td><td className="py-3">$35-$60</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Team build / quarterly (30-80 guests)</td><td className="py-3 pr-4">2-3 weeks</td><td className="py-3">$28-$45</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Year-end holiday party (50-150)</td><td className="py-3 pr-4">3-4 weeks</td><td className="py-3">$35-$55</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Premium spread (filet, lobster, sashimi)</td><td className="py-3 pr-4">2-4 weeks</td><td className="py-3">$50-$75</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-charcoal/80 text-sm italic mb-6">Ranges are guidance. Final pricing depends on protein selection, sushi mix, distance from the kitchen, and order size. Call for an event-specific quote.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">DFW service zones</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>From Frisco (2693 Preston Rd):</strong> Legacy West, The Star, Frisco Square, Stonebriar area, Plano, McKinney, Allen, Prosper, The Colony, Little Elm</li>
                                        <li><strong>From Lewisville (2440 S Stemmons Fwy):</strong> Flower Mound, Highland Village, Castle Hills, Vista Ridge, The Colony, Carrollton, Coppell, Hebron, Denton corridor, Las Colinas (with notice)</li>
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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Get a corporate catering quote</h3>
                                        <p className="text-warm-ivory/80 mb-4">Tell us the date, headcount, dietary mix, and event type. We&apos;ll send a menu and price the same day.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/catering" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Catering Page</Link>
                                            <a href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call Frisco</a>
                                            <a href="tel:2144882224" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call Lewisville</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Quick reference</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li>Drop-off catering only</li>
                                        <li>Standard lead: 1 week</li>
                                        <li>Premium dinners: 2 weeks</li>
                                        <li>Recurring orders welcome</li>
                                        <li>All dietary restrictions handled</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related Jinbeh catering</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/asian-food-catering-dfw" className="text-accent-red hover:underline">Asian food catering DFW</Link></li>
                                        <li><Link href="/blog/hibachi-catering-frisco" className="text-accent-red hover:underline">Hibachi catering Frisco</Link></li>
                                        <li><Link href="/blog/hibachi-catering-lewisville" className="text-accent-red hover:underline">Hibachi catering Lewisville</Link></li>
                                        <li><Link href="/celebrations/corporate-events" className="text-accent-red hover:underline">Corporate events</Link></li>
                                        <li><Link href="/celebrations/team-building" className="text-accent-red hover:underline">Team building</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="corporate-event-catering-dfw" />
            <div className="h-12" />
        </main>
    );
}
