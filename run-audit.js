const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  const out = execSync('find src/app -name "page.tsx"').toString();
  const files = out.split('\n').filter(Boolean);

  let allLinks = new Set();
  let brokenLinks = [];
  const linkRegex = /href=[\"\'](\/[^\"\']+)[\"\']/g;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const link = match[1];
      allLinks.add(link);
      if (!link.startsWith('/images') && !link.startsWith('/videos') && !link.startsWith('/api') && link !== '/') {
        let cleanLink = link.split('#')[0].split('?')[0];
        if (cleanLink.endsWith('/')) { cleanLink = cleanLink.slice(0, -1); }
        
        const p1 = path.join('src/app', cleanLink, 'page.tsx');
        const p2 = path.join('src/app', cleanLink, 'route.ts');
        
        if (!fs.existsSync(p1) && !fs.existsSync(p2) && !cleanLink.includes('[')) {
          brokenLinks.push({ file, link: cleanLink });
        }
      }
    }
  });

  fs.writeFileSync('link-audit.json', JSON.stringify({ total: allLinks.size, broken: brokenLinks }, null, 2));
  console.log('done');
} catch (e) {
  console.error(e);
}
