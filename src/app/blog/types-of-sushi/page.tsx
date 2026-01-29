import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Types of Sushi: Must-Try Varieties & Rolls Guide | Jinbeh",
    description:
        "Explore different types of sushi from nigiri to specialty rolls. Learn what makes each style unique and discover your new favorite at Jinbeh.",
    keywords: [
        "types of sushi",
        "sushi varieties",
        "sushi rolls",
        "nigiri vs sashimi",
        "sushi guide",
    ],
    openGraph: {
        title: "Types of Sushi: Must-Try Varieties & Rolls",
        description: "Your complete guide to sushi types, from traditional to modern rolls.",
        images: ["/images/blog/12-C060324-6551.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Types of Sushi: Must-Try Varieties & Rolls Guide",
    description: "Comprehensive guide to different types of sushi, their origins, and how to enjoy them.",
    image: "https://jinbeh.com/images/blog/12-C060324-6551.jpg",
    datePublished: "2026-01-18",
    dateModified: "2026-01-29",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between nigiri and sashimi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Nigiri is a slice of raw fish placed on top of a small mound of seasoned rice, while sashimi is just the raw fish without any rice. Both showcase the quality of the fish, but nigiri offers the added texture and flavor of the rice.",
            },
        },
        {
            "@type": "Question",
            name: "What sushi is best for beginners?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We recommend starting with cooked rolls like the California Roll (crab, avocado, cucumber), Shrimp Tempura Roll, or the Philadelphia Roll (smoked salmon, cream cheese). These are milder in flavor and help newcomers ease into sushi.",
            },
        },
        {
            "@type": "Question",
            name: "What is the most popular sushi roll?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The California Roll is the most popular sushi roll in America. At Jinbeh, our Dragon Roll (eel, avocado, unagi sauce) and Spicy Tuna Roll are also customer favorites.",
            },
        },
    ],
};

