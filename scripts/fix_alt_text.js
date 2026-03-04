const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function fixAltTexts(dir) {
    const files = execSync(`grep -rl "Image" ${dir} --include="*.tsx" | xargs grep -L "alt="`).toString().trim().split('\n');

    files.forEach(file => {
        if (!file) return;

        let content = fs.readFileSync(file, 'utf8');

        // Match <Image without alt tag
        // We'll do a simple regex that looks for <Image and adds alt="" if it doesn't have one before the closing />
        // A more robust way is to just add alt="" after <Image if it doesn't have alt= anywhere in the tag

        // This regex matches <Image ... > or <Image ... />
        const imageTagRegex = /<Image\s+([^>]*?)>/g;

        content = content.replace(imageTagRegex, (match, attrs) => {
            if (!attrs.includes('alt=')) {
                // Determine a generic alt text from the filename or path, or just use empty string for decorative
                // Since there are over 100 files, we'll try to extract a meaningful alt from the URL or filename if possible, otherwise empty
                let altText = "";
                const srcMatch = attrs.match(/src=\{([^}]+)\}/) || attrs.match(/src="([^"]+)"/);
                if (srcMatch) {
                    const src = srcMatch[1];
                    // Try to guess from src
                    if (src.includes('tuna')) altText = "Fresh tuna sashimi or sushi";
                    else if (src.includes('roll')) altText = "Signature sushi roll";
                    else if (src.includes('hibachi')) altText = "Hibachi meal preparation";
                    else if (src.includes('steak')) altText = "Premium hibachi steak";
                    else if (src.includes('cocktail') || src.includes('sake')) altText = "Japanese craft cocktail or sake";
                    else if (src.includes('salmon')) altText = "Fresh salmon sashimi or sushi";
                    else if (src.includes('appetizer')) altText = "Japanese appetizer";
                    else if (src.includes('restaurant') || src.includes('interior')) altText = "Jinbeh restaurant interior";
                }

                // If it's a self-closing tag
                if (match.endsWith('/>')) {
                    return `<Image alt="${altText}" ${attrs}>`;
                }
                return `<Image alt="${altText}" ${attrs}>`;
            }
            return match;
        });

        fs.writeFileSync(file, content);
        console.log(`Fixed alt text in ${file}`);
    });
}

fixAltTexts('./src/app');
