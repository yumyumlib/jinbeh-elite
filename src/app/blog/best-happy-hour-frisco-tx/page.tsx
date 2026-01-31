import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Happy Hour Frisco TX: Top Spots to Visit | Jinbeh",
    description:
        "Find the best happy hour in Frisco TX! Sushi specials, sake deals, and appetizers at Jinbeh. Discover top spots near Stonebriar for after-work drinks.",
    keywords: [
        "happy hour frisco tx",
        "sushi happy hour frisco",
        "drink specials frisco",
        "frisco bars",
        "happy hour near stonebriar",
    ],
    openGraph: {
        title: "Best Happy Hour Frisco TX: Deals & Top Spots",
        description: "Your guide to the best happy hour deals in Frisco, Texas.",
        images: ["/images/blog/10-C060324-6501.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Happy Hour Frisco TX: Top Spots to Visit",
    description: "Guide to the best happy hour deals and spots in Frisco, Texas.",
    image: "https://jinbeh.com/images/blog/10-C060324-6501.jpg",
    datePublished: "2026-01-19",
    dateModified: "2026-01-29",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What time is happy hour at Jinbeh?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh's happy hour runs Monday through Friday from 4:30 PM to 6:30 PM at both our Frisco and Lewisville locations. We offer discounted sushi rolls, sake, beer, and appetizers during these hours.",
            },
        },
        {
            "@type": "Question",
            name: "Does Jinbeh have sushi happy hour specials?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Our happy hour includes discounted sushi rolls, $1 edamame, half-price sake bombs, and special pricing on select appetizers and drinks. It's the perfect way to enjoy our fresh sushi at great prices.",
            },
        },
    ],
};

