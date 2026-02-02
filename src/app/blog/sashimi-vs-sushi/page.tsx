import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Sashimi vs Sushi: Key Differences Explained | Jinbeh",
    description: "Discover the difference between sashimi and sushi. Learn what they are, when to order each, and how Jinbeh serves both fresh Japanese delicacies.",
    keywords: ["sashimi vs sushi", "difference between sashimi and sushi", "what is sashimi", "sushi vs sashimi difference", "sashimi definition", "sushi definition"],
    openGraph: {
        title: "Sashimi vs Sushi: Key Differences Explained",
        description: "Discover the difference between sashimi and sushi. Learn what they are, when to order each, and how Jinbeh serves both.",
    }
};

const faqs = [
    { question: "What&apos;s the difference between sashimi and sushi?", answer: "Sashimi is sliced raw fish, no rice. Sushi combines rice with fish and vegetables. Sashimi focuses on pure fish flavor. Sushi is a complete dish." },
    { question: "Is sashimi always raw?", answer: "Yes, traditional sashimi is raw. We use fresh and flavorful sushi-grade fish. Some cooked options exist, like shrimp sashimi. Our chefs ensure highest standards." },
    { question: "Can I order sashimi without rice?", answer: "Yes! Sashimi is meant without rice. Served on ice with soy sauce, wasabi, and pickled ginger. It&apos;s lighter and protein-focused. Perfect for you." },
    { question: "Is sashimi healthier than sushi?", answer: "Sashimi is higher protein, lower calories—no rice. About 30-50 calories per serving. Sushi rolls are 200-300 calories. Both are delicious and healthy! Sashimi offers a no-rice option perfect for those focusing on protein intake." },
    { question: "What fish is best for sashimi?", answer: "Premium sashimi-grade fish is essential. The best choices include fresh tuna (maguro), which offers a buttery texture and rich flavor; salmon (sake), known for its beautiful color and delicate taste; and hamachi (yellowtail), prized for its tender quality. At Jinbeh, we source only sashimi-grade fish from trusted suppliers, ensuring each slice meets strict freshness and quality standards." },
    { question: "Can you get sashimi at Jinbeh?", answer: "Absolutely! We serve premium fresh sashimi at both our Frisco and Lewisville locations. Our sashimi platters feature carefully selected sashimi-grade fish sliced expertly by our chefs. We offer individual selections or beautiful sashimi platters perfect for sharing. Call us at Frisco (214) 619-1200 or Lewisville (214) 488-2224 to inquire about our daily sashimi selection." },
    { question: "How do I eat sashimi?", answer: "Dip lightly in soy sauce mixed with wasabi. Eat in one bite. Experience the fish flavor fully. Our bartenders show you how if you&apos;re new to sashimi." },
];

const schemas = [
    {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Sashimi vs Sushi: Key Differences Explained",
        description: "Complete guide to understanding the differences between sashimi and sushi",
        datePublished: "2026-01-29",
        dateModified: "2026-01-29",
        author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" }
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
    }
];

