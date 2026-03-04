const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const friscoUrl = 'https://www.opentable.com/restref/client/?rid=1056652&lang=en-US&ot_source=Restaurant%20website';
const lewisvilleUrl = 'https://www.opentable.com/restref/client/?rid=1056663&lang=en-US&ot_source=Restaurant%20website';

function processDirectory(dir, url) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath, url);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Simple replacement for Link components
            // We'll replace href="/reservations" with the direct URL,
            // and add target="_blank" rel="noopener noreferrer"

            // Regex to find <Link ... href="/reservations" ...>
            // We must be careful because multiline tags are common.
            // It's safer to just replace href="/reservations" -> href="URL" target="_blank" rel="noopener noreferrer"
            // Wait, Link converts to <a> in Next 13+, but using target="_blank" on <Link> is supported.

            const regex = /href="\/reservations"/g;
            if (regex.test(content)) {
                content = content.replace(regex, `href="${url}" target="_blank" rel="noopener noreferrer"`);
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

console.log('Updating Frisco links...');
processDirectory(path.join(__dirname, '../src/app/frisco'), friscoUrl);

console.log('Updating Lewisville links...');
processDirectory(path.join(__dirname, '../src/app/lewisville'), lewisvilleUrl);

console.log('Done!');
