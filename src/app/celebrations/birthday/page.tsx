import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import VipClubForm from "@/components/VipClubForm";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: { absolute: "Birthday Parties | Jinbeh Japanese Restaurant | Hibachi Birthday Celebration" },
  description:
    "Celebrate your birthday at Jinbeh! Hibachi entertainment, the famous onion volcano, and unforgettable moments for all ages. Book your birthday dinner.",
  keywords: [
    "birthday dinner frisco",
    "hibachi birthday party",
    "kids birthday party frisco",
    "birthday restaurants near me",
    "hibachi birthday celebration",
    "birthday dinner lewisville",
    "japanese birthday dinner",
    "birthday party restaurants frisco tx",
  ],
  openGraph: {
    title: "Birthday Parties | Jinbeh Japanese Restaurant",
    description: "Make it a birthday to remember with hibachi entertainment and the legendary onion volcano!",
    url: "https://jinbeh.com/celebrations/birthday",
    images: [
      {
        url: "https://jinbeh.com/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Celebrations Birthday",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/birthday",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh good for kids' birthday parties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh is fantastic for kids' birthday parties. Children love watching the hibachi chefs perform tricks, create the onion volcano, and catch food in their mouths. It's entertainment and dinner combined!",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need a reservation for a birthday dinner at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We strongly recommend reservations for birthday celebrations, especially for groups of 6 or more. This ensures we can seat your party together at a hibachi table for the best experience.",
      },
    },
    {
      "@type": "Question",
      "name": "What does Jinbeh do for birthdays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our hibachi chefs love celebrating with birthday guests! They'll give special attention to the birthday person during the show. Just let us know when you arrive that you're celebrating a birthday.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I bring a birthday cake to Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please contact your preferred location directly to discuss bringing outside food. We want to make sure your celebration goes smoothly and can advise on the best options.",
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
    { "@type": "ListItem", "position": 3, "name": "Birthday Parties" },
  ],
};

const birthdayFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: "Hibachi Entertainment",
    description: "Our chefs put on a show with flames, knife tricks, and the legendary onion volcano.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Group Seating",
    description: "Hibachi tables seat 7–8 guests (larger groups accommodated with advance notice by joining tables) together so everyone can join the celebration.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "All Ages Welcome",
    description: "From kids to grandparents, Jinbeh is fun for the whole family.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Special Touches",
    description: "Let us know it's a birthday and we'll make the celebration extra special.",
  },
];

