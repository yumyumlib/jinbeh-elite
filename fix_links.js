const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('src/app', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        // Fix locations breadcrumbs
        newContent = newContent.replace(/https:\/\/jinbeh\.com\/locations/g, 'https://jinbeh.com/#locations');
        
        // Fix menu/sashimi and menu/sake
        newContent = newContent.replace(/\/menu\/sashimi/g, '/menu');
        newContent = newContent.replace(/\/menu\/sake/g, '/menu');
        
        // Fix the 1848 image link
        newContent = newContent.replace(
            /\/images\/hibachi-lewisville-2026\/jinbeh-hibachi-flame-show-lewisville-006-orig-IMG_1848-800w\.webp/g,
            '/images/catalog_v7/hibachi/jinbeh-hibachi-action-shot.webp'
        );
        newContent = newContent.replace(
            /\/images\/hibachi-lewisville-2026\/jinbeh-hibachi-flame-show-lewisville-006-orig-IMG_1848-1200w\.webp/g,
            '/images/catalog_v7/hibachi/jinbeh-hibachi-action-shot.webp'
        );
        newContent = newContent.replace(
            /jinbeh-hibachi-flame-show-lewisville-006-orig-IMG_1848-1200w\.webp/g,
            'jinbeh-hibachi-action-shot.webp'
        );

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Fixed links in ${filePath}`);
        }
    }
});
