import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Find Yamazaki Whiskey Nearby: Your Complete Guide | Jinbeh",
    description: "Discover where to find Yamazaki whiskey nearby with our expert guide. Explore local stores, online options, and visit Jinbeh in Dallas for authentic Japanese whiskey experiences.",
    keywords: ["Yamazaki whiskey", "where to buy whiskey", "Japanese whiskey near me", "Yamazaki 12 year old", "premium spirits", "Yamazaki tasting", "Japanese whiskey Dallas"],
    openGraph: {
        title: "Find Yamazaki Whiskey Nearby: Complete Buying Guide",
        description: "Your guide to finding Yamazaki whiskey. Learn where to buy, tasting notes, and visit Jinbeh.",
        images: ["/images/drinks/cocktail.jpg"],
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Find Yamazaki Whiskey Nearby: Your Complete Guide", datePublished: "2026-01-30", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is Yamazaki whiskey?", acceptedAnswer: { "@type": "Answer", text: "Yamazaki is Japan's oldest malt whiskey distillery, established in 1923. The flagship Yamazaki 12 Year Old is renowned for its delicate balance of fruit and oak, with notes of honey, peach, and pineapple." } },
            { "@type": "Question", name: "Why is Yamazaki whiskey hard to find?", acceptedAnswer: { "@type": "Answer", text: "Yamazaki has limited production and very high global demand, making it challenging to find. This scarcity adds to its allure and prestige among whiskey enthusiasts." } },
            { "@type": "Question", name: "Where can I buy Yamazaki whiskey?", acceptedAnswer: { "@type": "Answer", text: "You can find Yamazaki at local liquor stores, specialty whiskey shops, online retailers like Drizly and Caskers, bars and restaurants, or at Jinbeh in Dallas." } },
            { "@type": "Question", name: "How much does Yamazaki whiskey cost?", acceptedAnswer: { "@type": "Answer", text: "Prices vary by expression and availability. Yamazaki 12 Year Old typically ranges from $60-$150, while rarer expressions command premium prices." } }
        ]
    }
];

