import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Dinner & Team Events Frisco TX | Private Dining | Jinbeh Japanese Restaurant",
  description: "Host memorable corporate dinners, team building events & business celebrations at Jinbeh. Private hibachi tables, group sushi platters & professional service in Frisco & Lewisville TX.",
  keywords: [
    "corporate dinner frisco",
    "team building restaurant frisco tx",
    "business dinner lewisville",
    "private dining frisco",
    "corporate events japanese restaurant",
    "team dinner hibachi",
    "company celebration dinner",
    "business lunch frisco",
    "group dining frisco tx",
    "corporate catering japanese",
    "office party restaurant",
    "client dinner frisco",
    "executive dining",
    "team outing restaurant"
  ],
  openGraph: {
    title: "Corporate Events & Team Dinners | Jinbeh Japanese Restaurant",
    description: "Impress clients and reward your team with an unforgettable hibachi experience. Private tables, group menus & professional service.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Jinbeh accommodate large corporate groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our Frisco location can seat groups of 20-40+ guests with advance reservations. We offer hibachi tables that seat 8-10 people each, perfect for team building and networking. Contact us to discuss your group size and we'll create a custom seating arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer prix fixe menus for corporate events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can create customized group menus for corporate events including hibachi dinner packages, sushi platter selections, and combination options. Pre-ordering simplifies billing and ensures efficient service for your entire group.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh good for client dinners and business entertaining?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The interactive hibachi experience is perfect for breaking the ice with clients, while our sushi bar offers a more intimate setting for business discussions. Many local companies choose Jinbeh for client entertainment due to our professional service and impressive presentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you accommodate dietary restrictions for corporate groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can accommodate various dietary needs including vegetarian, gluten-free, and shellfish allergies. Please inform us of any dietary restrictions when making your group reservation so we can prepare accordingly.",
      },
    },
  ],
};

