import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Japanese Food Delivery Frisco & Lewisville | Jinbeh",
    description: "Japanese food delivery from Jinbeh — Frisco and Lewisville locations on Grubhub and Uber Eats. Sushi, hibachi takeout, sashimi, bento delivered.",
    keywords: ["japanese delivery frisco","japanese delivery lewisville","japanese food delivery dfw","sushi delivery near me","hibachi delivery near me","grubhub japanese frisco","uber eats japanese lewisville","japanese restaurant delivery","jinbeh delivery","sushi delivery flower mound","japanese food near me delivery"],
    openGraph: { title: "Japanese Food Delivery Frisco & Lewisville | Jinbeh", description: "Japanese delivery from Jinbeh — Frisco and Lewisville on Grubhub and Uber Eats. Sushi, hibachi takeout, bento.", url: "https://jinbeh.com/blog/japanese-delivery-frisco-lewisville", images: [{ url: "https://jinbeh.com/images/hq/sushi-rolls-2026.jpg", width: 1200, height: 630, alt: "Japanese food delivery Frisco and Lewisville — Jinbeh on Grubhub and Uber Eats" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Japanese Food Delivery Frisco & Lewisville | Jinbeh", description: "Japanese delivery from Jinbeh — Grubhub and Uber Eats from both locations." },
    alternates: { canonical: "https://jinbeh.com/blog/japanese-delivery-frisco-lewisville" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Food Delivery Frisco & Lewisville: Order from Jinbeh", description: "How to order Japanese delivery in Frisco and Lewisville from Jinbeh — Grubhub, Uber Eats, what travels well, delivery zones.", image: "https://jinbeh.com/images/hq/sushi-rolls-2026.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/japanese-delivery-frisco-lewisville" } };

const faqs = [
    { question: "Does Jinbeh deliver Japanese food in Frisco and Lewisville?", answer: "Yes — through Grubhub and Uber Eats from both locations. Jinbeh Frisco at 2693 Preston Rd delivers to Frisco, Plano, The Colony, Little Elm, and parts of McKinney. Jinbeh Lewisville at 2440 S Stemmons Fwy delivers to Lewisville, Flower Mound, Highland Village, Castle Hills, and parts of Coppell and Carrollton." },
    { question: "How do I order Jinbeh delivery?", answer: "Open Grubhub or Uber Eats, search 'Jinbeh,' and pick the location closer to your address. Same menu shows up on both apps. Pricing and delivery fees vary by distance and time of day, so it's worth checking both before placing an order." },
    { question: "What Japanese food travels best for delivery?", answer: "Sashimi, classic rolls (California, Spicy Tuna, Rainbow), nigiri, signature rolls without tempura (Sunrise, Caterpillar), bento boxes with rice and protein, miso soup in a sealed cup. These hold quality through a 15-30 minute delivery window." },
    { question: "What Japanese food does NOT travel well?", answer: "Anything with crispy tempura inside (Spider Roll, Shrimp Tempura Roll) — the coating softens. Hot tempura appetizers arrive soggy. Hibachi proteins are best eaten fresh off the grill — takeout hibachi works but loses the textural contrast of the show. Ahi Tower collapses in transit." },
    { question: "Does Jinbeh have their own delivery drivers?", answer: "No — Jinbeh uses third-party platforms (Grubhub, Uber Eats) for delivery. This keeps the kitchen focused on food and lets professional driver networks handle logistics. Drivers wear their own colors, not Jinbeh's." },
    { question: "Is pickup faster than delivery?", answer: "Yes. Pickup is typically 20-30 minutes from when you phone in. Delivery adds time for the driver to be assigned, pick up the order, and drive to you — usually 40-60 minutes total. Pickup is also cheaper since you skip the platform service fees and driver tip." },
    { question: "What's the delivery zone from each Jinbeh location?", answer: "Jinbeh Frisco (2693 Preston Rd): covers most of Frisco, west Plano, The Colony, Little Elm, and edges of McKinney. Jinbeh Lewisville (2440 S Stemmons Fwy): covers Lewisville, Flower Mound, Highland Village, Castle Hills, parts of Coppell, Carrollton, and The Colony. If you're at the edge of a zone, try both apps — coverage radius differs slightly between Grubhub and Uber Eats." },
    { question: "Can I order hibachi for delivery from Jinbeh?", answer: "Yes. Hibachi proteins (steak, chicken, shrimp, salmon, vegetables) can be ordered for delivery through Grubhub or Uber Eats. The food arrives in catering trays or to-go containers. You won't get the tableside show — that only happens dine-in — but the food itself is the same kitchen team and the same quality." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Japanese Delivery Frisco & Lewisville" },
]};

export default function JapaneseDeliveryPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Japanese Delivery Frisco & Lewisville" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/hq/sushi-rolls-2026.jpg" alt="Japanese food delivery Frisco and Lewisville — Jinbeh on Grubhub and Uber Eats" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/takeout" className="hover:text-white">Takeout</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🚗 Japanese Delivery DFW</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Japanese Food Delivery Frisco &amp; Lewisville: Order from Jinbeh</h1>
                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span><span>·</span><span>May 2026</span><span>·</span><span>5 min read</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Japanese food delivery is part driver, part packaging, part picking the right items.</strong> Some dishes survive a 20-minute drive in great shape. Others suffer in transit no matter how skilled the kitchen or how careful the driver. The trick is knowing which is which.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh runs delivery out of two DFW locations &mdash; Frisco (near Stonebriar) and Lewisville (Vista Ridge). Both go through Grubhub and Uber Eats. Here&apos;s how to order well from either.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How to order Jinbeh delivery</h2>
                                    <ol className="list-decimal pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li>Open Grubhub or Uber Eats</li>
                                        <li>Search &ldquo;Jinbeh&rdquo;</li>
                                        <li>Pick the location closer to your address &mdash; Frisco or Lewisville</li>
                                        <li>Add items, place the order</li>
                                        <li>Track the driver in the app once the order is picked up</li>
                                    </ol>
                                    <p className="text-charcoal/80 mb-4">Pricing and fees vary between the two apps. If you order often, it&apos;s worth checking both before placing the order &mdash; sometimes the same items run $3-5 cheaper on one platform.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Delivery zones</h2>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-6 mb-3">From Jinbeh Frisco (2693 Preston Rd)</h3>
                                    <p className="text-charcoal/80 mb-3">Frisco, west Plano, The Colony, Little Elm, and the edges of McKinney get the fastest delivery. Stonebriar Centre is right next door, so the immediate area is well-covered.</p>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-6 mb-3">From Jinbeh Lewisville (2440 S Stemmons Fwy)</h3>
                                    <p className="text-charcoal/80 mb-4">Lewisville, Flower Mound, Highland Village, Castle Hills, and parts of Coppell and Carrollton. The Vista Ridge location is right off I-35E so freeway-adjacent addresses get sushi faster than back-road ones.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What travels well for delivery</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Sashimi</strong> &mdash; packs cleanly, stays cool 30-60 minutes</li>
                                        <li><strong>Classic rolls</strong> &mdash; California, Spicy Tuna, Rainbow hold structure</li>
                                        <li><strong>Sunrise Roll</strong> &mdash; our signature, travels well</li>
                                        <li><strong>Nigiri</strong> &mdash; basic, transports fine</li>
                                        <li><strong>Bento boxes</strong> &mdash; rice and protein keep heat better than tempura</li>
                                        <li><strong>Miso soup</strong> &mdash; sealed cup, no spill</li>
                                        <li><strong>Edamame</strong> &mdash; perfect travel snack</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What loses quality in transit</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Spider Roll</strong> &mdash; soft-shell crab tempura softens</li>
                                        <li><strong>Shrimp Tempura Roll</strong> &mdash; same issue</li>
                                        <li><strong>Eel sauce drizzle</strong> &mdash; gets soggy past 30 minutes</li>
                                        <li><strong>Hot tempura appetizers</strong> &mdash; soggy on arrival</li>
                                        <li><strong>Ahi Tower</strong> &mdash; stacked presentation collapses</li>
                                        <li><strong>Hibachi (depends)</strong> &mdash; the food is the same, but you skip the show</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pickup vs. delivery</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>Pickup:</strong> 20-30 minutes from phoning in. Cheaper (no service fees, no tip). Better food quality since you skip transit time. Best if you&apos;re within 10 minutes of the restaurant.</p>
                                    <p className="text-charcoal/80 mb-4"><strong>Delivery:</strong> 40-60 minutes typically. Convenient. Pay platform fees and driver tip. Choose this when you don&apos;t want to leave the house or office.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Order Jinbeh delivery</h3>
                                        <p className="text-warm-ivory/80 mb-4">Both locations live on Grubhub and Uber Eats.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <a href="tel:2146191200" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Frisco: (214) 619-1200</a>
                                            <a href="tel:2144882224" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Lewisville: (214) 488-2224</a>
                                            <Link href="/order-online" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Order Online</Link>
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
                                        <li>Apps: Grubhub, Uber Eats</li>
                                        <li>Delivery: 40-60 min typical</li>
                                        <li>Pickup: 20-30 min typical</li>
                                        <li>Two DFW locations</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">More takeout guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/sushi-takeout-frisco" className="text-accent-red hover:underline">Sushi takeout Frisco</Link></li>
                                        <li><Link href="/blog/sushi-takeout-lewisville" className="text-accent-red hover:underline">Sushi takeout Lewisville</Link></li>
                                        <li><Link href="/blog/hibachi-to-go-dfw" className="text-accent-red hover:underline">Hibachi to go DFW</Link></li>
                                        <li><Link href="/blog/sushi-platter-near-me" className="text-accent-red hover:underline">Sushi platter near me</Link></li>
                                        <li><Link href="/takeout" className="text-accent-red hover:underline">Jinbeh takeout page</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="japanese-delivery-frisco-lewisville" />
            <div className="h-12" />
        </main>
    );
}
