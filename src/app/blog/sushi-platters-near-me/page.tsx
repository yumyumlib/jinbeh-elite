import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Sushi Platters Near Me: Party Trays & Catering | Jinbeh DFW",
    description:
        "Order sushi platters near you in DFW! Jinbeh offers party trays, catering platters, and custom sushi selections for events. Fresh fish, expert rolls, since 1988.",
    keywords: [
        "sushi platters near me",
        "sushi party tray",
        "sushi catering dallas",
        "sushi platter frisco",
        "japanese catering near me",
    ],
    openGraph: {
        title: "Sushi Platters Near Me: Party Trays & Catering",
        description: "Order fresh sushi platters and party trays from Jinbeh Japanese Restaurant in DFW.",
        images: ["/images/blog/7-C060324-6447.jpg"],
    },
  alternates: {
    canonical: "https://jinbeh.com/blog/sushi-platters-near-me",
  },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sushi Platters Near Me: Party Trays & Catering in DFW",
    description: "Complete guide to ordering sushi platters and party trays in the Dallas-Fort Worth area.",
    image: "https://jinbeh.com/images/blog/7-C060324-6447.jpg",
    datePublished: "2026-02-18",
    dateModified: "2026-02-18",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqs = [
    {
        question: "How much does a sushi platter cost?",
        answer: "Sushi platter prices vary by size and selection. At Jinbeh, our party trays start at around $40-60 for a small assortment and go up to $100+ for premium platters with sashimi-grade fish. Custom platters for large events can be tailored to your budget. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 for current pricing and custom orders.",
    },
    {
        question: "How far in advance should I order a sushi platter?",
        answer: "We recommend ordering sushi platters at least 24-48 hours in advance to ensure freshness and availability, especially for large orders or special rolls. For major events or catering orders of 50+ people, give us 3-5 days' notice. Same-day orders may be possible for smaller platters—just call ahead.",
    },
    {
        question: "What types of sushi come on a party platter?",
        answer: "A typical sushi party platter includes a mix of classic rolls (California, spicy tuna, shrimp tempura), specialty rolls (Dragon Roll, Rainbow Roll), nigiri, and sometimes sashimi. At Jinbeh, we customize platters to your preferences and can accommodate dietary restrictions. Our Dallas Roll and Volcano Roll are guest favorites.",
    },
    {
        question: "Can I order sushi platters for delivery in Frisco or Lewisville?",
        answer: "Yes! Jinbeh offers sushi takeout and delivery through GrubHub and UberEats from both our Frisco and Lewisville locations. For large party platters, we recommend pickup to ensure the presentation stays perfect. Call ahead to arrange your order and pickup time.",
    },
    {
        question: "Are sushi platters good for office catering?",
        answer: "Absolutely! Sushi platters are perfect for office lunches, team celebrations, and corporate events. They're easy to share, visually impressive, and accommodate various dietary preferences (including vegetarian rolls). Jinbeh has been catering to DFW businesses for over 37 years. Contact our catering team for corporate packages.",
    },
    {
        question: "How many sushi rolls do I need per person?",
        answer: "Plan for 8-12 pieces of sushi per person as a main course, or 4-6 pieces per person as an appetizer alongside other food. A standard sushi roll makes 6-8 pieces. For a party of 10, order 12-15 rolls as a main course. Our team can help you calculate the right amount for your event.",
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


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Japanese Cuisine", "item": "https://jinbeh.com/blog/category/cuisine" },
    { "@type": "ListItem", "position": 4, "name": "Sushi Platters Near Me: Party Trays & Catering in DFW" },
  ],
};

