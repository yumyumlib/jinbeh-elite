import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";
import { Accordion } from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";
export const metadata: Metadata = {
    title: "Sushi Cooking Classes Near Me | Learn Sushi Making Today",
    description:
        "Discover local sushi cooking classes for beginners and advanced chefs. Learn authentic techniques from skilled instructors. Perfect for couples.",
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
        images: ["/images/instagram/branded-sushi-plate.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/sushi-cooking-classes",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sushi Cooking Classes Near Me – Learn Today",
    description: "Comprehensive guide to finding and choosing the best sushi cooking classes in your area.",
    image: "https://jinbeh.com/images/instagram/branded-sushi-plate.jpg",
    datePublished: "2026-01-30",
    dateModified: "2026-03-11",
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
                text: "Beginner classes teach fundamentals: preparing sushi rice, selecting and slicing fish, rolling techniques for maki and hand rolls, food safety. You'll learn proper knife skills and authentic Japanese techniques.",
            },
        },
        {
            "@type": "Question",
            name: "Are sushi cooking classes good for beginners?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! Classes are designed for beginners. Instructors teach step-by-step with hands-on practice. No prior experience needed.",
            },
        },
        {
            "@type": "Question",
            name: "What are the benefits of taking sushi cooking classes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Develop culinary skills, gain cultural insight into Japanese cuisine, meet new people, learn about nutrition, and impress friends and family with homemade sushi.",
            },
        },
        {
            "@type": "Question",
            name: "What should I bring to sushi class?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most classes provide rice, fish, nori, and tools. Wear comfortable clothing and close-toed shoes. Bring a notebook and container for leftovers.",
            },
        },
        {
            "@type": "Question",
            name: "Are sushi classes good for couples or groups?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! Sushi classes are a popular date night and team-building activity. Many venues offer private group sessions. For group dining, Jinbeh's hibachi tables seat 7–8 guests (larger groups accommodated by joining tables with advance notice) guests for an interactive Japanese culinary experience.",
            },
        },
        {
            "@type": "Question",
            name: "Can I make sushi at home after taking a class?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Most classes teach you techniques you can replicate at home. You'll need sushi rice, rice vinegar, nori, fresh fish from a trusted source, and a bamboo rolling mat. Start with simple maki rolls and work up to nigiri.",
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
        { "@type": "ListItem", "position": 3, "name": "Menu", "item": "https://jinbeh.com/menu" },
        { "@type": "ListItem", "position": 4, "name": "Sushi Cooking Classes Near Me in DFW: Learn to Make Sushi" },
    ],
};

