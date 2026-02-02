import type { Metadata } from &quot;next&quot;;
import Header from &quot;@/components/Header&quot;;
import Footer from &quot;@/components/Footer&quot;;
import Image from &quot;next/image&quot;;
import Link from &quot;next/link&quot;;

export const metadata: Metadata = {
  title: "Graduation Party Restaurants | Jinbeh Japanese Restaurant | Frisco TX",
  description:
    "Celebrate your graduate's achievement at Jinbeh! Graduation party packages, hibachi entertainment, group seating for 10-100+ guests. Book your graduation dinner in Frisco or Lewisville TX.",
  keywords: [
    "graduation party restaurants frisco",
    "graduation dinner venue",
    "graduation celebration restaurant",
    "graduation catering frisco",
    "graduation party ideas",
    "hibachi graduation party",
    "graduation dinner group",
    "graduation venue near me",
    "graduation event restaurant tx",
    "group dining frisco",
  ],
  openGraph: {
    title: "Graduation Party Restaurants | Jinbeh Japanese Restaurant",
    description: "Celebrate your graduate's achievement with hibachi entertainment and group dining at Jinbeh!",
    url: "https://jinbeh.com/celebrations/graduation",
  },
  alternates: {
    canonical: "https://jinbeh.com/celebrations/graduation",
  },
};

// FAQ Schema
const faqSchema = {
  &quot;@context&quot;: "https://schema.org",
  &quot;@type&quot;: "FAQPage",
  &quot;mainEntity&quot;: [
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "Is Jinbeh good for graduation parties?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "Absolutely! Jinbeh is perfect for graduation celebrations. Our hibachi entertainment, communal seating, and group-friendly atmosphere make it ideal for celebrating your graduate's achievement. We can accommodate groups from 10 to 100+ guests with advance notice.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "What size graduation parties can Jinbeh accommodate?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "We offer three graduation party packages: Small Gatherings (up to 10 guests), Large Parties (10-30 guests), and Full Celebrations (30+ guests). Both our Frisco and Lewisville locations can accommodate groups of all sizes with proper reservations.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "Can I customize the menu for a graduation party?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "Yes! We offer customizable menus for graduation parties. From hibachi dinners to fresh sushi platters, we can create options that match your group&apos;s preferences and budget. Contact us directly for custom menu planning.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "Do you offer graduation party catering?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "Yes! We offer catering services for graduation celebrations. Our catering team can work with you to create the perfect menu and delivery options for your event. Call us for catering inquiries and pricing.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "How far in advance should I book a graduation party?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "We recommend booking graduation parties at least 2-4 weeks in advance, especially for larger groups (20+). This ensures we can accommodate your group size and preferences. During peak graduation season, earlier booking is highly recommended.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "What makes hibachi perfect for a graduation celebration?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "Hibachi offers interactive entertainment, communal dining that brings groups together, and a memorable experience. The live cooking show keeps everyone engaged and entertained while enjoying delicious food—perfect for celebrating an important milestone!",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "Is Jinbeh good for graduation dinners?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "Absolutely! Jinbeh is an excellent choice for graduation dinners. We provide private dining areas for groups of 20+ guests, fully customizable menus to match your celebration, and the entertainment of our hibachi chefs who create a festive, memorable atmosphere for your graduate and family.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "Can Jinbeh accommodate large graduation parties?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "Yes! We specialize in large graduation parties. We can accommodate 10 to 200+ guests with advance reservations. We offer multiple hibachi tables and private areas so your group can celebrate together, and our team coordinates seating arrangements and timing for larger groups.",
      },
    },
    {
      &quot;@type&quot;: "Question",
      &quot;name&quot;: "What should I order for a graduation celebration?",
      &quot;acceptedAnswer&quot;: {
        &quot;@type&quot;: "Answer",
        &quot;text&quot;: "For graduation celebrations, our hibachi dinner show is the perfect choice—it combines premium entrees (filet mignon, chicken, shrimp, lobster, or combinations), soup, salad, rice, and tableside chef entertainment. You can also add group sushi platters or customize the menu based on your guests' preferences and dietary needs.",
      },
    },
  ],
};

