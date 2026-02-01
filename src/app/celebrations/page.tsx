import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Celebrations & Events | Jinbeh Japanese Restaurant Frisco & Lewisville TX",
  description:
    "Celebrate birthdays, anniversaries, holidays & special occasions at Jinbeh! Hibachi entertainment, fresh sushi, private dining. Valentine's Day, Mother's Day, Thanksgiving & more in Frisco & Lewisville TX.",
  keywords: [
    "birthday dinner frisco",
    "anniversary restaurant frisco tx",
    "celebration restaurant near me",
    "hibachi birthday party",
    "valentines day dinner frisco",
    "mothers day restaurant lewisville",
    "thanksgiving dinner frisco",
    "christmas dinner lewisville",
    "lunar new year restaurant dfw",
    "private dining japanese",
    "special occasion restaurant dfw",
  ],
  openGraph: {
    title: "Celebrations & Events | Jinbeh Japanese Restaurant",
    description: "Make every celebration unforgettable with hibachi entertainment and fresh sushi. Frisco & Lewisville TX.",
    url: "https://jinbeh.com/celebrations",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh good for birthday celebrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Jinbeh is perfect for birthday celebrations. Our hibachi chefs create entertainment at your table, and we can accommodate groups of all sizes. The interactive dining experience makes birthdays memorable for all ages.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh open on holidays like Thanksgiving and Christmas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jinbeh is open on most major holidays including Thanksgiving and Christmas Eve. Call ahead to confirm hours and make reservations as holiday tables fill up quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Can Jinbeh accommodate large groups for celebrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both our Frisco and Lewisville locations can accommodate large groups and private parties. Our hibachi tables seat 8-10 people for a shared experience. For groups of 10+ or private events, call us directly.",
      },
    },
    {
      "@type": "Question",
      name: "What holidays does Jinbeh celebrate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh welcomes guests celebrating Valentine's Day, Mother's Day, Father's Day, Thanksgiving, Christmas, Lunar New Year, Diwali, Mid-Autumn Festival, and all special occasions. Our hibachi entertainment makes any celebration memorable.",
      },
    },
  ],
};

// Personal Celebrations
const personalCelebrations = [
  {
    title: "Birthday Parties",
    description: "Make it a birthday to remember with hibachi entertainment and the legendary onion volcano!",
    image: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
    href: "/celebrations/birthday",
    keywords: "hibachi birthday party, birthday dinner frisco",
  },
  {
    title: "Anniversary Dinners",
    description: "Celebrate your love with fresh sushi, premium sake, and intimate dining at our sushi bar.",
    image: "/images/food/RoyalFlameRoll.jpg",
    href: "/celebrations/anniversary",
    keywords: "anniversary restaurant frisco, romantic dinner lewisville",
  },
  {
    title: "Date Night",
    description: "From sushi bar romance to hibachi excitement — the perfect date night awaits.",
    image: "/images/food/SamaraiRollCloseup.jpg",
    href: "/celebrations/date-night",
    keywords: "date night restaurants frisco, romantic dinner",
  },
  {
    title: "Graduation",
    description: "Honor academic achievements with a celebration the whole family will enjoy.",
    image: "/images/food/HibachiFriedRiceVegetables.jpg",
    href: "/celebrations/graduation",
    keywords: "graduation dinner frisco, celebration restaurant",
  },
];

