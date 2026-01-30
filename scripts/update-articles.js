const fs = require('fs');
const path = require('path');

const imageMapping = require('../src/data/image-mapping.json');

const blogDir = path.join(__dirname, '../src/app/blog');

// Get all blog article directories
const articleDirs = fs.readdirSync(blogDir)
  .filter(f => fs.statSync(path.join(blogDir, f)).isDirectory() && f !== '[slug]');

console.log(`Found ${articleDirs.length} blog articles to process\n`);

const issues = [];
const updated = [];

articleDirs.forEach(slug => {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    issues.push({ slug, issue: 'No page.tsx file' });
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf-8');
  const originalContent = content;
  let hasChanges = false;

  // Get image mapping for this article
  const mapping = imageMapping.articleImageMap[slug];

  if (!mapping) {
    issues.push({ slug, issue: 'No image mapping defined' });
  } else {
    const category = imageMapping.categories[mapping.category];
    if (category && category.hero && category.hero[mapping.heroIndex]) {
      const correctImage = category.hero[mapping.heroIndex];
      const correctAlt = category.alt;

      // Check if heroImage exists and update if needed
      const heroImageMatch = content.match(/heroImage\s*[=:]\s*["']([^"']+)["']/);
      if (heroImageMatch) {
        const currentImage = heroImageMatch[1];
        if (currentImage !== correctImage) {
          content = content.replace(
            /heroImage\s*[=:]\s*["'][^"']+["']/,
            `heroImage="${correctImage}"`
          );
          hasChanges = true;
          console.log(`✓ ${slug}: Updated heroImage from ${currentImage} to ${correctImage}`);
        }
      } else {
        // No heroImage prop, might need to add one
        issues.push({ slug, issue: 'No heroImage prop found' });
      }

      // Update heroAlt if missing or generic
      const heroAltMatch = content.match(/heroAlt\s*[=:]\s*["']([^"']+)["']/);
      if (!heroAltMatch || heroAltMatch[1].length < 20) {
        // Update or add heroAlt
        if (heroAltMatch) {
          content = content.replace(
            /heroAlt\s*[=:]\s*["'][^"']+["']/,
            `heroAlt="${correctAlt}"`
          );
          hasChanges = true;
        }
      }
    }
  }

  // Check for FAQ schema
  const hasFaqs = content.includes('faqs=') || content.includes('const faqs');
  if (!hasFaqs) {
    issues.push({ slug, issue: 'Missing FAQ section' });
  }

  // Check for internal links to Jinbeh pages
  const hasLocationLinks = content.includes('href="/frisco"') || content.includes('href="/lewisville"');
  const hasReservationLink = content.includes('href="/reservations"') || content.includes('#reserve');

  if (!hasLocationLinks) {
    issues.push({ slug, issue: 'Missing location page links' });
  }
  if (!hasReservationLink) {
    issues.push({ slug, issue: 'Missing reservation CTA link' });
  }

  // Check for RelatedArticles component usage
  const hasRelatedArticles = content.includes('RelatedArticles');
  if (!hasRelatedArticles) {
    issues.push({ slug, issue: 'Not using RelatedArticles component' });
  }

  // Save changes if any
  if (hasChanges) {
    fs.writeFileSync(pagePath, content);
    updated.push(slug);
  }
});

console.log('\n========== REPORT ==========\n');
console.log(`Total articles: ${articleDirs.length}`);
console.log(`Updated: ${updated.length}`);
console.log(`Issues found: ${issues.length}\n`);

// Group issues by type
const issuesByType = {};
issues.forEach(i => {
  if (!issuesByType[i.issue]) issuesByType[i.issue] = [];
  issuesByType[i.issue].push(i.slug);
});

console.log('Issues by type:');
Object.entries(issuesByType).forEach(([issue, slugs]) => {
  console.log(`\n${issue} (${slugs.length}):`);
  slugs.forEach(s => console.log(`  - ${s}`));
});

// Output articles by cluster for parallel processing
console.log('\n\n========== ARTICLES BY CLUSTER ==========\n');

const clusterArticles = {
  hibachi: [],
  sushi: [],
  'sake-drinks': [],
  celebrations: [],
  location: [],
  'food-general': []
};

articleDirs.forEach(slug => {
  const mapping = imageMapping.articleImageMap[slug];
  if (mapping) {
    if (!clusterArticles[mapping.category]) {
      clusterArticles[mapping.category] = [];
    }
    clusterArticles[mapping.category].push(slug);
  }
});

Object.entries(clusterArticles).forEach(([cluster, slugs]) => {
  console.log(`${cluster}: ${slugs.length} articles`);
  slugs.forEach(s => console.log(`  - ${s}`));
  console.log('');
});
