import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Types of Sake Explained: Junmai vs Daiginjo & Sake Varieties | Jinbeh",
    description:
        "Master sake varieties and types. Learn the difference between Junmai, Ginjo, Daiginjo, Honjozo & more. Complete guide to choosing the right sake for your palate and preferences.",
    keywords: [
        "types of sake",
        "sake varieties",
        "different kinds of sake",
        "junmai vs daiginjo",
        "sake classification",
        "ginjo sake",
        "sake guide",
        "sake types explained",
        "sake pairing guide",
        "best sake for beginners",
    ],
    openGraph: {
        title: "Complete Guide to Types of Sake: From Junmai to Daiginjo",
        description: "Discover the different kinds of sake and what makes each variety unique. Expert guide to sake selection.",
        images: ["/images/beverages/LewisvilleBar.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Types of Sake Explained: Junmai vs Daiginjo & Complete Sake Varieties Guide",
    description: "Learn about different kinds of sake, their characteristics, and how to choose the right variety for your preferences.",
    image: "https://jinbeh.com/images/beverages/LewisvilleBar.jpg",
    datePublished: "2026-01-29",
    dateModified: "2026-01-29",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between Junmai and Daiginjo sake?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Junmai is pure rice sake made from rice, koji, and water with no additives, offering fuller body and earthy flavors. Daiginjo is ultra-premium sake with over 50% of rice removed, resulting in delicate, elegant flavors and complex aromatics. Junmai is bolder; Daiginjo is more refined.",
            },
        },
        {
            "@type": "Question",
            name: "What does rice polishing percentage mean in sake?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Rice polishing percentage (Seimai Buai) indicates how much of the rice grain is removed. Lower percentages mean more polishing and refinement. Junmai typically polishes 30-40%, Ginjo polishes 40%, and Daiginjo polishes 50% or more. More polishing = more delicate, refined sake.",
            },
        },
        {
            "@type": "Question",
            name: "Which sake variety is best for beginners?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Honjozo or entry-level Junmai are excellent for beginners. They're approachable, balanced, and versatile with food. They're less expensive than premium varieties but offer genuine sake character. Once you enjoy these, you can explore more premium Ginjo or Daiginjo varieties.",
            },
        },
        {
            "@type": "Question",
            name: "What is sake with added alcohol (Honjozo)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Honjozo is sake where brewers add a small amount of distilled alcohol during fermentation. This enhances flavor clarity, creates a crisp profile, and keeps costs lower than pure rice sake. It's versatile and works well with many dishes, making it popular for everyday drinking.",
            },
        },
        {
            "@type": "Question",
            name: "Is aged sake (Koshu) better than fresh sake?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Aged sake (Koshu) isn't better—it's different. Fresh sake is bright and delicate. Aged Koshu develops complex, sherry-like flavors and amber color. Choose based on preference: fresh sake for sushi and light dishes, aged sake for rich foods and special occasions.",
            },
        },
    ],
};

