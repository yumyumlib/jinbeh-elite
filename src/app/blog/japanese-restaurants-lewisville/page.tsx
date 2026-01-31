import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Japanese Restaurants Lewisville TX: Top Picks | Jinbeh",
    description: "Find the best Japanese restaurants in Lewisville TX! From hibachi to sushi, discover authentic dining. Jinbeh offers family-friendly hibachi and fresh sushi.",
    keywords: ["japanese restaurant lewisville", "sushi lewisville tx", "hibachi lewisville", "asian food lewisville"],
};

const faqs = [
    { question: "What's the best Japanese restaurant in Lewisville?", answer: "Welcome to the table! Jinbeh has served Lewisville since 1988. 4.7 stars on Google. Hibachi shows, fresh sushi, family-friendly. We treat every guest like family." },
    { question: "Do you have hibachi in Lewisville?", answer: "Yes! Our hibachi tables seat 8-10 guests. Full chef performance. Dinner and a show. Fire tricks, onion volcano, perfectly cooked proteins. Perfect for celebrations and groups." },
    { question: "Can you handle large groups?", answer: "Absolutely! We specialize in groups. Hibachi tables, flexible seating, customized menus. Call (214) 488-2224 to arrange your party. We love making celebrations special." },
    { question: "Do you have a sushi bar in Lewisville?", answer: "Yes! Fresh and flavorful—that's our promise. Our sushi chefs prepare custom rolls at our bar. You can watch them work. Ask your server for recommendations." },
    { question: "Where is Jinbeh Lewisville located?", answer: "We're at 2440 S. Stemmons Freeway, near Vista Ridge Mall. Easy I-35E access. Convenient parking right outside. Call (214) 488-2224 to confirm hours." },
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Restaurants Lewisville TX", datePublished: "2026-01-23", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
    }
];

export default function JapaneseRestaurantsLewisville() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image src="/images/blog/2-C060324-6341.jpg" alt="Jinbeh Japanese Restaurant Lewisville dining room" fill className="object-cover" priority />
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

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions About Japanese Dining in Lewisville</h2>
                            <div className="space-y-3">
                                {faqs.map((faq, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{faq.question}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{faq.answer}</div>
                                    </details>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎯 Other Dining Options in Lewisville</h2>
                            <p className="text-charcoal/80 mb-6">While Jinbeh is our top recommendation for Japanese dining, Lewisville has other options. However, for authentic <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-accent-red hover:underline">hibachi performances</Link>, fresh <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">sushi</Link>, and professional service combined, <Link href="/locations/lewisville" className="text-accent-red hover:underline">Jinbeh Lewisville</Link> stands out as the premier choice.</p>

                            <div className="mt-12 p-8 bg-gradient-to-r from-deep-indigo to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍱 Visit Jinbeh Lewisville</h3>
                                <p className="text-white/80 mb-2"><strong>Address:</strong> 250 E Round Grove Rd, Lewisville, TX 75067</p>
                                <p className="text-white/80 mb-6"><strong>Phone:</strong> (972) 315-3744</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/lewisville#reserve" className="bg-white text-deep-indigo px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">Make a Reservation</Link>
                                    <Link href="/lewisville/menu" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">View Menu</Link>
                                    <Link href="/private-dining" className="bg-white/20 border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition">Private Dining Info</Link>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t-2 border-warm-ivory">
                                <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">📍 Explore Both Jinbeh Locations</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Link href="/locations/lewisville" className="group p-6 rounded-2xl bg-warm-ivory hover:bg-soft-gold/20 transition-colors border-2 border-transparent hover:border-soft-gold">
                                        <h4 className="text-lg font-heading font-bold text-charcoal group-hover:text-accent-red mb-2">Lewisville Location</h4>
                                        <p className="text-charcoal/70 text-sm mb-4">Off I-35E near Vista Ridge Mall. Convenient for local community and group dining.</p>
                                        <span className="inline-block text-accent-red font-semibold">Visit us in Lewisville →</span>
                                    </Link>

                                    <Link href="/locations/frisco" className="group p-6 rounded-2xl bg-warm-ivory hover:bg-soft-gold/20 transition-colors border-2 border-transparent hover:border-soft-gold">
                                        <h4 className="text-lg font-heading font-bold text-charcoal group-hover:text-accent-red mb-2">Frisco Location</h4>
                                        <p className="text-charcoal/70 text-sm mb-4">Near Stonebriar Centre. Perfect for North Texas fine dining and celebrations.</p>
                                        <span className="inline-block text-accent-red font-semibold">Visit us in Frisco →</span>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="japanese-restaurants-lewisville" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
