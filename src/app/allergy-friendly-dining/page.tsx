import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuoteStrip } from "@/components/CustomerVoice";
import Link from "next/link";

export const metadata: Metadata = {
    title:
        "Allergy-Friendly Dining | Jinbeh Japanese Restaurant Frisco & Lewisville TX",
    description:
        "Jinbeh accommodates food allergies including gluten-free, dairy-free, nut-free, and shellfish-free options. Our hibachi chefs cook at your table and adapt each dish to your needs. Frisco & Lewisville TX.",
    keywords: [
        "allergy friendly restaurant frisco",
        "allergy friendly restaurant lewisville tx",
        "food allergy japanese restaurant",
        "gluten free japanese restaurant near me",
        "dairy free sushi",
        "nut free restaurant frisco",
        "hibachi food allergies",
        "shellfish allergy japanese food",
        "allergy safe dining frisco tx",
        "food allergy restaurant dfw",
        "gluten free hibachi",
        "dairy free japanese food",
    ],
    openGraph: {
        title: "Allergy-Friendly Dining | Jinbeh Japanese Restaurant",
        description:
            "Dine with confidence. Our chefs accommodate allergies at your table — gluten-free, dairy-free, nut-free, shellfish-free options available.",
        url: "https://jinbeh.com/allergy-friendly-dining",
    },
    alternates: {
        canonical: "https://jinbeh.com/allergy-friendly-dining",
    },
};

// FAQ Schema
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can Jinbeh accommodate food allergies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Please inform your server about any food allergies when you arrive. Our hibachi chefs cook at your table and can adjust ingredients, cooking order, and preparation methods. We regularly accommodate gluten-free, dairy-free, nut-free, and shellfish-free requests.",
            },
        },
        {
            "@type": "Question",
            name: "Is hibachi safe for people with shellfish allergies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our hibachi chefs can accommodate shellfish allergies. Tell your chef directly — they cook at your table and can prepare your meal using separate utensils and adjust the cooking order. For example, shrimp appetizers can be cooked last to prevent cross-contact with your food. Beef, chicken, salmon, and vegetable hibachi are naturally shellfish-free.",
            },
        },
        {
            "@type": "Question",
            name: "Does Jinbeh offer gluten-free options?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our sashimi (salmon, tuna, yellowtail) is naturally gluten-free. Hibachi proteins like steak, chicken, salmon, and shrimp can be prepared gluten-free by requesting no soy sauce or substituting tamari. Steamed rice and edamame are also gluten-free. Let your server know so we can ensure proper preparation.",
            },
        },
        {
            "@type": "Question",
            name: "Can I eat sushi with a dairy allergy?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most sushi and sashimi at Jinbeh is naturally dairy-free. Avoid rolls with cream cheese (Philadelphia Roll, Vegas Roll, Butterfly Kiss) and request no butter on hibachi items. Our sashimi, spicy tuna roll, and many specialty rolls are dairy-free.",
            },
        },
        {
            "@type": "Question",
            name: "How does Jinbeh handle cross-contamination?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Hibachi dining provides a unique advantage — your chef cooks at your table in front of you. You can communicate directly with the person preparing your food. For severe allergies, our chefs can adjust cooking order, use separate utensils, and clean the grill surface. While we cannot guarantee a completely allergen-free environment, we take every precaution to keep you safe.",
            },
        },
        {
            "@type": "Question",
            name: "What should I do if I have food allergies at a hibachi restaurant?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Inform your server when ordering and again when your hibachi chef arrives. Specify exactly which foods you're allergic to. Our chefs are experienced at adjusting preparation — they can change cooking order, omit ingredients, and use clean tools. The advantage of hibachi is that you watch everything being prepared.",
            },
        },
        {
            "@type": "Question",
            name: "Is Japanese food safe for nut allergies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Traditional Japanese cuisine uses very few tree nuts. Jinbeh's hibachi, sushi, and sashimi menus are generally nut-free. Sesame may be present as garnish on some rolls — let your server know and we'll omit it. We do not use peanut oil for cooking.",
            },
        },
        {
            "@type": "Question",
            name: "Can I request allergen-free cooking at Jinbeh?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We regularly accommodate dairy-free, gluten-free, shellfish-free, soy-free, egg-free, and nut-free requests. Tell your server and chef about your specific needs. For large parties or catering events, call ahead so we can plan your menu: Frisco (214) 619-1200 or Lewisville (214) 488-2224.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://jinbeh.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Allergy-Friendly Dining",
            item: "https://jinbeh.com/allergy-friendly-dining",
        },
    ],
};

