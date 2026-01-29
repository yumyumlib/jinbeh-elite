import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Japanese Restaurants Lewisville TX: Top Picks | Jinbeh",
    description: "Find the best Japanese restaurants in Lewisville TX! From hibachi to sushi, discover authentic dining. Jinbeh offers family-friendly hibachi and fresh sushi.",
    keywords: ["japanese restaurant lewisville", "sushi lewisville tx", "hibachi lewisville", "asian food lewisville"],
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Restaurants Lewisville TX", datePublished: "2026-01-23", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "Best Japanese restaurant in Lewisville?", acceptedAnswer: { "@type": "Answer", text: "Jinbeh is a top choice, offering both hibachi and sushi under one roof since 1988. Located off I-35E near Vista Ridge Mall." } }
        ]
    }
];

export default function JapaneseRestaurantsLewisville() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/6-C060324-6405.jpg" alt="Jinbeh Lewisville" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=locations">Locations</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-deep-indigo mb-4">📍 Locations</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Japanese Restaurants Lewisville TX</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Lewisville has some great Japanese dining options.</strong> Whether you want hibachi entertainment, fresh sushi, or a quick ramen fix, here's where to go.</p>

                            <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"Our Lewisville location has been serving the community since 1988. We've watched families grow up around our hibachi tables. That's what makes this special."</p>
                                <span className="text-sm text-charcoal/60">— The Jinbeh Family</span>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍱 Top Japanese Spots in Lewisville</h2>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Restaurant</th><th className="p-3 text-left">Style</th><th className="p-3 text-left">Best For</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">⭐ Jinbeh</td><td className="p-3">Hibachi + Sushi</td><td className="p-3">Families, celebrations</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Sakura Hibachi</td><td className="p-3">Hibachi</td><td className="p-3">Groups, quick service</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Sushi Sake</td><td className="p-3">Sushi</td><td className="p-3">Date night, cocktails</td></tr>
                                    <tr><td className="p-3 font-semibold">Ramen Hakata</td><td className="p-3">Ramen</td><td className="p-3">Quick lunch, authentic broth</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏯 Why Choose Jinbeh Lewisville</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[{ e: "🔥", t: "Hibachi Theater", d: "Full chef performance at your table" }, { e: "🍣", t: "Fresh Sushi Bar", d: "Made-to-order by trained chefs" }, { e: "🎉", t: "Celebration Ready", d: "Birthdays, anniversaries, groups" }, { e: "📍", t: "Easy Access", d: "Off I-35E near Vista Ridge Mall" }].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-deep-indigo to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍱 Visit Jinbeh Lewisville</h3>
                                <p className="text-white/80 mb-2">250 E Round Grove Rd, Lewisville, TX 75067</p>
                                <p className="text-white/80 mb-6">(972) 315-3744</p>
                                <Link href="/lewisville#reserve" className="bg-white text-deep-indigo px-6 py-3 rounded-xl font-semibold inline-block">Reserve Your Table</Link>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related</h3>
                                <div className="space-y-3">
                                    {[{ t: "Best Hibachi Dallas", s: "/blog/best-hibachi-dallas-tx", i: "/images/blog/1-C060324-6328.jpg" },
                                    { t: "Best Sushi Dallas", s: "/blog/best-sushi-dallas", i: "/images/blog/8-C060324-6462.jpg" }].map(r => (
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