const graduationFeatures = [
  {
    icon: (
      <svg className=&quot;w-8 h-8&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={1.5} d=&quot;M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
      </svg>
    ),
    title: "Live Entertainment",
    description: "Hibachi chefs perform tableside with flames, tricks, and theatrical cooking—guaranteed to impress!",
  },
  {
    icon: (
      <svg className=&quot;w-8 h-8&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={1.5} d=&quot;M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z&quot; />
      </svg>
    ),
    title: "Communal Seating",
    description: "Hibachi tables seat 8-10 guests together, creating the perfect environment for groups to celebrate together.",
  },
  {
    icon: (
      <svg className=&quot;w-8 h-8&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={1.5} d=&quot;M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot; />
      </svg>
    ),
    title: "Flexible Budgets",
    description: "Packages starting at budget-friendly prices with premium options available for larger celebrations.",
  },
  {
    icon: (
      <svg className=&quot;w-8 h-8&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={1.5} d=&quot;M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z&quot; />
      </svg>
    ),
    title: "Unforgettable Memories",
    description: "The combination of great food, entertainment, and celebration creates moments your graduate won&apos;t forget!",
  },
];

const packages = [
  {
    name: "Small Gathering",
    size: "Up to 10 Guests",
    price: "Starting at $29/person",
    description: "Perfect for intimate celebrations with close family and friends.",
    features: [
      "Communal hibachi table seating",
      "Chef entertainment for the whole group",
      "Choice of hibachi entrees (filet, chicken, shrimp, lobster, or combo)",
      "Soup, salad, and rice included",
      "Sake or beverage options available",
      "Complimentary special touches for the graduate",
    ],
    highlight: false,
  },
  {
    name: "Large Party",
    size: "10-30 Guests",
    price: "Starting at $34/person",
    description: "Ideal for graduating classes, extended family, and friend groups.",
    features: [
      "Multiple hibachi tables with dedicated chefs",
      "Full entertainment experience at each table",
      "Premium entree selection",
      "Soup, salad, and rice included",
      "Group sushi platters available",
      "Customizable menu options",
      "Special seating arrangement coordination",
      "Reserved table time for your group",
    ],
    highlight: true,
  },
  {
    name: "Full Celebration",
    size: "30+ Guests",
    price: "Custom Pricing",
    description: "Large-scale graduation celebrations with complete customization.",
    features: [
      "Multiple dedicated hibachi chefs",
      "Private or semi-private dining area when available",
      "Fully customizable menu",
      "Premium sake and cocktail selections",
      "Catering options including delivery",
      "Event coordinator to plan every detail",
      "Professional photography arrangement coordination",
      "Special graduate recognition ceremony",
      "Flexible pricing based on your specifications",
    ],
    highlight: false,
  },
];

const planningTips = [
  {
    number: "1",
    title: "Book Early",
    description: "Schedule your graduation party 2-4 weeks in advance, especially during peak graduation season (May-June). This ensures the best seating and timing options.",
  },
  {
    number: "2",
    title: "Choose Your Package",
    description: "Select Small, Large, or Full Celebration package based on your guest count. Unsure? Call us and we&apos;ll help you determine the perfect fit.",
  },
  {
    number: "3",
    title: "Customize the Menu",
    description: "Let us know about dietary preferences, favorite cuisines, or specialty requests. Our chefs love creating customized menus for celebrations.",
  },
  {
    number: "4",
    title: "Plan the Details",
    description: "Decide on timing, any special touches for the graduate, group photos, or catering options. Our team coordinates everything.",
  },
  {
    number: "5",
    title: "Arrive Early",
    description: "Come 10-15 minutes before your reservation to ensure everyone is seated and ready when the hibachi show begins.",
  },
  {
    number: "6",
    title: "Enjoy the Celebration",
    description: "Sit back, relax, and watch our chefs create an unforgettable experience. Your graduate will thank you!",
  },
];

