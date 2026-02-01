import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bar & Drinks | Jinbeh Japanese Restaurant - Sake, Whisky & Cocktails",
  description: "Discover Jinbeh's premium bar menu featuring Japanese sake, whisky, signature cocktails, and Japanese beer. Experience our curated selection of authentic spirits and drinks.",
  keywords: [
    "jinbeh bar",
    "sake menu",
    "japanese whisky",
    "cocktails frisco",
    "signature cocktails",
    "sake flights",
    "japanese beer",
    "premium sake",
    "hibiki whisky",
    "yamazaki",
  ],
  openGraph: {
    title: "Bar & Drinks | Jinbeh Japanese Restaurant",
    description: "Premium sake, Japanese whisky, and signature cocktails",
    url: "https://jinbeh.com/bar",
  },
  alternates: {
    canonical: "https://jinbeh.com/bar",
  },
};

// Bar/Menu Schema
const barSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Jinbeh Japanese Restaurant - Bar & Drinks",
  "description": "Premium bar featuring sake, Japanese whisky, cocktails, and Japanese beer",
  "url": "https://jinbeh.com/bar",
  "telephone": "+1-972-309-6688",
  "servesCuisine": "Japanese",
  "hasMenu": "https://jinbeh.com/bar",
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://jinbeh.com/bar",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of sake does Jinbeh offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh offers a curated selection of premium sake including Dassai, Kubota, and Hakkaisan, along with our house sake available hot and cold. We also feature nigori (unfiltered sake) and sake flights for those wanting to explore different varieties.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you have Japanese whisky?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our bar features premium Japanese whiskies including Yamazaki, Hibiki, and Suntory Toki. We also offer whisky flights for those interested in tasting different expressions.",
      },
    },
    {
      "@type": "Question",
      "name": "What are your signature cocktails?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our signature cocktails include Tokyo Mule, Sakura Martini, Yuzu Sour, and Japanese Old Fashioned. Each is carefully crafted to complement Japanese cuisine and feature authentic Japanese ingredients.",
      },
    },
    {
      "@type": "Question",
      "name": "What Japanese beers do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve popular Japanese beers including Sapporo, Asahi, and Kirin, along with a selection of domestic beer options.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer non-alcoholic drinks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer a variety of non-alcoholic options including Japanese sodas like Ramune, authentic Japanese tea, and other refreshing beverages.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there a bar happy hour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh offers Happy Hour specials on select drinks and appetizers. Visit our Happy Hour page or contact your local location for current times and specials.",
      },
    },
  ],
};

