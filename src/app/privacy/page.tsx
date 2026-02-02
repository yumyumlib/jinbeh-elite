import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Jinbeh Japanese Restaurant",
  description: "Privacy policy for Jinbeh Japanese Restaurant. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-charcoal/80">
            <p className="text-sm text-charcoal/80 mb-8">Last updated: January 2026</p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Information We Collect
              </h2>
              <p>
                When you visit Jinbeh Japanese Restaurant or use our services, we may collect
                information you provide directly, such as your name, phone number, and email
                address when making reservations. We also collect information automatically
                through cookies and similar technologies when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Process and manage your reservations</li>
                <li>Send confirmation emails and reminders</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our services and customer experience</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share information with service providers who assist us in operating
                our website and conducting our business, subject to confidentiality agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Cookies and Tracking
              </h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can choose
                to disable cookies through your browser settings, though this may affect
                certain website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal information.
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Jinbeh Japanese Restaurant</strong><br />
                2693 Preston Rd Suite 1040<br />
                Frisco, TX 75034<br />
                Phone: (214) 619-1200
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                any changes by posting the new Privacy Policy on this page with an updated
                revision date.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
