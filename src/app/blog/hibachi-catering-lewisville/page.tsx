import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Hibachi Catering Lewisville TX: Drop-Off Trays | Jinbeh",
    description:
        "Hibachi catering in Lewisville, TX from Jinbeh — drop-off catering trays for offices, families, weddings, and corporate events. Hot proteins, fried rice, vegetables, sauces, on presentation trays. Family-owned since 1988.",
    keywords: [
        "hibachi catering lewisville",
        "hibachi catering lewisville tx",
        "hibachi caterer lewisville",
        "lewisville hibachi catering",
        "wedding hibachi catering lewisville",
        "corporate hibachi catering lewisville",
        "drop-off hibachi catering lewisville",
        "japanese catering lewisville tx",
        "hibachi delivery lewisville",
        "hibachi trays lewisville tx",
        "hibachi catering flower mound",
        "hibachi catering highland village",
        "hibachi catering carrollton",
    ],
    openGraph: {
        title: "Hibachi Catering Lewisville TX | Jinbeh",
        description: "Drop-off hibachi catering trays for Lewisville-area events. Weddings, corporate, birthdays, office lunches. Family-owned since 1988.",
        url: "https://jinbeh.com/blog/hibachi-catering-lewisville",
        images: [{ url: "https://jinbeh.com/images/photoshoot/hibachi-flame-action.jpg", width: 1200, height: 630, alt: "Hibachi catering Lewisville TX — Jinbeh drop-off tray with steak, shrimp, and fried rice" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Hibachi Catering Lewisville TX | Jinbeh", description: "Drop-off hibachi catering trays for Lewisville-area events." },
    alternates: { canonical: "https://jinbeh.com/blog/hibachi-catering-lewisville" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Hibachi Catering Lewisville TX: Drop-Off Trays",
    description: "Jinbeh's drop-off hibachi catering for Lewisville — what's on the trays, pricing patterns, lead times, and Lewisville-area delivery.",
    image: "https://jinbeh.com/images/photoshoot/hibachi-flame-action.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/hibachi-catering-lewisville" },
};

const faqs = [
    { question: "Does Jinbeh offer hibachi catering in Lewisville?", answer: "Jinbeh has been catering hibachi from our Lewisville location at 2440 S Stemmons Fwy since the location opened. Our catering is drop-off: we cook the proteins, vegetables, and fried rice at the restaurant, plate everything on catering presentation trays, and deliver to your office, home, or venue ready to serve. We do not currently send a chef on-site — all hibachi catering is drop-off." },
    { question: "What's on a Jinbeh hibachi catering tray?", answer: "A Jinbeh hibachi catering tray includes your choice of proteins (chicken, steak, shrimp, scallops, salmon, or combinations), hibachi fried rice or steamed rice, hibachi-style vegetables (zucchini, onion, mushrooms, bean sprouts), our yum yum and ginger sauces on the side, plus chopsticks, napkins, and serving utensils. Tamari is included on request for gluten-free guests at no booking fee." },
    { question: "How much does hibachi catering cost in Lewisville TX?", answer: "Drop-off hibachi trays in Lewisville generally run $20-$30 per person depending on protein. Chicken and vegetable hibachi sit at the lower end; steak, shrimp, scallops, and combination platters land higher. Premium proteins (filet, lobster) push pricing up. Call (214) 488-2224 for an event-specific quote." },
    { question: "What's the typical lead time for Lewisville hibachi catering?", answer: "At least one week of lead time for standard orders. For larger orders (50+ guests) or Friday and Saturday evening events, push to 2 weeks. December weekends and major holiday weekends (Memorial Day, July 4th, Labor Day) book up earliest." },
    { question: "Where in the Lewisville area does Jinbeh deliver hibachi catering?", answer: "From our Stemmons Fwy location we deliver across Lewisville and the surrounding cities. Most-frequent zones: Flower Mound, Highland Village, Castle Hills, Vista Ridge, The Colony, Carrollton, Coppell, Hebron, Lake Dallas, Old Town Lewisville, and western Plano. For events farther out (Denton, Argyle, Justin, Roanoke), call us and we'll quote delivery." },
    { question: "Does Jinbeh handle Lewisville weddings?", answer: "Yes — for drop-off hibachi catering at Lewisville-area weddings. We deliver presentation trays of hibachi proteins, rice, and vegetables to your wedding venue ready to serve. We do not currently send a chef on-site for live tableside hibachi at off-site weddings. For wedding rehearsal dinners, anniversary dinners, and large family dinners, our Lewisville restaurant hosts the tableside hibachi experience in our dining room." },
    { question: "Do you cater corporate events in Lewisville?", answer: "Yes. Lewisville-area corporate offices and the medical campus around Medical City Lewisville book Jinbeh drop-off hibachi trays for team lunches, client meetings, and milestone celebrations. We deliver to offices along Stemmons Freeway, the medical district, and the corridor up toward Denton." },
    { question: "Can the hibachi catering accommodate dietary needs?", answer: "Yes. We accommodate gluten-free (tamari instead of soy sauce, no teriyaki glaze), vegetarian (vegetable-and-tofu hibachi), peanut, tree nut, dairy, shellfish, and most common allergies. Tell us when you book so the kitchen can plan the cook order and bring the right sauces. For celiac, we use a clean cook surface and fresh oil for those portions." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Hibachi Catering Lewisville TX" },
]};

export default function HibachiCateringLewisvillePost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Hibachi Catering Lewisville" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/photoshoot/hibachi-flame-action.jpg" alt="Hibachi Catering Lewisville at Jinbeh Lewisville Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/catering" className="hover:text-white">Catering</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">🍱 Lewisville Drop-Off Catering</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Hibachi Catering Lewisville TX: Drop-Off Trays from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Jinbeh has been catering hibachi to Lewisville-area families and businesses for decades.</strong> Today our catering is drop-off &mdash; we cook proteins, vegetables, and fried rice at our Stemmons Fwy restaurant, plate everything on presentation trays, and deliver to your office, home, or event venue ready to serve.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">For the tableside hibachi show with the chef, the onion volcano, and the flame work, that experience lives at our restaurant. We host birthday tables, anniversary dinners, and rehearsal dinners in our Lewisville dining room. For off-site catering at your office, home, or venue, the format is drop-off trays.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Drop-off catering is the format that works for most events. The food shows up hot, looks great, tastes like our restaurant. No chef on-site, no fire show. Just real Japanese food, presented well, ready to eat.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What&apos;s on a Jinbeh hibachi catering tray</h2>
                                    <p className="text-charcoal/80 mb-4">Our drop-off catering trays are built to plate cleanly at your venue:</p>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Hibachi proteins</strong> &mdash; chicken, steak, shrimp, scallops, salmon, or combination platters (steak &amp; shrimp, steak &amp; chicken, steak &amp; lobster, Imperial Dinner). Premium options: filet mignon, lobster tail</li>
                                        <li><strong>Hibachi fried rice or steamed rice</strong> &mdash; fried rice is cooked on the hibachi grill, so the flavor matches the restaurant</li>
                                        <li><strong>Hibachi vegetables</strong> &mdash; zucchini, onion, mushrooms, bean sprouts, seared in the hibachi style</li>
                                        <li><strong>Sauces</strong> &mdash; yum yum and ginger sauces on the side. Tamari (gluten-free) on request</li>
                                        <li><strong>Service items</strong> &mdash; chopsticks, napkins, serving utensils, warming setups for events that hold food longer than an hour</li>
                                    </ul>

                                    <ProTip variant="insider"><strong>Add a sushi platter for variety.</strong> Most Lewisville-area hosts order one hibachi protein tray plus one sushi platter for the table. The mix covers a wider range of guest preferences without doubling the cost.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">When Lewisville hosts order drop-off hibachi</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Office lunches along I-35E</h3>
                                    <p className="text-charcoal/80 mb-4">Offices and corporate campuses along Stemmons Freeway and the corridor up toward Denton order Jinbeh hibachi trays for team lunches and client meetings. We deliver within a 20-40 minute window of leaving the kitchen.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">At-home parties in Flower Mound &amp; Highland Village</h3>
                                    <p className="text-charcoal/80 mb-4">For family birthdays, milestone anniversaries, and graduation parties at private homes, drop-off hibachi covers the entrée while the host handles drinks, sides, and dessert. Pairs well with a sushi platter for guests with different tastes.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Medical City &amp; corporate dinners</h3>
                                    <p className="text-charcoal/80 mb-4">The medical campus around Medical City Lewisville and corporate offices in the area book Jinbeh trays for team celebrations, milestones, and after-hours events.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Wedding and rehearsal dinner buffets</h3>
                                    <p className="text-charcoal/80 mb-4">For wedding-day buffets and rehearsal dinners hosted at off-site venues, drop-off hibachi trays plus a sushi platter give guests a Japanese-cuisine option that holds up well across a longer event window.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pricing patterns for Lewisville drop-off hibachi</h2>
                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Tray Type</th>
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Per-Person Range</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Lead Time</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Chicken or vegetable hibachi tray</td><td className="py-3 pr-4">$18-$25</td><td className="py-3">1 week</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Steak, shrimp, or combo tray</td><td className="py-3 pr-4">$25-$35</td><td className="py-3">1 week</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Premium (filet, lobster, scallops)</td><td className="py-3 pr-4">$35-$55</td><td className="py-3">1-2 weeks</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Hibachi + sushi combo spread</td><td className="py-3 pr-4">$30-$50</td><td className="py-3">1-2 weeks</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-charcoal/80 text-sm italic mb-6">Ranges depend on protein mix and order size. Call (214) 488-2224 for an event-specific quote.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Lewisville-area delivery zones</h2>
                                    <p className="text-charcoal/80 mb-4">Standard delivery from our Stemmons Fwy kitchen: Lewisville, Flower Mound, Highland Village, Castle Hills, Vista Ridge, The Colony, Carrollton, Coppell, Hebron, Lake Dallas, Old Town Lewisville, western Plano. For events farther out (Denton, Argyle, Justin, Roanoke), we&apos;ll quote delivery transparently.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Want the live hibachi show? Visit our Lewisville restaurant</h2>
                                    <p className="text-charcoal/80 mb-4">For tableside hibachi with the chef and the onion volcano, the experience is at our restaurant at 2440 S Stemmons Fwy. Hibachi tables seat 7-8 guests per chef. We host birthdays, anniversaries, rehearsal dinners, and family celebrations regularly. <Link href="/lewisville" className="text-accent-red hover:underline font-semibold">See Jinbeh Lewisville</Link> for reservations.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Get a Lewisville hibachi catering quote</h3>
                                        <p className="text-warm-ivory/80 mb-4">Tell us the date, headcount, and venue. We&apos;ll send a tray menu and price the same day.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/catering" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Catering Page</Link>
                                            <a href="tel:2144882224" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 488-2224</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Jinbeh Lewisville</div>
                                    <p className="text-sm text-white/90 mb-3">2440 S Stemmons Fwy #A<br/>Lewisville, TX 75067</p>
                                    <p className="text-sm text-white/90 mb-3">(214) 488-2224</p>
                                    <Link href="/catering" className="block bg-accent-red text-white rounded-xl px-4 py-3 text-center font-semibold hover:bg-accent-red/90">Request a Quote</Link>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">More Jinbeh catering</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/hibachi-catering-frisco" className="text-accent-red hover:underline">Hibachi catering Frisco</Link></li>
                                        <li><Link href="/blog/hibachi-catering-dfw" className="text-accent-red hover:underline">Hibachi catering DFW</Link></li>
                                        <li><Link href="/blog/asian-food-catering-dfw" className="text-accent-red hover:underline">Asian food catering DFW</Link></li>
                                        <li><Link href="/blog/sushi-catering-lewisville" className="text-accent-red hover:underline">Sushi catering Lewisville</Link></li>
                                        <li><Link href="/lewisville" className="text-accent-red hover:underline">Jinbeh Lewisville (dine-in hibachi)</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="hibachi-catering-lewisville" />
            <div className="h-12" />
        </main>
    );
}
