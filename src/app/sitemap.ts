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
        { url: `${baseUrl}/catering`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/celebrations`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/celebrations/birthday`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/gift-cards`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "daily" as const, priority: 0.8 },
    ];

    // Blog article slugs
    const blogSlugs = [
        "hibachi-birthday-party-ideas",
        "best-sushi-frisco",
        "best-hibachi-dallas-tx",
        "best-happy-hour-frisco-tx",
        "discover-teppanyaki",
        "types-of-sushi",
        "sake-alcohol-strength",
        "best-sushi-dallas",
        "japanese-restaurants-lewisville",
        "hibachi-catering-dfw",
        "unique-kids-birthday-party-places",
        "group-dining-venues",
    ];

    const blogPages = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
