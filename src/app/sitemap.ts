import { MetadataRoute } from 'next';
import blogData from '@/data/blog-posts.json';

// We want to generate a dynamic sitemap that includes:
// 1. Core pages (Home, About, Contact, etc)
// 2. Hub pages (Locations, Celebrations, Resources)
// 3. Location-specific programmatic pages (Frisco, Lewisville)
// 4. Blog posts and categories
// 5. Dynamic nearby city pages

const baseUrl = 'https://jinbeh.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes: MetadataRoute.Sitemap = [];
    const now = new Date();

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
        '/accessibility'
    ];

    corePages.forEach((route) => {
        routes.push({
            url: `${baseUrl}${route}`,
            lastModified: now,
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
        '/celebrations/national-fried-rice-day'
    ];

    celebrations.forEach((route) => {
        routes.push({
            url: `${baseUrl}${route}`,
            lastModified: now,
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
                lastModified: now,
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
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    const lewisvilleNeighborhoods = ['/castle-hills', '/vista-ridge'];
    lewisvilleNeighborhoods.forEach((page) => {
        routes.push({
            url: `${baseUrl}/lewisville${page}`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    // Manually add the programmatic sub-items based on sitemap structure context
    const itemsFrisco = [
        '/sushi-rolls/california-roll', '/sushi-rolls/spicy-tuna-roll', '/sushi-rolls/rainbow-roll', '/sushi-rolls/caterpillar-roll', '/sushi-rolls/spider-roll', '/sushi-rolls/dragon-roll', '/sushi-rolls/tiger-roll', '/sushi-rolls/butterfly-kiss', '/sushi-rolls/shrimp-tempura-roll', '/sushi-rolls/philly-roll', '/sushi-rolls/vegas-roll', '/sushi-rolls/volcano-roll', '/sushi-rolls/ahi-tower', '/sushi-rolls/yellowtail-jalapeno',
        '/sashimi/omakase', '/sashimi/sashimi-deluxe', '/sashimi/salmon-sashimi', '/sashimi/tuna-sashimi', '/sashimi/yellowtail-sashimi', '/sashimi/chirashi', '/sashimi/octopus-sashimi',
        '/hibachi/filet-mignon', '/hibachi/ny-strip', '/hibachi/ribeye', '/hibachi/chicken-teriyaki', '/hibachi/shrimp', '/hibachi/scallops', '/hibachi/salmon', '/hibachi/lobster-tail', '/hibachi/vegetable-tofu', '/hibachi/combo-steak-chicken', '/hibachi/combo-steak-shrimp', '/hibachi/combo-seafood', '/hibachi/combo-steak-lobster', '/hibachi/imperial-dinner',
        '/appetizers/edamame', '/appetizers/gyoza', '/appetizers/tempura', '/appetizers/soft-shell-crab', '/appetizers/seared-tuna', '/appetizers/tuna-tartare',
        '/cocktails/jinbeh-punch', '/cocktails/tokyo-mule', '/cocktails/lychee-martini', '/cocktails/sake-bomb', '/cocktails/sake-flight'
    ];

    locs.forEach((loc) => {
        itemsFrisco.forEach((item) => {
            routes.push({
                url: `${baseUrl}/${loc}${item}`,
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });
    });

    // 4. Blog Posts and Categories
    routes.push({
        url: `${baseUrl}/blog`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    });

    blogData.categories.forEach((cat: { id: string }) => {
        routes.push({
            url: `${baseUrl}/blog/category/${cat.id}`,
            lastModified: now,
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
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    return routes;
}