export default function SushiCookingClasses() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "Sushi Cooking Classes" }]} />
        </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/instagram/branded-sushi-plate.jpg"
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
                        <Link href="/menu" className="hover:text-white">Guides</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-charcoal bg-soft-gold mb-4">
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

                                    <div className="bg-gradient-to-br from-soft-gold/10 to-soft-gold/10 border-l-4 border-soft-gold rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Learning to make sushi is not just about creating food, it's about understanding
                                            a centuries-old culinary tradition. Our instructors are passionate about sharing this knowledge
                                            with students of all levels."
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">, The Jinbeh Team</span>
                                    </div>

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🎓 Why Take Sushi Cooking Classes?
                                    </h2>

                                    <DidYouKnow
                                        fact="Traditional sushi apprenticeship in Japan takes 10+ years to complete. Apprentices spend the first 2-3 years just learning to cook and season rice before they're allowed to touch fish. The famous sushi master Jiro Ono (of 'Jiro Dreams of Sushi') trained apprentices for 10 years before allowing them to prepare tamago (egg). Modern cooking classes condense these principles into accessible sessions for enthusiasts."
                                        source="Japan Sushi Academy"
                                    />

                                    <p className="text-charcoal/80 mb-6">
                                        Sushi cooking classes are more than just a fun activity. They provide a comprehensive introduction
                                        to authentic Japanese culinary techniques while offering numerous personal benefits.
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Benefits of Learning Sushi Making</h3>

                                    <p className="text-charcoal/80 mb-6">
                                        Beyond just mastering technique, learning to make sushi connects you with Japanese culture and culinary traditions. You'll develop an appreciation for quality ingredients, precision, and artistry. Plus, you can explore <Link href="/blog/sake-pairing-guide" className="text-accent-red hover:underline font-semibold">sake pairing</Link> to pair your creations perfectly with beverages.
                                    </p>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-3">🎯 Skill Development</h3>
                                        <p className="text-charcoal/70 mb-4">
                                            You'll gain hands-on experience in sushi preparation, learning techniques that take years to master.
                                            From proper knife skills to perfect rice seasoning, every skill builds your culinary confidence.
                                        </p>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-3">🇯🇵 Cultural Insight</h3>
                                        <p className="text-charcoal/70 mb-4">
                                            Sushi is an integral part of Japanese culture. By learning to make sushi, you gain appreciation
                                            for centuries-old traditions, ingredient selection, and the philosophy behind Japanese cuisine.
                                        </p>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-3">👥 Social Experience</h3>
                                        <p className="text-charcoal/70 mb-4">
                                            Classes often involve group activities, offering a chance to meet new people who share your
                                            interests. It's a fun social experience while learning valuable skills together.
                                        </p>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 mb-6">
                                        <h3 className="font-heading font-bold text-lg text-charcoal mb-3">🥗 Health and Nutrition</h3>
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

                                    <p className="text-charcoal/80 mb-6 pl-6 border-l-4 border-soft-gold">
                                        <strong>Topics covered:</strong><br />
                                        • Preparing and seasoning sushi rice<br />
                                        • Selecting, handling, and slicing fresh fish<br />
                                        • Rolling techniques for maki rolls<br />
                                        • Creating hand rolls (temaki)<br />
                                        • Food safety and hygiene practices<br />
                                        • Presentation and plating techniques
                                    </p>

                                    <h3 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">Advanced Sushi Lessons</h3>
                                    <p className="text-charcoal/80 mb-6">
                                        For those who have mastered the basics, advanced classes delve into more complex techniques and
                                        creative applications. These courses emphasize precision, artistry, and professional-level skills.
                                    </p>

                                    <p className="text-charcoal/80 mb-6 pl-6 border-l-4 border-soft-gold">
                                        <strong>Advanced topics include:</strong><br />
                                        • Creating intricate specialty rolls<br />
                                        • Nigiri preparation with perfect proportions<br />
                                        • Sashimi cutting and presentation<br />
                                        • Flavor pairing and ingredient selection<br />
                                        • Professional-grade knife techniques<br />
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
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">📚 Check the Instructor's Background</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Look for instructors with authentic Japanese culinary training or extensive sushi-making experience.
                                                Their expertise directly impacts the quality of your learning.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">👥 Consider Class Size</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Smaller classes often provide more personalized attention. Aim for a student-to-instructor ratio that
                                                allows for individual feedback and guidance.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">⏰ Check Duration and Schedule</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Classes range from a few hours to full-day workshops. Choose a duration that fits your learning style
                                                and schedule.
                                            </p>
                                        </div>

                                        <div className="bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                            <h3 className="font-heading font-bold text-lg text-charcoal mb-3">🔍 Read Reviews</h3>
                                            <p className="text-charcoal/70 text-sm">
                                                Check online reviews and testimonials from past students. Look for feedback about instructor quality,
                                                ingredient freshness, and overall experience.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                                        <BlurFade delay={0.1}>
                                            <BlurFade delay={0.1}>
                                                <div className="relative aspect-square rounded-xl overflow-hidden group">
                                                    <Image src="/images/blog/7-C060324-6447.jpg" alt="Sushi preparation" fill className="object-cover group-hover:scale-105 transition-transform" />
                                                </div>
                                            </BlurFade>
                                        </BlurFade>
                                        <BlurFade delay={0.2}>
                                            <BlurFade delay={0.2}>
                                                <div className="relative aspect-square rounded-xl overflow-hidden group">
                                                    <Image src="/images/blog/11-C060324-6544.jpg" alt="Sushi rolling" fill className="object-cover group-hover:scale-105 transition-transform" />
                                                </div>
                                            </BlurFade>
                                        </BlurFade>
                                        <BlurFade delay={0.3}>
                                            <BlurFade delay={0.3}>
                                                <div className="relative aspect-square rounded-xl overflow-hidden group">
                                                    <Image src="/images/instagram/branded-sushi-plate.jpg" alt="Sushi Cooking Classes Near Me at Jinbeh Japanese restaurant" fill className="object-cover group-hover:scale-105 transition-transform" />
                                                </div>
                                            </BlurFade>
                                        </BlurFade>
                                        <BlurFade delay={0.4}>
                                            <BlurFade delay={0.4}>
                                                <div className="relative aspect-square rounded-xl overflow-hidden group">
                                                    <Image src="/images/blog/14-C060324-6596.jpg" alt="Finished sushi" fill className="object-cover group-hover:scale-105 transition-transform" />
                                                </div>
                                            </BlurFade>
                                        </BlurFade>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <Accordion items={[
                                            {
                                                title: "What can I learn in a beginner sushi cooking class?",
                                                content: "Beginner classes teach the fundamentals of sushi making including preparing sushi rice, selecting and slicing fish, rolling techniques for maki and hand rolls, and food safety practices. You'll learn proper knife skills and authentic Japanese techniques."
                                            },
                                            {
                                                title: "Are sushi cooking classes good for beginners?",
                                                content: "Absolutely! Most sushi classes are designed with beginners in mind. Instructors teach step-by-step techniques and provide hands-on practice. No prior experience is necessary to start learning the art of sushi making."
                                            },
                                            {
                                                title: "What are the benefits of taking sushi cooking classes?",
                                                content: "Benefits include developing valuable culinary skills, gaining cultural insight into Japanese cuisine, meeting new people in a social setting, learning about nutrition and healthy eating, and the ability to impress friends and family with homemade sushi."
                                            },
                                            {
                                                title: "What should I bring to a sushi cooking class?",
                                                content: "Most classes provide all necessary materials including rice, fish, nori, and tools. Wear comfortable clothing and close-toed shoes. Some instructors may recommend bringing a small notebook to take notes and a container for leftovers."
                                            }
                                        ]} />
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <ProTip variant="chef">
                                        <strong>Sushi class tip from our chefs:</strong> The most important skill isn't cutting fish, it's making perfect rice. Practice the rice first: use short-grain Japanese rice, rinse until water runs clear, and season with rice vinegar while still warm. At Jinbeh, watch our sushi bar chefs in action during your visit, they're happy to explain techniques. Our <Link href="/events" className="text-accent-red hover:underline">events page</Link> has info on special dining experiences. For private group events, <CallLink href="tel:2146191200" className="text-accent-red hover:underline">call Frisco: (214) 619-1200</CallLink>
                                    </ProTip>

                                    <PillarCTA type="vip" />
                                    <LocationCTA location="both" />
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24">
                                <RelatedArticles currentSlug="sushi-cooking-classes" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        {/* AI-assisted nutrition disclaimer */}
        <div className="container mx-auto max-w-5xl px-4 my-8">
          <div className="bg-warm-ivory border-l-4 border-soft-gold rounded-r-2xl p-5 text-sm text-charcoal/75">
            <p>
              <strong className="text-charcoal">Nutrition disclaimer:</strong>{" "}
              Caloric, nutritional, and macronutrient values mentioned on this page are estimates
              assisted by AI and should be treated as approximate guidance only. Actual values vary
              by portion size, preparation method, ingredient batch, and chef discretion at Jinbeh
              Frisco and Lewisville.
            </p>
          </div>
        </div>
        </main>
    );
}
