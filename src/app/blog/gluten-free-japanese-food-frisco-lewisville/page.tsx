import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Gluten-Free Japanese Food in Frisco & Lewisville TX | Jinbeh",
    description:
        "A real guide to eating gluten-free at Jinbeh in Frisco and Lewisville. Which hibachi proteins are safe, which sushi rolls swap easily, how to ask for tamari, and what to skip.",
    keywords: [
        "gluten free japanese food frisco",
        "gluten free japanese food lewisville",
        "gluten free asian food near me",
        "gluten free hibachi frisco",
        "gluten free hibachi lewisville",
        "gluten free sushi frisco",
        "gluten free sushi lewisville",
        "gluten free japanese restaurant dfw",
        "celiac safe japanese frisco",
        "gluten free teppanyaki",
        "tamari soy sauce frisco",
        "gluten free dining frisco",
        "gluten free dining lewisville",
        "allergy friendly japanese restaurant dfw",
    ],
    openGraph: {
        title: "Gluten-Free Japanese Food at Jinbeh — Frisco & Lewisville",
        description:
            "How to eat gluten-free at Jinbeh: which hibachi proteins work, which sushi rolls swap easily, and how to ask for tamari. Real guidance from a family-owned Japanese restaurant since 1988.",
        url: "https://jinbeh.com/blog/gluten-free-japanese-food-frisco-lewisville",
        images: [
            {
                url: "https://jinbeh.com/images/food/SmokedSalmonCloseup.jpg",
                width: 1200,
                height: 630,
                alt: "Fresh sashimi at Jinbeh — naturally gluten-free Japanese food in Frisco and Lewisville TX",
            },
        ],
        type: "article",
        siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gluten-Free Japanese Food at Jinbeh — Frisco & Lewisville",
        description: "A real guide to eating gluten-free at Jinbeh. Which dishes are safe, what to swap, what to ask for.",
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/gluten-free-japanese-food-frisco-lewisville",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gluten-Free Japanese Food in Frisco & Lewisville TX",
    description:
        "Jinbeh's working guide to eating gluten-free at our hibachi and sushi tables — what works, what to swap, what to ask for.",
    image: "https://jinbeh.com/images/food/SmokedSalmonCloseup.jpg",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
        logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/gluten-free-japanese-food-frisco-lewisville" },
};

