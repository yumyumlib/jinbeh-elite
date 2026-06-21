import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { ProTip } from "@/components/ArticleEnhancements";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: "Hibachi Birthday Party Frisco TX: How to Plan It | Jinbeh",
    description:
        "How to plan a hibachi birthday party in Frisco, TX at Jinbeh — booking advice, group sizes, kids' menus, the chef show, and what to expect on the night. Family-owned since 1988.",
    keywords: [
        "hibachi birthday party frisco",
        "hibachi birthday frisco tx",
        "birthday hibachi frisco",
        "kids hibachi birthday frisco",
        "frisco birthday dinner restaurant",
        "japanese restaurant birthday frisco",
        "hibachi for kids birthday near stonebriar",
        "hibachi party for adults frisco",
        "best birthday restaurant frisco",
        "teppanyaki birthday party frisco",
        "family birthday dinner frisco",
        "birthday restaurant near stonebriar",
        "hibachi birthday celebration frisco",
    ],
    openGraph: {
        title: "Hibachi Birthday Party Frisco TX | Jinbeh",
        description: "Plan a hibachi birthday party at Jinbeh Frisco — chef show, group seating, kids' menu, and reservations near Stonebriar.",
        url: "https://jinbeh.com/blog/hibachi-birthday-party-frisco",
        images: [{ url: "https://jinbeh.com/images/photoshoot/hibachi-flame-action.jpg", width: 1200, height: 630, alt: "Hibachi birthday party at Jinbeh Frisco TX — chef performing onion volcano for celebration table" }],
        type: "article", siteName: "Jinbeh Japanese Restaurant",
    },
    twitter: { card: "summary_large_image", title: "Hibachi Birthday Party Frisco TX | Jinbeh", description: "Plan a hibachi birthday at Jinbeh Frisco — chef show, group seating, kids' menu." },
    alternates: { canonical: "https://jinbeh.com/blog/hibachi-birthday-party-frisco" },
};

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Hibachi Birthday Party Frisco TX: How to Plan It",
    description: "A practical guide to planning a hibachi birthday party at Jinbeh Frisco — group sizes, booking timeline, kids' menus, chef show, and night-of expectations.",
    image: "https://jinbeh.com/images/photoshoot/hibachi-flame-action.jpg",
    datePublished: "2026-05-12", dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", url: "https://jinbeh.com" },
    publisher: { "@type": "Organization", name: "Jinbeh Japanese Restaurant", logo: { "@type": "ImageObject", url: "https://jinbeh.com/images/logos/JinbehLogo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jinbeh.com/blog/hibachi-birthday-party-frisco" },
};

const faqs = [
    { question: "Is Jinbeh Frisco a good place for a hibachi birthday party?", answer: "Jinbeh Frisco has been hosting birthday parties since 1988. The tableside hibachi format is built for celebrations — the chef performs knife tricks, the famous onion volcano, and the fire show right at your table. Hibachi tables seat 7-8 guests around a shared teppanyaki grill, so a family birthday or a small friend group shares one chef. For larger parties, we use multiple hibachi tables in parallel." },
    { question: "How do I book a hibachi birthday party at Jinbeh Frisco?", answer: "Reserve through OpenTable on our website, or call (214) 619-1200. Mention 'birthday' when you book so we can flag the reservation. For weekend dinner reservations and larger groups, book 2-4 weeks ahead. For smaller weeknight celebrations, 1-2 weeks is usually fine." },
    { question: "How many people fit at one hibachi table at Jinbeh?", answer: "Each hibachi table seats 7-8 guests around the teppanyaki grill with one chef cooking for the whole group. For birthday parties of 12-16, we use two adjacent tables with two chefs (the show happens at both at once). For 20+ guest parties, contact us about additional table arrangements." },
    { question: "Is Jinbeh Frisco kid-friendly for birthday parties?", answer: "Yes. Hibachi is built for families — kids love the chef show. We offer a dedicated Kids Menu with hibachi chicken and steak portions sized for younger diners. Kids also tend to be the loudest fans of the onion volcano and the egg-toss trick." },
    { question: "Does Jinbeh do anything special for the birthday guest?", answer: "Yes. Birthday guests get a celebration at the table — the chef and servers acknowledge the birthday during the meal. Mention you're celebrating when you make the reservation and again when you sit down so the kitchen and chef are ready. Bringing a cake from outside is welcome." },
    { question: "What's a typical hibachi birthday dinner like at Jinbeh Frisco?", answer: "Your party arrives, gets seated around the teppanyaki grill, and the chef arrives 10-15 minutes later. Soup and salad come first while the chef preps. The chef then performs the show while cooking your proteins, fried rice, and vegetables. Total dinner time is usually 75-100 minutes from seating to dessert. Wine, sake, and Japanese beer are available from the bar." },
    { question: "Can I host an adult birthday party at Jinbeh Frisco?", answer: "Yes. Adult birthdays and milestone celebrations are common at Jinbeh — 30th, 40th, 50th, surprise parties, friend group dinners. Adults get the same hibachi show, plus access to the sushi bar, sake menu, Japanese whiskey, and our happy hour (Monday-Friday 5-6:30 PM with $4 draft, $5 sake, $6 wine). For private feel, book an off-peak weeknight or ask about our private dining setup." },
    { question: "What about birthday parties of 20+ guests?", answer: "For groups of 20+, contact us at (214) 619-1200 to discuss table arrangements. We can run multiple hibachi tables in parallel or use our private dining area. Larger groups need 3-4 weeks of lead time to coordinate enough chefs and ensure smooth service. Bring-your-own birthday cake is welcome." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
    { "@type": "ListItem", position: 3, name: "Celebrations", item: "https://jinbeh.com/celebrations" },
    { "@type": "ListItem", position: 4, name: "Hibachi Birthday Party Frisco" },
]};

