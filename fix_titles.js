const fs = require('fs');
const path = require('path');

function getFiles(dir, list) {
    list = list || [];
    for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) getFiles(p, list);
        else if (p.endsWith('page.tsx')) list.push(p);
    }
    return list;
}

const files = getFiles('./src/app');
let fixed = 0;
let skipped = 0;

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');

    // Only process menu item pages (frisco/lewisville individual items)
    const isMenuItem = (
        file.includes('/frisco/hibachi/') || file.includes('/lewisville/hibachi/') ||
        file.includes('/frisco/sushi-rolls/') || file.includes('/lewisville/sushi-rolls/') ||
        file.includes('/frisco/sashimi/') || file.includes('/lewisville/sashimi/') ||
        file.includes('/frisco/appetizers/') || file.includes('/lewisville/appetizers/') ||
        file.includes('/frisco/cocktails/') || file.includes('/lewisville/cocktails/')
    );

    if (!isMenuItem) continue;

    // Skip category index pages (they already have Jinbeh in title)
    const shortPath = file.replace('src/app/', '');
    const parts = shortPath.split('/');
    if (parts.length <= 3) continue; // skip /frisco/hibachi/page.tsx (category page)

    // Check if title already contains Jinbeh
    if (content.includes('Jinbeh') && content.match(/title:\s*["'][^"']*Jinbeh/)) {
        skipped++;
        continue;
    }

    // Find the title and append " | Jinbeh"
    // Match pattern: title: "Something Something",
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    if (titleMatch && !titleMatch[1].includes('Jinbeh')) {
        const oldTitle = titleMatch[0];
        const newTitle = 'title: "' + titleMatch[1] + ' | Jinbeh"';
        const newContent = content.replace(oldTitle, newTitle);
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('[FIXED] ' + shortPath.replace('/page.tsx', '') + ': ' + titleMatch[1] + ' | Jinbeh');
        fixed++;
    } else {
        skipped++;
    }
}

console.log('\nDone! Fixed: ' + fixed + ', Skipped: ' + skipped);
