import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Hibachi Dallas TX: Top Restaurants & Experiences | Jinbeh",
    description:
        "Find the best hibachi in Dallas TX! Teppanyaki grill shows, fresh ingredients, and unforgettable dining. Discover Jinbeh's authentic hibachi experience.",
    keywords: [
        "best hibachi dallas",
        "hibachi dallas tx",
        "teppanyaki dallas",
        "hibachi near me dallas",
        "japanese steakhouse dallas",
    ],
    openGraph: {
        title: "Best Hibachi Dallas TX: Top Restaurants & Experiences",
        description: "Your guide to the best hibachi restaurants in Dallas-Fort Worth.",
        images: ["/images/blog/1-C060324-6328.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Hibachi Dallas TX: Top Restaurants & Experiences",
    description: "Comprehensive guide to the best hibachi and teppanyaki dining in Dallas-Fort Worth.",
    image: "https://jinbeh.com/images/blog/1-C060324-6328.jpg",
    datePublished: "2026-01-15",
    dateModified: "2026-01-29",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between hibachi and teppanyaki?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In America, the terms are often used interchangeably, but technically hibachi refers to a small charcoal grill, while teppanyaki means cooking on a flat iron griddle. What most people call 'hibachi' in restaurants is actually teppanyaki-style cooking with the chef performing at your table.",
            },
        },
        {
            "@type": "Question",
            name: "How much does hibachi cost in Dallas?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Hibachi dinners in Dallas typically range from $20-45 per person, depending on the protein selection. At Jinbeh, our hibachi entrees include soup, salad, vegetables, fried rice, and the entertaining chef show—all for great value.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need reservations for hibachi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We highly recommend reservations for hibachi dining, especially on weekends and for groups. At Jinbeh, you can make reservations online through OpenTable or by calling our Frisco or Lewisville locations directly.",
            },
        },
    ],
};

