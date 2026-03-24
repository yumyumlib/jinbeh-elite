import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anniversary Dinner | Romantic Japanese Dining | Jinbeh Frisco & Lewisville",
  description: "Celebrate your anniversary with an unforgettable hibachi dinner at Jinbeh. Romantic atmosphere, exceptional Japanese cuisine, and tableside entertainment in Frisco and Lewisville TX.",
  keywords: [
    "anniversary dinner frisco",
    "romantic restaurant frisco tx",
    "anniversary dinner lewisville",
    "romantic hibachi dinner",
    "couples dinner near me",
    "special occasion restaurant frisco",
    "romantic japanese restaurant dallas",
    "anniversary celebration hibachi",
  ],
  openGraph: {
    title: "Anniversary Dinner | Romantic Japanese Dining | Jinbeh",
    description: "Celebrate your anniversary with exceptional hibachi and sushi at Jinbeh Japanese Restaurant.",
    url: "https://jinbeh.com/celebrations/anniversary",
    images: [
      {
        url: "https://jinbeh.com/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Celebrations Anniversary",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/anniversary",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh a good anniversary dinner spot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jinbeh has been hosting anniversary celebrations since 1988. Our hibachi tables offer interactive chef-prepared dining, while our sushi bar provides quiet, intimate conversation spaces. Every detail is designed to create a memorable evening for your special occasion.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I request something special for an anniversary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Call ahead to let us know you're celebrating an anniversary, and we'll help make your evening truly special. We can accommodate requests for preferred seating and special touches when available.",
      },
    },
    {
      "@type": "Question",
      "name": "What's the best seating for a romantic dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a quieter, more intimate experience, we recommend the sushi bar or a booth. For couples who enjoy interactive entertainment, our hibachi tables offer a fun shared experience with knife tricks, the onion volcano, and flame shows.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you serve sake or cocktails for couples?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We have an extensive sake menu, Japanese whiskey selection, craft cocktails, and premium wines. Try our Sake Flight to sample different varieties, or our signature Lychee Martini for a romantic touch. Ask your server for pairing recommendations with your meal.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Celebrations", "item": "https://jinbeh.com/celebrations" },
    { "@type": "ListItem", "position": 3, "name": "Anniversary Dinner" },
  ],
};

const faqs = faqSchema.mainEntity;

