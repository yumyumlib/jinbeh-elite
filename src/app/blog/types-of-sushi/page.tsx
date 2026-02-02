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
    {
        question: "What&apos;s the difference between nigiri and sashimi?",
        answer: "Nigiri is a slice of raw fish placed on top of a small mound of seasoned rice, while sashimi is pure raw fish sliced thin with no rice. Both showcase the quality and freshness of the fish, but nigiri adds the texture and subtle sweetness of properly seasoned sushi rice. Nigiri is more filling, while sashimi is lighter and lower-carb. Both are excellent ways to appreciate premium fish!"
    },
    {
        question: "What sushi is best for beginners?",
        answer: "Welcome to sushi! We recommend starting with cooked rolls like California Roll, Philadelphia Roll, or Shrimp Tempura Roll—they&apos;re milder in flavor and help newcomers ease into sushi before trying raw fish. You can also try cooked nigiri options like tamago (egg) or cooked shrimp. At Jinbeh, our experienced staff can guide you through our menu based on your comfort level and taste preferences."
    },
    {
        question: "What&apos;s in a dragon roll?",
        answer: "A Dragon Roll is one of our signature specialty rolls featuring eel, cucumber, and avocado topped with unagi (eel) sauce. The combination of tender eel, creamy avocado, and sweet unagi sauce creates an elegant and complex flavor profile. The roll is typically inside-out style, and our chefs arrange it beautifully to resemble a dragon. It&apos;s a fantastic choice if you enjoy cooked fish with rich, savory sauces—perfect for those ready to explore beyond basic rolls!"
    },
    {
        question: "What&apos;s in a rainbow roll?",
        answer: "A Rainbow Roll is a visually stunning specialty roll that features a California roll base topped with an assortment of colorful sashimi including salmon, tuna, avocado, and other fresh fish. The rainbow of colors comes from multiple fish varieties arranged on top. It&apos;s a beautiful centerpiece roll that showcases premium fish selection and offers a variety of flavors in every bite. Perfect for sharing or impressing guests with its presentation!"
    },
    {
        question: "What&apos;s the most popular sushi roll?",
        answer: "The California Roll is America's most beloved sushi roll. At Jinbeh, our Dragon Roll (eel, cucumber, avocado with unagi sauce), Spicy Tuna Roll, and Rainbow Roll are customer favorites. Our chefs can recommend the perfect roll based on your preferences—whether you like cooked or raw fish, spicy or mild flavors, or adventurous combinations."
    },
    {
        question: "How do I order fresh, high-quality sushi?",
        answer: "Quality sushi starts with fresh, never-frozen fish and expert preparation. At Jinbeh, we source premium fish daily and our sushi chefs train for years to master proper rice seasoning, knife work, and traditional hand-rolling techniques. Ask our staff about our fish selection, or sit at the sushi bar to watch the chefs work their magic. Our commitment to quality is evident in every piece."
    },
    {
        question: "Can I try different sushi types at Jinbeh?",
        answer: "Absolutely! We offer nigiri, sashimi, maki rolls, specialty rolls, hand rolls, and omakase experiences. You can order à la carte or try our sushi platters that showcase multiple varieties. Sit at the sushi bar to watch our chefs prepare each piece, or relax at a table. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 to ask about specials, or visit our menu online."
    },
    {
        question: "What&apos;s the proper way to eat sushi?",
        answer: "You can use chopsticks or your fingers—both are acceptable! Dip the fish side (not the rice) lightly into soy sauce to avoid it getting soggy. Eat nigiri in one bite if possible to enjoy all the flavors together. Use pickled ginger as a palate cleanser between pieces, not as a topping. Wasabi is optional—add it directly to your soy sauce or the sushi itself based on your spice preference."
    },
    {
        question: "Are there vegetarian sushi options?",
        answer: "Yes! We offer plenty of vegetarian rolls including cucumber roll (Kappa Maki), avocado roll, vegetable tempura roll, and creative specialty rolls with vegetables and fruits. Vegetarian nigiri options include tamago (egg) and cooked items. Let our staff know your vegetarian preferences, and we&apos;ll guide you to delicious options that showcase great flavors and technique."
    },
    {
        question: "What&apos;s the difference between sushi and sashimi platters?",
        answer: "A sushi platter typically includes nigiri and rolls (rice-based dishes), while a sashimi platter features only sliced raw fish. Sushi platters are more filling and offer variety in preparation styles. Sashimi platters are perfect for fish lovers who want to focus on the quality and flavor of premium fish without rice. Many guests order both to explore different aspects of Japanese cuisine!"
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
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

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-soft-gold mb-4">
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
                                        <strong>Sushi confused?</strong> You&apos;re not alone. Between nigiri, sashimi, maki,
                                        and specialty rolls, the sushi menu can feel like reading a foreign language.
                                        Let&apos;s break it down so you can order like a pro—and discover new <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">sushi varieties</Link> along the way.
                                    </p>

                                    <div className="bg-gradient-to-br from-soft-gold/10 to-soft-gold/10 border-l-4 border-soft-gold rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Every sushi order at Jinbeh starts with fresh fish and ends with a smile.
                                            Whether you&apos;re trying nigiri for the first time or you&apos;re a seasoned omakase
                                            enthusiast, we&apos;re here to guide your journey."
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">— The Jinbeh Team</span>
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
                                        🌟 Jinbeh&apos;s Most Popular <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">Sushi Varieties</Link>
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
                                        {faqs.map((faq, index) => (
                                            <details key={index} className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                    {faq.question}
                                                    <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <div className="px-6 pb-6 text-charcoal/80">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-soft-gold to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍣 Ready to Explore?</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Discover your new favorite sushi at Jinbeh. Fresh fish, expert rolls, unforgettable flavors.
                                        New to sushi? Check out our <Link href="/blog/beginner-sushi-tips" className="text-white hover:underline font-semibold">sushi for beginners</Link> guide.
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
                                    <Link href="/locations/frisco" className="p-6 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-2 border-charcoal/10">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">📍 <Link href="/locations/frisco" className="text-accent-red hover:underline">Frisco location</Link></h3>
                                        <p className="text-charcoal/70 text-sm">Visit us in Frisco for authentic sushi and Japanese cuisine</p>
                                    </Link>
                                    <Link href="/locations/lewisville" className="p-6 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-2 border-charcoal/10">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-2">📍 <Link href="/locations/lewisville" className="text-accent-red hover:underline">Lewisville location</Link></h3>
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
