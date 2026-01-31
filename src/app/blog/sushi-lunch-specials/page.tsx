import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Sushi Lunch Specials Near You Today | Jinbeh",
    description:
        "Discover top sushi lunch specials today! Enjoy delicious and budget-friendly sushi deals. Perfect for a midday break with variety and great value.",
    keywords: [
        "sushi lunch specials",
        "sushi lunch deals",
        "lunch specials near me",
        "affordable sushi",
        "sushi bento box",
    ],
    openGraph: {
        title: "Best Sushi Lunch Specials Near You Today",
        description:
            "Find the best sushi lunch specials with affordable pricing and variety. Discover deals at your favorite sushi restaurants.",
        images: ["/images/blog/12-C060324-6551.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Sushi Lunch Specials Near You Today",
    description:
        "Guide to finding delicious and affordable sushi lunch specials in your area.",
    image: "https://jinbeh.com/images/blog/12-C060324-6551.jpg",
    datePublished: "2026-01-22",
    dateModified: "2026-01-30",
    author: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
    },
};

const faqs = [
    { question: "What's a typical sushi lunch special?", answer: "Bento boxes with rolls and sides, sushi combos, nigiri selections. Great deals at 30-50% off dinner prices. Welcome to delicious lunch savings!" },
    { question: "Does Jinbeh have lunch specials?", answer: "Yes! We offer excellent lunch specials at both locations. Sushi rolls, nigiri, combination options. Call ahead to check today's specials." },
    { question: "When are lunch specials available?", answer: "Weekdays 11 AM to 2-3 PM. Some extended weekend hours. Arrive early for best selection. Call us to confirm hours." },
    { question: "Can I get lunch specials for takeout?", answer: "Absolutely! Dine in or takeout. Call ahead to make sure we have your favorites ready. Frisco (214) 619-1200 or Lewisville (214) 488-2224." },
    { question: "What's included in Jinbeh lunch deals?", answer: "Fresh and flavorful sushi rolls, nigiri, appetizers. Great value. Our chefs prepare everything to order. Every lunch is special." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function SushiLunchSpecials() {
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
                    src="/images/blog/12-C060324-6551.jpg"
                    alt="Sushi lunch special platter"
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
                        <Link href="/blog?category=best-of" className="hover:text-white">Deals</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-soft-gold mb-4">
                        💰 Deals & Specials
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Best Sushi Lunch Specials Near You Today
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 22, 2026</span>
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
                                        <strong>Looking for great sushi lunch deals?</strong> Sushi lunch specials are one of the best ways to enjoy
                                        high-quality cuisine at affordable prices. Whether you're a sushi aficionado or discovering your favorite roll
                                        for the first time, lunch specials offer variety, value, and the perfect midday break. Don't forget to check out our <Link href="/blog/best-happy-hour-frisco-tx" className="text-accent-red hover:underline font-semibold">happy hour</Link> specials to maximize your savings even further!
                                    </p>

                                    <div className="bg-gradient-to-br from-soft-gold/20 to-warm-ivory/20 border-l-4 border-soft-gold rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Lunch specials are our way of bringing premium sushi to more people at prices that make sense.
                                            Same quality, same freshness, just smarter pricing for the midday rush."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💰 Why Choose Lunch Specials?
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">💵</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Affordability</h3>
                                            <p className="text-charcoal/70 text-sm">Enjoy 30-50% savings compared to dinner pricing without compromising quality</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🎯</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Variety</h3>
                                            <p className="text-charcoal/70 text-sm">Sample different rolls and styles—perfect for exploring new favorites</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">⚡</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Perfect Timing</h3>
                                            <p className="text-charcoal/70 text-sm">Light, energizing meal that won't leave you sluggish for the afternoon</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">📱</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Convenience</h3>
                                            <p className="text-charcoal/70 text-sm">Dine in or take out—flexible options for your schedule</p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍱 Types of Lunch Specials
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Bento Boxes
                                    </h3>

                                    <p>
                                        Bento boxes are the quintessential lunch special. These beautifully arranged boxes typically include
                                        a combination of sushi rolls, nigiri, sashimi, and sides like edamame, miso soup, tempura, or pickled
                                        ginger. It's a well-rounded meal that satisfies completely.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Sushi Combos
                                    </h3>

                                    <p>
                                        Combo platters offer a mix of sushi rolls and nigiri, allowing you to experience multiple flavors
                                        and textures in one meal. Many combos feature the restaurant's signature rolls alongside classic
                                        favorites, giving you a taste of their culinary style. If you want to learn more about the wide variety available,
                                        check out our guide to <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline font-semibold">types of sushi</Link> to discover which rolls might become your new favorites.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        All-You-Can-Eat Options
                                    </h3>

                                    <p>
                                        For those with hearty appetites, all-you-can-eat lunch specials are an excellent value. Order as many
                                        rolls and pieces as you like for one flat price. It's a great way to try new rolls and indulge in your
                                        absolute favorites without worrying about the bill.
                                    </p>
                                </div>

                                {/* Jinbeh Feature Section */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/blog/8-C060324-6462.jpg"
                                                alt="Jinbeh lunch special platter"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                🍣 Jinbeh Lunch Specials
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                At Jinbeh, our lunch specials deliver the same quality and freshness as our dinner menu at
                                                unbeatable prices. Choose from a variety of rolls, nigiri, and combination platters. Each special
                                                is prepared fresh and designed to satisfy even the most discerning sushi lover.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Fresh fish sourced daily</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Expert preparation and presentation</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>30-50% savings vs. dinner pricing</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Available for dine-in or takeout</span>
                                                </li>
                                            </ul>
                                            <Link
                                                href="/menu"
                                                className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                                            >
                                                View Full Menu →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🔍 Finding Lunch Specials Near You
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Check Restaurant Websites & Apps
                                    </h3>

                                    <p>
                                        Most restaurants list their lunch specials prominently on their websites and mobile apps. This allows
                                        you to browse options and prices before you arrive, making decision-making easier. Some apps even offer
                                        exclusive digital coupons or early-bird specials.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Follow Social Media
                                    </h3>

                                    <p>
                                        Instagram and Facebook are goldmines for daily specials. Restaurants often post their lunch deals with
                                        enticing photos that showcase their offerings. Following your favorite spots ensures you never miss a
                                        deal or limited-time offer.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Call Ahead
                                    </h3>

                                    <p>
                                        Don't hesitate to call and ask about today's specials. This is especially helpful during peak lunch
                                        hours when certain items might sell out. You can also ask about customizations or substitutions. Better yet, <Link href="/reservations" className="text-accent-red hover:underline font-semibold">make a reservation</Link> to ensure your spot during lunch rush.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Tips for Making the Most of Your Lunch
                                    </h3>

                                    <p>
                                        <strong>Try Something New:</strong> Lunch specials are the perfect opportunity to branch out and
                                        order a roll you've never tried. The lower price makes it risk-free!
                                    </p>

                                    <p>
                                        <strong>Share with Colleagues:</strong> Order different specials and share with coworkers. It's a
                                        great way to sample variety and turn lunch into a social experience.
                                    </p>

                                    <p>
                                        <strong>Savor Each Bite:</strong> Take your time enjoying your meal. Eating mindfully enhances the
                                        flavors and makes you feel more satisfied with your lunch break.
                                    </p>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">
                                        ❓ Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What are typical sushi lunch specials?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Typical lunch specials include bento boxes with a variety of rolls and sides, sushi combos
                                                    with mixed selections, and all-you-can-eat options. Most restaurants offer 30-50% discounts
                                                    compared to dinner pricing. The variety ensures there's something for every preference.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Does Jinbeh have lunch specials?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    <strong>Yes!</strong> <Link href="/frisco" className="text-accent-red hover:underline">Jinbeh</Link> offers excellent lunch specials
                                                    with a variety of sushi rolls, nigiri, and combination platters at great prices. Our lunch
                                                    specials maintain the same quality and freshness as our dinner menu. Check our website or
                                                    call for today's specials.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What's the best time for lunch specials?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Most restaurants offer lunch specials from <strong>11 AM to 2 or 3 PM on weekdays</strong>, with some
                                                    extending through the afternoon or weekend lunch hours. Arriving earlier typically ensures the
                                                    best selection, especially for all-you-can-eat options.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can I order lunch specials for takeout?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    <strong>Absolutely!</strong> Most restaurants offer lunch specials for both dine-in and takeout.
                                                    We recommend calling ahead to ensure your preferred items are available, especially during peak
                                                    lunch hours when certain items might sell out quickly.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-deep-indigo to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                                        🍱 Hungry? Dive Into Our Lunch Specials Today!
                                    </h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Enjoy premium sushi at unbeatable prices. Visit Jinbeh for lunch today.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/locations/frisco"
                                            className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                                        >
                                            Visit Frisco Location
                                        </Link>
                                        <Link
                                            href="/locations/lewisville"
                                            className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                                        >
                                            Visit Lewisville Location
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="sushi-lunch-specials" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