export default function AnniversaryPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Breadcrumb */}
        <nav className="bg-white border-b border-warm-ivory">
          <div className="container mx-auto px-6 py-3">
            <ol className="flex items-center gap-2 text-sm text-charcoal/60">
              <li><Link href="/" className="hover:text-accent-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/celebrations" className="hover:text-accent-red">Celebrations</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Anniversary</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/food/nigiri.jpg"
            alt="Elegant sushi platter for a romantic anniversary dinner at Jinbeh"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4 text-lg">
              Romantic Dining
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Anniversary Celebrations
            </h1>
            <p className="text-xl md:text-2xl text-warm-ivory/90 max-w-2xl mx-auto mb-8 hero-subheadline">
              Create lasting memories with exceptional Japanese cuisine, tableside entertainment, and the warmth of Jinbeh hospitality.
            </p>
            <Link
              href="/reservations"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Reserve Your Anniversary Dinner
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Why Jinbeh for Anniversaries */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Jinbeh for Your Anniversary?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Since 1988, we&apos;ve been the DFW destination for celebrating love and togetherness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { emoji: "✨", title: "Intimate Atmosphere", desc: "Low lighting, warm wood accents, and an ambiance built for special moments." },
                { emoji: "🔥", title: "Tableside Show", desc: "Your chef performs knife tricks, fire shows, and the legendary onion volcano — dinner and a show." },
                { emoji: "🍣", title: "Sushi Bar Romance", desc: "Prefer quiet conversation? Our sushi bar offers fresh omakase and specialty rolls for two." },
                { emoji: "🍶", title: "Premium Sake & Cocktails", desc: "Japanese whiskey, sake flights, craft cocktails — the perfect pairing for your evening." },
              ].map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl mb-6">{f.emoji}</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">{f.title}</h3>
                  <p className="text-charcoal/70 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Dining Experiences */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/food/hibachi-grill.jpg"
                    alt="Hibachi chef preparing a romantic anniversary dinner at Jinbeh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Two Ways to Celebrate
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    Whether you prefer the energy of hibachi entertainment or the intimacy of our sushi bar,
                    Jinbeh offers the perfect setting for your anniversary. Our family-owned restaurant
                    has perfected the art of celebration for nearly four decades.
                  </p>
                </div>

                {/* Experience Comparison Table */}
                <div className="overflow-x-auto mt-8">
                  <table className="w-full border-collapse bg-warm-ivory rounded-xl overflow-hidden shadow-md text-sm">
                    <thead className="bg-charcoal text-white">
                      <tr>
                        <th className="p-4 text-left font-heading">Feature</th>
                        <th className="p-4 text-left font-heading">🔥 Hibachi</th>
                        <th className="p-4 text-left font-heading">🍣 Sushi Bar</th>
                      </tr>
                    </thead>
                    <tbody className="text-charcoal/80">
                      <tr className="border-b border-white">
                        <td className="p-3 font-medium text-charcoal">Vibe</td>
                        <td className="p-3">Fun, energetic, interactive</td>
                        <td className="p-3">Intimate, quiet, conversational</td>
                      </tr>
                      <tr className="border-b border-white">
                        <td className="p-3 font-medium text-charcoal">Seating</td>
                        <td className="p-3">Shared table (8-10)</td>
                        <td className="p-3">Counter or booth</td>
                      </tr>
                      <tr className="border-b border-white">
                        <td className="p-3 font-medium text-charcoal">Entertainment</td>
                        <td className="p-3">Chef show, flames, tricks</td>
                        <td className="p-3">Watch chef craft sushi</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-charcoal">Best For</td>
                        <td className="p-3">Couples who love energy</td>
                        <td className="p-3">Quiet romantic evening</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
                Planning Your Anniversary Dinner
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-soft-gold mb-4">💡 Pro Tips</h3>
                  <ul className="space-y-3 text-warm-ivory/90 text-sm">
                    <li>• Call ahead to mention your anniversary — we love celebrating with you</li>
                    <li>• Request a booth for the most intimate setting</li>
                    <li>• Try a sake flight to explore new flavors together</li>
                    <li>• Arrive 10–15 minutes early to settle in</li>
                    <li>• Weekday evenings offer a quieter, more relaxed atmosphere</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-soft-gold mb-4">🎁 Make It Special</h3>
                  <ul className="space-y-3 text-warm-ivory/90 text-sm">
                    <li>• <Link href="/gift-cards" className="text-sky-300 hover:text-sky-100">Gift cards</Link> make a great surprise add-on</li>
                    <li>• Pair your meal with premium Japanese whiskey</li>
                    <li>• Share a specialty roll — our Dragon Roll is a favorite</li>
                    <li>• Book hibachi if you love shared experiences</li>
                    <li>• End the evening with green tea ice cream or mochi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section — Accordion */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Anniversary Dinner FAQs
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <summary className="flex items-center justify-between cursor-pointer p-6 font-heading text-lg font-bold text-charcoal hover:text-accent-red transition-colors">
                      <span>{faq.name}</span>
                      <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 text-charcoal/80 border-t border-warm-ivory">
                      <p className="mt-4 leading-relaxed">{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Reserve Your Anniversary Dinner
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Let us know you&apos;re celebrating an anniversary when you reserve. We&apos;ll take care of the rest!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://www.opentable.com/jinbeh-japanese-restaurant-reservations-frisco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve at Frisco
              </a>
              <a
                href="https://www.opentable.com/jinbeh-lewisville"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Reserve at Lewisville
              </a>
            </div>
            <p className="text-white/70 text-sm">
              For special requests, call us directly:<br />
              Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
            </p>
          </div>
        </section>

        {/* Related Blog Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">
              Plan the Perfect Anniversary Evening
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/best-sushi-frisco" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Sushi Guide</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  Best Sushi in Frisco TX: Where to Find It
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Discover why Jinbeh's sushi bar is a top pick for romantic sushi dinners in Frisco.</p>
              </Link>
              <Link href="/blog/sake-pairing-guide" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Drinks Guide</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  Sake Pairing Guide: Perfect Matches for Every Dish
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Elevate your anniversary dinner with the perfect sake for each course.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Other Celebrations */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Celebrating Something Else?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/celebrations/birthday" className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium">
                Birthday Parties
              </Link>
              <Link href="/celebrations/valentines-day" className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium">
                Valentine&apos;s Day
              </Link>
              <Link href="/celebrations/date-night" className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium">
                Date Night
              </Link>
              <Link href="/catering" className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium">
                Catering Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