export default function YamazakiWhiskeyGuide() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/21-C060324-6791.jpg" alt="Yamazaki whiskey bottle elegant presentation" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=beverages">Beverages</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-amber-700 mb-4">🥃 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Find Yamazaki Whiskey Nearby</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Finding Yamazaki whiskey feels like a treasure hunt.</strong> Known for rich, complex flavors and a smooth finish, this highly sought-after Japanese whiskey has captured hearts worldwide. Welcome to the table! Whether you're a connoisseur or newcomer, knowing where to buy Yamazaki makes all the difference. Explore <Link href="/blog/japanese-whiskey-guide" className="text-deep-indigo hover:text-accent-red underline transition-colors">Japanese whiskey broadly</Link> or enjoy it at Jinbeh, where we treat every guest like family with fresh and flavorful selections.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🥃 Understanding Yamazaki Whiskey</h2>
                            <p className="text-charcoal/80 mb-6">Before exploring where to buy Yamazaki, it's essential to understand what makes this spirit so special and sought after.</p>

                            <div className="bg-amber-50 rounded-xl p-6 mb-8 border-l-4 border-amber-700">
                                <h3 className="font-bold text-charcoal mb-3">About Yamazaki</h3>
                                <ul className="text-charcoal/80 text-sm space-y-2">
                                    <li><strong>Established:</strong> 1923 - Japan's oldest malt whiskey distillery</li>
                                    <li><strong>Producer:</strong> Suntory</li>
                                    <li><strong>Flagship:</strong> Yamazaki 12 Year Old</li>
                                    <li><strong>Flavor Profile:</strong> Delicate balance of fruit and oak with notes of honey, peach, and pineapple</li>
                                    <li><strong>Recognition:</strong> Multiple international awards and accolades</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏆 Why Yamazaki Is So Popular</h2>
                            <div className="grid md:grid-cols-3 gap-4 my-8">
                                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
                                    <h3 className="font-bold text-charcoal mb-2">Quality & Craftsmanship</h3>
                                    <p className="text-charcoal/80 text-sm">Meticulous attention to detail and unparalleled craftsmanship in every bottle.</p>
                                </div>
                                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
                                    <h3 className="font-bold text-charcoal mb-2">Awards & Recognition</h3>
                                    <p className="text-charcoal/80 text-sm">Numerous international awards have boosted its reputation as a top-tier whiskey.</p>
                                </div>
                                <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200">
                                    <h3 className="font-bold text-charcoal mb-2">Limited Availability</h3>
                                    <p className="text-charcoal/80 text-sm">Limited production and high demand make it challenging to find, adding allure.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🛍️ Where to Buy Yamazaki Whiskey</h2>

                            <div className="space-y-6 my-8">
                                <div className="border-l-4 border-accent-red pl-6 py-4">
                                    <h3 className="text-lg font-bold text-charcoal mb-3">Local Liquor Stores</h3>
                                    <p className="text-charcoal/80 mb-3">One of the best places to start your search is your local liquor store. Many specialty liquor stores stock international whiskeys, including Japanese brands like Yamazaki.</p>
                                    <div className="bg-warm-ivory rounded-lg p-4 text-sm">
                                        <p className="font-semibold text-charcoal mb-2">Pro Tips:</p>
                                        <ul className="text-charcoal/80 space-y-1">
                                            <li>• Call ahead to check inventory</li>
                                            <li>• Ask about special orders for unavailable bottles</li>
                                            <li>• Build relationships with store staff for insider tips</li>
                                            <li>• Check regularly—inventory changes frequently</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-l-4 border-accent-red pl-6 py-4">
                                    <h3 className="text-lg font-bold text-charcoal mb-3">Online Retailers</h3>
                                    <p className="text-charcoal/80 mb-3">The internet offers valuable resources for locating Yamazaki whiskey. Several platforms provide shipping directly to your door.</p>
                                    <div className="bg-warm-ivory rounded-lg p-4 text-sm">
                                        <p className="font-semibold text-charcoal mb-2">Popular Online Options:</p>
                                        <ul className="text-charcoal/80 space-y-1">
                                            <li>• <strong>Drizly</strong> - Wide selection, fast delivery</li>
                                            <li>• <strong>Caskers</strong> - Specialty whiskey focus</li>
                                            <li>• <strong>ReserveBar</strong> - Premium spirits selection</li>
                                            <li>• Compare prices and shipping fees for best deals</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-l-4 border-accent-red pl-6 py-4">
                                    <h3 className="text-lg font-bold text-charcoal mb-3">Whiskey Specialty Shops</h3>
                                    <p className="text-charcoal/80 mb-3">Some cities have specialty shops dedicated exclusively to whiskey. These stores often have knowledgeable staff who can guide you to find Yamazaki.</p>
                                    <div className="bg-warm-ivory rounded-lg p-4 text-sm">
                                        <p className="font-semibold text-charcoal mb-2">Benefits:</p>
                                        <ul className="text-charcoal/80 space-y-1">
                                            <li>• Expert staff with deep whiskey knowledge</li>
                                            <li>• Insights into flavor profiles and pairings</li>
                                            <li>• Often access to rare or hard-to-find bottles</li>
                                            <li>• Check for shops in your area or nearby cities</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-l-4 border-accent-red pl-6 py-4">
                                    <h3 className="text-lg font-bold text-charcoal mb-3">Bars & Restaurants</h3>
                                    <p className="text-charcoal/80 mb-3">If you're not ready to commit to a full bottle, sampling Yamazaki at a local bar or restaurant is excellent. Many establishments with robust whiskey selections offer Yamazaki by the glass.</p>
                                    <div className="bg-warm-ivory rounded-lg p-4 text-sm">
                                        <p className="font-semibold text-charcoal mb-2">Why This Works:</p>
                                        <ul className="text-charcoal/80 space-y-1">
                                            <li>• Experience the whiskey before purchasing a bottle</li>
                                            <li>• Get expert tasting notes from staff</li>
                                            <li>• Discover proper serving suggestions</li>
                                            <li>• Enjoy it with complementary cuisine</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🔍 Finding Yamazaki Whiskey Nearby</h2>
                            <p className="text-charcoal/80 mb-6">When searching for "Yamazaki whiskey nearby" or "Yamazaki 12 near me," these tactics enhance your chances of success:</p>

                            <div className="space-y-4 mb-8">
                                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                                    <h3 className="font-bold text-charcoal mb-2">✓ Utilize Store Locators</h3>
                                    <p className="text-charcoal/80 text-sm">Many liquor stores and large retailers have online locators. Enter your zip code or city to find nearest locations carrying Yamazaki whiskey.</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-600">
                                    <h3 className="font-bold text-charcoal mb-2">✓ Join Whiskey Enthusiast Groups</h3>
                                    <p className="text-charcoal/80 text-sm">Online forums and social media groups share tips on where members found rare bottles. Engaging with these communities leads to unexpected discoveries.</p>
                                </div>
                                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-600">
                                    <h3 className="font-bold text-charcoal mb-2">✓ Attend Whiskey Events</h3>
                                    <p className="text-charcoal/80 text-sm">Whiskey tastings and events offer opportunities to meet enthusiasts and discover rare bottles. Sometimes Yamazaki is available for tasting or purchase at these gatherings.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">⭐ Jinbeh in Dallas: A Special Destination</h2>
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
                                <p className="text-charcoal/80 mb-4">For those in or visiting Dallas, Texas, <strong>Jinbeh is a notable establishment worth mentioning</strong>. Known for an impressive selection of Japanese whiskeys, Jinbeh is a restaurant where patrons can experience Yamazaki whiskey alongside authentic Japanese cuisine. Try it with our <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red underline transition-colors">premium sushi selections</Link> or <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-deep-indigo hover:text-accent-red underline transition-colors">hibachi dishes</Link>.</p>
                                <div className="space-y-3 mb-6">
                                    <div className="flex gap-3">
                                        <span className="text-lg">🥃</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Premium Whiskey Selection</p>
                                            <p className="text-charcoal/70 text-sm">Curated collection of Japanese whiskeys including Yamazaki</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">🍱</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Authentic Japanese Cuisine</p>
                                            <p className="text-charcoal/70 text-sm">Expertly prepared hibachi and traditional Japanese dishes</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">👨‍🍳</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Expert Guidance</p>
                                            <p className="text-charcoal/70 text-sm">Knowledgeable staff offering recommendations and pairings</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-charcoal/80">A visit to Jinbeh is a delightful way to enjoy Yamazaki whiskey in a unique, sophisticated setting with professional guidance.</p>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQs</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "What's the difference between Yamazaki expressions?", a: "Yamazaki offers various expressions including 12, 18, and 25 Year Old, each with distinct aging periods and flavor complexity. The 12 Year Old is the most accessible, while older expressions command higher prices." },
                                    { q: "How can I tell if Yamazaki is authentic?", a: "Purchase from reputable retailers, check bottle authenticity features, verify the seal and label quality, and compare prices (suspiciously low prices may indicate counterfeits)." },
                                    { q: "Should I drink Yamazaki neat or with water?", a: "Yamazaki is versatile—enjoy it neat to experience full flavor complexity, or add a drop of water to open up the aromas. Both approaches are equally valid." },
                                    { q: "Is Yamazaki a good investment?", a: "Limited production and high demand have made certain Yamazaki expressions valuable to collectors. However, purchase for enjoyment first; investment potential should be secondary." }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-amber-700 to-amber-900 rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🥃 Experience Premium Yamazaki at Jinbeh</h3>
                                <p className="mb-6 text-white/90">Visit Jinbeh to discover premium Yamazaki whiskey paired with exceptional Japanese hibachi and authentic cuisine, guided by our knowledgeable staff. Whether you choose our Frisco or Lewisville location, we offer the gracious hospitality that makes Yamazaki experiences truly memorable.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/menu" className="bg-white text-amber-700 px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">Full Menu</Link>
                                    <Link href="/locations/lewisville" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Lewisville Location</Link>
                                    <Link href="/locations/frisco" className="bg-accent-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-red/90 transition">Frisco Location</Link>
                                    <Link href="/reservations" className="bg-soft-gold text-amber-800 px-6 py-3 rounded-xl font-semibold hover:bg-soft-gold/90 transition">Reserve Now</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related Reads</h3>
                                <div className="space-y-3">
                                    {[{ t: "Japanese Whiskey's Global Rise", s: "/blog/japanese-whiskey-guide", i: "/images/blog/20-C060324-6771.jpg" },
                                    { t: "Japanese Cocktails: Art & Recipes", s: "/blog/japanese-cocktails", i: "/images/blog/19-C060324-6751.jpg" },
                                    { t: "Best Happy Hour Frisco", s: "/blog/best-happy-hour-frisco-tx", i: "/images/blog/10-C060324-6501.jpg" }].map(r => (
                                        <Link key={r.s} href={r.s} className="flex gap-3 group">
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0"><Image src={r.i} alt="" fill className="object-cover" /></div>
                                            <span className="text-sm group-hover:text-accent-red transition">{r.t}</span>
                                        </Link>
                                    ))}
                                </div>

                                <RelatedArticles currentSlug="yamazaki-whiskey-guide" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
