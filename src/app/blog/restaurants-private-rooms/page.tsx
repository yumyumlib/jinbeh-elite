import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Restaurants with Private Rooms Near Me: Exclusive Dining Venues | Jinbeh",
    description:
        "Discover top restaurants that have private rooms for any event. From corporate gatherings to intimate dinners, find private dining venues offering customizable experiences.",
    keywords: [
        "restaurants with private rooms",
        "private dining rooms near me",
        "private dining frisco",
        "corporate event venues",
        "intimate dinner venues",
        "event dining spaces",
        "jinbeh private dining",
    ],
    openGraph: {
        title: "Best Restaurants with Private Rooms Near Me",
        description:
            "Find exclusive private dining rooms perfect for corporate events, celebrations, and intimate gatherings. Professional service and customizable menus.",
        images: ["/images/blog/12-C060324-6551.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Restaurants with Private Rooms Near Me",
    description:
        "Comprehensive guide to restaurants with private dining rooms for exclusive events and intimate gatherings.",
    image: "https://jinbeh.com/images/blog/12-C060324-6551.jpg",
    datePublished: "2026-01-18",
    dateModified: "2026-01-30",
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
            name: "What are the benefits of private dining rooms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Private dining offers exclusivity, privacy for focused conversations, personalized service, customized menus, and tailored ambiance. It's ideal for business meetings, celebrations, and intimate gatherings where you want a controlled, premium experience.",
            },
        },
        {
            "@type": "Question",
            name: "Does Jinbeh have private dining rooms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Jinbeh offers private dining rooms at both Frisco and Lewisville locations. Our spaces are perfect for corporate events, celebrations, and intimate dinners. We provide personalized service, customized menus, and professional setup.",
            },
        },
        {
            "@type": "Question",
            name: "How many people can private dining rooms accommodate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh's private dining rooms range from intimate spaces for small gatherings to larger rooms accommodating 20-50+ guests. Contact us to discuss your specific group size and needs.",
            },
        },
        {
            "@type": "Question",
            name: "What should I look for in a private dining venue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Consider room capacity, menu variety, location convenience, reservation policies, customization options, AV capabilities, and professionalism of service. Top venues like Jinbeh provide flexible options and dedicated staff.",
            },
        },
    ],
};