export default function CorporateEventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Corporate Events & Team Dinners
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Impress clients. Reward your team. Build relationships over exceptional Japanese cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/frisco"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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

      {/* Why Jinbeh for Corporate Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Companies Choose Jinbeh
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔥 Interactive Entertainment</h3>
                <p className="text-gray-700">
                  Hibachi chefs create an engaging show that breaks the ice and gets conversations flowing. 
                  Perfect for team building and client entertainment where you want memorable shared experiences.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">👔 Professional Service</h3>
                <p className="text-gray-700">
                  Our experienced staff understands corporate hospitality. Expect attentive, professional 
                  service that reflects well on your organization when hosting important clients or executives.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📋 Flexible Group Options</h3>
                <p className="text-gray-700">
                  From intimate client dinners to large team celebrations, we accommodate groups of all sizes. 
                  Our <Link href="/frisco" className="text-red-600 hover:text-red-700 font-medium">Frisco hibachi restaurant</Link> offers 
                  flexible seating arrangements for your specific needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Convenient Locations</h3>
                <p className="text-gray-700">
                  Located in Frisco and Lewisville with easy access from major highways. Perfect for teams 
                  coming from Plano, McKinney, Allen, Flower Mound, or anywhere in the DFW metroplex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Corporate Event Ideas at Jinbeh
            </h2>
            
            <div className="space-y-8">
              {/* Client Entertainment */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Dinners & Business Entertainment</h3>
                  <p className="text-gray-700 mb-4">
                    Make a lasting impression on important clients with an unforgettable dining experience. 
                    The hibachi grill creates natural conversation opportunities while showcasing your 
                    hospitality. Many DFW executives choose Japanese cuisine for client entertainment because 
                    it's impressive yet approachable.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Best for:</strong> Sales dinners, partnership meetings, vendor appreciation, executive entertaining
                  </p>
                </div>
              </div>

              {/* Team Building */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Building & Employee Appreciation</h3>
                  <p className="text-gray-700 mb-4">
                    Reward your hardworking team with a memorable dining experience. Hibachi tables seat 
                    8-10 people, creating intimate group settings where colleagues can bond over shared 
                    entertainment and great food. It's more engaging than a typical restaurant outing.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Best for:</strong> Quarterly team dinners, project completion celebrations, department outings, employee recognition
                  </p>
                </div>
              </div>

              {/* Holiday Parties */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Holiday Celebrations</h3>
                  <p className="text-gray-700 mb-4">
                    Skip the generic hotel ballroom and give your team something special. Our 
                    <Link href="/celebrations/christmas" className="text-red-600 hover:text-red-700 font-medium"> holiday dining experience</Link> offers 
                    festive atmosphere with the excitement of live hibachi cooking. Perfect for year-end 
                    celebrations and <Link href="/celebrations/thanksgiving" className="text-red-600 hover:text-red-700 font-medium">Thanksgiving team dinners</Link>.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Best for:</strong> Holiday parties, year-end celebrations, New Year gatherings, milestone achievements
                  </p>
                </div>
              </div>

              {/* Retirement & Milestones */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Retirement & Milestone Celebrations</h3>
                  <p className="text-gray-700 mb-4">
                    Honor retiring colleagues or celebrate work anniversaries with a special dinner. 
                    The shared hibachi experience creates a celebratory atmosphere that makes the 
                    guest of honor feel truly appreciated by their team.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Best for:</strong> Retirement dinners, promotion celebrations, work anniversaries, farewell gatherings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Your Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Planning Your Corporate Event
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us Early</h3>
                  <p className="text-gray-700">
                    For groups of 15 or more, we recommend booking 1-2 weeks in advance, especially for 
                    Friday and Saturday evenings. Call our <Link href="/frisco" className="text-red-600 hover:text-red-700 font-medium">Frisco location</Link> or 
                    <Link href="/lewisville" className="text-red-600 hover:text-red-700 font-medium"> Lewisville location</Link> to discuss your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discuss Menu Options</h3>
                  <p className="text-gray-700">
                    We can create customized group menus that simplify ordering and billing. Choose from 
                    hibachi packages, sushi platters, or combination options based on your group's preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Share Dietary Needs</h3>
                  <p className="text-gray-700">
                    Let us know about any dietary restrictions (vegetarian, gluten-free, allergies) so we 
                    can prepare appropriate options for all your guests.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Details</h3>
                  <p className="text-gray-700">
                    We'll confirm your reservation, seating arrangement, menu selections, and any special 
                    requests to ensure your event runs smoothly.
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
              Corporate Event FAQs
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
              More Celebrations at Jinbeh
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From personal milestones to seasonal celebrations, discover all the ways to celebrate at Jinbeh.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Link href="/celebrations/birthday" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎂</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Birthday Celebrations</span>
              </Link>
              <Link href="/celebrations/date-night" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">💕</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Date Night</span>
              </Link>
              <Link href="/celebrations/anniversary" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">💍</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Anniversary Dinner</span>
              </Link>
              <Link href="/celebrations/graduation" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎓</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Graduation Party</span>
              </Link>
              <Link href="/celebrations/christmas" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🎄</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Holiday Parties</span>
              </Link>
              <Link href="/celebrations/thanksgiving" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">🦃</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Thanksgiving</span>
              </Link>
              <Link href="/celebrations/rehearsal-dinner" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">💒</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Rehearsal Dinner</span>
              </Link>
              <Link href="/celebrations/mothers-day" className="bg-gray-50 hover:bg-red-50 p-4 rounded-xl text-center transition-colors group">
                <span className="text-3xl mb-2 block">👩</span>
                <span className="font-medium text-gray-900 group-hover:text-red-600">Mother's Day</span>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <p className="text-gray-700 mb-4">
                Beyond corporate events, Jinbeh is the perfect venue for <Link href="/celebrations/birthday" className="text-red-600 hover:text-red-700 font-medium">birthday celebrations</Link>, 
                <Link href="/celebrations/anniversary" className="text-red-600 hover:text-red-700 font-medium"> anniversary dinners</Link>, and 
                <Link href="/celebrations/graduation" className="text-red-600 hover:text-red-700 font-medium"> graduation parties</Link>. 
                Our hibachi experience makes any occasion memorable.
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Corporate Event?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your group size, preferred date, and menu options. 
            We'll help make your corporate event a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/frisco"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Frisco
            </Link>
            <Link
              href="/lewisville"
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Lewisville
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