export default function TypesOfSushi() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/12-C060324-6551.jpg"
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
                        <Link href="/blog?category=cuisine" className="hover:text-white">Cuisine</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-orange-500 mb-4">
                        🍣 Cuisine
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Types of Sushi: Your Complete Guide
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 18, 2026</span>
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
                                        <strong>Sushi confused?</strong> You're not alone. Between nigiri, sashimi, maki,
                                        and specialty rolls, the sushi menu can feel like reading a foreign language.
                                        Let's break it down so you can order like a pro—and discover new favorites along the way.
                                    </p>

                                    <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Every sushi order at Jinbeh starts with fresh fish and ends with a smile.
                                            Whether you're trying nigiri for the first time or you're a seasoned omakase
                                            enthusiast, we're here to guide your journey."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍱 The Main Types of Sushi
                                    </h2>
                                </div>

                                {/* Sushi Types Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                    <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl">🍣</span>
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Nigiri</h3>
                                                <p className="text-charcoal/70 text-sm">
                                                    A slice of raw fish draped over a small mound of seasoned rice.
                                                    Simple, elegant, and all about the fish quality.
                                                </p>
                                                <p className="text-xs text-accent-red mt-2">Popular: Salmon, Tuna, Yellowtail</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl">🐟</span>
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Sashimi</h3>
                                                <p className="text-charcoal/70 text-sm">
                                                    Pure, pristine slices of raw fish—no rice involved.
                                                    The ultimate test of fish freshness and chef skill.
                                                </p>
                                                <p className="text-xs text-accent-red mt-2">Popular: Salmon, Tuna, Scallop</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl">🍙</span>
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Maki (Rolls)</h3>
                                                <p className="text-charcoal/70 text-sm">
                                                    Rice and fillings wrapped in seaweed (nori). Can be thin (hosomaki)
                                                    or thick (futomaki).
                                                </p>
                                                <p className="text-xs text-accent-red mt-2">Popular: Spicy Tuna, Cucumber</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl">🌀</span>
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Uramaki (Inside-Out)</h3>
                                                <p className="text-charcoal/70 text-sm">
                                                    Rice on the outside, seaweed on the inside.
                                                    American invention that birthed the California Roll.
                                                </p>
                                                <p className="text-xs text-accent-red mt-2">Popular: California, Dragon, Rainbow</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl">🔥</span>
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Specialty Rolls</h3>
                                                <p className="text-charcoal/70 text-sm">
                                                    Creative, often chef-inspired rolls with multiple ingredients,
                                                    sauces, and sometimes torched or baked tops.
                                                </p>
                                                <p className="text-xs text-accent-red mt-2">Popular: Dragon Roll, Volcano Roll</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl">🥢</span>
                                            <div>
                                                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Temaki (Hand Roll)</h3>
                                                <p className="text-charcoal/70 text-sm">
                                                    Cone-shaped seaweed filled with rice, fish, and vegetables.
                                                    Best eaten immediately before the nori gets soft.
                                                </p>
                                                <p className="text-xs text-accent-red mt-2">Popular: Spicy Tuna Hand Roll</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                        <thead className="bg-charcoal text-white">
                                            <tr>
                                                <th className="p-4 text-left font-heading">Type</th>
                                                <th className="p-4 text-left font-heading">Best For</th>
                                                <th className="p-4 text-left font-heading">Rice?</th>
                                                <th className="p-4 text-left font-heading">Skill Level</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-charcoal/80">
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold">Nigiri</td>
                                                <td className="p-4">Experiencing pure fish flavor</td>
                                                <td className="p-4">Yes</td>
                                                <td className="p-4">⭐⭐⭐ Adventurous</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory bg-warm-ivory/30">
                                                <td className="p-4 font-semibold">Sashimi</td>
                                                <td className="p-4">Low-carb, fish purists</td>
                                                <td className="p-4">No</td>
                                                <td className="p-4">⭐⭐⭐ Adventurous</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold">Maki Rolls</td>
                                                <td className="p-4">Classic sushi experience</td>
                                                <td className="p-4">Yes</td>
                                                <td className="p-4">⭐⭐ Intermediate</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory bg-warm-ivory/30">
                                                <td className="p-4 font-semibold">Specialty Rolls</td>
                                                <td className="p-4">Flavor exploration, sharing</td>
                                                <td className="p-4">Yes</td>
                                                <td className="p-4">⭐ Beginner-friendly</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-semibold">Hand Rolls</td>
                                                <td className="p-4">Quick, casual eating</td>
                                                <td className="p-4">Yes</td>
                                                <td className="p-4">⭐ Beginner-friendly</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Image Gallery */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                                        <Image src="/images/blog/7-C060324-6447.jpg" alt="Sushi platter" fill className="object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                                        <Image src="/images/blog/11-C060324-6544.jpg" alt="Sushi chef" fill className="object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                                        <Image src="/images/blog/13-C060324-6582.jpg" alt="Sushi roll" fill className="object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                                        <Image src="/images/blog/14-C060324-6596.jpg" alt="Sashimi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🌟 Jinbeh's Most Popular Rolls
                                    </h2>

                                    <div className="bg-gradient-to-r from-charcoal to-deep-indigo rounded-2xl p-8 text-white my-8">
                                        <h3 className="font-heading font-bold text-xl mb-6">Customer Favorites:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🐉</span>
                                                <div>
                                                    <span className="font-semibold">Dragon Roll</span>
                                                    <p className="text-sm text-white/70">Eel, cucumber, avocado, unagi sauce</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🌈</span>
                                                <div>
                                                    <span className="font-semibold">Rainbow Roll</span>
                                                    <p className="text-sm text-white/70">California roll topped with assorted sashimi</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🌋</span>
                                                <div>
                                                    <span className="font-semibold">Volcano Roll</span>
                                                    <p className="text-sm text-white/70">Baked spicy crab on California roll</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🔥</span>
                                                <div>
                                                    <span className="font-semibold">Spicy Tuna Roll</span>
                                                    <p className="text-sm text-white/70">Fresh tuna with spicy mayo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is the difference between nigiri and sashimi?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    <strong>Nigiri</strong> is a slice of raw fish placed on top of a small mound of seasoned rice,
                                                    while <strong>sashimi</strong> is just the raw fish without any rice. Both showcase the quality
                                                    of the fish, but nigiri offers the added texture and flavor of the rice.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What sushi is best for beginners?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    We recommend starting with <strong>cooked rolls</strong> like the California Roll,
                                                    Shrimp Tempura Roll, or Philadelphia Roll. These are milder in flavor and help
                                                    newcomers ease into sushi before trying raw fish.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is the most popular sushi roll?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    The <strong>California Roll</strong> is the most popular sushi roll in America.
                                                    At Jinbeh, our Dragon Roll and Spicy Tuna Roll are also customer favorites.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How do I eat sushi properly?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Dip the <strong>fish side</strong> (not the rice) lightly into soy sauce.
                                                    Eat in one bite if possible. Use ginger as a palate cleanser between pieces,
                                                    not as a topping. And chopsticks or fingers are both acceptable for nigiri!
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-orange-500 to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍣 Ready to Explore?</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Discover your new favorite sushi at Jinbeh. Fresh fish, expert rolls, unforgettable flavors.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/frisco/menu" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            View Sushi Menu
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
                                    <Link href="/blog/best-sushi-frisco" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Sushi Frisco" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">📍 Locations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Sushi Frisco TX</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/sake-sushi-pairing" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/10-C060324-6501.jpg" alt="Sake pairing" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-purple-600">🍶 Beverages</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Sake Sushi Pairing Guide</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/japanese-omakase" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/15-C060324-6663.jpg" alt="Omakase" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-orange-500">🍣 Cuisine</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Japanese Omakase Experience</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500">🍣 Cuisine</Link>
                                        <Link href="/blog?category=beverages" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">🍶 Beverages</Link>
                                        <Link href="/blog?category=locations" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">📍 Locations</Link>
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
