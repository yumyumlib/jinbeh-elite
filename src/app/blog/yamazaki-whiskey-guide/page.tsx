import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

export const metadata: Metadata = {
    title: "Find Yamazaki Whiskey Nearby: Your Complete Guide | Jinbeh",
    description: "Discover where to find Yamazaki whiskey nearby with our expert guide. Explore local stores, online options, and visit Jinbeh in Dallas for authentic Japanese whiskey experiences.",
    keywords: ["Yamazaki whiskey", "where to buy whiskey", "Japanese whiskey near me", "Yamazaki 12 year old", "premium spirits", "Yamazaki tasting", "Japanese whiskey Dallas"],
    openGraph: {
        title: "Find Yamazaki Whiskey Nearby: Complete Buying Guide",
        description: "Your guide to finding Yamazaki whiskey. Learn where to buy, tasting notes, and visit Jinbeh.",
        images: ["/images/beverages/JapaneseWhiskey.webp"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/yamazaki-whiskey-guide",
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Find Yamazaki Whiskey Nearby: Your Complete Guide", datePublished: "2026-01-30", dateModified: "2026-03-11", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" }, image: "https://jinbeh.com/images/beverages/JapaneseWhiskey.webp" },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is Yamazaki whiskey?", acceptedAnswer: { "@type": "Answer", text: "Yamazaki is Japan's oldest malt whiskey distillery, established in 1923. The flagship Yamazaki 12 Year Old is renowned for its delicate balance of fruit and oak, with notes of honey, peach, and pineapple." } },
            { "@type": "Question", name: "Why is Yamazaki whiskey hard to find?", acceptedAnswer: { "@type": "Answer", text: "Yamazaki has limited production and very high global demand, making it challenging to find. This scarcity adds to its allure and prestige among whiskey enthusiasts." } },
            { "@type": "Question", name: "Where can I buy Yamazaki whiskey?", acceptedAnswer: { "@type": "Answer", text: "You can find Yamazaki at local liquor stores, specialty whiskey shops, online retailers like Drizly and Caskers, bars and restaurants, or at Jinbeh in Dallas." } },
            { "@type": "Question", name: "How much does Yamazaki whiskey cost?", acceptedAnswer: { "@type": "Answer", text: "Prices vary by expression. Yamazaki 12 Year Old typically ranges from $150-300. The NAS (no age statement) runs $60-100. Rarer expressions like the 18 Year Old can cost $500-1000+." } },
            { "@type": "Question", name: "What's the difference between Yamazaki expressions?", acceptedAnswer: { "@type": "Answer", text: "Yamazaki offers various expressions including NAS, 12, 18, and 25 Year Old, each with distinct aging periods and flavor complexity. The 12 Year Old is the most well-known, while older expressions command higher prices." } },
            { "@type": "Question", name: "How can I tell if Yamazaki is authentic?", acceptedAnswer: { "@type": "Answer", text: "Purchase from reputable retailers, check bottle authenticity features, verify the seal and label quality, and compare prices. Suspiciously low prices may indicate counterfeits." } },
            { "@type": "Question", name: "Should I drink Yamazaki neat or with water?", acceptedAnswer: { "@type": "Answer", text: "Yamazaki is versatile. Enjoy it neat to experience full flavor complexity, or add a drop of water to open up the aromas. The Japanese mizuwari style (1 part whisky, 2 parts water, large ice cube) is also excellent." } },
            { "@type": "Question", name: "Is Yamazaki a good investment?", acceptedAnswer: { "@type": "Answer", text: "Limited production and high demand have made certain Yamazaki expressions valuable to collectors. However, purchase for enjoyment first; investment potential should be secondary." } }
        ]
    }
];


const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Bar & Beverages", "item": "https://jinbeh.com/bar" },
        { "@type": "ListItem", "position": 4, "name": "Yamazaki Whiskey: Complete Tasting Guide" },
    ],
};

