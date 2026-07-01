import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
    title: "Asian Food Catering in DFW: A Real Planning Guide | Jinbeh",
    description:
        "Drop-off Japanese food catering across Dallas-Fort Worth — hibachi protein trays, sushi platters, and full Japanese-cuisine spreads for offices, weddings, and parties. Family-owned since 1988.",
    keywords: [
        "asian food catering near me",
        "asian food catering dfw",
        "asian food catering dallas",
        "japanese catering dfw",
        "japanese catering dallas",
        "hibachi catering dfw",
        "hibachi catering frisco",
        "hibachi catering lewisville",
        "sushi catering dfw",
        "sushi catering dallas",
        "corporate japanese catering frisco",
        "office lunch catering frisco",
        "party platter catering dfw",
        "asian catering frisco tx",
        "asian catering lewisville tx",
        "drop-off japanese catering dfw",
    ],
    openGraph: {
        title: "Asian Food Catering in DFW: A Real Planning Guide",
        description: "Drop-off Japanese catering across Dallas-Fort Worth — hibachi trays, sushi platters, and full Japanese-cuisine spreads.",
        url: "https://jinbeh.com/blog/asian-food-catering-dfw",
        images: [{ url: "https://jinbeh.com/images/instagram/lobster-spread-overhead.jpg", width: 1200, height: 630, alt: "Asian food catering DFW — Jinbeh drop-off hibachi and sushi for corporate events" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Asian Food Catering in DFW: A Real Planning Guide", description: "Drop-off Japanese catering across Dallas-Fort Worth." },
    alternates: { canonical: "https://jinbeh.com/blog/asian-food-catering-dfw" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Asian Food Catering in DFW: A Real Planning Guide",
    description: "A working guide to Japanese-cuisine catering across the Dallas-Fort Worth area from a family-owned Japanese restaurant. Drop-off hibachi trays, sushi platters, sashimi spreads, lead times, and pricing.",
    image: "https://jinbeh.com/images/instagram/lobster-spread-overhead.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/asian-food-catering-dfw" },
};

const faqs = [
    { question: "Does Jinbeh do Asian food catering in DFW?", answer: "Jinbeh caters Japanese food across the Dallas-Fort Worth metroplex from our Frisco and Lewisville locations. Our catering is drop-off: we cook and plate at our restaurants and deliver to your office, home, or venue on presentation trays ready to serve. Sushi platters, hibachi protein trays, sashimi spreads, appetizer trays, and full Japanese-cuisine spreads. We do not currently send a chef on-site for off-site events." },
    { question: "How much does Jinbeh catering cost per person in DFW?", answer: "Jinbeh drop-off catering typically runs $20-$40 per person depending on what you order. Sushi-forward platters land at the lower end; hibachi protein trays with steak, shrimp, scallops, and combinations sit in the middle; premium spreads with filet mignon, lobster tail, and sashimi land at the higher end. Call (214) 619-1200 (Frisco) or (214) 488-2224 (Lewisville) for a quote on your event." },
    { question: "How much advance notice does Jinbeh need for catering orders?", answer: "Standard catering orders need at least one week of lead time. Larger orders (50+ guests), premium spreads, and wedding catering need 2-4 weeks. We can sometimes accommodate rush orders for repeat clients or smaller drop-off trays with less notice, but planning ahead means better quality, more options, and a smoother day-of." },
    { question: "What's the format for Jinbeh's Asian food catering?", answer: "All Jinbeh catering is drop-off. We cook hibachi proteins, fried rice, and vegetables at the restaurant; we cut sushi rolls and plate sashimi the day of delivery. Everything ships on presentation trays in insulated containers, ready to serve. We do not currently send chefs to off-site events for live cooking or rolling — for the tableside hibachi experience, you visit our Frisco or Lewisville dining room." },
    { question: "Can Jinbeh accommodate dietary restrictions for catering?", answer: "Yes. Jinbeh catering accommodates vegetarian, vegan, gluten-free, dairy-free, peanut, tree nut, shellfish, and soy restrictions. We've catered events with multiple dietary boxes checked at the same table. Tell us the headcount per restriction when you book and we'll build the menu around it. For gluten-free or celiac guests, we use tamari instead of soy sauce and keep separate prep surfaces." },
    { question: "What areas of DFW does Jinbeh cater?", answer: "From Frisco we cover the northern DFW corridor — Plano, McKinney, Allen, Prosper, The Colony, Little Elm, Stonebriar, Legacy West, The Star, and the offices around them. From Lewisville we cover Flower Mound, Highland Village, The Colony, Carrollton, Coppell, Grapevine, Denton, and the I-35E corridor. For events outside our usual radius, call us — we've delivered to weddings in McKinney and corporate events in Las Colinas." },
    { question: "What's the most-ordered Jinbeh catering setup?", answer: "Most DFW orders combine one hibachi protein tray (steak, chicken, shrimp, or combo) plus a sushi platter (5-roll classics with a small sashimi sampler) plus edamame and gyoza appetizers. The combination feeds a wide range of guest preferences and runs roughly $25-$35 per person depending on protein and sushi mix." },
    { question: "Does Jinbeh deliver, or do I pick up?", answer: "Both. We deliver across DFW for orders that meet our minimum (varies by distance and order size). For smaller orders close to either restaurant, pickup is the faster and lower-cost option. Delivery costs are quoted transparently up front based on distance from the kitchen." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Asian Food Catering DFW" },
]};

export default function AsianCateringDFWPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Asian Food Catering DFW" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/instagram/lobster-spread-overhead.jpg" alt="Asian Food Catering Near Me at Jinbeh Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/local-guide" className="hover:text-white">Local Guides</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🍱 Catering &amp; Events</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Asian Food Catering in DFW: A Real Planning Guide</h1>
                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span><span>·</span><span>May 2026</span><span>·</span><span>8 min read</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8">Most people booking Asian food catering in DFW for the first time don&apos;t know what they don&apos;t know. They search &ldquo;catering near me,&rdquo; pick the cheapest option, and find out on event day that the sushi was made the night before, the rice is room-temperature, and the food doesn&apos;t taste like it came from a real restaurant.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">At Jinbeh, we&apos;ve been catering Japanese food across the Dallas-Fort Worth area since 1988 from our Frisco and Lewisville locations. This is a real-world guide for anyone planning an office lunch, wedding, birthday party, corporate dinner, or holiday event &mdash; what to order, what it costs, what to ask, and what most people get wrong.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Drop-off catering done right means the food arrives hot, the sushi was cut today, the trays look great, and your guests don&apos;t spend the next morning wondering why their stomach is upset. That bar is lower than most caterers clear.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How Jinbeh catering works</h2>
                                    <p className="text-charcoal/80 mb-4">All Jinbeh catering is drop-off. We cook hibachi proteins, fried rice, and vegetables at the restaurant. We cut sushi rolls and plate sashimi the day of delivery. Everything ships on presentation trays in insulated containers, ready to serve at your venue.</p>
                                    <p className="text-charcoal/80 mb-4">We do not currently send chefs to off-site events for live cooking or rolling. For the tableside hibachi experience &mdash; the chef, the onion volcano, the knife tricks, the fire show &mdash; you visit our restaurants in Frisco or Lewisville. Our private dining setup also handles birthday parties, anniversaries, rehearsal dinners, and corporate dinners in-house.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What Jinbeh catering trays include</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Hibachi protein trays</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Your choice of proteins &mdash; chicken, steak, shrimp, scallops, salmon, or combinations</li>
                                        <li>Hibachi fried rice or steamed rice</li>
                                        <li>Hibachi-style vegetables (zucchini, onion, mushrooms, bean sprouts)</li>
                                        <li>Yum yum and ginger sauces on the side</li>
                                        <li>Tamari for gluten-free guests on request</li>
                                        <li>Chopsticks, napkins, serving utensils</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Sushi platters</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Classic rolls (California, Spicy Tuna, Dragon, Rainbow, Shrimp Tempura)</li>
                                        <li>Signature rolls (Sunrise, Lobster Volcano, Spider, Caterpillar, Ahi Tower)</li>
                                        <li>Vegetarian options (avocado-cucumber, asparagus, vegetable nigiri)</li>
                                        <li>Sashimi samplers (salmon, tuna, yellowtail, sometimes scallop and octopus)</li>
                                        <li>Soy sauce, tamari, pickled ginger, wasabi, chopsticks</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Appetizers &amp; sides</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Edamame, gyoza, tempura (shrimp and vegetable), miso soup, ginger salad</li>
                                        <li>Add-on appetizer trays sized to your headcount</li>
                                    </ul>

                                    <ProTip variant="insider"><strong>The most-requested combination across DFW:</strong> one hibachi protein tray (steak + shrimp combo) plus a 5-roll mixed sushi platter plus an edamame-and-gyoza appetizer tray. Covers Japanese-cuisine bases for a 15-25 person event without doubling the cost.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Most-ordered Jinbeh catering setups across DFW</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Office lunches</h3>
                                    <p className="text-charcoal/80 mb-4">Hibachi protein trays (chicken, steak, shrimp), steamed or fried rice, vegetables, plus a sushi sampler tray for variety. Most-requested by Legacy West, The Star, Frisco Square, and I-35E corridor offices.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Birthday parties &amp; family gatherings</h3>
                                    <p className="text-charcoal/80 mb-4">A sushi platter centerpiece with Dragon Roll, Rainbow Roll, California Roll, and 1-2 signatures, plus a hibachi protein tray for the entrée and appetizers (edamame, gyoza, tempura) on the side. Pairs well at private homes across Frisco, Lewisville, Flower Mound, and Highland Village.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Wedding buffets &amp; rehearsal dinners</h3>
                                    <p className="text-charcoal/80 mb-4">Drop-off Japanese spread for a wedding buffet works as one of several catering stations: a sushi platter at the appetizer course, hibachi protein trays at the entrée. For weddings hosted at private estates or venues without on-site kitchens, the drop-off format avoids logistics headaches.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Corporate events &amp; holiday parties</h3>
                                    <p className="text-charcoal/80 mb-4">Larger orders for offices, holiday parties, milestone team celebrations. We handle 50-200 person orders with appropriate lead time. For client-impressing dinners with the tableside hibachi show, we recommend hosting at our restaurant rather than catering off-site.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Lead time and budget reality</h2>
                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Event Type</th>
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Lead Time</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Typical Per-Person Range</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Office drop-off lunch</td><td className="py-3 pr-4">1 week</td><td className="py-3">$20-$30</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Birthday party (drop-off)</td><td className="py-3 pr-4">1-2 weeks</td><td className="py-3">$25-$40</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Corporate dinner (drop-off)</td><td className="py-3 pr-4">2-3 weeks</td><td className="py-3">$30-$50</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Wedding buffet (drop-off)</td><td className="py-3 pr-4">4-8 weeks</td><td className="py-3">$35-$60</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Premium spread (filet, lobster, sashimi)</td><td className="py-3 pr-4">2-4 weeks</td><td className="py-3">$45-$75</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-charcoal/80 mb-6 italic text-sm">Ranges are guidance, not quotes &mdash; final pricing depends on protein selection, sushi mix, delivery distance. Call us for an exact number.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Questions most people forget to ask</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>When was the fish bought, and when were the rolls cut?</strong> For sushi, the right answer is &ldquo;today&rdquo; or &ldquo;within 48 hours&rdquo; for the fish; same-day for the rolls. Anything older has lost texture</li>
                                        <li><strong>Will the food be reheated on site?</strong> Hibachi proteins don&apos;t reheat well. Ask how the caterer keeps food at temperature without ruining texture</li>
                                        <li><strong>What&apos;s your dietary restriction protocol?</strong> Vague answers are a red flag. Real Japanese caterers have a clear gluten-free, vegan, and allergen process</li>
                                        <li><strong>What&apos;s the minimum for delivery?</strong> Don&apos;t assume; minimums vary by distance and time of day</li>
                                        <li><strong>What ships with the trays?</strong> Pickled ginger, wasabi, soy sauce, tamari, chopsticks, serving utensils &mdash; should all come standard</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Service areas across DFW</h2>
                                    <p className="text-charcoal/80 mb-4">Jinbeh catering serves the full DFW area from two locations:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>From Frisco (2693 Preston Rd):</strong> Plano, McKinney, Allen, Prosper, The Colony, Little Elm, Aubrey, Frisco Square, Stonebriar, Legacy West, The Star, PGA HQ area</li>
                                        <li><strong>From Lewisville (2440 S Stemmons Fwy):</strong> Flower Mound, Highland Village, The Colony, Carrollton, Coppell, Grapevine, Denton, Lake Dallas, Las Colinas, Irving (with notice)</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">For events beyond these zones, call us. We&apos;ve catered Las Colinas corporate events and McKinney weddings the same week.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Start your catering quote</h3>
                                        <p className="text-warm-ivory/80 mb-4">Tell us the date, headcount, and event type. We&apos;ll send a custom menu and price the same day.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/catering" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Catering Page</Link>
                                            <CallLink href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call Frisco (214) 619-1200</CallLink>
                                            <CallLink href="tel:2144882224" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call Lewisville (214) 488-2224</CallLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Quick reference</div>
                                    <ul className="space-y-3 text-sm text-white/90">
                                        <li><strong>Format:</strong> Drop-off only</li>
                                        <li><strong>Standard lead:</strong> 1 week</li>
                                        <li><strong>Wedding lead:</strong> 4-8 weeks</li>
                                        <li><strong>Service area:</strong> Most of DFW from two locations</li>
                                        <li><strong>Per-person:</strong> $20-$60+ depending on mix</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related at Jinbeh</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/catering" className="text-accent-red hover:underline">Jinbeh catering page</Link></li>
                                        <li><Link href="/blog/hibachi-catering-frisco" className="text-accent-red hover:underline">Hibachi catering Frisco</Link></li>
                                        <li><Link href="/blog/hibachi-catering-lewisville" className="text-accent-red hover:underline">Hibachi catering Lewisville</Link></li>
                                        <li><Link href="/blog/sushi-platter-for-party" className="text-accent-red hover:underline">Sushi platter for a party</Link></li>
                                        <li><Link href="/celebrations/corporate-events" className="text-accent-red hover:underline">Corporate events</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="asian-food-catering-dfw" />
            <div className="h-12" />
        </main>
    );
}
