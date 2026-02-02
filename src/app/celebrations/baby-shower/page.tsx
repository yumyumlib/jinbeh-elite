import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Baby Shower Venues Frisco TX | Baby Shower Restaurant | Jinbeh Japanese",
  description: "Host your baby shower at Jinbeh Japanese Restaurant! Fun hibachi entertainment, delicious food & memorable celebration. Baby shower venues in Frisco & Lewisville TX.",
  keywords: [
    "baby shower venues frisco",
    "baby shower venues near me",
    "baby shower restaurant frisco tx",
    "baby shower restaurant near me",
    "baby shower lewisville",
    "baby shower hibachi",
    "baby shower lunch venues frisco",
    "baby shower brunch restaurant",
    "baby shower dinner frisco",
    "gender reveal dinner frisco",
    "gender reveal restaurant",
    "baby shower near plano",
    "baby shower party restaurant dfw",
    "private baby shower venue frisco",
    "baby shower mckinney",
    "restaurants for baby showers",
    "baby shower venue allen tx",
    "sip and see venue"
  ],
  openGraph: {
    title: "Baby Shower Venues | Jinbeh Japanese Restaurant",
    description: "Celebrate your new arrival with hibachi entertainment and delicious cuisine. Perfect baby shower venue in Frisco & Lewisville.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Jinbeh a good venue for a baby shower?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Jinbeh is a wonderful baby shower venue. The interactive hibachi show entertains guests of all ages, the shared table seating creates a party atmosphere, and our variety of menu options ensures every guest finds something they love. Our Frisco location can accommodate baby shower groups of 15-40+ guests.",
      },
    },
    {
      "@type": "Question",
      name: "Can I have a baby shower lunch at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we're open for lunch and dinner. Weekend lunch baby showers are popular choices. Contact us to discuss your preferred date and time, and we'll help you plan the perfect celebration.",
      },
    },
    {
      "@type": "Question",
      name: "Can pregnant guests safely eat at a hibachi restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Our hibachi menu offers many pregnancy-safe options including well-cooked chicken, steak, and vegetables. We can ensure all hibachi items are thoroughly cooked. For sushi lovers, we offer cooked rolls and tempura options that are safe during pregnancy.",
      },
    },
    {
      "@type": "Question",
      name: "Can we bring baby shower decorations or a cake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Please contact us to discuss bringing decorations or outside desserts for your baby shower. We want to help make your celebration special and can work with you on the details.",
      },
    },
  ],
};

