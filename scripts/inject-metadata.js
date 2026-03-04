const fs = require('fs');
const path = require('path');

// Identify pages missing metadata according to the audit.
// We can find these by looking at paths that don't have "export const metadata"
const targetPages = [
    "src/app/nearby/highland-village/page.tsx",
    "src/app/nearby/plano/page.tsx",
    "src/app/nearby/denton/page.tsx",
    "src/app/nearby/richardson/page.tsx",
    "src/app/nearby/grapevine/page.tsx",
    "src/app/nearby/mckinney/page.tsx",
    "src/app/nearby/allen/page.tsx",
    "src/app/nearby/flower-mound/page.tsx",
    "src/app/nearby/coppell/page.tsx",
    "src/app/nearby/the-colony/page.tsx",
    "src/app/nearby/little-elm/page.tsx",
    "src/app/nearby/carrollton/page.tsx",
    "src/app/events/page.tsx",
    "src/app/accessibility/page.tsx"
];

const basePath = path.join(__dirname, '..');

targetPages.forEach(pagePath => {
    const fullPath = path.join(basePath, pagePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`❌ File not found: ${pagePath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Check if it already has metadata
    if (content.includes('export const metadata') || content.includes('export const metadata: Metadata')) {
        console.log(`✅ Already has metadata: ${pagePath}`);
        return;
    }

    // Ensure Metadata is imported from next
    if (!content.includes('import { Metadata } from "next"')) {
        // Add import to the top
        content = `import { Metadata } from "next";\n${content}`;
    }

    // Generate basic metadata based on the path
    let title = "Jinbeh Japanese Restaurant";
    let desc = "Experience authentic Japanese hibachi and sushi at Jinbeh. Family-owned since 1988.";
    let urlPath = pagePath.replace("src/app/", "").replace("/page.tsx", "");

    if (pagePath.includes('nearby')) {
        const city = urlPath.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        title = `Hibachi & Sushi near ${city}, TX | Jinbeh`;
        desc = `Looking for the best hibachi and sushi near ${city}, TX? Visit Jinbeh Japanese Restaurant for an unforgettable teppanyaki dining experience.`;
    } else if (pagePath.includes('events')) {
        title = "Private Dining & Events | Jinbeh Japanese Restaurant";
        desc = "Host your next birthday, corporate event, or celebration at Jinbeh. Our hibachi tables are perfect for large groups and private dining.";
    } else if (pagePath.includes('accessibility')) {
        title = "Accessibility Statement | Jinbeh Japanese Restaurant";
        desc = "Jinbeh Japanese Restaurant is committed to digital accessibility for all users. Read our accessibility statement.";
    }

    const metadataBlock = `
export const metadata: Metadata = {
  title: "${title}",
  description: "${desc}",
  openGraph: {
    title: "${title}",
    description: "${desc}",
    url: "https://jinbeh.com/${urlPath}",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jinbeh.com/${urlPath}",
  },
};
`;

    // Insert before the default export
    content = content.replace(/(export default function)/, `${metadataBlock}\n$1`);

    fs.writeFileSync(fullPath, content);
    console.log(`✨ Injected metadata into: ${pagePath}`);
});
