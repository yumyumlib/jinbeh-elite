const fs = require('fs');
const path = require('path');

const seoMatrix = require('../src/data/seo-matrix.json');

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function generateCategoryPage(category, location) {
  const items = seoMatrix.menuItems[category.slug] || [];
  const otherLocation = location.slug === 'frisco' ? 'lewisville' : 'frisco';
  const otherLocationName = location.slug === 'frisco' ? 'Lewisville' : 'Frisco';
  const componentName = category.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + location.name + 'Page';

  const faqs = [
    {
      question: `What ${category.name.toLowerCase()} does Jinbeh ${location.name} serve?`,
      answer: `Jinbeh ${location.name} offers an extensive ${category.name.toLowerCase()} menu with ${items.length} options including favorites like ${items.slice(0, 3).map(i => i.name).join(', ')}, and more. All prepared fresh by our skilled chefs.`
    },
    {
      question: `What are the most popular ${category.name.toLowerCase()} at Jinbeh?`,
      answer: `Guest favorites include ${items.slice(0, 4).map(i => `${i.name} (${i.price})`).join(', ')}. These are consistently rated as the best ${category.name.toLowerCase()} in ${location.name}.`
    },
    {
      question: `Are reservations needed for ${category.name.toLowerCase()} at Jinbeh ${location.name}?`,
      answer: `Reservations are recommended, especially for ${category.slug === 'hibachi' ? 'hibachi dining' : 'dinner'}. Call ${location.phone} or book online. Walk-ins are welcome based on availability.`
    },
    {
      question: `Does Jinbeh ${location.name} offer ${category.name.toLowerCase()} for takeout?`,
      answer: `Yes! Most ${category.name.toLowerCase()} items are available for takeout and delivery. Call ${location.phone} or order online. ${category.slug === 'hibachi' ? 'Note: The hibachi show experience is dine-in only.' : ''}`
    },
    {
      question: `What are ${category.name.toLowerCase()} prices at Jinbeh ${location.name}?`,
      answer: `${category.name} prices range from ${items.reduce((min, i) => {const p = parseFloat(i.price.replace('$','').replace('Market','99')); return p < min ? p : min;}, 999).toFixed(2)} to ${items.reduce((max, i) => {const p = parseFloat(i.price.replace('$','').replace('Market','0')); return p > max ? p : max;}, 0).toFixed(2)}. See our full menu for complete pricing.`
    }
  ];

  const faqSchemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const menuSchemaObj = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": `${category.name} Menu - Jinbeh ${location.name}`,
    "description": `${category.name} menu at Jinbeh Japanese Restaurant in ${location.name}, TX`,
    "hasMenuSection": {
      "@type": "MenuSection",
      "name": category.name,
      "hasMenuItem": items.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('$', '').replace('Market', '0'),
          "priceCurrency": "USD"
        }
      }))
    }
  };

  const faqDetailsHtml = faqs.map(faq => `
                <details className="group border-b border-warm-ivory pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-medium text-charcoal pr-4">${escapeString(faq.question)}</h3>
                    <span className="text-accent-red group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70 leading-relaxed">
                    ${escapeString(faq.answer)}
                  </p>
                </details>`).join('');

  const itemCardsHtml = items.map(item => `
              <Link
                href="/${location.slug}/${category.slug}/${item.slug}"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-cedar-brown/20 to-deep-indigo/10 flex items-center justify-center">
                  <span className="text-4xl">${category.slug === 'hibachi' ? '🔥' : category.slug === 'sushi-rolls' ? '🍣' : category.slug === 'sashimi' ? '🐟' : category.slug === 'appetizers' ? '🥢' : '🍶'}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-accent-red transition-colors mb-2">
                    ${escapeString(item.name)}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                    ${escapeString(item.description)}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-accent-red">${item.price}</span>
                    <span className="text-deep-indigo group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>`).join('');

  const keywordsArray = [
    `${category.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `best ${category.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `${category.name.toLowerCase()} menu ${location.name.toLowerCase()}`,
    `jinbeh ${category.name.toLowerCase()}`,
    `japanese ${category.name.toLowerCase()} ${location.name.toLowerCase()}`,
    ...category.keywords
  ];

  return `import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "${category.name} Menu | Jinbeh ${location.name} Japanese Restaurant",
  description: "Explore Jinbeh ${location.name}'s ${category.name.toLowerCase()} menu. ${category.voice}. ${items.length} delicious options from ${items[0].name} to ${items[items.length-1].name}. ${location.neighborhood}.",
  keywords: ${JSON.stringify(keywordsArray)},
  openGraph: {
    title: "${category.name} Menu | Jinbeh ${location.name}",
    description: "${category.voice}. ${items.length} ${category.name.toLowerCase()} options at Jinbeh ${location.name}.",
    url: "https://jinbeh.com/${location.slug}/${category.slug}",
  },
  alternates: {
    canonical: "https://jinbeh.com/${location.slug}/${category.slug}",
  },
};

const menuSchema = ${JSON.stringify(menuSchemaObj, null, 2)};

const faqSchema = ${JSON.stringify(faqSchemaObj, null, 2)};

export default function ${componentName}() {
  return (
    <>
      <Header location="${location.slug}" />
      <main className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Breadcrumb */}
        <nav className="bg-white border-b border-warm-ivory-dark">
          <div className="container mx-auto px-6 py-3">
            <ol className="flex items-center gap-2 text-sm text-charcoal/60">
              <li><Link href="/" className="hover:text-accent-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/${location.slug}" className="hover:text-accent-red">${location.name}</Link></li>
              <li>/</li>
              <li><Link href="/${location.slug}/menu" className="hover:text-accent-red">Menu</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">${category.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                Jinbeh ${location.name} Menu
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                ${category.name}
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-8 max-w-2xl mx-auto">
                ${escapeString(category.voice)}. Explore our ${items.length} ${category.name.toLowerCase()} options,
                each crafted with care and the finest ingredients.
              </p>
              <Link
                href="/${location.slug}#reserve"
                className="inline-block bg-accent-red hover:bg-accent-red/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Reserve Your Table
              </Link>
            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Our ${category.name} Selection
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                ${items.length} options ranging from ${items.reduce((min, i) => {const p = parseFloat(i.price.replace('$','').replace('Market','99')); return p < min ? p : min;}, 999).toFixed(2)} to ${items.reduce((max, i) => {const p = parseFloat(i.price.replace('$','').replace('Market','0')); return p > max ? p : max;}, 0).toFixed(2)}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">${itemCardsHtml}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent-red to-deep-indigo rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Experience Our ${category.name}
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                ${location.tagline}. ${location.parking}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/${location.slug}#reserve"
                  className="bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Reserve a Table
                </Link>
                <a
                  href="tel:${location.phone.replace(/[^0-9]/g, '')}"
                  className="bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-4 font-semibold rounded-xl transition-colors"
                >
                  Call ${location.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                ${category.name} FAQ
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">${faqDetailsHtml}
              </div>
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              Explore More at Jinbeh ${location.name}
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              ${seoMatrix.categories.filter(c => c.slug !== category.slug).map(c => `
              <Link
                href="/${location.slug}/${c.slug}"
                className="block p-6 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">${c.slug === 'hibachi' ? '🔥' : c.slug === 'sushi-rolls' ? '🍣' : c.slug === 'sashimi' ? '🐟' : c.slug === 'appetizers' ? '🥢' : '🍶'}</span>
                <h3 className="font-heading font-bold text-charcoal">${c.name}</h3>
              </Link>`).join('')}
            </div>
          </div>
        </section>

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also serving ${category.name.toLowerCase()} at our{' '}
              <Link
                href="/${otherLocation}/${category.slug}"
                className="text-soft-gold hover:underline"
              >
                ${otherLocationName} location
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
`;
}

// Main execution
const baseDir = path.join(__dirname, '../src/app');
let pageCount = 0;

for (const location of seoMatrix.locations) {
  for (const category of seoMatrix.categories) {
    const pageDir = path.join(baseDir, location.slug, category.slug);
    const pagePath = path.join(pageDir, 'page.tsx');

    // Create directory if it doesn't exist
    fs.mkdirSync(pageDir, { recursive: true });

    // Generate and write page content
    const content = generateCategoryPage(category, location);
    fs.writeFileSync(pagePath, content);

    pageCount++;
    console.log('Created: /' + location.slug + '/' + category.slug);
  }
}

console.log('\n✓ Generated ' + pageCount + ' category pages');
