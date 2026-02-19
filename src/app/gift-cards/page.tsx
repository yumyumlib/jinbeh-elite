import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { RevealSection, HeroSection, AnimatedGradientText } from "@/components/MagicUI";

export const metadata: Metadata = {
    title: "Gift Cards | Jinbeh Japanese Restaurant - Frisco & Lewisville",
    description: "Give the gift of an unforgettable dining experience. Purchase Jinbeh gift cards for hibachi, sushi, and Japanese cuisine in Frisco and Lewisville TX.",
    keywords: ["jinbeh gift card", "japanese restaurant gift card", "hibachi gift certificate", "sushi gift card frisco"],
};

export default function GiftCardsPage() {
    return (
        <main className="min-h-screen bg-warm-ivory">
            {/* Hero */}
            <HeroSection className="relative py-20 bg-gradient-to-br from-deep-indigo to-charcoal text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/blog/7-C060324-6447.jpg"
                        alt="Sushi"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <RevealSection>
                        <span className="inline-block px-4 py-2 bg-soft-gold/20 rounded-full text-soft-gold text-sm font-medium mb-6">
                            🎁 The Perfect Gift
                        </span>
                    </RevealSection>
                    <RevealSection delay={100}>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            <AnimatedGradientText className="text-4xl md:text-6xl font-heading font-bold">Jinbeh Gift Cards</AnimatedGradientText>
                        </h1>
                    </RevealSection>
                    <RevealSection delay={200}>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Share the experience of authentic Japanese cuisine, spectacular hibachi shows,
                            and fresh sushi with friends and family. Perfect for any <Link href="/celebrations" className="text-soft-gold hover:underline">celebration</Link>. Read our <Link href="/blog/jinbeh-gift-cards-guide" className="text-soft-gold hover:underline">complete gift card guide</Link> for inspiration.
                        </p>
                    </RevealSection>
                </div>
            </HeroSection>

            {/* Gift Card Options */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <RevealSection>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                                    Purchase a Gift Card
                                </h2>
                                <p className="text-lg text-charcoal/70">
                                    Looking for a Japanese restaurant gift card, hibachi gift certificate, or sushi gift card Frisco? Available in any amount. Perfect for birthdays, holidays, thank-you gifts, and <Link href="/private-dining" className="text-accent-red hover:underline font-medium">private dining</Link> experiences.
                                </p>
                            </div>
                        </RevealSection>

                        {/* Purchase Methods */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {/* In-Store */}
                            <RevealSection delay={100} direction="left">
                                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="relative w-full h-36 rounded-xl overflow-hidden mb-6">
                                        <Image
                                            src="/images/frisco/FriscoLocation_Bar_Front.jpg"
                                            alt="Jinbeh front desk where gift cards can be purchased"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                                        Purchase In-Store
                                    </h3>
                                    <p className="text-charcoal/70 mb-6">
                                        Visit either Jinbeh location to purchase physical gift cards in any amount.
                                    </p>
                                    <div className="flex flex-col items-center gap-3 my-4">
                                        <Link
                                            href="/frisco"
                                            className="inline-block w-1/2 py-3 bg-warm-ivory text-charcoal rounded-xl font-medium hover:bg-warm-ivory-dark transition-colors text-center"
                                        >
                                            Frisco Location
                                        </Link>
                                        <Link
                                            href="/lewisville"
                                            className="inline-block w-1/2 py-3 bg-warm-ivory text-charcoal rounded-xl font-medium hover:bg-warm-ivory-dark transition-colors text-center"
                                        >
                                            Lewisville Location
                                        </Link>
                                    </div>
                                </div>
                            </RevealSection>

                            {/* By Phone */}
                            <RevealSection delay={200} direction="right">
                                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-deep-indigo to-charcoal rounded-2xl flex items-center justify-center">
                                        <span className="text-4xl">📞</span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                                        Order by Phone
                                    </h3>
                                    <p className="text-charcoal/70 mb-6">
                                        Call us to order gift cards. We can mail them or have them ready for pickup.
                                    </p>
                                    <div className="flex flex-col items-center gap-3 my-4">
                                        <a
                                            href="tel:+12146191200"
                                            className="inline-block w-1/2 py-3 bg-accent-red text-white rounded-xl font-medium hover:bg-accent-red-hover transition-colors text-center"
                                        >
                                            Frisco: (214) 619-1200
                                        </a>
                                        <a
                                            href="tel:+12144882224"
                                            className="inline-block w-1/2 py-3 bg-deep-indigo text-white rounded-xl font-medium hover:bg-deep-indigo-hover transition-colors text-center"
                                        >
                                            Lewisville: (214) 488-2224
                                        </a>
                                    </div>
                                </div>
                            </RevealSection>
                        </div>

                        {/* Popular Amounts */}
                        <RevealSection delay={300}>
                            <div className="bg-charcoal rounded-2xl p-8 text-white text-center">
                                <h3 className="text-2xl font-heading font-semibold mb-4">
                                    Popular Gift Card Amounts
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4 mb-6">
                                    {[25, 50, 75, 100, 150, 200].map((amount) => (
                                        <span
                                            key={amount}
                                            className="px-6 py-3 bg-white/10 rounded-xl font-bold text-lg hover:bg-soft-gold/30 hover:scale-105 transition-all duration-300 cursor-default"
                                        >
                                            ${amount}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-white/70">
                                    Custom amounts available. Ask about special occasion packaging!
                                </p>
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* Why Gift Jinbeh */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <RevealSection>
                        <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
                            Why Gift Jinbeh?
                        </h2>
                    </RevealSection>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { emoji: "🔥", title: "Entertainment", desc: "Hibachi shows create unforgettable memories" },
                            { emoji: "🍣", title: "Quality", desc: "Fresh sushi and premium ingredients since 1988" },
                            { emoji: "❤️", title: "Thoughtful", desc: "Perfect for foodies and experience-lovers" },
                        ].map((item, idx) => (
                            <RevealSection key={item.title} delay={idx * 150}>
                                <div className="text-center hover:-translate-y-1 transition-all duration-300">
                                    <span className="text-4xl block mb-3">{item.emoji}</span>
                                    <h3 className="font-heading font-semibold text-charcoal mb-2">{item.title}</h3>
                                    <p className="text-charcoal/70 text-sm">{item.desc}</p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                    <p className="text-center text-charcoal/70 mt-8 max-w-2xl mx-auto">
                        Planning a <Link href="/blog/hibachi-birthday-party-ideas" className="text-accent-red hover:underline font-medium">hibachi birthday party</Link> or <Link href="/blog/romantic-anniversary-dinners" className="text-accent-red hover:underline font-medium">romantic anniversary dinner</Link>? Gift cards make the perfect complement.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-accent-red to-deep-indigo text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Questions About Gift Cards?
                    </h2>
                    <p className="text-white/80 mb-8">
                        Contact us for group orders, corporate gifts, or special packaging requests. Gift cards work for <Link href="/catering" className="text-soft-gold hover:underline">catering</Link> orders too.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-accent-red px-8 py-4 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
