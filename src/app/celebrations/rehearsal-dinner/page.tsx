import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rehearsal Dinner Venues Frisco TX | Wedding Rehearsal Restaurant | Jinbeh",
  description: "Host your wedding rehearsal dinner at Jinbeh Japanese Restaurant. Private hibachi tables, memorable entertainment & delicious cuisine. Perfect rehearsal dinner venues in Frisco & Lewisville TX.",
  keywords: [
    "rehearsal dinner venues frisco",
    "rehearsal dinner venues near me",
    "rehearsal dinner restaurant frisco tx",
    "wedding rehearsal dinner lewisville",
    "rehearsal dinner hibachi",
    "private dining rehearsal dinner",
    "rehearsal dinner near plano",
    "wedding party dinner frisco",
    "rehearsal dinner ideas",
    "rehearsal dinner venues dfw",
    "japanese rehearsal dinner",
    "hibachi rehearsal dinner",
    "rehearsal dinner mckinney",
    "engagement dinner frisco tx",
    "pre wedding dinner venue",
    "rehearsal dinner allen tx",
    "wedding weekend dinner ideas",
    "intimate rehearsal dinner venue"
  ],
  openGraph: {
    title: "Rehearsal Dinner Venues | Jinbeh Japanese Restaurant",
    description: "Make your rehearsal dinner unforgettable with hibachi entertainment and exceptional cuisine. Private tables for your wedding party.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh a good venue for a rehearsal dinner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jinbeh is an excellent rehearsal dinner venue. The interactive hibachi experience entertains guests and creates natural conversation, while the shared table seating helps wedding party members bond before the big day. Our Frisco location can accommodate rehearsal dinner groups of 20-40+ guests.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book my rehearsal dinner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking your rehearsal dinner 2-4 weeks in advance, especially for Friday and Saturday evenings or during peak wedding season (spring and fall). Contact us early to secure your preferred date and discuss menu options for your group.",
      },
    },
    {
      "@type": "Question",
      name: "Can you accommodate dietary restrictions for rehearsal dinners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We can accommodate various dietary needs including vegetarian, gluten-free, and shellfish allergies. Please provide us with dietary requirements when booking so we can ensure every guest has delicious options.",
      },
    },
    {
      "@type": "Question",
      name: "What makes hibachi a good choice for a rehearsal dinner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hibachi is perfect for rehearsal dinners because it creates a fun, interactive atmosphere that helps wedding party members who may not know each other well break the ice. The shared table experience and entertaining chefs give everyone something to enjoy and discuss, setting a celebratory tone for the wedding weekend.",
      },
    },
  ],
};

