import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";
import { Accordion } from "@/components/ui/accordion";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
    title: "Top Restaurants for Large Group Dining: Best Big Party Venues | Jinbeh",
    description:
        "Discover the top restaurants that serve large parties with ease, offering big group dining, seamless reservations, and family-friendly eateries perfect for celebrations.",
    keywords: [
        "large group dining",
        "restaurants for big groups",
        "party venues restaurants",
        "group dining frisco",
        "large party restaurants",
        "family friendly group dining",
        "jinbeh group reservations",
    ],
    openGraph: {
        title: "Top Restaurants for Large Group Dining: Best Big Party Venues",
        description:
            "Find the perfect restaurant for your large group. Seamless reservations, diverse menus, and professional service for celebrations and gatherings.",
        images: ["/images/blog/9-C060324-6484.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/large-group-dining",
    },
};

const faqs = [
    { question: "What are benefits of dining out with large groups?", answer: "Welcome to the table! No cooking. No cleanup. Diverse menu options. Professional service. Festive atmosphere. Restaurants experienced with groups ensure smooth coordination." },
    { question: "How far in advance should I book for a large group?", answer: "Book 2-4 weeks ahead. This lets us reserve space and coordinate with our kitchen. Larger groups (50+) should book earlier if possible." },
    { question: "Does Jinbeh accommodate large group reservations?", answer: "Absolutely! Hibachi tables are perfect for parties. We offer flexible seating, custom menus, and professional coordination. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224." },
    { question: "What makes Jinbeh great for group dining?", answer: "Hibachi means dinner and a show! Our chefs entertain while cooking. Communal seating builds group energy. We handle 15+ guests with ease and warmth." },
    { question: "Can we customize menus for our group?", answer: "Yes! We work with groups on menus. Let us know dietary needs and preferences. We treat every guest like family and accommodate most requests." }
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top Restaurants for Large Group Dining: Best Big Party Venues",
    description:
        "Comprehensive guide to restaurants that excel at serving large groups with diverse menus and professional service.",
    image: "https://jinbeh.com/images/blog/9-C060324-6484.jpg",
    datePublished: "2026-01-25",
    dateModified: "2026-03-11",
    author: {
        "@type": "Organization",
        name: "Jinbeh Japanese Restaurant",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are the benefits of dining out with large groups?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Dining out with large groups offers convenience, eliminates cooking and cleanup stress, provides diverse menu options for different tastes, delivers professional service management, and creates a festive atmosphere. Restaurants experienced with large groups ensure smooth coordination and enjoyable experiences.",
            },
        },
        {
            "@type": "Question",
            name: "How far in advance should I book for a large group?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For large groups, we recommend booking 2-4 weeks in advance. This allows the restaurant to reserve adequate space, coordinate with the kitchen, and ensure quality service. Larger parties (50+ guests) should book even earlier when possible.",
            },
        },
        {
            "@type": "Question",
            name: "Does Jinbeh accommodate large group reservations?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Jinbeh specializes in large group dining with hibachi tables ideal for parties. We offer flexible seating, customized menus, and professional coordination. Contact us for reservations for groups of 15 or more.",
            },
        },
        {
            "@type": "Question",
            name: "What should I look for when choosing a restaurant for group dining?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Consider capacity, menu variety to accommodate dietary preferences, reservation policies, location convenience, parking availability, professional service capabilities, and space layout. Top venues like Jinbeh excel at all these factors.",
            },
        },
        {
            "@type": "Question",
            name: "Can we customize menus for our group?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Jinbeh works with groups on menus. Let us know dietary needs and preferences in advance, and we can create a streamlined ordering experience. We accommodate most requests and treat every guest like family.",
            },
        },
        {
            "@type": "Question",
            name: "What group size is too large for a restaurant?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most restaurants can handle groups up to 20-30. Jinbeh regularly hosts 50+ guests across multiple hibachi tables. For very large events (100+), consider our catering services which bring Jinbeh's cuisine to your location.",
            },
        },
    ],
};


