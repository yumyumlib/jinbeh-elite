import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Thanksgiving Dining Guide | Japanese Catering Frisco, DFW | Jinbeh",
    description:
        "Discover unique Thanksgiving dining alternatives at Jinbeh. Thanksgiving catering, dine-in availability, menu suggestions & ordering deadlines for Frisco & DFW areas.",
    keywords: [
        "thanksgiving catering frisco",
        "restaurants open thanksgiving frisco",
        "thanksgiving dinner alternative",
        "thanksgiving catering dfw",
        "thanksgiving dining frisco",
        "japanese thanksgiving catering",
        "thanksgiving hibachi",
        "thanksgiving sushi catering",
        "thanksgiving restaurants open",
        "dfw thanksgiving catering",
    ],
    openGraph: {
        title: "Thanksgiving Dining at Jinbeh | Japanese Catering & Dine-In Options",
        description:
            "Experience a unique Thanksgiving with Japanese cuisine. Catering, dine-in, and special holiday menu options available at Jinbeh Frisco & Lewisville.",
        images: ["/images/blog/24-C060324-6852.jpg"],
    },
};

const faqs = [
    { question: "Does Jinbeh offer Thanksgiving catering?", answer: "Yes! We offer catering for Frisco and DFW. Customizable menus, delivery, and full setups for any size group. Call us for quotes and packages." },
    { question: "What's the ordering deadline for Thanksgiving catering?", answer: "Order 7-10 days ahead for best options. Late orders may work depending on bookings. Call us directly for availability." },
    { question: "Are you open on Thanksgiving Day?", answer: "Jinbeh is usually open Thanksgiving for dine-in service. Hours vary by location. Call (214) 619-1200 Frisco or (214) 488-2224 Lewisville to confirm." },
    { question: "Why choose Japanese for Thanksgiving?", answer: "It's a celebration! Japanese cuisine offers variety and interactive dining like hibachi. Lighter options and a fresh take on the holiday. Perfect for families!" },
    { question: "Can you accommodate dietary restrictions?", answer: "Absolutely! We specialize in gluten-free, vegetarian, vegan, and allergy-friendly options. Tell us when ordering and we'll create the perfect menu." }
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Ultimate Thanksgiving Dining Guide | Japanese Alternatives & Catering in Frisco & DFW",
    description: "Explore unique Thanksgiving dining options at Jinbeh: catering services, dine-in availability, special menu suggestions, and ordering deadlines for the Frisco and DFW areas.",
    image: "https://jinbeh.com/images/blog/24-C060324-6852.jpg",
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
            name: "Does Jinbeh offer Thanksgiving catering in Frisco and DFW?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Jinbeh offers comprehensive Thanksgiving catering services for both Frisco and the greater DFW area. We provide customizable menus, delivery options, and full-service setups for gatherings of any size. Contact our catering team for personalized quotes and package details.",
            },
        },
        {
            "@type": "Question",
            name: "What is the ordering deadline for Thanksgiving catering?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We recommend placing Thanksgiving catering orders at least 7-10 days in advance to ensure availability and customization options. Orders placed closer to the holiday may be accommodated depending on current bookings. Contact us directly for late-notice availability.",
            },
        },
        {
            "@type": "Question",
            name: "Are there restaurants open on Thanksgiving in Frisco?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh is typically open on Thanksgiving Day for dine-in service. Hours may vary by location (Frisco and Lewisville), so we recommend calling ahead to confirm. Reservations are strongly encouraged during the holiday season.",
            },
        },
        {
            "@type": "Question",
            name: "What makes Japanese cuisine a good Thanksgiving alternative?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Japanese cuisine offers variety, interactive dining experiences (like hibachi), and lighter options alongside traditional proteins. It provides a fresh take on holiday dining while bringing family and friends together—perfect for those seeking Thanksgiving dinner alternatives.",
            },
        },
        {
            "@type": "Question",
            name: "Can Jinbeh accommodate dietary restrictions for Thanksgiving catering?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! We specialize in customizable catering that accommodates gluten-free, vegetarian, vegan, and allergy-friendly options. Discuss your dietary needs when placing your order, and our culinary team will create a menu that works for everyone.",
            },
        },
        {
            "@type": "Question",
            name: "What are popular Thanksgiving menu items at Jinbeh?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Popular choices include teriyaki-glazed proteins, sushi platters, hibachi experiences, shrimp tempura, edamame, gyoza, and signature rolls. We also create custom Thanksgiving-themed platters featuring autumn ingredients and holiday flavors.",
            },
        },
    ],
};

