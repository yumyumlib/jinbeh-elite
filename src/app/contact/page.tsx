import Link from "next/link";
import type { Metadata } from "next";
import locations from "@/data/locations.json";
import { RevealSection } from "@/components/MagicUI";

import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Jinbeh | Reservations & Catering | Frisco & Lewisville",
    },
    description: "Contact Jinbeh Japanese Restaurant for reservations, catering, or feedback. Family-owned hibachi & sushi in Frisco and Lewisville TX. Call today!",
    keywords: ["jinbeh contact", "japanese restaurant phone", "jinbeh reservations", "jinbeh catering inquiry"],
    openGraph: {
        title: "Contact Jinbeh Japanese Restaurant",
        description: "Contact Jinbeh for reservations, catering, or feedback. Family-owned hibachi & sushi in Frisco and Lewisville TX.",
        url: "https://jinbeh.com/contact",
    images: [
      {
        url: "https://jinbeh.com/images/interior/JinbehFriscoTables.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Contact",
      },
    ],
        siteName: "Jinbeh Japanese Restaurant",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Contact Jinbeh Japanese Restaurant",
        description: "Contact Jinbeh for reservations, catering, or feedback. Family-owned hibachi & sushi in Frisco and Lewisville TX.",
    },
    alternates: {
        canonical: "https://jinbeh.com/contact",
    },
};

const frisco = locations.locations.frisco;
const lewisville = locations.locations.lewisville;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jinbeh.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://jinbeh.com/contact"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Jinbeh Japanese Restaurant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach Jinbeh Frisco at (214) 619-1200 or Jinbeh Lewisville at (214) 488-2224. You can also email us through the contact form on our website."
      }
    },
    {
      "@type": "Question",
      "name": "What are your restaurant hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both locations are open for lunch Mon-Fri 11am-2pm, Sat-Sun 11:30am-2:30pm. Dinner is Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm."
      }
    },
    {
      "@type": "Question",
      "name": "Do you accept walk-ins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, walk-ins are welcome at both locations! However, we recommend reservations for hibachi tables, especially on weekends and holidays."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Jinbeh restaurants located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh Frisco is at 2693 Preston Rd Suite 1040 near Stonebriar Centre. Jinbeh Lewisville is at 2440 S Stemmons Fwy #A near Vista Ridge Mall."
      }
    }
  ]
};

export default function ContactPage() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <div className="container mx-auto max-w-6xl">
        <BreadcrumbNav items={[{ label: "Contact" }]} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

            {/* Hero */}
            <section className="py-20 bg-charcoal text-white">
                <div className="container mx-auto px-6 text-center">
                    <RevealSection>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                            Contact Jinbeh
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Have a question about reservations, catering, or your next visit? We'd love to hear from you. Reach us by phone or stop by our <Link href="/frisco" className="text-soft-gold hover:underline">Frisco</Link> or <Link href="/lewisville" className="text-soft-gold hover:underline">Lewisville</Link> location.
                        </p>
                    </RevealSection>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Frisco */}
                        <RevealSection delay={100} direction="left">
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl">🏯</span>
                                    <h2 className="text-2xl font-heading font-bold text-charcoal">
                                        Jinbeh Frisco
                                    </h2>
                                </div>

                                <address className="not-italic text-charcoal/80 mb-6">
                                    <p className="font-medium text-charcoal">{frisco.address.street}</p>
                                    <p>{frisco.address.suite}</p>
                                    <p>{frisco.address.city}, {frisco.address.state} {frisco.address.zip}</p>
                                </address>

                                <div className="space-y-3 mb-6">
                                    <a
                                        href={`tel:${frisco.phoneClean}`}
                                        className="flex items-center gap-3 text-charcoal hover:text-accent-red transition-colors"
                                    >
                                        <span className="text-xl">📞</span>
                                        <span className="font-medium">{frisco.phone}</span>
                                    </a>
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={frisco.reservation.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn btn-primary text-center"
                                    >
                                        Reserve Table
                                    </a>
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${frisco.geo.latitude},${frisco.geo.longitude}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn bg-charcoal text-white hover:bg-charcoal-light text-center"
                                    >
                                        Directions
                                    </a>
                                </div>
                            </div>
                        </RevealSection>

                        {/* Lewisville */}
                        <RevealSection delay={200} direction="right">
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl">🍣</span>
                                    <h2 className="text-2xl font-heading font-bold text-charcoal">
                                        Jinbeh Lewisville
                                    </h2>
                                </div>

                                <address className="not-italic text-charcoal/80 mb-6">
                                    <p className="font-medium text-charcoal">{lewisville.address.street}</p>
                                    <p>{lewisville.address.suite}</p>
                                    <p>{lewisville.address.city}, {lewisville.address.state} {lewisville.address.zip}</p>
                                </address>

                                <div className="space-y-3 mb-6">
                                    <a
                                        href={`tel:${lewisville.phoneClean}`}
                                        className="flex items-center gap-3 text-charcoal hover:text-accent-red transition-colors"
                                    >
                                        <span className="text-xl">📞</span>
                                        <span className="font-medium">{lewisville.phone}</span>
                                    </a>
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={lewisville.reservation.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn btn-primary text-center"
                                    >
                                        Reserve Table
                                    </a>
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${lewisville.geo.latitude},${lewisville.geo.longitude}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn bg-charcoal text-white hover:bg-charcoal-light text-center"
                                    >
                                        Directions
                                    </a>
                                </div>
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <RevealSection>
                        <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
                            Quick Links
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                { icon: "📖", label: "View Menu", href: "/frisco/menu" },
                                { icon: "🎂", label: "Celebrations", href: "/celebrations" },
                                { icon: "🍴", label: "Catering", href: "/catering" },
                                { icon: "🎁", label: "Gift Cards", href: "/gift-cards" },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="bg-warm-ivory rounded-xl p-6 text-center hover:bg-warm-ivory-dark transition-colors group"
                                >
                                    <span className="text-3xl block mb-2">{link.icon}</span>
                                    <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors">
                                        {link.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Catering Inquiry CTA */}
            <section className="py-16 bg-gradient-to-r from-deep-indigo to-accent-red text-white">
                <div className="container mx-auto px-6 text-center">
                    <RevealSection>
                        <h2 className="text-3xl font-heading font-bold mb-4">
                            Planning a Special Event?
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            Our catering team brings the Jinbeh experience to your location.
                            Contact us for corporate events, weddings, and private parties.
                        </p>
                        <Link
                            href="/catering"
                            className="inline-block bg-white text-deep-indigo px-8 py-4 rounded-xl font-semibold hover:bg-warm-ivory transition-colors"
                        >
                            Learn About Catering
                        </Link>
                    </RevealSection>
                </div>
            
            <p className="mt-4 text-sm">
              <a href="/blog/japanese-restaurants-near-me" className="text-accent-red hover:underline">
                Related: Japanese Restaurants Near Me in DFW →
              </a>
            </p>
</section>
        </main>
    );
}
