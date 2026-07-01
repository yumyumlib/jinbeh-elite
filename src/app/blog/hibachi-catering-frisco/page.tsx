import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
    title: "Hibachi Catering Frisco TX: Drop-Off Trays | Jinbeh",
    description:
        "Hibachi catering in Frisco, TX from Jinbeh — drop-off catering trays for offices, parties, weddings, and corporate events. Hot proteins, fried rice, vegetables, and sauces, presented on catering trays. Family-owned since 1988.",
    keywords: [
        "hibachi catering frisco",
        "hibachi catering frisco tx",
        "hibachi catering near frisco",
        "frisco hibachi caterer",
        "frisco wedding hibachi catering",
        "corporate hibachi catering frisco",
        "office lunch hibachi frisco",
        "hibachi trays frisco tx",
        "drop-off hibachi catering frisco",
        "japanese catering frisco tx",
        "teppanyaki catering frisco",
        "hibachi party catering frisco",
        "hibachi delivery frisco",
    ],
    openGraph: {
        title: "Hibachi Catering Frisco TX | Jinbeh",
        description:
            "Drop-off hibachi catering trays for events in Frisco, TX. Weddings, corporate, birthdays, office lunches. Family-owned since 1988.",
        url: "https://jinbeh.com/blog/hibachi-catering-frisco",
        images: [{ url: "https://jinbeh.com/images/photoshoot/hibachi-flame-action.jpg", width: 1200, height: 630, alt: "Hibachi catering tray from Jinbeh Frisco — drop-off trays with proteins, fried rice, vegetables" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Hibachi Catering Frisco TX | Jinbeh", description: "Drop-off hibachi catering trays for Frisco events." },
    alternates: { canonical: "https://jinbeh.com/blog/hibachi-catering-frisco" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Hibachi Catering Frisco TX: Drop-Off Trays",
    description: "Jinbeh's drop-off hibachi catering for Frisco, TX — what's on the trays, pricing patterns, lead times, and what to ask before you book.",
    image: "https://jinbeh.com/images/photoshoot/hibachi-flame-action.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/hibachi-catering-frisco" },
};

const faqs = [
    { question: "Does Jinbeh do hibachi catering in Frisco?", answer: "Jinbeh has been catering hibachi from our Frisco location at 2693 Preston Rd since 1988. Our catering is drop-off: we cook the proteins, vegetables, fried rice, and sides in our restaurant kitchen, plate them on catering presentation trays, and deliver to your office, home, or venue ready to serve. We do not currently send a chef to your venue — all hibachi catering is drop-off." },
    { question: "What's included in a Jinbeh hibachi catering tray?", answer: "A typical Jinbeh hibachi catering order includes hibachi proteins (your choice of chicken, steak, shrimp, scallops, or combinations), hibachi fried rice or steamed rice, hibachi vegetables (zucchini, onion, mushrooms, bean sprouts), our yum yum and ginger sauces, and standard service items (chopsticks, napkins, serving utensils). Tamari is included on request for gluten-free guests at no booking fee." },
    { question: "How much does hibachi catering cost in Frisco TX?", answer: "Drop-off hibachi trays in Frisco generally run $20-$30 per person depending on protein selection. Chicken and vegetable hibachi sit at the lower end; steak, shrimp, scallops, and combinations land higher. Premium proteins (filet, lobster) push pricing up further. Call (214) 619-1200 for a quote sized to your headcount and event." },
    { question: "How far in advance should I book hibachi catering in Frisco?", answer: "At least one week of lead time is the rule. For larger orders (50+ guests) or events on Friday and Saturday evenings, push to 2 weeks. December weekends and major holiday weekends book up fastest." },
    { question: "Will Jinbeh cater hibachi for my wedding in Frisco?", answer: "Yes — for drop-off hibachi catering at Frisco weddings. We deliver presentation trays of hibachi proteins, rice, and vegetables to your venue ready to serve. We do not currently send a chef on-site for live tableside hibachi at off-site weddings. For a tableside hibachi experience, we host wedding rehearsal dinners, anniversary dinners, and private parties at our Frisco restaurant in our private dining area." },
    { question: "Does Jinbeh cater corporate hibachi events in Frisco?", answer: "Yes. Offices throughout Legacy West, The Star, Frisco Square, and along Preston Rd book Jinbeh drop-off hibachi trays for team lunches, client meetings, quarterly off-sites, and milestone celebrations. We deliver within a 30-40 minute window of leaving our kitchen. Standard corporate orders cover team sizes from 10 up to 100+ with appropriate lead time." },
    { question: "Can the hibachi catering accommodate gluten-free, vegetarian, or allergies?", answer: "Yes. We accommodate gluten-free guests with tamari instead of soy sauce and by skipping the teriyaki glaze and tempura items. Vegetarian guests get vegetable-and-tofu hibachi trays. Most common allergies (peanut, dairy, shellfish, soy) are routine — flag them when you order so the kitchen can plan the cook and prep. For celiac, we use a clean cook surface and fresh oil for those portions." },
    { question: "Where in Frisco does Jinbeh deliver hibachi catering?", answer: "From our Preston Rd kitchen we deliver across Frisco and the surrounding cities. Most-frequent delivery zones: Stonebriar, Legacy West, Frisco Square, The Star district, Starwood, Newman Village, and the Preston Rd corridor running south to Plano and McKinney. For events farther out (Aubrey, Celina, Little Elm), we'll quote delivery transparently." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Hibachi Catering Frisco TX" },
]};

export default function HibachiCateringFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Hibachi Catering Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/photoshoot/hibachi-flame-action.jpg" alt="Hibachi Catering Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/catering" className="hover:text-white">Catering</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🍱 Frisco Drop-Off Catering</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Hibachi Catering Frisco TX: Drop-Off Trays from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Jinbeh has been catering hibachi to Frisco offices, families, and event hosts since 1988.</strong> Today our catering is drop-off &mdash; we cook the proteins, fried rice, and vegetables at our Preston Rd restaurant, plate them on presentation catering trays, and deliver to your venue ready to serve.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">If you want the tableside hibachi show with the chef, the onion volcano, and the knife tricks, that experience lives at our restaurant. We host birthday tables, anniversary dinners, and rehearsal dinners in our dining room and private dining setup. For off-site catering at your office, home, or venue, the format is drop-off trays.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Hibachi catering at Jinbeh means the food shows up hot, looks great on the tray, and tastes like our restaurant. No chef on-site, no portable grill, no fire show. Just real hibachi presented beautifully and ready to serve.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What&apos;s on a Jinbeh hibachi catering tray</h2>
                                    <p className="text-charcoal/80 mb-4">Our drop-off trays are designed to plate cleanly at your venue. Here&apos;s what a typical hibachi catering order from our Frisco kitchen includes:</p>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Hibachi proteins</strong> &mdash; choose from chicken, steak, shrimp, scallops, salmon, or combination platters (steak &amp; shrimp, steak &amp; chicken, steak &amp; lobster, Imperial Dinner). Filet mignon and lobster tail are available as premium upgrades</li>
                                        <li><strong>Hibachi fried rice or steamed rice</strong> &mdash; we cook the fried rice to order on the same hibachi grill the proteins were cooked on, so the flavor matches what you get in the restaurant</li>
                                        <li><strong>Hibachi vegetables</strong> &mdash; zucchini, onion, mushrooms, bean sprouts, lightly seared in the hibachi style</li>
                                        <li><strong>Sauces</strong> &mdash; our yum yum sauce and ginger sauce on the side. Tamari (gluten-free soy sauce) included on request</li>
                                        <li><strong>Service items</strong> &mdash; chopsticks, napkins, serving utensils, and warming setups if your event needs food held at temperature for longer than an hour</li>
                                    </ul>

                                    <ProTip variant="insider"><strong>Pair drop-off hibachi with a sushi platter</strong> for a more complete spread. Most Frisco event hosts order one hibachi protein tray and one mixed sushi platter together &mdash; the combination feeds a wider range of dietary preferences without doubling the cost.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">When drop-off hibachi works best</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Office lunches</h3>
                                    <p className="text-charcoal/80 mb-4">Frisco offices in Legacy West, The Star, Frisco Square, and along Preston Rd order Jinbeh drop-off hibachi for team lunches, client meetings, and milestone celebrations. The trays travel well, serve themselves, and feed a roomful of people without setup labor.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Birthday parties &amp; family gatherings</h3>
                                    <p className="text-charcoal/80 mb-4">For at-home birthdays where guests want hibachi food without the trip to the restaurant, drop-off trays cover the entrée while the host handles drinks, sides, and dessert. Pairs well with a sushi platter for variety.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Corporate dinners &amp; events</h3>
                                    <p className="text-charcoal/80 mb-4">Larger corporate events that want a Japanese cuisine spread without taking the team out to a restaurant. Hibachi proteins, fried rice, vegetables, and a sushi platter on the side cover most of a 50-100 person event.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Holiday parties &amp; large gatherings</h3>
                                    <p className="text-charcoal/80 mb-4">December tends to book up. Office holiday parties and family celebrations that want something different from the typical buffet land on Jinbeh trays. Plan ahead for December weekends.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pricing patterns for Frisco drop-off hibachi</h2>
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
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Hibachi + sushi combination spread</td><td className="py-3 pr-4">$30-$50</td><td className="py-3">1-2 weeks</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-charcoal/80 text-sm italic mb-6">Ranges depend on protein mix and order size. Call (214) 619-1200 for a real quote on your event.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Frisco delivery zones</h2>
                                    <p className="text-charcoal/80 mb-4">From our Preston Rd kitchen we deliver across all of Frisco and the surrounding cities. Most-frequent zones: Stonebriar, Legacy West, Frisco Square, The Star district, Starwood, Newman Village, Prosper, and the Preston Rd corridor running south to Plano and McKinney. For events further out (Aubrey, Celina, west to Little Elm), we&apos;ll let you know about delivery fees up front.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Want the live hibachi show? Visit our Frisco restaurant</h2>
                                    <p className="text-charcoal/80 mb-4">For groups that want the chef, the fire show, and the onion volcano, the tableside hibachi experience is at our restaurant at 2693 Preston Rd. Hibachi tables seat 7-8 guests per chef, and we routinely host birthdays, anniversaries, rehearsal dinners, and corporate dinners in our dining room. For larger groups we use multiple hibachi tables in parallel or our private dining area. <Link href="/frisco" className="text-accent-red hover:underline font-semibold">See Jinbeh Frisco</Link> for reservations.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Questions worth asking any catering provider</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>When was the protein cooked?</strong> Drop-off catering food should be cooked the day of delivery, not the night before. Re-warmed proteins lose texture fast</li>
                                        <li><strong>How is the food held at temperature?</strong> For events past the first hour after delivery, you need a warming setup. We can provide it on request</li>
                                        <li><strong>What about gluten-free, vegetarian, peanut, shellfish?</strong> Tell us upfront so we plan the cook and bring the right sauces</li>
                                        <li><strong>What&apos;s the minimum order?</strong> Our minimums vary by distance and order size. Call for a number</li>
                                        <li><strong>Are utensils, plates, and serving spoons included?</strong> At Jinbeh, yes &mdash; chopsticks, napkins, and serving utensils ship with every order</li>
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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Get a Frisco hibachi catering quote</h3>
                                        <p className="text-warm-ivory/80 mb-4">Tell us the date, headcount, and event type. We&apos;ll send a tray menu and price the same day.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/catering" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Catering Page</Link>
                                            <CallLink href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 619-1200</CallLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Jinbeh Frisco</div>
                                    <p className="text-sm text-white/90 mb-3">2693 Preston Rd Suite 1040<br/>Frisco, TX 75034</p>
                                    <p className="text-sm text-white/90 mb-3">(214) 619-1200</p>
                                    <Link href="/catering" className="block bg-accent-red text-white rounded-xl px-4 py-3 text-center font-semibold hover:bg-accent-red/90">Request a Quote</Link>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related Jinbeh catering</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/hibachi-catering-dfw" className="text-accent-red hover:underline">Hibachi catering DFW</Link></li>
                                        <li><Link href="/blog/asian-food-catering-dfw" className="text-accent-red hover:underline">Asian food catering DFW</Link></li>
                                        <li><Link href="/blog/sushi-catering-frisco" className="text-accent-red hover:underline">Sushi catering Frisco</Link></li>
                                        <li><Link href="/frisco" className="text-accent-red hover:underline">Jinbeh Frisco (dine-in hibachi)</Link></li>
                                        <li><Link href="/private-dining" className="text-accent-red hover:underline">Private dining (at the restaurant)</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="hibachi-catering-frisco" />
            <div className="h-12" />
        </main>
    );
}
