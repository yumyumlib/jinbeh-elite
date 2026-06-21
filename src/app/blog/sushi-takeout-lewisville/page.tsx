import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Sushi Takeout Lewisville TX: Order from Jinbeh",
    description: "Sushi takeout in Lewisville, TX from Jinbeh — signature rolls, sashimi, classic rolls packaged for pickup or delivery via Grubhub and Uber Eats.",
    keywords: ["sushi takeout lewisville","sushi takeout near me lewisville","sushi to go lewisville","sushi delivery lewisville","sushi pickup lewisville","japanese takeout lewisville","sushi near me lewisville","grubhub sushi lewisville","uber eats sushi lewisville","sushi delivery flower mound","sushi takeout vista ridge"],
    openGraph: { title: "Sushi Takeout Lewisville TX | Jinbeh", description: "Sushi takeout from Jinbeh Lewisville — signature rolls, sashimi, classic rolls. Pickup or Grubhub/Uber Eats delivery.", url: "https://jinbeh.com/blog/sushi-takeout-lewisville", images: [{ url: "https://jinbeh.com/images/food/RoyalFlameRoll.jpg", width: 1200, height: 630, alt: "Sushi takeout Lewisville TX — Jinbeh signature rolls packaged for pickup or delivery" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Sushi Takeout Lewisville TX | Jinbeh", description: "Sushi takeout from Jinbeh Lewisville — pickup or Grubhub/Uber Eats delivery." },
    alternates: { canonical: "https://jinbeh.com/blog/sushi-takeout-lewisville" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Sushi Takeout Lewisville TX: Order from Jinbeh", description: "How to order sushi takeout in Lewisville from Jinbeh — pickup, Grubhub, Uber Eats. What travels well and what to order.", image: "https://jinbeh.com/images/food/RoyalFlameRoll.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/sushi-takeout-lewisville" } };

const faqs = [
    { question: "How do I order sushi takeout from Jinbeh Lewisville?", answer: "Three options. Call (214) 488-2224 for pickup at 2440 S Stemmons Fwy. Order through Grubhub by searching 'Jinbeh' in the app. Order through Uber Eats the same way. Pickup is faster and lower-cost than delivery." },
    { question: "What sushi travels best from Jinbeh Lewisville?", answer: "Classic rolls (California Roll, Spicy Tuna Roll, Rainbow Roll, Shrimp Tempura Roll) travel well — the structure holds in the box. Signature rolls (Sunrise Roll, Lobster Volcano, Spider Roll, Caterpillar Roll) travel fine for short drives under 20 minutes. For longer drives, skip rolls with crispy tempura inside since the tempura softens during transit." },
    { question: "Does Jinbeh Lewisville deliver to Flower Mound and Highland Village?", answer: "Yes — through Grubhub and Uber Eats. Delivery zones include Lewisville, Flower Mound, Highland Village, Castle Hills, The Colony, and parts of Coppell and Carrollton. Delivery fees and times depend on distance. Pickup at the restaurant is always cheaper and faster." },
    { question: "Does sashimi take out well from Jinbeh Lewisville?", answer: "Yes. Sashimi (salmon, tuna, yellowtail) packs cleanly and stays fresh for 30-60 minutes if kept cool. Pickup sashimi from our Vista Ridge location and head home — it's at its best within an hour of being plated. For Grubhub or Uber Eats, sashimi travels fine but eat immediately on arrival." },
    { question: "Can I get a sushi platter for takeout in Lewisville?", answer: "Yes. Jinbeh Lewisville does sushi platters for pickup and drop-off delivery. For small platters (1-2 people), order through Grubhub or Uber Eats. For party-sized platters (10+ people), call (214) 488-2224 at least one week ahead so the kitchen cuts the rolls fresh the day of pickup. See /blog/sushi-catering-lewisville for catering details." },
    { question: "Does Jinbeh do gluten-free sushi takeout?", answer: "Yes. Gluten-free options include sashimi (no rolls), nigiri without eel sauce, and classic rolls made without imitation crab or eel sauce. Tamari (gluten-free soy sauce) is available on request — no booking fee. Mention gluten-free when ordering so the kitchen plates the right items." },
    { question: "How long does sushi stay fresh after pickup?", answer: "Sushi quality drops after about 2 hours at room temperature. Eat takeout sushi within 1-2 hours of pickup for the best experience. If you need to delay, refrigerate the container and pull it out 15 minutes before serving so the rice softens slightly. Don't refrigerate sushi overnight — the rice hardens and the texture suffers." },
    { question: "Where do I pickup Jinbeh Lewisville sushi takeout?", answer: "Pickup at 2440 S Stemmons Fwy, Lewisville, TX 75067 — Vista Ridge area, off I-35E. Easy parking. Tell the host you're picking up a takeout order when you arrive. Most orders are ready 20-30 minutes after phoning in." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Sushi Takeout Lewisville" },
]};

export default function SushiTakeoutLewisvillePost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sushi Takeout Lewisville" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/food/RoyalFlameRoll.jpg" alt="Sushi Takeout Lewisville at Jinbeh Lewisville Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/takeout" className="hover:text-white">Takeout</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🥡 Lewisville Sushi Takeout</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Sushi Takeout Lewisville TX: Order from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Sushi takeout is a different experience than dining in.</strong> The rolls move into a container, the temperature shifts, the texture changes on the drive home. Some rolls travel beautifully. Others arrive worse than they left the kitchen.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh Lewisville at 2440 S Stemmons Fwy has been doing sushi takeout for the Vista Ridge, Flower Mound, and Highland Village area for years. Here&apos;s the practical guide &mdash; how to order, what travels well, and what to skip.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Three ways to order Jinbeh Lewisville sushi takeout</h2>
                                    <ol className="list-decimal pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Call (214) 488-2224</strong> and order for pickup. Fastest, lowest-cost, ready in 20-30 minutes typically</li>
                                        <li><strong>Grubhub</strong> &mdash; search &ldquo;Jinbeh&rdquo; in the app, order from the takeout menu, delivery to your address</li>
                                        <li><strong>Uber Eats</strong> &mdash; same setup as Grubhub. Pricing varies by address; sometimes one is cheaper than the other</li>
                                    </ol>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What travels well</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>California Roll</strong> &mdash; the takeout standby. Structure holds up</li>
                                        <li><strong>Spicy Tuna Roll</strong> &mdash; travels and holds flavor</li>
                                        <li><strong>Sunrise Roll</strong> &mdash; our signature, packs clean</li>
                                        <li><strong>Lobster Volcano Roll</strong> &mdash; travels well within 20 minutes</li>
                                        <li><strong>Rainbow Roll</strong> &mdash; the sashimi colors hold up</li>
                                        <li><strong>Sashimi (salmon, tuna, yellowtail)</strong> &mdash; packs cleanly, eat within an hour</li>
                                        <li><strong>Nigiri</strong> &mdash; basic format, transports fine</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What loses quality in transit</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Spider Roll</strong> &mdash; soft-shell crab tempura softens in the box. Best eaten on-site</li>
                                        <li><strong>Shrimp Tempura Roll</strong> &mdash; same problem; tempura softens</li>
                                        <li><strong>Anything with eel sauce drizzle</strong> &mdash; gets soggy after 30+ minutes</li>
                                        <li><strong>Ahi Tower</strong> &mdash; the stacked presentation collapses; dine in for the tower</li>
                                        <li><strong>Hot tempura appetizers</strong> &mdash; soggy by arrival</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Lewisville-area delivery</h2>
                                    <p className="text-charcoal/80 mb-4">Jinbeh Lewisville sits at the south end of Vista Ridge near I-35E, which makes for fast delivery into Flower Mound, Highland Village, Castle Hills, and The Colony. Coppell and Carrollton get reached too, with slightly longer arrival times. The closer you are, the better the rolls hold up &mdash; sushi is a 20-minute food at its best.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">First-time takeout order</h2>
                                    <p className="text-charcoal/80 mb-4">For a first sushi takeout from Jinbeh Lewisville, a starter order:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>One signature roll (Sunrise Roll or Lobster Volcano)</li>
                                        <li>One classic roll (California, Spicy Tuna, or Rainbow)</li>
                                        <li>A sashimi sampler (6-8 pieces salmon and tuna)</li>
                                        <li>Edamame on the side</li>
                                        <li>Tamari packets if gluten-free (ask)</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">Total ~$50 for two people. Eat within an hour of pickup for the best experience.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pickup at Jinbeh Lewisville</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>2440 S Stemmons Fwy, Lewisville, TX 75067.</strong> Vista Ridge area, just off I-35E. Easy parking. Tell the host you&apos;re picking up a takeout order when you arrive. Most orders are ready within 20-30 minutes of phoning in.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Need a bigger order for a party?</h2>
                                    <p className="text-charcoal/80 mb-4">For sushi platters serving 10+ people, see our <Link href="/blog/sushi-catering-lewisville" className="text-accent-red hover:underline">sushi catering Lewisville</Link> guide. Catering orders need at least one week of lead time so the kitchen cuts fresh the day of pickup or delivery. Small daily takeout orders (1-4 people) go through Grubhub, Uber Eats, or pickup with same-day turnaround.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Order Jinbeh Lewisville sushi takeout</h3>
                                        <p className="text-warm-ivory/80 mb-4">Call to order pickup, or use Grubhub or Uber Eats for delivery.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <a href="tel:2144882224" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Call (214) 488-2224</a>
                                            <Link href="/order-online" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Order Online</Link>
                                            <Link href="/lewisville" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Jinbeh Lewisville</Link>
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
                                        <li>Pickup: 20-30 min ready time</li>
                                        <li>Delivery: Grubhub or Uber Eats</li>
                                        <li>Eat within 1-2 hours of pickup</li>
                                        <li>Avoid tempura rolls for travel</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">More takeout guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/sushi-takeout-frisco" className="text-accent-red hover:underline">Sushi takeout Frisco</Link></li>
                                        <li><Link href="/blog/japanese-delivery-frisco-lewisville" className="text-accent-red hover:underline">Japanese delivery Frisco &amp; Lewisville</Link></li>
                                        <li><Link href="/blog/sushi-platter-for-party" className="text-accent-red hover:underline">Sushi platter for a party</Link></li>
                                        <li><Link href="/blog/sushi-catering-lewisville" className="text-accent-red hover:underline">Sushi catering Lewisville</Link></li>
                                        <li><Link href="/takeout" className="text-accent-red hover:underline">Jinbeh takeout page</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="sushi-takeout-lewisville" />
            <div className="h-12" />
        </main>
    );
}
