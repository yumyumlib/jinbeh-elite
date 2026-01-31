import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Sake Pairing Guide: Best Pairings with Sushi & Hibachi | Jinbeh",
    description:
        "Master the art of sake food pairing. Learn how to pair sake with sushi, hibachi, appetizers & more. Expert guide to selecting the perfect sake for your meal.",
    keywords: [
        "sake pairing guide",
        "sake food pairing",
        "how to pair sake",
        "best sake with sushi",
        "sake with hibachi",
        "sake temperature",
        "types of sake",
    ],
    openGraph: {
        title: "The Complete Sake Pairing Guide: From Sushi to Hibachi",
        description: "Elevate your Japanese dining experience with expert sake pairing recommendations.",
        images: ["/images/drinks/cocktail.jpg"],
    },
};

const faqs = [
    { question: "What sake pairs best with sushi?", answer: "Welcome to sake! Junmai and Ginjo sakes work wonderfully. Ginjo is crisp and delicate with raw fish. Junmai is fuller with earthy notes. Choose dry sake (Karakuchi) for nigiri." },
    { question: "Should sake be served hot or cold?", answer: "Premium sakes like Ginjo are best chilled (50-55°F). Junmai can be warm (104-113°F) or room temperature. Warmer service brings richer flavors. Chilled feels refreshing." },
    { question: "What sake pairs with hibachi?", answer: "Go fuller-bodied! Junmai or Honjozo complement grilled proteins and vegetables. These robust sakes match the bold, grilled flavors. Warm sake intensifies the pairing." },
    { question: "Can sake pair with appetizers?", answer: "Absolutely! Sparkling sake (Hana Awaka) works with fried appetizers. Dry Honjozo complements edamame and gyoza. Match intensity: lighter apps get lighter sake." },
    { question: "How do I order sake at Jinbeh?", answer: "Our bartenders are happy to guide you! Tell them your preferences. We have sake flights for tasting. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 to ask about selections." }
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Complete Sake Pairing Guide: From Sushi to Hibachi",
    description: "Master sake pairings with Japanese cuisine—learn which sake styles complement sushi, hibachi, appetizers, and more.",
    image: "https://jinbeh.com/images/drinks/cocktail.jpg",
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
            name: "What is the best sake for sushi pairing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Junmai and Ginjo sakes are excellent with sushi. Junmai offers fuller body and earthy notes, while Ginjo's crisp, delicate flavors complement raw fish beautifully. For nigiri, choose a dry sake (Karakuchi). For sashimi, a slightly fruity Ginjo works wonderfully.",
            },
        },
        {
            "@type": "Question",
            name: "Should sake be served hot or cold?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Premium sakes like Ginjo and Daiginjo are best served chilled (50-55°F). Junmai and regular sake can be enjoyed warm (104-113°F) or at room temperature, depending on preference and the dish. Warmer service brings out richer flavors, while chilled sake feels more refreshing.",
            },
        },
        {
            "@type": "Question",
            name: "What sake pairs best with hibachi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For hibachi's bold, grilled flavors, choose a fuller-bodied sake like Junmai or Honjozo. These earthier, more robust sakes complement grilled proteins and vegetables better than delicate sakes. Warm sake intensifies the pairing experience.",
            },
        },
        {
            "@type": "Question",
            name: "Can I pair sake with Western Japanese appetizers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! Sparkling sake (Hana Awaka) works with fried appetizers and spring rolls. Aged sake (Koshu) pairs well with rich appetizers. Dry Honjozo complements edamame and gyoza. The key is matching intensity—lighter appetizers get lighter sakes, heavier ones get fuller-bodied options.",
            },
        },
        {
            "@type": "Question",
            name: "What does sake's SMV (Sake Meter Value) mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SMV indicates dryness or sweetness. Positive SMV (+) means drier sake, negative SMV (-) means sweeter. For food pairing, dry sakes (SMV +3 to +6) work with most savory dishes, while slightly sweet sakes (SMV -3 to 0) pair well with spicy or rich dishes.",
            },
        },
    ],
};

