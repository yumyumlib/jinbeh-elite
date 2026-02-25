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
const issues = [];
let totalPages = 0;

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (!content.includes('export const metadata') && !content.includes('metadata:')) continue;
    totalPages++;

    const shortPath = file.replace('src/app/', '').replace('/page.tsx', '') || '/';
    const slug = '/' + shortPath.replace(/\/$/, '');

    // Extract title
    let title = '';
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    const titleAbsMatch = content.match(/absolute:\s*["'`]([^"'`]+)["'`]/);
    if (titleMatch) title = titleMatch[1];
    else if (titleAbsMatch) title = titleAbsMatch[1];

    // Extract keywords
    const keywordMatch = content.match(/keywords\s*:\s*\[([\s\S]*?)\]/);
    let keywords = [];
    if (keywordMatch) {
        keywords = keywordMatch[1]
            .split(',')
            .map(k => k.trim().replace(/['"]/g, ''))
            .filter(k => k.length > 0);
    }

    // Extract description
    const descMatch = content.match(/description:\s*\n?\s*["'`]([^"'`]+)["'`]/);
    const desc = descMatch ? descMatch[1] : '';

    // Extract canonical
    const canonicalMatch = content.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
    const canonical = canonicalMatch ? canonicalMatch[1] : '';

    const pageIssues = [];
    const isDynamic = content.includes('location.seo');

    // Title checks
    if (!title && !isDynamic) {
        pageIssues.push('MISSING TITLE');
    } else if (title) {
        if (title.length > 65) pageIssues.push('TITLE TOO LONG (' + title.length + ' chars): "' + title.substring(0, 50) + '..."');
        if (title.length < 20) pageIssues.push('TITLE TOO SHORT (' + title.length + ' chars): "' + title + '"');
        if (!title.includes('Jinbeh') && !title.includes('jinbeh')) pageIssues.push('TITLE MISSING BRAND: "' + title + '"');
    }

    // Description checks
    if (!desc && !isDynamic) {
        pageIssues.push('MISSING META DESCRIPTION');
    } else if (desc) {
        if (desc.length > 165) pageIssues.push('DESC TOO LONG (' + desc.length + ' chars)');
        if (desc.length < 70) pageIssues.push('DESC TOO SHORT (' + desc.length + ' chars): "' + desc + '"');
    }

    // Keyword checks
    if (keywords.length === 0 && !isDynamic) {
        pageIssues.push('MISSING KEYWORDS ARRAY');
    } else if (keywords.length > 0 && keywords.length <= 3) {
        pageIssues.push('LOW KEYWORDS (' + keywords.length + '): ' + keywords.join(', '));
    }

    // Canonical check for high-value pages
    if (!canonical && !isDynamic) {
        if (shortPath.includes('blog/') || shortPath.includes('frisco/') || shortPath.includes('lewisville/') || shortPath.includes('nearby/')) {
            pageIssues.push('MISSING CANONICAL URL');
        }
    }

    if (pageIssues.length > 0) {
        issues.push({ path: slug, title: title || '(dynamic)', issues: pageIssues });
    }
}

console.log('=== COMPREHENSIVE SEO METADATA AUDIT ===');
console.log('Total pages scanned: ' + totalPages);
console.log('Pages with issues: ' + issues.length + '\n');

// Group and display
const categories = {
    'MISSING TITLE': [],
    'TITLE TOO LONG': [],
    'TITLE TOO SHORT': [],
    'TITLE MISSING BRAND': [],
    'MISSING META DESCRIPTION': [],
    'DESC TOO LONG': [],
    'DESC TOO SHORT': [],
    'MISSING KEYWORDS': [],
    'LOW KEYWORDS': [],
    'MISSING CANONICAL': [],
};

for (const item of issues) {
    for (const issue of item.issues) {
        for (const cat of Object.keys(categories)) {
            if (issue.includes(cat)) {
                categories[cat].push('  ' + item.path + ': ' + issue);
            }
        }
    }
}

for (const [cat, items] of Object.entries(categories)) {
    if (items.length > 0) {
        console.log('--- ' + cat + ' (' + items.length + ') ---');
        items.forEach(i => console.log(i));
        console.log();
    }
}

if (issues.length === 0) {
    console.log('All pages pass SEO metadata checks!');
}
