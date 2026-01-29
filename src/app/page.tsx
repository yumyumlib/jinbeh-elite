"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

// Organization Schema for rich snippets
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jinbeh Japanese Restaurant",
  "alternateName": "Jinbeh Hibachi and Sushi Bar",
  "url": "https://jinbeh.com",
  "logo": "https://jinbeh.com/wp-content/uploads/2022/03/jinbehlogo-black.svg",
  "foundingDate": "1988",
  "description": "Family-owned Japanese restaurant serving authentic hibachi and sushi in Frisco and Lewisville, TX since 1988.",
  "sameAs": [
    "https://www.instagram.com/jinbehfrisco/",
    "https://www.facebook.com/JinbehFrisco/",
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

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  return (
    <>
      {/* Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logos/jinbehlogo-black.svg"
              alt="Jinbeh Japanese Restaurant"
              width={44}
              height={44}
              className="transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-heading text-xl font-bold text-charcoal tracking-wide hidden sm:inline">
              JINBEH
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/frisco" className="text-charcoal font-medium hover:text-accent-red transition-colors">
              Frisco
            </Link>
            <Link href="/lewisville" className="text-charcoal font-medium hover:text-accent-red transition-colors">
              Lewisville
            </Link>
            <Link href="/menu" className="text-charcoal font-medium hover:text-accent-red transition-colors">
              Menu
            </Link>

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                className="text-charcoal font-medium hover:text-accent-red transition-colors flex items-center gap-1"
              >
                Blog
                <svg className={`w-4 h-4 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {blogDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50">
                  <Link href="/blog" className="block px-4 py-2 text-charcoal hover:bg-warm-ivory transition-colors font-medium">
                    All Articles
                  </Link>
                  <div className="border-t border-stone-100 my-1"></div>
                  <Link href="/blog/best-sushi-frisco" className="block px-4 py-2 text-charcoal/80 hover:bg-warm-ivory transition-colors text-sm">
                    🍣 Best Sushi in Frisco
                  </Link>
                  <Link href="/blog/best-hibachi-dallas-tx" className="block px-4 py-2 text-charcoal/80 hover:bg-warm-ivory transition-colors text-sm">
                    🔥 Best Hibachi in Dallas
                  </Link>
                  <Link href="/blog/best-happy-hour-frisco-tx" className="block px-4 py-2 text-charcoal/80 hover:bg-warm-ivory transition-colors text-sm">
                    🍹 Happy Hour Guide
                  </Link>
                  <Link href="/blog/hibachi-birthday-party-ideas" className="block px-4 py-2 text-charcoal/80 hover:bg-warm-ivory transition-colors text-sm">
                    🎂 Birthday Party Ideas
                  </Link>
                  <Link href="/blog/types-of-sushi" className="block px-4 py-2 text-charcoal/80 hover:bg-warm-ivory transition-colors text-sm">
                    📚 Types of Sushi Guide
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-charcoal font-medium hover:text-accent-red transition-colors">
              About
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="tel:2146189888"
                className="flex items-center gap-2 text-charcoal font-medium hover:text-accent-red transition-colors"
                title="Call Frisco"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden lg:inline">Call</span>
              </a>
              <Link
                href="/frisco#reserve"
                className="bg-accent-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-red-hover transition-colors shadow-md"
              >
                Reserve Now
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 py-4 px-6">
            <div className="flex flex-col gap-4">
              <Link href="/frisco" className="text-charcoal font-medium">Frisco</Link>
              <Link href="/lewisville" className="text-charcoal font-medium">Lewisville</Link>
              <Link href="/menu" className="text-charcoal font-medium">Menu</Link>
              <Link href="/blog" className="text-charcoal font-medium">Blog</Link>
              <Link href="/about" className="text-charcoal font-medium">About</Link>
              <div className="border-t border-stone-200 pt-4 mt-2">
                <p className="text-sm text-charcoal/60 mb-3 font-medium">Call to Reserve:</p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:2146189888"
                    className="flex items-center justify-center gap-2 bg-charcoal text-white px-4 py-3 rounded-lg font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Frisco
                  </a>
                  <a
                    href="tel:2146189798"
                    className="flex items-center justify-center gap-2 bg-charcoal text-white px-4 py-3 rounded-lg font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Lewisville
                  </a>
                </div>
              </div>
              <Link href="/frisco#reserve" className="bg-accent-red text-white px-4 py-3 rounded-lg text-center font-semibold mt-2">
                Reserve Online
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-screen">
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Hero Section - Full Screen with Image Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - Next.js optimized with priority loading */}
          <Image
            src="/images/photoshoot/hibachi-plate-shrimp.jpg"
            alt="Jinbeh hibachi plate with shrimp, fried rice, and vegetables"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={85}
          />

          {/* Dark Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

          {/* Content with text shadows for better readability */}
          <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
            {/* Selling Proof - Family Badge */}
            <ScrollReveal delay={0}>
              <div className="mb-8">
                <span className="inline-block bg-accent-red text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase shadow-lg">
                  Family-Owned Since 1988
                </span>
              </div>
            </ScrollReveal>

            {/* Trust Signals - Proof on fold */}
            <ScrollReveal delay={100}>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6 text-white/90 text-sm">
                <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">4.5+ Stars on Google</span>
                </span>
                <span className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">1000+ 5-Star Reviews</span>
                <span className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">37+ Years of Excellence</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-wide italic"
                  style={{
                    textShadow: '3px 3px 0px rgba(0,0,0,0.9), 6px 6px 10px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.8)',
                    WebkitTextStroke: '1px rgba(0,0,0,0.3)'
                  }}>
                Dinner and a Show
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-xl md:text-2xl text-warm-ivory mb-6 font-medium"
                 style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.5)' }}>
                Authentic Japanese Hibachi & Sushi in North Texas
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-warm-ivory/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md"
                 style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                For over 37 years, we have been creating unforgettable dining experiences.
                Watch our master chefs perform tableside, then savor expertly crafted sushi.
              </p>
            </ScrollReveal>

            {/* Location Selection Cards */}
            <ScrollReveal delay={500}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                {/* Frisco Location Card */}
                <div className="group relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/30 rounded-2xl p-8 min-w-[280px] shadow-2xl">
                  <div className="text-center">
                    <h2 className="text-2xl font-heading font-semibold text-white mb-2 drop-shadow-lg">
                      Frisco
                    </h2>
                    <p className="text-warm-ivory/80 text-sm mb-5 drop-shadow-md">
                      Near Stonebriar Centre
                    </p>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/frisco#reserve"
                        className="inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red-hover text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Reserve a Table
                      </Link>
                      <a
                        href="tel:2146189888"
                        className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-charcoal text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/40"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (214) 618-9888
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lewisville Location Card */}
                <div className="group relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/30 rounded-2xl p-8 min-w-[280px] shadow-2xl">
                  <div className="text-center">
                    <h2 className="text-2xl font-heading font-semibold text-white mb-2 drop-shadow-lg">
                      Lewisville
                    </h2>
                    <p className="text-warm-ivory/80 text-sm mb-5 drop-shadow-md">
                      Easy access from I-35E
                    </p>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/lewisville#reserve"
                        className="inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red-hover text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Reserve a Table
                      </Link>
                      <a
                        href="tel:2146189798"
                        className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-charcoal text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/40"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (214) 618-9798
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
              className="w-8 h-8 text-white/60"
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

        {/* Experience Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 italic">
                  The Jinbeh Experience
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                  More than a meal - it is entertainment, artistry, and tradition
                  served at your table
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {/* Hibachi */}
              <ScrollReveal delay={0}>
                <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-red to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                    Hibachi Theater
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Watch our master chefs dazzle with flames, precision knife work,
                    and the legendary onion volcano.
                  </p>
                </div>
              </ScrollReveal>

              {/* Sushi */}
              <ScrollReveal delay={150}>
                <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-deep-indigo to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                    Sushi Artistry
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Pristine fish, expertly crafted rolls, and creative
                    presentations where tradition meets innovation.
                  </p>
                </div>
              </ScrollReveal>

              {/* Celebrations */}
              <ScrollReveal delay={300}>
                <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-soft-gold to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                    Celebrate Together
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Birthdays, anniversaries, graduations - we make every occasion
                    unforgettable.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Section with Animated CountUp */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <ScrollReveal delay={0}>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent-red mb-2">
                    <CountUp end={37} suffix="+" />
                  </div>
                  <p className="text-warm-ivory/70 text-sm uppercase tracking-wider">
                    Years Serving DFW
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent-red mb-2">
                    <CountUp end={1000} suffix="+" />
                  </div>
                  <p className="text-warm-ivory/70 text-sm uppercase tracking-wider">
                    5-Star Reviews
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent-red mb-2">
                    <CountUp end={68000} suffix="+" />
                  </div>
                  <p className="text-warm-ivory/70 text-sm uppercase tracking-wider">
                    Meals Served Annually
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent-red mb-2">
                    <CountUp end={2} />
                  </div>
                  <p className="text-warm-ivory/70 text-sm uppercase tracking-wider">
                    Convenient Locations
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 italic">
                  A Feast for the Eyes
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                  Every dish is crafted with care and presented with pride
                </p>
              </div>
            </ScrollReveal>

            {/* Image Gallery Grid - Professional Photoshoot Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <ScrollReveal delay={0} className="relative aspect-[4/3] md:col-span-2 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/photoshoot/hibachi-plate-shrimp.jpg"
                  alt="Hibachi shrimp and scallops with fried rice - Jinbeh signature plate"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </ScrollReveal>
              <ScrollReveal delay={100} className="relative aspect-[4/3] md:col-span-2 rounded-2xl overflow-hidden group">
                <Image
                  src="/images/photoshoot/sashimi-platter.jpg"
                  alt="Premium sashimi platter with uni, salmon, and yellowtail"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </ScrollReveal>
              <ScrollReveal delay={200} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src="/images/photoshoot/sushi-tower.jpg"
                  alt="Specialty sushi tower with spicy tuna and avocado"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </ScrollReveal>
              <ScrollReveal delay={250} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src="/images/photoshoot/hibachi-steak.jpg"
                  alt="Hibachi filet mignon with vegetables and fried rice"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </ScrollReveal>
              <ScrollReveal delay={300} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src="/images/photoshoot/appetizers-spread.jpg"
                  alt="Japanese appetizers - edamame, tempura, and crab rangoon"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </ScrollReveal>
              <ScrollReveal delay={350} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src="/images/photoshoot/sizzling-plate.jpg"
                  alt="Sizzling hot plate fresh from the grill"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Video Section - Hibachi Experience */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 italic">
                  Dinner and a Show
                </h2>
                <p className="text-lg text-warm-ivory/70 max-w-2xl mx-auto">
                  Watch our master chefs create culinary magic right at your table
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/images/photoshoot/hibachi-steak.jpg"
                  >
                    <source
                      src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  {/* Video overlay with play indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                <p className="text-center text-warm-ivory/60 mt-4 text-sm">
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
                  Follow Us @JinbehRestaurant
                </h2>
              </div>
              <p className="text-charcoal/70 mb-8">
                Share your #JinbehMoments with us on Instagram
              </p>
              <a
                href="https://instagram.com/JinbehRestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
                View on Instagram
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-white">
          <ScrollReveal>
            <div className="container mx-auto px-6 text-center max-w-4xl">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-heading italic text-charcoal mb-8 leading-relaxed">
                &ldquo;Best hibachi experience in DFW! The kids were absolutely mesmerized by the chef performance,
                and the food was incredible. We have been coming here for 10 years and it never disappoints.&rdquo;
              </blockquote>

              <div>
                <p className="font-semibold text-charcoal">Sarah M.</p>
                <p className="text-charcoal/60 text-sm">Google Review - Frisco Location</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <ScrollReveal>
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Ready for an Experience?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Join us at either location for a dining experience that will create
                memories to last a lifetime.
              </p>

              {/* Two Location Cards */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Frisco */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-heading font-bold mb-2">Frisco</h3>
                  <p className="text-white/80 text-sm mb-6">Near Stonebriar Centre</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/frisco#reserve"
                      className="inline-flex items-center justify-center gap-2 bg-white text-accent-red hover:bg-warm-ivory px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Reserve Online
                    </Link>
                    <a
                      href="tel:2146189888"
                      className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all border-2 border-white/50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call (214) 618-9888
                    </a>
                  </div>
                </div>

                {/* Lewisville */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-heading font-bold mb-2">Lewisville</h3>
                  <p className="text-white/80 text-sm mb-6">Easy access from I-35E</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/lewisville#reserve"
                      className="inline-flex items-center justify-center gap-2 bg-white text-accent-red hover:bg-warm-ivory px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Reserve Online
                    </Link>
                    <a
                      href="tel:2146189798"
                      className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all border-2 border-white/50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call (214) 618-9798
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </main>

      {/* Sticky Mobile CTA Bar - Fixed at bottom on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-2xl safe-area-bottom">
        <div className="grid grid-cols-2 divide-x divide-stone-200">
          <a
            href="tel:2146189888"
            className="flex items-center justify-center gap-2 py-4 text-charcoal font-semibold hover:bg-warm-ivory transition-colors"
          >
            <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <Link
            href="/frisco#reserve"
            className="flex items-center justify-center gap-2 py-4 bg-accent-red text-white font-semibold hover:bg-accent-red-hover transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Reserve
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
