import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Sake Sushi Menu Pairings | Perfect Flavor Combinations",
    description:
        "Discover the art of pairing sake with sushi. Learn flavor combinations, sake types, and menu recommendations for an exquisite dining experience.",
    keywords: [
        "sake sushi pairing",
        "sake and sushi menu",
        "sake pairing guide",
        "sushi and sake pairings",
        "Japanese beverage pairings",
        "sake recommendations",
    ],
    openGraph: {
        title: "Sake Sushi Menu Pairings | Perfect Combinations",
        description: "Master the art of sake and sushi pairings with expert recommendations.",
        images: ["/images/beverages/JinbehCocktail.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sake Sushi Menu Guide: Perfect Pairings Explored",
    description: "Complete guide to pairing sake with sushi for an enhanced dining experience.",
    image: "https://jinbeh.com/images/beverages/JinbehCocktail.jpg",
    datePublished: "2026-01-30",
    dateModified: "2026-01-30",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What sake pairs best with sushi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The best pairing depends on the sushi type. Crisp, refreshing Ginjo sake complements delicate white fish like flounder and sea bream. Fuller-bodied Junmai pairs beautifully with richer fish like salmon and tuna. Fruity, dry sakes enhance the natural umami flavors of sashimi. Nigori works well with spicy rolls, balancing heat with sweetness.",
            },
        },
        {
            "@type": "Question",
            name: "What&apos;s the difference between Junmai and Daiginjo sake?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Junmai is pure rice sake with no added alcohol, offering a full-bodied, robust flavor that pairs well with rich fish. Daiginjo is ultra-refined sake with a higher polishing rate (at least 50% of the rice is removed), creating a delicate, fruity, and elegant profile. For food pairing, Junmai complements hearty dishes while Daiginjo pairs with premium nigiri and delicate sashimi.",
            },
        },
        {
            "@type": "Question",
            name: "Does Jinbeh have a sake menu?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Jinbeh offers a premium sake selection with over 120 sake labels to choose from. Our curated collection includes Junmai, Ginjo, Daiginjo, and Nigori varieties. We offer sake tastings to help you discover your perfect pairing. Visit our menu page or ask our staff for recommendations tailored to your meal.",
            },
        },
        {
            "@type": "Question",
            name: "Should I drink hot or cold sake with sushi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Cold sake is ideal with sushi! It highlights the crisp, refreshing qualities that complement delicate fish. Serve premium sake chilled to 45-50°F to preserve its delicate flavors. Fuller-bodied sakes can be served slightly warmer if you prefer deeper flavors, but cold sake is always the traditional and recommended choice for sushi pairings.",
            },
        },
        {
            "@type": "Question",
            name: "Is the best sake to pair with sushi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The best sake for sushi depends on the sushi type. Light, fruity Ginjo works well with delicate white fish. Fuller-bodied Junmai pairs with richer fish like salmon. Spicy Nigori complements spicy rolls.",
            },
        },
        {
            "@type": "Question",
            name: "How do I pair sake with different sushi types?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Match intensity levels: light sakes with delicate fish, bold sakes with rich fish. Consider the rice: sake is rice-based, so balance the rice profiles. Balance flavors using sake to counterbalance sushi elements.",
            },
        },
        {
            "@type": "Question",
            name: "What types of sake should I try?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Popular sake types include Junmai (pure rice, full-bodied), Ginjo (premium, fruity), Daiginjo (ultra-refined, delicate), and Nigori (cloudy, sweet). Each offers unique flavor profiles.",
            },
        },
        {
            "@type": "Question",
            name: "Can sake be served cold or warm?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both! Cold sake highlights crispness and is ideal with sushi. Warm sake brings out deeper flavors. Premium sake should be served cold to appreciate the quality.",
            },
        },
    ],
};