export default function RehearsalDinnerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center text-white py-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/food/OnionVolcanoDemo.jpg"
          aria-label="Hibachi chef performing fire show for celebration at Jinbeh"
        >
          <source src="/videos/lewisville/hibachi-fire-02.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/70 via-black/50 to-rose-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Rehearsal Dinner at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Start your wedding celebration with an unforgettable hibachi experience for your closest family and friends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco"
                className="bg-white text-rose-700 hover:bg-rose-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Book Frisco Location
              </Link>
              <Link
                href="/lewisville"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-white/30"
              >
                Book Lewisville Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Jinbeh */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Couples Choose Jinbeh for Rehearsal Dinners
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎭 Built-In Entertainment</h3>
                <p className="text-gray-700">
                  No awkward silences or forced conversation starters. Our hibachi chefs provide 
                  engaging entertainment that naturally brings people together and gives everyone 
                  something to enjoy—even guests who've never met.
                </p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Family-Style Seating</h3>
                <p className="text-gray-700">
                  Hibachi tables seat 8-10 guests around the grill, creating intimate groups perfect 
                  for mixing family members and wedding party. It's more personal than scattered 
                  restaurant tables.
                </p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📸 Memorable Moments</h3>
                <p className="text-gray-700">
                  The hibachi experience creates photo-worthy moments and shared memories before the 
                  wedding day. Guests will be talking about the onion volcano and flying shrimp 
                  throughout the wedding weekend!
                </p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍱 Something for Everyone</h3>
                <p className="text-gray-700">
                  With hibachi, sushi, and traditional Japanese options, there's something every guest 
                  will love. We accommodate dietary restrictions to ensure all your guests are 
                  well-fed and happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rehearsal Dinner Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Your Rehearsal Dinner Experience
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Hibachi Option */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-red-600 text-white p-4">
                  <h3 className="text-xl font-bold">Hibachi Rehearsal Dinner</h3>
                  <p className="text-red-100">Interactive & Entertaining</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    The classic choice for rehearsal dinners! Gather around the hibachi grill and enjoy:
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Skilled chef entertainment at your table</li>
                    <li>• Fresh hibachi steak, chicken, shrimp, or salmon</li>
                    <li>• Fried rice, vegetables, and soup</li>
                    <li>• Group seating around the grill</li>
                    <li>• Perfect for groups of any size</li>
                  </ul>
                  <p className="text-sm text-gray-500">
                    Ideal for: Large wedding parties, families meeting for the first time, fun-loving couples
                  </p>
                </div>
              </div>

              {/* Sushi Option */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                  <h3 className="text-xl font-bold">Sushi Bar Rehearsal Dinner</h3>
                  <p className="text-gray-300">Elegant & Intimate</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    For a more intimate rehearsal dinner, our sushi experience offers:
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Fresh sashimi and specialty rolls</li>
                    <li>• Omakase-style chef selections</li>
                    <li>• Premium sake and cocktail pairings</li>
                    <li>• Quieter atmosphere for conversation</li>
                    <li>• Ideal for smaller groups</li>
                  </ul>
                  <p className="text-sm text-gray-500">
                    Ideal for: Intimate gatherings, sushi-loving couples, sophisticated celebrations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-rose-100 rounded-xl p-6 text-center">
              <p className="text-gray-800 font-medium">
                💡 <strong>Pro Tip:</strong> Many couples do a combination—hibachi tables for the larger 
                group and sushi bar for the wedding party VIPs. Ask us about mixed seating options!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Planning Your Rehearsal Dinner
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Book Early</h3>
                  <p className="text-gray-700">
                    Contact us 2-4 weeks before your rehearsal dinner date. Friday evenings fill quickly 
                    during wedding season. Call our <Link href="/frisco" className="text-red-600 hover:text-red-700 font-medium">Frisco</Link> or 
                    <Link href="/lewisville" className="text-red-600 hover:text-red-700 font-medium"> Lewisville</Link> location to reserve your tables.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Your Guest Count</h3>
                  <p className="text-gray-700">
                    Let us know your final headcount and how you'd like guests seated. We can arrange 
                    hibachi tables so the wedding party sits together or mixed with family members.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Menu</h3>
                  <p className="text-gray-700">
                    Select from our hibachi options, sushi platters, or a combination. We can create 
                    a simplified menu that works for group ordering and billing.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Share Dietary Needs</h3>
                  <p className="text-gray-700">
                    Let us know about any allergies or dietary restrictions (vegetarian, gluten-free, 
                    shellfish allergies) so every guest has great options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Rehearsal Dinner FAQs
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Celebrations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              More Wedding & Romance Celebrations
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From engagement dinners to anniversaries, Jinbeh is the perfect place for romantic milestones.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Link href="/celebrations/anniversary" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">💍</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Anniversary Dinner</span>
              </Link>
              <Link href="/celebrations/date-night" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">💕</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Date Night</span>
              </Link>
              <Link href="/celebrations/valentines-day" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">❤️</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Valentine's Day</span>
              </Link>
              <Link href="/celebrations/birthday" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎂</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Birthday</span>
              </Link>
              <Link href="/celebrations/graduation" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎓</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Graduation</span>
              </Link>
              <Link href="/celebrations/baby-shower" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">👶</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Baby Shower</span>
              </Link>
              <Link href="/celebrations/mothers-day" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">👩</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Mother's Day</span>
              </Link>
              <Link href="/celebrations/fathers-day" className="bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">👨</span>
                <span className="font-medium text-gray-900 group-hover:text-rose-600">Father's Day</span>
              </Link>
            </div>

            <div className="bg-rose-50 rounded-xl p-8 text-center">
              <p className="text-gray-700 mb-4">
                Planning your wedding journey? Start with a memorable <Link href="/celebrations/date-night" className="text-rose-600 hover:text-rose-700 font-medium">date night</Link> at 
                Jinbeh, celebrate your engagement with family, then return for your rehearsal dinner. After the wedding, 
                come back for <Link href="/celebrations/anniversary" className="text-red-600 hover:text-red-700 font-medium">anniversary dinners</Link> year after year!
              </p>
              <p className="text-gray-700">
                Visit our <Link href="/frisco" className="text-red-600 hover:text-red-700 font-medium">Frisco hibachi restaurant</Link> near 
                Plano and McKinney, or our <Link href="/lewisville" className="text-red-600 hover:text-red-700 font-medium">Lewisville Japanese restaurant</Link> serving 
                Flower Mound and Highland Village.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Rehearsal Dinner?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your guest count, preferred date, and menu options. 
            We'll help make your rehearsal dinner the perfect start to your wedding weekend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/frisco"
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book Frisco Location
            </Link>
            <Link
              href="/lewisville"
              className="bg-rose-800 hover:bg-rose-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book Lewisville Location
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
