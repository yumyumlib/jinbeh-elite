/**
 * Batch SEO Hardening Script
 * Adds canonical URLs to all bespoke blog articles missing them.
 * Also adds BreadcrumbList schema to articles that don't have it.
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const blogDir = path.join(projectRoot, 'src/app/blog');
const entries = fs.readdirSync(blogDir, { withFileTypes: true });

let canonicalAdded = 0;
let canonicalSkipped = 0;
let breadcrumbAdded = 0;
let breadcrumbSkipped = 0;
let errors = [];

for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === 'category' || entry.name === '[slug]') continue;

    const fp = path.join(blogDir, entry.name, 'page.tsx');
    if (!fs.existsSync(fp)) continue;

    let content = fs.readFileSync(fp, 'utf-8');
    const slug = entry.name;

    // --- Add canonical URL ---
    if (!content.includes('canonical')) {
        // Find the metadata block and add alternates.canonical
        // Pattern 1: Has openGraph block — add alternates after it
        // Pattern 2: Has keywords array — add alternates after metadata closing
        // Universal: find the closing }; of metadata and add alternates before it

        const canonicalBlock = `  alternates: {\n    canonical: "https://jinbeh.com/blog/${slug}",\n  },`;

        // Try to add before the closing of metadata
        // Look for pattern: metadata block with openGraph
        if (content.includes('openGraph:')) {
            // Find the openGraph closing and add after it
            const ogMatch = content.match(/openGraph:\s*\{[\s\S]*?\n\s*\},?\n/);
            if (ogMatch) {
                const ogEnd = content.indexOf(ogMatch[0]) + ogMatch[0].length;
                // Check if there's already alternates after OG
                const afterOG = content.substring(ogEnd, ogEnd + 100);
                if (!afterOG.includes('alternates')) {
                    content = content.substring(0, ogEnd) + canonicalBlock + '\n' + content.substring(ogEnd);
                    canonicalAdded++;
                } else {
                    canonicalSkipped++;
                }
            }
        } else if (content.includes('keywords:')) {
            // Find keywords array closing and add after
            const kwMatch = content.match(/keywords:\s*\[[\s\S]*?\],?\n/);
            if (kwMatch) {
                const kwEnd = content.indexOf(kwMatch[0]) + kwMatch[0].length;
                content = content.substring(0, kwEnd) + canonicalBlock + '\n' + content.substring(kwEnd);
                canonicalAdded++;
            }
        } else {
            errors.push(`${slug}: Could not find insertion point for canonical`);
        }
    } else {
        canonicalSkipped++;
    }

    // --- Add BreadcrumbList schema ---
    if (!content.includes('BreadcrumbList')) {
        // Get the category from blog-posts.json
        const blogData = require(path.join(projectRoot, 'src/data/blog-posts.json'));
        const post = blogData.posts.find(p => p.slug === slug);
        const category = post ? post.category : 'blog';

        // Category display names
        const catNames = {
            'sushi': 'Sushi',
            'hibachi': 'Hibachi',
            'celebrations': 'Celebrations',
            'happy-hour': 'Happy Hour',
            'local-guide': 'Local Guide',
            'best-of': 'Best Of',
            'beverages': 'Beverages',
            'cuisine': 'Japanese Cuisine',
            'health': 'Health',
            'local-guides': 'Local Guides'
        };
        const catName = catNames[category] || category;
        const catSlug = category;

        const breadcrumbSchema = `\nconst breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "${catName}", "item": "https://jinbeh.com/blog/category/${catSlug}" },
    { "@type": "ListItem", "position": 4, "name": "${post ? post.title.replace(/"/g, '\\"') : slug}" },
  ],
};\n`;

        // Find the component function and add before it
        const funcMatch = content.match(/export\s+default\s+function\s+\w+/);
        if (funcMatch) {
            const funcStart = content.indexOf(funcMatch[0]);
            // Add the schema constant before the function
            content = content.substring(0, funcStart) + breadcrumbSchema + '\n' + content.substring(funcStart);

            // Now inject the script tag into the JSX
            // Find the first <main or <article or opening JSX tag after return
            const returnMatch = content.match(/return\s*\(\s*\n?\s*<>/);
            if (returnMatch) {
                const returnEnd = content.indexOf(returnMatch[0]) + returnMatch[0].length;
                const scriptTag = '\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />';
                content = content.substring(0, returnEnd) + scriptTag + content.substring(returnEnd);
                breadcrumbAdded++;
            } else {
                // Try alternate pattern: return ( <main or similar  
                errors.push(`${slug}: Could not find JSX insertion point for breadcrumb script tag`);
                breadcrumbAdded++; // Still count the const addition
            }
        } else {
            errors.push(`${slug}: Could not find function declaration for breadcrumb`);
        }
    } else {
        breadcrumbSkipped++;
    }

    fs.writeFileSync(fp, content, 'utf-8');
}

console.log('=== Results ===');
console.log(`Canonical URLs added: ${canonicalAdded}`);
console.log(`Canonical URLs skipped (already present): ${canonicalSkipped}`);
console.log(`BreadcrumbList added: ${breadcrumbAdded}`);
console.log(`BreadcrumbList skipped (already present): ${breadcrumbSkipped}`);
console.log(`\nErrors (${errors.length}):`);
errors.forEach(e => console.log(`  ${e}`));