export default function SashimiVsSushi() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/17-C060324-6708.jpg"
                    alt="Fresh sashimi and sushi at Jinbeh Japanese Restaurant"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <Link href="/blog?category=cuisine">Sushi Guide</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-accent-red mb-4">
                        🍣 Sushi Guide
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">
                        Sashimi vs Sushi: Key Differences Explained
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Article Content */}
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            {/* Introduction */}
                            <p className="text-xl text-charcoal/80 mb-8">
                                <strong>Confused about the difference between sashimi and sushi?</strong> While both are iconic Japanese dishes featuring raw fish, they are fundamentally different. Discover what makes each unique, when to order them, and how Jinbeh Japanese Restaurant serves the finest versions of both.
                            </p>

                            {/* Quick Comparison Table */}
                            <div className="my-12 bg-gradient-to-br from-accent-red/5 to-purple-50 p-6 rounded-2xl border-2 border-accent-red/20">
                                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">Quick Comparison</h2>
                                <table className="w-full text-charcoal/90">
                                    <thead>
                                        <tr className="border-b-2 border-accent-red/30">
                                            <th className="text-left py-3 px-4 font-bold">Aspect</th>
                                            <th className="text-left py-3 px-4 font-bold">Sashimi</th>
                                            <th className="text-left py-3 px-4 font-bold">Sushi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-accent-red/10">
                                            <td className="py-4 px-4"><strong>Main Ingredient</strong></td>
                                            <td className="py-4 px-4">Raw fish only</td>
                                            <td className="py-4 px-4">Rice + fish/ingredients</td>
                                        </tr>
                                        <tr className="border-b border-accent-red/10 bg-white/50">
                                            <td className="py-4 px-4"><strong>Preparation</strong></td>
                                            <td className="py-4 px-4">Sliced thin pieces</td>
                                            <td className="py-4 px-4">Rolled or pressed with rice</td>
                                        </tr>
                                        <tr className="border-b border-accent-red/10">
                                            <td className="py-4 px-4"><strong>Typical Serving</strong></td>
                                            <td className="py-4 px-4">6-12 slices on ice</td>
                                            <td className="py-4 px-4">6-8 pieces per roll</td>
                                        </tr>
                                        <tr className="border-b border-accent-red/10 bg-white/50">
                                            <td className="py-4 px-4"><strong>Calories (per serving)</strong></td>
                                            <td className="py-4 px-4">30-50 cal</td>
                                            <td className="py-4 px-4">200-300 cal</td>
                                        </tr>
                                        <tr className="border-b border-accent-red/10">
                                            <td className="py-4 px-4"><strong>Best For</strong></td>
                                            <td className="py-4 px-4">Pure fish flavor</td>
                                            <td className="py-4 px-4">Complete meal</td>
                                        </tr>
                                        <tr className="bg-white/50">
                                            <td className="py-4 px-4"><strong>Pairs With</strong></td>
                                            <td className="py-4 px-4">Soy sauce, wasabi</td>
                                            <td className="py-4 px-4">Soy sauce, pickled ginger</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* What is Sashimi Section */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                🍣 What is Sashimi?
                            </h2>
                            <p className="text-charcoal/80 mb-4">
                                Sashimi (刺身) literally means "pierced body" in Japanese, referring to the technique of slicing. It represents the purest form of Japanese fish appreciation: premium-quality, sashimi-grade fish sliced into thin, elegant pieces and served without rice.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 my-6 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                                <div>
                                    <h3 className="font-bold text-charcoal mb-3">Key Characteristics</h3>
                                    <ul className="space-y-2 text-charcoal/80">
                                        <li className="flex gap-2"><span className="text-deep-indigo font-bold">✓</span> Raw, never cooked</li>
                                        <li className="flex gap-2"><span className="text-deep-indigo font-bold">✓</span> Sashimi-grade fish</li>
                                        <li className="flex gap-2"><span className="text-deep-indigo font-bold">✓</span> Thin, uniform slices</li>
                                        <li className="flex gap-2"><span className="text-deep-indigo font-bold">✓</span> Served on ice or daikon</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-3">Common Varieties</h3>
                                    <ul className="space-y-2 text-charcoal/80">
                                        <li className="flex gap-2"><span className="text-accent-red">◆</span> Maguro (bluefin tuna)</li>
                                        <li className="flex gap-2"><span className="text-accent-red">◆</span> Sake (salmon)</li>
                                        <li className="flex gap-2"><span className="text-accent-red">◆</span> Hamachi (yellowtail)</li>
                                        <li className="flex gap-2"><span className="text-accent-red">◆</span> Hotate (scallop)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* What is Sushi Section */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                🍜 What is Sushi?
                            </h2>
                            <p className="text-charcoal/80 mb-4">
                                Sushi (寿司) is a complete dish that combines vinegar-seasoned rice with various toppings and fillings. The term encompasses many styles including nigiri, rolls, and hand-pressed varieties. Learn more about the different <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline font-semibold">types of sushi</Link> available. The rice is the foundation—not just an accompaniment—to sushi.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 my-6 bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                                <div>
                                    <h3 className="font-bold text-charcoal mb-3">Key Characteristics</h3>
                                    <ul className="space-y-2 text-charcoal/80">
                                        <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Vinegar-seasoned rice</li>
                                        <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Fish, vegetables, or cooked items</li>
                                        <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Rolled or hand-formed</li>
                                        <li className="flex gap-2"><span className="text-amber-600 font-bold">✓</span> Complete, balanced meal</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-3">Popular Styles</h3>
                                    <ul className="space-y-2 text-charcoal/80">
                                        <li className="flex gap-2"><span className="text-deep-indigo">◆</span> Nigiri (hand-pressed)</li>
                                        <li className="flex gap-2"><span className="text-deep-indigo">◆</span> Maki (rolled)</li>
                                        <li className="flex gap-2"><span className="text-deep-indigo">◆</span> Uramaki (inside-out)</li>
                                        <li className="flex gap-2"><span className="text-deep-indigo">◆</span> Temaki (hand rolls)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* The Core Difference */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                ⚡ The Core Difference
                            </h2>
                            <p className="text-charcoal/80 mb-4">
                                The fundamental difference comes down to one ingredient: <strong>rice</strong>. Sashimi celebrates raw fish in its purest form—no rice, no filler, just premium-quality fish. Sushi, on the other hand, is built around vinegar-seasoned rice that serves as both a base and flavor component.
                            </p>
                            <div className="bg-accent-red/10 border-2 border-accent-red/30 rounded-xl p-6 my-6">
                                <p className="text-charcoal/90 font-semibold">
                                    Think of it this way: All sashimi is raw fish, but not all raw fish is sashimi. And while sushi can include raw fish, it&apos;s fundamentally a rice dish. Some sushi uses cooked ingredients like shrimp tempura, imitation crab, or grilled tuna.
                                </p>
                            </div>

                            {/* When to Order Each */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                🎯 When to Order Each
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                {/* Sashimi */}
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border-2 border-blue-300">
                                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Order Sashimi If You Want:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <span className="text-deep-indigo text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Pure fish flavor</strong> without rice interference</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-deep-indigo text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Lower calorie option</strong> than sushi</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-deep-indigo text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Lighter meal</strong> focused on protein</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-deep-indigo text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Showcase premium fish</strong> quality</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-deep-indigo text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Appetizer course</strong> or pairing with sake</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Sushi */}
                                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border-2 border-amber-300">
                                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Order Sushi If You Want:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <span className="text-amber-600 text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Complete, filling meal</strong> with rice</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-amber-600 text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Variety of flavors</strong> and textures</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-amber-600 text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Cooked options</strong> available (tempura, etc.). Perfect for <Link href="/blog/beginner-sushi-tips" className="text-accent-red hover:underline">sushi for beginners</Link></span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-amber-600 text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Combination flavors</strong> in one roll</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-amber-600 text-xl">→</span>
                                            <span className="text-charcoal/80"><strong>Main course meal</strong> satisfaction</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* How Jinbeh Serves Both */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                🏮 How Jinbeh Serves Both
                            </h2>
                            <p className="text-charcoal/80 mb-6">
                                At Jinbeh Japanese Restaurant in our <Link href="/locations/frisco" className="text-accent-red hover:underline font-semibold">Frisco location</Link> and <Link href="/locations/lewisville" className="text-accent-red hover:underline font-semibold">Lewisville location</Link>, we specialize in authentic Japanese dining including both premium sashimi and expertly crafted sushi. Our commitment to quality is reflected in every dish.
                            </p>

                            {/* Sashimi at Jinbeh */}
                            <div className="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-deep-indigo">
                                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">Premium Sashimi Selection</h3>
                                <ul className="space-y-2 text-charcoal/80">
                                    <li className="flex gap-3">
                                        <span className="text-deep-indigo">✓</span>
                                        <span><strong>Sashimi-grade fish only</strong> imported from trusted Japanese suppliers</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-deep-indigo">✓</span>
                                        <span><strong>Daily fresh deliveries</strong> ensure peak quality and flavor</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-deep-indigo">✓</span>
                                        <span><strong>Expert slicing technique</strong> maximizes texture and presentation</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-deep-indigo">✓</span>
                                        <span><strong>Artful presentation</strong> on ice with complementary daikon arrangements</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Sushi at Jinbeh */}
                            <div className="bg-amber-50 rounded-xl p-6 mb-6 border-l-4 border-soft-gold">
                                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">Expertly Crafted Sushi</h3>
                                <ul className="space-y-2 text-charcoal/80">
                                    <li className="flex gap-3">
                                        <span className="text-amber-600">✓</span>
                                        <span><strong>Perfectly seasoned rice</strong> prepared with traditional vinegar blend</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-amber-600">✓</span>
                                        <span><strong>Creative roll combinations</strong> from traditional to signature creations</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-amber-600">✓</span>
                                        <span><strong>Variety of options</strong> including raw, cooked, and vegetarian rolls</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-amber-600">✓</span>
                                        <span><strong>Hand-pressed nigiri</strong> and specialty maki rolls available</span>
                                    </li>
                                </ul>
                            </div>

                            {/* FAQs Section */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                ❓ Frequently Asked Questions
                            </h2>
                            <div className="space-y-3">
                                {[
                                    {
                                        q: "Is sashimi always raw?",
                                        a: "Yes, traditional sashimi is always raw. The quality of the fish is paramount. However, some variations include cooked options like grilled or seared sashimi. At Jinbeh, our traditional sashimi features premium raw fish that meets strict food safety standards."
                                    },
                                    {
                                        q: "Can I get sashimi if I&apos;m afraid of raw fish?",
                                        a: "Absolutely! Many customers prefer cooked options. Try our cooked shrimp sashimi, grilled fish varieties, or our extensive sushi selection which offers many cooked and vegetarian rolls."
                                    },
                                    {
                                        q: "How much sashimi should I order?",
                                        a: "A typical sashimi appetizer serving is 6 pieces. For a light meal, order 12-18 pieces. Most customers enjoy combining sashimi with sushi rolls for a well-rounded experience."
                                    },
                                    {
                                        q: "What&apos;s the best way to eat sashimi?",
                                        a: "Dip each slice lightly in soy sauce mixed with a tiny amount of wasabi, then eat in one bite. Use the pickled ginger between pieces to cleanse your palate."
                                    },
                                    {
                                        q: "Is sashimi more nutritious than sushi?",
                                        a: "Sashimi is higher in protein and lower in calories than sushi rolls. A typical sashimi serving (6 pieces) has 30-50 calories, while sushi rolls range from 200-300 calories. Both offer excellent omega-3 fatty acids."
                                    }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl border border-charcoal/10">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between hover:bg-charcoal/5 transition">
                                            {f.q}
                                            <span className="text-accent-red group-open:rotate-180 transition">▼</span>
                                        </summary>
                                        <div className="px-5 pb-5 text-charcoal/80 border-t border-charcoal/10">
                                            {f.a}
                                        </div>
                                    </details>
                                ))}
                            </div>

                            {/* Health & Nutrition Section */}
                            <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                💪 Health & Nutrition
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                                    <h3 className="text-xl font-bold text-charcoal mb-4">Sashimi Benefits</h3>
                                    <ul className="space-y-2 text-charcoal/80 text-sm">
                                        <li>✓ Pure protein (30-50g per serving)</li>
                                        <li>✓ Very low in calories</li>
                                        <li>✓ Rich in omega-3 fatty acids</li>
                                        <li>✓ No added carbohydrates</li>
                                        <li>✓ Contains selenium and iodine</li>
                                        <li>✓ Zero artificial ingredients</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200">
                                    <h3 className="text-xl font-bold text-charcoal mb-4">Sushi Benefits</h3>
                                    <ul className="space-y-2 text-charcoal/80 text-sm">
                                        <li>✓ Complete carb + protein combination</li>
                                        <li>✓ Sustained energy from rice</li>
                                        <li>✓ B vitamins from fish and rice</li>
                                        <li>✓ Fiber from nori (seaweed)</li>
                                        <li>✓ Minerals from vegetables</li>
                                        <li>✓ Satisfying, well-rounded meal</li>
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="mt-12 p-8 bg-gradient-to-r from-accent-red to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-3xl font-heading font-bold mb-4">Ready to Experience Both?</h3>
                                <p className="text-lg mb-6 text-white/90">
                                    Visit Jinbeh Japanese Restaurant and taste the difference between sashimi and sushi made with premium ingredients and authentic techniques. Explore our <Link href="/menu" className="text-white hover:text-warm-ivory underline">full menu</Link> or <Link href="/reservations" className="text-white hover:text-warm-ivory underline">make a reservation</Link>.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco/menu" className="bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">
                                        View Frisco Menu
                                    </Link>
                                    <Link href="/lewisville/menu" className="bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">
                                        View Lewisville Menu
                                    </Link>
                                </div>
                            </div>

                            {/* Related Sushi Cluster Articles */}
                            <div className="my-12 p-6 bg-accent-red/10 rounded-2xl border-2 border-accent-red/30">
                                <h3 className="font-heading font-bold text-lg text-charcoal mb-4">📚 Complete Your Sushi Knowledge:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Link href="/blog/types-of-sushi" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">Types of Sushi</p>
                                        <p className="text-sm text-charcoal/70">Explore nigiri, rolls, and specialty varieties</p>
                                    </Link>
                                    <Link href="/blog/how-to-eat-sushi-guide" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">How to Eat Sushi</p>
                                        <p className="text-sm text-charcoal/70">Master etiquette and proper techniques</p>
                                    </Link>
                                    <Link href="/blog/sushi-identification-chart" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">Sushi Identification Chart</p>
                                        <p className="text-sm text-charcoal/70">Complete reference for all sushi types</p>
                                    </Link>
                                    <Link href="/blog/what-is-omakase" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">What is Omakase?</p>
                                        <p className="text-sm text-charcoal/70">Experience the ultimate sushi dining</p>
                                    </Link>
                                </div>
                            </div>

                            {/* Internal Links Section */}
                            <div className="mt-12 pt-8 border-t-2 border-charcoal/10">
                                <h3 className="text-xl font-bold text-charcoal mb-4">Visit Jinbeh Today</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Link href="/frisco" className="p-4 rounded-lg bg-warm-ivory hover:bg-charcoal/5 transition border border-charcoal/10 text-charcoal hover:text-accent-red font-semibold">
                                        📍 Frisco Location
                                    </Link>
                                    <Link href="/lewisville" className="p-4 rounded-lg bg-warm-ivory hover:bg-charcoal/5 transition border border-charcoal/10 text-charcoal hover:text-accent-red font-semibold">
                                        📍 Lewisville Location
                                    </Link>
                                    <Link href="/reservations" className="p-4 rounded-lg bg-warm-ivory hover:bg-charcoal/5 transition border border-charcoal/10 text-charcoal hover:text-accent-red font-semibold">
                                        🎯 Make a Reservation
                                    </Link>
                                    <Link href="/frisco/menu" className="p-4 rounded-lg bg-warm-ivory hover:bg-charcoal/5 transition border border-charcoal/10 text-charcoal hover:text-accent-red font-semibold">
                                        🍽️ View Our Menu
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="sashimi-vs-sushi" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