// Holiday Celebrations
const holidayCelebrations = [
  {
    title: "Valentine's Day",
    description: "Romance meets flavor — celebrate love with hibachi fire or intimate sushi dining.",
    image: "/images/food/SamaraiRollCloseup.jpg",
    href: "/celebrations/valentines-day",
    month: "February",
    color: "bg-pink-50 border-pink-200",
  },
  {
    title: "Mother's Day",
    description: "Give Mom a day off! Let us cook while she relaxes and enjoys.",
    image: "/images/food/JinbehAhiTower.jpg",
    href: "/celebrations/mothers-day",
    month: "May",
    color: "bg-purple-50 border-purple-200",
  },
  {
    title: "Father's Day",
    description: "Treat Dad to premium steak, hibachi entertainment, and Japanese beer.",
    image: "/images/food/HibachiSteakMealCloseup.jpg",
    href: "/celebrations/fathers-day",
    month: "June",
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "Thanksgiving",
    description: "Skip the cooking! Gather the family for stress-free hibachi dining.",
    image: "/images/food/HibachiFriedRiceVegetables.jpg",
    href: "/celebrations/thanksgiving",
    month: "November",
    color: "bg-orange-50 border-orange-200",
  },
  {
    title: "Christmas",
    description: "Make holiday magic with sizzling hibachi flames and family memories.",
    image: "/images/food/HappyNewYear.jpg",
    href: "/celebrations/christmas",
    month: "December",
    color: "bg-red-50 border-red-200",
  },
  {
    title: "Lunar New Year",
    description: "Ring in the Year of the Snake with lucky dishes and family gathering.",
    image: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg",
    href: "/celebrations/lunar-new-year",
    month: "January/February",
    color: "bg-red-50 border-red-200",
  },
];

// Cultural & Specialty Events
const culturalCelebrations = [
  {
    title: "Asian Restaurant Month",
    description: "Celebrate AAPI Heritage Month in May — support 37 years of family tradition.",
    href: "/celebrations/asian-restaurant-month",
    month: "May",
  },
  {
    title: "Diwali",
    description: "Festival of Lights meets hibachi flames — perfect for family gatherings.",
    href: "/celebrations/diwali",
    month: "October/November",
  },
  {
    title: "Mid-Autumn Festival",
    description: "Gather under the harvest moon for a family feast.",
    href: "/celebrations/mid-autumn-festival",
    month: "September/October",
  },
  {
    title: "National Fried Rice Day",
    description: "September 20th — celebrate with the best hibachi fried rice in DFW!",
    href: "/celebrations/national-fried-rice-day",
    month: "September 20",
  },
];

// Group Events
const groupEvents = [
  {
    title: "Corporate Events",
    description: "Team dinners, client entertainment, and company celebrations.",
    href: "/celebrations/corporate-events",
    icon: "🏢",
  },
  {
    title: "Baby Shower",
    description: "Celebrate new arrivals with hibachi fun for the whole family.",
    href: "/celebrations/baby-shower",
    icon: "👶",
  },
  {
    title: "Rehearsal Dinner",
    description: "Celebrate the night before with close family and friends.",
    href: "/celebrations/rehearsal-dinner",
    icon: "💒",
  },
  {
    title: "Holiday Parties",
    description: "Host your company holiday party with hibachi entertainment.",
    href: "/celebrations/holiday-parties",
    icon: "🎉",
  },
  {
    title: "Family Gatherings",
    description: "Reunions, family milestones, and multi-generational celebrations.",
    href: "/celebrations/family-gatherings",
    icon: "👨‍👩‍👧‍👦",
  },
];

