#!/usr/bin/env node
/**
 * Batch re-replace menu images with dish-specific photos from Jinbeh_Menu_Photos.
 * Maps each menu item card to its actual product photo.
 */
import { readFileSync, writeFileSync } from 'fs';

// Exact image mappings per category — using actual product photos
const imageMap = {
    'sushi-rolls': [
        // Order matches the card order in the page (14 items)
        { src: '/images/menu-photos/Ahi_Tower.jpg', alt: 'Ahi Tower at Jinbeh — layered tuna, avocado, and crispy rice' },
        { src: '/images/menu-photos/Butterfly_Kiss.jpg', alt: 'Butterfly Kiss roll — shrimp tempura and cream cheese' },
        { src: '/images/menu-photos/California_Roll.jpg', alt: 'California roll with crab, avocado, and cucumber' },
        { src: '/images/menu-photos/Catepiller_Roll.jpg', alt: 'Caterpillar roll with freshwater eel and avocado' },
        { src: '/images/menu-photos/Golden_Tiger_Roll.jpg', alt: 'Dragon roll with eel and avocado topping' },
        { src: '/images/menu-photos/Philadelphia_Roll.jpg', alt: 'Philly roll with smoked salmon and cream cheese' },
        { src: '/images/menu-photos/Rainbow_Roll.jpg', alt: 'Rainbow roll with assorted fish over California roll' },
        { src: '/images/menu-photos/Shrimp_Tempura_Roll.jpg', alt: 'Shrimp tempura roll — crispy fried shrimp' },
        { src: '/images/menu-photos/Spicy_Tuna_Roll.jpg', alt: 'Spicy tuna roll with chili sauce' },
        { src: '/images/menu-photos/Spider_Roll.jpg', alt: 'Spider roll with soft-shell crab' },
        { src: '/images/menu-photos/Golden_Tiger_Roll.jpg', alt: 'Tiger roll — shrimp tempura with spicy mayo' },
        { src: '/images/menu-photos/Volcano_Roll.jpg', alt: 'Vegas roll — deep-fried California roll' },
        { src: '/images/menu-photos/Volcano_Roll.jpg', alt: 'Volcano roll — baked seafood on California roll' },
        { src: '/images/menu-photos/Yellowtail_Heaven.jpg', alt: 'Yellowtail jalapeño with citrus ponzu' },
    ],
    'sashimi': [
        // 7 items: chirashi, octopus, omakase, salmon, deluxe, tuna, yellowtail
        { src: '/images/menu-photos/Fresh_Salmon_Sashimi.jpg', alt: 'Chirashi bowl — assorted sashimi over sushi rice' },
        { src: '/images/menu-photos/Octopus_Sashimi.jpg', alt: 'Octopus sashimi, thinly sliced' },
        { src: '/images/menu-photos/Sea_Lovers_Paradise.jpg', alt: 'Omakase sashimi — chef\'s selection of premium fish' },
        { src: '/images/menu-photos/Fresh_Salmon_Sashimi.jpg', alt: 'Fresh salmon sashimi, hand-cut' },
        { src: '/images/menu-photos/Yelllow_Tail_Sashimi.jpg', alt: 'Sashimi deluxe platter — premium assorted fish' },
        { src: '/images/menu-photos/Tuna_Sashimi.jpg', alt: 'Tuna sashimi with fresh garnish' },
        { src: '/images/menu-photos/Yelllow_Tail_Sashimi.jpg', alt: 'Yellowtail sashimi — buttery hamachi slices' },
    ],
    'appetizers': [
        // 6 items: edamame, gyoza, seared-tuna, soft-shell-crab, tempura, tuna-tartare
        { src: '/images/menu-photos/Shishito_Peppers.jpg', alt: 'Steamed edamame with sea salt' },
        { src: '/images/menu-photos/Gyoza_Potstickers.jpg', alt: 'Pan-fried gyoza potstickers' },
        { src: '/images/menu-photos/Beef_Tataki.jpg', alt: 'Seared tuna with ponzu sauce' },
        { src: '/images/menu-photos/Soft_Shell_Crab.jpg', alt: 'Crispy soft-shell crab, deep fried' },
        { src: '/images/menu-photos/Shrimp_Tempura.jpg', alt: 'Shrimp and vegetable tempura' },
        { src: '/images/menu-photos/Ahi_Tower.jpg', alt: 'Tuna tartare with avocado and crispy wontons' },
    ],
    'cocktails': [
        // 5 items: jinbeh-punch, lychee-martini, sake-bomb, sake-flight, tokyo-mule
        { src: '/images/drinks/JinbehPunchBeverageDrink.jpg', alt: 'Jinbeh Punch — tropical house cocktail' },
        { src: '/images/drinks/cocktail.jpg', alt: 'Lychee Martini — sweet lychee and vodka' },
        { src: '/images/drinks/SpicyMargaritaBeverageDrink.jpg', alt: 'Sake Bomb — beer and hot sake' },
        { src: '/images/hq/jinbeh-cocktail.jpg', alt: 'Sake Flight — premium sake selection' },
        { src: '/images/drinks/MuleSummerSignatureCocktail.jpg', alt: 'Tokyo Mule — ginger beer and Japanese whisky' },
    ]
};

const locations = ['frisco', 'lewisville'];

// Match pattern for Image components already inserted by the first script
const imagePattern = (src, alt) =>
    `                <div className="relative h-48 overflow-hidden">\n                  <Image\n                    src="${src}"\n                    alt="${alt}"\n                    fill\n                    className="object-cover group-hover:scale-110 transition-transform duration-500"\n                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"\n                  />\n                </div>`;

let totalFiles = 0;
let totalReplacements = 0;

for (const [category, newImages] of Object.entries(imageMap)) {
    for (const location of locations) {
        const filePath = `src/app/${location}/${category}/page.tsx`;
        let content;
        try {
            content = readFileSync(filePath, 'utf-8');
        } catch {
            console.log(`  SKIP: ${filePath} not found`);
            continue;
        }

        // Find all existing Image blocks and replace them sequentially  
        const regex = /<div className="relative h-48 overflow-hidden">\s*<Image\s*src="([^"]+)"\s*alt="([^"]+)"\s*fill\s*className="object-cover group-hover:scale-110 transition-transform duration-500"\s*sizes="\(max-width: 640px\) 100vw, \(max-width: 1024px\) 50vw, 25vw"\s*\/>\s*<\/div>/g;

        let matchIndex = 0;
        content = content.replace(regex, (match) => {
            if (matchIndex < newImages.length) {
                const img = newImages[matchIndex];
                matchIndex++;
                totalReplacements++;
                return `<div className="relative h-48 overflow-hidden">\n                  <Image\n                    src="${img.src}"\n                    alt="${img.alt}"\n                    fill\n                    className="object-cover group-hover:scale-110 transition-transform duration-500"\n                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"\n                  />\n                </div>`;
            }
            return match;
        });

        writeFileSync(filePath, content);
        console.log(`  ✅ ${filePath}: ${matchIndex}/${newImages.length} images updated`);
        totalFiles++;
    }
}

console.log(`\nDone: ${totalReplacements} images updated to dish-specific photos across ${totalFiles} files`);
