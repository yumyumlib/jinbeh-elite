import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu | Jinbeh Lewisville | Hibachi & Sushi Menu Near Vista Ridge Mall",
  description:
    "Explore Jinbeh Lewisville's menu featuring fresh sushi, hibachi teppanyaki, lunch specials, and sake. View our hibachi menu, sushi rolls, and Japanese cuisine options near Vista Ridge Mall Centre.",
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
    description: "Fresh sushi, sizzling hibachi, and authentic Japanese cuisine. View our full menu.",
    url: "https://jinbeh.com/lewisville/menu",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/menu",
  },
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
        "text": "Yes! Sushi, appetizers, and some entrees are available for takeout and delivery through GrubHub and UberEats. Hibachi is best enjoyed dine-in for the full entertainment experience.",
      },
    },
  ],
};

const menuCategories = [
  {
    id: "hibachi",
    title: "Hibachi Teppanyaki",
    description: "Dinner and a show! Expertly grilled tableside by our master chefs.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/hibachi-grill.jpg",
    items: [
      { name: "Filet Mignon", description: "Premium beef tenderloin, perfectly seared" },
      { name: "Chicken Teriyaki", description: "Tender chicken with house teriyaki glaze" },
      { name: "Shrimp & Scallops", description: "Fresh seafood duo, flame-kissed" },
      { name: "Lobster Tail", description: "Succulent lobster, butter-grilled" },
      { name: "Vegetable Hibachi", description: "Fresh seasonal vegetables with tofu" },
    ],
    pdfUrl: "https://jinbeh.com/wp-content/uploads/2025/05/Jinbeh-Lewisville-Dinner-4.pdf",
    note: "All hibachi dinners include soup, salad, fried rice, and grilled vegetables",
  },
  {
    id: "sushi",
    title: "Sushi & Sashimi",
    description: "Fresh, artfully crafted, and bursting with flavor.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/sushi-platter.jpg",
    items: [
      { name: "Signature Rolls", description: "House specialty creations" },
      { name: "Classic Rolls", description: "Traditional favorites" },
      { name: "Sashimi Platter", description: "Chef's selection of pristine fish" },
      { name: "Nigiri", description: "Hand-pressed sushi rice with fresh fish" },
      { name: "Omakase", description: "Chef's tasting menu (reservation required)" },
    ],
    pdfUrl: "https://jinbeh.com/wp-content/uploads/2023/04/2023-Lewisville-Official-Sushi-Menu.pdf",
    note: "Ask about today's fresh fish selection",
  },
  {
    id: "lunch",
    title: "Lunch Specials",
    description: "Weekday specials served Monday-Friday, 11am-2pm.",
    image: "https://jinbeh.com/wp-content/uploads/2023/01/lunch-special.jpg",
    items: [
      { name: "Lunch Hibachi Combo", description: "Choice of protein with soup, salad, rice" },
      { name: "Bento Box", description: "Assorted Japanese favorites" },
      { name: "Lunch Sushi Roll Combo", description: "2-3 rolls with soup and salad" },
      { name: "Teriyaki Bowl", description: "Rice bowl with teriyaki protein" },
    ],
    pdfUrl: "https://jinbeh.com/wp-content/uploads/2023/12/Jinbeh-Lewisville-Lunch.pdf",
    note: "Weekend lunch hours: 11:30am-2:30pm",
  },
  {
    id: "drinks",
    title: "Drinks & Sake",
    description: "Full bar with premium sake, Japanese beer, and craft cocktails.",
    image: "https://jinbeh.com/wp-content/uploads/2022/11/lewisville-bg.jpg",
    items: [
      { name: "Premium Sake", description: "Hot or cold, by the glass or carafe" },
      { name: "Japanese Beer", description: "Sapporo, Asahi, Kirin" },
      { name: "Signature Cocktails", description: "Japanese-inspired creations" },
      { name: "Wine Selection", description: "Red, white, and sparkling options" },
    ],
    note: "Ask about Happy Hour specials!",
  },
];

export default function LewisvilleMenuPage() {
  return (
    <>
      <Header location="lewisville" />
      <main className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://jinbeh.com/wp-content/uploads/2023/01/sushi-background.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Jinbeh Lewisville
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto">
              Fresh ingredients, expert preparation, and flavors that transport you to Japan.
            </p>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="sticky top-20 z-40 bg-white border-b border-warm-ivory-dark shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 md:gap-6 py-4 overflow-x-auto">
              {menuCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 text-sm md:text-base font-medium text-charcoal hover:text-accent-red hover:bg-warm-ivory rounded-full transition-all whitespace-nowrap"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        {menuCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-20 ${index % 2 === 0 ? "bg-warm-ivory" : "bg-white"}`}
          >
            <div className="container mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl bg-accent-red/10 ${index % 2 === 0 ? "-bottom-4 -right-4" : "-bottom-4 -left-4"}`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-charcoal/70 mb-8">
                    {category.description}
                  </p>

                  {/* Menu Items Preview */}
                  <div className="space-y-4 mb-8">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start border-b border-charcoal/10 pb-3">
                        <div>
                          <h3 className="font-medium text-charcoal">{item.name}</h3>
                          <p className="text-sm text-charcoal/60">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {category.note && (
                    <p className="text-sm text-cedar-brown italic mb-6">
                      {category.note}
                    </p>
                  )}

                  {category.pdfUrl && (
                    <a
                      href={category.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn btn-primary"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Full {category.title} PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

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
                href="https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-lewisville-2693-preston-rd-lewisville/2134962"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl"
              >
                Order on GrubHub
              </a>
              <a
                href="https://www.ubereats.com/store/jinbeh-lewisville/0oug5xCoWo6bu5zODsyi_A/15b0bf12-93ff-47a1-bff2-439f0a6e9905"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl"
              >
                Order on UberEats
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
            <Link
              href="/lewisville#reserve"
              className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Reserve at Lewisville
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
