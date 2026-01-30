import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Date Night Dining | Romantic Restaurant | Jinbeh Frisco & Lewisville TX",
  description:
    "Experience romantic date nights at Jinbeh with hibachi entertainment or intimate sushi bar seating. Perfect for couples seeking a special evening in Frisco or Lewisville.",
  keywords: [
    "date night frisco",
    "romantic restaurant frisco tx",
    "couples dining frisco",
    "date night lewisville",
    "hibachi date night",
    "romantic japanese restaurant",
    "best date night restaurants",
    "intimate dining frisco",
  ],
  openGraph: {
    title: "Date Night Dining | Jinbeh Japanese Restaurant",
    description: "Create romantic moments with exceptional Japanese cuisine and intimate ambiance at Jinbeh.",
    url: "https://jinbeh.com/celebrations/date-night",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/date-night",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh a good restaurant for a date night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jinbeh offers two distinct date night experiences. Choose our interactive hibachi tables for fun and conversation, or enjoy our intimate sushi bar for quiet romance and personalized service.",
      },
    },
    {
      "@type": "Question",
      "name": "Which seating is better for a romantic date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your style! Hibachi is perfect for couples who enjoy interactive entertainment and lively atmosphere. Our sushi bar is ideal for quieter, more intimate conversation while watching skilled craftspeople prepare your meal.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I request special seating for my date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Call ahead to request your preferred seating type and let us know it's a special occasion. We'll do our best to accommodate your preferences when available.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you have cocktails and sake for date night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have an excellent selection of craft cocktails, premium sake, fine wines, and Japanese whiskeys. Our knowledgeable staff can suggest pairings that complement your meal.",
      },
    },
    {
      "@type": "Question",
      "name": "What are your busiest times?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Friday and Saturday evenings are our busiest nights. We recommend reservations for weekend dates. Weekday evenings offer a more relaxed atmosphere if you prefer a quieter experience.",
      },
    },
  ],
};

const dateNightFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Two Distinct Experiences",
    description: "Choose hibachi for interactive fun or sushi bar for intimate sophistication – the perfect setting for your style.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Premium Beverages",
    description: "Craft cocktails, fine wines, premium sake, and Japanese whiskeys to enhance your dining experience.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Exceptional Cuisine",
    description: "Fresh, artfully prepared Japanese dishes that impress and delight.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Warm Hospitality",
    description: "Our team creates an atmosphere where you feel welcomed and celebrated.",
  },
];

export default function DateNightPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/food/nigiri.jpg"
            alt="Beautiful sushi platter for romantic date night"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Romantic Dining
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Date Night at Jinbeh
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Create a special evening with exceptional Japanese cuisine,
              intimate ambiance, and unforgettable moments together.
            </p>
            <Link
              href="#reserve"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Reserve Your Date
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Date Night Features */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Jinbeh for Date Night
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Two distinct experiences, both designed for romance and connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {dateNightFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center text-accent-red">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Seating Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Choose Your Date Night Style
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Two wonderful ways to spend an evening together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Hibachi Option */}
              <div className="border-2 border-accent-red/20 rounded-2xl p-10 hover:border-accent-red transition-colors">
                <div className="text-5xl mb-6">🔥</div>
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                  Hibachi Entertainment
                </h3>
                <p className="text-charcoal/80 mb-6">
                  Perfect for couples who want interactive entertainment and exciting conversation starters.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Live chef performance at your table</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Entertaining knife tricks and theatrics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Premium proteins cooked to perfection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">The legendary onion volcano</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Premium sake or cocktails</span>
                  </div>
                </div>

                <p className="text-sm text-charcoal/60 italic">
                  Great for: Couples who enjoy laughter, engagement, and an energetic atmosphere.
                </p>
              </div>

              {/* Sushi Bar Option */}
              <div className="border-2 border-deep-indigo/20 rounded-2xl p-10 hover:border-deep-indigo transition-colors">
                <div className="text-5xl mb-6">🍣</div>
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                  Intimate Sushi Bar
                </h3>
                <p className="text-charcoal/80 mb-6">
                  Perfect for quieter, more intimate moments and personalized attention.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-deep-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Cozy counter seating for two</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-deep-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Watch master sushi chefs craft your meal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-deep-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Fresh sushi made to order</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-deep-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Personalized chef recommendations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-deep-indigo flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">Specialty cocktails and premium sake</span>
                  </div>
                </div>

                <p className="text-sm text-charcoal/60 italic">
                  Great for: Couples who prefer conversation, sophistication, and a relaxed pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Date Night Tips for Success
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                    <span className="text-2xl">📅</span> Planning
                  </h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li>• Make reservations in advance (especially weekends)</li>
                    <li>• Weekdays offer a more relaxed atmosphere</li>
                    <li>• Let us know it's a special date when booking</li>
                    <li>• Ask for your preferred seating type</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                    <span className="text-2xl">🍷</span> Beverages
                  </h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li>• Ask our staff for wine pairings</li>
                    <li>• Try premium sake selections</li>
                    <li>• Craft cocktails available</li>
                    <li>• Our team loves recommendations!</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                    <span className="text-2xl">🍽️</span> Dining
                  </h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li>• Try our specialty rolls and nigiri</li>
                    <li>• Share appetizers to start</li>
                    <li>• Don't miss the sashimi selection</li>
                    <li>• Ask for chef recommendations</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                    <span className="text-2xl">💝</span> Special Touch
                  </h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li>• Mention anniversaries or milestones</li>
                    <li>• Our team can help make moments special</li>
                    <li>• Arrive on time and unhurried</li>
                    <li>• Put phones away and focus on each other</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Book Your Date Night
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Make a reservation and let us know it's a special date.
              We'll create an unforgettable evening together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/frisco#reserve"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Reserve at Frisco
              </Link>
              <Link
                href="/lewisville#reserve"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Reserve at Lewisville
              </Link>
            </div>
            <p className="text-white/70 text-sm">
              Call ahead to request your preferred seating:<br />
              Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
            </p>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Other Special Occasions
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/celebrations/anniversary"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Anniversaries
              </Link>
              <Link
                href="/celebrations/birthday"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Birthday Parties
              </Link>
              <Link
                href="/blog/date-night-restaurants-frisco"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Date Night Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
