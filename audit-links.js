const fs = require('fs');
const path = require('path');

function checkRoute(href) {
    const clean = href.split('#')[0].split('?')[0];
    if (!clean || clean === '/') return true;
    const routeDir = path.join('src/app', clean);
    if (fs.existsSync(path.join(routeDir, 'page.tsx'))) return true;
    // Dynamic routes
    const parts = clean.split('/').filter(Boolean);
    let dir = 'src/app';
    for (const part of parts) {
        const exact = path.join(dir, part);
        if (fs.existsSync(exact)) {
            dir = exact;
        } else {
            // Look for [param] dirs
            const entries = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
            const dyn = entries.find(e => e.startsWith('[') && fs.statSync(path.join(dir, e)).isDirectory());
            if (dyn) {
                dir = path.join(dir, dyn);
            } else {
                return false;
            }
        }
    }
    return fs.existsSync(path.join(dir, 'page.tsx'));
}

// --- Header ---
const header = fs.readFileSync('src/components/Header.tsx', 'utf8');
const headerHrefs = new Set([
    ...header.matchAll(/href="(\/[^"{}]*)"/g),
    ...header.matchAll(/href:\s*"(\/[^"{}]*)"/g),
].map(m => m[1].split('#')[0]).filter(h => h && h !== '/'));

console.log('=== HEADER NAV LINKS (' + headerHrefs.size + ' unique) ===');
const hBroken = [];
for (const h of [...headerHrefs].sort()) {
    if (checkRoute(h)) {
        console.log('  ✅ ' + h);
    } else {
        hBroken.push(h);
        console.log('  ❌ BROKEN: ' + h);
    }
}

// --- Footer (in blog layout or standalone) ---
const footerFiles = ['src/components/Footer.tsx', 'src/components/footer.tsx', 'src/components/BlogFooter.tsx'];
let footerContent = '';
for (const f of footerFiles) {
    if (fs.existsSync(f)) {
        footerContent += fs.readFileSync(f, 'utf8');
    }
}
// Also check blog layout
if (fs.existsSync('src/app/blog/layout.tsx')) {
    footerContent += fs.readFileSync('src/app/blog/layout.tsx', 'utf8');
}

if (footerContent) {
    const footerHrefs = new Set(
        [...footerContent.matchAll(/href="(\/[^"{}]*)"/g)].map(m => m[1].split('#')[0]).filter(h => h && h !== '/')
    );
    console.log('\n=== FOOTER/LAYOUT LINKS (' + footerHrefs.size + ' unique) ===');
    const fBroken = [];
    for (const h of [...footerHrefs].sort()) {
        if (checkRoute(h)) {
            console.log('  ✅ ' + h);
        } else {
            fBroken.push(h);
            console.log('  ❌ BROKEN: ' + h);
        }
    }
}

// --- All internal links site-wide ---
const allFiles = [];
function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name === 'node_modules' || entry.name === '.next') continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name.endsWith('.tsx')) allFiles.push(full);
    }
}
walk('src');

const allHrefs = new Set();
for (const f of allFiles) {
    const content = fs.readFileSync(f, 'utf8');
    for (const m of content.matchAll(/href="(\/[^"{}$]*)"/g)) {
        const h = m[1].split('#')[0].split('?')[0];
        if (h && h !== '/') allHrefs.add(h);
    }
}

const siteBroken = [];
for (const h of [...allHrefs].sort()) {
    if (!checkRoute(h)) siteBroken.push(h);
}
console.log('\n=== SITE-WIDE BROKEN LINKS (' + siteBroken.length + ' of ' + allHrefs.size + ') ===');
siteBroken.forEach(p => console.log('  ❌ ' + p));
if (!siteBroken.length) console.log('  ✅ All ' + allHrefs.size + ' internal links resolve!');
