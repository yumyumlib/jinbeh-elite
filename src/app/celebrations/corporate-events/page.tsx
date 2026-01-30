import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Events & Team Celebrations | Jinbeh Japanese Restaurant | Frisco & Lewisville",
  description:
    "Impress your team and clients at Jinbeh. Premier corporate dinner venue in Frisco & Lewisville with private dining, hibachi entertainment, and catering. Perfect for team building, client entertainment, holiday parties, and business celebrations.",
  keywords: [
    "corporate dinner venue frisco",
    "team building restaurant",
    "business celebration restaurant",
    "corporate party venue dfw",
    "client entertainment restaurant",
    "private dining frisco",
    "hibachi corporate event",
    "team building restaurant frisco",
    "corporate catering dfw",
    "business dinner venue lewisville",
    "team celebration restaurant",
    "corporate event space frisco",
  ],
  openGraph: {
    title: "Corporate Events & Team Celebrations | Jinbeh Japanese Restaurant",
    description: "Impress your team and clients at Jinbeh's premier corporate dining venue.",
    url: "https://jinbeh.com/celebrations/corporate-events",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/corporate-events",
  },
};

// FAQ Schema for Corporate Events
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Jinbeh offer private dining for corporate events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh offers private dining rooms perfect for corporate celebrations, client entertainment, and team building events. Our private spaces can accommodate groups of all sizes with dedicated service and hibachi entertainment.",
      },
    },
    {
      "@type": "Question",
      "name": "What types of corporate events can I host at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We host a variety of corporate events including team dinners, client entertainment, holiday parties, award celebrations, retirement dinners, and business meetings. Each event can be customized with our menu options and entertainment.",
      },
    },
    {
      "@type": "Question",
      "name": "Can Jinbeh accommodate large corporate groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We can accommodate groups of any size. Whether you need intimate dining for 8 or a large celebration for 100+, our private spaces and catering options can be tailored to your needs. Contact us for a customized quote.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer corporate catering at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive corporate catering services. Whether you need hibachi platters, sushi selections, or our full menu delivered to your location, we can create a package that impresses your team and clients.",
      },
    },
    {
      "@type": "Question",
      "name": "What makes Jinbeh ideal for client entertainment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh combines exceptional Japanese cuisine, professional service, and unique hibachi entertainment. Our stunning presentations, premium ingredients, and attentive staff create memorable experiences that impress clients and strengthen business relationships.",
      },
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book a corporate event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking 2-4 weeks in advance for optimal availability and customization options. For larger events (50+ guests), we suggest booking 4-8 weeks ahead to ensure the perfect setup for your celebration.",
      },
    },
  ],
};

const eventTypes = [
  {
    icon: "👥",
    title: "Team Dinners",
    description:
      "Build camaraderie with your team over an unforgettable hibachi experience. Perfect for team building and recognizing employee achievements.",
  },
  {
    icon: "🤝",
    title: "Client Entertainment",
    description:
      "Impress clients and partners with premium Japanese cuisine and theatrical hibachi entertainment that creates lasting impressions.",
  },
  {
    icon: "🎉",
    title: "Holiday Parties",
    description:
      "Celebrate the season with your company. Our private spaces and festive atmosphere make for memorable holiday gatherings.",
  },
  {
    icon: "🏆",
    title: "Award Celebrations",
    description:
      "Recognize top performers and achievements with an elegant private dinner that honors your team's success.",
  },
  {
    icon: "🎊",
    title: "Retirement Dinners",
    description:
      "Honor careers and milestone moments with an intimate celebration featuring our signature hibachi experience.",
  },
  {
    icon: "📊",
    title: "Business Meetings",
    description:
      "Our private dining spaces provide an elegant setting for corporate meetings combined with exceptional cuisine.",
  },
];

const whyJinbehFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Professional Excellence",
    description:
      "Our trained service staff ensures every detail is perfect, from greeting to dessert.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    title: "Impressive Presentations",
    description:
      "Hibachi chefs deliver theatrical performances that captivate and entertain your guests.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      </svg>
    ),
    title: "Convenient Locations",
    description:
      "Easy access from DFW with locations in Frisco and Lewisville. Perfect for north Dallas business districts.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Customizable Packages",
    description:
      "From hibachi dinners to sushi platters, we create menus tailored to your event and budget.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.14 3.14a6 6 0 00-8.488 8.488l3.14-3.14A6 6 0 0118.364 5.636m0 0L9.172 14.828m9.172-9.172l3.14 3.14c1.757-2.561 1.757-6.189 0-8.485-2.263-1.263-5.589-1.263-7.852 0l3.14 3.14m0 0l-3.14-3.14m3.14 3.14L9.172 3.172" />
      </svg>
    ),
    title: "Flexible Arrangements",
    description:
      "Choose between hibachi table seating, traditional tables, or mixed configurations based on your preferences.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Premium Quality",
    description:
      "Award-winning cuisine featuring premium proteins, fresh ingredients, and authentic Japanese techniques.",
  },
];

const privateDiningOptions = [
  {
    title: "Hibachi Private Room",
    capacity: "8-20 guests",
    features: [
      "Dedicated hibachi chef performance",
      "Table-side cooking entertainment",
      "Customizable menu selections",
      "Full bar service with premium beverages",
    ],
  },
  {
    title: "Semi-Private Dining Area",
    capacity: "20-40 guests",
    features: [
      "Distinct seating area for your group",
      "Dedicated server for personalized attention",
      "Access to full menu and bar",
      "Flexible seating arrangements",
    ],
  },
  {
    title: "Private Party Room",
    capacity: "40-100+ guests",
    features: [
      "Completely private space for your event",
      "Event coordination and planning support",
      "Customized catering and menu options",
      "Optional hibachi entertainment zones",
    ],
  },
];

