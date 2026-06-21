import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
    title: "Japanese Cocktails: Art, Recipes & Mixology | Jinbeh Dallas",
    description: "Discover the art of Japanese cocktails with exquisite recipes, traditions, and techniques in Japanese mixology. Try authentic sake and whiskey cocktails at Jinbeh.",
    keywords: ["Japanese cocktails", "sake cocktails", "mixology", "shochu cocktails", "Japanese drinks", "Japanese whiskey cocktails", "signature cocktails Dallas"],
    openGraph: {
        title: "Japanese Cocktails: Art, Recipes & Mixology Guide",
        description: "Master the art of Japanese cocktails. Learn recipes, techniques, and traditions from expert mixologists.",
        images: ["/images/beverages/jinbeh-sakura-cocktail-sake-frisco.png"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/japanese-cocktails",
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Cocktails: Art, Recipes & Mixology", datePublished: "2026-01-30", dateModified: "2026-03-11", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" }, image: "https://jinbeh.com/images/beverages/jinbeh-sakura-cocktail-sake-frisco.png" },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is Japanese mixology?", acceptedAnswer: { "@type": "Answer", text: "Japanese mixology blends science and art, focusing on harmony of flavors, precise measurements, and aesthetic presentation. It emphasizes the overall experience of the consumer." } },
            { "@type": "Question", name: "What are key spirits in Japanese cocktails?", acceptedAnswer: { "@type": "Answer", text: "Key Japanese spirits include sake (rice wine), shochu (distilled spirit), and Japanese whisky. Each offers unique flavor profiles from subtle to bold." } },
            { "@type": "Question", name: "What is the hard shake technique?", acceptedAnswer: { "@type": "Answer", text: "The hard shake is a signature Japanese mixology technique popularized by Kazuo Uyeda, involving a three-step motion that creates a smoother texture and enhances flavors." } },
            { "@type": "Question", name: "Where can I try authentic Japanese cocktails in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Visit Jinbeh in Frisco and Lewisville for expertly crafted Japanese cocktails. Their mixologists use premium spirits and traditional Japanese techniques. Happy hour offers special pricing on sake cocktails and Japanese whisky pours." } },
            { "@type": "Question", name: "What makes Japanese cocktails different from Western cocktails?", acceptedAnswer: { "@type": "Answer", text: "Japanese cocktails emphasize delicate balance, intricate presentation, and quality ingredients. Each element from glassware to garnish is thoughtfully chosen to enhance the overall drinking experience." } },
            { "@type": "Question", name: "Can I make Japanese cocktails at home?", acceptedAnswer: { "@type": "Answer", text: "Yes. With premium sake, shochu, and Japanese whisky, you can create authentic cocktails at home. Focus on precision measurements, balance of flavors, and elegant presentation." } }
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
        { "@type": "ListItem", "position": 4, "name": "Japanese Cocktails: Classic & Creative Recipes" },
    ],
};

