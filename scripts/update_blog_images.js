const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/blog-posts.json');
const data = require(dataPath);

// Get list of catalog images we can use
const catalogDir = path.join(__dirname, '../public/images/catalog');
const availableImages = fs.readdirSync(catalogDir)
    .filter(f => f.endsWith('.jpg') || f.endsWith('.webp'))
    .map(f => `/images/catalog/${f}`);

let imgIndex = 0;

data.posts = data.posts.map(post => {
    // If not already using catalog image, replace it
    if (!post.heroImage.startsWith('/images/catalog/')) {
        // Find next image and wrap around if needed
        post.heroImage = availableImages[imgIndex % availableImages.length];
        imgIndex++;
    }
    return post;
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 4), 'utf8');
console.log(`Updated blog posts with catalog images. Total replaced: ${imgIndex}`);