export default function SakeSushiMenuPairings() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/10-C060324-6501.jpg"
                >
                    <source src="/videos/LOCAL-LEW-SUSHI-sashimi-carpaccio-prep-chef-hands-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/blog?category=beverages" className="hover:text-white">Beverages</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-purple-600 mb-4">
                        🍶 Sake Pairings
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Sake Sushi Menu Guide: Perfect Pairings Explored
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 30, 2026</span>
                        <span>•</span>
                        <span>10 min read</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                                        <strong>Sake and sushi are like a symphony for your taste buds.</strong> When perfectly paired,
                                        the combination creates a dining experience that transcends the individual components. The delicate
                                        flavors of premium sushi combined with the nuanced tastes of quality sake create unforgettable
                                        culinary moments.
                                    </p>

                                    <div className="bg-gradient-to-br from-purple-500/10 to-soft-gold/10 border-l-4 border-purple-600 rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "The harmonious relationship between sake and sushi is rooted in centuries of Japanese culinary
                                            tradition. When you understand the principles of pairing, you unlock a new dimension of flavor."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Understanding Sake Basics
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        To appreciate the art of sake sushi pairing, it&apos;s essential to understand the basics of sake. Sake,
                                        also known as Japanese rice wine, is crafted through a complex fermentation process that converts
                                        rice starches into alcohol. The cultural significance of sake in Japan cannot be overstated—it is
                                        not merely a drink but a symbol of hospitality and tradition.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Key Types of Sake</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Junmai</h4>
                                            <p className="text-charcoal/70 text-sm mb-3">
                                                Pure rice sake with no additional alcohol. It is full-bodied and pairs well with robust fish flavors
                                                like maguro (tuna). The rich, earthy undertones complement fatty fish beautifully.
                                            </p>
                                            <p className="text-xs text-charcoal/60"><strong>Best with:</strong> Tuna, eel, rich rolls</p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Ginjo</h4>
                                            <p className="text-charcoal/70 text-sm mb-3">
                                                A premium sake with a fruity and floral aroma, offering a delicate palate that matches perfectly
                                                with white fish and sashimi. The aromatic qualities enhance the fish's natural flavors.
                                            </p>
                                            <p className="text-xs text-charcoal/60"><strong>Best with:</strong> White fish, sashimi, delicate rolls</p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Daiginjo</h4>
                                            <p className="text-charcoal/70 text-sm mb-3">
                                                An even more refined version of Ginjo with a higher polishing rate, providing an ultra-delicate
                                                flavor profile. Its elegance pairs with the finest sushi preparations.
                                            </p>
                                            <p className="text-xs text-charcoal/60"><strong>Best with:</strong> Premium nigiri, omakase</p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Nigori</h4>
                                            <p className="text-charcoal/70 text-sm mb-3">
                                                A cloudy sake with a sweet and creamy texture, ideal for balancing spicy sushi rolls. Its
                                                richness creates a complementary contrast.
                                            </p>
                                            <p className="text-xs text-charcoal/60"><strong>Best with:</strong> Spicy rolls, tempura sushi</p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎯 The Art of Sake and Sushi Pairing
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Pairing sake with sushi involves balancing flavors and textures to complement each other. The art
                                        of pairing also involves a bit of experimentation and personal preference. While certain classic
                                        combinations are time-tested, discovering your own preferred pairings is part of the journey.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">General Pairing Tips</h3>

                                    <div className="space-y-6 my-8">
                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Match Intensity</h4>
                                            <p className="text-charcoal/70">
                                                Pair light sakes with delicate sushi flavors and rich sakes with robust fish. A delicate white
                                                fish like flounder pairs beautifully with a crisp, floral Ginjo, while a powerful tuna demands
                                                the depth of a full-bodied Junmai.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Consider the Rice</h4>
                                            <p className="text-charcoal/70">
                                                Since both sushi and sake are rice-based, finding a harmony in their textures creates a more
                                                cohesive experience. The sweetness of sushi rice balances well with the subtle sweetness
                                                of premium sake.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Balance Flavors</h4>
                                            <p className="text-charcoal/70">
                                                Use sake to counterbalance sushi flavors, such as using sweet Nigori to complement spicy rolls,
                                                or a crisp, dry sake to cleanse the palate after fatty fish.
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Acidity and Sweetness</h4>
                                            <p className="text-charcoal/70">
                                                Pay attention to the sake&apos;s acidity level. Higher acidity provides a refreshing palate cleanser
                                                between bites, while lower acidity creates a smoother drinking experience.
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 Sake Sushi Menu Recommendations
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Creating a sake sushi menu involves selecting pairings that highlight the strengths of both elements.
                                        Here are some expertly curated combinations you can enjoy at Jinbeh:
                                    </p>

                                    <div className="bg-charcoal text-white rounded-2xl p-8 my-8">
                                        <h4 className="font-heading font-bold text-xl mb-6">Classic Pairings</h4>

                                        <div className="space-y-6">
                                            <div className="pb-4 border-b border-white/20">
                                                <div className="flex items-start gap-4">
                                                    <span className="text-2xl">🍣</span>
                                                    <div>
                                                        <p className="font-semibold mb-1">Delicate White Fish (Flounder, Sea Bream)</p>
                                                        <p className="text-white/80 text-sm mb-2">Pair with: Crisp Ginjo or Daiginjo Sake</p>
                                                        <p className="text-white/70 text-xs">The floral notes of premium sake elevate the subtle sweetness of white fish.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pb-4 border-b border-white/20">
                                                <div className="flex items-start gap-4">
                                                    <span className="text-2xl">🐟</span>
                                                    <div>
                                                        <p className="font-semibold mb-1">Rich Salmon (Sake)</p>
                                                        <p className="text-white/80 text-sm mb-2">Pair with: Junmai or Yamahai Sake</p>
                                                        <p className="text-white/70 text-xs">Full-bodied sake matches the richness and buttery texture of salmon.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pb-4 border-b border-white/20">
                                                <div className="flex items-start gap-4">
                                                    <span className="text-2xl">🔴</span>
                                                    <div>
                                                        <p className="font-semibold mb-1">Powerful Tuna (Maguro)</p>
                                                        <p className="text-white/80 text-sm mb-2">Pair with: Full-bodied Junmai or Honjozo</p>
                                                        <p className="text-white/70 text-xs">The robust flavors require a sake with sufficient body and character.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-start gap-4">
                                                    <span className="text-2xl">🌶️</span>
                                                    <div>
                                                        <p className="font-semibold mb-1">Spicy Rolls</p>
                                                        <p className="text-white/80 text-sm mb-2">Pair with: Sweet Nigori or Fruity Sake</p>
                                                        <p className="text-white/70 text-xs">Sweetness and fruitiness balance the heat from spicy mayo and sriracha.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/10-C060324-6501.jpg" alt="Sake pairing" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Sushi and sake" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/12-C060324-6551.jpg" alt="Sake selection" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/14-C060324-6596.jpg" alt="Premium sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💡 Sake Tasting Tips
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Proper Glassware</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Use a traditional sake cup (ochoko) or a wine glass. A wine glass allows you to appreciate
                                                the aroma better than a traditional small cup.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Temperature Matters</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Premium sake should be chilled to 45-50°F to preserve delicate flavors. Fuller-bodied sakes can
                                                be served slightly warmer.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Aroma First</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Before tasting, take a moment to appreciate the aroma. This prepares your palate and enhances
                                                the overall tasting experience.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Cleanse Between Bites</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Sip sake between sushi bites to cleanse your palate and enhance your appreciation of each piece.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is the best sake to pair with sushi?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    The best sake for sushi depends on the sushi type. Light, fruity Ginjo works well with
                                                    delicate white fish. Fuller-bodied Junmai pairs with richer fish like salmon. Spicy Nigori
                                                    complements spicy rolls.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How do I pair sake with different sushi types?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Match intensity levels: light sakes with delicate fish, bold sakes with rich fish. Consider
                                                    the rice: sake is rice-based, so balance the rice profiles. Balance flavors using sake to
                                                    counterbalance sushi elements like spice or richness.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What types of sake should I try?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Popular sake types include Junmai (pure rice, full-bodied), Ginjo (premium, fruity), Daiginjo
                                                    (ultra-refined, delicate), and Nigori (cloudy, sweet). Each offers unique flavor profiles
                                                    and pairing potential.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can sake be served cold or warm?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Both! Cold sake highlights crispness and is ideal with sushi. Warm sake brings out deeper
                                                    flavors. Premium sake should be served cold to appreciate the quality. It&apos;s a celebration!
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can I pair sake with Jinbeh&apos;s hibachi menu?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Welcome to the table! Absolutely. Our hibachi meats and cooked dishes pair beautifully with sake. Our staff can guide you through perfect pairings. Fresh and flavorful combinations every time!
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What sake pairs best with sushi?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    The best pairing depends on the sushi type. Crisp, refreshing Ginjo sake complements delicate white fish like flounder and sea bream. Fuller-bodied Junmai pairs beautifully with richer fish like salmon and tuna. Fruity, dry sakes enhance the natural umami flavors of sashimi. Nigori works well with spicy rolls, balancing heat with sweetness.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What&apos;s the difference between Junmai and Daiginjo sake?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Junmai is pure rice sake with no added alcohol, offering a full-bodied, robust flavor that pairs well with rich fish. Daiginjo is ultra-refined sake with a higher polishing rate (at least 50% of the rice is removed), creating a delicate, fruity, and elegant profile. For food pairing, Junmai complements hearty dishes while Daiginjo pairs with premium nigiri and delicate sashimi.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Does Jinbeh have a sake menu?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Yes! Jinbeh offers a premium sake selection with over 120 sake labels to choose from. Our curated collection includes Junmai, Ginjo, Daiginjo, and Nigori varieties. We offer sake tastings to help you discover your perfect pairing. Visit our menu page or ask our staff for recommendations tailored to your meal.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Should I drink hot or cold sake with sushi?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Cold sake is ideal with sushi! It highlights the crisp, refreshing qualities that complement delicate fish. Serve premium sake chilled to 45-50°F to preserve its delicate flavors. Fuller-bodied sakes can be served slightly warmer if you prefer deeper flavors, but cold sake is always the traditional and recommended choice for sushi pairings.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                <RelatedArticles currentSlug="sake-sushi-menu-pairings" />

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-purple-600 to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍶 Explore Sake Pairings at Jinbeh</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Visit Jinbeh to experience expertly curated sake and sushi pairings. Our sommeliers can recommend
                                        the perfect sake to complement your meal.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/frisco/menu" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            View Menu & Sake Selection
                                        </Link>
                                        <Link href="/frisco#reserve" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            Reserve Your Table
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="text-lg font-heading font-bold text-charcoal mb-6">Related Articles</h3>
                                <div className="space-y-4">
                                    <Link href="/blog/sake-pairing-guide" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/10-C060324-6501.jpg" alt="Sake pairing" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-purple-600">🍶 Beverages</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Sake Pairing Guide</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/types-of-sake-explained" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Sake types" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">🍶 Guide</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Types of Sake Explained</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/best-sushi-frisco" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/12-C060324-6551.jpg" alt="Best sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-orange-500">📍 Locations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Sushi in Frisco</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=beverages" className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-600">🍶 Beverages</Link>
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">🍣 Cuisine</Link>
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">📖 Guides</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
