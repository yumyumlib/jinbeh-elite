import Link from &quot;next/link&quot;;
import type { Metadata } from &quot;next&quot;;
import Header from &quot;@/components/Header&quot;;
import Footer from &quot;@/components/Footer&quot;;
import locations from &quot;@/data/locations.json&quot;;

const friscoLocation = locations.locations.frisco;
const lewisvilleLocation = locations.locations.lewisville;

export const metadata: Metadata = {
  title: "Japanese Restaurant Near Plano | Hibachi & Sushi | Jinbeh",
  description: "Looking for hibachi and sushi near Plano, TX? Jinbeh is only minutes away in Frisco! Authentic Japanese cuisine, teppanyaki shows, and fresh sushi. Reserve your table today.",
  keywords: [
    "japanese restaurant plano tx",
    "hibachi near plano",
    "sushi restaurants near plano",
    "best hibachi plano texas",
    "teppanyaki near plano tx",
    "japanese food plano",
    "hibachi restaurant near plano",
  ],
  alternates: {
    canonical: "https://jinbeh.com/nearby/plano",
  },
  openGraph: {
    title: "Japanese Restaurant Near Plano | Hibachi & Sushi | Jinbeh",
    description: "Authentic hibachi and sushi just minutes from Plano. Teppanyaki shows, fresh sushi bar, and full bar. Family-owned since 1988.",
    url: "https://jinbeh.com/nearby/plano",
    type: "website",
  },
};

