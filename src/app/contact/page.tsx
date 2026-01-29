import Link from "next/link";
import type { Metadata } from "next";
import locations from "@/data/locations.json";

export const metadata: Metadata = {
    title: "Contact Us | Jinbeh Japanese Restaurant - Frisco & Lewisville",
    description: "Contact Jinbeh Japanese Restaurant for reservations, catering inquiries, or feedback. Two locations in Frisco and Lewisville TX.",
    keywords: ["jinbeh contact", "japanese restaurant phone", "jinbeh reservations", "jinbeh catering inquiry"],
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {/* Hero */}
            <section className="py-20 bg-charcoal text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Reach out for reservations, catering, or just to say hello.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Frisco */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">🏯</span>
                                <h2 className="text-2xl font-heading font-bold text-charcoal">
                                    Jinbeh Frisco
                                </h2>
                            </div>

                            <address className="not-italic text-charcoal/80 mb-6">
                                <p className="font-medium text-charcoal">{frisco.address.street}</p>
                                <p>{frisco.address.suite}</p>
                                <p>{frisco.address.city}, {frisco.address.state} {frisco.address.zip}</p>
                            </address>

                            <div className="space-y-3 mb-6">
                                <a
                                    href={`tel:${frisco.phoneClean}`}
                                    className="flex items-center gap-3 text-charcoal hover:text-accent-red transition-colors"
                                >
                                    <span className="text-xl">📞</span>
                                    <span className="font-medium">{frisco.phone}</span>
                                </a>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={frisco.reservation.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 btn btn-primary text-center"
                                >
                                    Reserve Table
                                </a>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${frisco.geo.latitude},${frisco.geo.longitude}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 btn bg-charcoal text-white hover:bg-charcoal-light text-center"
                                >
                                    Directions
                                </a>
                            </div>
                        </div>

                        {/* Lewisville */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">🍣</span>
                                <h2 className="text-2xl font-heading font-bold text-charcoal">
                                    Jinbeh Lewisville
                                </h2>
                            </div>

                            <address className="not-italic text-charcoal/80 mb-6">
                                <p className="font-medium text-charcoal">{lewisville.address.street}</p>
                                <p>{lewisville.address.suite}</p>
                                <p>{lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}</p>
                            </address>

                            <div className="space-y-3 mb-6">
                                <a
                                    href={`tel:${lewisville.phoneClean}`}
                                    className="flex items-center gap-3 text-charcoal hover:text-accent-red transition-colors"
                                >
                                    <span className="text-xl">📞</span>
                                    <span className="font-medium">{lewisville.phone}</span>
                                </a>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={lewisville.reservation.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 btn btn-primary text-center"
                                >
                                    Reserve Table
                                </a>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${lewisville.geo.latitude},${lewisville.geo.longitude}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 btn bg-charcoal text-white hover:bg-charcoal-light text-center"
                                >
                                    Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
                        Quick Links
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            { icon: "📖", label: "View Menu", href: "/frisco/menu" },
                            { icon: "🎂", label: "Celebrations", href: "/celebrations" },
                            { icon: "🍴", label: "Catering", href: "/catering" },
                            { icon: "🎁", label: "Gift Cards", href: "/gift-cards" },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="bg-warm-ivory rounded-xl p-6 text-center hover:bg-warm-ivory-dark transition-colors group"
                            >
                                <span className="text-3xl block mb-2">{link.icon}</span>
                                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Catering Inquiry CTA */}
            <section className="py-16 bg-gradient-to-r from-deep-indigo to-accent-red text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Planning a Special Event?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        Our catering team brings the Jinbeh experience to your location.
                        Contact us for corporate events, weddings, and private parties.
                    </p>
                    <Link
                        href="/catering"
                        className="inline-block bg-white text-deep-indigo px-8 py-4 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                    >
                        Learn About Catering
                    </Link>
                </div>
            </section>
        </main>
    );
}
