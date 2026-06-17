import { MetadataRoute } from "next";

// Jinbeh actively WELCOMES AI crawlers and search-engine bots.
// Cloudflare's "Managed robots.txt" toggle is OFF (Apr 2026); this is the
// canonical robots.txt served from the origin. We explicitly Allow every
// major AI crawler / assistant / training bot so there's no ambiguity in
// the signal — both for the bots themselves and for any monitoring tools.
export default function robots(): MetadataRoute.Robots {
    const aiBots = [
        "GPTBot",              // OpenAI training crawler
        "OAI-SearchBot",       // OpenAI search index
        "ChatGPT-User",        // OpenAI real-time user fetches
        "ClaudeBot",           // Anthropic training crawler
        "Claude-Web",          // Anthropic legacy crawler
        "Claude-SearchBot",    // Anthropic search index
        "Claude-User",         // Anthropic real-time user fetches
        "anthropic-ai",        // Anthropic generic
        "PerplexityBot",       // Perplexity index crawler
        "Perplexity-User",     // Perplexity real-time
        "CCBot",               // Common Crawl (used by ~all LLMs)
        "Google-Extended",     // Google Gemini training opt-in
        "GoogleOther",         // Google's research crawler
        "Google-CloudVertexBot", // Google Vertex AI grounding
        "Bytespider",          // ByteDance / Doubao
        "TikTok-Spider",       // ByteDance
        "Applebot",            // Apple Search
        "Applebot-Extended",   // Apple Intelligence training
        "Amazonbot",           // Amazon AI
        "DuckAssistBot",       // DuckDuckGo AI
        "Meta-ExternalAgent",  // Meta AI training
        "Meta-ExternalFetcher",// Meta real-time
        "FacebookBot",         // Meta crawler
        "PetalBot",            // Huawei
        "MistralAI-User",      // Mistral
        "ManusBot",            // Manus
        "YouBot",              // You.com
        "cohere-ai",           // Cohere
        "Diffbot",             // Diffbot (used by LLMs)
        "ImagesiftBot",
    ];

    return {
        rules: [
            // Explicit allow for every major AI crawler / assistant
            ...aiBots.map((userAgent) => ({
                userAgent,
                allow: "/",
                disallow: ["/api/", "/_next/", "/private/"],
            })),
            // Catch-all
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/private/"],
            },
        ],
        sitemap: [
            "https://jinbeh.com/sitemap.xml",
            "https://jinbeh.com/image-sitemap.xml",
        ],
        host: "https://jinbeh.com",
    };
}
