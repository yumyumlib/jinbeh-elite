import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";

export const metadata: Metadata = {
    title: "Sake Alcohol Strength: ABV & Types | Jinbeh",
    description: "Learn about sake alcohol content, ABV, and types. From junmai to daiginjo. Explore Jinbeh's sake selection and premium offerings.",
    keywords: ["sake alcohol content", "sake abv", "types of sake", "sake strength", "sake guide", "sake pairing"],
    openGraph: {
        title: "Sake Alcohol Strength: ABV & Complete Guide",
        description: "Master sake alcohol content and discover which types suit your taste.",
        images: ["/images/beverages/LewisvilleBar.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/sake-alcohol-strength",
    },
};

const faqs = [
    { question: "How strong is sake?", answer: "Welcome to sake! It's 15-17% ABV, similar to wine. It's brewed like beer but stronger. Not as strong as whiskey." },
    { question: "Should I serve sake hot or cold?", answer: "Premium sake cold. Fuller sake can be warm. Our bartenders will suggest the perfect temperature for your selection." },
    { question: "What's the difference between sake types?", answer: "Junmai is fuller. Daiginjo is lighter. Nigori is cloudy and sweet. Honjozo is smooth. Our staff can match your preference." },
    { question: "Does Jinbeh have sake?", answer: "Yes! We offer sake flights, premium selections, and sake bombs. Our bartenders know how to pair sake with food. Ask for recommendations." },
    { question: "What sake pairs with sushi?", answer: "Junmai or Nigori work well. Daiginjo is elegant. Sake bombs are fun for celebrations. Come try our sake selection at Jinbeh." },
    { question: "Can sake go bad after opening?", answer: "Sake doesn't spoil like milk, but it does lose flavor over time. Once opened, drink within 1-2 weeks and keep it refrigerated. Unopened sake lasts 1-2 years for regular varieties and 6-12 months for unpasteurized (nama) sake. Unlike wine, sake doesn't improve with age — drink it fresh for the best experience." }
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Sake Alcohol Strength Guide", datePublished: "2026-01-20", dateModified: "2026-03-12", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
    }
];


const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Bar & Beverages", "item": "https://jinbeh.com/bar" },
        { "@type": "ListItem", "position": 4, "name": "Sake Alcohol Content & Strength Guide: What to Know" },
    ],
};

