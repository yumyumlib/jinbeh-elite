"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NumberTicker from "@/components/ui/number-ticker";
import ScrollReveal from "@/components/ScrollReveal";
import WordRotate from "@/components/ui/WordRotate";
import Marquee from "@/components/ui/Marquee";
import { BorderBeam } from "@/components/ui/BorderBeam";
import JinbehExperience from "@/components/JinbehExperience";
import OpenTableWidget from "@/components/OpenTableWidget";
import locationsData from "@/data/locations.json";
import { useState, useEffect } from "react";

// Helper to get dynamic reservation CTA based on day of week
function getReservationCTA(): string {
  const day = new Date().getDay();
  // Friday (5), Saturday (6), Sunday (0) = "This Weekend"
  // Monday (1) - Thursday (4) = "This Week"
  if (day === 5 || day === 6 || day === 0) {
    return "Reserve for This Weekend";
  }
  return "Reserve This Week";
}

// Organization Schema for rich snippets
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jinbeh Japanese Restaurant",
  "alternateName": "Jinbeh Hibachi and Sushi Bar",
  "url": "https://jinbeh.com",
  "logo": "/images/logos/JinbehLogo.png",
  "foundingDate": "1988",
  "description": "Family-owned Japanese restaurant serving authentic hibachi and sushi in Frisco and Lewisville, TX since 1988.",
  "sameAs": [
    "https://www.instagram.com/jinbehfrisco/",
    "https://www.facebook.com/Jinbeh/",
    "https://www.yelp.com/biz/jinbeh-japanese-restaurant-frisco"
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "2693 Preston Rd Suite 1040",
      "addressLocality": "Frisco",
      "addressRegion": "TX",
      "postalCode": "75034",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "2440 S Stemmons Fwy #A",
      "addressLocality": "Lewisville",
      "addressRegion": "TX",
      "postalCode": "75067",
      "addressCountry": "US"
    }
  ]
};

// FAQ Schema for homepage rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is hibachi dining?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hibachi dining is a Japanese-style cooking experience where skilled chefs prepare your meal on a large iron griddle right at your table. At Jinbeh, our chefs entertain with knife tricks, the famous onion volcano, and precision cooking techniques."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a reservation at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While walk-ins are welcome, we highly recommend reservations, especially for dinner, weekends, and special occasions. You can reserve online through our website or by calling our Frisco location at (214) 619-1200 or Lewisville at (214) 488-2224."
      }
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh offer sushi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh features a full sushi bar with fresh fish flown in regularly. We offer traditional nigiri, sashimi, and creative specialty rolls like our Dragon Roll and Rainbow Roll."
      }
    },
    {
      "@type": "Question",
      "name": "Is Jinbeh good for birthday celebrations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jinbeh is perfect for birthdays and special celebrations. Our hibachi chefs make every celebration memorable with tableside entertainment, and we can accommodate groups of all sizes."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Jinbeh locations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh has two convenient locations in the DFW area: Frisco (2693 Preston Rd Suite 1040, near Stonebriar Centre) and Lewisville (2440 S Stemmons Fwy #A, easy access from I-35E)."
      }
    }
  ]
};

