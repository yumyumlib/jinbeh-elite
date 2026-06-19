import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialProofBar from "@/components/SocialProofBar";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { CustomerVoiceSection } from "@/components/CustomerVoice";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import OpenTableWidget from "@/components/OpenTableWidget";
import HeritageCounter from "@/components/HeritageCounter";
import { MiniTestimonials } from "@/components/MiniTestimonials";
import { MagicCard } from "@/components/ui/magic-card";
import locations from "@/data/locations.json";

import BreadcrumbNav from "@/components/BreadcrumbNav";
// Gallery items for Frisco
const galleryItems = [
  { src: "/images/frisco/JinbehFrisco_SushiBar.jpg", alt: "Jinbeh Frisco sushi bar", caption: "Our Premium Sushi Bar" },
  { src: "/images/food/OnionVolcanoDemo.jpg", alt: "Onion volcano hibachi show", caption: "Famous Onion Volcano" },
  { src: "/images/food/SamaraiRollCloseup.jpg", alt: "Sunrise roll closeup", caption: "Signature Sunrise Roll" },
  { src: "/images/frisco/JinbehFriscoTables.jpg", alt: "Jinbeh Frisco dining area", caption: "Elegant Dining Space" },
  { src: "/images/interior/FriscoLocation_Bar_Front.jpg", alt: "Frisco bar interior", caption: "Frisco Bar Front" },
  { src: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg", alt: "Fresh sushi and desserts", caption: "Fresh Daily Selection" },
];

const location = locations.locations.frisco;

export const metadata: Metadata = {
  title: {
    absolute: location.seo.title,
  },
  description: location.seo.description,
  keywords: location.seo.keywords,
  alternates: {
    canonical: "https://jinbeh.com/frisco",
  },
  openGraph: {
    title: location.seo.title,
    description: location.seo.description,
    url: "https://jinbeh.com/frisco",
    type: "website",
    siteName: "Jinbeh Japanese Restaurant",
    images: [
      {
        url: "https://jinbeh.com/images/exterior/JinbehFriscoStorefrontSign.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant in Frisco, TX — hibachi and sushi since 1988",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: location.seo.title,
    description: location.seo.description,
    images: ["https://jinbeh.com/images/exterior/JinbehFriscoStorefrontSign.jpg"],
  },
};

// JSON-LD Schema for Restaurant
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: location.fullName,
  image: "https://jinbeh.com/images/exterior/JinbehFriscoStorefrontSign.jpg",
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
  url: "https://jinbeh.com/frisco",
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
  hasMenu: location.menus.dinner,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    reviewCount: "752",
    bestRating: "5",
    worstRating: "1",
  },
};

// FAQ Schema for rich snippets — every answer leads with "Jinbeh" for AI citation
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Jinbeh Frisco's hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco is open for lunch Monday-Friday 11am-2pm, Saturday-Sunday 11:30am-2:30pm. Dinner hours are Sunday-Thursday 5pm-9pm, and Friday-Saturday 5pm-10pm.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh Frisco take reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco welcomes walk-ins, but we strongly recommend reservations for dinner, weekends, and special occasions. Reserve online through OpenTable or call (214) 619-1200 to lock in your hibachi table.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Jinbeh Frisco located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco is located at 2693 Preston Rd Suite 1040, Frisco, TX 75034, near Stonebriar Centre Mall — minutes from Legacy West, The Star, and Dr Pepper Ballpark, with ample free parking.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh Frisco have hibachi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco features full tableside teppanyaki hibachi dining, where skilled chefs perform knife tricks, the famous onion volcano, and precision searing on steak, shrimp, chicken, scallops, lobster, and vegetables right at your table.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh Frisco good for birthday celebrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco is one of DFW's most-loved birthday-dinner restaurants — our hibachi chefs put on tableside fire shows with the famous onion volcano, making birthdays memorable for kids and adults alike. Hibachi tables seat 7-8 guests, perfect for groups.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh Frisco have sushi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco features a full premium sushi bar with fresh fish delivered multiple times per week. Our sushi chefs hand-craft nigiri, sashimi, classic rolls, and signature specialty rolls like the Sunrise Roll, Volcano Roll, and Ahi Tower. Nothing is pre-made.",
      },
    },
    {
      "@type": "Question",
      name: "What's the parking situation at Jinbeh Frisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco offers ample free parking directly outside the restaurant on Preston Road at Suite 1040, near Stonebriar Centre. No valet or paid lot required.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jinbeh Frisco offer happy hour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jinbeh Frisco serves happy hour Monday-Friday from 5pm to 6:30pm with $4 draft beers, $5 sake, and $6 wine. Happy hour drinks are bar-area only and don't apply to dinner tables.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Frisco" },
  ],
};

