import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Accessibility | Jinbeh Japanese Restaurant",
  description: "Accessibility statement for Jinbeh Japanese Restaurant. We are committed to ensuring our website and restaurants are accessible to everyone.",
};

export default function AccessibilityPage() {
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
            Accessibility Statement
          </h1>

          <div className="prose prose-lg max-w-none text-charcoal/80">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Our Commitment
              </h2>
              <p>
                Jinbeh Japanese Restaurant is committed to ensuring digital accessibility
                for people with disabilities. We are continually improving the user
                experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Website Accessibility Features
              </h2>
              <p>Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Semantic HTML structure for screen reader compatibility</li>
                <li>Alt text descriptions for all meaningful images</li>
                <li>Sufficient color contrast for readability</li>
                <li>Keyboard navigation support</li>
                <li>Responsive design for various devices and screen sizes</li>
                <li>Clear and consistent navigation</li>
                <li>Skip navigation links</li>
                <li>Form labels and error messages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Restaurant Accessibility
              </h2>
              <p>
                Both of our restaurant locations are committed to physical accessibility:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Wheelchair accessible entrances</li>
                <li>Accessible restrooms</li>
                <li>Accessible seating options</li>
                <li>Service animals welcome</li>
              </ul>
              <p className="mt-4">
                Please call ahead if you have specific accessibility needs, and we will
                do our best to accommodate you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Conformance Status
              </h2>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1
                Level AA standards. We recognize that accessibility is an ongoing effort,
                and we continue to work toward improving our website&apos;s accessibility.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Feedback
              </h2>
              <p>
                We welcome your feedback on the accessibility of our website and
                restaurants. If you encounter accessibility barriers or have suggestions
                for improvement, please contact us:
              </p>
              <p className="mt-4">
                <strong>Phone:</strong> (214) 619-1200 (Frisco) or (214) 488-2224 (Lewisville)<br />
                <strong>Email:</strong> Contact us through our website
              </p>
              <p className="mt-4">
                We try to respond to accessibility feedback within 3-5 business days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Assistance
              </h2>
              <p>
                If you need assistance with any aspect of our website or services, please
                do not hesitate to contact us. We are happy to help make your experience
                with Jinbeh as enjoyable as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Third-Party Content
              </h2>
              <p>
                Our website may include content from third-party sources or links to
                external websites. While we strive to choose accessible third-party
                content, we cannot guarantee the accessibility of content we do not control.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
