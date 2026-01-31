import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Sushi Cooking Classes Near Me | Learn Sushi Making Today",
    description:
        "Discover local sushi cooking classes for beginners and advanced chefs. Learn authentic techniques from skilled instructors. Perfect for couples, groups, and food enthusiasts.",
    keywords: [
        "sushi cooking classes near me",
        "learn to make sushi",
        "sushi classes",
        "sushi making lessons",
        "beginner sushi class",
        "advanced sushi techniques",
    ],
    openGraph: {
        title: "Sushi Cooking Classes Near Me | Learn Today",
        description: "Master the art of sushi making with hands-on classes and expert instruction.",
        images: ["/images/blog/12-C060324-6551.jpg"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sushi Cooking Classes Near Me – Learn Today",
    description: "Comprehensive guide to finding and choosing the best sushi cooking classes in your area.",
    image: "https://jinbeh.com/images/blog/12-C060324-6551.jpg",
    datePublished: "2026-01-30",
    dateModified: "2026-01-30",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What can I learn in a beginner sushi cooking class?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Beginner classes teach fundamentals: preparing sushi rice, selecting and slicing fish, rolling techniques for maki and hand rolls, food safety. You'll learn proper knife skills and authentic Japanese techniques. Welcome to the table!",
            },
        },
        {
            "@type": "Question",
            name: "Are sushi cooking classes good for beginners?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! Classes are designed for beginners. Instructors teach step-by-step with hands-on practice. No prior experience needed. It's a celebration of culinary learning!",
            },
        },
        {
            "@type": "Question",
            name: "What are the benefits of taking sushi cooking classes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Develop culinary skills, gain cultural insight into Japanese cuisine, meet new people, learn about nutrition, and impress friends and family with homemade sushi. Fresh and flavorful results every time!",
            },
        },
        {
            "@type": "Question",
            name: "What should I bring to sushi class?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most classes provide rice, fish, nori, and tools. Wear comfortable clothing and close-toed shoes. Bring a notebook and container for leftovers. We treat every guest like family—just bring your enthusiasm!",
            },
        },
    ],
};