export default function TypesOfSakeExplained() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden bg-gradient-to-b from-charcoal to-charcoal/80">
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: "url('/images/beverages/LewisvilleBar.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-warm-ivory">Sake Guide</span>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        🍶 Beverage Guide
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl mb-4">
                        Types of Sake Explained
                    </h1>
                    <p className="text-xl text-warm-ivory/90 max-w-2xl mb-6">
                        Master sake varieties: Junmai, Ginjo, Daiginjo, and more. Learn what makes each type unique.
                    </p>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 29, 2026</span>
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
                                        <strong>Sake isn't one-size-fits-all. It's a spectrum of flavors, textures, and experiences.</strong> Whether you're drawn to the bold, earthy notes of Junmai, the delicate elegance of Daiginjo, or the crisp simplicity of Honjozo, understanding sake types transforms you from casual drinker to informed enthusiast. Let's explore what makes each variety special.
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "At Jinbeh, we stock diverse sake varieties so every guest finds their perfect match. Our staff is trained in sake classification and can guide you through your preferences."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🌾 The Sake Classification System
                                    </h2>

                                    <p>
                                        Sake classification is based on two main factors: <strong>ingredients</strong> and <strong>rice polishing percentage</strong>. Understanding these fundamentals unlocks the world of sake varieties.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-deep-indigo/5 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">📊 Factor 1: Ingredients</h3>
                                            <p className="text-charcoal/80 text-sm mb-2">
                                                <strong>Pure Rice (Junmai):</strong> Only rice, koji, and water. No additives.
                                            </p>
                                            <p className="text-charcoal/80 text-sm">
                                                <strong>Added Alcohol (Honjozo):</strong> Brewers add distilled alcohol for flavor enhancement and clarity.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-soft-gold/10 to-soft-gold/5 rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">✨ Factor 2: Rice Polishing</h3>
                                            <p className="text-charcoal/80 text-sm">
                                                Rice polishing percentage (Seimai Buai) shows how much of the rice grain is removed. <strong>Lower percentage = more polishing = more refined sake.</strong>
                                            </p>
                                            <p className="text-charcoal/80 text-sm mt-2 font-medium">
                                                Range: 50-80% remaining rice
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">💡 Key Principle</h3>
                                        <p className="text-charcoal/80">
                                            More polishing removes proteins, fats, and minerals concentrated in the outer grain layers. This leaves starches and amino acids that ferment into delicate, refined flavors. Less polishing preserves more of the grain, resulting in fuller-bodied, earthier sakes.
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 The Main Sake Types Explained
                                    </h2>

                                    <div className="space-y-6 my-8">
                                        <div className="bg-gradient-to-br from-accent-red/10 to-accent-red/5 rounded-2xl p-6 border-l-4 border-accent-red">
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl flex-shrink-0">🍂</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Junmai (Pure Rice Sake)</h3>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>What it is:</strong> Made exclusively from rice, koji (mold), and water. No alcohol additives.
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Polishing:</strong> Typically 30-40% polished (60-70% remains)
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Flavor Profile:</strong> Fuller-bodied, earthy, rice-forward, slightly heavier mouthfeel, umami-rich
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Alcohol Content:</strong> 15-16% ABV (typical)
                                                    </p>
                                                    <p className="text-charcoal/80">
                                                        <strong>Best For:</strong> Grilled <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-deep-indigo hover:text-accent-red underline transition-colors">hibachi dishes</Link>, rich appetizers, sashimi with fatty fish, warm or room temperature serving
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-deep-indigo/5 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl flex-shrink-0">✨</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Ginjo (Premium Grade)</h3>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>What it is:</strong> Highly refined sake with at least 40% of rice polished away, allowing brewers to use only the heart of the grain.
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Polishing:</strong> 40% polished (60% remains)
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Flavor Profile:</strong> Delicate, aromatic, fruity notes (apple, pear, melon), floral undertones, clean and crisp, light body
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Alcohol Content:</strong> 15-16% ABV
                                                    </p>
                                                    <p className="text-charcoal/80">
                                                        <strong>Best For:</strong> <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red underline transition-colors">Nigiri sushi</Link>, white fish, light appetizers, premium sashimi, chilled serving (50-55°F)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-soft-gold/10 to-soft-gold/5 rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl flex-shrink-0">🏆</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Daiginjo (Ultra-Premium)</h3>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>What it is:</strong> The most refined sake category. Over 50% of rice is polished away, sometimes reaching 70%+. Represents the pinnacle of sake refinement.
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Polishing:</strong> 50%+ polished (50% or less remains)
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Flavor Profile:</strong> Incredibly elegant, subtle complexity, delicate aromatics, sophisticated layers, ethereal mouthfeel, sometimes with slight sweetness
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Alcohol Content:</strong> 15-16% ABV
                                                    </p>
                                                    <p className="text-charcoal/80">
                                                        <strong>Best For:</strong> Premium sashimi, special occasions, formal meals, wine lovers seeking elegance, well-chilled serving
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-deep-indigo/10 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl flex-shrink-0">🌊</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Honjozo (Brewer's Alcohol Added)</h3>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>What it is:</strong> Brewers add a small amount of distilled alcohol during fermentation. This enhances flavor and clarity while keeping production costs lower.
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Polishing:</strong> 30% polished (70% remains)
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Flavor Profile:</strong> Crisp, light, clean, good acidity, slightly dry, broader appeal
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Alcohol Content:</strong> 15.6% ABV (typically higher than others)
                                                    </p>
                                                    <p className="text-charcoal/80">
                                                        <strong>Best For:</strong> Everyday meals, fried foods, strong flavors, beginner-friendly, affordable, room temperature or slightly chilled
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-deep-indigo/10 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl flex-shrink-0">🍷</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Koshu (Aged Sake)</h3>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>What it is:</strong> Sake stored for 3+ years, developing complexity and color. Oxidation and aging create unique character.
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Appearance:</strong> Amber to golden-brown color (much darker than fresh sake)
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Flavor Profile:</strong> Complex, aged flavors reminiscent of sherry or brandy, warm spice notes, honey, dried fruit, rich and sophisticated
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Alcohol Content:</strong> 15-17% ABV
                                                    </p>
                                                    <p className="text-charcoal/80">
                                                        <strong>Best For:</strong> Rich appetizers, aged cheeses, complex dishes, dessert pairing, room temperature serving (warming suppresses complexity)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-soft-gold/10 to-yellow-500/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl flex-shrink-0">✨</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Sparkling Sake (Awasake)</h3>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>What it is:</strong> Carbonated sake with light, playful bubbles. Modern innovation on traditional sake.
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Carbonation:</strong> Naturally or artificially carbonated
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Flavor Profile:</strong> Refreshing, light body, often slightly sweet, celebratory feel, similar to sparkling wine or champagne
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Alcohol Content:</strong> 5-8% ABV (lower than traditional sake)
                                                    </p>
                                                    <p className="text-charcoal/80">
                                                        <strong>Best For:</strong> Appetizers, fried foods, celebrations, aperitif, dessert, well-chilled (50-55°F)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-accent-red/10 to-red-500/10 rounded-2xl p-6 border-l-4 border-accent-red">
                                            <div className="flex items-start gap-4">
                                                <div className="text-3xl flex-shrink-0">🌸</div>
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Nigori (Unfiltered Sake)</h3>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>What it is:</strong> Sake that's lightly filtered or not filtered, leaving sediment particles visible. Cloudy appearance.
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Appearance:</strong> Milky white or cloudy (sediment gives it character)
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Flavor Profile:</strong> Creamy, rich, often slightly sweet, thicker mouthfeel, pronounced sake character
                                                    </p>
                                                    <p className="text-charcoal/80 mb-3">
                                                        <strong>Alcohol Content:</strong> 15-17% ABV
                                                    </p>
                                                    <p className="text-charcoal/80">
                                                        <strong>Best For:</strong> Cheese, rich foods, on its own as a sipping sake, creamy appetizers, chilled serving
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎯 Junmai vs Daiginjo: The Key Differences
                                    </h2>

                                    <p className="mb-6">
                                        These two varieties represent opposite ends of the sake spectrum. Understanding their differences is essential for any sake enthusiast.
                                    </p>

                                    <div className="overflow-x-auto my-8">
                                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                            <thead className="bg-charcoal text-white">
                                                <tr>
                                                    <th className="p-4 text-left font-heading">Characteristic</th>
                                                    <th className="p-4 text-left font-heading">Junmai</th>
                                                    <th className="p-4 text-left font-heading">Daiginjo</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Ingredients</strong></td>
                                                    <td className="p-4">Rice, koji, water only</td>
                                                    <td className="p-4">Rice (50% or less), koji, water</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4"><strong>Polishing %</strong></td>
                                                    <td className="p-4">30-40% polished</td>
                                                    <td className="p-4">50%+ polished</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Price</strong></td>
                                                    <td className="p-4">Moderate</td>
                                                    <td className="p-4">Premium to luxury</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4"><strong>Flavor</strong></td>
                                                    <td className="p-4">Bold, earthy, umami-rich</td>
                                                    <td className="p-4">Delicate, fruity, complex</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Body</strong></td>
                                                    <td className="p-4">Fuller, heavier</td>
                                                    <td className="p-4">Light, elegant</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4"><strong>Alcohol</strong></td>
                                                    <td className="p-4">15-16% ABV</td>
                                                    <td className="p-4">15-16% ABV</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Best Temperature</strong></td>
                                                    <td className="p-4">Warm (95-113°F)</td>
                                                    <td className="p-4">Chilled (50-55°F)</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4"><strong>Best With</strong></td>
                                                    <td className="p-4">Grilled dishes, rich food</td>
                                                    <td className="p-4">Sashimi, light dishes</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4"><strong>Best For</strong></td>
                                                    <td className="p-4">Everyday enjoyment</td>
                                                    <td className="p-4">Special occasions</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        👃 Flavor Profiles by Sake Type
                                    </h2>

                                    <p className="mb-6">
                                        Each sake type has a distinct flavor signature. Learning these profiles helps you choose based on your preferences.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🍂 Junmai Flavors</h3>
                                            <ul className="space-y-2 text-charcoal/80">
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Rice sweetness</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Earthy, mineral notes</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Umami richness</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Nutty undertones</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Warm, lingering finish</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-4">✨ Ginjo Flavors</h3>
                                            <ul className="space-y-2 text-charcoal/80">
                                                <li className="flex gap-2">
                                                    <span className="text-soft-gold">•</span>
                                                    <span>Fruity (apple, pear, melon)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-soft-gold">•</span>
                                                    <span>Floral aromatics</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-soft-gold">•</span>
                                                    <span>Clean, crisp acidity</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-soft-gold">•</span>
                                                    <span>Light, delicate body</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-soft-gold">•</span>
                                                    <span>Refreshing, palate-cleansing</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🏆 Daiginjo Flavors</h3>
                                            <ul className="space-y-2 text-charcoal/80">
                                                <li className="flex gap-2">
                                                    <span className="text-accent-red">•</span>
                                                    <span>Elegant complexity</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-accent-red">•</span>
                                                    <span>Subtle fruit and floral notes</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-accent-red">•</span>
                                                    <span>Ethereal, sophisticated layers</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-accent-red">•</span>
                                                    <span>Sometimes slight sweetness</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-accent-red">•</span>
                                                    <span>Refined, lingering finish</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🌊 Honjozo Flavors</h3>
                                            <ul className="space-y-2 text-charcoal/80">
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Crisp, clean character</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Good acidity and balance</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Light body, approachable</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Versatile with many dishes</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-deep-indigo">•</span>
                                                    <span>Clean, dry finish</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎯 How to Choose the Right Sake for You
                                    </h2>

                                    <p className="mb-6">
                                        Choosing sake is personal. Use this guide to navigate based on your preferences, occasion, and food pairing needs.
                                    </p>

                                    <div className="space-y-4 my-8">
                                        <div className="bg-gradient-to-r from-deep-indigo/10 to-transparent rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">If You Prefer: Bold, Earthy Flavors</h3>
                                            <p className="text-charcoal/80 mb-3">
                                                <strong>Choose: Junmai</strong>
                                            </p>
                                            <p className="text-charcoal/80">
                                                Junmai's full body and umami-rich profile delivers character and presence. Perfect if you enjoy complex, substantial drinks.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-soft-gold/10 to-transparent rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">If You Prefer: Delicate, Fruity Profiles</h3>
                                            <p className="text-charcoal/80 mb-3">
                                                <strong>Choose: Ginjo or Daiginjo</strong>
                                            </p>
                                            <p className="text-charcoal/80">
                                                These refined varieties showcase subtle fruit and floral notes. Ideal for those who enjoy wine-like elegance and sophistication.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-accent-red/10 to-transparent rounded-2xl p-6 border-l-4 border-accent-red">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">If You're New to Sake</h3>
                                            <p className="text-charcoal/80 mb-3">
                                                <strong>Start: Honjozo or Entry-Level Junmai</strong>
                                            </p>
                                            <p className="text-charcoal/80">
                                                These are approachable, balanced, and versatile. They're affordable enough to try without heavy commitment and offer genuine sake character. Upgrade to premium varieties once you find your preference.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-deep-indigo/10 to-transparent rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">If You're a Wine Lover</h3>
                                            <p className="text-charcoal/80 mb-3">
                                                <strong>Choose: Daiginjo or Aged Koshu</strong>
                                            </p>
                                            <p className="text-charcoal/80">
                                                Daiginjo's elegance mirrors fine wine. Aged Koshu's complexity and sophistication appeal to wine enthusiasts seeking something new.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-deep-indigo/10 to-transparent rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">If You're Celebrating or Want Something Special</h3>
                                            <p className="text-charcoal/80 mb-3">
                                                <strong>Choose: Daiginjo, Sparkling Sake, or Premium Ginjo</strong>
                                            </p>
                                            <p className="text-charcoal/80">
                                                These varieties feel luxurious and special. Sparkling sake is particularly celebratory and fun.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-soft-gold/10 to-transparent rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">If You're Pairing with Food</h3>
                                            <p className="text-charcoal/80 mb-3">
                                                <strong>Match Intensity:</strong> Bold food = fuller-bodied sake (Junmai). Delicate food = refined sake (Ginjo/Daiginjo).
                                            </p>
                                            <p className="text-charcoal/80">
                                                Junmai with <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-deep-indigo hover:text-accent-red underline transition-colors">hibachi</Link>, sashimi with Ginjo, grilled proteins with warm Junmai.
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Jinbeh's Sake Selection
                                    </h2>

                                    <p className="mb-6">
                                        At Jinbeh, we've thoughtfully selected sake varieties to complement every dish on our <Link href="/menu" className="text-deep-indigo hover:text-accent-red underline transition-colors">menu</Link>. Whether you're dining at our <Link href="/locations/frisco" className="text-deep-indigo hover:text-accent-red underline transition-colors">Frisco</Link> or <Link href="/locations/lewisville" className="text-deep-indigo hover:text-accent-red underline transition-colors">Lewisville</Link> location, our staff is trained in sake types and can guide your choice.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-white border-2 border-deep-indigo/20 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🍣 For Sushi Lovers</h3>
                                            <p className="text-charcoal/80 text-sm mb-4">
                                                We stock premium Ginjo and Daiginjo options that let the freshness of our fish shine through.
                                            </p>
                                            <Link href="/menu" className="text-deep-indigo font-semibold hover:text-accent-red transition-colors inline-flex items-center gap-2">
                                                View full menu <span>→</span>
                                            </Link>
                                        </div>

                                        <div className="bg-white border-2 border-accent-red/20 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🔥 For Hibachi Diners</h3>
                                            <p className="text-charcoal/80 text-sm mb-4">
                                                Our Junmai and warm sake selections perfectly complement grilled specialties and bold flavors.
                                            </p>
                                            <Link href="/menu" className="text-accent-red font-semibold hover:text-deep-indigo transition-colors inline-flex items-center gap-2">
                                                Explore hibachi <span>→</span>
                                            </Link>
                                        </div>

                                        <div className="bg-white border-2 border-soft-gold/20 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🎉 For Happy Hour</h3>
                                            <p className="text-charcoal/80 text-sm mb-4">
                                                Explore diverse sake types at great prices during our happy hour specials.
                                            </p>
                                            <Link href="/happy-hour" className="text-soft-gold font-semibold hover:text-accent-red transition-colors inline-flex items-center gap-2">
                                                Happy hour details <span>→</span>
                                            </Link>
                                        </div>

                                        <div className="bg-white border-2 border-deep-indigo/20 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">✨ Premium Collections</h3>
                                            <p className="text-charcoal/80 text-sm mb-4">
                                                Discover rare and specialty sake selections for discerning palates and special occasions.
                                            </p>
                                            <Link href="/menu" className="text-deep-indigo font-semibold hover:text-accent-red transition-colors inline-flex items-center gap-2">
                                                Premium options <span>→</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/20 to-accent-red/20 rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-3">🎯 Ask Our Experts</h3>
                                        <p className="text-charcoal/80 mb-4">
                                            Not sure which sake type to choose? Our team at Jinbeh—both Frisco and Lewisville locations—is trained in sake classification and varieties. Tell us your preferences, and we'll recommend the perfect pour for your meal.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link href="/frisco" className="text-deep-indigo font-semibold hover:text-accent-red transition-colors">
                                                Frisco Location →
                                            </Link>
                                            <Link href="/lewisville" className="text-accent-red font-semibold hover:text-deep-indigo transition-colors">
                                                Lewisville Location →
                                            </Link>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ❓ Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                What is the difference between Junmai and Daiginjo?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p className="mb-3">
                                                    <strong>Junmai</strong> is pure rice sake (no additives) with 30-40% polishing, offering fuller body and earthy flavors.
                                                </p>
                                                <p>
                                                    <strong>Daiginjo</strong> is ultra-premium with 50%+ polishing, providing delicate, elegant, refined flavors. Junmai is bolder; Daiginjo is more sophisticated.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                What does rice polishing percentage mean?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p className="mb-3">
                                                    Rice polishing percentage (Seimai Buai) shows how much of the rice grain is removed. Lower percentages mean more polishing and more refined sake.
                                                </p>
                                                <ul className="space-y-2 list-disc list-inside">
                                                    <li>Junmai: typically 30-40% polished</li>
                                                    <li>Ginjo: 40% polished</li>
                                                    <li>Daiginjo: 50% or more polished</li>
                                                </ul>
                                                <p className="mt-3">
                                                    More polishing removes fats and proteins, leaving pure starches for delicate, refined flavors.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                Which sake is best for beginners?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p className="mb-3">
                                                    <strong>Honjozo or entry-level Junmai</strong> are excellent for beginners.
                                                </p>
                                                <ul className="space-y-2 list-disc list-inside">
                                                    <li>Approachable and balanced</li>
                                                    <li>Versatile with many foods</li>
                                                    <li>Affordable to explore</li>
                                                    <li>Offer genuine sake character without overwhelming complexity</li>
                                                </ul>
                                                <p className="mt-3">
                                                    Once you discover what you enjoy, graduate to premium Ginjo or specialty varieties.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                What is Honjozo sake?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p className="mb-3">
                                                    <strong>Honjozo</strong> is sake where brewers add a small amount of distilled alcohol during fermentation.
                                                </p>
                                                <ul className="space-y-2 list-disc list-inside">
                                                    <li>Enhances flavor clarity and complexity</li>
                                                    <li>Creates a crisp, clean profile</li>
                                                    <li>Keeps production costs lower than pure rice sake</li>
                                                    <li>Versatile and works well with many dishes</li>
                                                </ul>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                Is aged sake (Koshu) better than fresh sake?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p className="mb-3">
                                                    Not better—just different.
                                                </p>
                                                <ul className="space-y-2 list-disc list-inside">
                                                    <li><strong>Fresh sake:</strong> Bright, delicate, fruity, refreshing</li>
                                                    <li><strong>Aged Koshu:</strong> Complex, sherry-like, warm spices, honey, sophisticated</li>
                                                </ul>
                                                <p className="mt-3">
                                                    Choose based on your occasion and food. Fresh for sushi, aged for rich dishes and special moments.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                How should different sake types be served (temperature)?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <ul className="space-y-2 list-disc list-inside">
                                                    <li><strong>Ginjo/Daiginjo:</strong> Chilled (50-55°F)</li>
                                                    <li><strong>Honjozo:</strong> Room temp or slightly chilled</li>
                                                    <li><strong>Junmai:</strong> Warm (95-113°F) or room temperature</li>
                                                    <li><strong>Koshu (aged):</strong> Room temperature or slightly warm</li>
                                                    <li><strong>Sparkling:</strong> Well-chilled (50-55°F)</li>
                                                </ul>
                                                <p className="mt-3">
                                                    Temperature dramatically changes how sake tastes. Cold brings out delicate aromatics; warmth intensifies umami.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                Can I mix and match sake types?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p className="mb-3">
                                                    Absolutely! It's a celebration! Sake tasting and exploration is fun. Many diners enjoy sampling multiple varieties during one meal.
                                                </p>
                                                <p className="mb-3">
                                                    <strong>Pro tip:</strong> Taste from lightest to boldest (Ginjo first, then Junmai). This prevents heavier flavors from overwhelming delicate ones.
                                                </p>
                                                <p>
                                                    At Jinbeh, our happy hour is perfect for sampling different sake types at reasonable prices. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 for hours and details.
                                                </p>
                                            </div>
                                        </details>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎉 Explore Sake Types at Jinbeh Happy Hour
                                    </h2>

                                    <p className="mb-6">
                                        Ready to explore different sake types? Jinbeh's Happy Hour is the perfect opportunity to sample varieties and discover your favorite. We offer special pricing on select sakes and appetizers—the ideal pairing for sake exploration.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-deep-indigo/10 rounded-2xl p-8 my-8">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4">🎊 Happy Hour Sake Tastings</h3>
                                        <p className="text-charcoal/80 mb-6">
                                            Our bartenders can guide you through different sake types with appetizers specifically chosen to highlight each variety's best qualities. It's the perfect way to learn what you love.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href="/happy-hour" className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                Check Happy Hour Times
                                            </Link>
                                            <Link href="/menu" className="btn bg-white text-deep-indigo hover:bg-warm-ivory border-2 border-deep-indigo px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                View Full Menu
                                            </Link>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🌟 Your Sake Journey Begins
                                    </h2>

                                    <p className="mb-8">
                                        Understanding sake types transforms how you enjoy Japanese cuisine. Whether you prefer the bold character of Junmai, the elegance of Daiginjo, or anything in between, there's a sake variety perfect for you.
                                    </p>

                                    <p className="mb-8">
                                        The best part? You don't have to figure it out alone. At Jinbeh, our staff is passionate about sake and trained in all varieties. Tell us what you're eating or what flavors you enjoy, and we'll recommend the perfect type for your experience.
                                    </p>

                                    <div className="bg-gradient-to-br from-soft-gold/20 to-accent-red/20 rounded-2xl p-8 text-center">
                                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Ready to Discover Your Sake Type?</h3>
                                        <p className="text-charcoal/80 mb-6 text-lg">
                                            Visit Jinbeh and explore our curated sake selection. Let our team help you find the perfect variety for your palate.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <Link href="/frisco" className="btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                Visit Frisco
                                            </Link>
                                            <Link href="/lewisville" className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                Visit Lewisville
                                            </Link>
                                        </div>
                                    </div>

                                    <p className="text-charcoal/60 text-sm mt-12 pt-8 border-t border-warm-ivory-dark">
                                        Learn more about sake at our blog. Explore <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors underline">our sake pairing guide</Link>, <Link href="/blog/sake-alcohol-strength" className="text-deep-indigo hover:text-accent-red transition-colors underline">sake alcohol strength explained</Link>, and discover more <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red transition-colors underline">sushi pairing options</Link>.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="types-of-sake-explained" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