export default function HomePage() {
  const [reservationCTA, setReservationCTA] = useState("Reserve for This Weekend");

  // Update reservation CTA based on day of week (client-side only)
  useEffect(() => {
    setReservationCTA(getReservationCTA());
  }, []);

  return (
    <>
      {/* Global Navigation Header */}
      <Header />

      <main id="main-content" className="min-h-screen -mt-14">
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* FAQ Schema for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section - Full Screen with Video Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video - Vimeo embed with autoplay, loop, muted - optimized loading */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://player.vimeo.com/video/681592941?autoplay=1&loop=1&muted=1&background=1&autopause=0&portrait=0&byline=0&title=0&badge=0&quality=720p"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
              style={{ aspectRatio: '16/9', width: '177.78vh', height: '100vh' }}
              allow="autoplay; fullscreen"
              title="Jinbeh Hibachi and Sushi Experience"
              loading="eager"
            />
          </div>

          {/* Fallback Image for slow connections */}
          <Image
            src="/images/photoshoot/hibachi-plate-shrimp.jpg"
            alt="Jinbeh hibachi plate with shrimp, fried rice, and vegetables"
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
            {/* Selling Proof - Family Badge + Urgency Hook */}
            <ScrollReveal delay={0}>
              <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-block bg-accent-red text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase shadow-lg">
                  Family-Owned Since 1988
                </span>
                <span className="inline-block bg-soft-gold/90 text-charcoal px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg animate-pulse">
                  {reservationCTA}
                </span>
              </div>
            </ScrollReveal>

            {/* Trust Signals - Proof on fold with Animated Numbers */}
            <ScrollReveal delay={100}>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6 text-white/90 text-sm">
                <span className="flex items-center gap-2 bg-charcoal/30 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">
                    <NumberTicker value={4.5} decimalPlaces={1} className="font-bold" />+ Stars on Google
                  </span>
                </span>
                <span className="bg-charcoal/30 backdrop-blur-sm px-4 py-2 rounded-full">
                  <NumberTicker value={1000} className="font-bold" />+ 5-Star Reviews
                </span>
                <span className="bg-charcoal/30 backdrop-blur-sm px-4 py-2 rounded-full">
                  <NumberTicker value={37} className="font-bold" />+ Years of Excellence
                </span>
              </div>
            </ScrollReveal>

            {/* SEO-optimized H1 (visually hidden, read by search engines) */}
            <h1 className="sr-only">
              Jinbeh Japanese Restaurant - Best Hibachi & Sushi in Frisco & Lewisville TX
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
                  words={["Dinner and a Show", "A Warm Welcome", "Where Memories Are Made", "The Art of Hibachi"]}
                  duration={4000}
                />
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-xl md:text-2xl text-warm-ivory mb-6 font-medium"
                 style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.5)' }}>
                When&apos;s the last time dinner was actually entertaining?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-warm-ivory/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md"
                 style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                For over 37 years, Jinbeh has been the place where birthdays become unforgettable, date nights become stories, and dinner becomes a show. Our hibachi chefs don&apos;t just cook—they perform.
                <span className="block mt-2">Fresh sushi. Spectacular flames. Memories that last a lifetime.</span>
              </p>
            </ScrollReveal>

            {/* Location Selection Cards */}
            <ScrollReveal delay={500}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                {/* Frisco Location Card */}
                <div className="group relative overflow-hidden bg-charcoal/40 backdrop-blur-md border border-white/30 rounded-2xl p-8 min-w-[280px] shadow-2xl hover:border-soft-gold/50 transition-all duration-300">
                  <BorderBeam size={120} duration={8} colorFrom="#C9A227" colorTo="#C1121F" />
                  <div className="text-center">
                    {/* Location-specific proof hook */}
                    <span className="inline-block bg-soft-gold/20 text-soft-gold text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-soft-gold/30">
                      #1 Rated Hibachi in Frisco
                    </span>
                    <h2 className="text-2xl font-heading font-semibold text-white mb-2 drop-shadow-lg">
                      Frisco
                    </h2>
                    <p className="text-warm-ivory/80 text-sm mb-5 drop-shadow-md">
                      Near Stonebriar Centre
                    </p>
                    <div className="flex flex-col gap-3">
                      <OpenTableWidget
                        restaurantId={locationsData.locations.frisco.reservation.rid}
                        location="frisco"
                        buttonText="Reserve a Table"
                        variant="primary"
                        className="shimmer-cta inline-flex items-center justify-center gap-2 bg-soft-gold hover:bg-soft-gold/90 text-charcoal px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                      />
                      <a
                        href="tel:2146191200"
                        className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-charcoal text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/40"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (214) 619-1200
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lewisville Location Card */}
                <div className="group relative overflow-hidden bg-charcoal/40 backdrop-blur-md border border-white/30 rounded-2xl p-8 min-w-[280px] shadow-2xl hover:border-soft-gold/50 transition-all duration-300">
                  <BorderBeam size={120} duration={8} delay={4} colorFrom="#C1121F" colorTo="#C9A227" />
                  <div className="text-center">
                    {/* Location-specific proof hook */}
                    <span className="inline-block bg-soft-gold/20 text-soft-gold text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-soft-gold/30">
                      Best Sushi in Lewisville
                    </span>
                    <h2 className="text-2xl font-heading font-semibold text-white mb-2 drop-shadow-lg">
                      Lewisville
                    </h2>
                    <p className="text-warm-ivory/80 text-sm mb-5 drop-shadow-md">
                      Easy access from I-35E
                    </p>
                    <div className="flex flex-col gap-3">
                      <OpenTableWidget
                        restaurantId={locationsData.locations.lewisville.reservation.rid}
                        location="lewisville"
                        buttonText="Reserve a Table"
                        variant="primary"
                        className="shimmer-cta inline-flex items-center justify-center gap-2 bg-soft-gold hover:bg-soft-gold/90 text-charcoal px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                      />
                      <a
                        href="tel:2144882224"
                        className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-charcoal text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/40"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (214) 488-2224
                      </a>
                    </div>
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

        {/* Jinbeh Experience - Merged Section with Best Elements */}
        <JinbehExperience />

        {/* Stats Section - Redesigned with Strong Visual Contrast */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-soft-gold/10 via-warm-ivory to-soft-gold/5 relative overflow-hidden border-y-4 border-soft-gold/20">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #C9A227 1.5px, transparent 1.5px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header for context */}
            <div className="text-center mb-16">
              <span className="inline-block bg-cedar-brown/10 text-cedar-brown text-sm font-semibold px-6 py-2 rounded-full mb-4 border border-cedar-brown/20 tracking-wide">
                TRUSTED BY FAMILIES ACROSS DFW
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                37 Years of Excellence
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
                Family-owned, community-loved, and serving unforgettable experiences since 1988
              </p>
            </div>

            {/* Stats grid with enhanced visual hierarchy */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-soft-gold/20 hover:border-soft-gold hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-cedar-brown mb-3 group-hover:text-accent-red transition-colors">
                      <NumberTicker value={37} suffix="+" delay={0.2} />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-charcoal/80 leading-snug">
                      Years Serving<br />DFW Families
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-soft-gold/20 hover:border-soft-gold hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-cedar-brown mb-3 group-hover:text-accent-red transition-colors">
                      <NumberTicker value={1000} suffix="+" delay={0.3} />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-charcoal/80 leading-snug">
                      5-Star<br />Reviews
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-soft-gold/20 hover:border-soft-gold hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-cedar-brown mb-3 group-hover:text-accent-red transition-colors">
                      <NumberTicker value={68000} suffix="+" delay={0.4} />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-charcoal/80 leading-snug">
                      Meals Served<br />Annually
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-soft-gold/20 hover:border-soft-gold hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-cedar-brown mb-3 group-hover:text-accent-red transition-colors">
                      <NumberTicker value={2} delay={0.5} />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-charcoal/80 leading-snug">
                      Convenient<br />Locations
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Tagline reinforcement */}
            <div className="text-center mt-16">
              <p className="text-xl md:text-2xl font-heading italic text-cedar-brown/90 max-w-3xl mx-auto">
                "We&apos;ve been coming here for over 20 years... and we&apos;ll return soon." — Real Google Review
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-24 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 italic">
                  See Why Families Choose Jinbeh
                </h2>
                <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                  From spectacular flame shows to stunning sushi presentations—this is dinner and a show
                </p>
              </div>
            </ScrollReveal>

            {/* Image Gallery Grid - Professional Photoshoot Images with lazy loading and responsive srcset */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
              <ScrollReveal delay={0} className="gallery-item md:col-span-2 aspect-[16/10]">
                <Image
                  src="/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-006-orig-IMG_1848-1200w.webp"
                  alt="Jinbeh hibachi chef performing spectacular flame show at teppanyaki grill Lewisville TX"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                />
              </ScrollReveal>
              <ScrollReveal delay={100} className="gallery-item md:col-span-2 aspect-[16/10]">
                <Image
                  src="/images/hibachi-lewisville-2026/jinbeh-hibachi-dinner-plate-lewisville-002-orig-IMG_2002-1200w.webp"
                  alt="Beautifully plated hibachi dinner with steak, shrimp, and fried rice at Jinbeh Japanese Restaurant"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                />
              </ScrollReveal>
              <ScrollReveal delay={200} className="gallery-item aspect-square">
                <Image
                  src="/images/hibachi-lewisville-2026/jinbeh-sushi-presentation-lewisville-001-orig-IMG_1870-800w.webp"
                  alt="Fresh sushi and sashimi presentation at Jinbeh Japanese Restaurant Lewisville TX"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  quality={82}
                />
              </ScrollReveal>
              <ScrollReveal delay={250} className="gallery-item aspect-square">
                <Image
                  src="/images/hibachi-lewisville-2026/jinbeh-hibachi-grill-cooking-lewisville-015-orig-IMG_1930-800w.webp"
                  alt="Close-up of fresh ingredients cooking on Jinbeh hibachi grill in Lewisville TX"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  quality={82}
                />
              </ScrollReveal>
              <ScrollReveal delay={300} className="gallery-item aspect-square">
                <Image
                  src="/images/hibachi-lewisville-2026/jinbeh-hibachi-fried-rice-art-lewisville-014-orig-IMG_1904-800w.webp"
                  alt="Jinbeh hibachi chef creating artistic fried rice design on teppanyaki grill Lewisville TX"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  quality={82}
                />
              </ScrollReveal>
              <ScrollReveal delay={350} className="gallery-item aspect-square">
                <Image
                  src="/images/hibachi-lewisville-2026/jinbeh-japanese-restaurant-interior-lewisville-002-orig-IMG_1830-800w.webp"
                  alt="Warm interior ambiance of Jinbeh Japanese Restaurant hibachi dining room Lewisville TX"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  quality={82}
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Video Section - Hibachi Experience - Lazy loaded for performance */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block w-16 h-1 bg-gradient-to-r from-white/40 to-soft-gold rounded-full mb-6" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 italic">
                  Dinner and a Show
                </h2>
                <p className="text-lg text-warm-ivory/70 max-w-2xl mx-auto">
                  When&apos;s the last time your whole table was clapping and cheering at dinner? That&apos;s every night at Jinbeh.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                  {/* VideoSchema for SEO */}
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "Jinbeh Hibachi Cooking Experience",
                        "description": "Watch our master teppanyaki chefs prepare delicious hibachi dishes tableside with impressive knife skills and the famous onion volcano.",
                        "thumbnailUrl": "https://jinbeh.com/images/food/onion-volcano.jpg",
                        "uploadDate": "2023-01-15",
                        "duration": "PT2M3S",
                        "contentUrl": "https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
                      })
                    }}
                  />
                  <Image
                    src="/images/food/onion-volcano.jpg"
                    alt="Jinbeh hibachi chef creating the famous onion volcano with flames at the teppanyaki grill"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                    priority
                  />
                  {/* Subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
                <p className="text-center text-warm-ivory/80 mt-4 text-sm">
                  Experience the artistry of teppanyaki cooking at Jinbeh
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg className="w-8 h-8 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <h2 className="text-2xl font-heading font-bold text-charcoal">
                  Follow Us @JinbehFrisco
                </h2>
              </div>
              <p className="text-charcoal/70 mb-8">
                Tag @JinbehFrisco and share your experience—best photo each month wins a free appetizer!
              </p>
              <a
                href="https://instagram.com/JinbehFrisco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-deep-indigo via-accent-red to-soft-gold text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
                View on Instagram
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonial Section - Multiple Reviews */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Review Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Review",
                itemReviewed: { "@type": "Restaurant", name: "Jinbeh Japanese Restaurant" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Sarah M." },
                reviewBody: "Best hibachi experience in DFW! The kids were absolutely mesmerized by the chef performance."
              })
            }}
          />

          <ScrollReveal>
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4 italic">
                  What Our Guests Say
                </h2>
                <div className="flex items-center justify-center gap-2 text-charcoal/70">
                  <span className="font-semibold text-soft-gold text-xl">4.5</span>
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm">from <strong className="font-semibold">1,247</strong> Google reviews</span>
                </div>
              </div>

              {/* Testimonial Marquee - Premium Scrolling Effect */}
              <div className="relative">
                {/* Gradient Fade Left */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                {/* Gradient Fade Right */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <Marquee pauseOnHover duration={150}>
                  {/* Testimonial 1 - Verified Google Review */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} colorFrom="#C1121F" colorTo="#C9A227" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;Best hibachi in DFW! The chefs are very entertaining—they always put on an excellent show! We&apos;ve been coming here for years and it never disappoints.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Google Review</p>
                        <p className="text-xs text-charcoal/70">Verified • Frisco</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 - Verified Yelp Review */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={2} colorFrom="#C9A227" colorTo="#C1121F" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;Amazing food. My wife and I were blown away by the Filet and Lobster tail. 10/10 food. The ginger sauce and appetizer soup were terrific as well.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF1A1A]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.835a1.073 1.073 0 0 1-.932 1.326 9.265 9.265 0 0 1-4.023-.646 1.073 1.073 0 0 1-.373-1.655l3.004-3.963c.601-.79 1.81-.39 1.827.612l.497 4.326z"/></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Yelp Review</p>
                        <p className="text-xs text-charcoal/70">Verified • Frisco</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 - Verified Google Review */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={4} colorFrom="#C1121F" colorTo="#C9A227" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;From the sushi to the shrimp to the steak... it was perfection! Service is fantastic and the cook was fun, approachable, and charismatic.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Google Review</p>
                        <p className="text-xs text-charcoal/70">Verified • Frisco</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 4 - Verified Yelp Review */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={6} colorFrom="#C9A227" colorTo="#C1121F" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;It&apos;s truly the perfect place for kids, birthdays, and entertaining the whole fam! We&apos;ve been coming here for over 20 years and will return soon.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF1A1A]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.835a1.073 1.073 0 0 1-.932 1.326 9.265 9.265 0 0 1-4.023-.646 1.073 1.073 0 0 1-.373-1.655l3.004-3.963c.601-.79 1.81-.39 1.827.612l.497 4.326z"/></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Yelp Review</p>
                        <p className="text-xs text-charcoal/70">Verified • Frisco</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 5 - Verified Grubhub Review */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={8} colorFrom="#C1121F" colorTo="#C9A227" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;I actually prefer this place over Benihana. Best steak I&apos;ve ever had. 10/10... food touched my soul. The portions are generous too!&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Grubhub Review</p>
                        <p className="text-xs text-charcoal/70">Verified • Lewisville</p>
                      </div>
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Final CTA Section - Action Oriented Closing */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-charcoal via-cedar-brown/20 to-charcoal text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-soft-gold rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-red rounded-full mix-blend-multiply filter blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 italic">
                  Your Table Is Waiting
                </h2>
                <p className="text-xl md:text-2xl text-warm-ivory/90 mb-12 leading-relaxed">
                  Every week, hundreds of families choose Jinbeh for their celebrations, date nights, and casual dinners. Prime time hibachi tables (6-8pm) fill up fast—especially on weekends. Don&apos;t miss out on DFW&apos;s favorite dinner and a show.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <OpenTableWidget
                    restaurantId={locationsData.locations.frisco.reservation.rid}
                    location="frisco"
                    buttonText={reservationCTA}
                    variant="primary"
                    className="shimmer-cta glow-cta inline-flex items-center justify-center gap-2 bg-soft-gold hover:bg-soft-gold/90 text-charcoal px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                  />
                  <a
                    href="tel:2146191200"
                    className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/40 hover:border-white/60"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Frisco
                  </a>
                </div>

                <div className="mt-12 pt-12 border-t border-white/20">
                  <p className="text-sm text-warm-ivory/70 mb-4">
                    Can&apos;t decide? Visit both locations for different atmospheres
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
                    <div>
                      <p className="font-semibold mb-2">Frisco</p>
                      <a
                        href="tel:2146191200"
                        className="text-soft-gold hover:text-soft-gold/80 transition-colors"
                      >
                        (214) 619-1200
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Lewisville</p>
                      <a
                        href="tel:2144882224"
                        className="text-soft-gold hover:text-soft-gold/80 transition-colors"
                      >
                        (214) 488-2224
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Both Locations - Clean Combined Section */}
        <section className="py-16 md:py-20 bg-warm-ivory border-t border-stone-200">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-3 italic">
                  Two Locations, One Unforgettable Experience
                </h2>
                <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
                  Both locations serve the same award-winning menu with the same passionate chefs. Choose the one closest to you.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Frisco */}
              <ScrollReveal delay={0}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:border-soft-gold/50 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-heading font-semibold text-charcoal mb-2">Jinbeh Frisco</h3>
                  <p className="text-cedar-brown font-medium text-sm mb-4">Near Stonebriar Centre</p>
                  <div className="space-y-2 text-charcoal/70 text-sm mb-6">
                    <p>2693 Preston Rd Suite 1040, Frisco, TX 75034</p>
                    <p>
                      <a href="tel:2146191200" className="text-accent-red hover:text-accent-red/80 font-semibold transition-colors">
                        (214) 619-1200
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <OpenTableWidget
                      restaurantId={locationsData.locations.frisco.reservation.rid}
                      location="frisco"
                      buttonText="Reserve at Frisco"
                      variant="primary"
                      className="shimmer-cta inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:scale-105"
                    />
                    <a
                      href="https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Frisco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-charcoal/70 hover:text-charcoal text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Lewisville */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:border-soft-gold/50 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-heading font-semibold text-charcoal mb-2">Jinbeh Lewisville</h3>
                  <p className="text-cedar-brown font-medium text-sm mb-4">Easy I-35E Access</p>
                  <div className="space-y-2 text-charcoal/70 text-sm mb-6">
                    <p>2440 S Stemmons Fwy #A, Lewisville, TX 75067</p>
                    <p>
                      <a href="tel:2144882224" className="text-accent-red hover:text-accent-red/80 font-semibold transition-colors">
                        (214) 488-2224
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <OpenTableWidget
                      restaurantId={locationsData.locations.lewisville.reservation.rid}
                      location="lewisville"
                      buttonText="Reserve at Lewisville"
                      variant="primary"
                      className="shimmer-cta inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:scale-105"
                    />
                    <a
                      href="https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Lewisville"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-charcoal/70 hover:text-charcoal text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Mobile CTA Bar - Fixed at bottom on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-2xl safe-area-bottom">
        <div className="grid grid-cols-2 divide-x divide-stone-200">
          <a
            href="tel:2146191200"
            className="flex items-center justify-center gap-2 py-4 text-charcoal font-semibold hover:bg-warm-ivory transition-colors"
          >
            <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <OpenTableWidget
            restaurantId={locationsData.locations.frisco.reservation.rid}
            location="frisco"
            buttonText="Reserve"
            variant="primary"
            className="flex items-center justify-center gap-2 py-4 bg-accent-red text-white font-semibold hover:bg-accent-red-hover transition-colors w-full"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
