const fs = require('fs');
const path = require('path');

// Load the content clusters
const clusters = JSON.parse(fs.readFileSync('src/data/content-clusters.json', 'utf8'));

// Get all actual blog post directories
const blogDir = 'src/app/blog';
const existingPosts = fs.readdirSync(blogDir)
    .filter(f => {
        const fullPath = path.join(blogDir, f);
        return fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, 'page.tsx'));
    });

console.log('=== CONTENT GAP ANALYSIS ===\n');
console.log(`Existing blog posts: ${existingPosts.length}\n`);

const missing = [];
const existing = [];

for (const [clusterId, cluster] of Object.entries(clusters.clusters)) {
    const clusterMissing = [];
    const clusterExisting = [];

    for (const article of cluster.articles) {
        if (existingPosts.includes(article.slug)) {
            clusterExisting.push(article);
        } else {
            clusterMissing.push(article);
        }
    }

    if (clusterMissing.length > 0) {
        console.log(`--- ${cluster.name} (${clusterExisting.length}/${cluster.articles.length} published) ---`);
        console.log(`  Keywords: ${cluster.keywords.join(', ')}`);
        console.log(`  MISSING:`);
        clusterMissing.forEach(a => {
            console.log(`    [P${a.priority}] ${a.title} (/${a.slug})`);
        });
        console.log(`  PUBLISHED:`);
        clusterExisting.forEach(a => {
            console.log(`    [P${a.priority}] ${a.title}`);
        });
        console.log();
        missing.push(...clusterMissing);
    } else {
        console.log(`--- ${cluster.name}: COMPLETE (${cluster.articles.length}/${cluster.articles.length}) ---`);
        console.log();
    }
    existing.push(...clusterExisting);
}

// Also check blog-posts.json for secondary keywords
const blogPosts = JSON.parse(fs.readFileSync('src/data/blog-posts.json', 'utf8'));
console.log('\n=== BLOG POST KEYWORD COVERAGE ===\n');

let lowSecondary = 0;
for (const post of blogPosts.posts) {
    if (!post.secondaryKeywords || post.secondaryKeywords.length < 2) {
        console.log(`[LOW SECONDARY] ${post.slug}: primary="${post.primaryKeyword}", secondary=[${(post.secondaryKeywords || []).join(', ')}]`);
        lowSecondary++;
    }
}
if (lowSecondary === 0) console.log('All posts have adequate secondary keywords.');

console.log(`\n=== SUMMARY ===`);
console.log(`Total planned articles: ${missing.length + existing.length}`);
console.log(`Published: ${existing.length}`);
console.log(`Missing (content gap): ${missing.length}`);
console.log(`Priority 1 missing: ${missing.filter(a => a.priority === 1).length}`);
console.log(`Priority 2 missing: ${missing.filter(a => a.priority === 2).length}`);
console.log(`Priority 3 missing: ${missing.filter(a => a.priority === 3).length}`);
