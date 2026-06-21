import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Japanese Whiskey in Frisco TX: Pours at Jinbeh | Frisco & Lewisville",
    description: "Where to drink Japanese whiskey in Frisco — Jinbeh's bar program pours Japanese whiskey by the glass alongside sake, cocktails, and the sushi bar. Family-owned since 1988.",
    keywords: ["japanese whiskey frisco","japanese whiskey bar frisco","japanese whiskey lewisville","yamazaki frisco","hibiki frisco","japanese whiskey near me","sake and whiskey frisco","japanese bar program dfw","japanese whiskey list frisco","whiskey bar near stonebriar","drink japanese whiskey frisco","best japanese whiskey dfw","japanese whiskey tasting dfw"],
    openGraph: { title: "Japanese Whiskey in Frisco TX | Jinbeh", description: "Japanese whiskey by the glass at Jinbeh Frisco and Lewisville. Pair with sushi, hibachi, or a post-dinner pour.", url: "https://jinbeh.com/blog/japanese-whiskey-bar-frisco", images: [{ url: "https://jinbeh.com/images/interior/FriscoLocation_Bar_Front.jpg", width: 1200, height: 630, alt: "Japanese whiskey at Jinbeh Frisco — bar program with whiskey, sake, and craft cocktails" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Japanese Whiskey in Frisco TX | Jinbeh", description: "Japanese whiskey at Jinbeh Frisco and Lewisville." },
    alternates: { canonical: "https://jinbeh.com/blog/japanese-whiskey-bar-frisco" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Whiskey in Frisco TX: Pours at Jinbeh", description: "A guide to drinking Japanese whiskey at Jinbeh Frisco and Lewisville — categories, pairings, and how it fits in our bar program.", image: "https://jinbeh.com/images/interior/FriscoLocation_Bar_Front.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/japanese-whiskey-bar-frisco" } };

const faqs = [
    { question: "Does Jinbeh Frisco serve Japanese whiskey?", answer: "Yes. Jinbeh Frisco pours Japanese whiskey by the glass at our bar. The selection covers core Japanese whiskey categories — single malts, blends, and grain whiskeys — sized to give guests options without overcomplicating the menu. Pour sizes are typically 1 oz neat. Ask the bartender what's available that night, since allocations on certain bottles run in and out." },
    { question: "What's the difference between Japanese whiskey and Scotch?", answer: "Japanese whiskey is heavily influenced by Scotch whisky traditions — barrel aging, malted barley, similar production process. The key differences: Japanese whiskey tends toward more refined, lighter, more delicate profiles compared to peatier Scotch styles. Japanese distillers often use mizunara oak casks, which impart sandalwood and incense notes you don't get from Scotch. Both can be sipped neat, but Japanese whiskey often skews more cocktail-friendly." },
    { question: "How should I drink Japanese whiskey?", answer: "For first-time tasters: neat, in a small glass, no ice, room temperature. Take a small sip, let it sit on your tongue, exhale through your nose to pick up the aromas. After the first taste, a single small ice cube (large rocks work better than small cubes) softens the alcohol slightly. For more casual drinking, the highball — Japanese whiskey topped with chilled sparkling water in a tall glass — is the standard Tokyo bar order." },
    { question: "What Japanese whiskey pairs with sushi or hibachi at Jinbeh?", answer: "For lighter sushi and sashimi, a lighter Japanese whiskey neat or on a single rock works as a between-courses sip. For richer hibachi proteins (filet, ribeye, lobster), a fuller-bodied whiskey neat or in a highball complements the meal without overwhelming the food. The pairing pattern is the opposite of sake (where lighter sake goes with lighter food) — whiskey works as a digestif or transitional sip, not the dominant beverage of the meal." },
    { question: "Does Jinbeh serve a Japanese highball?", answer: "Yes. The highball — Japanese whiskey with chilled sparkling water in a tall glass over ice — is on our cocktail menu. It's the most common way Japanese whiskey is drunk in Japan and pairs especially well with grilled foods and tempura." },
    { question: "Is Japanese whiskey at Jinbeh expensive?", answer: "Japanese whiskey pours run higher than well drinks because the global market for Japanese whiskey has tightened significantly over the last decade. A neat pour at Jinbeh typically runs $14-$30+ depending on the specific bottle. Premium aged single malts (when available) can run higher. The highball cocktail is a lower-cost way to drink Japanese whiskey if you want to taste it without committing to a premium neat pour." },
    { question: "Where in Jinbeh is the whiskey bar?", answer: "Jinbeh's whiskey program lives at the bar in both Frisco (2693 Preston Rd) and Lewisville (2440 S Stemmons Fwy). Sit at the bar, ask the bartender what's pouring, and you can taste through the available selections. Happy hour (Mon-Fri 5-6:30 PM) covers draft, sake, and wine but typically not premium whiskey — those pours stay at standard menu pricing." },
    { question: "Can I order Japanese whiskey to pair with my Frisco hibachi dinner?", answer: "Yes. Many Jinbeh Frisco guests order Japanese whiskey neat or in a highball as the after-dinner drink, sitting at their hibachi table after the chef wraps up. The bartender will deliver to your table or you can move to the bar for the digestif. For larger groups, a bottle of mid-range Japanese whiskey to share at the table works for milestone birthdays and anniversaries." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Beverages", item: "https://jinbeh.com/blog/category/beverages" },
    { "@type": "ListItem", position: 4, name: "Japanese Whiskey Frisco" },
]};

export default function JapaneseWhiskeyFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Japanese Whiskey Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/interior/FriscoLocation_Bar_Front.jpg" alt="Japanese Whiskey Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/beverages" className="hover:text-white">Beverages</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">🥃 Frisco Japanese Whiskey</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Japanese Whiskey in Frisco TX: Pours at Jinbeh</h1>
                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span><span>·</span><span>May 2026</span><span>·</span><span>6 min read</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Japanese whiskey has had a strange decade.</strong> A global allocation crunch made certain bottles nearly impossible to find at any price. Bars that used to stock five or six Japanese whiskeys cut back to two. The good news for Frisco-area drinkers: enough quality Japanese whiskey still moves through DFW that a real Japanese restaurant can keep a working selection at the bar.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh Frisco pours Japanese whiskey by the glass at our bar. Selection rotates with what we can source. This guide covers how to order, what to pair it with, and how Japanese whiskey fits with the rest of our bar program.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Ask the bartender what&apos;s pouring tonight. Japanese whiskey allocations change. The good bottles come and go. The bartender knows what&apos;s on the shelf right now &mdash; menu doesn&apos;t always.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Japanese whiskey categories</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Single malt</strong> &mdash; made from 100% malted barley at a single distillery. The most refined and complex category. Aged in oak barrels for 8-25+ years</li>
                                        <li><strong>Blended whiskey</strong> &mdash; combines single malt with grain whiskey. Smoother, more approachable, often a better cocktail base</li>
                                        <li><strong>Grain whiskey</strong> &mdash; lighter, more neutral, often used in highballs and cocktails</li>
                                        <li><strong>Mizunara oak-aged</strong> &mdash; aged in Japanese mizunara oak instead of European or American oak. Produces sandalwood and incense notes</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">How to drink Japanese whiskey</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Neat</h3>
                                    <p className="text-charcoal/80 mb-4">Pour 1-1.5 oz into a small whiskey glass. No ice, no water. Take a small sip first, let it sit on your tongue, exhale through your nose to pick up the aromatic notes. For premium aged whiskey, this is how you get the full experience.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">On a single rock</h3>
                                    <p className="text-charcoal/80 mb-4">One large ice cube in the glass. Lowers the temperature slightly, softens the alcohol burn, opens up the aromatics. Works better than several small cubes that melt fast and dilute too quickly.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Highball</h3>
                                    <p className="text-charcoal/80 mb-4">The Tokyo bar staple. Japanese whiskey, chilled sparkling water, tall glass over ice. Bubbly, refreshing, lower alcohol concentration per sip. Pairs especially well with grilled foods and tempura. The casual everyday way to drink Japanese whiskey.</p>

                                    <ProTip variant="insider"><strong>For a date night digestif:</strong> finish your hibachi or sushi dinner, then move to the bar for one neat pour of Japanese whiskey. Single rock optional. 15-minute conversation while the meal settles. It&apos;s the move that turns a 90-minute dinner into a memorable evening.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Pairings at Jinbeh Frisco</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">With sushi or sashimi</h3>
                                    <p className="text-charcoal/80 mb-4">Light, refined Japanese whiskey works between bites or after the meal. Avoid pairing premium aged whiskey with delicate sashimi during the meal &mdash; the whiskey overwhelms the fish. Save the neat pour for after the sushi course.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">With hibachi</h3>
                                    <p className="text-charcoal/80 mb-4">Hibachi proteins are bigger flavors. Fuller-bodied Japanese whiskey holds up to ribeye, filet, and lobster. The highball is the right call during the meal; a neat pour works as a digestif after the chef wraps up.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">With tempura or fried appetizers</h3>
                                    <p className="text-charcoal/80 mb-4">The highball is the classic pairing. Sparkling water cuts through the fried richness; whiskey adds body to the sip. The pairing works almost mechanically &mdash; few drinks complement fried food this cleanly.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">The rest of Jinbeh&apos;s bar program</h2>
                                    <p className="text-charcoal/80 mb-4">Japanese whiskey is one part of our bar selection. Also available:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Sake</strong> &mdash; junmai, junmai ginjo, junmai daiginjo, honjozo, nigori. Available by the glass, flight, or bottle. See <Link href="/blog/best-sake-bar-dfw" className="text-accent-red hover:underline">our sake bar guide</Link></li>
                                        <li><strong>Craft cocktails</strong> &mdash; Lychee Martini, Tokyo Mule, Jinbeh Punch, sake bombs</li>
                                        <li><strong>Wine</strong> &mdash; standard wine program with reds, whites, sparkling</li>
                                        <li><strong>Draft beer</strong> &mdash; Japanese (Sapporo, Asahi, Kirin) and domestic options</li>
                                        <li><strong>Happy hour</strong> &mdash; Mon-Fri 5-6:30 PM, $4 draft, $5 sake, $6 wine. Bar-area only</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Where Jinbeh is in Frisco</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>Jinbeh Frisco:</strong> 2693 Preston Rd Suite 1040, near Stonebriar Centre. The bar is inside the restaurant; sit at the bar for the whiskey program. Phone (214) 619-1200.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">Frequently asked questions</h2>
                                    <div className="space-y-6">
                                        {faqs.map((faq, i) => (
                                            <div key={i} className="bg-warm-ivory rounded-2xl p-6">
                                                <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{faq.question}</h3>
                                                <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-charcoal text-warm-ivory rounded-3xl p-8 mt-10">
                                        <h3 className="font-heading text-2xl font-bold mb-3">Try the whiskey at Jinbeh Frisco</h3>
                                        <p className="text-warm-ivory/80 mb-4">Sit at the bar. Ask what&apos;s pouring tonight. Order it neat first, then maybe a highball.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/blog/best-sake-bar-dfw" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Sake Bar Guide</Link>
                                            <Link href="/happy-hour" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Happy Hour</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">How to drink it</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li>First time: neat, no ice</li>
                                        <li>Second time: single large rock</li>
                                        <li>Casual: highball with sparkling water</li>
                                        <li>Pairing: digestif after the meal</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related drink guides</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/japanese-whiskey-guide" className="text-accent-red hover:underline">Japanese whiskey guide</Link></li>
                                        <li><Link href="/blog/yamazaki-whiskey-guide" className="text-accent-red hover:underline">Yamazaki whiskey</Link></li>
                                        <li><Link href="/blog/best-sake-bar-dfw" className="text-accent-red hover:underline">Sake bar DFW</Link></li>
                                        <li><Link href="/blog/japanese-cocktails" className="text-accent-red hover:underline">Japanese cocktails</Link></li>
                                        <li><Link href="/happy-hour" className="text-accent-red hover:underline">Happy hour menu</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="japanese-whiskey-bar-frisco" />
            <div className="h-12" />
        </main>
    );
}
