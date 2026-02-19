/**
 * Add blog cross-link sections to celebration pages that don't have them yet.
 * Maps each celebration to its most contextually relevant blog articles.
 */

const fs = require('fs');
const path = require('path');

const celebDir = path.join(__dirname, '..', 'src/app/celebrations');

// Map: celebration slug → { sectionTitle, articles: [{ slug, label, title, desc }] }
const crossLinks = {
    'baby-shower': {
        sectionTitle: 'Plan Your Perfect Baby Shower',
        articles: [
            { slug: 'baby-shower-venues', label: 'Venues Guide', title: 'Top Baby Shower Venues in DFW', desc: 'Explore the best spots for hosting a memorable baby shower in DFW.' },
            { slug: 'sushi-platters-near-me', label: 'Catering', title: 'Sushi Platters & Party Trays for Any Event', desc: 'Order beautiful sushi platters that will wow your shower guests.' },
        ]
    },
    'corporate-events': {
        sectionTitle: 'Plan a Memorable Corporate Event',
        articles: [
            { slug: 'jinbeh-catering-services', label: 'Catering', title: 'Jinbeh Catering Services for Your Event', desc: 'Full-service Japanese catering for corporate lunches, dinners, and team events.' },
            { slug: 'restaurants-private-rooms', label: 'Private Dining', title: 'Restaurants with Private Rooms in DFW', desc: 'Find the ideal private dining space for presentations, meetings, and celebrations.' },
        ]
    },
    'team-building': {
        sectionTitle: 'Team Event Planning Resources',
        articles: [
            { slug: 'large-group-dining', label: 'Group Dining', title: 'Large Group Dining Guide: Planning Tips', desc: 'Expert tips for organizing team dinners and large group events.' },
            { slug: 'hibachi-catering-dfw', label: 'Catering', title: 'Hibachi Catering in DFW: Events & Parties', desc: 'Bring the hibachi show experience to your next team event.' },
        ]
    },
    'graduation': {
        sectionTitle: 'Graduation Celebration Ideas',
        articles: [
            { slug: 'group-dining-venues', label: 'Venues', title: 'Best Group Dining Venues in DFW', desc: 'Find the perfect spot for your graduation dinner with family and friends.' },
            { slug: 'jinbeh-catering-services', label: 'Catering', title: 'Jinbeh Catering for Graduation Parties', desc: 'Celebrate the big achievement with Japanese cuisine your whole party will love.' },
        ]
    },
    'rehearsal-dinner': {
        sectionTitle: 'Rehearsal Dinner Inspiration',
        articles: [
            { slug: 'restaurants-private-rooms', label: 'Private Dining', title: 'Restaurants with Private Rooms in DFW', desc: 'Intimate private dining spaces perfect for rehearsal dinners and bridal parties.' },
            { slug: 'best-sushi-frisco', label: 'Dining Guide', title: 'Best Sushi in Frisco TX', desc: 'Discover why Jinbeh is a top choice for pre-wedding celebrations in Frisco.' },
        ]
    },
    'mothers-day': {
        sectionTitle: 'Make Mom\'s Day Extra Special',
        articles: [
            { slug: 'romantic-anniversary-dinners', label: 'Fine Dining', title: 'Romantic Dinner Ideas in DFW', desc: 'Treat mom to an unforgettable fine dining experience she deserves.' },
            { slug: 'sake-pairing-guide', label: 'Drinks', title: 'Sake Pairing Guide: Perfect Matches', desc: 'Elevate her dinner with perfectly paired sake for every course.' },
        ]
    },
    'fathers-day': {
        sectionTitle: 'Father\'s Day Dining Ideas',
        articles: [
            { slug: 'hibachi-dining-experience', label: 'Hibachi', title: 'The Hibachi Dining Experience', desc: 'Give dad the full tableside show — flames, knife tricks, and premium steak.' },
            { slug: 'japanese-whiskey-guide', label: 'Drinks', title: 'Japanese Whiskey Guide: Top Bottles', desc: 'Pair his meal with world-class Japanese whiskey at the bar.' },
        ]
    },
    'family-gatherings': {
        sectionTitle: 'Plan Your Family Get-Together',
        articles: [
            { slug: 'large-group-dining', label: 'Group Dining', title: 'Large Group Dining: Tips for Party Planning', desc: 'Expert tips for organizing family dinners everyone will enjoy.' },
            { slug: 'hibachi-menu-guide', label: 'Menu Guide', title: 'Hibachi Menu Guide: What to Order', desc: 'Help everyone in the family find their perfect hibachi order.' },
        ]
    },
    'holiday-parties': {
        sectionTitle: 'Holiday Party Planning Reads',
        articles: [
            { slug: 'jinbeh-catering-services', label: 'Catering', title: 'Jinbeh Catering for Holiday Events', desc: 'Full-service Japanese catering that makes holiday entertaining effortless.' },
            { slug: 'best-happy-hour-frisco-tx', label: 'Happy Hour', title: 'Best Happy Hour in Frisco TX', desc: 'Start the festivities early with DFW\'s best happy hour deals.' },
        ]
    },
    'christmas': {
        sectionTitle: 'Make Your Christmas Dinner Memorable',
        articles: [
            { slug: 'hibachi-dining-experience', label: 'Hibachi', title: 'The Hibachi Dining Experience', desc: 'Skip the usual holiday dinner — give the family a hibachi show they\'ll never forget.' },
            { slug: 'sake-pairing-guide', label: 'Drinks', title: 'Sake Pairing Guide: Perfect Matches', desc: 'Pair your Christmas feast with premium sake for an elevated celebration.' },
        ]
    },
    'diwali': {
        sectionTitle: 'Celebrate Diwali Over Great Food',
        articles: [
            { slug: 'group-dining-venues', label: 'Venues', title: 'Best Group Dining Venues in DFW', desc: 'Gather your friends and family for a festive Diwali dinner together.' },
            { slug: 'japanese-cocktails', label: 'Cocktails', title: 'Japanese Cocktails: Classic & Creative', desc: 'Toast to the festival of lights with one of our signature cocktails.' },
        ]
    },
    'lunar-new-year': {
        sectionTitle: 'Lunar New Year Dining Inspiration',
        articles: [
            { slug: 'popular-japanese-culture', label: 'Culture', title: 'Popular Japanese Culture: Food & Traditions', desc: 'Explore how Japanese traditions celebrate the new year with food and ceremony.' },
            { slug: 'types-of-sake-explained', label: 'Sake Guide', title: 'Types of Sake Explained', desc: 'Ring in the new year with the perfect celebratory sake.' },
        ]
    },
    'mid-autumn-festival': {
        sectionTitle: 'Celebrate with Japanese Cuisine',
        articles: [
            { slug: 'popular-japanese-culture', label: 'Culture', title: 'Popular Japanese Culture: Food & Traditions', desc: 'Discover the rich culinary traditions behind Asian harvest celebrations.' },
            { slug: 'japanese-beverages-guide', label: 'Beverages', title: 'Japanese Drinks: Sake, Beer & Beyond', desc: 'Complete your festival celebration with authentic Japanese beverages.' },
        ]
    },
    'asian-restaurant-month': {
        sectionTitle: 'Explore Japanese Cuisine',
        articles: [
            { slug: 'best-sushi-frisco', label: 'Sushi Guide', title: 'Best Sushi in Frisco TX', desc: 'Discover why Jinbeh is a top sushi destination near Stonebriar Centre.' },
            { slug: 'types-of-sushi', label: 'Sushi 101', title: 'Types of Sushi: Complete Guide', desc: 'From nigiri to rolls — explore every style of sushi you can try at Jinbeh.' },
        ]
    },
};

