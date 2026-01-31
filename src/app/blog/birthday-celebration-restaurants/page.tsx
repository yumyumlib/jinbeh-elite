import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Top Birthday Celebration Restaurants | Special Moments at Jinbeh",
    description:
        "Discover the best birthday celebration restaurants with unique experiences and special perks. From hibachi shows to themed dining, make your birthday unforgettable at Jinbeh.",
    keywords: [
        "birthday celebration restaurants",
        "restaurants with birthday specials",
        "birthday dining experiences",
        "where to celebrate birthday",
        "birthday restaurant perks",
        "hibachi birthday party",
    ],
    openGraph: {
        title: "Top Birthday Celebration Restaurants | Jinbeh",
        description: "Make your birthday special with dining experiences that go beyond ordinary meals.",
        images: ["/images/blog/25-C060324-6856.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top Birthday Celebration Restaurants for Special Memories",
    description: "Discover the best birthday celebration restaurants with unique experiences and special birthday perks.",
    image: "https://jinbeh.com/images/blog/25-C060324-6856.jpg",
    datePublished: "2026-01-30",
    dateModified: "2026-01-30",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqs = [
    { question: "What makes Jinbeh special for birthday celebrations?", answer: "It's a celebration! Our hibachi chefs perform right before your eyes. We give complimentary birthday desserts and sing special birthday songs. Perfect for group celebrations with interactive fun." },
    { question: "Should I make a reservation for a birthday party?", answer: "Yes, we recommend reservations in advance. It ensures your table, preferred timing, and lets us prepare special touches for your celebration." },
    { question: "Do restaurants offer birthday discounts or free items?", answer: "We offer birthday specials including complimentary desserts and special songs. Call (214) 619-1200 Frisco or (214) 488-2224 Lewisville to confirm offerings." },
    { question: "What atmosphere is best for a birthday celebration?", answer: "It depends on you! Jinbeh offers lively, interactive hibachi shows. We're perfect for families and groups who want dinner and a show for their birthday." },
    { question: "How many people can we have at Jinbeh for a birthday?", answer: "We welcome small groups and large parties. Hibachi tables seat 8-10. Call ahead for larger groups and we'll arrange the perfect setup." }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What makes Jinbeh special for birthday celebrations?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh offers a hibachi show experience with skilled chefs performing entertaining knife skills and fiery tricks right before your eyes. We provide complimentary birthday desserts, special birthday songs, and a communal atmosphere perfect for group celebrations.",
            },
        },
        {
            "@type": "Question",
            name: "Should I make a reservation for a birthday party?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we highly recommend making a reservation in advance, especially for weekends. This ensures you get your preferred seating and time, and allows us to prepare special birthday touches for your celebration.",
            },
        },
        {
            "@type": "Question",
            name: "Do restaurants offer birthday discounts or free items?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Many restaurants, including Jinbeh, offer birthday specials such as complimentary desserts, special birthday songs, and exclusive perks for celebrants. We recommend calling ahead or checking the restaurant's website to confirm their specific birthday offerings.",
            },
        },
        {
            "@type": "Question",
            name: "What atmosphere is best for a birthday celebration?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The best atmosphere depends on your preference. Hibachi restaurants like Jinbeh offer lively, interactive entertainment. Upscale restaurants provide intimate settings. Choose based on whether you prefer entertainment and group interaction or a quiet, romantic dinner.",
            },
        },
    ],
};

