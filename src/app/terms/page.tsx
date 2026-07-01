import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";
export const metadata: Metadata = {
  title: "Terms of Service | Jinbeh Japanese Restaurant",
  description: "Terms of Service for Jinbeh Japanese Restaurant website and services. Review our reservation policies, allergen information, and website usage guidelines.",
  openGraph: {
    title: "Terms of Service | Jinbeh Japanese Restaurant",
    description: "Terms of service for Jinbeh Japanese Restaurant website.",
    images: [
      {
        url: "https://jinbeh.com/images/interior/FriscoLocation_Bar_Front.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Restaurant — Terms of Service",
      },
    ],
  },
  keywords: ["jinbeh terms of service", "restaurant terms and conditions", "jinbeh reservation policy"],
  alternates: {
    canonical: "https://jinbeh.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "Terms of Service" }]} />
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-charcoal">
            JINBEH
          </Link>
          <Link
            href="/reservations"
            className="bg-accent-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-red-hover transition-colors"
          >
            Reserve Now
          </Link>
        </nav>
      </header>

      <main id="main-content" className="min-h-screen bg-warm-ivory pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-charcoal/80">
            <p className="text-sm text-charcoal/80 mb-8">Last updated: May 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Jinbeh Japanese Restaurant website, you accept
                and agree to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8" id="ai-assisted-content">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                AI-Assisted Content & Accuracy Disclaimer
              </h2>
              <p>
                Portions of this website &mdash; including blog posts, FAQ answers,
                location guides, menu descriptions, pricing summaries, hours of operation,
                and promotional copy &mdash; are drafted, edited, or maintained with the
                assistance of artificial intelligence (AI) tools. While we make reasonable
                efforts to keep this content accurate, current, and reflective of our
                operations, AI-assisted content may contain errors, may be out of date,
                or may not reflect the most recent changes to our menu, pricing, hours,
                special offers, or policies.
              </p>
              <p className="mt-4">
                AI-generated content may also contain <strong>fabricated details</strong> &mdash;
                facts, quotes, policies, menu items, awards, or claims that sound plausible
                but are not actually true. This is a known limitation of generative AI,
                often called &ldquo;hallucination.&rdquo; We make reasonable efforts to review
                AI-drafted content before publishing, but errors of this kind can slip through.
                <strong> If anything you read on this website surprises you or contradicts what
                you&rsquo;ve heard from us in person, please call to confirm before relying on it.</strong>
              </p>
              <p className="mt-4">
                Specifically, prices, drink and food specials, hours of operation, and
                limited-time promotions referenced anywhere on this site may change without
                notice. Item availability varies by location (Frisco vs. Lewisville) and by
                day. Photos may show items as previously presented and may not reflect the
                current plating, portion size, or ingredients.
              </p>
              <p className="mt-4">
                <strong>Before relying on any specific price, special, or availability,
                please call the restaurant to confirm:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Frisco: <CallLink href="tel:+12146191200" className="text-accent-red hover:underline">(214) 619-1200</CallLink></li>
                <li>Lewisville: <CallLink href="tel:+12144882224" className="text-accent-red hover:underline">(214) 488-2224</CallLink></li>
              </ul>
              <p className="mt-4">
                Pricing displayed on our official in-restaurant menus and on our official
                third-party ordering platforms (Toast, Uber Eats, Grubhub) supersedes any
                pricing displayed on this website. Jinbeh Japanese Restaurant is not
                responsible for losses, miscommunications, or expectations based on
                AI-assisted content that has not been confirmed with us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Reservations
              </h2>
              <p>
                Reservations made through our website or third-party platforms are subject
                to availability. We recommend arriving on time for your reservation. Parties
                arriving more than 15 minutes late may have their reservation released.
              </p>
              <p className="mt-4">
                For large parties or special events, please contact the restaurant directly
                to discuss arrangements and any deposits that may be required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Menu and Pricing
              </h2>
              <p>
                Menu items and prices are subject to change without notice. While we strive
                to keep our website updated, the menu and prices displayed in our restaurant
                shall prevail in case of any discrepancy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Allergen Information
              </h2>
              <p>
                Our menu items may contain allergens including but not limited to shellfish,
                fish, soy, gluten, eggs, and sesame. Please inform your server of any
                allergies before ordering. While we take precautions, we cannot guarantee
                that our food is completely free from allergens due to cross-contamination
                in our kitchen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, images, and
                software, is the property of Jinbeh Japanese Restaurant and is protected
                by copyright laws. You may not reproduce, distribute, or create derivative
                works without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                User Conduct
              </h2>
              <p>
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Use the site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Submit false or misleading information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Limitation of Liability
              </h2>
              <p>
                Jinbeh Japanese Restaurant shall not be liable for any direct, indirect,
                incidental, or consequential damages resulting from your use of our website
                or services. We do not warrant that the website will be error-free or
                uninterrupted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance
                with the laws of the State of Texas, without regard to its conflict of
                law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Jinbeh Japanese Restaurant</strong><br />
                2693 Preston Rd Suite 1040<br />
                Frisco, TX 75034<br />
                Phone: (214) 619-1200
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
