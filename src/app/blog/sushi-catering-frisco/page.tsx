import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Sushi Catering Frisco TX: Platters & Delivery | Jinbeh",
    description:
        "Sushi catering in Frisco, TX from Jinbeh — drop-off sushi platters delivered to offices, homes, and venues. Signature rolls, sashimi spreads, and party trays. Family-owned since 1988.",
    keywords: [
        "sushi catering frisco",
        "sushi catering frisco tx",
        "sushi platter frisco",
        "sushi delivery catering frisco",
        "frisco sushi caterer",
        "office sushi catering frisco",
        "corporate sushi catering frisco",
        "sushi tray catering frisco",
        "party sushi frisco",
        "japanese catering frisco tx",
        "sushi platters near stonebriar",
        "drop-off sushi catering frisco",
    ],
    openGraph: {
        title: "Sushi Catering Frisco TX | Jinbeh",
        description: "Drop-off sushi platters catered across Frisco. Signature rolls, sashimi, and party trays. Family-owned since 1988.",
        url: "https://jinbeh.com/blog/sushi-catering-frisco",
        images: [{ url: "https://jinbeh.com/images/instagram/sushi-feast-overhead.jpg", width: 1200, height: 630, alt: "Sushi catering Frisco TX — Jinbeh signature roll platter" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Sushi Catering Frisco TX | Jinbeh", description: "Drop-off sushi platters catered across Frisco." },
    alternates: { canonical: "https://jinbeh.com/blog/sushi-catering-frisco" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Sushi Catering Frisco TX: Platters & Delivery",
    description: "Jinbeh's drop-off sushi catering for Frisco, TX — what's on the platters, signature rolls, sashimi options, lead times, and pricing.",
    image: "https://jinbeh.com/images/instagram/sushi-feast-overhead.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/sushi-catering-frisco" },
};

const faqs = [
    { question: "Does Jinbeh do sushi catering in Frisco?", answer: "Jinbeh has been catering sushi from our Frisco location at 2693 Preston Rd since 1988. Our sushi catering is drop-off — we cut the rolls and plate the sashimi at the restaurant, then deliver to your office, home, or venue on presentation trays ready to serve. We do not currently send a chef on-site. All sushi catering is drop-off." },
    { question: "How much does sushi catering cost in Frisco TX?", answer: "Drop-off sushi platters in Frisco typically run $15-$28 per person depending on the mix of rolls and whether sashimi is included. Premium platters with sashimi (salmon, tuna, yellowtail) and specialty rolls (Lobster Volcano, Spider, Dragon, Sunrise) land toward the higher end. Call (214) 619-1200 for an event-specific quote." },
    { question: "What's the typical lead time for Frisco sushi catering?", answer: "At least one week of lead time is the rule. Sushi quality depends on fish ordered specifically for your event headcount, and we don't pre-roll the night before. For larger orders (50+ guests) or premium platters with significant sashimi, push to 2 weeks." },
    { question: "How does Jinbeh keep sushi fresh during catering?", answer: "We cut the rolls and plate the sashimi the day of delivery, pack everything on ice in insulated containers, and deliver within 30-45 minutes of leaving the kitchen. Fish is delivered to our Frisco kitchen multiple times per week. We don't roll sushi the night before — the rice gets hard and the texture suffers." },
    { question: "What sushi rolls work best for Frisco party catering?", answer: "Crowd-pleasing platters mix California Roll, Dragon Roll, Rainbow Roll, Spicy Tuna Roll, and Shrimp Tempura Roll for the wider audience, plus signature options like the Sunrise Roll, Lobster Volcano Roll, Spider Roll, or Ahi Tower for the table that wants something less common. A small sashimi sampler (salmon, tuna, yellowtail) covers the sushi purists." },
    { question: "Do you cater corporate sushi lunches in Frisco?", answer: "Yes. Drop-off sushi platters for Frisco corporate offices are regular weekly orders. Common clients are offices in Legacy West, The Star district, and along the Preston Rd corridor. Standard order: 2-3 mixed sushi platters, an appetizer tray (edamame, gyoza), and a sashimi sampler if it's a senior team meeting. Delivery within a 30-40 minute window of leaving the kitchen." },
    { question: "Can your sushi catering accommodate dietary needs?", answer: "Yes. We accommodate gluten-free (tamari on the side, no eel sauce, no tempura rolls), vegetarian (avocado rolls, cucumber rolls, vegetable nigiri, asparagus rolls), pescatarian, dairy-free, peanut-free, shellfish-free, and most common allergies. Flag dietary needs when you book so the platters are composed correctly." },
    { question: "Where in Frisco does Jinbeh deliver sushi catering?", answer: "From our Preston Rd kitchen we deliver across Frisco and the surrounding cities. Standard zones: Stonebriar, Legacy West, Frisco Square, The Star district, Starwood, Newman Village, plus Plano, McKinney, Allen, Prosper, and Little Elm. For events outside this radius, we'll quote delivery transparently when you call." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Sushi Catering Frisco TX" },
]};

export default function SushiCateringFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sushi Catering Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/instagram/sushi-feast-overhead.jpg" alt="Sushi Catering Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/catering" className="hover:text-white">Catering</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🍣 Frisco Sushi Catering</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Sushi Catering Frisco TX: Drop-Off Platters from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Sushi quality is mostly a question of timing.</strong> Fish bought yesterday and cut the same day makes a different impression than fish that&apos;s sat overnight. So when Frisco hosts ask us about sushi platters for their party, the answer starts with the same rule: we cut the rolls the day of delivery, not the night before.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">At Jinbeh Frisco, sushi catering is drop-off &mdash; we cut and plate at our Preston Rd kitchen, then deliver to your office, home, or venue on presentation trays ready to serve. We do not currently send a chef on-site for live sushi rolling. Here&apos;s how the drop-off catering works.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;We won&apos;t roll your sushi the night before. The rice goes hard, the seaweed gets chewy, and the fish loses texture. If you want sushi that tastes like our restaurant, we cut the day of your event. Plan around that.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How drop-off sushi catering works at Jinbeh</h2>
                                    <p className="text-charcoal/80 mb-4">We cut rolls and plate sashimi at our Frisco kitchen, pack everything on ice in insulated containers, and deliver within 30-45 minutes of leaving. Every platter ships with soy sauce, tamari for gluten-free guests, pickled ginger, wasabi, and chopsticks.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Right for these events</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Office lunches in Legacy West, The Star, Frisco Square, and along the Preston Rd corridor</li>
                                        <li>At-home birthday parties and family gatherings</li>
                                        <li>Mixed-cuisine buffets where sushi is one of several stations</li>
                                        <li>Corporate dinners that want a sashimi-forward appetizer course</li>
                                        <li>Wedding-day buffets and rehearsal dinners hosted at off-site venues</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Rolls and sashimi for Frisco sushi catering</h2>
                                    <p className="text-charcoal/80 mb-4">For variety on a party platter, mix across four dimensions: cooked vs. raw, mild vs. spicy, familiar vs. signature, and visual diversity. The most-requested rolls and pieces:</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Classic crowd-pleasers</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>California Roll</strong> &mdash; the universal safe choice (crab, avocado, cucumber)</li>
                                        <li><strong>Spicy Tuna Roll</strong> &mdash; popular with adults, mildly spicy</li>
                                        <li><strong>Dragon Roll</strong> &mdash; visual centerpiece, eel and avocado</li>
                                        <li><strong>Rainbow Roll</strong> &mdash; California roll wrapped in colorful sashimi</li>
                                        <li><strong>Shrimp Tempura Roll</strong> &mdash; cooked, kid-friendly</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Signature options</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Sunrise Roll</strong> &mdash; one of our most-ordered house specialties</li>
                                        <li><strong>Lobster Volcano Roll</strong> &mdash; lobster with baked spicy topping</li>
                                        <li><strong>Ahi Tower</strong> &mdash; sashimi-grade tuna stacked with avocado and rice</li>
                                        <li><strong>Spider Roll</strong> &mdash; soft-shell crab tempura with cucumber</li>
                                        <li><strong>Caterpillar Roll</strong> &mdash; eel and cucumber plated visually</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Sashimi additions</h3>
                                    <p className="text-charcoal/80 mb-4">For events where guests appreciate raw fish on its own, add a sashimi sampler &mdash; salmon, tuna, yellowtail, sometimes scallop or octopus. Sashimi platters work especially well for corporate dinners and date-night-style at-home parties.</p>

                                    <ProTip variant="insider"><strong>Vegetarian option:</strong> we always include avocado-cucumber rolls or asparagus rolls for guests who don&apos;t eat fish. Plate them separately so vegetarian guests don&apos;t fish through the main platter looking for options.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pricing patterns for Frisco sushi catering</h2>
                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Platter Type</th>
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Per-Person</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Lead Time</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Classics-only platter (5 rolls)</td><td className="py-3 pr-4">$15-$22</td><td className="py-3">1 week</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Mixed platter (classics + signatures + sashimi)</td><td className="py-3 pr-4">$22-$35</td><td className="py-3">1-2 weeks</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Premium platter (signature + sashimi-forward)</td><td className="py-3 pr-4">$28-$45</td><td className="py-3">2 weeks</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Sushi + hibachi combination spread</td><td className="py-3 pr-4">$30-$50</td><td className="py-3">1-2 weeks</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-charcoal/80 text-sm italic mb-6">Ranges depend on fish mix (tuna and yellowtail premium), roll selection, and order size. Quote for your event: (214) 619-1200.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Frisco delivery zones</h2>
                                    <p className="text-charcoal/80 mb-4">From Preston Rd we deliver sushi platters across all of Frisco and the surrounding cities. Standard zones: Stonebriar, Legacy West, Frisco Square, The Star, Starwood, Frisco Square, plus Plano, McKinney, Allen, Prosper, and Little Elm. For events outside this radius, call us &mdash; we&apos;ll quote delivery transparently.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Want fresh sushi rolled at your table? Visit the Frisco sushi bar</h2>
                                    <p className="text-charcoal/80 mb-4">For sushi cut to order in front of you, the experience is at our sushi bar at 2693 Preston Rd. Our sushi chefs hand-craft nigiri, sashimi, classic rolls, and signature specialty rolls fresh as you order. <Link href="/frisco" className="text-accent-red hover:underline font-semibold">Reserve at Jinbeh Frisco</Link>.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Questions worth asking any sushi caterer</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>When were the rolls cut?</strong> Same-day delivery is the right answer</li>
                                        <li><strong>Where does the fish come from?</strong> Reputable caterers source from a known supplier with food-safety records</li>
                                        <li><strong>Are pickled ginger, wasabi, and chopsticks included?</strong> They should come standard</li>
                                        <li><strong>Is tamari included for gluten-free guests?</strong> At Jinbeh, yes &mdash; on the side, no booking fee</li>
                                        <li><strong>What&apos;s the vegetarian option?</strong> Should be more than &ldquo;avocado roll&rdquo;</li>
                                        <li><strong>How is it transported?</strong> Insulated container on ice, never room-temperature transport</li>
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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Get a Frisco sushi catering quote</h3>
                                        <p className="text-warm-ivory/80 mb-4">Tell us the date, headcount, and event type. We&apos;ll send a platter menu and price the same day.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/catering" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Catering Page</Link>
                                            <a href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 619-1200</a>
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
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">More Jinbeh catering</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/hibachi-catering-frisco" className="text-accent-red hover:underline">Hibachi catering Frisco</Link></li>
                                        <li><Link href="/blog/asian-food-catering-dfw" className="text-accent-red hover:underline">Asian food catering DFW</Link></li>
                                        <li><Link href="/blog/sushi-platter-for-party" className="text-accent-red hover:underline">Sushi platter for a party</Link></li>
                                        <li><Link href="/blog/best-sushi-frisco" className="text-accent-red hover:underline">Best sushi in Frisco</Link></li>
                                        <li><Link href="/frisco" className="text-accent-red hover:underline">Jinbeh Frisco (dine-in sushi bar)</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="sushi-catering-frisco" />
            <div className="h-12" />
        </main>
    );
}
