
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import locations from "@/data/locations.json";
import { HeroSection, RevealSection } from "@/components/MagicUI";
import { NewsletterForm, SeasonalSpecialsForm } from "@/components/ContactForm";
import { MagicCard } from "@/components/ui/magic-card";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Specials | Jinbeh Japanese Restaurant Frisco & Lewisville",
  description:
    "Lunch Hibachi for Two, $35 (Mon-Fri 11am-2pm). Happy Hour Mon-Fri: $4 draft beer, $5 small hot sake, $6 wine. View all current deals at Jinbeh.",
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
      "Lunch Hibachi for Two, $35 (Mon-Fri lunch). Happy Hour: $4 beer, $5 small hot sake, $6 wine. Plus weekly specials at Jinbeh.",
    url: "https://jinbeh.com/specials",
    images: [
      {
        url: "https://jinbeh.com/images/food/SamaraiRollCloseup.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant Specials",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/specials",
  },
};

// JSON-LD Schema for Offers
const offersSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "offers": [
    {
      "@type": "Offer",
      "name": "Lunch Hibachi for Two",
      "description": "Lunch-only special, Monday through Friday 11:00 AM to 2:00 PM. Two hibachi entrees, choose between Veggie, Chicken, Steak, Shrimp, or Salmon. Includes soup, salad, vegetables, and white rice. Add fried rice for $5 per person. Premium upgrades: Filet Mignon or Scallops +$3 per person each.",
      "price": "35.00",
      "priceCurrency": "USD",
      "url": "https://jinbeh.com/specials#hibachi-for-two",
      "availability": "https://schema.org/InStock",
      "eligibleQuantity": { "@type": "QuantitativeValue", "value": 2, "unitText": "guests" },
      "availabilityStarts": "11:00",
      "availabilityEnds": "14:00",
      "availableAtOrFrom": {
        "@type": "Place",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "11:00",
          "closes": "14:00"
        }
      }
    },
    {
      "@type": "Offer",
      "name": "Happy Hour Japanese Draft Beer",
      "price": "4.00",
      "priceCurrency": "USD",
      "url": "https://jinbeh.com/happy-hour",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Happy Hour Small Hot Sake",
      "price": "5.00",
      "priceCurrency": "USD",
      "url": "https://jinbeh.com/happy-hour",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Happy Hour Wine",
      "price": "6.00",
      "priceCurrency": "USD",
      "url": "https://jinbeh.com/happy-hour",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Weekly Specials",
      "description": "Date Night Monday, Family Tuesday, Wine Wednesday, Sake Thursday",
      "url": "https://jinbeh.com/specials#weekly"
    }
  ]
};

// Hibachi for Two, current limited-time special
const hibachiForTwoProteins = [
  { name: "Veggie",  icon: "🥦", desc: "Fresh seasonal vegetables with tofu" },
  { name: "Chicken", icon: "🍗", desc: "Tender chicken with house teriyaki glaze" },
  { name: "Steak",   icon: "🥩", desc: "Hand-cut steak, seared on the teppan" },
  { name: "Shrimp",  icon: "🍤", desc: "Jumbo shrimp, flame-kissed to perfection" },
  { name: "Salmon",  icon: "🍣", desc: "Fresh salmon with citrus teriyaki" },
];

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const specialCategories = [
  {
    id: "hibachi-for-two",
    icon: "🔥",
    title: "Lunch Hibachi for Two, $35",
    time: "Mon-Fri Lunch • 11:00 AM – 2:00 PM",
    description: "Pick 2: Veggie, Chicken, Steak, Shrimp, or Salmon",
    color: "from-soft-gold to-accent-red",
    href: "/specials#hibachi-for-two",
  },
  {
    id: "happy-hour",
    icon: "🍸",
    title: "Happy Hour Specials",
    time: "Mon-Fri • 5:00 - 6:30 PM",
    description: "$4 draft beer • $5 small hot sake • $6 wine",
    color: "from-accent-red to-deep-indigo",
    href: "/specials#happy-hour",
  },
  {
    id: "lunch",
    icon: "🍱",
    title: "Lunch Specials",
    time: "Mon-Fri • 11:00 AM - 2:30 PM",
    description: "The $35 Hibachi for Two, hibachi lunch combos, and sushi specials",
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
    category: "Japanese Draft Beer",
    items: ["Sapporo Draft", "Asahi Draft", "Kirin Draft"],
    price: "$4",
    emoji: "🍺",
  },
  {
    category: "Small Hot Sake",
    items: ["House sake served warm in a tokkuri"],
    price: "$5",
    emoji: "🍶",
  },
  {
    category: "Wine",
    items: ["House Wine by the Glass", "Curated Selection"],
    price: "$6",
    emoji: "🍷",
  },
];

