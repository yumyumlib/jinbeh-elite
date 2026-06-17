import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Hibachi To Go DFW: Takeout from Jinbeh | Frisco & Lewisville",
    description: "Hibachi to go from Jinbeh — Frisco and Lewisville. Steak, chicken, shrimp, salmon, and vegetables packaged for takeout or delivery via Grubhub and Uber Eats.",
    keywords: ["hibachi to go","hibachi takeout dfw","hibachi to go near me","hibachi takeout frisco","hibachi takeout lewisville","hibachi delivery dfw","steak hibachi to go","chicken hibachi to go","shrimp hibachi to go","japanese steakhouse to go","jinbeh hibachi takeout"],
    openGraph: { title: "Hibachi To Go DFW: Takeout from Jinbeh | Frisco & Lewisville", description: "Hibachi to go from Jinbeh — steak, chicken, shrimp, salmon takeout from Frisco and Lewisville. Pickup or Grubhub/Uber Eats delivery.", url: "https://jinbeh.com/blog/hibachi-to-go-dfw", images: [{ url: "https://jinbeh.com/images/hq/cooking-on-grill.jpg", width: 1200, height: 630, alt: "Hibachi to go DFW — Jinbeh hibachi proteins packaged for takeout" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Hibachi To Go DFW | Jinbeh", description: "Hibachi takeout from Jinbeh Frisco and Lewisville. Pickup or delivery." },
    alternates: { canonical: "https://jinbeh.com/blog/hibachi-to-go-dfw" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Hibachi To Go DFW: Takeout from Jinbeh", description: "How to order hibachi to go in DFW from Jinbeh — pickup, Grubhub, Uber Eats. What's included, what travels well.", image: "https://jinbeh.com/images/hq/cooking-on-grill.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/hibachi-to-go-dfw" } };

const faqs = [
    { question: "Does Jinbeh do hibachi to go?", answer: "Yes. Jinbeh hibachi is cooked on the grill in our kitchen, packaged in to-go containers, and ready for pickup at our Frisco or Lewisville location. Order by phone for pickup, or through Grubhub or Uber Eats for delivery. Note: 'hibachi to go' means takeout of the food — Jinbeh does not send a hibachi chef to your home." },
    { question: "Can a hibachi chef come to my house?", answer: "Not currently. Jinbeh's hibachi grills are in-restaurant only. Hibachi to go means we cook the hibachi food in our kitchen and package it for takeout or delivery. If you want the tableside show, please dine in — that's where the chef performance happens." },
    { question: "What hibachi proteins are available for takeout?", answer: "All the standard Jinbeh hibachi proteins are available to-go: chicken, sirloin steak, filet mignon, shrimp, salmon, scallops, lobster tail, and the vegetable plate. Combinations like steak + shrimp or chicken + scallop are popular. Each order comes with fried rice or steamed rice, hibachi vegetables, salad with ginger dressing, and clear soup." },
    { question: "Does hibachi to go include the same sides as dine-in?", answer: "Yes — fried rice (or steamed rice), hibachi vegetables (zucchini, onion, mushroom), salad with ginger dressing, and clear soup are all included in the hibachi dinner takeout package. Yum yum sauce and ginger sauce come in cups on the side." },
    { question: "How does hibachi food hold up in to-go containers?", answer: "Well, mostly. Proteins (steak, chicken, shrimp, salmon) hold heat and texture for 20-30 minutes in our insulated containers. Rice and vegetables travel beautifully. The one thing that doesn't translate: you skip the tableside performance — the flames, the onion volcano, the chef tossing food. That's the trade-off for not having to leave home." },
    { question: "Hibachi to go Frisco — where do I pickup?", answer: "Jinbeh Frisco at 2693 Preston Rd Suite 1040, near Stonebriar Centre. Free parking outside. Call (214) 619-1200 to order; tell the host you're picking up hibachi takeout when you arrive. Most orders are ready 20-30 minutes after phoning in." },
    { question: "Hibachi to go Lewisville — where do I pickup?", answer: "Jinbeh Lewisville at 2440 S Stemmons Fwy, Vista Ridge area off I-35E. Free parking. Call (214) 488-2224 to order. Same 20-30 minute turnaround on most orders." },
    { question: "Can I order hibachi takeout for a small group?", answer: "Yes. For groups of 4-8, call ahead so the kitchen can stage the order properly — multiple proteins cooking in parallel takes a bit more time than a single dinner. Give 30-45 minutes for a 4-6 person hibachi takeout order. For larger groups (10+), see our catering pages — we drop off party-size hibachi trays for events." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Hibachi To Go DFW" },
]};

export default function HibachiToGoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Hibachi To Go DFW" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/hq/cooking-on-grill.jpg" alt="Hibachi to go DFW — Jinbeh hibachi steak and shrimp packaged for takeout" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/takeout" className="hover:text-white">Takeout</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🥡 DFW Hibachi Takeout</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Hibachi To Go DFW: Takeout from Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>First, the important clarification.</strong> Jinbeh hibachi to go means the hibachi food is cooked on our restaurant grill, packaged, and ready for pickup or delivery. It does <em>not</em> mean a chef rolls a grill up to your driveway. That&apos;s a different format some companies offer; Jinbeh does in-restaurant hibachi only.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">With that out of the way: takeout hibachi from Jinbeh is solid. The proteins hold heat, the rice and vegetables travel cleanly, and most of what makes Jinbeh hibachi special &mdash; the flavor, the fresh garlic, the technique &mdash; survives the trip home. Here&apos;s how to order it from either of our DFW locations.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What&apos;s in a Jinbeh hibachi takeout dinner</h2>
                                    <p className="text-charcoal/80 mb-3">Every hibachi dinner takeout order includes:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Your choice of protein (or combo)</li>
                                        <li>Fried rice or steamed rice</li>
                                        <li>Hibachi vegetables (zucchini, onion, mushroom)</li>
                                        <li>Salad with ginger dressing</li>
                                        <li>Clear soup</li>
                                        <li>Yum yum sauce and ginger sauce on the side</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">Same components as dine-in. Just in to-go containers instead of on a plate at the grill.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Hibachi protein options</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Chicken</strong> &mdash; the most-ordered protein. Reliable, holds well</li>
                                        <li><strong>Sirloin Steak</strong> &mdash; ask for it cooked one notch under your preference; it keeps cooking in the container on the drive home</li>
                                        <li><strong>Filet Mignon</strong> &mdash; the premium cut; same advice on doneness</li>
                                        <li><strong>Shrimp</strong> &mdash; cooks fast, holds well</li>
                                        <li><strong>Salmon</strong> &mdash; flavorful, travels fine</li>
                                        <li><strong>Scallops</strong> &mdash; delicate; best eaten within 20 minutes of pickup</li>
                                        <li><strong>Lobster tail</strong> &mdash; special occasion option</li>
                                        <li><strong>Vegetable plate</strong> &mdash; for vegetarians; the rice + vegetables are filling on their own</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">Combination dinners (steak + shrimp, chicken + scallop, etc.) are popular and a good way to taste two proteins in one order.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Three ways to order Jinbeh hibachi to go</h2>
                                    <ol className="list-decimal pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Call your nearest Jinbeh</strong> &mdash; Frisco (214) 619-1200 or Lewisville (214) 488-2224. Fastest, cheapest, ready in 20-30 minutes</li>
                                        <li><strong>Grubhub</strong> &mdash; search &ldquo;Jinbeh&rdquo; in the app</li>
                                        <li><strong>Uber Eats</strong> &mdash; same setup, different platform. Pricing varies; sometimes one app is a few dollars cheaper</li>
                                    </ol>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pickup locations</h2>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-6 mb-3">Jinbeh Frisco</h3>
                                    <p className="text-charcoal/80 mb-4">2693 Preston Rd Suite 1040, Frisco, TX 75034. Near Stonebriar Centre. Gas hibachi grills. Free parking. (214) 619-1200.</p>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-6 mb-3">Jinbeh Lewisville</h3>
                                    <p className="text-charcoal/80 mb-4">2440 S Stemmons Fwy, Lewisville, TX 75067. Vista Ridge area, off I-35E. Electric hibachi grills. Free parking. (214) 488-2224.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Tips for the best takeout hibachi experience</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Order steak <strong>one notch under</strong> your preferred doneness. The heat in the container keeps cooking it</li>
                                        <li>Pick up at the time the host quotes &mdash; sitting on the warming shelf for 15 extra minutes affects texture</li>
                                        <li>Drive straight home. Hibachi is at its best within 20-30 minutes of leaving the grill</li>
                                        <li>If you stop somewhere, the to-go container will hold heat for about 30 minutes; beyond that the food starts to overcook in its own steam</li>
                                        <li>Order extra yum yum sauce &mdash; people always want more than the standard portion</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">For a group or party</h2>
                                    <p className="text-charcoal/80 mb-4">For 10+ people, see our hibachi catering guides for <Link href="/blog/hibachi-catering-frisco" className="text-accent-red hover:underline">Frisco</Link> and <Link href="/blog/hibachi-catering-lewisville" className="text-accent-red hover:underline">Lewisville</Link>. Catering is drop-off (we&apos;re not yet bringing the live show off-premises). It&apos;s the same hibachi food, plated in catering trays, ready for buffet service at your office, home, or event venue.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Order Jinbeh hibachi to go</h3>
                                        <p className="text-warm-ivory/80 mb-4">Pickup from Frisco or Lewisville, or delivery via Grubhub / Uber Eats.</p>
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
                                        <li>Cooked on-grill in restaurant</li>
                                        <li>Pickup or Grubhub/Uber Eats</li>
                                        <li>20-30 min ready time</li>
                                        <li>Steak: order one notch under</li>
                                        <li>Eat within 30 min of pickup</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">More takeout guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/japanese-delivery-frisco-lewisville" className="text-accent-red hover:underline">Japanese delivery</Link></li>
                                        <li><Link href="/blog/sushi-takeout-frisco" className="text-accent-red hover:underline">Sushi takeout Frisco</Link></li>
                                        <li><Link href="/blog/sushi-takeout-lewisville" className="text-accent-red hover:underline">Sushi takeout Lewisville</Link></li>
                                        <li><Link href="/blog/hibachi-catering-frisco" className="text-accent-red hover:underline">Hibachi catering Frisco</Link></li>
                                        <li><Link href="/blog/hibachi-catering-lewisville" className="text-accent-red hover:underline">Hibachi catering Lewisville</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="hibachi-to-go-dfw" />
            <div className="h-12" />
        </main>
    );
}
