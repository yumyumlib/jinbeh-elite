import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { RevealSection, HeroSection, AnimatedGradientText } from "@/components/MagicUI";
import { MagicCard } from "@/components/ui/magic-card";

import BreadcrumbNav from "@/components/BreadcrumbNav";

// JSON-LD Schema for Gift Cards
const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Jinbeh Restaurant Gift Card",
    "description": "Give the gift of an unforgettable dining experience. Jinbeh gift cards for hibachi, sushi, and Japanese cuisine in Frisco and Lewisville TX. Available for in-person purchase at either location only — gift cards cannot be purchased over the phone or mailed.",
    "brand": {
        "@type": "Brand",
        "name": "Jinbeh Japanese Restaurant"
    },
    "category": "Gift Cards",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "25.00",
        "highPrice": "200.00",
        "offerCount": "100",
        "availability": "https://schema.org/InStock",
        "url": "https://jinbeh.com/gift-cards"
    }
};

export const metadata: Metadata = {
    title: "Gift Cards | Jinbeh Japanese Restaurant - Frisco & Lewisville",
    description: "Give the gift of an unforgettable dining experience. Purchase Jinbeh gift cards for hibachi, sushi, and Japanese cuisine in Frisco and Lewisville TX.",
    keywords: ["jinbeh gift card", "japanese restaurant gift card", "hibachi gift certificate", "sushi gift card frisco"],
    openGraph: {
        title: "Gift Cards | Jinbeh Japanese Restaurant",
        description: "Give the gift of an unforgettable dining experience. Jinbeh gift cards for hibachi and sushi in Frisco & Lewisville.",
        url: "https://jinbeh.com/gift-cards",
    images: [
      {
        url: "https://jinbeh.com/images/catalog/jinbeh-chef-special-fried-rice-cocktails.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Gift Cards",
      },
    ],
        siteName: "Jinbeh Japanese Restaurant",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gift Cards | Jinbeh Japanese Restaurant",
        description: "Give the gift of an unforgettable dining experience. Jinbeh gift cards for hibachi and sushi in Frisco & Lewisville.",
    },
    alternates: {
        canonical: "https://jinbeh.com/gift-cards",
    },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jinbeh.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Gift Cards",
      "item": "https://jinbeh.com/gift-cards"
    }
  ]
};

export default function GiftCardsPage() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl">
        <BreadcrumbNav items={[{ label: "Gift Cards" }]} />
        </div>
            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

            {/* Hero */}
            <HeroSection className="relative py-20 bg-gradient-to-br from-deep-indigo to-charcoal text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/blog/jinbeh-frisco-teriyaki-steak-hibachi-plate.jpg"
                        alt="Teriyaki steak hibachi plate with fried rice and grilled shrimp at Jinbeh Japanese Restaurant"
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

                        {/* In-person purchase only — single prominent card */}
                        <RevealSection delay={100}>
                            <MagicCard
                                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center hover:shadow-xl transition-all duration-300 border-none mb-10"
                                gradientColor="rgba(201, 162, 39, 0.15)"
                            >
                                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 max-w-2xl mx-auto">
                                    <Image
                                        src="/images/frisco/FriscoLocation_Bar_Front.jpg"
                                        alt="Jinbeh front desk where gift cards can be purchased"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mb-3">
                                    Purchase In-Person at Either Location
                                </h3>
                                <p className="text-charcoal/70 max-w-xl mx-auto mb-3">
                                    Jinbeh gift cards are available for in-person purchase at both our Frisco and Lewisville locations. Stop by during business hours and our team will set you up with a physical gift card in any amount.
                                </p>
                                <p className="text-charcoal/60 text-sm max-w-xl mx-auto mb-7">
                                    Please note: gift cards cannot be purchased over the phone or by mail. In-person purchase only.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
                                    <Link
                                        href="/frisco"
                                        className="flex-1 inline-block py-3 bg-accent-red text-white rounded-xl font-semibold hover:bg-accent-red-hover transition-colors text-center"
                                    >
                                        📍 Visit Frisco
                                    </Link>
                                    <Link
                                        href="/lewisville"
                                        className="flex-1 inline-block py-3 bg-deep-indigo text-white rounded-xl font-semibold hover:bg-deep-indigo-hover transition-colors text-center"
                                    >
                                        📍 Visit Lewisville
                                    </Link>
                                </div>
                            </MagicCard>
                        </RevealSection>

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
                            <RevealSection key={item.title} delay={idx * 150} className="h-full">
                                <MagicCard
                                    className="h-full bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none flex flex-col justify-center items-center"
                                    gradientColor="rgba(201, 162, 39, 0.15)"
                                >
                                    <span className="text-4xl block mb-4">{item.emoji}</span>
                                    <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{item.title}</h3>
                                    <p className="text-charcoal/70">{item.desc}</p>
                                </MagicCard>
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
