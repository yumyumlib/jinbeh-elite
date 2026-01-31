import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Popular Japanese Beverages: Iconic Drinks Guide | Jinbeh",
    description: "Discover Japan's most popular beverages from matcha tea and sake to Ramune soda and canned coffee. Explore iconic drinks reflecting tradition and innovation.",
    keywords: ["japanese beverages", "sake", "matcha", "ramune", "canned coffee", "japanese drinks", "shochu", "Japanese tea", "Japanese spirits"],
    openGraph: {
        title: "Popular Japanese Beverages: Complete Drinks Guide",
        description: "Explore iconic Japanese beverages and their cultural significance. From traditional sake to modern Ramune.",
        images: ["/images/drinks/JinbehPunchBeverageDrink.jpg"],
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Popular Japanese Beverages: Explore Iconic Drinks", datePublished: "2026-01-24", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What are the most popular Japanese beverages?", acceptedAnswer: { "@type": "Answer", text: "Japan's most beloved beverages include matcha tea, sake, shochu, ramune soda, calpis, pocari sweat, canned coffee, and various bottled teas. Each reflects Japan's dedication to quality, tradition, and innovation." } },
            { "@type": "Question", name: "What is matcha and how is it different from regular green tea?", acceptedAnswer: { "@type": "Answer", text: "Matcha is finely ground green tea powder used in traditional tea ceremonies for centuries. Unlike steeped tea, you consume the whole leaf, providing more nutrients and a rich, umami flavor. It's a meditative cultural experience." } }
        ]
    }
];