export default function BarPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-ivory">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(barSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/interior/JinbehFrisco_SushiBar.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Crafted & Curated
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Premium Bar
            </h1>
            <p className="text-xl md:text-2xl text-warm-ivory/95 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our exceptional selection of Japanese sake, whisky, signature cocktails, and authentic spirits.
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-8 py-4 mb-8">
              <p className="text-lg font-medium text-warm-ivory">
                Full Bar • No Reservation Needed • Sushi Bar View
              </p>
            </div>
        </section>

        {/* Sake Menu Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
                Sake Selection
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                Premium Sake
              </h2>
              <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                From delicate premium varieties to warming house sake, our curated selection celebrates the art of sake brewing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
              {/* Premium Sake */}
              <div className="bg-warm-ivory rounded-2xl p-8 border-2 border-soft-gold/30 hover:border-soft-gold/60 transition-all group">
                <div className="text-5xl mb-6 text-center">🍶</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3 text-center">
                  Premium Sake
                </h3>
                <p className="text-sm text-charcoal/60 text-center mb-6">
                  Finest Japanese craftsmanship
                </p>
                <ul className="space-y-3">
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✦</span>
                    <span className="font-medium">Dassai</span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✦</span>
                    <span className="font-medium">Kubota Senju</span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✦</span>
                    <span className="font-medium">Hakkaisan</span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✦</span>
                    <span className="font-medium">Junmai Daiginjo</span>
                  </li>
                </ul>
              </div>

              {/* House Sake */}
              <div className="bg-warm-ivory rounded-2xl p-8 border-2 border-deep-indigo/30 hover:border-deep-indigo/60 transition-all group">
                <div className="text-5xl mb-6 text-center">🔥</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3 text-center">
                  House Sake
                </h3>
                <p className="text-sm text-charcoal/60 text-center mb-6">
                  Perfect for every occasion
                </p>
                <ul className="space-y-3">
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-deep-indigo mt-1">✦</span>
                    <span><span className="font-medium">Hot Sake</span><br /><span className="text-xs text-charcoal/60">Warming & smooth</span></span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-deep-indigo mt-1">✦</span>
                    <span><span className="font-medium">Cold Sake</span><br /><span className="text-xs text-charcoal/60">Crisp & refreshing</span></span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-deep-indigo mt-1">✦</span>
                    <span><span className="font-medium">Glass or Carafe</span><br /><span className="text-xs text-charcoal/60">Share with friends</span></span>
                  </li>
                </ul>
              </div>

              {/* Sake Flights */}
              <div className="bg-warm-ivory rounded-2xl p-8 border-2 border-accent-red/30 hover:border-accent-red/60 transition-all group">
                <div className="text-5xl mb-6 text-center">✈️</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3 text-center">
                  Sake Flights
                </h3>
                <p className="text-sm text-charcoal/60 text-center mb-6">
                  Explore & compare varieties
                </p>
                <ul className="space-y-3">
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-accent-red mt-1">✦</span>
                    <span>3-glass flight sampler</span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-accent-red mt-1">✦</span>
                    <span>5-glass premium tasting</span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-accent-red mt-1">✦</span>
                    <span>Sommelier recommendations</span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-accent-red mt-1">✦</span>
                    <span>Seasonal selections</span>
                  </li>
                </ul>
              </div>

              {/* Nigori */}
              <div className="bg-warm-ivory rounded-2xl p-8 border-2 border-soft-gold/30 hover:border-soft-gold/60 transition-all group">
                <div className="text-5xl mb-6 text-center">☁️</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3 text-center">
                  Nigori
                </h3>
                <p className="text-sm text-charcoal/60 text-center mb-6">
                  Unfiltered & creamy
                </p>
                <ul className="space-y-3">
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✦</span>
                    <span><span className="font-medium">Sweet & Rich</span><br /><span className="text-xs text-charcoal/60">Milky appearance</span></span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✦</span>
                    <span><span className="font-medium">Smooth Finish</span><br /><span className="text-xs text-charcoal/60">Creamy texture</span></span>
                  </li>
                  <li className="text-charcoal/80 flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✦</span>
                    <span><span className="font-medium">Sake Desserts</span><br /><span className="text-xs text-charcoal/60">Perfect nightcap</span></span>
                  </li>
                </ul>
              </div>
            </div>
        </section>

        {/* Japanese Whisky Section */}
        <section className="py-24 bg-gradient-to-br from-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
                Whisky Selection
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Japanese Whisky
              </h2>
              <p className="text-xl text-warm-ivory/80 max-w-2xl mx-auto">
                Award-winning Japanese distilleries representing the pinnacle of craftsmanship and tradition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Yamazaki */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all group">
                <div className="text-5xl mb-6 text-center">🏔️</div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-center">
                  Yamazaki
                </h3>
                <p className="text-warm-ivory/80 text-center mb-6 leading-relaxed">
                  Japan's oldest malt whisky distillery, located in the foothills of Mount Tenno
                </p>
                <ul className="space-y-3">
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Single Malt Selection</span>
                  </li>
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>12, 18, 25 Year</span>
                  </li>
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Limited Editions</span>
                  </li>
                </ul>
              </div>

              {/* Hibiki */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all group">
                <div className="text-5xl mb-6 text-center">🎋</div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-center">
                  Hibiki
                </h3>
                <p className="text-warm-ivory/80 text-center mb-6 leading-relaxed">
                  Suntory's masterpiece - a harmonious blend of the finest whiskies
                </p>
                <ul className="space-y-3">
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Premium Blend</span>
                  </li>
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Smooth & Complex</span>
                  </li>
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Award Winner</span>
                  </li>
                </ul>
              </div>

              {/* Suntory Toki */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all group">
                <div className="text-5xl mb-6 text-center">⏰</div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-center">
                  Suntory Toki
                </h3>
                <p className="text-warm-ivory/80 text-center mb-6 leading-relaxed">
                  "Time" in Japanese - a contemporary, approachable blend for any moment
                </p>
                <ul className="space-y-3">
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Modern Blend</span>
                  </li>
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Versatile & Approachable</span>
                  </li>
                  <li className="text-warm-ivory flex items-center gap-2">
                    <span className="text-soft-gold">•</span>
                    <span>Perfect with Food</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Whisky Flights */}
            <div className="bg-white/10 backdrop-blur border border-soft-gold rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <h3 className="font-heading text-3xl font-bold mb-4">
                Whisky Flights
              </h3>
              <p className="text-warm-ivory/80 mb-6 text-lg">
                Compare and contrast Japanese whisky expressions with our guided tasting flights
              </p>
              <div className="space-y-3 inline-block">
                <p className="text-warm-ivory flex items-center gap-2">
                  <span className="text-soft-gold text-xl">✓</span>
                  <span>3-glass introductory flight</span>
                </p>
                <p className="text-warm-ivory flex items-center gap-2">
                  <span className="text-soft-gold text-xl">✓</span>
                  <span>Premium selection (neat and on the rocks)</span>
                </p>
                <p className="text-warm-ivory flex items-center gap-2">
                  <span className="text-soft-gold text-xl">✓</span>
                  <span>Sommelier recommendations & pairings</span>
                </p>
              </div>
            </div>
        </section>

        {/* Signature Cocktails Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
                Craft Cocktails
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                Signature Cocktails
              </h2>
              <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                Artfully crafted with Japanese spirits and authentic ingredients, inspired by the essence of Japan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Tokyo Mule */}
              <div className="bg-gradient-to-br from-charcoal to-deep-indigo text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🥃</div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Tokyo Mule
                </h3>
                <p className="text-soft-gold text-sm font-medium mb-4">Crisp • Ginger Forward</p>
                <p className="text-warm-ivory/80 mb-6 leading-relaxed">
                  Japanese whisky, yuzu juice, fresh ginger, and spicy ginger beer served over ice with a lime twist.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <p className="text-xs text-warm-ivory/60 uppercase tracking-wide mb-2">
                    Perfect With
                  </p>
                  <p className="text-warm-ivory font-medium">Spicy Tuna Roll, Gyoza</p>
                </div>
              </div>

              {/* Sakura Martini */}
              <div className="bg-gradient-to-br from-accent-red to-orange-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🌸</div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Sakura Martini
                </h3>
                <p className="text-soft-gold text-sm font-medium mb-4">Floral • Elegant</p>
                <p className="text-warm-ivory/80 mb-6 leading-relaxed">
                  Premium vodka, sakura (cherry blossom) liqueur, lychee juice, and a hint of rose with a sugared rim.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <p className="text-xs text-warm-ivory/60 uppercase tracking-wide mb-2">
                    Perfect With
                  </p>
                  <p className="text-warm-ivory font-medium">Delicate Sashimi, Light Rolls</p>
                </div>
              </div>

              {/* Yuzu Sour */}
              <div className="bg-gradient-to-br from-soft-gold to-yellow-500 text-charcoal rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🍋</div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Yuzu Sour
                </h3>
                <p className="text-charcoal/70 text-sm font-medium mb-4">Citrus • Refreshing</p>
                <p className="text-charcoal/80 mb-6 leading-relaxed">
                  Japanese whisky, fresh yuzu juice, lime, simple syrup, and a touch of egg white for a silky texture.
                </p>
                <div className="bg-charcoal/10 backdrop-blur rounded-lg p-4">
                  <p className="text-xs text-charcoal/60 uppercase tracking-wide mb-2">
                    Perfect With
                  </p>
                  <p className="text-charcoal font-medium">Sashimi Appetizers, Light Sushi</p>
                </div>
              </div>

              {/* Japanese Old Fashioned */}
              <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🥃</div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Japanese Old Fashioned
                </h3>
                <p className="text-soft-gold text-sm font-medium mb-4">Bold • Sophisticated</p>
                <p className="text-warm-ivory/80 mb-6 leading-relaxed">
                  Japanese single malt whisky, bitters, sugar, Japanese orange peel, and a large ice cube for elegant sipping.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <p className="text-xs text-warm-ivory/60 uppercase tracking-wide mb-2">
                    Perfect With
                  </p>
                  <p className="text-warm-ivory font-medium">Rich Hibachi, Wagyu</p>
                </div>
              </div>
            </div>
        </section>

        {/* Beer Section */}
        <section className="py-24 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
                Beer Selection
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                Japanese & Domestic Beer
              </h2>
              <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                From crisp Japanese lagers to classic American favorites, a perfect pairing for every appetite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Japanese Beers */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
                  <span className="text-3xl">🍺</span>
                  Japanese Beers
                </h3>
                <ul className="space-y-4">
                  <li className="pb-4 border-b border-charcoal/10">
                    <p className="font-semibold text-charcoal">Sapporo</p>
                    <p className="text-sm text-charcoal/60">Japan's oldest beer - crisp and clean</p>
                  </li>
                  <li className="pb-4 border-b border-charcoal/10">
                    <p className="font-semibold text-charcoal">Asahi Super Dry</p>
                    <p className="text-sm text-charcoal/60">Light, refreshing, perfectly balanced</p>
                  </li>
                  <li className="pb-4 border-b border-charcoal/10">
                    <p className="font-semibold text-charcoal">Kirin Ichiban</p>
                    <p className="text-sm text-charcoal/60">Premium brewing process - smooth taste</p>
                  </li>
                  <li>
                    <p className="font-semibold text-charcoal">Orion</p>
                    <p className="text-sm text-charcoal/60">Okinawan premium lager - tropical notes</p>
                  </li>
                </ul>
              </div>

              {/* Domestic Beers */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
                  <span className="text-3xl">🇺🇸</span>
                  Domestic Selection
                </h3>
                <ul className="space-y-4">
                  <li className="pb-4 border-b border-charcoal/10">
                    <p className="font-semibold text-charcoal">Bud Light</p>
                    <p className="text-sm text-charcoal/60">Light and refreshing classic</p>
                  </li>
                  <li className="pb-4 border-b border-charcoal/10">
                    <p className="font-semibold text-charcoal">Coors Light</p>
                    <p className="text-sm text-charcoal/60">Crisp and cold mountain water</p>
                  </li>
                  <li className="pb-4 border-b border-charcoal/10">
                    <p className="font-semibold text-charcoal">Miller High Life</p>
                    <p className="text-sm text-charcoal/60">The champagne of beers</p>
                  </li>
                  <li>
                    <p className="font-semibold text-charcoal">Texas Craft Selection</p>
                    <p className="text-sm text-charcoal/60">Rotating local favorites</p>
                  </li>
                </ul>
              </div>
            </div>
        </section>

        {/* Wine & Non-Alcoholic Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
              {/* Wine */}
              <div>
                <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
                  Wine Selection
                </p>
                <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
                  Wines
                </h2>
                <p className="text-charcoal/70 mb-8 leading-relaxed">
                  A carefully curated selection of wines from around the world, chosen to complement Japanese cuisine. From crisp white wines that pair beautifully with sashimi to full-bodied reds for hibachi entrees.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-red text-xl flex-shrink-0">♦</span>
                    <span className="text-charcoal">White wines for sashimi & sushi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-red text-xl flex-shrink-0">♦</span>
                    <span className="text-charcoal">Red wines for hibachi & grilled dishes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-red text-xl flex-shrink-0">♦</span>
                    <span className="text-charcoal">Wine by the glass or bottle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-red text-xl flex-shrink-0">♦</span>
                    <span className="text-charcoal">Sommelier recommendations available</span>
                  </li>
                </ul>
              </div>

              {/* Non-Alcoholic */}
              <div>
                <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
                  Non-Alcoholic Options
                </p>
                <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
                  Refreshing Alternatives
                </h2>
                <p className="text-charcoal/70 mb-8 leading-relaxed">
                  Perfect for designated drivers, non-drinkers, and anyone seeking authentic Japanese beverages. Explore traditional and modern refreshments.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-deep-indigo text-xl flex-shrink-0">◆</span>
                    <span>
                      <span className="text-charcoal font-semibold">Ramune</span>
                      <br />
                      <span className="text-sm text-charcoal/60">Iconic Japanese soda in glass bottles</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-deep-indigo text-xl flex-shrink-0">◆</span>
                    <span>
                      <span className="text-charcoal font-semibold">Japanese Sodas</span>
                      <br />
                      <span className="text-sm text-charcoal/60">Yuzu, melon, and seasonal flavors</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-deep-indigo text-xl flex-shrink-0">◆</span>
                    <span>
                      <span className="text-charcoal font-semibold">Japanese Tea</span>
                      <br />
                      <span className="text-sm text-charcoal/60">Green tea, oolong, and matcha options</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-deep-indigo text-xl flex-shrink-0">◆</span>
                    <span>
                      <span className="text-charcoal font-semibold">Soft Drinks</span>
                      <br />
                      <span className="text-sm text-charcoal/60">Classic and contemporary beverages</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </section>

        {/* Happy Hour Callout */}
        <section className="py-24 bg-gradient-to-r from-charcoal via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
                Special Offers
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Don't Miss Happy Hour
              </h2>
              <p className="text-xl text-warm-ivory/90 mb-10 leading-relaxed">
                Unwind at our bar with special prices on premium sake, Japanese whisky, signature cocktails, and appetizers. Monday through Friday during Happy Hour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/happy-hour"
                  className="btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all"
                >
                  View Happy Hour Specials
                </Link>
                <Link
                  href="/frisco#reserve"
                  className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-semibold rounded-xl transition-all"
                >
                  Make a Reservation
                </Link>
              </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                Learn more about our bar, drinks, and service
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What is sake and how is it different from wine?",
                  answer: "Sake is a traditional Japanese alcoholic beverage made from fermented rice. Unlike wine made from grapes, sake is brewed more like beer through a unique fermentation process. It has a smooth, delicate flavor profile and is served hot or cold depending on the type.",
                },
                {
                  question: "What's the difference between hot and cold sake?",
                  answer: "Hot sake (atsukan) is warming and brings out deeper, richer flavors - perfect for winter or after-work relaxation. Cold sake (reishu) is crisp and refreshing, enhancing more delicate notes. The serving temperature can vary the entire drinking experience.",
                },
                {
                  question: "Can I just sit at the bar without a reservation?",
                  answer: "Absolutely! Bar seating is available on a first-come, first-served basis. No reservation needed. It's a great spot to watch our talented sushi chefs at work while enjoying a premium drink.",
                },
                {
                  question: "What are sake flights and why would I try one?",
                  answer: "A sake flight is a tasting that features 3-5 different sake varieties in small pours. It's a perfect way to explore different flavors, brewing styles, and preferences. Our sommelier can guide you through the tasting and recommend your favorites.",
                },
                {
                  question: "What makes Japanese whisky different?",
                  answer: "Japanese whisky is known for its precision, balance, and craftsmanship. Japanese distillers follow meticulous processes and emphasize harmony of flavors. The water quality, climate, and traditional brewing methods create a unique, refined taste profile.",
                },
                {
                  question: "Are the signature cocktails very strong?",
                  answer: "Our signature cocktails are carefully balanced to complement Japanese cuisine while providing a sophisticated drinking experience. They're meant to be sipped and enjoyed, not rushed. If you prefer lighter options, our bartenders can adjust strength or suggest alternatives.",
                },
                {
                  question: "What's your recommendation for pairing drinks with food?",
                  answer: "Light, crisp beers and cold sake pair beautifully with sushi and sashimi. Hot sake and premium whiskies complement hibachi entrees and grilled dishes. Our sommelier and bartenders are happy to make personalized recommendations based on your meal choice.",
                },
                {
                  question: "Do you have options for non-drinkers?",
                  answer: "Yes! We offer a variety of non-alcoholic options including Japanese sodas like Ramune, authentic Japanese teas, traditional beverages, and soft drinks. Non-drinkers are always welcome to enjoy our atmosphere and food.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group border-2 border-charcoal/10 rounded-xl overflow-hidden hover:border-soft-gold/50 transition-colors"
                >
                  <summary className="cursor-pointer p-6 flex justify-between items-center bg-warm-ivory/50 group-open:bg-warm-ivory hover:bg-warm-ivory transition-colors">
                    <h3 className="font-heading font-semibold text-charcoal text-lg">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-charcoal group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-charcoal/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-charcoal text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="text-soft-gold font-medium tracking-wider uppercase text-sm mb-4">
              Visit Jinbeh
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Experience Our Premium Bar
            </h2>
            <p className="text-xl text-warm-ivory/80 max-w-2xl mx-auto mb-12">
              Visit us at either location and discover why Jinbeh is the premier destination for Japanese sake, whisky, and craft cocktails in the DFW area.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* Frisco */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Frisco</h3>
                <p className="text-warm-ivory/80 mb-6">
                  2693 Preston Rd Suite 1040<br />
                  Frisco, TX 75034
                </p>
                <Link
                  href="/frisco#reserve"
                  className="inline-block btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-6 py-3 font-semibold rounded-lg"
                >
                  Reserve at Frisco
                </Link>
              </div>

              {/* Lewisville */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Lewisville</h3>
                <p className="text-warm-ivory/80 mb-6">
                  2440 S Stemmons Fwy #A<br />
                  Lewisville, TX 75067
                </p>
                <Link
                  href="/lewisville#reserve"
                  className="inline-block btn bg-soft-gold text-charcoal hover:bg-soft-gold/90 px-6 py-3 font-semibold rounded-lg"
                >
                  Reserve at Lewisville
                </Link>
              </div>
            </div>

            <p className="text-warm-ivory/70 text-sm">
              Bar seating available on a first-come, first-served basis. No reservation required for bar seating.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
