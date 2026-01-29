import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discover Teppanyaki: A Culinary Art Form | Jinbeh",
    description: "Learn about teppanyaki, the Japanese art of iron griddle cooking. Discover its history, techniques, and where to experience authentic teppanyaki in DFW.",
    keywords: ["teppanyaki", "hibachi vs teppanyaki", "japanese grill", "teppanyaki restaurant"],
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Discover Teppanyaki", datePublished: "2026-01-21", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is teppanyaki?", acceptedAnswer: { "@type": "Answer", text: "Teppanyaki is Japanese cooking on a flat iron griddle, featuring chef performance with knife skills and flames." } },
            { "@type": "Question", name: "Hibachi vs teppanyaki?", acceptedAnswer: { "@type": "Answer", text: "Hibachi uses charcoal; teppanyaki uses a flat iron plate. In America, 'hibachi restaurants' usually serve teppanyaki-style." } }
        ]
    }
];

export default function DiscoverTeppanyaki() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster="/images/blog/3-C060324-6364.jpg">
                    <source src="/videos/LOCAL-FRI-HIBACHI-chef-red-hat-grill-prep-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=cuisine">Cuisine</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-orange-500 mb-4">🍣 Cuisine</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Discover Teppanyaki: Culinary Art</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Teppanyaki</strong> (鉄板焼き) means "grilling on an iron plate." It's the art form behind what Americans call "hibachi restaurants"—where skilled chefs transform cooking into dinner theater.</p>

                            <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"At Jinbeh, our teppanyaki chefs train for years to perfect their craft. It's not just about the food—it's about creating unforgettable moments around the grill."</p>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🔥 Hibachi vs Teppanyaki</h2>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Feature</th><th className="p-3 text-left">Hibachi</th><th className="p-3 text-left">Teppanyaki</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b"><td className="p-3 font-semibold">Heat Source</td><td className="p-3">Charcoal grill</td><td className="p-3">Flat iron plate</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Style</td><td className="p-3">Traditional, smaller</td><td className="p-3">Chef performance</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">In US Restaurants</td><td className="p-3" colSpan={2}>Both terms used interchangeably for teppanyaki-style</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎭 The Teppanyaki Show</h2>
                            <div className="grid md:grid-cols-3 gap-4 my-6">
                                {[{ e: "🔪", t: "Knife Skills", d: "Precision cuts, rapid chopping" }, { e: "🔥", t: "Fire Tricks", d: "Onion volcano, flaming shrimp" }, { e: "🦐", t: "Food Toss", d: "Catch the shrimp in your mouth!" }].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5 text-center">
                                        <span className="text-4xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-3 my-8">
                                <div className="relative aspect-square rounded-xl overflow-hidden"><Image src="/images/blog/3-C060324-6364.jpg" alt="Chef" fill className="object-cover" /></div>
                                <div className="relative aspect-square rounded-xl overflow-hidden"><Image src="/images/blog/4-C060324-6380.jpg" alt="Fire" fill className="object-cover" /></div>
                                <div className="relative aspect-square rounded-xl overflow-hidden"><Image src="/images/blog/5-C060324-6397.jpg" alt="Grill" fill className="object-cover" /></div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQs</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "What is teppanyaki?", a: "Japanese cooking on a flat iron griddle featuring chef performance with knife skills and flames." },
                                    { q: "Hibachi vs teppanyaki?", a: "Hibachi uses charcoal; teppanyaki uses a flat iron plate. In US, terms used interchangeably." },
                                    { q: "Is teppanyaki good for groups?", a: "Perfect! Shared tables seat 8-10, making it ideal for celebrations and team dinners." }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-accent-red to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🔥 Experience Teppanyaki at Jinbeh</h3>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco#reserve" className="bg-white text-accent-red px-6 py-3 rounded-xl font-semibold">Reserve Frisco</Link>
                                    <Link href="/lewisville#reserve" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Reserve Lewisville</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related</h3>
                                <div className="space-y-3">
                                    {[{ t: "Best Hibachi Dallas", s: "/blog/best-hibachi-dallas-tx", i: "/images/blog/1-C060324-6328.jpg" },
                                    { t: "Hibachi Birthday Ideas", s: "/blog/hibachi-birthday-party-ideas", i: "/images/blog/22-C060324-6829.jpg" }].map(r => (
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