export default function HibachiBirthdayPartyFriscoPost() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
            <div className="container mx-auto max-w-6xl px-4 lg:px-6">
                <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Hibachi Birthday Party Frisco" }]} />
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[55vh] min-h-[460px] flex items-end overflow-hidden">
                <Image src="/images/photoshoot/hibachi-flame-action.jpg" alt="Hibachi Birthday Party Frisco at Jinbeh Frisco Japanese restaurant" fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
                        <Link href="/celebrations" className="hover:text-white">Celebrations</Link>
                    </nav>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">🎂 Frisco Birthday Planning</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">Hibachi Birthday Party Frisco TX: How to Plan It</h1>
                    <div className="flex flex-wrap items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By The Jinbeh Family</span><span>·</span><span>May 2026</span><span>·</span><span>7 min read</span>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8"><strong>Hibachi was built for birthdays.</strong> The shared table format puts the family or friend group around one grill. The chef arrives and the show starts &mdash; knife tricks, the onion volcano, the egg-toss-into-the-hat, the precision sear on every protein. The birthday guest is in the front row of their own dinner party. The food is hot, the room is loud, and the kids are screaming with delight 15 minutes in.</p>

                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">This is the planning guide for a hibachi birthday party at Jinbeh Frisco. We&apos;ve been hosting birthdays at 2693 Preston Rd near Stonebriar Centre since 1988. Here&apos;s how to book it right.</p>

                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 border-l-4 border-accent-red rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">&ldquo;Mention birthday twice: when you reserve and when you sit down. Both times. That&apos;s how the chef and server know to make it special.&rdquo;</p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">&mdash; The Jinbeh Family</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Group size and table planning</h2>
                                    <p className="text-charcoal/80 mb-4">Each hibachi table at Jinbeh Frisco seats 7-8 guests around a shared teppanyaki grill. One chef cooks for the whole table. The size determines the planning:</p>

                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>4-8 guests:</strong> One hibachi table, one chef. The easiest book &mdash; mid-week reservations are usually available with 1-2 weeks of notice</li>
                                        <li><strong>9-16 guests:</strong> Two adjacent hibachi tables, two chefs running parallel shows. Coordinate the timing so the food comes out close together. Reserve 2-3 weeks ahead</li>
                                        <li><strong>17-24 guests:</strong> Three hibachi tables. Possible but needs coordination; call us directly at (214) 619-1200 rather than booking through OpenTable so we can talk through the layout</li>
                                        <li><strong>25+ guests:</strong> Multiple parallel tables or our private dining setup. Plan 3-4 weeks ahead; we&apos;ll work with you on the seating arrangement and timing</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Kids&apos; birthday parties</h2>
                                    <p className="text-charcoal/80 mb-4">Hibachi is one of the few restaurants where kids actually want to be the center of attention. The fire show is the draw. We see a steady stream of 7th, 8th, 10th, and 12th birthdays at our Frisco tables.</p>
                                    <p className="text-charcoal/80 mb-4">Practical notes for kids&apos; parties:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-6">
                                        <li>Our Kids Menu has hibachi chicken and steak portions sized for younger diners</li>
                                        <li>Hibachi-friendly age starts around 4-5 (younger toddlers find the fire show a lot)</li>
                                        <li>Cake from outside is welcome &mdash; bring it sealed and we&apos;ll plate it when you&apos;re ready</li>
                                        <li>Booking the early-evening seating (5-6 PM) means less ambient noise and a calmer chef pace</li>
                                        <li>For a Sweet 16, a quinceañera, or any teen milestone, our hibachi tables hold 7-8, so combining tables works for larger friend groups</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Adult birthday parties</h2>
                                    <p className="text-charcoal/80 mb-4">Adult birthdays at Jinbeh Frisco run a different rhythm. The sushi bar, the sake list, the Japanese whiskey selection, and our happy hour (Monday-Friday 5-6:30 PM, $4 draft, $5 sake, $6 wine) become part of the night. Some adult parties skip the hibachi table entirely and book the sushi bar two-tops for a quieter date-night style celebration.</p>
                                    <p className="text-charcoal/80 mb-4">For surprise parties, we recommend a private-table booking and a coordination call so our hosts know not to greet the guest of honor with &ldquo;happy birthday&rdquo; at the door. For milestone birthdays (30th, 40th, 50th, 60th, 70th), the hibachi show plus a sushi appetizer course is the most-requested setup.</p>

                                    <ProTip variant="insider"><strong>The big-birthday move:</strong> book a hibachi table for the close family and friends, plus a sashimi sampler and a couple of signature rolls (Sunrise, Lobster Volcano, Spider) for the table as appetizers before the chef arrives. That way you&apos;re eating from the moment you sit down, and the hibachi show becomes the second act of the meal.</ProTip>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">What a Jinbeh birthday dinner actually looks like</h2>
                                    <p className="text-charcoal/80 mb-4">Your reservation is at 6:30. You arrive 6:25. The host walks your party to a hibachi table. The server takes drink orders. Soup (clear broth) and salad (with our ginger dressing) come within 10 minutes. The chef arrives 5-10 minutes after the salads are out.</p>
                                    <p className="text-charcoal/80 mb-4">The chef introduces themselves, asks about allergies and dietary needs, and starts the show. Cook order is usually: vegetables, fried rice, then proteins. The whole performance is 35-45 minutes from chef arrival to last plate. Dessert is offered after the chef wraps up. Birthday guest gets a celebration moment in there somewhere &mdash; we vary it so it doesn&apos;t feel scripted.</p>
                                    <p className="text-charcoal/80 mb-4">Total dinner time from arrival to leaving: usually 90-120 minutes for a typical party. Larger groups (16+) sometimes run a bit longer because the kitchen sends out the proteins in waves.</p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Booking checklist</h2>
                                    <ul className="list-disc pl-6 space-y-3 text-charcoal/80 mb-6">
                                        <li><strong>Reserve through OpenTable</strong> at jinbeh.com, or call (214) 619-1200 for larger groups or special arrangements</li>
                                        <li><strong>Mention birthday in the reservation notes</strong> so the kitchen flags it</li>
                                        <li><strong>Communicate dietary needs upfront</strong> &mdash; gluten-free, vegetarian, peanut, shellfish allergies are routine</li>
                                        <li><strong>Confirm guest count 48 hours before</strong> the reservation so we plan chef coverage</li>
                                        <li><strong>Bring your own birthday cake</strong> if you want one &mdash; we&apos;ll plate it for the table</li>
                                        <li><strong>For parties over 10 guests</strong>, call us directly rather than booking through OpenTable</li>
                                    </ul>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-4">Where Jinbeh Frisco is</h2>
                                    <p className="text-charcoal/80 mb-4"><strong>Jinbeh Frisco:</strong> 2693 Preston Rd Suite 1040, Frisco, TX 75034. Near Stonebriar Centre, with free parking directly outside. Minutes from Legacy West, The Star, and Dr Pepper Ballpark. Reservations: (214) 619-1200.</p>

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
                                        <h3 className="font-heading text-2xl font-bold mb-3">Book a hibachi birthday at Jinbeh Frisco</h3>
                                        <p className="text-warm-ivory/80 mb-4">Reserve online or call us. Bigger party? Call directly so we can plan the tables and timing.</p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link href="/frisco" className="btn btn-primary bg-accent-red hover:bg-accent-red/90">Jinbeh Frisco</Link>
                                            <Link href="/reservations" className="btn btn-primary bg-deep-indigo hover:bg-deep-indigo/90">Reserve a Table</Link>
                                            <a href="tel:2146191200" className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal">Call (214) 619-1200</a>
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
                                        <li>Hibachi tables seat 7-8</li>
                                        <li>Book 1-3 weeks ahead</li>
                                        <li>Larger groups (20+): call us</li>
                                        <li>Kids Menu available</li>
                                        <li>Outside cake welcome</li>
                                        <li>Mention birthday twice</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-3xl shadow-md p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">Related celebrations</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li><Link href="/celebrations/birthday" className="text-accent-red hover:underline">Birthday celebrations</Link></li>
                                        <li><Link href="/blog/hibachi-birthday-party-ideas" className="text-accent-red hover:underline">Hibachi birthday ideas</Link></li>
                                        <li><Link href="/blog/birthday-celebration-restaurants" className="text-accent-red hover:underline">Birthday restaurants</Link></li>
                                        <li><Link href="/blog/free-birthday-food-deals" className="text-accent-red hover:underline">Free birthday food deals</Link></li>
                                        <li><Link href="/frisco/kids-menu" className="text-accent-red hover:underline">Frisco Kids Menu</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RelatedArticles currentSlug="hibachi-birthday-party-frisco" />
            <div className="h-12" />
        </main>
    );
}
