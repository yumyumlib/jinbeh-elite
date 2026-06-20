"use client";

import RespImage from "@/components/RespImage";
import SocialProofBar from "@/components/SocialProofBar";
import { useState, useEffect } from "react";
// VIDEO TEMPORARILY DISABLED — static hero image only for faster load & lower bounce rate.
// TODO: Re-enable once we have a shorter/faster video edit optimized for web.
// See Obsidian note: "Homepage Video Optimization" for details.
import ScrollReveal from "@/components/ScrollReveal";
import WordRotate from "@/components/ui/WordRotate";
import { BorderBeam } from "@/components/ui/BorderBeam";
import OpenTableWidget from "@/components/OpenTableWidget";
import locationsData from "@/data/locations.json";
import hooksData from "@/data/hooks.json";
import { fireConversion } from "@/lib/gtag";

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
    // Update reservation CTA based on day of week (client-side only)
    useEffect(() => {
        setReservationCTA(getReservationCTA());
    }, []);

    return (
        <section className="relative flex items-center justify-center overflow-hidden min-h-[90vh] md:min-h-screen py-16 sm:py-24 md:py-32 w-full max-w-[100vw]">
            {/* Hero Image - static for fast load, no video until optimized version is ready.
                Responsive art-direction via <picture>: a portrait hibachi-fire photo on
                phones/tablets (where a tall image fills the viewport far better than a
                cropped landscape), and the existing landscape poster on desktop. Only ONE
                resource downloads per viewport (the browser picks the first matching
                <source>, else the <img>/RespImage desktop srcset). Eager + high priority
                because the hero is above the fold on every viewport (lazy-loading an LCP
                image is a Lighthouse anti-pattern). */}
            <picture>
                {/* Mobile (< 768px): portrait fire photo — webp, jpeg fallback */}
                <source
                    media="(max-width: 767px)"
                    type="image/webp"
                    srcSet="/images/hero/jinbeh-hibachi-chef-fire-show-mobile-750.webp 750w, /images/hero/jinbeh-hibachi-chef-fire-show-mobile-1500.webp 1500w"
                    sizes="100vw"
                />
                <source
                    media="(max-width: 767px)"
                    srcSet="/images/hero/jinbeh-hibachi-chef-fire-show-mobile-750.jpg 750w"
                    sizes="100vw"
                />
                {/* Tablet (768px–1024px): same portrait photo, larger variant */}
                <source
                    media="(min-width: 768px) and (max-width: 1024px)"
                    type="image/webp"
                    srcSet="/images/hero/jinbeh-hibachi-chef-fire-show-mobile-1200.webp 1200w"
                    sizes="100vw"
                />
                {/* Desktop (> 1024px): unchanged landscape hero with its responsive webp srcset */}
                <RespImage
                    src="/images/hero/jinbeh-hero-poster.jpg"
                    alt="Jinbeh hibachi chef creating a towering flame show while grilling steak, shrimp, and vegetables at the teppanyaki grill in Frisco TX"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center z-0"
                />
            </picture>

            {/* Dark Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[2]" />

            {/* Content with text shadows for better readability */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto w-full">
                {/* Selling Proof — Consolidated trust line */}
                <ScrollReveal delay={0} direction="none" noScale>
                    <div className="mb-6 flex flex-col items-center gap-3">
                        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
                            <span className="inline-flex items-center gap-1.5 bg-accent-red/90 text-white px-3 sm:px-4 py-1.5 rounded-full font-semibold tracking-wide shadow-lg">
                                Award-Winning · Family-Owned Since 1988
                            </span>
                            <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full font-medium border border-white/20">
                                <svg className="w-4 h-4 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Rated 4.2–4.8 across platforms · 1,600+ reviews
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* SEO-optimized H1 - rich with location + cuisine keywords */}
                <h1 className="text-sm sm:text-base md:text-lg font-heading font-medium tracking-wide text-warm-ivory/90 mb-3 sm:mb-4 max-w-3xl mx-auto break-words text-balance leading-snug"
                    style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                    DFW&apos;s Premier Japanese, Hibachi, and Premium Sushi Experience in Frisco &amp; Lewisville
                </h1>

                <ScrollReveal delay={200} direction="none" noScale>
                    {/* Hook size: scales from 22px (mobile) up to ~72px (desktop). Previously locked
                        at text-3xl/30px on mobile, which overflowed the viewport for long hooks like
                        "When's the last time dinner was actually entertaining?". min-h scales with the
                        font so empty space doesn't dominate above-the-fold on small screens. */}
                    <p className="text-[1.375rem] leading-tight sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-3 sm:mb-4 tracking-tight sm:tracking-wide italic text-white min-h-[3.5rem] sm:min-h-[6rem] md:min-h-[9rem] flex items-center justify-center break-words text-balance px-1"
                        role="heading"
                        aria-level={2}
                        style={{
                            textShadow: '2px 2px 0px rgba(0,0,0,0.9), 4px 4px 8px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.8)',
                            WebkitTextStroke: '0.5px rgba(0,0,0,0.3)'
                        }}>
                        <WordRotate
                            words={hooksData.homepage.hero_hooks.map(hook => hook.text)}
                            duration={4000}
                        />
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={300} direction="none" noScale>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-warm-ivory mb-8 sm:mb-10 font-medium mx-auto max-w-2xl break-words text-balance leading-snug"
                        style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.5)' }}>
                        {hooksData.homepage.hero_hooks[0].subtitle}
                    </p>
                </ScrollReveal>

                {/* Location Selection Cards */}
                <ScrollReveal delay={500} direction="none" noScale>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-start mb-8">
                        {/* Frisco Location Card — compact */}
                        <div className="group relative overflow-hidden bg-charcoal/40 backdrop-blur-md border border-white/25 rounded-xl px-4 py-5 sm:px-5 w-full max-w-[340px] sm:max-w-[300px] sm:w-[280px] mx-auto sm:mx-0 shadow-xl hover:border-accent-red/50 transition-all duration-300">
                            <BorderBeam size={100} duration={8} colorFrom="#C1121F" colorTo="#C9A227" />
                            <div className="text-center">
                                <span className="inline-block bg-soft-gold/20 text-soft-gold text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 border border-soft-gold/30 uppercase tracking-wider">
                                    #1 Rated Hibachi in Frisco
                                </span>
                                <h2 className="text-xl font-heading font-semibold text-white mb-0.5 drop-shadow-lg">
                                    Frisco
                                </h2>
                                <p className="text-warm-ivory/70 text-xs mb-1.5">
                                    Near Stonebriar Centre
                                </p>
                                <div className="flex items-center justify-center gap-1.5 mb-3 text-xs">
                                    <span className="text-soft-gold tracking-tight" aria-hidden="true">★★★★★</span>
                                    <span className="font-semibold text-white">4.6</span>
                                    <span className="text-warm-ivory/70">· 601 OpenTable reviews</span>
                                </div>
                                <OpenTableWidget
                                    restaurantId={locationsData.locations.frisco.reservation.rid}
                                    location="frisco"
                                    buttonText={reservationCTA}
                                    variant="primary"
                                    className="shimmer-cta inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                />
                                <a
                                    href="tel:2146191200"
                                    onClick={() => fireConversion("phone_call")}
                                    aria-label="Call Jinbeh Frisco" className="mt-2 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/20 hover:border-white/40"
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
                                    onClick={() => fireConversion("directions")}
                                    aria-label="View on Google Maps" className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs text-white/50 hover:text-soft-gold transition-colors w-full"
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
                        <div className="group relative overflow-hidden bg-charcoal/40 backdrop-blur-md border border-white/25 rounded-xl px-4 py-5 sm:px-5 w-full max-w-[340px] sm:max-w-[300px] sm:w-[280px] mx-auto sm:mx-0 shadow-xl hover:border-accent-red/50 transition-all duration-300">
                            <BorderBeam size={100} duration={8} delay={4} colorFrom="#C1121F" colorTo="#C9A227" />
                            <div className="text-center">
                                <span className="inline-block bg-soft-gold/20 text-soft-gold text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 border border-soft-gold/30 uppercase tracking-wider">
                                    Best Sushi in Lewisville
                                </span>
                                <h2 className="text-xl font-heading font-semibold text-white mb-0.5 drop-shadow-lg">
                                    Lewisville
                                </h2>
                                <p className="text-warm-ivory/70 text-xs mb-1.5">
                                    Easy access from I-35E
                                </p>
                                <div className="flex items-center justify-center gap-1.5 mb-3 text-xs">
                                    <span className="text-soft-gold tracking-tight" aria-hidden="true">★★★★★</span>
                                    <span className="font-semibold text-white">4.7</span>
                                    <span className="text-warm-ivory/70">· 427 OpenTable reviews</span>
                                </div>
                                <OpenTableWidget
                                    restaurantId={locationsData.locations.lewisville.reservation.rid}
                                    location="lewisville"
                                    buttonText={reservationCTA}
                                    variant="primary"
                                    className="shimmer-cta inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                />
                                <a
                                    href="tel:2144882224"
                                    onClick={() => fireConversion("phone_call")}
                                    aria-label="Call Jinbeh Lewisville" className="mt-2 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/20 hover:border-white/40"
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
                                    onClick={() => fireConversion("directions")}
                                    aria-label="View on Google Maps" className="mt-2 inline-flex items-center justify-center gap-1.5 text-xs text-white/50 hover:text-soft-gold transition-colors w-full"
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
