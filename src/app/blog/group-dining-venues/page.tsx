import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

export const metadata: Metadata = {
    title: "Group Dining Venues DFW: Best for Large Parties | Jinbeh",
    description: "Find the best group dining venues in DFW! Hibachi is perfect for corporate events, family gatherings, and team dinners. Reserve Jinbeh's private space.",
    keywords: ["group dining dfw", "large group restaurants", "private dining frisco", "corporate dining lewisville"],
    openGraph: {
        title: "Best Group Dining Venues in DFW",
        description: "Planning dinner for a large group? Discover the best restaurants in Dallas-Fort Worth that can accommodate parties of 10, 20, or 50+ guests.",
        url: "https://jinbeh.com/blog/group-dining-venues",
        type: "article",
        images: ["/images/frisco/FriscoLocation_Bar_Front.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/group-dining-venues",
    },
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Group Dining Venues DFW: Best for Large Parties", datePublished: "2026-01-26", dateModified: "2026-03-11", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" }, image: "https://jinbeh.com/images/frisco/FriscoLocation_Bar_Front.jpg" },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "Best restaurant for large groups in DFW?", acceptedAnswer: { "@type": "Answer", text: "Hibachi restaurants like Jinbeh are ideal—shared tables seat 8-10, entertainment keeps everyone engaged, and the format works for all ages. Jinbeh has been hosting group events since 1988." } },
            { "@type": "Question", name: "What's the minimum group size for Jinbeh reservations?", acceptedAnswer: { "@type": "Answer", text: "While Jinbeh welcomes all sizes, groups of 8+ benefit from group dining expertise. Contact Jinbeh for coordination details." } },
            { "@type": "Question", name: "Can we customize the menu for our group?", acceptedAnswer: { "@type": "Answer", text: "Yes. Jinbeh's culinary team works with groups to create customized menus accommodating dietary preferences and group size." } },
            { "@type": "Question", name: "How do hibachi tables work for groups?", acceptedAnswer: { "@type": "Answer", text: "8-10 guests sit around a hibachi station where a skilled chef prepares your meal with theatrical flair and entertainment." } },
            { "@type": "Question", name: "How do I book a group at Jinbeh?", acceptedAnswer: { "@type": "Answer", text: "Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 at least 2-4 weeks ahead. The team will coordinate menu, timing, and special requests." } },
            { "@type": "Question", name: "Are there private rooms for large groups?", acceptedAnswer: { "@type": "Answer", text: "Yes. Jinbeh offers private dining areas and group hibachi tables providing semi-private settings, perfect for corporate events, family reunions, and milestone celebrations." } },
            { "@type": "Question", name: "Can kids join group hibachi dining?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Kids love hibachi. The chefs entertain while cooking, and a kids menu is available. The hibachi show is fun for all ages." } }
        ]
    }
];


const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 4, "name": "Best Group Dining Venues in DFW" },
    ],
};

