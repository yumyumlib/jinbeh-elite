import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

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

const faqs = [
    { question: "What's the difference between nigiri and sashimi?", answer: "Nigiri is raw fish on rice. Sashimi is raw fish, no rice. Both showcase fish quality. Nigiri adds rice texture and flavor." },
    { question: "What sushi is best for beginners?", answer: "Welcome to sushi! Try California Roll, Shrimp Tempura, or Philadelphia Roll. They're cooked and mild. Easy way to start exploring." },
    { question: "What's the most popular sushi roll?", answer: "California Roll is America's favorite. At Jinbeh, our Dragon Roll and Spicy Tuna are customer favorites too. Our chefs can recommend your perfect roll." },
    { question: "What's fresh and flavorful sushi?", answer: "We use fresh, never-frozen fish. Our sushi chefs are trained for years. Proper rice seasoning, expert knife work, traditional technique." },
    { question: "Can I try different sushi at Jinbeh?", answer: "Yes! We have rolls, nigiri, sashimi, specialty creations. Sushi bar seating lets you watch our chefs work. Frisco (214) 618-9888 or Lewisville (214) 618-9798." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
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

                                {/* Internal Links - Sushi Cluster */}
                                <div className="my-12 p-6 bg-accent-red/10 rounded-2xl border-2 border-accent-red/30">
                                    <h3 className="font-heading font-bold text-lg text-charcoal mb-4">Explore Related Sushi Articles:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Link href="/blog/sashimi-vs-sushi" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">Sashimi vs Sushi</p>
                                            <p className="text-sm text-charcoal/70">Understand the key differences</p>
                                        </Link>
                                        <Link href="/blog/how-to-eat-sushi-guide" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">How to Eat Sushi Guide</p>
                                            <p className="text-sm text-charcoal/70">Master proper etiquette & tips</p>
                                        </Link>
                                        <Link href="/blog/sushi-identification-chart" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">Sushi Identification Chart</p>
                                            <p className="text-sm text-charcoal/70">Complete sushi reference guide</p>
                                        </Link>
                                        <Link href="/blog/what-is-omakase" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">What is Omakase?</p>
                                            <p className="text-sm text-charcoal/70">Discover the ultimate sushi experience</p>
                                        </Link>
                                    </div>
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
                                        <Link href="/reservations" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Reserve Now
                                        </Link>
                                        <Link href="/frisco/menu" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            View Frisco Menu
                                        </Link>
                                        <Link href="/lewisville/menu" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            View Lewisville Menu
                                        </Link>
                                    </div>
                                </div>

                                {/* Location Links */}
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Link href="/frisco" className="p-6 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-2 border-charcoal/10">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">📍 Jinbeh Frisco</h3>
                                        <p className="text-charcoal/70 text-sm">Visit our Frisco location for authentic sushi and Japanese cuisine</p>
                                    </Link>
                                    <Link href="/lewisville" className="p-6 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-2 border-charcoal/10">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">📍 Jinbeh Lewisville</h3>
                                        <p className="text-charcoal/70 text-sm">Experience fine dining at our Lewisville Japanese restaurant</p>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="types-of-sushi" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
