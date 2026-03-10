#!/usr/bin/env node
/**
 * Map each menu item to its correct heroImage from /public/images/menu-photos/
 * and other available image directories.
 */
const fs = require('fs');
const path = require('path');

// Mapping: slug -> heroImage path (relative to /public)
const heroImageMap = {
    // === HIBACHI ===
    'salmon': '/images/food/SmokedSalmonCloseup.jpg',
    'filet-mignon': '/images/hq/cooking-on-grill.jpg',
    'ny-strip': '/images/hq/cooking-on-grill.jpg',
    'ribeye': '/images/food/HibachiComboNYStripAndColossalShrimp.jpg',
    'chicken-teriyaki': '/images/food/hibachi-grill.jpg',
    'shrimp': '/images/hq/garlic-lemon-shrimp.jpg',
    'scallops': '/images/food/FoodCloseup.jpeg',
    'lobster-tail': '/images/menu-photos/Crunchy_Lobster.jpg',
    'vegetable-tofu': '/images/menu-photos/Vegetable_Tempura.jpg',
    'combo-steak-shrimp': '/images/food/HibachiComboNYStripAndColossalShrimp.jpg',
    'combo-steak-chicken': '/images/hq/cooking-on-grill.jpg',
    'combo-steak-lobster': '/images/menu-photos/Crunchy_Lobster.jpg',
    'combo-seafood': '/images/menu-photos/Sea_Lovers_Paradise.jpg',
    'imperial-dinner': '/images/food/onion-volcano.jpg',

    // === SUSHI ROLLS ===
    'california-roll': '/images/menu-photos/California_Roll.jpg',
    'spicy-tuna-roll': '/images/menu-photos/Spicy_Tuna_Roll.jpg',
    'dragon-roll': '/images/menu-photos/Golden_Tiger_Roll.jpg',
    'rainbow-roll': '/images/menu-photos/Rainbow_Roll.jpg',
    'shrimp-tempura-roll': '/images/menu-photos/Shrimp_Tempura_Roll.jpg',
    'spider-roll': '/images/menu-photos/Spider_Roll.jpg',
    'philly-roll': '/images/menu-photos/Philadelphia_Roll.jpg',
    'ahi-tower': '/images/menu-photos/Ahi_Tower.jpg',
    'caterpillar-roll': '/images/menu-photos/Catepiller_Roll.jpg',
    'volcano-roll': '/images/menu-photos/Volcano_Roll.jpg',
    'tiger-roll': '/images/menu-photos/Golden_Tiger_Roll.jpg',
    'vegas-roll': '/images/menu-photos/Fire_Cracker_Roll.jpg',
    'yellowtail-jalapeno': '/images/menu-photos/Yellowtail_Heaven.jpg',
    'butterfly-kiss': '/images/menu-photos/Butterfly_Kiss.jpg',

    // === APPETIZERS ===
    'edamame': '/images/food/seaweedsalad.png',
    'gyoza': '/images/menu-photos/Gyoza_Potstickers.jpg',
    'tempura': '/images/menu-photos/Shrimp_Tempura.jpg',
    'seared-tuna': '/images/menu-photos/Beef_Tataki.jpg',
    'tuna-tartare': '/images/menu-photos/Ahi_Tower.jpg',
    'soft-shell-crab': '/images/menu-photos/Soft_Shell_Crab.jpg',

    // === SASHIMI ===
    'salmon-sashimi': '/images/menu-photos/Fresh_Salmon_Sashimi.jpg',
    'tuna-sashimi': '/images/menu-photos/Tuna_Sashimi.jpg',
    'yellowtail-sashimi': '/images/menu-photos/Yelllow_Tail_Sashimi.jpg',
    'octopus-sashimi': '/images/menu-photos/Octopus_Sashimi.jpg',
    'sashimi-deluxe': '/images/food/jinbeh_sushi_tray.jpg',
    'chirashi': '/images/food/jinbeh_sushi_photo.jpg',
    'omakase': '/images/hq/sushi-rolls-2026.jpg',

    // === COCKTAILS ===
    'sake-flight': '/images/food/cocktail.jpg',
    'sake-bomb': '/images/food/cocktail.jpg',
    'lychee-martini': '/images/food/JinbehPunchBeverageDrink.jpg',
    'jinbeh-punch': '/images/food/MuleSummerSignatureCocktail.jpg',
    'tokyo-mule': '/images/food/SpicyMargaritaBeverageDrink.jpg',
};

// Process each data file
const dataFiles = [
    'src/data/menu-items-hibachi.ts',
    'src/data/menu-items-sushi-rolls.ts',
    'src/data/menu-items-appetizers.ts',
    'src/data/menu-items-sashimi.ts',
    'src/data/menu-items-cocktails.ts',
];

const BASE = '/Users/lighthaven/Documents/jinbeh-elite-phase1';
let updated = 0;
let notFound = [];

for (const file of dataFiles) {
    const filePath = path.join(BASE, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    let currentSlug = null;

    const newLines = [];
    for (const line of lines) {
        const slugMatch = line.match(/^\s+slug: '([^']+)'/);
        if (slugMatch) currentSlug = slugMatch[1];

        // Replace heroImage lines
        if (line.match(/^\s+heroImage:/) && currentSlug) {
            const newImage = heroImageMap[currentSlug];
            if (newImage) {
                // Verify the image exists
                const imgPath = path.join(BASE, 'public', newImage);
                if (!fs.existsSync(imgPath)) {
                    console.warn(`  ⚠ Image not found: ${newImage} (for ${currentSlug})`);
                    notFound.push({ slug: currentSlug, image: newImage });
                }
                const indent = line.match(/^(\s+)/)[1];
                newLines.push(`${indent}heroImage: '${newImage}',`);
                console.log(`  ✓ ${currentSlug} → ${newImage}`);
                updated++;
            } else {
                newLines.push(line);
                console.warn(`  ? No mapping for ${currentSlug}`);
            }
        } else {
            newLines.push(line);
        }
    }

    fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
    console.log(`OK: ${path.basename(file)}\n`);
}

console.log(`\nDone! Updated ${updated} heroImage paths.`);
if (notFound.length > 0) {
    console.log(`\n⚠ ${notFound.length} images not found on disk:`);
    notFound.forEach(n => console.log(`  - ${n.slug}: ${n.image}`));
}
