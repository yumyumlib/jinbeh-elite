import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
    title: "Sushi Platter for a Party: How to Order Right | Jinbeh DFW",
    description:
        "How to order a sushi platter for a party in DFW — how much sushi per person, which rolls to mix, lead time, and what to ask. Practical guide from a Japanese restaurant family.",
    keywords: [
        "sushi platter for party",
        "sushi platter near me",
        "sushi party platter",
        "sushi party tray near me",
        "sushi platters near me",
        "best sushi platter near me",
        "sushi catering tray",
        "sushi party tray dfw",
        "sushi platter frisco",
        "sushi platter lewisville",
        "sushi tray for party",
        "sushi for office party",
        "sushi for birthday party",
        "how much sushi per person party",
    ],
    openGraph: {
        title: "Sushi Platter for a Party: How to Order Right | Jinbeh",
        description: "How to order a sushi platter for a party — quantities per person, which rolls to mix, lead time, costs. Practical guide from a Japanese restaurant.",
        url: "https://jinbeh.com/blog/sushi-platter-for-party",
        images: [{ url: "https://jinbeh.com/images/instagram/sushi-feast-overhead.jpg", width: 1200, height: 630, alt: "Sushi platter for a party — Jinbeh signature sushi feast" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Sushi Platter for a Party | Jinbeh DFW", description: "How to order a sushi platter that actually works for your party." },
    alternates: { canonical: "https://jinbeh.com/blog/sushi-platter-for-party" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Sushi Platter for a Party: How to Order Right",
    description: "Practical guide to ordering a sushi party platter — quantities per person, roll mix, lead times, dietary planning, and what to ask before you buy.",
    image: "https://jinbeh.com/images/instagram/sushi-feast-overhead.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/sushi-platter-for-party" },
};

const faqs = [
    { question: "How much sushi do I need per person for a party?", answer: "Plan on 8-12 pieces of sushi per adult guest at a party, which is roughly 1-1.5 rolls per person (each roll cut into 8 pieces). For sushi-only parties where the platter is the main meal, push to 14-16 pieces per person. For mixed-cuisine parties where sushi is one of several stations, 6-8 pieces per person is enough. Kids generally eat half what adults eat. Add about 15% buffer because running out is worse than having extra." },
    { question: "What rolls should I include in a party platter?", answer: "A crowd-pleasing party platter mixes 5 rolls covering both cooked and raw options: California Roll (universal safe choice), Spicy Tuna Roll (popular with adults), Dragon Roll (visual centerpiece with eel sauce), Rainbow Roll (colorful, photogenic), and Shrimp Tempura Roll (cooked, kid-friendly). Add 1-2 signature options like the Sunrise Roll, Lobster Volcano Roll, or Spider Roll for guests who want something less common. A small sashimi sampler (salmon, tuna, yellowtail) is worth including for the sushi purists." },
    { question: "How far in advance should I order a sushi platter?", answer: "At least one week of lead time is the rule. Quality sushi catering depends on fish ordered specifically for your event headcount, and reputable kitchens won't pre-roll the night before — they cut the day of. For larger parties (40+ people) or premium platters with signature rolls and sashimi, push to 2 weeks." },
    { question: "What does a sushi party platter typically cost?", answer: "Standard sushi party platters in the DFW area run $15-$28 per person for drop-off catering. Classics-only platters (California, Spicy Tuna, Dragon, Rainbow, Shrimp Tempura) land at the lower end. Premium platters with signature rolls (Sunrise, Lobster Volcano, Ahi Tower) plus a sashimi sampler land at the higher end." },
    { question: "Can a sushi platter accommodate gluten-free, vegetarian, or other diets?", answer: "Yes. Sushi catering is one of the easier cuisines for dietary mix. Vegetarian guests get avocado-cucumber rolls, vegetable nigiri, asparagus rolls, or soy-paper-wrapped veggie rolls. Gluten-free guests get tamari on the side, skip eel sauce, skip tempura rolls, and skip imitation crab (which usually contains wheat). Pescatarian, dairy-free, peanut-free, and shellfish-free guests are easy to accommodate. Tell us when you order so the platter is composed correctly." },
    { question: "How do I keep a sushi platter fresh until the party starts?", answer: "If the platter arrives more than 2 hours before serving, keep it refrigerated (or on a bed of ice) and don't unwrap the presentation. Take it out 15-20 minutes before guests start eating so the rice softens slightly. Don't leave sushi at room temperature for more than 2 hours total — the raw fish needs to stay cold for food safety." },
    { question: "Can I order a sushi platter for delivery in the DFW area?", answer: "Jinbeh delivers sushi platters across the DFW metro from our Frisco and Lewisville locations. Standard zones from Frisco: Plano, McKinney, Allen, Prosper, The Colony, Little Elm, Stonebriar, Legacy West, The Star. From Lewisville: Flower Mound, Highland Village, Castle Hills, The Colony, Carrollton, Coppell, Lake Dallas, Hebron. Delivery to zones outside our standard radius is quoted on request." },
    { question: "Should I order more sushi or more appetizers for a party?", answer: "Depends on the crowd. Sushi-loving guests (date-night crowd, foodie groups) want more sushi and less of everything else. Mixed groups (kids' parties, family reunions, office lunches) want a smaller sushi platter plus appetizers (edamame, gyoza, tempura, miso soup, salad). A good rule for mixed groups: 60% sushi, 40% appetizers and sides. For sushi-focused groups: 80% sushi, 20% sides." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Japanese Cuisine", item: "https://jinbeh.com/blog/category/cuisine" },
    { "@type": "ListItem", position: 4, name: "Sushi Platter for a Party" },
]};

export default function SushiPlatterForPartyPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sushi Platter for a Party" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/instagram/sushi-feast-overhead.jpg" alt="Sushi platter for a party — Jinbeh sushi feast overhead view" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/cuisine" className="hover:text-white">Japanese Cuisine</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-soft-gold text-charcoal mb-4">🍣 Party Planning Guide</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Sushi Platter for a Party: How to Order Right</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>The two questions people ask when ordering a sushi platter for a party: how much, and what kind.</strong> Get both right and you have a hit. Get either wrong and you&apos;re either running out 30 minutes in or eating week-old leftovers from your fridge.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">This is the practical guide &mdash; how much sushi per person, which rolls to mix, what it costs, and what to do if guests have dietary needs.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Plan for 10 pieces per adult, mix five different rolls, and add a small sashimi sampler somewhere on the platter. Those three rules get most parties 95% of the way there.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How much sushi per person?</h2>
                                    <p className="text-charcoal/80 mb-4">This is the most common mistake first-time sushi orderers make &mdash; they underorder. Sushi pieces are smaller than people think, and a hungry guest at a party can eat a surprising amount.</p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Party Type</th>
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Sushi Pieces / Adult</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Rolls / Adult</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Sushi is the whole meal</td><td className="py-3 pr-4">14-16 pieces</td><td className="py-3">~2 rolls</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Sushi + appetizers (typical party)</td><td className="py-3 pr-4">10-12 pieces</td><td className="py-3">~1.5 rolls</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Sushi as one of several stations</td><td className="py-3 pr-4">6-8 pieces</td><td className="py-3">~1 roll</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Cocktail-hour passed sushi</td><td className="py-3 pr-4">4-6 pieces</td><td className="py-3">~0.75 roll</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-charcoal/80 mb-4">Kids generally eat about half what adults eat. Pre-teens trend toward adult portions, especially boys. Add 15% buffer to whatever you calculate &mdash; running short on sushi at a party is the kind of thing guests remember.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Which rolls to mix on the platter</h2>
                                    <p className="text-charcoal/80 mb-4">A great sushi party platter has variety across four dimensions: cooked vs. raw, mild vs. spicy, familiar vs. signature, and visual diversity. Five rolls covers all of that comfortably.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">The crowd-pleasing five</h3>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>California Roll</strong> &mdash; the universal safe choice. Crab, avocado, cucumber. Even guests who don&apos;t eat raw fish will eat this</li>
                                        <li><strong>Spicy Tuna Roll</strong> &mdash; popular with adults, mildly spicy, easy entry to raw fish</li>
                                        <li><strong>Dragon Roll</strong> &mdash; visual centerpiece. Eel and avocado, finished with eel sauce. The first roll people photograph</li>
                                        <li><strong>Shrimp Tempura Roll</strong> &mdash; cooked, kid-friendly, the safety net for picky eaters</li>
                                        <li><strong>Rainbow Roll</strong> &mdash; California roll wrapped in colorful sashimi (salmon, tuna, yellowtail). Photogenic and substantial</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Add one or two signatures for the table that wants something different</h3>
                                    <p className="text-charcoal/80 mb-4">Jinbeh signatures worth featuring: <strong>Sunrise Roll</strong> (one of our most-ordered house specialties), <strong>Lobster Volcano Roll</strong> (lobster topped with baked spicy crab), <strong>Ahi Tower</strong> (sashimi-grade tuna stacked with avocado and rice), <strong>Spider Roll</strong> (soft-shell crab tempura wrapped with cucumber), <strong>Caterpillar Roll</strong> (eel and cucumber, plated to look like a caterpillar).</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Always add a small sashimi sampler</h3>
                                    <p className="text-charcoal/80 mb-4">Even if the party isn&apos;t sushi-purist, a small sashimi tray (6-12 pieces across salmon, tuna, yellowtail) signals quality to anyone who knows the difference. It also keeps the rice-heavy roll calories from filling guests up too fast.</p>

                                    <ProTip variant="insider"><strong>Vegetarian sub-platter for parties with non-fish-eaters:</strong> avocado-cucumber rolls, asparagus rolls, sweet potato tempura rolls, vegetable nigiri (tamago/egg, inari/sweet tofu). Plate it separately so vegetarian guests don&apos;t have to fish through the main platter looking for options.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Timing &amp; freshness</h2>
                                    <p className="text-charcoal/80 mb-4">Sushi quality is a clock. Fish bought yesterday and cut the same day makes a different impression than fish rolled the night before. Ask your caterer when the rolls will be cut. If they answer &ldquo;tonight for tomorrow,&rdquo; pick another caterer.</p>
                                    <p className="text-charcoal/80 mb-4">For Jinbeh catering: we cut the day of delivery. Morning cuts for evening parties, afternoon cuts for late-evening events. Fish comes into our kitchen multiple times per week and is ordered specifically for each catering job&apos;s headcount.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What to ask before ordering</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>When were the rolls cut?</strong> Same-day delivery is the right answer</li>
                                        <li><strong>Where does the fish come from?</strong> Reputable caterers source from a known supplier with food-safety records</li>
                                        <li><strong>What does the platter include besides the rolls?</strong> Pickled ginger, wasabi, soy sauce, and chopsticks should come standard</li>
                                        <li><strong>Is tamari included for gluten-free guests?</strong> At Jinbeh, yes &mdash; on the side, no booking fee</li>
                                        <li><strong>What&apos;s your vegetarian option?</strong> Should be more than &ldquo;avocado roll&rdquo;</li>
                                        <li><strong>How is it delivered?</strong> Insulated container with ice, never room-temperature transport</li>
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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Order a Jinbeh sushi platter</h3>
                                        <p className="text-warm-ivory/80 mb-4">Delivery across DFW from our Frisco and Lewisville locations. Tell us date, headcount, and roll preferences.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/catering" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Catering Page</Link>
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
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Quick rules</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li>10-12 pieces per adult</li>
                                        <li>Mix 5 rolls minimum</li>
                                        <li>Add a sashimi sampler</li>
                                        <li>Same-day cut sushi only</li>
                                        <li>15% buffer on quantity</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related at Jinbeh</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/sushi-catering-frisco" className="text-accent-red hover:underline">Sushi catering Frisco</Link></li>
                                        <li><Link href="/blog/sushi-catering-lewisville" className="text-accent-red hover:underline">Sushi catering Lewisville</Link></li>
                                        <li><Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">Types of sushi</Link></li>
                                        <li><Link href="/blog/beginner-sushi-tips" className="text-accent-red hover:underline">Sushi for beginners</Link></li>
                                        <li><Link href="/catering" className="text-accent-red hover:underline">Jinbeh catering</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="sushi-platter-for-party" />
            <div className="h-12" />
        </main>
    );
}
