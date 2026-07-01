import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
    title: "Premium Sushi in Frisco TX: Signature Rolls & Sashimi | Jinbeh",
    description:
        "Premium sushi in Frisco, TX at Jinbeh — signature rolls, sashimi, daily fresh fish, and the sushi bar experience near Stonebriar. Family-owned since 1988.",
    keywords: [
        "premium sushi frisco",
        "fancy sushi frisco",
        "fancy sushi near me",
        "upscale sushi frisco",
        "high end sushi frisco",
        "signature sushi rolls frisco",
        "sashimi frisco tx",
        "premium sashimi frisco",
        "best sushi bar frisco",
        "sushi bar near stonebriar",
        "sushi chef frisco",
        "fresh fish sushi frisco",
        "premium nigiri frisco",
    ],
    openGraph: {
        title: "Premium Sushi in Frisco TX | Jinbeh",
        description: "Premium sushi at Jinbeh Frisco — signature rolls, sashimi, daily fresh fish at our sushi bar near Stonebriar.",
        url: "https://jinbeh.com/blog/premium-sushi-frisco",
        images: [{ url: "https://jinbeh.com/images/instagram/sushi-feast-overhead.jpg", width: 1200, height: 630, alt: "Premium sushi Frisco TX — Jinbeh signature rolls and sashimi at the sushi bar" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Premium Sushi in Frisco TX | Jinbeh", description: "Signature rolls and sashimi at the Jinbeh Frisco sushi bar." },
    alternates: { canonical: "https://jinbeh.com/blog/premium-sushi-frisco" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Premium Sushi in Frisco TX: Signature Rolls & Sashimi",
    description: "A guide to the premium sushi experience at Jinbeh Frisco — signature rolls, sashimi, daily fresh fish, and what to order.",
    image: "https://jinbeh.com/images/instagram/sushi-feast-overhead.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/premium-sushi-frisco" },
};

const faqs = [
    { question: "Where can I find premium sushi in Frisco TX?", answer: "Jinbeh Frisco at 2693 Preston Rd has been serving premium sushi since 1988 — fresh fish delivered multiple times per week, hand-cut nigiri and sashimi at the sushi bar, and signature specialty rolls including the Sunrise Roll, Lobster Volcano Roll, Spider Roll, Caterpillar Roll, and Ahi Tower. The full sushi bar sits inside our Stonebriar-area location with seating where you can watch the chefs work." },
    { question: "What are the signature sushi rolls at Jinbeh Frisco?", answer: "Our most-requested signature rolls: Sunrise Roll (a Jinbeh house specialty), Lobster Volcano Roll (lobster with baked spicy crab topping), Spider Roll (soft-shell crab tempura with cucumber), Caterpillar Roll (eel and cucumber plated to look like a caterpillar), Ahi Tower (sashimi-grade tuna stacked with avocado and rice), and Dragon Roll (eel and avocado with eel sauce). Each is rolled to order at the sushi bar." },
    { question: "Is the fish at Jinbeh Frisco fresh?", answer: "Fish is delivered to our Frisco kitchen multiple times per week. We order to par against expected covers, which means our standing inventory is small and the fish moves through quickly. Sashimi grade tuna, salmon, yellowtail, scallop, and octopus are the regulars. We don't use frozen fish for sashimi or nigiri." },
    { question: "Can I sit at the sushi bar at Jinbeh Frisco?", answer: "Yes. Sushi bar seating is available at Jinbeh Frisco — you sit at the bar, watch the chefs work, and order at your own pace. The sushi bar is the right seat for a date night, a sushi-focused dinner, or anyone who wants to watch the rolls being cut. Reserve through OpenTable and request 'sushi bar' in the notes, or call (214) 619-1200." },
    { question: "What's the difference between Jinbeh's sushi and a sushi-only restaurant in Frisco?", answer: "Jinbeh is both a hibachi steakhouse and a premium sushi bar under one roof. A sushi-only spot like a dedicated omakase counter does sushi in a more focused, single-format way (often a chef-selected tasting menu). Jinbeh offers a broader sushi menu — classics, signatures, sashimi, plus the option to combine sushi with hibachi entrées in the same meal." },
    { question: "What does premium sushi cost at Jinbeh Frisco?", answer: "Premium sushi ordering at Jinbeh Frisco runs $50-$80 per person depending on what you order. A sashimi sampler (salmon, tuna, yellowtail) plus 2-3 signature rolls plus a sake pairing lands in that range. Adding a hibachi entrée brings the meal closer to $75-$120 per person. Happy hour (Mon-Fri 5-6:30 PM) gives access to $5 sake and other bar pricing." },
    { question: "Does Jinbeh Frisco have a chef's choice sashimi platter?", answer: "Yes. The Sashimi Deluxe is our chef-selected sashimi spread — a mix of salmon, tuna, yellowtail, and other seasonal fish, plated by the sushi chef. Quantity is sized for two or three guests sharing. Ask for it at the sushi bar." },
    { question: "How do I reserve premium sushi seating at Jinbeh Frisco?", answer: "Reserve through OpenTable at jinbeh.com or call (214) 619-1200. For sushi bar seating specifically, mention 'sushi bar' in the reservation notes. Friday and Saturday evening sushi bar two-tops fill 2-3 weeks in advance, so book ahead. Weeknight sushi bar seating is usually available same week." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Japanese Cuisine", item: "https://jinbeh.com/blog/category/cuisine" },
    { "@type": "ListItem", position: 4, name: "Premium Sushi Frisco TX" },
]};

export default function PremiumSushiFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Premium Sushi Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/instagram/sushi-feast-overhead.jpg" alt="Premium Sushi Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/cuisine" className="hover:text-white">Japanese Cuisine</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🍣 Frisco Premium Sushi</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Premium Sushi in Frisco TX: Signature Rolls &amp; Sashimi at Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Premium sushi in Frisco means three things in practice:</strong> the fish is fresh, the chef knows what they&apos;re doing, and the room is set up so you can pay attention to what&apos;s on the plate. Jinbeh Frisco runs all three at our sushi bar near Stonebriar Centre.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">We&apos;ve been cutting sushi at this location since 1988. The sushi bar sits inside our hibachi steakhouse, but it&apos;s a distinct experience &mdash; seat yourself at the bar, watch the chefs hand-cut nigiri and roll specialty pieces, order at your own pace.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Sit at the sushi bar. Order three signatures and a sashimi sampler. Ask the chef what came in fresh that day. You don&apos;t need an omakase counter to eat well.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">The Jinbeh Frisco signature rolls</h2>
                                    <p className="text-charcoal/80 mb-4">Our specialty rolls are what people remember. Each is cut to order at the sushi bar.</p>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Sunrise Roll</strong> &mdash; a Jinbeh house specialty. One of our most-ordered rolls</li>
                                        <li><strong>Lobster Volcano Roll</strong> &mdash; lobster topped with baked spicy crab. The visual centerpiece of any party</li>
                                        <li><strong>Spider Roll</strong> &mdash; soft-shell crab tempura with cucumber and avocado</li>
                                        <li><strong>Caterpillar Roll</strong> &mdash; eel and cucumber plated to look like a caterpillar. Eel sauce drizzle on top</li>
                                        <li><strong>Ahi Tower</strong> &mdash; sashimi-grade tuna stacked with avocado, rice, and seasoning. Plated as a tower</li>
                                        <li><strong>Dragon Roll</strong> &mdash; eel and avocado, finished with eel sauce</li>
                                        <li><strong>Rainbow Roll</strong> &mdash; California roll wrapped in sashimi cuts of salmon, tuna, and yellowtail</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Sashimi and nigiri</h2>
                                    <p className="text-charcoal/80 mb-4">The sashimi side of the menu is where the fish quality shows most directly. Standard offerings:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Salmon sashimi</strong> &mdash; lighter, buttery, good entry sashimi</li>
                                        <li><strong>Tuna sashimi</strong> &mdash; sashimi-grade tuna, denser texture</li>
                                        <li><strong>Yellowtail sashimi</strong> &mdash; richer and more aromatic than salmon or tuna</li>
                                        <li><strong>Scallop sashimi</strong> &mdash; sweet, delicate, served simply</li>
                                        <li><strong>Octopus sashimi</strong> &mdash; for guests who want something less common</li>
                                        <li><strong>Sashimi Deluxe</strong> &mdash; chef-selected platter combining the day&apos;s freshest cuts</li>
                                        <li><strong>Chirashi</strong> &mdash; assorted sashimi over seasoned rice in a bowl</li>
                                    </ul>

                                    <ProTip variant="insider"><strong>Ask the sushi chef what came in fresh today.</strong> Some days the salmon is exceptional. Some days the yellowtail is the star. The chef will tell you if you ask. That conversation also signals you actually care about the meal, and the chef tends to take more time with the plating.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How to order at the Jinbeh Frisco sushi bar</h2>
                                    <ol className="list-decimal pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Start with sashimi or nigiri</strong> &mdash; signals to the chef that you care about fish quality, sets the bar for the rest of the meal</li>
                                        <li><strong>Ask about today&apos;s fresh fish</strong> &mdash; gets you the best of what came in</li>
                                        <li><strong>Order 2-3 signature rolls</strong> &mdash; mix one classic (Dragon or Rainbow) with two signatures (Sunrise, Lobster Volcano, Spider, Caterpillar)</li>
                                        <li><strong>Pair with sake</strong> &mdash; junmai daiginjo with the lighter fish, junmai with the richer rolls. Or order the sake flight</li>
                                        <li><strong>End with dessert or a Japanese whiskey</strong> &mdash; mochi ice cream, green tea ice cream, or a neat pour</li>
                                    </ol>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Jinbeh Frisco vs. omakase counters in DFW</h2>
                                    <p className="text-charcoal/80 mb-4">DFW has dedicated omakase counters where the chef pre-selects a tasting menu. Jinbeh isn&apos;t an omakase restaurant &mdash; we&apos;re a full Japanese steakhouse with a premium sushi bar inside it. The trade-off:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Omakase counter:</strong> chef-driven tasting menu, fixed price, sushi-only, more formal</li>
                                        <li><strong>Jinbeh sushi bar:</strong> you order what you want, hibachi available at the same restaurant, more flexible, family-friendly</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">Both have their place. For a sushi purist evening with a chef tasting menu, an omakase counter. For a meal where you want premium sushi PLUS the option to add hibachi or bring family, Jinbeh.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Where Jinbeh Frisco is</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>Jinbeh Frisco:</strong> 2693 Preston Rd Suite 1040, Frisco, TX 75034. Near Stonebriar Centre, free parking, minutes from Legacy West and The Star. Reservations: (214) 619-1200 or through OpenTable.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Reserve the sushi bar at Jinbeh Frisco</h3>
                                        <p className="text-warm-ivory/80 mb-4">Request &ldquo;sushi bar&rdquo; in your reservation notes. Or call us to reserve a specific seat.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/frisco/sushi-rolls" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Sushi Menu</Link>
                                            <CallLink href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 619-1200</CallLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Signature rolls</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li>Sunrise Roll</li>
                                        <li>Lobster Volcano</li>
                                        <li>Spider Roll</li>
                                        <li>Caterpillar Roll</li>
                                        <li>Ahi Tower</li>
                                        <li>Dragon Roll</li>
                                        <li>Rainbow Roll</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related sushi guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/best-sushi-frisco" className="text-accent-red hover:underline">Best sushi in Frisco</Link></li>
                                        <li><Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">Types of sushi</Link></li>
                                        <li><Link href="/blog/sashimi-vs-sushi" className="text-accent-red hover:underline">Sashimi vs. sushi</Link></li>
                                        <li><Link href="/blog/best-salmon-sashimi" className="text-accent-red hover:underline">Best salmon sashimi</Link></li>
                                        <li><Link href="/frisco/sushi-rolls" className="text-accent-red hover:underline">Frisco sushi menu</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="premium-sushi-frisco" />
            <div className="h-12" />
        </main>
    );
}