const faqs = [
    {
        question: "Does Jinbeh offer gluten-free hibachi?",
        answer:
            "Jinbeh's hibachi can be made gluten-free at both Frisco and Lewisville. The proteins (steak, chicken, shrimp, scallops, salmon, lobster, vegetables) are naturally gluten-free; the standard issue is soy sauce, which contains wheat. Ask your chef to use tamari instead, hold the teriyaki glaze (which contains soy sauce and sometimes wheat starch), and ask to cook your food first on a clean section of the griddle. Skip the fried rice if you're strict — standard fried rice is cooked with regular soy sauce on the same grill.",
    },
    {
        question: "Is sushi at Jinbeh gluten-free?",
        answer:
            "Most plain nigiri and sashimi at Jinbeh are naturally gluten-free — raw fish, rice, and rice vinegar with no wheat. Avoid the eel (the unagi sauce contains wheat), surimi/imitation crab (in some California rolls and dynamite rolls), tempura items, and anything with eel sauce, spicy mayo, or ponzu drizzle unless we confirm the brand we use is gluten-free that week. Bring your own tamari packet or ask for ours; we keep a bottle behind the sushi bar.",
    },
    {
        question: "Does Jinbeh have gluten-free soy sauce (tamari)?",
        answer:
            "Yes. Both Jinbeh locations keep gluten-free tamari for guests who request it. Mention it when you sit down so your server can flag your table to the kitchen and the hibachi chef. We won't charge you extra for it.",
    },
    {
        question: "How does Jinbeh prevent cross-contamination on the hibachi grill?",
        answer:
            "Hibachi is a shared griddle, so total separation isn't realistic — but we can come close. When you tell your chef you're eating gluten-free, they'll wipe down a clean section, cook your proteins and vegetables first before anyone else's food, swap to a clean spatula and oil bottle, and skip the standard soy sauce squirt. If you're celiac and need a fully isolated cook surface, our private dining setup can sometimes accommodate that — call ahead.",
    },
    {
        question: "What gluten-free Japanese dishes does Jinbeh recommend?",
        answer:
            "Our most-ordered gluten-free combinations: hibachi filet mignon with vegetables and a side salad (skip the dressing or ask for oil and vinegar), salmon or tuna sashimi, a plain spicy tuna roll without eel sauce, edamame with sea salt, and miso soup (ask us to confirm — most miso pastes are naturally gluten-free but a few brands include barley). For drinks, all of our sake is gluten-free; certain Japanese beers contain wheat, so stick with sake, wine, or our cocktails (most are gluten-free; check on whiskey-based drinks).",
    },
    {
        question: "Can I bring a celiac child to Jinbeh?",
        answer:
            "Yes — we host celiac families often, especially at hibachi birthday parties. Tell us when you reserve. Many families pre-coordinate with the chef so the kid's food gets cooked first on a clean grill section, with tamari instead of soy sauce, and chef avoids the teriyaki glaze, panko, and tempura proteins. Hibachi chicken and shrimp are usually the easiest combo for kids.",
    },
    {
        question: "Does Jinbeh accommodate other food allergies?",
        answer:
            "Yes. Jinbeh has accommodated peanut, tree nut, dairy, egg, shellfish, soy, and sesame allergies — sometimes all on the same table. Always tell your server and chef before you order so we can plan the cook order and surface prep. For severe allergies, calling ahead helps us flag the reservation and brief the team before you arrive.",
    },
    {
        question: "What about Asian-style gluten-free food beyond Japanese?",
        answer:
            "Most Asian cuisines lean heavily on soy sauce, which means gluten. Japanese cuisine — and especially hibachi, sushi, and sashimi — is one of the easier Asian categories to eat gluten-free, since rice is the base and tamari is widely accepted as a substitute. Compared to Chinese, Korean, or Thai restaurants in the DFW area, a hibachi-and-sushi spot like Jinbeh tends to be the safer pick for gluten-sensitive diners.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
        { "@type": "ListItem", position: 3, name: "Japanese Cuisine", item: "https://jinbeh.com/blog/category/cuisine" },
        { "@type": "ListItem", position: 4, name: "Gluten-Free Japanese Food" },
    ],
};

