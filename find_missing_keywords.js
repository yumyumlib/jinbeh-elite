const fs = require('fs');
const path = require('path');
function getFiles(dir, list) {
    list = list || [];
    for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) getFiles(p, list);
        else if (p.endsWith('page.tsx')) list.push(p);
    }
    return list;
}
const files = getFiles('./src/app');
for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (!content.includes('export const metadata')) continue;
    if (!content.match(/keywords\s*:\s*\[/)) {
        console.log(file.replace('src/app/', ''));
    }
}