export default function JapaneseCocktails() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Japanese Cocktails" }]} />
        </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/beverages/jinbeh-sakura-cocktail-sake-frisco.png" alt="Japanese Cocktails at Jinbeh Japanese restaurant" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/bar">Menu</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-deep-indigo mb-4">🍹 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Japanese Cocktails: Art, Recipes & Mixology</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>What makes Japanese cocktails special?</strong> They blend delicate balance, intricate presentation, and premium native Japanese spirits into an art form that elevates the entire drinking experience. Whether you're exploring <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake pairing</Link> options or enjoying <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">drink deals</Link> at happy hour, Japanese cocktails offer something special.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍶 The Foundation of Japanese Cocktails</h2>

                            <DidYouKnow
                                fact="Japanese cocktail bars consistently dominate the World's 50 Best Bars list, with Tokyo's Bar High Five and Bar Benfiddich ranking among the top 10 globally. The 'hard shake' technique, invented by Kazuo Uyeda in the 1990s, revolutionized cocktail making worldwide. Japanese whisky outsells Scotch in premium categories in over 15 countries."
                                source="World's 50 Best Bars & Drinks International"
                            />
                            <p className="text-charcoal/80 mb-6">Japanese cocktails are deeply rooted in tradition and culture, emphasizing precision, quality ingredients, and the art of presentation. To truly appreciate Japanese cocktails, it's essential to understand the foundational spirits used in these drinks. Learn how to match beverages with your meal through our <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake recommendations</Link> and dining guides.</p>

                            <div className="bg-warm-ivory rounded-xl p-6 mb-8 border-l-4 border-deep-indigo">
                                <h3 className="font-bold text-charcoal mb-4">Key Japanese Spirits</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-charcoal">🍶 Sake</h4>
                                        <p className="text-charcoal/80 text-sm">A traditional Japanese rice wine serving as a versatile base for many cocktails. Its subtle flavors range from sweet to dry, making it an excellent foundation for both simple and complex drinks.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal">🥃 Shochu</h4>
                                        <p className="text-charcoal/80 text-sm">A distilled spirit made from barley, sweet potatoes, or rice with higher alcohol content than sake. It offers a wide range of flavors, from earthy to fruity.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-charcoal">🥃 Japanese Whisky</h4>
                                        <p className="text-charcoal/80 text-sm">Known for impeccable quality and international acclaim, Japanese whisky adds depth to cocktails and pairs well with a variety of mixers.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎨 The Philosophy of Japanese Mixology</h2>
                            <p className="text-charcoal/80 mb-6">Japanese mixology is often described as a blend of science and art. Mixologists in Japan focus on the harmony of flavors, the aesthetics of the drink, and the overall experience of the consumer. This philosophy is evident in every step of the cocktail-making process, from ingredient selection to the final presentation. At Jinbeh, our <Link href="/bar" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">bar program</Link> embraces these principles with every pour.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🥄 Signature Techniques</h2>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-deep-indigo/10 rounded-xl p-6 border-2 border-deep-indigo/30">
                                    <h3 className="font-bold text-charcoal mb-3">The Hard Shake</h3>
                                    <p className="text-charcoal/80 text-sm">A signature technique popularized by legendary bartender Kazuo Uyeda. This three-step shaking motion creates a smoother texture and enhances the cocktail's flavors.</p>
                                </div>
                                <div className="bg-deep-indigo/10 rounded-xl p-6 border-2 border-deep-indigo/30">
                                    <h3 className="font-bold text-charcoal mb-3">Precision & Presentation</h3>
                                    <p className="text-charcoal/80 text-sm">Exact measurements and meticulously placed garnishes ensure each drink is a work of art. Presentation is as important as taste, with elegant glassware and delicate garnishes.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍹 Popular Japanese Cocktail Recipes</h2>

                            <div className="space-y-8 my-8">
                                <div className="border-l-4 border-accent-red pl-6">
                                    <h3 className="text-xl font-bold text-charcoal mb-3">Sake Martini</h3>
                                    <p className="text-charcoal/80 text-sm mb-4">A refined twist on the classic martini, blending the delicate flavors of sake with the crispness of gin.</p>
                                    <div className="bg-warm-ivory rounded-lg p-4">
                                        <p className="font-semibold text-charcoal mb-2">Ingredients:</p>
                                        <ul className="text-charcoal/80 text-sm space-y-1 mb-4">
                                            <li>• 2 oz sake</li>
                                            <li>• 1 oz gin</li>
                                            <li>• Cucumber slice for garnish</li>
                                        </ul>
                                        <p className="font-semibold text-charcoal mb-2">Instructions:</p>
                                        <ol className="text-charcoal/80 text-sm space-y-1">
                                            <li>1. Combine sake and gin with ice in a mixing glass</li>
                                            <li>2. Stir gently and strain into a chilled martini glass</li>
                                            <li>3. Garnish with a cucumber slice</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="border-l-4 border-accent-red pl-6">
                                    <h3 className="text-xl font-bold text-charcoal mb-3">Yuzu Sour</h3>
                                    <p className="text-charcoal/80 text-sm mb-4">A refreshing and citrusy cocktail that highlights the unique flavor of yuzu, a prized Japanese citrus fruit.</p>
                                    <div className="bg-warm-ivory rounded-lg p-4">
                                        <p className="font-semibold text-charcoal mb-2">Ingredients:</p>
                                        <ul className="text-charcoal/80 text-sm space-y-1 mb-4">
                                            <li>• 2 oz Japanese whisky</li>
                                            <li>• 1 oz fresh yuzu juice</li>
                                            <li>• ½ oz simple syrup</li>
                                            <li>• Ice and yuzu wheel garnish</li>
                                        </ul>
                                        <p className="font-semibold text-charcoal mb-2">Instructions:</p>
                                        <ol className="text-charcoal/80 text-sm space-y-1">
                                            <li>1. Shake whisky, yuzu juice, and simple syrup with ice</li>
                                            <li>2. Strain into a glass filled with fresh ice</li>
                                            <li>3. Garnish with a yuzu wheel</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="border-l-4 border-accent-red pl-6">
                                    <h3 className="text-xl font-bold text-charcoal mb-3">Sake Sangria</h3>
                                    <p className="text-charcoal/80 text-sm mb-4">A lighter, more refreshing take on the traditional Spanish drink, perfect for gatherings and celebrations.</p>
                                    <div className="bg-warm-ivory rounded-lg p-4">
                                        <p className="font-semibold text-charcoal mb-2">Ingredients:</p>
                                        <ul className="text-charcoal/80 text-sm space-y-1 mb-4">
                                            <li>• 1 bottle of sake</li>
                                            <li>• Seasonal fruits (peaches, plums, citrus)</li>
                                            <li>• Sparkling water</li>
                                            <li>• Fresh mint for garnish</li>
                                        </ul>
                                        <p className="font-semibold text-charcoal mb-2">Instructions:</p>
                                        <ol className="text-charcoal/80 text-sm space-y-1">
                                            <li>1. Combine sake with sliced fresh fruits in a pitcher</li>
                                            <li>2. Chill for at least 2 hours</li>
                                            <li>3. Add sparkling water before serving</li>
                                            <li>4. Garnish with fresh mint and serve over ice</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍶 Japanese Spirits Comparison</h2>
                            <p className="text-charcoal/80 mb-4">Understanding the base spirits will help you choose the perfect cocktail:</p>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Spirit</th><th className="p-3 text-left">ABV</th><th className="p-3 text-left">Flavor Profile</th><th className="p-3 text-left">Best In</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">🍶 Sake</td><td className="p-3">15–20%</td><td className="p-3">Floral, fruity, umami</td><td className="p-3">Sake martini, sangria</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">🌾 Shochu</td><td className="p-3">25–35%</td><td className="p-3">Earthy, clean, versatile</td><td className="p-3">Highballs, chūhai</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">🥃 Japanese Whisky</td><td className="p-3">40–45%</td><td className="p-3">Smooth, oaky, complex</td><td className="p-3">Highball, old fashioned</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">🌿 Umeshu</td><td className="p-3">10–15%</td><td className="p-3">Sweet, tart, plum</td><td className="p-3">On the rocks, soda</td></tr>
                                    <tr><td className="p-3 font-semibold">🍊 Yuzu Liqueur</td><td className="p-3">15–20%</td><td className="p-3">Bright, citrusy, aromatic</td><td className="p-3">Yuzu sour, spritz</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍣 Cocktail-Food Pairing Guide</h2>
                            <p className="text-charcoal/80 mb-4">What to drink with your Japanese meal for the best experience:</p>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Dish</th><th className="p-3 text-left">Recommended Cocktail</th><th className="p-3 text-left">Why It Works</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">Sushi &amp; Sashimi</td><td className="p-3">Sake Martini</td><td className="p-3">Clean flavors complement raw fish</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Hibachi Steak</td><td className="p-3">Japanese Whisky Highball</td><td className="p-3">Smoky notes match grilled meat</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Tempura</td><td className="p-3">Yuzu Sour</td><td className="p-3">Citrus cuts through fried richness</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Ramen / Udon</td><td className="p-3">Shochu Highball</td><td className="p-3">Light, crisp, refreshing contrast</td></tr>
                                    <tr><td className="p-3 font-semibold">Desserts</td><td className="p-3">Umeshu on the Rocks</td><td className="p-3">Sweet plum complements sweets</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        What is Japanese mixology?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Japanese mixology blends science and art, focusing on harmony of flavors, precise measurements, and aesthetic presentation. It emphasizes the overall experience of the consumer.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        What are key spirits in Japanese cocktails?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Key Japanese spirits include sake (rice wine), shochu (distilled spirit), and Japanese whisky. Each offers unique flavor profiles from subtle to bold.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        What is the hard shake technique?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>The hard shake is a signature Japanese mixology technique popularized by Kazuo Uyeda, involving a three-step motion that creates a smoother texture and enhances flavors.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        Where can I try authentic Japanese cocktails in Dallas?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Visit Jinbeh in both <Link href="/frisco" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Frisco</Link> and <Link href="/lewisville" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Lewisville</Link> for expertly crafted Japanese cocktails. Our mixologists are trained in traditional Japanese techniques and use premium spirits. Call us at Frisco (214) 619-1200 or Lewisville (214) 488-2224. Check our <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">happy hour specials</Link> for special pricing!</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        What makes Japanese cocktails different from Western cocktails?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Japanese cocktails emphasize delicate balance, intricate presentation, and quality ingredients. Each element, from glassware to garnish, is thoughtfully chosen to enhance the overall drinking experience.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        Can I make Japanese cocktails at home?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Absolutely! With premium sake, shochu, and Japanese whisky, you can create authentic cocktails at home. Focus on precision measurements, balance of flavors, and elegant presentation.</p>
                                    </div>
                                </details>
                            </div>

                            <div className="mt-12">
                                <ProTip variant="insider">
                                    <strong>Japanese cocktail insider tip:</strong> At Jinbeh, our lychee martini is legendary, it's the most-ordered cocktail on our menu. Start your evening at the <Link href="/bar" className="text-accent-red hover:underline">bar</Link> during <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour</Link> for special pricing on sake cocktails and Japanese whisky pours. Ask your bartender to recommend a sake-based cocktail paired with your dinner order, they're trained to match flavors!
                                </ProTip>

                                <PillarCTA type="catering" />
                                <LocationCTA location="both" />
                            </div>
                        </article>

                        <aside>
                            <RelatedArticles currentSlug="japanese-cocktails" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
