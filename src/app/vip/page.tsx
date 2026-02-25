import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipClubForm from "@/components/VipClubForm";
import { HeroSection, RevealSection, ShinyBadge } from "@/components/MagicUI";

export const metadata: Metadata = {
    title: "Jinbeh VIP Club | Exclusive Offers & Birthday Gifts",
    description: "Join 1,200+ Jinbeh VIP members. Get a free birthday dessert, a $25 gift card on your birthday, and access to our secret menu.",
    keywords: [
        "jinbeh vip",
        "vip club",
        "birthday reward",
        "free dessert",
        "jinbeh rewards",
        "loyalty program",
    ],
    alternates: {
        canonical: "https://jinbeh.com/vip",
    },
    openGraph: {
        title: "Jinbeh VIP Club | Join the Family",
        description: "Join 1,200+ Jinbeh VIP members. Unlock a free dessert and $25 gift card on your birthday.",
        url: "https://jinbeh.com/vip",
        type: "website",
    }
};

export default function VipPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-warm-ivory">
                {/* Simple Hero */}
                <HeroSection className="py-16 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <RevealSection>
                            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4 flex justify-center">
                                <ShinyBadge className="!text-soft-gold">✦ Join 1,200+ VIP Members ✦</ShinyBadge>
                            </p>
                        </RevealSection>
                        <RevealSection delay={100}>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                                The Jinbeh VIP Club
                            </h1>
                        </RevealSection>
                        <RevealSection delay={200}>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Join our exclusive community to unlock special member perks, including a free dessert and a $25 gift card on your birthday when you dine with us!
                            </p>
                        </RevealSection>
                    </div>
                </HeroSection>

                {/* The Form */}
                <section className="py-12 px-6">
                    <div className="container mx-auto">
                        <VipClubForm />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
