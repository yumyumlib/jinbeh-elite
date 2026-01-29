import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Jinbeh Japanese Restaurant",
  description: "Terms of Service for Jinbeh Japanese Restaurant website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-charcoal">
            JINBEH
          </Link>
          <Link
            href="/frisco#reserve"
            className="bg-accent-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-red-hover transition-colors"
          >
            Reserve Now
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-warm-ivory pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-charcoal/80">
            <p className="text-sm text-charcoal/60 mb-8">Last updated: January 2026</p>

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
                Phone: (214) 618-9888
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
