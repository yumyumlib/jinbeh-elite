import Link from &quot;next/link&quot;;
import Image from &quot;next/image&quot;;
import type { Metadata } from &quot;next&quot;;
import RelatedArticles from &quot;@/components/RelatedArticles&quot;;

export const metadata: Metadata = {
    title: "Types of Sushi: Must-Try Varieties & Rolls Guide | Jinbeh",
    description:
        "Explore different types of sushi from nigiri to specialty rolls. Learn what makes each style unique and discover your new favorite at Jinbeh.",
    keywords: [
        "types of sushi",
        "sushi varieties",
        "sushi rolls",
        "nigiri vs sashimi",
        "sushi guide",
    ],
    openGraph: {
        title: "Types of Sushi: Must-Try Varieties & Rolls",
        description: "Your complete guide to sushi types, from traditional to modern rolls.",
        images: [&quot;/images/blog/12-C060324-6551.jpg&quot;],
    },
};

const articleSchema = {
    &quot;@context&quot;: "https://schema.org",
    &quot;@type&quot;: "Article",
    headline: "Types of Sushi: Must-Try Varieties & Rolls Guide",
    description: "Comprehensive guide to different types of sushi, their origins, and how to enjoy them.",
    image: "https://jinbeh.com/images/blog/12-C060324-6551.jpg",
    datePublished: "2026-01-18",
    dateModified: "2026-01-29",
    author: { &quot;@type&quot;: "Organization&quot;, name: &quot;Jinbeh Japanese Restaurant" },
};

const faqs = [
    {
        question: "What&apos;s the difference between nigiri and sashimi?",
        answer: "Nigiri is a slice of raw fish placed on top of a small mound of seasoned rice, while sashimi is pure raw fish sliced thin with no rice. Both showcase the quality and freshness of the fish, but nigiri adds the texture and subtle sweetness of properly seasoned sushi rice. Nigiri is more filling, while sashimi is lighter and lower-carb. Both are excellent ways to appreciate premium fish!"
    },
    {
        question: "What sushi is best for beginners?",
        answer: "Welcome to sushi! We recommend starting with cooked rolls like California Roll, Philadelphia Roll, or Shrimp Tempura Roll—they&apos;re milder in flavor and help newcomers ease into sushi before trying raw fish. You can also try cooked nigiri options like tamago (egg) or cooked shrimp. At Jinbeh, our experienced staff can guide you through our menu based on your comfort level and taste preferences."
    },
    {
        question: "What&apos;s in a dragon roll?",
        answer: "A Dragon Roll is one of our signature specialty rolls featuring eel, cucumber, and avocado topped with unagi (eel) sauce. The combination of tender eel, creamy avocado, and sweet unagi sauce creates an elegant and complex flavor profile. The roll is typically inside-out style, and our chefs arrange it beautifully to resemble a dragon. It&apos;s a fantastic choice if you enjoy cooked fish with rich, savory sauces—perfect for those ready to explore beyond basic rolls!"
    },
    {
        question: "What&apos;s in a rainbow roll?",
        answer: "A Rainbow Roll is a visually stunning specialty roll that features a California roll base topped with an assortment of colorful sashimi including salmon, tuna, avocado, and other fresh fish. The rainbow of colors comes from multiple fish varieties arranged on top. It&apos;s a beautiful centerpiece roll that showcases premium fish selection and offers a variety of flavors in every bite. Perfect for sharing or impressing guests with its presentation!"
    },
    {
        question: "What&apos;s the most popular sushi roll?",
        answer: "The California Roll is America's most beloved sushi roll. At Jinbeh, our Dragon Roll (eel, cucumber, avocado with unagi sauce), Spicy Tuna Roll, and Rainbow Roll are customer favorites. Our chefs can recommend the perfect roll based on your preferences—whether you like cooked or raw fish, spicy or mild flavors, or adventurous combinations."
    },
    {
        question: "How do I order fresh, high-quality sushi?",
        answer: "Quality sushi starts with fresh, never-frozen fish and expert preparation. At Jinbeh, we source premium fish daily and our sushi chefs train for years to master proper rice seasoning, knife work, and traditional hand-rolling techniques. Ask our staff about our fish selection, or sit at the sushi bar to watch the chefs work their magic. Our commitment to quality is evident in every piece."
    },
    {
        question: "Can I try different sushi types at Jinbeh?",
        answer: "Absolutely! We offer nigiri, sashimi, maki rolls, specialty rolls, hand rolls, and omakase experiences. You can order à la carte or try our sushi platters that showcase multiple varieties. Sit at the sushi bar to watch our chefs prepare each piece, or relax at a table. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 to ask about specials, or visit our menu online."
    },
    {
        question: "What&apos;s the proper way to eat sushi?",
        answer: "You can use chopsticks or your fingers—both are acceptable! Dip the fish side (not the rice) lightly into soy sauce to avoid it getting soggy. Eat nigiri in one bite if possible to enjoy all the flavors together. Use pickled ginger as a palate cleanser between pieces, not as a topping. Wasabi is optional—add it directly to your soy sauce or the sushi itself based on your spice preference."
    },
    {
        question: "Are there vegetarian sushi options?",
        answer: "Yes! We offer plenty of vegetarian rolls including cucumber roll (Kappa Maki), avocado roll, vegetable tempura roll, and creative specialty rolls with vegetables and fruits. Vegetarian nigiri options include tamago (egg) and cooked items. Let our staff know your vegetarian preferences, and we&apos;ll guide you to delicious options that showcase great flavors and technique."
    },
    {
        question: "What&apos;s the difference between sushi and sashimi platters?",
        answer: "A sushi platter typically includes nigiri and rolls (rice-based dishes), while a sashimi platter features only sliced raw fish. Sushi platters are more filling and offer variety in preparation styles. Sashimi platters are perfect for fish lovers who want to focus on the quality and flavor of premium fish without rice. Many guests order both to explore different aspects of Japanese cuisine!"
    },
];

