import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "What is Omakase? A Complete Guide to the Japanese Sushi Experience | Jinbeh",
    description:
        "Discover what omakase means and what to expect during this authentic Japanese dining experience. Learn etiquette, history, and tips for your first omakase at Jinbeh.",
    keywords: [
        "what is omakase",
        "omakase meaning",
        "omakase dining experience",
        "omakase sushi",
        "how to eat omakase",
        "omakase etiquette",
        "omakase cost",
    ],
    openGraph: {
        title: "What is Omakase? The Ultimate Japanese Sushi Experience",
        description:
            "Complete guide to omakase: meaning, history, what to expect, and etiquette for an unforgettable sushi dinner.",
        images: ["/images/blog/15-C060324-6663.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What is Omakase? A Complete Guide to the Japanese Sushi Experience",
    description:
        "Comprehensive guide to omakase dining, including meaning, history, etiquette, and what to expect.",
    image: "https://jinbeh.com/images/blog/15-C060324-6663.jpg",
    datePublished: "2026-01-29",
    dateModified: "2026-01-29",
    author: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does omakase mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Omakase means 'I trust you' in Japanese. It's a dining experience where you entrust the sushi chef to select and prepare dishes for you, showcasing their expertise and the freshest ingredients available.",
            },
        },
        {
            "@type": "Question",
            name: "How much does omakase typically cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Omakase prices vary widely depending on the restaurant and ingredients. Prices can range from $50-150 per person at casual establishments to $200+ per person at high-end sushi restaurants. Premium options featuring rare fish or aged cuts cost significantly more.",
            },
        },
        {
            "@type": "Question",
            name: "What is included in an omakase experience?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Omakase typically includes 10-20 pieces of sushi, starting with lighter flavors and progressing to richer ones. The chef selects seasonal fish and ingredients, often including nigiri, specialty pieces, and sometimes tamago (egg) or cooked items. Each piece is prepared to order and eaten immediately.",
            },
        },
        {
            "@type": "Question",
            name: "Is omakase better than regular sushi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Omakase offers a different experience rather than being 'better.' It showcases the chef's expertise and the freshest ingredients available that day. Regular sushi allows you to choose what you want. Many enthusiasts enjoy both for different reasons.",
            },
        },
        {
            "@type": "Question",
            name: "What should I say to the sushi chef during omakase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Start by saying 'omakase onegaishimasu' (I'll trust you, please). During the meal, simple acknowledgments like 'arigatou' (thank you) or 'oishii' (delicious) show appreciation. Most chefs are happy to explain each piece and share recommendations.",
            },
        },
        {
            "@type": "Question",
            name: "Can you have dietary restrictions with omakase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Always inform the chef of allergies, vegetarian preferences, or fish types to avoid before the meal begins. Professional chefs will accommodate your needs while maintaining the omakase experience. Call ahead to discuss options with the restaurant.",
            },
        },
    ],
};