export default function GroupDiningVenues() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image src="/images/blog/2-C060324-6341.jpg" alt="Jinbeh Japanese Restaurant group dining room" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/private-dining">Menu</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-accent-red mb-4">🎉 Celebrations</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Group Dining Venues DFW</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Planning dinner for a big group?</strong> The challenge is finding a place that works for everyone—kids, adults, picky eaters, and adventurous foodies. Here's why hibachi is the perfect solution. And if you're treating the group, a <Link href="/gift-cards" className="text-accent-red hover:underline font-medium">Jinbeh gift card</Link> makes coordination easy.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎯 Why Hibachi Works for Groups</h2>

                            <DidYouKnow
                                fact="Group dining accounts for 35% of all restaurant revenue in the United States, with parties of 8+ spending an average of $45 per person — 40% more than individual diners. Restaurants with interactive or communal dining formats like hibachi see 60% higher guest satisfaction scores for group events compared to traditional sit-down restaurants."
                                source="National Restaurant Association & Technomic"
                            />
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
                                    <tr className="border-b"><td className="p-3 font-semibold"><Link href="/blog/hibachi-birthday-party-ideas" className="text-accent-red hover:underline">Birthday Party</Link></td><td className="p-3">Interactive, memorable, celebratory</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Sports Team</td><td className="p-3">Hearty portions, group seating</td></tr>
                                    <tr><td className="p-3 font-semibold">Holiday Gathering</td><td className="p-3">Festive atmosphere, no cooking cleanup!</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">💰 Group Dining Cost Guide</h2>
                            <p className="text-charcoal/80 mb-4">Planning a budget for your group? Here&apos;s what to expect at different venue types across DFW:</p>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Venue Type</th><th className="p-3 text-left">Per Person</th><th className="p-3 text-left">Entertainment</th><th className="p-3 text-left">Private Space</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">⭐ Hibachi (Jinbeh)</td><td className="p-3">$25–45</td><td className="p-3">Chef show included</td><td className="p-3">Semi-private</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Casual Dining</td><td className="p-3">$15–30</td><td className="p-3">None</td><td className="p-3">Varies</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Fine Dining</td><td className="p-3">$50–100+</td><td className="p-3">None</td><td className="p-3">Private rooms</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">BBQ / Buffet</td><td className="p-3">$20–35</td><td className="p-3">Self-serve</td><td className="p-3">Varies</td></tr>
                                    <tr><td className="p-3 font-semibold">Food Hall</td><td className="p-3">$12–25</td><td className="p-3">None</td><td className="p-3">Open seating</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">📞 Group Reservations at Jinbeh</h2>
                            <ul className="space-y-2 text-charcoal/80">
                                <li className="flex gap-2"><span className="text-green-600">✓</span>Groups of 8+: Call ahead to reserve adjacent tables</li>
                                <li className="flex gap-2"><span className="text-green-600">✓</span>Groups of 20+: Ask about semi-private arrangements</li>
                                <li className="flex gap-2"><span className="text-green-600">✓</span>Corporate accounts available for repeat business</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎯 Planning Your Group Celebration</h2>
                            <p className="text-charcoal/80 mb-6">When planning group dining, consider these factors to ensure success:</p>

                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-deep-indigo">
                                    <h3 className="font-bold text-charcoal mb-2">Group Size</h3>
                                    <p className="text-sm text-charcoal/70">Jinbeh accommodates groups from 8 to 50+ guests with flexible seating arrangements. Perfect for <Link href="/blog/large-group-dining" className="text-accent-red hover:underline">large group dining</Link>.</p>
                                </div>
                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-accent-red">
                                    <h3 className="font-bold text-charcoal mb-2">Advance Notice</h3>
                                    <p className="text-sm text-charcoal/70">Book 2-4 weeks ahead for optimal coordination and menu customization.</p>
                                </div>
                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-soft-gold">
                                    <h3 className="font-bold text-charcoal mb-2">Menu Selection</h3>
                                    <p className="text-sm text-charcoal/70">Choose from family-style, set menus, or customized options accommodating dietary needs.</p>
                                </div>
                                <div className="bg-warm-ivory rounded-xl p-5 border-l-4 border-charcoal">
                                    <h3 className="font-bold text-charcoal mb-2">Entertainment Value</h3>
                                    <p className="text-sm text-charcoal/70">Hibachi performances add excitement and engagement for all attendees.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions</h2>
                            <div className="space-y-3">
                                <details className="group bg-warm-ivory rounded-xl">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">What's the minimum group size for Jinbeh reservations?<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">While we welcome all sizes, groups of 8+ benefit from our group dining expertise. Contact us for coordination details.</div>
                                </details>
                                <details className="group bg-warm-ivory rounded-xl">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">Can we customize the menu for our group?<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">Absolutely! Our culinary team works with groups to create customized menus accommodating dietary preferences and group size.</div>
                                </details>
                                <details className="group bg-warm-ivory rounded-xl">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">How do hibachi tables work for groups?<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">8-10 guests sit around a hibachi station where a skilled chef prepares your meal with theatrical flair and entertainment.</div>
                                </details>
                                <details className="group bg-warm-ivory rounded-xl">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">What makes Jinbeh special for groups?<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">Family-owned since 1988, we combine professional coordination, premium ingredients, and hibachi entertainment creating unforgettable experiences. We treat every guest like family!</div>
                                </details>

                                <details className="group bg-warm-ivory rounded-xl">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">How do I book a group at Jinbeh?<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">Welcome to the table! Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 at least 2-4 weeks ahead. We'll coordinate menu, timing, and special requests for your celebration!</div>
                                </details>

                                <details className="group bg-warm-ivory rounded-xl">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">Are there private rooms for large groups?<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">Yes! It's a celebration! Our <Link href="/private-dining" className="text-accent-red hover:underline">private dining</Link> areas and group hibachi tables provide semi-private settings. Perfect for corporate events, family reunions, and milestone celebrations. Fresh and flavorful dining awaits!</div>
                                </details>

                                <details className="group bg-warm-ivory rounded-xl">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">Can kids join group hibachi dining?<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">Absolutely! Kids love hibachi! Our chefs entertain while cooking, and children enjoy watching the show. We offer a kids menu and treat every guest like family. Dinner and a show for all ages!</div>
                                </details>
                            </div>

                            <ProTip variant="insider">
                                <strong>Group booking insider tip:</strong> For groups of 12+, call Jinbeh directly rather than booking online — our team will arrange adjacent hibachi tables so your whole group can enjoy the experience together. Weeknight dinners (Tuesday-Thursday) give you more space and personal attention. Corporate groups love our set-menu packages that simplify ordering and billing. Ask about corporate account perks for repeat bookings! <Link href="/reservations" className="text-accent-red hover:underline">Reserve for your group →</Link>
                            </ProTip>

                            <PillarCTA type="vip" />
                            <LocationCTA location="both" />

                            <div className="mt-12 pt-8 border-t-2 border-warm-ivory">
                                <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">📍 Jinbeh Locations</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Link href="/frisco" className="group p-6 rounded-2xl bg-warm-ivory hover:bg-soft-gold/20 transition-colors border-2 border-transparent hover:border-soft-gold">
                                        <h4 className="text-lg font-heading font-bold text-charcoal group-hover:text-accent-red mb-2">Visit us in Frisco</h4>
                                        <p className="text-charcoal/70 text-sm">Near Stonebriar Centre, convenient for North Texas group events and celebrations.</p>
                                    </Link>
                                    <Link href="/lewisville" className="group p-6 rounded-2xl bg-warm-ivory hover:bg-soft-gold/20 transition-colors border-2 border-transparent hover:border-soft-gold">
                                        <h4 className="text-lg font-heading font-bold text-charcoal group-hover:text-accent-red mb-2">Visit us in Lewisville</h4>
                                        <p className="text-charcoal/70 text-sm">Off I-35E near Vista Ridge Mall, perfect for Lewisville and North DFW group dining.</p>
                                    </Link>
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
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden"><Image src={r.i} alt={`Related: ${r.t}`} fill className="object-cover" /></div>
                                            <span className="text-sm group-hover:text-accent-red">{r.t}</span>
                                        </Link>
                                    ))}
                                </div>

                                <RelatedArticles currentSlug="group-dining-venues" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