export default function RestaurantsPrivateRooms() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src="/images/blog/12-C060324-6551.jpg"
                    alt="Private dining room at upscale restaurant"
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
                        <Link href="/blog?category=celebrations" className="hover:text-white">Events</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-deep-indigo mb-4">
                        🎉 Private Dining
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Best Restaurants with Private Rooms
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 18, 2026</span>
                        <span>•</span>
                        <span>9 min read</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                                        <strong>Finding the perfect restaurant with a private dining room can transform any gathering into a memorable event.</strong> The charm of private dining lies in its ability to offer a bespoke experience, tailored to the needs and preferences of your group. Whether you're planning a corporate meeting, celebrating a milestone, or enjoying a quiet dinner with family and friends, private dining provides the intimacy and control that elevate any occasion.
                                    </p>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Private dining removes the ordinary restaurant experience and replaces it with something truly special. It's about creating an exclusive atmosphere where your group feels valued and the details are crafted for you."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— Private Dining Specialist</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💎 The Benefits of Private Dining
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Exclusivity & Privacy
                                    </h3>

                                    <p>
                                        Private dining rooms provide a sanctuary from the bustling main dining area. This exclusivity ensures that your group can converse freely without the noise and distractions of a bustling restaurant. Whether discussing business matters or sharing intimate moments, privacy enhances the experience significantly.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Personalized Service
                                    </h3>

                                    <p>
                                        Private dining often comes with dedicated staff who cater specifically to your group's needs. From customized menus to timing each course perfectly, professional service teams ensure every detail aligns with your vision.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Customizable Menus
                                    </h3>

                                    <p>
                                        Top restaurants with private dining rooms offer flexibility in menu design. Whether you want a multi-course tasting menu, family-style service, or a specific culinary theme, establishments can accommodate diverse preferences and dietary needs within the same gathering.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Enhanced Ambiance
                                    </h3>

                                    <p>
                                        Private rooms can be tailored in terms of lighting, decor, and entertainment. Some venues offer AV capabilities for presentations, while others provide ambient music or entertainment options.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🎯</span>
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Focused Conversations</h4>
                                            <p className="text-charcoal/70 text-sm">Ideal for business meetings and strategic discussions</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">🎉</span>
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Celebrations</h4>
                                            <p className="text-charcoal/70 text-sm">Perfect for birthdays, anniversaries, and milestones</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">👥</span>
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Team Building</h4>
                                            <p className="text-charcoal/70 text-sm">Create meaningful connections with customized experiences</p>
                                        </div>
                                        <div className="bg-warm-ivory rounded-2xl p-6">
                                            <span className="text-3xl mb-3 block">💝</span>
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-2">Intimate Gatherings</h4>
                                            <p className="text-charcoal/70 text-sm">Family dinners and close friend celebrations</p>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🏯 Jinbeh's Private Dining Excellence
                                    </h2>

                                    <p>
                                        Jinbeh offers exquisite Japanese cuisine in a refined setting, making it an ideal choice for private events. Our private dining rooms combine the sophistication of fine dining with the warmth of Japanese hospitality, creating memorable experiences for every occasion.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Why Choose Jinbeh for Private Dining?
                                    </h3>

                                    <ul className="space-y-3 mb-8">
                                        <li><strong>Authentic Japanese Cuisine:</strong> Meticulously crafted dishes using premium ingredients and traditional techniques. Explore our <Link href="/menu" className="text-accent-red hover:underline">full menu</Link>.</li>
                                        <li><strong>Hibachi Entertainment:</strong> Optional teppanyaki performances that elevate celebrations and special occasions</li>
                                        <li><strong>Flexible Spaces:</strong> Private rooms accommodating groups from 8 to 50+ guests</li>
                                        <li><strong>Customized Menus:</strong> Work with our culinary team to create dining experiences matching your vision</li>
                                        <li><strong>Professional Service:</strong> Dedicated staff trained in private event management and hospitality</li>
                                        <li><strong>Multiple Locations:</strong> Conveniently situated in both <Link href="/locations/frisco" className="text-accent-red hover:underline">Frisco</Link> and <Link href="/locations/lewisville" className="text-accent-red hover:underline">Lewisville</Link></li>
                                    </ul>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Perfect for Corporate Events
                                    </h3>

                                    <p>
                                        Corporate clients choose Jinbeh for client entertainment, executive dinners, and team celebrations. Our combination of sophisticated cuisine, professional service, and elegant ambiance creates the ideal setting for making business connections and recognizing achievements.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Ideal for Personal Celebrations
                                    </h3>

                                    <p>
                                        Whether it's an anniversary dinner, milestone <Link href="/blog/hibachi-birthday-party-ideas" className="text-accent-red hover:underline">birthday celebration</Link>, or family reunion, Jinbeh's private rooms provide an intimate yet impressive setting. Our hibachi performances add an element of excitement and entertainment that makes celebrations truly special.
                                    </p>
                                </div>

                                {/* Jinbeh Feature Section */}
                                <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 text-white my-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                                            <Image
                                                src="/images/blog/10-C060324-6501.jpg"
                                                alt="Jinbeh private dining event"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold mb-4">
                                                🎉 Private Dining at Jinbeh
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                Make your event unforgettable with Jinbeh's private dining rooms and exceptional Japanese cuisine. Perfect for groups of all sizes.
                                            </p>
                                            <ul className="space-y-3 mb-6">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Private rooms for intimate to large gatherings</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Optional hibachi performances and entertainment</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Customized menus and full bar service</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Dedicated event coordinator and professional staff</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-soft-gold flex-shrink-0 mt-1">✓</span>
                                                    <span>Flexible packages for any budget</span>
                                                </li>
                                            </ul>
                                            <Link
                                                href="/private-dining"
                                                className="inline-block bg-white text-accent-red px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                                            >
                                                Book Your Private Event →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎯 Selecting the Right Private Dining Venue
                                    </h2>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Capacity Considerations
                                    </h3>

                                    <p>
                                        Ensure the venue can comfortably accommodate your entire group with room to spare. Consider not just head count but also the layout—adequate spacing between tables and easy movement throughout the space enhances the experience.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Menu Flexibility
                                    </h3>

                                    <p>
                                        A top private dining venue offers diverse menu options to accommodate various dietary preferences and restrictions. This inclusivity ensures all guests have options they can enjoy comfortably.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Service Quality
                                    </h3>

                                    <p>
                                        Professional staff trained in private event service understand timing, anticipate needs, and handle logistics seamlessly. This allows you to focus on enjoying your event rather than managing details.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Location & Accessibility
                                    </h3>

                                    <p>
                                        Choose a venue convenient for your guests with adequate parking or easy public transportation access. For important events, accessibility can impact attendance and satisfaction.
                                    </p>

                                    <h3 className="text-xl font-heading font-semibold text-charcoal mt-8 mb-4">
                                        Reservation & Cancellation Policies
                                    </h3>

                                    <p>
                                        Understand deposit requirements, cancellation policies, and any minimum spend obligations. Clear communication upfront prevents misunderstandings and ensures a smooth planning process.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📍 Convenient Locations for Private Dining
                                    </h2>

                                    <p>
                                        Jinbeh offers private dining at two premium locations designed for your convenience:
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        <li><strong><Link href="/locations/frisco" className="text-accent-red hover:underline">Frisco Location</Link>:</strong> Conveniently situated near Stonebriar Centre, perfect for North Frisco residents and businesses.</li>
                                        <li><strong><Link href="/locations/lewisville" className="text-accent-red hover:underline">Lewisville Location</Link>:</strong> Accessible off I-35E near Vista Ridge Mall, ideal for Lewisville community gatherings.</li>
                                    </ul>

                                    <p>
                                        Both locations feature private dining capabilities with dedicated event coordinators, flexible menus, and professional service. Learn more about <Link href="/blog/group-dining-venues" className="text-accent-red hover:underline">group dining</Link> or <Link href="/reservations" className="text-accent-red hover:underline">make a reservation</Link> today.
                                    </p>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">
                                        ❓ Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What are the main benefits of private dining?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Private dining offers exclusivity and privacy, personalized service, customized menus, enhanced ambiance, and focused conversation. It's ideal for business events, celebrations, and gatherings where you want a premium, controlled experience tailored to your specific needs.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                How far in advance should I book a private dining room?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    For optimal availability and planning time, we recommend booking private dining at least 2-4 weeks in advance. For larger groups or special occasions, booking a month or more ahead allows for better customization and menu planning.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can Jinbeh's private rooms accommodate hibachi performances?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Absolutely! Many of our private dining options include hibachi stations where skilled chefs prepare your meal with entertainment and precision. This adds an interactive, memorable element to your private event. Contact us to discuss availability.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What size groups can Jinbeh accommodate for private dining?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Jinbeh accommodates groups from 8-10 to 50+ guests for <Link href="/catering" className="text-accent-red hover:underline">private dining and catering services</Link>. It's a celebration! Welcome to the table. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 to discuss your specific needs.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Can you customize menus for private events?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Absolutely! Fresh and flavorful! We create customized menus for every private event. Dietary accommodations, preferences, and special requests are handled with care. We treat every guest like family.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                <RelatedArticles currentSlug="restaurants-private-rooms" />

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-deep-indigo to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                                        🎉 Plan Your Private Event at Jinbeh
                                    </h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Make your next gathering truly special with Jinbeh's private dining rooms, exceptional cuisine, and professional service. Let us help create an unforgettable experience.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/private-dining"
                                            className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                                        >
                                            Book Private Dining
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="text-lg font-heading font-bold text-charcoal mb-6">Related Articles</h3>
                                <div className="space-y-4">
                                    <Link href="/blog/fine-dining-frisco" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Fine dining" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">🍽️ Dining</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Fine Dining Frisco</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/large-group-dining" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/9-C060324-6484.jpg" alt="Group dining" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">👥 Groups</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Large Group Dining</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/top-frisco-restaurants" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/8-C060324-6462.jpg" alt="Top restaurants" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-accent-red">📍 Locations</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Top Frisco Restaurants</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=celebrations" className="px-3 py-1 rounded-full text-sm font-medium bg-deep-indigo/10 text-deep-indigo hover:bg-deep-indigo/20 transition-colors">🎉 Events</Link>
                                        <Link href="/blog?category=local-guides" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal transition-colors">🍽️ Dining</Link>
                                        <Link href="/blog?category=celebrations" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal transition-colors">📍 Venues</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
