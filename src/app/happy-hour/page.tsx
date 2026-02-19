import type { Metadata } from "next";
import { HeroSection, RevealSection, AnimatedGradientText } from "@/components/MagicUI";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Happy Hour | Jinbeh Japanese Restaurant | Frisco & Lewisville TX",
  description:
    "Join us for Happy Hour at Jinbeh! Enjoy special prices on sake, Japanese beer, cocktails, and appetizers at our Frisco and Lewisville locations. The perfect way to start your evening.",
  keywords: [
    "happy hour frisco",
    "happy hour lewisville",
    "happy hour near me",
    "sake happy hour",
    "japanese restaurant happy hour",
    "best happy hour dfw",
    "happy hour specials frisco tx",
    "sushi happy hour near me",
  ],
  openGraph: {
    title: "Happy Hour | Jinbeh Japanese Restaurant",
    description: "Great drinks. Great company. Great prices. Join us for Happy Hour specials.",
    url: "https://jinbeh.com/happy-hour",
  },
  alternates: {
    canonical: "https://jinbeh.com/happy-hour",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What time is Happy Hour at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Happy Hour at Jinbeh is typically Monday through Friday, with special prices on drinks and select appetizers. Check with your local location for specific times.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh have a full bar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Both Jinbeh locations feature a full bar with premium sake (hot and cold), Japanese beer like Sapporo and Asahi, creative cocktails, and a curated wine selection.",
      },
    },
    {
      "@type": "Question",
      "name": "What drinks are on special during Happy Hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Happy Hour specials include discounted sake by the glass, domestic and Japanese beers, well drinks, and select appetizers. Specials vary, so ask your server for current offerings.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I sit at the bar without a reservation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Bar seating is available on a first-come, first-served basis. It's a great spot for Happy Hour drinks and watching our sushi chefs at work.",
      },
    },
  ],
};

const drinkCategories = [
  {
    name: "Premium Sake",
    icon: "🍶",
    description: "Hot or cold, by the glass or carafe",
    items: ["Junmai Daiginjo", "Nigori (Unfiltered)", "House Hot Sake", "Sake Flights"],
  },
  {
    name: "Japanese Beer",
    icon: "🍺",
    description: "Crisp and refreshing imports",
    items: ["Sapporo", "Asahi Super Dry", "Kirin Ichiban", "Orion"],
  },
  {
    name: "Signature Cocktails",
    icon: "🍸",
    description: "Japanese-inspired creations",
    items: ["Tokyo Mule", "Lychee Martini", "Shochu Highball", "Japanese Old Fashioned"],
  },
  {
    name: "Appetizers",
    icon: "🥟",
    description: "Perfect pairings for drinks",
    items: ["Edamame", "Gyoza", "Tempura", "Sashimi Appetizer"],
  },
];

export default function HappyHourPage() {
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
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/interior/FriscoLocation_Bar_Front.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Unwind After Work
            </p>
            <RevealSection delay={100}>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <AnimatedGradientText className="text-4xl md:text-5xl font-heading font-bold">Happy Hour</AnimatedGradientText>
              </h1>
            </RevealSection>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Searching for the best happy hour DFW has to offer? Join us at the <Link href="/bar" className="text-soft-gold hover:underline">bar</Link> for <Link href="/blog/japanese-cocktails" className="text-soft-gold hover:underline">Japanese-inspired cocktails</Link>, sake happy hour specials, and more.
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-8 py-4">
              <p className="text-lg font-medium">
                Monday – Friday • Check with location for times
              </p>
            </div>
          </div>
        </section>

        {/* Drink Categories */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Happy Hour Favorites
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Our Japanese restaurant happy hour features everything from <Link href="/blog/types-of-sake-explained" className="text-accent-red hover:underline font-medium">premium sake</Link> to signature cocktails — the perfect sushi happy hour near me. New to sake? Read our <Link href="/blog/sake-pairing-guide" className="text-accent-red hover:underline font-medium">sake pairing guide</Link> to find your perfect match.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {drinkCategories.map((category) => (
                <div
                  key={category.name}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-6 text-center">{category.icon}</div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 text-center">
                    {category.name}
                  </h3>
                  <p className="text-sm text-charcoal/80 text-center mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-charcoal/80 text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Visit Our Bars
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Both locations feature full bars with premium sake, Japanese beer, and craft cocktails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Frisco */}
              <div className="bg-warm-ivory rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/images/frisco/FriscoLocation_Bar_Front.jpg"
                    alt="Jinbeh Frisco bar interior with warm wooden decor and pendant lighting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-charcoal mb-2">
                    Frisco Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Happy hour Frisco — near Stonebriar Centre, perfect for after-work drinks, happy hour specials Frisco TX, or pre-dinner cocktails.
                  </p>
                  <div className="bg-white rounded-xl p-4 mb-6">
                    <p className="font-medium text-cedar-brown">Address</p>
                    <p className="text-charcoal/80 text-sm">
                      2693 Preston Rd Suite 1040<br />
                      Frisco, TX 75034
                    </p>
                  </div>
                  <Link
                    href="/frisco"
                    className="btn btn-primary w-full text-center"
                  >
                    Visit Frisco
                  </Link>
                </div>
              </div>

              {/* Lewisville */}
              <div className="bg-warm-ivory rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/images/interior/bar.jpg"
                    alt="Jinbeh Lewisville bar with premium spirits and Japanese-inspired decor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-charcoal mb-2">
                    Lewisville Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    Happy hour Lewisville — easy access from I-35E, stop by for a relaxing happy hour near me on your way home.
                  </p>
                  <div className="bg-white rounded-xl p-4 mb-6">
                    <p className="font-medium text-cedar-brown">Address</p>
                    <p className="text-charcoal/80 text-sm">
                      2440 S Stemmons Fwy #A<br />
                      Lewisville, TX 75067
                    </p>
                  </div>
                  <Link
                    href="/lewisville"
                    className="btn btn-primary w-full text-center"
                  >
                    Visit Lewisville
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bar Atmosphere */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  The Perfect Atmosphere
                </h2>
                <p className="text-warm-ivory/80 mb-6 leading-relaxed">
                  Whether you&apos;re unwinding after a long day, catching up with friends,
                  or enjoying a <Link href="/blog/date-night-restaurants-frisco" className="text-soft-gold hover:underline">date night</Link>, our bar offers the perfect ambiance.
                  Watch our skilled sushi chefs at work while sipping on premium sake
                  or a creative cocktail. Explore our full <Link href="/blog/japanese-beverages-guide" className="text-soft-gold hover:underline">Japanese drinks guide</Link> to learn more about what we serve.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full bar with premium sake selection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bar seating with sushi bar view</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No reservation needed for bar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full menu available at the bar</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/frisco/FriscoLocation_Bar_Front.jpg"
                    alt="Jinbeh bar interior with warm Japanese ambiance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Articles */}
        <RelatedBlogPosts
          slugs={["best-happy-hour-frisco-tx", "sake-sushi-menu-pairings", "japanese-cocktails"]}
          title="Happy Hour Reads"
          subtitle="Discover more about our drinks, cocktails, and the best after-work spots in DFW."
          layout="grid"
          bgColor="ivory"
        />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-deep-indigo to-accent-red text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              See You at the Bar!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              No reservation needed – just stop by and grab a seat.
              Cheers to great drinks and good company! Check out our current <Link href="/specials" className="text-soft-gold hover:underline">specials</Link> and browse the full <Link href="/menu" className="text-soft-gold hover:underline">menu</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco"
                className="btn bg-white text-deep-indigo hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Frisco Location
              </Link>
              <Link
                href="/lewisville"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
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