let added = 0;
let skipped = 0;
let errors = [];

for (const [slug, config] of Object.entries(crossLinks)) {
    const fp = path.join(celebDir, slug, 'page.tsx');
    if (!fs.existsSync(fp)) {
        errors.push(`${slug}: file not found`);
        continue;
    }

    let content = fs.readFileSync(fp, 'utf-8');

    // Skip if already has blog cross-links
    if (content.includes('/blog/') && content.match(/\/blog\//g).length >= 2) {
        skipped++;
        console.log(`SKIP: ${slug} (already has blog links)`);
        continue;
    }

    // Build the cross-link section JSX
    const section = `
        {/* Related Blog Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center">
              ${config.sectionTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/blog/${config.articles[0].slug}" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">${config.articles[0].label}</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  ${config.articles[0].title}
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">${config.articles[0].desc}</p>
              </Link>
              <Link href="/blog/${config.articles[1].slug}" className="group block bg-warm-ivory rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-accent-red font-medium uppercase tracking-wider">${config.articles[1].label}</span>
                <h3 className="font-heading text-lg font-semibold text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                  ${config.articles[1].title}
                </h3>
                <p className="text-sm text-charcoal/70 mt-2">${config.articles[1].desc}</p>
              </Link>
            </div>
          </div>
        </section>`;

    // Find insertion point: before "Other Celebrations" or before </main> or before <Footer
    let insertPoint = -1;

    // Try: before "Other Celebrations" section
    const otherCelebIdx = content.indexOf('{/* Other Celebrations');
    if (otherCelebIdx !== -1) {
        // Find the <section before the comment
        const beforeComment = content.substring(0, otherCelebIdx);
        const lastSectionTag = beforeComment.lastIndexOf('<section');
        if (lastSectionTag !== -1) {
            // Insert before the Other Celebrations <section  
            // But we need the whitespace-correct position. Insert just before the section tag
            insertPoint = lastSectionTag;
        }
    }

    // Fallback: before </main>
    if (insertPoint === -1) {
        const mainCloseIdx = content.lastIndexOf('</main>');
        if (mainCloseIdx !== -1) {
            insertPoint = mainCloseIdx;
        }
    }

    // Fallback: before <Footer
    if (insertPoint === -1) {
        const footerIdx = content.lastIndexOf('<Footer');
        if (footerIdx !== -1) {
            insertPoint = footerIdx;
        }
    }

    if (insertPoint === -1) {
        errors.push(`${slug}: could not find insertion point`);
        continue;
    }

    content = content.substring(0, insertPoint) + section + '\n\n        ' + content.substring(insertPoint);
    fs.writeFileSync(fp, content, 'utf-8');
    added++;
    console.log(`ADDED: ${slug} → ${config.articles.map(a => a.slug).join(', ')}`);
}

console.log(`\n=== Results ===`);
console.log(`Added: ${added}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors.length}`);
errors.forEach(e => console.log(`  ${e}`));
