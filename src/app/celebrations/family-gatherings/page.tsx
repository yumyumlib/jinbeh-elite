import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Restaurant Frisco | Family Dinner & Gathering Venue | Jinbeh",
  description:
    "Bring your family together at Jinbeh! Family-friendly hibachi dining, kids menu, high chairs available, and group seating perfect for family reunions, holiday dinners, and celebrations in Frisco & Lewisville TX.",
  keywords: [
    "family restaurant frisco",
    "family dinner restaurant",
    "family gathering venue",
    "family celebration restaurant dfw",
    "kids birthday party restaurant",
    "family hibachi dining",
    "multi-generational restaurant",
    "family friendly japanese restaurant",
    "group seating frisco",
    "kids menu restaurant",
  ],
  openGraph: {
    title: "Family Gatherings | Jinbeh Japanese Restaurant | Frisco",
    description: "Bring Your Family Together at Jinbeh – Perfect for reunions, holidays, and celebrations!",
    url: "https://jinbeh.com/celebrations/family-gatherings",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/family-gatherings",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Jinbeh have a kids menu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer a full kids menu with options including hibachi chicken, shrimp, and vegetable combinations. Kids love watching the chefs cook right in front of them, making it both delicious and entertaining.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you have high chairs available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, high chairs are available at both our Frisco and Lewisville locations. Please mention when making your reservation if you need one, and we'll have it ready for you.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we get group seating for our family reunion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our hibachi tables seat 8-10 people, making them perfect for family gatherings. We can arrange multiple tables together for larger groups. Call ahead to let us know your party size.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Jinbeh good for multi-generational family dinners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh is perfect for all ages – from toddlers to grandparents. Our hibachi entertainment keeps kids engaged, while adults enjoy premium quality Japanese cuisine and entertainment.",
      },
    },
    {
      "@type": "Question",
      "name": "Can we accommodate dietary restrictions for family groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We can accommodate various dietary needs including vegetarian, gluten-free, and allergy-friendly options. Just let us know when you make your reservation.",
      },
    },
    {
      "@type": "Question",
      "name": "What makes Jinbeh family-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh is family-friendly because we offer communal seating where families eat together, entertaining hibachi chefs that captivate kids, a dedicated kids menu, high chairs and boosters available, and a warm welcome for all ages.",
      },
    },
  ],
};

const familyOccasions = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Reunions",
    description: "Gather everyone together at hibachi tables where you can eat, laugh, and create memories. Perfect for large family groups!",
  },
  {
    icon: "🎄",
    title: "Holiday Dinners",
    description: "Make your holiday celebration special with festive hibachi entertainment and family-style dining for generations.",
  },
  {
    icon: "🧓",
    title: "Multi-Generational Celebrations",
    description: "From grandparents to grandchildren – Jinbeh entertains and delights every generation at the same table.",
  },
  {
    icon: "🎉",
    title: "Kids' Parties",
    description: "Birthday parties, celebrations, and special occasions with a dedicated kids menu and our famous onion volcano show!",
  },
];

const familyFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Communal Tables",
    description: "Hibachi tables seat 8-10 guests together – your whole family dines as one, shares the experience, and celebrates together.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3.545a1.5 1.5 0 01-1.5-1.5V5.455a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v12.765a1.5 1.5 0 01-1.5 1.5zm0 0h6a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1.5-1.5h-6.545" />
      </svg>
    ),
    title: "Kids Menu",
    description: "Delicious, kid-approved hibachi options including chicken, shrimp, and vegetable combinations that keep kids happy and full.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "High Chairs & Boosters",
    description: "We provide high chairs and booster seats for the littlest family members. Just mention it when you make your reservation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: "Entertainment for All Ages",
    description: "Our hibachi chefs perform tricks, create the legendary onion volcano, and keep kids engaged while adults enjoy premium cuisine.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Flexible Menus",
    description: "Vegetarian, gluten-free, and allergy-friendly options available. We work with families to ensure everyone has something delicious.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Warm Welcome",
    description: "Our team loves families! We're used to kids' excitement, spilled drinks, and happy chaos – we celebrate it with you.",
  },
];

const whyFamiliesLove = [
  {
    number: "1",
    title: "No Separate Kids' Tables",
    description:
      "Everyone eats together at hibachi tables. Parents don't have to watch kids from across the restaurant – you're all sharing the experience, the show, and the meal together.",
  },
  {
    number: "2",
    title: "Built-In Entertainment",
    description:
      "The hibachi chefs are the entertainment! Kids stay engaged watching the cooking show, flames, knife tricks, and the famous onion volcano. It's dinner and a show all in one.",
  },
  {
    number: "3",
    title: "Quality Matters",
    description:
      "We don't compromise on quality just because kids are present. Fresh ingredients, skilled chefs, and premium cuisine – the whole family eats well.",
  },
  {
    number: "4",
    title: "Group Accommodations",
    description:
      "Whether it's 4 grandkids or 40 extended family members, we can seat you together at one or multiple hibachi tables. Call ahead for large groups.",
  },
  {
    number: "5",
    title: "Easy Ordering",
    description:
      "Hibachi tables make ordering simple – everyone picks their protein and sides, our chefs prepare it fresh at your table. No waiting for multiple separate meals.",
  },
  {
    number: "6",
    title: "Memories Made",
    description:
      "Kids remember the excitement, the chef's personality, and watching their food cook. Families leave with stories and happy memories, not just full bellies.",
  },
];

