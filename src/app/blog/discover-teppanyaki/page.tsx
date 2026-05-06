import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";
import { Accordion } from "@/components/ui/accordion";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
    title: "Discover Teppanyaki: A Culinary Art Form | Jinbeh",
    description: "Learn about teppanyaki, the Japanese art of iron griddle cooking. Discover its history, techniques, and where to experience authentic teppanyaki in DFW.",
    keywords: ["teppanyaki", "hibachi vs teppanyaki", "japanese grill", "teppanyaki restaurant Dallas"],
    openGraph: {
        title: "Discover Teppanyaki: A Culinary Art Form",
        description: "Learn about teppanyaki, the Japanese art of iron griddle cooking in DFW.",
        images: ["/images/blog/5-C060324-6397.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/discover-teppanyaki",
    },
};

const faqs = [
    {
        question: "What is teppanyaki?",
        answer: "Teppanyaki (鉄板焼き) is the Japanese art of cooking on a large, flat iron griddle. It combines skilled knife work, precise ingredient preparation, and theatrical presentation. The chef cooks directly in front of diners, creating an entertaining and interactive dining experience.",
    },
    {
        question: "What's the difference between hibachi and teppanyaki?",
        answer: "Technically, hibachi refers to a small charcoal grill used at home, while teppanyaki uses a large flat iron griddle for restaurant cooking. In America, the terms are often used interchangeably, but what's typically called 'hibachi restaurants' is actually teppanyaki-style cooking with chef entertainment.",
    },
    {
        question: "Is teppanyaki good for groups?",
        answer: "Absolutely! Teppanyaki is perfect for group dining. The shared table seating brings 8-10 people together, making it ideal for birthdays, team dinners, and celebrations. Learn more about hosting group events at Jinbeh.",
    },
    {
        question: "What should I expect during a teppanyaki meal?",
        answer: "You'll sit around a large griddle while the chef prepares your meal in front of you. Expect knife tricks, precise cooking techniques, and theatrical flourishes like onion volcanoes and flaming dishes. The meal typically includes soup, salad, vegetables, your choice of protein, and fried rice.",
    },
    {
        question: "Can I find authentic teppanyaki in the DFW area?",
        answer: "Yes! Jinbeh offers authentic teppanyaki experiences at our Frisco and Lewisville locations. Our chefs are trained in traditional Japanese cooking techniques and provide an engaging, family-friendly dining experience.",
    },
    {
        question: "Is teppanyaki good for vegetarians?",
        answer: "Yes! Teppanyaki is great for vegetarians. Our chefs prepare tofu, mushrooms, zucchini, broccoli, onions, and fried rice on the griddle with the same entertaining performance. Just let us know when booking and we'll ensure a dedicated cooking area for your vegetarian meal.",
    },
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Discover Teppanyaki: A Culinary Art Form", datePublished: "2026-01-21", dateModified: "2026-03-11", author: { "@type": "Organization", name: "Jinbeh" } },
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

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Menu", "item": "https://jinbeh.com/menu" },
        { "@type": "ListItem", "position": 4, "name": "Discover Teppanyaki: The Art of Iron Plate Cooking" },
    ],
};

export default function DiscoverTeppanyaki() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Discover Teppanyaki" }]} />
        </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster="/images/blog/3-C060324-6364.jpg">
                    <source src="/videos/LOCAL-FRI-HIBACHI-chef-red-hat-grill-prep-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/menu">Menu</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-charcoal bg-soft-gold mb-4">🍣 Cuisine</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Discover Teppanyaki: Culinary Art</h1>
                </div>
