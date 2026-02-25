"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import WordRotate from "@/components/ui/WordRotate";
import { BorderBeam } from "@/components/ui/BorderBeam";
import OpenTableWidget from "@/components/OpenTableWidget";
import locationsData from "@/data/locations.json";

// Helper to get dynamic reservation CTA based on day of week
function getReservationCTA(): string {
    if (typeof window === "undefined") return "Reserve Your Table";
    const day = new Date().getDay();
    // 0 is Sunday, 1 is Monday, etc.
    if (day === 4 || day === 5) return "Reserve for This Weekend";
    if (day === 6) return "Reserve for Tonight";
    return "Reserve Your Table";
}

export default function HeroSection() {
    const [reservationCTA, setReservationCTA] = useState("Reserve for This Weekend");
    const [videoLoaded, setVideoLoaded] = useState(false);

    // Update reservation CTA based on day of week (client-side only)
    useEffect(() => {
        setReservationCTA(getReservationCTA());
    }, []);

    // Load Vimeo iframe after first scroll OR 4 seconds (whichever is first)
    useEffect(() => {
        let loaded = false;
        const loadVideo = () => {
            if (!loaded) {
                loaded = true;
                setVideoLoaded(true);
            }
        };

        const timer = setTimeout(loadVideo, 4000);
        const onScroll = () => { loadVideo(); };
        window.addEventListener("scroll", onScroll, { passive: true, once: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <section className="relative flex items-center justify-center overflow-hidden min-h-[90vh] md:min-h-screen py-24 md:py-32">
            {/* Background Video - Vimeo embed - deferred until scroll or 4s */}
            {videoLoaded && (
                <div className="absolute inset-0 w-full h-full">
                    <iframe
                        src="https://player.vimeo.com/video/681592941?autoplay=1&loop=1&muted=1&background=1&autopause=0&portrait=0&byline=0&title=0&badge=0&quality=720p"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
                        style={{ aspectRatio: '16/9', width: '177.78vh', height: '100vh' }}
                        allow="autoplay; fullscreen"
                        title="Jinbeh Hibachi and Sushi Experience"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Fallback Image - always visible until video loads - Professional Studio Quality */}
            <Image
                src="/images/catalog/12-C060324-6551.jpg"
                alt="Premium hibachi dinner with filet mignon, lobster tail, shrimp, fried rice and vegetables at Jinbeh Japanese Restaurant"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center -z-10"
                quality={85}
            />

            {/* Dark Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

            {/* Content with text shadows for better readability */}
            <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                {/* Selling Proof — Consolidated trust line */}
                <ScrollReveal delay={0}>
                    <div className="mb-6 flex flex-col items-center gap-3">
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                            <span className="inline-flex items-center gap-1.5 bg-accent-red/90 text-white px-4 py-1.5 rounded-full font-semibold tracking-wide shadow-lg">
                                Family-Owned Since 1988
                            </span>
                            <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full font-medium border border-white/20">
                                <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                4.3 Stars · 1,200+ 5 Star Reviews
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* SEO-optimized H1 - rich with location + cuisine keywords */}
                <h1 className="font-heading font-medium tracking-wide text-warm-ivory/90 mb-4 max-w-3xl mx-auto"
                    style={{ fontSize: '1.125rem', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                    DFW&apos;s Premier Japanese, Hibachi, and Premium Sushi Experience in Frisco &amp; Lewisville
                </h1>

                <ScrollReveal delay={200}>
                    <p className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-wide italic text-white"
                        role="heading"
                        aria-level={2}
                        style={{
                            textShadow: '3px 3px 0px rgba(0,0,0,0.9), 6px 6px 10px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.8)',
                            WebkitTextStroke: '1px rgba(0,0,0,0.3)'
                        }}>
                        <WordRotate
                            words={["Where Memories Are Made", "Dinner and a Show", "The Art of Hibachi"]}
                            duration={4000}
                        />
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                    <p className="text-xl md:text-2xl text-warm-ivory mb-10 font-medium max-w-2xl mx-auto"
                        style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.5)' }}>
                        The dinner your family will talk about for weeks.
                    </p>
                </ScrollReveal>

                {/* Location Selection Cards */}
                <ScrollReveal delay={500}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-start mb-8">
                        {/* Frisco Location Card — compact */}
                        <div className="group relative overflow-hidden bg-charcoal/40 backdrop-blur-md border border-white/25 rounded-xl px-6 py-5 w-[280px] shadow-xl hover:border-accent-red/50 transition-all duration-300">
                            <BorderBeam size={100} duration={8} colorFrom="#C1121F" colorTo="#C9A227" />
                            <div className="text-center">
                                <span className="inline-block bg-soft-gold/20 text-soft-gold text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 border border-soft-gold/30 uppercase tracking-wider">
                                    #1 Rated Hibachi in Frisco
                                </span>
                                <h2 className="text-xl font-heading font-semibold text-white mb-0.5 drop-shadow-lg">
                                    Frisco
                                </h2>
                                <p className="text-warm-ivory/70 text-xs mb-3">
                                    Near Stonebriar Centre
                                </p>
                                <OpenTableWidget
                                    restaurantId={locationsData.locations.frisco.reservation.rid}
                                    location="frisco"
                                    buttonText={reservationCTA}
                                    variant="primary"
                                    className="shimmer-cta inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                />
                                <a
                                    href="tel:2146191200"
                                    className="mt-2 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/20 hover:border-white/40"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    (214) 619-1200
                                </a>
                                <a
                                    href="https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Frisco"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs text-white/50 hover:text-soft-gold transition-colors w-full"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        {/* Lewisville Location Card — compact */}
                        <div className="group relative overflow-hidden bg-charcoal/40 backdrop-blur-md border border-white/25 rounded-xl px-6 py-5 w-[280px] shadow-xl hover:border-accent-red/50 transition-all duration-300">
                            <BorderBeam size={100} duration={8} delay={4} colorFrom="#C1121F" colorTo="#C9A227" />
                            <div className="text-center">
                                <span className="inline-block bg-soft-gold/20 text-soft-gold text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 border border-soft-gold/30 uppercase tracking-wider">
                                    Best Sushi in Lewisville
                                </span>
                                <h2 className="text-xl font-heading font-semibold text-white mb-0.5 drop-shadow-lg">
                                    Lewisville
                                </h2>
                                <p className="text-warm-ivory/70 text-xs mb-3">
                                    Easy access from I-35E
                                </p>
                                <OpenTableWidget
                                    restaurantId={locationsData.locations.lewisville.reservation.rid}
                                    location="lewisville"
                                    buttonText={reservationCTA}
                                    variant="primary"
                                    className="shimmer-cta inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                />
                                <a
                                    href="tel:2144882224"
                                    className="mt-2 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/20 hover:border-white/40"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    (214) 488-2224
                                </a>
                                <a
                                    href="https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Lewisville"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs text-white/50 hover:text-soft-gold transition-colors w-full"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-8 h-8 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