// Allergen guide data
const allergenGuide = [
    {
        allergen: "Shellfish",
        emoji: "🦐",
        avoid: [
            "Jumbo Shrimp",
            "Lobster Tail",
            "Sea Scallops",
            "Spider Roll",
            "Shrimp Tempura Roll",
            "Volcano Roll",
            "California Roll (crab)",
            "Steak & Shrimp Combo",
        ],
        safe: [
            "Filet Mignon",
            "NY Strip",
            "Ribeye",
            "Chicken Teriyaki",
            "Hibachi Salmon",
            "Vegetable & Tofu",
            "Spicy Tuna Roll",
            "All Sashimi (fish only)",
        ],
        tip: "Our chefs can cook shrimp appetizers last to prevent cross-contact, as noted by guests with shellfish allergies.",
    },
    {
        allergen: "Dairy",
        emoji: "🥛",
        avoid: [
            "Philadelphia Roll (cream cheese)",
            "Vegas Roll (cream cheese)",
            "Butterfly Kiss Roll",
            "Items with garlic butter (request omission)",
        ],
        safe: [
            "All Sashimi",
            "Spicy Tuna Roll",
            "Dragon Roll",
            "Rainbow Roll",
            "Hibachi proteins (request no butter)",
            "Edamame",
            "Tuna Tartare",
        ],
        tip: "Request 'no butter' on hibachi items. Most sushi and sashimi is naturally dairy-free.",
    },
    {
        allergen: "Gluten",
        emoji: "🌾",
        avoid: [
            "Standard soy sauce (contains wheat)",
            "Gyoza (wheat wrapper)",
            "Tempura dishes (wheat batter)",
            "Teriyaki sauces (may contain wheat)",
        ],
        safe: [
            "All Sashimi",
            "Hibachi proteins (with tamari/GF soy)",
            "Steamed rice",
            "Edamame",
            "Seared Ahi Tuna",
            "Tuna Tartare (no wonton)",
        ],
        tip: "Ask for tamari (gluten-free soy sauce) or request no sauce. Steamed rice is a great substitute for fried rice.",
    },
    {
        allergen: "Soy",
        emoji: "🫘",
        avoid: [
            "Soy sauce",
            "Miso soup",
            "Edamame",
            "Tofu",
            "Teriyaki glaze",
            "Most dipping sauces",
        ],
        safe: [
            "Hibachi proteins with no sauce",
            "Sashimi without soy sauce",
            "Steamed rice",
            "Fresh vegetables",
        ],
        tip: "Ask for sauce-free preparation. Our chefs can season with salt and citrus instead.",
    },
    {
        allergen: "Eggs",
        emoji: "🥚",
        avoid: [
            "Fried rice (contains egg)",
            "Spicy mayo & mayo-based sauces",
            "Some tempura batters",
        ],
        safe: [
            "Steamed rice (as substitute)",
            "All sashimi",
            "Hibachi proteins",
            "Most sushi rolls (check sauce)",
            "Miso soup",
        ],
        tip: "Request steamed rice instead of fried rice — it's a simple substitution our kitchen handles daily.",
    },
    {
        allergen: "Fish",
        emoji: "🐟",
        avoid: [
            "All sashimi & sushi",
            "Chirashi bowl",
            "Omakase",
            "Hibachi salmon",
            "Dashi-based soups",
        ],
        safe: [
            "Chicken Teriyaki hibachi",
            "Filet Mignon",
            "NY Strip & Ribeye",
            "Gyoza (pork)",
            "Edamame",
            "Vegetable & Tofu hibachi",
        ],
        tip: "Our hibachi menu has many beef, chicken, and veggie options that don't involve fish at all.",
    },
    {
        allergen: "Sesame",
        emoji: "⚪",
        avoid: [
            "Sesame seed garnish (on many rolls)",
            "Sesame oil",
            "Some salad dressings",
        ],
        safe: [
            "Most items — just request no sesame",
            "Sashimi (plain)",
            "Hibachi proteins",
            "Steamed rice",
        ],
        tip: "Sesame is typically a garnish and can be easily omitted. Just let your server know.",
    },
];