const faqSchema = {
    &quot;@context&quot;: "https://schema.org",
    &quot;@type&quot;: "FAQPage",
    mainEntity: faqs.map((faq) => ({
        &quot;@type&quot;: "Question",
        name: faq.question,
        acceptedAnswer: {
            &quot;@type&quot;: "Answer",
            text: faq.answer,
        },
    })),
};

export default function TypesOfSushi() {
    return (
        <main className=&quot;min-h-screen bg-warm-ivory&quot;>
            <script type=&quot;application/ld+json&quot; dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type=&quot;application/ld+json&quot; dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className=&quot;relative h-[60vh] min-h-[500px] flex items-end overflow-hidden&quot;>
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/12-C060324-6551.jpg"
                >
                    <source src=&quot;/videos/LOCAL-LEW-SUSHI-sashimi-carpaccio-prep-chef-hands-01.mp4&quot; type=&quot;video/mp4&quot; />
                </video>
                <div className=&quot;absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent&quot; />

                <div className=&quot;relative z-10 container mx-auto px-6 pb-12&quot;>
                    <nav className=&quot;flex items-center gap-2 text-sm text-warm-ivory/70 mb-4&quot;>
                        <Link href=&quot;/&quot; className=&quot;hover:text-white&quot;>Home</Link>
                        <span>/</span>
                        <Link href=&quot;/blog&quot; className=&quot;hover:text-white&quot;>Blog</Link>
                        <span>/</span>
                        <Link href=&quot;/blog?category=cuisine&quot; className=&quot;hover:text-white&quot;>Cuisine</Link>
                    </nav>

                    <span className=&quot;inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-orange-500 mb-4&quot;>
                        🍣 Cuisine
                    </span>

                    <h1 className=&quot;text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4&quot;>
                        Types of Sushi: Your Complete Guide
                    </h1>

                    <div className=&quot;flex items-center gap-4 text-warm-ivory/70 text-sm&quot;>
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 18, 2026</span>
                        <span>•</span>
                        <span>10 min read</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className=&quot;py-16&quot;>
                <div className=&quot;container mx-auto px-6&quot;>
                    <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-12&quot;>
                        <article className=&quot;lg:col-span-2&quot;>
                            <div className=&quot;bg-white rounded-3xl shadow-xl p-8 md:p-12&quot;>
                                <div className=&quot;prose prose-lg max-w-none&quot;>
                                    <p className=&quot;text-xl text-charcoal/80 leading-relaxed mb-8&quot;>
                                        <strong>Sushi confused?</strong> You&apos;re not alone. Between nigiri, sashimi, maki,
                                        and specialty rolls, the sushi menu can feel like reading a foreign language.
                                        Let&apos;s break it down so you can order like a pro—and discover new <Link href=&quot;/blog/types-of-sushi&quot; className=&quot;text-accent-red hover:underline&quot;>sushi varieties</Link> along the way.
                                    </p>

                                    <div className=&quot;bg-gradient-to-br from-orange-500/10 to-soft-gold/10 border-l-4 border-orange-500 rounded-r-2xl p-6 my-8&quot;>
                                        <p className=&quot;text-charcoal font-medium italic text-lg&quot;>
                                            "Every sushi order at Jinbeh starts with fresh fish and ends with a smile.
                                            Whether you&apos;re trying nigiri for the first time or you&apos;re a seasoned omakase
                                            enthusiast, we&apos;re here to guide your journey."
                                        </p>
                                        <span className=&quot;text-sm text-charcoal/60 mt-2 block&quot;>— The Jinbeh Team</span>
                                    </div>

                                    <h2 className=&quot;text-3xl font-heading font-bold text-charcoal mt-12 mb-6&quot;>
                                        🍱 The Main Types of Sushi
                                    </h2>
                                </div>

                                {/* Sushi Types Grid */}
                                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 my-8&quot;>
                                    <div className=&quot;bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow&quot;>
                                        <div className=&quot;flex items-start gap-4&quot;>
                                            <span className=&quot;text-4xl&quot;>🍣</span>
                                            <div>
                                                <h3 className=&quot;font-heading font-bold text-xl text-charcoal mb-2&quot;>Nigiri</h3>
                                                <p className=&quot;text-charcoal/70 text-sm&quot;>
                                                    A slice of raw fish draped over a small mound of seasoned rice.
                                                    Simple, elegant, and all about the fish quality.
                                                </p>
                                                <p className=&quot;text-xs text-accent-red mt-2&quot;>Popular: Salmon, Tuna, Yellowtail</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=&quot;bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow&quot;>
                                        <div className=&quot;flex items-start gap-4&quot;>
                                            <span className=&quot;text-4xl&quot;>🐟</span>
                                            <div>
                                                <h3 className=&quot;font-heading font-bold text-xl text-charcoal mb-2&quot;>Sashimi</h3>
                                                <p className=&quot;text-charcoal/70 text-sm&quot;>
                                                    Pure, pristine slices of raw fish—no rice involved.
                                                    The ultimate test of fish freshness and chef skill.
                                                </p>
                                                <p className=&quot;text-xs text-accent-red mt-2&quot;>Popular: Salmon, Tuna, Scallop</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=&quot;bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow&quot;>
                                        <div className=&quot;flex items-start gap-4&quot;>
                                            <span className=&quot;text-4xl&quot;>🍙</span>
                                            <div>
                                                <h3 className=&quot;font-heading font-bold text-xl text-charcoal mb-2&quot;>Maki (Rolls)</h3>
                                                <p className=&quot;text-charcoal/70 text-sm&quot;>
                                                    Rice and fillings wrapped in seaweed (nori). Can be thin (hosomaki)
                                                    or thick (futomaki).
                                                </p>
                                                <p className=&quot;text-xs text-accent-red mt-2&quot;>Popular: Spicy Tuna, Cucumber</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=&quot;bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow&quot;>
                                        <div className=&quot;flex items-start gap-4&quot;>
                                            <span className=&quot;text-4xl&quot;>🌀</span>
                                            <div>
                                                <h3 className=&quot;font-heading font-bold text-xl text-charcoal mb-2&quot;>Uramaki (Inside-Out)</h3>
                                                <p className=&quot;text-charcoal/70 text-sm&quot;>
                                                    Rice on the outside, seaweed on the inside.
                                                    American invention that birthed the California Roll.
                                                </p>
                                                <p className=&quot;text-xs text-accent-red mt-2&quot;>Popular: California, Dragon, Rainbow</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=&quot;bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow&quot;>
                                        <div className=&quot;flex items-start gap-4&quot;>
                                            <span className=&quot;text-4xl&quot;>🔥</span>
                                            <div>
                                                <h3 className=&quot;font-heading font-bold text-xl text-charcoal mb-2&quot;>Specialty Rolls</h3>
                                                <p className=&quot;text-charcoal/70 text-sm&quot;>
                                                    Creative, often chef-inspired rolls with multiple ingredients,
                                                    sauces, and sometimes torched or baked tops.
                                                </p>
                                                <p className=&quot;text-xs text-accent-red mt-2&quot;>Popular: Dragon Roll, Volcano Roll</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=&quot;bg-warm-ivory rounded-2xl p-6 hover:shadow-lg transition-shadow&quot;>
                                        <div className=&quot;flex items-start gap-4&quot;>
                                            <span className=&quot;text-4xl&quot;>🥢</span>
                                            <div>
                                                <h3 className=&quot;font-heading font-bold text-xl text-charcoal mb-2&quot;>Temaki (Hand Roll)</h3>
                                                <p className=&quot;text-charcoal/70 text-sm&quot;>
                                                    Cone-shaped seaweed filled with rice, fish, and vegetables.
                                                    Best eaten immediately before the nori gets soft.
                                                </p>
                                                <p className=&quot;text-xs text-accent-red mt-2&quot;>Popular: Spicy Tuna Hand Roll</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div className=&quot;overflow-x-auto my-12&quot;>
                                    <table className=&quot;w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md&quot;>
                                        <thead className=&quot;bg-charcoal text-white&quot;>
                                            <tr>
                                                <th className=&quot;p-4 text-left font-heading&quot;>Type</th>
                                                <th className=&quot;p-4 text-left font-heading&quot;>Best For</th>
                                                <th className=&quot;p-4 text-left font-heading&quot;>Rice?</th>
                                                <th className=&quot;p-4 text-left font-heading&quot;>Skill Level</th>
                                            </tr>
                                        </thead>
                                        <tbody className=&quot;text-charcoal/80&quot;>
                                            <tr className=&quot;border-b border-warm-ivory&quot;>
                                                <td className=&quot;p-4 font-semibold&quot;>Nigiri</td>
                                                <td className=&quot;p-4&quot;>Experiencing pure fish flavor</td>
                                                <td className=&quot;p-4&quot;>Yes</td>
                                                <td className=&quot;p-4&quot;>⭐⭐⭐ Adventurous</td>
                                            </tr>
                                            <tr className=&quot;border-b border-warm-ivory bg-warm-ivory/30&quot;>
                                                <td className=&quot;p-4 font-semibold&quot;>Sashimi</td>
                                                <td className=&quot;p-4&quot;>Low-carb, fish purists</td>
                                                <td className=&quot;p-4&quot;>No</td>
                                                <td className=&quot;p-4&quot;>⭐⭐⭐ Adventurous</td>
                                            </tr>
                                            <tr className=&quot;border-b border-warm-ivory&quot;>
                                                <td className=&quot;p-4 font-semibold&quot;>Maki Rolls</td>
                                                <td className=&quot;p-4&quot;>Classic sushi experience</td>
                                                <td className=&quot;p-4&quot;>Yes</td>
                                                <td className=&quot;p-4&quot;>⭐⭐ Intermediate</td>
                                            </tr>
                                            <tr className=&quot;border-b border-warm-ivory bg-warm-ivory/30&quot;>
                                                <td className=&quot;p-4 font-semibold&quot;>Specialty Rolls</td>
                                                <td className=&quot;p-4&quot;>Flavor exploration, sharing</td>
                                                <td className=&quot;p-4&quot;>Yes</td>
                                                <td className=&quot;p-4&quot;>⭐ Beginner-friendly</td>
                                            </tr>
                                            <tr>
                                                <td className=&quot;p-4 font-semibold&quot;>Hand Rolls</td>
                                                <td className=&quot;p-4&quot;>Quick, casual eating</td>
                                                <td className=&quot;p-4&quot;>Yes</td>
                                                <td className=&quot;p-4&quot;>⭐ Beginner-friendly</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Internal Links - Sushi Cluster */}
                                <div className=&quot;my-12 p-6 bg-accent-red/10 rounded-2xl border-2 border-accent-red/30&quot;>
                                    <h3 className=&quot;font-heading font-bold text-lg text-charcoal mb-4&quot;>Explore Related Sushi Articles:</h3>
                                    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                                        <Link href=&quot;/blog/sashimi-vs-sushi&quot; className=&quot;p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red&quot;>
                                            <p className=&quot;font-semibold text-charcoal&quot;>Sashimi vs Sushi</p>
                                            <p className=&quot;text-sm text-charcoal/70&quot;>Understand the key differences</p>
                                        </Link>
                                        <Link href=&quot;/blog/how-to-eat-sushi-guide&quot; className=&quot;p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red&quot;>
                                            <p className=&quot;font-semibold text-charcoal&quot;>How to Eat Sushi Guide</p>
                                            <p className=&quot;text-sm text-charcoal/70&quot;>Master proper etiquette & tips</p>
                                        </Link>
                                        <Link href=&quot;/blog/sushi-identification-chart&quot; className=&quot;p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red&quot;>
                                            <p className=&quot;font-semibold text-charcoal&quot;>Sushi Identification Chart</p>
                                            <p className=&quot;text-sm text-charcoal/70&quot;>Complete sushi reference guide</p>
                                        </Link>
                                        <Link href=&quot;/blog/what-is-omakase&quot; className=&quot;p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red&quot;>
                                            <p className=&quot;font-semibold text-charcoal&quot;>What is Omakase?</p>
                                            <p className=&quot;text-sm text-charcoal/70&quot;>Discover the ultimate sushi experience</p>
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Gallery */}
                                <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4 my-12&quot;>
                                    <div className=&quot;relative aspect-square rounded-xl overflow-hidden group&quot;>
                                        <Image src=&quot;/images/blog/7-C060324-6447.jpg&quot; alt=&quot;Sushi platter&quot; fill className=&quot;object-cover group-hover:scale-105 transition-transform&quot; />
                                    </div>
                                    <div className=&quot;relative aspect-square rounded-xl overflow-hidden group&quot;>
                                        <Image src=&quot;/images/blog/11-C060324-6544.jpg&quot; alt=&quot;Sushi chef&quot; fill className=&quot;object-cover group-hover:scale-105 transition-transform&quot; />
                                    </div>
                                    <div className=&quot;relative aspect-square rounded-xl overflow-hidden group&quot;>
                                        <Image src=&quot;/images/blog/13-C060324-6582.jpg&quot; alt=&quot;Sushi roll&quot; fill className=&quot;object-cover group-hover:scale-105 transition-transform&quot; />
                                    </div>
                                    <div className=&quot;relative aspect-square rounded-xl overflow-hidden group&quot;>
                                        <Image src=&quot;/images/blog/14-C060324-6596.jpg&quot; alt=&quot;Sashimi&quot; fill className=&quot;object-cover group-hover:scale-105 transition-transform&quot; />
                                    </div>
                                </div>

                                <div className=&quot;prose prose-lg max-w-none&quot;>
                                    <h2 className=&quot;text-3xl font-heading font-bold text-charcoal mt-12 mb-6&quot;>
                                        🌟 Jinbeh&apos;s Most Popular <Link href=&quot;/blog/types-of-sushi&quot; className=&quot;text-accent-red hover:underline&quot;>Sushi Varieties</Link>
                                    </h2>

                                    <div className=&quot;bg-gradient-to-r from-charcoal to-deep-indigo rounded-2xl p-8 text-white my-8&quot;>
                                        <h3 className=&quot;font-heading font-bold text-xl mb-6&quot;>Customer Favorites:</h3>
                                        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                                            <div className=&quot;flex items-center gap-3&quot;>
                                                <span className=&quot;text-2xl&quot;>🐉</span>
                                                <div>
                                                    <span className=&quot;font-semibold&quot;>Dragon Roll</span>
                                                    <p className=&quot;text-sm text-white/70&quot;>Eel, cucumber, avocado, unagi sauce</p>
                                                </div>
                                            </div>
                                            <div className=&quot;flex items-center gap-3&quot;>
                                                <span className=&quot;text-2xl&quot;>🌈</span>
                                                <div>
                                                    <span className=&quot;font-semibold&quot;>Rainbow Roll</span>
                                                    <p className=&quot;text-sm text-white/70&quot;>California roll topped with assorted sashimi</p>
                                                </div>
                                            </div>
                                            <div className=&quot;flex items-center gap-3&quot;>
                                                <span className=&quot;text-2xl&quot;>🌋</span>
                                                <div>
                                                    <span className=&quot;font-semibold&quot;>Volcano Roll</span>
                                                    <p className=&quot;text-sm text-white/70&quot;>Baked spicy crab on California roll</p>
                                                </div>
                                            </div>
                                            <div className=&quot;flex items-center gap-3&quot;>
                                                <span className=&quot;text-2xl&quot;>🔥</span>
                                                <div>
                                                    <span className=&quot;font-semibold&quot;>Spicy Tuna Roll</span>
                                                    <p className=&quot;text-sm text-white/70&quot;>Fresh tuna with spicy mayo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className=&quot;mt-16&quot;>
                                    <h2 className=&quot;text-3xl font-heading font-bold text-charcoal mb-8&quot;>❓ Frequently Asked Questions</h2>

                                    <div className=&quot;space-y-4&quot;>
                                        {faqs.map((faq, index) => (
                                            <details key={index} className=&quot;group bg-warm-ivory rounded-2xl overflow-hidden&quot;>
                                                <summary className=&quot;flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal&quot;>
                                                    {faq.question}
                                                    <span className=&quot;text-accent-red group-open:rotate-180 transition-transform&quot;>▼</span>
                                                </summary>
                                                <div className=&quot;px-6 pb-6 text-charcoal/80&quot;>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className=&quot;mt-16 p-8 bg-gradient-to-br from-orange-500 to-accent-red rounded-3xl text-center&quot;>
                                    <h3 className=&quot;text-3xl font-heading font-bold text-white mb-4&quot;>🍣 Ready to Explore?</h3>
                                    <p className=&quot;text-white/90 mb-8 text-lg&quot;>
                                        Discover your new favorite sushi at Jinbeh. Fresh fish, expert rolls, unforgettable flavors.
                                        New to sushi? Check out our <Link href=&quot;/blog/beginner-sushi-tips&quot; className=&quot;text-white hover:underline font-semibold&quot;>sushi for beginners</Link> guide.
                                    </p>
                                    <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                                        <Link href=&quot;/reservations&quot; className=&quot;btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg&quot;>
                                            Reserve Now
                                        </Link>
                                        <Link href=&quot;/frisco/menu&quot; className=&quot;btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg&quot;>
                                            View Frisco Menu
                                        </Link>
                                        <Link href=&quot;/lewisville/menu&quot; className=&quot;btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg&quot;>
                                            View Lewisville Menu
                                        </Link>
                                    </div>
                                </div>

                                {/* Location Links */}
                                <div className=&quot;mt-12 grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                                    <Link href=&quot;/locations/frisco&quot; className=&quot;p-6 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-2 border-charcoal/10&quot;>
                                        <h3 className=&quot;font-heading font-bold text-lg text-charcoal mb-2&quot;>📍 <Link href=&quot;/locations/frisco&quot; className=&quot;text-accent-red hover:underline&quot;>Frisco location</Link></h3>
                                        <p className=&quot;text-charcoal/70 text-sm&quot;>Visit us in Frisco for authentic sushi and Japanese cuisine</p>
                                    </Link>
                                    <Link href=&quot;/locations/lewisville&quot; className=&quot;p-6 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-2 border-charcoal/10&quot;>
                                        <h3 className=&quot;font-heading font-bold text-lg text-charcoal mb-2&quot;>📍 <Link href=&quot;/locations/lewisville&quot; className=&quot;text-accent-red hover:underline&quot;>Lewisville location</Link></h3>
                                        <p className=&quot;text-charcoal/70 text-sm&quot;>Experience fine dining at our Lewisville Japanese restaurant</p>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className=&quot;lg:col-span-1&quot;>
                            <RelatedArticles currentSlug=&quot;types-of-sushi&quot; />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
