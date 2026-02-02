import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Hibachi Dallas TX: Top Restaurants & Experiences | Jinbeh",
    description:
        "Find the best hibachi in Dallas TX! Teppanyaki grill shows, fresh ingredients, and unforgettable dining. Discover Jinbeh's authentic hibachi experience.",
    keywords: [
        "best hibachi dallas",
        "hibachi dallas tx",
        "teppanyaki dallas",
        "hibachi near me dallas",
        "japanese steakhouse dallas",
    ],
    openGraph: {
        title: "Best Hibachi Dallas TX: Top Restaurants & Experiences",
        description: "Your guide to the best hibachi restaurants in Dallas-Fort Worth.",
        images: ["/images/blog/4-C060324-6380.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Hibachi Dallas TX: Top Restaurants & Experiences",
    description: "Comprehensive guide to the best hibachi and teppanyaki dining in Dallas-Fort Worth.",
    image: "https://jinbeh.com/images/blog/1-C060324-6328.jpg",
    datePublished: "2026-01-15",
    dateModified: "2026-01-29",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqs = [
    {
        question: "What is the difference between hibachi and teppanyaki?",
        answer: "In America, the terms are often used interchangeably, but technically hibachi refers to a small charcoal grill, while teppanyaki means cooking on a flat iron griddle. What most people call 'hibachi' in restaurants is actually teppanyaki-style cooking with the chef performing at your table right in front of you for the full entertainment experience.",
    },
    {
        question: "How much does hibachi cost in Dallas?",
        answer: "Hibachi dinners in Dallas typically range from $20-45 per person, depending on the protein selection (chicken, shrimp, steak, or combination). At Jinbeh, our hibachi entrees include miso soup, house salad, grilled vegetables, fried rice, and the entertaining chef show—all for great value. Premium proteins like wagyu cost more but deliver exceptional quality.",
    },
    {
        question: "Do I need reservations for hibachi in Dallas?",
        answer: "Yes, we highly recommend reservations for hibachi dining, especially on weekends and for groups. Teppanyaki tables seat 8-10 people, and we want to ensure you get the best experience. Visit our Frisco or Lewisville location pages to reserve online, or call us directly. First-time guests are always welcome!",
    },
    {
        question: "Is hibachi good for large groups and celebrations?",
        answer: "Absolutely! Hibachi is perfect for birthdays, anniversaries, team dinners, bachelor/bachelorette parties, and corporate events. The shared table experience creates unforgettable memories as you watch the chef's incredible skill and interact with fellow diners. Jinbeh specializes in celebrating special moments with you.",
    },
    {
        question: "Can I order hibachi for catering or private events?",
        answer: "Yes! We offer hibachi catering for private events and corporate functions. Our skilled chefs bring the full teppanyaki dining experience to your location—whether it's your home, office, or venue. Contact our catering team at Frisco (214) 619-1200 or Lewisville (214) 488-2224 for custom packages and availability.",
    },
    {
        question: "What makes Jinbeh's hibachi different from other Dallas restaurants?",
        answer: "Jinbeh has been perfecting hibachi since 1988—nearly four decades of family tradition. We use only fresh, never-frozen ingredients, our chefs train extensively for years, and we're locally owned with two convenient DFW locations. Plus, we combine hibachi and sushi under one roof, so you get variety and expertise in both cuisines.",
    },
    {
        question: "Can kids enjoy hibachi at Jinbeh?",
        answer: "Absolutely! Hibachi is a family-friendly experience that kids love. The chef's tricks, flying shrimp, and onion volcano create an exciting, memorable dining experience. We offer kid-sized portions and can customize proteins based on preferences. Parents appreciate the entertainment value as much as the food!",
    },
    {
        question: "What time should we arrive for hibachi dinner?",
        answer: "We recommend arriving 10-15 minutes before your reservation time. This gives you time to check in, be seated, review the menu, and settle in before the chef arrives. Dinner service typically lasts 45-60 minutes per table, so plan accordingly for special occasions.",
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

export default function BestHibachiDallas() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero with Video */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/1-C060324-6328.jpg"
                >
                    <source src="/videos/LOCAL-FRI-HIBACHI-chef-cooking-fire-family-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/blog?category=local-guides" className="hover:text-white">Locations</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        📍 Locations
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Best Hibachi Dallas TX: The Ultimate Experience Guide
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 15, 2026</span>
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
                                        <strong>Craving hibachi in Dallas?</strong> You're not alone. There's something
                                        magical about watching a skilled chef transform raw ingredients into a sizzling
                                        feast right before your eyes—complete with flying shrimp, flaming onion volcanoes,
                                        and precision knife work that's half cooking, half performance art.
                                    </p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "At Jinbeh, we've been putting on the hibachi show since 1988.
                                            But it's never just about the tricks—it's about bringing people together
                                            around good food and great entertainment. That's the Jinbeh way."
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">— The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🔥 What Makes Great Hibachi
                                    </h2>

                                    <p>
                                        Not all hibachi restaurants are created equal. The best spots nail three things:
                                        <strong>fresh ingredients</strong>, <strong>skilled chefs</strong>, and
                                        <strong>the right atmosphere</strong>.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                                        <div className="bg-gradient-to-br from-accent-red to-soft-gold rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                                            <span className="text-4xl mb-3 block">🔥</span>
                                            <h3 className="font-heading font-bold text-lg mb-2">The Show</h3>
                                            <p className="text-sm text-white/90">Knife tricks, fire, flying food</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-deep-indigo to-deep-indigo rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                                            <span className="text-4xl mb-3 block">🥩</span>
                                            <h3 className="font-heading font-bold text-lg mb-2">Fresh Cuts</h3>
                                            <p className="text-sm text-white/90">Quality steak, shrimp, chicken</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-soft-gold to-soft-gold rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform">
                                            <span className="text-4xl mb-3 block">👨‍👩‍👧‍👦</span>
                                            <h3 className="font-heading font-bold text-lg mb-2">Community</h3>
                                            <p className="text-sm text-white/90">Shared tables, shared memories</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                        <thead className="bg-charcoal text-white">
                                            <tr>
                                                <th className="p-4 text-left font-heading">Restaurant</th>
                                                <th className="p-4 text-left font-heading">Location</th>
                                                <th className="p-4 text-left font-heading">Specialty</th>
                                                <th className="p-4 text-left font-heading">Price Range</th>
                                                <th className="p-4 text-left font-heading">Why Choose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-charcoal/80">
                                            <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                <td className="p-4 font-semibold text-charcoal">⭐ Jinbeh Frisco</td>
                                                <td className="p-4">Frisco (near Stonebriar Mall)</td>
                                                <td className="p-4">Hibachi + Sushi</td>
                                                <td className="p-4">$$ (fair value)</td>
                                                <td className="p-4">Family-owned since 1988, fresh never-frozen ingredients, expert chefs, best ambiance</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                <td className="p-4 font-semibold text-charcoal">⭐ Jinbeh Lewisville</td>
                                                <td className="p-4">Lewisville (off I-35E)</td>
                                                <td className="p-4">Hibachi + Sushi</td>
                                                <td className="p-4">$$ (fair value)</td>
                                                <td className="p-4">Perfect for groups, celebrations, catering available, convenient location</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Benihana</td>
                                                <td className="p-4">Dallas, Plano</td>
                                                <td className="p-4">Hibachi (National Chain)</td>
                                                <td className="p-4">$$$ (premium)</td>
                                                <td className="p-4">Consistent experience, reliable, extensive locations, but less personal</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Kobe Steakhouse</td>
                                                <td className="p-4">Various DFW locations</td>
                                                <td className="p-4">Hibachi (Japanese Steakhouse)</td>
                                                <td className="p-4">$$ to $$$</td>
                                                <td className="p-4">Large group-friendly, decent quality, but formulaic experience</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-semibold text-charcoal">Teppo</td>
                                                <td className="p-4">Dallas Greenville Avenue</td>
                                                <td className="p-4">Robatayaki (Counter-style grilling)</td>
                                                <td className="p-4">$$$ (upscale)</td>
                                                <td className="p-4">Different grilling style, trendy, upscale vibe, premium prices</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Image Gallery */}
                                <div className="my-12">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="relative aspect-square rounded-2xl overflow-hidden group">
                                            <Image src="/images/blog/3-C060324-6364.jpg" alt="Hibachi chef" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="relative aspect-square rounded-2xl overflow-hidden group">
                                            <Image src="/images/blog/4-C060324-6380.jpg" alt="Hibachi flames" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="relative aspect-square rounded-2xl overflow-hidden group">
                                            <Image src="/images/blog/5-C060324-6397.jpg" alt="Hibachi dining" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🏯 Why Jinbeh is Different
                                    </h2>

                                    <p>
                                        Big chains have their place, but there's something special about a family-owned
                                        restaurant that's been perfecting their craft for nearly four decades.
                                    </p>

                                    <ul className="space-y-2">
                                        <li><strong>Family-owned since 1988</strong> — We're not a franchise. Every meal is personal.</li>
                                        <li><strong>Two convenient DFW locations</strong> — <Link href="/frisco" className="text-accent-red hover:underline">Frisco</Link> (near Stonebriar) and <Link href="/lewisville" className="text-accent-red hover:underline">Lewisville</Link> (off I-35E)</li>
                                        <li><strong>Hibachi + Sushi under one roof</strong> — Can't decide? Get both.</li>
                                        <li><strong>Perfect for celebrations</strong> — <Link href="/blog/hibachi-birthday-party-ideas" className="text-accent-red hover:underline">Birthdays</Link>, anniversaries, team dinners</li>
                                        <li><strong>Catering services available</strong> — Bring the show to your <Link href="/blog/hibachi-catering-dfw" className="text-accent-red hover:underline">corporate events or private parties</Link></li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍽️ What to Expect at Hibachi Dinner
                                    </h2>

                                    <p>
                                        First-time hibachi guest? Here's the rundown. You'll sit around a large teppanyaki
                                        grill with other diners (or your own group if you reserve enough seats). Your chef
                                        arrives, introduces themselves, and the show begins.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🥢 Typical Hibachi Dinner Includes:</h3>
                                        <ul className="grid grid-cols-2 gap-2 text-charcoal/80">
                                            <li>✓ Soup (miso or onion)</li>
                                            <li>✓ House salad</li>
                                            <li>✓ Your choice of protein</li>
                                            <li>✓ Grilled vegetables</li>
                                            <li>✓ Fried rice</li>
                                            <li>✓ Chef entertainment</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

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
                                <div className="mt-16 p-8 bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🔥 Ready for the Best Hibachi in Dallas?</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Skip the chains. Experience authentic hibachi at Jinbeh—where family tradition meets unforgettable entertainment.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/frisco#reserve" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Reserve at Frisco
                                        </Link>
                                        <Link href="/lewisville#reserve" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg">
                                            Reserve at Lewisville
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar with Related Articles */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24">
                                <RelatedArticles currentSlug="best-hibachi-dallas-tx" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
