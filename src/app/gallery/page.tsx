import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Jinbeh Japanese Restaurant - Photos & Images | Frisco & Lewisville",
  description:
    "Explore Jinbeh's photo gallery showcasing our hibachi chefs in action, fresh sushi & rolls, and memorable dining experiences. See why families love celebrating at our restaurants.",
  keywords: [
    "jinbeh photos",
    "hibachi restaurant photos",
    "sushi photos",
    "hibachi action",
    "japanese restaurant gallery",
    "frisco restaurant photos",
    "lewisville restaurant photos",
  ],
  openGraph: {
    title: "Jinbeh Gallery | Hibachi & Sushi Photos",
    description: "See our hibachi chefs, sushi artistry, and dining experiences at Jinbeh.",
    url: "https://jinbeh.com/gallery",
    images: [
      {
        url: "https://jinbeh.com/images/food/OnionVolcanoDemo.jpg",
        width: 1200,
        height: 630,
        alt: "Hibachi chef performing the famous onion volcano at Jinbeh",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/gallery",
  },
};

// Image Gallery Schema for rich snippets
const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Jinbeh Japanese Restaurant Photo Gallery",
  "description": "Photo gallery showcasing hibachi action, sushi & rolls, dining experiences, and celebrations at Jinbeh.",
  "url": "https://jinbeh.com/gallery",
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://jinbeh.com/images/food/OnionVolcanoDemo.jpg",
      "name": "Hibachi Chef Onion Volcano",
      "description": "Hibachi chef performing the famous onion volcano",
    },
    {
      "@type": "ImageObject",
      "url": "https://jinbeh.com/images/photoshoot/sushi-tower.jpg",
      "name": "Sushi Tower",
      "description": "Fresh and beautifully arranged sushi tower",
    },
    {
      "@type": "ImageObject",
      "url": "https://jinbeh.com/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
      "name": "Birthday Celebration",
      "description": "Happy birthday celebration at Jinbeh with family",
    },
    {
      "@type": "ImageObject",
      "url": "https://jinbeh.com/images/photoshoot/hibachi-plate-shrimp.jpg",
      "name": "Hibachi Shrimp",
      "description": "Fresh hibachi grilled shrimp with vegetables and fried rice",
    },
  ],
};

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  // Hibachi Action
  {
    src: "/images/food/OnionVolcanoDemo.jpg",
    alt: "Hibachi chef performing the famous onion volcano",
    category: "Hibachi Action",
    title: "Onion Volcano",
  },
  {
    src: "/images/photoshoot/hibachi-steak.jpg",
    alt: "Hibachi chef cooking premium steak on the griddle",
    category: "Hibachi Action",
    title: "Steak Preparation",
  },
  {
    src: "/images/photoshoot/hibachi-flame-action.jpg",
    alt: "Hibachi chef creating dramatic flames with onion volcano and fresh ingredients",
    category: "Hibachi Action",
    title: "Flame Show",
  },
  {
    src: "/images/photoshoot/hibachi-chicken.jpg",
    alt: "Hibachi chef grilling tender chicken with expert technique",
    category: "Hibachi Action",
    title: "Chicken Hibachi",
  },
  {
    src: "/images/photoshoot/hibachi-plate-shrimp.jpg",
    alt: "Hibachi grilled shrimp with vegetables and fried rice",
    category: "Hibachi Action",
    title: "Colossal Shrimp",
  },
  {
    src: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg",
    alt: "Hibachi combo with NY strip steak and colossal shrimp",
    category: "Hibachi Action",
    title: "Premium Combo",
  },
  {
    src: "/images/photoshoot/sizzling-plate.jpg",
    alt: "Sizzling hot plate of hibachi food fresh from the griddle",
    category: "Hibachi Action",
    title: "Sizzling Plate",
  },

  // Sushi & Rolls
  {
    src: "/images/photoshoot/sushi-tower.jpg",
    alt: "Fresh and beautifully arranged sushi tower",
    category: "Sushi & Rolls",
    title: "Sushi Tower",
  },
  {
    src: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg",
    alt: "Fresh sushi selection and Japanese desserts at the bar",
    category: "Sushi & Rolls",
    title: "Sushi Bar Selection",
  },
  {
    src: "/images/food/SamaraiRollCloseup.jpg",
    alt: "Samurai roll specialty sushi with fresh fish and avocado",
    category: "Sushi & Rolls",
    title: "Samurai Roll",
  },
  {
    src: "/images/photoshoot/specialty-roll.jpg",
    alt: "Specialty sushi roll with premium ingredients",
    category: "Sushi & Rolls",
    title: "Specialty Roll",
  },
  {
    src: "/images/food/OkinawaIslandRollCloseup.jpg",
    alt: "Okinawa Island roll with unique flavor combination",
    category: "Sushi & Rolls",
    title: "Okinawa Island Roll",
  },
  {
    src: "/images/photoshoot/sashimi-platter.jpg",
    alt: "Premium sashimi platter with salmon, tuna, and yellowtail",
    category: "Sushi & Rolls",
    title: "Sashimi Platter",
  },

  // Dining Experience
  {
    src: "/images/food/JinbehFrisco_SushiBar.jpg",
    alt: "Jinbeh Frisco sushi bar with skilled sushi chefs",
    category: "Dining Experience",
    title: "Sushi Bar",
  },
  {
    src: "/images/food/JinbehFriscoTables.jpg",
    alt: "Jinbeh hibachi tables and comfortable seating",
    category: "Dining Experience",
    title: "Hibachi Seating",
  },
  {
    src: "/images/interior/FriscoLocation_Bar_Front.jpg",
    alt: "Jinbeh Frisco bar area and dining ambiance",
    category: "Dining Experience",
    title: "Bar Area",
  },
  {
    src: "/images/food/jinbeh_seating.jpg",
    alt: "Comfortable seating arrangement at Jinbeh",
    category: "Dining Experience",
    title: "Dining Atmosphere",
  },
  {
    src: "/images/photoshoot/appetizers-spread.jpg",
    alt: "Beautiful spread of appetizers and starters",
    category: "Dining Experience",
    title: "Appetizers",
  },
  {
    src: "/images/photoshoot/appetizers-detail.jpg",
    alt: "Close-up detail of appetizer plating",
    category: "Dining Experience",
    title: "Appetizer Details",
  },

  // Celebrations
  {
    src: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg",
    alt: "Happy birthday celebration at Jinbeh with family",
    category: "Celebrations",
    title: "Birthday Celebration",
  },
  {
    src: "/images/celebrations/jinbeh_group.jpg",
    alt: "Large group celebration at Jinbeh restaurant",
    category: "Celebrations",
    title: "Group Celebration",
  },
  {
    src: "/images/food/CelebrateYourBirthdayAtJinbeh.jpg",
    alt: "Another birthday celebration moment at Jinbeh",
    category: "Celebrations",
    title: "Birthday Party",
  },
  {
    src: "/images/food/jinbeh_group.jpg",
    alt: "Friends and family gathering at Jinbeh",
    category: "Celebrations",
    title: "Family Gathering",
  },
  {
    src: "/images/food/JinbehAhiTower.jpg",
    alt: "Impressive Ahi tower presentation for special occasions",
    category: "Celebrations",
    title: "Ahi Tower",
  },
  {
    src: "/images/food/RoyalFlameRoll.jpg",
    alt: "Royal Flame roll spectacular presentation",
    category: "Celebrations",
    title: "Royal Flame Roll",
  },
];

