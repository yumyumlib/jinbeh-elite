import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Unique Kids Birthday Party Places DFW | Jinbeh",
    description: "Find unique kids birthday party places in DFW! Hibachi restaurants make unforgettable celebrations with fire, food, and entertainment. Book Jinbeh today!",
    keywords: ["kids birthday party places", "unique birthday ideas", "hibachi birthday party", "dfw birthday venues"],
};

const faqs = [
    { question: "Is hibachi good for kids' parties?", answer: "Yes! Kids love the flames, flying shrimp, and interactive chef show. Jinbeh is family-friendly and perfect for birthday celebrations." },
    { question: "What age is best for a hibachi birthday party?", answer: "Hibachi parties are great for kids ages 4 and up. Children enjoy watching the chef's performance, participating in the cooking show, and enjoying delicious, customizable food." },
    { question: "How far in advance should I book a kids' birthday party?", answer: "We recommend booking at least 2-3 weeks in advance, especially for weekends. This ensures your preferred date and time are available and allows us to prepare special birthday surprises." },
    { question: "Can Jinbeh accommodate food allergies for kids' parties?", answer: "Absolutely! We take allergies seriously. When booking, inform us of any dietary restrictions or food allergies, and our team will prepare safe, delicious options for the birthday child and guests." },
    { question: "What are the benefits of celebrating at a hibachi restaurant vs. home?", answer: "Hibachi restaurants offer entertainment, skilled chefs, no cleanup, customizable menus, and a festive atmosphere. The interactive chef show creates lasting memories while parents relax and enjoy the celebration." },
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Unique Kids Birthday Party Places", datePublished: "2026-01-25", author: { "@type": "Organization", name: "Jinbeh" }, image: "https://jinbeh.com/images/celebrations/jinbeh_group.jpg" },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(faq => ({
            "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
    }
];

export default function KidsBirthdayPlaces() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/celebrations/jinbeh_group.jpg" alt="Birthday celebration at Jinbeh hibachi restaurant" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/celebrations">Celebrations</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-accent-red mb-4">🎉 Celebrations</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Unique Kids Birthday Party Places</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Tired of the same old birthday party spots?</strong> Ditch the pizza chains and bounce houses. A hibachi party at <Link href="/frisco" className="text-deep-indigo hover:text-accent-red font-semibold">Jinbeh</Link> gives kids something they'll actually remember—fire, flying food, and a show that makes them the star. Or explore more <Link href="/blog/unique-kids-birthday-party-places" className="text-deep-indigo hover:text-accent-red font-semibold">birthday party ideas</Link> tailored for children.</p>

                            <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"Kids go absolutely crazy for hibachi. Watching their faces light up when the chef does the onion volcano—that's what we live for at Jinbeh."</p>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎂 Why Kids Love Hibachi Parties</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[{ e: "🔥", t: "Fire & Flames", d: "The chef show is pure entertainment" }, { e: "🦐", t: "Flying Food", d: "Catch shrimp in your mouth!" }, { e: "🎭", t: "Interactive", d: "Kids love participating in the show" }, { e: "👨‍👩‍👧‍👦", t: "Group-Friendly", d: "Tables seat 8-10, perfect for parties" }].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">📊 Hibachi vs Other Party Venues</h2>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Venue</th><th className="p-3">Entertainment</th><th className="p-3">Food Quality</th><th className="p-3">Memorable?</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">⭐ Hibachi</td><td className="p-3 text-center">🔥🔥🔥</td><td className="p-3 text-center">🍣🍣🍣</td><td className="p-3 text-center">✓✓✓</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Bounce House</td><td className="p-3 text-center">🔥🔥</td><td className="p-3 text-center">🍕</td><td className="p-3 text-center">✓</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Pizza Chain</td><td className="p-3 text-center">🔥</td><td className="p-3 text-center">🍕</td><td className="p-3 text-center">✓</td></tr>
                                    <tr><td className="p-3 font-semibold">Movie Theater</td><td className="p-3 text-center">🔥🔥</td><td className="p-3 text-center">🍿</td><td className="p-3 text-center">✓✓</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">📝 Booking Tips</h2>
                            <ul className="space-y-2 text-charcoal/80">
                                <li className="flex gap-2"><span className="text-accent-red">→</span>Reserve at least 1 week ahead for weekend parties</li>
                                <li className="flex gap-2"><span className="text-accent-red">→</span>Ask about group seating to keep the party together</li>
                                <li className="flex gap-2"><span className="text-accent-red">→</span>Mention the birthday when booking—we may sing!</li>
                                <li className="flex gap-2"><span className="text-accent-red">→</span>Consider lunch for better availability and pricing</li>
                                <li className="flex gap-2"><span className="text-accent-red">→</span>Get ideas from our <Link href="/blog/beginner-sushi-tips" className="text-deep-indigo hover:text-accent-red font-semibold">sushi guide for beginners</Link> to help kids enjoy the menu</li>
                            </ul>

                            <div className="mt-12 p-8 bg-gradient-to-r from-accent-red to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🎂 Book Your Party at Jinbeh</h3>
                                <p className="text-white/80 mb-6">Make their next birthday unforgettable! We serve both our <Link href="/locations/frisco" className="text-white hover:underline">Frisco location</Link> and <Link href="/locations/lewisville" className="text-white hover:underline">Lewisville location</Link>.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/reservations" className="bg-white text-accent-red px-6 py-3 rounded-xl font-semibold">Make a Reservation</Link>
                                    <Link href="/catering" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Catering Options</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <RelatedArticles currentSlug="unique-kids-birthday-party-places" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
