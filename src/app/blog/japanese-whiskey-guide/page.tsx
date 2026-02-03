import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Japanese Whiskey's Global Rise: A Flavorful Journey | Jinbeh",
    description: "Explore the rise of Japanese whiskey from its origins to global acclaim. Discover the craftsmanship and innovation behind Yamazaki, Nikka, and more.",
    keywords: ["Japanese whiskey", "Yamazaki", "Nikka", "Suntory", "whiskey guide", "Japanese spirits", "Hakushu", "Yoichi", "premium whiskey"],
    openGraph: {
        title: "Japanese Whiskey's Global Rise: Premium Spirits Guide",
        description: "Master Japanese whiskey. Learn about top brands, tasting notes, and where to enjoy them.",
        images: ["/images/beverages/JapaneseWhiskey.webp"],
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Whiskey's Global Rise: A Flavorful Journey", datePublished: "2026-01-30", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is Japanese whiskey?", acceptedAnswer: { "@type": "Answer", text: "Japanese whiskey is a spirit produced by Japanese distilleries that combines Scottish whiskey-making techniques with Japanese precision and local ingredients. It's known for its smooth, refined flavor and meticulous craftsmanship." } },
            { "@type": "Question", name: "When was Japanese whiskey first made?", acceptedAnswer: { "@type": "Answer", text: "Japanese whiskey production began in 1923 when Shinjiro Torii and Masataka Taketsuru founded Yamazaki, Japan's first malt whiskey distillery." } },
            { "@type": "Question", name: "What makes Japanese whiskey special?", acceptedAnswer: { "@type": "Answer", text: "Japanese whiskey combines Scottish techniques with Japanese elements like local barley and mountain water. Distillers focus on precision, craftsmanship, and innovation, using unique aging methods and ingredients like Mizunara oak." } },
            { "@type": "Question", name: "What are top Japanese whiskey brands?", acceptedAnswer: { "@type": "Answer", text: "Top brands include Suntory (Yamazaki, Hakushu), Nikka (Yoichi, Miyagikyo), Chichibu, and Mars Shinshu. Each offers distinctive flavor profiles and expressions." } }
        ]
    }
];

export default function JapaneseWhiskeyGuide() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/beverages/JapaneseWhiskey.webp" alt="Japanese whiskey bottles showcasing premium spirits" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=beverages">Beverages</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-amber-700 mb-4">🥃 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Japanese Whiskey's Global Rise</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Japanese whiskey has revolutionized the global spirits market.</strong> From humble origins in 1923 to international acclaim, Japanese distillers have perfected the art of whiskey-making by blending Scottish tradition with Japanese precision and innovation.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🥃 The Origins of Japanese Whiskey</h2>
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

                            <div className="space-y-6 my-8">
                                <div className="bg-warm-ivory rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-charcoal mb-2">Suntory</h3>
                                    <p className="text-charcoal/80 text-sm mb-3">Known for iconic Yamazaki and Hakushu distilleries, Suntory produces some of the finest Japanese single malts and blends. Their commitment to quality and innovation has made them a global leader.</p>
                                    <p className="text-charcoal/70 text-xs font-semibold">Flagship: Yamazaki 12 Year Old</p>
                                </div>
                                <div className="bg-warm-ivory rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-charcoal mb-2">Nikka</h3>
                                    <p className="text-charcoal/80 text-sm mb-3">Founded by Masataka Taketsuru, Nikka is celebrated for its Yoichi and Miyagikyo single malts. Their dedication to traditional methods and innovation has earned international acclaim.</p>
                                    <p className="text-charcoal/70 text-xs font-semibold">Flagship: Yoichi 10 Year Old</p>
                                </div>
                                <div className="bg-warm-ivory rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-charcoal mb-2">Chichibu</h3>
                                    <p className="text-charcoal/80 text-sm mb-3">A newer player that quickly gained recognition for innovative and high-quality whiskeys. Despite its youth, Chichibu's commitment to experimentation has earned a reputation for producing exciting, unique expressions.</p>
                                    <p className="text-charcoal/70 text-xs font-semibold">Flagship: The Ichiro's Malt</p>
                                </div>
                                <div className="bg-warm-ivory rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-charcoal mb-2">Mars Shinshu</h3>
                                    <p className="text-charcoal/80 text-sm mb-3">Nestled in the Japanese Alps, Mars Shinshu produces whiskeys showcasing unique terroir. Their distinct profiles, influenced by pristine environment and local ingredients, appeal to those seeking something truly special.</p>
                                    <p className="text-charcoal/70 text-xs font-semibold">Flagship: Mars Iwai</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🌍 Global Impact</h2>
                            <p className="text-charcoal/80 mb-6">The rise of Japanese whiskey has profoundly impacted the global whiskey market. As demand continues to grow, distillers are expanding production and exploring new markets, leading to increased competition and innovation that benefits whiskey lovers worldwide. Discover more about premium Japanese beverages in our <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red underline transition-colors">sake pairing guide</Link>.</p>
                            <p className="text-charcoal/80 mb-6">Japanese whiskey has reshaped consumer expectations, encouraging deeper appreciation for quality and craftsmanship. This shift has inspired distillers globally to focus on producing premium products, ultimately raising standards across the industry.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQs</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "How does Japanese whiskey compare to Scottish whisky?", a: "Both follow similar production, but Japanese whiskey emphasizes subtlety, precision, and balance. Scotch often features bold flavors, while Japanese whiskey tends toward elegance and harmony. Fresh and flavorful!" },
                                    { q: "What makes Yamazaki famous?", a: "Yamazaki, established in 1923, is Japan's oldest malt whiskey distillery. Its flagship is renowned for delicate fruit and oak balance with notes of honey, peach, and pineapple. A celebration of craftsmanship!" },
                                    { q: "Where can I try Japanese whiskey in Dallas?", a: "Welcome to the table at Jinbeh! We offer an impressive selection of Japanese whiskeys paired with authentic Japanese cuisine. Visit our <a href=\"/locations/frisco\" className=\"text-deep-indigo underline\">Frisco</a> or <a href=\"/locations/lewisville\" className=\"text-deep-indigo underline\">Lewisville</a> location. We treat every guest like family!" },
                                    { q: "Are Japanese whiskeys expensive?", a: "Premium Japanese whiskeys command high prices due to limited production and exceptional quality. However, excellent entry-level options exist at more accessible price points. Dinner and a show at Jinbeh makes it special!" }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">Explore Premium Japanese Whiskeys at Jinbeh</h3>
                                <p className="mb-6 text-white/90">Discover our curated selection of Japanese whiskeys, expertly paired with our exceptional Japanese cuisine and hibachi experiences. Visit either our Frisco or Lewisville location to taste these remarkable spirits with the hospitality of a gracious host.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco#reserve" className="bg-white text-accent-red px-8 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">Reserve a Table</Link>
                                    <a href="tel:2146191200" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition">Call (214) 619-1200</a>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related Reads</h3>
                                <div className="space-y-3">
                                    {[{ t: "Find Yamazaki Whiskey Nearby", s: "/blog/yamazaki-whiskey-guide", i: "/images/drinks/cocktail.jpg" },
                                    { t: "Japanese Cocktails: Art & Recipes", s: "/blog/japanese-cocktails", i: "/images/blog/19-C060324-6751.jpg" },
                                    { t: "Sake Alcohol Strength Guide", s: "/blog/sake-alcohol-strength", i: "/images/blog/17-C060324-6708.jpg" }].map(r => (
                                        <Link key={r.s} href={r.s} className="flex gap-3 group">
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0"><Image src={r.i} alt="" fill className="object-cover" /></div>
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
