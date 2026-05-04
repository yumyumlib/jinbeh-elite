import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
    title: "Popular Japanese Beverages: Iconic Drinks Guide | Jinbeh",
    description: "Discover Japan's most popular beverages from matcha tea and sake to Ramune soda and canned coffee. Explore iconic drinks reflecting tradition and innovation.",
    keywords: ["japanese beverages", "sake", "matcha", "ramune", "canned coffee", "japanese drinks", "shochu", "Japanese tea", "Japanese spirits"],
    openGraph: {
        title: "Popular Japanese Beverages: Complete Drinks Guide",
        description: "Explore iconic Japanese beverages and their cultural significance. From traditional sake to modern Ramune.",
        images: ["/images/beverages/LewisvilleBar.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/japanese-beverages-guide",
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Popular Japanese Beverages: Iconic Drinks Guide", datePublished: "2026-01-24", dateModified: "2026-03-11", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" }, image: "https://jinbeh.com/images/beverages/LewisvilleBar.jpg" },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What are the most popular Japanese beverages?", acceptedAnswer: { "@type": "Answer", text: "Japan's most beloved beverages include matcha tea, sake, shochu, ramune soda, calpis, pocari sweat, canned coffee, and various bottled teas. Each reflects Japan's dedication to quality, tradition, and innovation." } },
            { "@type": "Question", name: "What is matcha and how is it different from regular green tea?", acceptedAnswer: { "@type": "Answer", text: "Matcha is finely ground green tea powder used in traditional tea ceremonies for centuries. Unlike steeped tea, you consume the whole leaf, providing more nutrients and a rich, umami flavor." } },
            { "@type": "Question", name: "Where can I find authentic Japanese beverages?", acceptedAnswer: { "@type": "Answer", text: "Asian markets, specialty tea shops, and regular grocers carry Japanese beverages. Jinbeh Japanese Restaurant offers traditional drinks like sake, matcha, and Japanese whisky at their Frisco and Lewisville locations." } },
            { "@type": "Question", name: "Is sake an everyday drink in Japan?", acceptedAnswer: { "@type": "Answer", text: "Sake is traditionally served for celebrations, but in modern Japan it is enjoyed casually like wine. Jinbeh pairs premium sake with Japanese cuisine." } },
            { "@type": "Question", name: "What are the health benefits of matcha?", acceptedAnswer: { "@type": "Answer", text: "Matcha is rich in antioxidants, provides sustained energy without caffeine jitters, supports metabolism, and contains L-theanine promoting calm focus." } },
            { "@type": "Question", name: "Does Jinbeh serve traditional Japanese beverages?", acceptedAnswer: { "@type": "Answer", text: "Yes. Jinbeh offers premium sake, matcha, Japanese whisky, and authentic Japanese cocktails at both Frisco and Lewisville locations. Visit during happy hour for special pricing." } }
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
        { "@type": "ListItem", "position": 4, "name": "Japanese Drinks: Sake, Beer, and Beyond" },
    ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Popular Japanese Beverages: Iconic Drinks Guide",
  "description": "Discover Japan's most popular beverages from matcha tea and sake to Ramune soda and canned coffee. Explore iconic drinks reflecting tradition and innovation.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Traditional Tea & Spirits"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Japanese Alcoholic vs Non-Alcoholic Beverages"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Beloved Bottled & Canned Drinks"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Convenience Store Favorites"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Why Japanese Beverages Stand Out"
    }
  ]
};

