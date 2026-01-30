import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Category configuration
const categories = {
  sushi: {
    title: "Sushi Guide",
    icon: "🍣",
    description: "Everything you need to know about sushi - from beginner tips to expert recommendations. Discover the best sushi in North Texas.",
    color: "from-orange-500 to-red-500",
    articles: [
      { slug: "best-sushi-frisco", title: "Best Sushi in Frisco", image: "/images/food/SpicyTunaAndCaliforniaRollCloseups.jpg" },
      { slug: "best-sushi-dallas", title: "Best Sushi in Dallas", image: "/images/food/SamaraiRollCloseup.jpg" },
      { slug: "types-of-sushi", title: "Types of Sushi: Complete Guide", image: "/images/blog/17-C060324-6708.jpg" },
      { slug: "beginner-sushi-tips", title: "Sushi for Beginners", image: "/images/blog/22-C060324-6831.jpg" },
      { slug: "sashimi-vs-sushi", title: "Sashimi vs Sushi Explained", image: "/images/blog/17-C060324-6708.jpg" },
      { slug: "how-to-eat-sushi-guide", title: "How to Eat Sushi Properly", image: "/images/blog/22-C060324-6831.jpg" },
      { slug: "sushi-identification-chart", title: "Sushi Identification Chart", image: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg" },
      { slug: "omakase-dining-guide", title: "Omakase Dining Guide", image: "/images/blog/17-C060324-6708.jpg" },
      { slug: "best-salmon-sashimi", title: "Best Salmon Sashimi", image: "/images/food/SmokedSalmonCloseup.jpg" },
    ],
  },
  hibachi: {
    title: "Hibachi Guide",
    icon: "🔥",
    description: "Master the art of hibachi dining. Learn about teppanyaki, chef performances, and what makes Jinbeh's hibachi experience special.",
    color: "from-red-500 to-orange-500",
    articles: [
      { slug: "best-hibachi-dallas-tx", title: "Best Hibachi in Dallas", image: "/images/photoshoot/hibachi-plate-shrimp.jpg" },
      { slug: "hibachi-vs-teppanyaki-explained", title: "Hibachi vs Teppanyaki", image: "/images/food/OnionVolcanoDemo.jpg" },
      { slug: "discover-teppanyaki", title: "Discover Teppanyaki", image: "/images/photoshoot/hibachi-plate-shrimp.jpg" },
      { slug: "hibachi-dining-experience", title: "Hibachi Dining Experience", image: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg" },
      { slug: "hibachi-menu-guide", title: "Hibachi Menu Guide", image: "/images/photoshoot/hibachi-plate-shrimp.jpg" },
      { slug: "hibachi-calories-guide", title: "Hibachi Calories Guide", image: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg" },
      { slug: "hibachi-lunch-ideas", title: "Hibachi Lunch Ideas", image: "/images/food/BentoBoxLunchSet.jpg" },
      { slug: "hibachi-catering-dfw", title: "Hibachi Catering in DFW", image: "/images/photoshoot/hibachi-plate-shrimp.jpg" },
    ],
  },
  celebrations: {
    title: "Celebrations & Events",
    icon: "🎂",
    description: "Plan the perfect celebration at Jinbeh. From birthday parties to corporate events, we make every occasion special.",
    color: "from-pink-500 to-purple-500",
    articles: [
      { slug: "hibachi-birthday-party-ideas", title: "Hibachi Birthday Party Ideas", image: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg" },
      { slug: "birthday-celebration-restaurants", title: "Birthday Celebration Restaurants", image: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg" },
      { slug: "free-birthday-food-deals", title: "Free Birthday Food Deals", image: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg" },
      { slug: "adult-birthday-party-ideas", title: "Adult Birthday Party Ideas", image: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg" },
      { slug: "unique-kids-birthday-party-places", title: "Unique Kids Birthday Venues", image: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg" },
      { slug: "bridal-shower-venues", title: "Bridal Shower Venues", image: "/images/interior/JinbehFrisco_SushiBar.jpg" },
      { slug: "bachelorette-restaurants-dallas", title: "Bachelorette Restaurants", image: "/images/interior/FriscoLocation_Bar_Front.jpg" },
      { slug: "group-dining-venues", title: "Group Dining Venues", image: "/images/interior/JinbehFriscoTables.jpg" },
      { slug: "large-group-dining", title: "Large Group Dining", image: "/images/interior/JinbehFriscoTables.jpg" },
      { slug: "restaurants-private-rooms", title: "Private Dining Rooms", image: "/images/interior/JinbehFriscoTables.jpg" },
    ],
  },
  "happy-hour": {
    title: "Happy Hour & Drinks",
    icon: "🍹",
    description: "Discover Jinbeh's drink specials, sake selections, and cocktail menu. Learn about Japanese beverages and happy hour deals.",
    color: "from-blue-500 to-cyan-500",
    articles: [
      { slug: "best-happy-hour-frisco-tx", title: "Best Happy Hour in Frisco", image: "/images/drinks/MuleSummerSignatureCocktail.jpg" },
      { slug: "sake-pairing-guide", title: "Sake Pairing Guide", image: "/images/drinks/cocktail.jpg" },
      { slug: "types-of-sake-explained", title: "Types of Sake Explained", image: "/images/drinks/cocktail.jpg" },
      { slug: "sake-taste-profile", title: "Sake Taste Profile", image: "/images/drinks/cocktail.jpg" },
      { slug: "sake-alcohol-strength", title: "Sake Alcohol Strength", image: "/images/drinks/cocktail.jpg" },
      { slug: "japanese-cocktails", title: "Japanese Cocktails", image: "/images/drinks/JinbehPunchBeverageDrink.jpg" },
      { slug: "japanese-beverages-guide", title: "Japanese Beverages Guide", image: "/images/drinks/SpicyMargaritaBeverageDrink.jpg" },
      { slug: "japanese-whiskey-guide", title: "Japanese Whiskey Guide", image: "/images/drinks/cocktail.jpg" },
      { slug: "yamazaki-whiskey-guide", title: "Yamazaki Whiskey Guide", image: "/images/drinks/cocktail.jpg" },
      { slug: "ramune-soda-guide", title: "Ramune Soda Guide", image: "/images/drinks/MangoTangoDrinks.png" },
    ],
  },
  "local-guide": {
    title: "Local Guide",
    icon: "📍",
    description: "Find the best Japanese restaurants and dining experiences in the Dallas-Fort Worth area. Your guide to local eats.",
    color: "from-green-500 to-teal-500",
    articles: [
      { slug: "top-frisco-restaurants", title: "Top Frisco Restaurants", image: "/images/exterior/JinbehFriscoStorefrontSign.jpg" },
      { slug: "japanese-restaurants-near-me", title: "Japanese Restaurants Near Me", image: "/images/exterior/JinbehFriscoStorefrontSign.jpg" },
      { slug: "japanese-restaurants-lewisville", title: "Japanese Restaurants in Lewisville", image: "/images/exterior/JinbehFriscoStorefrontSign.jpg" },
      { slug: "date-night-restaurants-frisco", title: "Date Night Restaurants", image: "/images/interior/FriscoLocation_Bar_Front.jpg" },
      { slug: "fine-dining-frisco", title: "Fine Dining in Frisco", image: "/images/interior/JinbehFrisco_SushiBar.jpg" },
      { slug: "asian-cuisine-dallas", title: "Asian Cuisine in Dallas", image: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg" },
      { slug: "best-asian-food-dallas", title: "Best Asian Food in Dallas", image: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg" },
      { slug: "best-seafood-dallas", title: "Best Seafood in Dallas", image: "/images/blog/17-C060324-6708.jpg" },
      { slug: "best-steak-near-me", title: "Best Steak Near Me", image: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg" },
    ],
  },
};

type CategoryKey = keyof typeof categories;

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categories[categorySlug as CategoryKey];
  if (!category) {
    return { title: "Category Not Found | Jinbeh Blog" };
  }

  const seoKeywords: Record<CategoryKey, string[]> = {
    sushi: ["sushi frisco", "best sushi dallas", "japanese sushi near me", "sushi rolls guide", "sashimi dallas tx"],
    hibachi: ["hibachi frisco", "teppanyaki dallas", "hibachi restaurant near me", "hibachi grill texas", "hibachi chef show"],
    celebrations: ["birthday party restaurant frisco", "private dining dallas", "celebration venue japanese", "group dining hibachi"],
    "happy-hour": ["happy hour frisco tx", "sake bar dallas", "japanese cocktails", "drink specials near me"],
    "local-guide": ["japanese restaurant frisco tx", "best restaurants dallas", "asian food near me", "date night frisco"],
  };

  return {
    title: `${category.title} | Jinbeh Japanese Restaurant Blog`,
    description: category.description,
    keywords: seoKeywords[categorySlug as CategoryKey] || [],
    openGraph: {
      title: `${category.title} | Jinbeh Japanese Restaurant`,
      description: category.description,
      url: `https://jinbeh.com/blog/category/${categorySlug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://jinbeh.com/blog/category/${categorySlug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categories[categorySlug as CategoryKey];

  if (!category) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-warm-ivory py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-heading font-bold text-charcoal mb-4">Category Not Found</h1>
            <p className="text-charcoal/70 mb-6">The category you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="btn btn-primary">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-ivory">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r ${category.color}`}>
        <div className="container mx-auto px-6 text-center text-white">
          <nav className="flex justify-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white">{category.title}</span>
          </nav>

          <span className="text-6xl mb-6 block">{category.icon}</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors">
                    {article.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 mt-3 text-accent-red font-medium text-sm">
                    Read Article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Experience Jinbeh?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join us for unforgettable hibachi performances and fresh sushi. Family-owned since 1988.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-red/90 transition-colors"
            >
              Make a Reservation
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
