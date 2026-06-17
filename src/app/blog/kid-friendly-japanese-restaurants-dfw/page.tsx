import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Kid-Friendly Japanese Restaurants in DFW: Jinbeh Frisco & Lewisville",
    description: "Kid-friendly Japanese restaurants in DFW — Jinbeh in Frisco and Lewisville offers hibachi chef shows, a dedicated Kids Menu, and a family-friendly atmosphere since 1988.",
    keywords: ["kid friendly japanese restaurants dfw","kid friendly hibachi frisco","kid friendly hibachi lewisville","family restaurants frisco","family restaurants lewisville","japanese restaurant kids menu dfw","hibachi for kids dfw","family-friendly sushi dfw","kid friendly restaurants frisco","kid friendly restaurants lewisville","japanese restaurants with kids menu","best kids restaurant frisco","best kids restaurant lewisville"],
    openGraph: { title: "Kid-Friendly Japanese Restaurants in DFW | Jinbeh", description: "Kid-friendly Japanese dining in Frisco and Lewisville — hibachi shows, kids menu, family-friendly.", url: "https://jinbeh.com/blog/kid-friendly-japanese-restaurants-dfw", images: [{ url: "https://jinbeh.com/images/food/OnionVolcanoDemo.jpg", width: 1200, height: 630, alt: "Kid-friendly Japanese restaurants DFW — Jinbeh hibachi chef performing onion volcano for family" }], type: "article", siteName: "Jinbeh Japanese Restaurant" },
    twitter: { card: "summary_large_image", title: "Kid-Friendly Japanese Restaurants in DFW | Jinbeh", description: "Hibachi shows, kids menus, family-friendly dining at Jinbeh." },
    alternates: { canonical: "https://jinbeh.com/blog/kid-friendly-japanese-restaurants-dfw" },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Kid-Friendly Japanese Restaurants in DFW", description: "A guide to kid-friendly Japanese dining in DFW — hibachi shows, dedicated Kids Menus, and family-friendly atmosphere at Jinbeh Frisco and Lewisville.", image: "https://jinbeh.com/images/food/OnionVolcanoDemo.jpg", datePublished: "2026-05-12", dateModified: "2026-05-12", author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" }, publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/kid-friendly-japanese-restaurants-dfw" } };

const faqs = [
    { question: "Is Jinbeh kid-friendly?", answer: "Yes. Jinbeh has been welcoming families since 1988 at both our Frisco and Lewisville locations. The hibachi format is built around shared tables of 7-8, and kids consistently love the chef show — knife tricks, the famous onion volcano, the egg-toss-into-the-hat, the precision searing. We offer a dedicated Kids Menu with hibachi chicken and steak portions sized for younger diners." },
    { question: "What's the youngest age that does well at a hibachi table?", answer: "Most kids 4 and up enjoy hibachi. The fire show is dramatic and loud, which can be intense for toddlers under 3, especially if they're sensitive to sudden noise. Some 3-year-olds love it; others find it overwhelming. For families with toddlers, sitting at the sushi bar or a regular table (not hibachi) is the calmer option." },
    { question: "Does Jinbeh have a Kids Menu?", answer: "Yes. Both Frisco and Lewisville have a dedicated Kids Menu with hibachi chicken and hibachi steak portions sized for younger diners. The menu includes the same hibachi experience adults get — chef show, fried rice, vegetables, sauces — at a kid-appropriate price." },
    { question: "Can kids order off the adult sushi menu?", answer: "Yes. Kids who like sushi can order from the full menu. Most-ordered kid sushi: California Roll (cooked crab, kid-friendly), Shrimp Tempura Roll (cooked, easy), and salmon nigiri. Avoid eel rolls (Dragon, Caterpillar) for first-time kid sushi-eaters — eel sauce is sweet but unfamiliar." },
    { question: "How long is a typical hibachi dinner with kids?", answer: "Plan on 75-100 minutes from seating to leaving for a typical hibachi dinner. Faster if you've eaten the salad and soup by the time the chef arrives. Slower for larger groups. For kids who have an early bedtime, book a 5:30 PM seating — chef arrives by 5:45, you're out by 7:15." },
    { question: "Will the loud chef show bother my baby or toddler?", answer: "Possibly. The hibachi chef show involves fire, knife noise, and a loud presentation voice. For families with babies and very young toddlers, the sushi bar side of the restaurant or a regular dining table is the calmer option. Older toddlers (3-4) usually love it but sometimes need a few minutes to warm up." },
    { question: "Do you have high chairs and booster seats?", answer: "Yes. Both locations have high chairs and booster seats available. Just ask when you arrive. The hibachi tables don't always work well with high chairs (the chair height makes the grill view tough), so for very young children, ask the host about a regular table option." },
    { question: "What's the price range for a kid-friendly Jinbeh dinner?", answer: "A typical family-of-four hibachi dinner at Jinbeh (two adults, two kids) runs around $120-$180 depending on protein choices, drinks, and dessert. Kids Menu portions are sized to be filling without overordering. Happy hour pricing (Mon-Fri 5-6:30 PM) helps if you book an early seating." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Kid-Friendly Japanese Restaurants DFW" },
]};

export default function KidFriendlyJapaneseDFWPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Kid-Friendly Japanese DFW" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/food/OnionVolcanoDemo.jpg" alt="Kid-friendly Japanese restaurants DFW — Jinbeh hibachi chef performing onion volcano for family table" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/blog/category/local-guide" className="hover:text-white">Local Guides</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">👨‍👩‍👧 DFW Family Dining</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Kid-Friendly Japanese Restaurants in DFW: Hibachi &amp; Family-Friendly</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Hibachi is one of the few restaurant categories that kids genuinely want to go to.</strong> The fire show, the onion volcano, the chef tossing shrimp into hats &mdash; it&apos;s built-in entertainment. Most other &ldquo;family-friendly&rdquo; restaurants just mean &ldquo;tolerant of kids.&rdquo; Hibachi makes kids the center of attention.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">Jinbeh has been DFW&apos;s family Japanese restaurant since 1988. Two locations &mdash; Frisco at 2693 Preston Rd near Stonebriar, and Lewisville at 2440 S Stemmons Fwy off I-35E. This guide covers what families need to know before booking.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Some families have been celebrating birthdays at the same hibachi table for 20+ years. The kids who screamed at the onion volcano back then are bringing their own kids now.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Why hibachi works for kids</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Live cooking show:</strong> the chef performance is the entertainment, kids can&apos;t look away</li>
                                        <li><strong>Shared table format:</strong> 7-8 seats around one grill, families can sit together</li>
                                        <li><strong>Familiar proteins:</strong> chicken, steak, shrimp, rice, vegetables &mdash; nothing intimidating for picky eaters</li>
                                        <li><strong>Kids Menu portions:</strong> sized for younger appetites, priced for family budgets</li>
                                        <li><strong>The fire show is the magic:</strong> kids talk about it for weeks</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Age guide for hibachi dining</h2>
                                    <div className="overflow-x-auto my-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead><tr className="border-b-2 border-charcoal/20">
                                                <th className="py-3 pr-4 font-heading font-semibold text-charcoal">Age</th>
                                                <th className="py-3 font-heading font-semibold text-charcoal">Hibachi Fit</th>
                                            </tr></thead>
                                            <tbody className="text-charcoal/80">
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Under 3 (toddler/baby)</td><td className="py-3">Skip hibachi, sit at sushi bar or regular table. Fire show too intense</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">3-4</td><td className="py-3">Variable &mdash; some love it, some find it overwhelming. Sit on the end seat for easy exit</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">5-9</td><td className="py-3">Sweet spot. Kids this age live for the chef show</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">10-15</td><td className="py-3">Still love it. Birthday hibachi parties are a regular booking for this age</td></tr>
                                                <tr className="border-b border-charcoal/10"><td className="py-3 pr-4">Teens (16-18)</td><td className="py-3">Sweet 16s, friend group dinners, graduations. The hibachi table becomes social hub</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <ProTip variant="insider"><strong>For a calmer family dinner with toddlers,</strong> sit at the sushi bar or a regular dining table instead of a hibachi table. The food is the same; the noise level is much lower. The chef show comes back as an option when the toddler is older.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What to order for kids at Jinbeh</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Kids hibachi chicken</strong> &mdash; standard kid pick. Comes with rice and vegetables</li>
                                        <li><strong>Kids hibachi steak</strong> &mdash; for kids who eat steak. Same portion size as chicken</li>
                                        <li><strong>Kids hibachi shrimp</strong> &mdash; for the shrimp-loving kid</li>
                                        <li><strong>California Roll from sushi menu</strong> &mdash; cooked crab, kid-friendly</li>
                                        <li><strong>Shrimp Tempura Roll</strong> &mdash; cooked, easy entry to sushi</li>
                                        <li><strong>Edamame</strong> &mdash; universal starter, kids love peeling them</li>
                                        <li><strong>Tempura</strong> &mdash; battered and fried vegetables or shrimp</li>
                                        <li><strong>Mochi ice cream</strong> &mdash; dessert</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Booking tips for family dinners</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Book an early seating (5-6 PM)</strong> for younger kids with earlier bedtimes</li>
                                        <li><strong>Reserve a full hibachi table</strong> for parties of 7-8 to avoid sharing with strangers</li>
                                        <li><strong>Mention &ldquo;family with kids&rdquo;</strong> in the reservation notes so the host plans seating</li>
                                        <li><strong>Bring your own birthday cake</strong> &mdash; we&apos;ll plate it for the table</li>
                                        <li><strong>Ask about the Kids Menu</strong> when you sit down &mdash; not all kids know to ask for it</li>
                                        <li><strong>Sit on the end of the hibachi table</strong> for easy bathroom trips with small kids</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Both Jinbeh locations</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Jinbeh Frisco</strong> &mdash; 2693 Preston Rd Suite 1040, near Stonebriar Centre. Free parking, easy from Plano, McKinney, Allen. (214) 619-1200</li>
                                        <li><strong>Jinbeh Lewisville</strong> &mdash; 2440 S Stemmons Fwy #A, off I-35E near Vista Ridge. Easy from Flower Mound, Highland Village, Carrollton. (214) 488-2224</li>
                                    </ul>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Book a family dinner at Jinbeh</h3>
                                        <p className="text-warm-ivory/80 mb-4">Mention &ldquo;family with kids&rdquo; or &ldquo;birthday&rdquo; in your reservation notes. We&apos;ll plan the seating.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/lewisville" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Jinbeh Lewisville</Link>
                                            <Link href="/frisco/kids-menu" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Kids Menu</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Quick reference</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li>Sweet spot age: 5-15</li>
                                        <li>Toddlers: sushi bar, not hibachi</li>
                                        <li>Dedicated Kids Menu</li>
                                        <li>High chairs available</li>
                                        <li>Bring outside cake</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related at Jinbeh</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/blog/hibachi-birthday-party-frisco" className="text-accent-red hover:underline">Hibachi birthdays Frisco</Link></li>
                                        <li><Link href="/celebrations/family-gatherings" className="text-accent-red hover:underline">Family gatherings</Link></li>
                                        <li><Link href="/blog/unique-kids-birthday-party-places" className="text-accent-red hover:underline">Kids birthday venues</Link></li>
                                        <li><Link href="/frisco/kids-menu" className="text-accent-red hover:underline">Frisco Kids Menu</Link></li>
                                        <li><Link href="/lewisville/kids-menu" className="text-accent-red hover:underline">Lewisville Kids Menu</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="kid-friendly-japanese-restaurants-dfw" />
            <div className="h-12" />
        </main>
    );
}