export default function ThanksgivingDiningGuide() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/24-C060324-6852.jpg"
                    alt="Birthday celebration at Jinbeh hibachi restaurant"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white transition-colors">
                            Blog
                        </Link>
                        <span>/</span>
                        <Link href="/celebrations" className="hover:text-white transition-colors">
                            Celebrations
                        </Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">
                        🍂 Seasonal Guide
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl mb-4">
                        The Ultimate Thanksgiving Dining Guide
                    </h1>
                    <p className="text-xl text-warm-ivory/90 max-w-2xl mb-6">
                        Discover unique dining alternatives, catering options, and festive menus for Thanksgiving in Frisco and DFW
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
                                        <strong>Thanksgiving doesn't have to look the same every year.</strong> While turkey and stuffing are
                                        traditions for many families, an increasing number of diners are exploring fresh alternatives that
                                        bring people together in new and exciting ways. At Jinbeh, we believe Thanksgiving is about gathering,
                                        gratitude, and good food—and Japanese cuisine delivers all three in abundance.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Whether you're hosting a corporate gathering, a family celebration, or looking for a festive
                                            night out, Jinbeh offers Thanksgiving catering and dine-in options designed to make your holiday
                                            special. We serve both Frisco and the greater DFW area."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍂 Why Choose Japanese Cuisine for Thanksgiving
                                    </h2>

                                    <p>
                                        Thanksgiving celebrates three things: gratitude, togetherness, and great food. Japanese dining
                                        philosophy aligns perfectly with these values. Japanese cuisine emphasizes balance, seasonality, and
                                        the art of bringing people together around shared meals. If you're interested in learning more about
                                        Japanese cuisine, check out our guide on <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">types of sushi</Link> and other traditional dishes.
                                    </p>

                                    <p>
                                        Here's why Japanese restaurants like Jinbeh are becoming popular Thanksgiving destinations:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-blue-500/10 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🎭 Interactive Dining</h3>
                                            <p className="text-charcoal/80 text-sm">
                                                <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-accent-red hover:underline">Hibachi experiences</Link> turn dinner into entertainment. Watch skilled chefs perform while cooking
                                                your meal right in front of you—creating memories and conversation.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-accent-red/10 to-orange-500/10 rounded-2xl p-6 border-l-4 border-accent-red">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🌾 Variety & Customization</h3>
                                            <p className="text-charcoal/80 text-sm">
                                                Unlike traditional Thanksgiving meals, Japanese menus offer proteins, vegetables, seafood, and
                                                dietary accommodations. Everyone finds something they love.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-soft-gold/10 to-amber-500/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🍣 Lighter, Fresher Flavors</h3>
                                            <p className="text-charcoal/80 text-sm">
                                                Japanese cuisine emphasizes fresh, high-quality ingredients without heavy cream sauces.
                                                Enjoy a satisfying meal without the post-dinner food coma.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-deep-indigo/10 to-purple-500/10 rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🤝 Bringing People Together</h3>
                                            <p className="text-charcoal/80 text-sm">
                                                Communal dining is central to Japanese culture. Shared platters, hibachi tables, and family-style
                                                service naturally encourage conversation and connection.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-warm-gold/10 to-pink-500/10 rounded-2xl p-6 border-l-4 border-warm-gold">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">✨ Celebration Atmosphere</h3>
                                            <p className="text-charcoal/80 text-sm">
                                                Jinbeh's ambiance—warm lighting, thoughtful design, skilled service—creates a festive setting
                                                perfect for marking special occasions.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-accent-red/10 to-rose-600/10 rounded-2xl p-6 border-l-4 border-accent-red">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">🚫 No-Stress Hosting</h3>
                                            <p className="text-charcoal/80 text-sm">
                                                Skip the cooking stress. Let Jinbeh handle preparation, cooking, and cleanup. Focus on enjoying
                                                time with people you care about.
                                            </p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍱 Thanksgiving Catering Options
                                    </h2>

                                    <p>
                                        Jinbeh offers flexible catering solutions for Thanksgiving celebrations in Frisco and throughout the DFW
                                        area. Whether you're planning a small family gathering or a large corporate event, we have packages to fit
                                        your needs.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-6">Catering Package Overview</h3>

                                    <div className="space-y-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🍱 Classic Catering Package</h4>
                                            <p className="text-charcoal/80 mb-4">
                                                Perfect for intimate gatherings (8-15 people). Includes a mix of sushi platters, appetizers,
                                                and entrées.
                                            </p>
                                            <ul className="space-y-2 text-charcoal/80 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Assorted sushi and rolls</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Hibachi-grilled proteins and vegetables</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Appetizer selection (edamame, gyoza, tempura)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Fried rice and noodles</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-deep-indigo">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">👥 Premium Party Package</h4>
                                            <p className="text-charcoal/80 mb-4">
                                                Ideal for medium gatherings (15-40 people). Expanded menu with premium selections and service
                                                options.
                                            </p>
                                            <ul className="space-y-2 text-charcoal/80 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Premium sushi platters (nigiri, sashimi, specialty rolls)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Hibachi-grilled filet mignon, lobster, and chicken</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Extended appetizer bar</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Beverage service (sake, beer, non-alcoholic options)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Professional setup and cleanup</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-soft-gold">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🎊 Corporate Thanksgiving Package</h4>
                                            <p className="text-charcoal/80 mb-4">
                                                For corporate events and large celebrations (40+ people). Full-service catering with customization.
                                            </p>
                                            <ul className="space-y-2 text-charcoal/80 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Customizable menu with protein and dietary options</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>On-site hibachi cooking experiences</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Beverage program with full bar services</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Professional staff and service</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="font-bold">✓</span>
                                                    <span>Delivery and full setup included</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-accent-red/20 to-orange-500/20 rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-3">📋 All Packages Include:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-charcoal/80 text-sm">
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0">✓</span>
                                                <span>Professional food safety handling</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0">✓</span>
                                                <span>Dietary accommodation options</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0">✓</span>
                                                <span>Delivery to Frisco and DFW area</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0">✓</span>
                                                <span>Proper temperature-controlled containers</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0">✓</span>
                                                <span>Serving utensils and napkins</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0">✓</span>
                                                <span>Personalized quotation and planning</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 my-6">
                                        <Link
                                            href="/catering"
                                            className="inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-red/90 transition-colors"
                                        >
                                            Explore Full Catering Services →
                                        </Link>
                                        <Link
                                            href="/reservations"
                                            className="inline-block bg-deep-indigo text-white px-8 py-4 rounded-xl font-semibold hover:bg-deep-indigo/90 transition-colors"
                                        >
                                            Make a Reservation →
                                        </Link>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍽️ Dine-In Availability on Thanksgiving
                                    </h2>

                                    <p>
                                        Looking to celebrate Thanksgiving without cooking or traveling far? Jinbeh welcomes diners at both our Frisco
                                        and Lewisville locations on Thanksgiving Day!
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-blue-500/10 rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">📅 Thanksgiving Day Service Details</h3>
                                        <div className="space-y-4 text-charcoal/80">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold">
                                                    1
                                                </div>
                                                <div>
                                                    <strong className="text-charcoal">Limited Hours</strong>
                                                    <p className="text-sm">
                                                        We maintain limited hours on Thanksgiving. Frisco and Lewisville locations have extended
                                                        hours to accommodate holiday celebrations. Check our website or call ahead for exact times.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold">
                                                    2
                                                </div>
                                                <div>
                                                    <strong className="text-charcoal">Reservations Highly Recommended</strong>
                                                    <p className="text-sm">
                                                        Thanksgiving is one of our busiest days. To ensure a table at your preferred time, make a
                                                        reservation at least 1-2 weeks in advance. Walk-ins are accommodated if space is available.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold">
                                                    3
                                                </div>
                                                <div>
                                                    <strong className="text-charcoal">Special Menu Available</strong>
                                                    <p className="text-sm">
                                                        Our regular menu is available, plus we may feature limited-time Thanksgiving specials designed
                                                        with the holiday season in mind.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold">
                                                    4
                                                </div>
                                                <div>
                                                    <strong className="text-charcoal">Family-Friendly Atmosphere</strong>
                                                    <p className="text-sm">
                                                        Bring grandparents, kids, and everyone in between. Our warm ambiance and diverse menu ensure
                                                        everyone feels welcome and finds something delicious.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ⏰ Thanksgiving Ordering Deadlines
                                    </h2>

                                    <p>
                                        Planning ahead ensures we can provide the best experience and customization for your Thanksgiving celebration.
                                        Here are our ordering guidelines:
                                    </p>

                                    <div className="space-y-4 my-8">
                                        <div className="bg-white border-2 border-accent-red rounded-2xl p-6">
                                            <div className="flex gap-4">
                                                <div className="text-3xl flex-shrink-0">📦</div>
                                                <div>
                                                    <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Catering Orders</h4>
                                                    <p className="text-charcoal/80 mb-2">
                                                        <strong>Deadline: 7-10 days before Thanksgiving</strong>
                                                    </p>
                                                    <p className="text-charcoal/80 text-sm">
                                                        This allows us to source ingredients, accommodate dietary restrictions, and customize your
                                                        menu. Late requests may be accepted depending on availability—contact us directly to discuss.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white border-2 border-deep-indigo rounded-2xl p-6">
                                            <div className="flex gap-4">
                                                <div className="text-3xl flex-shrink-0">📞</div>
                                                <div>
                                                    <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Table Reservations</h4>
                                                    <p className="text-charcoal/80 mb-2">
                                                        <strong>Recommended: 2 weeks in advance</strong>
                                                    </p>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Thanksgiving Day fills up quickly. Secure your preferred time slot early. We accept reservations
                                                        up to 2 hours before closing on Thanksgiving (pending availability).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white border-2 border-soft-gold rounded-2xl p-6">
                                            <div className="flex gap-4">
                                                <div className="text-3xl flex-shrink-0">🎯</div>
                                                <div>
                                                    <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Special Requests & Customization</h4>
                                                    <p className="text-charcoal/80 mb-2">
                                                        <strong>Submit requests: 5-7 days before date</strong>
                                                    </p>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Have specific dietary needs, allergies, or menu preferences? Let us know early so we can
                                                        prepare accordingly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 Thanksgiving Menu Suggestions
                                    </h2>

                                    <p>
                                        Not sure what to order for Thanksgiving? Here are our most popular combinations and menu items perfect for the
                                        holiday:
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-6">For Sushi Lovers</h3>

                                    <p className="text-charcoal/80 mb-6">
                                        New to sushi? Check out our <Link href="/blog/beginner-sushi-tips" className="text-accent-red hover:underline">sushi tips for beginners</Link> before your Thanksgiving dinner.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-8">
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🍣</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Premium Sashimi Platter</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Assorted raw fish including salmon, tuna, and white fish. Light, elegant, and perfect for an
                                                        upscale Thanksgiving celebration.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🍱</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Specialty Roll Assortment</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Mix of our signature rolls featuring combinations like spicy tuna, Philadelphia, dragon, and
                                                        California rolls. Something for every palate.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🍜</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Nigiri Selection</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Hand-pressed sushi showcasing the quality of our fish. Beautiful presentation and impressive
                                                        flavors.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-6">For Hibachi Enthusiasts</h3>

                                    <p className="text-charcoal/80 mb-6">
                                        Interested in sake pairings with your hibachi meal? Explore our <Link href="/blog/sake-pairing-guide" className="text-accent-red hover:underline">sake pairing guide</Link> for perfect combinations.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-8">
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🥩</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Filet Mignon & Lobster</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Premium proteins grilled to perfection. The ultimate Thanksgiving splurge with interactive
                                                        hibachi cooking.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🍗</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Teriyaki Glazed Chicken</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        A lighter Thanksgiving option. Juicy, flavorful, and a great alternative to traditional turkey.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🍤</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Garlic Butter Shrimp</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Bold flavors and quick-cooking. Perfect for those wanting something different and delicious.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🌾</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Fried Rice & Noodles</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Pair your protein with our signature fried rice or noodle dishes. Satisfying and flavorful.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-6">For Mixed Celebrations</h3>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-8">
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🥠</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Appetizer Variety Platter</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Edamame, gyoza, spring rolls, tempura, and more. Great for sharing and letting guests sample
                                                        different flavors.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🍱</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Family-Style Combination</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Mix of sushi, hibachi proteins, vegetables, and sides. Something for everyone at your table.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <span className="text-2xl flex-shrink-0">🍜</span>
                                                <div>
                                                    <h4 className="font-heading font-bold text-charcoal mb-1">Soup & Side Courses</h4>
                                                    <p className="text-charcoal/80 text-sm">
                                                        Start with miso soup or seaweed salad. Complements any main course selection beautifully.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ❓ Frequently Asked Questions About Thanksgiving at Jinbeh
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
                                        🎉 Make This Thanksgiving Unforgettable
                                    </h2>

                                    <p>
                                        Thanksgiving is about gratitude, togetherness, and creating memories. At Jinbeh, we're honored to be part of your
                                        celebration. Whether you choose catering or dine-in service, we're committed to providing an exceptional experience
                                        that reflects the spirit of the holiday.
                                    </p>

                                    <p className="mb-8">
                                        From customized menus to interactive hibachi experiences, our team in both Frisco and Lewisville is ready to
                                        make your Thanksgiving unforgettable. Let us handle the cooking so you can focus on what matters most—being with
                                        the people you love.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/20 to-orange-500/20 rounded-2xl p-8 text-center">
                                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Ready to Celebrate Thanksgiving at Jinbeh?</h3>
                                        <p className="text-charcoal/80 mb-6 text-lg">
                                            Explore our catering options or make a dine-in reservation for Thanksgiving Day. Contact us today to start
                                            planning your celebration.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <Link
                                                href="/catering"
                                                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center"
                                            >
                                                Explore Catering Options
                                            </Link>
                                            <Link
                                                href="/frisco"
                                                className="btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center"
                                            >
                                                Frisco Location
                                            </Link>
                                            <Link
                                                href="/lewisville"
                                                className="btn bg-white text-deep-indigo border-2 border-deep-indigo hover:bg-warm-ivory px-8 py-3 rounded-xl font-semibold shadow-lg transition-colors text-center"
                                            >
                                                Lewisville Location
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div>
                                <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24 mb-8">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-6">📚 In This Guide</h3>
                                <nav className="space-y-3">
                                    <a
                                        href="#why-japanese"
                                        className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium"
                                    >
                                        Why Japanese Cuisine
                                    </a>
                                    <a
                                        href="#catering-options"
                                        className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium"
                                    >
                                        Catering Packages
                                    </a>
                                    <a
                                        href="#dine-in"
                                        className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium"
                                    >
                                        Dine-In Service
                                    </a>
                                    <a
                                        href="#ordering-deadlines"
                                        className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium"
                                    >
                                        Ordering Deadlines
                                    </a>
                                    <a
                                        href="#menu-suggestions"
                                        className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium"
                                    >
                                        Menu Suggestions
                                    </a>
                                    <a
                                        href="#faq"
                                        className="block text-charcoal/70 hover:text-deep-indigo transition-colors font-medium"
                                    >
                                        FAQs
                                    </a>
                                </nav>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-6">🍱 Related Articles</h3>
                                    <div className="space-y-4">
                                        <Link href="/blog/hibachi-catering-dfw" className="flex gap-4 group">
                                            <div className="flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden bg-warm-ivory flex items-center justify-center text-2xl">
                                                🍴
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-xs font-medium text-accent-red">🎉 Events</span>
                                                <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">
                                                    Hibachi Catering DFW
                                                </h4>
                                            </div>
                                        </Link>

                                        <Link href="/blog/best-hibachi-dallas" className="flex gap-4 group">
                                            <div className="flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden bg-warm-ivory flex items-center justify-center text-2xl">
                                                🔥
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-xs font-medium text-deep-indigo">🎭 Dining</span>
                                                <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">
                                                    Best Hibachi Dallas
                                                </h4>
                                            </div>
                                        </Link>

                                        <Link href="/catering" className="flex gap-4 group">
                                            <div className="flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden bg-warm-ivory flex items-center justify-center text-2xl">
                                                🍱
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-xs font-medium text-soft-gold">📋 Services</span>
                                                <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">
                                                    Full Catering Menu
                                                </h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">🎯 Thanksgiving CTA</h3>
                                    <p className="text-charcoal/70 text-sm mb-4">
                                        Ready to make your Thanksgiving unforgettable? Explore our catering and dine-in options today.
                                    </p>
                                    <Link
                                        href="/catering"
                                        className="block w-full text-center bg-accent-red text-white px-4 py-3 rounded-xl font-semibold hover:bg-accent-red/90 transition-colors mb-3"
                                    >
                                        View Catering Services
                                    </Link>
                                    <Link
                                        href="/frisco"
                                        className="block w-full text-center bg-deep-indigo text-white px-4 py-3 rounded-xl font-semibold hover:bg-deep-indigo/90 transition-colors"
                                    >
                                        Make a Reservation
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">📍 Visit Us</h3>
                                    <div className="space-y-2 text-sm text-charcoal/70">
                                        <div className="flex gap-2">
                                            <span className="flex-shrink-0">📍</span>
                                            <div>
                                                <p className="font-medium text-charcoal">Frisco</p>
                                                <Link href="/frisco" className="text-deep-indigo hover:text-accent-red transition-colors">
                                                    View location
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="flex-shrink-0">📍</span>
                                            <div>
                                                <p className="font-medium text-charcoal">Lewisville</p>
                                                <Link href="/lewisville" className="text-deep-indigo hover:text-accent-red transition-colors">
                                                    View location
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link
                                            href="/blog?category=cuisine"
                                            className="px-3 py-1 rounded-full text-sm font-medium bg-deep-indigo/10 text-deep-indigo hover:bg-deep-indigo/20 transition-colors"
                                        >
                                            🍣 Cuisine
                                        </Link>
                                        <Link
                                            href="/blog?category=dining"
                                            className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal hover:bg-warm-ivory-dark transition-colors"
                                        >
                                            🍽️ Dining
                                        </Link>
                                        <Link
                                            href="/blog?category=events"
                                            className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal hover:bg-warm-ivory-dark transition-colors"
                                        >
                                            🎉 Events
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <RelatedArticles currentSlug="thanksgiving-dining-guide" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
