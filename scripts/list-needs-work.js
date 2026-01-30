const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/app/blog');
const articleDirs = fs.readdirSync(blogDir)
  .filter(f => fs.statSync(path.join(blogDir, f)).isDirectory() && f !== '[slug]');

const needsWork = { batch1: [], batch2: [], batch3: [], batch4: [] };
let i = 0;

articleDirs.forEach(slug => {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  const content = fs.readFileSync(pagePath, 'utf-8');
  const hasFaqs = content.includes('faqs=') || content.includes('const faqs');
  const hasRelated = content.includes('RelatedArticles');
  const hasLocationLinks = content.includes('href="/frisco"') || content.includes('href="/lewisville"');

  if (!hasFaqs || !hasRelated || !hasLocationLinks) {
    const batchNum = (i % 4) + 1;
    needsWork['batch' + batchNum].push(slug);
    i++;
  }
});

console.log('Batch 1:', needsWork.batch1.join(', '));
console.log('\nBatch 2:', needsWork.batch2.join(', '));
console.log('\nBatch 3:', needsWork.batch3.join(', '));
console.log('\nBatch 4:', needsWork.batch4.join(', '));
console.log('\nTotal needing work:', i);
