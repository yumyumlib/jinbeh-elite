import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

export const metadata: Metadata = {
    title: "Japanese Whiskey's Global Rise: A Flavorful Journey | Jinbeh",
    description: "Explore the rise of Japanese whiskey from its origins to global acclaim. Discover the craftsmanship and innovation behind Yamazaki, Nikka, and more.",
    keywords: ["Japanese whiskey", "Yamazaki", "Nikka", "Suntory", "whiskey guide", "Japanese spirits", "Hakushu", "Yoichi", "premium whiskey"],
    openGraph: {
        title: "Japanese Whiskey's Global Rise: Premium Spirits Guide",
        description: "Master Japanese whiskey. Learn about top brands, tasting notes, and where to enjoy them.",
        images: ["/images/beverages/JapaneseWhiskey.webp"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/japanese-whiskey-guide",
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Whiskey's Global Rise: A Flavorful Journey", datePublished: "2026-01-30", dateModified: "2026-03-11", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" }, image: "https://jinbeh.com/images/beverages/JapaneseWhiskey.webp" },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is Japanese whiskey?", acceptedAnswer: { "@type": "Answer", text: "Japanese whiskey is a spirit produced by Japanese distilleries that combines Scottish whiskey-making techniques with Japanese precision and local ingredients. It's known for its smooth, refined flavor and meticulous craftsmanship." } },
            { "@type": "Question", name: "When was Japanese whiskey first made?", acceptedAnswer: { "@type": "Answer", text: "Japanese whiskey production began in 1923 when Shinjiro Torii and Masataka Taketsuru founded Yamazaki, Japan's first malt whiskey distillery." } },
            { "@type": "Question", name: "What makes Japanese whiskey special?", acceptedAnswer: { "@type": "Answer", text: "Japanese whiskey combines Scottish techniques with Japanese elements like local barley and mountain water. Distillers focus on precision, craftsmanship, and innovation, using unique aging methods and ingredients like Mizunara oak." } },
            { "@type": "Question", name: "What are top Japanese whiskey brands?", acceptedAnswer: { "@type": "Answer", text: "Top brands include Suntory (Yamazaki, Hakushu), Nikka (Yoichi, Miyagikyo), Chichibu, and Mars Shinshu. Each offers distinctive flavor profiles and expressions." } },
            { "@type": "Question", name: "How does Japanese whiskey compare to Scottish whisky?", acceptedAnswer: { "@type": "Answer", text: "Both follow similar production, but Japanese whiskey emphasizes subtlety, precision, and balance. Scotch often features bold flavors, while Japanese whiskey tends toward elegance and harmony." } },
            { "@type": "Question", name: "Where can I try Japanese whiskey in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Jinbeh Japanese Restaurant in Frisco and Lewisville offers an impressive selection of Japanese whiskeys. Try the Japanese whisky highball — Japan's favorite way to enjoy whiskey — paired with hibachi or sushi." } },
            { "@type": "Question", name: "Are Japanese whiskeys expensive?", acceptedAnswer: { "@type": "Answer", text: "Premium Japanese whiskeys command high prices due to limited production. However, excellent entry-level options like Suntory Toki ($30-40) and Nikka Coffey Grain ($50-65) offer great quality at accessible prices." } },
            { "@type": "Question", name: "What is the best way to drink Japanese whiskey?", acceptedAnswer: { "@type": "Answer", text: "The Japanese highball (whisky with sparkling soda water over ice) is the most popular way. Neat or on the rocks with a single large ice cube also works well. Mizuwari (whisky with still water) is a popular dinner pairing style." } }
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
        { "@type": "ListItem", "position": 4, "name": "Japanese Whiskey Guide: Top Bottles & Tasting Notes" },
    ],
};

