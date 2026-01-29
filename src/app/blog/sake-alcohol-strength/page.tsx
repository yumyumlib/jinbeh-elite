import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sake Alcohol Strength: ABV & Types | Jinbeh",
    description: "Learn about sake alcohol content, ABV, and types. From junmai to daiginjo. Explore Jinbeh's sake selection.",
    keywords: ["sake alcohol content", "sake abv", "types of sake", "sake strength"],
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Sake Alcohol Strength Guide", datePublished: "2026-01-20", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "How strong is sake?", acceptedAnswer: { "@type": "Answer", text: "Sake is 15-17% ABV, similar to wine but lower than spirits." } },
            { "@type": "Question", name: "Serve sake hot or cold?", acceptedAnswer: { "@type": "Answer", text: "Premium daiginjo cold; fuller junmai can be warm." } }
        ]
    }
];

export default function SakeGuide() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/17-C060324-6708.jpg" alt="Sake" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=beverages">Beverages</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-purple-600 mb-4">🍶 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Sake Alcohol Strength Guide</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>How strong is sake?</strong> At 15-17% ABV, it's similar to wine but brewed like beer. Let's explore types, serving, and pairings.</p>

                            <div className="grid grid-cols-4 gap-3 my-8">
                                {[{ e: "🍺", n: "Beer", v: "4-6%", c: "amber" }, { e: "🍷", n: "Wine", v: "12-14%", c: "red" }, { e: "🍶", n: "Sake", v: "15-17%", c: "purple" }, { e: "🥃", n: "Whiskey", v: "40%", c: "amber" }].map(x => (
                                    <div key={x.n} className={`bg-${x.c}-50 rounded-xl p-4 text-center border-2 border-${x.c}-200 ${x.n === "Sake" ? "ring-2 ring-purple-400" : ""}`}>
                                        <span className="text-3xl block mb-1">{x.e}</span>
                                        <span className="font-bold text-sm">{x.n}</span>
                                        <span className="block text-lg font-bold text-charcoal">{x.v}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍶 Sake Types</h2>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Type</th><th className="p-3">ABV</th><th className="p-3 text-left">Profile</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b"><td className="p-3 font-semibold">Junmai</td><td className="p-3 text-center">15-16%</td><td className="p-3">Rich, umami</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Junmai Ginjo</td><td className="p-3 text-center">15-16%</td><td className="p-3">Fruity, aromatic</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Daiginjo</td><td className="p-3 text-center">15-17%</td><td className="p-3">Elegant, floral</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Nigori</td><td className="p-3 text-center">12-17%</td><td className="p-3">Creamy, sweet</td></tr>
                                    <tr><td className="p-3 font-semibold">Sparkling</td><td className="p-3 text-center">5-12%</td><td className="p-3">Light, fizzy</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🌡️ Hot vs Cold</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
                                    <span className="text-3xl">❄️</span>
                                    <h3 className="font-bold mt-2">Serve Cold</h3>
                                    <p className="text-sm text-charcoal/70">Daiginjo, Ginjo, Sparkling</p>
                                </div>
                                <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
                                    <span className="text-3xl">🔥</span>
                                    <h3 className="font-bold mt-2">Serve Warm</h3>
                                    <p className="text-sm text-charcoal/70">Junmai, Honjozo</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQs</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "How strong is sake vs wine?", a: "Sake is 15-17% ABV, slightly stronger than wine (12-14%)." },
                                    { q: "What's a sake bomb?", a: "Shot of sake dropped into beer—fun party drink! Half-price at Jinbeh happy hour." },
                                    { q: "Best food with sake?", a: "Light sakes pair with sashimi; richer junmai complements hibachi." }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍶 Explore Our Sake Selection</h3>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco/menu" className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold">View Menu</Link>
                                    <Link href="/happy-hour" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Happy Hour</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related</h3>
                                <div className="space-y-3">
                                    {[{ t: "Best Happy Hour Frisco", s: "/blog/best-happy-hour-frisco-tx", i: "/images/blog/10-C060324-6501.jpg" },
                                    { t: "Types of Sushi", s: "/blog/types-of-sushi", i: "/images/blog/12-C060324-6551.jpg" }].map(r => (
                                        <Link key={r.s} href={r.s} className="flex gap-3 group">
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden"><Image src={r.i} alt="" fill className="object-cover" /></div>
                                            <span className="text-sm group-hover:text-accent-red">{r.t}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
