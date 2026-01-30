import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
    title: "Best Seafood Restaurants in Dallas TX: Top Picks | Jinbeh",
    description: "Discover the best seafood restaurants in Dallas, from upscale dining at The Oceanaire to fresh markets. Explore top seafood spots and Japanese sushi at Jinbeh.",
    keywords: ["best seafood dallas", "seafood restaurants dallas tx", "fresh sushi dallas", "seafood dining dallas"],
};

const faqs = [
    { question: "What are the best seafood restaurants in Dallas?", answer: "Fresh and flavorful! The Oceanaire offers upscale dining. Truluck's serves Stone Crab. Jinbeh brings premium sushi and sashimi with authentic Japanese expertise." },
    { question: "Where can I find fresh sushi in Dallas?", answer: "Jinbeh is your spot! We source the highest quality fish. Every sushi piece is expertly crafted by our chefs. Locations in Frisco and Lewisville." },
    { question: "How often is fish delivered to Jinbeh?", answer: "We receive fish deliveries multiple times per week. Our sushi chefs slice each piece fresh to order. Watch them work at our sushi bar." },
    { question: "Can I buy fresh seafood to cook at home?", answer: "Yes! Dallas Fish Market and Captain Dave's offer fresh fish and shellfish. But why cook when we can prepare dinner and a show for you at Jinbeh?" },
    { question: "Do you take reservations for seafood dining?", answer: "Absolutely! We recommend reservations. Call Frisco at (214) 618-9888 or Lewisville at (214) 618-9798. We treat every guest like family." }
];

const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Best Seafood Restaurants in Dallas TX", datePublished: "2026-01-30", author: { "@type": "Organization", name: "Jinbeh" } },
    {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
            { "@type": "Question", name: "What are the best seafood restaurants in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Top seafood spots include The Oceanaire for upscale dining, Truluck's for Stone Crab, TJ's Seafood for casual dining, and Jinbeh for premium sushi and sashimi with traditional Japanese expertise." } },
            { "@type": "Question", name: "Where can I find fresh sushi in Dallas?", acceptedAnswer: { "@type": "Answer", text: "Jinbeh offers exceptionally fresh sushi and sashimi, expertly crafted to highlight natural seafood flavors. Their commitment to sourcing the highest quality fish ensures an authentic Japanese dining experience." } }
        ]
    }
];

