const fs = require('fs');
const path = require('path');

const pagesMissingH1 = [
    "src/app/blog/hibachi-dining-experience/page.tsx",
    "src/app/blog/beginner-sushi-tips/page.tsx",
    "src/app/blog/free-birthday-food-deals/page.tsx",
    "src/app/blog/bridal-shower-venues/page.tsx",
    "src/app/blog/pickleball-restaurants-lewisville/page.tsx",
    "src/app/blog/jinbeh-gift-cards-guide/page.tsx",
    "src/app/blog/what-is-omakase/page.tsx",
    "src/app/blog/hibachi-lunch-ideas/page.tsx",
    "src/app/blog/best-hibachi-dallas/page.tsx",
    "src/app/blog/offsite-hibachi-catering/page.tsx",
    "src/app/blog/hibachi-birthday-party-ideas/page.tsx",
    "src/app/blog/omakase-dining-guide/page.tsx",
    "src/app/blog/romantic-anniversary-dinners/page.tsx",
    "src/app/blog/jinbeh-catering-services/page.tsx",
    "src/app/blog/hibachi-menu-guide/page.tsx",
    "src/app/blog/hibachi-vs-teppanyaki-explained/page.tsx",
    "src/app/blog/hibachi-calories-guide/page.tsx",
    "src/app/blog/baby-shower-venues/page.tsx",
    "src/app/lewisville/sashimi/omakase/page.tsx",
    "src/app/frisco/sashimi/omakase/page.tsx"
];

const basePath = path.join(__dirname, '..');

pagesMissingH1.forEach(pagePath => {
    const fullPath = path.join(basePath, pagePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`❌ File not found: ${pagePath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Extract a title from metadata to use as the H1
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);

    if (!titleMatch) {
        console.log(`⚠️ No title found in metadata for: ${pagePath}`);
        return;
    }

    // Clean up the title (remove " | Jinbeh..." suffix if present)
    let pageTitle = titleMatch[1].split(' | ')[0];

    if (content.includes('<h1')) {
        console.log(`✅ Already has H1: ${pagePath}`);
        return;
    }

    const h1Markup = `\n      <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">\n        ${pageTitle}\n      </h1>\n`;

    let replaced = false;

    if (content.match(/<ArticleLayout[\s\S]*?>/)) {
        content = content.replace(/(<ArticleLayout[\s\S]*?>)/, `$1${h1Markup}`);
        replaced = true;
    } else if (content.match(/<h2[^>]*>/)) {
        content = content.replace(/(<h2[^>]*>)/, `${h1Markup}      $1`);
        replaced = true;
    } else if (content.includes('<div className="container mx-auto px-6 py-16">')) {
        content = content.replace(/(<div className="container mx-auto px-6 py-16">)/, `$1${h1Markup}`);
        replaced = true;
    }

    if (replaced) {
        fs.writeFileSync(fullPath, content);
        console.log(`✨ Injected H1 into: ${pagePath}`);
    } else {
        console.log(`⚠️ Could not find injection point for: ${pagePath}`);
    }
});