const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Celebrations & Events", "item": "https://jinbeh.com/celebrations" },
        { "@type": "ListItem", "position": 4, "name": "Large Group Dining: Best Restaurants for Parties" },
    ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Restaurants for Large Group Dining: Best Big Party Venues",
  "numberOfItems": 14,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Diverse Menu Options"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Professional Service"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Zero Preparation Stress"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Festive Ambiance"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Why Choose Jinbeh for Group Dining?"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Perfect for Various Occasions"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Group Dining Excellence at Jinbeh"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "1. Capacity & Space Layout"
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "2. Menu Variety & Dietary Flexibility"
    },
    {
      "@type": "ListItem",
      "position": 10,
      "name": "3. Reservation & Coordination Policies"
    },
    {
      "@type": "ListItem",
      "position": 11,
      "name": "4. Service Quality & Professional Staff"
    },
    {
      "@type": "ListItem",
      "position": 12,
      "name": "5. Location & Parking"
    },
    {
      "@type": "ListItem",
      "position": 13,
      "name": "6. Entertainment & Ambiance Options"
    },
    {
      "@type": "ListItem",
      "position": 14,
      "name": "7. Budget & Group Packages"
    }
  ]
};

export default function LargeGroupDining() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Large Group Dining" }]} />
        </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/9-C060324-6484.jpg"
                    alt="Large group dining party at restaurant"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/celebrations" className="hover:text-white">Events Overview</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        👥 Group Dining
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Top Restaurants for Large Group Dining
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 25, 2026</span>
                        <span>•</span>
                        <span>10 min read</span>
                    </div>
                </div>
            
              <p className="text-charcoal/80 text-sm mt-6">
                See also: <Link href="/blog/thanksgiving-dining-guide" className="text-accent-red hover:underline">Thanksgiving dining guide</Link>
              </p>