</section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Teppanyaki</strong> (鉄板焼き) means "grilling on an iron plate." It's the art form behind what Americans call "hibachi restaurants",where skilled chefs transform cooking into dinner theater.</p>

            
              <p className="text-charcoal/80 text-sm mt-6">
                See also: <Link href="/blog/popular-japanese-culture" className="text-accent-red hover:underline">popular Japanese culture</Link>
              </p>

                            <div className="bg-gradient-to-br from-soft-gold/10 to-soft-gold/10 border-l-4 border-soft-gold rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"At Jinbeh, our teppanyaki chefs train for years to perfect their craft. It's not just about the food, it's about creating unforgettable moments around the grill."</p>
                                <span className="text-sm text-charcoal/80 mt-2 block">, The Jinbeh Family</span>
                            </div>

                            <DidYouKnow
                                fact="Teppanyaki was invented in 1945 at a restaurant called Misono in Kobe, Japan, specifically to appeal to Western visitors. The communal flat-griddle format was designed so foreign diners could watch their food being prepared, building trust in unfamiliar cuisine."
                                source="Japanese Culinary History"
                            />

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🔥 <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-accent-red hover:underline">Hibachi vs Teppanyaki</Link></h2>
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Feature</th><th className="p-3 text-left">Hibachi</th><th className="p-3 text-left">Teppanyaki</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b"><td className="p-3 font-semibold">Heat Source</td><td className="p-3">Charcoal grill</td><td className="p-3">Flat iron plate</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Style</td><td className="p-3">Traditional, smaller</td><td className="p-3">Chef performance</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">In US Restaurants</td><td className="p-3" colSpan={2}>Both terms used interchangeably for teppanyaki-style</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎭 The Teppanyaki Show</h2>
                            <div className="grid md:grid-cols-3 gap-4 my-6">
                                {[{ e: "🔪", t: "Knife Skills", d: "Precision cuts, rapid chopping" }, { e: "🔥", t: "Fire Tricks", d: "Onion volcano, flaming shrimp" }, { e: "🦐", t: "Food Toss", d: "Catch the shrimp in your mouth!" }].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5 text-center">
                                        <span className="text-4xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-3 my-8">
                                <div className="relative aspect-square rounded-xl overflow-hidden"><Image src="/images/blog/3-C060324-6364.jpg" alt="Chef" fill className="object-cover" /></div>
                                <div className="relative aspect-square rounded-xl overflow-hidden"><Image src="/images/blog/4-C060324-6380.jpg" alt="Fire" fill className="object-cover" /></div>
                                <div className="relative aspect-square rounded-xl overflow-hidden"><Image src="/images/blog/5-C060324-6397.jpg" alt="Grill" fill className="object-cover" /></div>
                            </div>

                            <ProTip variant="insider">
                                <strong>Planning a celebration?</strong> Guests consistently say Jinbeh's chefs make birthdays unforgettable, they tailor the show to your group and amp up the entertainment for special occasions. Our teppanyaki tables seat 8–10, and reviewers often mention preferring us over chain steakhouses for the personal, family-owned touch. <Link href="/reservations" className="text-accent-red hover:underline">Reserve a teppanyaki table →</Link>
                            </ProTip>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions</h2>
                            <div className="space-y-3">
                                <Accordion items={faqs.map((faq: any) => ({ title: faq.question, content: faq.answer }))} />
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏯 Experience Authentic Teppanyaki in DFW</h2>
                            <p className="text-charcoal/80 mb-6">
                                Ready to experience the art of teppanyaki? Visit Jinbeh at our <Link href="/frisco" className="text-accent-red hover:underline">Frisco</Link> or <Link href="/lewisville" className="text-accent-red hover:underline">Lewisville</Link> locations. Our expert chefs will delight you with authentic cooking techniques, entertainment, and delicious Japanese cuisine. We also offer <Link href="/catering" className="text-accent-red hover:underline">catering services</Link> for corporate events and private celebrations.
                            </p>

                            <PillarCTA type="vip" />
                            <LocationCTA location="both" />

                            <div className="mt-12 p-8 bg-gradient-to-r from-accent-red to-deep-indigo rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🔥 Ready for Teppanyaki?</h3>
                                <p className="text-white/90 mb-6">Experience the perfect blend of cuisine and entertainment. Perfect for a <Link href="/blog/hibachi-birthday-party-ideas" className="text-white hover:text-warm-ivory underline">hibachi birthday party</Link> or special occasion.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/reservations" className="bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors">Make a Reservation</Link>
                                    <Link href="/menu" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">View Our Menu</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <div className="sticky top-24">
                                <RelatedArticles currentSlug="discover-teppanyaki" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
