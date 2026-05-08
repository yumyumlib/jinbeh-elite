import type { Metadata } from "next";
import Link from "next/link";
import FeedbackForm from "@/components/FeedbackForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { RevealSection } from "@/components/MagicUI";

export const metadata: Metadata = {
  title: {
    absolute: "Share Your Feedback — Jinbeh Lewisville | Japanese Restaurant",
  },
  description:
    "Tell us about your experience at Jinbeh Japanese Restaurant in Lewisville, TX. Your feedback helps us serve you better. Hibachi, sushi, and more since 1988.",
  alternates: {
    canonical: "https://jinbeh.com/feedback/lewisville",
  },
  robots: { index: false, follow: true },
};

export default function LewisvilleFeedbackPage() {
  return (
    <main id="main-content" className="min-h-screen bg-warm-ivory">
      <div className="container mx-auto max-w-6xl">
        <BreadcrumbNav
          items={[
            { label: "Lewisville", href: "/lewisville" },
            { label: "Feedback" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <RevealSection>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              How Was Your Visit to Jinbeh Lewisville?
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We value every guest&apos;s experience. Whether you loved your
              hibachi show, savored our sushi, or have suggestions for
              improvement — we want to hear from you.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <FeedbackForm location="Lewisville" />
        </div>
      </section>

      {/* Contact Fallback */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <RevealSection>
            <p className="text-charcoal/70 mb-4">
              Prefer to talk to someone directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2144882224"
                className="inline-flex items-center gap-2 text-accent-red font-semibold hover:underline"
              >
                <span>📞</span> Call Lewisville: (214) 488-2224
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-accent-red transition-colors"
              >
                View All Contact Options →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
