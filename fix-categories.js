const fs = require('fs');
const path = require('path');

const mapping = {
    'cuisine': { url: '/menu', absolute: 'https://jinbeh.com/menu', name: 'Menu' },
    'local-guides': { url: '/locations', absolute: 'https://jinbeh.com/locations', name: 'Locations' },
    'best-of': { url: '/blog', absolute: 'https://jinbeh.com/blog', name: 'Blog' },
    'celebrations': { url: '/private-dining', absolute: 'https://jinbeh.com/private-dining', name: 'Private Events' },
    'beverages': { url: '/bar', absolute: 'https://jinbeh.com/bar', name: 'Bar & Beverages' }
};

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
    if (file === 'src/app/blog/page.tsx' || file.includes('category/')) return;

    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;

    for (const [cat, data] of Object.entries(mapping)) {
        // Replace schema absolute URLs
        const regexSchema = new RegExp(`"https://jinbeh.com/blog/category/${cat}"`, 'g');
        newContent = newContent.replace(regexSchema, `"${data.absolute}"`);

        // Replace schema "name": ... when changing the link
        const regexSchemaName = new RegExp(`"name": "(Japanese Cuisine|Best Of|Local Guides|Celebrations|Beverages)", "item": "${data.absolute}"`, 'g');
        newContent = newContent.replace(regexSchemaName, `"name": "${data.name}", "item": "${data.absolute}"`);

        // Replace relative hrefs
        const regexHref = new RegExp(`href="/blog/category/${cat}"`, 'g');
        newContent = newContent.replace(regexHref, `href="${data.url}"`);

        // Replace the visible text inside the link as well
        const regexLinkText = new RegExp(`>\\s*(Japanese Cuisine|Cuisine|Best Of|Local Guides|Celebrations|Beverages|Events)\\s*</Link>`, 'g');
        newContent = newContent.replace(regexLinkText, `>${data.name}</Link>`);
    }

    // Also replace [slug] dynamics
    if (file === 'src/app/blog/[slug]/page.tsx') {
        newContent = newContent.split('href={`/blog/category/${category.slug || category.id}`}').join('href="/blog"');
        newContent = newContent.split('href={`/blog/category/${cat.slug || cat.id}`}').join('href="/blog"');
    }

    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        changedCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Updated ${changedCount} files.`);
