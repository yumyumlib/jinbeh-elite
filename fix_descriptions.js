const fs = require('fs');

// Map of page paths to their proper SEO descriptions
// Following jinbeh-seo-keywords skill: dish+location combos, include primary/secondary keywords
const fixes = {
    // Frisco menu category pages
    'src/app/frisco/hibachi/page.tsx': {
        old: "Explore Jinbeh Frisco's hibachi menu.",
        new: "Explore Jinbeh Frisco's hibachi menu featuring 14 teppanyaki options. Entertainment, fire show, family fun, and onion volcano. From Filet Mignon to Imperial Dinner near Stonebriar Centre."
    },
    'src/app/frisco/sushi-rolls/page.tsx': {
        old: "Explore Jinbeh Frisco's sushi roll",
        new: "Discover Jinbeh Frisco's fresh sushi rolls including Dragon Roll, Rainbow Roll, Spicy Tuna, and house specialties. Premium ingredients, hand-crafted daily near Stonebriar Centre."
    },
    'src/app/frisco/sashimi/page.tsx': {
        old: "Explore Jinbeh Frisco's sashimi",
        new: "Explore Jinbeh Frisco's sashimi menu featuring fresh salmon, tuna, yellowtail, octopus, and our premium omakase selection. Sliced to order by experienced chefs near Stonebriar Centre."
    },
    'src/app/frisco/appetizers/page.tsx': {
        old: "Explore Jinbeh Frisco's appetizer",
        new: "Browse Jinbeh Frisco's appetizer menu: crispy gyoza, edamame, tempura, seared tuna, soft shell crab, and tuna tartare. Perfect starters for your hibachi or sushi dinner near Stonebriar Centre."
    },
    'src/app/frisco/cocktails/page.tsx': {
        old: "Explore Jinbeh Frisco's cocktail",
        new: "Discover Jinbeh Frisco's sake, cocktails, and Japanese beverages. From sake flights and Tokyo Mules to lychee martinis and Jinbeh Punch. Happy hour specials near Stonebriar Centre."
    },
    'src/app/frisco/menu/page.tsx': {
        old: "Explore Jinbeh Frisco's full menu",
        new: "Browse the complete Jinbeh Frisco menu: hibachi, sushi rolls, sashimi, appetizers, cocktails, and sake. Japanese cuisine crafted fresh daily near Stonebriar Centre. Reserve your table today."
    },

    // Lewisville menu category pages
    'src/app/lewisville/hibachi/page.tsx': {
        old: "Explore Jinbeh Lewisville's hibachi",
        new: "Explore Jinbeh Lewisville's hibachi menu featuring 14 teppanyaki options. Entertainment, fire show, family fun, and onion volcano. From Filet Mignon to Imperial Dinner near Vista Ridge Mall."
    },
    'src/app/lewisville/sushi-rolls/page.tsx': {
        old: "Explore Jinbeh Lewisville's sushi roll",
        new: "Discover Jinbeh Lewisville's fresh sushi rolls including Dragon Roll, Rainbow Roll, Spicy Tuna, and house specialties. Premium ingredients, hand-crafted daily near Vista Ridge Mall."
    },
    'src/app/lewisville/sashimi/page.tsx': {
        old: "Explore Jinbeh Lewisville's sashimi",
        new: "Explore Jinbeh Lewisville's sashimi menu featuring fresh salmon, tuna, yellowtail, octopus, and our premium omakase selection. Sliced to order by experienced chefs near Vista Ridge Mall."
    },
    'src/app/lewisville/appetizers/page.tsx': {
        old: "Explore Jinbeh Lewisville's appetizer",
        new: "Browse Jinbeh Lewisville's appetizer menu: crispy gyoza, edamame, tempura, seared tuna, soft shell crab, and tuna tartare. Perfect starters for your hibachi or sushi dinner near Vista Ridge Mall."
    },
    'src/app/lewisville/cocktails/page.tsx': {
        old: "Explore Jinbeh Lewisville's cocktail",
        new: "Discover Jinbeh Lewisville's sake, cocktails, and Japanese beverages. From sake flights and Tokyo Mules to lychee martinis and Jinbeh Punch. Happy hour specials near Vista Ridge Mall."
    },
    'src/app/lewisville/menu/page.tsx': {
        old: "Explore Jinbeh Lewisville's full menu",
        new: "Browse the complete Jinbeh Lewisville menu: hibachi, sushi rolls, sashimi, appetizers, cocktails, and sake. Japanese cuisine crafted fresh daily near Vista Ridge Mall. Reserve your table today."
    },

    // Other truncated pages
    'src/app/gallery/page.tsx': {
        old: "Explore Jinbeh's photo",
        new: "Explore Jinbeh's photo and video gallery. See our hibachi chef performances, sushi craftsmanship, dining atmosphere, and celebration memories at our Frisco and Lewisville locations."
    },
    'src/app/menu/page.tsx': {
        old: "Explore Jinbeh's full",
        new: "Browse the complete Jinbeh Japanese Restaurant menu: hibachi, sushi rolls, sashimi, appetizers, and sake. Two locations in Frisco and Lewisville, TX. Reserve your table today."
    },
};

let fixed = 0;
let skipped = 0;

for (const [filePath, fix] of Object.entries(fixes)) {
    if (!fs.existsSync(filePath)) {
        console.log('[SKIP] File not found: ' + filePath);
        skipped++;
        continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    if (content.includes(fix.old)) {
        const newContent = content.replace(fix.old, fix.new);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('[FIXED] ' + filePath);
        fixed++;
    } else {
        console.log('[SKIP] Pattern not found in: ' + filePath);
        skipped++;
    }
}

console.log('\nDone! Fixed: ' + fixed + ', Skipped: ' + skipped);
