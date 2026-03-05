"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { WordRotate } from "@/components/ui/WordRotate";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { Meteors } from "@/components/ui/Meteors";
import { MagicCard } from "@/components/ui/magic-card";

export default function MenuClient() {
    return (
        <>
            {/* Hero with side-by-side image + text */}
            <section className="relative py-20 bg-gradient-to-br from-charcoal to-deep-indigo text-white overflow-hidden">
                <Meteors number={12} />
                <div className="relative z-10 container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                        {/* Hero Image */}
                        <ScrollReveal direction="left">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-soft-gold/30 flex-shrink-0">
                                <Image
                                    src="/images/food/jinbeh_sushi_tray.jpg"
                                    alt="Jinbeh sushi platter featuring fresh nigiri and specialty rolls"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 192px, 256px"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                            </div>
                        </ScrollReveal>

                        {/* Hero Text */}
                        <div className="text-center md:text-left max-w-xl">
                            <ScrollReveal>
                                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                                    Our Menu
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <p className="text-xl text-white/80">
                                    Authentic Japanese{" "}
                                    <WordRotate
                                        words={["Hibachi", "Sushi", "Sashimi", "Sake & Cocktails"]}
                                        className="text-soft-gold font-semibold"
                                        duration={2500}
                                    />{" "}
                                    crafted with fresh ingredients and decades of tradition. From sizzling{" "}
                                    <Link href="/blog/hibachi-dining-experience" className="text-soft-gold hover:underline">
                                        hibachi entrees
                                    </Link>{" "}
                                    to artisan sushi rolls.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Selection with BentoGrid + photos */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-4">
                                Select a Location
                            </h2>
                            <p className="text-center text-charcoal/70 mb-12">
                                Each location offers our full menu with slight variations. Choose your location to view the complete menu.
                            </p>
                        </ScrollReveal>

                        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <ScrollReveal delay={100} direction="left">
                                <BentoCard
                                    name="Frisco"
                                    description="Near Stonebriar Centre"
                                    href="/frisco/menu"
                                    cta="View Frisco Menu"
                                    className="h-full"
                                    background={
                                        <Image
                                            src="/images/frisco/JinbehFriscoStorefrontSign.jpg"
                                            alt="Jinbeh Frisco location storefront"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    }
                                >
                                    <div className="space-y-2 text-charcoal/70 mt-4">
                                        <p>🍱 Full Hibachi Menu</p>
                                        <p>🍣 Fresh Sushi & Rolls</p>
                                        <p>🍶 Sake & Cocktails</p>
                                    </div>
                                </BentoCard>
                            </ScrollReveal>

                            <ScrollReveal delay={200} direction="right">
                                <BentoCard
                                    name="Lewisville"
                                    description="Off I-35E near Vista Ridge Mall"
                                    href="/lewisville/menu"
                                    cta="View Lewisville Menu"
                                    className="h-full"
                                    background={
                                        <Image
                                            src="/images/beverages/LewisvilleBar.jpg"
                                            alt="Jinbeh Lewisville location interior bar"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    }
                                >
                                    <div className="space-y-2 text-charcoal/70 mt-4">
                                        <p>🍱 Full Hibachi Menu</p>
                                        <p>🍣 Fresh Sushi & Rolls</p>
                                        <p>🍶 Sake & Cocktails</p>
                                    </div>
                                </BentoCard>
                            </ScrollReveal>
                        </BentoGrid>
                    </div>
                </div>
            </section>

            {/* Made Fresh Daily callout */}
            <section className="py-12 bg-charcoal text-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-full md:w-80 aspect-[3/2] rounded-2xl overflow-hidden shadow-xl ring-2 ring-soft-gold/30 flex-shrink-0">
                                <Image
                                    src="/images/catalog/homemade-sauces.jpg"
                                    alt="Jinbeh house-made dipping sauces — spicy chili sauce and signature yum yum sauce made fresh daily from scratch"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 320px"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <span className="inline-block bg-soft-gold/20 text-soft-gold text-xs font-bold px-3 py-1 rounded-full mb-3 border border-soft-gold/30 uppercase tracking-wider">
                                    Made From Scratch
                                </span>
                                <h3 className="text-2xl font-heading font-bold mb-3">
                                    Sauces Made Fresh Daily
                                </h3>
                                <p className="text-white/80 leading-relaxed">
                                    Our Yum Yum sauce, spicy chili sauce, garlic butter, and every dipping sauce are made in-house daily from family recipes perfected over 37 years. No pre-packaged shortcuts — you taste the difference.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Menu Highlights with staggered reveal */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
                            Menu Highlights
                        </h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Hibachi Entrees",
                                items: ["Filet Mignon", "Salmon Teriyaki", "Chicken & Shrimp Combo"],
                                icon: "🔥",
                                delay: 100,
                            },
                            {
                                title: "Sushi Favorites",
                                items: ["Dragon Roll", "Rainbow Roll", "Omakase Selection"],
                                icon: "🍣",
                                delay: 200,
                            },
                            {
                                title: "Specialty Drinks",
                                items: ["Premium Sake", "Japanese Whisky", "Signature Cocktails"],
                                icon: "🍶",
                                delay: 300,
                            },
                        ].map((category) => (
                            <ScrollReveal key={category.title} delay={category.delay} className="h-full">
                                <MagicCard
                                    className="text-center p-6 bg-white rounded-xl transition-all duration-300 hover:shadow-lg border-none hover:-translate-y-1 h-full flex flex-col justify-center items-center"
                                    gradientColor="rgba(201, 162, 39, 0.15)"
                                >
                                    <span className="text-4xl block mb-4 pointer-events-none">{category.icon}</span>
                                    <h3 className="font-heading font-semibold text-xl text-charcoal mb-4 pointer-events-none">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-2 text-charcoal/70 pointer-events-none">
                                        {category.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </MagicCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