export default function SushiCookingClasses() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/12-C060324-6551.jpg"
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
                        <Link href="/blog?category=cuisine" className="hover:text-white">Guides</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-orange-500 mb-4">
                        🍣 Culinary Arts
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        Sushi Cooking Classes Near Me – Learn Today
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
                                        <strong>Are you passionate about sushi</strong> and eager to learn the art of making it yourself?
                                        Whether you're a curious foodie, a culinary enthusiast, or someone looking for a unique experience,
                                        sushi cooking classes offer hands-on learning with skilled instructors who will guide you through
                                        authentic Japanese techniques. By the end, you'll understand the nuances of different <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline font-semibold">types of sushi</Link> and how to create them at home.
                                    </p>

                                    <div className="bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Learning to make sushi is not just about creating food—it's about understanding
                                            a centuries-old culinary tradition. Our instructors are passionate about sharing this knowledge
                                            with students of all levels."
                                        </p>
                                        <span className="text-sm text-charcoal/60 mt-2 block">— The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎓 Why Take Sushi Cooking Classes?
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Sushi cooking classes are more than just a fun activity. They provide a comprehensive introduction
                                        to authentic Japanese culinary techniques while offering numerous personal benefits.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Benefits of Learning Sushi Making</h3>

                                    <p className="text-charcoal/80 mb-6">
                                        Beyond just mastering technique, learning to make sushi connects you with Japanese culture and culinary traditions. You'll develop an appreciation for quality ingredients, precision, and artistry. Plus, you can explore <Link href="/blog/sake-pairing-guide" className="text-accent-red hover:underline font-semibold">sake pairing</Link> to pair your creations perfectly with beverages.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🎯 Skill Development</h4>
                                        <p className="text-charcoal/70 mb-4">
                                            You'll gain hands-on experience in sushi preparation, learning techniques that take years to master.
                                            From proper knife skills to perfect rice seasoning, every skill builds your culinary confidence.
                                        </p>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🇯🇵 Cultural Insight</h4>
                                        <p className="text-charcoal/70 mb-4">
                                            Sushi is an integral part of Japanese culture. By learning to make sushi, you gain appreciation
                                            for centuries-old traditions, ingredient selection, and the philosophy behind Japanese cuisine.
                                        </p>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h4 className="font-heading font-bold text-lg text-charcoal mb-3">👥 Social Experience</h4>
                                        <p className="text-charcoal/70 mb-4">
                                            Classes often involve group activities, offering a chance to meet new people who share your
                                            interests. It's a fun social experience while learning valuable skills together.
                                        </p>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🥗 Health and Nutrition</h4>
                                        <p className="text-charcoal/70 mb-4">
                                            Sushi can be a healthy meal option, rich in omega-3 fatty acids, vitamins, and minerals. Learn
                                            how to create nutritious sushi rolls tailored to your dietary preferences.
                                        </p>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍱 Types of Sushi Cooking Classes Available
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Local sushi classes vary in style and focus, catering to different interests and skill levels.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Beginner Sushi Classes</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        These introductory classes are perfect for those who are new to sushi making. You'll learn the
                                        fundamentals in a supportive environment where instructors provide step-by-step guidance.
                                    </p>

                                    <p className="text-charcoal/80 mb-6 pl-6 border-l-4 border-orange-500">
                                        <strong>Topics covered:</strong><br/>
                                        • Preparing and seasoning sushi rice<br/>
                                        • Selecting, handling, and slicing fresh fish<br/>
                                        • Rolling techniques for maki rolls<br/>
                                        • Creating hand rolls (temaki)<br/>
                                        • Food safety and hygiene practices<br/>
                                        • Presentation and plating techniques
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Advanced Sushi Lessons</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        For those who have mastered the basics, advanced classes delve into more complex techniques and
                                        creative applications. These courses emphasize precision, artistry, and professional-level skills.
                                    </p>

                                    <p className="text-charcoal/80 mb-6 pl-6 border-l-4 border-orange-500">
                                        <strong>Advanced topics include:</strong><br/>
                                        • Creating intricate specialty rolls<br/>
                                        • Nigiri preparation with perfect proportions<br/>
                                        • Sashimi cutting and presentation<br/>
                                        • Flavor pairing and ingredient selection<br/>
                                        • Professional-grade knife techniques<br/>
                                        • Menu development and business aspects
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎪 What to Expect in a Sushi Class
                                    </h2>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Class Structure</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Most sushi cooking classes follow a structured format. You'll typically arrive early to meet the
                                        instructor and fellow participants. The class begins with an introduction to sushi history and
                                        ingredients. Instructors then demonstrate techniques step-by-step while you follow along.
                                    </p>

                                    <p className="text-charcoal/80 mb-6">
                                        After the demonstration, you'll have hands-on practice time where you'll create your own sushi rolls,
                                        nigiri, or other specialties under the instructor's guidance. Most classes conclude with a tasting session
                                        where you can enjoy your creations and receive feedback from the instructor.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Materials and Tools</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        Most classes provide all necessary materials, including premium sushi rice, fresh fish and seafood,
                                        vegetables, nori (seaweed sheets), and essential tools like bamboo rolling mats and sushi-specific knives.
                                        You'll focus on learning while the venue handles ingredient sourcing and preparation.
                                    </p>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💡 Tips for Choosing the Right Class
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">📚 Check the Instructor's Background</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Look for instructors with authentic Japanese culinary training or extensive sushi-making experience.
                                                Their expertise directly impacts the quality of your learning.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">👥 Consider Class Size</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Smaller classes often provide more personalized attention. Aim for a student-to-instructor ratio that
                                                allows for individual feedback and guidance.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">⏰ Check Duration and Schedule</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Classes range from a few hours to full-day workshops. Choose a duration that fits your learning style
                                                and schedule.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h4 className="font-heading font-bold text-lg text-charcoal mb-3">🔍 Read Reviews</h4>
                                            <p className="text-charcoal/70 text-sm">
                                                Check online reviews and testimonials from past students. Look for feedback about instructor quality,
                                                ingredient freshness, and overall experience.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="Sushi preparation" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/11-C060324-6544.jpg" alt="Sushi rolling" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/12-C060324-6551.jpg" alt="Sushi class" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="relative aspect-square rounded-xl overflow-hidden group">
                                            <Image src="/images/blog/14-C060324-6596.jpg" alt="Finished sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What can I learn in a beginner sushi cooking class?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Beginner classes teach the fundamentals of sushi making including preparing sushi rice,
                                                    selecting and slicing fish, rolling techniques for maki and hand rolls, and food safety
                                                    practices. You'll learn proper knife skills and authentic Japanese techniques.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                Are sushi cooking classes good for beginners?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Absolutely! Most sushi classes are designed with beginners in mind. Instructors teach
                                                    step-by-step techniques and provide hands-on practice. No prior experience is necessary
                                                    to start learning the art of sushi making.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What are the benefits of taking sushi cooking classes?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Benefits include developing valuable culinary skills, gaining cultural insight into Japanese
                                                    cuisine, meeting new people in a social setting, learning about nutrition and healthy eating,
                                                    and the ability to impress friends and family with homemade sushi.
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                                What should I bring to a sushi cooking class?
                                                <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-charcoal/80">
                                                <p>
                                                    Most classes provide all necessary materials including rice, fish, nori, and tools.
                                                    Wear comfortable clothing and close-toed shoes. Some instructors may recommend bringing
                                                    a small notebook to take notes and a container for leftovers.
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-orange-500 to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍣 Ready to Learn Sushi?</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Welcome to the table! Contact Jinbeh to inquire about our sushi making classes. Learn authentic techniques from experienced chefs in a fun, gracious environment.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/reservations" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Inquire About Classes
                                        </Link>
                                        <Link href="/menu" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            View Our Full Menu
                                        </Link>
                                    </div>
                                </div>

                                <RelatedArticles currentSlug="sushi-cooking-classes" />
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                <h3 className="text-lg font-heading font-bold text-charcoal mb-6">Related Articles</h3>
                                <div className="space-y-4">
                                    <Link href="/blog/types-of-sushi" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/12-C060324-6551.jpg" alt="Types of sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-orange-500">🍣 Cuisine</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Types of Sushi Guide</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/how-to-eat-sushi-guide" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/7-C060324-6447.jpg" alt="How to eat sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-deep-indigo">📖 Tips</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">How to Eat Sushi Guide</h4>
                                        </div>
                                    </Link>

                                    <Link href="/blog/beginner-sushi-tips" className="flex gap-4 group">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-warm-ivory">
                                            <Image src="/images/blog/14-C060324-6596.jpg" alt="Beginner tips" fill className="object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-medium text-purple-600">👨‍🎓 Learning</span>
                                            <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">Beginner Sushi Tips</h4>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500">🍣 Cuisine</Link>
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">📖 Guides</Link>
                                        <Link href="/blog?category=cuisine" className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory text-charcoal">👨‍🎓 Learning</Link>
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
