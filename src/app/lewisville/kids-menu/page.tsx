import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kids Menu | Jinbeh Lewisville Japanese Restaurant",
  description:
    "Fun and delicious kids menu at Jinbeh Lewisville! Hibachi, sushi rolls, sides, and desserts for children. Perfect for families. Birthday parties available. Off I-35E near Vista Ridge Mall.",
  keywords: [
    "kids menu lewisville",
    "children's menu hibachi",
    "kids sushi lewisville",
    "family restaurant lewisville",
    "kids birthday party hibachi",
    "japanese restaurant for kids",
  ],
  openGraph: {
    title: "Kids Menu | Jinbeh Lewisville Japanese Restaurant",
    description:
      "Fun and delicious kids menu at Jinbeh Lewisville! Hibachi, sushi rolls, sides, and desserts.",
    url: "https://jinbeh.com/lewisville/kids-menu",
  },
  alternates: {
    canonical: "https://jinbeh.com/lewisville/kids-menu",
  },
};

const kidsMenuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Kids Menu - Jinbeh Lewisville",
  "description":
    "Kids menu at Jinbeh Japanese Restaurant in Lewisville, featuring hibachi, sushi rolls, and Japanese dishes for children",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Kids Hibachi",
      "description":
        "Kids hibachi portions with entertaining chef preparation at the table",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Kids Hibachi Chicken",
          "description": "Tender chicken breast cooked on the teppan grill with rice",
          "offers": {
            "@type": "Offer",
            "price": "10.95",
            "priceCurrency": "USD",
          },
        },
        {
          "@type": "MenuItem",
          "name": "Kids Hibachi Steak",
          "description": "Kid-friendly portion of steak cooked on the teppan grill",
          "offers": {
            "@type": "Offer",
            "price": "11.95",
            "priceCurrency": "USD",
          },
        },
        {
          "@type": "MenuItem",
          "name": "Kids Hibachi Shrimp",
          "description": "Small jumbo shrimp cooked on the teppan grill with rice",
          "offers": {
            "@type": "Offer",
            "price": "10.95",
            "priceCurrency": "USD",
          },
        },
      ],
    },
    {
      "@type": "MenuSection",
      "name": "Kids Sushi & Rolls",
      "description": "Kid-friendly sushi rolls perfect for introducing children to sushi",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "California Roll",
          "description": "Imitation crab, cucumber, and avocado - a mild classic",
          "offers": {
            "@type": "Offer",
            "price": "8.95",
            "priceCurrency": "USD",
          },
        },
        {
          "@type": "MenuItem",
          "name": "Cucumber Roll",
          "description": "Refreshing cucumber - perfect for sushi beginners",
          "offers": {
            "@type": "Offer",
            "price": "7.95",
            "priceCurrency": "USD",
          },
        },
        {
          "@type": "MenuItem",
          "name": "Avocado Roll",
          "description": "Fresh avocado rolled in rice and seaweed",
          "offers": {
            "@type": "Offer",
            "price": "8.95",
            "priceCurrency": "USD",
          },
        },
      ],
    },
    {
      "@type": "MenuSection",
      "name": "Sides & Soups",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Fried Rice",
          "description": "Fluffy fried rice cooked with egg and vegetables",
          "offers": {
            "@type": "Offer",
            "price": "3.95",
            "priceCurrency": "USD",
          },
        },
        {
          "@type": "MenuItem",
          "name": "Miso Soup",
          "description": "Warm, salty miso broth with tofu and seaweed",
          "offers": {
            "@type": "Offer",
            "price": "2.95",
            "priceCurrency": "USD",
          },
        },
        {
          "@type": "MenuItem",
          "name": "Edamame",
          "description": "Steamed soybeans with a sprinkle of sea salt",
          "offers": {
            "@type": "Offer",
            "price": "4.95",
            "priceCurrency": "USD",
          },
        },
      ],
    },
    {
      "@type": "MenuSection",
      "name": "Desserts",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Ice Cream",
          "description":
            "Vanilla or green tea ice cream - a sweet treat to finish your meal",
          "offers": {
            "@type": "Offer",
            "price": "3.95",
            "priceCurrency": "USD",
          },
        },
        {
          "@type": "MenuItem",
          "name": "Mochi Ice Cream",
          "description":
            "Chewy mochi with ice cream inside - fun texture for kids!",
          "offers": {
            "@type": "Offer",
            "price": "4.95",
            "priceCurrency": "USD",
          },
        },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh good for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Jinbeh is an excellent family restaurant with a dedicated kids menu, entertaining hibachi shows at the table, and a welcoming atmosphere for children of all ages.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Jinbeh have birthday parties for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh specializes in kids birthday parties with hibachi entertainment, cake service, and customizable party packages. Visit our celebrations page to learn more.",
      },
    },
    {
      "@type": "Question",
      "name": "What age is good for sushi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Children ages 4 and up typically enjoy our kids sushi rolls. Start with milder options like cucumber or California rolls. Always consult with parents about their child's food preferences and allergies.",
      },
    },
    {
      "@type": "Question",
      "name": "Can kids watch the hibachi cook?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our hibachi shows are perfect for kids. Chefs cook right at your table with entertaining knife tricks, fire tricks, and the famous onion volcano performance.",
      },
    },
    {
      "@type": "Question",
      "name": "Are there allergy options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can accommodate many dietary restrictions and allergies. Please inform your server of any allergies, and we will do our best to prepare food accordingly.",
      },
    },
  ],
};

