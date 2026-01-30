const fs = require('fs');
const path = require('path');

const seoMatrix = require('../src/data/seo-matrix.json');

function generateFAQs(item, category, location) {
  const faqs = {
    hibachi: [
      {
        question: `What is ${item.name} hibachi at Jinbeh ${location.name}?`,
        answer: `${item.name} at Jinbeh ${location.name} is ${item.description.toLowerCase()}. It's prepared tableside by our expert teppanyaki chefs with the famous onion volcano and entertaining knife skills. Priced at ${item.price}, it includes soup, salad, fried rice, and grilled vegetables.`
      },
      {
        question: `How is the ${item.name} prepared at Jinbeh?`,
        answer: `Our skilled hibachi chefs prepare ${item.name} on a 400°F teppanyaki grill right at your table. You'll experience the dramatic flames, precise knife work, and the famous onion volcano while your meal is cooked to perfection.`
      },
      {
        question: `What comes with ${item.name} hibachi dinner?`,
        answer: `Your ${item.name} hibachi dinner includes Japanese onion soup, house salad with ginger dressing, hibachi vegetables (zucchini, onions, mushrooms), fried rice, and your choice of dipping sauces. It's a complete dining experience.`
      },
      {
        question: `Is ${item.name} hibachi good for special occasions?`,
        answer: `Absolutely! ${item.name} is one of our most popular choices for birthdays, anniversaries, and celebrations. The interactive cooking show makes any meal memorable. Call ${location.phone} to reserve for your special event.`
      },
      {
        question: `Can I get ${item.name} hibachi for a group?`,
        answer: `Yes! Jinbeh ${location.name} specializes in group dining. Our hibachi tables seat 8-10 guests, perfect for sharing the ${item.name} experience together. ${location.neighborhood}.`
      }
    ],
    'sushi-rolls': [
      {
        question: `What is the ${item.name} at Jinbeh ${location.name}?`,
        answer: `The ${item.name} at Jinbeh is ${item.description.toLowerCase()}. Priced at ${item.price}, it's handcrafted by our sushi chefs using the freshest ingredients delivered daily.`
      },
      {
        question: `Is the ${item.name} made fresh?`,
        answer: `Yes! All sushi at Jinbeh ${location.name} is made to order. Our ${item.name} is prepared by skilled sushi chefs who slice, roll, and plate each piece with precision and artistry.`
      },
      {
        question: `What pairs well with ${item.name}?`,
        answer: `We recommend pairing ${item.name} with premium sake, Japanese beer (Sapporo, Asahi), or one of our signature cocktails. Our staff can suggest the perfect beverage pairing for your meal.`
      },
      {
        question: `Can I order ${item.name} for takeout?`,
        answer: `Yes! ${item.name} is available for takeout and delivery. For the freshest experience, we recommend dining in at our sushi bar. Call ${location.phone} to order.`
      },
      {
        question: `Is ${item.name} gluten-free?`,
        answer: `Some ingredients in ${item.name} may contain gluten. Please inform your server of any dietary restrictions and our chefs can accommodate most requests or suggest alternatives.`
      }
    ],
    sashimi: [
      {
        question: `How fresh is the ${item.name} at Jinbeh?`,
        answer: `Our ${item.name} is sourced from premium suppliers and delivered fresh multiple times per week. At Jinbeh ${location.name}, we take pride in serving only the highest-quality sashimi.`
      },
      {
        question: `What is ${item.name} sashimi?`,
        answer: `${item.name} at Jinbeh is ${item.description.toLowerCase()}. Priced at ${item.price}, it's served without rice, allowing you to experience the pure, clean flavor of premium fish.`
      },
      {
        question: `How should I eat ${item.name} sashimi?`,
        answer: `We recommend lightly dipping ${item.name} in soy sauce with a touch of wasabi. Let the natural flavors shine—great sashimi needs minimal accompaniment.`
      },
      {
        question: `Is ${item.name} sashimi safe to eat?`,
        answer: `Yes! Our ${item.name} is sushi-grade quality, properly stored at precise temperatures, and prepared by trained chefs. Jinbeh ${location.name} follows strict food safety protocols.`
      },
      {
        question: `Can I get ${item.name} as part of a platter?`,
        answer: `Absolutely! ${item.name} is available individually or as part of our Sashimi Deluxe Platter or Chirashi Bowl. Ask about our Omakase for the best selection.`
      }
    ],
    appetizers: [
      {
        question: `What is ${item.name} at Jinbeh?`,
        answer: `${item.name} at Jinbeh ${location.name} is ${item.description.toLowerCase()}. At ${item.price}, it's perfect for sharing while you wait for your hibachi or sushi.`
      },
      {
        question: `Is ${item.name} good for sharing?`,
        answer: `Yes! ${item.name} is designed for sharing. It's one of our most popular starters for groups dining at Jinbeh ${location.name}.`
      },
      {
        question: `Can I order ${item.name} for happy hour?`,
        answer: `Check our happy hour specials! Many appetizers including items similar to ${item.name} are featured during our happy hour. Call ${location.phone} for current specials.`
      },
      {
        question: `Is ${item.name} available for takeout?`,
        answer: `Yes, ${item.name} travels well for takeout. Call ${location.phone} directly or order online.`
      }
    ],
    cocktails: [
      {
        question: `What is the ${item.name} at Jinbeh?`,
        answer: `The ${item.name} at Jinbeh ${location.name} is ${item.description.toLowerCase()}. At ${item.price}, it's one of our signature bar offerings.`
      },
      {
        question: `Is ${item.name} available during happy hour?`,
        answer: `Many of our cocktails including options like ${item.name} are featured during happy hour at discounted prices. Visit Jinbeh ${location.name} for current happy hour specials.`
      },
      {
        question: `What food pairs with ${item.name}?`,
        answer: `${item.name} pairs beautifully with our sushi and appetizers. Our bartenders can suggest the perfect food pairing to complement your drink.`
      },
      {
        question: `Can I get ${item.name} at the bar?`,
        answer: `Yes! Jinbeh ${location.name} has a full bar where you can enjoy ${item.name} and watch our sushi chefs at work. No reservation needed for bar seating.`
      }
    ]
  };

  return faqs[category.slug] || [];
}

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function generatePage(item, category, location) {
  const faqs = generateFAQs(item, category, location);
  const otherLocation = location.slug === 'frisco' ? 'lewisville' : 'frisco';
  const otherLocationName = location.slug === 'frisco' ? 'Lewisville' : 'Frisco';

  const relatedItems = seoMatrix.menuItems[category.slug]
    .filter(i => i.slug !== item.slug)
    .slice(0, 4);

  const componentName = item.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + location.name + 'Page';

  const faqSchemaArray = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const menuItemSchemaObj = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "name": item.name,
    "description": item.description,
    "offers": {
      "@type": "Offer",
      "price": item.price.replace('$', '').replace('Market', '0'),
      "priceCurrency": "USD"
    },
    "menuAddOn": {
      "@type": "Restaurant",
      "name": "Jinbeh Japanese Restaurant - " + location.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": "TX"
      }
    }
  };

  const faqSchemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchemaArray
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

  const relatedItemsHtml = relatedItems.map(related => `
                  <Link
                    href="/${location.slug}/${category.slug}/${related.slug}"
                    className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center"
                  >
                    <h3 className="font-medium text-charcoal">${escapeString(related.name)}</h3>
                    <p className="text-sm text-accent-red font-bold mt-1">${related.price}</p>
                  </Link>`).join('');

  const keywordsArray = [
    item.name.toLowerCase(),
    `${item.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `${category.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `jinbeh ${item.name.toLowerCase()}`,
    `best ${category.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `japanese restaurant ${location.name.toLowerCase()}`,
    ...category.keywords
  ];

  const includesRow = category.slug === 'hibachi' ? `
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Includes</td>
                      <td className="py-4 text-right text-charcoal/80">Soup, Salad, Rice, Vegetables</td>
                    </tr>` : '';

  return `import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "${escapeString(item.name)} | Jinbeh ${location.name} ${category.name} Menu",
  description: "${escapeString(item.description)} Enjoy ${escapeString(item.name)} at Jinbeh Japanese Restaurant in ${location.name}, TX. ${escapeString(location.neighborhood)}. Call ${location.phone} to reserve.",
  keywords: ${JSON.stringify(keywordsArray)},
  openGraph: {
    title: "${escapeString(item.name)} | Jinbeh ${location.name}",
    description: "${escapeString(item.description)}",
    url: "https://jinbeh.com/${location.slug}/${category.slug}/${item.slug}",
  },
  alternates: {
    canonical: "https://jinbeh.com/${location.slug}/${category.slug}/${item.slug}",
  },
};

const menuItemSchema = ${JSON.stringify(menuItemSchemaObj, null, 2)};

const faqSchema = ${JSON.stringify(faqSchemaObj, null, 2)};

export default function ${componentName}() {
  return (
    <>
      <Header location="${location.slug}" />
      <main className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }}
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
              <li><Link href="/${location.slug}/${category.slug}" className="hover:text-accent-red">${category.name}</Link></li>
              <li>/</li>
              <li className="text-charcoal font-medium">${escapeString(item.name)}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
                ${category.name} • Jinbeh ${location.name}
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                ${escapeString(item.name)}
              </h1>
              <p className="text-xl text-warm-ivory/90 mb-4">
                ${escapeString(item.description)}
              </p>
              <p className="text-3xl font-bold text-soft-gold">
                ${item.price}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">

              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                  About ${escapeString(item.name)}
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Experience the exceptional ${escapeString(item.name)} at Jinbeh ${location.name}.
                  ${escapeString(item.description)} Our ${category.slug === 'hibachi' ? 'expert teppanyaki chefs prepare this dish tableside with entertaining flair' : 'skilled chefs craft this dish with precision and artistry'}.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  ${escapeString(location.neighborhood)}. ${escapeString(location.tagline)}.
                  Whether you&apos;re celebrating a special occasion or enjoying a night out,
                  ${escapeString(item.name)} is a guest favorite that delivers on both flavor and presentation.
                </p>
              </div>

              {/* Details Table */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  Details
                </h2>
                <table className="w-full">
                  <tbody className="divide-y divide-warm-ivory">
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Price</td>
                      <td className="py-4 text-right text-accent-red font-bold">${item.price}</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Category</td>
                      <td className="py-4 text-right text-charcoal/80">${category.name}</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Location</td>
                      <td className="py-4 text-right text-charcoal/80">Jinbeh ${location.name}</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium text-charcoal">Phone</td>
                      <td className="py-4 text-right">
                        <a href="tel:${location.phone.replace(/[^0-9]/g, '')}" className="text-accent-red hover:underline">
                          ${location.phone}
                        </a>
                      </td>
                    </tr>${includesRow}
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Ready to Try ${escapeString(item.name)}?
                </h2>
                <p className="text-white/90 mb-6">
                  Reserve your table at Jinbeh ${location.name} today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/${location.slug}#reserve"
                    className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-3 font-semibold rounded-xl"
                  >
                    Reserve a Table
                  </Link>
                  <a
                    href="tel:${location.phone.replace(/[^0-9]/g, '')}"
                    className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-3 font-semibold rounded-xl"
                  >
                    Call ${location.phone}
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">${faqDetailsHtml}
                </div>
              </div>

              {/* Related Items */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  More ${category.name} at Jinbeh ${location.name}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">${relatedItemsHtml}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/${location.slug}/${category.slug}"
                    className="text-deep-indigo hover:text-accent-red font-medium"
                  >
                    View All ${category.name} →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Cross-Location Link */}
        <section className="py-8 bg-charcoal text-white text-center">
          <div className="container mx-auto px-6">
            <p className="text-warm-ivory/80">
              Also available at our{' '}
              <Link
                href="/${otherLocation}/${category.slug}/${item.slug}"
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
    const items = seoMatrix.menuItems[category.slug];
    if (!items) continue;

    for (const item of items) {
      const pageDir = path.join(baseDir, location.slug, category.slug, item.slug);
      const pagePath = path.join(pageDir, 'page.tsx');

      // Create directory if it doesn't exist
      fs.mkdirSync(pageDir, { recursive: true });

      // Generate and write page content
      const content = generatePage(item, category, location);
      fs.writeFileSync(pagePath, content);

      pageCount++;
      console.log('Created: /' + location.slug + '/' + category.slug + '/' + item.slug);
    }
  }
}

console.log('\n✓ Generated ' + pageCount + ' menu item pages');