export default function SakeGuide() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/beverages/LewisvilleBar.jpg" alt="Sake" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/bar">Menu</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-deep-indigo mb-4">🍶 Beverages</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Sake Alcohol Strength Guide</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>How strong is sake?</strong> At 15-17% ABV, it's similar to wine but brewed like beer. Let's explore types, serving, and pairings. For a deeper dive into <Link href="/blog/types-of-sake-explained" className="text-deep-indigo hover:text-accent-red underline transition-colors">sake varieties</Link>, check out our comprehensive guide, and explore <Link href="/blog/sake-taste-profile" className="text-deep-indigo hover:text-accent-red underline transition-colors">sake's complex flavor profile</Link> to understand what each sip reveals.</p>

                            <div className="grid grid-cols-4 gap-3 my-8">
                                {[{ e: "🍺", n: "Beer", v: "4-6%", c: "amber" }, { e: "🍷", n: "Wine", v: "12-14%", c: "red" }, { e: "🍶", n: "Sake", v: "15-17%", c: "purple" }, { e: "🥃", n: "Whiskey", v: "40%", c: "amber" }].map(x => (
                                    <div key={x.n} className={`bg-${x.c}-50 rounded-xl p-4 text-center border-2 border-${x.c}-200 ${x.n === "Sake" ? "ring-2 ring-purple-400" : ""}`}>
                                        <span className="text-3xl block mb-1">{x.e}</span>
                                        <span className="font-bold text-sm">{x.n}</span>
                                        <span className="block text-lg font-bold text-charcoal">{x.v}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍶 Sake Types</h2>

                            <DidYouKnow
                                fact="Sake has been brewed in Japan for over 2,000 years, making it one of the world's oldest alcoholic beverages. Despite being called 'rice wine,' sake is actually brewed more like beer through a parallel fermentation process. Japan has over 1,400 active sake breweries, and the premium sake market has grown 25% globally since 2020 as international appreciation expands."
                                source="Japan Sake and Shochu Makers Association"
                            />
                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Type</th><th className="p-3">ABV</th><th className="p-3 text-left">Profile</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b"><td className="p-3 font-semibold">Junmai</td><td className="p-3 text-center">15-16%</td><td className="p-3">Rich, umami</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Junmai Ginjo</td><td className="p-3 text-center">15-16%</td><td className="p-3">Fruity, aromatic</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Daiginjo</td><td className="p-3 text-center">15-17%</td><td className="p-3">Elegant, floral</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Nigori</td><td className="p-3 text-center">12-17%</td><td className="p-3">Creamy, sweet</td></tr>
                                    <tr><td className="p-3 font-semibold">Sparkling</td><td className="p-3 text-center">5-12%</td><td className="p-3">Light, fizzy</td></tr>
                                </tbody>
                            </table>

                            <p className="text-charcoal/80 mb-6">Curious to taste the difference? Visit Jinbeh's <Link href="/bar" className="text-deep-indigo hover:text-accent-red underline transition-colors">bar</Link> to sample varieties across the spectrum—our staff can walk you through a tasting flight. Once you've found your favorites, our <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red underline transition-colors">sake pairing guide</Link> will help you match them with the perfect dish.</p>
                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🌡️ Hot vs Cold</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                <div className="bg-deep-indigo/10 rounded-xl p-5 border-2 border-deep-indigo/30">
                                    <span className="text-3xl">❄️</span>
                                    <h3 className="font-bold mt-2">Serve Cold</h3>
                                    <p className="text-sm text-charcoal/70">Daiginjo, Ginjo, Sparkling</p>
                                </div>
                                <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
                                    <span className="text-3xl">🔥</span>
                                    <h3 className="font-bold mt-2">Serve Warm</h3>
                                    <p className="text-sm text-charcoal/70">Junmai, Honjozo</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions</h2>
                            <div className="space-y-3">
                                {[
                                    { q: "How strong is sake compared to wine?", a: "Sake typically contains 15-17% ABV, making it slightly stronger than wine (12-14% ABV) but lower than spirits like whiskey (40% ABV). This makes sake an excellent middle ground for those seeking a balanced alcohol content." },
                                    { q: "Does sake alcohol strength vary by type?", a: "Yes. Sparkling sake ranges from 5-12% ABV with a lighter feel, while traditional types like Junmai, Ginjo, and Daiginjo hover around 15-17% ABV. The alcohol content is influenced by brewing methods and sugar fermentation." },
                                    { q: "What's the best sake for beginners?", a: "Honjozo or entry-level Junmai sake (15-16% ABV) are excellent starting points. They offer approachable flavors and balanced strength without overwhelming newcomers. Visit Jinbeh's <a href=\"/blog/best-happy-hour-frisco-tx\" className=\"text-deep-indigo underline\">happy hour</a> to sample different varieties at special prices." },
                                    { q: "What is sake bombing and where can I try it?", a: "Sake bombing involves dropping a shot glass of sake into a beer. It's a fun party drink combining both beverages. Jinbeh offers sake bombs at happy hour with special pricing—a perfect way to experience this playful tradition." },
                                    { q: "How does sake alcohol affect food pairing?", a: "Higher ABV sakes (16-17%) pair with bold, grilled <a href=\"/blog/hibachi-vs-teppanyaki-explained\" className=\"text-deep-indigo underline\">hibachi dishes</a>, while lower ABV varieties work with delicate sashimi. Temperature also matters—warm sake (104-113°F) intensifies umami with rich foods, while chilled sake (50-55°F) pairs with light dishes." }
                                ].map((f, i) => (
                                    <details key={i} className="group bg-warm-ivory rounded-xl">
                                        <summary className="p-5 cursor-pointer font-semibold flex justify-between">{f.q}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                        <div className="px-5 pb-5 text-charcoal/80">{f.a}</div>
                                    </details>
                                ))}
                            </div>

                            <div className="mt-12">
                                <ProTip variant="chef">
                                    <strong>Sake tasting tip:</strong> New to sake? Start with a sake flight at Jinbeh's <Link href="/bar" className="text-accent-red hover:underline">full bar</Link>—our bartenders will walk you through 3-4 varieties from light to bold. The best beginner sake is Honjozo (smooth, approachable) or Nigori (sweet, creamy). During <Link href="/happy-hour" className="text-accent-red hover:underline">happy hour</Link>, try a sake bomb for a fun introduction. Ask about our seasonal selections—they change quarterly!
                                </ProTip>

                                <PillarCTA type="reservations" />
                                <LocationCTA location="both" />
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="sake-alcohol-strength" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