export default function KidsMenuLewisvillePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kidsMenuSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section - Playful Design */}
        <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red via-deep-indigo to-soft-gold" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 text-8xl animate-bounce" style={{ animationDelay: "0s" }}>
              🍱
            </div>
            <div className="absolute top-20 right-20 text-7xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              🍣
            </div>
            <div className="absolute bottom-10 left-1/4 text-8xl animate-bounce" style={{ animationDelay: "0.4s" }}>
              🥢
            </div>
            <div className="absolute bottom-20 right-1/4 text-7xl animate-bounce" style={{ animationDelay: "0.6s" }}>
              ✨
            </div>
          </div>

          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-warm-ivory font-medium tracking-wider uppercase mb-4 text-lg">
              Fun for the Whole Family
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 hero-headline">
              Kids Menu
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto hero-subheadline">
              Delicious dishes made for kids, with the fun and entertainment that makes Jinbeh special!
            </p>
          </div>
        </section>

        {/* Intro Section with Fun Facts */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-8 text-center">
                Welcome to Our Kids Menu!
              </h2>
              <p className="text-lg text-charcoal/80 mb-8 text-center">
                At Jinbeh, we believe dining should be fun for everyone. Our kids menu features delicious,
                kid-friendly portions of our most popular dishes - from entertaining hibachi performances to
                beginner-friendly sushi rolls.
              </p>

              {/* Fun Facts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-accent-red">
                  <div className="text-5xl mb-4">🔥</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">The Onion Volcano</h3>
                  <p className="text-charcoal/70">
                    Watch our chefs stack an onion into a volcano shape and create a fiery eruption right at your table!
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-deep-indigo">
                  <div className="text-5xl mb-4">🍣</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Sushi is Fun!</h3>
                  <p className="text-charcoal/70">
                    Our mild sushi rolls are perfect for introducing kids to this delicious Japanese tradition.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-soft-gold">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Special Occasions</h3>
                  <p className="text-charcoal/70">
                    Make birthdays unforgettable with our entertaining hibachi show and celebration packages!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kids Hibachi Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-charcoal mb-4 text-center">
                Kids Hibachi Show
              </h2>
              <p className="text-lg text-charcoal/70 text-center mb-12 max-w-2xl mx-auto">
                Experience the excitement of our famous hibachi performance with kid-friendly portions!
                Your chef will cook right in front of you with amazing knife skills and fiery tricks.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kids Hibachi Chicken */}
                <div className="bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="text-6xl mb-6 text-center">🍗</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 text-center">
                    Kids Hibachi Chicken
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Tender, juicy chicken breast cooked right at your table with vegetables and fried rice
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-charcoal/60">
                      ✓ Fried Rice<br />
                      ✓ Vegetables<br />
                      ✓ Butter & Soy Sauce
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-accent-red text-center">$10.95</p>
                </div>

                {/* Kids Hibachi Steak */}
                <div className="bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8 transform md:scale-105">
                  <div className="absolute -top-2 -right-2 bg-accent-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    ⭐
                  </div>
                  <div className="text-6xl mb-6 text-center">🥩</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 text-center">
                    Kids Hibachi Steak
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Tender steak cooked to perfection on the teppan grill with vegetables and fried rice
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-charcoal/60">
                      ✓ Fried Rice<br />
                      ✓ Vegetables<br />
                      ✓ Butter & Soy Sauce
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-accent-red text-center">$11.95</p>
                </div>

                {/* Kids Hibachi Shrimp */}
                <div className="bg-warm-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="text-6xl mb-6 text-center">🍤</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 text-center">
                    Kids Hibachi Shrimp
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Succulent jumbo shrimp cooked on the teppan grill with vegetables and fried rice
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-charcoal/60">
                      ✓ Fried Rice<br />
                      ✓ Vegetables<br />
                      ✓ Butter & Soy Sauce
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-accent-red text-center">$10.95</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kids Sushi Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-charcoal mb-4 text-center">
                Kids Sushi & Rolls
              </h2>
              <p className="text-lg text-charcoal/70 text-center mb-12 max-w-2xl mx-auto">
                Gentle introduction to sushi with mild, delicious rolls perfect for first-time sushi eaters!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* California Roll */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="text-6xl mb-6 text-center">🥒</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 text-center">
                    California Roll
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    The perfect starter sushi! Imitation crab, cucumber, and creamy avocado rolled in rice
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-charcoal/60">
                      ✓ Imitation Crab<br />
                      ✓ Cucumber<br />
                      ✓ Avocado
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-deep-indigo text-center">$8.95</p>
                </div>

                {/* Cucumber Roll */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="text-6xl mb-6 text-center">🥒</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 text-center">
                    Cucumber Roll
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Simple, refreshing, and perfect for sushi beginners. Just cucumber with a mild taste!
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-charcoal/60">
                      ✓ Cucumber<br />
                      ✓ Rice<br />
                      ✓ Seaweed
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-deep-indigo text-center">$7.95</p>
                </div>

                {/* Avocado Roll */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="text-6xl mb-6 text-center">🥑</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 text-center">
                    Avocado Roll
                  </h3>
                  <p className="text-charcoal/70 mb-6 text-center">
                    Fresh, creamy avocado rolled perfectly. A mild, delicious choice for young palates
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-charcoal/60">
                      ✓ Avocado<br />
                      ✓ Rice<br />
                      ✓ Seaweed
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-deep-indigo text-center">$8.95</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sides & Soups Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-12 text-center">
                Sides & Soups
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Fried Rice */}
                <div className="bg-warm-ivory rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">🍚 Fried Rice</h3>
                  <p className="text-charcoal/70 mb-4">
                    Fluffy fried rice cooked with egg and fresh vegetables
                  </p>
                  <p className="text-2xl font-bold text-soft-gold">$3.95</p>
                </div>

                {/* Miso Soup */}
                <div className="bg-warm-ivory rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">🍲 Miso Soup</h3>
                  <p className="text-charcoal/70 mb-4">
                    Warm, savory miso broth with tofu and seaweed
                  </p>
                  <p className="text-2xl font-bold text-soft-gold">$2.95</p>
                </div>

                {/* Edamame */}
                <div className="bg-warm-ivory rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">🫘 Edamame</h3>
                  <p className="text-charcoal/70 mb-4">
                    Steamed soybeans with a light sprinkle of sea salt
                  </p>
                  <p className="text-2xl font-bold text-soft-gold">$4.95</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desserts Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-12 text-center">
                Sweet Treats
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {/* Ice Cream */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-7xl mb-6">🍦</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">Ice Cream</h3>
                  <p className="text-charcoal/70 mb-6">
                    Smooth and creamy vanilla or refreshing green tea ice cream
                  </p>
                  <p className="text-3xl font-bold text-accent-red">$3.95</p>
                </div>

                {/* Mochi Ice Cream */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-7xl mb-6">🍡</div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">Mochi Ice Cream</h3>
                  <p className="text-charcoal/70 mb-6">
                    Chewy, colorful mochi with ice cream inside - so fun to eat!
                  </p>
                  <p className="text-3xl font-bold text-accent-red">$4.95</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Cool Japanese Food Facts for Kids! 🌟
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-accent-red to-deep-indigo text-white rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Sushi comes in many forms</h3>
                  <p className="text-lg leading-relaxed">
                    Did you know? Sushi doesn't just mean raw fish! It means rice with vinegar. You can have sushi
                    with cooked fish, vegetables, eggs, and more. Our kids rolls have NO raw fish - they're all safe and delicious!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-soft-gold to-accent-red text-white rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Chopsticks have history</h3>
                  <p className="text-lg leading-relaxed">
                    Chopsticks have been used in Japan for over 1,000 years! They were invented in China but became
                    super popular in Japan. Using chopsticks is like learning a cool new skill!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-deep-indigo to-soft-gold text-white rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Hibachi is entertainment</h3>
                  <p className="text-lg leading-relaxed">
                    Hibachi cooking started in Japan and combines cooking with entertainment. Your chef is like a
                    magician with a knife and spatula - the onion volcano is their most famous trick!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-accent-red via-deep-indigo to-soft-gold text-white rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Seaweed is super healthy</h3>
                  <p className="text-lg leading-relaxed">
                    The seaweed in sushi (called nori) is packed with vitamins and minerals. Japanese people have used
                    it for thousands of years because it's so nutritious and tasty!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Birthday Party Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-accent-red to-deep-indigo rounded-3xl p-12 text-white shadow-2xl">
                <div className="text-7xl mb-6 text-center">🎂🎉</div>
                <h2 className="text-4xl font-heading font-bold mb-6 text-center">
                  Birthday Party Magic at Jinbeh!
                </h2>
                <p className="text-xl text-white/90 mb-8 text-center leading-relaxed">
                  Make your child's birthday unforgettable with our special party packages! Your guests will enjoy
                  watching our hibachi chefs perform, and we'll take care of the celebration details.
                </p>

                <div className="bg-white/20 backdrop-blur rounded-2xl p-8 mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-6 text-warm-ivory">What's Included:</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🔥</span>
                      <span>Hibachi cooking show right at your table</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🎂</span>
                      <span>Birthday cake service and singing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">🍽️</span>
                      <span>Customized kids menu options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">⭐</span>
                      <span>Special birthday dessert or treat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                      <span>Personalized service and attention to detail</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <Link
                    href="/celebrations/birthday"
                    className="inline-block bg-white text-accent-red hover:bg-warm-ivory px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Plan a Birthday Party
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                Parents' Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <details className="group bg-warm-ivory rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading text-xl font-bold text-charcoal hover:text-accent-red transition-colors">
                    <span>Is Jinbeh good for kids?</span>
                    <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/80 border-t border-charcoal/10">
                    <p>
                      Absolutely! Jinbeh is perfect for families. We have a dedicated kids menu with smaller portions,
                      entertaining hibachi shows that kids love, and a welcoming atmosphere. Our staff is experienced
                      with children and will make sure your family has a memorable dining experience.
                    </p>
                  </div>
                </details>

                {/* FAQ 2 */}
                <details className="group bg-warm-ivory rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading text-xl font-bold text-charcoal hover:text-accent-red transition-colors">
                    <span>What age is good for sushi?</span>
                    <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/80 border-t border-charcoal/10">
                    <p>
                      Children ages 4 and up typically enjoy our kids sushi rolls. We recommend starting with mild,
                      cooked options like cucumber or California rolls. There's no rush - let your child explore at
                      their own pace! Always inform us of any food allergies or sensitivities.
                    </p>
                  </div>
                </details>

                {/* FAQ 3 */}
                <details className="group bg-warm-ivory rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading text-xl font-bold text-charcoal hover:text-accent-red transition-colors">
                    <span>Can kids watch the hibachi cook?</span>
                    <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/80 border-t border-charcoal/10">
                    <p>
                      Yes! That's one of the best parts! Our hibachi shows are perfect for kids. Chefs cook right in
                      front of you at your table with amazing knife skills, fire tricks, and our famous onion volcano.
                      Kids absolutely love the entertainment and excitement of the hibachi experience.
                    </p>
                  </div>
                </details>

                {/* FAQ 4 */}
                <details className="group bg-warm-ivory rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading text-xl font-bold text-charcoal hover:text-accent-red transition-colors">
                    <span>Are there allergy-friendly options?</span>
                    <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/80 border-t border-charcoal/10">
                    <p>
                      We can accommodate many dietary restrictions and allergies. Please inform your server of any food
                      allergies or dietary needs when you arrive, and we'll work with our kitchen to prepare safe and
                      delicious food for your child. We take allergies very seriously.
                    </p>
                  </div>
                </details>

                {/* FAQ 5 */}
                <details className="group bg-warm-ivory rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading text-xl font-bold text-charcoal hover:text-accent-red transition-colors">
                    <span>Can we bring outside food or cake for birthday parties?</span>
                    <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/80 border-t border-charcoal/10">
                    <p>
                      Yes, we allow outside cakes for birthday parties! However, we also offer delicious cake options
                      for your celebration. Contact our team when booking your party to discuss all the options and
                      make your celebration as special as possible.
                    </p>
                  </div>
                </details>

                {/* FAQ 6 */}
                <details className="group bg-warm-ivory rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading text-xl font-bold text-charcoal hover:text-accent-red transition-colors">
                    <span>Does Jinbeh take reservations for kids meals?</span>
                    <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-charcoal/80 border-t border-charcoal/10">
                    <p>
                      We recommend making a reservation, especially for larger groups or during busy times. Walk-ins
                      are welcome, but a reservation ensures you get your preferred seating time. Call us to book your
                      table and let us know you're bringing kids so we can prepare the perfect experience!
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Reservation CTA */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Plan Your Family Dining Experience?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Make a reservation today and let us create a memorable experience for your family at Jinbeh!
            </p>

            <div className="bg-white/20 backdrop-blur rounded-2xl p-8 max-w-3xl mx-auto mb-10">
              <h3 className="font-heading text-2xl font-bold mb-6 text-warm-ivory">Jinbeh Lewisville</h3>
              <p className="text-lg mb-4">📍 725 W Main St, Lewisville, TX 75057</p>
              <p className="text-lg mb-8">Off I-35E near Vista Ridge Mall</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lewisville#reserve"
                  className="bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all font-heading"
                >
                  Make a Reservation
                </Link>
                <a
                  href="tel:+1234567890"
                  className="bg-white/20 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-accent-red px-8 py-4 text-lg font-semibold rounded-xl transition-all font-heading"
                >
                  Call Us
                </a>
              </div>
            </div>

            <p className="text-white/80 max-w-2xl mx-auto">
              Questions? Our team loves helping families plan the perfect dining experience. Don't hesitate to reach out!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