</section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                                        <strong>Organizing a group dinner doesn't have to be stressful.</strong> When you select a restaurant experienced in handling large parties, your gathering becomes smooth, enjoyable, and memorable. These establishments are equipped with the necessary facilities to host big groups, providing ample seating, diverse menus, and often private or semi-private dining options tailored to your specific needs.
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "The best group dining experiences happen when logistics are seamless and everyone feels welcomed. At venues like Jinbeh, large parties aren't just accommodated—they're celebrated with professional coordination and exceptional food."
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">— Event Planning Expert</span>
                                    </div>

                                    <div className="my-10 rounded-2xl overflow-hidden relative aspect-[16/9] shadow-lg max-w-3xl mx-auto">
                                        <Image
                                            src="/images/instagram/sushi-feast-flatlay.jpg"
                                            alt="Large sushi feast perfect for group dining"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎉 Why Group Dining at Restaurants Makes Sense
                                    </h2>

                                    <DidYouKnow
                                        fact="Group dining at restaurants grew 35% between 2022-2025, with parties of 8+ now accounting for 18% of all restaurant revenue. Interactive dining formats like hibachi and teppanyaki are the #1 most-requested format for group events, because they combine entertainment with dining. The average group dining party spends 60% more per person than individual diners."
                                        source="National Restaurant Association Group Dining Report"
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🍽️</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Diverse Menu Options</h3>
                                            <p className="text-charcoal/70 text-sm">With extensive menus, everyone in your party finds dishes they love. Vegetarians, vegans, and those with allergies have plenty of choices. Check out our <Link href="/menu" className="text-accent-red hover:underline">full menu</Link> to see the options available.</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">👨‍🍳</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Professional Service</h3>
                                            <p className="text-charcoal/70 text-sm">Trained staff manage the logistics seamlessly. From coordinated ordering to timely service, professionals ensure a smooth experience without stress.</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">😌</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Zero Preparation Stress</h3>
                                            <p className="text-charcoal/70 text-sm">Forget cooking, shopping, and cleanup. Restaurants handle all the work, allowing you to focus on enjoying your guests' company.</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">✨</span>
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Festive Ambiance</h3>
                                            <p className="text-charcoal/70 text-sm">Restaurants create atmospheres designed for celebration. Good lighting, music, and space layout enhance the group dining experience naturally.</p>
                                        </div>
                                    </div>

                                    <div className="my-10 rounded-2xl overflow-hidden relative aspect-[16/9] shadow-lg max-w-3xl mx-auto">
                                        <Image
                                            src="/images/instagram/crab-pinwheel-roll.jpg"
                                            alt="Crab pinwheel roll available for large group event menus"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🏯 Jinbeh: Your Premier Large Group Dining Destination
                                    </h2>

                                    <p>
                                        Jinbeh specializes in large group dining, making it the ideal choice for celebrations, team gatherings, and family reunions. Our experience managing groups of 15 to 50+ guests ensures that every member of your party has an exceptional experience.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">
                                        Why Choose Jinbeh for Group Dining?
                                    </h3>

                                    <ul className="space-y-3 mb-8">
                                        <li className="flex gap-3">
                                            <span className="text-soft-gold flex-shrink-0 text-xl">✓</span>
                                            <span><strong>Hibachi Tables Perfect for Groups:</strong> Our hibachi seating accommodates multiple guests around a single chef, creating an interactive, entertaining dining experience.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-soft-gold flex-shrink-0 text-xl">✓</span>
                                            <span><strong>Flexible Seating Arrangements:</strong> From hibachi setups to traditional tables, we configure spaces for your group's comfort and interaction.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-soft-gold flex-shrink-0 text-xl">✓</span>
                                            <span><strong>Customized Group Menus:</strong> Work with our culinary team to create experiences matching your group's preferences and dietary needs.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-soft-gold flex-shrink-0 text-xl">✓</span>
                                            <span><strong>Entertainment & Performance:</strong> Our hibachi chefs provide entertainment, making meals memorable events rather than just dinners.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-soft-gold flex-shrink-0 text-xl">✓</span>
                                            <span><strong>Dedicated Coordination:</strong> Our team handles reservations, menu planning, and day-of management for a stress-free experience.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-soft-gold flex-shrink-0 text-xl">✓</span>
                                            <span><strong>Multiple Locations:</strong> Groups in Frisco and Lewisville both benefit from our professional group dining services.</span>
                                        </li>
                                    </ul>

                                    <div className="my-10 rounded-2xl overflow-hidden relative aspect-[16/9] shadow-lg max-w-3xl mx-auto">
                                        <Image
                                            src="/images/instagram/mochi-desserts.jpg"
                                            alt="Mochi ice cream desserts perfect for group celebrations"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">
                                        Perfect for Various Occasions
                                    </h3>

                                    <p>
                                        <strong>Corporate Gatherings & Team Celebrations:</strong> Impress colleagues and clients with Jinbeh's professional service and exceptional cuisine. The interactive hibachi experience builds camaraderie.
                                    </p>

                                    <p>
                                        <strong>Family Reunions & Birthday Parties:</strong> Create lasting memories with family gatherings. Kids and adults alike enjoy the entertainment, and our diverse menu satisfies all ages. Learn more about planning a <Link href="/blog/hibachi-birthday-party-ideas" className="text-accent-red hover:underline">hibachi birthday party</Link>.
                                    </p>

                                    <p>
                                        <strong>Sports Team Dinners:</strong> Celebrate victories or bond as a team over delicious Japanese cuisine and entertaining hibachi performances.
                                    </p>

                                    <p>
                                        <strong>School & Organization Events:</strong> Fundraising dinners, end-of-year celebrations, and alumni gatherings all benefit from Jinbeh's group expertise.
                                    </p>
                                </div>

                                {/* Jinbeh Feature Section */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/blog/11-C060324-6544.jpg"
                                                alt="Jinbeh hibachi chef serving large group"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                👥 Group Dining Excellence at Jinbeh
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                From intimate gatherings of 15 to celebrations of 50+ guests, Jinbeh delivers seamless coordination, exceptional food, and unforgettable experiences. Our hibachi concept is perfect for group dining.
                                            </p>
                                            <ul className="space-y-3 mb-6">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>4.4-star Google rating from satisfied group dining customers</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Hibachi entertainment and interactive cooking experiences</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Customizable menus accommodating all dietary preferences</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Professional coordination from booking to service</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Both Frisco and Lewisville locations for convenience</span>
                                                </li>
                                            </ul>
                                            <Link
                                                href="/reservations"
                                                className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                                            >
                                                Make a reservation →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎯 Key Factors When Selecting a Group Dining Restaurant
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        1. Capacity & Space Layout
                                    </h3>

                                    <p>
                                        Ensure the restaurant can comfortably accommodate your entire group. Consider not just table space but also room for easy movement, mingling, and accessibility for all guests. Restaurants like Jinbeh with varied seating options (hibachi, traditional tables, <Link href="/private-dining" className="text-accent-red hover:underline">private dining</Link> areas) offer flexibility.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        2. Menu Variety & Dietary Flexibility
                                    </h3>

                                    <p>
                                        A diverse menu is crucial. Look for restaurants offering vegetarian, vegan, gluten-free, and allergy-friendly options. Jinbeh's extensive Japanese menu accommodates various dietary preferences, ensuring all guests find options they enjoy.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        3. Reservation & Coordination Policies
                                    </h3>

                                    <p>
                                        Confirm advance booking requirements, deposit policies, and group-specific coordination. Top restaurants assign dedicated coordinators for large parties to ensure smooth planning and execution.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        4. Service Quality & Professional Staff
                                    </h3>

                                    <p>
                                        Staff trained in group dining understand timing, anticipate needs, and manage logistics seamlessly. Professional service transforms a group meal into a coordinated, enjoyable experience.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        5. Location & Parking
                                    </h3>

                                    <p>
                                        Choose a location convenient for your guests with adequate parking. Accessibility impacts attendance and satisfaction, particularly important for large gatherings.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        6. Entertainment & Ambiance Options
                                    </h3>

                                    <p>
                                        Some restaurants offer entertainment, music, or interactive dining. Jinbeh's hibachi performances add excitement and create memorable experiences beyond typical restaurant meals.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        7. Budget & Group Packages
                                    </h3>

                                    <p>
                                        Understand per-person costs and whether group packages are available. Many restaurants offer fixed-price menus for large parties, simplifying budgeting and ensuring clear cost expectations.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📍 Visit Jinbeh for Your Large Group Dining
                                    </h2>

                                    <p>
                                        Jinbeh's two convenient locations serve the greater Dallas-Fort Worth area:
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        <li><strong><Link href="/frisco" className="text-accent-red hover:underline">Visit us in Frisco</Link>:</strong> Located near Stonebriar Centre, perfect for North Texas groups and corporate events.</li>
                                        <li><strong><Link href="/lewisville" className="text-accent-red hover:underline">Visit us in Lewisville</Link>:</strong> Off I-35E near Vista Ridge Mall, conveniently accessible for family reunions and celebrations.</li>
                                    </ul>

                                    <p>
                                        Whether you're planning a corporate gathering, family reunion, or celebration, Jinbeh is equipped to make your large group dining experience seamless and memorable. We also offer <Link href="/catering" className="text-accent-red hover:underline">catering services</Link> for private events.
                                    </p>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">
                                        ❓ Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-4">
                                        <Accordion items={faqs.map((faq: any) => ({ title: faq.question, content: faq.answer }))} />
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <ProTip variant="insider">
                                        <strong>Group dining insider tip:</strong> At Jinbeh, call 2-3 weeks ahead for groups of 15+. Request adjacent hibachi tables so your group can interact during the performance. For the best value, book weekday evenings or lunch. Ask about our group packages—we offer streamlined ordering for large parties where everyone picks a protein and everything else is included. <Link href="/reservations" className="text-accent-red hover:underline">Make a reservation →</Link>
                                    </ProTip>

                                    <PillarCTA type="reservations" />
                                    <LocationCTA location="both" />
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="large-group-dining" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