export default function BirthdayCelebrationRestaurants() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/25-C060324-6856.jpg"
                >
                    <source src="/videos/LOCAL-LEW-SUSHI-sashimi-carpaccio-prep-chef-hands-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/celebrations" className="hover:text-white">Celebrations</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-accent-red mb-4">
                        🎉 Celebrations
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Top Birthday Celebration Restaurants for Special Memories
                    </h1>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 30, 2026</span>
                        <span>•</span>
                        <span>8 min read</span>
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
                                        <strong>Planning a birthday celebration?</strong> The right restaurant can transform
                                        an ordinary dinner into an unforgettable memory. When choosing where to celebrate,
                                        look for restaurants that offer something extra—complimentary desserts, entertainment,
                                        special songs, and experiences that go beyond ordinary meals.
                                    </p>

                                    <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Your birthday deserves more than just good food. It deserves an experience
                                            that celebrates YOU. Whether you want an interactive hibachi show or an intimate dinner,
                                            we're here to make your special day unforgettable."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎂 Top Restaurants With Birthday Specials
                                    </h2>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Jinbeh</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Jinbeh is a fantastic choice if you're looking for a hibachi show that will dazzle your guests.
                                        Known for its theatrical cooking style, Jinbeh offers a fun and interactive dining experience.
                                        The skilled chefs not only prepare your meal in front of you but also put on a show with their
                                        knife skills and fiery tricks. For birthdays, Jinbeh often provides a complimentary dessert and
                                        a special birthday song. The interactive nature of the dining experience ensures that both you
                                        and your guests are entertained throughout the meal.
                                    </p>
                                    <p className="text-charcoal/80 mb-6">
                                        Beyond the entertainment, Jinbeh provides a communal atmosphere that is perfect for group
                                        celebrations. The shared tables and lively environment encourage interaction among guests, making
                                        it easy for everyone to join in the fun. Whether you're a regular or a first-time visitor, the
                                        staff at Jinbeh go above and beyond to ensure your birthday is celebrated with flair and excitement.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">The Cheesecake Factory</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        The Cheesecake Factory is renowned for its extensive menu and delectable cheesecakes. On your
                                        birthday, the restaurant takes it up a notch by offering a complimentary scoop of ice cream with a
                                        candle. It's a simple yet sweet gesture that makes your dining experience more enjoyable. Plus, with
                                        locations all over, finding a Cheesecake Factory "near me" is often easy, making it a convenient choice
                                        for birthday celebrations.
                                    </p>
                                    <p className="text-charcoal/80 mb-6">
                                        In addition to the birthday perks, The Cheesecake Factory is known for its welcoming atmosphere and
                                        attentive service. The staff is trained to cater to special occasions, ensuring that your birthday is
                                        celebrated with the attention it deserves. The restaurant's vibrant ambiance and diverse menu make it
                                        a versatile choice for any type of birthday celebration.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Olive Garden</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Famous for its Italian-American cuisine, Olive Garden provides a warm and welcoming atmosphere perfect
                                        for family gatherings. For birthdays, the restaurant offers a complimentary dessert and sometimes the
                                        staff will sing you a birthday song. It's an ideal spot for those looking for food places for birthday
                                        celebrations that are both comfortable and festive.
                                    </p>
                                    <p className="text-charcoal/80 mb-6">
                                        Olive Garden's commitment to hospitality is evident in its birthday offerings. The complimentary dessert
                                        and birthday song are thoughtful touches that enhance the celebratory mood. The restaurant's focus on
                                        creating a family-friendly atmosphere ensures that guests of all ages feel welcome and appreciated.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎭 Unique Dining Experiences for Birthdays
                                    </h2>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Rainforest Cafe</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        If you're searching for a unique and adventurous dining experience, Rainforest Cafe is the place to be.
                                        With its jungle-themed decor and animatronic animals, it feels like dining in the heart of the rainforest.
                                        For birthdays, the restaurant offers a special birthday treat and a fun song, making it an exciting choice
                                        for kids and adults alike.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Medieval Times</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        For those who enjoy a bit of history and theatrics, Medieval Times provides an unforgettable experience.
                                        This dinner theater offers a medieval-themed show complete with knights, horses, and jousting. On your
                                        birthday, you'll receive a special shout-out, making it a memorable event. It's perfect for anyone looking
                                        for places to eat on your birthday that also provide entertainment.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Hard Rock Cafe</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Known for its rock and roll theme, Hard Rock Cafe is a great place to celebrate a birthday with music
                                        lovers. The lively atmosphere, delicious food, and extensive collection of music memorabilia make it a
                                        standout choice. For birthdays, Hard Rock Cafe often provides a special dessert and a souvenir photo to
                                        commemorate your visit.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💎 Local Gems for Birthday Celebrations
                                    </h2>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Local Steakhouses</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Many local steakhouses offer birthday specials that include complimentary appetizers or desserts. These
                                        local gems often provide a more intimate setting, perfect for a cozy birthday dinner. Be sure to check
                                        your favorite steakhouse "near me" to see what birthday specials they offer. The combination of delicious
                                        food, attentive service, and personalized birthday offerings makes local steakhouses a popular choice.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Family-Owned Italian Restaurants</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Family-owned Italian restaurants are known for their warm hospitality and delicious homemade dishes.
                                        Many of these restaurants offer a complimentary dessert or a glass of wine for birthdays, adding a
                                        personal touch to your celebration. It's a wonderful option for those looking for where to eat on your
                                        birthday with a homey feel.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ✨ Tips for Choosing the Perfect Birthday Restaurant
                                    </h2>

                                    {/* Tips Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h3 className="font-heading font-bold text-xl text-charcoal mb-3">📋 Check for Birthday Specials</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Before deciding on a restaurant, call ahead or check their website to see what birthday specials they offer.
                                                Some restaurants require you to sign up for their rewards program to receive birthday perks.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h3 className="font-heading font-bold text-xl text-charcoal mb-3">🎵 Consider the Atmosphere</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Think about the kind of atmosphere you want for your birthday. Whether you prefer a lively, entertaining
                                                environment or a quiet, intimate setting, choose accordingly.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h3 className="font-heading font-bold text-xl text-charcoal mb-3">📅 Make Reservations</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Popular restaurants can fill up quickly, especially on weekends. Book your table in advance to ensure
                                                you get a spot on your special day.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h3 className="font-heading font-bold text-xl text-charcoal mb-3">⭐ Check Reviews</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Reading reviews can give you a better idea of what to expect. Look for comments about the birthday
                                                experience to make an informed decision.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Birthday celebration" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/11-C060324-6544.jpg" alt="Hibachi birthday" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/13-C060324-6582.jpg" alt="Birthday dessert" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/14-C060324-6596.jpg" alt="Birthday dinner" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        {faqs.map((faq, i) => (
                                            <details key={i} className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                    {faq.question}
                                                    <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <div className="px-6 pb-6 text-charcoal/80">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-orange-500 to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🎉 Make Your Birthday Unforgettable</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        At Jinbeh, we specialize in turning birthday dinners into memorable experiences. Our hibachi chefs,
                                        interactive atmosphere, and special birthday touches ensure your celebration is one you'll remember forever.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/frisco#reserve" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Reserve Your Birthday Table
                                        </Link>
                                        <Link href="/frisco/menu" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            View Our Menu
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="birthday-celebration-restaurants" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
