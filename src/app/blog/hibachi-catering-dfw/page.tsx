import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Hibachi Catering DFW: Party & Event Services | Jinbeh",
    description: "Hibachi catering for parties, corporate events, and weddings in DFW. Jinbeh brings the sizzle to you with on-site chefs and authentic Japanese cuisine.",
    keywords: ["hibachi catering", "japanese catering dallas", "event catering frisco", "party catering dfw"],
    openGraph: {
        title: "Hibachi Catering DFW: Party & Event Services",
        description: "Professional hibachi catering for corporate events, private parties, and celebrations in DFW.",
        images: ["/images/blog/6-C060324-6405.jpg"],
    },
};

const faqs = [
    {
        question: "Does Jinbeh offer hibachi catering?",
        answer: "Yes! We offer professional hibachi catering for private events, corporate functions, weddings, and celebrations. Our experienced chefs bring the full Jinbeh dining experience to your location with fresh ingredients and entertaining table-side cooking.",
    },
    {
        question: "How much does hibachi catering cost?",
        answer: "Pricing depends on your group size, menu selection (beef, chicken, shrimp, etc.), and venue location. We offer customized packages to fit different budgets. Contact us or visit our catering page for a detailed quote.",
    },
    {
        question: "What's the minimum guest count for catering?",
        answer: "Our catering works best for groups of 20 or more. However, we encourage smaller groups to contact us directly—we may be able to accommodate intimate gatherings depending on availability.",
    },
    {
        question: "How far in advance should I book catering?",
        answer: "We recommend booking at least 2-3 weeks in advance to ensure availability, especially during busy seasons like holidays and summer weekends. For large events, earlier booking is appreciated.",
    },
    {
        question: "Do you provide catering equipment?",
        answer: "Yes! We can provide portable hibachi grills and all necessary cooking equipment for on-site events. We handle the setup, cooking, and cleanup. You just need to provide the venue and seating.",
    },
    {
        question: "Can you accommodate dietary restrictions?",
        answer: "Absolutely! Let us know about any allergies or dietary preferences (vegetarian, gluten-free, etc.) when you book, and our chefs will customize the menu accordingly.",
    },
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Hibachi Catering DFW: Party & Event Services", datePublished: "2026-01-24", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        }))
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
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=best-of">Catering</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-cedar-brown mb-4">🍴 Catering</span>
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
                                <span className="text-sm text-charcoal/80 mt-2 block">— The Jinbeh Family</span>
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

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">📋 What's Included in Our Catering</h2>
                            <ul className="space-y-2 text-charcoal/80 my-6">
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Experienced hibachi chef(s)</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Fresh, high-quality ingredients and proteins</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Portable hibachi cooking equipment</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Full table-side cooking and entertainment</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Complete meal service (soup, salad, vegetables, protein, fried rice)</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Sushi platters and appetizers available as add-ons</li>
                                <li className="flex items-center gap-2"><span className="text-green-600">✓</span>Setup and cleanup assistance</li>
                            </ul>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions</h2>
                            <div className="space-y-3">
                                {faqs.map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.question}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.answer}</div>
                                    </details>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏯 Catering at Our Restaurants</h2>
                            <p className="text-charcoal/80 mb-6">
                                Can't host an event at home? Visit us at our <Link href="/locations/frisco" className="text-accent-red hover:underline">Frisco location</Link> or <Link href="/locations/lewisville" className="text-accent-red hover:underline">Lewisville location</Link> for private dining and <Link href="/group-dining-venues" className="text-accent-red hover:underline">group dining</Link> options. We also offer full hibachi catering for off-site events. Learn more about the <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-accent-red hover:underline">difference between hibachi and teppanyaki</Link> and why Jinbeh is the best choice for your celebration.
                            </p>

                            <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍴 Ready to Plan Your Catered Event?</h3>
                                <p className="text-white/80 mb-6">Let us create an unforgettable hibachi experience for your celebration. Browse our <Link href="/menu" className="text-white hover:underline">full menu</Link> or explore our <Link href="/catering" className="text-white hover:underline">catering services</Link>.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/catering" className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors">Request Custom Quote</Link>
                                    <Link href="/reservations" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">Make a Reservation</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="sticky top-24">
                                <RelatedArticles currentSlug="hibachi-catering-dfw" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
