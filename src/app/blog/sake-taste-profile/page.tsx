import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Sake Taste & Flavor Profile | Complete Tasting Guide",
    description:
        "Explore the complex flavors and taste profile of sake. Learn about flavor elements, tasting techniques, and how to appreciate Japanese rice wine.",
    keywords: [
        "sake taste",
        "sake flavor profile",
        "what does sake taste like",
        "sake tasting notes",
        "sake flavors",
        "sake tasting guide",
        "Japanese sake flavors",
    ],
    openGraph: {
        title: "Sake Taste & Flavor Profile | Complete Guide",
        description: "Discover the complex flavors of sake with our comprehensive tasting guide.",
        images: ["/images/beverages/JinbehPunch.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sake Taste: Explore its Complex Flavors",
    description: "Comprehensive guide to understanding sake taste, flavor profiles, and tasting techniques.",
    image: "https://jinbeh.com/images/beverages/JinbehPunch.jpg",
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
            name: "What does sake taste like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sake has a complex taste profile with five basic taste elements: sweetness, acidity, bitterness, astringency, and umami. The specific taste varies by type, ranging from fruity and floral to earthy and robust.",
            },
        },
        {
            "@type": "Question",
            name: "Is sake sweet or dry?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sake can be both sweet and dry depending on the type. Premium Ginjo tends to be dry with fruity notes, while Nigori is sweeter and creamier. The residual sugar content determines sweetness levels.",
            },
        },
        {
            "@type": "Question",
            name: "How should I taste sake properly?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Start with visual inspection, then smell the aroma. Take a small sip and let it sit on your tongue to experience the layers of flavor. Pay attention to the initial taste, mid-palate, and finish.",
            },
        },
        {
            "@type": "Question",
            name: "What are common flavor notes in sake?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Common flavor notes include melon, apple, pear, citrus, floral, herbs, rice, and nuts. More complex sakes may have earthy, spicy, or umami characteristics.",
            },
        },
    ],
};

