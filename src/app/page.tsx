
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NumberTicker from "@/components/ui/number-ticker";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/ui/Marquee";
import { BorderBeam } from "@/components/ui/BorderBeam";
import JinbehExperience from "@/components/JinbehExperience";
import OpenTableWidget from "@/components/OpenTableWidget";
import locationsData from "@/data/locations.json";
import HeroSection from "@/components/HeroSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jinbeh Japanese Restaurant | Hibachi & Sushi Since 1988 | Frisco & Lewisville",
    description: "DFW's premier Japanese restaurant since 1988. Hibachi shows, fresh sushi, premium sake, and unforgettable dining in Frisco and Lewisville, TX.",
    alternates: {
        canonical: "https://jinbeh.com",
    },
};



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

        <HeroSection />

        {/* Jinbeh Experience - Merged Section with Best Elements */}
        <JinbehExperience />

        {/* ═══ Explore Our Menu ═══ */}
        <section className="py-24 bg-charcoal text-white relative overflow-hidden content-lazy">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block bg-soft-gold/20 text-soft-gold text-sm font-semibold px-6 py-2 rounded-full mb-6 border border-soft-gold/30 tracking-wide">
                  CRAFTED WITH PASSION
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  Explore Our <span className="text-soft-gold">Menu</span>
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  From tableside hibachi entertainment to hand-crafted sushi rolls, experience authentic Japanese cuisine
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Hibachi */}
              <ScrollReveal delay={0}>
                <Link href="/frisco/hibachi" className="group block relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hq/cooking-on-grill.jpg"
                    alt="Hibachi chef grilling premium proteins and vegetables at Jinbeh teppanyaki table"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">Hibachi</h3>
                    <p className="text-white/70 text-sm">Dinner and a show — tableside grilling at its finest</p>
                    <span className="inline-flex items-center gap-1 text-soft-gold text-sm font-semibold mt-3 group-hover:gap-3 transition-all">
                      View Menu
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Sushi & Rolls */}
              <ScrollReveal delay={100}>
                <Link href="/frisco/sushi-rolls" className="group block relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hq/sushi-rolls-2026.jpg"
                    alt="Artfully plated sushi rolls and nigiri at Jinbeh Japanese Restaurant"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">Sushi & Rolls</h3>
                    <p className="text-white/70 text-sm">Fresh fish daily — signature rolls and classic nigiri</p>
                    <span className="inline-flex items-center gap-1 text-soft-gold text-sm font-semibold mt-3 group-hover:gap-3 transition-all">
                      View Menu
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Sashimi & Omakase */}
              <ScrollReveal delay={200}>
                <Link href="/frisco/sashimi" className="group block relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hq/lewisville-sushi-1.jpg"
                    alt="Premium sashimi and omakase selection at Jinbeh"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">Sashimi</h3>
                    <p className="text-white/70 text-sm">Premium cuts and chef&apos;s omakase selections</p>
                    <span className="inline-flex items-center gap-1 text-soft-gold text-sm font-semibold mt-3 group-hover:gap-3 transition-all">
                      View Menu
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Bar & Cocktails */}
              <ScrollReveal delay={300}>
                <Link href="/frisco/cocktails" className="group block relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hq/jinbeh-cocktail.jpg"
                    alt="Craft cocktail and Japanese whiskey selection at Jinbeh bar"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">Bar & Cocktails</h3>
                    <p className="text-white/70 text-sm">Japanese whiskey, craft cocktails, and sake</p>
                    <span className="inline-flex items-center gap-1 text-soft-gold text-sm font-semibold mt-3 group-hover:gap-3 transition-all">
                      View Menu
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/menu" className="inline-flex items-center gap-2 bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  View Full Menu
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <Link href="/order-online" aria-label="Order online" className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/40 text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                  Order Online
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section - Redesigned with Strong Visual Contrast */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-soft-gold/10 via-warm-ivory to-soft-gold/5 relative overflow-hidden border-y-4 border-soft-gold/20 content-lazy">
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
                38 Years of Excellence
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto text-center">
                Family-owned, community-loved, and serving unforgettable experiences since&nbsp;1988
              </p>
            </div>

            {/* Stats grid with enhanced visual hierarchy */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-soft-gold/20 hover:border-soft-gold hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-cedar-brown mb-3 group-hover:text-accent-red transition-colors">
                      <NumberTicker value={38} suffix="+" delay={0.2} />
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
            <div className="text-center mt-12">
              <p className="text-xl md:text-2xl font-heading italic text-cedar-brown/90 max-w-4xl mx-auto">
                &ldquo;I have gone here for my birthday every year since I was at least 7. I&apos;m 24 now and celebrated my 24th there. Truly my favorite place to be.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-cedar-brown/60 uppercase tracking-wider inline-flex items-center justify-center gap-1.5">
                — Alaina T.
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                Google Review
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section — Masonry with Instagram Export Photos */}
        <section className="py-24 bg-warm-ivory content-lazy">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 italic">
                  Your Table Tonight
                </h2>
              </div>
            </ScrollReveal>

            {/* Masonry Gallery Grid — 8 Instagram Export Photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 max-w-6xl mx-auto">
              {/* Row 1 */}
              <ScrollReveal delay={0} className="gallery-item col-span-2 aspect-[16/10] rounded-2xl">
                <Image
                  src="/images/instagram/lobster-spread-overhead.jpg"
                  alt="Lobster hibachi feast with chicken, steak, tofu, fried rice, tempura and edamame spread at Jinbeh Japanese Restaurant"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Lobster Hibachi Feast</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100} className="gallery-item aspect-[3/4] rounded-2xl">
                <Image
                  src="/images/instagram/tuna-tower-bar-bokeh.jpg"
                  alt="Spicy tuna tower with avocado, tobiko caviar, and sushi rice at the Jinbeh bar"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Spicy Tuna Tower</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150} className="gallery-item aspect-[3/4] rounded-2xl">
                <Image
                  src="/images/instagram/sushi-roll-portrait.jpg"
                  alt="Signature specialty roll with salmon, jalapeño, tobiko at Jinbeh Japanese Restaurant"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Signature Roll</span>
                </div>
              </ScrollReveal>

              {/* Row 2 */}
              <ScrollReveal delay={200} className="gallery-item aspect-square rounded-2xl">
                <Image
                  src="/images/instagram/avocado-sunflower.jpg"
                  alt="Artistic avocado sunflower sushi presentation with eel sauce at Jinbeh"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Avocado Sunflower</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={250} className="gallery-item aspect-square rounded-2xl">
                <Image
                  src="/images/instagram/crab-pinwheel-roll.jpg"
                  alt="Crab pinwheel roll with tempura shrimp and eel sauce at Jinbeh"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Crab Pinwheel</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300} className="gallery-item col-span-2 aspect-[16/10] rounded-2xl">
                <Image
                  src="/images/instagram/sushi-feast-flatlay.jpg"
                  alt="Sushi and sashimi feast flat-lay with nigiri, specialty rolls, and guests enjoying with chopsticks at Jinbeh"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>The Full Jinbeh Experience</span>
                </div>
              </ScrollReveal>

              {/* Row 3 — Bonus accent images */}
              <ScrollReveal delay={350} className="gallery-item aspect-square rounded-2xl">
                <Image
                  src="/images/instagram/fried-roll-bar-ambiance.jpg"
                  alt="Deep-fried specialty roll with spicy mayo and eel sauce at Jinbeh sushi bar"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Bar-Side Bites</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400} className="gallery-item aspect-square rounded-2xl">
                <Image
                  src="/images/instagram/specialty-roll-closeup.jpg"
                  alt="Rainbow specialty sushi roll with spicy mayo drizzle at Jinbeh Japanese Restaurant"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Specialty Roll</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={450} className="gallery-item aspect-square rounded-2xl">
                <Image
                  src="/images/instagram/hibachi-steak-plate.jpg"
                  alt="Hibachi steak with fried rice, grilled vegetables, and dipping sauces at Jinbeh"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Hibachi Steak</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500} className="gallery-item aspect-square rounded-2xl">
                <Image
                  src="/images/instagram/salmon-roll-closeup.jpg"
                  alt="Fresh salmon topped specialty roll with jalapeño and tobiko at Jinbeh"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="gallery-caption">
                  <span>Salmon Roll</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Celebrations & Events — Life's Big Moments */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-warm-ivory via-white to-soft-gold/10 relative overflow-hidden content-lazy">
          {/* Subtle decorative element */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #C9A227 1.5px, transparent 1.5px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="inline-block bg-accent-red/10 text-accent-red text-sm font-semibold px-6 py-2 rounded-full mb-6 border border-accent-red/20 tracking-wide">
                  CELEBRATE WITH US
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                  Life&apos;s Big Moments, <span className="text-accent-red italic">Our Table</span>
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                  From birthdays to promotions, reunions to date nights — every celebration deserves a show.
                </p>
              </div>
            </ScrollReveal>

            {/* Event Types Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
              <ScrollReveal delay={0}>
                <Link href="/celebrations/birthday" className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-stone-100 h-full">
                  <span className="text-4xl block mb-3">🎂</span>
                  <h3 className="font-heading font-bold text-charcoal mb-1 group-hover:text-accent-red transition-colors">Birthdays</h3>
                  <p className="text-xs text-charcoal/60">Hibachi flames + birthday song</p>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Link href="/celebrations/anniversary" className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-stone-100 h-full">
                  <span className="text-4xl block mb-3">💍</span>
                  <h3 className="font-heading font-bold text-charcoal mb-1 group-hover:text-accent-red transition-colors">Anniversaries</h3>
                  <p className="text-xs text-charcoal/60">Intimate dining for two</p>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Link href="/celebrations/corporate-events" className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-stone-100 h-full">
                  <span className="text-4xl block mb-3">🏢</span>
                  <h3 className="font-heading font-bold text-charcoal mb-1 group-hover:text-accent-red transition-colors">Corporate</h3>
                  <p className="text-xs text-charcoal/60">Team dinners & events</p>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link href="/celebrations/graduation" className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-stone-100 h-full">
                  <span className="text-4xl block mb-3">🎓</span>
                  <h3 className="font-heading font-bold text-charcoal mb-1 group-hover:text-accent-red transition-colors">Graduations</h3>
                  <p className="text-xs text-charcoal/60">Celebrate the milestone</p>
                </Link>
              </ScrollReveal>
            </div>

            {/* CTA with group photo */}
            <ScrollReveal delay={400}>
              <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                {/* Group photo background */}
                <div className="relative h-64 md:h-72">
                  <Image
                    src="/images/celebrations/jinbeh_group.jpg"
                    alt="Group of friends enjoying hibachi dining experience at Jinbeh"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                      Plan Your Event
                    </h3>
                    <p className="text-white/80 text-sm mb-5 text-center max-w-lg">
                      Private dining rooms available for groups of 10+ • Hibachi, sushi bar, or full buyout
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/private-dining" className="inline-flex items-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105">
                        📍 Frisco
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </Link>
                      <Link href="/private-dining" className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-warm-ivory px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105">
                        📍 Lewisville
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </Link>
                    </div>
                    <p className="mt-4 text-xs text-white/60">
                      Or call <a href="tel:2146191200" className="text-soft-gold font-semibold hover:underline">(214) 619-1200</a> for Frisco • <a href="tel:2144882224" className="text-soft-gold font-semibold hover:underline">(214) 488-2224</a> for Lewisville
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Instagram Section — Photo Grid + CTA */}
        <section className="py-16 bg-warm-ivory overflow-hidden content-lazy">
          <div className="container mx-auto px-6 text-center mb-10">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-8 h-8 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <h2 className="text-2xl font-heading font-bold text-charcoal">
                  Tonight at Jinbeh
                </h2>
              </div>
              <p className="text-charcoal/70 mb-2">
                Tag @JinbehFrisco and share your experience—best photo each month wins a free appetizer!
              </p>
            </ScrollReveal>
          </div>

          {/* Instagram Photo Grid — Auto-scrolling Marquee */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-warm-ivory to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-warm-ivory to-transparent z-10 pointer-events-none" />
            <Marquee pauseOnHover duration={120}>
              {[
                { src: '/images/instagram/branded-sushi-plate.jpg', alt: 'Branded sushi roll at Jinbeh' },
                { src: '/images/instagram/salmon-roll-closeup.jpg', alt: 'Fresh salmon specialty roll at Jinbeh' },
                { src: '/images/instagram/tuna-tower-bar-bokeh.jpg', alt: 'Spicy tuna tower at Jinbeh bar' },
                { src: '/images/instagram/lobster-spread-overhead.jpg', alt: 'Lobster hibachi feast overhead' },
                { src: '/images/instagram/avocado-sunflower.jpg', alt: 'Avocado sunflower sushi art' },
                { src: '/images/instagram/crab-pinwheel-roll.jpg', alt: 'Crab pinwheel specialty roll' },
                { src: '/images/instagram/sushi-feast-overhead.jpg', alt: 'Sushi feast spread from above' },
                { src: '/images/instagram/mochi-desserts.jpg', alt: 'Mochi ice cream desserts at Jinbeh' },
              ].map((img, i) => (
                <a key={i} href="https://instagram.com/JinbehFrisco" target="_blank" rel="noopener noreferrer" className="relative w-[240px] h-[240px] mx-2 rounded-xl overflow-hidden group flex-shrink-0 block" aria-label={`View ${img.alt} on Instagram`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="240px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    </svg>
                  </div>
                </a>
              ))}
            </Marquee>
          </div>

          <div className="container mx-auto px-6 text-center mt-8">
            <ScrollReveal>
              <a
                href="https://instagram.com/JinbehFrisco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jinbeh on Instagram" className="inline-flex items-center gap-2 bg-gradient-to-r from-deep-indigo via-accent-red to-soft-gold text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
                Follow @JinbehFrisco
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonial Section - Multiple Reviews */}
        <section className="py-24 bg-white relative overflow-hidden content-lazy">
          {/* Review Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Review",
                itemReviewed: { "@type": "Restaurant", name: "Jinbeh Japanese Restaurant" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                author: { "@type": "Person", name: "Alaina Thompson" },
                reviewBody: "I have gone here for my birthday every year since I was at least 7. I'm 24 now and celebrated my 24th there. Truly my favorite place to be."
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
                  <span className="text-sm">from <strong className="font-semibold">1,200+</strong> reviews on Google &amp; Yelp</span>
                </div>
              </div>

              {/* Testimonial Marquee - Premium Scrolling Effect */}
              <div className="relative">
                {/* Gradient Fade Left */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                {/* Gradient Fade Right */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <Marquee pauseOnHover duration={150}>
                  {/* Testimonial 1 - Alaina Thompson (9.5/10) - 17 years of loyalty */}
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
                      &ldquo;I have gone here for my birthday every year since I was at least 7. I&apos;m 24 now and celebrated my 24th there. Truly my favorite place to be.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Alaina Thompson</p>
                        <p className="text-xs text-charcoal/70 inline-flex items-center gap-1"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg> Verified</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 - Tatiana Maskaron (8.5/10) - Family + Benihana comparison */}
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
                      &ldquo;Best steak and entertainment in town. My kids love every bit! They have great steak hibachi and the chefs are always entertaining. I&apos;d say quality is better than Benihana.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Tatiana Maskaron</p>
                        <p className="text-xs text-charcoal/70">Google Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 - Iyali Ruiz (8.5/10) - Sushi + hibachi + drinks + date night */}
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
                      &ldquo;Best sushi across many states! The drinks are some of the best I&apos;ve had too. And don&apos;t even get me started on the hibachi teriyaki steak—it&apos;s delicious! This sushi place is a must have!&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Iyali Ruiz</p>
                        <p className="text-xs text-charcoal/70">Google Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 4 - Chuck (8/10) - Punchy, covers all bases */}
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
                      &ldquo;Hands down the best Hibachi in town. Super friendly staff, great performance from chefs, and ingredients used are top notch super fresh. I had a great time here, would def come back again. Love it!&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Chuck</p>
                        <p className="text-xs text-charcoal/70">Google Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 5 - Jailen R (8/10) - Favorite restaurant of all time + specific rolls */}
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
                      &ldquo;Literally my favorite sushi place, I would go to say favorite restaurant in general, of all time! Highly recommend the Summer Bliss Breeze and the Samurai Roll.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Jailen R</p>
                        <p className="text-xs text-charcoal/70">Google Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 6 - Mark L. (9/10) - Best Benihana comparison line */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={10} colorFrom="#C9A227" colorTo="#C1121F" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;Benihana has always been the standard, but this beats it. The sashimi was fresh and flavorful; fried rice was awesome and everything else completely on point. You cannot go wrong here.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF1A1A]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.835a1.073 1.073 0 0 1-.932 1.326 9.265 9.265 0 0 1-4.023-.646 1.073 1.073 0 0 1-.373-1.655l3.004-3.963c.601-.79 1.81-.39 1.827.612l.497 4.326z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Mark L.</p>
                        <p className="text-xs text-charcoal/70">Yelp Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 7 - Terri B. (9/10) - Names 4 competitors, biggest claim */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={12} colorFrom="#C1121F" colorTo="#C9A227" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;Absolutely the best #1 Japanese Hibachi in the world! I&apos;ve experienced Kobe&apos;s, Japon, Benihana and Shogun... Jinbeh by far beats them all in quality, atmosphere, cleanliness, customers all nice, Food is spectacular!!!&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF1A1A]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.835a1.073 1.073 0 0 1-.932 1.326 9.265 9.265 0 0 1-4.023-.646 1.073 1.073 0 0 1-.373-1.655l3.004-3.963c.601-.79 1.81-.39 1.827.612l.497 4.326z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Terri B.</p>
                        <p className="text-xs text-charcoal/70">Yelp Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 8 - Service + Food Combo (Customer Voice DB #53) */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={14} colorFrom="#C1121F" colorTo="#C9A227" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;Staff was extremely friendly and the food was amazing. We had the hibachi and everything was cooked to perfection. Will definitely be back!&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Happy Guest</p>
                        <p className="text-xs text-charcoal/70">Google Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 9 - Family/Kids Focus (Customer Voice DB #58) */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={16} colorFrom="#C9A227" colorTo="#C1121F" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;It&apos;s truly the perfect place for kids, birthdays, and entertaining the whole fam! The hibachi show keeps everyone engaged and the food is always outstanding.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Family of Four</p>
                        <p className="text-xs text-charcoal/70">Google Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 10 - Signature Fried Rice (Customer Voice DB #10) */}
                  <div className="relative testimonial-card p-8 bg-warm-ivory rounded-2xl border border-stone-200 w-[350px] mx-4 group overflow-hidden">
                    <BorderBeam size={150} duration={10} delay={18} colorFrom="#C1121F" colorTo="#C9A227" />
                    <div className="flex gap-1 mb-4" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/80 mb-6 leading-relaxed">
                      &ldquo;The fried rice here is the best I&apos;ve ever had — seriously, it&apos;s worth the trip alone. Combined with the hibachi show and fresh sushi, you can&apos;t beat this place.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Fried Rice Fan</p>
                        <p className="text-xs text-charcoal/70">Google Review</p>
                      </div>
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* From the Blog — Content Hub Links */}
        <section className="py-20 bg-white content-lazy">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block w-16 h-1 bg-gradient-to-r from-accent-red to-soft-gold rounded-full mb-6" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  From the Jinbeh Blog
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                  Explore guides, tips, and stories from our kitchen to your table.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <Link href="/blog/types-of-sushi" className="group block bg-warm-ivory rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <span className="text-3xl mb-3 block">🍣</span>
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">Types of Sushi Guide</h3>
                  <p className="text-sm text-charcoal/70">From nigiri to specialty rolls — discover every style of sushi we serve.</p>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Link href="/blog/hibachi-dining-experience" className="group block bg-warm-ivory rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <span className="text-3xl mb-3 block">🔥</span>
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">The Hibachi Experience</h3>
                  <p className="text-sm text-charcoal/70">What to expect at a Jinbeh hibachi table — the show, the food, the fun.</p>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Link href="/blog/hibachi-birthday-party-ideas" className="group block bg-warm-ivory rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <span className="text-3xl mb-3 block">🎂</span>
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">Birthday Party Ideas</h3>
                  <p className="text-sm text-charcoal/70">Plan an unforgettable hibachi birthday celebration for any age.</p>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link href="/blog/sake-pairing-guide" className="group block bg-warm-ivory rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <span className="text-3xl mb-3 block">🍶</span>
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">Sake Pairing Guide</h3>
                  <p className="text-sm text-charcoal/70">Perfect sake matches for every dish — from sushi to hibachi steak.</p>
                </Link>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={400}>
              <div className="text-center mt-10">
                <Link href="/blog" className="inline-flex items-center gap-2 text-accent-red font-semibold hover:text-accent-red/80 transition-colors">
                  Explore All Articles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══ FAQ Section - Visible Accordion ═══ */}
        <section className="py-24 bg-warm-ivory content-lazy">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                  Everything you need to know about dining at Jinbeh
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-stone-100">
                    <summary className="flex items-center justify-between gap-4 px-8 py-6 cursor-pointer list-none font-heading font-semibold text-lg text-charcoal hover:text-accent-red transition-colors">
                      {faq.name}
                      <svg className="w-5 h-5 text-accent-red flex-shrink-0 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-8 pb-6 text-charcoal/80 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <div className="text-center mt-12">
                <p className="text-charcoal/60 text-sm">
                  Have another question? <Link href="/contact" className="text-accent-red font-semibold hover:underline">Contact us</Link> or call <a href="tel:2146191200" className="text-accent-red font-semibold hover:underline">(214) 619-1200</a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Visit Us - Immersive Location Showcase */}
        <section className="relative py-20 md:py-28 bg-charcoal text-white overflow-hidden">
          {/* Subtle Japanese pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block bg-soft-gold/20 text-soft-gold text-sm font-semibold px-6 py-2 rounded-full mb-6 border border-soft-gold/30 tracking-wide">
                  TWO LOCATIONS IN DFW
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Find Your <span className="text-soft-gold">Jinbeh</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed text-center">
                  Same award-winning menu. Same family tradition since 1988. Pick the location nearest&nbsp;you.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Frisco Location Card */}
              <ScrollReveal delay={0}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-soft-gold/40 transition-all duration-500 h-full flex flex-col">
                  {/* Location Image */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src="/images/frisco/FriscoLocation_Bar_Front.jpg"
                      alt="Jinbeh Frisco interior - warm wooden bar with pendant lighting and authentic Japanese ambiance near Stonebriar Centre"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Jinbeh Frisco</h3>
                      <p className="text-soft-gold font-medium mt-1">Near Stonebriar Centre &amp; Legacy West</p>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-white/80 mb-5 leading-relaxed text-sm">
                      Our flagship location with a stunning sushi bar, intimate hibachi tables, and warm ambiance perfect for date nights and celebrations.
                    </p>

                    {/* Hours */}
                    <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                      <div>
                        <p className="text-soft-gold font-semibold mb-1">Lunch</p>
                        <p className="text-white/70 text-xs">Mon–Fri: 11am – 2pm</p>
                        <p className="text-white/70 text-xs">Sat–Sun: 11:30am – 2:30pm</p>
                      </div>
                      <div>
                        <p className="text-soft-gold font-semibold mb-1">Dinner</p>
                        <p className="text-white/70 text-xs">Sun–Thu: 5pm – 9pm</p>
                        <p className="text-white/70 text-xs">Fri–Sat: 5pm – 10pm</p>
                      </div>
                    </div>

                    {/* Address + Directions */}
                    <a
                      href="https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Frisco"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on Google Maps" className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                      <svg className="w-5 h-5 text-soft-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-white/80 text-sm">2693 Preston Rd Suite 1040, Frisco, TX 75034</p>
                        <p className="text-soft-gold text-xs font-medium group-hover:text-white transition-colors">Get Directions →</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:2146191200" aria-label="Call Jinbeh Frisco" className="flex items-center justify-center gap-3 mb-4 bg-soft-gold/15 hover:bg-soft-gold/25 border border-soft-gold/30 rounded-xl px-5 py-2.5 transition-all group">
                      <svg className="w-4 h-4 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-lg font-bold text-soft-gold group-hover:text-white transition-colors">(214) 619-1200</span>
                    </a>

                    {/* Reserve CTA */}
                    <div className="mt-auto">
                      <OpenTableWidget
                        restaurantId={locationsData.locations.frisco.reservation.rid}
                        location="frisco"
                        buttonText="Reserve Frisco"
                        variant="primary"
                        className="shimmer-cta w-full inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:scale-105 hover:shadow-accent-red/30"
                      />
                    </div>

                    {/* Compact Map — Lightweight link instead of heavy iframe */}
                    <a
                      href="https://www.google.com/maps/place/Jinbeh+Japanese+Restaurant+-+Frisco/@33.0986,-96.8235,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get directions on Google Maps" className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-3 text-sm text-white/70 hover:text-soft-gold transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Lewisville Location Card */}
              <ScrollReveal delay={100}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-soft-gold/40 transition-all duration-500 h-full flex flex-col">
                  {/* Location Image */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src="/images/interior/bar.jpg"
                      alt="Jinbeh Lewisville bar area with premium spirits, wine glasses, and Japanese-inspired decor near Vista Ridge Mall"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Jinbeh Lewisville</h3>
                      <p className="text-soft-gold font-medium mt-1">Easy I-35E Access &bull; Near Vista Ridge</p>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-white/80 mb-5 leading-relaxed text-sm">
                      A local favorite with a lively bar, generous hibachi portions, and some of the freshest sushi in North Texas. The go-to spot for groups and celebrations.
                    </p>

                    {/* Hours */}
                    <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                      <div>
                        <p className="text-soft-gold font-semibold mb-1">Lunch</p>
                        <p className="text-white/70 text-xs">Mon–Fri: 11am – 2pm</p>
                        <p className="text-white/70 text-xs">Sat–Sun: 11:30am – 2:30pm</p>
                      </div>
                      <div>
                        <p className="text-soft-gold font-semibold mb-1">Dinner</p>
                        <p className="text-white/70 text-xs">Sun–Thu: 5pm – 9pm</p>
                        <p className="text-white/70 text-xs">Fri–Sat: 5pm – 10pm</p>
                      </div>
                    </div>

                    {/* Address + Directions */}
                    <a
                      href="https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Lewisville"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on Google Maps" className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                      <svg className="w-5 h-5 text-soft-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-white/80 text-sm">2440 S Stemmons Fwy #A, Lewisville, TX 75067</p>
                        <p className="text-soft-gold text-xs font-medium group-hover:text-white transition-colors">Get Directions →</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:2144882224" aria-label="Call Jinbeh Lewisville" className="flex items-center justify-center gap-3 mb-4 bg-soft-gold/15 hover:bg-soft-gold/25 border border-soft-gold/30 rounded-xl px-5 py-2.5 transition-all group">
                      <svg className="w-4 h-4 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-lg font-bold text-soft-gold group-hover:text-white transition-colors">(214) 488-2224</span>
                    </a>

                    {/* Reserve CTA */}
                    <div className="mt-auto">
                      <OpenTableWidget
                        restaurantId={locationsData.locations.lewisville.reservation.rid}
                        location="lewisville"
                        buttonText="Reserve Lewisville"
                        variant="primary"
                        className="shimmer-cta w-full inline-flex items-center justify-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:scale-105 hover:shadow-accent-red/30"
                      />
                    </div>

                    {/* Compact Map — Lightweight link instead of heavy iframe */}
                    <a
                      href="https://www.google.com/maps/place/Jinbeh+Japanese+Restaurant+-+Lewisville/@33.0185,-96.9941,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get directions on Google Maps" className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-3 text-sm text-white/70 hover:text-soft-gold transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Open in Google Maps
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
            aria-label="Call Jinbeh Frisco" className="flex items-center justify-center gap-2 py-4 text-charcoal font-semibold hover:bg-warm-ivory transition-colors"
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