export default function FriscoPage() {
  return (
    <>
      <Header location="frisco" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Frisco" }]} />
      </div>

      <main id="main-content" className="min-h-screen">
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

        {/* Hero Section */}
        <section className="hero relative bg-charcoal">
          <Image
            src="/images/interior/FriscoLocation_Bar_Front.jpg"
            alt="Jinbeh Frisco bar and lobby interior"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="hero-overlay" />

          <div className="hero-content max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              JINBEH FRISCO
            </h1>
            <p className="text-xl text-warm-ivory/90 mb-6">
              {location.neighborhood.description}
            </p>

            <p className="text-lg text-warm-ivory/80 max-w-2xl mx-auto mb-8">
              DFW&apos;s Premier Japanese, Hibachi, and Premium Sushi Experience. Join us in Frisco for unforgettable tableside entertainment, masterfully crafted sushi rolls, and the highest quality ingredients in North Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OpenTableWidget
                restaurantId={location.reservation.rid}
                location="frisco"
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
              <SocialProofBar location="frisco" variant="compact" />
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
                <Image src="/images/awards/d-magazine-logo.png" alt="D Magazine" width={24} height={24} className="rounded-sm" /> D Magazine &ldquo;Best of Big D&rdquo; Winner
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200">
                <Image src="/images/awards/opentable-logo.png" alt="OpenTable Diners Choice" width={24} height={24} className="rounded-sm" /> OpenTable Diners&apos; Choice &mdash; #2 Best Hibachi in Frisco
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
              </div>

              {/* Menus Card */}
              <div className="card">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Menus
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/frisco/menu#lunch"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Lunch Menu</span>
                    <span className="block text-sm text-charcoal/80">View Menu</span>
                  </Link>
                  <Link
                    href="/frisco/menu#dinner"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Dinner Menu</span>
                    <span className="block text-sm text-charcoal/80">View Menu</span>
                  </Link>
                  <Link
                    href="/frisco/menu#sushi"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Sushi Menu</span>
                    <span className="block text-sm text-charcoal/80">View Menu</span>
                  </Link>
                  <Link
                    href="/frisco/cocktails"
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
                  location="frisco"
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
            <p className="text-center text-charcoal/60 text-sm mt-6">
              Just minutes from Legacy West, The Star, Dr Pepper Ballpark, and PGA of America headquarters, right off Preston Road near Dallas North Tollway and Sam Rayburn Tollway.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-charcoal text-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              What to Expect at Jinbeh Frisco
            </h2>
            <p className="text-warm-ivory/80 max-w-3xl mx-auto mb-12">
              Our talented chefs are experts in creating authentic Japanese dishes,
              ensuring that your hibachi experience is top-notch. We guarantee you&apos;ll
              be coming back for more of our delicious Japanese food and exceptional service.
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
                href="/frisco/menu"
                className="btn btn-primary btn-shimmer"
              >
                Explore Our Full Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <PhotoGallery
          items={galleryItems}
          title="Experience Jinbeh Frisco"
          subtitle="From sizzling hibachi shows to artfully crafted sushi, every visit is an experience to remember."
          columns={3}
        />

        {/* Popular Celebrations at Frisco */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
              Celebrate Special Occasions
            </h2>
            <p className="text-center text-charcoal/70 mb-12 max-w-2xl mx-auto">
              From birthdays to holidays, Jinbeh Frisco is the perfect place to create lasting memories
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link href="/celebrations/birthday" className="group bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">🎂</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Birthday Parties</span>
              </Link>
              <Link href="/celebrations/valentines-day" className="group bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">💕</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Valentine&apos;s Day</span>
              </Link>
              <Link href="/celebrations/mothers-day" className="group bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">💐</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Mother&apos;s Day</span>
              </Link>
              <Link href="/celebrations/fathers-day" className="group bg-warm-ivory rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <span className="text-2xl mb-2 block">👔</span>
                <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">Father&apos;s Day</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
              <Link href="/celebrations/date-night" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🌹</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Date Night</span>
              </Link>
              <Link href="/celebrations/thanksgiving" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🦃</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Thanksgiving</span>
              </Link>
              <Link href="/celebrations/christmas" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🎄</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Christmas</span>
              </Link>
              <Link href="/celebrations/lunar-new-year" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🐍</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Lunar New Year</span>
              </Link>
              <Link href="/celebrations/graduation" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">🎓</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Graduation</span>
              </Link>
              <Link href="/celebrations/anniversary" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">💍</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Anniversary</span>
              </Link>
              <Link href="/celebrations/rehearsal-dinner" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">💒</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Rehearsal Dinner</span>
              </Link>
              <Link href="/celebrations/baby-shower" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
                <span className="text-xl mb-1 block">👶</span>
                <span className="text-xs text-charcoal group-hover:text-accent-red">Baby Shower</span>
              </Link>
              <Link href="/celebrations/corporate-events" className="group bg-warm-ivory rounded-lg p-3 text-center hover:shadow-md transition-all">
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
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
              Explore More
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Link
                href="/frisco/menu"
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
              <Link href="/frisco/hibachi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Hibachi Menu</Link>
              <Link href="/frisco/sushi-rolls" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sushi Menu</Link>
              <Link href="/frisco/sashimi" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Sashimi</Link>
              <Link href="/frisco/world-cup" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">World Cup 2026</Link>
              <Link href="/gift-cards" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Gift Cards</Link>
              <Link href="/lewisville" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Lewisville Location</Link>
              <Link href="/nearby/plano" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Plano</Link>
              <Link href="/nearby/mckinney" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near McKinney</Link>
              <Link href="/nearby/allen" className="px-4 py-2 bg-white rounded-full text-charcoal hover:bg-accent-red hover:text-white transition-colors">Near Allen</Link>
            </div>
          </div>
        </section>

        {/* Heritage Counter */}
        <section className="py-12 bg-warm-ivory">
          <HeritageCounter className="" />
        </section>

        {/* Related Blog Posts */}
        <RelatedBlogPosts
          categories={["local-guides", "best-of"]}
          limit={3}
          title="Frisco Dining Guides"
          subtitle="Discover the best hibachi, sushi, and dining experiences in Frisco and North Texas."
          bgColor="white"
        />

        {/* Sticky Mobile CTA */}
        <div className="sticky-cta-mobile">
          <OpenTableWidget
            restaurantId={location.reservation.rid}
            location="frisco"
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

        {/* Common Questions — internal links to location-relevant FAQ pages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              Common Questions About Jinbeh Frisco
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/faq/is-jinbeh-near-stonebriar" className="block bg-warm-ivory rounded-xl p-5 hover:shadow-lg transition-shadow text-charcoal hover:text-accent-red font-medium">Is Jinbeh near Stonebriar Centre?</Link>
              <Link href="/faq/is-jinbeh-near-toyota-stadium" className="block bg-warm-ivory rounded-xl p-5 hover:shadow-lg transition-shadow text-charcoal hover:text-accent-red font-medium">Is Jinbeh near Toyota Stadium?</Link>
              <Link href="/faq/what-comes-with-hibachi-dinner" className="block bg-warm-ivory rounded-xl p-5 hover:shadow-lg transition-shadow text-charcoal hover:text-accent-red font-medium">What comes with a hibachi dinner?</Link>
              <Link href="/faq/can-children-enjoy-hibachi" className="block bg-warm-ivory rounded-xl p-5 hover:shadow-lg transition-shadow text-charcoal hover:text-accent-red font-medium">Can children enjoy hibachi?</Link>
              <Link href="/faq/is-jinbeh-open-on-sunday" className="block bg-warm-ivory rounded-xl p-5 hover:shadow-lg transition-shadow text-charcoal hover:text-accent-red font-medium">Is Jinbeh open on Sunday?</Link>
              <Link href="/faq/is-frisco-or-lewisville-better" className="block bg-warm-ivory rounded-xl p-5 hover:shadow-lg transition-shadow text-charcoal hover:text-accent-red font-medium">Frisco or Lewisville: which is better?</Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-accent-red hover:underline font-semibold">See all frequently asked questions →</Link>
            </div>
          </div>
        </section>

        {/* Nearby Neighborhoods */}
        <section className="py-12 bg-warm-ivory">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">Frisco Neighborhoods We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/frisco/starwood" className="px-5 py-2 bg-white rounded-full text-charcoal/80 hover:bg-accent-red hover:text-white transition-colors text-sm shadow-sm">Starwood</a>
              <a href="/frisco/stonebriar" className="px-5 py-2 bg-white rounded-full text-charcoal/80 hover:bg-accent-red hover:text-white transition-colors text-sm shadow-sm">Stonebriar</a>
              <a href="/frisco/legacy" className="px-5 py-2 bg-white rounded-full text-charcoal/80 hover:bg-accent-red hover:text-white transition-colors text-sm shadow-sm">Legacy</a>
            </div>
          </div>

          <p className="mt-4 text-sm">
            <a href="/blog/things-to-do-frisco" className="text-accent-red hover:underline">
              Related: Things to Do in Frisco TX: Your Ultimate Guide →
            </a>
          </p>
        </section>

      </main >

      <Footer />
    </>
  );
}