// Accommodation approach cards
const accommodationCards = [
    {
        emoji: "🗣️",
        title: "Tell Your Server",
        description:
            "Start by telling your server about your allergy when you order. They'll flag your table and communicate directly with the kitchen or your hibachi chef.",
    },
    {
        emoji: "👨‍🍳",
        title: "Chef at Your Table",
        description:
            "Hibachi dining gives you a unique advantage — your chef cooks right in front of you. You communicate directly with the person preparing your food.",
    },
    {
        emoji: "🔄",
        title: "Flexible Preparation",
        description:
            "Our chefs adjust cooking order, swap ingredients, use separate utensils, and clean grill surfaces. Substitutions like steamed rice for fried rice are common.",
    },
    {
        emoji: "✅",
        title: "Common Accommodations",
        description:
            "We regularly handle gluten-free, dairy-free, nut-free, shellfish-free, soy-free, and egg-free requests. Just let us know what you need.",
    },
];

export default function AllergyFriendlyDiningPage() {
    return (
        <>
            <Header />
            <main id="main-content" className="min-h-screen">
                {/* Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema),
                    }}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-deep-indigo py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-soft-gold/30 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-red/20 rounded-full blur-3xl" />
                    </div>
                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
                            <span className="text-lg">🛡️</span>
                            <span className="text-warm-ivory/90 text-sm font-medium">
                                Family-Owned Since 1988 · Allergy Accommodations Available
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                            Dine with Confidence
                            <br />
                            <span className="text-soft-gold">at Jinbeh</span>
                        </h1>
                        <p className="text-xl text-warm-ivory/80 max-w-3xl mx-auto mb-8">
                            Food allergies shouldn&apos;t stop you from enjoying an amazing
                            dining experience. Our hibachi chefs cook at your table and adapt
                            every dish to your needs — gluten-free, dairy-free, nut-free,
                            shellfish-free, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/reservations"
                                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-4 rounded-xl font-semibold shadow-lg"
                            >
                                Reserve Your Table
                            </Link>
                            <a
                                href="#allergen-guide"
                                className="btn bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold"
                            >
                                View Allergen Guide ↓
                            </a>
                        </div>

                        {/* Trust signals */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 text-warm-ivory/70 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-lg">⭐</span>
                                <span>
                                    4.6 Google · 1,200+ Reviews
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                <span>Family-Owned & Operated</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg">🏆</span>
                                <span>38 Years of Service</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Accommodate Allergies */}
                <section className="py-20 bg-warm-ivory">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                                How We Accommodate Allergies
                            </h2>
                            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                                At Jinbeh, your safety comes first. Here&apos;s our approach to
                                making every guest feel welcome — and well-fed.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {accommodationCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-14 h-14 bg-accent-red/10 rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-2xl">{card.emoji}</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-charcoal mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-charcoal/70 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Hibachi advantage callout */}
                        <div className="mt-12 max-w-3xl mx-auto bg-deep-indigo/5 border border-deep-indigo/20 rounded-2xl p-8 text-center">
                            <h3 className="font-heading font-bold text-charcoal mb-3 text-lg">
                                🔥 The Hibachi Advantage
                            </h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                Unlike kitchen-only restaurants, our hibachi chefs cook{" "}
                                <strong>right in front of you</strong>. You see every
                                ingredient, every step, and can communicate your allergies
                                directly to the person preparing your meal. This transparency is
                                why families with food allergies choose hibachi dining at Jinbeh.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Testimonial — Linda F. */}
                <section className="py-16 bg-white border-y border-stone-200">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-warm-ivory rounded-2xl p-8 md:p-12 border border-stone-200 relative">
                                <div className="absolute -top-4 left-8 bg-accent-red text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                                    Real Guest Experience
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-soft-gold"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6 italic">
                                    &ldquo;We had a 5 pm reservation to celebrate our wedding
                                    anniversary. We were served drinks, salad, and soup right
                                    away. Our host was very welcoming, as well as our server. My
                                    husband and I ordered the filet mignon and steamed rice.{" "}
                                    <strong className="text-charcoal not-italic">
                                        I have a dairy and shrimp allergy, which our chef
                                        accommodated by cooking the shrimp appetizer last.
                                    </strong>{" "}
                                    The food was delicious — more than we could eat. Our chef put
                                    on a great show, too. Highly recommend Jinbeh. We will be
                                    back.&rdquo;
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-accent-red/10 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-accent-red"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-charcoal">Linda F.</p>
                                        <p className="text-xs text-charcoal/60">
                                            Google Review · March 2025 · Wedding Anniversary
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    <span className="text-xs px-3 py-1 bg-accent-red/10 text-accent-red rounded-full font-medium border border-accent-red/20">
                                        Dairy Allergy
                                    </span>
                                    <span className="text-xs px-3 py-1 bg-accent-red/10 text-accent-red rounded-full font-medium border border-accent-red/20">
                                        Shellfish Allergy
                                    </span>
                                    <span className="text-xs px-3 py-1 bg-deep-indigo/10 text-deep-indigo rounded-full font-medium border border-deep-indigo/20">
                                        Anniversary Celebration
                                    </span>
                                    <span className="text-xs px-3 py-1 bg-soft-gold/20 text-cedar-brown rounded-full font-medium border border-soft-gold/30">
                                        Filet Mignon · Steamed Rice
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Customer Quotes */}
                <section className="py-8 bg-warm-ivory/50">
                    <div className="container mx-auto px-6">
                        <QuoteStrip
                            quote="They accommodate allergies really well — just let them know when ordering."
                            author="Google Review"
                        />
                    </div>
                </section>

                {/* Allergen Quick Reference Guide */}
                <section id="allergen-guide" className="py-20 bg-white scroll-mt-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                                Allergen Quick Reference Guide
                            </h2>
                            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                                A practical guide to navigating{" "}
                                <Link
                                    href="/menu"
                                    className="text-accent-red hover:underline"
                                >
                                    our menu
                                </Link>{" "}
                                with common food allergies. Always confirm with your server for
                                the most up-to-date information.
                            </p>
                        </div>

                        <div className="space-y-6 max-w-5xl mx-auto">
                            {allergenGuide.map((item) => (
                                <div
                                    key={item.allergen}
                                    className="bg-warm-ivory rounded-2xl border border-stone-200 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{item.emoji}</span>
                                            <h3 className="font-heading text-xl font-bold text-charcoal">
                                                {item.allergen} Allergy
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            {/* Avoid */}
                                            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                                                <h4 className="font-semibold text-red-800 text-sm mb-2 flex items-center gap-1.5">
                                                    <span>⚠️</span> Items to Avoid or Modify
                                                </h4>
                                                <ul className="space-y-1">
                                                    {item.avoid.map((a) => (
                                                        <li
                                                            key={a}
                                                            className="text-sm text-red-700/80 flex items-start gap-1.5"
                                                        >
                                                            <span className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                                                            {a}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Safe */}
                                            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                                                <h4 className="font-semibold text-green-800 text-sm mb-2 flex items-center gap-1.5">
                                                    <span>✅</span> Generally Safe Options
                                                </h4>
                                                <ul className="space-y-1">
                                                    {item.safe.map((s) => (
                                                        <li
                                                            key={s}
                                                            className="text-sm text-green-700/80 flex items-start gap-1.5"
                                                        >
                                                            <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                                                            {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Tip */}
                                        <div className="bg-white rounded-lg p-3 border border-stone-200">
                                            <p className="text-sm text-charcoal/70">
                                                <strong className="text-charcoal">💡 Tip:</strong>{" "}
                                                {item.tip}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-8 max-w-5xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6">
                            <p className="text-sm text-amber-800">
                                <strong>Important:</strong> This guide is for informational
                                purposes. While we take every precaution, Jinbeh is not an
                                allergen-free facility. Cross-contamination is possible in any
                                restaurant kitchen. For life-threatening allergies, please
                                discuss your specific needs with your server and chef before
                                ordering. Call ahead for severe allergies:{" "}
                                <a
                                    href="tel:2146191200"
                                    className="underline font-semibold"
                                >
                                    Frisco (214) 619-1200
                                </a>{" "}
                                or{" "}
                                <a
                                    href="tel:2144882224"
                                    className="underline font-semibold"
                                >
                                    Lewisville (214) 488-2224
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-warm-ivory">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                                Allergy-Friendly Dining FAQ
                            </h2>
                            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                                Common questions from guests with food allergies
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqSchema.mainEntity.map((faq, idx) => (
                                <details
                                    key={idx}
                                    className="group bg-white rounded-xl border border-stone-200 overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-ivory/50 transition-colors">
                                        <h3 className="font-heading font-semibold text-charcoal pr-4">
                                            {faq.name}
                                        </h3>
                                        <span className="text-accent-red text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                                            +
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6">
                                        <p className="text-charcoal/70 leading-relaxed">
                                            {faq.acceptedAnswer.text}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Ready to Dine with Confidence?
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
                            Call ahead to discuss your allergy needs, or simply inform your
                            server when you arrive. We&apos;ll take care of the rest.
                        </p>
                        <p className="text-white/70 mb-10">
                            Both our{" "}
                            <Link
                                href="/frisco"
                                className="underline hover:text-soft-gold"
                            >
                                Frisco
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/lewisville"
                                className="underline hover:text-soft-gold"
                            >
                                Lewisville
                            </Link>{" "}
                            locations accommodate food allergies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:2146191200"
                                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                            >
                                <span>📞</span> Frisco: (214) 619-1200
                            </a>
                            <a
                                href="tel:2144882224"
                                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center justify-center gap-2"
                            >
                                <span>📞</span> Lewisville: (214) 488-2224
                            </a>
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/reservations"
                                className="text-white/80 hover:text-soft-gold underline font-medium"
                            >
                                Or book online →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Links */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-6">
                        <h3 className="font-heading font-bold text-charcoal mb-6 text-center">
                            Explore Our Menu
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto text-sm">
                            <Link
                                href="/menu"
                                className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors"
                            >
                                Full Menu
                            </Link>
                            <Link
                                href="/frisco/hibachi"
                                className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors"
                            >
                                Hibachi Menu
                            </Link>
                            <Link
                                href="/frisco/sushi-rolls"
                                className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors"
                            >
                                Sushi Rolls
                            </Link>
                            <Link
                                href="/frisco/sashimi"
                                className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors"
                            >
                                Sashimi
                            </Link>
                            <Link
                                href="/frisco/kids-menu"
                                className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors"
                            >
                                Kids Menu
                            </Link>
                            <Link
                                href="/celebrations"
                                className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors"
                            >
                                Celebrations
                            </Link>
                            <Link
                                href="/blog/hibachi-calories-guide"
                                className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors"
                            >
                                Nutrition Guide
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
