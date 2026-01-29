import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Group Dining Venues DFW: Best for Large Parties | Jinbeh",
    description: "Find the best group dining venues in DFW! Hibachi is perfect for corporate events, family gatherings, and team dinners. Reserve Jinbeh's private space.",
    keywords: ["group dining dfw", "large group restaurants", "private dining frisco", "corporate dining lewisville"],
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Group Dining Venues DFW", datePublished: "2026-01-26", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "Best restaurant for large groups in DFW?", acceptedAnswer: { "@type": "Answer", text: "Hibachi restaurants like Jinbeh are ideal—shared tables seat 8-10, entertainment keeps everyone engaged, and the format works for all ages." } }
        ]
    }
];

export default function GroupDiningVenues() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/5-C060324-6397.jpg" alt="Group dining" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=celebrations">Celebrations</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-accent-red mb-4">🎉 Celebrations</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Group Dining Venues DFW</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Planning dinner for a big group?</strong> The challenge is finding a place that works for everyone—kids, adults, picky eaters, and adventurous foodies. Here's why hibachi is the perfect solution.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎯 Why Hibachi Works for Groups</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[{ e: "🔥", t: "Built-in Entertainment", d: "No awkward silence—the chef provides the show" }, { e: "🍽️", t: "Shared Experience", d: "Everyone eats together, family-style" }, { e: "👶", t: "All Ages Welcome", d: "Kids love it, adults enjoy it" }, { e: "📋", t: "Easy Ordering", d: "Set menu format simplifies decision-making" }].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">📊 Best for Which Groups?</h2>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Event Type</th><th className="p-3 text-left">Why Hibachi Works</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b"><td className="p-3 font-semibold">Corporate Team Dinner</td><td className="p-3">Builds camaraderie, everyone engaged</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Family Reunion</td><td className="p-3">All ages entertained, shared tables</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Birthday Party</td><td className="p-3">Interactive, memorable, celebratory</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Sports Team</td><td className="p-3">Hearty portions, group seating</td></tr>
                                    <tr><td className="p-3 font-semibold">Holiday Gathering</td><td className="p-3">Festive atmosphere, no cooking cleanup!</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">📞 Group Reservations at Jinbeh</h2>
                            <ul className="space-y-2 text-charcoal/80">
                                <li className="flex gap-2"><span className="text-green-600">✓</span>Groups of 8+: Call ahead to reserve adjacent tables</li>
                                <li className="flex gap-2"><span className="text-green-600">✓</span>Groups of 20+: Ask about semi-private arrangements</li>
                                <li className="flex gap-2"><span className="text-green-600">✓</span>Corporate accounts available for repeat business</li>
                            </ul>

                            <div className="mt-12 p-8 bg-gradient-to-r from-accent-red to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">👥 Plan Your Group Event</h3>
                                <p className="text-white/80 mb-6">Contact us for group reservations and corporate dining.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco#reserve" className="bg-white text-accent-red px-6 py-3 rounded-xl font-semibold">Frisco</Link>
                                    <Link href="/lewisville#reserve" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Lewisville</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related</h3>
                                <div className="space-y-3">
                                    {[{ t: "Hibachi Catering", s: "/blog/hibachi-catering-dfw", i: "/images/blog/4-C060324-6380.jpg" },
                                    { t: "Hibachi Birthday Ideas", s: "/blog/hibachi-birthday-party-ideas", i: "/images/blog/1-C060324-6328.jpg" }].map(r => (
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
