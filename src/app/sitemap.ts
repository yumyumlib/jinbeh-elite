import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://jinbeh.com";
    const currentDate = new Date().toISOString();

    // Core pages
    const staticPages = [
        { url: baseUrl, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 1.0 },
        { url: `${baseUrl}/frisco`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
        { url: `${baseUrl}/lewisville`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
        { url: `${baseUrl}/menu`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/frisco/menu`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/lewisville/menu`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/happy-hour`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.8 },
        { url: `${baseUrl}/lunch-specials`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.7 },
        { url: `${baseUrl}/catering`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/private-dining`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/gift-cards`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${baseUrl}/reservations`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/takeout`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "yearly" as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "yearly" as const, priority: 0.3 },
        { url: `${baseUrl}/accessibility`, lastModified: currentDate, changeFrequency: "yearly" as const, priority: 0.3 },
        { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "daily" as const, priority: 0.8 },
        { url: `${baseUrl}/celebrations`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    ];

    // Menu category pages
    const menuCategories = [
        "hibachi", "sushi-rolls", "sashimi", "appetizers", "cocktails"
    ];
    const menuCategoryPages = menuCategories.flatMap((category) => [
        { url: `${baseUrl}/frisco/${category}`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/lewisville/${category}`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
    ]);

    // Celebration pages
    const celebrationSlugs = [
        "anniversary", "asian-restaurant-month", "baby-shower", "birthday",
        "christmas", "corporate-events", "date-night", "diwali",
        "family-gatherings", "fathers-day", "graduation", "holiday-parties",
        "lunar-new-year", "mid-autumn-festival", "mothers-day",
        "national-fried-rice-day", "rehearsal-dinner", "team-building",
        "thanksgiving", "valentines-day"
    ];
    const celebrationPages = celebrationSlugs.map((slug) => ({
        url: `${baseUrl}/celebrations/${slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // Nearby city pages
    const nearbyCities = [
        "allen", "carrollton", "coppell", "denton", "flower-mound",
        "grapevine", "highland-village", "little-elm", "mckinney",
        "plano", "richardson", "the-colony"
    ];
    const nearbyPages = nearbyCities.map((city) => ({
        url: `${baseUrl}/nearby/${city}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // Blog article slugs - comprehensive list
    const blogSlugs = [
        "adult-birthday-party-ideas",
        "asian-cuisine-dallas",
        "baby-shower-venues",
        "bachelorette-restaurants-dallas",
        "beginner-sushi-tips",
        "best-asian-food-dallas",
        "best-happy-hour-frisco-tx",
        "best-hibachi-dallas",
        "best-hibachi-dallas-tx",
        "best-salmon-sashimi",
        "best-seafood-dallas",
        "best-steak-near-me",
        "best-sushi-dallas",
        "best-sushi-frisco",
        "birthday-celebration-restaurants",
        "bridal-shower-venues",
        "date-night-restaurants-frisco",
        "discover-teppanyaki",
        "fine-dining-frisco",
        "free-birthday-food-deals",
        "group-dining-venues",
        "hibachi-birthday-party-ideas",
        "hibachi-calories-guide",
        "hibachi-catering-dfw",
        "hibachi-dining-experience",
        "hibachi-lunch-ideas",
        "hibachi-menu-guide",
        "hibachi-vs-teppanyaki-explained",
        "how-to-eat-sushi-guide",
        "japanese-beverages-guide",
        "japanese-cocktails",
        "japanese-restaurants-lewisville",
        "japanese-restaurants-near-me",
        "japanese-whiskey-guide",
        "jinbeh-catering-services",
        "jinbeh-gift-cards-guide",
        "large-group-dining",
        "offsite-hibachi-catering",
        "omakase-dining-guide",
        "pickleball-restaurants-lewisville",
        "popular-japanese-culture",
        "ramune-soda-guide",
        "restaurants-private-rooms",
        "romantic-anniversary-dinners",
        "sake-alcohol-strength",
        "sake-pairing-guide",
        "sake-sushi-menu-pairings",
        "sake-taste-profile",
        "sashimi-vs-sushi",
        "seafood-lewisville",
        "sushi-cooking-classes",
        "sushi-identification-chart",
        "sushi-lunch-specials",
        "thanksgiving-dining-guide",
        "top-frisco-restaurants",
        "types-of-sake-explained",
        "types-of-sushi",
        "unique-kids-birthday-party-places",
        "what-is-omakase",
        "yamazaki-whiskey-guide",
    ];

    const blogPages = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [
        ...staticPages,
        ...menuCategoryPages,
        ...celebrationPages,
        ...nearbyPages,
        ...blogPages,
    ];
}
