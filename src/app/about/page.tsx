import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "About Jinbeh | Family-Owned Japanese Since 1988",
  },
  description:
    "Discover the Jinbeh story. Family-owned hibachi and sushi restaurant in Frisco & Lewisville TX since 1988. 37+ years of tradition and hospitality.",
  keywords: [
    "about jinbeh",
    "japanese restaurant history frisco",
    "family owned restaurant frisco tx",
    "hibachi restaurant history",
    "authentic japanese dining dfw",
  ],
  openGraph: {
    title: "About Jinbeh | Family-Owned Since 1988",
    description: "37+ years of authentic Japanese dining in North Texas. Discover our story.",
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
        "text": "Jinbeh Japanese Restaurant has been family-owned and operated since 1988, serving North Texas for over 37 years with authentic hibachi and sushi.",
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
  "description": "Family-owned Japanese restaurant serving authentic hibachi and sushi in Frisco and Lewisville, TX since 1988.",
  "sameAs": [
    "https://www.instagram.com/jinbehfrisco/",
    "https://www.facebook.com/JinbehFrisco/",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Family-Owned Since 1988
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Our Story
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto hero-subheadline">
              Welcome to the table. For over 37 years, we&apos;ve been creating
              unforgettable moments for families across North Texas.
            </p>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  A Legacy of Flavor & Hospitality
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    In 1988, our family opened the doors to Jinbeh with a simple
                    mission: to share the joy of authentic Japanese cuisine with
                    our North Texas neighbors. What started as a small hibachi
                    restaurant has grown into a beloved tradition for generations
                    of families across the DFW metroplex.
                  </p>
                  <p>
                    The name &quot;Jinbeh&quot; reflects our commitment to warmth and
                    hospitality. From the moment you walk through our doors, you
                    become part of our family. Our chefs don&apos;t just prepare food
                    – they create experiences, turning every meal into dinner and
                    a show.
                  </p>
                  <p>
                    Today, with locations in both Frisco and Lewisville, we
                    continue the tradition our family started over three decades
                    ago. Fresh ingredients, skilled craftsmanship, and genuine
                    hospitality remain at the heart of everything we do.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div className="text-center p-4">
                    <span className="block text-4xl font-bold text-accent-red">37+</span>
                    <span className="text-sm text-charcoal/60">Years of Tradition</span>
                  </div>
                  <div className="text-center p-4">
                    <span className="block text-4xl font-bold text-deep-indigo">2</span>
                    <span className="text-sm text-charcoal/60">DFW Locations</span>
                  </div>
                  <div className="text-center p-4">
                    <span className="block text-4xl font-bold text-soft-gold">4.5★</span>
                    <span className="text-sm text-charcoal/60">Average Rating</span>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/interior/FriscoLocation_Bar_Front.jpg"
                      alt="Jinbeh Frisco bar and dining area"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/photoshoot/sushi-tower.jpg"
                      alt="Fresh sushi tower"
                      fill
                      className="object-cover"
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
                    />
                  </div>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg"
                      alt="Birthday celebration at Jinbeh"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
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
                    <span className="block text-sm text-charcoal/60 mt-2 not-italic">— Aya Matsuda</span>
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

        {/* Values Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                What Makes Jinbeh Special
              </h2>
              <p className="text-lg text-charcoal/70">
                Every detail matters when it comes to creating memorable dining experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Fresh Ingredients */}
              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Quality Ingredients
                </h3>
                <p className="text-charcoal/70 text-sm">
                  We source the freshest fish and premium ingredients daily to ensure every dish meets our high standards.
                </p>
              </div>

              {/* Skilled Chefs */}
              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Master Chefs
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Our hibachi chefs bring years of experience and showmanship to every performance at your table.
                </p>
              </div>

              {/* Family Atmosphere */}
              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Family Owned
                </h3>
                <p className="text-charcoal/70 text-sm">
                  From our family to yours, we treat every guest with the warmth and care they deserve.
                </p>
              </div>

              {/* Celebrations */}
              <div className="text-center p-8 bg-warm-ivory rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-cedar-brown/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cedar-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Celebrations
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Birthdays, anniversaries, graduations – we make every occasion unforgettable.
                </p>
              </div>
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
                className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @jinbehfrisco
              </a>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-w-6xl mx-auto">
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
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Experience Jinbeh?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join us at either location for a meal you won&apos;t forget.
              It&apos;s a celebration waiting to happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco#reserve"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Reserve at Frisco
              </Link>
              <Link
                href="/lewisville#reserve"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl transition-all"
              >
                Reserve at Lewisville
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