export default function GraduationPage() {
  return (
    <>
      <Header />
      <main className=&quot;min-h-screen&quot;>
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className=&quot;relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden&quot;>
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
          <div className=&quot;absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70&quot; />
          <div className=&quot;relative z-10 text-center text-white px-6 max-w-4xl mx-auto&quot;>
            <p className=&quot;text-soft-gold font-medium tracking-wider uppercase mb-4&quot;>
              A Milestone Worth Celebrating
            </p>
            <h1 className=&quot;text-4xl md:text-6xl font-heading font-bold mb-6&quot;>
              Celebrate Your Graduate&apos;s Achievement at Jinbeh
            </h1>
            <p className=&quot;text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8&quot;>
              Graduation parties with hibachi entertainment, group seating for all your guests, and unforgettable memories. It&apos;s dinner and a show!
            </p>
            <Link
              href="#packages"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Explore Party Packages
              <svg className=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 8l4 4m0 0l-4 4m4-4H3&quot; />
              </svg>
            </Link>
          </div>
        </section>

        {/* Why Hibachi for Graduation */}
        <section className=&quot;py-20 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4&quot;>
                Why Hibachi for Graduation Celebrations?
              </h2>
              <p className=&quot;text-lg text-charcoal/70 max-w-2xl mx-auto&quot;>
                More than just a meal – it&apos;s an experience that brings everyone together to celebrate an important milestone.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto&quot;>
              {graduationFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className=&quot;w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center text-accent-red&quot;>
                    {feature.icon}
                  </div>
                  <h3 className=&quot;font-heading text-xl font-semibold text-charcoal mb-3&quot;>
                    {feature.title}
                  </h3>
                  <p className=&quot;text-charcoal/70 text-sm&quot;>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Graduation Packages */}
        <section id=&quot;packages&quot; className=&quot;py-20 bg-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4&quot;>
                Graduation Party Packages
              </h2>
              <p className=&quot;text-lg text-charcoal/70 max-w-2xl mx-auto&quot;>
                Whether you&apos;re celebrating with 10 close friends or 100+ family members, we have the perfect package for your graduate.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;>
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    pkg.highlight
                      ? "ring-2 ring-accent-red scale-105 md:scale-100 bg-gradient-to-br from-white to-warm-ivory"
                      : "bg-white"
                  }`}
                >
                  {pkg.highlight && (
                    <div className=&quot;bg-accent-red text-white py-3 px-6 text-center font-semibold&quot;>
                      Most Popular
                    </div>
                  )}
                  <div className=&quot;p-8&quot;>
                    <h3 className=&quot;font-heading text-2xl font-bold text-charcoal mb-2&quot;>
                      {pkg.name}
                    </h3>
                    <p className=&quot;text-sm text-charcoal/60 mb-4&quot;>{pkg.size}</p>
                    <p className=&quot;text-3xl font-bold text-accent-red mb-2&quot;>{pkg.price}</p>
                    <p className=&quot;text-charcoal/70 text-sm mb-8&quot;>{pkg.description}</p>

                    <ul className=&quot;space-y-3 mb-8&quot;>
                      {pkg.features.map((feature) => (
                        <li key={feature} className=&quot;flex items-start gap-3 text-sm text-charcoal/80&quot;>
                          <svg className=&quot;w-5 h-5 text-accent-red flex-shrink-0 mt-0.5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                            <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={pkg.name === &quot;Full Celebration&quot; ? &quot;#reserve&quot; : "#reserve"}
                      className={`w-full py-3 rounded-lg font-semibold text-center transition-all inline-block ${
                        pkg.highlight
                          ? "bg-accent-red text-white hover:bg-accent-red/90"
                          : "bg-warm-ivory text-charcoal hover:bg-accent-red/10"
                      }`}
                    >
                      {pkg.name === &quot;Full Celebration&quot; ? &quot;Contact for Pricing&quot; : "Book This Package"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className=&quot;mt-12 p-8 bg-deep-indigo/5 border-2 border-deep-indigo/20 rounded-xl max-w-3xl mx-auto&quot;>
              <h3 className=&quot;font-heading text-xl font-bold text-charcoal mb-3&quot;>💡 Custom Groups?</h3>
              <p className=&quot;text-charcoal/80 mb-4&quot;>
                If your graduation party doesn&apos;t fit neatly into these packages, don&apos;t worry! We specialize in creating custom solutions for unique group sizes and requirements. Contact us directly to discuss your specific needs.
              </p>
              <p className=&quot;text-charcoal/70 text-sm&quot;>
                Frisco: (214) 619-1200 • Lewisville: (214) 488-2224
              </p>
            </div>
          </div>
        </section>

        {/* Graduation Party Planning */}
        <section className=&quot;py-20 bg-charcoal text-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold mb-4&quot;>
                How to Plan Your Graduation Party at Jinbeh
              </h2>
              <p className=&quot;text-warm-ivory/70 max-w-2xl mx-auto&quot;>
                Follow these simple steps to ensure your celebration is perfectly organized and unforgettable.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;>
              {planningTips.map((tip) => (
                <div key={tip.number} className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20&quot;>
                  <div className=&quot;w-12 h-12 rounded-full bg-accent-red text-white flex items-center justify-center font-heading text-xl font-bold mb-4&quot;>
                    {tip.number}
                  </div>
                  <h3 className=&quot;font-heading text-lg font-semibold mb-3&quot;>{tip.title}</h3>
                  <p className=&quot;text-warm-ivory/80 text-sm&quot;>{tip.description}</p>
                </div>
              ))}
            </div>

            <div className=&quot;mt-16 max-w-3xl mx-auto bg-gradient-to-r from-accent-red/20 to-deep-indigo/20 rounded-2xl p-8 border border-white/20&quot;>
              <h3 className=&quot;font-heading text-xl font-bold mb-4&quot;>Pro Tips for Success:</h3>
              <ul className=&quot;space-y-3 text-warm-ivory/90&quot;>
                <li className=&quot;flex gap-3&quot;>
                  <span className=&quot;text-accent-red text-lg&quot;>★</span>
                  <span><strong>Peak Season:</strong> May and June are busy graduation months – book 3-4 weeks in advance for guaranteed seating.</span>
                </li>
                <li className=&quot;flex gap-3&quot;>
                  <span className=&quot;text-accent-red text-lg&quot;>★</span>
                  <span><strong>Group Size:</strong> Hibachi tables seat 8-10 people, so plan your guest list accordingly for optimal table arrangements.</span>
                </li>
                <li className=&quot;flex gap-3&quot;>
                  <span className=&quot;text-accent-red text-lg&quot;>★</span>
                  <span><strong>Dietary Needs:</strong> Let us know about allergies or dietary preferences when booking – our chefs accommodate all requests!</span>
                </li>
                <li className=&quot;flex gap-3&quot;>
                  <span className=&quot;text-accent-red text-lg&quot;>★</span>
                  <span><strong>Special Requests:</strong> Graduate entrance, photos, or custom menu items? Just ask – we love making celebrations extra special.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What&apos;s Included Section */}
        <section className=&quot;py-20 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl&quot;>
                  <Image
                    src="/images/food/hibachi-grill.jpg"
                    alt="Hibachi chef performing at graduation celebration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className=&quot;absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-soft-gold/20&quot; />
              </div>

              <div>
                <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6&quot;>
                  The Jinbeh Graduation Experience
                </h2>
                <div className=&quot;space-y-6 text-charcoal/80 leading-relaxed&quot;>
                  <p>
                    Your graduate and guests arrive at Jinbeh, greeted warmly and seated together at dedicated hibachi tables. As the chef takes the stage, the energy builds – flames leap, knives dance through the air, and vegetables sizzle on a 400-degree flat-top grill right in front of everyone.
                  </p>
                  <p>
                    The famous onion volcano erupts to cheers and applause. Your guests don&apos;t just eat – they experience a performance that they&apos;ll talk about for years. Meanwhile, premium entrees are prepared tableside, perfectly seared and flavorful.
                  </p>
                  <p className=&quot;font-medium text-charcoal&quot;>
                    Between courses, there&apos;s time for conversation, laughter, and celebration. By the end of the meal, everyone leaves with full bellies, happy hearts, and unforgettable memories of a milestone moment.
                  </p>

                  <div className=&quot;pt-4&quot;>
                    <h3 className=&quot;font-semibold text-charcoal mb-4&quot;>Every Package Includes:</h3>
                    <ul className=&quot;space-y-2 text-sm text-charcoal/80&quot;>
                      <li className=&quot;flex gap-2&quot;>
                        <svg className=&quot;w-5 h-5 text-accent-red flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                          <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                        </svg>
                        <span>Hibachi chef entertainment</span>
                      </li>
                      <li className=&quot;flex gap-2&quot;>
                        <svg className=&quot;w-5 h-5 text-accent-red flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                          <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                        </svg>
                        <span>Choice of premium entrees</span>
                      </li>
                      <li className=&quot;flex gap-2&quot;>
                        <svg className=&quot;w-5 h-5 text-accent-red flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                          <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                        </svg>
                        <span>Soup, salad, and rice</span>
                      </li>
                      <li className=&quot;flex gap-2&quot;>
                        <svg className=&quot;w-5 h-5 text-accent-red flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                          <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                        </svg>
                        <span>Beverage options available</span>
                      </li>
                      <li className=&quot;flex gap-2&quot;>
                        <svg className=&quot;w-5 h-5 text-accent-red flex-shrink-0&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot;>
                          <path fillRule=&quot;evenodd&quot; d=&quot;M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z&quot; clipRule=&quot;evenodd&quot; />
                        </svg>
                        <span>Special recognition for your graduate</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className=&quot;py-20 bg-charcoal text-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold mb-4&quot;>
                Graduation Party Menu Options
              </h2>
              <p className=&quot;text-warm-ivory/70 max-w-2xl mx-auto&quot;>
                Premium selections for every taste and dietary preference.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12&quot;>
              <div className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20&quot;>
                <div className=&quot;text-5xl mb-4&quot;>🔥</div>
                <h3 className=&quot;font-heading text-xl font-semibold mb-3&quot;>Hibachi Filet Mignon</h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Premium beef tenderloin cooked to perfection with the chef&apos;s special flair.
                </p>
              </div>

              <div className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20&quot;>
                <div className=&quot;text-5xl mb-4&quot;>🍗</div>
                <h3 className=&quot;font-heading text-xl font-semibold mb-3&quot;>Hibachi Chicken</h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Tender, juicy chicken breast with vegetables and the chef&apos;s signature sauce.
                </p>
              </div>

              <div className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20&quot;>
                <div className=&quot;text-5xl mb-4&quot;>🦐</div>
                <h3 className=&quot;font-heading text-xl font-semibold mb-3&quot;>Hibachi Shrimp & Lobster</h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Succulent seafood combinations for the ultimate hibachi experience.
                </p>
              </div>

              <div className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20&quot;>
                <div className=&quot;text-5xl mb-4&quot;>🍣</div>
                <h3 className=&quot;font-heading text-xl font-semibold mb-3&quot;>Sushi & Platters</h3>
                <p className=&quot;text-warm-ivory/70 text-sm&quot;>
                  Fresh sushi, rolls, and specialty platters for groups to share.
                </p>
              </div>
            </div>

            <div className=&quot;text-center&quot;>
              <Link
                href="/frisco/menu"
                className="inline-flex items-center gap-2 text-soft-gold hover:text-white transition-colors font-medium"
              >
                View Complete Menu
                <svg className=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 8l4 4m0 0l-4 4m4-4H3&quot; />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Catering & Group Options */}
        <section className=&quot;py-20 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto&quot;>
              <div>
                <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6&quot;>
                  Graduation Catering & Private Events
                </h2>
                <p className=&quot;text-lg text-charcoal/70 mb-6&quot;>
                  Need something different? We offer full catering services, private dining arrangements, and custom event planning for graduations.
                </p>

                <div className=&quot;space-y-4 mb-8&quot;>
                  <div className=&quot;flex gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0 text-accent-red font-bold&quot;>
                      ✓
                    </div>
                    <div>
                      <h3 className=&quot;font-semibold text-charcoal mb-1&quot;>Full Catering Services</h3>
                      <p className=&quot;text-charcoal/70 text-sm&quot;>
                        From small to large-scale events, we can bring Jinbeh quality to your location.
                      </p>
                    </div>
                  </div>

                  <div className=&quot;flex gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-deep-indigo/10 rounded-lg flex items-center justify-center flex-shrink-0 text-deep-indigo font-bold&quot;>
                      ✓
                    </div>
                    <div>
                      <h3 className=&quot;font-semibold text-charcoal mb-1&quot;>Private Dining Spaces</h3>
                      <p className=&quot;text-charcoal/70 text-sm&quot;>
                        When available, we can reserve semi-private areas for your group&apos;s special celebration.
                      </p>
                    </div>
                  </div>

                  <div className=&quot;flex gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-soft-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 text-charcoal font-bold&quot;>
                      ✓
                    </div>
                    <div>
                      <h3 className=&quot;font-semibold text-charcoal mb-1&quot;>Custom Menu Planning</h3>
                      <p className=&quot;text-charcoal/70 text-sm&quot;>
                        Work with our culinary team to design the perfect menu for your graduation party.
                      </p>
                    </div>
                  </div>

                  <div className=&quot;flex gap-4&quot;>
                    <div className=&quot;w-12 h-12 bg-accent-red/10 rounded-lg flex items-center justify-center flex-shrink-0 text-accent-red font-bold&quot;>
                      ✓
                    </div>
                    <div>
                      <h3 className=&quot;font-semibold text-charcoal mb-1&quot;>Event Coordination</h3>
                      <p className=&quot;text-charcoal/70 text-sm&quot;>
                        Our team handles all the details so you can focus on celebrating your graduate.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/catering"
                  className="inline-flex items-center gap-2 text-accent-red hover:text-accent-red/80 font-medium transition-colors"
                >
                  Learn More About Catering
                  <svg className=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 8l4 4m0 0l-4 4m4-4H3&quot; />
                  </svg>
                </Link>
              </div>

              <div className=&quot;relative&quot;>
                <div className=&quot;relative aspect-square rounded-2xl overflow-hidden shadow-2xl&quot;>
                  <Image
                    src="/images/food/jinbeh_group.jpg"
                    alt="Graduation party celebration at hibachi table"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className=&quot;absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-accent-red/10&quot; />
              </div>
            </div>
          </div>
        </section>

        {/* Reserve Section */}
        <section id=&quot;reserve&quot; className=&quot;py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white&quot;>
          <div className=&quot;container mx-auto px-6 text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold mb-6&quot;>
              Book Your Graduation Celebration
            </h2>
            <p className=&quot;text-xl text-white/90 max-w-2xl mx-auto mb-4&quot;>
              Make a reservation and let us create an unforgettable experience for your graduate and guests.
            </p>
            <p className=&quot;text-white/80 mb-10&quot;>
              Available at both our Frisco and Lewisville locations
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-8&quot;>
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

            <div className=&quot;mt-10 pt-10 border-t border-white/30&quot;>
              <h3 className=&quot;font-semibold mb-4&quot;>Call for Large Groups or Special Arrangements</h3>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center text-white/90&quot;>
                <div>
                  <p className=&quot;font-medium&quot;>Frisco Location</p>
                  <p className=&quot;text-lg text-soft-gold&quot;>(214) 619-1200</p>
                </div>
                <div className=&quot;hidden sm:block text-white/50&quot;>•</div>
                <div>
                  <p className=&quot;font-medium&quot;>Lewisville Location</p>
                  <p className=&quot;text-lg text-soft-gold&quot;>(214) 488-2224</p>
                </div>
              </div>
              <p className=&quot;text-white/70 text-sm mt-4&quot;>
                Parties of 20+ recommended for direct call to ensure perfect seating arrangements
              </p>
            </div>
          </div>
        </section>

        {/* Other Celebrations & Links */}
        <section className=&quot;py-16 bg-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-2xl font-heading font-bold text-charcoal mb-4&quot;>
                Celebrate Other Milestones at Jinbeh
              </h2>
              <p className=&quot;text-charcoal/70&quot;>
                Every special moment deserves a celebration with dinner and a show.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12&quot;>
              <Link
                href="/celebrations/birthday"
                className="group p-8 rounded-2xl bg-warm-ivory border-2 border-transparent hover:border-accent-red transition-all text-center"
              >
                <div className=&quot;text-4xl mb-4&quot;>🎂</div>
                <h3 className=&quot;font-heading text-lg font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2&quot;>
                  Birthday Parties
                </h3>
                <p className=&quot;text-charcoal/70 text-sm mb-4&quot;>
                  Celebrate every age with hibachi entertainment and unforgettable moments.
                </p>
                <span className=&quot;inline-flex items-center gap-2 text-accent-red font-medium text-sm&quot;>
                  Learn More
                  <svg className=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 8l4 4m0 0l-4 4m4-4H3&quot; />
                  </svg>
                </span>
              </Link>

              <Link
                href="/celebrations/anniversary"
                className="group p-8 rounded-2xl bg-warm-ivory border-2 border-transparent hover:border-deep-indigo transition-all text-center"
              >
                <div className=&quot;text-4xl mb-4&quot;>💕</div>
                <h3 className=&quot;font-heading text-lg font-bold text-charcoal group-hover:text-deep-indigo transition-colors mb-2&quot;>
                  Anniversary Dinners
                </h3>
                <p className=&quot;text-charcoal/70 text-sm mb-4&quot;>
                  Celebrate your love with an intimate, memorable dining experience.
                </p>
                <span className=&quot;inline-flex items-center gap-2 text-deep-indigo font-medium text-sm&quot;>
                  Learn More
                  <svg className=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 8l4 4m0 0l-4 4m4-4H3&quot; />
                  </svg>
                </span>
              </Link>

              <Link
                href="/celebrations"
                className="group p-8 rounded-2xl bg-warm-ivory border-2 border-transparent hover:border-soft-gold transition-all text-center"
              >
                <div className=&quot;text-4xl mb-4&quot;>🎉</div>
                <h3 className=&quot;font-heading text-lg font-bold text-charcoal group-hover:text-soft-gold transition-colors mb-2&quot;>
                  All Celebrations
                </h3>
                <p className=&quot;text-charcoal/70 text-sm mb-4&quot;>
                  From corporate events to family gatherings, celebrate with us.
                </p>
                <span className=&quot;inline-flex items-center gap-2 text-soft-gold font-medium text-sm&quot;>
                  Explore More
                  <svg className=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M17 8l4 4m0 0l-4 4m4-4H3&quot; />
                  </svg>
                </span>
              </Link>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto&quot;>
              <Link
                href="/catering"
                className="p-6 rounded-xl bg-charcoal text-white text-center hover:bg-deep-indigo transition-colors group"
              >
                <h3 className=&quot;font-heading font-bold mb-2 group-hover:text-soft-gold transition-colors&quot;>
                  Graduation Catering
                </h3>
                <p className=&quot;text-white/80 text-sm&quot;>
                  Full catering services for your off-site celebration.
                </p>
              </Link>

              <Link
                href="/frisco"
                className="p-6 rounded-xl bg-charcoal text-white text-center hover:bg-accent-red transition-colors group"
              >
                <h3 className=&quot;font-heading font-bold mb-2 group-hover:text-white transition-colors&quot;>
                  Visit Our Locations
                </h3>
                <p className=&quot;text-white/80 text-sm&quot;>
                  Frisco & Lewisville - Find hours, menus & directions.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className=&quot;py-16 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;max-w-2xl mx-auto&quot;>
              <h2 className=&quot;text-2xl font-heading font-bold text-charcoal mb-8 text-center&quot;>
                Frequently Asked Questions
              </h2>

              <div className=&quot;space-y-4&quot;>
                {[
                  {
                    q: "How far in advance should I book?",
                    a: "We recommend booking 2-4 weeks in advance, especially during peak graduation season (May-June). Larger groups (20+) should book even earlier.",
                  },
                  {
                    q: "Can I customize the menu?",
                    a: "Absolutely! We offer fully customizable menus for graduation parties. Let us know about dietary preferences, allergies, or special requests.",
                  },
                  {
                    q: "What about large groups?",
                    a: "We specialize in large groups! From 10 to 100+ guests, we can accommodate your celebration. Each hibachi table seats 8-10 people comfortably.",
                  },
                  {
                    q: "Do you offer catering?",
                    a: "Yes! We offer full catering services for graduation parties. Contact us directly for catering inquiries and pricing.",
                  },
                ].map((item, idx) => (
                  <details key={idx} className=&quot;group border-b border-charcoal/20 pb-4&quot;>
                    <summary className=&quot;font-semibold text-charcoal cursor-pointer flex justify-between items-center hover:text-accent-red transition-colors&quot;>
                      {item.q}
                      <svg className=&quot;w-5 h-5 transition-transform group-open:rotate-180&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 14l-7 7m0 0l-7-7m7 7V3&quot; />
                      </svg>
                    </summary>
                    <p className=&quot;text-charcoal/70 mt-3&quot;>{item.a}</p>
                  </details>
                ))}
              </div>

              <p className=&quot;text-center text-charcoal/70 text-sm mt-8&quot;>
                Have other questions? <Link href=&quot;/contact&quot; className=&quot;text-accent-red hover:underline font-medium&quot;>Contact us</Link> or call us directly!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
