const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, filesList);
        } else if (name.endsWith('page.tsx')) {
            filesList.push(name);
        }
    }
    return filesList;
}

const files = getFiles('./src/app');
let noKeywords = [];
let lowKeywords = [];
let goodKeywords = [];

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');

    // Check if file has metadata export
    if (!content.includes('export const metadata')) continue;

    // Try to extract keyword array with multiline support
    const keywordMatch = content.match(/keywords\s*:\s*\[([\s\S]*?)\]/);

    if (!keywordMatch) {
        noKeywords.push(file);
        continue;
    }

    const keywordStr = keywordMatch[1];
    const keywords = keywordStr
        .split(',')
        .map(k => k.trim().replace(/['"]/g, '').replace(/\\"/g, ''))
        .filter(k => k.length > 0);

    const shortPath = file.replace('./src/app/', '');

    if (keywords.length <= 3) {
        lowKeywords.push({ file: shortPath, count: keywords.length, keywords });
    } else {
        goodKeywords.push({ file: shortPath, count: keywords.length, keywords });
    }
}

console.log('=== PAGES WITH NO KEYWORDS ARRAY ===');
noKeywords.forEach(f => console.log(`  ${f.replace('./src/app/', '')}`));
console.log(`Total: ${noKeywords.length}\n`);

console.log('=== PAGES WITH LOW KEYWORDS (≤3) ===');
lowKeywords.forEach(p => console.log(`  [${p.count}] ${p.file} → ${p.keywords.join(', ')}`));
console.log(`Total: ${lowKeywords.length}\n`);

console.log('=== PAGES WITH ADEQUATE KEYWORDS (>3) ===');
goodKeywords.forEach(p => console.log(`  [${p.count}] ${p.file}`));
console.log(`Total: ${goodKeywords.length}\n`);

console.log(`\n=== SUMMARY ===`);
console.log(`Total pages with metadata: ${noKeywords.length + lowKeywords.length + goodKeywords.length}`);
console.log(`Missing keywords: ${noKeywords.length}`);
console.log(`Low keywords (≤3): ${lowKeywords.length}`);
console.log(`Adequate keywords (>3): ${goodKeywords.length}`);
