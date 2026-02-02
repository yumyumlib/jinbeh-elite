import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Japanese Omakase: Unraveling the Unique Dining Art | Jinbeh",
    description: "Experience the art of Japanese omakase, a personalized dining journey highlighting chef creativity and seasonality. Discover omakase at restaurants like Jinbeh in Dallas.",
    keywords: ["omakase", "omakase dining", "japanese omakase", "sushi omakase", "omakase restaurant", "chef tasting menu"],
};

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Japanese Omakase: Unraveling a Unique Dining Art", datePublished: "2026-01-25", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What does omakase mean?", acceptedAnswer: { "@type": "Answer", text: "Omakase translates to 'I leave it up to you' in English. It's a dining experience where the chef takes full control, crafting a bespoke menu highlighting the freshest ingredients and showcasing their culinary expertise and creativity." } },
            { "@type": "Question", name: "How is omakase different from regular sushi?", acceptedAnswer: { "@type": "Answer", text: "While omakase often includes sushi, it's much more comprehensive. An omakase meal features a curated progression including appetizers, various sushi pieces, cooked dishes, soup, and dessert—a complete culinary journey rather than just ordering individual sushi items." } }
        ]
    }
];

export default function OmakaseDiningGuide() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/20-C060324-6766.jpg" alt="Fresh sushi and sashimi platter at Jinbeh Japanese Restaurant" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>/<Link href="/blog" className="hover:text-white">Blog</Link>/<Link href="/blog?category=cuisine" className="hover:text-white">Cuisine</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-soft-gold mb-4">🍣 Omakase Dining</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Japanese Omakase: Unraveling the Unique Dining Art</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>Omakase is more than just a meal—it's a performance, an art form, and a testament to the skill and expertise of the chef.</strong> This dining style encourages a deep connection between diner and chef, transforming food into an unforgettable experience. Whether you're enjoying <Link href="/blog/types-of-sushi" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sushi varieties</Link> or <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake pairing</Link>, omakase showcases culinary artistry at its finest.</p>

                            <div className="bg-gradient-to-br from-soft-gold/10 to-soft-gold/10 border-l-4 border-soft-gold rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"Omakase is about trust and artistry. When you sit at the sushi bar and say 'omakase,' you're inviting the chef to showcase their mastery, creativity, and passion for their craft."</p>
                                <span className="text-sm text-charcoal/80">— Jinbeh Omakase Philosophy</span>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍣 Understanding Omakase</h2>
                            <p className="text-charcoal/80 mb-4">The term "Omakase" translates to "I leave it up to you." This phrase signifies a dining experience where the chef takes full control, crafting a bespoke menu that highlights the freshest ingredients and showcases their culinary prowess. The diner places their trust in the chef, allowing them to guide the meal with expertise and creativity.</p>

                            <p className="text-charcoal/80 mb-4">In an Omakase meal, diners are treated to a selection of dishes that reflect the chef's personal style and the season's best offerings. This allows patrons to embark on a culinary journey that is both unpredictable and deeply satisfying. The chef's choices are guided not only by ingredient availability but also by intuition and artistic vision, making each Omakase experience unique and memorable.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍱 Omakase vs. Traditional Sushi</h2>
                            <p className="text-charcoal/80 mb-4">While Omakase often involves sushi, it is much more than just a sushi meal. Understanding this distinction helps set proper expectations for your dining experience.</p>

                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Aspect</th><th className="p-3 text-left">Traditional Sushi</th><th className="p-3 text-left">Omakase</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">Menu Selection</td><td className="p-3">You choose individual items</td><td className="p-3">Chef designs entire progression</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Course Structure</td><td className="p-3">Focus on sushi pieces</td><td className="p-3">Multi-course journey with variety</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Dishes Included</td><td className="p-3">Sushi primarily</td><td className="p-3">Appetizers, sushi, cooked dishes, soup, dessert</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">Chef Interaction</td><td className="p-3">Limited involvement</td><td className="p-3">Close relationship, personal guidance</td></tr>
                                    <tr><td className="p-3 font-semibold">Experience Focus</td><td className="p-3">Meal satisfaction</td><td className="p-3">Culinary art and personal connection</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍽️ The Omakase Dining Experience</h2>
                            <p className="text-charcoal/80 mb-4">Dining at an Omakase-style restaurant is an intimate and interactive experience. It often takes place at a sushi bar where you can observe the chef at work. This proximity allows you to enjoy the artistry of preparation and engage with the chef, who may explain the inspiration behind each course.</p>

                            <div className="bg-warm-ivory rounded-xl p-6 my-6">
                                <h3 className="font-bold text-charcoal mb-4">📋 Typical Omakase Course Structure</h3>
                                <div className="space-y-3">
                                    <div className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soft-gold text-white flex items-center justify-center text-sm font-bold">1</span>
                                        <div>
                                            <h4 className="font-bold text-charcoal">Starter</h4>
                                            <p className="text-sm text-charcoal/70">Light appetizer like salad or sashimi to awaken the palate</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soft-gold text-white flex items-center justify-center text-sm font-bold">2</span>
                                        <div>
                                            <h4 className="font-bold text-charcoal">Main Courses</h4>
                                            <p className="text-sm text-charcoal/70">Series of sushi pieces, tempura, grilled fish, each served individually with attention to balance and presentation</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soft-gold text-white flex items-center justify-center text-sm font-bold">3</span>
                                        <div>
                                            <h4 className="font-bold text-charcoal">Palate Cleanser</h4>
                                            <p className="text-sm text-charcoal/70">Miso or clear soup to cleanse the palate and provide reflective interlude</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soft-gold text-white flex items-center justify-center text-sm font-bold">4</span>
                                        <div>
                                            <h4 className="font-bold text-charcoal">Dessert</h4>
                                            <p className="text-sm text-charcoal/70">Matcha creation or fruit-based dessert providing gentle, satisfying conclusion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🌸 The Art of Seasonality</h2>
                            <p className="text-charcoal/80 mb-4">One of the defining features of Omakase is the emphasis on seasonality. Chefs select ingredients at their peak, ensuring each dish captures the essence of the season. This commitment to fresh, seasonal ingredients is a hallmark of Japanese cuisine and adds an element of surprise to each Omakase dinner.</p>

                            <p className="text-charcoal/80 mb-4">Seasonality is not just about freshness—it's a celebration of nature's bounty and a reflection of the Japanese philosophy of living in harmony with the natural world. This approach ensures that each Omakase meal is unique, as ingredients and dishes change with the seasons, offering diners a dynamic and ever-changing culinary experience.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">✅ How to Enjoy Your Omakase Meal</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[
                                    { icon: "🧠", title: "Be Open-Minded", desc: "Trust the chef's choices and be willing to try new dishes. This openness allows full appreciation of their creativity." },
                                    { icon: "💬", title: "Engage with Chef", desc: "Ask questions about ingredients and preparation. This interaction deepens understanding and appreciation of the meal." },
                                    { icon: "⏱️", title: "Savor Each Bite", desc: "Take your time enjoying flavors and textures. Eating slowly allows full experience of complexity and artistry." },
                                    { icon: "🙏", title: "Show Respect", desc: "Avoid modifications and refrain from extra soy sauce. Trust the chef has perfected each piece to be consumed as served." }
                                ].map(x => (
                                    <div key={x.title} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.icon}</span>
                                        <h3 className="font-bold text-charcoal mb-2">{x.title}</h3>
                                        <p className="text-sm text-charcoal/70">{x.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🎌 Omakase Etiquette</h2>
                            <p className="text-charcoal/80 mb-4">Understanding proper etiquette enriches your Omakase experience and shows respect for the chef's craft:</p>

                            <div className="bg-warm-ivory rounded-xl p-6 my-6 space-y-3">
                                <div className="flex gap-4">
                                    <span className="text-2xl flex-shrink-0">✋</span>
                                    <div>
                                        <h4 className="font-bold text-charcoal">Respect the Creation</h4>
                                        <p className="text-sm text-charcoal/70">Avoid asking for modifications to dishes. Trust that each has been crafted to perfection.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-2xl flex-shrink-0">🍶</span>
                                    <div>
                                        <h4 className="font-bold text-charcoal">Skip Extra Soy Sauce</h4>
                                        <p className="text-sm text-charcoal/70">Trust the chef to season perfectly. Each piece is designed with precise seasoning in mind.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-2xl flex-shrink-0">🍣</span>
                                    <div>
                                        <h4 className="font-bold text-charcoal">Eat as Served</h4>
                                        <p className="text-sm text-charcoal/70">Sushi is often prepared for one bite, allowing you to experience the intended balance of flavors and textures.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🌟 Why Choose Omakase?</h2>
                            <p className="text-charcoal/80 mb-4">Choosing Omakase is selecting a dining experience that is both personalized and artistic. The chef's expertise ensures that each dish is a masterpiece, crafted to highlight the best of Japanese culinary arts. This level of craftsmanship and attention to detail elevates Omakase above other dining experiences, making it truly special.</p>

                            <p className="text-charcoal/80 mb-4">Omakase offers diners a unique opportunity to explore the depths of Japanese cuisine, experiencing dishes and flavors they might not encounter otherwise. The personalized nature ensures each experience is unique, offering a fresh perspective on the art of cooking and food appreciation. Pair your omakase with our <Link href="/blog/sake-pairing-guide" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">sake pairing</Link> selections for an elevated experience.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        How much does omakase typically cost?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Omakase pricing varies widely based on chef expertise, ingredient quality, and location. Prices can range from moderate ($40-80) to premium ($150+). At Jinbeh, we offer authentic omakase experiences that balance quality and accessibility.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        Can I request dietary preferences in omakase?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>While omakase is about trusting the chef, you should communicate any dietary restrictions (allergies, vegetarian) before the meal begins. This allows the chef to plan accordingly while maintaining the omakase philosophy.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        How long does an omakase meal take?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>A typical omakase experience lasts 45 minutes to over an hour. The pacing is intentional, designed to allow you to savor each course and interact with the chef. Rushing through defeats the purpose of the experience.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        Is omakase available outside Japan?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Yes! The popularity of omakase has spread worldwide. Authentic omakase restaurants, including Jinbeh in Dallas, maintain the core principles while bringing this experience to international audiences. Call our <Link href="/locations/frisco" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Frisco location</Link> at (214) 619-1200 or <Link href="/locations/lewisville" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Lewisville</Link> at (214) 488-2224 to book your omakase experience.</p>
                                    </div>
                                </details>

                                <details className="group bg-warm-ivory rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-charcoal">
                                        How do I book an omakase experience at Jinbeh?
                                        <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-charcoal/80">
                                        <p>Welcome to the table! Call us directly to arrange your omakase experience. We recommend booking at least 1-2 weeks in advance. <Link href="/locations/frisco" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Frisco</Link>: (214) 619-1200 or <Link href="/locations/lewisville" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">Lewisville</Link>: (214) 488-2224. Tell us about your dietary preferences so our chef can prepare the perfect menu. You can also <Link href="/reservations" className="text-deep-indigo hover:text-accent-red transition-colors font-medium">make a reservation</Link> online.</p>
                                    </div>
                                </details>
                            </div>

                            {/* Sushi Cluster Links */}
                            <div className="my-12 p-6 bg-accent-red/10 rounded-2xl border-2 border-accent-red/30">
                                <h3 className="font-heading font-bold text-lg text-charcoal mb-4">📚 Explore the Complete Sushi Cluster:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Link href="/blog/types-of-sushi" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">Types of Sushi</p>
                                        <p className="text-sm text-charcoal/70">Discover nigiri, rolls, and specialty varieties</p>
                                    </Link>
                                    <Link href="/blog/sashimi-vs-sushi" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">Sashimi vs Sushi</p>
                                        <p className="text-sm text-charcoal/70">Learn the key differences</p>
                                    </Link>
                                    <Link href="/blog/how-to-eat-sushi-guide" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">How to Eat Sushi</p>
                                        <p className="text-sm text-charcoal/70">Master proper etiquette & techniques</p>
                                    </Link>
                                    <Link href="/blog/sushi-identification-chart" className="p-3 rounded-lg bg-white hover:shadow-md transition-shadow border-l-4 border-accent-red">
                                        <p className="font-semibold text-charcoal">Sushi Identification Chart</p>
                                        <p className="text-sm text-charcoal/70">Complete reference guide to all sushi</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-r from-soft-gold to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍣 Experience Authentic Omakase at Jinbeh</h3>
                                <p className="text-white/80 mb-6">Our chefs are dedicated to preserving the authenticity of omakase, providing a dining experience that mirrors those found in Japan. Reserve your seat at our sushi bar today.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/reservations" className="bg-white text-soft-gold px-6 py-3 rounded-xl font-semibold hover:bg-warm-ivory transition-colors">Reserve Now</Link>
                                    <Link href="/frisco" className="bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">Frisco Location</Link>
                                    <Link href="/lewisville" className="bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">Lewisville Location</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <RelatedArticles currentSlug="omakase-dining-guide" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
