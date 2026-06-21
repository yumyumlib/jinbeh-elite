import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Anniversary Dinner Frisco TX: Sushi Bar or Hibachi | Jinbeh",
    description:
        "Anniversary dinner in Frisco, TX at Jinbeh — when to book the sushi bar two-top, when to book a hibachi table, sake pairings, and reservation tips. Family-owned since 1988.",
    keywords: [
        "anniversary dinner frisco",
        "anniversary restaurant frisco",
        "anniversary dinner frisco tx",
        "best anniversary restaurant frisco",
        "milestone anniversary frisco",
        "romantic dinner frisco",
        "japanese restaurant anniversary frisco",
        "sushi bar anniversary frisco",
        "wedding anniversary frisco",
        "anniversary near stonebriar",
        "private anniversary dinner frisco",
        "couples dinner frisco",
        "intimate anniversary frisco",
    ],
    openGraph: {
        title: "Anniversary Dinner Frisco TX | Jinbeh",
        description: "Anniversary dinner at Jinbeh Frisco — sushi bar or hibachi table, sake pairings, reservations. Family-owned since 1988.",
        url: "https://jinbeh.com/blog/anniversary-dinner-frisco",
        images: [{ url: "https://jinbeh.com/images/photoshoot/hibachi-onion-volcano-flame.jpg", width: 1200, height: 630, alt: "Anniversary dinner Frisco TX — Jinbeh sushi bar and hibachi tables near Stonebriar" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Anniversary Dinner Frisco TX | Jinbeh", description: "Anniversary dinner at Jinbeh Frisco — sushi bar or hibachi, sake pairings." },
    alternates: { canonical: "https://jinbeh.com/blog/anniversary-dinner-frisco" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Anniversary Dinner Frisco TX: Sushi Bar or Hibachi",
    description: "How to plan an anniversary dinner at Jinbeh Frisco — sushi bar vs. hibachi seating, sake pairings, reservation timing, and milestone anniversary tips.",
    image: "https://jinbeh.com/images/photoshoot/hibachi-onion-volcano-flame.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/anniversary-dinner-frisco" },
};

const faqs = [
    { question: "Is Jinbeh Frisco good for an anniversary dinner?", answer: "Jinbeh Frisco has been hosting anniversary dinners since 1988. Two formats work depending on the vibe of your anniversary. For an intimate, quiet anniversary, the sushi bar two-top — handcrafted sushi, sake pairings, conversation at normal volume. For a celebration-style anniversary with family or close friends, a hibachi table with the chef show. Both work, the choice is mood." },
    { question: "Should we book the sushi bar or a hibachi table for our anniversary?", answer: "Sushi bar two-top for: first or second anniversaries, intimate evenings, quiet conversation, milestone anniversaries where you want it to feel romantic. Hibachi table for: anniversaries with family, group celebrations (10th, 20th, 25th when you bring the kids), anniversaries that you want to feel festive rather than romantic." },
    { question: "How far in advance should I book a Jinbeh Frisco anniversary dinner?", answer: "For Friday and Saturday evenings, book 2-3 weeks ahead — the sushi bar two-tops are popular. For weeknight anniversaries, 1 week is usually fine. For milestone anniversaries (25th, 50th) and Valentine's Day, book 4-6 weeks ahead. Mention 'anniversary' in your reservation notes so we flag the table." },
    { question: "Does Jinbeh do anything special for anniversaries?", answer: "Yes. Mention the anniversary when you reserve and again when you arrive. Our team typically acknowledges the occasion during the meal — sometimes a complimentary dessert, sometimes a personalized note from the chef, depending on the night and the type of anniversary. For milestone anniversaries (25th, 50th), let us know early so we can plan something more memorable." },
    { question: "What sake pairs with an anniversary dinner?", answer: "For a sushi-bar anniversary, ask the server for a sake flight pairing — typically a junmai or junmai daiginjo with delicate sashimi and lighter rolls, then a fuller-bodied sake (junmai ginjo or honjozo) with the heartier signature rolls like Lobster Volcano. For a hibachi-table anniversary, a single junmai poured into chilled glasses works through the whole meal. Our servers can guide based on what you're ordering." },
    { question: "What should we order for an anniversary dinner at Jinbeh Frisco?", answer: "A memorable Jinbeh anniversary order: start with a sashimi sampler (salmon, tuna, yellowtail) and 1-2 signature rolls (Sunrise Roll, Lobster Volcano, Spider Roll). For the main, if hibachi, the combo plate with filet mignon and lobster tail is the splurge move. If sushi-focused, a chirashi bowl or sashimi deluxe platter as the entrée. Pair with sake from the bar list or a Japanese whiskey neat as a digestif." },
    { question: "Is Jinbeh Frisco open for Valentine's Day?", answer: "Yes, Jinbeh Frisco is open on Valentine's Day — one of our busiest nights. For Valentine's Day reservations, book 4-6 weeks ahead minimum. The sushi bar two-tops go first, then the hibachi tables. Mention 'Valentine's Day anniversary' in the reservation if applicable." },
    { question: "Where is Jinbeh Frisco?", answer: "Jinbeh Frisco is at 2693 Preston Rd Suite 1040, Frisco, TX 75034 — near Stonebriar Centre, minutes from Legacy West, The Star, and PGA HQ. Free parking outside. Phone (214) 619-1200. Reservations through OpenTable on our website." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Celebrations", item: "https://jinbeh.com/celebrations" },
    { "@type": "ListItem", position: 4, name: "Anniversary Dinner Frisco TX" },
]};

export default function AnniversaryDinnerFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Anniversary Dinner Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/photoshoot/hibachi-onion-volcano-flame.jpg" alt="Anniversary Dinner Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/celebrations" className="hover:text-white">Celebrations</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">💍 Frisco Anniversary Dining</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Anniversary Dinner Frisco TX: Sushi Bar or Hibachi at Jinbeh</h1>
                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span><span>·</span><span>May 2026</span><span>·</span><span>6 min read</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Anniversary dinners come in two flavors at Jinbeh Frisco.</strong> Quiet ones &mdash; first anniversary, just the two of you, the sushi bar with sake and the conversation that finally feels relaxed after a busy week. Celebratory ones &mdash; 10th anniversary with the kids in tow, 25th anniversary with siblings flying in, a hibachi table where the chef show is the entertainment.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Both versions have been happening at our 2693 Preston Rd location since 1988. This guide covers how to book the right one, what to order, and the sake pairings that elevate the night without overcomplicating it.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Some of our couples have been celebrating anniversaries at the same hibachi table for 20+ years. The chef changes, the kids grow up, the menu evolves &mdash; but the table is the same, and that&apos;s the part that matters.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pick the right seating for your anniversary</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Sushi bar two-top</h3>
                                    <p className="text-charcoal/80 mb-4">Sit at the sushi bar, watch the chefs hand-cut nigiri and roll specialty pieces, order at your own pace. Sake pairing is part of the experience. Lower volume, more intimate, conversation flows.</p>
                                    <p className="text-charcoal/80 mb-4"><strong>Best for:</strong> 1st, 2nd, 5th anniversaries; the &ldquo;we finally have a night out&rdquo; anniversaries; Valentine&apos;s Day anniversaries; couples who treat sake or sashimi as their thing.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Hibachi table</h3>
                                    <p className="text-charcoal/80 mb-4">Sit at the teppanyaki grill, sometimes sharing the table with another couple or family. Chef performs while cooking. Energy is higher, social by default.</p>
                                    <p className="text-charcoal/80 mb-4"><strong>Best for:</strong> 10th, 20th, 25th, 30th anniversaries with kids; multi-generation anniversary dinners; anniversaries that double as group celebrations; couples who want the meal to feel like an event.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Reserved hibachi table</h3>
                                    <p className="text-charcoal/80 mb-4">For milestone anniversaries (25th, 50th) with extended family, reserve the entire table for your group only &mdash; 7-8 seats fill with your party, no strangers. Pre-set menus available for streamlined service.</p>

                                    <ProTip variant="insider"><strong>The quiet-anniversary opener:</strong> arrive at 5:30, sit at the bar for happy hour (Monday-Friday 5-6:30 PM, $4 draft, $5 sake, $6 wine), order edamame and tuna tartare to share, then transition to the sushi bar two-top at 6:30 for dinner. Two distinct phases of the evening in one venue.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">The anniversary order</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Sushi-bar anniversary menu</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Start:</strong> Sashimi sampler (salmon, tuna, yellowtail) or tuna tartare</li>
                                        <li><strong>Middle:</strong> 2 signature rolls to share &mdash; Sunrise Roll, Lobster Volcano Roll, Spider Roll, or Caterpillar Roll</li>
                                        <li><strong>Main:</strong> Chirashi (assorted sashimi over rice) for one, Sashimi Deluxe for the other, or a roll combination for both</li>
                                        <li><strong>Sake:</strong> Junmai daiginjo with the lighter sashimi, then a junmai or honjozo with the richer rolls</li>
                                        <li><strong>Dessert:</strong> Mochi ice cream or green tea ice cream</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Hibachi-table anniversary menu</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Appetizer:</strong> Sashimi sampler or seared tuna while waiting for the chef</li>
                                        <li><strong>Main:</strong> Combo plate &mdash; filet &amp; lobster or steak &amp; shrimp. Splurge: Imperial Dinner</li>
                                        <li><strong>Sides included:</strong> Hibachi fried rice, vegetables, soup, salad</li>
                                        <li><strong>Drinks:</strong> Sake by the bottle to share, or a Japanese whiskey neat after the chef finishes</li>
                                        <li><strong>Dessert:</strong> Bring outside cake if it&apos;s a milestone, or order ice cream from the menu</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Reservation strategy</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Weeknight anniversaries (Tue-Thu)</strong>: book 1 week ahead. Sushi bar two-tops easier to get on weeknights</li>
                                        <li><strong>Friday or Saturday evenings</strong>: 2-3 weeks ahead. Sushi bar two-tops fill first</li>
                                        <li><strong>Milestone anniversaries (10th, 25th, 50th)</strong>: 4-6 weeks. Mention the milestone in the reservation notes</li>
                                        <li><strong>Valentine&apos;s Day</strong>: 4-6 weeks minimum. Our busiest single night</li>
                                        <li><strong>Surprise anniversary plans</strong>: call (214) 619-1200 directly so the host doesn&apos;t accidentally spoil it</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">For milestone anniversaries with family</h2>
                                    <p className="text-charcoal/80 mb-4">25th, 50th, and 60th anniversaries with extended family are common at Jinbeh Frisco. For 12-20 guests, we book 2-3 adjacent hibachi tables in the same section so the meal feels like a private event without needing a separate room. Pre-set menus simplify the ordering process and keep everyone&apos;s food coming out around the same time.</p>
                                    <p className="text-charcoal/80 mb-4">Lead time: 4-6 weeks for milestone anniversaries with groups. Bring outside cake if you want a celebration moment beyond the meal.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Book an anniversary dinner at Jinbeh Frisco</h3>
                                        <p className="text-warm-ivory/80 mb-4">Reserve online or call us. Mention &ldquo;anniversary&rdquo; in your notes so we flag the table.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/reservations" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Reserve a Table</Link>
                                            <a href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 619-1200</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Booking guide</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li>Weeknight: 1 week ahead</li>
                                        <li>Weekend: 2-3 weeks</li>
                                        <li>Milestone: 4-6 weeks</li>
                                        <li>Valentine&apos;s: 4-6 weeks min</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related at Jinbeh</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/celebrations/anniversary" className="text-accent-red hover:underline">Anniversary celebrations</Link></li>
                                        <li><Link href="/blog/romantic-anniversary-dinners" className="text-accent-red hover:underline">Romantic anniversary dinners</Link></li>
                                        <li><Link href="/blog/date-night-restaurants-frisco" className="text-accent-red hover:underline">Date night Frisco</Link></li>
                                        <li><Link href="/celebrations/valentines-day" className="text-accent-red hover:underline">Valentine&apos;s Day</Link></li>
                                        <li><Link href="/happy-hour" className="text-accent-red hover:underline">Happy hour</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="anniversary-dinner-frisco" />
            <div className="h-12" />
        </main>
    );
}
