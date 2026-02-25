const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('src/app/blog');
let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;

    // Next.js complains about *, ', ", <, >, }, { inside of text nodes.
    // The safest way to fix the remaining 400 errors is to target any apostrophe 
    // that exists roughly between JSX tags and safely escape them.

    // A very aggressive fallback: just find all the text lines between tags that have an unescaped apostrophe
    const rawApostropheBetweenTags = /(>)([^<]*?)'([^<]*?)(<)/g;
    while (rawApostropheBetweenTags.test(newContent)) {
        newContent = newContent.replace(rawApostropheBetweenTags, "$1$2&apos;$3$4");
    }

    // Also catch smart quotes (curly quotes) commonly copy pasted from Word
    const smartApostropheBetweenTags = /(>)([^<]*?)’([^<]*?)(<)/g;
    while (smartApostropheBetweenTags.test(newContent)) {
        newContent = newContent.replace(smartApostropheBetweenTags, "$1$2&apos;$3$4");
    }

    // A second pass if there were multiple on one line
    while (rawApostropheBetweenTags.test(newContent)) {
        newContent = newContent.replace(rawApostropheBetweenTags, "$1$2&apos;$3$4");
    }

    // Fix raw double quotes in text nodes too (NextJS complains about ")
    const rawDoubleQuoteBetweenTags = /(>)([^<]*?)"([^<]*?)(<)/g;
    while (rawDoubleQuoteBetweenTags.test(newContent)) {
        // Don't replace if it looks like a tag property like className="foo"
        if (newContent.match(/=\s*"/)) break; // Safety check
        newContent = newContent.replace(rawDoubleQuoteBetweenTags, "$1$2&quot;$3$4");
    }

    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        changedCount++;
    }
});

console.log(`Phase 2: Fixed entities in ${changedCount} files.`);
