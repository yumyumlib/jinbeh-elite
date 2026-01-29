import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Sushi Frisco TX: Top Spots to Savor Fresh Flavors | Jinbeh",
    description:
        "Discover the best sushi in Frisco TX! From Jinbeh's authentic rolls to hidden gems near Stonebriar. Fresh fish, expert chefs, unforgettable dining. Reserve today!",
    keywords: [
        "best sushi frisco",
        "sushi frisco tx",
        "sushi near stonebriar",
        "japanese restaurant frisco",
        "sushi frisco texas",
    ],
    openGraph: {
        title: "Best Sushi Frisco TX: Fresh Flavors & Top Spots",
        description:
            "Your guide to Frisco's best sushi restaurants. Fresh fish, expert rolls, and the authentic Japanese experience at Jinbeh.",
        images: ["/images/blog/7-C060324-6447.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Sushi Frisco TX: Top Spots to Savor Fresh Flavors",
    description:
        "Comprehensive guide to the best sushi restaurants in Frisco, Texas.",
    image: "https://jinbeh.com/images/blog/7-C060324-6447.jpg",
    datePublished: "2026-01-16",
    dateModified: "2026-01-29",
    author: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best sushi restaurant in Frisco?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh is consistently rated among the best sushi restaurants in Frisco, with 4.7 stars on Google and nearly four decades of serving authentic Japanese cuisine. Located near Stonebriar Centre, we're known for fresh fish, expert knife work, and a welcoming atmosphere.",
            },
        },
        {
            "@type": "Question",
            name: "Does Jinbeh have sushi happy hour?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Jinbeh offers happy hour specials including discounted sushi rolls, sake, and appetizers. Check our happy hour page for current times and deals at both Frisco and Lewisville locations.",
            },
        },
        {
            "@type": "Question",
            name: "Is Jinbeh good for kids?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! Families love Jinbeh. Our hibachi tables are especially popular with kids who enjoy watching the chef show. For sushi-bar seating, we have a kids menu with familiar favorites alongside adventurous options for budding sushi lovers.",
            },
        },
    ],
};