export default function YamazakiWhiskeyGuide() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/beverages/JapaneseWhiskey.webp" alt="Yamazaki whiskey bottle elegant presentation" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/bar">Menu</Link>
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

                            <DidYouKnow
                                fact="Japanese whiskey has become one of the most sought-after spirits globally, with sales growing 300% since 2014. The Yamazaki Sherry Cask 2013 was famously named 'Best Whisky in the World' by Jim Murray's Whisky Bible, shocking the Scotch-dominated industry. Yamazaki 12 Year Old now sells for 3-5x its original retail price on secondary markets. Suntory founder Shinjiro Torii chose the Yamazaki location in 1923 specifically for its unique convergence of three rivers, which creates ideal humidity for aging whiskey—a detail that makes every bottle truly one-of-a-kind."
                                source="Suntory Heritage Foundation"
                            />
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
                                <div className="bg-deep-indigo/10 rounded-xl p-5 border-2 border-deep-indigo/30">
                                    <h3 className="font-bold text-charcoal mb-2">Quality & Craftsmanship</h3>
                                    <p className="text-charcoal/80 text-sm">Meticulous attention to detail and unparalleled craftsmanship in every bottle.</p>
                                </div>
                                <div className="bg-deep-indigo/10 rounded-xl p-5 border-2 border-deep-indigo/30">
                                    <h3 className="font-bold text-charcoal mb-2">Awards & Recognition</h3>
                                    <p className="text-charcoal/80 text-sm">Numerous international awards have boosted its reputation as a top-tier whiskey.</p>
                                </div>
                                <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200">
                                    <h3 className="font-bold text-charcoal mb-2">Limited Availability</h3>
                                    <p className="text-charcoal/80 text-sm">Limited production and high demand make it challenging to find, adding allure.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍾 Yamazaki Expressions Compared</h2>
                            <p className="text-charcoal/80 mb-4">Here&apos;s a breakdown of Yamazaki&apos;s main expressions to help you choose:</p>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Expression</th><th className="p-3 text-left">Tasting Notes</th><th className="p-3 text-left">ABV</th><th className="p-3 text-left">Price Range</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">Yamazaki NAS</td><td className="p-3">Strawberry, cherry, light vanilla</td><td className="p-3">43%</td><td className="p-3">$60–100</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">⭐ Yamazaki 12</td><td className="p-3">Honey, peach, oak, pineapple</td><td className="p-3">43%</td><td className="p-3">$150–300</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Yamazaki 18</td><td className="p-3">Dark chocolate, dried fruit, sherry</td><td className="p-3">43%</td><td className="p-3">$500–1,000</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Yamazaki 25</td><td className="p-3">Rich, complex, Mizunara wood, plum</td><td className="p-3">43%</td><td className="p-3">$3,000–5,000+</td></tr>
                                    <tr><td className="p-3 font-semibold">Sherry Cask</td><td className="p-3">Raisins, cinnamon, deep amber</td><td className="p-3">48%</td><td className="p-3">$5,000+</td></tr>
                                </tbody>
                            </table>

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
                                    <p className="text-charcoal/80 mb-3">If you're not ready to commit to a full bottle, sampling Yamazaki at a local bar or restaurant is excellent. Jinbeh's <Link href="/bar" className="text-accent-red hover:underline">bar</Link> features a curated Japanese whisky selection including Yamazaki by the glass.</p>
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
                                <div className="bg-deep-indigo/10 rounded-lg p-5 border-l-4 border-deep-indigo">
                                    <h3 className="font-bold text-charcoal mb-2">✓ Utilize Store Locators</h3>
                                    <p className="text-charcoal/80 text-sm">Many liquor stores and large retailers have online locators. Enter your zip code or city to find nearest locations carrying Yamazaki whiskey.</p>
                                </div>
                                <div className="bg-deep-indigo/10 rounded-lg p-5 border-l-4 border-deep-indigo">
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
                                <p className="text-charcoal/80">A visit to Jinbeh is a delightful way to enjoy Yamazaki whiskey in a unique, sophisticated setting with professional guidance. Stop by during <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour</Link> for special pricing on Japanese spirits.</p>
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

                            <div className="mt-12">
                                <ProTip variant="insider">
                                    <strong>Japanese whiskey tasting tip:</strong> The best way to appreciate Yamazaki is the Japanese "mizuwari" style—mix one part whiskey with two parts water and a single large ice cube. This is how most Japanese drink their premium whiskey, and it opens up delicate flavors you'd miss drinking it neat. At Jinbeh's <Link href="/bar" className="text-accent-red hover:underline">bar</Link>, ask our bartender to prepare a mizuwari or try our whiskey flight to compare expressions. Visit during <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour</Link> for special pricing on Japanese spirits. <a href="tel:2146191200" className="text-accent-red hover:underline">Frisco: (214) 619-1200</a> or <a href="tel:2144882224" className="text-accent-red hover:underline">Lewisville: (214) 488-2224</a>
                                </ProTip>

                                <PillarCTA type="catering" />
                                <LocationCTA location="both" />
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related Reads</h3>
                                <div className="space-y-3">
                                    {[{ t: "Japanese Whiskey's Global Rise", s: "/blog/japanese-whiskey-guide", i: "/images/blog/20-C060324-6766.jpg" },
                                    { t: "Japanese Cocktails: Art & Recipes", s: "/blog/japanese-cocktails", i: "/images/blog/19-C060324-6754.jpg" },
                                    { t: "Best Happy Hour Frisco", s: "/blog/best-happy-hour-frisco-tx", i: "/images/blog/10-C060324-6501.jpg" }].map(r => (
                                        <Link key={r.s} href={r.s} className="flex gap-3 group">
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0"><Image src={r.i} alt={`Related: ${r.t}`} fill className="object-cover" /></div>
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
