/**
 * Inject breadcrumb schema script tags into articles that have the const but not the script tag.
 * Handles various JSX patterns: <>, <Header, <main, <ArticleLayout
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const blogDir = path.join(projectRoot, 'src/app/blog');
const entries = fs.readdirSync(blogDir, { withFileTypes: true });

let injected = 0;
let skipped = 0;
let errors = [];

const scriptTag = '      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />';

for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === 'category' || entry.name === '[slug]') continue;

    const fp = path.join(blogDir, entry.name, 'page.tsx');
    if (!fs.existsSync(fp)) continue;

    let content = fs.readFileSync(fp, 'utf-8');
    const slug = entry.name;

    // Skip if no breadcrumbSchema const, or if script tag already present
    if (!content.includes('const breadcrumbSchema')) {
        skipped++;
        continue;
    }

    if (content.includes('JSON.stringify(breadcrumbSchema)')) {
        skipped++;
        continue;
    }

    // Try different JSX patterns to find injection point
    let injectionDone = false;

    // Pattern 1: Uses ArticleLayout component (these already have breadcrumb from ArticleLayout — skip)
    if (content.includes('<ArticleLayout')) {
        // ArticleLayout already handles breadcrumb schema internally. Just remove the unused const.
        content = content.replace(/\nconst breadcrumbSchema = \{[\s\S]*?\};\n/, '\n');
        fs.writeFileSync(fp, content, 'utf-8');
        skipped++;
        continue;
    }

    // Pattern 2: return (\n    <>\n      <Header  
    // Insert after <Header /> or first main tag
    const patterns = [
        // After <Header />
        { regex: /(<Header\s*\/>)/g, after: true },
        // After opening <main ...>
        { regex: /(<main[^>]*>)/g, after: true },
        // After <>
        { regex: /(return\s*\(\s*\n\s*<>)/g, after: true },
    ];

    for (const pat of patterns) {
        const match = pat.regex.exec(content);
        if (match) {
            const insertPos = match.index + match[0].length;
            content = content.substring(0, insertPos) + '\n' + scriptTag + content.substring(insertPos);
            injectionDone = true;
            break;
        }
    }

    if (injectionDone) {
        fs.writeFileSync(fp, content, 'utf-8');
        injected++;
    } else {
        errors.push(slug);
    }
}

console.log(`Injected: ${injected}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors.length}`);
errors.forEach(e => console.log(`  ${e}`));
