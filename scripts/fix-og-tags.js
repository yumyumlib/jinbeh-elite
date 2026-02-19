const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src/app/blog');
const data = require(path.join(__dirname, '..', 'src/data/blog-posts.json'));

const slugs = [
    'asian-cuisine-dallas', 'best-asian-food-dallas', 'best-seafood-dallas',
    'best-steak-near-me', 'best-sushi-dallas', 'group-dining-venues',
    'japanese-restaurants-lewisville', 'japanese-restaurants-near-me',
    'omakase-dining-guide', 'popular-japanese-culture', 'unique-kids-birthday-party-places'
];

let fixed = 0;
for (const slug of slugs) {
    const fp = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(fp)) { console.log('NOT FOUND: ' + slug); continue; }

    let c = fs.readFileSync(fp, 'utf-8');
    if (c.includes('openGraph')) { console.log('SKIP: ' + slug); continue; }

    const post = data.posts.find(p => p.slug === slug);
    if (!post) { console.log('NO POST DATA: ' + slug); continue; }

    const title = post.title.replace(/"/g, '\\"');
    const desc = post.excerpt.replace(/"/g, '\\"').substring(0, 155);
    const img = post.heroImage || '/images/jinbeh-og.jpg';

    const ogBlock = `  openGraph: {\n    title: "${title}",\n    description: "${desc}",\n    url: "https://jinbeh.com/blog/${slug}",\n    type: "article",\n    images: ["${img}"],\n  },\n`;

    // Insert before alternates
    const altIdx = c.indexOf('  alternates:');
    if (altIdx === -1) { console.log('NO ALTERNATES: ' + slug); continue; }

    c = c.substring(0, altIdx) + ogBlock + c.substring(altIdx);
    fs.writeFileSync(fp, c, 'utf-8');
    fixed++;
    console.log('FIXED: ' + slug);
}
console.log('\nTotal fixed:', fixed);