const categories = [
  { name: "All Photos", id: "all" },
  { name: "Hibachi Action", id: "hibachi" },
  { name: "Sushi & Rolls", id: "sushi" },
  { name: "Dining Experience", id: "dining" },
  { name: "Celebrations", id: "celebrations" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/food/OnionVolcanoDemo.jpg"
            alt="Hibachi chef performing the famous onion volcano - gallery hero image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Visual Experience
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Our Gallery
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto hero-subheadline">
              Explore the art of hibachi, the craft of sushi, and the moments that
              make celebrations unforgettable at Jinbeh.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            {/* Gallery Title */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Discover Our World
              </h2>
              <p className="text-lg text-charcoal/70">
                From the sizzle of the hibachi griddle to the artistry of our sushi chefs,
                witness the passion behind every dish at Jinbeh.
              </p>
            </div>

            {/* Category Grid */}
            <div className="max-w-6xl mx-auto">
              {/* Hibachi Action Category */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-accent-red rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
                    Hibachi Action
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages
                    .filter((img) => img.category === "Hibachi Action")
                    .map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                          <div className="text-white">
                            <p className="font-heading font-semibold text-lg">
                              {image.title}
                            </p>
                            <p className="text-soft-gold text-sm">
                              {image.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Sushi & Rolls Category */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-soft-gold rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
                    Sushi & Rolls
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages
                    .filter((img) => img.category === "Sushi & Rolls")
                    .map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                          <div className="text-white">
                            <p className="font-heading font-semibold text-lg">
                              {image.title}
                            </p>
                            <p className="text-soft-gold text-sm">
                              {image.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Dining Experience Category */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-deep-indigo rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
                    Dining Experience
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages
                    .filter((img) => img.category === "Dining Experience")
                    .map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                          <div className="text-white">
                            <p className="font-heading font-semibold text-lg">
                              {image.title}
                            </p>
                            <p className="text-soft-gold text-sm">
                              {image.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Celebrations Category */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-cedar-brown rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
                    Celebrations
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages
                    .filter((img) => img.category === "Celebrations")
                    .map((image, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                          <div className="text-white">
                            <p className="font-heading font-semibold text-lg">
                              {image.title}
                            </p>
                            <p className="text-soft-gold text-sm">
                              {image.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Description Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-12 text-center">
                What Makes Our Photos Special
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Hibachi Performance */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal">
                      Hibachi Performance
                    </h3>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">
                    Watch our master chefs transform the griddle into a stage, performing
                    the legendary onion volcano, egg tosses, and knife tricks. Every meal
                    becomes a theatrical experience.
                  </p>
                </div>

                {/* Sushi Artistry */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-soft-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍣</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal">
                      Sushi Artistry
                    </h3>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">
                    Our sushi chefs are artists, crafting beautiful rolls and sashimi
                    platters with precision and fresh, premium ingredients sourced daily.
                  </p>
                </div>

                {/* Quality Ingredients */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal">
                      Premium Quality
                    </h3>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">
                    Every image showcases our commitment to quality. Fresh seafood, vibrant
                    vegetables, and expert preparation techniques in every single dish.
                  </p>
                </div>

                {/* Celebration Moments */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cedar-brown/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-charcoal">
                      Memorable Moments
                    </h3>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">
                    From birthdays to anniversaries, our gallery captures the joy and
                    excitement of celebrations that create lasting memories with loved ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent-red via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Ready to Experience It Yourself?
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Make Your Own Memories at Jinbeh
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
                Come discover why families across North Texas have trusted Jinbeh for
                authentic hibachi and sushi for over 37 years.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reservations"
                  className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all inline-block"
                >
                  Make a Reservation
                </Link>
                <Link
                  href="/frisco/menu"
                  className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl transition-all inline-block"
                >
                  View Menu
                </Link>
              </div>

              {/* Locations Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 pt-12 border-t border-white/20">
                <div>
                  <p className="font-heading font-bold text-lg mb-2">
                    Jinbeh Frisco
                  </p>
                  <p className="text-white/80 text-sm">
                    Near Stonebriar Centre<br />
                    <a href="tel:+12146970989" className="hover:text-soft-gold transition-colors">
                      (214) 697-0989
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-heading font-bold text-lg mb-2">
                    Jinbeh Lewisville
                  </p>
                  <p className="text-white/80 text-sm">
                    Off I-35E Near Vista Ridge<br />
                    <a href="tel:+19725235432" className="hover:text-soft-gold transition-colors">
                      (972) 523-5432
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