export default function CorporateEventsPage() {
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://jinbeh.com/wp-content/uploads/2023/01/chef-flames.jpg"
          >
            <source
              src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Corporate Celebrations at Jinbeh
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Impress Your Team and Clients
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Premier corporate dining venue in DFW with private dining, hibachi entertainment,
              and the perfect setting for business celebrations that leave lasting impressions.
            </p>
            <Link
              href="#reserve"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Book Your Event
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Events We Specialize In
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                From intimate team dinners to grand celebrations, Jinbeh is your ideal corporate event venue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {eventTypes.map((event) => (
                <div
                  key={event.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="text-5xl mb-4">{event.icon}</div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {event.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Dining Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Private Dining Options
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Choose the perfect space for your corporate event. From intimate gatherings to large celebrations, we have options tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {privateDiningOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-gradient-to-br from-white to-warm-ivory rounded-2xl p-8 shadow-lg border border-soft-gold/20"
                >
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">
                    {option.title}
                  </h3>
                  <p className="text-soft-gold font-semibold mb-6">{option.capacity}</p>
                  <ul className="space-y-4">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-charcoal/80">
                        <svg className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/catering/corporate"
                className="inline-flex items-center gap-2 text-accent-red hover:text-accent-red/80 transition-colors font-semibold text-lg"
              >
                Explore Corporate Catering Options
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Jinbeh Section */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why Choose Jinbeh for Corporate Events?
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto text-lg">
                When it comes to impressing your team and clients, every detail matters. Jinbeh delivers on all fronts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyJinbehFeatures.map((feature) => (
                <div key={feature.title} className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/15 transition-all">
                  <div className="w-12 h-12 bg-accent-red/20 rounded-xl flex items-center justify-center text-accent-red mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-warm-ivory/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg"
                    alt="Hibachi chef entertaining corporate guests"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  The Perfect Corporate Celebration
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    Imagine your next corporate event: Your team or clients are settled into a private space,
                    anticipating an exceptional dinner. The hibachi chef arrives, and the performance begins.
                    Knives flash through the air, vegetables and proteins sizzle on the grill, and flames
                    dance across the iron surface.
                  </p>
                  <p>
                    This isn&apos;t just dinner—it&apos;s theater, craftsmanship, and culinary excellence combined.
                    Your guests are captivated, entertained, and impressed. Meanwhile, they&apos;re enjoying
                    premium Japanese cuisine prepared fresh before their eyes.
                  </p>
                  <p>
                    The result? A memorable experience that strengthens team bonds, impresses clients, and
                    reinforces your company&apos;s commitment to excellence. That&apos;s the Jinbeh corporate
                    event experience.
                  </p>
                  <p className="font-medium text-charcoal">
                    Best of all? Our event coordinators handle all the details. You just need to show up
                    and enjoy the celebration.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-warm-ivory rounded-xl border border-soft-gold/30">
                  <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <span className="text-xl">💼</span> Corporate Event Planning Tips:
                  </h3>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Book 4-8 weeks ahead for optimal availability</li>
                    <li>• Discuss your event goals with our coordinators</li>
                    <li>• Mix hibachi entertainment with traditional seating for variety</li>
                    <li>• Customize your menu to match your budget and preferences</li>
                    <li>• Take advantage of our premium beverage options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="py-20 bg-gradient-to-br from-charcoal to-deep-indigo text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Corporate Menu Highlights
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                Impress your guests with premium options tailored to your celebration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="font-heading text-lg font-semibold mb-2">Premium Hibachi</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Filet mignon, lobster, shrimp, and premium selections with table-side chef performance
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">🍣</div>
                <h3 className="font-heading text-lg font-semibold mb-2">Sushi & Rolls</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Fresh daily preparations including specialty rolls and traditional selections
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">🍶</div>
                <h3 className="font-heading text-lg font-semibold mb-2">Premium Bar</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Sake selections, cocktails, wine, and non-alcoholic options for every preference
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="font-heading text-lg font-semibold mb-2">Custom Packages</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Tailored catering and menu packages designed specifically for your event needs
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/frisco/menu"
                className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors font-semibold text-lg"
              >
                View Complete Menu Options
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="reserve" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Plan Your Corporate Event?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Our event coordinators are ready to create the perfect celebration for your team or clients.
              Contact us today to discuss your event details and secure your preferred date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/frisco#reserve"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg font-heading"
              >
                Book at Frisco
              </Link>
              <Link
                href="/lewisville#reserve"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl font-heading"
              >
                Book at Lewisville
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-white/90 mb-4">
                <strong>For large corporate events or catering inquiries:</strong>
              </p>
              <p className="text-lg text-soft-gold font-semibold">
                Frisco: <a href="tel:2146191200" className="hover:text-white transition-colors">(214) 619-1200</a>
              </p>
              <p className="text-lg text-soft-gold font-semibold">
                Lewisville: <a href="tel:2144882224" className="hover:text-white transition-colors">(214) 488-2224</a>
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                Explore More Celebration Options
              </h2>
              <p className="text-charcoal/70">
                Discover other ways to celebrate at Jinbeh
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Link
                href="/celebrations"
                className="px-6 py-3 bg-white rounded-full text-charcoal font-semibold hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                All Celebrations
              </Link>
              <Link
                href="/celebrations/birthday"
                className="px-6 py-3 bg-white rounded-full text-charcoal font-semibold hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Birthday Parties
              </Link>
              <Link
                href="/celebrations/anniversary"
                className="px-6 py-3 bg-white rounded-full text-charcoal font-semibold hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Anniversary Dinners
              </Link>
              <Link
                href="/catering/corporate"
                className="px-6 py-3 bg-white rounded-full text-charcoal font-semibold hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Corporate Catering
              </Link>
              <Link
                href="/frisco"
                className="px-6 py-3 bg-white rounded-full text-charcoal font-semibold hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Frisco Location
              </Link>
              <Link
                href="/lewisville"
                className="px-6 py-3 bg-white rounded-full text-charcoal font-semibold hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Lewisville Location
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
