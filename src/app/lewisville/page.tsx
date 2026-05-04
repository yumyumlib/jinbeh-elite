import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialProofBar from "@/components/SocialProofBar";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import OpenTableWidget from "@/components/OpenTableWidget";
import HeritageCounter from "@/components/HeritageCounter";
import { MiniTestimonials } from "@/components/MiniTestimonials";
import { CustomerVoiceSection } from "@/components/CustomerVoice";
import { MagicCard } from "@/components/ui/magic-card";
import locations from "@/data/locations.json";

import BreadcrumbNav from "@/components/BreadcrumbNav";
// Gallery items for Lewisville - Feb 2026 Professional Photoshoot
const galleryItems = [
  { src: "/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-010-orig-IMG_1852-1200w.webp", alt: "Jinbeh hibachi chef performing spectacular flame show at Lewisville TX teppanyaki grill", caption: "Spectacular Hibachi Flame Show" },
  { src: "/images/hibachi-lewisville-2026/jinbeh-hibachi-dinner-plate-lewisville-002-orig-IMG_2002-1200w.webp", alt: "Beautifully plated hibachi dinner with steak shrimp and fried rice at Jinbeh Lewisville TX", caption: "Signature Hibachi Dinner Plate" },
  { src: "/images/hibachi-lewisville-2026/jinbeh-sushi-presentation-lewisville-001-orig-IMG_1870-1200w.webp", alt: "Fresh sushi and sashimi presentation at Jinbeh Japanese Restaurant Lewisville TX", caption: "Fresh Sushi Presentation" },
  { src: "/images/hibachi-lewisville-2026/jinbeh-hibachi-fried-rice-art-lewisville-014-orig-IMG_1904-1200w.webp", alt: "Jinbeh hibachi chef creating artistic heart-shaped fried rice at Lewisville TX location", caption: "Artistic Fried Rice Creation" },
  { src: "/images/hibachi-lewisville-2026/jinbeh-hibachi-chef-cooking-lewisville-001-orig-IMG_1876-1200w.webp", alt: "Professional hibachi chef cooking on teppanyaki grill at Jinbeh Lewisville TX", caption: "Master Chef at the Grill" },
  { src: "/images/hibachi-lewisville-2026/jinbeh-japanese-restaurant-interior-lewisville-002-orig-IMG_1830-1200w.webp", alt: "Warm inviting interior of Jinbeh Japanese Restaurant hibachi dining room Lewisville TX", caption: "Warm Restaurant Ambiance" },
];

const location = locations.locations.lewisville;

export const metadata: Metadata = {
  title: {
    absolute: location.seo.title,
  },
  description: location.seo.description,
  keywords: location.seo.keywords,
  alternates: {
    canonical: "https://jinbeh.com/lewisville",
  },
  openGraph: {
    title: location.seo.title,
    description: location.seo.description,
    url: "https://jinbeh.com/lewisville",
    type: "website",
  },
};

