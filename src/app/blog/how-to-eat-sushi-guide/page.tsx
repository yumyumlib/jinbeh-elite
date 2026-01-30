import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Eat Sushi: Complete Etiquette & Eating Tips Guide | Jinbeh",
    description:
        "Master sushi etiquette with our comprehensive guide. Learn proper techniques, chopstick tips, soy sauce rules, and what not to do when eating sushi.",
    keywords: [
        "how to eat sushi",
        "sushi etiquette",
        "sushi eating tips",
        "proper way to eat sushi",
        "sushi guide",
        "sushi chopsticks",
        "sushi mistakes",
    ],
    openGraph: {
        title: "How to Eat Sushi: Complete Etiquette & Eating Tips Guide",
        description: "Master the art of eating sushi. Learn proper techniques, etiquette, and insider tips.",
        images: ["/images/blog/12-C060324-6551.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Eat Sushi: Complete Etiquette & Eating Tips Guide",
    description: "Comprehensive guide to sushi eating etiquette, techniques, and insider tips for proper sushi enjoyment.",
    image: "https://jinbeh.com/images/blog/12-C060324-6551.jpg",
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
            name: "Is it better to eat sushi with chopsticks or fingers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both are acceptable! Traditional etiquette allows using fingers for nigiri sushi. Chopsticks are better for rolls and sashimi. Choose whichever method makes you most comfortable.",
            },
        },
        {
            "@type": "Question",
            name: "Which side of sushi should I dip in soy sauce?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Dip the fish side, not the rice side. Dipping the rice absorbs too much soy sauce and masks the sushi chef's carefully seasoned rice. Just a light dip of the fish is perfect.",
            },
        },
        {
            "@type": "Question",
            name: "How should I use wasabi and ginger when eating sushi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Use pickled ginger as a palate cleanser between different pieces of sushi. Apply wasabi directly to the fish (if desired) or mix it into your soy sauce. Avoid piling wasabi directly on sushi like a topping.",
            },
        },
        {
            "@type": "Question",
            name: "What are common sushi etiquette mistakes to avoid?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Don't use a spoon for soy sauce, don't rub chopsticks together, avoid sticking chopsticks upright in rice (resembles a funeral ritual), don't mix soy and wasabi together excessively, and never waste food.",
            },
        },
        {
            "@type": "Question",
            name: "Can I eat sushi with my hands?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! In Japan, it's traditional to eat nigiri sushi with your hands. This is completely acceptable and often preferred. Rolls are typically eaten with chopsticks.",
            },
        },
        {
            "@type": "Question",
            name: "Should I eat sushi in one bite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, try to eat nigiri in one bite when possible. This allows all flavors to blend together. If a piece is too large, it's acceptable to take two bites, but avoid nibbling.",
            },
        },
    ],
};