export default function SushiPlattersNearMe() {
    return (
        <main className="min-h-screen bg-warm-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/7-C060324-6447.jpg"
                    alt="Beautifully arranged sushi platter with fresh rolls and sashimi at Jinbeh"
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
                        <Link href="/blog/category/cuisine" className="hover:text-white">Cuisine</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-[#7A4E2D] mb-4">
                        🍣 Cuisine
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Sushi Platters Near Me: Party Trays &amp; Catering in DFW
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>February 2026</span>
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
                                        <strong>Planning a party, office lunch, or celebration?</strong> A sushi platter is the
                                        ultimate crowd-pleaser—colorful, shareable, and always impressive. Whether you need a small
                                        tray for a dinner party or a full <Link href="/catering" className="text-accent-red hover:underline">catering spread</Link> for
                                        50+ guests, here&apos;s everything you need to know about ordering sushi platters in the
                                        Dallas-Fort Worth area.
                                    </p>

                                    <div className="bg-gradient-to-br from-[#7A4E2D]/10 to-soft-gold/10 border-l-4 border-[#7A4E2D] rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            &quot;Our sushi chefs have been handcrafting rolls in DFW since 1988. When you order a
                                            Jinbeh platter, every piece is made fresh that day with the same care we put into
                                            every dine-in plate. The Dallas Roll and Volcano Roll are always the first to go.&quot;
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">— The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍣 Types of Sushi Platters
                                    </h2>

                                    <p>
                                        Not sure what kind of platter to order? Here&apos;s a breakdown of the most popular options
                                        and when each one works best. For a deep dive into roll varieties, check out our
                                        <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline"> complete sushi guide</Link>.
                                    </p>
                                </div>

                                {/* Platter Types Table */}
                                <div className="overflow-x-auto my-8">
                                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                        <thead className="bg-charcoal text-white">
                                            <tr>
                                                <th className="p-4 text-left font-heading">Platter Type</th>
                                                <th className="p-4 text-left font-heading">What&apos;s Included</th>
                                                <th className="p-4 text-left font-heading">Best For</th>
                                                <th className="p-4 text-left font-heading">Serves</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-charcoal/80">
                                            <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                <td className="p-4 font-semibold text-charcoal">🌟 Classic Roll Platter</td>
                                                <td className="p-4">California, spicy tuna, shrimp tempura, eel avocado</td>
                                                <td className="p-4">Office lunches, casual parties</td>
                                                <td className="p-4">6-10</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">🐟 Sashimi Deluxe</td>
                                                <td className="p-4">Salmon, tuna, yellowtail, shrimp, octopus</td>
                                                <td className="p-4">Sophisticated gatherings, foodies</td>
                                                <td className="p-4">4-8</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">🌈 Specialty Roll Platter</td>
                                                <td className="p-4">Dragon, Rainbow, Volcano, Dallas Roll, Spider Roll</td>
                                                <td className="p-4">Celebrations, impressive presentations</td>
                                                <td className="p-4">8-12</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">🥗 Combo Platter</td>
                                                <td className="p-4">Mix of rolls, nigiri, sashimi, and appetizers</td>
                                                <td className="p-4">Events with varied tastes</td>
                                                <td className="p-4">10-20</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-semibold text-charcoal">🎉 Party Mega Tray</td>
                                                <td className="p-4">Custom selection of 15+ rolls with sides</td>
                                                <td className="p-4">Large events, corporate catering</td>
                                                <td className="p-4">20-50+</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📐 How Much Sushi to Order
                                    </h2>

                                    <p>
                                        The #1 question we get: <em>&quot;How many rolls do I need?&quot;</em> Here&apos;s our tried-and-true formula from 37 years of catering:
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 my-8">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-4">🧮 Sushi Per-Person Calculator:</h3>
                                        <ul className="space-y-2 text-charcoal/80">
                                            <li>🍽️ <strong>Main course:</strong> 8-12 pieces per person (about 1.5-2 rolls)</li>
                                            <li>🥢 <strong>Appetizer/side:</strong> 4-6 pieces per person (about 1 roll)</li>
                                            <li>🎉 <strong>Party buffet (mixed food):</strong> 4-6 pieces per person</li>
                                            <li>👨‍💼 <strong>Corporate lunch:</strong> 8-10 pieces per person with sides</li>
                                        </ul>
                                        <p className="text-sm text-charcoal/60 mt-4 italic">Tip: Always order 10-15% extra. Sushi is always popular and goes fast!</p>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ⭐ Most Popular Rolls for Platters
                                    </h2>

                                    <p>
                                        Based on thousands of platter orders, here are the rolls that consistently get devoured first
                                        at Jinbeh. Learn about more varieties in our <Link href="/blog/sushi-identification-chart" className="text-accent-red hover:underline">sushi identification chart</Link>.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                        <div className="bg-gradient-to-br from-accent-red to-soft-gold rounded-2xl p-6 text-white">
                                            <h3 className="font-heading font-bold text-lg mb-3">🏆 Crowd Favorites</h3>
                                            <ul className="space-y-1 text-white/90 text-sm">
                                                <li>• Dallas Roll — Our signature Jinbeh creation</li>
                                                <li>• Dragon Roll — Eel, cucumber, avocado</li>
                                                <li>• Volcano Roll — Baked spicy crab topped</li>
                                                <li>• Rainbow Roll — Assorted sashimi on California</li>
                                                <li>• Spicy Tuna Roll — A timeless classic</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-br from-deep-indigo to-deep-indigo rounded-2xl p-6 text-white">
                                            <h3 className="font-heading font-bold text-lg mb-3">🌿 Safe Bets (Beginners)</h3>
                                            <ul className="space-y-1 text-white/90 text-sm">
                                                <li>• California Roll — Crab, avocado, cucumber</li>
                                                <li>• Shrimp Tempura Roll — Crispy and satisfying</li>
                                                <li>• Philadelphia Roll — Salmon, cream cheese</li>
                                                <li>• Veggie Roll — Avocado, cucumber, carrot</li>
                                                <li>• Eel Avocado — Sweet unagi sauce</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Jinbeh Feature Section */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/blog/11-C060324-6544.jpg"
                                                alt="Jinbeh sushi chef preparing fresh sushi platter"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                🏯 Order Your Platter from Jinbeh
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                When guests say our crab rangoons are &quot;the best I&apos;ve ever had&quot; and
                                                our Dallas Roll is &quot;amazing,&quot; you know your platter will be a hit.
                                                Every piece is prepared fresh by our expert sushi chefs—the same team that&apos;s
                                                been serving DFW since 1988.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Custom platters for any event size</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>Pickup from Frisco or Lewisville</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span>GrubHub &amp; UberEats delivery available</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-soft-gold">✓</span>
                                                    <span><Link href="/blog/jinbeh-catering-services" className="text-soft-gold hover:underline">Full catering services</Link> for large events</span>
                                                </li>
                                            </ul>
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <a href="tel:+12146191200" className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors text-center">
                                                    📞 Frisco: (214) 619-1200
                                                </a>
                                                <a href="tel:+12144882224" className="inline-block bg-white/20 border-2 border-white/50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-accent-red transition-colors text-center">
                                                    📞 Lewisville: (214) 488-2224
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💡 Tips for Ordering Sushi Platters
                                    </h2>

                                    <ul className="space-y-2">
                                        <li><strong>Order early for freshness</strong> — Give 24-48 hours&apos; notice so every piece is made fresh the day of your event.</li>
                                        <li><strong>Mix familiar and adventurous</strong> — Include crowd-pleasers like California rolls alongside specialty options for the sushi lovers.</li>
                                        <li><strong>Don&apos;t forget the extras</strong> — Add edamame, miso soup, and <Link href="/blog/beginner-sushi-tips" className="text-accent-red hover:underline">gyoza</Link> for a complete spread.</li>
                                        <li><strong>Keep it cold</strong> — Pick up your platter close to serving time, or keep it refrigerated. Sushi is best enjoyed fresh.</li>
                                        <li><strong>Ask about allergies</strong> — At Jinbeh, &quot;they accommodate allergies really well&quot;—just let us know when ordering.</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎤 What Our Customers Say
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <p className="text-charcoal/80 italic mb-3">&quot;The Dallas Roll and Volcano Roll are amazing. We order platters for every office event now.&quot;</p>
                                            <p className="text-sm text-charcoal/60">— Google Review, Jinbeh Frisco</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <p className="text-charcoal/80 italic mb-3">&quot;Best crab rangoons I&apos;ve ever had—we always add them to our sushi platter order. The quality is consistently outstanding.&quot;</p>
                                            <p className="text-sm text-charcoal/60">— Google Review, Jinbeh Frisco</p>
                                        </div>
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
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍣 Order Your Sushi Platter Today</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Fresh rolls, expert craftsmanship, and 37 years of sushi tradition. Your party deserves Jinbeh.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/order-online" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Order Online
                                        </Link>
                                        <Link href="/catering" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg">
                                            Catering Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24">
                                <RelatedArticles currentSlug="sushi-platters-near-me" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