export default function JapaneseBeveragesGuide() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/7-C060324-6447.jpg" alt="Japanese Beverages" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=cuisine">Cuisine</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-soft-gold mb-4">🍵 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Popular Japanese Beverages</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Japan's beverage culture is a window into the country's unique culinary world.</strong> From ancient tea ceremonies to modern vending machine innovations, each drink tells a story of tradition, quality, and creativity.</p>

                            <div className="bg-gradient-to-br from-soft-gold/10 to-deep-indigo/10 border-l-4 border-soft-gold rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"Japanese beverages reflect our commitment to detail and dedication to quality. Whether it's a carefully whisked matcha or a refreshing Ramune, each drink is crafted with intention and care."</p>
                                <span className="text-sm text-charcoal/60">— Jinbeh Beverage Philosophy</span>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍵 Traditional Tea & Spirits</h2>
                            <p className="text-charcoal/80 mb-4">Japan's tea culture is deeply rooted in history, with beverages that have been perfected over centuries. These drinks offer refreshment, wellness benefits, and cultural significance.</p>

                            <div className="space-y-4 my-6">
                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-soft-gold">
                                    <h3 className="font-bold text-charcoal mb-2">🌸 Matcha: The Green Elixir</h3>
                                    <p className="text-charcoal/80">Matcha is more than a drink—it's a cultural experience. This finely ground green tea powder has been used in traditional tea ceremonies for centuries. The preparation is meditative, focusing on harmony and respect. Rich in antioxidants and umami flavor, matcha offers both health benefits and spiritual connection.</p>
                                </div>

                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-accent-red">
                                    <h3 className="font-bold text-charcoal mb-2">🍶 Sake: Japan's Iconic Rice Wine</h3>
                                    <p className="text-charcoal/80">Sake, or "nihonshu," is a traditional rice wine with over 1000 years of history. Brewed using rice, water, yeast, and koji mold, sake varies in flavor and alcohol content. Enjoyed during celebrations and served warm or chilled, sake tasting is an art form like wine appreciation. Family-run breweries hold generations of secrets.</p>
                                </div>

                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-deep-indigo">
                                    <h3 className="font-bold text-charcoal mb-2">💫 Shochu: The Versatile Spirit</h3>
                                    <p className="text-charcoal/80">Shochu offers a unique alternative to sake with versatility for any occasion. Made from barley, sweet potatoes, or rice, this distilled spirit can be enjoyed straight, on the rocks, or mixed. Its popularity both domestically and internationally reflects its ability to suit different palates and settings.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🥤 Beloved Bottled & Canned Drinks</h2>
                            <p className="text-charcoal/80 mb-4">Japan's convenience drink culture showcases innovation and accessibility, bringing quality beverages to everyday life through convenient formats.</p>

                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Drink</th><th className="p-3 text-left">Type</th><th className="p-3 text-left">Experience</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">🍹 Ramune</td><td className="p-3">Carbonated Soda</td><td className="p-3">Playful glass marble bottle, nostalgic summer treat</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">🥛 Calpis</td><td className="p-3">Cultured Drink</td><td className="p-3">Tangy yogurt-like flavor, refreshing and accessible</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">💪 Pocari Sweat</td><td className="p-3">Sports Drink</td><td className="p-3">Electrolyte replenishment for athletes and activity</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">☕ Canned Coffee</td><td className="p-3">Coffee</td><td className="p-3">Premium quality, various styles from black to creamy</td></tr>
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">🍵 Oolong Tea</td><td className="p-3">Tea</td><td className="p-3">Balanced smooth flavor, perfect with meals</td></tr>
                                    <tr><td className="p-3 font-semibold">🍈 Melon Soda</td><td className="p-3">Soda</td><td className="p-3">Sweet, fizzy nostalgia, often served as float</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏪 Convenience Store Favorites</h2>
                            <p className="text-charcoal/80 mb-4">Japan's convenience stores offer an incredible selection of beverages, each reflecting the country's commitment to accessibility and quality innovation.</p>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[
                                    { emoji: "☕", name: "Canned Coffee", desc: "Perfected the art of on-the-go coffee with premium blends and convenient vending machine accessibility." },
                                    { emoji: "🍵", name: "Royal Milk Tea", desc: "Luxurious black tea and milk blend offering comforting warmth in convenient bottled form." },
                                    { emoji: "🌾", name: "Genmaicha", desc: "Unique blend of green tea with roasted rice creating nutty, comforting flavor profile." },
                                    { emoji: "🧊", name: "Bottled Teas", desc: "Year-round selection of quality teas from traditional matcha to modern blends." }
                                ].map(x => (
                                    <div key={x.name} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.emoji}</span>
                                        <h3 className="font-bold text-charcoal mb-2">{x.name}</h3>
                                        <p className="text-sm text-charcoal/70">{x.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎯 Why Japanese Beverages Stand Out</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6 bg-warm-ivory rounded-xl p-6">
                                <div>
                                    <h3 className="font-bold text-charcoal mb-2">✨ Quality Commitment</h3>
                                    <p className="text-sm text-charcoal/70">Each beverage reflects meticulous attention to ingredients, preparation, and presentation—whether it's a 1000-year-old sake or modern canned coffee.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-2">🔄 Tradition & Innovation</h3>
                                    <p className="text-sm text-charcoal/70">Japan honors ancient tea ceremonies while pioneering convenient bottled formats and premium artisanal options that appeal to modern tastes.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-2">🌍 Accessibility</h3>
                                    <p className="text-sm text-charcoal/70">Vending machines and convenience stores make quality beverages available everywhere, from quiet tea moments to on-the-go refreshment.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal mb-2">💪 Health Consciousness</h3>
                                    <p className="text-sm text-charcoal/70">From antioxidant-rich matcha to electrolyte-balanced sports drinks, Japanese beverages prioritize wellness alongside enjoyment.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQ</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "Where can I find authentic Japanese beverages?", a: "Asian markets, specialty tea shops, and regular grocers carry Japanese beverages. Jinbeh offers traditional drinks like sake and matcha as part of our dining experience. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 for our fresh and flavorful selections!" },
                                    { q: "Is sake an everyday drink in Japan?", a: "Sake is traditionally served for celebrations. In modern Japan, it's enjoyed casually like wine in other countries. It's a celebration! Jinbeh pairs premium sake with exquisite cuisine." },
                                    { q: "What are the health benefits of matcha?", a: "Matcha is rich in antioxidants, provides sustained energy without caffeine jitters, supports metabolism, and contains L-theanine promoting calm focus. It's nutrient-dense! Welcome to the table—experience authentic matcha at Jinbeh." },
                                    { q: "Does Jinbeh serve traditional Japanese beverages?", a: "Absolutely! We treat every guest like family. Jinbeh offers premium sake, matcha, and authentic Japanese drinks. Our Frisco and Lewisville locations provide gracious hospitality with every sip. It's a celebration of tradition!" }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-soft-gold to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍜 Pair Japanese Beverages with Authentic Cuisine at Jinbeh</h3>
                                <p className="text-white/80 mb-6">Enhance your dining experience with properly paired Japanese beverages, from premium sake with sushi to traditional matcha tea completing your meal. Experience the gracious hospitality of authentic Japanese beverage service at our Frisco or Lewisville locations.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco/menu" className="bg-white text-soft-gold px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">Frisco Menu</Link>
                                    <Link href="/lewisville/menu" className="bg-white text-soft-gold px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">Lewisville Menu</Link>
                                    <Link href="/frisco#reserve" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Reserve Frisco</Link>
                                    <Link href="/lewisville#reserve" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Reserve Lewisville</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related Articles</h3>
                                <div className="space-y-3">
                                    {[
                                        { t: "Popular Japanese Culture", s: "/blog/popular-japanese-culture", i: "/images/blog/8-C060324-6462.jpg" },
                                        { t: "Omakase Dining Guide", s: "/blog/omakase-dining-guide", i: "/images/blog/12-C060324-6551.jpg" },
                                        { t: "Best Sushi Dallas", s: "/blog/best-sushi-dallas", i: "/images/blog/1-C060324-6328.jpg" }
                                    ].map(r => (
                                        <Link key={r.s} href={r.s} className="flex gap-3 group">
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0"><Image src={r.i} alt="" fill className="object-cover" /></div>
                                            <span className="text-sm group-hover:text-accent-red">{r.t}</span>
                                        </Link>
                                    ))}
                                </div>

                                <RelatedArticles currentSlug="japanese-beverages-guide" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
