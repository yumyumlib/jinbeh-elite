import type { Metadata } from &quot;next&quot;;
import Link from &quot;next/link&quot;;
import Image from &quot;next/image&quot;;
import Header from &quot;@/components/Header&quot;;
import Footer from &quot;@/components/Footer&quot;;

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
  &quot;@context&quot;: "https://schema.org",
  &quot;@type&quot;: "FAQPage",
  mainEntity: [
    {
      &quot;@type&quot;: "Question",
      name: "Is Jinbeh a good venue for a rehearsal dinner?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Yes! Jinbeh is an excellent rehearsal dinner venue. The interactive hibachi experience entertains guests and creates natural conversation, while the shared table seating helps wedding party members bond before the big day. Our Frisco location can accommodate rehearsal dinner groups of 20-40+ guests.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "How far in advance should I book my rehearsal dinner?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "We recommend booking your rehearsal dinner 2-4 weeks in advance, especially for Friday and Saturday evenings or during peak wedding season (spring and fall). Contact us early to secure your preferred date and discuss menu options for your group.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Can you accommodate dietary restrictions for rehearsal dinners?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Absolutely. We can accommodate various dietary needs including vegetarian, gluten-free, and shellfish allergies. Please provide us with dietary requirements when booking so we can ensure every guest has delicious options.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "What makes hibachi a good choice for a rehearsal dinner?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Hibachi is perfect for rehearsal dinners because it creates a fun, interactive atmosphere that helps wedding party members who may not know each other well break the ice. The shared table experience and entertaining chefs give everyone something to enjoy and discuss, setting a celebratory tone for the wedding weekend.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Is Jinbeh suitable for a rehearsal dinner?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Yes! Jinbeh is an ideal rehearsal dinner venue. We offer private dining rooms for intimate settings, customizable menus tailored to your preferences, and our skilled hibachi chefs provide entertainment that brings everyone together. Our locations in Frisco and Lewisville make us conveniently accessible for your wedding weekend.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "How many guests can Jinbeh accommodate for a rehearsal dinner?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "We can comfortably accommodate rehearsal dinner groups of various sizes. Each hibachi table seats 8-10 guests, and we have private rooms available for larger groups or more intimate celebrations. Contact us to discuss your specific headcount and preferred dining arrangement.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "What makes Jinbeh a good rehearsal dinner venue?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Jinbeh offers the perfect combination for rehearsal dinners: interactive hibachi entertainment that naturally brings guests together, group seating that encourages conversation and bonding, and a celebratory atmosphere. Our team handles all details so you can focus on celebrating with your wedding party.",
      },
    },
  ],
};

