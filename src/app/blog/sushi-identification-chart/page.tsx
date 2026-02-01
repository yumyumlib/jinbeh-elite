import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Sushi Identification Chart | Complete Guide to Types & Flavors",
    description:
        "Explore our comprehensive sushi identification chart. Learn different sushi types, names, ingredients, and flavors. Perfect guide for sushi lovers and restaurant visitors.",
    keywords: [
        "sushi identification chart",
        "types of sushi",
        "sushi guide",
        "sushi names",
        "nigiri vs sashimi",
        "sushi types and flavors",
        "sushi rolls guide",
    ],
    openGraph: {
        title: "Sushi Identification Chart | Complete Guide",
        description: "Discover every type of sushi with our detailed identification chart.",
        images: ["/images/blog/13-C060324-6582.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sushi Identification Chart: Guide to Types & Flavors",
    description: "Comprehensive sushi identification chart with names, types, ingredients, and tasting notes.",
    image: "https://jinbeh.com/images/blog/13-C060324-6582.jpg",
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
            name: "What is the difference between nigiri and sashimi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Nigiri is fish placed on top of seasoned rice, while sashimi is just sliced raw fish without rice. Both showcase fish quality, but nigiri offers the added texture and flavor of rice.",
            },
        },
        {
            "@type": "Question",
            name: "What are maki rolls?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Maki rolls are sushi rice and fillings wrapped in seaweed (nori). They come in two main types: hosomaki (thin rolls) and futomaki (thick rolls).",
            },
        },
        {
            "@type": "Question",
            name: "What is an uramaki?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Uramaki is an inside-out roll where the rice is on the outside and seaweed is on the inside. The California Roll is a famous example.",
            },
        },
        {
            "@type": "Question",
            name: "What is the best sushi for beginners?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Beginners often prefer cooked rolls like California Rolls, tempura shrimp rolls, or Philadelphia Rolls. These offer milder flavors and no raw fish.",
            },
        },
    ],
};

