import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Sushi Dallas TX: Top Restaurants & Hidden Gems | Jinbeh",
    description: "Find the best sushi in Dallas TX! From authentic omakase to creative rolls. Discover top spots including Jinbeh's fresh sushi near Frisco and Lewisville.",
    keywords: ["best sushi dallas", "sushi dallas tx", "japanese restaurant dallas", "sushi near me dallas"],
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Best Sushi Dallas TX", datePublished: "2026-01-22", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is the best sushi in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Top-rated spots include Jinbeh (Frisco/Lewisville), Uchi, Nobu, and Tei-An. For value plus quality, Jinbeh offers fresh sushi with 37+ years of tradition." } }
        ]
    }
];

export default function BestSushiDallas() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/22-C060324-6830.jpg" alt="Sushi Dallas" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=local-guides">Locations</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-deep-indigo mb-4">📍 Locations</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Best Sushi Dallas TX</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Dallas has incredible sushi.</strong> From upscale omakase experiences downtown to family-friendly spots in the suburbs, here's where to find the freshest fish in DFW.</p>

                            <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"We've been serving fresh sushi in DFW since 1988. While we're in Frisco and Lewisville, our regulars drive from all over Dallas for the quality and value."</p>
                                <span className="text-sm text-charcoal/60">— The Jinbeh Family</span>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏆 Top Dallas-Area Sushi Spots</h2>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Restaurant</th><th className="p-3 text-left">Best For</th><th className="p-3">Price</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">⭐ Jinbeh Frisco</td><td className="p-3">Family, hibachi + sushi combo</td><td className="p-3 text-center">$$</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Uchi Dallas</td><td className="p-3">Upscale omakase, date night</td><td className="p-3 text-center">$$$$</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Nobu Dallas</td><td className="p-3">Celebrity chef, trendy crowd</td><td className="p-3 text-center">$$$$</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Tei-An</td><td className="p-3">Soba + sushi, Arts District</td><td className="p-3 text-center">$$$</td></tr>
                                    <tr><td className="p-3 font-semibold">Yutaka</td><td className="p-3">Traditional, purist favorites</td><td className="p-3 text-center">$$$</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍣 Why North Dallas Loves Jinbeh</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[{ e: "👨‍👩‍👧‍👦", t: "Family-Friendly", d: "Kids love the hibachi show; parents love the sushi" }, { e: "💰", t: "Great Value", d: "Fresh quality without downtown prices" }, { e: "🎂", t: "Celebrations", d: "Hibachi + sushi = perfect for parties" }, { e: "⏱️", t: "Convenient", d: "Easy parking, quick from 121/DNT" }].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        Is the sushi at Jinbeh fresh?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Fresh and flavorful—that's our promise. We receive fish deliveries multiple times per week. Our sushi chefs slice each piece to order. You can watch them work at our sushi bar.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        What sushi do you recommend for beginners?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Welcome to the world of sushi! Start with our California Roll or Shrimp Tempura Roll—they're mild and delicious. Salmon rolls are also crowd-pleasers. Our servers are happy to guide you through the menu.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        What is omakase and do you offer it?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Omakase means 'I'll leave it to you'—the chef chooses your courses. It's a wonderful way to experience sushi. At Jinbeh, ask about our chef's selection for a curated tasting experience.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        Do you have vegetarian sushi options?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Yes! We offer several vegetarian rolls including cucumber roll, avocado roll, and vegetable tempura roll. Just let your server know about any dietary needs. We're happy to accommodate.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        Can I order sushi for takeout or delivery?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Absolutely! Our sushi travels well for takeout. Order online or call us directly. For the freshest experience, we recommend dining in at our sushi bar—it's worth the trip.</p>
                                    </div>
                                </details>
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-deep-indigo to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍣 Worth the Drive from Dallas</h3>
                                <p className="text-white/80 mb-6">Fresh sushi, entertaining hibachi, family-friendly vibes—all just north of Dallas.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco#reserve" className="bg-white text-deep-indigo px-6 py-3 rounded-xl font-semibold">Reserve Frisco</Link>
                                    <Link href="/lewisville#reserve" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Reserve Lewisville</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <RelatedArticles currentSlug="best-sushi-dallas" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
