#!/usr/bin/env node
/**
 * Rebuild menu page keywords using researched SEO data from the
 * jinbeh-seo-keywords skill (195K+ terms with real search volume).
 *
 * Strategy per the skill's Menu Page SEO guidance:
 * - Primary: item-specific + location (unique per page)
 * - Secondary: related menu terms with real search volume
 * - Category: 1-2 high-volume shared category terms
 * - Informational: calories/nutrition/how-to queries with volume
 */
const fs = require('fs');
const path = require('path');

// Keyword assignments based on actual research data (search volume noted in comments)
// Each item gets 6-8 keywords, differentiated from all other items
const keywordsByItem = {
    // === HIBACHI ===
    'filet-mignon': {
        frisco: [
            'filet mignon hibachi frisco',     // item + location (unique)
            'hibachi steak dinner',             // 590v commercial
            'teppanyaki filet mignon',          // cross-term
            'beef tenderloin hibachi',          // specific cut term
            'hibachi birthday dinner frisco',   // occasion + location (79v)
            'best hibachi near me frisco',      // 847K vol location
            'japanese steakhouse frisco',       // 11 pages share this (INTENTIONAL for category)
            'hibachi near me frisco',           // Tier 1: 847K vol
        ],
        lewisville: [
            'filet mignon hibachi lewisville',
            'hibachi steak dinner',
            'teppanyaki filet mignon',
            'beef tenderloin hibachi',
            'hibachi birthday dinner lewisville',
            'best hibachi near me lewisville',
            'japanese steakhouse lewisville',
            'hibachi near me lewisville',
        ],
    },
    'ny-strip': {
        frisco: [
            'ny strip hibachi frisco',
            'new york strip teppanyaki',
            'hibachi steak frisco tx',
            'japanese steakhouse steak dinner',
            'best hibachi near me frisco',
            'teppanyaki restaurant frisco',      // 83K vol
            'hibachi near me frisco',
        ],
        lewisville: [
            'ny strip hibachi lewisville',
            'new york strip teppanyaki',
            'hibachi steak lewisville tx',
            'japanese steakhouse steak dinner',
            'best hibachi near me lewisville',
            'teppanyaki restaurant lewisville',
            'hibachi near me lewisville',
        ],
    },
    'ribeye': {
        frisco: [
            'ribeye hibachi frisco',
            'ribeye steak teppanyaki',          // 720v informational
            'black angus hibachi steak',
            'marbled steak japanese restaurant',
            'best hibachi near me frisco',
            'teppanyaki restaurant frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'ribeye hibachi lewisville',
            'ribeye steak teppanyaki',
            'black angus hibachi steak',
            'marbled steak japanese restaurant',
            'best hibachi near me lewisville',
            'teppanyaki restaurant lewisville',
            'hibachi near me lewisville',
        ],
    },
    'chicken-teriyaki': {
        frisco: [
            'hibachi chicken teriyaki frisco',
            'teppanyaki chicken dinner',          // cross-term
            'hibachi chicken calories',           // informational, real search
            'is hibachi chicken healthy',         // PAA query
            'japanese steakhouse frisco',
            'family hibachi dinner frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'hibachi chicken teriyaki lewisville',
            'teppanyaki chicken dinner',
            'hibachi chicken calories',
            'is hibachi chicken healthy',
            'japanese steakhouse lewisville',
            'family hibachi dinner lewisville',
            'hibachi near me lewisville',
        ],
    },
    'salmon': {
        frisco: [
            'hibachi salmon frisco',
            'salmon teppanyaki restaurant frisco tx',
            'hibachi salmon calories',            // informational
            'omega-3 salmon health benefits',     // informational
            'fresh fish hibachi',
            'best hibachi near me frisco',
            'japanese steakhouse frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'hibachi salmon lewisville',
            'salmon teppanyaki restaurant lewisville tx',
            'hibachi salmon calories',
            'omega-3 salmon health benefits',
            'fresh fish hibachi',
            'best hibachi near me lewisville',
            'japanese steakhouse lewisville',
            'hibachi near me lewisville',
        ],
    },
    'shrimp': {
        frisco: [
            'hibachi shrimp frisco',
            'jumbo shrimp teppanyaki',
            'garlic butter shrimp hibachi',
            'hibachi seafood dinner frisco',
            'best hibachi near me frisco',
            'japanese steakhouse frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'hibachi shrimp lewisville',
            'jumbo shrimp teppanyaki',
            'garlic butter shrimp hibachi',
            'hibachi seafood dinner lewisville',
            'best hibachi near me lewisville',
            'japanese steakhouse lewisville',
            'hibachi near me lewisville',
        ],
    },
    'scallops': {
        frisco: [
            'hibachi scallops frisco',
            'sea scallops teppanyaki',
            'seared scallops japanese restaurant',
            'hibachi seafood frisco tx',
            'best hibachi near me frisco',
            'teppanyaki restaurant frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'hibachi scallops lewisville',
            'sea scallops teppanyaki',
            'seared scallops japanese restaurant',
            'hibachi seafood lewisville tx',
            'best hibachi near me lewisville',
            'teppanyaki restaurant lewisville',
            'hibachi near me lewisville',
        ],
    },
    'lobster-tail': {
        frisco: [
            'hibachi lobster tail frisco',
            'lobster teppanyaki dinner',
            'butter grilled lobster japanese restaurant',
            'special occasion hibachi dinner',
            'best hibachi near me frisco',
            'japanese steakhouse frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'hibachi lobster tail lewisville',
            'lobster teppanyaki dinner',
            'butter grilled lobster japanese restaurant',
            'special occasion hibachi dinner',
            'best hibachi near me lewisville',
            'japanese steakhouse lewisville',
            'hibachi near me lewisville',
        ],
    },
    'vegetable-tofu': {
        frisco: [
            'vegetarian hibachi frisco',
            'tofu teppanyaki dinner',
            'vegetable hibachi near me',
            'plant based japanese restaurant',
            'vegan hibachi options frisco',
            'japanese steakhouse frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'vegetarian hibachi lewisville',
            'tofu teppanyaki dinner',
            'vegetable hibachi near me',
            'plant based japanese restaurant',
            'vegan hibachi options lewisville',
            'japanese steakhouse lewisville',
            'hibachi near me lewisville',
        ],
    },
    'combo-steak-shrimp': {
        frisco: [
            'steak and shrimp hibachi frisco',
            'surf and turf teppanyaki',
            'hibachi combo dinner frisco',
            'steak shrimp combo japanese restaurant',
            'best hibachi near me frisco',
            'date night hibachi frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'steak and shrimp hibachi lewisville',
            'surf and turf teppanyaki',
            'hibachi combo dinner lewisville',
            'steak shrimp combo japanese restaurant',
            'best hibachi near me lewisville',
            'date night hibachi lewisville',
            'hibachi near me lewisville',
        ],
    },
    'combo-steak-chicken': {
        frisco: [
            'steak chicken combo hibachi frisco',
            'dual protein teppanyaki',
            'hibachi combination dinner frisco tx',
            'filet mignon chicken hibachi',
            'best hibachi near me frisco',
            'teppanyaki restaurant frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'steak chicken combo hibachi lewisville',
            'dual protein teppanyaki',
            'hibachi combination dinner lewisville tx',
            'filet mignon chicken hibachi',
            'best hibachi near me lewisville',
            'teppanyaki restaurant lewisville',
            'hibachi near me lewisville',
        ],
    },
    'combo-steak-lobster': {
        frisco: [
            'steak and lobster hibachi frisco',
            'surf and turf japanese steakhouse',
            'filet mignon lobster teppanyaki',
            'luxury hibachi dinner frisco',
            'anniversary dinner hibachi frisco',   // events 79v
            'best hibachi near me frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'steak and lobster hibachi lewisville',
            'surf and turf japanese steakhouse',
            'filet mignon lobster teppanyaki',
            'luxury hibachi dinner lewisville',
            'anniversary dinner hibachi lewisville',
            'best hibachi near me lewisville',
            'hibachi near me lewisville',
        ],
    },
    'combo-seafood': {
        frisco: [
            'seafood trio hibachi frisco',
            'mixed seafood teppanyaki',
            'lobster shrimp scallops hibachi',
            'premium seafood hibachi dinner',
            'best hibachi near me frisco',
            'japanese steakhouse frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'seafood trio hibachi lewisville',
            'mixed seafood teppanyaki',
            'lobster shrimp scallops hibachi',
            'premium seafood hibachi dinner',
            'best hibachi near me lewisville',
            'japanese steakhouse lewisville',
            'hibachi near me lewisville',
        ],
    },
    'imperial-dinner': {
        frisco: [
            'imperial dinner hibachi frisco',
            'hibachi dinner for two',
            'filet mignon lobster shrimp teppanyaki',
            'special occasion japanese steakhouse',
            'engagement dinner hibachi frisco',
            'best hibachi near me frisco',
            'hibachi near me frisco',
        ],
        lewisville: [
            'imperial dinner hibachi lewisville',
            'hibachi dinner for two',
            'filet mignon lobster shrimp teppanyaki',
            'special occasion japanese steakhouse',
            'engagement dinner hibachi lewisville',
            'best hibachi near me lewisville',
            'hibachi near me lewisville',
        ],
    },

    // === SUSHI ROLLS ===
    'dragon-roll': {
        frisco: [
            'dragon roll sushi frisco',
            'dragon roll sushi',               // 6,600 vol!
            'eel avocado roll',                // ingredient-specific
            'unagi sushi roll',                // Japanese name
            'specialty sushi rolls frisco tx',
            'sushi near me frisco',            // Tier 1: 3.3M vol
            'best sushi frisco tx',
        ],
        lewisville: [
            'dragon roll sushi lewisville',
            'dragon roll sushi',
            'eel avocado roll',
            'unagi sushi roll',
            'specialty sushi rolls lewisville tx',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'rainbow-roll': {
        frisco: [
            'rainbow roll frisco',
            'rainbow roll sushi',              // real search volume
            'assorted sashimi roll',
            'colorful sushi roll',
            'sushi rolls frisco',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'rainbow roll lewisville',
            'rainbow roll sushi',
            'assorted sashimi roll',
            'colorful sushi roll',
            'sushi rolls lewisville',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'spider-roll': {
        frisco: [
            'spider roll frisco',
            'spider roll sushi',               // 3,600 vol
            'soft shell crab sushi roll',
            'crispy crab sushi',
            'specialty sushi roll frisco',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'spider roll lewisville',
            'spider roll sushi',
            'soft shell crab sushi roll',
            'crispy crab sushi',
            'specialty sushi roll lewisville',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'spicy-tuna-roll': {
        frisco: [
            'spicy tuna roll frisco',
            'spicy tuna roll',                 // very popular search
            'spicy tuna sushi',
            'ahi tuna roll',
            'sushi rolls frisco',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'spicy tuna roll lewisville',
            'spicy tuna roll',
            'spicy tuna sushi',
            'ahi tuna roll',
            'sushi rolls lewisville',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'california-roll': {
        frisco: [
            'california roll frisco',
            'california roll sushi',
            'crab avocado roll',
            'sushi for beginners',
            'sushi rolls frisco',
            'jinbeh california roll',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'california roll lewisville',
            'california roll sushi',
            'crab avocado roll',
            'sushi for beginners',
            'sushi rolls lewisville',
            'jinbeh california roll',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'shrimp-tempura-roll': {
        frisco: [
            'shrimp tempura roll frisco',
            'shrimp tempura roll',             // 22,200 vol!
            'crispy shrimp sushi',
            'tempura sushi roll',
            'shrimp tempura roll calories',    // 1,600 vol
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'shrimp tempura roll lewisville',
            'shrimp tempura roll',
            'crispy shrimp sushi',
            'tempura sushi roll',
            'shrimp tempura roll calories',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'caterpillar-roll': {
        frisco: [
            'caterpillar roll frisco',
            'caterpillar roll sushi',          // 1,300 vol
            'eel sushi roll',
            'avocado eel roll',
            'specialty sushi roll',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'caterpillar roll lewisville',
            'caterpillar roll sushi',
            'eel sushi roll',
            'avocado eel roll',
            'specialty sushi roll',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'volcano-roll': {
        frisco: [
            'volcano roll frisco',
            'volcano roll sushi',              // 2,900 vol
            'baked sushi roll',
            'hot sushi roll',
            'specialty sushi frisco',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'volcano roll lewisville',
            'volcano roll sushi',
            'baked sushi roll',
            'hot sushi roll',
            'specialty sushi lewisville',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'tiger-roll': {
        frisco: [
            'tiger roll frisco',
            'tiger roll sushi',
            'spicy tuna tempura roll',
            'shrimp tempura spicy roll',
            'specialty sushi roll frisco',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'tiger roll lewisville',
            'tiger roll sushi',
            'spicy tuna tempura roll',
            'shrimp tempura spicy roll',
            'specialty sushi roll lewisville',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'vegas-roll': {
        frisco: [
            'vegas roll frisco',
            'vegas roll sushi',                // 1,300 vol
            'deep fried sushi roll',
            'crispy sushi roll',
            'fusion sushi roll',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'vegas roll lewisville',
            'vegas roll sushi',
            'deep fried sushi roll',
            'crispy sushi roll',
            'fusion sushi roll',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'philly-roll': {
        frisco: [
            'philadelphia roll frisco',
            'philly roll sushi',
            'smoked salmon cream cheese roll',
            'salmon sushi roll',
            'sushi rolls frisco',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'philadelphia roll lewisville',
            'philly roll sushi',
            'smoked salmon cream cheese roll',
            'salmon sushi roll',
            'sushi rolls lewisville',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'ahi-tower': {
        frisco: [
            'ahi tuna tower frisco',
            'tuna tartare tower',
            'ahi tower sushi',
            'tuna avocado stack',
            'sushi near me frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'ahi tuna tower lewisville',
            'tuna tartare tower',
            'ahi tower sushi',
            'tuna avocado stack',
            'sushi near me lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },
    'yellowtail-jalapeno': {
        frisco: [
            'yellowtail jalapeno roll frisco',
            'hamachi sushi',                   // 14,800 vol!
            'yellowtail sushi roll',
            'hamachi jalapeno roll',
            'fresh fish sushi frisco',
            'sushi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'yellowtail jalapeno roll lewisville',
            'hamachi sushi',
            'yellowtail sushi roll',
            'hamachi jalapeno roll',
            'fresh fish sushi lewisville',
            'sushi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'butterfly-kiss': {
        frisco: [
            'butterfly kiss roll frisco',
            'jinbeh butterfly kiss roll',
            'house specialty sushi roll',
            'seasonal sushi roll frisco',
            'sushi near me frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'butterfly kiss roll lewisville',
            'jinbeh butterfly kiss roll',
            'house specialty sushi roll',
            'seasonal sushi roll lewisville',
            'sushi near me lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },

    // === APPETIZERS ===
    'edamame': {
        frisco: [
            'edamame frisco',
            'edamame sushi',                   // 880 vol
            'spicy garlic edamame',
            'japanese appetizers frisco',
            'healthy appetizers frisco',
            'plant based protein appetizer',
            'japanese restaurant frisco',
        ],
        lewisville: [
            'edamame lewisville',
            'edamame sushi',
            'spicy garlic edamame',
            'japanese appetizers lewisville',
            'healthy appetizers lewisville',
            'plant based protein appetizer',
            'japanese restaurant lewisville',
        ],
    },
    'gyoza': {
        frisco: [
            'gyoza dumplings frisco',
            'gyoza sushi',                     // 210 vol
            'pan fried dumplings japanese',
            'pork gyoza restaurant',
            'japanese appetizers frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'gyoza dumplings lewisville',
            'gyoza sushi',
            'pan fried dumplings japanese',
            'pork gyoza restaurant',
            'japanese appetizers lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },
    'tempura': {
        frisco: [
            'shrimp tempura frisco',
            'shrimp tempura near me',          // 1,600 vol
            'tempura appetizer',
            'crispy shrimp japanese restaurant',
            'japanese appetizers frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'shrimp tempura lewisville',
            'shrimp tempura near me',
            'tempura appetizer',
            'crispy shrimp japanese restaurant',
            'japanese appetizers lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },
    'seared-tuna': {
        frisco: [
            'seared ahi tuna frisco',
            'tataki tuna appetizer',
            'pepper crusted ahi tuna',
            'seared tuna japanese restaurant',
            'japanese appetizers frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'seared ahi tuna lewisville',
            'tataki tuna appetizer',
            'pepper crusted ahi tuna',
            'seared tuna japanese restaurant',
            'japanese appetizers lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },
    'tuna-tartare': {
        frisco: [
            'tuna tartare frisco',
            'ahi tuna tartare appetizer',
            'raw tuna appetizer',
            'sashimi style appetizer',
            'japanese appetizers frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'tuna tartare lewisville',
            'ahi tuna tartare appetizer',
            'raw tuna appetizer',
            'sashimi style appetizer',
            'japanese appetizers lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },
    'soft-shell-crab': {
        frisco: [
            'soft shell crab frisco',
            'crispy soft shell crab appetizer',
            'fried whole crab japanese',
            'seafood appetizer frisco',
            'japanese appetizers frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'soft shell crab lewisville',
            'crispy soft shell crab appetizer',
            'fried whole crab japanese',
            'seafood appetizer lewisville',
            'japanese appetizers lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },

    // === SASHIMI ===
    'salmon-sashimi': {
        frisco: [
            'salmon sashimi frisco',
            'salmon sashimi calories',         // 1,600 vol
            'salmon sashimi nutrition',        // 1,300 vol
            'sushi grade salmon',              // 8,100 vol!
            'fresh fish sashimi frisco',
            'omega-3 sashimi',
            'sashimi near me frisco',
            'japanese restaurant frisco',
        ],
        lewisville: [
            'salmon sashimi lewisville',
            'salmon sashimi calories',
            'salmon sashimi nutrition',
            'sushi grade salmon',
            'fresh fish sashimi lewisville',
            'omega-3 sashimi',
            'sashimi near me lewisville',
            'japanese restaurant lewisville',
        ],
    },
    'tuna-sashimi': {
        frisco: [
            'tuna sashimi frisco',
            'ahi tuna sashimi',
            'tuna sashimi calories',
            'sushi grade tuna',
            'lean protein sashimi',
            'raw fish frisco',
            'sashimi near me frisco',
            'japanese restaurant frisco',
        ],
        lewisville: [
            'tuna sashimi lewisville',
            'ahi tuna sashimi',
            'tuna sashimi calories',
            'sushi grade tuna',
            'lean protein sashimi',
            'raw fish lewisville',
            'sashimi near me lewisville',
            'japanese restaurant lewisville',
        ],
    },
    'yellowtail-sashimi': {
        frisco: [
            'yellowtail sashimi frisco',
            'hamachi sashimi',                 // connected to 14,800v 'hamachi sushi'
            'yellowtail sashimi near me',      // 140 vol
            'buttery sashimi fish',
            'omega-3 fish frisco',
            'sashimi near me frisco',
            'japanese restaurant frisco',
        ],
        lewisville: [
            'yellowtail sashimi lewisville',
            'hamachi sashimi',
            'yellowtail sashimi near me',
            'buttery sashimi fish',
            'omega-3 fish lewisville',
            'sashimi near me lewisville',
            'japanese restaurant lewisville',
        ],
    },
    'octopus-sashimi': {
        frisco: [
            'octopus sashimi frisco',
            'tako sashimi',
            'octopus japanese restaurant',
            'adventurous sashimi',
            'lean protein sashimi',
            'sashimi near me frisco',
            'japanese restaurant frisco',
        ],
        lewisville: [
            'octopus sashimi lewisville',
            'tako sashimi',
            'octopus japanese restaurant',
            'adventurous sashimi',
            'lean protein sashimi',
            'sashimi near me lewisville',
            'japanese restaurant lewisville',
        ],
    },
    'sashimi-deluxe': {
        frisco: [
            'sashimi platter frisco',
            'sashimi deluxe platter',
            'assorted sashimi',
            'chef selection sashimi',
            'premium raw fish frisco',
            'sashimi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'sashimi platter lewisville',
            'sashimi deluxe platter',
            'assorted sashimi',
            'chef selection sashimi',
            'premium raw fish lewisville',
            'sashimi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'chirashi': {
        frisco: [
            'chirashi bowl frisco',
            'chirashi sushi',
            'scattered sushi rice bowl',
            'sashimi rice bowl',
            'japanese rice bowl frisco',
            'sashimi near me frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'chirashi bowl lewisville',
            'chirashi sushi',
            'scattered sushi rice bowl',
            'sashimi rice bowl',
            'japanese rice bowl lewisville',
            'sashimi near me lewisville',
            'best sushi lewisville tx',
        ],
    },
    'omakase': {
        frisco: [
            'omakase frisco',
            'omakase dallas',                  // 1,600 vol
            'omakase sushi near me',           // 880 vol
            'chef tasting sushi',
            'premium sushi experience',
            'sashimi near me frisco',
            'japanese restaurant frisco',
            'best sushi frisco tx',
        ],
        lewisville: [
            'omakase lewisville',
            'omakase dallas',
            'omakase sushi near me',
            'chef tasting sushi',
            'premium sushi experience',
            'sashimi near me lewisville',
            'japanese restaurant lewisville',
            'best sushi lewisville tx',
        ],
    },

    // === COCKTAILS ===
    'sake-bomb': {
        frisco: [
            'sake bomb frisco',
            'sake bomb',                       // real vol
            'japanese beer cocktail',
            'group drinking ritual japanese',
            'japanese cocktails frisco',
            'happy hour frisco',
            'jinbeh frisco',
        ],
        lewisville: [
            'sake bomb lewisville',
            'sake bomb',
            'japanese beer cocktail',
            'group drinking ritual japanese',
            'japanese cocktails lewisville',
            'happy hour lewisville',
            'jinbeh lewisville',
        ],
    },
    'jinbeh-punch': {
        frisco: [
            'jinbeh punch frisco',
            'house cocktail japanese restaurant',
            'tropical cocktail frisco',
            'signature cocktail jinbeh',
            'japanese cocktails frisco',
            'happy hour frisco',
            'jinbeh frisco',
        ],
        lewisville: [
            'jinbeh punch lewisville',
            'house cocktail japanese restaurant',
            'tropical cocktail lewisville',
            'signature cocktail jinbeh',
            'japanese cocktails lewisville',
            'happy hour lewisville',
            'jinbeh lewisville',
        ],
    },
    'tokyo-mule': {
        frisco: [
            'tokyo mule cocktail frisco',
            'sake mule cocktail',
            'japanese moscow mule',
            'ginger beer sake cocktail',
            'japanese cocktails frisco',
            'happy hour frisco',
            'jinbeh frisco',
        ],
        lewisville: [
            'tokyo mule cocktail lewisville',
            'sake mule cocktail',
            'japanese moscow mule',
            'ginger beer sake cocktail',
            'japanese cocktails lewisville',
            'happy hour lewisville',
            'jinbeh lewisville',
        ],
    },
    'lychee-martini': {
        frisco: [
            'lychee martini frisco',
            'lychee martini',                  // searchable cocktail name
            'lychee sake',                     // 1,000 vol
            'asian inspired cocktail',
            'japanese cocktails frisco',
            'date night cocktails frisco',
            'jinbeh frisco',
        ],
        lewisville: [
            'lychee martini lewisville',
            'lychee martini',
            'lychee sake',
            'asian inspired cocktail',
            'japanese cocktails lewisville',
            'date night cocktails lewisville',
            'jinbeh lewisville',
        ],
    },
    'sake-flight': {
        frisco: [
            'sake flight frisco',
            'sake tasting',
            'premium sake',
            'junmai sake',
            'sake menu',                       // 1,300 vol
            'japanese cocktails frisco',
            'jinbeh frisco',
        ],
        lewisville: [
            'sake flight lewisville',
            'sake tasting',
            'premium sake',
            'junmai sake',
            'sake menu',
            'japanese cocktails lewisville',
            'jinbeh lewisville',
        ],
    },
};

// Map slugs to their category directories
const categoryForSlug = {};
const hibachiSlugs = ['filet-mignon', 'ny-strip', 'ribeye', 'chicken-teriyaki', 'salmon', 'shrimp', 'scallops', 'lobster-tail', 'vegetable-tofu', 'combo-steak-shrimp', 'combo-steak-chicken', 'combo-steak-lobster', 'combo-seafood', 'imperial-dinner'];
const sushiSlugs = ['dragon-roll', 'rainbow-roll', 'spider-roll', 'spicy-tuna-roll', 'california-roll', 'shrimp-tempura-roll', 'caterpillar-roll', 'volcano-roll', 'tiger-roll', 'vegas-roll', 'philly-roll', 'ahi-tower', 'yellowtail-jalapeno', 'butterfly-kiss'];
const appetizerSlugs = ['edamame', 'gyoza', 'tempura', 'seared-tuna', 'tuna-tartare', 'soft-shell-crab'];
const sashimiSlugs = ['salmon-sashimi', 'tuna-sashimi', 'yellowtail-sashimi', 'octopus-sashimi', 'sashimi-deluxe', 'chirashi', 'omakase'];
const cocktailSlugs = ['sake-bomb', 'jinbeh-punch', 'tokyo-mule', 'lychee-martini', 'sake-flight'];

hibachiSlugs.forEach(s => categoryForSlug[s] = 'hibachi');
sushiSlugs.forEach(s => categoryForSlug[s] = 'sushi-rolls');
appetizerSlugs.forEach(s => categoryForSlug[s] = 'appetizers');
sashimiSlugs.forEach(s => categoryForSlug[s] = 'sashimi');
cocktailSlugs.forEach(s => categoryForSlug[s] = 'cocktails');

const BASE = '/Users/lighthaven/Documents/jinbeh-elite-phase1/src/app';
let updated = 0;
let errors = 0;

for (const [slug, locations] of Object.entries(keywordsByItem)) {
    const category = categoryForSlug[slug];
    if (!category) {
        console.error(`  ! No category for ${slug}`);
        errors++;
        continue;
    }

    for (const [loc, keywords] of Object.entries(locations)) {
        const pagePath = path.join(BASE, loc, category, slug, 'page.tsx');

        if (!fs.existsSync(pagePath)) {
            console.error(`  ! File not found: ${pagePath}`);
            errors++;
            continue;
        }

        let content = fs.readFileSync(pagePath, 'utf-8');

        // Replace the keywords array
        const keywordsStr = keywords.map(k => `"${k}"`).join(',');
        const regex = /keywords:\s*\[([^\]]*)\]/;

        if (!regex.test(content)) {
            console.error(`  ! No keywords found in ${loc}/${category}/${slug}`);
            errors++;
            continue;
        }

        content = content.replace(regex, `keywords: [${keywordsStr}]`);
        fs.writeFileSync(pagePath, content, 'utf-8');
        updated++;
        console.log(`  ✓ ${loc}/${category}/${slug}`);
    }
}

console.log(`\nDone! Updated ${updated} pages, ${errors} errors.`);