export default function SushiIdentificationChart() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/13-C060324-6582.jpg"
                    alt="Fresh sushi and sashimi platter at Jinbeh Japanese Restaurant"
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
                        <Link href="/blog?category=cuisine" className="hover:text-white">Cuisine</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-orange-500 mb-4">
                        🍣 Cuisine Guide
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Sushi Identification Chart: Complete Guide to Types & Flavors
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 30, 2026</span>
                        <span>•</span>
                        <span>12 min read</span>
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
                                        <strong>Sushi is more than just a popular dish</strong>—it's an art form that embodies centuries of
                                        Japanese culinary tradition. With countless types, each with unique characteristics and flavors, sushi
                                        can seem overwhelming at first. This comprehensive identification chart will help you navigate the
                                        vibrant world of sushi with confidence.
                                    </p>

                                    <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Understanding sushi types enhances your dining experience. Each style has its own story,
                                            preparation method, and flavor profile. Let's explore the world of sushi together."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍱 Understanding Sushi Basics
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Before diving into specific types, it's essential to understand what sushi actually is. Traditionally,
                                        sushi consists of seasoned sushi rice combined with various ingredients like raw or cooked fish,
                                        vegetables, and seafood. The rice is the foundation, seasoned with vinegar, sugar, and salt to create
                                        its distinctive flavor. If you're new to this world, our <Link href="/blog/beginner-sushi-tips" className="text-accent-red hover:underline font-semibold">sushi for beginners guide</Link> is a great starting point.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 The Complete Sushi Identification Chart
                                    </h2>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Nigiri Sushi</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        <strong>Nigiri</strong> is one of the most traditional forms of sushi. It consists of a small mound of
                                        rice topped with a slice of raw fish. The simplicity of nigiri emphasizes the quality of the fish and
                                        the precision of the rice preparation. In Japanese culture, the preparation of nigiri is an art form.
                                        Sushi chefs, or <em>itamae</em>, undergo years of training to perfect the technique.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-6">
                                        <p className="text-charcoal/80 mb-2"><strong>Common Nigiri Varieties:</strong> Explore more <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">types of sushi</Link> and their unique characteristics.</p>
                                        <ul className="text-charcoal/70 text-sm space-y-2">
                                            <li>🐟 <strong>Maguro (Tuna)</strong> - Deep red, rich flavor, buttery texture</li>
                                            <li>🐠 <strong>Sake (Salmon)</strong> - Orange-pink, mild and slightly sweet. Discover more about <Link href="/blog/best-salmon-sashimi" className="text-accent-red hover:underline">premium salmon sashimi</Link></li>
                                            <li>⚪ <strong>Ebi (Shrimp)</strong> - Sweet, delicate flavor with firm texture</li>
                                            <li>🦑 <strong>Ika (Squid)</strong> - Chewy texture, subtle sweet flavor</li>
                                            <li>🌾 <strong>Tamago (Egg)</strong> - Sweet, fluffy omelet on rice</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Sashimi</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        <strong>Sashimi</strong> is often mistaken for sushi, but it is actually a distinct dish. It consists
                                        of thinly sliced raw fish, served without rice. Learn more about the key differences in our <Link href="/blog/sashimi-vs-sushi" className="text-accent-red hover:underline font-semibold">sashimi vs sushi comparison</Link>. The art of sashimi lies in the precision of the cut.
                                        Chefs use special knives to slice the fish at specific angles, ensuring the perfect thickness and
                                        texture. Sashimi is typically served with garnishes like daikon radish and shiso leaves, adding visual
                                        appeal and subtle flavor notes.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Maki Rolls</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        <strong>Maki rolls</strong> are perhaps the most recognized form of sushi. They are rolled using a
                                        bamboo mat (makisu) to combine rice, fillings, and nori (seaweed) into a tight cylindrical form.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-6">
                                        <h4 className="font-heading font-bold text-lg text-charcoal mb-4">Maki Roll Types:</h4>

                                        <h5 className="font-semibold text-charcoal mt-4 mb-2">Hosomaki (Thin Rolls)</h5>
                                        <p className="text-charcoal/70 text-sm mb-4">
                                            Hosomaki, or "thin rolls," feature a single filling, allowing the featured ingredient to shine.
                                            The nori (seaweed) is on the outside. Examples include cucumber rolls, tuna rolls, and avocado rolls.
                                        </p>

                                        <h5 className="font-semibold text-charcoal mt-4 mb-2">Futomaki (Thick Rolls)</h5>
                                        <p className="text-charcoal/70 text-sm mb-4">
                                            Futomaki, or "thick rolls," are larger and contain multiple fillings. These rolls are often vegetarian,
                                            featuring pickled vegetables, eggs, and fresh vegetables alongside seasoned rice.
                                        </p>

                                        <h5 className="font-semibold text-charcoal mt-4 mb-2">Uramaki (Inside-Out Rolls)</h5>
                                        <p className="text-charcoal/70 text-sm">
                                            Uramaki, or "inside-out rolls," have rice on the outside, often sprinkled with sesame seeds. The California
                                            Roll is the most famous example, created in North America and beloved worldwide.
                                        </p>
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Temaki (Hand Rolls)</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Temaki rolls are cone-shaped seaweed filled with rice, fish, and vegetables. They are best eaten
                                        immediately while the nori is still crispy. The casual, interactive nature of hand rolls makes them
                                        a fun dining experience.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Specialty & Creative Rolls</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Modern sushi chefs have created innovative specialty rolls that go beyond traditional preparations.
                                        These rolls often feature cooked ingredients, creative sauce combinations, and artistic presentations.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-6">
                                        <p className="text-charcoal/80 mb-2"><strong>Popular Specialty Rolls at Jinbeh:</strong></p>
                                        <ul className="text-charcoal/70 text-sm space-y-2">
                                            <li>🐉 <strong>Dragon Roll</strong> - Eel, cucumber, avocado with unagi sauce</li>
                                            <li>🌈 <strong>Rainbow Roll</strong> - California roll topped with assorted sashimi</li>
                                            <li>🌋 <strong>Volcano Roll</strong> - Baked spicy crab on California roll</li>
                                            <li>🔥 <strong>Spicy Tuna Roll</strong> - Fresh tuna with spicy mayo</li>
                                            <li>🦐 <strong>Shrimp Tempura Roll</strong> - Crispy shrimp tempura with avocado</li>
                                        </ul>
                                    </div>

                                    {/* Comparison Table */}
                                    <div className="overflow-x-auto my-12">
                                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                            <thead className="bg-charcoal text-white">
                                                <tr>
                                                    <th className="p-4 text-left font-heading">Type</th>
                                                    <th className="p-4 text-left font-heading">Composition</th>
                                                    <th className="p-4 text-left font-heading">Best For</th>
                                                    <th className="p-4 text-left font-heading">Skill Level</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-charcoal/80 text-sm">
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4 font-semibold">Nigiri</td>
                                                    <td className="p-4">Fish on rice</td>
                                                    <td className="p-4">Pure fish flavor</td>
                                                    <td className="p-4">⭐⭐⭐ Advanced</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-warm-ivory/30">
                                                    <td className="p-4 font-semibold">Sashimi</td>
                                                    <td className="p-4">Sliced fish only</td>
                                                    <td className="p-4">Low-carb, purists</td>
                                                    <td className="p-4">⭐⭐⭐ Advanced</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4 font-semibold">Maki Rolls</td>
                                                    <td className="p-4">Rice wrapped in nori</td>
                                                    <td className="p-4">Classic experience</td>
                                                    <td className="p-4">⭐⭐ Intermediate</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-warm-ivory/30">
                                                    <td className="p-4 font-semibold">Temaki</td>
                                                    <td className="p-4">Cone-shaped roll</td>
                                                    <td className="p-4">Interactive eating</td>
                                                    <td className="p-4">⭐ Beginner</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-semibold">Specialty Rolls</td>
                                                    <td className="p-4">Creative combinations</td>
                                                    <td className="p-4">Adventurous palates</td>
                                                    <td className="p-4">⭐ Beginner</td>
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
                                            <Image src="/images/blog/11-C060324-6544.jpg" alt="Sushi preparation" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/13-C060324-6582.jpg" alt="Sushi rolls" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/14-C060324-6596.jpg" alt="Sashimi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 Flavor Profiles & Tasting Notes
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Raw Fish Options</h4>
                                            <ul className="text-charcoal/70 text-sm space-y-2">
                                                <li><strong>Tuna:</strong> Rich, robust, clean flavor</li>
                                                <li><strong>Salmon:</strong> Mild, slightly sweet, buttery</li>
                                                <li><strong>White fish:</strong> Delicate, subtle, refreshing</li>
                                                <li><strong>Yellowtail:</strong> Sweet, tender, premium</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-purple-500/10 rounded-2xl p-6">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">Cooked Options</h4>
                                            <ul className="text-charcoal/70 text-sm space-y-2">
                                                <li><strong>Eel (Unagi):</strong> Sweet, smoky, savory</li>
                                                <li><strong>Shrimp:</strong> Sweet, firm, clean</li>
                                                <li><strong>Scallop:</strong> Buttery, delicate, sweet</li>
                                                <li><strong>Crab:</strong> Sweet, tender, luxurious</li>
                                            </ul>
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
                                                    Nigiri is fish placed on top of seasoned rice, while sashimi is just sliced raw fish without
                                                    rice. Both showcase fish quality, but nigiri offers the added texture and flavor of rice.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What are maki rolls?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Maki rolls are sushi rice and fillings wrapped in seaweed (nori). They come in two main
                                                    types: hosomaki (thin rolls with one filling) and futomaki (thick rolls with multiple fillings).
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is an uramaki?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Uramaki is an inside-out roll where the rice is on the outside and seaweed is on the inside.
                                                    The California Roll is a famous example.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is the best sushi for beginners?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Beginners often prefer cooked rolls like California Rolls, tempura shrimp rolls, or Philadelphia
                                                    Rolls. These offer milder flavors and no raw fish.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* Sushi Cluster Links */}
                                <div className="my-12 p-6 bg-accent-red/10 rounded-2xl border-2 border-accent-red/30">
                                    <h3 className="font-heading font-bold text-lg text-charcoal mb-4">📚 Explore the Complete Sushi Cluster:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Link href="/blog/types-of-sushi" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">Types of Sushi</p>
                                            <p className="text-sm text-charcoal/70">Discover nigiri, rolls, and specialty varieties</p>
                                        </Link>
                                        <Link href="/blog/sashimi-vs-sushi" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">Sashimi vs Sushi</p>
                                            <p className="text-sm text-charcoal/70">Learn the key differences</p>
                                        </Link>
                                        <Link href="/blog/how-to-eat-sushi-guide" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">How to Eat Sushi</p>
                                            <p className="text-sm text-charcoal/70">Master proper etiquette & techniques</p>
                                        </Link>
                                        <Link href="/blog/what-is-omakase" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                            <p className="font-semibold text-charcoal">What is Omakase?</p>
                                            <p className="text-sm text-charcoal/70">Discover the ultimate sushi experience</p>
                                        </Link>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-orange-500 to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍣 Experience Sushi at Jinbeh</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Ready to explore these sushi types in person? Visit Jinbeh to taste authentic preparations from
                                        expert chefs. Check our <Link href="/menu" className="text-white hover:text-warm-ivory">full menu</Link> to see all varieties we offer.
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
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="sushi-identification-chart" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
