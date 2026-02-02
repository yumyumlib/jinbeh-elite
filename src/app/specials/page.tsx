import type { Metadata } from &quot;next&quot;;
import Header from &quot;@/components/Header&quot;;
import Footer from &quot;@/components/Footer&quot;;
import Image from &quot;next/image&quot;;
import Link from &quot;next/link&quot;;
import locations from &quot;@/data/locations.json&quot;;

export const metadata: Metadata = {
  title: "Specials & Promotions | Jinbeh Japanese Restaurant | Frisco & Lewisville TX",
  description:
    "Explore amazing specials at Jinbeh! Happy Hour deals, lunch specials, weekly promotions, and seasonal offers at our Frisco and Lewisville Japanese restaurants.",
  keywords: [
    "specials",
    "promotions",
    "deals",
    "happy hour",
    "lunch specials",
    "japanese restaurant specials",
    "frisco specials",
    "lewisville specials",
    "restaurant deals",
    "dining specials",
  ],
  openGraph: {
    title: "Specials & Promotions | Jinbeh Japanese Restaurant",
    description:
      "Amazing deals on sushi, hibachi, and Japanese cuisine. Happy Hour, lunch specials, and weekly promotions.",
    url: "https://jinbeh.com/specials",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/specials",
  },
};

// JSON-LD Schema for Offers
const offersSchema = {
  &quot;@context&quot;: "https://schema.org",
  &quot;@type&quot;: "AggregateOffer",
  &quot;offers&quot;: [
    {
      &quot;@type&quot;: "Offer",
      &quot;name&quot;: "Happy Hour Specials",
      &quot;description&quot;: "$5 select appetizers, $5 select cocktails and sake, $3 domestic beers",
      &quot;price&quot;: "3.00",
      &quot;priceCurrency&quot;: "USD",
      &quot;availability&quot;: "Monday - Friday, 4:00 PM - 6:00 PM",
      &quot;url&quot;: "https://jinbeh.com/specials#happy-hour"
    },
    {
      &quot;@type&quot;: "Offer",
      &quot;name&quot;: "Lunch Specials",
      &quot;description&quot;: "Bento boxes from $12.95, hibachi lunch combos from $13.95, sushi lunch specials",
      &quot;price&quot;: "12.95",
      &quot;priceCurrency&quot;: "USD",
      &quot;availability&quot;: "Monday - Friday, 11:00 AM - 2:30 PM",
      &quot;url&quot;: "https://jinbeh.com/specials#lunch"
    },
    {
      &quot;@type&quot;: "Offer",
      &quot;name&quot;: "Weekly Specials",
      &quot;description&quot;: "Date Night Monday, Family Tuesday, Wine Wednesday, Sake Thursday",
      &quot;url&quot;: "https://jinbeh.com/specials#weekly"
    }
  ]
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const specialCategories = [
  {
    id: "happy-hour",
    icon: "🍸",
    title: "Happy Hour Specials",
    time: "Mon-Fri • 4:00 PM - 6:00 PM",
    description: "Unwind with discounted drinks and appetizers",
    color: "from-accent-red to-deep-indigo",
    href: "/specials#happy-hour",
  },
  {
    id: "lunch",
    icon: "🍱",
    title: "Lunch Specials",
    time: "Mon-Fri • 11:00 AM - 2:30 PM",
    description: "Affordable Japanese lunch entrees",
    color: "from-deep-indigo to-soft-gold",
    href: "/specials#lunch",
  },
  {
    id: "weekly",
    icon: "📅",
    title: "Weekly Specials",
    time: "Every Day of the Week",
    description: "Special promotions throughout the week",
    color: "from-soft-gold to-accent-red",
    href: "/specials#weekly",
  },
];

const weeklySpecials = [
  {
    day: "Monday",
    name: "Date Night Monday",
    emoji: "💑",
    description: "Special pricing for couples dining together",
    details: "Enjoy romantic dinner with exclusive partner deals",
  },
  {
    day: "Tuesday",
    name: "Family Tuesday",
    emoji: "👨‍👩‍👧‍👦",
    description: "Family-friendly specials and group discounts",
    details: "Bring the whole family and save on combo meals",
  },
  {
    day: "Wednesday",
    name: "Wine Wednesday",
    emoji: "🍷",
    description: "Special pricing on wine selections",
    details: "Pair our Japanese cuisine with curated wine specials",
  },
  {
    day: "Thursday",
    name: "Sake Thursday",
    emoji: "🍶",
    description: "Premium sake selections at special prices",
    details: "Explore hot and cold sake pairings with dinner",
  },
];

const happyHourItems = [
  {
    category: "Appetizers",
    items: ["Gyoza (Pan-Fried Dumplings)&quot;, &quot;Edamame&quot;, &quot;Spicy Tuna Crispy Rice"],
    price: "$5",
    emoji: "🥟",
  },
  {
    category: "Cocktails & Sake",
    items: ["Tokyo Mule&quot;, &quot;Select Premium Sake Glasses&quot;, &quot;Lychee Martini"],
    price: "$5",
    emoji: "🍸",
  },
  {
    category: "Beer Selection",
    items: ["Domestic Beer Pints&quot;, &quot;Japanese Beer Selections"],
    price: "$3",
    emoji: "🍺",
  },
];

const lunchHighlights = [
  {
    title: "Bento Boxes",
    price: "Starting at $12.95",
    description: "Assorted proteins with rice, vegetables, and sides",
    emoji: "🍱",
  },
  {
    title: "Hibachi Lunch Combos",
    price: "From $13.95",
    description: "Chef-cooked hibachi experience at lunch prices",
    emoji: "🔥",
  },
  {
    title: "Sushi Lunch Specials",
    price: "Varies",
    description: "Fresh rolls and nigiri combinations",
    emoji: "🍣",
  },
];

export default function SpecialsPage() {
  return (
    <>
      <Header />
      <main className=&quot;min-h-screen&quot;>
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
        />

        {/* Hero Section */}
        <section className=&quot;relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden&quot;>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: &quot;url('/images/food/SamaraiRollCloseup.jpg')&quot; }}
          />
          <div className=&quot;absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70&quot; />
          <div className=&quot;relative z-10 text-center text-white px-6 max-w-4xl mx-auto&quot;>
            <p className=&quot;text-soft-gold font-medium tracking-wider uppercase mb-4 animate-pulse&quot;>
              Limited Time Offers
            </p>
            <h1 className=&quot;text-4xl md:text-6xl font-heading font-bold mb-6&quot;>
              Exclusive Specials & Deals
            </h1>
            <p className=&quot;text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8&quot;>
              Discover amazing discounts on your favorite Japanese cuisine.
              From happy hour to weekly specials, there&apos;s always something to celebrate.
            </p>
            <div className=&quot;inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl&quot;>
              Save Big Every Day
            </div>
          </div>
        </section>

        {/* Quick Navigation to Specials */}
        <section className=&quot;py-12 bg-gradient-to-r from-deep-indigo to-charcoal&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto&quot;>
              {specialCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.href}
                  className="group bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className=&quot;text-5xl mb-3 group-hover:scale-110 transition-transform&quot;>
                    {category.icon}
                  </div>
                  <h3 className=&quot;text-white font-heading text-xl font-bold mb-2&quot;>
                    {category.title}
                  </h3>
                  <p className=&quot;text-soft-gold text-sm mb-3 font-medium&quot;>
                    {category.time}
                  </p>
                  <p className=&quot;text-white/80 text-sm&quot;>
                    {category.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Happy Hour Section */}
        <section id=&quot;happy-hour&quot; className=&quot;py-20 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <p className=&quot;text-accent-red font-bold tracking-wider uppercase mb-2&quot;>
                🍸 Unwind After Work
              </p>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4&quot;>
                Happy Hour Specials
              </h2>
              <p className=&quot;text-lg text-charcoal/70 max-w-2xl mx-auto&quot;>
                Monday – Friday, 4:00 PM – 6:00 PM<br/>
                <span className=&quot;text-accent-red font-bold&quot;>Don't Miss Out!</span>
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12&quot;>
              {happyHourItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className=&quot;text-6xl mb-4 text-center&quot;>{item.emoji}</div>
                  <h3 className=&quot;font-heading text-2xl font-bold text-charcoal mb-2 text-center&quot;>
                    {item.category}
                  </h3>
                  <div className=&quot;bg-accent-red text-white py-3 px-4 rounded-xl text-center font-bold text-xl mb-6&quot;>
                    {item.price}
                  </div>
                  <ul className=&quot;space-y-2&quot;>
                    {item.items.map((food, i) => (
                      <li key={i} className=&quot;text-charcoal/80 text-sm flex items-start gap-2&quot;>
                        <span className=&quot;text-accent-red mt-1&quot;>✓</span>
                        {food}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className=&quot;max-w-4xl mx-auto bg-gradient-to-r from-accent-red/10 to-deep-indigo/10 rounded-2xl p-8 border border-accent-red/20&quot;>
              <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
                <div>
                  <h3 className=&quot;text-xl font-heading font-bold text-charcoal mb-4 flex items-center gap-2&quot;>
                    <span className=&quot;text-2xl&quot;>📍</span> Frisco Location
                  </h3>
                  <p className=&quot;text-charcoal/70 mb-4&quot;>
                    {frisco.address.street} {frisco.address.suite}<br/>
                    {frisco.address.city}, {frisco.address.state} {frisco.address.zip}
                  </p>
                  <a href={`tel:${frisco.phoneClean}`} className=&quot;inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors&quot;>
                    Call {frisco.phone}
                  </a>
                </div>
                <div>
                  <h3 className=&quot;text-xl font-heading font-bold text-charcoal mb-4 flex items-center gap-2&quot;>
                    <span className=&quot;text-2xl&quot;>📍</span> Lewisville Location
                  </h3>
                  <p className=&quot;text-charcoal/70 mb-4&quot;>
                    {lewisville.address.street} {lewisville.address.suite}<br/>
                    {lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}
                  </p>
                  <a href={`tel:${lewisville.phoneClean}`} className=&quot;inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors&quot;>
                    Call {lewisville.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lunch Specials Section */}
        <section id=&quot;lunch&quot; className=&quot;py-20 bg-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <p className=&quot;text-deep-indigo font-bold tracking-wider uppercase mb-2&quot;>
                🍱 Midday Deals
              </p>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4&quot;>
                Lunch Specials
              </h2>
              <p className=&quot;text-lg text-charcoal/70 max-w-2xl mx-auto&quot;>
                Monday – Friday, 11:00 AM – 2:30 PM<br/>
                Weekend 11:30 AM – 2:30 PM<br/>
                <span className=&quot;text-deep-indigo font-bold&quot;>Affordable Quality Cuisine</span>
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12&quot;>
              {lunchHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-warm-ivory rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all border border-deep-indigo/10"
                >
                  <div className=&quot;text-6xl mb-4 text-center&quot;>{item.emoji}</div>
                  <h3 className=&quot;font-heading text-xl font-bold text-charcoal mb-2 text-center&quot;>
                    {item.title}
                  </h3>
                  <div className=&quot;bg-deep-indigo text-white py-3 px-4 rounded-xl text-center font-bold mb-4&quot;>
                    {item.price}
                  </div>
                  <p className=&quot;text-charcoal/70 text-sm text-center&quot;>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className=&quot;text-center mb-12&quot;>
              <Link
                href="/lunch-specials"
                className="inline-block btn bg-deep-indigo text-white hover:bg-deep-indigo/90 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                View Full Lunch Menu →
              </Link>
            </div>
          </div>
        </section>

        {/* Weekly Specials Section */}
        <section id=&quot;weekly&quot; className=&quot;py-20 bg-charcoal text-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <p className=&quot;text-soft-gold font-bold tracking-wider uppercase mb-2&quot;>
                📅 Every Day's Special
              </p>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold mb-4&quot;>
                Weekly Specials
              </h2>
              <p className=&quot;text-lg text-white/80 max-w-2xl mx-auto&quot;>
                Unique promotions throughout the week. Plan your visit!
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto&quot;>
              {weeklySpecials.map((special, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-soft-gold/50 transition-all duration-300 group"
                >
                  <div className=&quot;text-6xl mb-4 group-hover:scale-110 transition-transform&quot;>
                    {special.emoji}
                  </div>
                  <p className=&quot;text-soft-gold font-bold text-sm uppercase tracking-wider mb-2&quot;>
                    {special.day}
                  </p>
                  <h3 className=&quot;text-2xl font-heading font-bold mb-2&quot;>
                    {special.name}
                  </h3>
                  <p className=&quot;text-white/80 text-sm mb-3&quot;>
                    {special.description}
                  </p>
                  <p className=&quot;text-white/60 text-xs italic&quot;>
                    {special.details}
                  </p>
                </div>
              ))}
            </div>

            <div className=&quot;text-center mt-16&quot;>
              <p className=&quot;text-white/70 text-lg max-w-2xl mx-auto mb-8&quot;>
                Check with your location for specific offers and promotions on each day.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Link
                  href="/frisco"
                  className="btn bg-soft-gold text-charcoal hover:bg-warm-ivory px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Frisco Details
                </Link>
                <Link
                  href="/lewisville"
                  className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Lewisville Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal/Holiday Specials */}
        <section className=&quot;py-20 bg-warm-ivory&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <p className=&quot;text-accent-red font-bold tracking-wider uppercase mb-2&quot;>
                🎉 Limited Time Offers
              </p>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4&quot;>
                Seasonal & Holiday Specials
              </h2>
              <p className=&quot;text-lg text-charcoal/70 max-w-2xl mx-auto&quot;>
                Check back for special promotions tied to holidays and seasons.
              </p>
            </div>

            <div className=&quot;max-w-4xl mx-auto&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                {[
                  { emoji: "🎄&quot;, label: &quot;Holiday Specials&quot;, desc: &quot;Coming Soon" },
                  { emoji: "🎊&quot;, label: &quot;Seasonal Offers&quot;, desc: &quot;Coming Soon" },
                  { emoji: "🎁&quot;, label: &quot;Party Packages&quot;, desc: &quot;Coming Soon" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-accent-red/20"
                  >
                    <div className=&quot;text-6xl mb-4&quot;>{item.emoji}</div>
                    <h3 className=&quot;font-heading text-xl font-bold text-charcoal mb-2&quot;>
                      {item.label}
                    </h3>
                    <p className=&quot;text-charcoal/60&quot;>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className=&quot;bg-gradient-to-r from-accent-red/20 to-deep-indigo/20 rounded-2xl p-8 text-center border-2 border-accent-red/30&quot;>
                <h3 className=&quot;text-xl font-heading font-bold text-charcoal mb-3&quot;>
                  Stay Updated on Special Offers
                </h3>
                <p className=&quot;text-charcoal/70 mb-6&quot;>
                  Subscribe to our newsletter to receive notifications about upcoming seasonal specials and exclusive promotions.
                </p>
                <div className=&quot;flex flex-col sm:flex-row gap-3 max-w-md mx-auto&quot;>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/30"
                  />
                  <button className=&quot;btn bg-accent-red text-white hover:bg-accent-red/90 px-8 py-3 rounded-xl font-bold transition-colors&quot;>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className=&quot;py-20 bg-gradient-to-br from-deep-indigo via-charcoal to-accent-red text-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;max-w-2xl mx-auto text-center&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold mb-6&quot;>
                Never Miss a Special
              </h2>
              <p className=&quot;text-xl text-white/90 mb-10&quot;>
                Get exclusive deals, early access to specials, and insider information delivered to your inbox.
              </p>
              <form className=&quot;flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6&quot;>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-0 text-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold/50"
                  required
                />
                <button
                  type="submit"
                  className="btn bg-soft-gold text-charcoal hover:bg-warm-ivory px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  Join Now
                </button>
              </form>
              <p className=&quot;text-white/70 text-sm&quot;>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Location Links */}
        <section className=&quot;py-20 bg-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4&quot;>
                Visit Our Locations
              </h2>
              <p className=&quot;text-lg text-charcoal/70&quot;>
                Both Frisco and Lewisville locations feature all current specials.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto&quot;>
              {/* Frisco */}
              <Link
                href="/frisco/specials"
                className="group bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className=&quot;relative h-48 overflow-hidden&quot;>
                  <Image
                    src="/images/catalog/5-C060324-6397.jpg"
                    alt="Jinbeh Frisco location"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className=&quot;p-8&quot;>
                  <h3 className=&quot;text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors&quot;>
                    Frisco Location
                  </h3>
                  <p className=&quot;text-charcoal/70 mb-4&quot;>
                    {frisco.address.street} {frisco.address.suite}<br/>
                    {frisco.address.city}, {frisco.address.state} {frisco.address.zip}
                  </p>
                  <div className=&quot;flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all&quot;>
                    <span>View Specials</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>

              {/* Lewisville */}
              <Link
                href="/lewisville/specials"
                className="group bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className=&quot;relative h-48 overflow-hidden&quot;>
                  <Image
                    src="/images/interior/JinbehFrisco_SushiBar.jpg"
                    alt="Jinbeh Lewisville location"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className=&quot;p-8&quot;>
                  <h3 className=&quot;text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors&quot;>
                    Lewisville Location
                  </h3>
                  <p className=&quot;text-charcoal/70 mb-4&quot;>
                    {lewisville.address.street} {lewisville.address.suite}<br/>
                    {lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}
                  </p>
                  <div className=&quot;flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all&quot;>
                    <span>View Specials</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Specials FAQ Section */}
        <section className=&quot;py-20 bg-white&quot;>
          <div className=&quot;container mx-auto px-6&quot;>
            <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4&quot;>
                Specials & Deals FAQ
              </h2>
              <p className=&quot;text-lg text-charcoal/70&quot;>
                Got questions about our happy hour, lunch deals, and weekly specials? Find answers here.
              </p>
            </div>

            <div className=&quot;max-w-3xl mx-auto space-y-4&quot;>
              {[
                {
                  q: "Does Jinbeh have happy hour?",
                  a: "Yes! We offer Happy Hour Monday through Friday, 4:00 PM - 6:00 PM. Enjoy $5 select appetizers, $5 select cocktails and sake, and $3 domestic beers. It&apos;s the perfect time to unwind after work.",
                },
                {
                  q: "What are Jinbeh&apos;s lunch specials?",
                  a: "We offer fantastic lunch specials Monday through Friday, 11:00 AM - 2:30 PM (weekends 11:30 AM - 2:30 PM). Choose from bento boxes starting at $12.95, hibachi lunch combos from $13.95, and fresh sushi lunch specials. All dishes are affordable without compromising quality.",
                },
                {
                  q: "When is happy hour at Jinbeh?",
                  a: "Happy Hour runs Monday through Friday from 4:00 PM to 6:00 PM. This is our weekday special time for drink deals, including $1 sake and discounted rolls. It&apos;s perfect for after-work gatherings and date night pre-dinner drinks.",
                },
              ].map((faq, i) => (
                <details key={i} className=&quot;bg-warm-ivory rounded-xl shadow-md overflow-hidden group&quot;>
                  <summary className=&quot;p-6 cursor-pointer font-semibold text-charcoal hover:bg-white transition-colors flex justify-between items-center&quot;>
                    {faq.q}
                    <span className=&quot;text-accent-red group-open:rotate-180 transition-transform&quot;>▼</span>
                  </summary>
                  <div className=&quot;px-6 pb-6 text-charcoal/70&quot;>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className=&quot;py-20 bg-gradient-to-r from-accent-red to-deep-indigo text-white&quot;>
          <div className=&quot;container mx-auto px-6 text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-heading font-bold mb-6&quot;>
              Ready to Save?
            </h2>
            <p className=&quot;text-xl text-white/90 max-w-2xl mx-auto mb-10&quot;>
              Visit Jinbeh today and enjoy amazing specials on authentic Japanese cuisine.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href={`tel:${frisco.phoneClean}`}
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-colors"
              >
                Call Frisco
              </a>
              <a
                href={`tel:${lewisville.phoneClean}`}
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-bold rounded-xl transition-colors"
              >
                Call Lewisville
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
