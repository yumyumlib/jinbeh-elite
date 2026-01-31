import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Salmon Sashimi Near Me: Top Picks & Tips | Jinbeh",
    description:
        "Discover the best salmon sashimi near you! Our guide covers where to find fresh, quality sashimi at local markets, restaurants, and online. Expert tips included.",
    keywords: [
        "salmon sashimi near me",
        "best salmon sashimi",
        "where to buy sushi grade salmon",
        "fresh sashimi dallas",
        "sashimi restaurants",
    ],
    openGraph: {
        title: "Best Salmon Sashimi Near Me: Top Picks & Tips",
        description:
            "Find the best salmon sashimi near you. Learn where to source fresh fish and expert tips for enjoying authentic sashimi.",
        images: ["/images/blog/7-C060324-6447.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Salmon Sashimi Near Me: Top Picks & Tips",
    description:
        "Complete guide to finding and enjoying the best salmon sashimi with expert recommendations.",
    image: "https://jinbeh.com/images/blog/7-C060324-6447.jpg",
    datePublished: "2026-01-18",
    dateModified: "2026-01-30",
    author: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
    },
};

const faqs = [
    {
        question: "What makes fresh salmon sashimi special?",
        answer: "Fresh and flavorful—that's our promise. Great sashimi has a rich, buttery taste and silky texture. The color should be vibrant orange. Look for sushi-grade or sashimi-grade labels at markets to ensure safety for raw fish.",
    },
    {
        question: "Where can I buy sushi-grade salmon?",
        answer: "Visit local fish markets, Whole Foods, Costco, or online seafood retailers. Ask for sashimi-grade fish and ask about freshness. Building a relationship with your fishmonger helps—they'll save the best pieces for you.",
    },
    {
        question: "Is Jinbeh good for salmon sashimi?",
        answer: "Welcome to the table! Jinbeh is known for fresh, premium sashimi. We source salmon daily and prepare it with expert knife work. Our chefs will pair your sashimi perfectly with complementary flavors.",
    },
    {
        question: "Can I make sashimi at home?",
        answer: "Yes! Buy sushi-grade salmon from a trusted fishmonger. Use a sharp knife, slice thinly, and serve immediately. Proper storage and handling are essential for safety and quality.",
    },
    {
        question: "How do I order salmon sashimi at Jinbeh?",
        answer: "Call us to reserve a sushi bar seat. Frisco: (214) 619-1200. Lewisville: (214) 488-2224. Our chefs will prepare your sashimi to order. You'll see them work their magic at the bar.",
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

export default function BestSalmonSashimi() {
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
                    alt="Fresh salmon sashimi platter"
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

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        🍣 Cuisine
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Best Salmon Sashimi Near Me
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 18, 2026</span>
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
                                        <strong>Looking for the best salmon sashimi near you?</strong> Salmon sashimi is one of the
                                        most beloved and accessible forms of raw fish, prized for its rich, buttery flavor and
                                        silky texture. Whether you're seeking a reliable local source or planning to prepare it
                                        at home, this guide will help you find and enjoy authentic, high-quality sashimi.
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Good salmon sashimi is characterized by its simplicity. The quality of the fish
                                            is paramount. We source premium salmon daily and handle it with care to preserve
                                            its natural flavors."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— Jinbeh Sushi Chefs</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🐟 What Makes Premium Salmon Sashimi?
                                    </h2>

                                    <p>
                                        True salmon sashimi goes beyond simply slicing raw fish. It's about freshness, quality,
                                        and the expertise required to prepare it properly. The best sashimi has:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🌈</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Vibrant Color</h3>
                                            <p className="text-charcoal/70 text-sm">Rich orange hue indicates freshness and proper handling</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">💎</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Silky Texture</h3>
                                            <p className="text-charcoal/70 text-sm">Melt-in-your-mouth quality that melts on the palate</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">✨</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Subtle Sweetness</h3>
                                            <p className="text-charcoal/70 text-sm">Natural umami flavor without fishy taste</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🔪</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Expert Preparation</h3>
                                            <p className="text-charcoal/70 text-sm">Precise cuts that enhance texture and presentation</p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🛒 Where to Find Quality Salmon Sashimi
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Local Fish Markets
                                    </h3>

                                    <p>
                                        Local fish markets are your best bet for fresh, sushi-grade salmon. Look for fish labeled
                                        "sushi-grade" or "sashimi-grade"—this designation guarantees the fish has been handled safely
                                        for raw consumption. Build relationships with fishmongers who can recommend seasonal options
                                        and provide insights on storage.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Upscale Grocery Stores
                                    </h3>

                                    <p>
                                        Stores like Whole Foods and Costco maintain high quality standards and offer dedicated
                                        seafood counters. The convenience of one-stop shopping—finding everything from rice to
                                        wasabi—makes these excellent options for home preparation.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Online Seafood Retailers
                                    </h3>

                                    <p>
                                        Websites like Fulton Fish Market and Catalina Offshore Products specialize in delivering
                                        fresh, premium seafood directly to your door. While not immediate, online options provide
                                        detailed sourcing information and quality assurance for those without access to fresh markets.
                                    </p>
                                </div>

                                {/* Jinbeh Feature Section */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/blog/11-C060324-6544.jpg"
                                                alt="Jinbeh sushi chef preparing sashimi"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                🏯 Jinbeh: Premium Salmon Sashimi
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                At Jinbeh, we understand that sashimi is all about the fish. We source premium salmon daily
                                                from trusted suppliers and handle each piece with expertise and respect. Our chefs use
                                                traditional Japanese techniques to present your sashimi at its finest.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Fresh premium salmon daily</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Expert knife work and presentation</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Traditional Japanese preparation</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Pairing recommendations available</span>
                                                </li>
                                            </ul>
                                            <Link
                                                href="/frisco#reserve"
                                                className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                                            >
                                                Reserve at Frisco →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍽️ Dining Options vs. Home Preparation
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Restaurant & Sushi Bar Experience
                                    </h3>

                                    <p>
                                        Japanese restaurants and specialized sushi bars like Jinbeh offer the expertise and quality
                                        assurance that comes with professional handling. You get the benefit of expert preparation,
                                        proper storage, and the ability to try different preparations and pairings.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Creating Sashimi at Home
                                    </h3>

                                    <p>
                                        Making sashimi at home is rewarding but requires attention to detail. Always source sushi-grade
                                        salmon, invest in a sharp knife, maintain proper temperature control, and serve immediately.
                                        The practice of slicing and presenting sashimi becomes a meditative process that deepens your
                                        appreciation for the craft. Or simply <Link href="/reservations" className="text-accent-red hover:underline">make a reservation</Link> at Jinbeh and let our experts handle it.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Explore Beyond Salmon
                                    </h3>

                                    <p>
                                        While salmon is beloved, don't miss exploring other sashimi options. Tuna sashimi offers
                                        different flavor profiles, and assorted platters allow you to sample multiple types of fish
                                        in one elegant presentation. Check out our <Link href="/blog/sushi-identification-chart" className="text-accent-red hover:underline">sushi identification chart</Link> to learn about all available varieties.
                                    </p>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">
                                        ❓ Frequently Asked Questions
                                    </h2>

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
                                <div className="mt-16 p-8 bg-gradient-to-br from-deep-indigo to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                                        🍣 Fresh and Flavorful Salmon Sashimi
                                    </h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Experience premium sashimi prepared with expert knife work at Jinbeh. Watch our chefs at the sushi bar. Learn the proper way to enjoy it with our <Link href="/blog/how-to-eat-sushi-guide" className="text-white hover:text-warm-ivory underline">sushi eating guide</Link>.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/frisco#reserve"
                                            className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                                        >
                                            Reserve Frisco
                                        </Link>
                                        <Link
                                            href="/lewisville#reserve"
                                            className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                                        >
                                            Reserve Lewisville
                                        </Link>
                                        <Link
                                            href="/frisco/menu"
                                            className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg"
                                        >
                                            View Menu
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="best-salmon-sashimi" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
