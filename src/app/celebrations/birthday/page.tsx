import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Birthday Parties | Jinbeh Japanese Restaurant | Hibachi Birthday Celebration",
  description:
    "Celebrate your birthday at Jinbeh! Hibachi entertainment, the famous onion volcano, and unforgettable moments for all ages. Book your birthday dinner in Frisco or Lewisville TX.",
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
    description: "Hibachi tables seat 8-10 guests together so everyone can join the celebration.",
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
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Birthday Parties
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Make it a birthday to remember! Hibachi entertainment, delicious food,
              and the legendary onion volcano – all at your table.
            </p>
            <Link
              href="#reserve"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Book Your Birthday
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
                    <li>• Hibachi tables seat 8-10 people – perfect for parties!</li>
                  </ul>
                </div>
              </div>
            </div>
        </section>

        {/* Menu Preview */}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Hibachi Dinners</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Filet mignon, chicken, shrimp, lobster, or combinations – cooked tableside with a show.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🍣</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Sushi & Rolls</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Fresh sushi, creative specialty rolls, and traditional favorites for sushi lovers.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🧒</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Kids Menu</h3>
                <p className="text-warm-ivory/70 text-sm">
                  Kid-friendly hibachi options and favorites for the younger birthday guests.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/frisco/menu"
                className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors font-medium"
              >
                View Full Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
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
              For large parties (10+), call us directly:<br />
              Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
            </p>
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
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Anniversary Dinners
              </Link>
              <Link
                href="/celebrations/groups"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Group Events
              </Link>
              <Link
                href="/catering"
                className="px-6 py-3 bg-white rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Catering Services
              </Link>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