export default function HowToEatSushi() {
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
                        How to Eat Sushi: Master Etiquette & Tips
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
                                        <strong>Feeling nervous about eating sushi?</strong> You're not alone. From chopsticks to soy sauce to wasabi,
                                        there are plenty of unwritten rules. But here's the good news: sushi is meant to be enjoyed, and there's
                                        no pressure to be perfect. Let's walk through the proper way to eat sushi so you can dine with confidence.
                                    </p>

                                    <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Sushi is not just about the food—it's about respect, tradition, and the experience.
                                            At Jinbeh, we believe everyone should feel comfortable enjoying sushi their own way,
                                            while learning to appreciate the craft behind each piece."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📖 Sushi Etiquette Step-by-Step
                                    </h2>

                                    <p className="text-charcoal/80">
                                        Let's walk through the basic steps to eat sushi properly, from preparation to the final bite.
                                    </p>
                                </div>

                                {/* Step-by-Step Guide */}
                                <div className="space-y-6 my-12">
                                    <div className="bg-gradient-to-r from-soft-gold/20 to-orange-500/10 rounded-2xl p-6 border-l-4 border-orange-500">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-heading font-bold">1</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Prepare Your Station</h3>
                                                <p className="text-charcoal/80">
                                                    Arrange your chopsticks (or use them if you prefer), napkin, and small soy sauce dish.
                                                    Place the chopstick rest in front of you. Your soy sauce dish should be at a comfortable angle
                                                    for dipping without splashing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-orange-500/10 rounded-2xl p-6 border-l-4 border-orange-500">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-heading font-bold">2</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Start with Mild Flavors</h3>
                                                <p className="text-charcoal/80">
                                                    Begin your meal with lighter, more delicate pieces (white fish like flounder or sea bream).
                                                    This preps your palate before moving to bolder flavors like fatty tuna or strong-flavored fish.
                                                    Think of it as a culinary journey.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-orange-500/10 rounded-2xl p-6 border-l-4 border-orange-500">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-heading font-bold">3</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Dip (Lightly!) the Fish Side</h3>
                                                <p className="text-charcoal/80">
                                                    Hold the sushi with your fingers or chopsticks. Flip it so the fish faces down into the soy sauce.
                                                    Use a quick, light dip—just the bottom touches. Dipping the rice side ruins the chef's work and
                                                    makes the piece soggy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-orange-500/10 rounded-2xl p-6 border-l-4 border-orange-500">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-heading font-bold">4</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Eat in One Bite (If Possible)</h3>
                                                <p className="text-charcoal/80">
                                                    Pop the entire piece into your mouth. This allows the fish, rice, and nori to blend flavors together.
                                                    If it's too large, two bites are acceptable—just avoid nibbling or breaking the piece apart.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-orange-500/10 rounded-2xl p-6 border-l-4 border-orange-500">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-heading font-bold">5</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Cleanse Your Palate</h3>
                                                <p className="text-charcoal/80">
                                                    Between different pieces (especially when switching from spicy to delicate), take a bite of
                                                    pickled ginger. It refreshes your palate and prepares your taste buds for the next flavor profile.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-orange-500/10 rounded-2xl p-6 border-l-4 border-orange-500">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-heading font-bold">6</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Enjoy the Experience</h3>
                                                <p className="text-charcoal/80">
                                                    Pause between bites. Take in the flavors, textures, and presentation. Sushi is meant to be
                                                    savored. Conversation, appreciation, and mindful eating are all part of the proper sushi experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🥢 Chopsticks vs. Fingers: What's Proper?
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        This is one of the biggest misconceptions about sushi etiquette. In Japan, both are completely acceptable!
                                    </p>
                                </div>

                                {/* Chopsticks vs Fingers Comparison */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                                    <div className="bg-warm-ivory rounded-2xl p-6 border-2 border-soft-gold">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                                            <span className="text-2xl">🥢</span> Chopsticks
                                        </h3>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Best For:</p>
                                                <p className="text-charcoal/70 text-sm">Rolls, sashimi, and if you're more comfortable</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Advantages:</p>
                                                <ul className="text-charcoal/70 text-sm space-y-1">
                                                    <li>• Keeps fingers clean</li>
                                                    <li>• Good control for rolls</li>
                                                    <li>• Feels more formal</li>
                                                    <li>• Easier if you're clumsy</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/70 text-sm italic">Hold them at a 45-degree angle. Never rub them together—it's considered rude!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-2 border-accent-red">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                                            <span className="text-2xl">👌</span> Fingers
                                        </h3>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Best For:</p>
                                                <p className="text-charcoal/70 text-sm">Nigiri, traditional sushi, authentic experience</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Advantages:</p>
                                                <ul className="text-charcoal/70 text-sm space-y-1">
                                                    <li>• Most authentic in Japan</li>
                                                    <li>• Better control of temperature</li>
                                                    <li>• Allows precise dipping</li>
                                                    <li>• More enjoyable experience</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/70 text-sm italic">Use your thumb and first two fingers. Grab from the side, not the top!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-6 text-white my-8">
                                    <p className="font-semibold mb-2">The Bottom Line:</p>
                                    <p className="text-white/90">
                                        In authentic Japanese dining, using your fingers for nigiri is not just accepted—it's preferred!
                                        You won't offend anyone. Choose whichever method makes you feel most comfortable and confident.
                                    </p>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🥢 Chopstick Etiquette You Must Know
                                    </h2>
                                </div>

                                {/* Chopstick Rules */}
                                <div className="space-y-4 my-8">
                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">❌</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Never stick chopsticks upright in rice</p>
                                            <p className="text-charcoal/70 text-sm">This resembles a funeral ritual in Japanese culture and is deeply disrespectful.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">❌</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Don't rub chopsticks together</p>
                                            <p className="text-charcoal/70 text-sm">This suggests the sticks are cheap or low quality. If they're splintering, ask for a fresh pair.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">❌</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Don't pass food from chopstick to chopstick</p>
                                            <p className="text-charcoal/70 text-sm">This mimics a funeral ritual where families pass cremated bones between chopsticks.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">✅</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Place chopsticks on the rest between bites</p>
                                            <p className="text-charcoal/70 text-sm">Never leave them on your plate or crossed on the table.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">✅</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Hold them gently and gracefully</p>
                                            <p className="text-charcoal/70 text-sm">They're a tool, not a weapon! Smooth, controlled movements show respect.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Soy Sauce Etiquette: The Art of Dipping
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Soy sauce is crucial to the sushi experience, but there are definitely right and wrong ways to use it.
                                    </p>
                                </div>

                                {/* Soy Sauce Guide */}
                                <div className="bg-gradient-to-br from-soft-gold/20 to-orange-500/10 rounded-2xl p-8 my-8 border-l-4 border-orange-500">
                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-6">The Golden Rules of Soy Sauce</h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">1️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Dip the Fish, Not the Rice</p>
                                                <p className="text-charcoal/80">
                                                    The rice is already seasoned by the sushi chef with vinegar and salt. Dipping the rice side means you're:
                                                    (a) soaking up too much salt, (b) ruining the chef's careful seasoning, and (c) making the rice mushy.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">2️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Use a Light Touch</p>
                                                <p className="text-charcoal/80">
                                                    Quick dips only! A fraction of a second in soy sauce is enough. Deep dunking ruins the delicate flavors
                                                    and creates a salty, overwhelming taste.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">3️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Avoid Mixing Soy Sauce and Wasabi</p>
                                                <p className="text-charcoal/80">
                                                    Many people mix these into a murky brown paste. This is not traditional. Use them separately.
                                                    Apply wasabi directly to the fish if you want heat, or dab a tiny bit of wasabi on the side.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">4️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Always Use a Small Dish</p>
                                                <p className="text-charcoal/80">
                                                    Pour a small amount from the main bottle into your personal dish. Never dunk directly into the bottle—that's unsanitary.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">5️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Don't Waste What You Pour</p>
                                                <p className="text-charcoal/80">
                                                    Once soy sauce is in your dish, finish it. Leaving puddles is disrespectful to the chef and the meal.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🔥 Wasabi & Ginger: When, Where & How to Use Them
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        These are the supporting players in your sushi performance. Let's break down how to use them properly.
                                    </p>
                                </div>

                                {/* Wasabi vs Ginger */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                                    <div className="bg-gradient-to-br from-accent-red/10 to-orange-500/10 rounded-2xl p-6 border-2 border-accent-red">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4">🌶️ Wasabi</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">What It Is:</p>
                                                <p className="text-charcoal/80 text-sm">
                                                    Japanese horseradish (though most restaurants use imitation). It's hot, pungent, and meant to complement the fish.
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">How to Use It:</p>
                                                <ul className="text-charcoal/80 text-sm space-y-2">
                                                    <li>• Apply tiny amounts directly to the fish</li>
                                                    <li>• OR dab a small amount on the side of your soy sauce</li>
                                                    <li>• Resist the urge to pile it on like a topping</li>
                                                    <li>• If you don't want it, that's fine too!</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/80 text-sm italic">
                                                    Real wasabi is subtle and complex. The heat builds slowly rather than attacking your sinuses.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-purple-500/10 rounded-2xl p-6 border-2 border-deep-indigo">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4">🍋 Pickled Ginger</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">What It Is:</p>
                                                <p className="text-charcoal/80 text-sm">
                                                    Thinly sliced ginger pickled in vinegar. It's refreshing, slightly sweet, and your palate's best friend.
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">How to Use It:</p>
                                                <ul className="text-charcoal/80 text-sm space-y-2">
                                                    <li>• Eat a slice between different pieces</li>
                                                    <li>• Cleanse your palate before trying new flavors</li>
                                                    <li>• NEVER use it as a topping on sushi</li>
                                                    <li>• It's an intermezzo, not a condiment</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/80 text-sm italic">
                                                    Many chefs add ginger on top of nigiri themselves. If they do, eat it! It's intentional.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ⚠️ Common Sushi Mistakes to Avoid
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Don't worry if you've done these before—most people have! But now you'll know better.
                                    </p>
                                </div>

                                {/* Common Mistakes */}
                                <div className="space-y-4 my-8">
                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Dunking the Entire Roll in Soy Sauce</h4>
                                                <p className="text-charcoal/80">
                                                    Rolls are already flavorful. A light dip on one side is enough. Oversaturation makes them soggy and salty.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Piling Wasabi on Top Like a Topping</h4>
                                                <p className="text-charcoal/80">
                                                    Wasabi is meant to enhance, not smother. A tiny dab on the fish is plenty. Your sushi shouldn't look like a wasabi mountain.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Mixing Soy Sauce and Wasabi Into a Paste</h4>
                                                <p className="text-charcoal/80">
                                                    This creates a murky, overpowering mixture that masks flavors. Keep them separate and use sparingly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Taking Tiny Bites Instead of One Bite</h4>
                                                <p className="text-charcoal/80">
                                                    Nibbling falls apart. Eat nigiri in one bite to experience all the flavors together. It's part of the art.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Using Ginger as a Topping</h4>
                                                <p className="text-charcoal/80">
                                                    Ginger goes on your palate, not on your sushi (unless the chef placed it there). It's a palate cleanser, not a flavor enhancer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Rubbing Chopsticks Together</h4>
                                                <p className="text-charcoal/80">
                                                    This implies the chopsticks are cheap or splintery. If they're not smooth, politely ask for a fresh pair.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Wasting Food</h4>
                                                <p className="text-charcoal/80">
                                                    Leaving sushi on your plate or not finishing your soy sauce is disrespectful to the chef and the meal's tradition.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Using a Spoon in the Soy Sauce Dish</h4>
                                                <p className="text-charcoal/80">
                                                    Spoons aren't necessary. Dip directly or use chopsticks to guide food. Spoons make dipping awkward.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💡 Pro Tips for Dining Like an Expert
                                    </h2>
                                </div>

                                {/* Pro Tips */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                    <div className="bg-gradient-to-br from-soft-gold/30 to-orange-500/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #1: Respect the Sushi Chef</p>
                                        <p className="text-charcoal/80 text-sm">
                                            Every piece is crafted with care. Eating with intention and appreciation honors their work.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-orange-500/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #2: Order Progressively</p>
                                        <p className="text-charcoal/80 text-sm">
                                            Start mild, end bold. White fish, then tuna, then spicy rolls. This builds the experience.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-orange-500/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #3: Sit at the Counter</p>
                                        <p className="text-charcoal/80 text-sm">
                                            If possible, eat at the sushi bar. You'll get the freshest pieces and can interact with the chef.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-orange-500/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #4: No Photos, Just Moments</p>
                                        <p className="text-charcoal/80 text-sm">
                                            A quick photo is fine, but eat while the sushi is fresh. Cold sushi loses its delicate flavors.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-orange-500/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #5: Ask the Chef's Recommendation</p>
                                        <p className="text-charcoal/80 text-sm">
                                            "What's fresh today?" Chef's specials are often the best—they know quality when they see it.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-orange-500/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #6: Don't Rush</p>
                                        <p className="text-charcoal/80 text-sm">
                                            Sushi is not fast food. Savor each bite, pause, appreciate. Rushing ruins the experience.
                                        </p>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Is it better to eat sushi with chopsticks or fingers?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Both are completely acceptable! In Japan, using your fingers for nigiri is actually traditional and preferred.
                                                    Chopsticks are better for rolls and sashimi. Choose whichever method makes you most comfortable.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Which side of sushi should I dip in soy sauce?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Always dip the <strong>fish side</strong>, never the rice side. The rice is already seasoned by the chef.
                                                    Dipping the rice absorbs too much soy sauce and ruins the carefully balanced seasoning. Just a light dip is enough!
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How should I use wasabi and ginger when eating sushi?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Use <strong>pickled ginger as a palate cleanser</strong> between different pieces of sushi. Apply <strong>wasabi sparingly</strong>,
                                                    either directly to the fish or dab a tiny amount on the side of your soy sauce. Avoid piling wasabi like a topping
                                                    or mixing it with soy sauce into a paste.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What are the most common sushi etiquette mistakes?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Common mistakes include: (1) Dipping the rice side instead of fish, (2) Over-applying wasabi,
                                                    (3) Mixing soy sauce and wasabi into a paste, (4) Taking tiny bites instead of one bite,
                                                    (5) Using ginger as a topping, (6) Rubbing chopsticks together, and (7) Wasting food.
                                                    Now you'll avoid them all!
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can I eat sushi with my hands?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Yes! In Japan, it's traditional to eat nigiri sushi with your hands. This is completely acceptable
                                                    and often preferred. It gives you better control and allows you to feel the temperature of the fish.
                                                    Rolls are typically eaten with chopsticks.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Should I eat sushi in one bite?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Yes, try to eat nigiri in one bite when possible. This allows all the flavors—fish, rice, and any toppings—
                                                    to blend together. If a piece is too large, two bites are acceptable, but avoid nibbling or breaking it apart.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-orange-500 to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍣 Ready to Dine with Confidence?</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Now that you know the etiquette, experience authentic sushi at Jinbeh. Our chefs prepare every piece with care,
                                        and our team ensures your meal is unforgettable.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/frisco/menu" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Explore Our Menu
                                        </Link>
                                        <Link href="/frisco#reserve" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            Reserve a Table
                                        </Link>
                                    </div>
                                </div>

                                {/* Additional CTA - Blog Links */}
                                <div className="mt-12 p-8 bg-warm-ivory rounded-2xl">
                                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">Want to Learn More?</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Link href="/blog/types-of-sushi" className="p-4 border-2 border-orange-500 rounded-xl hover:bg-orange-500/10 transition-colors">
                                            <p className="font-semibold text-charcoal">Types of Sushi</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Explore nigiri, rolls, and specialty creations</p>
                                        </Link>
                                        <Link href="/blog/sashimi-vs-sushi" className="p-4 border-2 border-orange-500 rounded-xl hover:bg-orange-500/10 transition-colors">
                                            <p className="font-semibold text-charcoal">Sashimi vs Sushi</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Understand the key differences</p>
                                        </Link>
                                        <Link href="/blog/sake-pairing-guide" className="p-4 border-2 border-orange-500 rounded-xl hover:bg-orange-500/10 transition-colors">
                                            <p className="font-semibold text-charcoal">Sake Pairing Guide</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Perfect your sushi with sake</p>
                                        </Link>
                                        <Link href="/blog/sushi-for-beginners" className="p-4 border-2 border-orange-500 rounded-xl hover:bg-orange-500/10 transition-colors">
                                            <p className="font-semibold text-charcoal">Sushi for Beginners</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Start your sushi journey right</p>
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
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Types of sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-orange-500">🍣 Cuisine</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Types of Sushi Guide</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/sashimi-vs-sushi" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/11-C060324-6544.jpg" alt="Sashimi vs sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-orange-500">🍣 Cuisine</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Sashimi vs Sushi Explained</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/sake-pairing-guide" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/10-C060324-6501.jpg" alt="Sake pairing" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-purple-600">🍶 Beverages</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Sake Pairing Guide</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/best-sushi-frisco" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/13-C060324-6582.jpg" alt="Best sushi Frisco" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">📍 Locations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Sushi in Frisco</h4>
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
