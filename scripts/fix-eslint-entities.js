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
let totalMatches = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;

    // We are looking to escape common punctuation like didn't, it's, isn't, Jinbeh's
    // inside of JSX text nodes. A safe way is to replace ' with &apos; and " with &quot;
    // ONLY within the return statements where JSX is rendered, but a simpler valid NextJS
    // fix is replacing single quotes surrounded by text characters (like word'word) with &apos;
    // We'll also target a few other common ones like 's, 't, 're, 've, 'm, 'll, 'd

    // Safe Regex replacing common typography contractions with HTML entities
    const apostropheRegex = /([a-zA-Z])'([a-zA-Z])/g;

    // Need a regex that targets raw quotes within the JSX. We will try replacing the most common text nodes.
    const regexList = [
        { pattern: /([a-zA-Z]+)('|\u2019)(s)\b/g, replacement: '$1&apos;$3' }, // Jinbeh's -> Jinbeh&apos;s
        { pattern: /\b([Iyouweheythey]+)('|\u2019)(re)\b/gi, replacement: '$1&apos;$3' }, // You're -> You&apos;re
        { pattern: /\b([Iyouweheythey]+)('|\u2019)(ve)\b/gi, replacement: '$1&apos;$3' }, // We've -> We&apos;ve
        { pattern: /\b([Iyouweheythey]+)('|\u2019)(ll)\b/gi, replacement: '$1&apos;$3' }, // We'll -> We&apos;ll
        { pattern: /\b([Iyouweheythey]+)('|\u2019)(d)\b/gi, replacement: '$1&apos;$3' }, // I'd -> I&apos;d
        { pattern: /\b([a-zA-Z]+)(n)('|\u2019)(t)\b/gi, replacement: '$1n&apos;$t' }, // Don't -> Don&apos;t (special case for n't)
        { pattern: /\b(It|That|Who|What|Where|When|Why|How|There|Here)('|\u2019)(s)\b/gi, replacement: '$1&apos;$3' }, // It's -> It&apos;s
        { pattern: /\b([a-zA-Z]+)('|\u2019)(em)\b/gi, replacement: '$1&apos;$3' }, // 'em -> &apos;em
        { pattern: /([a-zA-Z])'([a-zA-Z])/g, replacement: '$1&apos;$2' }, // Catch-all for other word-apostrophe-word
    ];

    regexList.forEach(({ pattern, replacement }) => {
        let matches = newContent.match(pattern);
        if (matches) {
            totalMatches += matches.length;
            newContent = newContent.replace(pattern, replacement);
        }
    });

    // Replace standalone quotes in JSX text nodes
    const standaloneRegex = /(>\s*[^<]*?)'([^<]*?<\/?)/g;
    let matches = newContent.match(standaloneRegex);
    if (matches) {
        newContent = newContent.replace(standaloneRegex, "$1&apos;$2");
    }

    // A very aggressive fallback: just find all the text lines between tags that have an unescaped apostrophe
    const rawApostropheBetweenTags = /(>)([^<]*?)'([^<]*?)(<)/g;
    while (rawApostropheBetweenTags.test(newContent)) {
        newContent = newContent.replace(rawApostropheBetweenTags, "$1$2&apos;$3$4");
    }

    // Also catch smart quotes (curly quotes) commonly copy pasted from Word
    const smartApostropheBetweenTags = /(>)([^<]*?)’([^<]*?)(<)/g;
    while (smartApostropheBetweenTags.test(newContent)) {
        newContent = newContent.replace(smartApostropheBetweenTags, "$1&apos;$3$4");
    }

    // Fix raw double quotes in text nodes too (NextJS complains about ")
    const rawDoubleQuoteBetweenTags = /(>)([^<]*?)"([^<]*?)(<)/g;
    while (rawDoubleQuoteBetweenTags.test(newContent)) {
        newContent = newContent.replace(rawDoubleQuoteBetweenTags, "$1$2&quot;$3$4");
    }

    const smartDoubleLeftBetweenTags = /(>)([^<]*?)“([^<]*?)(<)/g;
    while (smartDoubleLeftBetweenTags.test(newContent)) {
        newContent = newContent.replace(smartDoubleLeftBetweenTags, "$1$2&quot;$3$4");
    }

    const smartDoubleRightBetweenTags = /(>)([^<]*?)”([^<]*?)(<)/g;
    while (smartDoubleRightBetweenTags.test(newContent)) {
        newContent = newContent.replace(smartDoubleRightBetweenTags, "$1$2&quot;$3$4");
    }


    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        changedCount++;
    }
});

console.log(`Fixed entities in ${changedCount} files. Modified roughly ${totalMatches} specific patterns, plus aggressive text node replacements.`);
