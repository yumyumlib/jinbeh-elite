import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import OpenTableWidget from "@/components/OpenTableWidget";
import locationsData from "@/data/locations.json";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
  title: "Menu | Jinbeh Lewisville | Hibachi & Sushi Menu Near Vista Ridge Mall",
  description:
    "View Jinbeh Lewisville's lunch, dinner, and sushi menus. Fresh sushi, hibachi teppanyaki, sake, and Japanese cuisine in Lewisville, TX.",
  keywords: [
    "jinbeh lewisville menu",
    "hibachi menu lewisville",
    "sushi menu lewisville tx",
    "japanese restaurant menu lewisville",
    "teppanyaki menu near me",
    "sushi near i35e",
    "hibachi lunch special lewisville",
  ],
  openGraph: {
    title: "Menu | Jinbeh Lewisville - Hibachi & Sushi",
    description: "Lunch, dinner, and sushi menus for Jinbeh Lewisville. Fresh sushi, sizzling hibachi, and authentic Japanese cuisine.",
    url: "https://jinbeh.com/lewisville/menu",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sushi-tower.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Lewisville Menu",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/menu",
  },
};

// Menu Schema for structured data
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Jinbeh Lewisville Menu",
  "description": "Hibachi teppanyaki, fresh sushi, sashimi, and Japanese cuisine at Jinbeh Japanese Restaurant in Lewisville, TX.",
  "url": "https://jinbeh.com/lewisville/menu",
  "mainEntityOfPage": "https://jinbeh.com/lewisville/menu",
  "inLanguage": "en-US",
  "hasMenuSection": [
    { "@type": "MenuSection", "name": "Lunch", "description": "Weekday lunch favorites: hibachi lunch combos, sushi specials, and the $35 Hibachi for Two." },
    { "@type": "MenuSection", "name": "Dinner", "description": "Hibachi teppanyaki, signature entrees, and full dinner menu." },
    { "@type": "MenuSection", "name": "Sushi", "description": "Signature rolls, classic rolls, sashimi, and nigiri." },
  ],
};

// FAQ Schema for menu page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What type of food does Jinbeh Lewisville serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Lewisville serves authentic Japanese cuisine including hibachi/teppanyaki (cooked tableside with entertainment), fresh sushi and sashimi, specialty rolls, Japanese appetizers, and traditional entrees.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh Lewisville have lunch specials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh Lewisville offers lunch specials Monday through Friday from 11:00 AM to 2:00 PM, and weekends from 11:30 AM to 2:30 PM. Lunch hibachi combos include soup, salad, and fried rice.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh have vegetarian options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Jinbeh offers vegetarian hibachi options with tofu and vegetables, as well as vegetable sushi rolls and appetizers. Please let your server know about any dietary restrictions.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I order Jinbeh for takeout or delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Sushi, appetizers, and some entrees are available for takeout and delivery through Grubhub and Uber Eats. Hibachi is best enjoyed dine-in for the full entertainment experience.",
      },
    },
  ],
};

const menus = [
  {
    id: "lunch",
    title: "Lunch Menu",
    description: "Hibachi lunch combos, sushi specials, and the $35 Hibachi for Two.",
    pdfUrl: "/menus/lewisville/lunch-menu.pdf",
    image: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg",
    imageAlt: "Hibachi lunch combo at Jinbeh Lewisville",
    icon: "🥢",
  },
  {
    id: "dinner",
    title: "Dinner Menu",
    description: "Full hibachi teppanyaki, premium steaks, and Japanese entrees.",
    pdfUrl: "/menus/lewisville/dinner-menu.pdf",
    image: "/images/food/OnionVolcanoDemo.jpg",
    imageAlt: "Hibachi dinner show with onion volcano at Jinbeh Lewisville",
    icon: "🔥",
  },
  {
    id: "sushi",
    title: "Sushi Menu",
    description: "Signature rolls, classic maki, sashimi, and nigiri crafted daily.",
    pdfUrl: "/menus/lewisville/sushi-menu.pdf",
    image: "/images/food/SamaraiRollCloseup.jpg",
    imageAlt: "Sunrise roll signature sushi at Jinbeh Lewisville",
    icon: "🍣",
  },
];

export default function LewisvilleMenuPage() {
  return (
    <>
      <Header location="lewisville" />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Lewisville", href: "/lewisville" }, { label: "Menu" }]} />
      </div>
      <main id="main-content" className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section with Video */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/lewisville/IMG_1910.jpg"
          >
            <source src="/videos/lewisville/hibachi-fire-02.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Jinbeh Lewisville
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-lg text-warm-ivory/90 max-w-2xl mx-auto">
              Fresh ingredients, expert preparation, and flavors that transport you to Japan.
            </p>
          </div>
        </section>

        {/* Menus Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-3 text-sm">
                Menus
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Lunch, Dinner &amp; Sushi
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Tap any menu to open the PDF. Fresh sushi, sizzling hibachi, and Japanese cuisine in Lewisville, TX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {menus.map((menu) => (
                <a
                  key={menu.id}
                  href={menu.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={menu.image}
                      alt={menu.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-3xl">{menu.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                      {menu.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">{menu.description}</p>
                    <span className="inline-flex items-center gap-2 text-accent-red font-semibold">
                      View PDF
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <p className="text-center text-charcoal/60 text-sm italic mt-10">
              Menus are updated periodically. Ask your server about today&apos;s fresh fish selections, seasonal specials, and <Link href="/happy-hour" className="text-accent-red hover:underline">Happy Hour</Link> offerings.
            </p>
          </div>
        </section>

        {/* Order Online CTA */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Can&apos;t Dine In? Order Online!
            </h2>
            <p className="text-warm-ivory/70 max-w-2xl mx-auto mb-8">
              Enjoy Jinbeh&apos;s sushi and Japanese favorites at home through our delivery partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-lewisville-2440-s-stemmons-fwy-a-lewisville/2135139"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl"
              >
                Order on Grubhub
              </a>
              <a
                href="https://www.ubereats.com/store/jinbeh-lewisville/0oug5xCoWo6bu5zODsyi_A/15b0bf12-93ff-47a1-bff2-439f0a6e9905"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl"
              >
                Order on Uber Eats
              </a>
            </div>
          </div>
        </section>

        {/* Reserve CTA */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Experience Jinbeh?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Reserve your table and prepare for dinner and a show!
            </p>
            <OpenTableWidget
              restaurantId={locationsData.locations.lewisville.reservation.rid}
              location="lewisville"
              buttonText="Reserve at Lewisville"
              variant="primary"
              className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-block"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );}
