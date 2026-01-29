import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Menu | Jinbeh Japanese Restaurant - Frisco & Lewisville",
    description: "Explore Jinbeh's authentic Japanese menu featuring hibachi, sushi, sashimi, and specialty rolls. View menus for our Frisco and Lewisville locations.",
    keywords: ["jinbeh menu", "hibachi menu", "sushi menu frisco", "japanese restaurant menu lewisville"],
};

export default function MenuPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-warm-ivory">
                {/* Hero */}
                <section className="py-20 bg-gradient-to-br from-charcoal to-deep-indigo text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                            Our Menu
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Authentic Japanese cuisine crafted with fresh ingredients and decades of tradition.
                        </p>
                    </div>
                </section>

                {/* Menu Selection */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-4">
                                Select a Location
                            </h2>
                            <p className="text-center text-charcoal/70 mb-12">
                                Each location offers our full menu with slight variations. Choose your location to view the complete menu.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Frisco */}
                                <Link
                                    href="/frisco/menu"
                                    className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-accent-red to-orange-500 rounded-2xl flex items-center justify-center">
                                            <span className="text-3xl">🏯</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors">
                                                Frisco
                                            </h3>
                                            <p className="text-charcoal/60">Near Stonebriar Centre</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-charcoal/70 mb-6">
                                        <p>🍱 Full Hibachi Menu</p>
                                        <p>🍣 Fresh Sushi & Rolls</p>
                                        <p>🍶 Sake & Cocktails</p>
                                    </div>

                                    <span className="inline-flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all">
                                        View Frisco Menu
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Lewisville */}
                                <Link
                                    href="/lewisville/menu"
                                    className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-deep-indigo to-blue-500 rounded-2xl flex items-center justify-center">
                                            <span className="text-3xl">🍣</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors">
                                                Lewisville
                                            </h3>
                                            <p className="text-charcoal/60">Off I-35E</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-charcoal/70 mb-6">
                                        <p>🍱 Full Hibachi Menu</p>
                                        <p>🍣 Fresh Sushi & Rolls</p>
                                        <p>🍶 Sake & Cocktails</p>
                                    </div>

                                    <span className="inline-flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all">
                                        View Lewisville Menu
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Menu Highlights */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
                            Menu Highlights
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    title: "Hibachi Entrees",
                                    items: ["Filet Mignon", "Salmon Teriyaki", "Chicken & Shrimp Combo"],
                                    icon: "🔥"
                                },
                                {
                                    title: "Sushi Favorites",
                                    items: ["Dragon Roll", "Rainbow Roll", "Omakase Selection"],
                                    icon: "🍣"
                                },
                                {
                                    title: "Specialty Drinks",
                                    items: ["Premium Sake", "Japanese Whisky", "Signature Cocktails"],
                                    icon: "🍶"
                                },
                            ].map((category) => (
                                <div key={category.title} className="text-center p-6 bg-warm-ivory rounded-xl">
                                    <span className="text-4xl block mb-4">{category.icon}</span>
                                    <h3 className="font-heading font-semibold text-xl text-charcoal mb-4">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-2 text-charcoal/70">
                                        {category.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-charcoal text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-heading font-bold mb-4">
                            Ready to Dine?
                        </h2>
                        <p className="text-white/80 mb-8">
                            Make a reservation and experience the Jinbeh difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/frisco#reserve"
                                className="btn btn-primary px-8 py-4 text-lg"
                            >
                                Reserve at Frisco
                            </Link>
                            <Link
                                href="/lewisville#reserve"
                                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-4 text-lg"
                            >
                                Reserve at Lewisville
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
