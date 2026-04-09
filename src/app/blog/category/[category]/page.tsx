import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

// ─── Category configuration ────────────────────────────────────────
const categories = {
  sushi: {
    title: "Sushi Guide",
    h1: "Your Complete Guide to Sushi in North Texas",
    icon: "🍣",
    description:
      "From beginner tips to expert recommendations, explore everything sushi at Jinbeh. Discover the freshest rolls, sashimi, and omakase experiences in Frisco and Lewisville, TX.",
    intro:
      "Whether you're trying sushi for the first time or you've been a fan for years, this collection of guides will deepen your appreciation for Japanese cuisine. At Jinbeh, our sushi chefs have been handcrafting rolls with the freshest fish since 1988 — and we love sharing what we know.",
    color: "from-soft-gold to-red-500",
    pillarLinks: [
      { label: "Frisco Sushi Menu", href: "/frisco/sushi-rolls" },
      { label: "Lewisville Sushi Menu", href: "/lewisville/sushi-rolls" },
    ],
    relatedCategories: ["hibachi", "local-guide", "cuisine"],
    articles: [
      { slug: "best-sushi-frisco", title: "Best Sushi in Frisco", image: "/images/food/SpicyTunaAndCaliforniaRollCloseups.jpg", excerpt: "Where to find the freshest sushi rolls and nigiri near Stonebriar Centre." },
      { slug: "best-sushi-dallas", title: "Best Sushi in Dallas", image: "/images/food/SamaraiRollCloseup.jpg", excerpt: "A guide to the top-rated sushi spots across the DFW metroplex." },
      { slug: "types-of-sushi", title: "Types of Sushi: Complete Guide", image: "/images/hq/sushi-rolls-2026.jpg", excerpt: "Nigiri, maki, temaki, and more — learn every sushi style." },
      { slug: "beginner-sushi-tips", title: "Sushi for Beginners", image: "/images/instagram/salmon-roll-closeup.jpg", excerpt: "New to sushi? Start here for your first Japanese dining adventure." },
      { slug: "sashimi-vs-sushi", title: "Sashimi vs Sushi Explained", image: "/images/photoshoot/sashimi-platter.jpg", excerpt: "What's the difference? We break it down for you." },
      { slug: "how-to-eat-sushi-guide", title: "How to Eat Sushi Properly", image: "/images/instagram/sushi-feast-flatlay.jpg", excerpt: "Chopstick etiquette, soy sauce tips, and wasabi dos and don'ts." },
      { slug: "sushi-identification-chart", title: "Sushi Identification Chart", image: "/images/instagram/specialty-roll-closeup.jpg", excerpt: "Visual guide to identifying sushi by type and ingredient." },
      { slug: "omakase-dining-guide", title: "Omakase Dining Guide", image: "/images/photoshoot/sushi-tower.jpg", excerpt: "Trust the chef — how omakase creates a personalized sushi experience." },
      { slug: "best-salmon-sashimi", title: "Best Salmon Sashimi", image: "/images/food/SmokedSalmonCloseup.jpg", excerpt: "Where to find premium salmon sashimi in Frisco and Dallas." },
    ],
    faq: [
      { q: "What is the best sushi restaurant in Frisco, TX?", a: "Jinbeh Japanese Restaurant in Frisco has been serving fresh, handcrafted sushi since 1988. Located near Stonebriar Centre, our sushi bar features daily-fresh fish, signature rolls like the Samurai Roll, and an omakase experience." },
      { q: "What types of sushi does Jinbeh serve?", a: "Jinbeh offers a full sushi menu including nigiri, sashimi, maki rolls, hand rolls (temaki), specialty rolls, and chef's omakase selections. Popular choices include our Spicy Tuna Roll, Rainbow Roll, and premium sashimi platters." },
      { q: "Is sushi at Jinbeh made fresh daily?", a: "Yes! Our sushi chefs prepare every roll to order using fish that is delivered fresh multiple times per week. We never use frozen pre-made sushi — quality and freshness are our top priorities." },
      { q: "Does Jinbeh offer sushi for takeout or delivery?", a: "Yes, sushi takeout is available at both our Frisco and Lewisville locations. You can also order delivery through Uber Eats or Grubhub." },
    ],
  },
  hibachi: {
    title: "Hibachi Guide",
    h1: "Everything You Need to Know About Hibachi Dining",
    icon: "🔥",
    description:
      "Master the art of hibachi dining at Jinbeh. Learn about teppanyaki chef performances, menu options, and what makes our hibachi experience in Frisco and Lewisville unforgettable.",
    intro:
      "The sizzle of the grill. The dance of the flames. The legendary onion volcano. At Jinbeh, hibachi isn't just a meal — it's dinner and a show. Our teppanyaki chefs have been entertaining families across North Texas for over 38 years, and these guides share everything you need to know before your visit.",
    color: "from-red-500 to-soft-gold",
    pillarLinks: [
      { label: "Frisco Hibachi Menu", href: "/frisco/hibachi" },
      { label: "Lewisville Hibachi Menu", href: "/lewisville/hibachi" },
      { label: "Catering Services", href: "/catering" },
    ],
    relatedCategories: ["sushi", "celebrations", "local-guide"],
    articles: [
      { slug: "best-hibachi-dallas-tx", title: "Best Hibachi in Dallas", image: "/images/photoshoot/hibachi-plate-shrimp.jpg", excerpt: "The top hibachi restaurants in the Dallas–Fort Worth area, ranked." },
      { slug: "hibachi-vs-teppanyaki-explained", title: "Hibachi vs Teppanyaki", image: "/images/hq/onion-volcano.jpg", excerpt: "What's the real difference? It's more than just a name." },
      { slug: "discover-teppanyaki", title: "Discover Teppanyaki", image: "/images/hq/cooking-on-grill.jpg", excerpt: "The history and art behind teppanyaki-style cooking." },
      { slug: "hibachi-dining-experience", title: "Hibachi Dining Experience", image: "/images/photoshoot/hibachi-flame-action.jpg", excerpt: "What to expect at your first hibachi dinner — from start to finish." },
      { slug: "hibachi-menu-guide", title: "Hibachi Menu Guide", image: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg", excerpt: "Navigate the hibachi menu like a pro — proteins, sides, and combos." },
      { slug: "hibachi-calories-guide", title: "Hibachi Calories Guide", image: "/images/photoshoot/hibachi-chicken.jpg", excerpt: "Nutrition info for popular hibachi dishes and healthier options." },
      { slug: "hibachi-lunch-ideas", title: "Hibachi Lunch Ideas", image: "/images/food/BentoBoxLunchSet.jpg", excerpt: "Quick weekday lunch combos featuring hibachi favorites." },
      { slug: "hibachi-catering-dfw", title: "Hibachi Catering in DFW", image: "/images/photoshoot/hibachi-steak.jpg", excerpt: "Bring the hibachi experience to your next event or party." },
    ],
    faq: [
      { q: "What is hibachi dining?", a: "Hibachi dining is a Japanese-style meal where a skilled teppanyaki chef cooks your food on a flat iron grill right at your table. At Jinbeh, our chefs entertain with fire tricks, the famous onion volcano, and expert knife skills while preparing steak, shrimp, chicken, and vegetables." },
      { q: "What is the difference between hibachi and teppanyaki?", a: "Hibachi traditionally refers to a charcoal-heated grill, while teppanyaki uses a flat iron griddle. In American dining, 'hibachi' typically describes the interactive tableside cooking experience — which is technically teppanyaki. At Jinbeh, we use both terms to describe our entertaining chef-driven dining." },
      { q: "How much does hibachi cost at Jinbeh?", a: "Hibachi entrees at Jinbeh typically range from $18–$38 per person, depending on your protein choice. Combo plates with steak and shrimp are our most popular option. Kids meals are available at a lower price point." },
      { q: "Does Jinbeh offer hibachi catering?", a: "Yes! Jinbeh offers hibachi catering for events throughout the DFW area. Our team can bring the full teppanyaki experience to weddings, corporate events, birthday parties, and private gatherings. Contact us for a custom quote." },
    ],
  },
  celebrations: {
    title: "Celebrations & Events",
    h1: "Plan the Perfect Celebration at Jinbeh",
    icon: "🎂",
    description:
      "From hibachi birthday parties to corporate events and holiday dinners, find everything you need to plan an unforgettable celebration at Jinbeh in Frisco and Lewisville, TX.",
    intro:
      "Every milestone deserves dinner and a show. Whether it's a child's first hibachi birthday, a romantic anniversary, or a company holiday party, Jinbeh has been the celebration destination for North Texas families since 1988. These guides will help you plan, prepare, and make the most of your special occasion.",
    color: "from-accent-red to-deep-indigo",
    pillarLinks: [
      { label: "All Celebrations", href: "/celebrations" },
      { label: "Private Dining", href: "/private-dining" },
      { label: "Birthday Parties", href: "/celebrations/birthday" },
    ],
    relatedCategories: ["hibachi", "local-guide", "happy-hour"],
    articles: [
      { slug: "hibachi-birthday-party-ideas", title: "Hibachi Birthday Party Ideas", image: "/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg", excerpt: "Creative ways to throw an unforgettable hibachi birthday bash." },
      { slug: "birthday-celebration-restaurants", title: "Birthday Celebration Restaurants", image: "/images/instagram/sushi-feast-overhead.jpg", excerpt: "The best restaurants for birthday dinners in Frisco and DFW." },
      { slug: "free-birthday-food-deals", title: "Free Birthday Food Deals", image: "/images/instagram/lobster-spread-overhead.jpg", excerpt: "Where to score free meals on your birthday in North Texas." },
      { slug: "adult-birthday-party-ideas", title: "Adult Birthday Party Ideas", image: "/images/instagram/tuna-tower-bar-bokeh.jpg", excerpt: "Sophisticated birthday celebrations for grown-ups." },
      { slug: "unique-kids-birthday-party-places", title: "Unique Kids Birthday Venues", image: "/images/photoshoot/hibachi-onion-volcano-flame.jpg", excerpt: "Fun and memorable birthday venues kids will love." },
      { slug: "bridal-shower-venues", title: "Bridal Shower Venues", image: "/images/interior/JinbehFrisco_SushiBar.jpg", excerpt: "Elegant venues for bridal showers and pre-wedding celebrations." },
      { slug: "bachelorette-restaurants-dallas", title: "Bachelorette Restaurants", image: "/images/interior/FriscoLocation_Bar_Front.jpg", excerpt: "The best Dallas restaurants for bachelorette parties." },
      { slug: "group-dining-venues", title: "Group Dining Venues", image: "/images/interior/JinbehFriscoTables.jpg", excerpt: "Where to dine with large groups in Frisco and Lewisville." },
      { slug: "large-group-dining", title: "Large Group Dining", image: "/images/photoshoot/sizzling-plate.jpg", excerpt: "Tips for booking and enjoying a large group dinner." },
      { slug: "restaurants-private-rooms", title: "Private Dining Rooms", image: "/images/interior/bar.jpg", excerpt: "Restaurants with private rooms for special occasions." },
    ],
    faq: [
      { q: "Is Jinbeh good for birthday celebrations?", a: "Absolutely! Jinbeh is one of the top-rated birthday celebration restaurants in Frisco and Lewisville. Our hibachi chefs put on an entertaining show at your table, complete with the famous onion volcano — making birthdays memorable for all ages." },
      { q: "Can Jinbeh host large groups or private parties?", a: "Yes! Both our Frisco and Lewisville locations accommodate large parties. Hibachi tables seat 7–8 guests for a shared experience. For groups of 10+ or private events, call us at (214) 619-1200 (Frisco) or (214) 488-2224 (Lewisville)." },
      { q: "Does Jinbeh offer special birthday deals?", a: "Jinbeh loves celebrating birthdays! Contact our team to discuss birthday packages and group dining options that include appetizers, entrees, and desserts for your party." },
      { q: "What types of celebrations can I host at Jinbeh?", a: "We host birthdays, anniversaries, graduations, baby showers, bridal showers, bachelorette dinners, corporate events, holiday parties, and family gatherings. Any occasion becomes special with hibachi entertainment and fresh sushi." },
    ],
  },
  "happy-hour": {
    title: "Happy Hour & Drinks",
    h1: "Jinbeh Happy Hour, Sake & Japanese Cocktail Guides",
    icon: "🍹",
    description:
      "Explore Jinbeh's daily happy hour specials, premium sake selections, Japanese whiskey, and signature cocktails in Frisco and Lewisville, TX.",
    intro:
      "Great drinks deserve great company. At Jinbeh's bar, you'll find an expertly curated selection of premium sake, Japanese whiskey, signature cocktails, and ice-cold drafts — all at happy hour prices. Whether you're a sake novice or a whiskey connoisseur, these guides will help you discover your next favorite pour.",
    color: "from-deep-indigo to-deep-indigo",
    pillarLinks: [
      { label: "Happy Hour Specials", href: "/happy-hour" },
      { label: "Frisco Cocktail Menu", href: "/frisco/cocktails" },
      { label: "Lewisville Cocktail Menu", href: "/lewisville/cocktails" },
    ],
    relatedCategories: ["sushi", "local-guide", "beverages"],
    articles: [
      { slug: "best-happy-hour-frisco-tx", title: "Best Happy Hour in Frisco", image: "/images/drinks/MuleSummerSignatureCocktail.jpg", excerpt: "Where to find the best happy hour deals near Stonebriar Centre." },
      { slug: "sake-pairing-guide", title: "Sake Pairing Guide", image: "/images/drinks/cocktail.jpg", excerpt: "How to pair sake with sushi, hibachi, and appetizers." },
      { slug: "types-of-sake-explained", title: "Types of Sake Explained", image: "/images/hq/jinbeh-cocktail.jpg", excerpt: "Junmai, Daiginjo, Nigori — what's the difference?" },
      { slug: "sake-taste-profile", title: "Sake Taste Profile", image: "/images/instagram/fried-roll-bar-ambiance.jpg", excerpt: "Sweet, dry, fruity, earthy — find your ideal sake flavor." },
      { slug: "sake-alcohol-strength", title: "Sake Alcohol Strength", image: "/images/seasonal/HappyWineWednesday.png", excerpt: "How strong is sake compared to wine and beer?" },
      { slug: "japanese-cocktails", title: "Japanese Cocktails", image: "/images/drinks/JinbehPunchBeverageDrink.jpg", excerpt: "Signature Japanese-inspired cocktails you need to try." },
      { slug: "japanese-beverages-guide", title: "Japanese Beverages Guide", image: "/images/drinks/SpicyMargaritaBeverageDrink.jpg", excerpt: "From matcha to Ramune — a complete Japanese drink guide." },
      { slug: "japanese-whiskey-guide", title: "Japanese Whiskey Guide", image: "/images/seasonal/WinedWednesday.jpg", excerpt: "Why Japanese whiskey is taking the world by storm." },
      { slug: "yamazaki-whiskey-guide", title: "Yamazaki Whiskey Guide", image: "/images/drinks/MangoTangoDrinks.png", excerpt: "Everything you need to know about Suntory Yamazaki." },
      { slug: "ramune-soda-guide", title: "Ramune Soda Guide", image: "/images/instagram/mochi-desserts.jpg", excerpt: "The iconic marble-sealed Japanese soda — flavors and history." },
    ],
    faq: [
      { q: "What time is happy hour at Jinbeh?", a: "Jinbeh's happy hour runs Monday through Friday from 4:00 PM to 6:30 PM at both our Frisco and Lewisville locations. Enjoy discounted drinks, appetizers, and bar snacks." },
      { q: "Does Jinbeh serve sake?", a: "Yes! Jinbeh offers a curated sake menu including Junmai, Daiginjo, Nigori (unfiltered), and hot sake. We also offer sake flights so you can sample multiple varieties. Ask your server for a pairing recommendation with your sushi or hibachi." },
      { q: "What Japanese cocktails does Jinbeh offer?", a: "Our bar features signature Japanese-inspired cocktails including the Jinbeh Punch, Spicy Margarita with yuzu, Mango Tango, Mule Summer, and classic Japanese highballs made with Suntory whiskey." },
      { q: "Can I sit at the bar without a reservation?", a: "Yes! Bar seating at Jinbeh is first-come, first-served — no reservation needed. It's a great spot for happy hour drinks and watching our sushi chefs at work." },
    ],
  },
  "local-guide": {
    title: "Local Dining Guide",
    h1: "Best Restaurants in Frisco, Lewisville & DFW",
    icon: "📍",
    description:
      "Discover the best Japanese restaurants, date night spots, and dining experiences in Frisco, Lewisville, and the greater Dallas–Fort Worth area.",
    intro:
      "Looking for the best place to eat tonight? Our local dining guides cover everything from hidden gems to celebrated favorites across Frisco, Lewisville, and greater DFW. As a family-owned restaurant serving North Texas since 1988, we know this area inside and out — and we're always happy to share our recommendations.",
    color: "from-green-500 to-deep-indigo",
    pillarLinks: [
      { label: "Jinbeh Frisco", href: "/frisco" },
      { label: "Jinbeh Lewisville", href: "/lewisville" },
      { label: "Nearby Cities We Serve", href: "/nearby/plano" },
    ],
    relatedCategories: ["sushi", "hibachi", "celebrations"],
    articles: [
      { slug: "top-frisco-restaurants", title: "Top Frisco Restaurants", image: "/images/exterior/JinbehFriscoStorefrontSign.jpg", excerpt: "The most popular restaurants in Frisco, TX — from casual to upscale." },
      { slug: "japanese-restaurants-near-me", title: "Japanese Restaurants Near Me", image: "/images/hq/lewisville-sushi-1.jpg", excerpt: "Find the best Japanese restaurants in your area." },
      { slug: "japanese-restaurants-lewisville", title: "Japanese Restaurants in Lewisville", image: "/images/lewisville/IMG_2142.jpg", excerpt: "Lewisville's top Japanese dining destinations." },
      { slug: "date-night-restaurants-frisco", title: "Date Night Restaurants", image: "/images/interior/FriscoLocation_Bar_Front.jpg", excerpt: "Romantic restaurants in Frisco perfect for date night." },
      { slug: "fine-dining-frisco", title: "Fine Dining in Frisco", image: "/images/interior/JinbehFrisco_SushiBar.jpg", excerpt: "Upscale dining experiences near Stonebriar Centre." },
      { slug: "asian-cuisine-dallas", title: "Asian Cuisine in Dallas", image: "/images/instagram/sushi-roll-portrait.jpg", excerpt: "Exploring Dallas's diverse Asian food scene." },
      { slug: "best-asian-food-dallas", title: "Best Asian Food in Dallas", image: "/images/instagram/crab-pinwheel-roll.jpg", excerpt: "Top-rated Asian restaurants across the Dallas metro." },
      { slug: "best-seafood-dallas", title: "Best Seafood in Dallas", image: "/images/hq/garlic-lemon-shrimp.jpg", excerpt: "Where to find the freshest seafood in DFW." },
      { slug: "best-steak-near-me", title: "Best Steak Near Me", image: "/images/instagram/hibachi-steak-plate.jpg", excerpt: "Premium steak options including hibachi NY strip and filet." },
    ],
    faq: [
      { q: "What is the best Japanese restaurant in Frisco, TX?", a: "Jinbeh Japanese Restaurant is consistently rated one of the best Japanese restaurants in Frisco. Family-owned since 1988, we offer hibachi, sushi, sashimi, and a full bar near Stonebriar Centre at 2693 Preston Rd." },
      { q: "Does Jinbeh have locations near Lewisville?", a: "Yes! Jinbeh Lewisville is located at 2440 S Stemmons Fwy #A, just off I-35E near Vista Ridge Mall. Call (214) 488-2224 for reservations." },
      { q: "What cities does Jinbeh serve in the DFW area?", a: "Jinbeh's Frisco and Lewisville locations serve guests from Plano, McKinney, Allen, The Colony, Flower Mound, Carrollton, Coppell, Grapevine, Denton, Highland Village, Little Elm, and Richardson." },
    ],
  },
  "best-of": {
    title: "Best Of DFW",
    h1: "Best Restaurants, Sushi & Hibachi in Dallas–Fort Worth",
    icon: "🏆",
    description:
      "Curated 'best of' guides for Japanese dining, sushi, hibachi, and more across the Dallas–Fort Worth metroplex. Discover where to eat in Frisco, Lewisville, and beyond.",
    intro:
      "When you search for 'the best,' you deserve a real answer. These curated guides highlight the top dining experiences across DFW — from the best sushi in Frisco to the finest hibachi in Dallas. Every recommendation is based on quality, freshness, and the kind of memorable experience that keeps guests coming back for over 38 years.",
    color: "from-soft-gold to-amber-600",
    pillarLinks: [
      { label: "Jinbeh Frisco", href: "/frisco" },
      { label: "Full Menu", href: "/menu" },
      { label: "Make a Reservation", href: "/reservations" },
    ],
    relatedCategories: ["sushi", "hibachi", "local-guide"],
    articles: [
      { slug: "best-sushi-frisco", title: "Best Sushi in Frisco", image: "/images/food/SpicyTunaAndCaliforniaRollCloseups.jpg", excerpt: "Our pick for the freshest sushi near Stonebriar Centre." },
      { slug: "best-sushi-dallas", title: "Best Sushi in Dallas", image: "/images/food/SamaraiRollCloseup.jpg", excerpt: "Top sushi restaurants across the Dallas metroplex." },
      { slug: "best-hibachi-dallas-tx", title: "Best Hibachi in Dallas", image: "/images/photoshoot/hibachi-plate-shrimp.jpg", excerpt: "Where to find the most entertaining hibachi experience in DFW." },
      { slug: "best-happy-hour-frisco-tx", title: "Best Happy Hour in Frisco", image: "/images/drinks/MuleSummerSignatureCocktail.jpg", excerpt: "Happy hour deals you don't want to miss near Stonebriar." },
      { slug: "best-asian-food-dallas", title: "Best Asian Food in Dallas", image: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg", excerpt: "From sushi to ramen — the best Asian restaurants in Dallas." },
      { slug: "best-seafood-dallas", title: "Best Seafood in Dallas", image: "/images/blog/17-C060324-6708.jpg", excerpt: "Fresh catches and seafood platters across the metro." },
      { slug: "best-steak-near-me", title: "Best Steak Near Me", image: "/images/food/HibachiComboNYStripAndColossalShrimp.jpg", excerpt: "Premium steak options including hibachi-grilled cuts." },
      { slug: "best-salmon-sashimi", title: "Best Salmon Sashimi", image: "/images/food/SmokedSalmonCloseup.jpg", excerpt: "Where to find buttery, premium salmon sashimi in DFW." },
      { slug: "top-frisco-restaurants", title: "Top Frisco Restaurants", image: "/images/exterior/JinbehFriscoStorefrontSign.jpg", excerpt: "The most popular restaurants in Frisco, ranked." },
    ],
    faq: [
      { q: "What is the best sushi restaurant near me in Frisco?", a: "Jinbeh Japanese Restaurant at 2693 Preston Rd in Frisco is consistently rated among the best sushi restaurants in the area. Our sushi bar features daily-fresh fish, signature rolls, and premium sashimi platters." },
      { q: "Where is the best hibachi in the Dallas area?", a: "Jinbeh offers the best hibachi experience in DFW with two locations in Frisco and Lewisville. Our teppanyaki chefs have been entertaining families with fire tricks, onion volcanoes, and expertly grilled entrees since 1988." },
      { q: "What makes Jinbeh one of the best Japanese restaurants in DFW?", a: "Three things set Jinbeh apart: 38+ years of family heritage, daily-fresh ingredients from trusted suppliers, and the interactive hibachi entertainment that turns every meal into a celebration. We've been a North Texas favorite since 1988." },
    ],
  },
  beverages: {
    title: "Japanese Beverages",
    h1: "Guide to Japanese Beverages: Sake, Whiskey, Cocktails & More",
    icon: "🍶",
    description:
      "Explore Japanese beverages from premium sake and Yamazaki whiskey to signature cocktails and Ramune soda. Your complete guide to drinks at Jinbeh in Frisco & Lewisville, TX.",
    intro:
      "Japanese culture has produced some of the world's most refined beverages — from the ancient art of sake brewing to the modern mastery of Japanese whiskey. At Jinbeh, our bar showcases the best of these traditions alongside creative signature cocktails. Explore our beverage guides to learn, taste, and discover your new favorite drink.",
    color: "from-indigo-600 to-purple-700",
    pillarLinks: [
      { label: "Happy Hour Specials", href: "/happy-hour" },
      { label: "Frisco Drink Menu", href: "/frisco/cocktails" },
    ],
    relatedCategories: ["happy-hour", "sushi", "cuisine"],
    articles: [
      { slug: "sake-pairing-guide", title: "Sake Pairing Guide", image: "/images/drinks/cocktail.jpg", excerpt: "Expert tips for pairing sake with sushi, hibachi, and appetizers." },
      { slug: "types-of-sake-explained", title: "Types of Sake Explained", image: "/images/hq/jinbeh-cocktail.jpg", excerpt: "Junmai, Daiginjo, Nigori — learn the sake family." },
      { slug: "sake-taste-profile", title: "Sake Taste Profile", image: "/images/instagram/fried-roll-bar-ambiance.jpg", excerpt: "Find your perfect sake: dry, sweet, fruity, or rich." },
      { slug: "sake-alcohol-strength", title: "Sake Alcohol Strength", image: "/images/seasonal/HappyWineWednesday.png", excerpt: "How strong is sake compared to wine, beer, and spirits?" },
      { slug: "japanese-cocktails", title: "Japanese Cocktails", image: "/images/drinks/JinbehPunchBeverageDrink.jpg", excerpt: "Creative Japanese-inspired cocktails from our bar." },
      { slug: "japanese-beverages-guide", title: "Japanese Beverages Guide", image: "/images/drinks/SpicyMargaritaBeverageDrink.jpg", excerpt: "From matcha to Ramune — every Japanese drink you should try." },
      { slug: "japanese-whiskey-guide", title: "Japanese Whiskey Guide", image: "/images/seasonal/WinedWednesday.jpg", excerpt: "Why the world is obsessed with Japanese whiskey." },
      { slug: "yamazaki-whiskey-guide", title: "Yamazaki Whiskey Guide", image: "/images/drinks/MangoTangoDrinks.png", excerpt: "Deep dive into Suntory's legendary Yamazaki single malt." },
      { slug: "ramune-soda-guide", title: "Ramune Soda Guide", image: "/images/instagram/mochi-desserts.jpg", excerpt: "The iconic marble-sealed Japanese soda — flavors and how to open it." },
    ],
    faq: [
      { q: "What is sake and how is it made?", a: "Sake is a Japanese rice wine made by fermenting polished rice with water, yeast, and koji mold. The more the rice is polished, the higher the grade — Daiginjo sake uses rice polished to at least 50% of its original size." },
      { q: "What Japanese whiskey does Jinbeh serve?", a: "Jinbeh's bar features a curated selection of Japanese whiskeys including Suntory Yamazaki, Hibiki Harmony, Toki, and Nikka Coffey Grain. Ask your bartender for a whiskey flight or a Japanese highball." },
      { q: "What is Ramune soda?", a: "Ramune is a beloved Japanese carbonated soft drink known for its unique marble-sealed glass bottle. It comes in dozens of flavors including original, strawberry, melon, and lychee. We serve Ramune at both Jinbeh locations — kids and adults love it!" },
    ],
  },
  cuisine: {
    title: "Japanese Cuisine Guide",
    h1: "Exploring Japanese Cuisine: From Sushi to Teppanyaki",
    icon: "🍱",
    description:
      "Dive deep into Japanese cuisine — from the art of sushi and sashimi to teppanyaki grilling and traditional dishes. Expert guides from Jinbeh's 38+ years of culinary heritage.",
    intro:
      "Japanese cuisine is one of the world's great culinary traditions, built on principles of freshness, seasonality, and presentation. At Jinbeh, we honor these traditions while making them accessible to every guest. Whether you're curious about the difference between sashimi and sushi or want to master chopstick etiquette, these guides draw from our 38+ years of serving authentic Japanese food in North Texas.",
    color: "from-amber-600 to-red-600",
    pillarLinks: [
      { label: "Full Menu", href: "/menu" },
      { label: "Sushi & Rolls", href: "/frisco/sushi-rolls" },
      { label: "Hibachi", href: "/frisco/hibachi" },
    ],
    relatedCategories: ["sushi", "hibachi", "beverages"],
    articles: [
      { slug: "types-of-sushi", title: "Types of Sushi: Complete Guide", image: "/images/blog/17-C060324-6708.jpg", excerpt: "Every sushi style explained — nigiri, maki, temaki, and more." },
      { slug: "sashimi-vs-sushi", title: "Sashimi vs Sushi Explained", image: "/images/photoshoot/sashimi-platter.jpg", excerpt: "What's the real difference between sashimi and sushi?" },
      { slug: "how-to-eat-sushi-guide", title: "How to Eat Sushi Properly", image: "/images/instagram/sushi-feast-flatlay.jpg", excerpt: "Etiquette, chopstick tips, and wasabi guidelines." },
      { slug: "hibachi-vs-teppanyaki-explained", title: "Hibachi vs Teppanyaki", image: "/images/hq/onion-volcano.jpg", excerpt: "The surprising difference between these two cooking styles." },
      { slug: "discover-teppanyaki", title: "Discover Teppanyaki", image: "/images/hq/cooking-on-grill.jpg", excerpt: "The history and art of Japanese teppanyaki cooking." },
      { slug: "omakase-dining-guide", title: "Omakase Dining Guide", image: "/images/photoshoot/sushi-tower.jpg", excerpt: "'Trust the chef' — the art of omakase dining." },
      { slug: "what-is-omakase", title: "What Is Omakase?", image: "/images/food/FreshSushiAndDessertsAtSushiBar.jpg", excerpt: "Everything you need to know about the omakase experience." },
      { slug: "sushi-identification-chart", title: "Sushi Identification Chart", image: "/images/instagram/specialty-roll-closeup.jpg", excerpt: "Visual guide to identifying sushi by type." },
      { slug: "popular-japanese-culture", title: "Popular Japanese Culture", image: "/images/photoshoot/appetizers-spread.jpg", excerpt: "How Japanese food culture shapes the dining experience." },
      { slug: "asian-cuisine-dallas", title: "Asian Cuisine in Dallas", image: "/images/instagram/branded-sushi-plate.jpg", excerpt: "Exploring the diverse Asian food scene in Dallas." },
    ],
    faq: [
      { q: "What type of cuisine does Jinbeh serve?", a: "Jinbeh serves authentic Japanese cuisine including sushi, sashimi, hibachi (teppanyaki), tempura, teriyaki, udon, and Japanese appetizers. We also offer a full bar with sake, Japanese whiskey, and signature cocktails." },
      { q: "What is omakase dining?", a: "Omakase means 'I'll leave it to you' in Japanese. It's a dining style where the chef selects and prepares a multi-course meal based on the freshest ingredients available. At Jinbeh, our sushi chefs craft a personalized omakase experience at the sushi bar." },
      { q: "Is Japanese food healthy?", a: "Japanese cuisine is widely regarded as one of the healthiest in the world. It emphasizes fresh fish, vegetables, rice, and minimal use of heavy oils. Sashimi, edamame, and grilled hibachi proteins are all nutritious options at Jinbeh." },
    ],
  },
  health: {
    title: "Health & Nutrition",
    h1: "Japanese Food Nutrition: Calories, Health Benefits & Tips",
    icon: "💪",
    description:
      "Discover the health benefits of Japanese food. Calorie guides for hibachi and sushi, nutritious menu options, and how Japanese dining fits a healthy lifestyle.",
    intro:
      "Japanese cuisine is celebrated worldwide for its health benefits — and for good reason. With an emphasis on fresh fish, vegetables, lean proteins, and minimal processing, a meal at Jinbeh can be both delicious and nutritious. These guides break down the calories, nutrition facts, and healthiest choices on our menu.",
    color: "from-green-600 to-teal-600",
    pillarLinks: [
      { label: "Full Menu", href: "/menu" },
      { label: "Lunch Specials", href: "/lunch-specials" },
    ],
    relatedCategories: ["sushi", "hibachi", "cuisine"],
    articles: [
      { slug: "hibachi-calories-guide", title: "Hibachi Calories Guide", image: "/images/photoshoot/hibachi-chicken.jpg", excerpt: "Calorie counts for popular hibachi dishes and healthier swaps." },
      { slug: "hibachi-lunch-ideas", title: "Hibachi Lunch Ideas", image: "/images/food/BentoBoxLunchSet.jpg", excerpt: "Quick, balanced hibachi lunches for weekday dining." },
      { slug: "sushi-lunch-specials", title: "Sushi Lunch Specials", image: "/images/food/SpicyTunaAndCaliforniaRollCloseups.jpg", excerpt: "Affordable lunch combos with fresh sushi rolls." },
      { slug: "sashimi-vs-sushi", title: "Sashimi vs Sushi Explained", image: "/images/photoshoot/sashimi-platter.jpg", excerpt: "Which is healthier? Comparing nutrition of sashimi and sushi." },
      { slug: "best-salmon-sashimi", title: "Best Salmon Sashimi", image: "/images/food/SmokedSalmonCloseup.jpg", excerpt: "Omega-3 rich salmon sashimi — one of the healthiest menu picks." },
    ],
    faq: [
      { q: "How many calories are in a hibachi meal?", a: "A typical hibachi entree at Jinbeh ranges from 400–800 calories depending on your protein choice and sides. Chicken is the lightest option (~450 cal), while steak and shrimp combo plates are around 650–800 calories. Hibachi vegetables and salad add minimal calories." },
      { q: "Is sushi healthy?", a: "Yes! Sushi is one of the healthiest dining options. A typical sushi roll has 200–350 calories and is rich in omega-3 fatty acids, lean protein, and vitamins. Sashimi (pure sliced fish) is even lower in calories while being packed with protein." },
      { q: "What are the healthiest options at Jinbeh?", a: "Our healthiest dishes include sashimi platters, edamame, miso soup, grilled salmon, chicken hibachi with vegetables, and low-sodium sushi rolls. Ask your server about lighter preparation options — we're happy to accommodate dietary preferences." },
    ],
  },
  "local-guides": {
    title: "Local City Guides",
    h1: "Japanese Dining in Your Neighborhood: DFW City Guides",
    icon: "🗺️",
    description:
      "City-by-city dining guides for the Dallas–Fort Worth area. Find the best Japanese restaurants, sushi bars, and hibachi grills near Frisco, Lewisville, Plano, McKinney, and beyond.",
    intro:
      "No matter where you are in the DFW metroplex, great Japanese food is closer than you think. With locations in Frisco and Lewisville, Jinbeh has been the neighborhood restaurant for over a dozen North Texas communities since 1988. These city guides help you discover what's nearby — and why Jinbeh is always worth the trip.",
    color: "from-blue-600 to-indigo-700",
    pillarLinks: [
      { label: "Jinbeh Frisco", href: "/frisco" },
      { label: "Jinbeh Lewisville", href: "/lewisville" },
      { label: "Delivery & Takeout", href: "/delivery" },
    ],
    relatedCategories: ["local-guide", "best-of", "celebrations"],
    articles: [
      { slug: "top-frisco-restaurants", title: "Top Frisco Restaurants", image: "/images/exterior/JinbehFriscoStorefrontSign.jpg", excerpt: "The most popular restaurants in Frisco, TX." },
      { slug: "japanese-restaurants-lewisville", title: "Japanese Restaurants in Lewisville", image: "/images/lewisville/IMG_2142.jpg", excerpt: "Best Japanese dining options in Lewisville." },
      { slug: "japanese-restaurants-near-me", title: "Japanese Restaurants Near Me", image: "/images/hq/lewisville-sushi-1.jpg", excerpt: "Find highly-rated Japanese restaurants in your area." },
      { slug: "date-night-restaurants-frisco", title: "Date Night Restaurants", image: "/images/interior/FriscoLocation_Bar_Front.jpg", excerpt: "Romantic Frisco restaurants perfect for couples." },
      { slug: "fine-dining-frisco", title: "Fine Dining in Frisco", image: "/images/interior/JinbehFrisco_SushiBar.jpg", excerpt: "Upscale dining near Stonebriar Centre." },
      { slug: "pickleball-restaurants-lewisville", title: "Restaurants Near Pickleball in Lewisville", image: "/images/lewisville/IMG_1975.jpg", excerpt: "Where to eat after pickleball in Lewisville." },
      { slug: "seafood-lewisville", title: "Seafood in Lewisville", image: "/images/hq/garlic-lemon-shrimp.jpg", excerpt: "Fresh seafood and sushi options in Lewisville." },
    ],
    faq: [
      { q: "Where is Jinbeh located?", a: "Jinbeh has two locations: Frisco (2693 Preston Rd, near Stonebriar Centre) and Lewisville (2440 S Stemmons Fwy #A, near Vista Ridge Mall). Both are easily accessible from Plano, McKinney, Allen, The Colony, Flower Mound, and other DFW communities." },
      { q: "Does Jinbeh deliver to my area?", a: "Jinbeh offers delivery through Uber Eats and Grubhub from both our Frisco and Lewisville locations. Delivery range varies by platform, but typically covers a 5–8 mile radius." },
      { q: "Which Jinbeh location is closest to Plano?", a: "Our Frisco location at 2693 Preston Rd is just minutes from West Plano via the Dallas North Tollway. It's the closest Jinbeh location for most Plano residents." },
    ],
  },
};

type CategoryKey = keyof typeof categories;

const categoryDisplayNames: Record<string, string> = {
  sushi: "Sushi",
  hibachi: "Hibachi",
  celebrations: "Celebrations",
  "happy-hour": "Happy Hour",
  "local-guide": "Local Guide",
  "best-of": "Best Of",
  beverages: "Beverages",
  cuisine: "Cuisine",
  health: "Health",
  "local-guides": "City Guides",
};

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
    sushi: ["sushi frisco", "best sushi dallas", "japanese sushi near me", "sushi rolls guide", "sashimi dallas tx", "fresh sushi frisco tx"],
    hibachi: ["hibachi frisco", "teppanyaki dallas", "hibachi restaurant near me", "hibachi grill texas", "hibachi chef show", "best hibachi dallas"],
    celebrations: ["birthday party restaurant frisco", "private dining dallas", "celebration venue japanese", "group dining hibachi", "anniversary dinner frisco"],
    "happy-hour": ["happy hour frisco tx", "sake bar dallas", "japanese cocktails", "drink specials near me", "sake flights frisco"],
    "local-guide": ["japanese restaurant frisco tx", "best restaurants dallas", "asian food near me", "date night frisco", "fine dining frisco tx"],
    "best-of": ["best sushi near me", "best hibachi dallas", "best japanese restaurant frisco", "best asian food dfw", "top restaurants frisco tx"],
    beverages: ["sake guide", "japanese whiskey", "japanese cocktails menu", "sake pairing food", "ramune soda", "yamazaki whiskey"],
    cuisine: ["japanese cuisine guide", "types of sushi", "what is omakase", "sashimi vs sushi", "teppanyaki explained", "japanese food culture"],
    health: ["hibachi calories", "is sushi healthy", "japanese food nutrition", "healthy hibachi options", "sashimi calories"],
    "local-guides": ["japanese restaurant near me", "restaurants frisco tx", "restaurants lewisville tx", "dining near stonebriar", "date night dfw"],
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
      <main id="main-content" className="min-h-screen bg-warm-ivory py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-charcoal mb-4">Category Not Found</h2>
          <p className="text-charcoal/70 mb-6">The category you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn btn-primary">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Structured Data: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://jinbeh.com/blog" },
      { "@type": "ListItem", position: 3, name: category.title, item: `https://jinbeh.com/blog/category/${categorySlug}` },
    ],
  };

  // Structured Data: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  // Structured Data: CollectionPage
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.description,
    url: `https://jinbeh.com/blog/category/${categorySlug}`,
    isPartOf: {
      "@type": "Blog",
      name: "Jinbeh Blog",
      url: "https://jinbeh.com/blog",
    },
    publisher: {
      "@type": "Organization",
      name: "Jinbeh Japanese Restaurant",
      url: "https://jinbeh.com",
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-warm-ivory">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r ${category.color}`}>
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center text-white">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white">{category.title}</span>
          </nav>

          <span className="text-6xl mb-6 block">{category.icon}</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {category.h1}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {category.description}
          </p>

          {/* Pillar Page Links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {category.pillarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white border-b border-warm-ivory-dark">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-lg text-charcoal/80 leading-relaxed text-center">
            {category.intro}
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-charcoal/60">
            <span className="flex items-center gap-1">
              📝 {category.articles.length} articles
            </span>
            <span className="flex items-center gap-1">
              🏠 Family-owned since 1988
            </span>
            <span className="flex items-center gap-1">
              📍 Frisco & Lewisville, TX
            </span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-charcoal mb-2 text-center">
            {category.title} Articles
          </h2>
          <p className="text-charcoal/60 text-center mb-10 max-w-2xl mx-auto">
            Explore our curated collection of guides, tips, and recommendations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent-red font-medium text-sm">
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-charcoal mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal/60 text-center mb-10">
            Common questions about {category.title.toLowerCase()} at Jinbeh.
          </p>
          <div className="space-y-6">
            {category.faq.map((item, index) => (
              <div key={index} className="bg-warm-ivory rounded-xl p-6">
                <h3 className="text-lg font-heading font-bold text-charcoal mb-3">
                  {item.q}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-warm-ivory border-t border-warm-ivory-dark">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-xl font-heading font-bold text-charcoal mb-6 text-center">
            Explore More Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {category.relatedCategories.map((catSlug) => (
              <Link
                key={catSlug}
                href={`/blog/category/${catSlug}`}
                className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-charcoal hover:bg-accent-red hover:text-white transition-colors shadow-sm"
              >
                {categoryDisplayNames[catSlug] || catSlug}
              </Link>
            ))}
            <Link
              href="/blog"
              className="px-5 py-2.5 bg-charcoal rounded-full text-sm font-medium text-white hover:bg-charcoal/80 transition-colors shadow-sm"
            >
              All Articles
            </Link>
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
            Join us for unforgettable hibachi performances and fresh sushi. Family-owned since 1988, two convenient locations in Frisco and Lewisville.
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
              View Full Menu
            </Link>
          </div>

          {/* Additional contextual links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
            <Link href="/frisco" className="text-white/60 hover:text-soft-gold transition-colors">Frisco Location</Link>
            <span className="text-white/30">•</span>
            <Link href="/lewisville" className="text-white/60 hover:text-soft-gold transition-colors">Lewisville Location</Link>
            <span className="text-white/30">•</span>
            <Link href="/happy-hour" className="text-white/60 hover:text-soft-gold transition-colors">Happy Hour</Link>
            <span className="text-white/30">•</span>
            <Link href="/celebrations" className="text-white/60 hover:text-soft-gold transition-colors">Celebrations</Link>
            <span className="text-white/30">•</span>
            <Link href="/catering" className="text-white/60 hover:text-soft-gold transition-colors">Catering</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
