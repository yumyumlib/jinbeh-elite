import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Vegetarian Japanese Food in DFW: Real Options at Jinbeh | Frisco & Lewisville",
    description:
        "Vegetarian Japanese food in DFW that goes beyond avocado rolls — vegetable hibachi, vegetable nigiri, asparagus rolls, and soup at Jinbeh Frisco and Lewisville. Family-owned since 1988.",
    keywords: [
        "vegetarian japanese food dfw",
        "vegetarian japanese food frisco",
        "vegetarian japanese food lewisville",
        "vegetarian hibachi frisco",
        "vegetarian sushi rolls dfw",
        "vegan japanese food dfw",
        "vegetable hibachi frisco",
        "tofu hibachi lewisville",
        "veggie sushi near me",
        "best vegetarian sushi near me",
        "vegetable nigiri frisco",
        "vegetarian restaurants frisco",
        "vegetarian restaurants lewisville",
    ],
    openGraph: {
        title: "Vegetarian Japanese Food in DFW | Jinbeh",
        description: "Vegetarian hibachi and sushi options at Jinbeh Frisco and Lewisville. Beyond avocado rolls — real vegetarian Japanese.",
        url: "https://jinbeh.com/blog/vegetarian-japanese-food-dfw",
        images: [{ url: "https://jinbeh.com/images/hero/jinbeh-hibachi-chef-flames-frisco-lewisville.jpg", width: 1200, height: 630, alt: "Vegetarian Japanese food DFW — Jinbeh vegetable hibachi and sushi" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Vegetarian Japanese Food in DFW | Jinbeh", description: "Vegetarian hibachi and sushi options at Jinbeh Frisco and Lewisville." },
    alternates: { canonical: "https://jinbeh.com/blog/vegetarian-japanese-food-dfw" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Vegetarian Japanese Food in DFW: Real Options at Jinbeh",
    description: "A guide to eating vegetarian at Jinbeh Frisco and Lewisville — vegetable hibachi, vegetable nigiri, asparagus rolls, and soup. Plus what to skip if you're vegan.",
    image: "https://jinbeh.com/images/hero/jinbeh-hibachi-chef-flames-frisco-lewisville.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/vegetarian-japanese-food-dfw" },
};

const faqs = [
    { question: "Does Jinbeh have vegetarian options in DFW?", answer: "Yes. Jinbeh accommodates vegetarian and vegan diners at both Frisco and Lewisville. The vegetable-tofu hibachi tray is the most-ordered vegetarian entrée — zucchini, onion, mushrooms, bean sprouts, tofu, seared on the hibachi grill with rice and sauces. The sushi bar offers avocado-cucumber rolls, asparagus rolls, sweet potato tempura rolls, and vegetable nigiri (inari sweet tofu, tamago egg if you eat eggs)." },
    { question: "What's the best vegetarian roll at Jinbeh?", answer: "The most-ordered vegetarian rolls at Jinbeh are the avocado-cucumber roll (clean, simple), asparagus roll (lightly grilled asparagus inside), and sweet potato tempura roll (cooked, kid-friendly). For something less common, ask the sushi chef for a custom vegetable roll combining avocado, cucumber, asparagus, and pickled radish — often plated in soy paper instead of nori for a different texture." },
    { question: "Can I get vegetarian hibachi at Jinbeh?", answer: "Yes. Our vegetable hibachi tray (with or without tofu) cooks on the same hibachi grill as the meat proteins, but the chef can prep it on a clean section of the griddle for strict vegetarians and use separate utensils. For full vegan cooking, ask the chef to skip the egg in the fried rice and use oil instead of butter on the grill." },
    { question: "Is the soup or salad vegetarian at Jinbeh?", answer: "The ginger salad with our house dressing is vegetarian. The clear soup served before hibachi is usually a vegetable-based dashi — most batches are vegetarian, but ask the server to confirm the day's preparation, since some dashi recipes include bonito flakes (which are fish-based)." },
    { question: "What about vegan diners at Jinbeh?", answer: "Vegan diners can order vegetable hibachi (no egg in fried rice, oil instead of butter), avocado-cucumber rolls, asparagus rolls, sweet potato tempura rolls (the batter is egg-free at most kitchens — confirm with server), edamame, and the ginger salad. Skip nigiri with egg (tamago) and rolls with imitation crab. Sake and Japanese beer are vegan." },
    { question: "Are vegetable rolls real Japanese cuisine, or just an American thing?", answer: "Vegetable sushi has been part of Japanese cuisine for centuries — pickled vegetable rolls (kappa maki, oshinko maki), inari sushi (sweet tofu pouches with rice), and futomaki (large rolls with multiple vegetables) are traditional. The avocado-heavy American vegetarian rolls are more recent, but they're rooted in the same tradition." },
    { question: "Can vegetarian and meat-eating guests share a table at Jinbeh?", answer: "Yes. Both Jinbeh Frisco and Lewisville accommodate mixed dietary tables routinely. At a hibachi table, the chef cooks vegetarian proteins separately on a wiped section of the grill, then cooks the meat proteins. At the sushi bar, vegetarian rolls plate alongside fish rolls without any cross-contact issues. Tell the server about the dietary mix when you sit down." },
    { question: "Does Jinbeh have a separate vegetarian menu?", answer: "We don't print a separate vegetarian menu — vegetarian options are integrated into the main menu. Look for the vegetable hibachi tray, vegetable rolls (avocado-cucumber, asparagus, sweet potato), the ginger salad, edamame, miso soup (confirm vegetarian dashi), and vegetable tempura. Ask the server to point them out if you're scanning the menu for the first time." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Health & Nutrition", item: "https://jinbeh.com/blog/category/health" },
    { "@type": "ListItem", position: 4, name: "Vegetarian Japanese Food DFW" },
]};

export default function VegetarianJapaneseDFWPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Vegetarian Japanese Food DFW" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/hero/jinbeh-hibachi-chef-flames-frisco-lewisville.jpg" alt="Vegetarian Japanese Food Dfw at Jinbeh Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/health" className="hover:text-white">Health</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-soft-gold text-charcoal mb-4">🌱 Vegetarian &amp; Vegan Guide</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Vegetarian Japanese Food in DFW: Real Options at Jinbeh</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Vegetarian Japanese food in DFW gets a worse reputation than it deserves.</strong> Most American sushi places treat vegetarian guests like an afterthought &mdash; here&apos;s an avocado roll, hope you like it. Real Japanese cuisine has had vegetarian and vegan dishes for centuries, and a decent restaurant can do better than rice and avocado.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh has been cooking for vegetarian and mixed-dietary tables in Frisco and Lewisville since 1988. This is the practical guide to eating well as a vegetarian at our restaurants &mdash; what to order, what to ask, and what to skip if you&apos;re strict vegan.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;The vegetable-tofu hibachi gets ordered more than people expect. It&apos;s the only entrée that gets the full chef show without the meat. Vegetarian guests at a hibachi table aren&apos;t just along for the ride.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Vegetarian hibachi at Jinbeh</h2>
                                    <p className="text-charcoal/80 mb-4">The vegetable-tofu hibachi is our main vegetarian entrée. The chef cooks on the same teppanyaki grill as everyone else&apos;s order, but typically on a wiped clean section for strict vegetarians. What&apos;s on the tray:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Tofu</strong> &mdash; firm tofu, seared with our hibachi sauces</li>
                                        <li><strong>Vegetables</strong> &mdash; zucchini, onion, mushrooms, bean sprouts, sometimes broccoli</li>
                                        <li><strong>Hibachi fried rice or steamed rice</strong> &mdash; ask for no egg in the fried rice if you&apos;re vegan</li>
                                        <li><strong>Soup and salad</strong> &mdash; clear broth (confirm vegetarian dashi with server), ginger dressing on the side salad</li>
                                        <li><strong>Sauces</strong> &mdash; yum yum and ginger sauces on the side</li>
                                    </ul>
                                    <p className="text-charcoal/80 mb-4">For strict vegan diners, tell the chef when they arrive: &ldquo;no egg in the rice, oil instead of butter on the grill.&rdquo; That covers the two most common cross-contact issues with vegan hibachi.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Vegetarian sushi at Jinbeh</h2>
                                    <p className="text-charcoal/80 mb-4">The sushi bar offers more vegetarian options than the menu makes obvious. Standard vegetarian rolls:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Avocado-cucumber roll</strong> &mdash; the classic. Simple, clean, works for everyone</li>
                                        <li><strong>Asparagus roll</strong> &mdash; lightly grilled asparagus, a bit more flavor than plain cucumber</li>
                                        <li><strong>Sweet potato tempura roll</strong> &mdash; cooked, kid-friendly, the safety net for picky eaters</li>
                                        <li><strong>Vegetable nigiri</strong> &mdash; <em>inari</em> (sweet tofu pouches with rice), <em>tamago</em> (egg, if you eat eggs)</li>
                                        <li><strong>Custom vegetable roll</strong> &mdash; ask the sushi chef to combine avocado, cucumber, asparagus, and pickled radish in a single roll. Often plated in soy paper for a different texture</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Vegan vs. vegetarian: what to skip</h2>
                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Dish</th>
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Vegetarian?</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Vegan?</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Vegetable hibachi tray</td><td className="py-3 pr-4">Yes</td><td className="py-3">Yes if no egg + oil instead of butter</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Hibachi fried rice</td><td className="py-3 pr-4">Yes</td><td className="py-3">No (egg) — ask for steamed rice</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Tamago nigiri (egg)</td><td className="py-3 pr-4">Yes</td><td className="py-3">No (egg, sometimes dashi)</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Inari nigiri (sweet tofu)</td><td className="py-3 pr-4">Yes</td><td className="py-3">Usually yes — confirm with server</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Clear soup</td><td className="py-3 pr-4">Usually (ask)</td><td className="py-3">Usually (ask about dashi)</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Miso soup</td><td className="py-3 pr-4">Usually (ask)</td><td className="py-3">Usually (ask about dashi)</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Edamame</td><td className="py-3 pr-4">Yes</td><td className="py-3">Yes</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Ginger salad</td><td className="py-3 pr-4">Yes</td><td className="py-3">Yes</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Sake / Japanese beer</td><td className="py-3 pr-4">Yes</td><td className="py-3">Yes</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <ProTip variant="insider"><strong>The dashi question matters most for vegans:</strong> dashi (the broth base for miso soup and clear soup) is sometimes made with bonito flakes, which are fish-based. Some kitchens use a kombu-only (kelp-only) dashi that&apos;s fully vegan. Ask the server which batch is being served that day before ordering soup.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Mixed dietary tables at Jinbeh</h2>
                                    <p className="text-charcoal/80 mb-4">A common scenario: family of 4-6 with one vegetarian, the rest eating fish and meat. At a hibachi table, the chef cooks the vegetable hibachi on a wiped clean section of the grill, then transitions to the meat. At the sushi bar, vegetable rolls plate alongside fish rolls without cross-contact concerns. Tell the server about the dietary split when you sit down so the kitchen plans the cook order.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Where Jinbeh is</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Jinbeh Frisco</strong>: 2693 Preston Rd Suite 1040, near Stonebriar. (214) 619-1200</li>
                                        <li><strong>Jinbeh Lewisville</strong>: 2440 S Stemmons Fwy #A, off I-35E. (214) 488-2224</li>
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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Reserve vegetarian-friendly at Jinbeh</h3>
                                        <p className="text-warm-ivory/80 mb-4">Mention &ldquo;vegetarian&rdquo; or &ldquo;vegan&rdquo; when you reserve. The kitchen and chef will be ready.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/lewisville" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Jinbeh Lewisville</Link>
                                            <Link href="/allergy-friendly-dining" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Allergy Guide</Link>
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
                                        <li>Vegetarian: vegetable hibachi, vegetable rolls</li>
                                        <li>Vegan: skip egg in rice, oil not butter</li>
                                        <li>Ask about dashi for soup</li>
                                        <li>Mixed tables: tell server upfront</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related dietary guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/gluten-free-japanese-food-frisco-lewisville" className="text-accent-red hover:underline">Gluten-free Japanese food</Link></li>
                                        <li><Link href="/allergy-friendly-dining" className="text-accent-red hover:underline">Allergy-friendly dining</Link></li>
                                        <li><Link href="/blog/hibachi-calories-guide" className="text-accent-red hover:underline">Hibachi calories</Link></li>
                                        <li><Link href="/frisco/menu" className="text-accent-red hover:underline">Frisco menu</Link></li>
                                        <li><Link href="/lewisville/menu" className="text-accent-red hover:underline">Lewisville menu</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="vegetarian-japanese-food-dfw" />
            <div className="h-12" />
        </main>
    );
}