export default function BabyShowerPage() {
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
        <Image
          src="/images/celebrations/jinbeh_group.jpg"
          alt="Happy group celebration at Jinbeh Japanese Restaurant - perfect venue for baby showers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-red/60 via-deep-indigo/40 to-deep-indigo/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Baby Shower at Jinbeh
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Celebrate the new arrival with hibachi fun, delicious food, and unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco"
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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
              Why Host Your Baby Shower at Jinbeh
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎉 Built-In Entertainment</h3>
                <p className="text-gray-700">
                  Skip the party games—our hibachi chefs provide non-stop entertainment! Guests of all 
                  ages love the cooking show, from grandparents to the kids' table. It keeps everyone 
                  engaged and having fun.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Group-Friendly Seating</h3>
                <p className="text-gray-700">
                  Hibachi tables seat 8-10 guests around the grill, creating a party atmosphere where 
                  everyone can see and talk to each other. Much better than scattered restaurant tables!
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍱 Something for Everyone</h3>
                <p className="text-gray-700">
                  From the adventurous sushi lover to the picky eater, our menu has options everyone 
                  will enjoy. Kids love hibachi chicken and fried rice, while adults can enjoy steak, 
                  shrimp, and specialty rolls.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🤰 Pregnancy-Safe Options</h3>
                <p className="text-gray-700">
                  Mom-to-be has plenty of delicious options! Our hibachi items are cooked thoroughly 
                  at the table, and we offer cooked sushi rolls and tempura for those avoiding raw fish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Ideas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Baby Shower Menu Ideas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* For the Mom-to-Be */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-accent-red text-white p-4">
                  <h3 className="text-xl font-bold">For Mom-to-Be 🤰</h3>
                  <p className="text-pink-100">Pregnancy-Safe Favorites</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-red">✓</span>
                      <span><strong>Hibachi Chicken or Steak</strong> – Thoroughly cooked at your table</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-red">✓</span>
                      <span><strong>Shrimp & Vegetable Tempura</strong> – Crispy and delicious</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-red">✓</span>
                      <span><strong>Cooked Sushi Rolls</strong> – California roll, shrimp tempura roll</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-red">✓</span>
                      <span><strong>Hibachi Fried Rice</strong> – A crowd favorite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-red">✓</span>
                      <span><strong>Miso Soup & Salad</strong> – Fresh starters</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* For the Guests */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-deep-indigo text-white p-4">
                  <h3 className="text-xl font-bold">For Your Guests 👨‍👩‍👧‍👦</h3>
                  <p className="text-blue-100">Full Menu Available</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-deep-indigo">✓</span>
                      <span><strong>Full Hibachi Selection</strong> – Filet mignon, lobster, salmon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deep-indigo">✓</span>
                      <span><strong>Sushi & Sashimi</strong> – Fresh rolls and nigiri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deep-indigo">✓</span>
                      <span><strong>Sake & Cocktails</strong> – For the non-pregnant guests!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deep-indigo">✓</span>
                      <span><strong>Kids' Hibachi</strong> – Chicken with fried rice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deep-indigo">✓</span>
                      <span><strong>Vegetarian Options</strong> – Tofu and veggie hibachi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gender Reveal Section */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💖 Gender Reveal Dinner? 💙
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Combine your gender reveal with a celebratory dinner! Gather your closest family and 
              friends around the hibachi grill for the big announcement, then celebrate together 
              over an amazing meal.
            </p>
            <p className="text-gray-600">
              Contact us to discuss how we can help make your gender reveal dinner extra special.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Planning Your Baby Shower
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-red text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Date & Time</h3>
                  <p className="text-gray-700">
                    We're open for lunch and dinner. Weekend lunch baby showers are popular, but weeknight 
                    dinners work great too. Book 1-2 weeks in advance for groups of 15+.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-red text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Guest Count</h3>
                  <p className="text-gray-700">
                    Let us know how many guests you're expecting. Our <Link href="/frisco" className="text-red-600 hover:text-red-700 font-medium">Frisco location</Link> can 
                    accommodate groups from intimate gatherings to 40+ guests.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-red text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Your Menu</h3>
                  <p className="text-gray-700">
                    We can help you create a group menu that simplifies ordering. Let us know about 
                    any dietary restrictions, especially for the mom-to-be!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-red text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Celebrate!</h3>
                  <p className="text-gray-700">
                    Arrive and enjoy! Our chefs will entertain your guests while you focus on celebrating 
                    the mom-to-be and the new baby.
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
              Baby Shower FAQs
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
              More Family Celebrations at Jinbeh
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From baby showers to graduations, Jinbeh is perfect for every family milestone.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Link href="/celebrations/birthday" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎂</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Birthday Party</span>
              </Link>
              <Link href="/celebrations/graduation" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎓</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Graduation</span>
              </Link>
              <Link href="/celebrations/mothers-day" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">👩</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Mother's Day</span>
              </Link>
              <Link href="/celebrations/fathers-day" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">👨</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Father's Day</span>
              </Link>
              <Link href="/celebrations/anniversary" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">💍</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Anniversary</span>
              </Link>
              <Link href="/celebrations/christmas" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎄</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Holidays</span>
              </Link>
              <Link href="/celebrations/thanksgiving" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🦃</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Thanksgiving</span>
              </Link>
              <Link href="/celebrations/rehearsal-dinner" className="bg-gray-50 hover:bg-pink-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">💒</span>
                <span className="font-medium text-gray-900 group-hover:text-pink-600">Rehearsal Dinner</span>
              </Link>
            </div>

            <div className="bg-pink-50 rounded-xl p-8 text-center">
              <p className="text-gray-700 mb-4">
                Jinbeh is perfect for every stage of family life! After the baby shower, bring the little one 
                back for their first <Link href="/celebrations/birthday" className="text-pink-600 hover:text-pink-700 font-medium">birthday celebration</Link>, 
                then <Link href="/celebrations/graduation" className="text-red-600 hover:text-red-700 font-medium">graduation parties</Link> years down the road.
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
      <section className="py-16 bg-gradient-to-r from-accent-red to-deep-indigo text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Baby Shower?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your guest count, preferred date, and any special requests. 
            We'll help make your baby shower celebration memorable!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/frisco"
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book Frisco Location
            </Link>
            <Link
              href="/lewisville"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-white/50"
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
