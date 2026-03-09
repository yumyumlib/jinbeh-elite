#!/usr/bin/env node
const fs = require('fs');

const BASE = '/Users/lighthaven/Documents/jinbeh-elite-phase1/src/data';
const content = JSON.parse(fs.readFileSync('/Users/lighthaven/Documents/jinbeh-elite-phase1/scripts/unique-content.json', 'utf-8'));

for (const [file, category] of Object.entries({
    'menu-items-hibachi.ts': 'hibachi',
    'menu-items-sushi-rolls.ts': 'sushi-rolls',
    'menu-items-appetizers.ts': 'appetizers',
    'menu-items-sashimi.ts': 'sashimi',
    'menu-items-cocktails.ts': 'cocktails',
})) {
    const filePath = `${BASE}/${file}`;
    let data = fs.readFileSync(filePath, 'utf-8');

    // Remove em dashes
    data = data.replace(/ — /g, '. ');
    data = data.replace(/\.\. /g, '. ');

    const lines = data.split('\n');
    const newLines = [];
    let currentSlug = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const slugMatch = line.match(/^        slug: '([^']+)'/);
        if (slugMatch) currentSlug = slugMatch[1];

        newLines.push(line);

        if (line.match(/^        heroImage: /) && currentSlug) {
            const key = `${category}/${currentSlug}`;
            const c = content[key];
            if (c) {
                newLines.push(`        jinbehStory: ${JSON.stringify(c.jinbehStory)},`);
                newLines.push(`        origin: ${JSON.stringify(c.origin)},`);
                newLines.push(`        nutritionHighlight: ${JSON.stringify(c.nutritionHighlight)},`);
                newLines.push(`        experienceNote: ${JSON.stringify(c.experienceNote)},`);
                console.log(`  + ${key}`);
            }
        }
    }

    fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
    console.log(`OK: ${file}`);
}
console.log('Done!');
