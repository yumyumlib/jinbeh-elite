// Image Sitemap for Google Image Search SEO
// Generates XML sitemap with all website images for Google Search Console submission

import { NextResponse } from 'next/server';

interface ImageEntry {
  pageUrl: string;
  images: {
    loc: string;
    caption: string;
    title: string;
  }[];
}

function generateImageSitemap(): string {
  const baseUrl = 'https://jinbeh.com';

  const imageEntries: ImageEntry[] = [
    // Homepage images
    {
      pageUrl: `${baseUrl}/`,
      images: [
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-006-orig-IMG_1848-1200w.webp`,
          caption: 'Jinbeh hibachi chef performing spectacular flame show at teppanyaki grill',
          title: 'Jinbeh Hibachi Flame Show - Lewisville TX',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-dinner-plate-lewisville-002-orig-IMG_2002-1200w.webp`,
          caption: 'Beautifully plated hibachi dinner with steak, shrimp, and fried rice',
          title: 'Jinbeh Hibachi Dinner Plate - Japanese Restaurant',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-sushi-presentation-lewisville-001-orig-IMG_1870-800w.webp`,
          caption: 'Fresh sushi and sashimi presentation at Jinbeh Japanese Restaurant',
          title: 'Jinbeh Sushi Presentation - Lewisville TX',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-grill-cooking-lewisville-015-orig-IMG_1930-800w.webp`,
          caption: 'Close-up of fresh ingredients cooking on Jinbeh hibachi grill',
          title: 'Jinbeh Hibachi Grill Cooking - Teppanyaki Style',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-fried-rice-art-lewisville-014-orig-IMG_1904-800w.webp`,
          caption: 'Jinbeh hibachi chef creating artistic fried rice design',
          title: 'Jinbeh Hibachi Fried Rice Art - Lewisville TX',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-japanese-restaurant-interior-lewisville-002-orig-IMG_1830-800w.webp`,
          caption: 'Warm interior ambiance of Jinbeh Japanese Restaurant',
          title: 'Jinbeh Japanese Restaurant Interior - Lewisville TX',
        },
        {
          loc: `${baseUrl}/images/food/onion-volcano.jpg`,
          caption: 'Jinbeh hibachi chef creating the famous onion volcano',
          title: 'Jinbeh Onion Volcano - Hibachi Entertainment',
        },
        {
          loc: `${baseUrl}/images/logos/JinbehLogo.png`,
          caption: 'Jinbeh Japanese Restaurant logo',
          title: 'Jinbeh Logo - Japanese Restaurant Since 1988',
        },
      ],
    },
    // Frisco location page
    {
      pageUrl: `${baseUrl}/frisco`,
      images: [
        {
          loc: `${baseUrl}/images/exterior/JinbehFriscoStorefrontSign.png`,
          caption: 'Jinbeh Japanese Restaurant storefront in Frisco TX',
          title: 'Jinbeh Frisco TX Location - Storefront',
        },
        {
          loc: `${baseUrl}/images/interior/JinbehFriscoTables.jpg`,
          caption: 'Jinbeh Frisco dining room with hibachi tables',
          title: 'Jinbeh Frisco Interior - Hibachi Dining',
        },
        {
          loc: `${baseUrl}/images/interior/JinbehFrisco_SushiBar.jpg`,
          caption: 'Jinbeh Frisco sushi bar with fresh fish display',
          title: 'Jinbeh Frisco Sushi Bar',
        },
      ],
    },
    // Lewisville location page
    {
      pageUrl: `${baseUrl}/lewisville`,
      images: [
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-003-orig-IMG_1845-1200w.webp`,
          caption: 'Jinbeh hibachi chef performing flame show at Lewisville location',
          title: 'Jinbeh Lewisville TX - Hibachi Flame Show',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-chef-cooking-lewisville-001-orig-IMG_1876-1200w.webp`,
          caption: 'Hibachi chef cooking at Jinbeh Lewisville TX',
          title: 'Jinbeh Lewisville - Hibachi Chef Cooking',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-dinner-plate-lewisville-002-orig-IMG_2002-1200w.webp`,
          caption: 'Hibachi dinner plate at Jinbeh Lewisville TX',
          title: 'Jinbeh Lewisville - Hibachi Dinner',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-japanese-restaurant-interior-lewisville-002-orig-IMG_1830-1200w.webp`,
          caption: 'Interior of Jinbeh Japanese Restaurant Lewisville TX',
          title: 'Jinbeh Lewisville Interior - Dining Room',
        },
      ],
    },
    // Menu page
    {
      pageUrl: `${baseUrl}/menu`,
      images: [
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-dinner-plate-lewisville-002-orig-IMG_2002-1200w.webp`,
          caption: 'Hibachi dinner plate with steak and shrimp at Jinbeh',
          title: 'Jinbeh Hibachi Menu - Dinner Plate',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-sushi-presentation-lewisville-001-orig-IMG_1870-1200w.webp`,
          caption: 'Fresh sushi presentation at Jinbeh Japanese Restaurant',
          title: 'Jinbeh Sushi Menu - Fresh Presentations',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-grill-cooking-lewisville-015-orig-IMG_1930-1200w.webp`,
          caption: 'Fresh ingredients on the hibachi grill at Jinbeh',
          title: 'Jinbeh Hibachi Menu - Fresh Grilled Ingredients',
        },
      ],
    },
    // Celebrations page
    {
      pageUrl: `${baseUrl}/celebrations`,
      images: [
        {
          loc: `${baseUrl}/images/celebrations/CelebrateYourBirthdayAtJinbeh.png`,
          caption: 'Birthday celebration at Jinbeh Japanese Restaurant',
          title: 'Jinbeh Birthday Celebrations - Party Venue',
        },
        {
          loc: `${baseUrl}/images/celebrations/jinbeh_group.jpg`,
          caption: 'Group celebration at Jinbeh hibachi restaurant',
          title: 'Jinbeh Group Celebrations - Private Dining',
        },
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-009-orig-IMG_1851-1200w.webp`,
          caption: 'Exciting flame show during celebration at Jinbeh',
          title: 'Jinbeh Celebration Entertainment - Flame Show',
        },
      ],
    },
    // Blog main page
    {
      pageUrl: `${baseUrl}/blog`,
      images: [
        {
          loc: `${baseUrl}/images/hibachi-lewisville-2026/jinbeh-hibachi-flame-show-lewisville-003-orig-IMG_1845-1200w.webp`,
          caption: 'Jinbeh hibachi experience - Japanese dining blog',
          title: 'Jinbeh Blog - Japanese Restaurant Experience',
        },
      ],
    },
    // About page
    {
      pageUrl: `${baseUrl}/about`,
      images: [
        {
          loc: `${baseUrl}/images/about/chef-flames.jpg`,
          caption: 'Jinbeh hibachi chef with flames - family tradition since 1988',
          title: 'Jinbeh About - Family Owned Since 1988',
        },
        {
          loc: `${baseUrl}/images/about/rice-workers-heritage.webp`,
          caption: 'Japanese heritage and tradition at Jinbeh Restaurant',
          title: 'Jinbeh Heritage - Japanese Culinary Tradition',
        },
      ],
    },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  for (const entry of imageEntries) {
    xml += `
  <url>
    <loc>${entry.pageUrl}</loc>`;
    for (const img of entry.images) {
      xml += `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:caption>${escapeXml(img.caption)}</image:caption>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`;
    }
    xml += `
  </url>`;
  }

  xml += `
</urlset>`;

  return xml;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const sitemap = generateImageSitemap();
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