export default function GlutenFreeJapanesePost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Gluten-Free Japanese Food" }]} />
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image
                    src="/images/food/SmokedSalmonCloseup.jpg"
                    alt="Fresh salmon sashimi at Jinbeh — naturally gluten-free Japanese food in Frisco and Lewisville TX"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/blog/category/cuisine" className="hover:text-white">Japanese Cuisine</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        🌾 Allergy &amp; Dietary Guide
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Gluten-Free Japanese Food in Frisco &amp; Lewisville TX
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span>
                        <span>·</span>
                        <span>May 2026</span>
                        <span>·</span>
                        <span>8 min read</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">

                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                                        <strong>Most people don&apos;t realize how much gluten is hiding in Japanese food.</strong> Soy sauce
                                        is wheat-based. Teriyaki glaze is wheat-based. Tempura is fried in wheat batter. Imitation
                                        crab in California rolls usually has wheat starch. Eel sauce contains soy sauce, which
                                        contains wheat. The list goes on. So when a guest at our hibachi table says &ldquo;I&apos;m
                                        gluten-free,&rdquo; we take it seriously &mdash; because half the menu has a gluten
                                        landmine somewhere on it.
                                    </p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                                        This is our working guide to eating gluten-free at Jinbeh. We&apos;ve been hosting
                                        celiac families, gluten-sensitive guests, and folks with diagnosed wheat allergies
                                        at our Frisco and Lewisville locations since 1988. The good news: Japanese food is
                                        actually one of the easier Asian categories for gluten-free diners. Rice is the
                                        backbone. Raw fish is naturally clean. And tamari (gluten-free soy sauce) is a
                                        well-known substitute that most Japanese cooks already know how to work with.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            &ldquo;Tell us when you sit down. Don&apos;t wait until the chef is already cooking.
                                            We need 30 seconds to swap the soy sauce, wipe the grill, and plan the cook order.
                                            That&apos;s the whole secret.&rdquo;
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">The hibachi safety map</h2>
                                    <p className="text-charcoal/80 mb-4">
                                        Hibachi looks risky for gluten-free guests because everything cooks on one shared
                                        iron griddle. Here&apos;s what actually matters and what doesn&apos;t.
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Naturally gluten-free at the hibachi grill</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>All proteins by themselves &mdash; steak, chicken, shrimp, scallops, salmon, lobster, filet mignon</li>
                                        <li>Vegetables &mdash; onion, zucchini, mushrooms, broccoli, bean sprouts</li>
                                        <li>Plain white steamed rice (ask for steamed instead of fried rice)</li>
                                        <li>Soup and salad &mdash; the ginger salad dressing is gluten-free; the clear broth soup is gluten-free if we confirm the miso paste brand that week</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Skip or swap these</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Standard soy sauce</strong> &mdash; swap to <strong>tamari</strong> (we keep it behind the bar at both locations)</li>
                                        <li><strong>Teriyaki glaze</strong> &mdash; ask the chef to skip it. The glaze is soy-based and often contains wheat starch</li>
                                        <li><strong>Fried rice</strong> &mdash; tossed with regular soy sauce on a shared grill. Get steamed rice instead</li>
                                        <li><strong>Noodles</strong> &mdash; standard hibachi noodles are wheat-based. We can&apos;t safely substitute, so plan around them</li>
                                        <li><strong>Tempura</strong> &mdash; wheat batter. Always.</li>
                                    </ul>

                                    <ProTip variant="insider">
                                        <strong>The grill prep that matters:</strong> tell your chef before they start.
                                        They&apos;ll wipe a clean section of the griddle, use a fresh oil bottle and spatula,
                                        and cook your food <em>first</em> &mdash; before everyone else&apos;s order. That
                                        sequence is the single biggest thing that reduces cross-contact risk.{" "}
                                        <Link href="/reservations" className="text-accent-red hover:underline">
                                            Reserve at Jinbeh
                                        </Link>{" "}
                                        and add a note about gluten-free.
                                    </ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Sushi: easier than hibachi, with caveats</h2>
                                    <p className="text-charcoal/80 mb-4">
                                        Pure nigiri and sashimi are naturally gluten-free &mdash; raw fish on rice, with
                                        rice vinegar. The complications start with sauces and fillings.
                                    </p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Safe sushi at Jinbeh</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>All nigiri (salmon, tuna, yellowtail, scallop, shrimp) with tamari instead of soy sauce</li>
                                        <li>All sashimi platters &mdash; no rice, just sliced raw fish</li>
                                        <li>Hand rolls without eel sauce or spicy mayo</li>
                                        <li>Plain spicy tuna roll if we confirm the spicy mayo is gluten-free that week (most brands are; some use wheat-based thickeners)</li>
                                    </ul>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Skip or ask about</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Eel (unagi)</strong> &mdash; the glaze always contains soy sauce</li>
                                        <li><strong>Imitation crab</strong> &mdash; in California rolls, dynamite rolls. Real crab is fine, but ask first</li>
                                        <li><strong>Eel sauce drizzle</strong> &mdash; on Dragon Roll, Caterpillar Roll, and most house specialty rolls. Ask the chef to hold it</li>
                                        <li><strong>Tempura rolls</strong> &mdash; Spider Roll, Shrimp Tempura Roll. The fried element is wheat-battered</li>
                                        <li><strong>Spicy mayo and ponzu</strong> &mdash; usually safe but brand-dependent. Always ask</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Drinks: where gluten can ambush you</h2>
                                    <p className="text-charcoal/80 mb-4">
                                        Sake is rice-fermented and gluten-free. Japanese beer (Sapporo, Asahi, Kirin) is
                                        usually barley-based and not safe for celiac diners. Whiskey is technically
                                        distilled below detectable gluten levels, but strict celiac protocols often
                                        avoid it. Wine and most cocktails on our menu are gluten-free.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">If you&apos;re celiac, not just sensitive</h2>
                                    <p className="text-charcoal/80 mb-4">
                                        We can serve celiac guests carefully, but we can&apos;t legally call any dish
                                        &ldquo;100% gluten-free&rdquo; in a kitchen that handles wheat. If your reaction is
                                        severe, here&apos;s our usual protocol for celiac tables:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Call the restaurant ahead of your reservation. Ask for the manager. We flag your reservation in our system</li>
                                        <li>When you arrive, remind your server. They tell the kitchen and the hibachi chef before any food fires</li>
                                        <li>Chef wipes the griddle, uses a fresh oil bottle, fresh spatula, and cooks your food first</li>
                                        <li>Sushi chef uses a clean cutting board section, a fresh knife, and skips eel sauce on any roll heading to your table</li>
                                        <li>Manager confirms with you that the dish you ordered matches what arrives</li>
                                    </ol>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How Jinbeh compares to other Asian gluten-free options in DFW</h2>
                                    <p className="text-charcoal/80 mb-4">
                                        Honest assessment: Japanese is the easiest Asian cuisine to eat gluten-free,
                                        and within Japanese, hibachi + sushi spots tend to be safer than ramen shops
                                        (wheat noodles) or izakaya (lots of fried items). Chinese, Korean, and Thai
                                        restaurants use soy sauce in almost every base sauce, which makes total
                                        gluten avoidance much harder. If you&apos;re cycling through &ldquo;what Asian
                                        restaurant can my gluten-free family actually eat at?&rdquo; &mdash; hibachi
                                        is usually the right answer, and Jinbeh has been doing it the way that
                                        works for almost four decades.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        Frequently asked questions
                                    </h2>
                                    <div className="space-y-6">
                                        {faqs.map((faq, i) => (
                                            <div key={i} className="bg-warm-ivory rounded-2xl p-6">
                                                <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{faq.question}</h3>
                                                <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-charcoal text-warm-ivory rounded-3xl p-8 mt-10">
                                        <h3 className="font-heading text-2xl font-bold mb-3">Reserve gluten-free at Jinbeh</h3>
                                        <p className="text-warm-ivory/80 mb-4">
                                            Mention &ldquo;gluten-free&rdquo; when you reserve and we&apos;ll flag the
                                            table. The chef and server will be ready before you sit down.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/lewisville" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Jinbeh Lewisville</Link>
                                            <Link href="/allergy-friendly-dining" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Full Allergy Guide</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Quick lookup</div>
                                    <ul className="space-y-3 text-sm text-white/90">
                                        <li>✅ Tamari (gluten-free soy sauce) available at both locations</li>
                                        <li>✅ Plain proteins, sashimi, sake</li>
                                        <li>⚠️ Avoid teriyaki glaze, eel sauce, tempura</li>
                                        <li>⚠️ Skip Japanese beer</li>
                                        <li>📞 Call ahead if celiac &mdash; we flag the reservation</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related at Jinbeh</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/allergy-friendly-dining" className="text-accent-red hover:underline">Allergy-friendly dining</Link></li>
                                        <li><Link href="/frisco/menu" className="text-accent-red hover:underline">Frisco menu</Link></li>
                                        <li><Link href="/lewisville/menu" className="text-accent-red hover:underline">Lewisville menu</Link></li>
                                        <li><Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">Types of sushi</Link></li>
                                        <li><Link href="/blog/hibachi-calories-guide" className="text-accent-red hover:underline">Hibachi calories guide</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="gluten-free-japanese-food-frisco-lewisville" />
            <div className="h-12" />
        </main>
    );
}