// JSON-LD Schema for LocalBusiness pointing to Frisco
const localBusinessSchema = {
  &quot;@context&quot;: "https://schema.org",
  &quot;@type&quot;: "LocalBusiness",
  name: "Jinbeh Japanese Restaurant Near Plano",
  image: "https://jinbeh.com/images/frisco-interior.jpg",
  description: "Authentic Japanese hibachi and sushi restaurant serving Plano residents. Located in Frisco, just minutes away.",
  address: {
    &quot;@type&quot;: "PostalAddress",
    streetAddress: `${friscoLocation.address.street} ${friscoLocation.address.suite}`,
    addressLocality: friscoLocation.address.city,
    addressRegion: friscoLocation.address.state,
    postalCode: friscoLocation.address.zip,
    addressCountry: "US",
  },
  geo: {
    &quot;@type&quot;: "GeoCoordinates",
    latitude: friscoLocation.geo.latitude,
    longitude: friscoLocation.geo.longitude,
  },
  url: "https://jinbeh.com/frisco",
  telephone: friscoLocation.phone,
  servesCuisine: ["Japanese&quot;, &quot;Sushi&quot;, &quot;Hibachi&quot;, &quot;Teppanyaki"],
  priceRange: "$$",
  areaServed: ["Plano&quot;, &quot;Frisco&quot;, &quot;Lewisville&quot;, &quot;Dallas&quot;, &quot;Texas"],
  openingHoursSpecification: [
    {
      &quot;@type&quot;: "OpeningHoursSpecification",
      dayOfWeek: ["Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday"],
      opens: "11:00",
      closes: "14:00",
    },
    {
      &quot;@type&quot;: "OpeningHoursSpecification",
      dayOfWeek: ["Saturday&quot;, &quot;Sunday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      &quot;@type&quot;: "OpeningHoursSpecification",
      dayOfWeek: ["Sunday&quot;, &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday"],
      opens: "17:00",
      closes: "21:00",
    },
    {
      &quot;@type&quot;: "OpeningHoursSpecification",
      dayOfWeek: ["Friday&quot;, &quot;Saturday"],
      opens: "17:00",
      closes: "22:00",
    },
  ],
  acceptsReservations: true,
  hasMenu: friscoLocation.menus.dinner,
};

// FAQ Schema targeting Plano keywords
const faqSchema = {
  &quot;@context&quot;: "https://schema.org",
  &quot;@type&quot;: "FAQPage",
  mainEntity: [
    {
      &quot;@type&quot;: "Question",
      name: "How far is Jinbeh from Plano?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Jinbeh Frisco is located just 12 minutes from downtown Plano, making it the closest premium hibachi and sushi restaurant for Plano residents. Jinbeh Lewisville is also available, just 15 minutes away.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Is there hibachi near Plano?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Yes! Jinbeh offers authentic teppanyaki hibachi dining with skilled chefs who cook your meal tableside. Our Frisco location is just 12 minutes from Plano.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Where is the best sushi restaurant near Plano, TX?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Jinbeh Frisco features a fresh sushi bar with master chefs preparing premium rolls, nigiri, and sashimi. Located just minutes from Plano at 2693 Preston Rd Suite 1040, Frisco, TX 75034.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Why should Plano residents choose Jinbeh?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Jinbeh offers authentic Japanese cuisine prepared by skilled chefs, exciting hibachi tableside shows, a fresh sushi bar, full bar service, and family-friendly atmosphere. Family-owned since 1988 with nearly 40 years of tradition.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Can I make a reservation from Plano?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Absolutely! You can reserve online through OpenTable or call our Frisco location at (214) 619-1200. We highly recommend reservations, especially for dinner and weekends.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Does Jinbeh have private dining for Plano groups?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Yes! We offer private hibachi dining perfect for corporate events, family celebrations, and group gatherings. Contact us at (214) 619-1200 to arrange your private event.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "What are the hours for hibachi service near Plano?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Lunch: Monday-Friday 11am-2pm, Saturday-Sunday 11:30am-2:30pm. Dinner: Sunday-Thursday 5pm-9pm, Friday-Saturday 5pm-10pm. Located in Frisco.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Is there a hibachi restaurant near Plano?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Yes! Jinbeh is the premier hibachi restaurant near Plano, located in Frisco just 12 minutes away. We offer authentic teppanyaki hibachi experiences with skilled chefs performing exciting tableside shows.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Does Jinbeh have locations in Plano?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "Jinbeh currently has locations in Frisco (12 minutes from Plano) and Lewisville (15 minutes from Plano). While we don&apos;t have a location in Plano itself, our Frisco location near Legacy West is your closest option for hibachi and sushi.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      name: "Does Jinbeh deliver to Plano?",
      acceptedAnswer: {
        &quot;@type&quot;: "Answer",
        text: "We offer takeout service from both our Frisco and Lewisville locations. For delivery options to Plano, please call us directly at (214) 619-1200 (Frisco) or (214) 488-2224 (Lewisville) to inquire about current delivery availability.",
      },
    },
  ],
};

export default function PlanoNearbyPage() {
  return (
    <>
      <Header />

      <main className=&quot;min-h-screen&quot;>
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Hero Section */}
        <section className=&quot;hero relative bg-charcoal&quot;>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/interior/JinbehFriscoTables.jpg')",
            }}
          />
          <div className=&quot;hero-overlay&quot; />

          <div className=&quot;hero-content max-w-4xl mx-auto&quot;>
            <h1 className=&quot;text-4xl md:text-6xl font-heading font-bold mb-4&quot;>
              Plano&apos;s Favorite Japanese Restaurant<br />Is Just Minutes Away
            </h1>
            <p className=&quot;text-xl text-warm-ivory/90 mb-6&quot;>
              Only 12 minutes from downtown Plano
            </p>
            <p className=&quot;text-lg text-warm-ivory/80 max-w-2xl mx-auto mb-8&quot;>
              Experience authentic Japanese hibachi and sushi at Jinbeh, conveniently located in Frisco. Watch skilled chefs perform exciting tableside shows while enjoying fresh, expertly prepared cuisine.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href="#reserve"
                className="btn btn-primary btn-shimmer"
              >
                Reserve Your Table
              </a>
              <a
                href={`tel:${friscoLocation.phoneClean}`}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal"
              >
                Call {friscoLocation.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Distance & Directions Section */}
        <section className=&quot;py-16 bg-accent-red text-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 text-center&quot;>
              <div>
                <div className=&quot;text-5xl font-bold mb-2&quot;>12 mins</div>
                <p className=&quot;text-lg text-white/90&quot;>From Downtown Plano</p>
              </div>
              <div>
                <div className=&quot;text-5xl font-bold mb-2&quot;>7.2 miles</div>
                <p className=&quot;text-lg text-white/90&quot;>Direct Route</p>
              </div>
              <div>
                <div className=&quot;text-5xl font-bold mb-2&quot;>2 Locations</div>
                <p className=&quot;text-lg text-white/90&quot;>Frisco & Lewisville</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Jinbeh Section */}
        <section className=&quot;py-16 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <h2 className=&quot;font-heading text-3xl font-bold text-charcoal text-center mb-12&quot;>
              Why Plano Residents Choose Jinbeh
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto&quot;>
              <div className=&quot;card&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🔥</div>
                <h3 className=&quot;font-heading text-xl font-semibold text-charcoal mb-3&quot;>
                  Authentic Hibachi Shows
                </h3>
                <p className=&quot;text-charcoal/70&quot;>
                  Watch our skilled teppanyaki chefs perform dazzling tricks right at your table, including the famous onion volcano. Entertainment and amazing food in one experience.
                </p>
              </div>

              <div className=&quot;card&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🍣</div>
                <h3 className=&quot;font-heading text-xl font-semibold text-charcoal mb-3&quot;>
                  Fresh Sushi Bar
                </h3>
                <p className=&quot;text-charcoal/70&quot;>
                  Master sushi chefs prepare premium rolls, nigiri, and sashimi daily. Choose from creative specialty rolls or classic favorites prepared with the finest ingredients.
                </p>
              </div>

              <div className=&quot;card&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🏆</div>
                <h3 className=&quot;font-heading text-xl font-semibold text-charcoal mb-3&quot;>
                  37 Years of Excellence
                </h3>
                <p className=&quot;text-charcoal/70&quot;>
                  Family-owned since 1988, we&apos;ve been serving North Texas families for nearly four decades with authentic Japanese cuisine and exceptional service.
                </p>
              </div>

              <div className=&quot;card&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🎉</div>
                <h3 className=&quot;font-heading text-xl font-semibold text-charcoal mb-3&quot;>
                  Perfect for Celebrations
                </h3>
                <p className=&quot;text-charcoal/70&quot;>
                  Birthdays, anniversaries, and special events become unforgettable at Jinbeh. Our tableside hibachi shows make every celebration memorable.
                </p>
              </div>

              <div className=&quot;card&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🍸</div>
                <h3 className=&quot;font-heading text-xl font-semibold text-charcoal mb-3&quot;>
                  Full Bar & Happy Hour
                </h3>
                <p className=&quot;text-charcoal/70&quot;>
                  Enjoy premium sake, craft cocktails, and select wines. Ask about our Happy Hour specials featuring discounted appetizers and drinks.
                </p>
              </div>

              <div className=&quot;card&quot;>
                <div className=&quot;text-4xl mb-4&quot;>👨‍👩‍👧‍👦</div>
                <h3 className=&quot;font-heading text-xl font-semibold text-charcoal mb-3&quot;>
                  Family-Friendly Atmosphere
                </h3>
                <p className=&quot;text-charcoal/70&quot;>
                  Kids love watching the hibachi shows, and we have options for all ages. A favorite dining destination for Plano families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className=&quot;py-16 bg-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <h2 className=&quot;font-heading text-3xl font-bold text-charcoal text-center mb-12&quot;>
              Choose Your Nearest Location
            </h2>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto&quot;>
              {/* Frisco Location */}
              <div className=&quot;card border-2 border-accent-red&quot;>
                <div className=&quot;flex items-start gap-4 mb-6&quot;>
                  <div className=&quot;text-4xl&quot;>📍</div>
                  <div>
                    <h3 className=&quot;font-heading text-2xl font-bold text-charcoal&quot;>
                      Jinbeh Frisco
                    </h3>
                    <p className=&quot;text-accent-red font-semibold&quot;>
                      Closest to Plano - 12 minutes
                    </p>
                  </div>
                </div>

                <address className=&quot;not-italic text-charcoal/80 mb-6 space-y-2&quot;>
                  <p className=&quot;font-medium&quot;>{friscoLocation.address.street}</p>
                  <p>{friscoLocation.address.suite}</p>
                  <p>
                    {friscoLocation.address.city}, {friscoLocation.address.state} {friscoLocation.address.zip}
                  </p>
                  <p className=&quot;text-sm text-charcoal/60&quot;>
                    Near Stonebriar Centre Mall, Legacy West
                  </p>
                </address>

                <a
                  href={`tel:${friscoLocation.phoneClean}`}
                  className="block text-accent-red hover:text-deep-indigo transition-colors font-semibold mb-6"
                >
                  {friscoLocation.phone}
                </a>

                <div className=&quot;space-y-3 mb-6&quot;>
                  <div>
                    <p className=&quot;text-sm font-semibold text-charcoal/60 mb-1&quot;>LUNCH</p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Mon-Fri:</span> {friscoLocation.hours.lunch.weekday.display}
                    </p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Sat-Sun:</span> {friscoLocation.hours.lunch.weekend.display}
                    </p>
                  </div>
                  <div>
                    <p className=&quot;text-sm font-semibold text-charcoal/60 mb-1&quot;>DINNER</p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Sun-Thu:</span> {friscoLocation.hours.dinner.sunThurs.display}
                    </p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Fri-Sat:</span> {friscoLocation.hours.dinner.friSat.display}
                    </p>
                  </div>
                </div>

                <Link
                  href="/frisco"
                  className="btn btn-primary w-full mb-3"
                >
                  View Full Details
                </Link>
                <a
                  href={friscoLocation.reservation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  Reserve at Frisco
                </a>
              </div>

              {/* Lewisville Location */}
              <div className=&quot;card&quot;>
                <div className=&quot;flex items-start gap-4 mb-6&quot;>
                  <div className=&quot;text-4xl&quot;>📍</div>
                  <div>
                    <h3 className=&quot;font-heading text-2xl font-bold text-charcoal&quot;>
                      Jinbeh Lewisville
                    </h3>
                    <p className=&quot;text-cedar-brown font-semibold&quot;>
                      Alternative Option - 15 minutes
                    </p>
                  </div>
                </div>

                <address className=&quot;not-italic text-charcoal/80 mb-6 space-y-2&quot;>
                  <p className=&quot;font-medium&quot;>{lewisvilleLocation.address.street}</p>
                  <p>{lewisvilleLocation.address.suite}</p>
                  <p>
                    {lewisvilleLocation.address.city}, {lewisvilleLocation.address.state} {lewisvilleLocation.address.zip}
                  </p>
                  <p className=&quot;text-sm text-charcoal/60&quot;>
                    Easy access from I-35E, Vista Ridge Mall area
                  </p>
                </address>

                <a
                  href={`tel:${lewisvilleLocation.phoneClean}`}
                  className="block text-accent-red hover:text-deep-indigo transition-colors font-semibold mb-6"
                >
                  {lewisvilleLocation.phone}
                </a>

                <div className=&quot;space-y-3 mb-6&quot;>
                  <div>
                    <p className=&quot;text-sm font-semibold text-charcoal/60 mb-1&quot;>LUNCH</p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Mon-Fri:</span> {lewisvilleLocation.hours.lunch.weekday.display}
                    </p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Sat-Sun:</span> {lewisvilleLocation.hours.lunch.weekend.display}
                    </p>
                  </div>
                  <div>
                    <p className=&quot;text-sm font-semibold text-charcoal/60 mb-1&quot;>DINNER</p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Sun-Thu:</span> {lewisvilleLocation.hours.dinner.sunThurs.display}
                    </p>
                    <p className=&quot;text-charcoal&quot;>
                      <span className=&quot;font-medium&quot;>Fri-Sat:</span> {lewisvilleLocation.hours.dinner.friSat.display}
                    </p>
                  </div>
                </div>

                <Link
                  href="/lewisville"
                  className="btn btn-primary w-full mb-3"
                >
                  View Full Details
                </Link>
                <a
                  href={lewisvilleLocation.reservation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  Reserve at Lewisville
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className=&quot;py-16 bg-charcoal text-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6 text-center&quot;>
            <h2 className=&quot;font-heading text-3xl font-bold mb-6&quot;>
              What We Offer
            </h2>
            <p className=&quot;text-warm-ivory/80 max-w-3xl mx-auto mb-12&quot;>
              From our skilled teppanyaki chefs to our fresh sushi bar, every experience at Jinbeh is crafted to exceed expectations. We combine authentic Japanese traditions with exceptional hospitality.
            </p>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto&quot;>
              <div className=&quot;p-6 bg-charcoal border border-warm-ivory/20 rounded-xl&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🔪</div>
                <h3 className=&quot;font-heading text-lg font-semibold mb-2&quot;>
                  Hibachi Tableside
                </h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Watch skilled chefs grill your meal with impressive knife skills and exciting showmanship.
                </p>
              </div>

              <div className=&quot;p-6 bg-charcoal border border-warm-ivory/20 rounded-xl&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🍣</div>
                <h3 className=&quot;font-heading text-lg font-semibold mb-2&quot;>
                  Sushi & Sashimi
                </h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Premium rolls, nigiri, and sashimi prepared fresh by master sushi chefs daily.
                </p>
              </div>

              <div className=&quot;p-6 bg-charcoal border border-warm-ivory/20 rounded-xl&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🍶</div>
                <h3 className=&quot;font-heading text-lg font-semibold mb-2&quot;>
                  Premium Sake
                </h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Curated selection of sake, wines, and craft cocktails to complement your meal.
                </p>
              </div>

              <div className=&quot;p-6 bg-charcoal border border-warm-ivory/20 rounded-xl&quot;>
                <div className=&quot;text-4xl mb-4&quot;>🎂</div>
                <h3 className=&quot;font-heading text-lg font-semibold mb-2&quot;>
                  Special Events
                </h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Perfect for birthdays, anniversaries, celebrations, and corporate events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className=&quot;py-16 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <h2 className=&quot;font-heading text-3xl font-bold text-charcoal text-center mb-12&quot;>
              Frequently Asked Questions
            </h2>
            <div className=&quot;max-w-3xl mx-auto space-y-4&quot;>
              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>How far is Jinbeh from downtown Plano?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  Jinbeh Frisco is just 12 minutes from downtown Plano (approximately 7.2 miles), making it the closest premium hibachi and sushi restaurant for Plano residents. Jinbeh Lewisville is an alternative option about 15 minutes away.
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>Do you take reservations from Plano?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  Absolutely! You can reserve online through OpenTable or call us directly. We recommend reservations, especially for dinner and weekends. Call Frisco at (214) 619-1200 or Lewisville at (214) 488-2224.
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>Is hibachi good for family celebrations?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  Yes! Hibachi is perfect for birthdays, anniversaries, and family celebrations. Kids especially love watching the chefs perform tricks like the famous onion volcano. Our staff creates a festive atmosphere that makes every celebration memorable.
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>What makes Jinbeh different from other Japanese restaurants?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  Jinbeh combines nearly 40 years of family tradition with authentic Japanese cuisine, skilled teppanyaki chefs, a fresh sushi bar, and a commitment to exceptional service. We&apos;re not just a restaurant—we&apos;re an experience that creates lasting memories.
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>Do you offer private dining for corporate events?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  Yes! We offer private hibachi dining perfect for team building, client entertainment, and corporate celebrations. Contact us to discuss your event requirements and customize the perfect experience.
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>What are your lunch and dinner hours?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  <strong>Frisco Lunch:</strong> Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm<br />
                  <strong>Frisco Dinner:</strong> Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm<br />
                  <strong>Lewisville Lunch:</strong> Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm<br />
                  <strong>Lewisville Dinner:</strong> Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>Is there a hibachi restaurant near Plano?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  Yes! Jinbeh is the premier hibachi restaurant near Plano, located in Frisco just 12 minutes away. We offer authentic teppanyaki hibachi experiences with skilled chefs performing exciting tableside shows.
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>Does Jinbeh have locations in Plano?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  Jinbeh currently has locations in Frisco (12 minutes from Plano) and Lewisville (15 minutes from Plano). While we don&apos;t have a location in Plano itself, our Frisco location near Legacy West is your closest option for hibachi and sushi.
                </p>
              </details>

              <details className=&quot;group border border-charcoal/20 rounded-lg p-6 cursor-pointer hover:border-accent-red transition-colors&quot;>
                <summary className=&quot;flex items-center justify-between font-semibold text-charcoal&quot;>
                  <span>Does Jinbeh deliver to Plano?</span>
                  <svg className=&quot;w-5 h-5 text-accent-red group-open:rotate-180 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                  </svg>
                </summary>
                <p className=&quot;text-charcoal/70 mt-4&quot;>
                  We offer takeout service from both our Frisco and Lewisville locations. For delivery options to Plano, please call us directly at (214) 619-1200 (Frisco) or (214) 488-2224 (Lewisville) to inquire about current delivery availability.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-16 bg-deep-indigo text-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6 text-center&quot;>
            <h2 className=&quot;font-heading text-3xl font-bold mb-6&quot;>
              Ready to Experience Jinbeh?
            </h2>
            <p className=&quot;text-warm-ivory/80 max-w-2xl mx-auto mb-8&quot;>
              Just 12 minutes from downtown Plano. Reserve your table today and discover why Plano residents love Jinbeh for hibachi, sushi, and unforgettable dining experiences.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href={friscoLocation.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-shimmer"
              >
                Reserve at Frisco Now
              </a>
              <a
                href={lewisvilleLocation.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-deep-indigo"
              >
                Reserve at Lewisville
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className=&quot;py-16 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <h2 className=&quot;font-heading text-3xl font-bold text-charcoal text-center mb-12&quot;>
              Explore More
            </h2>
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto&quot;>
              <Link
                href="/frisco/menu"
                className="card text-center hover:border-accent-red"
              >
                <span className=&quot;text-3xl mb-2 block&quot;>📖</span>
                <span className=&quot;font-medium text-charcoal&quot;>Frisco Menu</span>
              </Link>
              <Link
                href="/lewisville/menu"
                className="card text-center hover:border-accent-red"
              >
                <span className=&quot;text-3xl mb-2 block&quot;>📋</span>
                <span className=&quot;font-medium text-charcoal&quot;>Lewisville Menu</span>
              </Link>
              <Link
                href="/celebrations"
                className="card text-center hover:border-accent-red"
              >
                <span className=&quot;text-3xl mb-2 block&quot;>🎉</span>
                <span className=&quot;font-medium text-charcoal&quot;>Celebrations</span>
              </Link>
              <Link
                href="/happy-hour"
                className="card text-center hover:border-accent-red"
              >
                <span className=&quot;text-3xl mb-2 block&quot;>🍹</span>
                <span className=&quot;font-medium text-charcoal&quot;>Happy Hour</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className=&quot;sticky-cta-mobile&quot;>
          <a
            href={friscoLocation.reservation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1"
          >
            Reserve Table
          </a>
          <a
            href={`tel:${friscoLocation.phoneClean}`}
            className="btn btn-secondary flex-1"
          >
            Call Now
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
