import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Sushi Takeout Frisco TX: Order from Jinbeh | Near Stonebriar",
    description: "Sushi takeout in Frisco, TX from Jinbeh — signature rolls, sashimi, and classic rolls packaged for pickup or delivery via Grubhub and Uber Eats. Near Stonebriar.",
    keywords: ["sushi takeout frisco","sushi takeout near me frisco","sushi to go frisco","sushi delivery frisco","sushi pickup frisco","japanese takeout frisco","sushi near me frisco","take out sushi near me","sushi to go menu frisco","grubhub sushi frisco","uber eats sushi frisco","sushi delivery near stonebriar"],
    openGraph: { title: "Sushi Takeout Frisco TX | Jinbeh", description: "Sushi takeout from Jinbeh Frisco — signature rolls, sashimi, classic rolls. Pickup or Grubhub/Uber Eats delivery.", url: "https://jinbeh.com/blog/sushi-takeout-frisco", images: [{ url: "https://jinbeh.com/images/frisco/JinbehFrisco_SushiBar.jpg", width: 1200, height: 630, alt: "Sushi takeout Frisco TX — Jinbeh signature rolls packaged for pickup or delivery" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Sushi Takeout Frisco TX | Jinbeh", description: "Sushi takeout from Jinbeh Frisco — pickup or Grubhub/Uber Eats delivery." },
    alternates: { canonical: "https://jinbeh.com/blog/sushi-takeout-frisco" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Sushi Takeout Frisco TX: Order from Jinbeh", description: "How to order sushi takeout in Frisco from Jinbeh — pickup, Grubhub, Uber Eats. What travels well and what to order.", image: "https://jinbeh.com/images/frisco/JinbehFrisco_SushiBar.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/sushi-takeout-frisco" } };

const faqs = [
    { question: "How do I order sushi takeout from Jinbeh Frisco?", answer: "Three options. Call (214) 619-1200 to order for pickup at our 2693 Preston Rd location. Order through Grubhub by searching 'Jinbeh' in the app. Order through Uber Eats the same way. Pickup is usually faster and lower-cost than delivery." },
    { question: "What sushi travels best from Jinbeh Frisco?", answer: "Classic rolls (California Roll, Spicy Tuna Roll, Shrimp Tempura Roll, Rainbow Roll) travel well — the structure holds up in the box. Signature rolls (Sunrise Roll, Lobster Volcano, Spider Roll, Caterpillar Roll) also travel fine for short distances under 20 minutes. For longer drives, avoid rolls with crispy tempura elements (Spider, Shrimp Tempura) since the tempura softens in the container." },
    { question: "Does sashimi take out well from Jinbeh?", answer: "Yes. Sashimi (salmon, tuna, yellowtail) packs cleanly and stays fresh for 30-60 minutes if kept cool. Pickup sashimi from our Frisco kitchen and head home — it's at its best within an hour of being plated. For delivery via Grubhub or Uber Eats, sashimi works but eat it as soon as it arrives." },
    { question: "Can I get a sushi platter for takeout in Frisco?", answer: "Yes. Jinbeh Frisco caters sushi platters for pickup and drop-off delivery. For small platters (1-2 people), order through Grubhub or Uber Eats. For party-sized platters (10+ people), call us directly at (214) 619-1200 at least one week ahead so we cut the rolls fresh the day of pickup. See our /blog/sushi-platter-for-party guide for ordering tips." },
    { question: "Does Jinbeh do gluten-free sushi takeout?", answer: "Yes. Gluten-free options include sashimi (no rolls), nigiri without eel sauce, classic rolls without imitation crab or eel sauce. We include tamari (gluten-free soy sauce) on request — no booking fee. Flag gluten-free when you order so the kitchen plates the right items." },
    { question: "How long does sushi stay fresh after pickup?", answer: "Sushi quality drops after about 2 hours at room temperature. Eat takeout sushi within 1-2 hours of pickup for the best experience. If you need to delay, refrigerate the container and pull it out 15 minutes before serving so the rice softens slightly. Don't refrigerate sushi overnight — the rice goes hard and the texture suffers." },
    { question: "What's the difference between Jinbeh sushi takeout and sushi catering?", answer: "Takeout is small-portion individual orders for 1-4 people, available through Grubhub, Uber Eats, or pickup, same-day. Sushi catering is larger party platters for 10+ people, requires at least one week of lead time, and is drop-off delivered or picked up. See /blog/sushi-catering-frisco for catering specifics." },
    { question: "Where do I pickup Jinbeh Frisco sushi takeout?", answer: "Pickup at 2693 Preston Rd Suite 1040, Frisco, TX 75034 — near Stonebriar Centre. Free parking directly outside. Tell the host you're picking up a takeout order when you arrive." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Sushi Takeout Frisco" },
]};

export default function SushiTakeoutFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sushi Takeout Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/frisco/JinbehFrisco_SushiBar.jpg" alt="Sushi Takeout Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/takeout" className="hover:text-white">Takeout</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🥡 Frisco Sushi Takeout</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Sushi Takeout Frisco TX: Order from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Sushi takeout is a different game than dining in.</strong> The rolls go in a container, the temperature changes, the texture shifts on the drive home. Some rolls travel beautifully. Others arrive worse than they left.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh Frisco at 2693 Preston Rd has been doing sushi takeout near Stonebriar for years. Here&apos;s the practical guide &mdash; how to order, what travels well, and what to skip.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Three ways to order Jinbeh Frisco sushi takeout</h2>
                                    <ol className="list-decimal pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Call (214) 619-1200</strong> and order for pickup. Fastest option, lowest cost, ready in 20-30 minutes typically</li>
                                        <li><strong>Grubhub</strong> &mdash; search &ldquo;Jinbeh&rdquo; in the app, order from the takeout menu, delivery to your address</li>
                                        <li><strong>Uber Eats</strong> &mdash; same as Grubhub, different app. Some addresses have better pricing on one vs. the other</li>
                                    </ol>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What travels well</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>California Roll</strong> &mdash; the takeout champion. Structure holds up perfectly</li>
                                        <li><strong>Spicy Tuna Roll</strong> &mdash; travels well, holds flavor</li>
                                        <li><strong>Sunrise Roll</strong> &mdash; our signature, packed clean</li>
                                        <li><strong>Lobster Volcano Roll</strong> &mdash; travels well within 20 minutes</li>
                                        <li><strong>Rainbow Roll</strong> &mdash; the sashimi-wrapped colors hold up</li>
                                        <li><strong>Sashimi (salmon, tuna, yellowtail)</strong> &mdash; packs cleanly, eat within an hour</li>
                                        <li><strong>Nigiri</strong> &mdash; basic format, transports fine</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What loses quality in transit</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Spider Roll</strong> &mdash; soft-shell crab tempura softens in the box. Best eaten on-site</li>
                                        <li><strong>Shrimp Tempura Roll</strong> &mdash; same problem; tempura goes soft</li>
                                        <li><strong>Anything with eel sauce drizzle</strong> &mdash; gets soggy after 30+ minutes</li>
                                        <li><strong>Ahi Tower</strong> &mdash; the stacked presentation collapses; for tower-format, dine in</li>
                                        <li><strong>Hot tempura appetizers</strong> &mdash; soggy by the time they arrive</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">First-time takeout order</h2>
                                    <p className="text-charcoal/80 mb-4">For a first sushi takeout from Jinbeh Frisco, a good starter order:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>One signature roll (Sunrise Roll or Lobster Volcano)</li>
                                        <li>One classic roll (California, Spicy Tuna, or Rainbow)</li>
                                        <li>A sashimi sampler (6-8 pieces salmon and tuna)</li>
                                        <li>Edamame on the side</li>
                                        <li>Tamari packets if you&apos;re gluten-free (ask)</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">Total ~$50 for two people. Eat within an hour of pickup for the best experience.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pickup at Jinbeh Frisco</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>2693 Preston Rd Suite 1040, Frisco, TX 75034.</strong> Near Stonebriar Centre. Free parking directly outside. Tell the host you&apos;re picking up a takeout order. Most orders are ready within 20-30 minutes of phoning in.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Need a bigger order for a party?</h2>
                                    <p className="text-charcoal/80 mb-4">For sushi platters serving 10+ people, see our <Link href="/blog/sushi-catering-frisco" className="text-accent-red hover:underline">sushi catering Frisco</Link> guide. Catering orders need at least one week of lead time so we cut fresh the day of pickup or delivery. Small daily takeout orders (1-4 people) go through Grubhub, Uber Eats, or pickup with same-day turnaround.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Order Jinbeh Frisco sushi takeout</h3>
                                        <p className="text-warm-ivory/80 mb-4">Call to order pickup, or use Grubhub or Uber Eats for delivery.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <a href="tel:2146191200" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Call (214) 619-1200</a>
                                            <Link href="/order-online" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Order Online</Link>
                                            <Link href="/frisco" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Jinbeh Frisco</Link>
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
                                        <li><Link href="/blog/sushi-takeout-lewisville" className="text-accent-red hover:underline">Sushi takeout Lewisville</Link></li>
                                        <li><Link href="/blog/japanese-takeout-near-me" className="text-accent-red hover:underline">Japanese takeout near me</Link></li>
                                        <li><Link href="/blog/sushi-platter-for-party" className="text-accent-red hover:underline">Sushi platter for a party</Link></li>
                                        <li><Link href="/blog/sushi-catering-frisco" className="text-accent-red hover:underline">Sushi catering Frisco</Link></li>
                                        <li><Link href="/takeout" className="text-accent-red hover:underline">Jinbeh takeout page</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="sushi-takeout-frisco" />
            <div className="h-12" />
        </main>
    );
}
