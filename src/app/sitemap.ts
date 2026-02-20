import { MetadataRoute } from "next";
import blogPostsData from "@/data/blog-posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://jinbeh.com";

    // Tiered dates — most recent for highest-value pages
    const today = "2026-02-17";  // most important: homepage, locations, menus, reservations
    const thisWeek = "2026-02-14";  // high-value: specials, happy hour, blog hub
    const thisMonth = "2026-02-01";  // mid-tier: catering, celebrations, nearby cities
    const older = "2026-01-15";  // low-churn: legal, about, careers, gallery

    // ─── Core pages ───────────────────────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
        { url: `${baseUrl}/frisco`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/lewisville`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/menu`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/frisco/menu`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/lewisville/menu`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/reservations`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/happy-hour`, lastModified: thisWeek, changeFrequency: "weekly", priority: 0.8 },
        { url: `${baseUrl}/happy-hour/specials`, lastModified: thisWeek, changeFrequency: "weekly", priority: 0.7 },
        { url: `${baseUrl}/bar`, lastModified: thisWeek, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/lunch-specials`, lastModified: thisWeek, changeFrequency: "weekly", priority: 0.7 },
        { url: `${baseUrl}/specials`, lastModified: thisWeek, changeFrequency: "weekly", priority: 0.7 },
        { url: `${baseUrl}/frisco/specials`, lastModified: thisWeek, changeFrequency: "weekly", priority: 0.6 },
        { url: `${baseUrl}/lewisville/specials`, lastModified: thisWeek, changeFrequency: "weekly", priority: 0.6 },
        { url: `${baseUrl}/blog`, lastModified: thisWeek, changeFrequency: "daily", priority: 0.8 },
        { url: `${baseUrl}/catering`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/catering/corporate`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/catering/party`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/catering/wedding`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/private-dining`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/celebrations`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/gift-cards`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/takeout`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/order-online`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/delivery`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/events`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/allergy-friendly-dining`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/gallery`, lastModified: older, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/careers`, lastModified: older, changeFrequency: "monthly", priority: 0.4 },
        { url: `${baseUrl}/about`, lastModified: older, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/contact`, lastModified: older, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/faq`, lastModified: older, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/privacy`, lastModified: older, changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: older, changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/accessibility`, lastModified: older, changeFrequency: "yearly", priority: 0.3 },
    ];

    // ─── Kids menu (both locations) ──────────────────────────────
    const kidsMenuPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/frisco/kids-menu`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/lewisville/kids-menu`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.5 },
    ];

    // ─── Menu category pages (both locations) ────────────────────
    const menuCategories = [
        "hibachi", "sushi-rolls", "sashimi", "appetizers", "cocktails",
    ];
    const menuCategoryPages: MetadataRoute.Sitemap = menuCategories.flatMap((category) => [
        { url: `${baseUrl}/frisco/${category}`, lastModified: today, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/lewisville/${category}`, lastModified: today, changeFrequency: "monthly" as const, priority: 0.7 },
    ]);

    // ─── Individual menu item pages (both locations) ─────────────
    const menuItems: Record<string, string[]> = {
        hibachi: [
            "chicken-teriyaki", "combo-seafood", "combo-steak-chicken",
            "combo-steak-lobster", "combo-steak-shrimp", "filet-mignon",
            "imperial-dinner", "lobster-tail", "ny-strip", "ribeye",
            "salmon", "scallops", "shrimp", "vegetable-tofu",
        ],
        "sushi-rolls": [
            "ahi-tower", "butterfly-kiss", "california-roll", "caterpillar-roll",
            "dragon-roll", "philly-roll", "rainbow-roll", "shrimp-tempura-roll",
            "spicy-tuna-roll", "spider-roll", "tiger-roll", "vegas-roll",
            "volcano-roll", "yellowtail-jalapeno",
        ],
        sashimi: [
            "chirashi", "octopus-sashimi", "omakase", "salmon-sashimi",
            "sashimi-deluxe", "tuna-sashimi", "yellowtail-sashimi",
        ],
        appetizers: [
            "edamame", "gyoza", "seared-tuna", "soft-shell-crab",
            "tempura", "tuna-tartare",
        ],
        cocktails: [
            "jinbeh-punch", "lychee-martini", "sake-bomb",
            "sake-flight", "tokyo-mule",
        ],
    };

    const locations = ["frisco", "lewisville"];
    const menuItemPages: MetadataRoute.Sitemap = locations.flatMap((location) =>
        Object.entries(menuItems).flatMap(([category, items]) =>
            items.map((item) => ({
                url: `${baseUrl}/${location}/${category}/${item}`,
                lastModified: thisMonth,
                changeFrequency: "monthly" as const,
                priority: 0.5,
            }))
        )
    );

    // ─── Neighborhood / nearby-area pages ────────────────────────
    const neighborhoodPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/frisco/stonebriar`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/frisco/starwood`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/frisco/legacy`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/lewisville/castle-hills`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
        { url: `${baseUrl}/lewisville/vista-ridge`, lastModified: thisMonth, changeFrequency: "monthly", priority: 0.6 },
    ];

    // ─── Celebration pages ───────────────────────────────────────
    const celebrationSlugs = [
        "anniversary", "asian-restaurant-month", "baby-shower", "birthday",
        "christmas", "corporate-events", "date-night", "diwali",
        "family-gatherings", "fathers-day", "graduation", "holiday-parties",
        "lunar-new-year", "mid-autumn-festival", "mothers-day",
        "national-fried-rice-day", "rehearsal-dinner", "team-building",
        "thanksgiving", "valentines-day",
    ];
    const celebrationPages: MetadataRoute.Sitemap = celebrationSlugs.map((slug) => ({
        url: `${baseUrl}/celebrations/${slug}`,
        lastModified: thisMonth,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // ─── Nearby city pages ───────────────────────────────────────
    const nearbyCities = [
        "allen", "carrollton", "coppell", "denton", "flower-mound",
        "grapevine", "highland-village", "little-elm", "mckinney",
        "plano", "richardson", "the-colony",
    ];
    const nearbyPages: MetadataRoute.Sitemap = nearbyCities.map((city) => ({
        url: `${baseUrl}/nearby/${city}`,
        lastModified: thisMonth,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // ─── Blog category pages ─────────────────────────────────────
    const blogCategories = [
        "sushi", "hibachi", "celebrations", "happy-hour", "local-guide",
        "best-of", "beverages", "cuisine", "health", "local-guides",
    ];
    const blogCategoryPages: MetadataRoute.Sitemap = blogCategories.map((cat) => ({
        url: `${baseUrl}/blog/category/${cat}`,
        lastModified: thisWeek,
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    // ─── Blog article pages (use actual publishedAt dates) ───────
    const blogPosts = (blogPostsData as unknown as { posts: { slug: string; publishedAt?: string }[] }).posts;
    const blogPages: MetadataRoute.Sitemap = blogPosts
        .filter((post) => post.slug)
        .map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.publishedAt || thisMonth,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

    return [
        ...staticPages,
        ...kidsMenuPages,
        ...menuCategoryPages,
        ...menuItemPages,
        ...neighborhoodPages,
        ...celebrationPages,
        ...nearbyPages,
        ...blogCategoryPages,
        ...blogPages,
    ];
}