const lunchHighlights = [
  {
    title: "Hibachi for Two",
    price: "$35",
    description: "Two hibachi entrees, Mon-Fri lunch only. See the special below.",
    emoji: "🔥",
  },
  {
    title: "Hibachi Lunch Combos",
    price: "",
    description: "Chef-cooked hibachi experience at lunch portions",
    emoji: "🥩",
  },
  {
    title: "Sushi Lunch Specials",
    price: "",
    description: "Fresh rolls and nigiri combinations",
    emoji: "🍣",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jinbeh.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Specials",
      "item": "https://jinbeh.com/specials"
    }
  ]
};

export default function SpecialsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Specials" }]} />
      </div>
      <main id="main-content" className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/food/SamaraiRollCloseup.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4 animate-pulse">
              Limited Time Offers
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Specials & Deals at Jinbeh
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Discover amazing discounts on your favorite Japanese cuisine.
              From happy hour to weekly specials, there&apos;s always something to celebrate.
            </p>
            <div className="inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl">
              Save Big Every Day
            </div>
          </div>
        </section>

        {/* Quick Navigation to Specials */}
        <section className="py-12 bg-gradient-to-r from-deep-indigo to-charcoal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {specialCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.href}
                  className="group block cursor-pointer"
                >
                  <MagicCard
                    className="h-full bg-charcoal/80 backdrop-blur border border-white/20 p-6 transition-colors duration-300 group-hover:bg-charcoal/60"
                    gradientColor="rgba(201, 162, 39, 0.15)"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h2 className="text-white font-heading text-xl font-bold mb-2">
                      {category.title}
                    </h2>
                    <p className="text-soft-gold text-sm mb-3 font-medium">
                      {category.time}
                    </p>
                    <p className="text-white/80 text-sm">
                      {category.description}
                    </p>
                  </MagicCard>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Hibachi for Two Featured Special */}
        <section id="hibachi-for-two" className="py-20 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="/images/food/hibachi-grill.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block bg-accent-red text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  🔥 Lunch Special, Monday through Friday
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-3">
                  Hibachi for Two
                </h2>
                <div className="flex items-baseline justify-center gap-3 mb-4">
                  <span className="text-7xl md:text-8xl font-heading font-bold text-soft-gold leading-none">$35</span>
                  <span className="text-xl md:text-2xl text-warm-ivory/80">/ for 2 people</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-soft-gold/40 rounded-full px-5 py-2 mb-5">
                  <svg className="w-4 h-4 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-warm-ivory">Lunch only • Mon–Fri • 11:00 AM – 2:00 PM</span>
                </div>
                <p className="text-lg text-warm-ivory/85 max-w-2xl mx-auto">
                  Two hibachi entrees, your choice of any combination. Cooked tableside on the teppanyaki grill,                   includes soup, salad, vegetables, and white rice.
                </p>
              </div>

              {/* Protein selection */}
              <p className="text-center text-soft-gold uppercase tracking-wider text-sm font-medium mb-6">
                Choose Two Proteins
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                {hibachiForTwoProteins.map((p) => (
                  <div
                    key={p.name}
                    className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 hover:border-soft-gold/40 transition-all"
                  >
                    <div className="text-4xl mb-2">{p.icon}</div>
                    <h3 className="font-heading text-lg font-semibold mb-1">{p.name}</h3>
                    <p className="text-xs text-warm-ivory/70 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* Premium-protein upcharge note */}
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 bg-soft-gold/15 border border-soft-gold/40 text-soft-gold px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  <span aria-hidden="true">⭐</span>
                  Premium upgrades: Filet Mignon (+$3) · Scallops (+$3) per person
                </span>
              </div>

              {/* Includes + upgrade callouts */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                <div className="bg-white/5 border border-white/15 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-soft-gold uppercase tracking-wider text-sm mb-3">
                    Each Plate Includes
                  </h3>
                  <ul className="space-y-2 text-sm text-warm-ivory/85">
                    <li className="flex items-center gap-2">
                      <span className="text-soft-gold">✓</span> Onion soup
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-soft-gold">✓</span> House salad with ginger dressing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-soft-gold">✓</span> Grilled vegetables
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-soft-gold">✓</span> Steamed white rice
                    </li>
                  </ul>
                </div>
                <div className="bg-soft-gold/10 border border-soft-gold/40 rounded-2xl p-6 ring-1 ring-soft-gold/30">
                  <h3 className="font-heading font-bold text-soft-gold uppercase tracking-wider text-sm mb-3">
                    Optional Upgrade
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-heading font-bold text-soft-gold leading-none">+$5</span>
                    <span className="text-sm text-warm-ivory/85">per person</span>
                  </div>
                  <p className="text-sm text-warm-ivory/85 leading-relaxed">
                    Upgrade your white rice to <strong className="text-white">hibachi fried rice</strong>, wok-tossed
                    with egg, vegetables, and a hint of garlic butter.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/reservations"
                    className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all"
                  >
                    Reserve a Table
                  </Link>
                  <Link
                    href="/menu"
                    className="btn bg-white/10 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-semibold rounded-xl transition-all"
                  >
                    View Full Menu
                  </Link>
                </div>
                <p className="text-xs text-warm-ivory/60 italic mt-6">
                  Available at lunch only, Monday through Friday, 11:00 AM – 2:00 PM. Dine-in only. Two-person minimum. Not combinable with other promotions or coupons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Hour Section */}
        <section id="happy-hour" className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <RevealSection>
                <p className="text-accent-red font-bold tracking-wider uppercase mb-2">
                  🍸 Unwind After Work
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Happy Hour Specials
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                  <strong className="text-charcoal">$4 Japanese draft beer • $5 small hot sake • $6 wine</strong> at both Frisco and Lewisville.<br />
                  Monday through Friday, 5:00 to 6:30 PM<br />
                  <span className="text-accent-red font-bold">Join us after work!</span> Explore our <Link href="/blog/japanese-cocktails" className="text-accent-red hover:underline">Japanese cocktail</Link> menu.
                </p>
              </RevealSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {happyHourItems.map((item, idx) => (
                <MagicCard
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-none"
                  gradientColor="rgba(201, 162, 39, 0.15)"
                >
                  <div className="text-6xl mb-4 text-center">{item.emoji}</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-2 text-center">
                    {item.category}
                  </h3>
                  <div className="bg-accent-red text-white py-3 px-4 rounded-xl text-center font-bold text-xl mb-6">
                    {item.price}
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((food, i) => (
                      <li key={i} className="text-charcoal/80 text-sm flex items-start gap-2">
                        <span className="text-accent-red mt-1">✓</span>
                        {food}
                      </li>
                    ))}
                  </ul>
                </MagicCard>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-red/10 to-deep-indigo/10 rounded-2xl p-8 border border-accent-red/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-4 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Frisco Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {frisco.address.street} {frisco.address.suite}<br />
                    {frisco.address.city}, {frisco.address.state} {frisco.address.zip}
                  </p>
                  <a href={`tel:${frisco.phoneClean}`} className="inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors">
                    Call {frisco.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-4 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Lewisville Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {lewisville.address.street} {lewisville.address.suite}<br />
                    {lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}
                  </p>
                  <a href={`tel:${lewisville.phoneClean}`} className="inline-block btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 rounded-xl font-semibold transition-colors">
                    Call {lewisville.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lunch Specials Section */}
        <section id="lunch" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <RevealSection>
                <p className="text-deep-indigo font-bold tracking-wider uppercase mb-2">
                  🍱 Midday Deals
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Lunch Specials
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                  Monday through Friday, 11:00 AM to 2:30 PM<br />
                  Weekend 11:30 AM to 2:30 PM<br />
                  <span className="text-deep-indigo font-bold">Affordable Quality Cuisine.</span> Get inspired with our <Link href="/blog/hibachi-lunch-ideas" className="text-deep-indigo hover:underline">hibachi lunch ideas</Link>
                </p>
              </RevealSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {lunchHighlights.map((item, idx) => (
                <MagicCard
                  key={idx}
                  className="bg-warm-ivory rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all border border-deep-indigo/10"
                  gradientColor="rgba(201, 162, 39, 0.15)"
                >
                  <div className="text-6xl mb-4 text-center">{item.emoji}</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2 text-center">
                    {item.title}
                  </h3>
                  <div className="bg-deep-indigo text-white py-3 px-4 rounded-xl text-center font-bold mb-4">
                    {item.price}
                  </div>
                  <p className="text-charcoal/70 text-sm text-center">
                    {item.description}
                  </p>
                </MagicCard>
              ))}
            </div>

            <div className="text-center mb-12">
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
        <section id="weekly" className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <RevealSection>
                <p className="text-soft-gold font-bold tracking-wider uppercase mb-2">
                  📅 Every Day&apos;s Special
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Weekly Specials
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Unique promotions throughout the week. Plan your visit! Perfect for a <Link href="/blog/date-night-restaurants-frisco" className="text-soft-gold hover:underline">Frisco date night</Link>.
                </p>
              </RevealSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {weeklySpecials.map((special, idx) => (
                <MagicCard
                  key={idx}
                  className="bg-charcoal/80 backdrop-blur border border-white/20 rounded-2xl p-8 hover:border-soft-gold/50 transition-all duration-300 group"
                  gradientColor="rgba(201, 162, 39, 0.15)"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {special.emoji}
                  </div>
                  <p className="text-soft-gold font-bold text-sm uppercase tracking-wider mb-2">
                    {special.day}
                  </p>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-white">
                    {special.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {special.description}
                  </p>
                  <p className="text-white/80 text-xs italic">
                    {special.details}
                  </p>
                </MagicCard>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Check with your location for specific offers and promotions on each day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Newsletter Signup Section */}
        <section className="py-20 bg-gradient-to-br from-deep-indigo via-charcoal to-accent-red text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Never Miss a Special
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Get exclusive deals, early access to specials, and insider information delivered to your inbox.
              </p>
              <NewsletterForm />
              <p className="text-white/70 text-sm">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Location Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <RevealSection>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Visit Our Locations
                </h2>
                <p className="text-lg text-charcoal/70">
                  Both Frisco and Lewisville locations feature all current specials.
                </p>
              </RevealSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Frisco */}
              <Link
                href="/frisco/specials"
                className="group bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/catalog/5-C060324-6397.jpg"
                    alt="Jinbeh Frisco location"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                    Frisco Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {frisco.address.street} {frisco.address.suite}<br />
                    {frisco.address.city}, {frisco.address.state} {frisco.address.zip}
                  </p>
                  <div className="flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all">
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/interior/JinbehFrisco_SushiBar.jpg"
                    alt="Jinbeh Lewisville location"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                    Lewisville Location
                  </h3>
                  <p className="text-charcoal/70 mb-4">
                    {lewisville.address.street} {lewisville.address.suite}<br />
                    {lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}
                  </p>
                  <div className="flex items-center gap-2 text-accent-red font-semibold group-hover:gap-4 transition-all">
                    <span>View Specials</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Specials FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <RevealSection>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Specials & Deals FAQ
                </h2>
                <p className="text-lg text-charcoal/70">
                  Got questions about our happy hour, lunch deals, and weekly specials? Find answers here.
                </p>
              </RevealSection>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "What is the Hibachi for Two special?",
                  a: "Hibachi for Two is $35 for two hibachi entrees, pick any two from Veggie, Chicken, Steak, Shrimp, or Salmon. Filet Mignon and Scallops are available as premium upgrades for +$3 per person each. Each plate includes onion soup, house salad with ginger dressing, grilled vegetables, and steamed white rice. Upgrade to fried rice for $5 per person. Available at lunch only, Monday through Friday, 11:00 AM – 2:00 PM. Dine-in only.",
                },
                {
                  q: "When is the Hibachi for Two special available?",
                  a: "The $35 Hibachi for Two is a lunch-only special, available Monday through Friday from 11:00 AM to 2:00 PM at both Frisco and Lewisville locations. It is not available on weekends or at dinner.",
                },
                {
                  q: "Does Jinbeh have happy hour?",
                  a: "Yes! Jinbeh Happy Hour runs Monday through Friday, 5:00 to 6:30 PM. Enjoy $4 Japanese draft beer, $5 small hot sake, and $6 wine at both our Frisco and Lewisville locations.",
                },
                {
                  q: "What are Jinbeh's lunch specials?",
                  a: "We offer fantastic lunch specials Monday through Friday, 11:00 AM to 2:30 PM (weekends 11:30 AM to 2:30 PM). Choose from the $35 Hibachi for Two, hibachi lunch combos, and fresh sushi lunch specials. Ask your server for today's lunch menu.",
                },
                {
                  q: "When is happy hour at Jinbeh?",
                  a: "Happy Hour runs Monday through Friday from 5:00 PM to 6:30 PM. $4 Japanese draft beer, $5 small hot sake, and $6 wine. It is perfect for after-work gatherings and date night pre-dinner drinks.",
                },
              ].map((faq, i) => (
                <details key={i} className="bg-warm-ivory rounded-xl shadow-md overflow-hidden group">
                  <summary className="p-6 cursor-pointer font-semibold text-charcoal hover:bg-white transition-colors flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent-red group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/70">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Save?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Visit Jinbeh today and enjoy amazing specials on authentic Japanese cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        
            <p className="mt-4 text-sm">
              <a href="/vip" className="text-accent-red hover:underline font-semibold">
                Looking for more perks? Join the VIP Club →
              </a>
            </p>
</section>
      </main>
      <Footer />
    </>
  );
}