export default function SakePairingGuide() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden bg-gradient-to-b from-charcoal to-charcoal/80">
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: "url('/images/drinks/cocktail.jpg')",
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
                        <span className="text-warm-ivory">Cuisine</span>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        🍶 Cuisine Guide
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl mb-4">
                        The Ultimate Sake Pairing Guide
                    </h1>
                    <p className="text-xl text-warm-ivory/90 max-w-2xl mb-6">
                        Master the art of pairing sake with sushi, hibachi, and Japanese cuisine
                    </p>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 29, 2026</span>
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
                                        <strong>Sake isn't just a drink—it's a bridge between food and flavor.</strong> Whether you're enjoying
                                        fresh <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">nigiri</Link>, watching flames dance on a <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">hibachi grill</Link>, or savoring delicate appetizers, the right sake
                                        transforms the entire experience. But with so many styles and temperatures to choose from, where do you start?
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "At Jinbeh, we've curated our sake selection to complement every dish on our menu. Our staff can guide you
                                            through the perfect pairing, whether it's your first sake experience or you're a seasoned connoisseur."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Understanding Sake: The Basics
                                    </h2>

                                    <p>
                                        Sake, Japan's iconic rice wine, has been brewed for over a thousand years. What makes it special isn't just
                                        the taste—it's the precision, craftsmanship, and centuries of tradition poured into every bottle. To master
                                        pairing, it helps to understand what makes different sakes distinct.
                                    </p>

                                    <p>
                                        At its core, sake is created by fermenting rice, koji mold, and water. The brewing process determines
                                        everything: the flavor profile, aroma, body, and even how it pairs with food. Some sakes are bold and earthy,
                                        others delicate and floral. Understanding these differences is the first step to perfect pairings.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🌾 The Main Types of Sake Explained
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-gradient-to-br from-accent-red/10 to-orange-500/10 rounded-2xl p-6 border-l-4 border-accent-red">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🍂 Junmai (Pure Rice Sake)</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                Made only from rice, koji, and water. Fuller-bodied with earthy, rice-forward flavors.
                                            </p>
                                            <p className="text-sm font-medium text-charcoal">
                                                <strong>Best for:</strong> Grilled dishes, rich appetizers, sashimi
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-blue-500/10 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">✨ Ginjo (Premium Grade)</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                Highly refined with at least 40% of rice removed. Delicate, fruity, floral aromas.
                                            </p>
                                            <p className="text-sm font-medium text-charcoal">
                                                <strong>Best for:</strong> Nigiri sushi, white fish, light appetizers
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-soft-gold/10 to-amber-500/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🏆 Daiginjo (Ultra-Premium)</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                Over 50% of rice removed. Incredibly elegant with subtle, complex flavors and fragrance.
                                            </p>
                                            <p className="text-sm font-medium text-charcoal">
                                                <strong>Best for:</strong> Premium sashimi, formal meals, special occasions
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-accent-red/10 to-pink-500/10 rounded-2xl p-6 border-l-4 border-accent-red">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🌊 Honjozo (Brewer's Alcohol Added)</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                Brewers add a touch of distilled alcohol. Crisp, light, and clean with good acidity.
                                            </p>
                                            <p className="text-sm font-medium text-charcoal">
                                                <strong>Best for:</strong> Everyday meals, fried foods, strong flavors
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-purple-500/10 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🍷 Koshu (Aged Sake)</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                Stored for years, developing rich amber color and complex, aged flavors (sherry-like).
                                            </p>
                                            <p className="text-sm font-medium text-charcoal">
                                                <strong>Best for:</strong> Rich appetizers, aged cheeses, complex dishes
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-soft-gold/10 to-lime-500/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">✨ Sparkling Sake (Hana Awaka)</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                Carbonated sake with light, refreshing bubbles and subtle sweetness. Perfect for celebrations.
                                            </p>
                                            <p className="text-sm font-medium text-charcoal">
                                                <strong>Best for:</strong> Appetizers, fried foods, celebrations, aperitif
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 Sake Pairing with Sushi: The Perfect Match
                                    </h2>

                                    <p>
                                        Sushi is sake's most famous partner. But not all <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sushi varieties</Link> call for the same sake. The type of fish, rice
                                        preparation, and toppings all influence which sake shines brightest. Learn more about different <Link href="/blog/beginner-sushi-tips" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sushi for beginners</Link> to understand each style better.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🍤 Nigiri (Hand-Pressed Sushi)</h3>
                                        <div className="space-y-3">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-deep-indigo flex items-center justify-center text-white font-bold text-sm">✓</div>
                                                <div>
                                                    <strong className="text-charcoal">Ginjo or Daiginjo (chilled 50-55°F):</strong>
                                                    <p className="text-charcoal/80 text-sm">Delicate flavors complement raw fish beautifully without overpowering it. The crispness cleanses the palate between bites.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-deep-indigo flex items-center justify-center text-white font-bold text-sm">✓</div>
                                                <div>
                                                    <strong className="text-charcoal">Dry Honjozo (room temperature or chilled):</strong>
                                                    <p className="text-charcoal/80 text-sm">If you prefer something less delicate, a dry Honjozo offers crisp acidity and light body that won't compete with subtle fish flavors.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-deep-indigo flex items-center justify-center text-white font-bold text-sm">✓</div>
                                                <div>
                                                    <strong className="text-charcoal">Junmai for richer fish (toro, chu-toro):</strong>
                                                    <p className="text-charcoal/80 text-sm">Fatty tuna benefits from Junmai's fuller body and earthy character, which balances the richness.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🍣 Sashimi (Sliced Raw Fish)</h3>
                                        <div className="space-y-3">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold text-sm">✓</div>
                                                <div>
                                                    <strong className="text-charcoal">Premium Ginjo (well-chilled):</strong>
                                                    <p className="text-charcoal/80 text-sm">Since sashimi has no rice to provide texture contrast, a premium sake's elegance and complexity become the star of the show.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold text-sm">✓</div>
                                                <div>
                                                    <strong className="text-charcoal">Lightly fruity Junmai (chilled or room temp):</strong>
                                                    <p className="text-charcoal/80 text-sm">A fruity Junmai with subtle sweetness can enhance white fish like flounder or halibut.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🍣 Maki & Rolls (Composed Sushi)</h3>
                                        <div className="space-y-3">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-deep-indigo flex items-center justify-center text-white font-bold text-sm">✓</div>
                                                <div>
                                                    <strong className="text-charcoal">Honjozo or Junmai (room temp or slightly chilled):</strong>
                                                    <p className="text-charcoal/80 text-sm">Rolls often contain mayo, cream cheese, or cooked ingredients. A fuller-bodied sake with more character works better than delicate options.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-deep-indigo flex items-center justify-center text-white font-bold text-sm">✓</div>
                                                <div>
                                                    <strong className="text-charcoal">Spicy rolls → Slightly sweet Junmai:</strong>
                                                    <p className="text-charcoal/80 text-sm">Sriracha mayo? Jalapeños? A hint of sweetness cools the heat while complementing the roll's complexity.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🔥 Sake with Hibachi: Matching Heat and Flavor
                                    </h2>

                                    <p>
                                        <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Hibachi</Link> is all about bold, grilled flavors and interactive theater. The intense heat and char of the grill
                                        demand a sake with more presence than what you'd pair with delicate sushi. Understanding the <Link href="/blog/hibachi-calories-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">hibachi teppanyaki experience</Link> helps you appreciate the cooking method and food better.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-gradient-to-br from-accent-red/10 to-orange-500/10 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">Grilled Proteins (Steak, Chicken, Shrimp)</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                <strong>Top choice:</strong> Junmai or Honjozo served warm (104-113°F)
                                            </p>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                Warming the sake brings out richer, earthier notes that complement the Maillard reaction—those delicious caramelized flavors from grilling.
                                            </p>
                                            <p className="text-charcoal/80 text-sm">
                                                <strong>Why:</strong> Fuller-bodied sakes won't get lost next to bold, grilled tastes. The sake's warmth mirrors the heat of the grill.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-blue-500/10 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">Grilled Vegetables & Fried Rice</h3>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                <strong>Top choice:</strong> Warm Junmai or aged Koshu
                                            </p>
                                            <p className="text-charcoal/80 text-sm mb-3">
                                                The umami-rich flavors in grilled vegetables and butter-laden fried rice need sake with body and depth.
                                            </p>
                                            <p className="text-charcoal/80 text-sm">
                                                <strong>Why:</strong> A Koshu's complex, aged character plays beautifully with these savory elements.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">Pro Pairing Tip for Hibachi Night</h3>
                                        <p className="text-charcoal/80">
                                            Order your sake warm and request an extra cup of ice water or tea. Between bites of rich, grilled food,
                                            alternate sips of warm sake with cool water. This contrast awakens your palate and makes each bite taste fresher.
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🥠 Appetizers & Small Plates Pairing Guide
                                    </h2>

                                    <div className="overflow-x-auto my-8">
                                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                            <thead className="bg-charcoal text-white">
                                                <tr>
                                                    <th className="p-4 text-left font-heading">Appetizer</th>
                                                    <th className="p-4 text-left font-heading">Best Sake</th>
                                                    <th className="p-4 text-left font-heading">Serving Temp</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Edamame</strong></td>
                                                    <td className="p-4">Dry Honjozo or light Junmai</td>
                                                    <td className="p-4">Chilled or room temp</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4"><strong>Gyoza (Pan-fried)</strong></td>
                                                    <td className="p-4">Warm Junmai</td>
                                                    <td className="p-4">Warm (104-113°F)</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Fried Spring Rolls</strong></td>
                                                    <td className="p-4">Sparkling sake or Honjozo</td>
                                                    <td className="p-4">Chilled</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4"><strong>Tempura</strong></td>
                                                    <td className="p-4">Light Ginjo or Honjozo</td>
                                                    <td className="p-4">Chilled</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Ahi Poke</strong></td>
                                                    <td className="p-4">Premium Ginjo</td>
                                                    <td className="p-4">Well-chilled (50-55°F)</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory">
                                                    <td className="p-4"><strong>Chicken Katsu</strong></td>
                                                    <td className="p-4">Warm Honjozo</td>
                                                    <td className="p-4">Warm (95-109°F)</td>
                                                </tr>
                                                <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                    <td className="p-4"><strong>Seaweed Salad</strong></td>
                                                    <td className="p-4">Light Ginjo or dry Honjozo</td>
                                                    <td className="p-4">Chilled</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4"><strong>Rich Appetizers (cream-based)</strong></td>
                                                    <td className="p-4">Aged Koshu</td>
                                                    <td className="p-4">Room temp or slightly warm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🌡️ Temperature Matters: Serving Your Sake Right
                                    </h2>

                                    <p>
                                        One of sake's greatest secrets? Temperature dramatically changes how it tastes. Knowing the right temperature
                                        for each sake type is as important as the pairing itself.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-gradient-to-br from-accent-red to-orange-500 rounded-2xl p-6 text-white">
                                            <h3 className="font-heading font-bold text-lg mb-2">❄️ Chilled (50-55°F)</h3>
                                            <p className="text-sm text-white/90 mb-3">
                                                <strong>Best for:</strong> Ginjo, Daiginjo, and sparkling sake
                                            </p>
                                            <p className="text-sm text-white/90">
                                                Cold brings out delicate floral and fruity aromatics. Perfect for sushi, sashimi, and light appetizers.
                                                Think of it like how chilled wine tastes crisper than warm wine.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo to-blue-500 rounded-2xl p-6 text-white">
                                            <h3 className="font-heading font-bold text-lg mb-2">❄️ Cool (55-65°F)</h3>
                                            <p className="text-sm text-white/90 mb-3">
                                                <strong>Best for:</strong> Light Honjozo and some Junmai
                                            </p>
                                            <p className="text-sm text-white/90">
                                                This middle ground works for everyday drinking and casual meals. The flavors are bright but not overly delicate.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-soft-gold to-amber-600 rounded-2xl p-6 text-white">
                                            <h3 className="font-heading font-bold text-lg mb-2">🔥 Warm (95-109°F)</h3>
                                            <p className="text-sm text-white/90 mb-3">
                                                <strong>Best for:</strong> Junmai, Honjozo, and everyday sake
                                            </p>
                                            <p className="text-sm text-white/90">
                                                Warmth mellows any harshness and brings out richer, earthier flavors. Ideal for grilled hibachi and fried dishes.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-accent-red to-rose-600 rounded-2xl p-6 text-white">
                                            <h3 className="font-heading font-bold text-lg mb-2">🌡️ Hot (104-113°F)</h3>
                                            <p className="text-sm text-white/90 mb-3">
                                                <strong>Best for:</strong> Fuller Junmai and rustic sake
                                            </p>
                                            <p className="text-sm text-white/90">
                                                Hotter sake intensifies umami and brings warming comfort. Perfect for winter meals and rich, bold flavors.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">💡 Pro Tip: Temperature Mistakes to Avoid</h3>
                                        <ul className="space-y-2 text-charcoal/80">
                                            <li className="flex gap-3">
                                                <span className="text-accent-red font-bold">✗</span>
                                                <span><strong>Don't serve premium Ginjo warm.</strong> Cold is where this delicate sake shines—warming it makes it taste flat and boring.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-accent-red font-bold">✗</span>
                                                <span><strong>Don't chill aged Koshu.</strong> Cold suppresses the complex flavors that aging developed. Room temperature or slightly warm is ideal.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-accent-red font-bold">✗</span>
                                                <span><strong>Don't serve sake boiling hot.</strong> Over 130°F, you'll lose aromatic subtleties. Warm, yes. Scalding, no.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Jinbeh's Curated Sake Selection
                                    </h2>

                                    <p>
                                        At Jinbeh, our sake menu is thoughtfully selected to enhance every dish we serve. Whether you're a beginner
                                        or an enthusiast, our team is here to guide you.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-white border-2 border-deep-indigo/20 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🍣 For Sushi & Sashimi Lovers</h3>
                                            <p className="text-charcoal/80 text-sm mb-4">
                                                We stock premium Ginjo and Daiginjo options that let the freshness of our fish speak.
                                            </p>
                                            <Link href="/menu" className="text-deep-indigo font-semibold hover:text-accent-red transition-colors inline-flex items-center gap-2">
                                                Explore our menu <span>→</span>
                                            </Link>
                                        </div>

                                        <div className="bg-white border-2 border-accent-red/20 rounded-2xl p-6">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🔥 For Hibachi Diners</h3>
                                            <p className="text-charcoal/80 text-sm mb-4">
                                                Our Junmai and warm sake selections complement grilled specialties perfectly.
                                            </p>
                                            <Link href="/menu" className="text-accent-red font-semibold hover:text-deep-indigo transition-colors inline-flex items-center gap-2">
                                                View hibachi menu <span>→</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/20 to-accent-red/20 rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-3">🎯 Ask Our Staff</h3>
                                        <p className="text-charcoal/80 mb-4">
                                            Not sure which sake to choose? Our team at both Jinbeh locations—Frisco and Lewisville—is trained in sake
                                            pairing. Tell us what you're ordering, and we'll recommend the perfect pour.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link href="/frisco" className="text-deep-indigo font-semibold hover:text-accent-red transition-colors">
                                                Visit Frisco →
                                            </Link>
                                            <Link href="/lewisville" className="text-accent-red font-semibold hover:text-deep-indigo transition-colors">
                                                Visit Lewisville →
                                            </Link>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ❓ Frequently Asked Questions About Sake Pairing
                                    </h2>

                                    <div className="space-y-4">
                                        {faqs.map((faq, i) => (
                                            <details key={i} className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal hover:bg-warm-ivory-dark transition-colors">
                                                    {faq.question}
                                                    <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <div className="px-6 pb-6 text-charcoal/80">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎉 Sake Pairing at Jinbeh Happy Hour
                                    </h2>

                                    <p>
                                        Want to explore sake pairings without breaking the bank? Jinbeh's <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">happy hour specials</Link> are the perfect place to experiment.
                                        We offer special <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">drink deals</Link> on select sakes and appetizers—the ideal combination for learning what you love.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-deep-indigo/10 rounded-2xl p-8 my-8">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4">🎊 Join us for Happy Hour Sake Tastings</h3>
                                        <p className="text-charcoal/80 mb-6">
                                            Our bartenders can guide you through sake styles with appetizers specifically chosen to highlight each sake's best qualities.
                                            It's fun, approachable, and delicious.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href="/happy-hour" className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                Explore Happy Hour Menu
                                            </Link>
                                            <Link href="/menu" className="btn bg-white text-deep-indigo hover:bg-warm-ivory border-2 border-deep-indigo px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                View Full Menu
                                            </Link>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🌟 Your Sake Pairing Journey Starts Here
                                    </h2>

                                    <p>
                                        Sake pairing isn't complicated—it's about balance, intensity, and exploring what you love. Whether you're a sushi
                                        purist at <Link href="/blog/best-sushi-frisco" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">best sushi in Frisco</Link>, a hibachi enthusiast, or somewhere in between, there's a sake waiting to elevate your next meal.
                                    </p>

                                    <p className="mb-8">
                                        The best part? You don't have to figure it out alone. At Jinbeh, our staff lives and breathes sake knowledge.
                                        Tell us what you're eating, and we'll guide you to the perfect pour. That's the Jinbeh difference—we're not just
                                        serving food and drink; we're creating an experience.
                                    </p>

                                    <div className="bg-gradient-to-br from-soft-gold/20 to-accent-red/20 rounded-2xl p-8 text-center">
                                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Ready to Master Sake Pairing?</h3>
                                        <p className="text-charcoal/80 mb-6 text-lg">
                                            Visit Jinbeh and let our team help you find your next favorite sake and dish combination. Book your reservation today and experience sake pairing as a true gracious host would.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <Link href="/frisco" className="btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                Frisco Location
                                            </Link>
                                            <Link href="/lewisville" className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                Lewisville Location
                                            </Link>
                                            <Link href="#reserve" className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center">
                                                Make a Reservation
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="text-lg font-heading font-bold text-charcoal mb-6">📚 In This Guide</h3>
                                <nav className="space-y-3">
                                    <a href="#sake-types" className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium">Types of Sake</a>
                                    <a href="#sushi-pairing" className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium">Sushi Pairing</a>
                                    <a href="#hibachi-pairing" className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium">Hibachi Pairing</a>
                                    <a href="#temperature" className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium">Temperature Guide</a>
                                    <a href="#faq" className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium">FAQs</a>
                                </nav>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <RelatedArticles currentSlug="sake-pairing-guide" />
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">📍 Visit Us</h3>
                                    <div className="space-y-2 text-sm text-charcoal/70">
                                        <div className="flex gap-2">
                                            <span className="flex-shrink-0">📍</span>
                                            <div>
                                                <p className="font-medium text-charcoal">Frisco</p>
                                                <Link href="/frisco" className="text-deep-indigo hover:text-accent-red transition-colors">View location</Link>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="flex-shrink-0">📍</span>
                                            <div>
                                                <p className="font-medium text-charcoal">Lewisville</p>
                                                <Link href="/lewisville" className="text-deep-indigo hover:text-accent-red transition-colors">View location</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-deep-indigo/10 text-deep-indigo hover:bg-deep-indigo/20 transition-colors">🍣 Cuisine</Link>
                                        <Link href="/blog?category=beverages" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal hover:bg-warm-ivory-dark transition-colors">🍷 Beverages</Link>
                                        <Link href="/blog?category=dining" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal hover:bg-warm-ivory-dark transition-colors">🍽️ Dining</Link>
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