export default function BestHibachiDallas() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero with Video */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/1-C060324-6328.jpg"
                >
                    <source src="/videos/LOCAL-FRI-HIBACHI-chef-cooking-fire-family-01.mp4" type="video/mp4" />
                </video>
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
                        Best Hibachi Dallas TX: The Ultimate Experience Guide
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 15, 2026</span>
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
                                        <strong>Craving hibachi in Dallas?</strong> You're not alone. There's something
                                        magical about watching a skilled chef transform raw ingredients into a sizzling
                                        feast right before your eyes—complete with flying shrimp, flaming onion volcanoes,
                                        and precision knife work that's half cooking, half performance art.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "At Jinbeh, we've been putting on the hibachi show since 1988.
                                            But it's never just about the tricks—it's about bringing people together
                                            around good food and great entertainment. That's the Jinbeh way."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🔥 What Makes Great Hibachi
                                    </h2>

                                    <p>
                                        Not all hibachi restaurants are created equal. The best spots nail three things:
                                        <strong>fresh ingredients</strong>, <strong>skilled chefs</strong>, and
                                        <strong>the right atmosphere</strong>.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                                        <div className="bg-gradient-to-br from-accent-red to-orange-500 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                                            <span className="text-4xl mb-3 block">🔥</span>
                                            <h3 className="font-heading font-bold text-lg mb-2">The Show</h3>
                                            <p className="text-sm text-white/90">Knife tricks, fire, flying food</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-deep-indigo to-blue-500 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                                            <span className="text-4xl mb-3 block">🥩</span>
                                            <h3 className="font-heading font-bold text-lg mb-2">Fresh Cuts</h3>
                                            <p className="text-sm text-white/90">Quality steak, shrimp, chicken</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-soft-gold to-amber-500 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                                            <span className="text-4xl mb-3 block">👨‍👩‍👧‍👦</span>
                                            <h3 className="font-heading font-bold text-lg mb-2">Community</h3>
                                            <p className="text-sm text-white/90">Shared tables, shared memories</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div className="overflow-x-auto my-8">
                                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                        <thead className="bg-charcoal text-white">
                                            <tr>
                                                <th className="p-4 text-left font-heading">Restaurant</th>
                                                <th className="p-4 text-left font-heading">Location</th>
                                                <th className="p-4 text-left font-heading">Best For</th>
                                                <th className="p-4 text-left font-heading">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-charcoal/80">
                                            <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                <td className="p-4 font-semibold text-charcoal">⭐ Jinbeh Frisco</td>
                                                <td className="p-4">Frisco (near Stonebriar)</td>
                                                <td className="p-4">Authentic experience, families</td>
                                                <td className="p-4">$$</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                <td className="p-4 font-semibold text-charcoal">⭐ Jinbeh Lewisville</td>
                                                <td className="p-4">Lewisville (off I-35E)</td>
                                                <td className="p-4">Groups, celebrations</td>
                                                <td className="p-4">$$</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Benihana</td>
                                                <td className="p-4">Dallas, Plano</td>
                                                <td className="p-4">Chain reliability</td>
                                                <td className="p-4">$$$</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Kobe Steakhouse</td>
                                                <td className="p-4">Various locations</td>
                                                <td className="p-4">Large groups</td>
                                                <td className="p-4">$$</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-semibold text-charcoal">Teppo</td>
                                                <td className="p-4">Dallas Greenville</td>
                                                <td className="p-4">Robatayaki style</td>
                                                <td className="p-4">$$$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Image Gallery */}
                                <div className="my-12">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="relative aspect-square rounded-2xl overflow-hidden group">
                                            <Image src="/images/blog/3-C060324-6364.jpg" alt="Hibachi chef" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="relative aspect-square rounded-2xl overflow-hidden group">
                                            <Image src="/images/blog/4-C060324-6380.jpg" alt="Hibachi flames" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="relative aspect-square rounded-2xl overflow-hidden group">
                                            <Image src="/images/blog/5-C060324-6397.jpg" alt="Hibachi dining" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🏯 Why Jinbeh is Different
                                    </h2>

                                    <p>
                                        Big chains have their place, but there's something special about a family-owned
                                        restaurant that's been perfecting their craft for nearly four decades.
                                    </p>

                                    <ul className="space-y-2">
                                        <li><strong>Family-owned since 1988</strong> — We're not a franchise. Every meal is personal.</li>
                                        <li><strong>Two convenient DFW locations</strong> — Frisco (near Stonebriar) and Lewisville (off I-35E)</li>
                                        <li><strong>Hibachi + Sushi under one roof</strong> — Can't decide? Get both.</li>
                                        <li><strong>Perfect for celebrations</strong> — Birthdays, anniversaries, team dinners</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍽️ What to Expect at Hibachi Dinner
                                    </h2>

                                    <p>
                                        First-time hibachi guest? Here's the rundown. You'll sit around a large teppanyaki
                                        grill with other diners (or your own group if you reserve enough seats). Your chef
                                        arrives, introduces themselves, and the show begins.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🥢 Typical Hibachi Dinner Includes:</h3>
                                        <ul className="grid grid-cols-2 gap-2 text-charcoal/80">
                                            <li>✓ Soup (miso or onion)</li>
                                            <li>✓ House salad</li>
                                            <li>✓ Your choice of protein</li>
                                            <li>✓ Grilled vegetables</li>
                                            <li>✓ Fried rice</li>
                                            <li>✓ Chef entertainment</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is the difference between hibachi and teppanyaki?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    In America, the terms are often used interchangeably, but technically <strong>hibachi</strong> refers
                                                    to a small charcoal grill, while <strong>teppanyaki</strong> means cooking on a flat iron griddle.
                                                    What most people call "hibachi" in restaurants is actually teppanyaki-style cooking with
                                                    the chef performing at your table.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How much does hibachi cost in Dallas?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Hibachi dinners in Dallas typically range from <strong>$20-45 per person</strong>, depending
                                                    on the protein selection. At Jinbeh, our hibachi entrees include soup, salad, vegetables,
                                                    fried rice, and the entertaining chef show—all for great value.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Do I need reservations for hibachi?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    We <strong>highly recommend reservations</strong> for hibachi dining, especially on weekends
                                                    and for groups. At Jinbeh, you can make reservations online through OpenTable or by calling
                                                    our <Link href="/frisco" className="text-accent-red hover:underline">Frisco</Link> or
                                                    <Link href="/lewisville" className="text-accent-red hover:underline"> Lewisville</Link> locations directly.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🔥 Ready for the Best Hibachi in Dallas?</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Skip the chains. Experience authentic hibachi at Jinbeh—where family tradition meets unforgettable entertainment.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/frisco#reserve" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Reserve at Frisco
                                        </Link>
                                        <Link href="/lewisville#reserve" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg">
                                            Reserve at Lewisville
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
                                    <Link href="/blog/hibachi-birthday-party-ideas" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/22-C060324-6829.jpg" alt="Birthday" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-accent-red">🎉 Celebrations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Hibachi Birthday Party Ideas</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/discover-teppanyaki" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/3-C060324-6364.jpg" alt="Teppanyaki" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">🍣 Cuisine</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Discover Teppanyaki: A Culinary Art</h4>
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
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=locations" className="px-3 py-1 rounded-full text-sm font-medium bg-deep-indigo/10 text-deep-indigo">📍 Locations</Link>
                                        <Link href="/blog?category=celebrations" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">🎉 Celebrations</Link>
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">🍣 Cuisine</Link>
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
