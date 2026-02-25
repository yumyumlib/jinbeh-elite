const fs = require('fs');
const path = require('path');

const blogData = JSON.parse(fs.readFileSync('src/data/blog-posts.json', 'utf8'));
const blogSlugs = new Set(blogData.posts.map(p => p.slug));

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

    // Find all href="/something..."
    const hrefRegex = /href="\/([^"/]+)(#[^"]*)?"/g;

    newContent = newContent.replace(hrefRegex, (match, slug, hash) => {
        // If exact slug match to a blog post, it should be /blog/[slug]
        if (blogSlugs.has(slug)) {
            return `href="/blog/${slug}${hash || ''}"`;
        }
        return match;
    });

    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        changedCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Fixed cross-links in ${changedCount} files.`);