export default function BirthdayPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Celebrations", href: "/celebrations" }, { label: "Birthday" }]} />
      </div>
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
              <li className="text-charcoal font-medium">Birthday Parties</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/about/chef-flames.jpg"
          >
            <source
              src="https://jinbeh.com/wp-content/uploads/2023/01/hibachi-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Celebrations at Jinbeh
            </p>
              <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">⭐ OpenTable&apos;s Top Kid-Friendly Restaurant</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Jinbeh is recognized by <strong>OpenTable as a Diners&apos; Choice Kid-Friendly restaurant</strong> in the Dallas suburbs. Combined with our D Magazine &ldquo;Best of Big D&rdquo; award, <strong>TripAdvisor Travelers&apos; Choice</strong> recognition, and OpenTable&apos;s <strong>#1 Hibachi in Lewisville</strong> ranking, you&apos;re celebrating at a restaurant critics and families both love.
                </p>
              </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Birthday Parties
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Make it a birthday to remember! Hibachi entertainment, delicious food,
              and the legendary onion volcano – all at your table.
            </p>
            <Link
              href="/reservations"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Book Your Birthday
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="mt-6 text-warm-ivory/70 text-sm font-medium">
              🎂 Thousands of birthdays celebrated since 1988
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Jinbeh for Birthdays?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                It&apos;s not just dinner – it&apos;s an experience the birthday person will never forget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {birthdayFeatures.map((feature) => (
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

        {/* The Three-Touch Birthday Protocol */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-8">
              The Jinbeh Birthday Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-warm-ivory rounded-xl">
                <span className="text-3xl mb-3 block">🙋</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Touch 1: The Host</h3>
                <p className="text-charcoal/70 text-sm">
                  When you arrive, our host identifies the birthday guest and personally says happy birthday. The celebration starts the moment you walk in.
                </p>
              </div>
              <div className="text-center p-6 bg-warm-ivory rounded-xl">
                <span className="text-3xl mb-3 block">🍽️</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Touch 2: Your Server</h3>
                <p className="text-charcoal/70 text-sm">
                  Your server is notified of the celebration and personally acknowledges the birthday person, making them feel special throughout the meal.
                </p>
              </div>
              <div className="text-center p-6 bg-warm-ivory rounded-xl">
                <span className="text-3xl mb-3 block">🔥</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Touch 3: The Grand Finale</h3>
                <p className="text-charcoal/70 text-sm">
                  At the end of dinner, our team brings out ice cream with tambourines and noisemakers for a celebration everyone remembers. Every child receives a hand-folded origami crane.
                </p>
              </div>
            </div>
            <p className="text-center text-charcoal/70 max-w-2xl mx-auto">
              Our Three-Touch Birthday Protocol means you hear &ldquo;happy birthday&rdquo; from three different team members. Not because it&apos;s required, but because at Jinbeh, your celebration is <em>everyone&apos;s</em> celebration.
            </p>

            <div className="max-w-3xl mx-auto mt-12 p-6 md:p-8 bg-warm-ivory/60 rounded-2xl border border-soft-gold/30">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Why Jinbeh Is the Top Choice for a Birthday Dinner in DFW</h3>
              <p className="text-charcoal/80 mb-3">
                Searching for the best birthday restaurant in Frisco, a hibachi birthday party in DFW, or a birthday dinner near you? Jinbeh has been DFW&apos;s favorite birthday restaurant since 1988. The hibachi show is built-in entertainment, the food is genuinely great, and the celebration energy is contagious. Kids leave laughing, adults leave smiling, and the birthday guest leaves feeling like the star of the night.
              </p>
              <p className="text-charcoal/80">
                Premium hibachi steak, fresh sushi, our famous yum yum sauce, and the kind of warm hospitality you don&apos;t find at chain restaurants. <Link href="/reservations" className="text-accent-red hover:underline">Reserve a hibachi table</Link> at our <Link href="/frisco" className="text-accent-red hover:underline">Frisco</Link> or <Link href="/lewisville" className="text-accent-red hover:underline">Lewisville</Link> location and let us make this birthday a memory.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/food/hibachi-grill.jpg"
                    alt="Hibachi chef preparing food"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  The Perfect Birthday Dinner
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    Picture this: Your birthday guest is seated at a hibachi table,
                    surrounded by friends and family. The chef arrives, and the show begins.
                    Knives flip through the air, vegetables dance on the grill, and flames
                    shoot up as the legendary onion volcano erupts.
                  </p>
                  <p>
                    Kids catch food in their mouths, adults enjoy premium sake or cocktails,
                    and everyone leaves with full bellies and happy memories. That&apos;s
                    the Jinbeh birthday experience.
                  </p>
                  <p className="font-medium text-charcoal">
                    Best of all? You don&apos;t have to plan a thing. Just make a reservation,
                    show up, and let us handle the rest.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-warm-ivory rounded-xl">
                  <h3 className="font-semibold text-charcoal mb-3">💡 Pro Tips for Birthday Parties:</h3>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Book at least 1 week in advance for groups of 6+</li>
                    <li>• Request seating together when you make your reservation</li>
                    <li>• Let us know it&apos;s a birthday when you arrive</li>
                    <li>• Hibachi tables seat 7–8 guests (larger groups accommodated with advance notice by joining tables) – perfect for parties!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Birthday Dinner Options */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Birthday Dinner Options
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                From sizzling hibachi to fresh sushi – there&apos;s something for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Hibachi Dinners</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Filet mignon, chicken, shrimp, lobster, or combinations – cooked tableside with a show. Includes soup, salad, rice &amp; veggies.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🍣</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Sushi & Rolls</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Fresh sushi, creative specialty rolls, and traditional favorites – perfect for sharing with the group.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🧒</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Kids Menu</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Kid-friendly hibachi options and favorites for the younger birthday guests. Chef show included!
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors font-medium"
              >
                View Full Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Reserve Section */}
        <section id="reserve" className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Book Your Birthday Celebration
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Make a reservation and let us know you&apos;re celebrating a birthday.
              We&apos;ll take care of the rest!
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
              For large parties (10+), call us directly:<br />
              Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
            </p>
          </div>
        </section>

        {/* VIP Birthday Club Signup */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <span className="inline-block bg-soft-gold/20 text-soft-gold-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                ⭐ Birthday Perks
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Join the Jinbeh VIP Birthday Club
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Sign up before your birthday and we&apos;ll send special perks your way,
                often a $25 gift card to use during your birthday month, plus a free
                birthday dessert any time you dine with us. It&apos;s our way of making
                sure your celebration starts long before you walk in.
              </p>
            </div>
            <VipClubForm />
          </div>
        </section>

        {/* Related Blog Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">
              Helpful Birthday Planning Reads
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/hibachi-birthday-party-ideas" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Planning Guide</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  Hibachi Birthday Party Ideas That Wow Every Guest
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Tips for themes, group seating, and making your hibachi birthday unforgettable.</p>
              </Link>
              <Link href="/blog/free-birthday-food-deals" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">Birthday Deals</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  Free Birthday Food Deals in DFW
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">Where to score free birthday food across Dallas-Fort Worth, including Jinbeh specials.</p>
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
              <Link
                href="/celebrations/anniversary"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium"
              >
                Anniversary Dinners
              </Link>
              <Link
                href="/celebrations/corporate-events"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium"
              >
                Corporate Events
              </Link>
              <Link
                href="/celebrations/graduation"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium"
              >
                Graduation Dinners
              </Link>
              <Link
                href="/catering"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md font-medium"
              >
                Catering Services
              </Link>
            </div>
          </div>

          <p className="mt-4 text-sm">
            <a href="/blog/adult-birthday-party-ideas" className="text-accent-red hover:underline">
              Related: Unique Adult Birthday Party Ideas & Themes →
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