export default function BestHappyHourFrisco() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/10-C060324-6501.jpg"
                    alt="Happy hour drinks at Jinbeh"
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
                        <Link href="/blog?category=tips-guides" className="hover:text-white">Tips & Guides</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-soft-gold mb-4">
                        ✨ Tips & Guides
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Best Happy Hour Frisco TX: Where to Go
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 19, 2026</span>
                        <span>•</span>
                        <span>6 min read</span>
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
                                        <strong>Looking for the best happy hour in Frisco?</strong> Whether you need to
                                        decompress after work, meet up with friends, or just enjoy some great <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">happy hour specials</Link> on
                                        food and drinks, Frisco has you covered. And if you're craving <Link href="/blog/best-sushi-frisco" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sushi</Link> and <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake recommendations</Link>,
                                        we know exactly where you should go.
                                    </p>

                                    <div className="bg-gradient-to-br from-soft-gold/20 to-warm-ivory border-l-4 border-soft-gold rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Happy hour at Jinbeh isn't just about the deals—it's about unwinding with
                                            great food and drinks in a welcoming atmosphere. Our regulars know: the
                                            sushi is fresh, the sake is cold, and the vibes are perfect."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Jinbeh Happy Hour: The Details
                                    </h2>
                                </div>

                                {/* Happy Hour Deal Card */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-5xl">🍻</span>
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold">Jinbeh Happy Hour</h3>
                                            <p className="text-white/80">Monday – Friday | 4:30 PM – 6:30 PM</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-white/10 rounded-xl p-4 text-center">
                                            <span className="text-3xl block mb-2">🍣</span>
                                            <span className="text-sm">Discounted Sushi Rolls</span>
                                        </div>
                                        <div className="bg-white/10 rounded-xl p-4 text-center">
                                            <span className="text-3xl block mb-2">🍶</span>
                                            <span className="text-sm">Sake Specials</span>
                                        </div>
                                        <div className="bg-white/10 rounded-xl p-4 text-center">
                                            <span className="text-3xl block mb-2">🍺</span>
                                            <span className="text-sm">Beer Deals</span>
                                        </div>
                                        <div className="bg-white/10 rounded-xl p-4 text-center">
                                            <span className="text-3xl block mb-2">🥢</span>
                                            <span className="text-sm">$1 Edamame</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/frisco" className="bg-white text-accent-red px-6 py-3 rounded-xl font-semibold text-center hover:bg-warm-ivory transition-colors">
                                            Frisco Location
                                        </Link>
                                        <Link href="/lewisville" className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-center border border-white/30 hover:bg-white/30 transition-colors">
                                            Lewisville Location
                                        </Link>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                                        <thead className="bg-charcoal text-white">
                                            <tr>
                                                <th className="p-4 text-left font-heading">Spot</th>
                                                <th className="p-4 text-left font-heading">Happy Hour</th>
                                                <th className="p-4 text-left font-heading">Best Deals</th>
                                                <th className="p-4 text-left font-heading">Vibe</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-charcoal/80">
                                            <tr className="border-b border-warm-ivory bg-soft-gold/10">
                                                <td className="p-4 font-semibold text-charcoal">⭐ Jinbeh</td>
                                                <td className="p-4">Mon-Fri 4:30-6:30pm</td>
                                                <td className="p-4">Sushi rolls, sake, edamame</td>
                                                <td className="p-4">Casual, family-friendly</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Lazy Dog</td>
                                                <td className="p-4">Mon-Fri 3-6pm</td>
                                                <td className="p-4">Beer, cocktails, appetizers</td>
                                                <td className="p-4">Lively, American casual</td>
                                            </tr>
                                            <tr className="border-b border-warm-ivory">
                                                <td className="p-4 font-semibold text-charcoal">Kona Grill</td>
                                                <td className="p-4">Daily 3-6pm</td>
                                                <td className="p-4">Sushi, cocktails</td>
                                                <td className="p-4">Upscale casual</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-semibold text-charcoal">Yard House</td>
                                                <td className="p-4">Mon-Fri 3-6pm</td>
                                                <td className="p-4">Beer, pizza, appetizers</td>
                                                <td className="p-4">Sports bar, large groups</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Why Jinbeh's Happy Hour Stands Out
                                    </h2>

                                    <p>
                                        Let's be honest—most <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">happy hour deals</Link> are about cheap drinks. But at Jinbeh,
                                        we combine quality with value. You're not just getting discounts; you're
                                        getting the same fresh <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sushi varieties</Link> and premium <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake pairing</Link> options we serve at dinner, just
                                        at friendlier prices.
                                    </p>

                                    <ul className="space-y-2">
                                        <li><strong>Fresh sushi rolls</strong> — Not pre-made, not sitting out. Made to order.</li>
                                        <li><strong>Real sake selection</strong> — Not just one house option. Multiple premium choices.</li>
                                        <li><strong>Actual savings</strong> — Up to 30% off select items during happy hour.</li>
                                        <li><strong>Great atmosphere</strong> — Perfect for dates, coworkers, or solo unwinding.</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📍 Happy Hour Near Stonebriar
                                    </h2>

                                    <p>
                                        <Link href="/locations/frisco" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Jinbeh Frisco location</Link> is just minutes from Stonebriar Centre on Preston Road—perfect
                                        for a post-shopping drink or meeting friends after work. Easy parking and
                                        a welcoming bar area make it a no-stress stop. Visit us to <Link href="/reservations" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">make a reservation</Link> for happy hour.
                                    </p>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What time is happy hour at Jinbeh?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Jinbeh's happy hour runs <strong>Monday through Friday from 4:30 PM to 6:30 PM</strong> at
                                                    both our Frisco and Lewisville locations. We offer discounted sushi rolls, sake, beer,
                                                    and appetizers during these hours.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Does Jinbeh have sushi happy hour specials?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Yes! Our happy hour includes discounted sushi rolls, <strong>$1 edamame</strong>, half-price
                                                    sake bombs, and special pricing on select appetizers and drinks. Check our
                                                    <Link href="/happy-hour" className="text-accent-red hover:underline"> happy hour page</Link> for the current menu.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Do I need a reservation for happy hour?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Reservations aren't required, but we recommend them for groups of 4 or more, especially Fridays. Walk-ins welcome! Bar seating is first-come, first-served. Welcome to the table!
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Is Jinbeh's happy hour family-friendly?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Absolutely! We treat every guest like family. Kids are welcome during happy hour. We have a children's menu, and parents enjoy discounted drinks while kids enjoy sushi and appetizers. It's a celebration for everyone!
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can I pair happy hour with dinner?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Fresh and flavorful! Yes, enjoy happy hour specials before or with dinner. Our fresh sushi and sake pair beautifully with any hibachi or sushi selection. Dinner and a show awaits you at Jinbeh!
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                <RelatedArticles currentSlug="best-happy-hour-frisco-tx" />

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-soft-gold to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍶 See You at Happy Hour!</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Unwind with fresh sushi, sake specials, and the best vibes in Frisco
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/happy-hour" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            View Happy Hour Menu
                                        </Link>
                                        <Link href="/frisco#reserve" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            Reserve a Spot
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
                                    <Link href="/blog/best-sushi-frisco" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">📍 Locations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Best Sushi Frisco TX</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/sake-alcohol-strength" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/17-C060324-6708.jpg" alt="Sake" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-purple-600">🍶 Beverages</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Sake Alcohol Strength Guide</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=tips-guides" className="px-3 py-1 rounded-full text-sm font-medium bg-soft-gold/20 text-soft-gold">✨ Tips & Guides</Link>
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
