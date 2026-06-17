import { MetadataRoute } from 'next';
import blogData from '@/data/blog-posts.json';
import paaData from '@/data/paa-content.json';

// We want to generate a dynamic sitemap that includes:
// 1. Core pages (Home, About, Contact, etc)
// 2. Hub pages (Locations, Celebrations, Resources)
// 3. Location-specific programmatic pages (Frisco, Lewisville)
// 4. Blog posts and categories
// 5. Dynamic nearby city pages
// 6. PAA (People Also Ask) FAQ pages at /faq/[slug]

const baseUrl = 'https://jinbeh.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes: MetadataRoute.Sitemap = [];

    // Accurate lastmod dates per content section
    const coreLastMod = new Date('2026-03-29');      // Last major update
    const menuLastMod = new Date('2026-03-29');       // Menu items stable
    const celebrationsLastMod = new Date('2026-02-18'); // Celebration pages last batch
    const nearbyLastMod = new Date('2026-01-30');      // Nearby city pages created
    const blogLastMod = new Date('2026-03-29');        // Blog hub updated
    const paaLastMod = new Date('2026-05-12');         // PAA pages launched

    // 1. Core Pages
    const corePages = [
        '',
        '/about',
        '/contact',
        '/faq',
        '/gift-cards',
        '/private-dining',
        '/catering',
        '/catering/wedding',
        '/catering/party',
        '/catering/corporate',
        '/reservations',
        '/happy-hour',
        '/happy-hour/specials',
        '/order-online',
        '/takeout',
        '/delivery',
        '/specials',
        '/menu',
        '/bar',
        '/gallery',
        '/careers',
        '/events',
        '/lunch-specials',
        '/allergy-friendly-dining',
        '/vip',
        '/privacy',
        '/terms',
        '/accessibility',
        '/world-cup-2026'
    ];

    corePages.forEach((route) => {
        routes.push({
            url: `${baseUrl}${route}`,
            lastModified: coreLastMod,
            changeFrequency: 'weekly',
            priority: route === '' ? 1.0 : 0.8,
        });
    });

    // 2. Celebrations Hub + Individual Celebration Pages
    // Only includes pages that have actual route directories on disk
    const celebrations = [
        '/celebrations',
        '/celebrations/birthday',
        '/celebrations/anniversary',
        '/celebrations/corporate-events',
        '/celebrations/graduation',
        '/celebrations/date-night',
        '/celebrations/mothers-day',
        '/celebrations/fathers-day',
        '/celebrations/valentines-day',
        '/celebrations/rehearsal-dinner',
        '/celebrations/holiday-parties',
        '/celebrations/lunar-new-year',
        '/celebrations/mid-autumn-festival',
        '/celebrations/baby-shower',
        '/celebrations/team-building',
        '/celebrations/family-gatherings',
        '/celebrations/thanksgiving',
        '/celebrations/christmas',
        '/celebrations/diwali',
        '/celebrations/asian-restaurant-month',
        '/celebrations/national-fried-rice-day',
        '/celebrations/world-cup',
        '/celebrations/world-cup-watch-party',
        '/celebrations/dfw-moms'
    ];

    celebrations.forEach((route) => {
        routes.push({
            url: `${baseUrl}${route}`,
            lastModified: celebrationsLastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    });

    // 3. Location-specific programmatic pages
    const locs = ['frisco', 'lewisville'];
    const locSubPages = [
        '',
        '/menu',
        '/specials',
        '/sushi',
        '/sushi-rolls',
        '/sashimi',
        '/hibachi',
        '/appetizers',
        '/cocktails',
        '/kids-menu'
    ];

    locs.forEach((loc) => {
        locSubPages.forEach((subPage) => {
            routes.push({
                url: `${baseUrl}/${loc}${subPage}`,
                lastModified: menuLastMod,
                changeFrequency: subPage === '/menu' || subPage === '/specials' ? 'weekly' : 'monthly',
                priority: subPage === '' ? 0.9 : 0.7,
            });
        });
    });

    // 3b. Location-specific neighborhood/SEO pages
    const friscoNeighborhoods = ['/starwood', '/stonebriar', '/legacy'];
    friscoNeighborhoods.forEach((page) => {
        routes.push({
            url: `${baseUrl}/frisco${page}`,
            lastModified: nearbyLastMod,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    const lewisvilleNeighborhoods = ['/castle-hills', '/vista-ridge'];
    lewisvilleNeighborhoods.forEach((page) => {
        routes.push({
            url: `${baseUrl}/lewisville${page}`,
            lastModified: nearbyLastMod,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    // Dietary / positioning landing pages
    routes.push({
        url: `${baseUrl}/lewisville/vegetarian`,
        lastModified: new Date('2026-05-31'),
        changeFrequency: 'monthly',
        priority: 0.7,
    });

    // Location-specific World Cup 2026 landing pages
    ['frisco', 'lewisville'].forEach((loc) => {
        routes.push({
            url: `${baseUrl}/${loc}/world-cup`,
            lastModified: new Date('2026-06-01'),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    });

    // Manually add the programmatic sub-items based on sitemap structure context
    const itemsFrisco = [
        '/sushi-rolls/california-roll', '/sushi-rolls/spicy-tuna-roll', '/sushi-rolls/rainbow-roll', '/sushi-rolls/caterpillar-roll', '/sushi-rolls/spider-roll', '/sushi-rolls/dragon-roll', '/sushi-rolls/tiger-roll', '/sushi-rolls/butterfly-kiss', '/sushi-rolls/shrimp-tempura-roll', '/sushi-rolls/philly-roll', '/sushi-rolls/vegas-roll', '/sushi-rolls/volcano-roll', '/sushi-rolls/ahi-tower', '/sushi-rolls/yellowtail-jalapeno',
        '/sashimi/sashimi-deluxe', '/sashimi/salmon-sashimi', '/sashimi/tuna-sashimi', '/sashimi/yellowtail-sashimi', '/sashimi/chirashi', '/sashimi/octopus-sashimi',
        '/hibachi/filet-mignon', '/hibachi/ny-strip', '/hibachi/ribeye', '/hibachi/chicken-teriyaki', '/hibachi/shrimp', '/hibachi/scallops', '/hibachi/salmon', '/hibachi/lobster-tail', '/hibachi/vegetable-tofu', '/hibachi/combo-steak-chicken', '/hibachi/combo-steak-shrimp', '/hibachi/combo-seafood', '/hibachi/combo-steak-lobster', '/hibachi/imperial-dinner',
        '/appetizers/edamame', '/appetizers/gyoza', '/appetizers/tempura', '/appetizers/soft-shell-crab', '/appetizers/seared-tuna', '/appetizers/tuna-tartare',
        '/cocktails/jinbeh-punch', '/cocktails/tokyo-mule', '/cocktails/lychee-martini', '/cocktails/sake-bomb', '/cocktails/sake-flight'
    ];

    locs.forEach((loc) => {
        itemsFrisco.forEach((item) => {
            routes.push({
                url: `${baseUrl}/${loc}${item}`,
                lastModified: menuLastMod,
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });
    });

    // 4. Blog Posts and Categories
    routes.push({
        url: `${baseUrl}/blog`,
        lastModified: blogLastMod,
        changeFrequency: 'weekly',
        priority: 0.8,
    });

    blogData.categories.forEach((cat: { id: string }) => {
        routes.push({
            url: `${baseUrl}/blog/category/${cat.id}`,
            lastModified: blogLastMod,
            changeFrequency: 'weekly',
            priority: 0.7,
        });
    });

    blogData.posts.forEach((post: { slug: string, publishedAt: string }) => {
        routes.push({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    });

    // 5. Dynamic nearby city pages
    const nearbyCities = [
        'plano', 'mckinney', 'the-colony', 'allen', 'flower-mound',
        'carrollton', 'coppell', 'grapevine', 'denton', 'highland-village',
        'little-elm', 'richardson'
    ];

    nearbyCities.forEach((city) => {
        routes.push({
            url: `${baseUrl}/nearby/${city}`,
            lastModified: nearbyLastMod,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    // 6. PAA (People Also Ask) FAQ pages - programmatic
    (paaData.questions as Array<{ slug: string }>).forEach((q) => {
        routes.push({
            url: `${baseUrl}/faq/${q.slug}`,
            lastModified: paaLastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    });

    // SAFETY GUARD: never emit a URL that 301-redirects. Every `source`
    // in next.config.ts `redirects()` is a redirecting path and must NOT
    // appear in the sitemap, or Search Console flags "Pages in a sitemap
    // redirect / Page with redirect". Keep this list in sync with the
    // redirects() block. (Added May 31 2026 after GSC sitemap-redirect emails.)
    const redirectedPaths = new Set(
        [
            '/home', '/join', '/vip-club', '/privacy-policy', '/test',
            '/world-cup', '/fifa-2026', '/samurai-blue', '/japan-world-cup',
            '/blog/sushi-platters-near-me', '/blog/japanese-restaurants-lewisville',
            '/blog/best-hibachi-dallas', '/blog/types-of-sushi-rolls', '/blog/what-is-hibachi',
        ].map((p) => `${baseUrl}${p}`)
    );

    return routes.filter((r) => !redirectedPaths.has(r.url));
}