export default function JapaneseBeveragesGuide() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Japanese Beverages Guide" }]} />
        </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/beverages/LewisvilleBar.jpg" alt="Japanese Beverages" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/menu">Menu</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-charcoal bg-soft-gold mb-4">🍵 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Popular Japanese Beverages</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8">
        Most Americans know green tea and sake. That's about 10% of what Japan actually drinks. From the marble-sealed Ramune bottle your kids will obsess over to the unfiltered sake that looks like milk, Japanese beverages are an adventure you haven't taken yet.
      </p>

                            <div className="bg-gradient-to-br from-soft-gold/10 to-deep-indigo/10 border-l-4 border-soft-gold rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"Japanese beverages reflect our commitment to detail and dedication to quality. Whether it's a carefully whisked matcha or a refreshing Ramune, each drink is crafted with intention and care."</p>
                                <span className="text-sm text-charcoal/80">— Jinbeh Beverage Philosophy</span>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍵 Traditional Tea & Spirits</h2>

                            <DidYouKnow
                                fact="Japan has over 5.5 million vending machines—the highest density in the world—serving everything from hot matcha and canned coffee to fresh sake. The Japanese beverage market is worth billion annually, with tea accounting for nearly 40% of all packaged drink sales. The country's 1,400+ sake breweries produce over 10,000 distinct varieties."
                                source="Japan Vending Machine Manufacturers Association"
                            />
                            <p className="text-charcoal/80 mb-4">Japan's tea culture is deeply rooted in history, with beverages that have been perfected over centuries. These drinks offer refreshment, wellness benefits, and cultural significance.</p>

                            <div className="space-y-4 my-6">
                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-soft-gold">
                                    <h3 className="font-bold text-charcoal mb-2">🌸 Matcha: The Green Elixir</h3>
                                    <p className="text-charcoal/80">Matcha is more than a drink—it's a cultural experience. This finely ground green tea powder has been used in traditional tea ceremonies for centuries. The preparation is meditative, focusing on harmony and respect. Rich in antioxidants and umami flavor, matcha offers both health benefits and spiritual connection.</p>
                                </div>

                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-accent-red">
                                    <h3 className="font-bold text-charcoal mb-2">🍶 Sake: Japan's Iconic Rice Wine</h3>
                                    <p className="text-charcoal/80">Sake, or "nihonshu," is a traditional rice wine with over 1000 years of history. Brewed using rice, water, yeast, and koji mold, sake varies in flavor and alcohol content. Enjoyed during celebrations and served warm or chilled, sake tasting is an art form like wine appreciation. Learn more about <Link href="/blog/sake-taste-profile" className="text-accent-red hover:underline">sake's complex flavor profile</Link> and discover how to match it with food in our <Link href="/blog/sake-pairing-guide" className="text-accent-red hover:underline">sake pairing guide</Link>. Explore the full selection at Jinbeh's <Link href="/bar" className="text-accent-red hover:underline">bar</Link>, or sample sake at special prices during <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour</Link>.</p>
                                </div>

                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-deep-indigo">
                                    <h3 className="font-bold text-charcoal mb-2">💫 Shochu: The Versatile Spirit</h3>
                                    <p className="text-charcoal/80">Shochu offers a unique alternative to sake with versatility for any occasion. Made from barley, sweet potatoes, or rice, this distilled spirit can be enjoyed straight, on the rocks, or mixed. Its popularity both domestically and internationally reflects its ability to suit different palates and settings.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍶 Japanese Alcoholic vs Non-Alcoholic Beverages</h2>
                            <p className="text-charcoal/80 mb-4">Japan excels at both categories. Here&apos;s a quick comparison:</p>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Beverage</th><th className="p-3 text-left">Type</th><th className="p-3 text-left">ABV</th><th className="p-3 text-left">Best Occasion</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">🍶 Sake</td><td className="p-3">Alcoholic</td><td className="p-3">15–20%</td><td className="p-3">Dinner pairing, celebrations</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">🥃 Shochu</td><td className="p-3">Alcoholic</td><td className="p-3">25–35%</td><td className="p-3">Casual drinking, highballs</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">🥃 Japanese Whisky</td><td className="p-3">Alcoholic</td><td className="p-3">40–45%</td><td className="p-3">After dinner, neat or highball</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">🍵 Matcha</td><td className="p-3">Non-alcoholic</td><td className="p-3">0%</td><td className="p-3">Morning energy, tea ceremony</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">🌹 Ramune</td><td className="p-3">Non-alcoholic</td><td className="p-3">0%</td><td className="p-3">Summer refreshment, nostalgia</td></tr>
                                    <tr><td className="p-3 font-semibold">☕ Canned Coffee</td><td className="p-3">Non-alcoholic</td><td className="p-3">0%</td><td className="p-3">On-the-go, convenience</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🥤 Beloved Bottled & Canned Drinks</h2>
                            <p className="text-charcoal/80 mb-4">Japan's convenience drink culture showcases innovation and accessibility, bringing quality beverages to everyday life through convenient formats.</p>

                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Drink</th><th className="p-3 text-left">Type</th><th className="p-3 text-left">Experience</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">🍹 <Link href="/blog/ramune-soda-guide" className="text-accent-red hover:underline">Ramune</Link></td><td className="p-3">Carbonated Soda</td><td className="p-3">Playful glass marble bottle, nostalgic summer treat</td></tr>
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

                            <div className="mt-12">
                                <ProTip variant="chef">
                                    <strong>Beverage pairing pro tip:</strong> At Jinbeh, ask your server for a sake recommendation to pair with your meal. Dry sake pairs beautifully with sushi and sashimi, while fruity varieties complement hibachi steak. During <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour</Link>, try our sake sampler to explore different styles at special prices. Don't miss our Japanese whisky selection and signature <Link href="/blog/japanese-cocktails" className="text-accent-red hover:underline">cocktails</Link> like the lychee martini!
                                </ProTip>

                                <PillarCTA type="reservations" />
                                <LocationCTA location="both" />
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
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0"><Image src={r.i} alt={`Related: ${r.t}`} fill className="object-cover" loading="lazy" /></div>
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
