import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";
import { Accordion } from "@/components/ui/accordion";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
    title: "Japanese Restaurants Lewisville TX: Top Picks | Jinbeh",
    description: "Find the best Japanese restaurants in Lewisville TX! From hibachi to sushi, discover authentic dining. Jinbeh offers family-friendly hibachi and fresh sushi.",
    keywords: ["japanese restaurant lewisville", "sushi lewisville tx", "hibachi lewisville", "asian food lewisville"],
    openGraph: {
        title: "Best Japanese Restaurants Lewisville TX",
        description: "Find authentic Japanese cuisine in Lewisville TX. From hibachi shows to fresh sushi, discover the best spots near Vista Ridge Mall and I-35E.",
        url: "https://jinbeh.com/blog/japanese-restaurants-lewisville",
        type: "article",
        images: ["/images/photoshoot/hibachi-steak.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/japanese-restaurants-lewisville",
    },
};

const faqs = [
    { question: "What's the best Japanese restaurant in Lewisville?", answer: "Welcome to the table! Jinbeh has served Lewisville since 1988. top-rateds on Google. Hibachi shows, fresh sushi, family-friendly. We treat every guest like family." },
    { question: "Do you have hibachi in Lewisville?", answer: "Yes! Our hibachi tables seat 7–8 guests (larger groups accommodated by joining tables with advance notice) guests. Full chef performance. Dinner and a show. Fire tricks, onion volcano, perfectly cooked proteins. Perfect for celebrations and groups." },
    { question: "Can you handle large groups?", answer: "Absolutely! We specialize in groups. Hibachi tables, flexible seating, customized menus. Call (214) 488-2224 to arrange your party. We love making celebrations special." },
    { question: "Do you have a sushi bar in Lewisville?", answer: "Yes! Fresh and flavorful, that's our promise. Our sushi chefs prepare custom rolls at our bar. You can watch them work. Ask your server for recommendations." },
    { question: "Where is Jinbeh Lewisville located?", answer: "We're at 2440 S. Stemmons Freeway, near Vista Ridge Mall. Easy I-35E access. Convenient parking right outside. Call (214) 488-2224 to confirm hours." },
    { question: "Does Jinbeh Lewisville offer takeout?", answer: "Yes! Call (214) 488-2224 to place a takeout order. Most orders are ready in 20-30 minutes. We offer sushi rolls, bento boxes, teriyaki, and hibachi platters for pickup. You can also order delivery through DoorDash and Uber Eats." }
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Restaurants Lewisville TX", datePublished: "2026-01-23", dateModified: "2026-03-12", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type ": " Question ", name: f.question, acceptedAnswer: { " @type": " Answer ", text: f.answer } }))
    }
];

const breadcrumbSchema = {
    " @context": " https://schema.org",
    " @type": " BreadcrumbList ",
    " itemListElement ": [
        { " @type ": " ListItem ", " position ": 1, " name ": " Home ", " item ": " https://jinbeh.com" },
        { " @type ": " ListItem ", " position ": 2, " name ": " Blog ", " item ": " https://jinbeh.com/blog" },
        { " @type ": " ListItem ", " position ": 3, " name ": " Locations ", " item ": " https://jinbeh.com/#locations" },
        { " @type ": " ListItem ", " position ": 4, " name ": " Best Japanese Restaurants Lewisville TX " },
    ],
};

export default function JapaneseRestaurantsLewisville() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Japanese Restaurants Lewisville" }]} />
        </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image src="/images/blog/jinbeh-shrimp-tempura-appetizer-platter.jpg" alt="Jinbeh Japanese Restaurant Lewisville dining room" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/#locations">Locations</Link>
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
              <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">⭐ Currently on 12+ OpenTable Diners&apos; Choice Lists</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Jinbeh is ranked <strong>#1 Hibachi</strong> and <strong>#1 Tempura</strong> in Lewisville on OpenTable &mdash; and appears on more Diners&apos; Choice lists than any other Japanese restaurant in the Dallas suburbs &mdash; including Best Japanese, Best Value, Kid-Friendly, Best Hibachi, and Best Tempura. These aren&apos;t paid placements. They&apos;re earned through thousands of verified diner reviews.
                </p>
              </div>
                                <span className="text-sm text-charcoal/80">, The Jinbeh Family</span>
                            </div>

                            <DidYouKnow
                                fact="Jinbeh has been part of Lewisville's dining community since 1988, making it one of the longest-running Japanese restaurants in the DFW metroplex. With a top-rated Google rating from over 900 reviews, many locals say they prefer Jinbeh's family-owned feel over chain hibachi steakhouses."
                                source="Google Reviews & DFW Dining History"
                            />

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

                            <ProTip variant="insider">
                                <strong>Lewisville regulars' favorites:</strong> Start with the hibachi, it's the signature experience, and reviewers rave about the entertaining chef shows. For sushi, the Dallas Roll and Volcano Roll are consistent crowd favorites. Locals also swear by the crab rangoon, calling them "the best they've ever had." <Link href="/reservations" className="text-accent-red hover:underline">Reserve your table →</Link>
                            </ProTip>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions About Japanese Dining in Lewisville</h2>
                            <div className="space-y-3">
                                <Accordion items={faqs.map((faq: any) => ({ title: faq.question, content: faq.answer }))} />
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎯 Other Dining Options in Lewisville</h2>
                            <p className="text-charcoal/80 mb-6">While Jinbeh is our top recommendation for Japanese dining, Lewisville has other options. However, for authentic <Link href="/blog/hibachi-vs-teppanyaki-explained" className="text-accent-red hover:underline">hibachi performances</Link>, fresh <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">sushi</Link>, and professional service combined, <Link href="/lewisville" className="text-accent-red hover:underline">Jinbeh Lewisville</Link> stands out as the premier choice.</p>

                            <div className="mt-12 p-8 bg-gradient-to-r from-deep-indigo to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍱 Visit Jinbeh Lewisville</h3>
                                <p className="text-white/80 mb-2"><strong>Address:</strong> 250 E Round Grove Rd, Lewisville, TX 75067</p>
                                <p className="text-white/80 mb-6"><strong>Phone:</strong> (972) 315-3744</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/reservations" className="bg-white text-deep-indigo px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition">Make a Reservation</Link>
                                    <Link href="/lewisville/menu" className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">View Menu</Link>
                                    <Link href="/private-dining" className="bg-white/20 border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition">Private Dining Info</Link>
                                </div>
                            </div>

                            <PillarCTA type="vip" />
                            <LocationCTA location="lewisville" />
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
