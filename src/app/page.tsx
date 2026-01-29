import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jinbeh Japanese Restaurant | Hibachi & Sushi in Frisco & Lewisville TX",
  description:
    "Experience authentic Japanese hibachi and sushi at Jinbeh. Family-owned since 1988, serving Frisco and Lewisville, TX. Dinner and a show – where memories are made. Reserve your table today!",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Location Selector */}
      <section className="hero relative bg-charcoal">
        {/* Background Video Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-hibachi.jpg')",
          }}
        />
        <div className="hero-overlay" />

        <div className="hero-content max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-warm-ivory/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-warm-ivory/20">
              <span className="text-warm-ivory font-bold text-5xl font-heading">
                金
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
            JINBEH
          </h1>
          <p className="text-xl md:text-2xl text-warm-ivory/90 italic mb-8">
            Experience Japanese Cuisine
          </p>

          <p className="text-lg text-warm-ivory/80 max-w-2xl mx-auto mb-12">
            Welcome to the table. For over 37 years, our family has been
            creating unforgettable dining experiences in North Texas. From
            spectacular hibachi shows to artfully crafted sushi, every meal at
            Jinbeh is a celebration.
          </p>

          {/* Location Selection */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/frisco"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <h2 className="text-2xl font-heading font-semibold text-white mb-2">
                  Frisco
                </h2>
                <p className="text-warm-ivory/70 text-sm mb-4">
                  Near Stonebriar Centre
                </p>
                <span className="inline-flex items-center gap-2 text-accent-red group-hover:text-soft-gold transition-colors">
                  Visit Frisco Location
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            <Link
              href="/lewisville"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <h2 className="text-2xl font-heading font-semibold text-white mb-2">
                  Lewisville
                </h2>
                <p className="text-warm-ivory/70 text-sm mb-4">
                  Easy access from I-35E
                </p>
                <span className="inline-flex items-center gap-2 text-accent-red group-hover:text-soft-gold transition-colors">
                  Visit Lewisville Location
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex items-center justify-center gap-6 text-warm-ivory/60 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.5+ Star Average
            </span>
            <span>•</span>
            <span>Family-Owned Since 1988</span>
            <span>•</span>
            <span>37+ Years of Tradition</span>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Hibachi */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                Hibachi Entertainment
              </h3>
              <p className="text-charcoal/70">
                Watch our skilled chefs put on a spectacular show with flames,
                tricks, and the famous onion volcano.
              </p>
            </div>

            {/* Sushi */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🍣</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                Fresh Sushi & Sashimi
              </h3>
              <p className="text-charcoal/70">
                Expertly crafted rolls and pristine sashimi prepared by our
                master sushi chefs at the bar.
              </p>
            </div>

            {/* Celebrations */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                Perfect for Celebrations
              </h3>
              <p className="text-charcoal/70">
                Birthdays, anniversaries, graduations – we make every occasion
                special with memorable dining.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-charcoal/70 mb-4">
              Ready to experience dinner and a show?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/frisco#reserve" className="btn btn-primary btn-shimmer">
                Reserve at Frisco
              </Link>
              <Link href="/lewisville#reserve" className="btn btn-secondary">
                Reserve at Lewisville
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
