import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Sushi Platter Near Me DFW: Order from Jinbeh",
    description: "Sushi platter near me in Frisco, Lewisville, Plano, Flower Mound. Jinbeh sushi platters for parties, offices, events — pickup or drop-off across DFW.",
    keywords: ["sushi platter near me","sushi platter dfw","sushi tray near me","sushi platter frisco","sushi platter lewisville","sushi platter plano","sushi platter flower mound","sushi party platter","sushi tray for party","sushi platter delivery","large sushi platter near me","jinbeh sushi platter"],
    openGraph: { title: "Sushi Platter Near Me DFW | Jinbeh", description: "Sushi platters from Jinbeh — Frisco, Lewisville, Plano, Flower Mound. Pickup or drop-off for parties, offices, events.", url: "https://jinbeh.com/blog/sushi-platter-near-me", images: [{ url: "https://jinbeh.com/images/hq/sushi-rolls-2026.jpg", width: 1200, height: 630, alt: "Sushi platter near me DFW — Jinbeh sushi tray for parties and offices" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Sushi Platter Near Me DFW | Jinbeh", description: "Sushi platters from Jinbeh — pickup or drop-off across DFW." },
    alternates: { canonical: "https://jinbeh.com/blog/sushi-platter-near-me" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Sushi Platter Near Me DFW: Order from Jinbeh", description: "How to order a sushi platter near you in DFW from Jinbeh — Frisco, Lewisville, and surrounding cities. Pickup or drop-off.", image: "https://jinbeh.com/images/hq/sushi-rolls-2026.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/sushi-platter-near-me" } };

const faqs = [
    { question: "Where can I order a sushi platter near me in DFW?", answer: "Jinbeh does sushi platters from two locations: Frisco (2693 Preston Rd, near Stonebriar) and Lewisville (2440 S Stemmons Fwy, Vista Ridge). Pickup is available at both. Drop-off delivery covers Frisco, Plano, McKinney, The Colony, Little Elm, Lewisville, Flower Mound, Highland Village, Coppell, Carrollton, and Castle Hills." },
    { question: "How far ahead do I need to order a Jinbeh sushi platter?", answer: "Call at least one week ahead for the best experience. The kitchen cuts rolls fresh the morning of the event. For smaller platters (1-2 people), order through Grubhub or Uber Eats with same-day turnaround. For party platters serving 10+, lead time matters — sushi is best when it's cut hours, not days, before serving." },
    { question: "How many rolls do I need for a party?", answer: "Rough math: count 8-10 pieces of sushi per person if it's a meal, 4-6 pieces if it's an appetizer course. A typical roll yields 8 pieces. So for 10 people as a meal, plan on 10-12 rolls plus some sashimi or nigiri to round it out. The Jinbeh team can help you build the right quantity when you call." },
    { question: "What's typically on a Jinbeh sushi platter?", answer: "Standard platters lean toward crowd-pleasers: California Rolls, Spicy Tuna Rolls, Shrimp Tempura Rolls, Rainbow Rolls, and signature options like the Sunrise Roll, Lobster Volcano, and Caterpillar Roll. We can also include sashimi (salmon, tuna, yellowtail) and nigiri pieces. The exact mix is built around your group's preferences." },
    { question: "Can I get a custom sushi platter?", answer: "Yes. Call to talk through what you're hosting — corporate lunch, anniversary, baby shower, etc. — and we'll build a platter mix that fits the size, dietary needs, and feel of the event. Gluten-free and vegetarian options are available; the more notice we have, the better we can plan." },
    { question: "How much does a sushi platter cost?", answer: "Pricing depends on which rolls you choose and the size of the platter. Classic rolls are the most economical; signature rolls and platters that include sashimi run higher. Call (214) 619-1200 (Frisco) or (214) 488-2224 (Lewisville) for a quote with your specific list and party size." },
    { question: "Will Jinbeh deliver a sushi platter to my office?", answer: "Yes — drop-off delivery is available across our service area in DFW. The platter arrives cut fresh that morning, on a presentation tray with soy sauce, wasabi, ginger, and chopsticks included. Setup is buffet-style; the host of your event takes it from there." },
    { question: "How long does a sushi platter stay fresh?", answer: "Sushi quality is highest within 2-3 hours of being cut. Serve the platter at room temperature — refrigerated sushi gets hard rice and dull flavor. If the platter has to sit before serving, keep it covered in a cool room (not in the fridge) for up to 2 hours; longer than that and freshness drops." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Sushi Platter Near Me DFW" },
]};

export default function SushiPlatterNearMePost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sushi Platter Near Me DFW" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/hq/sushi-rolls-2026.jpg" alt="Sushi platter near me DFW — Jinbeh sushi tray for parties and offices" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/catering" className="hover:text-white">Catering</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🍣 DFW Sushi Platters</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Sushi Platter Near Me DFW: Order from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>A good sushi platter is the centerpiece move at a party.</strong> It feeds a crowd. It looks beautiful on a table. Everyone finds something they like &mdash; spicy, mild, cooked, raw. And unlike most catering options, it works just as well at a backyard cookout as it does at a corporate lunch.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh does sushi platters out of both DFW locations &mdash; Frisco and Lewisville &mdash; with drop-off delivery across the region. Here&apos;s the practical guide to ordering one near you.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Where Jinbeh delivers</h2>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-6 mb-3">From Jinbeh Frisco</h3>
                                    <p className="text-charcoal/80 mb-3">Frisco, west Plano, The Colony, Little Elm, parts of McKinney. Easy reach if your event is anywhere in the Stonebriar / Preston Rd corridor.</p>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-6 mb-3">From Jinbeh Lewisville</h3>
                                    <p className="text-charcoal/80 mb-4">Lewisville, Flower Mound, Highland Village, Castle Hills, parts of Coppell, Carrollton, and The Colony. Vista Ridge sits at I-35E so freeway-accessible addresses get there fast.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How to order a sushi platter near you</h2>
                                    <ol className="list-decimal pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Call the closer location</strong> &mdash; Frisco (214) 619-1200 or Lewisville (214) 488-2224</li>
                                        <li><strong>Tell us</strong>: party size, date and time, pickup vs. drop-off, any dietary needs (gluten-free, vegetarian, no shellfish)</li>
                                        <li><strong>We&apos;ll build a platter mix</strong> &mdash; classic rolls, signature rolls, sashimi, nigiri, in proportions that fit the crowd</li>
                                        <li><strong>One week notice</strong> for party-size orders so the rolls are cut fresh that morning</li>
                                        <li><strong>Same-day for small orders</strong> via Grubhub or Uber Eats if you&apos;re feeding 1-4 people</li>
                                    </ol>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How much sushi per person?</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>As a meal:</strong> 8-10 pieces per person</li>
                                        <li><strong>As an appetizer course:</strong> 4-6 pieces per person</li>
                                        <li><strong>Mixed crowd (some sushi fans, some not):</strong> 5-7 pieces per person, plus side options like edamame and gyoza</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">A typical roll yields 8 pieces. So for 12 people as a meal, plan on 12-14 rolls plus a sashimi/nigiri assortment. For 25 people as a meal, plan on 25-28 rolls plus larger sashimi platters.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What goes on the platter</h2>
                                    <p className="text-charcoal/80 mb-3"><strong>Crowd-pleasers (start here):</strong></p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>California Roll &mdash; crab, avocado, cucumber. Mild, familiar, the safe entry point for sushi-curious guests</li>
                                        <li>Spicy Tuna Roll &mdash; the most-ordered roll in America for a reason</li>
                                        <li>Shrimp Tempura Roll &mdash; cooked shrimp, crunchy, kid-friendly</li>
                                        <li>Rainbow Roll &mdash; California Roll topped with sashimi colors. Beautiful to look at</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-3"><strong>Signature rolls (for the sushi fans):</strong></p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Sunrise Roll &mdash; our signature</li>
                                        <li>Lobster Volcano &mdash; warm baked top, rich</li>
                                        <li>Spider Roll &mdash; soft-shell crab tempura inside</li>
                                        <li>Caterpillar Roll &mdash; eel and avocado, plated to look like a caterpillar</li>
                                        <li>Dragon Roll &mdash; eel, avocado, eel sauce on top</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-3"><strong>Sashimi and nigiri to round out:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Salmon sashimi or nigiri &mdash; mild, popular</li>
                                        <li>Tuna sashimi or nigiri &mdash; deeper flavor</li>
                                        <li>Yellowtail sashimi or nigiri &mdash; buttery, beloved by sushi people</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What&apos;s included with the platter</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Soy sauce (tamari/gluten-free on request)</li>
                                        <li>Wasabi</li>
                                        <li>Pickled ginger</li>
                                        <li>Chopsticks</li>
                                        <li>Presentation tray</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">When to choose pickup vs. drop-off</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>Pickup</strong> works when you&apos;re hosting at home or somewhere near our Frisco or Lewisville location. You save the delivery fee and the platter sits in your car cool for 30-60 minutes without issue. Many neighborhood birthday parties and family gatherings go this route.</p>
                                    <p className="text-charcoal/80 mb-4"><strong>Drop-off</strong> works when you don&apos;t want to leave the office mid-day or you&apos;re hosting at a venue across town. The platter arrives cut that morning. We unload, set it on your event table, and you take it from there.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Order a Jinbeh sushi platter near you</h3>
                                        <p className="text-warm-ivory/80 mb-4">Pickup or drop-off from Frisco or Lewisville. One week notice for party-size orders.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <a href="tel:2146191200" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Frisco: (214) 619-1200</a>
                                            <a href="tel:2144882224" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Lewisville: (214) 488-2224</a>
                                            <Link href="/catering" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Catering Page</Link>
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
                                        <li>1 week notice for party platters</li>
                                        <li>8-10 pieces per person as meal</li>
                                        <li>Pickup or drop-off delivery</li>
                                        <li>Cut fresh morning of event</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">More sushi catering guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/sushi-platter-for-party" className="text-accent-red hover:underline">Sushi platter for a party</Link></li>
                                        <li><Link href="/blog/sushi-catering-frisco" className="text-accent-red hover:underline">Sushi catering Frisco</Link></li>
                                        <li><Link href="/blog/sushi-catering-lewisville" className="text-accent-red hover:underline">Sushi catering Lewisville</Link></li>
                                        <li><Link href="/blog/sushi-takeout-frisco" className="text-accent-red hover:underline">Sushi takeout Frisco</Link></li>
                                        <li><Link href="/blog/sushi-takeout-lewisville" className="text-accent-red hover:underline">Sushi takeout Lewisville</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="sushi-platter-near-me" />
            <div className="h-12" />
        </main>
    );
}
