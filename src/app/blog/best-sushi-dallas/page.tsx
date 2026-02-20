import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA } from "@/components/ArticleEnhancements";

export const metadata: Metadata = {
    title: "Best Sushi Dallas TX: Top Restaurants & Hidden Gems | Jinbeh",
    description: "Find the best sushi in Dallas TX! From authentic omakase to creative rolls. Discover top spots including Jinbeh's fresh sushi near Frisco and Lewisville.",
    keywords: ["best sushi dallas", "sushi dallas tx", "japanese restaurant dallas", "sushi near me dallas"],
    openGraph: {
        title: "Best Sushi Dallas TX: Top Restaurants & Hidden Gems",
        description: "Discover the best sushi restaurants in Dallas TX with our comprehensive guide to fresh rolls, omakase experiences, and hidden gems across DFW.",
        url: "https://jinbeh.com/blog/best-sushi-dallas",
        type: "article",
        images: ["/images/catalog/FB-LEW-Sashimi-Platter-Salmon-Tuna-Yellowtail.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/best-sushi-dallas",
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Best Sushi Dallas TX", datePublished: "2026-01-22", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is the best sushi in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Top-rated spots include Jinbeh (Frisco/Lewisville), Uchi, Nobu, and Tei-An. For value plus quality, Jinbeh offers fresh sushi with 37+ years of tradition." } }
        ]
    }
];


const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Of", "item": "https://jinbeh.com/blog/category/best-of" },
        { "@type": "ListItem", "position": 4, "name": "Best Sushi Dallas TX: Top Restaurants & Hidden Gems" },
    ],
};

export default function BestSushiDallas() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/photoshoot/sushi-tower.jpg" alt="Impressive sushi tower featuring specialty rolls" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog/category/local-guides">Locations</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-deep-indigo mb-4">📍 Locations</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Best Sushi Dallas TX</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Dallas has incredible sushi.</strong> From upscale omakase experiences downtown to family-friendly spots in the suburbs, here's where to find the freshest fish in DFW. Not sure which roll to try? Start with our guide to <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">types of sushi</Link>.</p>

                            <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"We've been serving fresh sushi in DFW since 1988. While we're in Frisco and Lewisville, our regulars drive from all over Dallas for the quality and value."</p>
                                <span className="text-sm text-charcoal/80">— The Jinbeh Family</span>
                            </div>

                            <DidYouKnow
                                fact="The DFW metroplex has over 400 Japanese restaurants, but Jinbeh is one of only a handful that has been family-owned and operating continuously since 1988 — nearly four decades of serving fresh sushi and hibachi. Reviewers consistently note that the quality rivals downtown Dallas spots at a fraction of the price."
                                source="Google Maps & DFW Dining Data"
                            />

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

                            <ProTip variant="insider">
                                <strong>Dallas locals' tip:</strong> Regulars say the drive from Dallas to Jinbeh is "absolutely worth it" for the freshness and value. The Volcano Roll and Dallas Roll are crowd favorites, and reviewers love that you can pair sushi with a hibachi show — something most Dallas sushi spots can't offer. Come during happy hour (Mon-Fri 4:30-6:30 PM) for the best deals. <Link href="/reservations" className="text-accent-red hover:underline">Reserve your table →</Link>
                            </ProTip>

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
                                        <p>Omakase means 'I'll leave it to you'—the chef chooses your courses. It's a wonderful way to experience sushi. At Jinbeh, ask about our chef's selection for a curated tasting experience. Learn more in our <Link href="/blog/omakase-dining-guide" className="text-accent-red hover:underline">omakase dining guide</Link>.</p>
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

                            <LocationCTA location="both" />
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
