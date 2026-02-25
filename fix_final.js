const fs = require('fs');

// 1. Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace('import blogData from "@/data/blog-posts.json";\n', '');
fs.writeFileSync('src/components/Footer.tsx', footer);

// 2. Header.tsx
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace(/^.*import.*NavItem.*$/m, '');
fs.writeFileSync('src/components/Header.tsx', header);

// 3. OpenTableWidget.tsx
let ot = fs.readFileSync('src/components/OpenTableWidget.tsx', 'utf8');
ot = ot.replace(/\s*location,\s*/, '\n');
fs.writeFileSync('src/components/OpenTableWidget.tsx', ot);

// 4. VipClubForm.tsx
let vip = fs.readFileSync('src/components/VipClubForm.tsx', 'utf8');
vip = vip.replace(/const \[error, setError\] = useState\(''\);\n/, '');
fs.writeFileSync('src/components/VipClubForm.tsx', vip);

// 5. sitemap.ts
let sitemap = fs.readFileSync('src/app/sitemap.ts', 'utf8');
sitemap = sitemap.replace(/import locations from '@\/data\/locations\.json';\n/, '');
sitemap = sitemap.replace(/any/g, 'unknown'); // quick fix for The 2 any types
fs.writeFileSync('src/app/sitemap.ts', sitemap);