export default function BestSeafoodDallas() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

            <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
                <Image src="/images/blog/8-C060324-6462.jpg" alt="Seafood Dallas" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/">Home</Link>/<Link href="/blog">Blog</Link>/<Link href="/blog?category=dining">Dining</Link>
                    </nav>
                    <span className="inline-block px-4 py-2 rounded-full text-sm text-white bg-deep-indigo mb-4">🦞 Seafood Guide</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white hero-headline">Best Seafood Restaurants in Dallas TX</h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <p className="text-xl text-charcoal/80 mb-8"><strong>In the bustling city of Dallas,</strong> the culinary scene offers exceptional seafood dining experiences. Despite being landlocked, Dallas has access to some of the freshest seafood, thanks to efficient supply chains and dedicated suppliers delivering premium catches daily.</p>

                            <div className="bg-gradient-to-br from-deep-indigo/10 to-soft-gold/10 border-l-4 border-deep-indigo rounded-r-xl p-6 my-8">
                                <p className="text-charcoal italic">"Dallas's seafood scene blends global culinary influences, creating innovative dishes that honor traditional preparation methods while embracing contemporary techniques."</p>
                                <span className="text-sm text-charcoal/60">— DFW Food Culture</span>
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🦪 Upscale Seafood Dining</h2>

                            <h3 className="text-lg font-bold text-charcoal mb-3">The Oceanaire Seafood Room</h3>
                            <p className="text-charcoal/80 mb-4">Located in the heart of downtown Dallas, The Oceanaire Seafood Room is renowned for its sophisticated ambiance and exceptional seafood dishes. The menu features a daily selection of fresh fish and shellfish. The restaurant's interior evokes the glamour of a classic ocean liner, with nautical-themed decor and ambient lighting creating an elegant yet welcoming atmosphere.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3 mt-6">Truluck's Seafood, Steak & Crab House</h3>
                            <p className="text-charcoal/80 mb-4">Truluck's is a top contender for upscale seafood dining in Dallas. Known for its vibrant atmosphere and commitment to quality, Truluck's offers an impressive selection of fresh-caught seafood, including their famous Stone Crab Claws. The restaurant features elegant furnishings, live music performances, and an extensive wine list curated to complement their diverse menu.</p>

                            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md my-6">
                                <thead className="bg-charcoal text-white"><tr><th className="p-3 text-left">Restaurant</th><th className="p-3 text-left">Specialty</th><th className="p-3">Atmosphere</th></tr></thead>
                                <tbody className="text-charcoal/80">
                                    <tr className="border-b bg-soft-gold/10"><td className="p-3 font-semibold">⭐ Jinbeh Sushi</td><td className="p-3">Fresh sushi & sashimi</td><td className="p-3 text-center">Upscale casual</td></tr>
                                    <tr className="border-b"><td className="p-3 font-semibold">The Oceanaire</td><td className="p-3">Fine seafood dining</td><td className="p-3 text-center">Elegant</td></tr>
                                    <tr className="border-b bg-warm-ivory/30"><td className="p-3 font-semibold">Truluck's</td><td className="p-3">Stone crab & steaks</td><td className="p-3 text-center">Upscale vibrant</td></tr>
                                    <tr><td className="p-3 font-semibold">TJ's Seafood Market</td><td className="p-3">Fresh catch & grill</td><td className="p-3 text-center">Casual</td></tr>
                                </tbody>
                            </table>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🍣 Japanese Seafood Excellence at Jinbeh</h2>
                            <p className="text-charcoal/80 mb-6">Jinbeh is not just a sushi restaurant; it's a destination for seafood enthusiasts. Offering a blend of traditional Japanese dishes and innovative seafood creations, Jinbeh provides a unique dining experience that celebrates the art of Japanese cuisine.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3">Fusion of Tradition and Innovation</h3>
                            <p className="text-charcoal/80 mb-4">Jinbeh seamlessly blends traditional Japanese culinary techniques with contemporary influences, creating a menu that is both familiar and exciting. Diners can enjoy classic sushi and sashimi offerings alongside innovative dishes that showcase the chef's creativity and expertise.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3 mt-6">Fresh Sushi and Sashimi</h3>
                            <p className="text-charcoal/80 mb-4">Their sushi and sashimi are exceptionally fresh, thanks to Jinbeh's commitment to sourcing the highest quality fish. Each piece is expertly crafted to highlight the natural flavors of the seafood, providing a truly authentic Japanese dining experience.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3 mt-6">Signature Seafood Platter</h3>
                            <p className="text-charcoal/80 mb-6">The Jinbeh Seafood Platter is a must-try for anyone looking to indulge in a variety of flavors. This signature dish features an assortment of fresh seafood, including sushi, sashimi, and other delicacies, beautifully presented for a visually stunning and delicious experience.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🐟 Casual Seafood Dining</h2>

                            <h3 className="text-lg font-bold text-charcoal mb-3">TJ's Seafood Market & Grill</h3>
                            <p className="text-charcoal/80 mb-4">For those who appreciate a more casual dining experience, TJ's is a go-to spot. This family-owned establishment has been serving the Dallas area for years, known for its fresh seafood and laid-back vibe. TJ's offers a wide array of seafood dishes, from fish tacos to grilled salmon.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3 mt-6">Rex's Seafood and Market</h3>
                            <p className="text-charcoal/80 mb-4">Rex's offers a unique combination of a restaurant and a seafood market, allowing diners to enjoy a meal and shop for fresh seafood in one convenient location. Their menu features the popular Lobster Roll and Blackened Redfish.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">✨ Why Choose Jinbeh for Seafood</h2>
                            <div className="grid md:grid-cols-2 gap-4 my-6">
                                {[
                                    { e: "🌟", t: "Premium Quality", d: "Highest quality fish sourced for authentic taste" },
                                    { e: "👨‍🍳", t: "Expert Craft", d: "Traditional Japanese techniques perfected" },
                                    { e: "🍱", t: "Fresh Daily", d: "Seafood expertly prepared each service" },
                                    { e: "⭐", t: "Authentic Experience", d: "Genuine Japanese dining with entertainment" }
                                ].map(x => (
                                    <div key={x.t} className="bg-warm-ivory rounded-xl p-5">
                                        <span className="text-3xl block mb-2">{x.e}</span>
                                        <h3 className="font-bold text-charcoal">{x.t}</h3>
                                        <p className="text-sm text-charcoal/70">{x.d}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">🏪 Seafood Markets Worth Exploring</h2>
                            <p className="text-charcoal/80 mb-6">For those who prefer to cook seafood at home, Dallas offers several top-notch seafood markets where you can find fresh, high-quality products and learn new preparation techniques.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3">Dallas Fish Market</h3>
                            <p className="text-charcoal/80 mb-4">Offering an impressive selection of fresh fish, shellfish, and other seafood delicacies, the Dallas Fish Market caters to home cooks and professional chefs alike. The market also offers cooking classes and demonstrations.</p>

                            <h3 className="text-lg font-bold text-charcoal mb-3 mt-6">Captain Dave's Seafood Market</h3>
                            <p className="text-charcoal/80 mb-6">Known for its wide variety of fish and shellfish, Captain Dave's is a reliable choice for quality seafood. Whether you're looking for live lobster, fresh shrimp, or high-quality fish fillets, the knowledgeable staff is ready to help.</p>

                            <h2 className="text-2xl font-heading font-bold text-charcoal mt-10 mb-4">❓ FAQ</h2>
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-warm-ivory rounded-xl mb-3">
                                    <summary className="p-5 cursor-pointer font-semibold flex justify-between">{faq.question}<span className="text-accent-red group-open:rotate-180">▼</span></summary>
                                    <div className="px-5 pb-5 text-charcoal/80">{faq.answer}</div>
                                </details>
                            ))}

                            <div className="mt-12 p-8 bg-gradient-to-r from-deep-indigo to-accent-red rounded-2xl text-center text-white">
                                <h3 className="text-2xl font-heading font-bold mb-4">🍣 Premium Seafood at Jinbeh</h3>
                                <p className="text-white/80 mb-6">Fresh sushi, sashimi, and seafood platters prepared with traditional Japanese expertise. Experience fine seafood dining at its finest.</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/frisco#reserve" className="bg-white text-deep-indigo px-6 py-3 rounded-xl font-semibold">Reserve Frisco</Link>
                                    <Link href="/lewisville#reserve" className="border-2 border-white px-6 py-3 rounded-xl font-semibold">Reserve Lewisville</Link>
                                </div>
                            </div>
                        </article>

                        <aside>
                            <RelatedArticles currentSlug="best-seafood-dallas" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
