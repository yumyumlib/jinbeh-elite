const fs = require('fs');
const path = require('path');

// Get all valid routes from the src/app directory
function getAllRoutes(dir, basePath = '') {
  const routes = new Set();
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_') || entry.name === 'node_modules') continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Check if this directory has a page.tsx (making it a route)
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        const routePath = basePath + '/' + entry.name;
        // Handle dynamic routes
        if (!entry.name.startsWith('[')) {
          routes.add(routePath);
        }
      }
      // Recurse into subdirectories
      const subRoutes = getAllRoutes(fullPath, basePath + '/' + entry.name);
      subRoutes.forEach(r => routes.add(r));
    }
  }

  // Add root route
  if (fs.existsSync(path.join(dir, 'page.tsx'))) {
    routes.add(basePath || '/');
  }

  return routes;
}

// Extract all internal links from TSX files
function extractLinks(content) {
  const links = [];

  // Match href="/..." patterns
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
  for (const match of hrefMatches) {
    const href = match[1];
    if (href.startsWith('/') && !href.startsWith('//')) {
      // Remove hash fragments for route validation
      const route = href.split('#')[0] || '/';
      links.push({ full: href, route });
    }
  }

  return links;
}

// Main verification
const appDir = path.join(__dirname, '../src/app');
const validRoutes = getAllRoutes(appDir);

console.log(`Found ${validRoutes.size} valid routes\n`);

// Check all blog articles for broken links
const blogDir = path.join(appDir, 'blog');
const brokenLinks = [];
const articleDirs = fs.readdirSync(blogDir)
  .filter(f => fs.statSync(path.join(blogDir, f)).isDirectory() && f !== '[slug]');

let totalLinks = 0;
let validLinks = 0;

articleDirs.forEach(slug => {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  const content = fs.readFileSync(pagePath, 'utf-8');
  const links = extractLinks(content);

  links.forEach(({ full, route }) => {
    totalLinks++;
    // Check if route exists (or is a dynamic route that could exist)
    if (validRoutes.has(route) ||
        route.startsWith('/blog/') ||
        route.match(/\/\[.*\]/) ||
        route === '/') {
      validLinks++;
    } else {
      brokenLinks.push({
        article: slug,
        link: full,
        route
      });
    }
  });
});

console.log('========== LINK VERIFICATION REPORT ==========\n');
console.log(`Total internal links checked: ${totalLinks}`);
console.log(`Valid links: ${validLinks}`);
console.log(`Potentially broken links: ${brokenLinks.length}\n`);

if (brokenLinks.length > 0) {
  console.log('Potentially broken links (may be dynamic routes):');

  // Group by route for easier review
  const byRoute = {};
  brokenLinks.forEach(bl => {
    if (!byRoute[bl.route]) byRoute[bl.route] = [];
    byRoute[bl.route].push(bl.article);
  });

  Object.entries(byRoute).forEach(([route, articles]) => {
    console.log(`\n${route}:`);
    console.log(`  Used in: ${articles.slice(0, 3).join(', ')}${articles.length > 3 ? ` (+${articles.length - 3} more)` : ''}`);
  });
} else {
  console.log('✓ All internal links are valid!');
}

// Also check for common issues
console.log('\n\n========== COMMON LINK PATTERNS ==========\n');

const linkPatterns = {};
articleDirs.forEach(slug => {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  const content = fs.readFileSync(pagePath, 'utf-8');

  // Check for location links
  const hasFrisco = content.includes('href="/frisco"');
  const hasLewisville = content.includes('href="/lewisville"');
  const hasReservations = content.includes('/reservations') || content.includes('#reserve');

  if (!hasFrisco && !hasLewisville) {
    if (!linkPatterns['Missing location links']) linkPatterns['Missing location links'] = [];
    linkPatterns['Missing location links'].push(slug);
  }

  if (!hasReservations) {
    if (!linkPatterns['Missing reservation link']) linkPatterns['Missing reservation link'] = [];
    linkPatterns['Missing reservation link'].push(slug);
  }
});

Object.entries(linkPatterns).forEach(([issue, articles]) => {
  console.log(`${issue}: ${articles.length} articles`);
  if (articles.length <= 5) {
    articles.forEach(a => console.log(`  - ${a}`));
  } else {
    console.log(`  (${articles.join(', ').substring(0, 100)}...)`);
  }
});

console.log('\n✓ Link verification complete!');
