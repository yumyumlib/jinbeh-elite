#!/usr/bin/env node

/**
 * Script to generate streamlined menu item pages that use MenuItemTemplate.
 * Each page keeps its metadata + schema exports (server component)
 * and renders a thin wrapper that passes data to the client template.
 */

const fs = require('fs');
const path = require('path');

const BASE = '/Users/lighthaven/Documents/jinbeh-elite-phase1/src/app';

// All menu item pages to convert
// Format: [locationId, category, slug]
const items = [];

const locations = ['frisco', 'lewisville'];
const categories = {
    'hibachi': ['salmon', 'filet-mignon', 'ny-strip', 'ribeye', 'chicken-teriyaki', 'shrimp', 'scallops', 'lobster-tail', 'vegetable-tofu', 'combo-steak-chicken', 'combo-steak-shrimp', 'combo-steak-lobster', 'combo-seafood', 'imperial-dinner'],
    'sushi-rolls': ['california-roll', 'spicy-tuna-roll', 'dragon-roll', 'rainbow-roll', 'shrimp-tempura-roll', 'spider-roll', 'philly-roll', 'ahi-tower', 'caterpillar-roll', 'volcano-roll', 'tiger-roll', 'vegas-roll', 'yellowtail-jalapeno', 'butterfly-kiss'],
    'appetizers': ['edamame', 'gyoza', 'tempura', 'seared-tuna', 'tuna-tartare', 'soft-shell-crab'],
    'sashimi': ['salmon-sashimi', 'tuna-sashimi', 'yellowtail-sashimi', 'octopus-sashimi', 'sashimi-deluxe', 'chirashi', 'omakase'],
    'cocktails': ['sake-flight', 'sake-bomb', 'lychee-martini', 'jinbeh-punch', 'tokyo-mule'],
};

for (const loc of locations) {
    for (const [cat, slugs] of Object.entries(categories)) {
        for (const slug of slugs) {
            items.push([loc, cat, slug]);
        }
    }
}

// Read existing page, extract metadata and schema, generate new page
function processPage(loc, category, slug) {
    const pagePath = path.join(BASE, loc, category, slug, 'page.tsx');

    if (!fs.existsSync(pagePath)) {
        console.log(`SKIP (no existing page): ${pagePath}`);
        return;
    }

    const content = fs.readFileSync(pagePath, 'utf-8');

    // Extract metadata export
    const metaMatch = content.match(/export const metadata[\s\S]*?^};/m);
    let metadataBlock = '';
    if (metaMatch) {
        metadataBlock = metaMatch[0];
    }

    // Extract schema blocks (menuItemSchema and faqSchema)
    const menuSchemaMatch = content.match(/const menuItemSchema[\s\S]*?^};/m);
    const faqSchemaMatch = content.match(/const faqSchema[\s\S]*?^};/m);
    const breadcrumbSchemaMatch = content.match(/const breadcrumbSchema[\s\S]*?^};/m);

    let schemasBlock = '';
    if (menuSchemaMatch) schemasBlock += menuSchemaMatch[0] + '\n\n';
    if (faqSchemaMatch) schemasBlock += faqSchemaMatch[0] + '\n\n';
    if (breadcrumbSchemaMatch) schemasBlock += breadcrumbSchemaMatch[0] + '\n\n';

    // Determine function name from existing page
    const funcMatch = content.match(/export default function (\w+)/);
    const funcName = funcMatch ? funcMatch[1] : `${slug.replace(/-/g, '')}${loc}Page`;

    // Build schema script tags
    let scriptTags = '';
    if (menuSchemaMatch) {
        scriptTags += `        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }} />\n`;
    }
    if (faqSchemaMatch) {
        scriptTags += `        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />\n`;
    }
    if (breadcrumbSchemaMatch) {
        scriptTags += `        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />\n`;
    }

    // Generate new page
    const newPage = `import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemTemplate from "@/components/MenuItemTemplate";
import { getMenuItem, locations } from "@/data/menu-items";

${metadataBlock}

${schemasBlock}
export default function ${funcName}() {
  const item = getMenuItem("${slug}", "${category}")!;
  const location = locations["${loc}"];

  return (
    <>
      <Header location="${loc}" />
      <div>
${scriptTags}        <MenuItemTemplate item={item} location={location} />
      </div>
      <Footer />
    </>
  );
}
`;

    fs.writeFileSync(pagePath, newPage, 'utf-8');
    console.log(`OK: ${loc}/${category}/${slug}`);
}

let count = 0;
for (const [loc, cat, slug] of items) {
    processPage(loc, cat, slug);
    count++;
}
console.log(`\nDone! Processed ${count} pages.`);
