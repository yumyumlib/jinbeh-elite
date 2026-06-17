import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Japanese Food Near Me in Frisco TX: Where to Eat | Jinbeh",
    description: "Looking for Japanese food near you in Frisco TX? Jinbeh at 2693 Preston Rd near Stonebriar serves hibachi, sushi, and a full bar since 1988.",
    keywords: ["japanese food near me frisco","japanese food frisco","japanese food near me","japanese restaurants near me frisco","japanese near stonebriar","japanese near legacy west","japanese steakhouse near me","sushi near me frisco","hibachi near me frisco","japanese restaurants frisco tx","japanese food delivery frisco","best japanese food frisco","japanese cuisine frisco"],
    openGraph: { title: "Japanese Food Near Me in Frisco TX | Jinbeh", description: "Jinbeh Frisco — hibachi, sushi, sake, and full bar near Stonebriar Centre. Family-owned since 1988.", url: "https://jinbeh.com/blog/japanese-food-near-me-frisco", images: [{ url: "https://jinbeh.com/images/frisco/JinbehFrisco_SushiBar.jpg", width: 1200, height: 630, alt: "Japanese food near me Frisco TX — Jinbeh sushi bar and hibachi tables" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Japanese Food Near Me in Frisco TX | Jinbeh", description: "Jinbeh Frisco — hibachi, sushi, sake near Stonebriar." },
    alternates: { canonical: "https://jinbeh.com/blog/japanese-food-near-me-frisco" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Food Near Me in Frisco TX: Where to Eat", description: "Where to find Japanese food near you in Frisco TX — Jinbeh at 2693 Preston Rd near Stonebriar Centre.", image: "https://jinbeh.com/images/frisco/JinbehFrisco_SushiBar.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/japanese-food-near-me-frisco" } };

const faqs = [
    { question: "Where can I find Japanese food near me in Frisco TX?", answer: "Jinbeh at 2693 Preston Rd Suite 1040 is the family-owned Japanese restaurant in Frisco — hibachi steakhouse, full sushi bar, and a complete Japanese cuisine menu since 1988. Located near Stonebriar Centre, minutes from Legacy West, The Star, and PGA HQ. Free parking. Phone (214) 619-1200. Reservations through OpenTable." },
    { question: "What Japanese food does Jinbeh Frisco serve?", answer: "Jinbeh Frisco serves a full Japanese cuisine menu: tableside hibachi (chicken, steak, shrimp, scallops, salmon, lobster, filet, vegetarian options), sushi rolls (Sunrise Roll, Lobster Volcano, Dragon, Rainbow, California, Spicy Tuna, Caterpillar, Spider, Ahi Tower), sashimi platters (salmon, tuna, yellowtail), appetizers (edamame, gyoza, tempura, tuna tartare), soup and salad, plus a Kids Menu." },
    { question: "Does Jinbeh Frisco do delivery and takeout?", answer: "Yes. Jinbeh Frisco offers takeout and delivery through Grubhub and Uber Eats. Search for 'Jinbeh' on either platform. Note: hibachi tableside cooking is dine-in only — only sushi, appetizers, and pre-cooked entrées are available for takeout." },
    { question: "Is Jinbeh Frisco open for lunch?", answer: "Yes. Jinbeh Frisco is open for lunch Monday-Friday 11am-2pm and Saturday-Sunday 11:30am-2:30pm. Lunch hibachi combos and bento boxes come out quickly even on busy days." },
    { question: "Is Jinbeh Frisco kid-friendly?", answer: "Yes. Jinbeh Frisco is one of DFW's most family-friendly Japanese restaurants — the hibachi chef show entertains kids, hibachi tables seat 7-8 for families, and we have a dedicated Kids Menu with hibachi chicken and steak portions for younger diners." },
    { question: "What's Jinbeh Frisco's happy hour?", answer: "Happy hour runs Monday-Friday 5-6:30 PM at Jinbeh Frisco. $4 draft beers, $5 sake, $6 wine. Bar-area only. Doesn't apply to hibachi or dining tables." },
    { question: "Does Jinbeh Frisco accommodate dietary restrictions?", answer: "Yes. Jinbeh Frisco accommodates gluten-free (tamari instead of soy sauce, no teriyaki glaze or tempura), vegetarian and vegan (vegetable-tofu hibachi, vegetable rolls), peanut, tree nut, dairy, shellfish, and soy allergies. Flag dietary needs when you reserve." },
    { question: "Is Jinbeh Frisco walking distance to anything?", answer: "Jinbeh Frisco is on Preston Rd at Suite 1040, near Stonebriar Centre. Walking distance options include Stonebriar Centre mall shops. Other Frisco attractions nearby by short drive: Legacy West, The Star district, Dr Pepper Ballpark, PGA of America HQ." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Japanese Food Near Me Frisco TX" },
]};

export default function JapaneseFoodNearMeFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Japanese Food Near Me Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/frisco/JinbehFrisco_SushiBar.jpg" alt="Japanese food near me Frisco TX — Jinbeh sushi bar and hibachi" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/local-guide" className="hover:text-white">Local Guides</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">📍 Frisco Japanese Food</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Japanese Food Near Me in Frisco TX: Where to Eat</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>If you&apos;re searching &ldquo;Japanese food near me&rdquo; in Frisco TX, the straightforward answer is Jinbeh.</strong> Located at 2693 Preston Rd Suite 1040 near Stonebriar Centre, Jinbeh has been Frisco&apos;s family-owned Japanese restaurant since 1988. Hibachi steakhouse, full sushi bar, sake program, and Japanese whiskey all under one roof.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">This is the practical guide to what we serve, when we&apos;re open, how to get there, and what to order on your first visit.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What Jinbeh Frisco serves</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Tableside hibachi</strong> &mdash; chicken, steak, shrimp, scallops, salmon, lobster, filet mignon, combinations, vegetable-tofu</li>
                                        <li><strong>Sushi bar</strong> &mdash; signature rolls (Sunrise, Lobster Volcano, Dragon, Spider, Caterpillar, Ahi Tower, Rainbow), classic rolls (California, Spicy Tuna, Shrimp Tempura)</li>
                                        <li><strong>Sashimi</strong> &mdash; salmon, tuna, yellowtail, scallop, octopus, Sashimi Deluxe platters</li>
                                        <li><strong>Appetizers</strong> &mdash; edamame, gyoza, tempura, tuna tartare, seared tuna, soft-shell crab</li>
                                        <li><strong>Soup &amp; salad</strong> &mdash; clear broth, miso soup, ginger salad</li>
                                        <li><strong>Kids Menu</strong> &mdash; hibachi chicken or steak sized for younger diners</li>
                                        <li><strong>Bar program</strong> &mdash; sake, Japanese whiskey, craft cocktails, draft beer, wine</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Hours</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Lunch</strong>: Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm</li>
                                        <li><strong>Dinner</strong>: Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm</li>
                                        <li><strong>Happy hour</strong>: Mon-Fri 5pm-6:30pm, bar area only — $4 draft, $5 sake, $6 wine</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Getting there</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>Address:</strong> 2693 Preston Rd Suite 1040, Frisco, TX 75034. Just south of Stonebriar Centre Mall on Preston Road. Free parking directly outside.</p>
                                    <p className="text-charcoal/80 mb-4"><strong>Easy access from:</strong> Stonebriar, Legacy West, The Star, Starwood, Frisco Square, Plano (north), McKinney (south on Preston), Allen, Prosper, Little Elm, The Colony.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">First-time visit: what to order</h2>
                                    <p className="text-charcoal/80 mb-4">For a first Jinbeh visit, the move depends on your group:</p>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Family with kids:</strong> hibachi table, kids hibachi chicken, adult combo plate (steak &amp; shrimp), a California Roll for variety</li>
                                        <li><strong>Date night:</strong> sushi bar two-top, a Sunrise Roll + Lobster Volcano Roll + sashimi sampler, a sake flight</li>
                                        <li><strong>Solo lunch:</strong> bento box at lunch hours, or sit at the sushi bar for nigiri and a quick chirashi bowl</li>
                                        <li><strong>Group of friends:</strong> hibachi table (seats 7-8) with mix of protein combos, plus 2-3 signature rolls to share</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Other locations</h2>
                                    <p className="text-charcoal/80 mb-4">Jinbeh also has a Lewisville location at 2440 S Stemmons Fwy #A off I-35E near Vista Ridge Mall. Same family ownership, same hibachi format, same menu. Phone (214) 488-2224.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Visit Jinbeh Frisco</h3>
                                        <p className="text-warm-ivory/80 mb-4">2693 Preston Rd Suite 1040 — near Stonebriar Centre. Reserve online or call.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/frisco/menu" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Frisco Menu</Link>
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
                                    <Link href="/reservations" className="block bg-accent-red text-white rounded-xl px-4 py-3 text-center font-semibold hover:bg-accent-red/90">Reserve a Table</Link>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related Frisco guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/japanese-restaurants-frisco-tx" className="text-accent-red hover:underline">Japanese restaurants Frisco TX</Link></li>
                                        <li><Link href="/blog/best-sushi-frisco" className="text-accent-red hover:underline">Best sushi Frisco</Link></li>
                                        <li><Link href="/blog/best-hibachi-near-me-dfw" className="text-accent-red hover:underline">Best hibachi near me DFW</Link></li>
                                        <li><Link href="/blog/things-to-do-frisco" className="text-accent-red hover:underline">Things to do in Frisco</Link></li>
                                        <li><Link href="/blog/top-frisco-restaurants" className="text-accent-red hover:underline">Top Frisco restaurants</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="japanese-food-near-me-frisco" />
            <div className="h-12" />
        </main>
    );
}