export default function BestSushiFrisco() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/7-C060324-6447.jpg"
                    alt="Fresh sushi platter at Jinbeh Frisco"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/blog?category=locations" className="hover:text-white">Locations</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        📍 Locations
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Best Sushi Frisco TX: Your Guide to Fresh Flavors
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 16, 2026</span>
                        <span>•</span>
                        <span>7 min read</span>
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
                                        <strong>Looking for the best sushi in Frisco?</strong> You're in the right place.
                                        Frisco, Texas has quietly become one of DFW's hottest sushi destinations—and
                                        whether you're craving classic nigiri, creative specialty rolls, or a full
                                        omakase experience, this guide has you covered.
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Fresh fish. Expert hands. Warm hospitality. At Jinbeh, we've been
                                            crafting sushi in Frisco since 1988—long before the sushi boom hit
                                            North Texas. Our secret? We never compromise on quality."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 What Makes Frisco's Sushi Scene Special
                                    </h2>

                                    <p>
                                        Frisco isn't just a suburb—it's a culinary hotspot. With a mix of long-established
                                        family restaurants and trendy newcomers, the sushi scene here rivals Dallas proper.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🐟</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Fresh Fish Daily</h3>
                                            <p className="text-charcoal/70 text-sm">Top restaurants source from trusted suppliers with daily deliveries</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">👨‍🍳</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Expert Chefs</h3>
                                            <p className="text-charcoal/70 text-sm">Trained sushi chefs with decades of combined experience</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🎌</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Authentic Traditions</h3>
                                            <p className="text-charcoal/70 text-sm">Many spots honor Japanese techniques and hospitality</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">✨</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Creative Innovation</h3>
                                            <p className="text-charcoal/70 text-sm">Unique signature rolls you won't find anywhere else</p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🏆 Top Sushi Restaurants in Frisco
                                    </h2>
                                </div>

                                {/* Restaurant Comparison Table */}
                                <div className="overflow-x-auto my-8">
                                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                        <thead className="bg-charcoal text-white">
                                            <tr>
                                                <th className="p-4 text-left font-heading">Restaurant</th>
                                                <th className="p-4 text-left font-heading">Best For</th>
                                                <th className="p-4 text-left font-heading">Price</th>
                                                <th className="p-4 text-left font-heading">Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-charcoal/80">
                                            <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                <td className="p-4 font-semibold text-charcoal">⭐ Jinbeh</td>
                                                <td className="p-4">Authentic experience, hibachi + sushi</td>
                                                <td className="p-4">$$</td>
                                                <td className="p-4">4.7 ⭐</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Umiya</td>
                                                <td className="p-4">Fusion rolls, trendy vibes</td>
                                                <td className="p-4">$$</td>
                                                <td className="p-4">4.4 ⭐</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Sakura Sushi</td>
                                                <td className="p-4">Sake selection, creative rolls</td>
                                                <td className="p-4">$$</td>
                                                <td className="p-4">4.3 ⭐</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Shoji</td>
                                                <td className="p-4">Family-friendly, hibachi shows</td>
                                                <td className="p-4">$$</td>
                                                <td className="p-4">4.2 ⭐</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-semibold text-charcoal">Edoko</td>
                                                <td className="p-4">Robata grill + sushi</td>
                                                <td className="p-4">$$$</td>
                                                <td className="p-4">4.3 ⭐</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Jinbeh Feature Section */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/blog/11-C060324-6544.jpg"
                                                alt="Jinbeh sushi chef"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                🏯 Jinbeh: The Authentic Choice
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                Since 1988, Jinbeh has been serving Frisco families with the same commitment:
                                                fresh ingredients, skilled craftsmanship, and genuine hospitality. Our sushi bar
                                                features classic nigiri alongside signature rolls like our famous Dragon Roll.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>4.7 stars on Google (1000+ reviews)</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Fresh fish delivered daily</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Hibachi + sushi bar under one roof</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Happy hour deals available</span>
                                                </li>
                                            </ul>
                                            <Link
                                                href="/frisco#reserve"
                                                className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                                            >
                                                Reserve Your Table →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📍 Where to Find Great Sushi Near Stonebriar
                                    </h2>

                                    <p>
                                        If you're shopping at Stonebriar Centre, Jinbeh is just minutes away on Preston Road.
                                        It's the perfect spot for a sushi lunch break or a celebratory dinner after a day of retail therapy.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Popular Sushi Rolls to Try
                                    </h3>

                                    <ul className="space-y-2">
                                        <li><strong>Dragon Roll</strong> — Eel, cucumber, avocado, and unagi sauce</li>
                                        <li><strong>Rainbow Roll</strong> — California roll topped with assorted sashimi</li>
                                        <li><strong>Spicy Tuna Roll</strong> — A classic crowd-pleaser</li>
                                        <li><strong>Jinbeh Special</strong> — Our signature creation (ask your server!)</li>
                                    </ul>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">
                                        ❓ Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is the best sushi restaurant in Frisco?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    <strong>Jinbeh</strong> is consistently rated among the best sushi restaurants in Frisco,
                                                    with 4.7 stars on Google and nearly four decades of serving authentic Japanese cuisine.
                                                    Located near Stonebriar Centre, we're known for fresh fish, expert knife work, and a
                                                    welcoming atmosphere.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Does Jinbeh have sushi happy hour?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Yes! Jinbeh offers <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour specials</Link> including
                                                    discounted sushi rolls, sake, and appetizers. Check our happy hour page for current times and deals.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Is Jinbeh good for families with kids?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Absolutely! Families love Jinbeh. Our hibachi tables are especially popular with kids
                                                    who enjoy watching the chef show. We also have a kids menu with familiar favorites
                                                    alongside adventurous options for budding sushi lovers.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can I order sushi for takeout or delivery?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Yes! Jinbeh offers takeout and delivery through GrubHub and UberEats.
                                                    You can also call ahead to place a pickup order directly with us.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-deep-indigo to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                                        🍣 Ready to Taste the Best Sushi in Frisco?
                                    </h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Experience why Frisco locals have trusted Jinbeh since 1988. Reserve your table today.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/frisco#reserve"
                                            className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                                        >
                                            Reserve at Frisco
                                        </Link>
                                        <Link
                                            href="/frisco/menu"
                                            className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg"
                                        >
                                            View Sushi Menu
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
                                    <Link href="/blog/types-of-sushi" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/12-C060324-6551.jpg" alt="Sushi types" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">🍣 Cuisine</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Types of Sushi: Must-Try Varieties</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/best-sushi-dallas" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/8-C060324-6462.jpg" alt="Sushi Dallas" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">📍 Locations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Sushi Dallas: Top Spots</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/best-happy-hour-frisco-tx" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/10-C060324-6501.jpg" alt="Happy hour" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-accent-red">✨ Tips & Guides</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Happy Hour Frisco TX</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=locations" className="px-3 py-1 rounded-full text-sm font-medium bg-deep-indigo/10 text-deep-indigo hover:bg-deep-indigo/20 transition-colors">📍 Locations</Link>
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal transition-colors">🍣 Cuisine</Link>
                                        <Link href="/blog?category=tips-guides" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal transition-colors">✨ Tips</Link>
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