export default function CelebrationsPage() {
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
            poster="/images/photoshoot/hibachi-plate-shrimp.jpg"
            aria-label="Hibachi chef creating onion volcano flame at Jinbeh"
          >
            <source
              src="/videos/lewisville/hibachi-fire-02.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Birthdays • Anniversaries • Holidays • Events
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Celebrate at Jinbeh
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Every milestone deserves dinner and a show. From{" "}
              <Link href="/celebrations/birthday" className="underline hover:text-soft-gold">birthday parties</Link> to{" "}
              <Link href="/celebrations/thanksgiving" className="underline hover:text-soft-gold">Thanksgiving feasts</Link>,
              we make celebrations unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco#reserve"
                className="btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Reserve Frisco
              </Link>
              <Link
                href="/lewisville#reserve"
                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Reserve Lewisville
              </Link>
            </div>
          </div>
        </section>

        {/* Holiday Celebrations Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Holiday Celebrations
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Skip the cooking and celebrate holidays at Jinbeh. Our{" "}
                <Link href="/frisco/hibachi" className="text-accent-red hover:underline">hibachi chefs</Link> and{" "}
                <Link href="/menu" className="text-accent-red hover:underline">fresh sushi</Link> make every
                holiday special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {holidayCelebrations.map((holiday) => (
                <Link
                  key={holiday.title}
                  href={holiday.href}
                  className={`group p-6 rounded-2xl border-2 ${holiday.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                    {holiday.month}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-charcoal mt-1 mb-2 group-hover:text-accent-red transition-colors">
                    {holiday.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">{holiday.description}</p>
                  <span className="inline-flex items-center gap-1 text-accent-red font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Celebrations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Personal Celebrations
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Life&apos;s special moments deserve special dining. Whether it&apos;s a{" "}
                <Link href="/celebrations/birthday" className="text-accent-red hover:underline">hibachi birthday</Link>,{" "}
                <Link href="/celebrations/anniversary" className="text-accent-red hover:underline">anniversary dinner</Link>, or{" "}
                <Link href="/celebrations/date-night" className="text-accent-red hover:underline">romantic date night</Link> —
                we&apos;ve got you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {personalCelebrations.map((celebration) => (
                <Link
                  key={celebration.title}
                  href={celebration.href}
                  className="group bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={celebration.image}
                      alt={celebration.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 font-heading text-xl font-bold text-white">
                      {celebration.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-charcoal/70 text-sm mb-3">{celebration.description}</p>
                    <span className="inline-flex items-center gap-1 text-accent-red font-medium text-sm group-hover:gap-2 transition-all">
                      Plan Your Celebration →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural & Specialty Events */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Cultural & Specialty Events
              </h2>
              <p className="text-lg text-warm-ivory/70 max-w-2xl mx-auto">
                Celebrate cultural traditions and food holidays with authentic{" "}
                <Link href="/menu" className="text-soft-gold hover:underline">Japanese cuisine</Link>. As an{" "}
                <Link href="/celebrations/asian-restaurant-month" className="text-soft-gold hover:underline">Asian-owned restaurant</Link>{" "}
                since 1988, we honor traditions from across cultures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {culturalCelebrations.map((event) => (
                <Link
                  key={event.title}
                  href={event.href}
                  className="group bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <span className="text-xs font-medium text-soft-gold uppercase tracking-wider">
                    {event.month}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white mt-1 mb-2 group-hover:text-soft-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-warm-ivory/70 text-sm">{event.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Group Events */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Group & Corporate Events
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Need <Link href="/private-dining" className="text-accent-red hover:underline">private dining</Link> or{" "}
                <Link href="/blog/hibachi-catering-dfw" className="text-accent-red hover:underline">catering</Link> for
                your group? Our hibachi tables seat 8-10, perfect for shared experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {groupEvents.map((event) => (
                <Link
                  key={event.title}
                  href={event.href}
                  className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <span className="text-3xl mb-3 block">{event.icon}</span>
                  <h3 className="font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-charcoal/60 text-xs">{event.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Celebrate at Jinbeh */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  Why Celebrate at Jinbeh?
                </h2>
                <p className="text-lg text-charcoal/70 mb-6">
                  Since 1988, families have trusted Jinbeh for life&apos;s biggest moments.
                  Our <Link href="/frisco/hibachi" className="text-accent-red hover:underline">teppanyaki chefs</Link> bring
                  entertainment to every table, and our{" "}
                  <Link href="/frisco/sushi-rolls" className="text-accent-red hover:underline">fresh sushi</Link> satisfies
                  the most discerning palates.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      🔥
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Live Hibachi Entertainment</h3>
                      <p className="text-charcoal/70 text-sm">
                        Flames, tricks, and the famous{" "}
                        <Link href="/celebrations/national-fried-rice-day" className="text-accent-red hover:underline">onion volcano</Link>.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-deep-indigo/10 rounded-full flex items-center justify-center flex-shrink-0">
                      👨‍👩‍👧‍👦
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Group-Friendly Seating</h3>
                      <p className="text-charcoal/70 text-sm">
                        Communal tables seat 8-10 for shared celebrations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-soft-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      🍣
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Fresh Sushi Daily</h3>
                      <p className="text-charcoal/70 text-sm">
                        From <Link href="/frisco/sashimi" className="text-accent-red hover:underline">sashimi</Link> to{" "}
                        <Link href="/blog/what-is-omakase" className="text-accent-red hover:underline">omakase</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/menu" className="btn bg-charcoal text-white hover:bg-charcoal/90 px-6 py-3 rounded-xl font-semibold">
                    View Menu
                  </Link>
                  <Link href="/private-dining" className="btn bg-warm-ivory text-charcoal hover:bg-warm-ivory/80 px-6 py-3 rounded-xl font-semibold">
                    Private Dining
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/celebrations/jinbeh_group.jpg"
                    alt="Hibachi chef creating onion volcano at Jinbeh celebration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full rounded-2xl bg-accent-red/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Quick Links */}
        <section className="py-16 bg-deep-indigo/5">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal text-center mb-8">
              Two Convenient Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/frisco"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent-red/20 transition-colors">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors">
                    Jinbeh Frisco
                  </h3>
                  <p className="text-charcoal/60 text-sm">Near Stonebriar Centre</p>
                  <p className="text-accent-red text-sm font-medium">(214) 619-1200</p>
                </div>
              </Link>
              <Link
                href="/lewisville"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-deep-indigo/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-deep-indigo/20 transition-colors">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-deep-indigo transition-colors">
                    Jinbeh Lewisville
                  </h3>
                  <p className="text-charcoal/60 text-sm">Near Vista Ridge Mall</p>
                  <p className="text-deep-indigo text-sm font-medium">(214) 488-2224</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Reserve CTA */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Celebrate?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Reserve your table for any occasion. From{" "}
              <Link href="/celebrations/birthday" className="underline hover:text-soft-gold">birthdays</Link> to{" "}
              <Link href="/celebrations/christmas" className="underline hover:text-soft-gold">Christmas</Link>,
              we&apos;ll make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2146191200"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> Frisco: (214) 619-1200
              </a>
              <a
                href="tel:2144882224"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> Lewisville: (214) 488-2224
              </a>
            </div>
            <p className="mt-8 text-white/70 text-sm">
              <Link href="/gift-cards" className="underline hover:text-soft-gold">Gift cards</Link> available for the perfect celebration gift!
            </p>
          </div>
        </section>

        {/* Related Content Links - SEO Internal Linking */}
        {/* Related Blog Posts */}
        <RelatedBlogPosts
          categories={["celebrations"]}
          limit={3}
          title="Celebration Planning Guides"
          subtitle="Expert tips and ideas for planning the perfect celebration at Jinbeh."
          bgColor="white"
        />

        <section className="py-12 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h3 className="font-heading font-bold text-charcoal mb-6 text-center">
              Explore More
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto text-sm">
              <Link href="/menu" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Full Menu
              </Link>
              <Link href="/frisco/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Hibachi Menu
              </Link>
              <Link href="/frisco/sushi-rolls" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Sushi Rolls
              </Link>
              <Link href="/happy-hour" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Happy Hour
              </Link>
              <Link href="/lunch-specials" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Lunch Specials
              </Link>
              <Link href="/private-dining" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Private Dining
              </Link>
              <Link href="/blog/hibachi-birthday-party-ideas" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Birthday Party Ideas
              </Link>
              <Link href="/blog/romantic-anniversary-dinners" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Anniversary Ideas
              </Link>
              <Link href="/blog/thanksgiving-dining-guide" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Thanksgiving Guide
              </Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Near Plano
              </Link>
              <Link href="/nearby/mckinney" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Near McKinney
              </Link>
              <Link href="/nearby/flower-mound" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">
                Near Flower Mound
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
