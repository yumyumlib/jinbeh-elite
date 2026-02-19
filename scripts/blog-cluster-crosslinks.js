/**
 * Add same-cluster cross-links to under-linked blog articles.
 * These articles all use ArticleLayout, so we insert before </ArticleLayout>.
 */
const fs = require('fs');
const path = require('path');
const data = require('../src/data/blog-posts.json');

const blogDir = path.join(__dirname, '..', 'src/app/blog');

// Manually map: target slug → links to add
const crossLinkMap = {
    'bridal-shower-venues': [
        { slug: 'bachelorette-restaurants-dallas', title: 'Best Bachelorette Restaurants in Dallas' },
        { slug: 'restaurants-private-rooms', title: 'Restaurants with Private Dining Rooms' },
    ],
    'baby-shower-venues': [
        { slug: 'bridal-shower-venues', title: 'Bridal Shower Venues in DFW' },
        { slug: 'large-group-dining', title: 'Large Group Dining Guide' },
    ],
    'free-birthday-food-deals': [
        { slug: 'birthday-celebration-restaurants', title: 'Best Birthday Celebration Restaurants' },
        { slug: 'hibachi-birthday-party-ideas', title: 'Hibachi Birthday Party Ideas' },
    ],
    'hibachi-menu-guide': [
        { slug: 'hibachi-dining-experience', title: 'The Hibachi Dining Experience' },
        { slug: 'hibachi-lunch-ideas', title: 'Hibachi Lunch Ideas & Combos' },
    ],
    'jinbeh-gift-cards-guide': [
        { slug: 'best-sushi-frisco', title: 'Best Sushi in Frisco' },
        { slug: 'hibachi-birthday-party-ideas', title: 'Hibachi Birthday Party Ideas' },
    ],
    'offsite-hibachi-catering': [
        { slug: 'jinbeh-catering-services', title: 'Full Jinbeh Catering Services' },
        { slug: 'hibachi-catering-dfw', title: 'Hibachi Catering Across DFW' },
    ],
    'pickleball-restaurants-lewisville': [
        { slug: 'japanese-restaurants-lewisville', title: 'Japanese Restaurants in Lewisville' },
        { slug: 'seafood-lewisville', title: 'Best Seafood in Lewisville' },
    ],
    'hibachi-lunch-ideas': [
        { slug: 'hibachi-menu-guide', title: 'Complete Hibachi Menu Guide' },
        { slug: 'sushi-lunch-specials', title: 'Sushi Lunch Specials' },
    ],
};

let updated = 0;
let skipped = 0;

for (const [slug, links] of Object.entries(crossLinkMap)) {
    const fp = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(fp)) { console.log(`SKIP: ${slug} - file not found`); skipped++; continue; }

    let content = fs.readFileSync(fp, 'utf-8');

    // Check which links are already present
    const needed = links.filter(l => !content.includes(`/blog/${l.slug}`));
    if (needed.length === 0) {
        console.log(`SKIP: ${slug} - all links already present`);
        skipped++;
        continue;
    }

    // Build related reading block
    const linkItems = needed.map(l =>
        `              <Link href="/blog/${l.slug}" className="text-accent-red hover:underline font-medium">${l.title}</Link>`
    ).join('\n');

    const relatedBlock = `
        {/* Related Reading */}
        <div className="my-8 p-6 bg-warm-ivory rounded-xl border-l-4 border-accent-red">
          <p className="font-heading font-bold text-charcoal mb-3">📖 Related Reading</p>
          <div className="flex flex-col gap-2">
${linkItems}
          </div>
        </div>`;

    // Insert before </ArticleLayout>
    const closeTag = '</ArticleLayout>';
    const closeIdx = content.lastIndexOf(closeTag);

    if (closeIdx === -1) {
        console.log(`SKIP: ${slug} - no </ArticleLayout> found`);
        skipped++;
        continue;
    }

    content = content.substring(0, closeIdx) + relatedBlock + '\n      ' + content.substring(closeIdx);

    // Ensure Link is imported
    if (!content.includes("from \"next/link\"") && !content.includes("from 'next/link'")) {
        content = content.replace(
            /(import .+ from .+\n)/,
            '$1import Link from "next/link";\n'
        );
    }

    fs.writeFileSync(fp, content, 'utf-8');
    updated++;
    console.log(`ADDED: ${slug} → ${needed.map(l => l.slug).join(', ')}`);
}

console.log(`\n=== Results ===`);
console.log(`Updated: ${updated}`);
console.log(`Skipped: ${skipped}`);