export default function SakeTasteProfile() {
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

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        🍶 Sake Guide
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Sake Taste: Explore its Complex Flavors
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 30, 2026</span>
                        <span>•</span>
                        <span>8 min read</span>
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
                                        <strong>Sake is often surrounded by mystery and intrigue,</strong> especially for those new to
                                        Japanese beverages. When people ask "Does sake taste good?" or "What does sake taste like?" they are
                                        often surprised to learn that sake has a complex, nuanced flavor profile far beyond simple sweetness
                                        or alcohol burn. Let's explore the fascinating world of sake flavors.
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Sake is like a symphony of flavors. Each sip reveals different taste elements, from fruity and
                                            floral notes to earthy undertones. Learning to appreciate sake is a journey of discovery."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 The Basic Taste Elements of Sake
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Sake is composed of five basic taste elements that work together to create its overall flavor profile:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🍬 Sweetness</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Derived from the residual sugar remaining after fermentation. Premium sake often has subtle sweetness,
                                                while Nigori sake exhibits more pronounced sweetness and creaminess.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🍋 Acidity</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Adds a refreshing quality to sake and balances sweetness. Higher acidity creates a crisper, more
                                                palate-cleansing effect, while lower acidity results in a smoother drinking experience.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🖤 Bitterness</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Often subtle, it adds depth and complexity to the flavor profile. Quality sake has balanced bitterness
                                                that doesn't overpower other taste elements.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">✨ Astringency</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Provides a clean, dry finish that lingers on the palate. This characteristic comes from tannins and
                                                amino acids in the sake.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 md:col-span-2">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🍲 Umami</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                A savory taste that enhances the richness of sake. This fifth basic taste creates a satisfying,
                                                mouth-filling sensation that elevates the overall drinking experience.
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        👃 The Sake Tasting Experience
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        The sake tasting experience is not just about sipping the beverage. It involves using all your senses
                                        to fully appreciate the complexity and craftsmanship behind this traditional Japanese drink.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Visual Inspection</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Start by observing the sake. Pour it into a clear glass and hold it up to the light. Notice the color,
                                        which can range from crystal clear to pale gold. Check for clarity and luminosity. Premium sake should be
                                        transparent and bright. The color can provide clues about aging and brewing methods.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Aroma Assessment</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Before tasting, take a moment to smell the sake. Swirl it gently in the glass to release aromatic compounds.
                                        Notice the initial aroma and how it evolves. Common aroma notes include melon, apple, pear, flowers, herbs,
                                        and rice. Premium sake often reveals multiple layers of aroma.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Tasting Technique</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Take a small sip and let it sit on your tongue. Pay attention to the initial taste, the mid-palate
                                        experience, and the finish. Notice how the flavors evolve as the sake warms slightly in your mouth.
                                        Swallow slowly and observe the lingering aftertaste.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎨 Flavor Profiles by Sake Type
                                    </h2>

                                    <div className="space-y-6 my-8">
                                        <div className="border-l-4 border-soft-gold pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Junmai (Pure Rice)</h4>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Taste Profile:</strong> Full-bodied, earthy, with pronounced rice character
                                            </p>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Common Notes:</strong> Herbs, earth, rice, sometimes with subtle sweet undertones
                                            </p>
                                            <p className="text-charcoal/70">
                                                <strong>Best For:</strong> Rich foods, hearty <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-deep-indigo hover:text-accent-red underline transition-colors">hibachi dishes</Link>, and those who prefer robust flavors
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-soft-gold pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Ginjo (Premium)</h4>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Taste Profile:</strong> Delicate, fruity, floral with bright acidity
                                            </p>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Common Notes:</strong> Melon, apple, pear, flowers, citrus, sometimes tropical fruits
                                            </p>
                                            <p className="text-charcoal/70">
                                                <strong>Best For:</strong> Delicate white fish, <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red underline transition-colors">sashimi</Link>, and refined palates
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-soft-gold pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Daiginjo (Ultra-Premium)</h4>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Taste Profile:</strong> Ultra-delicate, elegant, with complex aromatics
                                            </p>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Common Notes:</strong> Refined fruit, floral, sometimes mineral or herbal undertones
                                            </p>
                                            <p className="text-charcoal/70">
                                                <strong>Best For:</strong> Sipping on its own, premium nigiri, special occasions
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-soft-gold pl-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Nigori (Cloudy)</h4>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Taste Profile:</strong> Sweet, creamy, with thicker mouthfeel
                                            </p>
                                            <p className="text-charcoal/70 mb-2">
                                                <strong>Common Notes:</strong> Sweet rice, cream, sometimes tropical fruits or honey
                                            </p>
                                            <p className="text-charcoal/70">
                                                <strong>Best For:</strong> Spicy dishes, desserts, and those who prefer sweeter beverages
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/10-C060324-6501.jpg" alt="Sake tasting" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Sake glass" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/12-C060324-6551.jpg" alt="Sake varieties" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/14-C060324-6596.jpg" alt="Japanese beverage" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💡 Tips for Appreciating Sake
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🌡️ Temperature Matters</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Serve premium sake chilled (45-50°F) to preserve delicate flavors. Fuller-bodied sakes can be served
                                                slightly warmer (55-65°F) to highlight earthy characteristics.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🥃 Use Proper Glassware</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                A wine glass or tasting glass is ideal for appreciating aroma and flavor. Avoid traditional sake cups
                                                for premium sakes, as they don't allow proper aroma appreciation.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🍚 Pair with Food</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Sake truly shines when paired with complementary foods. Try different sake types with various <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red underline transition-colors">sushi</Link>
                                                and Japanese dishes to discover your favorite combinations.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">📚 Keep Notes</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Write down your observations of aroma, taste, and finish. This helps develop your palate and identifies
                                                your personal preferences.
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
                                                What does sake taste like?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Sake has a complex taste profile with five basic taste elements: sweetness, acidity, bitterness,
                                                    astringency, and umami. The specific taste varies by type, ranging from fruity and floral to earthy
                                                    and robust.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Is sake sweet or dry?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Sake can be both sweet and dry depending on the type. Premium Ginjo tends to be dry with fruity notes,
                                                    while Nigori is sweeter and creamier. The residual sugar content determines sweetness levels.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How should I taste sake properly?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Start with visual inspection, then smell the aroma. Take a small sip and let it sit on your tongue
                                                    to experience the layers of flavor. Pay attention to the initial taste, mid-palate, and finish.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What are common flavor notes in sake?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Common flavor notes include melon, apple, pear, citrus, floral, herbs, rice, and nuts. More complex
                                                    sakes may have earthy, spicy, or umami characteristics.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Where can I taste sake flights in Dallas?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Welcome to the table! Try our sake flights at Jinbeh to discover your preferences. Our staff explains each one. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 to reserve your tasting experience.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-deep-indigo to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍶 Taste Exceptional Sake at Jinbeh</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Visit Jinbeh to experience a curated selection of premium sakes paired with our exceptional <Link href="/blog/types-of-sushi" className="text-white hover:text-soft-gold underline transition-colors">sushi</Link> and Japanese cuisine.
                                        Let our sommeliers guide you through the world of sake flavors.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/menu" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            View Our Menu & Sake List
                                        </Link>
                                        <Link href="/reservations" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            Make a Reservation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="sake-taste-profile" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