export default function RehearsalDinnerPage() {
  return (
    <>
      <Header />
      <main className=&quot;min-h-screen&quot;>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

      {/* Hero Section */}
      <section className=&quot;relative min-h-[60vh] flex items-center text-white py-20&quot;>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/food/OnionVolcanoDemo.jpg"
          aria-label="Hibachi chef performing fire show for celebration at Jinbeh"
        >
          <source src=&quot;/videos/lewisville/hibachi-fire-02.mp4&quot; type=&quot;video/mp4&quot; />
        </video>
        <div className=&quot;absolute inset-0 bg-gradient-to-b from-rose-900/70 via-black/50 to-rose-900/70&quot;></div>
        <div className=&quot;container mx-auto px-4 relative z-10&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h1 className=&quot;text-4xl md:text-5xl lg:text-6xl font-bold mb-6&quot;>
              Rehearsal Dinner at Jinbeh
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/90 mb-8&quot;>
              Start your wedding celebration with an unforgettable hibachi experience for your closest family and friends.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
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
      <section className=&quot;py-16 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot;>
              Why Couples Choose Jinbeh for Rehearsal Dinners
            </h2>
            <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
              <div className=&quot;bg-rose-50 p-6 rounded-xl&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>🎭 Built-In Entertainment</h3>
                <p className=&quot;text-gray-700&quot;>
                  No awkward silences or forced conversation starters. Our hibachi chefs provide 
                  engaging entertainment that naturally brings people together and gives everyone 
                  something to enjoy—even guests who've never met.
                </p>
              </div>
              <div className=&quot;bg-rose-50 p-6 rounded-xl&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>👨‍👩‍👧‍👦 Family-Style Seating</h3>
                <p className=&quot;text-gray-700&quot;>
                  Hibachi tables seat 8-10 guests around the grill, creating intimate groups perfect 
                  for mixing family members and wedding party. It&apos;s more personal than scattered 
                  restaurant tables.
                </p>
              </div>
              <div className=&quot;bg-rose-50 p-6 rounded-xl&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>📸 Memorable Moments</h3>
                <p className=&quot;text-gray-700&quot;>
                  The hibachi experience creates photo-worthy moments and shared memories before the 
                  wedding day. Guests will be talking about the onion volcano and flying shrimp 
                  throughout the wedding weekend!
                </p>
              </div>
              <div className=&quot;bg-rose-50 p-6 rounded-xl&quot;>
                <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>🍱 Something for Everyone</h3>
                <p className=&quot;text-gray-700&quot;>
                  With hibachi, sushi, and traditional Japanese options, there&apos;s something every guest 
                  will love. We accommodate dietary restrictions to ensure all your guests are 
                  well-fed and happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rehearsal Dinner Experience */}
      <section className=&quot;py-16 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-5xl mx-auto&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot;>
              Your Rehearsal Dinner Experience
            </h2>
            
            <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
              {/* Hibachi Option */}
              <div className=&quot;bg-white rounded-xl shadow-lg overflow-hidden&quot;>
                <div className=&quot;bg-red-600 text-white p-4&quot;>
                  <h3 className=&quot;text-xl font-bold&quot;>Hibachi Rehearsal Dinner</h3>
                  <p className=&quot;text-red-100&quot;>Interactive & Entertaining</p>
                </div>
                <div className=&quot;p-6&quot;>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The classic choice for rehearsal dinners! Gather around the hibachi grill and enjoy:
                  </p>
                  <ul className=&quot;space-y-2 text-gray-600 mb-4&quot;>
                    <li>• Skilled chef entertainment at your table</li>
                    <li>• Fresh hibachi steak, chicken, shrimp, or salmon</li>
                    <li>• Fried rice, vegetables, and soup</li>
                    <li>• Group seating around the grill</li>
                    <li>• Perfect for groups of any size</li>
                  </ul>
                  <p className=&quot;text-sm text-gray-500&quot;>
                    Ideal for: Large wedding parties, families meeting for the first time, fun-loving couples
                  </p>
                </div>
              </div>

              {/* Sushi Option */}
              <div className=&quot;bg-white rounded-xl shadow-lg overflow-hidden&quot;>
                <div className=&quot;bg-gray-800 text-white p-4&quot;>
                  <h3 className=&quot;text-xl font-bold&quot;>Sushi Bar Rehearsal Dinner</h3>
                  <p className=&quot;text-gray-300&quot;>Elegant & Intimate</p>
                </div>
                <div className=&quot;p-6&quot;>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    For a more intimate rehearsal dinner, our sushi experience offers:
                  </p>
                  <ul className=&quot;space-y-2 text-gray-600 mb-4&quot;>
                    <li>• Fresh sashimi and specialty rolls</li>
                    <li>• Omakase-style chef selections</li>
                    <li>• Premium sake and cocktail pairings</li>
                    <li>• Quieter atmosphere for conversation</li>
                    <li>• Ideal for smaller groups</li>
                  </ul>
                  <p className=&quot;text-sm text-gray-500&quot;>
                    Ideal for: Intimate gatherings, sushi-loving couples, sophisticated celebrations
                  </p>
                </div>
              </div>
            </div>

            <div className=&quot;mt-8 bg-rose-100 rounded-xl p-6 text-center&quot;>
              <p className=&quot;text-gray-800 font-medium&quot;>
                💡 <strong>Pro Tip:</strong> Many couples do a combination—hibachi tables for the larger 
                group and sushi bar for the wedding party VIPs. Ask us about mixed seating options!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className=&quot;py-16 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot;>
              Planning Your Rehearsal Dinner
            </h2>
            
            <div className=&quot;space-y-6&quot;>
              <div className=&quot;flex gap-4&quot;>
                <div className=&quot;flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold&quot;>1</div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-gray-900 mb-2&quot;>Book Early</h3>
                  <p className=&quot;text-gray-700&quot;>
                    Contact us 2-4 weeks before your rehearsal dinner date. Friday evenings fill quickly 
                    during wedding season. Call our <Link href=&quot;/frisco&quot; className=&quot;text-red-600 hover:text-red-700 font-medium&quot;>Frisco</Link> or 
                    <Link href=&quot;/lewisville&quot; className=&quot;text-red-600 hover:text-red-700 font-medium&quot;> Lewisville</Link> location to reserve your tables.
                  </p>
                </div>
              </div>
              
              <div className=&quot;flex gap-4&quot;>
                <div className=&quot;flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold&quot;>2</div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-gray-900 mb-2&quot;>Confirm Your Guest Count</h3>
                  <p className=&quot;text-gray-700&quot;>
                    Let us know your final headcount and how you&apos;d like guests seated. We can arrange 
                    hibachi tables so the wedding party sits together or mixed with family members.
                  </p>
                </div>
              </div>
              
              <div className=&quot;flex gap-4&quot;>
                <div className=&quot;flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold&quot;>3</div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-gray-900 mb-2&quot;>Choose Your Menu</h3>
                  <p className=&quot;text-gray-700&quot;>
                    Select from our hibachi options, sushi platters, or a combination. We can create 
                    a simplified menu that works for group ordering and billing.
                  </p>
                </div>
              </div>
              
              <div className=&quot;flex gap-4&quot;>
                <div className=&quot;flex-shrink-0 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold&quot;>4</div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-gray-900 mb-2&quot;>Share Dietary Needs</h3>
                  <p className=&quot;text-gray-700&quot;>
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
      <section className=&quot;py-16 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot;>
              Rehearsal Dinner FAQs
            </h2>
            <div className=&quot;space-y-6&quot;>
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className=&quot;bg-white rounded-xl shadow-md p-6&quot;>
                  <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>{faq.name}</h3>
                  <p className=&quot;text-gray-700&quot;>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Celebrations */}
      <section className=&quot;py-16 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-5xl mx-auto&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-4&quot;>
              More Wedding & Romance Celebrations
            </h2>
            <p className=&quot;text-gray-600 text-center mb-12 max-w-2xl mx-auto&quot;>
              From engagement dinners to anniversaries, Jinbeh is the perfect place for romantic milestones.
            </p>
            
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4 mb-12&quot;>
              <Link href=&quot;/celebrations/anniversary&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>💍</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Anniversary Dinner</span>
              </Link>
              <Link href=&quot;/celebrations/date-night&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>💕</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Date Night</span>
              </Link>
              <Link href=&quot;/celebrations/valentines-day&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>❤️</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Valentine's Day</span>
              </Link>
              <Link href=&quot;/celebrations/birthday&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>🎂</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Birthday</span>
              </Link>
              <Link href=&quot;/celebrations/graduation&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>🎓</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Graduation</span>
              </Link>
              <Link href=&quot;/celebrations/baby-shower&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>👶</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Baby Shower</span>
              </Link>
              <Link href=&quot;/celebrations/mothers-day&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>👩</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Mother's Day</span>
              </Link>
              <Link href=&quot;/celebrations/fathers-day&quot; className=&quot;bg-gray-50 hover:bg-rose-50 p-4 rounded-xl text-center transition-colors group&quot;>
                <span className=&quot;text-3xl mb-2 block&quot;>👨</span>
                <span className=&quot;font-medium text-gray-900 group-hover:text-rose-600&quot;>Father's Day</span>
              </Link>
            </div>

            <div className=&quot;bg-rose-50 rounded-xl p-8 text-center&quot;>
              <p className=&quot;text-gray-700 mb-4&quot;>
                Planning your wedding journey? Start with a memorable <Link href=&quot;/celebrations/date-night&quot; className=&quot;text-rose-600 hover:text-rose-700 font-medium&quot;>date night</Link> at 
                Jinbeh, celebrate your engagement with family, then return for your rehearsal dinner. After the wedding, 
                come back for <Link href=&quot;/celebrations/anniversary&quot; className=&quot;text-red-600 hover:text-red-700 font-medium&quot;>anniversary dinners</Link> year after year!
              </p>
              <p className=&quot;text-gray-700&quot;>
                Visit our <Link href=&quot;/frisco&quot; className=&quot;text-red-600 hover:text-red-700 font-medium&quot;>Frisco hibachi restaurant</Link> near 
                Plano and McKinney, or our <Link href=&quot;/lewisville&quot; className=&quot;text-red-600 hover:text-red-700 font-medium&quot;>Lewisville Japanese restaurant</Link> serving 
                Flower Mound and Highland Village.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-16 bg-gradient-to-r from-rose-600 to-rose-700 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
            Ready to Book Your Rehearsal Dinner?
          </h2>
          <p className=&quot;text-xl text-rose-100 mb-8 max-w-2xl mx-auto&quot;>
            Contact us to discuss your guest count, preferred date, and menu options. 
            We'll help make your rehearsal dinner the perfect start to your wedding weekend.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
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
