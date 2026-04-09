import type { Metadata } from "next";
import { RevealSection, HeroSection, ShinyBadge, NumberTickerInline as NumberTicker, AnimatedGradientText } from "@/components/MagicUI";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/Marquee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuoteStrip } from "@/components/CustomerVoice";
import Image from "next/image";
import Link from "next/link";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: {
    absolute: "About Jinbeh | Family-Owned Since 1988 | Frisco & Lewisville",
  },
  description:
    "Discover the Jinbeh story. Family-owned hibachi and sushi restaurant in Frisco & Lewisville TX since 1988. 38+ years of tradition and hospitality.",
  keywords: [
    "about jinbeh",
    "japanese restaurant history frisco",
    "family owned restaurant frisco tx",
    "hibachi restaurant history",
    "authentic japanese dining dfw", "japanese restaurants texas", "japanese food texas",],
  openGraph: {
    title: "About Jinbeh | Family-Owned Since 1988",
    description: "38+ years of authentic Japanese dining in North Texas. Discover our story.",
    url: "https://jinbeh.com/about",
    images: [
      {
        url: "https://jinbeh.com/images/about/chef-flames.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh hibachi chef cooking with flames and Las Colinas restaurant building",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/about",
  },
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long has Jinbeh been in business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Japanese Restaurant has been family-owned and operated since 1988, serving North Texas for over 38 years with authentic hibachi and sushi.",
      },
    },
    {
      "@type": "Question",
      "name": "What does Jinbeh mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The name Jinbeh reflects our commitment to warmth and hospitality, welcoming every guest as part of our family.",
      },
    },
    {
      "@type": "Question",
      "name": "How many Jinbeh locations are there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh has two locations in the DFW metroplex: one in Frisco (near Stonebriar Centre) and one in Lewisville (off I-35E near Vista Ridge Mall).",
      },
    },
    {
      "@type": "Question",
      "name": "Is Jinbeh good for special occasions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jinbeh specializes in celebrations including birthdays, anniversaries, graduations, and corporate events. Our hibachi chefs create memorable entertainment while you dine.",
      },
    },
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jinbeh Japanese Restaurant",
  "alternateName": "Jinbeh Hibachi and Sushi Bar",
  "url": "https://jinbeh.com",
  "logo": "https://jinbeh.com/images/logos/jinbeh-logo.png",
  "foundingDate": "1988",
  "description": "Family-owned Japanese restaurants Texas serving authentic hibachi and sushi in Frisco and Lewisville, TX since 1988.",
  "sameAs": [
    "https://www.instagram.com/jinbehfrisco/",
    "https://www.facebook.com/JinbehFrisco/",
  ],
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
      "name": "About",
      "item": "https://jinbeh.com/about"
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "About Jinbeh" }]} />
      </div>
      <main id="main-content" className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />


        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about/chef-flames.jpg"
            alt="Jinbeh hibachi chef cooking with flames and Las Colinas restaurant building - a tribute to our heritage since 1988"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <RevealSection>
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                <ShinyBadge className="!text-soft-gold">✦ Family-Owned Since 1988 ✦</ShinyBadge>
              </p>
            </RevealSection>
            <RevealSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
                Where Every Guest Becomes Family
              </h1>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto hero-subheadline">
                Since 1988, Jinbeh has been more than a restaurant—it&apos;s where families gather,
                <Link href="/celebrations" className="text-soft-gold hover:underline">celebrations</Link> ignite, and every meal comes with a show worth remembering.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Text Content */}
              <div>
                <RevealSection>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                    About Jinbeh: Our Family&apos;s Journey to Your Table
                  </h2>
                </RevealSection>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    When Ben Matsuda opened Jinbeh in 1988, he didn&apos;t just open a restaurant&mdash;he
                    brought a vision home. A Japanese man who, remarkably, never cooked a day in his life, Ben opened Jinbeh not out of culinary ambition but out of an entrepreneurial instinct and a desire to bring authentic Japanese dining to North Texas. His philosophy was three words: <strong>humble, hardworking, and honest</strong>. Those three words became the spiritual foundation of Jinbeh and were passed down to his son, who now runs both locations.
                  </p>
                  <p>
                    What started in a small Las Colinas space&mdash;featured by <em>D&nbsp;Magazine</em> as early as 1990&mdash;has blossomed into a multi-generational tradition that families
                    keep coming back to after 20, 25, even 30+ years. The original Las Colinas location was a true Japanese kitchen with a menu as thick as a book. Over time, Jinbeh learned a critical lesson: the menu needed to cater to the American palate while preserving Japanese soul. The result is what the owner calls &ldquo;American Authentic&rdquo;&mdash;food that feels genuinely Japanese enough that you feel transported, but accessible enough to be comfortable.
                  </p>
                  <p>
                    Unlike the impersonal corporate chains out there, Jinbeh feels different from your first visit.
                    You&apos;re not just ordering dinner&mdash;you&apos;re joining a celebration. Our chefs become entertainers, your table becomes a stage,
                    and the onion volcano? That&apos;s just the beginning of the show. Yes, the food is exceptional&mdash;our <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">sushi</Link> is fresh, our steaks are premium, and every sauce from the Yum Yum to the garlic butter is made in-house daily.
                    But what truly sets us apart is how we make you feel: welcomed, celebrated, and part of something special.
                  </p>
                  <p>
                    Today, with locations in <Link href="/frisco" className="text-accent-red hover:underline font-medium">Frisco</Link> and <Link href="/lewisville" className="text-accent-red hover:underline font-medium">Lewisville</Link>, we&apos;re still proudly family-owned, still committed to those original values,
                    and still determined to deliver the kind of dining experience North Texas families love. Nearly four decades later &mdash; that&apos;s the Jinbeh difference.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div className="text-center p-4">
                    <span className="block text-4xl font-bold text-accent-red"><NumberTicker value={38} />+</span>
                    <span className="text-sm text-charcoal/80">Years of Tradition</span>
                  </div>
                  <div className="text-center p-4">
                    <span className="block text-4xl font-bold text-deep-indigo"><NumberTicker value={2} /></span>
                    <span className="text-sm text-charcoal/80">DFW Locations</span>
                  </div>
                  <div className="text-center p-4">
                    <span className="block text-4xl font-bold text-soft-gold">4.8★</span>
                    <span className="text-sm text-charcoal/80">Uber Eats</span>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <RevealSection delay={200} direction="right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/interior/FriscoLocation_Bar_Front.jpg"
                        alt="Jinbeh Frisco bar and dining area"
                        fill
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/photoshoot/sushi-tower.jpg"
                        alt="Fresh sushi tower"
                        fill
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/food/OnionVolcanoDemo.jpg"
                        alt="Hibachi chef performing the famous onion volcano"
                        fill
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg"
                        alt="Birthday celebration at Jinbeh"
                        fill
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* The Name Jinbeh - Heritage Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/rice-workers-heritage.webp"
                  alt="Traditional Japanese rice farmers working in paddy fields - the humble origins that inspired the name Jinbeh"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  quality={80}
                />
              </div>

              {/* Story Content */}
              <div>
                <p className="text-soft-gold font-medium tracking-wider uppercase mb-3">
                  The Meaning Behind Our Name
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  What is &quot;Jinbeh&quot;?
                </h2>
                <div className="space-y-5 text-charcoal/80 leading-relaxed">
                  <p>
                    The name <em>Jinbeh</em> was once a common surname among Japanese
                    farmers and peasants during the feudal medieval ages of Japan. These
                    hardworking people cultivated the rice paddies that fed entire villages,
                    embodying values of humility, honesty, and dedication.
                  </p>
                  <p>
                    When Ben Matsuda opened our first restaurant in Las Colinas in 1988,
                    he chose this name deliberately. Coming from humble beginnings himself,
                    the name serves as a daily reminder of where he came from and the
                    values that built this family business.
                  </p>
                  <p className="text-charcoal font-medium italic border-l-4 border-soft-gold pl-4">
                    &quot;He came from a poor family, and he created all of this and was
                    successful; the name for him is a daily reminder of where he came from.&quot;
                    <span className="block text-sm text-charcoal/80 mt-2 not-italic">— Aya Matsuda</span>
                  </p>
                  <p>
                    Today, those same values guide everything we do: serving every guest
                    with genuine warmth, preparing every dish with honest craftsmanship,
                    and working hard to create moments worth celebrating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Customer Testimonial Banner */}
        <section className="py-12 bg-white border-y border-stone-200">
          <div className="container mx-auto px-6">
            <RevealSection>
              <QuoteStrip
                quote="I have gone here for my birthday every year since I was at least 7. I'm 24 now and celebrated my 24th there. Truly my favorite place to be."
                author="Alaina T. — Google Review"
              />
            </RevealSection>
          </div>
        </section>

        {/* The People of Jinbeh */}
        <section className="py-16 bg-warm-ivory border-b border-stone-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4 text-center">
                The People Behind the Plates
              </h2>
              <p className="text-lg text-charcoal/70 text-center mb-12 max-w-2xl mx-auto">
                At Jinbeh, tenure isn&apos;t measured in months&mdash;it&apos;s measured in decades.
              </p>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealSection delay={0}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">🍣</div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Our Head Sushi Chef &mdash; 30 Years</h3>
                  <p className="text-sm text-charcoal/70">Nearly 30 years behind Jinbeh&apos;s sushi bar. The owner calls him &ldquo;my second dad.&rdquo; Together, they co-created the entire sushi menu through sleepless nights of collaboration. From the south side of Japan&mdash;a region famous for noodles&mdash;he once created a ramen section so popular it became legendary among regulars.</p>
                </div>
              </RevealSection>
              <RevealSection delay={100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Our Floor Captain &mdash; The Heart</h3>
                  <p className="text-sm text-charcoal/70">Respected across both locations, not because of authority but because of love and respect. She handles training, payroll, and scheduling&mdash;the things the owner admits she does better than he ever could. When she&apos;s on the floor, the entire team follows her lead.</p>
                </div>
              </RevealSection>
              <RevealSection delay={200}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Since Day One &mdash; 1988</h3>
                  <p className="text-sm text-charcoal/70">Jinbeh&apos;s longest-tenured employee has been here since the very first day. He started as a dishwasher, became a busser, and today is the mastermind behind food strategy and logistics for every festival and major event. That&apos;s 38 years of unbroken dedication.</p>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Guests Keep Coming Back
              </h2>
              <p className="text-lg text-charcoal/70">
                We&apos;re not a chain. We&apos;re your gracious hosts. Here&apos;s what makes every visit special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Fresh Ingredients */}
              <MagicCard
                className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-none"
                gradientColor="rgba(201, 162, 39, 0.15)"
              >
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-6 shadow-md pointer-events-none">
                  <Image
                    src="/images/catalog/homemade-sauces.jpg"
                    alt="Jinbeh house-made dipping sauces — spicy chili sauce and signature yum yum sauce made fresh daily from scratch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 pointer-events-none">
                  Premium, Fresh Ingredients
                </h3>
                <p className="text-charcoal/70 text-sm pointer-events-none">
                  We source the finest, freshest fish daily. Our Yum Yum sauce, dipping sauces, and garlic butter are all made in-house—no shortcuts. Explore our <Link href="/menu" className="text-accent-red hover:underline pointer-events-auto">full menu</Link> to see what we serve. When you taste the difference, you understand why guests prefer us over chains.
                </p>
                <p className="mt-4 text-xs italic text-charcoal/50 border-l-2 border-soft-gold/40 pl-3 pointer-events-none">
                  &ldquo;The food is consistently great and of the highest quality.&rdquo; — Google Review
                </p>
              </MagicCard>

              {/* Skilled Chefs */}
              <MagicCard
                className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-none"
                gradientColor="rgba(201, 162, 39, 0.15)"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-deep-indigo/10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-8 h-8 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 pointer-events-none">
                  Spirited Hibachi Shows
                </h3>
                <p className="text-charcoal/70 text-sm pointer-events-none">
                  Skilled chefs bring artistry and entertainment to every table. The onion volcano, the flying shrimp, the flames—it&apos;s dinner and a show, every time. Discover the rich history of <Link href="/blog/popular-japanese-culture" className="text-accent-red hover:underline pointer-events-auto">Japanese culinary culture</Link> behind these traditions.
                </p>
                <p className="mt-4 text-xs italic text-charcoal/50 border-l-2 border-soft-gold/40 pl-3 pointer-events-none">
                  &ldquo;Chef cooks right in front of you using special effects with fire — always fun!&rdquo; — TripAdvisor Review
                </p>
              </MagicCard>

              {/* Family Atmosphere */}
              <MagicCard
                className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-none"
                gradientColor="rgba(201, 162, 39, 0.15)"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-soft-gold/20 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 pointer-events-none">
                  Warm, Genuine Hospitality
                </h3>
                <p className="text-charcoal/70 text-sm pointer-events-none">
                  Family-owned and operated. Every child gets a hand-folded origami crane from a basket by the door, plus training chopsticks and a lollipop. Our philosophy: invest in the kids, and they grow up saying &ldquo;I want to go to Jinbeh.&rdquo; That&apos;s why we hear from guests who started coming as toddlers and now bring their own friends.
                </p>
                <p className="mt-4 text-xs italic text-charcoal/50 border-l-2 border-soft-gold/40 pl-3 pointer-events-none">
                  &ldquo;Service is great — cozy and family-like.&rdquo; — Google Review
                </p>
              </MagicCard>

              {/* Celebrations */}
              <MagicCard
                className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow border-none"
                gradientColor="rgba(201, 162, 39, 0.15)"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-cedar-brown/10 rounded-full flex items-center justify-center pointer-events-none">
                  <svg className="w-8 h-8 text-cedar-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 pointer-events-none">
                  Birthdays & Special Moments
                </h3>
                <p className="text-charcoal/70 text-sm pointer-events-none">
                  Every birthday gets the &ldquo;three-touch&rdquo; treatment: the host says happy birthday at check-in, the server is notified with a circled seat number, and the chef is informed. Three separate people, three heartfelt moments&mdash;then tambourines, noisemakers, and ice cream to close the show. <Link href="/celebrations" className="text-accent-red hover:underline pointer-events-auto">Explore celebrations</Link>.
                </p>
                <p className="mt-4 text-xs italic text-charcoal/50 border-l-2 border-soft-gold/40 pl-3 pointer-events-none">
                  &ldquo;We&apos;ve been coming here for years, celebrating a lot of birthdays.&rdquo; — Google Review
                </p>
              </MagicCard>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Follow Our Journey
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto mb-6">
                Join the Jinbeh family on Instagram for behind-the-scenes moments,
                mouth-watering dishes, and celebrations.
              </p>
              <a
                href="https://www.instagram.com/jinbehfrisco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jinbeh on Instagram" className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @jinbehfrisco
              </a>
            </div>

            {/* Instagram Grid */}
            <div className="max-w-[100vw] overflow-hidden">
              <Marquee className="[--duration:60s] py-4" pauseOnHover>
                {[
                  { src: "/images/food/SamaraiRollCloseup.jpg", alt: "Samurai roll specialty sushi with fresh fish and avocado" },
                  { src: "/images/photoshoot/hibachi-plate-shrimp.jpg", alt: "Hibachi grilled shrimp with vegetables and fried rice" },
                  { src: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg", alt: "Fresh sushi selection and Japanese desserts at the bar" },
                  { src: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg", alt: "Hibachi combo with NY strip steak and colossal shrimp" },
                  { src: "/images/photoshoot/sashimi-platter.jpg", alt: "Premium sashimi platter with salmon, tuna, and yellowtail" },
                  { src: "/images/drinks/JinbehPunchBeverageDrink.jpg", alt: "Jinbeh Punch signature cocktail with tropical flavors" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href="https://www.instagram.com/jinbehfrisco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.alt} — View on Instagram`}
                    className="relative aspect-square rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      quality={80}
                      loading="lazy" />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </Marquee>
            </div>
          </div>
        </section>


        {/* Behind the Scenes — Stories of Jinbeh */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                The People Behind Every Plate
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Jinbeh isn&apos;t built on recipes alone — it&apos;s built on relationships that span decades.
              </p>
            </div>

            <div className="space-y-16">
              {/* Head Sushi Chef — 30-Year Legacy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-2">30+ Years of Mastery</p>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Our Sushi Master</h3>
                  <div className="space-y-4 text-charcoal/80 leading-relaxed">
                    <p>
                      Our head sushi chef has been with Jinbeh for nearly 30 years. Originally from the southern coast of Japan, a region renowned for its seafood and noodle traditions, he co-created every signature roll on our menu alongside the Matsuda family during late-night sessions of testing and perfecting.
                    </p>
                    <p>
                      At the original Las Colinas location, he created a beloved ramen section that became a local favorite. His craft represents the soul of our <Link href="/frisco/sushi-rolls">sushi program</Link> &mdash; precise, authentic, and always evolving.
                    </p>
                    <p className="text-charcoal font-medium italic border-l-4 border-soft-gold pl-4">
                      &ldquo;He&apos;s my second dad. The entire sushi menu was a collaboration &mdash; sleepless nights working together to craft and refine every roll.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hibachi-lewisville-2026/jinbeh-sushi-presentation-lewisville-001-orig-IMG_1870-1200w.webp"
                    alt="Fresh sushi presentation crafted by Jinbeh's head sushi chef"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* The Dallas Cowboys Connection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/interior/JinbehFriscoTables.jpg"
                    alt="Jinbeh dining area with signed Dallas Cowboys memorabilia on the walls"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-2">A Decade of Legends</p>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">The Cowboys Connection</h3>
                  <div className="space-y-4 text-charcoal/80 leading-relaxed">
                    <p>
                      For over a decade, Dallas Cowboys players were regulars at Jinbeh. Our original Las Colinas location sat near the team&apos;s practice facility, and players became genuine friends of the restaurant &mdash; attending celebrations, hosting private dinners, and building real relationships. The signed photographs now displayed at our <Link href="/frisco" className="text-accent-red hover:underline">Frisco location</Link> are mementos of that era.
                    </p>
                    <p>
                      The Cowboys players even attended Jinbeh&apos;s last day at Las Colinas as a farewell tribute. It&apos;s the kind of loyalty that only comes from truly great food and genuine hospitality.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Kids & Origami Tradition */}
              <div className="bg-warm-ivory rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <span className="text-4xl mb-4 block">🪭</span>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Our Family Traditions</h3>
                  <div className="space-y-4 text-charcoal/80 leading-relaxed">
                    <p>
                      Every child who visits Jinbeh receives a hand-folded origami crane from a basket at the host stand. Training chopsticks and lollipops are always available for little ones. Our philosophy is simple: invest in making kids feel special, and they grow up saying &ldquo;I want to go to Jinbeh.&rdquo;
                    </p>
                    <p>
                      We hear it all the time &mdash; guests who started coming as toddlers now bring their own friends and families. That&apos;s the cycle of trust that 38 years of genuine <Link href="/celebrations/birthday" className="text-accent-red hover:underline">family hospitality</Link> creates.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Founding Philosophy */}
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Three Words That Built a Legacy</h3>
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="bg-warm-ivory px-8 py-4 rounded-xl">
                    <span className="block text-2xl font-heading font-bold text-accent-red">Humble</span>
                  </div>
                  <div className="bg-warm-ivory px-8 py-4 rounded-xl">
                    <span className="block text-2xl font-heading font-bold text-deep-indigo">Hardworking</span>
                  </div>
                  <div className="bg-warm-ivory px-8 py-4 rounded-xl">
                    <span className="block text-2xl font-heading font-bold text-soft-gold">Honest</span>
                  </div>
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  These three words became the spiritual foundation of Jinbeh when our founder passed them down to his son. They guide every decision &mdash; from how we source ingredients to how we greet you at the door. A competitor once copied our entire menu. Our response? &ldquo;If it&apos;s going to happen, it&apos;s going to happen.&rdquo; They didn&apos;t last five years. Thirty-eight years of community trust can&apos;t be replicated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-16 bg-gradient-to-b from-warm-ivory to-white">
          <div className="container mx-auto px-6">
            <RevealSection>
              <div className="text-center mb-12">
                <ShinyBadge>Recognized Excellence</ShinyBadge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mt-4 mb-4">
                  Awards &amp; Recognition
                </h2>
                <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                  We&apos;re honored that food critics, diners, and platforms have recognized what our guests have known for decades &mdash; Jinbeh is something special.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* D Magazine */}
              <RevealSection delay={100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center h-full">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image src="/images/awards/d-magazine-logo.png" alt="D Magazine logo" fill className="object-contain" quality={90} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">D Magazine</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
                    Multiple award winner including <strong>&ldquo;Best Place to Eat&rdquo;</strong> in the Best of Big D franchise and <strong>&ldquo;Best Neighborhood Restaurants.&rdquo;</strong> D Magazine described Jinbeh as having &ldquo;the best grilled veggies around&rdquo; and noted diners say &ldquo;Anytime I&apos;m looking for consistency and a great meal, I go there.&rdquo;
                  </p>
                  <p className="text-xs text-charcoal/50 italic">
                    Featured in D Magazine since 1990 &mdash; over three decades of editorial recognition.
                  </p>
                </div>
              </RevealSection>

              {/* OpenTable Diners' Choice */}
              <RevealSection delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center h-full">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image src="/images/awards/opentable-logo.png" alt="OpenTable logo" fill className="object-contain" quality={90} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">OpenTable Diners&apos; Choice</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
                    Currently recognized across <strong>12+ Diners&apos; Choice and &ldquo;Best Of&rdquo; lists</strong> for 2026. Ranked <strong>#1 Hibachi in Lewisville</strong>, <strong>#1 Tempura in Lewisville</strong>, and <strong>#2 Hibachi in Frisco</strong>. Also selected for Best Japanese, Best Food, Best Value, Healthy, and Kid-Friendly.
                  </p>
                  <p className="text-xs text-charcoal/50 italic">
                    Earned through verified diner reviews, updated monthly.
                  </p>
                </div>
              </RevealSection>

              {/* Media Features */}
              <RevealSection delay={300}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center h-full">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image src="/images/awards/eater-logo.png" alt="Eater Dallas logo" fill className="object-contain" quality={90} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Featured In</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
                    <strong>Eater Dallas</strong> &mdash; included in their curated DFW dining guide. <strong>TripAdvisor Travelers&apos; Choice</strong> award recipient. Named to TripAdvisor&apos;s &ldquo;Best Sushi&rdquo; and &ldquo;10 Best Japanese Restaurants&rdquo; lists for both Frisco and Lewisville.
                  </p>
                  <p className="text-xs text-charcoal/50 italic">
                    Recognized across major travel and dining platforms worldwide.
                  </p>
                </div>
              </RevealSection>
            </div>

            <RevealSection delay={400}>
              <p className="text-center text-charcoal/60 text-sm mt-10 max-w-xl mx-auto">
                Our real award? Seeing families come back generation after generation. That&apos;s the recognition that matters most.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join the Jinbeh Family
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Experience the warmth, the spirited shows, and the authentic hospitality that guests have been coming back for over 20 years.
              A warm welcome and a show with every meal—that&apos;s our promise. Give the gift of Jinbeh with a <Link href="/gift-cards" className="text-soft-gold hover:underline">gift card</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservations"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Reserve at Frisco
              </Link>
              <Link
                href="/reservations"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl transition-all"
              >
                Reserve at Lewisville
              </Link>
            </div>
          </div>

          <p className="mt-4 text-sm">
            <a href="/blog/asian-cuisine-dallas" className="text-accent-red hover:underline">
              Related: Top Asian Cuisine & Fusion Spots in Dallas TX →
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
