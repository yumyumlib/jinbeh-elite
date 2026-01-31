import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Asian Food in Dallas TX: Top Restaurants Guide | Jinbeh",
    description: "Discover top Asian food in Dallas, from fusion at Uchi to authentic dishes at Royal China. Explore vibrant Asian restaurants downtown and more.",
    keywords: ["best asian food dallas", "asian restaurants dallas", "japanese restaurant dallas", "asian cuisine dallas tx"],
};

const faqs = [
    { question: "What's the best Asian food in Dallas?", answer: "Welcome to the table! Uchi Dallas has modern Japanese fusion. Royal China serves authentic Chinese. Jinbeh brings hibachi and sushi together." },
    { question: "Where can I find authentic Asian cuisine in Dallas?", answer: "Royal China has traditional Chinese dishes. Tei-An specializes in soba noodles. Musume features modern Asian cuisine. Jinbeh combines authentic Japanese techniques with fresh ingredients." },
    { question: "Is there good Asian food outside downtown?", answer: "Absolutely! Jinbeh has locations in Frisco and Lewisville. Both offer excellent hibachi and sushi. Call (214) 619-1200 for Frisco or (214) 488-2224 for Lewisville." },
    { question: "Is Jinbeh good for special occasions?", answer: "It's a celebration! We love hosting birthdays, anniversaries, and gatherings. Our hibachi chefs make every meal entertaining and memorable for your group." },
    { question: "What makes hibachi dining special?", answer: "Dinner and a show! Our chefs cook right before your eyes. Fire tricks, the onion volcano, and fresh-cooked meals make it unforgettable." }
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Best Asian Food in Dallas TX", datePublished: "2026-01-30", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What's the best Asian food in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Dallas offers incredible Asian dining options. Top picks include Uchi for Japanese fusion, Royal China for authentic Chinese, and Jinbeh for traditional Japanese with hibachi and sushi." } },
            { "@type": "Question", name: "Where can I find authentic Asian cuisine in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Royal China (Chinese), Tei-An (soba/Japanese), and Musume (modern Asian) offer authentic experiences. Jinbeh combines traditional Japanese techniques with quality ingredients." } }
        ]
    }
];

export default function BestAsianFoodDallas() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/8-C060324-6462.jpg" alt="Asian Food Dallas" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=dining">Dining</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-deep-indigo mb-4">🍜 Dining Guide</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Best Asian Food in Dallas TX</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Dallas is a city known for its diverse culinary scene,</strong> and Asian cuisine is no exception. With a variety of Asian restaurants offering everything from traditional dishes to modern fusion, there's something to satisfy every palate.</p>

                            <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"From authentic Japanese hibachi to regional Asian specialties, Dallas's food scene celebrates the rich traditions of Asia while embracing innovative culinary creativity."</p>
                                <span className="text-sm text-charcoal/60">— Food Culture Dallas</span>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍣 Asian Fusion Restaurants</h2>
                            <p className="text-charcoal/80 mb-4">Asian fusion has become increasingly popular in Dallas, combining traditional Asian flavors with modern techniques and ingredients. This innovative approach creates unique and exciting dishes that attract food enthusiasts from all over the city.</p>

                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Restaurant</th><th className="p-3 text-left">Best For</th><th className="p-3">Experience</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">⭐ Jinbeh Japanese</td><td className="p-3">Hibachi + sushi</td><td className="p-3 text-center">Interactive</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Uchi Dallas</td><td className="p-3">Modern Japanese fusion</td><td className="p-3 text-center">Upscale</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Five Sixty</td><td className="p-3">Asian fusion with views</td><td className="p-3 text-center">Fine dining</td></tr>
                                    <tr><td className="p-3 font-semibold">Khao Noodle Shop</td><td className="p-3">Laotian street food</td><td className="p-3 text-center">Casual</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏯 Traditional Asian Dining</h2>
                            <p className="text-charcoal/80 mb-6">For those who prefer authentic flavors and time-honored techniques, Dallas has plenty of options that deliver genuine Asian culinary experiences. These restaurants honor traditional preparation methods while maintaining contemporary service standards.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3">Jinbeh Japanese Restaurant</h3>
                            <p className="text-charcoal/80 mb-4">Jinbeh is a staple in the Dallas Asian dining scene, offering a variety of Japanese dishes including sushi, hibachi, and more. Their hibachi grill is a highlight, providing not only delicious food but also an entertaining dining experience. Perfect for both casual lunches and celebratory dinners.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3 mt-6">Royal China</h3>
                            <p className="text-charcoal/80 mb-4">A family-owned restaurant serving authentic Chinese cuisine since 1974. Known for its handmade noodles and dumplings made fresh daily, Royal China features a wide range of traditional Chinese dishes.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3 mt-6">Tei-An</h3>
                            <p className="text-charcoal/80 mb-6">Located in One Arts Plaza, this Japanese soba house is known for its handmade soba noodles and menu that highlights the flavors of Japan with an emphasis on quality and craftsmanship. The rooftop bar offers stunning views of downtown Dallas.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🌃 Downtown Dallas Asian Restaurants</h2>
                            <p className="text-charcoal/80 mb-6">Downtown Dallas is home to several fantastic Asian restaurants, offering a variety of cuisines and dining experiences in a vibrant urban setting.</p>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[
                                    { e: "🍱", t: "Uchi Dallas", d: "Modern Japanese fusion in the Arts District" },
                                    { e: "🍜", t: "Tei-An", d: "Handmade soba noodles with rooftop views" },
                                    { e: "🍶", t: "Musume", d: "Contemporary Asian with extensive sake list" },
                                    { e: "🥢", t: "Monkey King", d: "Hand-pulled noodles & street-style Chinese" }
                                ].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold text-charcoal">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">✨ Why Jinbeh Stands Out</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[
                                    { e: "👨‍🍳", t: "Expert Technique", d: "Traditional Japanese methods with premium ingredients" },
                                    { e: "🎭", t: "Entertainment", d: "Hibachi show adds excitement to your meal" },
                                    { e: "👨‍👩‍👧‍👦", t: "Family-Friendly", d: "Perfect for celebrations and group dinners" },
                                    { e: "💰", t: "Value & Quality", d: "Fresh Japanese dining at reasonable prices" }
                                ].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold text-charcoal">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQ</h2>
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-warm-ivory rounded-xl mb-3">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">{faq.question}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">{faq.answer}</div>
                                </details>
                            ))}

                            <div className="mt-12 p-8 bg-gradient-to-r from-deep-indigo to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍜 Experience Asian Excellence at Jinbeh</h3>
                                <p className="text-white/80 mb-6">Traditional Japanese cuisine, interactive hibachi cooking, and fresh sushi in a welcoming atmosphere perfect for families and celebrations.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco#reserve" className="bg-white text-deep-indigo px-6 py-3 rounded-xl font-semibold">Reserve Frisco</Link>
                                    <Link href="/lewisville#reserve" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Reserve Lewisville</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <RelatedArticles currentSlug="best-asian-food-dallas" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
