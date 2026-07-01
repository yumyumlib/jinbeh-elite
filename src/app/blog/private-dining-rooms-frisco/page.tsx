import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
    title: "Private Dining Rooms Frisco TX: Hibachi & Sushi Groups | Jinbeh",
    description:
        "Private dining and group event hosting at Jinbeh Frisco — hibachi tables for groups, semi-private setups for parties, near Stonebriar. Family-owned since 1988.",
    keywords: [
        "private dining rooms frisco",
        "private dining frisco tx",
        "private hibachi frisco",
        "group dining frisco",
        "private dinner frisco",
        "private dining near stonebriar",
        "frisco private dining restaurants",
        "private event venue frisco",
        "rehearsal dinner frisco restaurant",
        "small wedding dinner frisco",
        "corporate private dining frisco",
        "private hibachi room frisco",
        "frisco restaurants private rooms",
    ],
    openGraph: {
        title: "Private Dining Rooms Frisco TX | Jinbeh",
        description: "Private hibachi and sushi dining for groups at Jinbeh Frisco, near Stonebriar. Birthdays, rehearsal dinners, corporate events.",
        url: "https://jinbeh.com/blog/private-dining-rooms-frisco",
        images: [{ url: "https://jinbeh.com/images/hero/jinbeh-hibachi-chef-fire-show-mobile-1500.webp", width: 1200, height: 630, alt: "Private dining at Jinbeh Frisco — hibachi tables and group dining setup near Stonebriar" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Private Dining Rooms Frisco TX | Jinbeh", description: "Private hibachi and sushi dining for groups at Jinbeh Frisco." },
    alternates: { canonical: "https://jinbeh.com/blog/private-dining-rooms-frisco" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Private Dining Rooms Frisco TX: Hibachi & Sushi Groups",
    description: "Private dining and group event hosting at Jinbeh Frisco — hibachi for groups, semi-private setups, booking process, and what works for which event.",
    image: "https://jinbeh.com/images/hero/jinbeh-hibachi-chef-fire-show-mobile-1500.webp",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/private-dining-rooms-frisco" },
};

const faqs = [
    { question: "Does Jinbeh Frisco have a private dining room?", answer: "Jinbeh Frisco at 2693 Preston Rd offers private dining and group event setups. The most-requested format is a reserved hibachi table for the full group — each hibachi table seats 7-8 guests around a teppanyaki grill, so a group of 14-16 can take two adjacent tables, and larger groups can take multiple tables in a section. For more enclosed private setups, call (214) 619-1200 to discuss options for your group." },
    { question: "How many people can Jinbeh Frisco accommodate for private dining?", answer: "Group sizes from 8 to 40+ are routine at Jinbeh Frisco. Small groups (8-16) take 1-2 adjacent hibachi tables. Mid-sized groups (17-30) take 3-4 hibachi tables with corresponding chefs. Larger events (30+) need additional coordination — call us directly so we can plan table layout, chef coverage, and service timing." },
    { question: "What kinds of events does Jinbeh Frisco host for private dining?", answer: "Common events: milestone birthdays (40th, 50th, 60th, 70th), Sweet 16s and quinceañeras, anniversary dinners, rehearsal dinners, corporate client dinners, team celebrations, holiday parties, retirement dinners, and graduation celebrations. The hibachi format works particularly well for groups where the meal needs to feel like an event." },
    { question: "How do I book private dining at Jinbeh Frisco?", answer: "For groups under 10, reserve through OpenTable on our website. For groups of 10 or more, call (214) 619-1200 directly so we can plan table arrangements, chef coverage, and special requests. Mention the occasion when you book. Lead time: 2-4 weeks for typical group events, 4-8 weeks for weddings and rehearsal dinners, longer for December holiday weekends." },
    { question: "Can we customize the menu for private dining at Jinbeh Frisco?", answer: "Yes. For larger group bookings we can pre-set a menu — limited choices to streamline service for the kitchen and a single bill for the host. This works well for corporate dinners and weddings. For more casual group events, guests order from the full menu individually. Pre-set menus typically include hibachi protein choice, sushi appetizer, soup, salad, and dessert." },
    { question: "Does Jinbeh Frisco host rehearsal dinners?", answer: "Yes. Rehearsal dinners are a regular event at Jinbeh Frisco. A typical rehearsal dinner books 2-3 adjacent hibachi tables, pre-sets a menu, and includes a sushi appetizer course before the tableside cooking begins. Lead time: 4-8 weeks ahead of the wedding date." },
    { question: "Can we have a bring-your-own cake or special touches?", answer: "Outside cakes are welcome at Jinbeh Frisco — bring it sealed and we'll plate it when you're ready. Special touches like flowers, place cards, photos on tables, and small decorations are fine. Coordinate larger setups (full table linens, balloon arrangements, AV) with us in advance so we know what arrives before the guests do." },
    { question: "Is there a minimum spend for private dining at Jinbeh Frisco?", answer: "For larger group bookings (typically 20+) we may discuss a food-and-beverage minimum that aligns with the table reservation and chef coverage. For smaller groups, no minimum — you just book the tables you need. Call (214) 619-1200 to discuss specifics for your event." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Local Guides", item: "https://jinbeh.com/blog/category/local-guide" },
    { "@type": "ListItem", position: 4, name: "Private Dining Rooms Frisco TX" },
]};

export default function PrivateDiningFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Private Dining Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/hero/jinbeh-hibachi-chef-fire-show-mobile-1500.webp" alt="Private Dining Rooms Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/private-dining" className="hover:text-white">Private Dining</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">🏮 Frisco Private Dining</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Private Dining Rooms Frisco TX: Hibachi &amp; Sushi for Groups</h1>
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
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Private dining at Jinbeh Frisco works differently than a typical restaurant private room.</strong> The hibachi format is the star &mdash; instead of a quiet enclosed space, you get a reserved set of teppanyaki tables where the chef performs for your group only. The meal IS the entertainment, and groups from 8 to 40 can be configured into the right table arrangement.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">For groups that want enclosed-room privacy with quiet conversation, the sushi bar side of the restaurant is the alternative. Or call us directly to discuss what configuration works for your specific group size and event style.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;A reserved set of hibachi tables, the chefs only working your group, the room volume controlled because we&apos;re only seating your party in that section &mdash; that&apos;s the move for milestone birthdays and rehearsal dinners.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Group sizes and table arrangements</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>8-16 guests:</strong> 1-2 adjacent hibachi tables. One or two chefs perform parallel shows. Easiest configuration; book 2-3 weeks ahead</li>
                                        <li><strong>17-30 guests:</strong> 3-4 hibachi tables in the same section. Chef shows happen close together; food comes out in waves. Book 3-4 weeks ahead</li>
                                        <li><strong>30-50 guests:</strong> Multiple hibachi tables across a larger section, with coordinated chef timing. Pre-set menu recommended to streamline service. 4-6 weeks ahead</li>
                                        <li><strong>50+ guests:</strong> Possible with significant lead time and pre-coordination. Call us to discuss the specific event and we&apos;ll talk through what configuration works</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Events Jinbeh Frisco hosts for private dining</h2>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Milestone birthdays</h3>
                                    <p className="text-charcoal/80 mb-4">40th, 50th, 60th, 70th. Sweet 16s and quinceañeras. The hibachi format makes the celebration feel built-in. Birthday guest gets the chef-and-server acknowledgment at the table.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Rehearsal dinners &amp; bridal showers</h3>
                                    <p className="text-charcoal/80 mb-4">A typical rehearsal dinner: 18-30 guests, 2-3 adjacent hibachi tables, a sushi appetizer course before the chef arrives, pre-set menu for streamlined service, single bill at the end. Bridal showers work similarly &mdash; often smaller (12-20), often during a Saturday lunch seating.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Corporate dinners &amp; client meetings</h3>
                                    <p className="text-charcoal/80 mb-4">For impressing out-of-town clients or hosting a senior team dinner, the hibachi format does something a typical steakhouse can&apos;t &mdash; it turns the meal into a shared experience. Pre-set menus with premium proteins (filet, lobster, scallops) and a sushi appetizer course are the most-requested setup.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Anniversary dinners &amp; family gatherings</h3>
                                    <p className="text-charcoal/80 mb-4">Multi-generation family dinners (8-20 guests) often book one or two hibachi tables. Grandparents who&apos;ve been to Jinbeh since the early days enjoy showing their grandkids the onion volcano they remember from their own anniversaries.</p>

                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mt-8 mb-3">Holiday parties &amp; retirements</h3>
                                    <p className="text-charcoal/80 mb-4">December books up early &mdash; office holiday parties wanting Japanese cuisine. Retirement dinners run year-round, usually 15-30 guests, with a pre-set menu and a roast-style speech moment built into the seating arrangement.</p>

                                    <ProTip variant="insider"><strong>For groups of 20+:</strong> always call us directly at (214) 619-1200 rather than booking through OpenTable. We can talk through your event in 10 minutes, plan the table layout, coordinate chef coverage, and pre-set a menu that fits your group&apos;s budget and dietary mix. The conversation saves day-of headaches.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Booking process</h2>
                                    <ol className="list-decimal pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Call (214) 619-1200</strong> with your date, time, headcount, and event type</li>
                                        <li><strong>We confirm availability</strong> and walk through table configurations</li>
                                        <li><strong>Discuss menu options</strong> &mdash; pre-set or order from the menu, dietary needs, appetizer course, dessert</li>
                                        <li><strong>Coordinate special touches</strong> &mdash; outside cake, decorations, photos, AV needs</li>
                                        <li><strong>Confirm headcount 48 hours before</strong> so the kitchen plans chef coverage</li>
                                        <li><strong>Arrive on time</strong> &mdash; the chef show starts 10-15 minutes after seating</li>
                                    </ol>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Why Jinbeh Frisco for private dining</h2>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li><strong>Hibachi format built for groups</strong> &mdash; tables of 7-8 are the standard, not the exception</li>
                                        <li><strong>Family-owned since 1988</strong> &mdash; consistent service approach across decades</li>
                                        <li><strong>Near Stonebriar Centre</strong> &mdash; easy parking, central Frisco location</li>
                                        <li><strong>Full sushi bar plus hibachi</strong> &mdash; appetizer-to-entrée range without switching venues</li>
                                        <li><strong>Outside cake welcome</strong> &mdash; bring your own for birthdays and milestones</li>
                                        <li><strong>Pre-set menus available</strong> for streamlined service with larger groups</li>
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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Book a private dining event at Jinbeh Frisco</h3>
                                        <p className="text-warm-ivory/80 mb-4">For groups under 10, reserve online. For 10+ guests, call us directly so we can plan the tables and menu.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/private-dining" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Private Dining Page</Link>
                                            <Link href="/reservations" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Reserve a Table</Link>
                                            <CallLink href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 619-1200</CallLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-deep-indigo text-white rounded-3xl p-6">
                                    <div className="text-xs uppercase tracking-widest text-soft-gold mb-2">Group sizes</div>
                                    <ul className="space-y-2 text-sm text-white/90">
                                        <li>8-16: 1-2 hibachi tables</li>
                                        <li>17-30: 3-4 tables</li>
                                        <li>30-50: section booking</li>
                                        <li>50+: call us</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related at Jinbeh</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/private-dining" className="text-accent-red hover:underline">Private dining main page</Link></li>
                                        <li><Link href="/celebrations/rehearsal-dinner" className="text-accent-red hover:underline">Rehearsal dinners</Link></li>
                                        <li><Link href="/celebrations/corporate-events" className="text-accent-red hover:underline">Corporate events</Link></li>
                                        <li><Link href="/blog/hibachi-birthday-party-frisco" className="text-accent-red hover:underline">Hibachi birthdays Frisco</Link></li>
                                        <li><Link href="/blog/restaurants-private-rooms" className="text-accent-red hover:underline">Restaurants with private rooms</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="private-dining-rooms-frisco" />
            <div className="h-12" />
        </main>
    );
}