export default function WhatIsOmakase() {
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
                    src="/images/blog/15-C060324-6663.jpg"
                    alt="Omakase sushi experience at Jinbeh"
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
                        🍣 Cuisine
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        What is Omakase? Your Guide to Authentic Japanese Sushi
                    </h1>

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
                                        <strong>Curious about omakase?</strong> You've likely heard the term whispered with reverence
                                        at sushi bars, but understanding what it truly means—and what happens during this intimate
                                        culinary experience—is where the real magic begins. Omakase isn't just a meal; it's a relationship
                                        between you, the chef, and the art of sushi.
                                    </p>

                                    <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Omakase is trust in its purest form. You're saying to the chef, 'I believe in your judgment,
                                            your taste, and your commitment to excellence.' That's why it transforms a meal into an
                                            unforgettable experience."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Culinary Philosophy</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 What Does Omakase Mean?
                                    </h2>

                                    <p>
                                        The word "omakase" (お任せ) translates directly to "I trust you" in Japanese. More specifically,
                                        it's the polite form that means "I'll leave it up to you." When you order omakase at a sushi
                                        restaurant, you're formally placing your complete trust in the chef to select, prepare, and serve
                                        the finest pieces tailored to the day's ingredients and your palate.
                                    </p>

                                    <p>
                                        This isn't casual dining where you scan a menu and point at what looks good. Omakase is a curated
                                        experience, a conversation between chef and diner expressed through the medium of sushi. The chef
                                        becomes your guide, your artist, your educator all at once.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📖 The History and Philosophy of Omakase
                                    </h2>

                                    <p>
                                        Omakase emerged in post-World War II Japan, during Tokyo's bustling economic recovery. Street vendors
                                        and casual sushi stands served quick, affordable meals to workers. Diners would sit at the counter,
                                        and rather than ordering, they'd trust the chef to use the day's best, most economical ingredients—
                                        a practical necessity born from scarcity.
                                    </p>

                                    <p>
                                        Over decades, this practical approach transformed into an art form. As Japan's economy flourished,
                                        omakase evolved from necessity to luxury. Today's omakase represents the pinnacle of sushi craftsmanship,
                                        where only the freshest, most premium fish and highest skill levels are acceptable.
                                    </p>

                                    <p>
                                        The philosophy underpinning omakase reflects deeper Japanese values: seasonality (understanding what's
                                        best right now), craftsmanship (showing respect through mastery), and hospitality (reading the diner's
                                        mood and preferences). It's a reflection of both the chef's expertise and the diner's openness to discovery.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">⏰</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Timing Matters</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Each piece is prepared right before you eat it, ensuring optimal temperature and freshness at the moment it touches your lips.
                                            </p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🎨</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Artisanal Selection</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                The chef curates a progression, typically 10-20 pieces, starting with delicate flavors and building to richer selections.
                                            </p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🐟</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Premium Ingredients</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Omakase showcases the day's finest fish, often including rare and seasonal varieties not found on regular menus.
                                            </p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">👂</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Personal Touch</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                The chef reads you—your reactions, preferences, pace—and adjusts the experience in real-time for maximum enjoyment.
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍽️ What to Expect During Your Omakase Experience
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        1. Arrival and Seating
                                    </h3>
                                    <p>
                                        You'll typically be seated at the sushi bar, directly in front of the chef. This isn't random—it's intentional.
                                        Being face-to-face with the chef is central to the omakase experience. You'll see their precision, watch them
                                        work with deliberate care, and build a connection throughout the meal.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        2. The Opening Statement
                                    </h3>
                                    <p>
                                        Begin by saying "omakase onegaishimasu" (omakase, please) with a slight bow if you're comfortable. You can
                                        also mention any dietary restrictions, allergies, or strong dislikes at this point. A good chef will note
                                        these and work within them. Most chefs appreciate knowing if you have preferences for certain fish types.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        3. The Progression Begins
                                    </h3>
                                    <p>
                                        The chef will start with lighter, more delicate pieces—perhaps white fish with subtle flavors. Each piece is
                                        prepared individually and served immediately. You eat one piece, and while you're savoring it, the next is
                                        being prepared. This creates a rhythm, a flow that's both meditative and exciting.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        4. The Journey of Flavors
                                    </h3>
                                    <p>
                                        A well-executed omakase follows a flavor arc. You'll typically progress through:
                                    </p>
                                    <ul className="space-y-3">
                                        <li><strong>Light & Delicate:</strong> White fish (tai, halibut, squid)</li>
                                        <li><strong>Medium Flavors:</strong> Salmon, yellowtail, scallop</li>
                                        <li><strong>Rich & Intense:</strong> Toro (fatty tuna), uni (sea urchin), otoro</li>
                                        <li><strong>Special Preparations:</strong> Possibly torched, marinated, or cooked pieces</li>
                                        <li><strong>Finishing Touch:</strong> Often tamago (egg) or a lighter piece to cleanse the palate</li>
                                    </ul>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        5. Interaction and Education
                                    </h3>
                                    <p>
                                        Most chefs love to talk about their craft. They'll introduce each piece, tell you where the fish came from,
                                        how it was selected, and sometimes offer eating tips. Don't hesitate to ask questions or express appreciation—
                                        it creates a richer dialogue and helps the chef understand your interests better.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        6. The Closing
                                    </h3>
                                    <p>
                                        After the final piece, you'll often be offered a small palate cleanser (maybe soup or green tea) and sometimes
                                        a final sweet touch. The meal usually lasts 45 minutes to an hour—a perfect window where the chef has fully
                                        expressed their vision and you've had time to absorb it all.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ✨ Omakase Etiquette: How to Show Respect
                                    </h2>

                                    <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-8 text-white my-8">
                                        <h3 className="font-heading font-bold text-xl mb-6">Golden Rules of Omakase Etiquette</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl flex-shrink-0">✓</span>
                                                <div>
                                                    <span className="font-semibold block mb-1">Eat Immediately</span>
                                                    <p className="text-sm text-white/80">Never let a piece sit. It's prepared to order for maximum quality. Eat it right away.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl flex-shrink-0">✓</span>
                                                <div>
                                                    <span className="font-semibold block mb-1">Dip Fish First</span>
                                                    <p className="text-sm text-white/80">Lightly dip the fish side (not the rice) into soy sauce. The rice can become mushy if over-dipped.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl flex-shrink-0">✓</span>
                                                <div>
                                                    <span className="font-semibold block mb-1">Use Hands or Chopsticks</span>
                                                    <p className="text-sm text-white/80">Both are perfectly acceptable. Using hands is actually traditional and shows you're comfortable with the chef.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl flex-shrink-0">✓</span>
                                                <div>
                                                    <span className="font-semibold block mb-1">Express Gratitude</span>
                                                    <p className="text-sm text-white/80">Simple 'oishii' (delicious) or 'arigatou' (thank you) shows appreciation and keeps dialogue warm.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl flex-shrink-0">✓</span>
                                                <div>
                                                    <span className="font-semibold block mb-1">Trust the Chef</span>
                                                    <p className="text-sm text-white/80">Don't ask for substitutions or special orders. That defeats the purpose of omakase.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl flex-shrink-0">✓</span>
                                                <div>
                                                    <span className="font-semibold block mb-1">Pace Yourself</span>
                                                    <p className="text-sm text-white/80">Omakase isn't rushed. Enjoy each piece, engage with the chef, and let the experience unfold naturally.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        What NOT to Do
                                    </h3>
                                    <ul className="space-y-2 text-charcoal/80">
                                        <li><strong className="text-charcoal">❌ Don't use your phone:</strong> Put it away. Omakase is about presence and connection.</li>
                                        <li><strong className="text-charcoal">❌ Don't request changes:</strong> Trust the chef's selection. If you have allergies, mention them upfront.</li>
                                        <li><strong className="text-charcoal">❌ Don't waste pieces:</strong> Every item is carefully selected. If you can't finish, the chef has failed to read you.</li>
                                        <li><strong className="text-charcoal">❌ Don't over-season:</strong> Avoid dumping wasabi or soy sauce on everything. The chef has balanced flavors intentionally.</li>
                                        <li><strong className="text-charcoal">❌ Don't speak loudly:</strong> Keep conversation with companions low. Other diners (and chefs) appreciate the calm atmosphere.</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💰 Omakase Pricing & What You'll Pay
                                    </h2>

                                    <p>
                                        Omakase pricing varies dramatically based on location, restaurant tier, and ingredient selection:
                                    </p>
                                </div>

                                {/* Pricing Comparison Table */}
                                <div className="overflow-x-auto my-8">
                                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                        <thead className="bg-charcoal text-white">
                                            <tr>
                                                <th className="p-4 text-left font-heading">Restaurant Tier</th>
                                                <th className="p-4 text-left font-heading">Price Range</th>
                                                <th className="p-4 text-left font-heading">What to Expect</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-charcoal/80">
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Casual/Neighborhood</td>
                                                <td className="p-4">$50-100</td>
                                                <td className="p-4">Fresh fish, competent preparation, good value</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory bg-warm-ivory/30">
                                                <td className="p-4 font-semibold text-charcoal">Mid-Range</td>
                                                <td className="p-4">$100-150</td>
                                                <td className="p-4">Premium selections, expert chefs, refined experience</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">High-End</td>
                                                <td className="p-4">$150-250</td>
                                                <td className="p-4">Exceptional ingredients, master-level craftsmanship</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-semibold text-charcoal">Premium/Tokyo-level</td>
                                                <td className="p-4">$250+</td>
                                                <td className="p-4">Rare fish, aged selections, legendary chef reputation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <p>
                                        Most omakase experiences serve 10-20 pieces of nigiri or specialty items, sometimes including items like uni,
                                        aged toro, or special seasonal finds. Drinks are typically ordered separately. Always ask about pricing ahead
                                        of time or discuss your budget with the chef when ordering.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🏮 Why Try Omakase at Jinbeh?
                                    </h2>
                                </div>

                                {/* Jinbeh Feature Section */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/blog/11-C060324-6544.jpg"
                                                alt="Jinbeh sushi chef preparing omakase"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                🏯 Authentic Omakase at Jinbeh
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                Since 1988, Jinbeh has been perfecting the art of Japanese hospitality and sushi craftsmanship.
                                                Our expert chefs trained in Tokyo bring decades of experience to every piece they craft. When you
                                                sit at our sushi bar and order omakase, you're not just getting sushi—you're getting a masterclass
                                                in flavor, technique, and culinary philosophy.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Expert chefs with Tokyo training and 30+ years combined experience</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Fresh fish delivered daily from premium suppliers</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Intimate sushi bar setting with direct chef interaction</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Curated omakase experiences tailored to your preferences</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>4.7★ Google rating from thousands of satisfied diners</span>
                                                </li>
                                            </ul>
                                            <Link
                                                href="/frisco#reserve"
                                                className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                                            >
                                                Reserve Your Omakase Experience →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎯 Tips for Your First Omakase
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Before You Go
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>Call ahead and mention this is your first omakase. Most chefs will adjust their pace and explain more.</li>
                                        <li>Discuss budget. A chef can craft an experience within your price range.</li>
                                        <li>Mention any allergies or strong dislikes upfront. Don't surprise the chef mid-meal.</li>
                                        <li>Avoid heavy meals beforehand. You want an empty, eager palate.</li>
                                        <li>Plan for 45-60 minutes. Don't rush. This is an experience, not fast food.</li>
                                    </ul>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        During the Experience
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>Engage with the chef. Ask questions. Show interest. It enhances everything.</li>
                                        <li>Try not to dip everything. Some fish doesn't need soy sauce and will taste better plain.</li>
                                        <li>Use ginger as a palate cleanser between pieces, not as a topping.</li>
                                        <li>Eat immediately after each piece is served. Temperature and texture matter enormously.</li>
                                        <li>Be honest about your reactions. If you love something, say so. If something doesn't work for you, the chef will adjust.</li>
                                    </ul>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Tipping and Gratitude
                                    </h3>
                                    <p>
                                        Tipping your chef is customary in the US, typically 15-20% of your bill. Some high-end establishments may
                                        include a service charge. At the end, a sincere "gochisousama deshita" (thank you for the meal) and a bow
                                        if you're comfortable shows deep appreciation and respect for their craft.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ❓ Frequently Asked Questions About Omakase
                                    </h2>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-8">
                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What does omakase mean?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    <strong>Omakase</strong> means "I trust you" in Japanese. When you order omakase, you're entrusting
                                                    the sushi chef to select and prepare dishes that showcase their expertise and the day's finest
                                                    ingredients, creating a personalized culinary journey.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How much does omakase typically cost?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Omakase prices vary widely. Casual restaurants offer $50-100 per person, mid-range establishments
                                                    charge $100-150, and high-end restaurants run $150-250+. Premium Tokyo-level experiences can exceed
                                                    $300 per person. Always ask about pricing before ordering.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What is included in an omakase experience?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Typical omakase includes 10-20 pieces of sushi, starting with delicate flavors and progressing to richer ones.
                                                    Pieces are freshly prepared to order and may include nigiri, specialty items, uni, and sometimes cooked or torched pieces.
                                                    Many experiences end with a palate cleanser like tamago (egg) or soup.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How do I order omakase for the first time?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Sit at the sushi bar and say "omakase onegaishimasu" (omakase, please). Mention any allergies or strong dislikes upfront.
                                                    If this is your first time, tell the chef—most will explain each piece and adjust their pace. Stay engaged, ask questions,
                                                    and eat each piece immediately after it's served.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can I specify what fish I want or don't want?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    You can mention strong dislikes or allergies before starting. However, the spirit of omakase is to trust the chef's selection.
                                                    If you request specific items or exclude many things, you're diminishing the omakase experience. Regular sushi ordering
                                                    gives you more control if that's your preference.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can I have omakase if I'm vegetarian or have dietary restrictions?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Yes, with advance notice. Call the restaurant and discuss your dietary needs. Professional chefs can create omakase
                                                    experiences with cooked items, vegetables, and other accommodations. Some restaurants may have limitations, so it's important
                                                    to coordinate ahead of time to ensure they can fulfill your request properly.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How long does an omakase meal typically last?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Most omakase experiences last 45 minutes to an hour. This allows the chef to carefully prepare each piece, explain their selection,
                                                    and read your reactions. Rushing an omakase defeats its purpose. Plan accordingly and treat it as a special occasion worth your full time investment.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What should I drink with omakase?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Traditional pairings include sake, beer, or wine. Many chefs recommend premium sake that complements the delicate flavors of the fish.
                                                    Green tea or sparkling water are also excellent choices. Ask the chef for recommendations—they often know which beverages work best with their selection.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-deep-indigo to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                                        🍣 Ready to Experience Authentic Omakase?
                                    </h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Discover the art and philosophy of omakase at Jinbeh. Our expert chefs are ready to take you on an unforgettable culinary journey.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/frisco#reserve"
                                            className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                                        >
                                            Reserve Your Omakase
                                        </Link>
                                        <Link
                                            href="/frisco/menu"
                                            className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg"
                                        >
                                            View Our Menu
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
                                    <Link href="/blog/types-of-sushi" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/12-C060324-6551.jpg" alt="Sushi types" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-orange-500">🍣 Cuisine</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Types of Sushi: Must-Try Varieties</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/best-sushi-frisco" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Best sushi Frisco" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">📍 Locations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Sushi Frisco TX</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/best-happy-hour-frisco-tx" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/10-C060324-6501.jpg" alt="Happy hour" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-accent-red">✨ Tips & Guides</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Happy Hour Frisco TX</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">🍣 Cuisine</Link>
                                        <Link href="/blog?category=tips-guides" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal transition-colors">✨ Tips</Link>
                                        <Link href="/blog?category=locations" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal transition-colors">📍 Locations</Link>
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
