import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
    title: "Sushi Catering Lewisville TX: Platters & Delivery | Jinbeh",
    description:
        "Sushi catering in Lewisville, TX from Jinbeh — drop-off sushi platters delivered to offices, homes, and venues. Signature rolls, sashimi spreads, party trays. Family-owned since 1988.",
    keywords: [
        "sushi catering lewisville",
        "sushi catering lewisville tx",
        "sushi platter lewisville",
        "lewisville sushi caterer",
        "office sushi catering lewisville",
        "corporate sushi catering lewisville",
        "sushi tray catering lewisville",
        "party sushi lewisville",
        "japanese catering lewisville tx",
        "sushi platter flower mound",
        "sushi catering highland village",
        "sushi delivery lewisville",
        "drop-off sushi catering lewisville",
    ],
    openGraph: {
        title: "Sushi Catering Lewisville TX | Jinbeh",
        description: "Drop-off sushi platters catered across Lewisville. Signature rolls, sashimi, party trays. Family-owned since 1988.",
        url: "https://jinbeh.com/blog/sushi-catering-lewisville",
        images: [{ url: "https://jinbeh.com/images/instagram/sushi-feast-flatlay.jpg", width: 1200, height: 630, alt: "Sushi catering Lewisville TX — Jinbeh fresh sushi presentation" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Sushi Catering Lewisville TX | Jinbeh", description: "Drop-off sushi platters catered across Lewisville." },
    alternates: { canonical: "https://jinbeh.com/blog/sushi-catering-lewisville" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Sushi Catering Lewisville TX: Platters & Delivery",
    description: "Jinbeh's drop-off sushi catering for Lewisville, TX — platters, signature rolls, sashimi options, lead times, and pricing.",
    image: "https://jinbeh.com/images/instagram/sushi-feast-flatlay.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/sushi-catering-lewisville" },
};

const faqs = [
    { question: "Does Jinbeh do sushi catering in Lewisville?", answer: "Jinbeh has been catering sushi from our Lewisville location at 2440 S Stemmons Fwy for decades. Our sushi catering is drop-off — we cut the rolls and plate the sashimi at the restaurant, then deliver to your office, home, or venue on presentation trays ready to serve. We do not currently send a chef on-site. All sushi catering is drop-off." },
    { question: "How much does sushi catering cost in Lewisville TX?", answer: "Drop-off sushi platters in Lewisville typically run $15-$28 per person depending on the mix of rolls and whether sashimi is included. Premium platters with sashimi (salmon, tuna, yellowtail) and specialty rolls (Lobster Volcano, Spider, Dragon, Sunrise) land toward the higher end. Call (214) 488-2224 for an event-specific quote." },
    { question: "What's the lead time for Lewisville sushi catering?", answer: "At least one week of lead time. Sushi quality depends on fish ordered specifically for your event headcount, and we don't pre-roll the night before. For larger orders (50+ guests) or premium platters with significant sashimi, push to 2 weeks." },
    { question: "How does Jinbeh keep sushi fresh during Lewisville catering?", answer: "We cut rolls and plate sashimi the day of evening events, pack on ice in insulated containers, and deliver within 30-45 minutes of leaving the kitchen. Fish is ordered specifically for your catering headcount and delivered to our Stemmons Fwy kitchen within 48 hours of your event. We don't pre-roll the night before — the rice gets hard and the texture suffers." },
    { question: "What sushi rolls work best for Lewisville parties?", answer: "Crowd-pleasing platters mix California Roll, Spicy Tuna Roll, Dragon Roll, Rainbow Roll, and Shrimp Tempura Roll for the wider audience, plus signature options like the Sunrise Roll, Lobster Volcano Roll, Spider Roll, or Ahi Tower for guests who want something less common. A small sashimi sampler (salmon, tuna, yellowtail) covers the sushi purists." },
    { question: "Do you cater corporate sushi lunches in Lewisville?", answer: "Yes. Drop-off sushi platters for Lewisville-area offices, medical campuses, and corporate parks are regular weekly orders. We deliver to offices along Stemmons Freeway, the medical district around Medical City Lewisville, the corridor up to Denton, and west into Coppell. Standard corporate order: 2-3 mixed platters plus appetizers (edamame, gyoza), sometimes a small sashimi sampler for senior teams." },
    { question: "Can your sushi catering accommodate dietary restrictions?", answer: "Yes. We accommodate gluten-free (tamari on the side, no eel sauce, no tempura rolls), vegetarian (avocado-cucumber rolls, vegetable nigiri, asparagus rolls), pescatarian, dairy-free, peanut-free, shellfish-free, and most common allergies. Flag dietary needs when you book." },
    { question: "Where in the Lewisville area does Jinbeh deliver sushi?", answer: "Standard delivery from our Stemmons Fwy kitchen: Lewisville, Flower Mound, Highland Village, Castle Hills, Vista Ridge, The Colony, Carrollton, Coppell, Hebron, Lake Dallas, Old Town Lewisville, and western Plano. For events farther out (Denton, Argyle, Justin, Roanoke), call for a delivery quote." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Sushi Catering Lewisville TX" },
]};

export default function SushiCateringLewisvillePost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sushi Catering Lewisville" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/instagram/sushi-feast-flatlay.jpg" alt="Sushi Catering Lewisville at Jinbeh Lewisville Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/catering" className="hover:text-white">Catering</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">🍣 Lewisville Sushi Catering</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Sushi Catering Lewisville TX: Drop-Off Platters from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Lewisville families have been ordering Jinbeh sushi platters for decades.</strong> Castle Hills birthdays. Flower Mound graduation parties. Highland Village family gatherings. Office lunches up and down Stemmons Freeway. The Picklr next door grabbing trays for league nights.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Our sushi catering is drop-off &mdash; we cut and plate at the Lewisville kitchen, then deliver to your office, home, or venue on presentation trays ready to serve. We don&apos;t currently send a chef on-site for live sushi rolling. Here&apos;s how the drop-off catering works.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Sushi quality is mostly timing. If you cut the rolls 18 hours before they get eaten, you can taste it. We cut the day of. That&apos;s the whole secret.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How drop-off sushi catering works at Jinbeh Lewisville</h2>
                                    <p className="text-charcoal/80 mb-4">We cut rolls and plate sashimi at the Stemmons Fwy kitchen, pack on ice in insulated containers, and deliver within 30-45 minutes of leaving. Every platter ships with soy sauce, tamari for gluten-free guests, pickled ginger, wasabi, and chopsticks.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Right for these Lewisville events</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Office lunches along I-35E, the medical district, and the Lake Dallas business corridor</li>
                                        <li>At-home parties in Flower Mound, Highland Village, Castle Hills, and Vista Ridge</li>
                                        <li>Family birthdays, graduation parties, and milestone celebrations</li>
                                        <li>Mixed-cuisine buffets where sushi is one of several stations</li>
                                        <li>Wedding-day buffets and rehearsal dinners hosted at off-site venues</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Rolls and sashimi for Lewisville sushi catering</h2>
                                    <p className="text-charcoal/80 mb-4">For variety on a party platter, mix across four dimensions: cooked vs. raw, mild vs. spicy, familiar vs. signature, and visual diversity.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Classic crowd-pleasers</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>California Roll</strong> &mdash; the universal safe choice</li>
                                        <li><strong>Spicy Tuna Roll</strong> &mdash; popular with adults, mildly spicy</li>
                                        <li><strong>Dragon Roll</strong> &mdash; visual centerpiece, eel and avocado</li>
                                        <li><strong>Rainbow Roll</strong> &mdash; California roll wrapped in sashimi</li>
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
                                    <p className="text-charcoal/80 mb-4">For events where guests appreciate raw fish on its own, add a sashimi sampler &mdash; salmon, tuna, yellowtail, sometimes scallop or octopus.</p>

                                    <ProTip variant="insider"><strong>Vegetarian option:</strong> we always include avocado-cucumber rolls or asparagus rolls for guests who don&apos;t eat fish. Plate them separately so vegetarian guests don&apos;t fish through the main platter looking for options.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pricing patterns for Lewisville sushi catering</h2>
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
                                    <p className="text-charcoal/80 text-sm italic mb-6">Ranges depend on fish mix and order size. Call (214) 488-2224 for an event-specific quote.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Lewisville-area delivery zones</h2>
                                    <p className="text-charcoal/80 mb-4">Standard delivery from our Stemmons Fwy kitchen: Lewisville, Flower Mound, Highland Village, Castle Hills, Vista Ridge, The Colony, Carrollton, Coppell, Hebron, Lake Dallas, Old Town Lewisville, and western Plano. For events farther out (Denton, Argyle, Justin, Roanoke), we&apos;ll quote delivery transparently.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Want fresh sushi rolled at your table? Visit the Lewisville sushi bar</h2>
                                    <p className="text-charcoal/80 mb-4">For sushi cut to order in front of you, the experience is at our sushi bar at 2440 S Stemmons Fwy. Our sushi chefs hand-craft nigiri, sashimi, classic rolls, and signature specialty rolls fresh as you order. <Link href="/lewisville" className="text-accent-red hover:underline font-semibold">Reserve at Jinbeh Lewisville</Link>.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Get a Lewisville sushi catering quote</h3>
                                        <p className="text-warm-ivory/80 mb-4">Tell us the date, headcount, and venue. We&apos;ll send a platter menu and price the same day.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/catering" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Catering Page</Link>
                                            <CallLink href="tel:2144882224" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 488-2224</CallLink>
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
                                        <li><Link href="/blog/hibachi-catering-lewisville" className="text-accent-red hover:underline">Hibachi catering Lewisville</Link></li>
                                        <li><Link href="/blog/sushi-catering-frisco" className="text-accent-red hover:underline">Sushi catering Frisco</Link></li>
                                        <li><Link href="/blog/asian-food-catering-dfw" className="text-accent-red hover:underline">Asian food catering DFW</Link></li>
                                        <li><Link href="/blog/sushi-platter-for-party" className="text-accent-red hover:underline">Sushi platter for a party</Link></li>
                                        <li><Link href="/lewisville" className="text-accent-red hover:underline">Jinbeh Lewisville (dine-in sushi bar)</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="sushi-catering-lewisville" />
            <div className="h-12" />
        </main>
    );
}