// JSON-LD Schema for Restaurant
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: location.fullName,
  image: [
    "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-010-orig-IMG_1852-1200w.webp",
    "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-hibachi-dinner-plate-lewisville-002-orig-IMG_2002-1200w.webp",
    "https://jinbeh.com/images/hibachi-lewisville-2026/jinbeh-japanese-restaurant-interior-lewisville-002-orig-IMG_1830-1200w.webp"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${location.address.street} ${location.address.suite}`,
    addressLocality: location.address.city,
    addressRegion: location.address.state,
    postalCode: location.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.geo.latitude,
    longitude: location.geo.longitude,
  },
  url: "https://jinbeh.com/lewisville",
  telephone: location.phone,
  servesCuisine: ["Japanese", "Sushi", "Hibachi", "Teppanyaki"],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "22:00",
    },
  ],
  acceptsReservations: true,
  hasMenu: location.menus.lunch,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "901",
    bestRating: "5",
    worstRating: "1",
  },
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Jinbeh Lewisville's hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Lewisville is open for lunch Monday-Friday 11am-2pm, Saturday-Sunday 11:30am-2:30pm. Dinner hours are Sunday-Thursday 5pm-9pm, and Friday-Saturday 5pm-10pm.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh Lewisville take reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We recommend reservations, especially for hibachi tables on weekends. You can call us at (214) 488-2224 to reserve your table.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Jinbeh Lewisville located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Lewisville is located at 2440 S Stemmons Fwy #A, Lewisville, TX 75067, with easy access from I-35E near Vista Ridge Mall.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh Lewisville have hibachi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our Lewisville location features authentic teppanyaki hibachi dining with skilled chefs who cook your meal tableside with impressive showmanship.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh Lewisville good for families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Jinbeh Lewisville is perfect for families. Kids love watching the hibachi chefs perform, and we have options for all ages. It's a great spot for family celebrations.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Lewisville" },
  ],
};

export default function LewisvillePage() {
  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville" }]} />
      </div>

      <main id="main-content" className="min-h-screen">
        <link rel="preload" href="/images/lewisville/IMG_1910.jpg" as="image" />

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Hero Section with Video */}
        <section className="hero relative bg-charcoal">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/lewisville/IMG_1910.jpg"
            aria-label="Hibachi chef performing fire show at Jinbeh Lewisville"
          >
            <source src="/videos/lewisville/hibachi-fire-02.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />

          <div className="hero-content max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              JINBEH LEWISVILLE
            </h1>
            <p className="text-xl text-warm-ivory/90 mb-6">
              {location.neighborhood.description}
            </p>

            <p className="text-lg text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              DFW&apos;s Premier Japanese, Hibachi, and Premium Sushi Experience. Join us in Lewisville for unforgettable tableside entertainment, masterfully crafted sushi rolls, and the highest quality ingredients in North Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OpenTableWidget
                restaurantId={location.reservation.rid}
                location="lewisville"
                buttonText="Reserve Your Table"
                variant="primary"
              />
              <a
                href={`tel:${location.phoneClean}`}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal"
              >
                Call {location.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="py-6 bg-white border-b border-warm-ivory-dark">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <SocialProofBar location="lewisville" variant="compact" />
              {/* Years in Business */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">🏆</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Since 1988</p>
                </div>
              </div>
              {/* Family Owned */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Family-Owned</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Strip */}
        <section className="py-4 bg-warm-ivory border-b border-warm-ivory-dark">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-charcoal/70">
              <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200">
                <Image src="/images/awards/d-magazine-logo.png" alt="D Magazine" width={24} height={24} className="rounded-sm" /> D Magazine Award Winner
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200">
                <Image src="/images/awards/opentable-logo.png" alt="OpenTable Diners Choice" width={24} height={24} className="rounded-sm" /> OpenTable #1 Best Hibachi &amp; #1 Best Tempura in Lewisville
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200">
                <Image src="/images/awards/eater-logo.png" alt="Eater Dallas" width={24} height={24} className="rounded-sm" /> Featured in Eater Dallas
              </span>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Location Card */}
              <div className="card">
                <h2 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Location
                </h2>
                <address className="not-italic text-charcoal/80">
                  <p>{location.address.street}</p>
                  <p>{location.address.suite}</p>
                  <p>
                    {location.address.city}, {location.address.state} {location.address.zip}
                  </p>
                </address>
                <a
                  href={`tel:${location.phoneClean}`}
                  className="block mt-4 text-accent-red hover:text-deep-indigo transition-colors font-semibold"
                >
                  {location.phone}
                </a>
                <p className="mt-4 text-sm text-charcoal/80">
                  {location.neighborhood.parking}
                </p>
                {/* Nearby Activities Callout */}
                <div className="mt-4 pt-4 border-t border-stone-200">
                  <p className="text-sm text-charcoal/70 mb-2">
                    <span className="font-semibold">🏓 Nearby:</span> The Picklr is 2 doors down!
                  </p>
                  <Link
                    href="/blog/pickleball-restaurants-lewisville"
                    className="text-sm text-accent-red hover:underline font-medium"
                  >
                    Play pickleball, then dine with us →
                  </Link>
                </div>
              </div>

              {/* Menus Card */}
              <div className="card">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Menus
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/lewisville/menu#lunch"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Lunch Menu</span>
                    <span className="block text-sm text-charcoal/80">View Menu</span>
                  </Link>
                  <Link
                    href="/lewisville/menu#dinner"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Dinner Menu</span>
                    <span className="block text-sm text-charcoal/80">View Menu</span>
                  </Link>
                  <Link
                    href="/lewisville/menu#sushi"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Sushi Menu</span>
                    <span className="block text-sm text-charcoal/80">View Menu</span>
                  </Link>
                  <Link
                    href="/lewisville/cocktails"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Beverage Menu</span>
                    <span className="block text-sm text-charcoal/80">Wine, Sake & Cocktails</span>
                  </Link>
                </div>
              </div>

              {/* Reservation Card */}
              <div className="card" id="reserve">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Make a Reservation
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Reserve your table for the best hibachi experience – your seat awaits!
                </p>
                <OpenTableWidget
                  restaurantId={location.reservation.rid}
                  location="lewisville"
                  buttonText="Find a Table"
                  variant="primary"
                  className="w-full"
                />
                <p className="mt-4 text-sm text-charcoal/80 text-center">
                  Or call us at{" "}
                  <a
                    href={`tel:${location.phoneClean}`}
                    className="text-accent-red hover:underline"
                  >
                    {location.phone}
                  </a>
                </p>
              </div>

              {/* Order Online Card */}
              <div className="card">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Order Online
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Get your favorite Jinbeh dishes delivered to your door.
                </p>
                <div className="space-y-3">
                  <a
                    href={location.orderOnline.grubhub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#F63440] text-white rounded-lg hover:bg-[#d62d38] transition-colors font-medium"
                  >
                    Grubhub
                  </a>
                  <a
                    href={location.orderOnline.ubereats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#06C167] text-white rounded-lg hover:bg-[#05a858] transition-colors font-medium"
                  >
                    Uber Eats
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hours Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Hours of Operation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Lunch */}
              <div className="text-center p-8 bg-warm-ivory rounded-xl">
                <h3 className="font-heading text-xl font-semibold text-cedar-brown mb-4">
                  Lunch
                </h3>
                <div className="space-y-2 text-charcoal/80">
                  <p>
                    <span className="font-medium">Monday – Friday:</span>{" "}
                    {location.hours.lunch.weekday.display}
                  </p>
                  <p>
                    <span className="font-medium">Saturday & Sunday:</span>{" "}
                    {location.hours.lunch.weekend.display}
                  </p>
                </div>
              </div>

              {/* Dinner */}
              <div className="text-center p-8 bg-warm-ivory rounded-xl">
                <h3 className="font-heading text-xl font-semibold text-cedar-brown mb-4">
                  Dinner
                </h3>
                <div className="space-y-2 text-charcoal/80">
                  <p>
                    <span className="font-medium">Sunday – Thursday:</span>{" "}
                    {location.hours.dinner.sunThurs.display}
                  </p>
                  <p>
                    <span className="font-medium">Friday & Saturday:</span>{" "}
                    {location.hours.dinner.friSat.display}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-charcoal/60 text-sm mt-6">
            Close to Lake Lewisville, Old Town Lewisville, and Medical City Lewisville — convenient from Hebron Parkway and Justin Road via I-35E and Stemmons Freeway.
          </p>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-charcoal text-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              What to Expect at Jinbeh Lewisville
            </h2>
            <p className="text-warm-ivory/80 max-w-3xl mx-auto mb-12">
              Lewisville&apos;s go-to destination for authentic Japanese cuisine. Our talented chefs
              create memorable hibachi experiences while our sushi bar serves up the freshest
              rolls and sashimi in town.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <MagicCard
                className="p-6 bg-charcoal/50 border border-white/10 text-white"
                gradientColor="rgba(201, 162, 39, 0.15)"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-red/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Hibachi Shows
                </h3>
                <p className="text-warm-ivory/70">
                  Watch our skilled chefs perform dazzling tricks with flames and the
                  famous onion volcano right at your table.
                </p>
              </MagicCard>

              <MagicCard
                className="p-6 bg-charcoal/50 border border-white/10 text-white"
                gradientColor="rgba(201, 162, 39, 0.15)"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-deep-indigo/40 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍣</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Fresh Sushi Bar
                </h3>
                <p className="text-warm-ivory/70">
                  A wide variety of sushi, sashimi, rolls, and appetizers prepared
                  fresh by our master sushi chefs.
                </p>
              </MagicCard>

              <MagicCard
                className="p-6 bg-charcoal/50 border border-white/10 text-white"
                gradientColor="rgba(201, 162, 39, 0.15)"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍸</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Full Bar & Happy Hour
                </h3>
                <p className="text-warm-ivory/70">
                  Enjoy your favorite drinks along with special concoctions during
                  our Happy Hour specials.
                </p>
              </MagicCard>
            </div>

            <div className="mt-12">
              <Link
                href="/lewisville/menu"
                className="btn btn-primary btn-shimmer"
              >
                Explore Our Full Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Photo & Video Gallery */}
        <PhotoGallery
          items={galleryItems}
          title="Experience Jinbeh Lewisville"
          subtitle="Savor the sights of our fresh sushi, sizzling hibachi, and the famous fire show that makes every meal an experience."
          columns={3}
        />

        {/* Popular Celebrations at Lewisville */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
              Celebrate Special Occasions
            </h2>
            <p className="text-center text-charcoal/70 mb-12 max-w-2xl mx-auto">
              From birthdays to holidays, Jinbeh Lewisville is the perfect place to create lasting memories
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/birthday" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">🎂</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Birthday Parties</span>
              </Link>
              <Link href="/celebrations/valentines-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">💕</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Valentine&apos;s Day</span>
              </Link>
              <Link href="/celebrations/mothers-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">💐</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Mother&apos;s Day</span>
              </Link>
              <Link href="/celebrations/fathers-day" className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">👔</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Father&apos;s Day</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
              <Link href="/celebrations/date-night" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🌹</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Date Night</span>
              </Link>
              <Link href="/celebrations/thanksgiving" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🦃</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Thanksgiving</span>
              </Link>
              <Link href="/celebrations/christmas" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🎄</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Christmas</span>
              </Link>
              <Link href="/celebrations/lunar-new-year" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🐍</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Lunar New Year</span>
              </Link>
              <Link href="/celebrations/graduation" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🎓</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Graduation</span>
              </Link>
              <Link href="/celebrations/anniversary" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">💍</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Anniversary</span>
              </Link>
              <Link href="/celebrations/rehearsal-dinner" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">💒</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Rehearsal Dinner</span>
              </Link>
              <Link href="/celebrations/baby-shower" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">👶</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Baby Shower</span>
              </Link>
              <Link href="/celebrations/corporate-events" className="group bg-white rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">💼</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Corporate Events</span>
              </Link>
              <Link href="/celebrations" className="group bg-accent-red/10 rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🎉</span>
                <span className="text-xs text-accent-red font-medium">All Events</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Explore More
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link
                href="/lewisville/menu"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">📖</span>
                <span className="font-medium text-charcoal">View Menu</span>
              </Link>
              <Link
                href="/happy-hour"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">🍹</span>
                <span className="font-medium text-charcoal">Happy Hour</span>
              </Link>
              <Link
                href="/catering"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">🎊</span>
                <span className="font-medium text-charcoal">Catering</span>
              </Link>
              <Link
                href="/private-dining"
                className="card text-center hover:border-accent-red"
              >
                <span className="text-3xl mb-2 block">🏮</span>
                <span className="font-medium text-charcoal">Private Dining</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto text-sm">
              <Link href="/lewisville/hibachi" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Hibachi Menu</Link>
              <Link href="/lewisville/sushi-rolls" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sushi Menu</Link>
              <Link href="/lewisville/sashimi" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sashimi</Link>
              <Link href="/gift-cards" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Gift Cards</Link>
              <Link href="/frisco" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Frisco Location</Link>
              <Link href="/nearby/flower-mound" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Flower Mound</Link>
              <Link href="/nearby/highland-village" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Highland Village</Link>
              <Link href="/nearby/carrollton" className="px-4 py-2 bg-warm-ivory rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Carrollton</Link>
            </div>
          </div>
        </section>

        {/* Heritage Counter */}
        <section className="py-12 bg-white">
          <HeritageCounter className="" />
        </section>

        {/* Related Blog Posts */}
        <RelatedBlogPosts
          slugs={["japanese-restaurants-lewisville", "pickleball-restaurants-lewisville", "seafood-lewisville", "best-steakhouses-lewisville"]}
          limit={3}
          title="Lewisville Dining Guides"
          subtitle="Discover the best Japanese restaurants and dining experiences in Lewisville and North Texas."
          bgColor="ivory"
        />

        {/* Sticky Mobile CTA */}
        <div className="sticky-cta-mobile">
          <OpenTableWidget
            restaurantId={location.reservation.rid}
            location="lewisville"
            buttonText="Reserve Table"
            variant="primary"
            className="flex-1"
          />
          <a
            href={`tel:${location.phoneClean}`}
            className="btn btn-secondary flex-1"
          >
            Call Now
          </a>
        </div>

        {/* Nearby Neighborhoods */}
        <section className="py-12 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">Lewisville Neighborhoods We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/lewisville/castle-hills" className="px-5 py-2 bg-white rounded-full text-charcoal/80 hover:bg-accent-red hover:text-white transition-colors text-sm shadow-sm">Castle Hills</a>
              <a href="/lewisville/vista-ridge" className="px-5 py-2 bg-white rounded-full text-charcoal/80 hover:bg-accent-red hover:text-white transition-colors text-sm shadow-sm">Vista Ridge</a>
              <a href="/lewisville/kids-menu" className="px-5 py-2 bg-white rounded-full text-charcoal/80 hover:bg-accent-red hover:text-white transition-colors text-sm shadow-sm">Kids Menu</a>
            </div>
          </div>
        </section>

      </main >

      <Footer />
    </>
  );
}
