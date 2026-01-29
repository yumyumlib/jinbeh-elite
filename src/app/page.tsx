import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jinbeh Japanese Restaurant | Hibachi & Sushi in Frisco & Lewisville TX",
  description:
    "Experience authentic Japanese hibachi and sushi at Jinbeh. Family-owned since 1988, serving Frisco and Lewisville, TX. Dinner and a show – where memories are made. Reserve your table today!",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Screen with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://jinbeh.com/wp-content/uploads/2023/01/sushi-background.jpg"
        >
          <source
            src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://jinbeh.com/wp-content/uploads/2023/01/sushi-background.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="https://jinbeh.com/wp-content/uploads/2022/03/jinbehlogo-white.svg"
              alt="Jinbeh Japanese Restaurant"
              width={200}
              height={120}
              className="mx-auto"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-wide">
            JINBEH
          </h1>
          <p className="text-2xl md:text-3xl text-warm-ivory/90 italic mb-6 font-light">
            Experience Japanese Cuisine
          </p>

          <p className="text-lg md:text-xl text-warm-ivory/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Welcome to the table. For over 37 years, our family has been
            creating unforgettable dining experiences in North Texas. From
            spectacular hibachi shows to artfully crafted sushi, every meal at
            Jinbeh is a celebration.
          </p>

          {/* Location Selection Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/frisco"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:border-soft-gold/50 min-w-[280px]"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/20 rounded-full flex items-center justify-center group-hover:bg-accent-red/30 transition-colors">
                  <span className="text-3xl">🏯</span>
                </div>
                <h2 className="text-2xl font-heading font-semibold text-white mb-2">
                  Frisco
                </h2>
                <p className="text-warm-ivory/70 text-sm mb-4">
                  Near Stonebriar Centre
                </p>
                <span className="inline-flex items-center gap-2 text-soft-gold group-hover:text-white transition-colors font-medium">
                  Visit Frisco Location
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            <Link
              href="/lewisville"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:border-soft-gold/50 min-w-[280px]"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/30 rounded-full flex items-center justify-center group-hover:bg-deep-indigo/40 transition-colors">
                  <span className="text-3xl">🍣</span>
                </div>
                <h2 className="text-2xl font-heading font-semibold text-white mb-2">
                  Lewisville
                </h2>
                <p className="text-warm-ivory/70 text-sm mb-4">
                  Easy access from I-35E
                </p>
                <span className="inline-flex items-center gap-2 text-soft-gold group-hover:text-white transition-colors font-medium">
                  Visit Lewisville Location
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-warm-ivory/70 text-sm">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-soft-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.5+ Stars</span>
            </span>
            <span className="hidden md:block">•</span>
            <span>Family-Owned Since 1988</span>
            <span className="hidden md:block">•</span>
            <span>37+ Years of Tradition</span>
          </div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
              The Jinbeh Experience
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              More than a meal – it&apos;s entertainment, artistry, and tradition
              served at your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Hibachi */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-red to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">🔥</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                Hibachi Theater
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Watch our master chefs dazzle with flames, precision knife work,
                and the legendary onion volcano. Dinner and a show, every time.
              </p>
            </div>

            {/* Sushi */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-deep-indigo to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">🍣</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                Sushi Artistry
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Pristine fish, expertly crafted rolls, and creative
                presentations. Our sushi bar is where tradition meets
                innovation.
              </p>
            </div>

            {/* Celebrations */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-soft-gold to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
                Celebrate Together
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Birthdays, anniversaries, graduations – we make every occasion
                unforgettable with personalized touches and joyful moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              A Feast for the Eyes
            </h2>
            <p className="text-lg text-warm-ivory/70 max-w-2xl mx-auto">
              Every dish is crafted with care and presented with pride.
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg"
                alt="Hibachi grill"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="https://jinbeh.com/wp-content/uploads/2023/01/sushi-platter.jpg"
                alt="Sushi platter"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="https://jinbeh.com/wp-content/uploads/2023/01/chef-flames.jpg"
                alt="Chef with flames"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="https://jinbeh.com/wp-content/uploads/2023/01/family-dining.jpg"
                alt="Family dining"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready for an Experience?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Join us at either location for a dining experience that will create
            memories to last a lifetime.
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

      {/* Footer */}
      <footer className="py-12 bg-charcoal text-warm-ivory/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="https://jinbeh.com/wp-content/uploads/2022/03/jinbehlogo-white.svg"
                alt="Jinbeh"
                width={100}
                height={60}
              />
              <span className="text-sm">
                © {new Date().getFullYear()} Jinbeh Japanese Restaurant
              </span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/frisco" className="hover:text-soft-gold transition-colors">
                Frisco
              </Link>
              <Link href="/lewisville" className="hover:text-soft-gold transition-colors">
                Lewisville
              </Link>
              <a
                href="https://www.instagram.com/jinbehfrisco/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-soft-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/JinbehFrisco/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-soft-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
