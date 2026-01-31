import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Japanese Cocktails: Art, Recipes & Mixology | Jinbeh Dallas",
    description: "Discover the art of Japanese cocktails with exquisite recipes, traditions, and techniques in Japanese mixology. Try authentic sake and whiskey cocktails at Jinbeh.",
    keywords: ["Japanese cocktails", "sake cocktails", "mixology", "shochu cocktails", "Japanese drinks", "Japanese whiskey cocktails", "signature cocktails Dallas"],
    openGraph: {
        title: "Japanese Cocktails: Art, Recipes & Mixology Guide",
        description: "Master the art of Japanese cocktails. Learn recipes, techniques, and traditions from expert mixologists.",
        images: ["/images/drinks/SpicyMargaritaBeverageDrink.jpg"],
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Cocktails: Art, Recipes & Mixology", datePublished: "2026-01-30", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What is Japanese mixology?", acceptedAnswer: { "@type": "Answer", text: "Japanese mixology blends science and art, focusing on harmony of flavors, precise measurements, and aesthetic presentation. It emphasizes the overall experience of the consumer." } },
            { "@type": "Question", name: "What are key spirits in Japanese cocktails?", acceptedAnswer: { "@type": "Answer", text: "Key Japanese spirits include sake (rice wine), shochu (distilled spirit), and Japanese whisky. Each offers unique flavor profiles from subtle to bold." } },
            { "@type": "Question", name: "What is the hard shake technique?", acceptedAnswer: { "@type": "Answer", text: "The hard shake is a signature Japanese mixology technique popularized by Kazuo Uyeda, involving a three-step motion that creates a smoother texture and enhances flavors." } }
        ]
    }
];

export default function JapaneseCocktails() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/drinks/JinbehPunchBeverageDrink.jpg" alt="Japanese cocktails with artistic presentation" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=beverages">Beverages</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-purple-600 mb-4">🍹 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Japanese Cocktails: Art, Recipes & Mixology</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>What makes Japanese cocktails special?</strong> They blend delicate balance, intricate presentation, and premium native Japanese spirits into an art form that elevates the entire drinking experience. Whether you're exploring <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake pairing</Link> options or enjoying <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">drink deals</Link> at happy hour, Japanese cocktails offer something special.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍶 The Foundation of Japanese Cocktails</h2>
                            <p className="text-charcoal/80 mb-6">Japanese cocktails are deeply rooted in tradition and culture, emphasizing precision, quality ingredients, and the art of presentation. To truly appreciate Japanese cocktails, it's essential to understand the foundational spirits used in these drinks. Learn how to match beverages with your meal through our <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake recommendations</Link> and dining guides.</p>

                            <div className="bg-warm-ivory rounded-xl p-6 mb-8 border-l-4 border-purple-600">
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
                            <p className="text-charcoal/80 mb-6">Japanese mixology is often described as a blend of science and art. Mixologists in Japan focus on the harmony of flavors, the aesthetics of the drink, and the overall experience of the consumer. This philosophy is evident in every step of the cocktail-making process, from ingredient selection to the final presentation.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🥄 Signature Techniques</h2>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                                    <h3 className="font-bold text-charcoal mb-3">The Hard Shake</h3>
                                    <p className="text-charcoal/80 text-sm">A signature technique popularized by legendary bartender Kazuo Uyeda. This three-step shaking motion creates a smoother texture and enhances the cocktail's flavors.</p>
                                </div>
                                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
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
                                        <p>Visit Jinbeh in both <Link href="/locations/frisco" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Frisco</Link> and <Link href="/locations/lewisville" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Lewisville</Link> for expertly crafted Japanese cocktails. Our mixologists are trained in traditional Japanese techniques and use premium spirits. Call us at Frisco (214) 619-1200 or Lewisville (214) 488-2224. Check our <Link href="/blog/best-happy-hour-frisco-tx" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">happy hour specials</Link> for special pricing!</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        What makes Japanese cocktails different from Western cocktails?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Japanese cocktails emphasize delicate balance, intricate presentation, and quality ingredients. Each element—from glassware to garnish—is thoughtfully chosen to enhance the overall drinking experience.</p>
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

                            <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍹 Experience Japanese Cocktails at Jinbeh</h3>
                                <p className="mb-6 text-white/90">Discover the art and flavor of authentic Japanese cocktails crafted by our skilled mixologists using premium spirits and traditional techniques. Whether you're at our Frisco or Lewisville location, experience cocktails prepared with the precision and care of a gracious host.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco/menu" className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">Frisco Menu</Link>
                                    <Link href="/lewisville" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">Lewisville Location</Link>
                                    <Link href="/happy-hour" className="bg-accent-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-red/90 transition">Happy Hour Specials</Link>
                                    <Link href="#reserve" className="bg-soft-gold text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-soft-gold/90 transition">Make Reservation</Link>
                                </div>
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
