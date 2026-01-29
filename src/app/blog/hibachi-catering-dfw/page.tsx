import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hibachi Catering DFW: Party & Event Services | Jinbeh",
    description: "Hibachi catering for parties, corporate events, and weddings in DFW. Jinbeh brings the sizzle to you with on-site chefs and authentic Japanese cuisine.",
    keywords: ["hibachi catering", "japanese catering dallas", "event catering frisco", "party catering dfw"],
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Hibachi Catering DFW", datePublished: "2026-01-24", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "Does Jinbeh offer catering?", acceptedAnswer: { "@type": "Answer", text: "Yes! We offer hibachi catering for private events, corporate functions, and celebrations. Contact us for custom packages." } },
            { "@type": "Question", name: "How much is hibachi catering?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on group size and menu selection. Contact us for a custom quote for your event." } }
        ]
    }
];

export default function HibachiCatering() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster="/images/blog/4-C060324-6380.jpg">
                    <source src="/videos/LOCAL-FRI-HIBACHI-chef-cooking-fire-family-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=catering">Catering</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-green-600 mb-4">🍴 Catering</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Hibachi Catering DFW</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Bring the hibachi show to your event!</strong> Our catering services deliver the same sizzling entertainment and delicious cuisine that's made Jinbeh a DFW favorite since 1988.</p>

                            <div className="bg-gradient-to-br from-green-600/10 to-soft-gold/10 border-l-4 border-green-600 rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"Our catering team brings the full Jinbeh experience to your location—complete with skilled chefs, fresh ingredients, and the entertainment that makes hibachi unforgettable."</p>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎉 Catering Options</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[{ e: "🏢", t: "Corporate Events", d: "Team lunches, client dinners, holiday parties" }, { e: "💍", t: "Weddings", d: "Rehearsal dinners, reception catering" }, { e: "🎂", t: "Private Parties", d: "Birthdays, graduations, anniversaries" }, { e: "🏠", t: "At-Home Events", d: "Backyard parties, intimate gatherings" }].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">📋 What's Included</h2>
                            <ul className="space-y-2 text-charcoal/80 my-6">
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Professional hibachi chef</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Fresh ingredients and proteins</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Cooking equipment (if needed)</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Entertainment and showmanship</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Sushi platters available as add-on</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQs</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "How far in advance should I book?", a: "We recommend booking at least 2-3 weeks in advance for catering events, especially during busy seasons." },
                                    { q: "Minimum guest count?", a: "Our catering works best for groups of 20+, but contact us for smaller events—we may be able to accommodate." },
                                    { q: "Do you provide equipment?", a: "Yes! We can bring portable hibachi grills for on-site cooking at your venue." }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍴 Get a Catering Quote</h3>
                                <p className="text-white/80 mb-6">Tell us about your event and we'll create a custom package.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/catering" className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold">Request Quote</Link>
                                    <a href="tel:+19726187010" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Call (972) 618-7010</a>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="font-heading font-bold mb-4">Related</h3>
                                <div className="space-y-3">
                                    {[{ t: "Group Dining Guide", s: "/blog/group-dining-venues", i: "/images/blog/22-C060324-6829.jpg" },
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