export default function JapaneseWhiskeyGuide() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/beverages/JapaneseWhiskey.webp" alt="Japanese whiskey bottles showcasing premium spirits" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/bar">Menu</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-amber-700 mb-4">🥃 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Japanese Whiskey's Global Rise</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Japanese whiskey has revolutionized the global spirits market.</strong> From humble origins in 1923 to international acclaim, Japanese distillers have perfected the art of whiskey-making by blending Scottish tradition with Japanese precision and innovation. Explore our curated selection at the <Link href="/bar" className="text-deep-indigo hover:text-accent-red underline transition-colors">Jinbeh bar</Link>.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🥃 The Origins of Japanese Whiskey</h2>

                            <DidYouKnow
                                fact="In 2015, Suntory's Yamazaki Single Malt Sherry Cask was named the World's Best Whisky by Jim Murray's Whisky Bible, shocking the industry and catapulting Japanese whiskey to global fame. Today, rare bottles of Yamazaki 50 Year Old sell for over $300,000 at auction. Japan has over 30 active whiskey distilleries, and demand so far exceeds supply that many age-stated expressions have been discontinued."
                                source="Jim Murray's Whisky Bible & Sotheby's Auction Records"
                            />
                            <p className="text-charcoal/80 mb-6">The story of Japanese whiskey begins in the early 20th century with two visionary men: Shinjiro Torii and Masataka Taketsuru. Torii, founder of Suntory, was inspired by Scotch whiskey tradition and sought to create a spirit reflecting the delicate balance and harmony of Japanese culture.</p>
                            <p className="text-charcoal/80 mb-6">Taketsuru, a young visionary, traveled to Scotland to master whiskey-making techniques. He brought back crucial knowledge that would lay the foundation for Japan's whiskey industry. Together, in 1923, they established Yamazaki, Japan's first malt whiskey distillery—a testament to their pioneering spirit and vision.</p>

                            <div className="bg-amber-50 rounded-xl p-6 mb-8 border-l-4 border-amber-700">
                                <h3 className="font-bold text-charcoal mb-2">Historic Milestone</h3>
                                <p className="text-charcoal/80 text-sm">Yamazaki, established in 1923, still stands as Japan's oldest malt whiskey distillery and a symbol of the nation's commitment to excellence in spirits production.</p>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎨 The Evolution of Japanese Whiskey</h2>
                            <p className="text-charcoal/80 mb-6">Japanese whiskey has evolved dramatically since its inception. Initially, distillers focused on emulating Scotch whiskey, but over time they developed their own distinct style. This evolution was driven by a desire to not only replicate but innovate, creating whiskey embodying the precision and artistry Japan is renowned for.</p>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-deep-indigo/10 rounded-xl p-6 border-2 border-deep-indigo/30">
                                    <h3 className="font-bold text-charcoal mb-3">Scottish Influence</h3>
                                    <p className="text-charcoal/80 text-sm">Japanese whiskey makers adopted pot stills and double distillation techniques to create smooth, refined spirits. Yet they incorporated unique Japanese elements that set their whiskey apart.</p>
                                </div>
                                <div className="bg-deep-indigo/10 rounded-xl p-6 border-2 border-deep-indigo/30">
                                    <h3 className="font-bold text-charcoal mb-3">Japanese Innovation</h3>
                                    <p className="text-charcoal/80 text-sm">The use of local ingredients like Japanese barley and pure mountain water imparts distinctive tastes. Distillers also experiment with Mizunara oak, which creates unique flavor profiles.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">✨ Key Whiskey Styles</h2>

                            <div className="space-y-4 my-8">
                                <div className="border-l-4 border-accent-red pl-6 py-4">
                                    <h3 className="font-bold text-charcoal mb-2">Japanese Single Malts</h3>
                                    <p className="text-charcoal/80 text-sm">Renowned for complexity and elegance, single malts like those from Suntory and Nikka feature notes of floral, fruity, and smoky flavors. Distillers create diverse expressions appealing to all palates.</p>
                                </div>
                                <div className="border-l-4 border-accent-red pl-6 py-4">
                                    <h3 className="font-bold text-charcoal mb-2">Peated Japanese Whiskey</h3>
                                    <p className="text-charcoal/80 text-sm">In recent years, peated styles have gained popularity. Brands like Yoichi and Hakushu produce peated whiskeys with smoky, earthy flavors that rival Scottish counterparts while maintaining Japanese refinement.</p>
                                </div>
                                <div className="border-l-4 border-accent-red pl-6 py-4">
                                    <h3 className="font-bold text-charcoal mb-2">Blended Whiskeys</h3>
                                    <p className="text-charcoal/80 text-sm">Blended Japanese whiskeys combine different malt and grain whiskeys, creating harmonious, balanced spirits accessible to both connoisseurs and newcomers.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏆 Top Japanese Whiskey Brands</h2>

                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Brand</th><th className="p-3 text-left">Flagship Bottle</th><th className="p-3 text-left">Tasting Notes</th><th className="p-3 text-left">Price Range</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">Suntory</td><td className="p-3">Yamazaki 12</td><td className="p-3">Honey, peach, oak</td><td className="p-3">$150–300</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Nikka</td><td className="p-3">Yoichi Single Malt</td><td className="p-3">Smoky, peaty, maritime</td><td className="p-3">$80–150</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Hakushu</td><td className="p-3">Hakushu 12</td><td className="p-3">Herbal, minty, fresh</td><td className="p-3">$120–200</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Chichibu</td><td className="p-3">Ichiro&apos;s Malt</td><td className="p-3">Fruity, spicy, complex</td><td className="p-3">$100–500+</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Mars Shinshu</td><td className="p-3">Mars Iwai</td><td className="p-3">Vanilla, caramel, soft</td><td className="p-3">$35–60</td></tr>
                                    <tr><td className="p-3 font-semibold">Suntory (Entry)</td><td className="p-3">Toki</td><td className="p-3">Light, citrus, clean</td><td className="p-3">$30–40</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍸 How to Drink Japanese Whiskey</h2>
                            <p className="text-charcoal/80 mb-4">There&apos;s no wrong way, but here are the most popular serving styles in Japan:</p>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Style</th><th className="p-3 text-left">How It&apos;s Made</th><th className="p-3 text-left">Best With</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">⭐ Highball</td><td className="p-3">Whisky + sparkling soda, tall glass</td><td className="p-3">Hibachi, fried foods</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Neat</td><td className="p-3">Room temperature, no ice</td><td className="p-3">Premium single malts</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">On the Rocks</td><td className="p-3">One large ice cube</td><td className="p-3">After dinner, savoring</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Mizuwari</td><td className="p-3">Whisky + still water (1:2 ratio)</td><td className="p-3">Sushi, light dishes</td></tr>
                                    <tr><td className="p-3 font-semibold">Oyuwari</td><td className="p-3">Whisky + hot water</td><td className="p-3">Winter, warm dishes</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🌍 Global Impact</h2>
                            <p className="text-charcoal/80 mb-6">The rise of Japanese whiskey has profoundly impacted the global whiskey market. As demand continues to grow, distillers are expanding production and exploring new markets, leading to increased competition and innovation that benefits whiskey lovers worldwide. Discover more about premium Japanese beverages in our <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red underline transition-colors">sake pairing guide</Link>.</p>
                            <p className="text-charcoal/80 mb-6">Japanese whiskey has reshaped consumer expectations, encouraging deeper appreciation for quality and craftsmanship. This shift has inspired distillers globally to focus on producing premium products, ultimately raising standards across the industry.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQs</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "How does Japanese whiskey compare to Scottish whisky?", a: "Both follow similar production, but Japanese whiskey emphasizes subtlety, precision, and balance. Scotch often features bold flavors, while Japanese whiskey tends toward elegance and harmony. Fresh and flavorful!" },
                                    { q: "What makes Yamazaki famous?", a: "Yamazaki, established in 1923, is Japan's oldest malt whiskey distillery. Its flagship is renowned for delicate fruit and oak balance with notes of honey, peach, and pineapple. A celebration of craftsmanship!" },
                                    { q: "Where can I try Japanese whiskey in Dallas?", a: "Welcome to the table at Jinbeh! We offer an impressive selection of Japanese whiskeys paired with authentic Japanese cuisine. Visit our Frisco or Lewisville location. We treat every guest like family!" },
                                    { q: "Are Japanese whiskeys expensive?", a: "Premium Japanese whiskeys command high prices due to limited production and exceptional quality. However, excellent entry-level options exist at more accessible price points. Dinner and a show at Jinbeh makes it special!" }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12">
                                <ProTip variant="insider">
                                    <strong>Japanese whiskey tasting tip:</strong> At Jinbeh's <Link href="/bar" className="text-accent-red hover:underline">bar</Link>, try the highball—Japan's favorite way to enjoy whiskey. It's Suntory whisky over ice with sparkling water, and it pairs perfectly with hibachi and sushi. Visit during <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour</Link> for special pricing on our Japanese whiskey selection. Ask the bartender for a tasting comparison of Suntory vs. Nikka!
                                </ProTip>

                                <PillarCTA type="catering" />
                                <LocationCTA location="both" />
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related Reads</h3>
                                <div className="space-y-3">
                                    {[{ t: "Find Yamazaki Whiskey Nearby", s: "/blog/yamazaki-whiskey-guide", i: "/images/drinks/cocktail.jpg" },
                                    { t: "Japanese Cocktails: Art & Recipes", s: "/blog/japanese-cocktails", i: "/images/blog/19-C060324-6754.jpg" },
                                    { t: "Sake Alcohol Strength Guide", s: "/blog/sake-alcohol-strength", i: "/images/blog/17-C060324-6708.jpg" }].map(r => (
                                        <Link key={r.s} href={r.s} className="flex gap-3 group">
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0"><Image src={r.i} alt={`Related: ${r.t}`} fill className="object-cover" /></div>
                                            <span className="text-sm group-hover:text-accent-red transition">{r.t}</span>
                                        </Link>
                                    ))}
                                </div>

                                <RelatedArticles currentSlug="japanese-whiskey-guide" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
