import Link from "next/link";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  title: string;
  metaDescription: string;
  heroImage?: string;
  heroAlt?: string;
  category: string;
  categorySlug: string;
  publishDate: string;
  readTime: string;
  faqs?: FAQItem[];
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  metaDescription,
  heroImage,
  heroAlt,
  category,
  categorySlug,
  publishDate,
  readTime,
  faqs,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-soft-white border-b border-warm-ivory">
        <div className="container mx-auto px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-charcoal/60">
            <li>
              <Link href="/" className="hover:text-accent-red transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-accent-red transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/blog?category=${categorySlug}`}
                className="hover:text-accent-red transition-colors"
              >
                {category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-charcoal font-medium truncate max-w-[200px]">
              {title}
            </li>
          </ol>
        </div>
      </nav>

      <article className="bg-soft-white">
        {/* Hero Section */}
        <header className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href={`/blog?category=${categorySlug}`}
                className="bg-accent-red/10 text-accent-red px-4 py-1 rounded-full text-sm font-medium hover:bg-accent-red/20 transition-colors"
              >
                {category}
              </Link>
              <span className="text-charcoal/50 text-sm">{readTime}</span>
              <span className="text-charcoal/50 text-sm">•</span>
              <time className="text-charcoal/50 text-sm">{publishDate}</time>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-charcoal/70 leading-relaxed">
              {metaDescription}
            </p>
          </div>
        </header>

        {/* Hero Image */}
        {heroImage && (
          <div className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={heroImage}
                  alt={heroAlt || title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-charcoal max-w-none">
              {children}
            </div>

            {/* FAQ Section with Schema */}
            {faqs && faqs.length > 0 && (
              <section className="mt-16 pt-12 border-t border-warm-ivory">
                <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-warm-ivory/30 rounded-xl p-6"
                    >
                      <summary className="font-semibold text-lg text-charcoal cursor-pointer list-none flex items-center justify-between">
                        {faq.question}
                        <span className="text-accent-red group-open:rotate-180 transition-transform">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-charcoal/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="mt-16 bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-warm-ivory mb-4">
                Ready to Experience Jinbeh?
              </h2>
              <p className="text-warm-ivory/80 mb-8 max-w-2xl mx-auto">
                Join us for an unforgettable hibachi dinner and a show. Family-owned since 1988,
                serving North Texas with authentic Japanese cuisine and warm hospitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reservations"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent-red text-warm-ivory font-semibold rounded-lg hover:bg-accent-red/90 transition-colors"
                >
                  Make a Reservation
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 bg-warm-ivory/10 text-warm-ivory font-semibold rounded-lg hover:bg-warm-ivory/20 transition-colors border border-warm-ivory/30"
                >
                  View Our Menu
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href="/blog/types-of-sushi"
                  className="group bg-warm-ivory/30 rounded-xl p-6 hover:bg-warm-ivory/50 transition-colors"
                >
                  <span className="text-accent-red text-sm font-medium">
                    Japanese Cuisine
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                    Types of Sushi: Must-Try Varieties and Rolls
                  </h3>
                </Link>
                <Link
                  href="/blog/hibachi-birthday-party-ideas"
                  className="group bg-warm-ivory/30 rounded-xl p-6 hover:bg-warm-ivory/50 transition-colors"
                >
                  <span className="text-accent-red text-sm font-medium">
                    Celebrations
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                    Hibachi Birthday Party Ideas: Ultimate Guide
                  </h3>
                </Link>
                <Link
                  href="/blog/discover-teppanyaki"
                  className="group bg-warm-ivory/30 rounded-xl p-6 hover:bg-warm-ivory/50 transition-colors"
                >
                  <span className="text-accent-red text-sm font-medium">
                    Japanese Cuisine
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                    Discover Teppanyaki: A Japanese Culinary Art
                  </h3>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