export default function FamilyGatheringsPage() {
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
            poster="https://jinbeh.com/wp-content/uploads/2023/01/family-dining.jpg"
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
              Bring Your Family Together
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Family reunions, holiday dinners, and multi-generational celebrations – all with hibachi
              entertainment and delicious food everyone loves.
            </p>
            <Link
              href="#reserve"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Book Your Family Gathering
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Family Occasions */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Perfect for Every Family Occasion
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Whether it's a casual family dinner or a milestone celebration, Jinbeh creates
                the perfect setting for your family to gather and celebrate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {familyOccasions.map((occasion) => (
                <div
                  key={occasion.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="text-5xl mb-4">{occasion.icon}</div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {occasion.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {occasion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family-Friendly Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                What Makes Us Family-Friendly?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                We've designed every aspect of our restaurant with families in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {familyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-warm-ivory rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 mb-6 bg-accent-red/10 rounded-full flex items-center justify-center text-accent-red">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Families Love Jinbeh */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why Families Love Jinbeh
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                Thousands of families have celebrated with us. Here's what makes us special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyFamiliesLove.map((reason) => (
                <div
                  key={reason.number}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-soft-gold/50 transition-colors"
                >
                  <div className="text-4xl font-heading font-bold text-soft-gold mb-3">
                    {reason.number}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-warm-ivory/80 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Something for Every Family Member
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                From kids' favorites to grandma's preferences – everyone finds something delicious.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-5xl mb-4">🧒</div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Kids Menu</h3>
                <p className="text-charcoal/70 text-sm">
                  Hibachi chicken, shrimp, vegetables – cooked fresh at the table and fun to watch!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-5xl mb-4">🥩</div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Hibachi Dinners</h3>
                <p className="text-charcoal/70 text-sm">
                  Filet mignon, chicken, shrimp, lobster – premium quality for every taste.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-5xl mb-4">🍣</div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Sushi & Rolls</h3>
                <p className="text-charcoal/70 text-sm">
                  Fresh sushi, creative rolls, and traditional favorites for sushi lovers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-5xl mb-4">🥬</div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">Vegetarian</h3>
                <p className="text-charcoal/70 text-sm">
                  Grilled vegetables, tofu options, and fresh rolls for plant-based family members.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/frisco/menu"
                className="inline-flex items-center gap-2 text-accent-red hover:text-accent-red/80 transition-colors font-medium text-lg"
              >
                View Full Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* The Family Experience */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://jinbeh.com/wp-content/uploads/2023/01/family-dining.jpg"
                    alt="Happy family dining at hibachi table at Jinbeh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  The Perfect Family Gathering Spot
                </h2>
                <div className="space-y-6 text-charcoal/80 leading-relaxed">
                  <p>
                    Picture your family gathered around a hibachi table. Grandparents, parents,
                    kids, and toddlers – everyone seated together. The chef arrives, the show begins,
                    and suddenly, watching someone cook is the most entertaining thing ever.
                  </p>
                  <p>
                    Kids catch food in their mouths, grandkids giggle at the onion volcano, parents
                    relax knowing dinner is taken care of, and everyone leaves with full bellies and
                    happy hearts. No phones, no separate kids' table – just your family, together.
                  </p>
                  <p className="font-medium text-charcoal">
                    That's what makes Jinbeh the perfect place for family celebrations. We're not
                    just a restaurant – we're where families gather, celebrate, and create memories.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-warm-ivory rounded-xl">
                  <h3 className="font-semibold text-charcoal mb-3">💡 Pro Tips for Family Gatherings:</h3>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Book at least 1 week in advance for groups of 8+</li>
                    <li>• Let us know about high chair or booster seat needs when reserving</li>
                    <li>• Request seating together and mention any dietary restrictions</li>
                    <li>• For large family reunions (20+), call us directly for the best arrangements</li>
                    <li>• Arrive 10-15 minutes early so we can have everything ready</li>
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
              Reserve Your Family Gathering
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Choose your location and make a reservation. For groups of 10+, call us directly
              to ensure we arrange the perfect seating for your family.
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
              For large family groups (10+), call us directly:<br />
              Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Have questions about bringing your family? We've got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid gap-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Celebrations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
              Celebrating Something Special?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/celebrations/birthday"
                className="px-6 py-3 bg-warm-ivory rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Birthday Parties
              </Link>
              <Link
                href="/celebrations/anniversary"
                className="px-6 py-3 bg-warm-ivory rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                Anniversary Dinners
              </Link>
              <Link
                href="/celebrations"
                className="px-6 py-3 bg-warm-ivory rounded-full text-charcoal hover:bg-deep-indigo hover:text-white transition-all shadow-md"
              >
                All Celebrations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
