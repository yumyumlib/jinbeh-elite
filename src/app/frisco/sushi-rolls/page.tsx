import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sushi Rolls Menu | Jinbeh Frisco Japanese Restaurant",
  description: "Explore Jinbeh Frisco's sushi rolls menu. Craftsmanship, freshness, artistry. 14 delicious options from Dragon Roll to Yellowtail Jalapeño Roll. Near Stonebriar Centre, minutes from Legacy West.",
  keywords: ["sushi rolls frisco","best sushi rolls frisco","sushi rolls menu frisco","jinbeh sushi rolls","japanese sushi rolls frisco","sushi rolls","specialty rolls","maki","uramaki"],
  openGraph: {
    title: "Sushi Rolls Menu | Jinbeh Frisco",
    description: "Craftsmanship, freshness, artistry. 14 sushi rolls options at Jinbeh Frisco.",
    url: "https://jinbeh.com/frisco/sushi-rolls",
  },
  alternates: {
    canonical: "https://jinbeh.com/frisco/sushi-rolls",
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Sushi Rolls Menu - Jinbeh Frisco",
  "description": "Sushi Rolls menu at Jinbeh Japanese Restaurant in Frisco, TX",
  "hasMenuSection": {
    "@type": "MenuSection",
    "name": "Sushi Rolls",
    "hasMenuItem": [
      {
        "@type": "MenuItem",
        "name": "Dragon Roll",
        "description": "Eel and cucumber topped with avocado and eel sauce",
        "offers": {
          "@type": "Offer",
          "price": "16.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Rainbow Roll",
        "description": "California roll topped with assorted sashimi",
        "offers": {
          "@type": "Offer",
          "price": "17.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Spider Roll",
        "description": "Soft shell crab with cucumber and spicy mayo",
        "offers": {
          "@type": "Offer",
          "price": "15.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Caterpillar Roll",
        "description": "Eel roll topped with avocado slices",
        "offers": {
          "@type": "Offer",
          "price": "15.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Volcano Roll",
        "description": "Spicy crab and avocado with baked seafood topping",
        "offers": {
          "@type": "Offer",
          "price": "16.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Tiger Roll",
        "description": "Shrimp tempura with spicy tuna and jalapeño",
        "offers": {
          "@type": "Offer",
          "price": "17.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Butterfly Kiss Roll",
        "description": "House specialty with cream cheese and crab",
        "offers": {
          "@type": "Offer",
          "price": "18.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Ahi Tuna Tower",
        "description": "Layered ahi tuna, avocado, and crispy wonton",
        "offers": {
          "@type": "Offer",
          "price": "19.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Philadelphia Roll",
        "description": "Smoked salmon with cream cheese and cucumber",
        "offers": {
          "@type": "Offer",
          "price": "12.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Spicy Tuna Roll",
        "description": "Fresh tuna with spicy mayo and scallions",
        "offers": {
          "@type": "Offer",
          "price": "11.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "California Roll",
        "description": "Crab, avocado, and cucumber classic",
        "offers": {
          "@type": "Offer",
          "price": "9.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Shrimp Tempura Roll",
        "description": "Crispy shrimp tempura with avocado",
        "offers": {
          "@type": "Offer",
          "price": "13.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Vegas Roll",
        "description": "Deep-fried roll with spicy crab and cream cheese",
        "offers": {
          "@type": "Offer",
          "price": "14.95",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Yellowtail Jalapeño Roll",
        "description": "Fresh yellowtail with jalapeño and ponzu",
        "offers": {
          "@type": "Offer",
          "price": "16.95",
          "priceCurrency": "USD"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What sushi rolls does Jinbeh Frisco serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Frisco offers an extensive sushi rolls menu with 14 options including favorites like Dragon Roll, Rainbow Roll, Spider Roll, and more. All prepared fresh by our skilled chefs."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most popular sushi rolls at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guest favorites include Dragon Roll ($16.95), Rainbow Roll ($17.95), Spider Roll ($15.95), Caterpillar Roll ($15.95). These are consistently rated as the best sushi rolls in Frisco."
      }
    },
    {
      "@type": "Question",
      "name": "Are reservations needed for sushi rolls at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reservations are recommended, especially for dinner. Call (214) 619-1200 or book online. Walk-ins are welcome based on availability."
      }
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh Frisco offer sushi rolls for takeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most sushi rolls items are available for takeout and delivery. Call (214) 619-1200 or order online. "
      }
    },
    {
      "@type": "Question",
      "name": "What are sushi rolls prices at Jinbeh Frisco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sushi Rolls prices range from 9.95 to 19.95. See our full menu for complete pricing."
      }
    }
  ]
};

export default function SushiRollsFriscoPage() {
  return (
    <>
      <Header location="frisco" />
      <main className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Breadcrumb */}
        <nav className="bg-white border-b border-warm-ivory-dark">
          <div className="container mx-auto px-6 py-3">
            <ol className="flex items-center gap-2 text-sm text-charcoal/80">
              <li><Link href="/" className="hover:text-accent-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/frisco" className="hover:text-accent-red">Frisco</Link></li>
              <li>/</li>
              <li><Link href="/frisco/menu" className="hover:text-accent-red">Menu</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">Sushi Rolls</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Jinbeh Frisco Menu
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Sushi Rolls
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                Craftsmanship, freshness, artistry. Explore our 14 sushi rolls options,
                each crafted with care and the finest ingredients.
              </p>
              <Link
                href="/frisco#reserve"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve Your Table
              </Link>
            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Our Sushi Rolls Selection
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                14 options ranging from 9.95 to 19.95
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link
                href="/frisco/sushi-rolls/dragon-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Dragon Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Eel and cucumber topped with avocado and eel sauce
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$16.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/rainbow-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Rainbow Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    California roll topped with assorted sashimi
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$17.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/spider-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Spider Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Soft shell crab with cucumber and spicy mayo
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$15.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/caterpillar-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Caterpillar Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Eel roll topped with avocado slices
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$15.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/volcano-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Volcano Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Spicy crab and avocado with baked seafood topping
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$16.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/tiger-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Tiger Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Shrimp tempura with spicy tuna and jalapeño
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$17.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/butterfly-kiss"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Butterfly Kiss Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    House specialty with cream cheese and crab
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$18.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/ahi-tower"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Ahi Tuna Tower
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Layered ahi tuna, avocado, and crispy wonton
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$19.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/philly-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Philadelphia Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Smoked salmon with cream cheese and cucumber
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$12.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/spicy-tuna-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Spicy Tuna Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Fresh tuna with spicy mayo and scallions
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$11.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/california-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    California Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Crab, avocado, and cucumber classic
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$9.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/shrimp-tempura-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Shrimp Tempura Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Crispy shrimp tempura with avocado
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$13.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/vegas-roll"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Vegas Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Deep-fried roll with spicy crab and cream cheese
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$14.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/frisco/sushi-rolls/yellowtail-jalapeno"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">🍣</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    Yellowtail Jalapeño Roll
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    Fresh yellowtail with jalapeño and ponzu
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">$16.95</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Experience Our Sushi Rolls
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                The heart of Frisco's restaurant scene. Ample parking in the shopping center lot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/frisco#reserve"
                  className="bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Reserve a Table
                </Link>
                <a
                  href="tel:2146191200"
                  className="bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Call (214) 619-1200
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                Sushi Rolls FAQ
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What sushi rolls does Jinbeh Frisco serve?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Jinbeh Frisco offers an extensive sushi rolls menu with 14 options including favorites like Dragon Roll, Rainbow Roll, Spider Roll, and more. All prepared fresh by our skilled chefs.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are the most popular sushi rolls at Jinbeh?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Guest favorites include Dragon Roll (\$16.95), Rainbow Roll (\$17.95), Spider Roll (\$15.95), Caterpillar Roll (\$15.95). These are consistently rated as the best sushi rolls in Frisco.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Are reservations needed for sushi rolls at Jinbeh Frisco?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Reservations are recommended, especially for dinner. Call (214) 619-1200 or book online. Walk-ins are welcome based on availability.
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">Does Jinbeh Frisco offer sushi rolls for takeout?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Yes! Most sushi rolls items are available for takeout and delivery. Call (214) 619-1200 or order online. 
                  </p>
                </details>
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">What are sushi rolls prices at Jinbeh Frisco?</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    Sushi Rolls prices range from 9.95 to 19.95. See our full menu for complete pricing.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              Explore More at Jinbeh Frisco
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              
              <Link
                href="/frisco/hibachi"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🔥</span>
                <h3 className="font-heading font-bold text-charcoal">Hibachi</h3>
              </Link>
              <Link
                href="/frisco/sashimi"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🐟</span>
                <h3 className="font-heading font-bold text-charcoal">Sashimi</h3>
              </Link>
              <Link
                href="/frisco/appetizers"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🥢</span>
                <h3 className="font-heading font-bold text-charcoal">Appetizers</h3>
              </Link>
              <Link
                href="/frisco/cocktails"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">🍶</span>
                <h3 className="font-heading font-bold text-charcoal">Cocktails & Sake</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also serving sushi rolls at our{' '}
              <Link
                href="/lewisville/sushi-rolls"
                className="text-soft-gold hover:underline"
              >
                Lewisville location
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
