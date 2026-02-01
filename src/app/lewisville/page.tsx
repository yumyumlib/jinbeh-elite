import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import locations from "@/data/locations.json";

// Gallery items for Lewisville
const galleryItems = [
  { src: "/images/lewisville/IMG_1910.jpg", alt: "Fresh sushi platter with decorative flowers", caption: "Artful Sushi Presentation" },
  { src: "/videos/lewisville/hibachi-fire-01.mp4", alt: "Hibachi fire show", caption: "Hibachi Fire Show", type: "video" as const },
  { src: "/images/lewisville/IMG_1712.jpg", alt: "Salmon sashimi", caption: "Fresh Salmon Sashimi" },
  { src: "/images/lewisville/IMG_2178.jpg", alt: "Whole red fish", caption: "Premium Fresh Fish" },
  { src: "/videos/lewisville/hibachi-fire-02.mp4", alt: "Onion volcano flame", caption: "Famous Onion Volcano", type: "video" as const },
  { src: "/images/lewisville/IMG_2081.jpg", alt: "Sushi selection", caption: "Chef's Selection" },
];

const location = locations.locations.lewisville;

export const metadata: Metadata = {
  title: location.seo.title,
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
  image: "https://jinbeh.com/images/lewisville-exterior.jpg",
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
    ratingValue: "4.4",
    reviewCount: "650",
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

export default function LewisvillePage() {
  return (
    <>
      <Header location="lewisville" />

      <main className="min-h-screen">
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
              Experience the exquisite flavors of Japan with our culinary offerings
              that are sure to tantalize your taste buds. Indulge in perfectly crafted
              hibachi steaks and delectable sushi that will transport you to the streets
              of Japan. Come on in and let us take you on a culinary journey through Japan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reserve"
                className="btn btn-primary btn-shimmer"
              >
                Reserve Your Table
              </a>
              <a
                href={`tel:${location.phoneClean}`}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-charcoal"
              >
                Call {location.phone}
              </a>
            </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="py-6 bg-white border-b border-warm-ivory-dark">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {/* Google Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-soft-gold">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current opacity-40" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">4.4 Google</p>
                </div>
              </div>

              {/* OpenTable Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-soft-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">4.8 OpenTable</p>
                </div>
              </div>

              {/* Grubhub Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-soft-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">4.8 Grubhub</p>
                </div>
              </div>

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
        </section>

        {/* Info Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Location Card */}
              <div className="card">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Location
                </h3>
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
                <p className="mt-4 text-sm text-charcoal/60">
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
                  <a
                    href={location.menus.lunch || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Lunch Menu</span>
                    <span className="block text-sm text-charcoal/60">PDF Download</span>
                  </a>
                  <a
                    href={location.menus.sushi || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-warm-ivory rounded-lg hover:bg-warm-ivory-dark transition-colors"
                  >
                    <span className="font-medium text-charcoal">Sushi Menu</span>
                    <span className="block text-sm text-charcoal/60">PDF Download</span>
                  </a>
                </div>
              </div>

              {/* Reservation Card */}
              <div className="card" id="reserve">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                  Make a Reservation
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Reserve your table through OpenTable for the best hibachi experience.
                </p>
                <a
                  href={location.reservation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Find a Table
                </a>
                <p className="mt-4 text-sm text-charcoal/60 text-center">
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
                    Grub Hub
                  </a>
                  <a
                    href={location.orderOnline.ubereats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#06C167] text-white rounded-lg hover:bg-[#05a858] transition-colors font-medium"
                  >
                    UberEats
                  </a>
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
              <div className="p-6">
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
              </div>

              <div className="p-6">
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
              </div>

              <div className="p-6">
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
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/lewisville/menu"
                className="btn btn-primary btn-shimmer"
              >
                Explore Our Full Menu
              </Link>
            </div>
        </section>

        {/* Photo & Video Gallery */}
        <PhotoGallery
          items={galleryItems}
          title="Experience Jinbeh Lewisville"
          subtitle="Savor the sights of our fresh sushi, sizzling hibachi, and the famous fire show that makes every meal an experience."
          columns={3}
        />

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
              What Our Guests Say
            </h2>
            <p className="text-center text-charcoal/70 mb-12 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from our Lewisville neighbors
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-warm-ivory rounded-2xl p-6 shadow-md">
                <div className="flex text-soft-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 italic">
                  &quot;We drive from Flower Mound every time we want great hibachi. The fire show is always entertaining
                  and the kids absolutely love it. Worth every penny!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-deep-indigo rounded-full flex items-center justify-center text-white font-semibold">
                    D
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">David L.</p>
                    <p className="text-xs text-charcoal/60">Flower Mound • Google Review</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-warm-ivory rounded-2xl p-6 shadow-md">
                <div className="flex text-soft-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 italic">
                  &quot;Best sushi in Lewisville, no question! Fresh fish, beautiful presentation, and the staff
                  remembers us by name. This has been our go-to spot for years.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-red rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Amanda K.</p>
                    <p className="text-xs text-charcoal/60">Lewisville • Google Review</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-warm-ivory rounded-2xl p-6 shadow-md">
                <div className="flex text-soft-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 italic">
                  &quot;Had my anniversary dinner here and it was perfect. The ambiance, the sake selection,
                  the attentive service — Jinbeh made our celebration truly special.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-gold rounded-full flex items-center justify-center text-charcoal font-semibold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Robert M.</p>
                    <p className="text-xs text-charcoal/60">Highland Village • Yelp Review</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/place/Jinbeh+Japanese+Restaurant/@33.0358,-97.0107,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-deep-indigo hover:text-accent-red transition-colors font-medium"
              >
                Read more reviews on Google
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
        </section>

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
        </section>

        {/* Related Blog Posts */}
        <RelatedBlogPosts
          slugs={["japanese-restaurants-lewisville", "pickleball-restaurants-lewisville", "seafood-lewisville"]}
          limit={3}
          title="Lewisville Dining Guides"
          subtitle="Discover the best Japanese restaurants and dining experiences in Lewisville and North Texas."
          bgColor="ivory"
        />

        {/* Sticky Mobile CTA */}
        <div className="sticky-cta-mobile">
          <a
            href="#reserve"
            className="btn btn-primary flex-1"
          >
            Reserve Table
          </a>
          <a
            href={`tel:${location.phoneClean}`}
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
